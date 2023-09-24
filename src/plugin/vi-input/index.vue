<template>
    <div :style="inputStyle" :class="inputClass">
        <div :class="inputWrapperClass">
            <span v-if="uSlots.prefix || props.prefixIcon" class="vi-input-prefix">
                <span class="vi-input-prefix-inner">
                    <slot name="prefix" />
                    <ViIcon :size="20" v-if="props.prefixIcon" :name="props.prefixIcon" />
                </span>
            </span>
            <!-- <slot name="prefix">
                <ViIcon :size="20" v-if="props.suffixIcon" :name="props.suffixIcon" />
            </slot> -->
            <input :type="props.type" :disabled="props.disabled" class="el-input-inner" @blur="focus = false"
                @focus="focus = true" :value="value" @input="onInput" />
            <!-- 定义插槽 -->
            <span v-if="uSlots.suffix || props.suffixIcon" class="vi-input-suffix">
                <span class="vi-input-suffix-inner">                    <slot name="suffix" />
                    <ViIcon :size="20" v-if="props.suffixIcon" :name="props.suffixIcon" />
                </span>
            </span>
        </div>
    </div>
</template>
    
<script setup lang='ts' name="ViInput">
import { computed, ref, useSlots } from 'vue';
import ViIcon from '../vi-icon/index.vue'
const uSlots = useSlots()

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: ''
    },
    prefixIcon: {
        type: String,
        default: ''
    },
    suffixIcon: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'text'
    },
    width:{
        type:String,
        default:'100%'
    }
})

const value = computed({
    get: () => props.modelValue || '',
    set: val => {
        emit('update:modelValue', val)
    }
})
const onInput = (event: any) => {
    value.value = event.target.value;
}
const focus = ref(false)
const emit = defineEmits(['update:modelValue'])
const inputStyle = computed(() => {

    return {
        '--vi-input-width':props.width
    }
})

const inputWrapperClass = computed(() => {
    let nameList = ['vi-input-wrapper']
    focus.value ? nameList.push("is-focus") : ''
    return nameList
})
const inputClass = computed(() => {
    let nameList = ['vi-input']
    props.size ? nameList.push(`vi-input-${props.size}`) : ''
    props.disabled ? nameList.push(`is-disabled`) : ''
    return nameList
})
</script>
    
<style scoped lang="scss">
.vi-input {
    --vi-input-height: var(--vi-height-default);
    --vi-input-border-color: #dcdfe6;
    --vi-input-border-radius: 4px;
    --vi-input-bg-color: #ffffff;
    --vi-input-hover-border-color: #c0c4cc;
    position: relative;
    font-size: 14px;
    display: inline-flex;
    width: var(--vi-input-width);
    line-height: var(--vi-input-height);
    box-sizing: border-box;
    vertical-align: middle;

    &.vi-input-small {
        --vi-input-height: var(--vi-height-small);

    }

    &.vi-input-large {
        --vi-input-height: var(--vi-height-large);

    }

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
        .vi-input-prefix,.vi-input-suffix {
            display: inline-flex;
            white-space: nowrap;
            flex-shrink: 0;
            flex-wrap: nowrap;
            height: 100%;
            text-align: center;
            color: var(--el-input-icon-color, var(--el-text-color-placeholder));
            transition: all var(--el-transition-duration);
            pointer-events: none;
            .vi-input-prefix-inner{
                margin-right: 8px;
            }
            .vi-input-suffix-inner{
                margin-left: 8px;
            }
        }

        &:hover {
            box-shadow: 0 0 0 1px var(--vi-input-hover-border-color) inset;
        }

        &.is-focus {
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

    &.is-disabled {
        cursor: no-drop;

        .vi-input-wrapper {
            cursor: no-drop;
            cursor: not-allowed;
            background-color: #f5f7fa;

            &:hover {
                --vi-input-hover-border-color: var(--vi-input-border-color);
            }
        }

        .el-input-inner {
            background-color: #f5f7fa;
            cursor: no-drop;
            color: #8d9094;
        }
    }
}
</style>