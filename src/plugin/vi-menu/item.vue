<template>
  <div :class="className" :style="style" >
    <div class="vi-menu-item-inner" @click.stop="itemClick">
      <span class="vi-menu-item-label">{{ props.label }}</span>
      <span class="vi-menu-item-right">
        <ViIcon v-if="isSlot || (showChildren && hasChild)" name="xiayiyeqianjinchakangengduo"  />
      </span>
      
    </div>

    <div v-if="isSlot" class="vi-menu-item-child">
      <slot></slot>
    </div>

    <div v-if="showChildren && hasChild" class="vi-menu-item-child">
      <ViMenuItem
        v-for="item in props.children"
        :children="item.children"
        :showChildren="props.showChildren"
        :label="item.label"
        :key="item.id"
        :level="props.level+1"
      ></ViMenuItem>
    </div>
  </div>
</template>

<script setup lang="ts" name="ViMenuItem">
import { computed, useSlots, Comment, ref } from 'vue'
import ViIcon from '../vi-icon/index.vue'
const uSlots = useSlots()
interface Props {
  label: string
  showChildren?: boolean
  children?: any
  closeIcon?: string
  openIcon?: string,
  level?:number
}
const props = withDefaults(defineProps<Props>(), {
  showChildren: false,
  closeIcon: 'xiayiyeqianjinchakangengduo',
  openIcon: 'xiangxiazhankai',
  level:1
})
const className = computed(() => {
  let nameList = ['vi-menu-item']
  open.value?nameList.push('is-open'):''
  return nameList
})
const style = computed(() => {
  let styleList:any = {}
  styleList['--vi-menu-level']=props.level||1
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
const itemClick=()=>{
  open.value = !open.value
}
</script>

<style lang="scss" scoped>
.vi-menu-item{
  counter-increment: section;
  width:100%;
  --vi-menu-item-right-rotate:rotateZ(0);
  --vi-menu-item-child-height:0;
  &.is-open{
    --vi-menu-item-right-rotate:rotateZ(90deg);
    --vi-menu-item-child-height:1000px;
  }
  .vi-menu-item-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
    cursor:pointer;
    .vi-menu-item-label{
      padding-left:calc(10px * var(--vi-menu-level));
    }
    &:hover{
      background-color:var(--vi-color-light-primary-9)
    }
    .vi-menu-item-right{
      display:flex;
      transform-origin:center;
      transform: var(--vi-menu-item-right-rotate) ;
      transition:all .3s;
    }
  }
  .vi-menu-item-child{
    transition:all .5s;
    max-height:var(--vi-menu-item-child-height);
    overflow:hidden;
  }
}
</style>
