<template>
  <div :class="selectClass">
    <!-- <div class="vi-select-inner" @click="clickHandle">111</div> -->
    <ViInput
      v-model="showLabel"
      :size="props.size"
      selectInput
      @blur="blurHandle"
      :placeholder="props.placeholder"
      :focus="open"
      @selectClick="boxClick"
      :disabled="props.disabled"
    ></ViInput>
    <div :class="optionsClass">
      <div class="vi-select-option-inner" v-if="isSlot">
      <slot></slot>
      </div>
      <div class="vi-select-option-inner" v-else-if="data.length">
        <ViOption
          v-for="item in data"
          :label="item.label"
          :value="item.value"
          :data="item.data"
          :key="item.value"
        ></ViOption>
      </div>
      <div class="vi-select-option-inner" v-else>
        <ViOption
          label="无数据"
          value="0000"
          disabled
        ></ViOption>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="ViSelect">
import ViOption from './vi-option.vue'
import ViInput from '../vi-input/index.vue'
import { computed, useSlots, Comment, provide, ref, nextTick } from 'vue'
const showLabel = ref('')
provide(
  'active',
  computed(() => props.modelValue)
)
provide('nodeClick', (e: string) => {
  console.log('nodeClick',false);
  
  open.value = false
  emit('update:modelValue', e)
})
provide('changeLabel', (e: string) => {
  showLabel.value = e
})
const open = ref(false)
const uSlots = useSlots()
interface Prop {
  label: string
  value: string
}
interface Props {
  modelValue: any
  size?: 'default' | 'small' | 'large' | ''
  prop?: Prop
  options?: Array<any>
  placeholder?: string
  disabled?:boolean
}
const props = withDefaults(defineProps<Props>(), {
  prop: () => {
    return { label: 'label', value: 'value' }
  },
  options: () => [],
  size: '',
  placeholder:'请选择',
  disabled:false
})
const data = computed(() => {
  if (isSlot.value) {
    return []
  } else if (props.options.length > 0) {
    return props.options.map((item) => {
      return {
        label: item[props.prop.label],
        value: item[props.prop.value],
        data: item
      }
    })
  } else {
    return []
  }
})
let blurTime=0;
const blurHandle = () => {
  blurTime=new Date().getTime();
  setTimeout(()=>{
    open.value=false;
  },100)

}
const boxClick=(e:Event)=>{
  if(props.disabled) return
  if(new Date().getTime()-blurTime<150) return;
  open.value=!open.value;
  
  
}
const emit = defineEmits(['update:modelValue'])
const selectStyle = computed(() => {
  return {}
})
const optionsClass = computed(() => {
  let nameList = ['vi-select-option']
  open.value ? nameList.push(`is-open`) : ''
  props.disabled?nameList.push(`is-disabled`) : ''
  return nameList
})
const selectClass = computed(() => {
  let nameList = ['vi-select']
  props.size ? nameList.push(`vi-select-${props.size}`) : ''
  return nameList
})
const isSlot = computed(() => {
  if (uSlots && uSlots.default) {
    console.log(uSlots.default())

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
  --vi-select-option-fr: 0fr;
  position: relative;
  font-size: 14px;
  width: var(--vi-select-width);
  line-height: var(--vi-select-height);
  height: var(--vi-select-height);
  display: inline-block;
  vertical-align: middle;

  &.vi-select-small {
    --vi-select-height: var(--vi-height-small);
  }
  &.vi-select-large {
    --vi-select-height: var(--vi-height-large);
  }
  .vi-select-inner {
    width: 100%;
    height: 100%;
    cursor: pointer;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: var(--vi-select-border-radius);
    box-shadow: 0 0 0 1px var(--vi-select-border-color) inset;
  }
  .vi-select-option {
    --vi-select-option-opacity:0;
    width: 100%;
    top: 100%;
    position: absolute;
    display: grid;
    grid-template-rows: var(--vi-select-option-fr);
    opacity: var( --vi-select-option-opacity);
    overflow: hidden;
    transition: all 0.3s;
    z-index: 20;
    .vi-select-option-inner {
      background-color: #ffffff;
      min-height: 0;
      box-shadow: 0 0 0 1px var(--vi-select-border-color) inset;
      border-radius: var(--vi-select-border-radius);
      box-sizing: border-box;
      position: relative;
      padding: 0;
      width: 100%;
      z-index: 30;
      transition: all 0.3s;
      margin-top: 0;
      &::before {
        box-sizing: border-box;
        content: '';
        background-color: #ffffff;
        position: absolute;
        width: 14px;
        height: 14px;
        top: -7px;
        left: 50%;
        transform: translateX(-50%) rotateZ(45deg);
        border-left: 1px solid #ccc;
        border-top: 1px solid #ccc;
        z-index: 0;
      }
    }
    &.is-disabled{
      cursor: no-drop;
    }
    &.is-open {
      --vi-select-option-fr: 1fr;
      --vi-select-option-opacity:1;
      .vi-select-option-inner {
        padding: 10px 0;
        margin-top: 14px;
      }
    }
    &.is-close {
      --vi-select-option-fr: 0fr;
      --vi-select-option-opacity:0;
      .vi-select-option-inner {
        padding: 0;
        margin-top: 0;
      }
    }
  }
}
</style>
