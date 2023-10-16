<template>
  <div :class="selectClass">
    <div class="vi-select-option">
        <ViOption v-for="item in props.options" :key="item[props.prop.value]"></ViOption>
    </div>
  </div>
</template>

<script setup lang="ts" name="ViSelect">
import { computed, useSlots, Comment } from 'vue'
import ViOption from './vi-option.vue'
const uSlots = useSlots()
interface Prop {
  label?: string
  value?: string
}
interface Props {
  modelValue: any
  type?: 'default' | 'small' | 'large' | ''
  prop?: Prop
  options?: Array<any>
}
const props = withDefaults(defineProps<Props>(), {
  prop: () => {
    return { label: 'label', value: 'value' }
  },
  options: () => []
})
const emit = defineEmits(['update:modelValue'])
const selectStyle = computed(() => {
  return {}
})

const selectClass = computed(() => {
  let nameList = ['vi-select']
  props.type ? nameList.push(`vi-select-${props.type}`) : ''
  return nameList
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

<style scoped lang="scss">
.vi-select {
  --vi-select-height: var(--vi-height-default);
  --vi-select-width: 200px;
  --vi-select-border-color: #dcdfe6;
  --vi-select-border-radius: 4px;
  --vi-select-bg-color: #ffffff;
  --vi-select-hover-border-color: #c0c4cc;
  position: relative;
  font-size: 14px;
  width: var(--vi-select-width);
  line-height: var(--vi-select-height);
  height: var(--vi-select-height);
  display: inline-block;
  vertical-align: middle;
  background-color: #ccc;
  &.vi-select-small {
    --vi-select-height: var(--vi-height-small);
  }
  &.vi-select-large {
    --vi-select-height: var(--vi-height-large);
  }
}
</style>
