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
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="ViMenu">
import { computed, useSlots, Comment, type VNode } from 'vue'
import ViMenuItem from './item.vue'
const uSlots = useSlots()
interface Tree {
  id: string
  label: string
  children?: Tree[]
}
interface Props {
  data?: Tree[]
}
const props = withDefaults(defineProps<Props>(), {
  // data:[]
})
const className = computed(() => {
  let nameList = ['vi-menu']
  return nameList
})
const style = computed(() => {
  let styleList = {}
  return styleList
})
const isSlot = computed(() => {
  if (uSlots && uSlots.default) {
    const hasOnlyComments = uSlots.default().every((node) => {
      return node.type === Comment
    })
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
}
</style>
