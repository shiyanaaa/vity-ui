<template>
  <div :class="className" :style="style" @click="nodeClickHandle">
    <div class="vi-option-inner">
      <slot v-if="isSlot"></slot>
      <div v-else>{{ props.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts" name="ViOption">
import { computed, useSlots, Comment, inject, ref } from 'vue'
const active = ref(inject('active'))
const nodeClick = inject('nodeClick') as Function
const changeLabel = inject('changeLabel') as Function
const uSlots = useSlots()
interface Props {
  label: string
  value: any
  data?: any
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false
})
const isActive = computed(() => {
  if (active.value === props.value) {
    if (isSlot&&uSlots && uSlots.default) changeLabel(uSlots.default()[0].children)
    else
    changeLabel(props.label)
  }
  return active.value === props.value
})
const className = computed(() => {
  let nameList = ['vi-option']
  isActive.value ? nameList.push('is-active') : nameList.push('is-close')
  props.disabled ? nameList.push('is-disabled') : ''
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
const nodeClickHandle = () => {
  if (props.disabled) return
  nodeClick(props.value)
}
</script>

<style lang="scss" scoped>
.vi-option {
  position: relative;
  z-index: 1;
  --vi-option-hover-color: var(--vi-color-primary);
  --vi-option-hover-background-color: var(--vi-color-light-primary-9);
  --vi-option-active-color: var(--vi-color-primary);

  --vi-option-color: var();
  --vi-option-background-color: var();
  color: var(--vi-option-color);
  background-color: var(--vi-option-background-color);
  padding: 0 10px;
  user-select: none;
  cursor: pointer;
  &:hover {
    --vi-option-color: var(--vi-option-active-color);
    --vi-option-background-color: var(--vi-option-hover-background-color);
  }
  &.is-active {
    --vi-option-color: var(--vi-option-active-color);
    // --vi-option-background-color:var();
  }
  &.is-disabled {
    cursor: auto;
    --vi-option-color: #ccc;
    --vi-option-background-color: transparent;
  }
}
</style>
