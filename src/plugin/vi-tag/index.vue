<template>
  <div :class="className" :style="style">
    <div class="vi-tag-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="ViTag">
import { computed } from 'vue'
interface Props {
  type?: string
  plain?: boolean
  size?: '' | 'default' | 'small' | 'large'
}
const props = withDefaults(defineProps<Props>(), {
  type: '',
  plain: false,
  size: ''
})
const className = computed(() => {
  let nameList = ['vi-tag']
  props.type ? nameList.push(`vi-tag-${props.type}`) : ''
  props.plain ? nameList.push(`is-plain`) : ''
  props.size ? nameList.push(`vi-tag-${props.size}`) : ''
  return nameList
})
const style = computed(() => {
  let styleList = {}
  return styleList
})
</script>

<style lang="scss" scoped>
.vi-tag {
  --vi-tag-height: 24px;
  --vi-tag-font-size: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  box-sizing: border-box;
  height: var(--vi-tag-height);
  padding: 0 9px;
  color: var(--vi-tag-color);
  background-color: var(--vi-tag-bgcolor);
  font-size: var(--vi-tag-font-size);
  border: 1px solid var(--vi-tag-border-color);
  border-radius: 4px;
  margin: 0 0.25rem;
  cursor: pointer;
  .vi-tag-inner {
    line-height: 1em;
    height: 1em;
  }
  &.vi-tag-small {
    --vi-tag-height: 20px;
    padding: 0 7px;
    font-size: 12px;
  }

  &.vi-tag-large {
    --vi-tag-height: 32px;
    padding: 0 11px;
  }
  @each $key, $color in $colors {
    &.vi-tag-#{$key} {
      --vi-tag-color: #fff;
      --vi-tag-bgcolor: var(--vi-color-#{$key});
      --vi-tag-border-color: var(--vi-color-#{$key});
      --vi-tag-disable-color: var(--vi-button-color);
      --vi-tag-disable-bgcolor: var(--vi-color-light-#{$key}-2);
      --vi-tag-disable-border-color: var(--vi-color-light-#{$key}-2);
      --vi-tag-hover-bgcolor: var(--vi-color-light-#{$key}-1);
      --vi-tag-hover-color: var(--vi-button-color);
      --vi-tag-active-bgcolor: var(--vi-color-dark-#{$key}-1);
      --vi-tag-active-color: var(--vi-button-color);
      &.is-plain {
        --vi-tag-bgcolor: var(--vi-color-light-#{$key}-8);
        --vi-tag-color: var(--vi-color-#{$key});
        --vi-tag-hover-bgcolor: var(--vi-color-#{$key});
        --vi-tag-hover-color: #fff;
        --vi-tag-active-bgcolor: var(--vi-color-dark-#{$key}-1);
        --vi-tag-active-color: #fff;
        --vi-tag-disable-bgcolor: var(--vi-color-light-#{$key}-9);
        --vi-tag-disable-color: var(--vi-color-light-#{$key}-1);
      }
    }
  }
}
</style>
