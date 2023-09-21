<template >
    <button :disabled="disabled" :class="className" @click="emit('click')">
        <span class="vi-button-span">
            <ViIcon rotating v-if="props.loading" :name="props.loadIcon || 'tongbu'"></ViIcon>
            <ViIcon v-if="props.icon&&!props.loading" :name="props.icon"></ViIcon>
            <span v-if="isVertical">
                <slot></slot>
            </span>
        </span>
    </button>
</template>
<script setup lang="ts" name="ViButton">
import ViIcon from '../vi-icon/index.vue'
import { computed, useSlots, defineEmits, type VNode } from 'vue'

const uSlots = useSlots()
const emit = defineEmits(['click'])
interface Props {
    type?: '' | 'default' | 'primary' | 'warning' | 'success' | 'info' | 'error',
    icon?: string,
    round?: boolean,
    plain?: boolean,
    circle?: boolean,
    disabled?: boolean,
    square?: boolean,
    color?: string,
    loading?: boolean,
    loadIcon?: string
}

const props = defineProps<Props>()
const className = computed(() => {
    let nameList = ['vi-button']
    props.type ? nameList.push(`vi-button-${props.type}`) : nameList.push(`vi-button-default`)
    props.round ? nameList.push(`vi-button-round`) : ""
    props.plain ? nameList.push(`is-plain`) : ""
    props.circle ? nameList.push(`is-circle`) : ""
    props.square ? nameList.push(`is-square`) : ""
    props.disabled ? nameList.push(`is-disabled`) : ""

    return nameList
})
const isVertical = computed(() => {

    if (uSlots && uSlots.default) {
        //从默认插槽中获取内容
        const VNode: VNode[] = uSlots.default()
        return VNode.some((vNode) => {
            // console.log(vNode);

            return true
            // console.log(vNode.type,"vNode")
        })
    } else {
        return false
    }

})

</script>
<style lang="scss" scoped>
.vi-button {
    $color: #fff;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 5px;
    color: #000;
    border: 1px solid #000;
    vertical-align: middle;
    height: 32px;
    display: inline-flex;
    border-color: #dcdfe6;
    color: #000;
    background-color: #fff;

    & [class*=vi-icon]+span {
        margin-left: 6px;
    }



    &:hover {
        // border-color: linght-color($color, 1);
        background-color: linght-color($color, 1);
    }

    &:active {
        border-color: dark-color($color, 1);
        background-color: dark-color($color, 1);
    }

    &.is-circle {
        padding: 8px;
        border-radius: 50%;
    }

    &.is-square {
        padding: 8px;

    }

    &.is-disabled {
        cursor: no-drop;
        border-color: linght-color(#dcdfe6, 2);
        background-color: linght-color($color, 4);

        &:hover {
            background-color: linght-color($color, 4);
        }

        &:active {
            background-color: linght-color($color, 4);
        }
    }

    .vi-button-span {
        display: inline-flex;
        align-items: center;
    }


}

.vi-button-round {
    border-radius: 20px;
}

@each $key,
$color in $colors {
    .vi-button-#{$key} {
        background-color: $color;
        border: 1px solid $color;
        color: #fff;

        &:hover {
            border-color: linght-color($color, 2);
            background-color: linght-color($color, 2);
        }

        &:active {
            border-color: dark-color($color, 1);
            background-color: dark-color($color, 1);
        }

        

        &.is-plain {
            color: $color;
            background-color: linght-color($color, 8);

            &:hover {
                background-color: $color;
                color: #fff;
            }

            &:active {
                background-color: dark-color($color, 1);
            }
        }
        &.is-disabled {
            color: linght-color($color, 4);
            border-color: linght-color($color, 6);
            background-color: linght-color($color, 9);

            &:hover {
                color: linght-color($color, 4);
                background-color: linght-color($color, 9);
            }

            &:active {
                color: linght-color($color, 4);
                background-color: linght-color($color, 9);
            }
        }

    }
}</style>