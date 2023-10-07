<template>
  <div :class="className" @click="colorChange" :style="style">
  <div class="vi-switch-point"></div>
  </div>
</template>
  
<script setup lang='ts' name="ViSwitch">

import { computed } from 'vue'
const emit = defineEmits(['update:modelValue','change'])
interface Props {
  modelValue: boolean,
  closeColor?: string,
  openColor?: string,
  pointColor?: string,
  size?: 'default' | 'large' | 'small' ,
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  closeColor: '',
  openColor: '',
  pointColor: '',
  size: 'default',
  disabled: false
})
const colorChange = () => {
  if(props.disabled) return
  emit('change', !props.modelValue)
  emit('update:modelValue', !props.modelValue)
}
const className = computed(() => {
  let nameList = ['ViSwitch']
  props.modelValue ? nameList.push("is-open") : ''
  props.size ? nameList.push(`vi-switch-${props.size}`) : ''
  props.disabled ? nameList.push(`is-disabled`) : ''
  return nameList
})
const style = computed(() => {
  let styleList:any = {}
  props.closeColor? styleList['--vi-switch-close-color'] = props.closeColor : ''
  props.openColor? styleList['--vi-switch-open-color'] = props.openColor : ''
  props.pointColor? styleList['--vi-switch-point-color'] = props.pointColor : ''
  return styleList
})
</script>
  
<style lang="scss" scoped>
.ViSwitch {
  display: inline-block;
  position: relative;
  --vi-switch-width: 40px;
  --vi-switch-height: 20px;
  --vi-switch-padding: 2px;
  width: var(--vi-switch-width);
  height: var(--vi-switch-height);
  border-radius: calc(var(--vi-switch-height) / 2);
  transition: background-color .3s;
  --vi-switch-open-color: var(--vi-color-success);
  --vi-switch-close-color: #ccc;
  --vi-switch-point-color: #fff;
  background-color: var(--vi-switch-close-color);
  cursor: pointer;
  &.is-disabled {
    cursor: not-allowed;
    opacity: .6;
  }
  & .vi-switch-point {
    content: '';
    position: absolute;
    top: var(--vi-switch-padding);
    left: var(--vi-switch-padding);
    width: calc(var(--vi-switch-height) - calc(var(--vi-switch-padding) * 2));
    height: calc(var(--vi-switch-height) - calc(var(--vi-switch-padding) * 2));
    border-radius: 50%;
    background-color: var(--vi-switch-point-color);
    transition: all .3s;
  }

  &.is-open {
    background-color: var(--vi-switch-open-color);

    & .vi-switch-point {
      left: calc(var(--vi-switch-width) - var(--vi-switch-height) + var(--vi-switch-padding));
    }
  }
  &.vi-switch-small {
    --vi-switch-width: 30px;
    --vi-switch-height: 16px;
    --vi-switch-padding: 2px;
  }
  &.vi-switch-large {
    --vi-switch-width: 50px;
    --vi-switch-height: 24px;
    --vi-switch-padding: 2px;
  }

}</style>