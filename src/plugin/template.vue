<template>
  <div :class="className" :style="style">
      <slot></slot>
  </div>
</template>

<script setup lang='ts' name="temp">
import { computed } from 'vue'
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
</script>

<style lang="scss" scoped>

</style>