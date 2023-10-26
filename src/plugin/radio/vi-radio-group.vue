<template>
  <div :class="className" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="ViRadioGroup">
import { computed, provide,ref,onMounted } from 'vue'
const emit = defineEmits(['update:modelValue', 'change'])
interface Props {
  modelValue: any
  size?: '' | 'default' | 'small' | 'large'
  disabled?: boolean
  textColor?: string
  fill?: string
  name?: string
}
provide(
  'name',
  computed(() => {
    return props.name||name.value
  })
)
provide(
  'active',
  computed(() => props.modelValue)
)
provide('nodeClick', (e: any) => {
  if (e !== props.modelValue) {
    emit('update:modelValue', e)
    emit('change', e)
  }
})
const name=ref("")
onMounted(()=>{
  name.value = 'vi-radio-' + Math.random().toString(36)
})
const props = withDefaults(defineProps<Props>(), {
  size: '',
  disabled: false
})
const className = computed(() => {
  let nameList = ['vi-radio-group']
  return nameList
})
const style = computed(() => {
  let styleList = {}
  return styleList
})
</script>

<style lang="scss" scoped>
.vi-radio-group {
  --vi-radio-color: var(--vi-color-grey-4);
  --vi-radio-fill-color: var(--vi-color-grey-4);
  --vi-active-radio-color: var(--vi-color-primary);
  --vi-active-radio-fill-color: var(--vi-color-primary);
}
</style>
