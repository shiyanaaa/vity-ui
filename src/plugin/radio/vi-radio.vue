<template>
  <label :class="className" :style="style" :for="id">
    <span class="vi-radio-point">
      <input
        class="vi-radio-point-inner"
        :checked="active === props.label"
        :id="id"
        type="radio"
        @change="updateActive"
        :name="name"
      />
    </span>
    <span class="vi-radio-inner">
      <slot v-if="isSlot"></slot>
    </span>
  </label>
</template>

<script setup lang="ts" name="ViRadio">
import { computed, useSlots, ref, inject, onMounted } from 'vue'
const nodeClick = inject('nodeClick') as Function
const id = ref('')
const uSlots = useSlots()
const active = ref(inject('active'))
const name = ref(inject('name',""))
interface Props {
  label: any
  disabled?: boolean
  border?: boolean
  size?: '' | 'default' | 'small' | 'large'
  textColor?: string
  fill?: string
}
const props = withDefaults(defineProps<Props>(), {
  border: false,
  size: '',
  disabled: false
})
const className = computed(() => {
  let nameList = ['vi-radio']
  active.value === props.label ? nameList.push('is-active') : ''
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
const updateActive = () => {
  nodeClick(props.label)
}
onMounted(() => {
  id.value = 'vi-radio-id-' + Math.random().toString(36)
})
</script>

<style lang="scss" scoped>
.vi-radio {
  color: var(--vi-radio-color);
  --vi-radio-background:transparent;
  --vi-radio-border-color:var(--vi-color-grey-7);
  --vi-radio-scale:scale(0);
  display:inline-flex;
  align-items: center;
  cursor: pointer;
  &.is-active {
    --vi-radio-color: var(--vi-active-radio-color);
    --vi-radio-background:var(--vi-active-radio-color);
    --vi-radio-border-color:var(--vi-active-radio-color);
    --vi-radio-scale:scale(1);
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
  .vi-radio-point {
    cursor: pointer;
    width: 14px;
    height: 14px;
    background-color:var(--vi-radio-background);
    border-radius: 100%;
    position: relative;
    display: inline-block;
    cursor: pointer;
    border:1px solid var(--vi-radio-border-color);
    &:after {
      cursor: pointer;
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) var(--vi-radio-scale);
      background-color: var(--vi-color-white);
      width: 4px;
      height: 4px;
      border-radius:100%;
      transition:all .3s;
    }
    .vi-radio-point-inner {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      margin: 0;
    }
  }
  .vi-radio-inner {
    user-select: none;
    padding-left:5px;
  }
}
</style>
