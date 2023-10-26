<template>
  <div :class="className" :style="style">
      <slot></slot>
  </div>
</template>

<script setup lang='ts' name="temp">
import { computed,useSlots } from 'vue'
const uSlots=useSlots();
interface Props {
 
}
const props = withDefaults(defineProps<Props>(),{
 
} )
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

</style>