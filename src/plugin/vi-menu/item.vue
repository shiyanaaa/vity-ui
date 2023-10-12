<template>
  <div :class="className" :style="style">
    <div
      v-if="!props.isGroup"
      class="vi-menu-item-inner"
      :class="{ 'no-child': !hasChild }"
      @click.stop="itemClick"
    >
      <span class="vi-menu-item-label">{{ props.label }}</span>
      <span class="vi-menu-item-right">
        <ViIcon v-if="isSlot || (showChildren && hasChild)" name="xiayiyeqianjinchakangengduo" />
      </span>
    </div>
    <div v-else class="vi-menu-item-group">
      <span class="vi-menu-item-group-label">{{ props.label }}</span>
    </div>
    <div class="vi-menu-child">
      <div v-if="isSlot" class="vi-menu-item-child">
        <slot></slot>
      </div>

      <div v-else-if="showChildren && hasChild" class="vi-menu-item-child">
        <ViMenuItem
          v-for="item in props.children"
          :children="item.children"
          :showChildren="props.showChildren"
          :label="item.label"
          :key="item.id"
          :level="props.level + 1"
          :link="item.link"
          :index="item.index"
          :isGroup="item.isGroup"
        ></ViMenuItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="ViMenuItem">
import { computed, useSlots, Comment, ref, inject, onMounted, watch, nextTick } from 'vue'
const activeIndex = ref(inject('activeIndex'))
const nodeClick = inject('nodeClick') as Function
const emit = defineEmits(['nodeClick'])
import ViIcon from '../vi-icon/index.vue'
const uSlots = useSlots()
const menuItem = ref<HTMLInputElement | null>(null)
interface Props {
  label: string
  showChildren?: boolean
  children?: any
  closeIcon?: string
  openIcon?: string
  level?: number
  link?: string
  index: string
  isGroup?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showChildren: false,
  closeIcon: 'xiayiyeqianjinchakangengduo',
  openIcon: 'xiangxiazhankai',
  level: 1,
  link: '',
  isGroup: false
})
const className = computed(() => {
  let nameList = ['vi-menu-item']
  open.value || props.isGroup ? nameList.push('is-open') : nameList.push('is-close')
  activeIndex.value === props.index ? nameList.push('is-active') : ''
  return nameList
})
const style = computed(() => {
  let styleList: any = {}
  styleList['--vi-menu-level'] = props.level || 1
  return styleList
})
const hasChild = computed(() => {
  return !!(props.children && props.children.length > 0)
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
const open = ref(false)
const iconName = computed(() => {
  return open.value ? props.openIcon : props.closeIcon
})
const itemClick = () => {
  nextTick(() => {
    !(isSlot.value || (props.showChildren && hasChild.value)) || (open.value = !open.value)
    isSlot.value || (props.showChildren && hasChild.value) || nodeClick(props.index)
  })
}
</script>

<style lang="scss" scoped>
.vi-menu-item {
  counter-increment: section;
  width: 100%;
  box-sizing: border-box;
  --vi-menu-item-right-rotate: rotateZ(0);
  --vi-menu-item-child-height: 0;
  --vi-menu-item-back-color: var(--vi-menu-back-color);
  --vi-menu-item-font-color: var(--vi-menu-font-color);

  &.is-active {
    // border:none;

    --vi-menu-item-back-color: var(--vi-menu-back-active-color);
    --vi-menu-item-font-color: var(--vi-menu-font-active-color);
    --vi-menu-item-border-left-color:var(--vi-menu-border-left-color, transparent);
    --vi-menu-item-border-right-color:var(--vi-menu-border-right-color, transparent);
  }
  &.is-open {
    --vi-menu-item-right-rotate: rotateZ(90deg);
    --vi-menu-item-child-height: auto;
    --vi-menu-item-fr: 1fr;
  }
  &.is-close {
    --vi-menu-item-right-rotate: rotateZ(0);
    --vi-menu-item-child-height: 0;
    --vi-menu-item-fr: 0fr;
  }
  .vi-menu-item-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    .vi-menu-item-group-label {
      white-space: nowrap;
      line-height: normal;
      font-size: 12px;
      color: #909399;
      padding-left: calc(10px * var(--vi-menu-level));
    }
  }
  .vi-menu-item-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    cursor: pointer;
    background-color: var(--vi-menu-item-back-color);
    transition: all 0.3s;
    border-left: var(--vi-menu-border-size,3px) solid var(--vi-menu-item-border-left-color, transparent);
    border-right: var(--vi-menu-border-size,3px) solid var(--vi-menu-item-border-right-color, transparent);
    .vi-menu-item-label {
      transition: color 0.3s;
      padding-left: calc(10px * var(--vi-menu-level));
      color: var(--vi-menu-item-font-color);
      flex: 1;
    }

    &.no-child:hover {
      --vi-menu-item-back-color: var(--vi-menu-back-active-color);
      --vi-menu-item-font-color: var(--vi-menu-font-active-color);
    }
    .vi-menu-item-right {
      display: flex;
      transform-origin: center;
      transform: var(--vi-menu-item-right-rotate);
      transition: all 0.3s;
    }
  }
  .vi-menu-child {
    transition: all 0.5s;
    overflow: hidden;
    display: grid;
    grid-template-rows: var(--vi-menu-item-fr);
  }
  .vi-menu-item-child {
    min-height: 0;
  }
}
</style>
