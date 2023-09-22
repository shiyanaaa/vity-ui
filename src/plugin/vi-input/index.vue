<template>
    <div class="vi-input">
        <div :class="inputClass">
            <input class="el-input-inner" @input="emit('update:modelValue',value)" @blur="focus=false" @focus="focus=true" type="text" v-model="value" />
        </div>
    </div>
</template>
    
<script setup lang='ts' name="ViInput">
import { computed, ref } from 'vue';
interface Props {
    modelValue: string | number,
}
const props = defineProps<Props>()
    const value = ref(props.modelValue)
const focus=ref(false)
const emit = defineEmits(['update:modelValue'])
const inputStyle = computed(() => {

    return {

    }
})

const inputClass = computed(() => {
    let nameList = ['vi-input-wrapper']
    focus.value?nameList.push("is-focus"):''
    return nameList
})
</script>
    
<style scoped lang="scss">
.vi-input {
    --vi-input-width: 100%;
    --vi-input-height: 32px;
    --vi-input-border-color: #dcdfe6;
    --vi-input-border-radius: 4px;
    --vi-input-bg-color: #ffffff;
    --vi-input-hover-border-color:#c0c4cc;
    position: relative;
    font-size: 14px;
    display: inline-flex;
    width: var(--vi-input-width);
    line-height: var(--vi-input-height);
    box-sizing: border-box;
    vertical-align: middle;

    .vi-input-wrapper {
        display: inline-flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        padding: 1px 11px;
        background-color: var(--vi-input-bg-color);
        background-image: none;
        border-radius: var(--vi-input-border-radius);
        cursor: text;
        box-shadow: 0 0 0 1px var(--vi-input-border-color) inset;
        transform: translateZ(0);
        &:hover{
            box-shadow: 0 0 0 1px var(--vi-input-hover-border-color) inset;
        }
        &.is-focus{
            box-shadow: 0 0 0 1px var(--vi-color-primary) inset;
        }
        .el-input-inner {
            height: calc(var(--vi-input-height) - 2px);
            width: 100%;
            flex-grow: 1;
            font-size: inherit;
            padding: 0;
            outline: none;
            border: none;
        }
    }
}
</style>