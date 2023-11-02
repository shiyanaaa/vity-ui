<template>
  <div :class="className" :style="style">
    <img
      v-if="props.src && !errorFlag"
      @error="loadError"
      class="vi-avatar-inner"
      :src="props.src"
      :alt="props.alt"
    />
    <div v-else class="vi-avatar-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="ViAvatar">
import { computed, pushScopeId, useSlots, ref,watch } from 'vue'
const emit=defineEmits(['error'])
const uSlots = useSlots()
interface Props {
  size?: number | string
  src?: string
  shape?: '' | 'circle' | 'square'
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  alt?:string
}
const props = withDefaults(defineProps<Props>(), {
  size: 50,
  shape: '',
  fit: 'cover',
  alt:''
})
watch(()=>props.src,()=>{
    errorFlag.value=false;
})
const errorFlag = ref(false)
const className = computed(() => {
  let nameList = ['vi-avatar']
  props.shape ? nameList.push(`is-${props.shape}`) : ''
  return nameList
})
const style = computed(() => {
  let styleList: any = {}
  styleList['--vi-avatar-fit'] = props.fit;
  styleList['--vi-avatar-size'] = `${props.size}px`
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
const loadError = (e:Event) => {
  errorFlag.value = true
  emit('error',e);
}
</script>

<style lang="scss" scoped>
.vi-avatar {
  --vi-avatar-radius: 0;
  --vi-avatar-fit: cover;
  border-radius: var(--vi-avatar-radius);
  overflow: hidden;
  width: var(--vi-avatar-size);
  height: var(--vi-avatar-size);
  background-color: var(--vi-color-grey-8);
  color: var(--vi-color-white);

  &.is-circle {
    --vi-avatar-radius: 100%;
  }
  &.is-square {
    --vi-avatar-radius: 4px;
  }
  .vi-avatar-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--vi-avatar-size);
    height: var(--vi-avatar-size);
    object-fit: var(--vi-avatar-fit);
  }
}
</style>
