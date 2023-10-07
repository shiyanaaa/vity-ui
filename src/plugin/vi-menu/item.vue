<template>
  <div :class="className" :style="style" @click.stop="open=!open">
    {{ props.label }}
    <ViIcon v-if="isSlot || (showChildren && hasChild)" :name="iconName" />
    <div v-if="isSlot" v-show="open">
      <slot ></slot>
    </div>
    
    <div v-if="showChildren && hasChild" v-show="open">
      <ViMenuItem v-for="item in props.children" :children="item.children" :showChildren="props.showChildren"
        :label="item.label" :key="item.id"></ViMenuItem>
    </div>
  </div>
</template>

<script setup lang='ts' name="ViMenuItem">
import { computed, useSlots,Comment, ref } from 'vue'
import ViIcon from '../vi-icon/index.vue';
const uSlots = useSlots()
interface Props {
  label: string,
  showChildren?: boolean,
  children?: any,
  closeIcon?: string,
  openIcon?: string
}
const props = withDefaults(defineProps<Props>(), {
  showChildren: false,
  closeIcon: 'xiayiyeqianjinchakangengduo',
  openIcon: 'xiangxiazhankai'
})
const className = computed(() => {
  let nameList = ['vi-menu-item']
  return nameList
})
const style = computed(() => {
  let styleList = {}
  return styleList
})
const hasChild = computed(() => {
  return !!(props.children && props.children.length > 0)
})
const isSlot = computed(() => {
  if (uSlots && uSlots.default) {

    const hasOnlyComments = uSlots.default().every(node => {
      return node.type === Comment || (node.children&&node.children.length === 0)
    }
    )
    console.log(hasOnlyComments);
    
    if (hasOnlyComments) {
      return false
    }
    //从默认插槽中获取内容
    return true
  } else {
    return false
  }
})
const open=ref(false)
const iconName = computed(() => {
  return open.value ? props.openIcon : props.closeIcon
})
</script>

<style lang="scss" scoped></style>