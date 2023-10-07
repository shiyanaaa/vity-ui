<template>
  <div :class="className" :style="style">
    <slot v-if="isSlot"></slot>
    <div v-if="props.data && !isSlot">
      <ViMenuItem v-for="item in props.data" showChildren :label="item.label" :children="item.children" :key="item.id" />
    </div>
  </div>
</template>
  
<script setup lang='ts' name="ViMenu">
import { computed, useSlots,Comment } from 'vue'
import ViMenuItem from './item.vue';
const uSlots = useSlots()
interface Tree {
  id: string,
  label: string,
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
//判断是否传入默认插槽
const isSlot = computed(() => {
  if (uSlots && uSlots.default) {
    
    const hasOnlyComments = uSlots.default().every(node => {
      console.log(node.type , Comment);
      
      return node.type === Comment
    }
    )

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
  
<style lang="scss" scoped></style>