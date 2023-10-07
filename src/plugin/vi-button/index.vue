<template >
    <button :style="buttonStyle" :disabled="disabled" :class="className" @click="emit('click')">
        <span class="vi-button-span">
            <ViIcon rotating v-if="props.loading" :name="props.loadIcon || 'tongbu'"></ViIcon>
            <ViIcon v-if="props.icon && !props.loading" :name="props.icon"></ViIcon>
            <span v-if="isVertical">
                <slot></slot>
            </span>
        </span>
    </button>
</template>
<script setup lang="ts" name="ViButton">
import ViIcon from '../vi-icon/index.vue'
import { computed, useSlots, type VNode } from 'vue'

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
    loadIcon?: string,
    size?: 'default' | 'large' | 'small' | ''
}

const props = withDefaults(defineProps<Props>(),{
    type:'default',
    icon: '',
    round: false,
    plain: false,
    circle: false,
    disabled: false,
    square: false,
    color: '',
    loading: false,
    loadIcon: '',
    size: ''

})
const className = computed(() => {
    let nameList = ['vi-button']
    props.type ? nameList.push(`vi-button-${props.type}`) : nameList.push(`vi-button-default`)
    props.round ? nameList.push(`is-round`) : ""
    props.plain ? nameList.push(`is-plain`) : ""
    props.circle ? nameList.push(`is-circle`) : ""
    props.square ? nameList.push(`is-square`) : ""
    props.disabled ? nameList.push(`is-disabled`) : ""
    typeof props.size === 'string' ? nameList.push(`vi-button-${props.size}`) : ''
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

const colourBlend = (c1: string, c2: string, ratio = 5) => {
    ratio *= 0.1
    ratio = Math.max(Math.min(Number(ratio), 1), 0)
    let r1 = parseInt(c1.substring(1, 3), 16)
    let g1 = parseInt(c1.substring(3, 5), 16)
    let b1 = parseInt(c1.substring(5, 7), 16)
    let r2 = parseInt(c2.substring(1, 3), 16)
    let g2 = parseInt(c2.substring(3, 5), 16)
    let b2 = parseInt(c2.substring(5, 7), 16)
    let r: string | number = Math.round(r1 * (1 - ratio) + r2 * ratio)
    let g: string | number = Math.round(g1 * (1 - ratio) + g2 * ratio)
    let b: string | number = Math.round(b1 * (1 - ratio) + b2 * ratio)
    r = ('0' + (r || 0).toString(16)).slice(-2)
    g = ('0' + (g || 0).toString(16)).slice(-2)
    b = ('0' + (b || 0).toString(16)).slice(-2)
    return '#' + r + g + b
}
const colorToRGB = (str: string) => {
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 把颜色值变成小写
    var color = str.toLowerCase();
    if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
            var colorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
            }
            color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        var colorChange = [];
        for (var i = 1; i < 7; i += 2) {
            colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return colorChange
    } else {
        return [];
    }
}
const colorBrightness = (color: Array<number>) => {
    if (color.length !== 3) return "#ffffff"
    let $grayLevel = color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114;
    if ($grayLevel >= 192) {
        return "#000000";
    } else {
        return "#ffffff"
    }
}
const buttonStyle = computed(() => {
    let style: any = {}
    if (props.color) {
        const textColor = colorBrightness(colorToRGB(props.color));
        if (!props.plain) {
            style['--vi-button-color'] = textColor;
            style['--vi-button-bgcolor'] = props.color;
            style['--vi-button-hover-color'] = textColor;
            style["--vi-button-hover-bgcolor"] = colourBlend(props.color, '#ffffff', 1)
            style["--vi-button-active-color"] = textColor
            style["--vi-button-active-bgcolor"] = colourBlend(props.color, '#000000', 2)
            style["--vi-button-border-color"] = props.color
            style["--vi-button-disable-bgcolor"] = colourBlend(props.color, '#ffffff', 2)
            style["--vi-button-disable-color"] = props.color
            style["--vi-button-disable-border-color"] = colourBlend(props.color, '#ffffff', 2)
        }
        else {
            style['--vi-button-color'] = props.color;
            style['--vi-button-bgcolor'] = colourBlend(props.color, '#ffffff', 8);
            style['--vi-button-hover-color'] = textColor;
            style["--vi-button-hover-bgcolor"] = colourBlend(props.color, '#ffffff', 1)
            style["--vi-button-active-color"] = textColor
            style["--vi-button-active-bgcolor"] = colourBlend(props.color, '#000000', 2)
            style["--vi-button-border-color"] = props.color
            style["--vi-button-disable-bgcolor"] = colourBlend(props.color, '#ffffff', 9)
            style["--vi-button-disable-color"] = colourBlend(props.color, '#ffffff', 2)
            style["--vi-button-disable-border-color"] = colourBlend(props.color, '#ffffff', 2)
        }
    }
    return style
})
</script>
<style lang="scss" scoped>
.vi-button {
    --vi-button-color: #000;
    --vi-button-bgcolor: #fff;
    --vi-button-hover-color: #000;
    --vi-button-hover-bgcolor: #fff;
    --vi-button-active-color: #000;
    --vi-button-active-bgcolor: #fff;
    --vi-button-border-color: #000;
    --vi-button-disable-bgcolor: #f7f7f7;
    --vi-button-disable-color: #747474;
    --vi-button-disable-border-color: #686767;
    color: var(--vi-button-color);
    background-color: var(--vi-button-bgcolor);
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #000;
    vertical-align: middle;
    height: var(--vi-button-height, 32px);
    display: inline-flex;
    border-color: var(--vi-button-border-color);

    &.vi-button-small {
        --vi-button-height: var(--vi-height-small);
        padding: 5px 11px;
        font-size: 12px;
    }

    &.vi-button-large {
        --vi-button-height: var(--vi-height-large);
        padding: 12px 19px;
    }


    // color: #000;
    &:not(:last-child) {
        margin-right: 10px;
    }

    & [class*=vi-icon]+span {
        margin-left: 6px;
    }


    &:hover {
        color: var(--vi-button-hover-color);
        background-color: var(--vi-button-hover-bgcolor);
    }

    &:active {
        color: var(--vi-button-active-color);
        background-color: var(--vi-button-active-bgcolor);
    }

    &.is-circle {
        padding: 8px;
        border-radius: 50%;
    }

    &.is-square {
        padding: 8px;

    }

    &.is-round {
        border-radius: 20px;
    }

    .vi-button-span {
        display: inline-flex;
        align-items: center;
        height: 1em;
        line-height: 1em;
    }

    &.is-disabled {
        cursor: no-drop;
        background-color: var(--vi-button-disable-bgcolor);
        color: var(--vi-button-disable-color);
        border-color: var(--vi-button-disable-border-color);
    }

    @each $key, $color in $colors {
        &.vi-button-#{$key} {
            --vi-button-color: #fff;
            --vi-button-bgcolor: var(--vi-color-#{$key});
            --vi-button-border-color: var(--vi-color-#{$key});
            --vi-button-disable-color: var(--vi-button-color);
            --vi-button-disable-bgcolor: var(--vi-color-light-#{$key}-2);
            --vi-button-disable-border-color: var(--vi-color-light-#{$key}-2);
            --vi-button-hover-bgcolor: var(--vi-color-light-#{$key}-1);
            --vi-button-hover-color: var(--vi-button-color);
            --vi-button-active-bgcolor: var(--vi-color-dark-#{$key}-1);
            --vi-button-active-color: var(--vi-button-color);

            &.is-plain {
                --vi-button-bgcolor: var(--vi-color-light-#{$key}-8);
                --vi-button-color: var(--vi-color-#{$key});
                --vi-button-hover-bgcolor: var(--vi-color-#{$key});
                --vi-button-hover-color: #fff;
                --vi-button-active-bgcolor: var(--vi-color-dark-#{$key}-1);
                --vi-button-active-color: var(--vi-button-color);
                --vi-button-disable-bgcolor: var(--vi-color-light-#{$key}-9);
                --vi-button-disable-color: var(--vi-color-light-#{$key}-1);

            }
        }
    }



}
</style>