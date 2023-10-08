<template>
  <div :class="className" :style="style">
    <slot v-if="isSlot"></slot>
    <div v-if="props.data && !isSlot">
      <ViMenuItem
        :level="1"
        v-for="item in props.data"
        showChildren
        :label="item.label"
        :children="item.children"
        :key="item.id"
        :link="item.link"
        :index="item.index"
        :isGroup="item.isGroup"
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="ViMenu">
import { computed, useSlots, Comment,provide,ref, type VNode } from 'vue'
import ViMenuItem from './item.vue'
import { type Tree } from './type';
const emit=defineEmits(['update:modelValue'])
const uSlots = useSlots()
interface Props {
  modelValue:string,
  data?: Tree[],
  activeLink?:boolean,
  collapse?:boolean
}
provide(
  'activeIndex',
  computed(() => props.modelValue)
)
provide(
  'nodeClick',
  (e:string)=>{
    emit("update:modelValue",e);
  }
)
const props = withDefaults(defineProps<Props>(), {
  // data:[]
  activeLink:false,
  collapse:false
})
const className = computed(() => {
  let nameList = ['vi-menu']
  props.activeLink?nameList.push("vi-menu-active-link"):''
  return nameList
})
const style = computed(() => {
  let styleList = {}
  return styleList
})
const isSlot = computed(() => {
  if (uSlots && uSlots.default) {
    const hasOnlyComments = uSlots.default().every((node) => {
      return node.type === Comment || (node.children && node.children.length === 0)
    })
    if (hasOnlyComments) {
      return false
    }
    //从默认插槽中获取内容
    return true
  } else {
    return false
  }
})
</script>

<style lang="scss" scoped>
.vi-menu {
  --vi-menu-width: 250px;
  --vi-menu-height: 100%;
  width: var(--vi-menu-width);
  height: var(--vi-menu-height);
  --vi-menu-level: 0;
  box-shadow: 1px 0 1px #ccc;
  counter-reset: section;
  &.vi-menu-active-link{

  }
}
</style>
