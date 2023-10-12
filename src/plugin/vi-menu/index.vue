<template>
  <div :class="className" :style="style">
    <div v-if="isSlot" class="vi-menu-inner">
      <slot></slot>
    </div>

    <div v-if="props.data && !isSlot" class="vi-menu-inner">
      <ViMenuItem :level="1" v-for="item in props.data" showChildren :label="item.label" :children="item.children"
        :key="item.id" :link="item.link" :index="item.index" :isGroup="item.isGroup" />
    </div>
  </div>
</template>

<script setup lang="ts" name="ViMenu">
import { computed, useSlots, Comment, provide, ref, type VNode } from 'vue'
import ViMenuItem from './item.vue'
import { type Tree } from './type';
const emit = defineEmits(['update:modelValue'])
const uSlots = useSlots()
interface Props {
  modelValue: string,
  data?: Tree[],
  activeLink?: boolean,
  collapse?: boolean,
  activeFontColor?: string,
  activeBackColor?: string,
  fontColor?: string,
  backColor?: string,
  leftBorder?: boolean,
  rightBorder?: boolean,
  bottomBorder?: boolean,
  borderSize?: string,
  horizontal?:boolean
}
provide(
  'activeIndex',
  computed(() => props.modelValue)
)
provide(
  'horizontal',
  computed(() => props.horizontal)
)
provide(
  'nodeClick',
  (e: string) => {
    emit("update:modelValue", e);
  }
)
const resetFlag = ref(false)
provide(
  'reset',
  () => {
    resetFlag.value = !resetFlag.value;
  }
)
provide(
  'resetFlag',
  computed(() => resetFlag.value)
)
const props = withDefaults(defineProps<Props>(), {
  activeLink: false,
  collapse: false,
  leftBorder: false,
  rightBorder: false,
  bottomBorder:false,
  borderSize: '3px',
  horizontal:false
})
const className = computed(() => {
  let nameList = ['vi-menu']
  props.activeLink ? nameList.push("vi-menu-active-link") : ''
  props.horizontal?nameList.push(`vi-menu-horizontal`):''
  
  return nameList
})
const style = computed(() => {
  let styleList: any = {}
  props.activeFontColor ? (styleList['--vi-menu-font-active-color'] = props.activeFontColor) : ''
  props.activeBackColor ? (styleList['--vi-menu-back-active-color'] = props.activeBackColor) : ''
  props.fontColor ? (styleList['--vi-menu-font-color'] = props.fontColor) : ''
  props.backColor ? (styleList['--vi-menu-back-color'] = props.backColor) : ''
  props.rightBorder ? (styleList['--vi-menu-border-right-color'] = 'var(--vi-menu-font-active-color)') : ''
  props.leftBorder ? (styleList['--vi-menu-border-left-color'] = 'var(--vi-menu-font-active-color)') : ''
  props.bottomBorder ? (styleList['--vi-menu-border-bottom-color'] = 'var(--vi-menu-font-active-color)') : ''
  props.borderSize ? (styleList['--vi-menu-border-size'] = props.borderSize) : ''
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
.vi-menu {
  --vi-menu-width: 250px;
  --vi-menu-height: 100%;
  --vi-menu-back-active-color: var(--vi-color-light-primary-9);
  --vi-menu-back-color: #fff;
  --vi-menu-font-active-color: var(--vi-color-primary);
  --vi-menu-font-color: #000;
  --vi-menu-border-left: 0;
  --vi-menu-border-right: 0;
  width: var(--vi-menu-width);
  height: var(--vi-menu-height);
  --vi-menu-level: 0;
  box-shadow: 1px 0 1px #ccc;
  counter-reset: section;

  .vi-menu-inner {
    
  }

  &.vi-menu-horizontal {
    --vi-menu-width: 100%;
    --vi-menu-height: 50px;

    .vi-menu-inner {
      display: flex;
      height: 100%;
    }
  }

}
</style>
