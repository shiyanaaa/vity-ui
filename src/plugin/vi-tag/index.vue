<template>
  <div :class="className" :style="style">
    <div class="vi-tag-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="ViTag">
import { computed } from 'vue'
interface Props {
  type?: string
  plain?: boolean
  size?: '' | 'default' | 'small' | 'large'
  color?:string
}
const props = withDefaults(defineProps<Props>(), {
  type: '',
  plain: false,
  size: ''
})
const className = computed(() => {
  let nameList = ['vi-tag']
  props.type ? nameList.push(`vi-tag-${props.type}`) : ''
  props.plain ? nameList.push(`is-plain`) : ''
  props.size ? nameList.push(`vi-tag-${props.size}`) : ''
  return nameList
})
const style = computed(() => {
  let styleList:any = {}
  if (props.color) {
        const textColor = colorBrightness(colorToRGB(props.color));
        if (!props.plain) {
          styleList['--vi-tag-color'] = textColor;
          styleList['--vi-tag-bgcolor'] = props.color;
          styleList['--vi-tag-hover-color'] = textColor;
          styleList["--vi-tag-hover-bgcolor"] = colourBlend(props.color, '#ffffff', 1)
          styleList["--vi-tag-active-color"] = textColor
          styleList["--vi-tag-active-bgcolor"] = colourBlend(props.color, '#000000', 2)
          styleList["--vi-tag-border-color"] = props.color
          styleList["--vi-tag-disable-bgcolor"] = colourBlend(props.color, '#ffffff', 2)
          styleList["--vi-tag-disable-color"] = props.color
          styleList["--vi-tag-disable-border-color"] = colourBlend(props.color, '#ffffff', 2)
        }
        else {
          styleList['--vi-tag-color'] = props.color;
          styleList['--vi-tag-bgcolor'] = colourBlend(props.color, '#ffffff', 8);
          styleList['--vi-tag-hover-color'] = textColor;
          styleList["--vi-tag-hover-bgcolor"] = colourBlend(props.color, '#ffffff', 1)
          styleList["--vi-tag-active-color"] = textColor
          styleList["--vi-tag-active-bgcolor"] = colourBlend(props.color, '#000000', 2)
          styleList["--vi-tag-border-color"] = props.color
          styleList["--vi-tag-disable-bgcolor"] = colourBlend(props.color, '#ffffff', 9)
          styleList["--vi-tag-disable-color"] = colourBlend(props.color, '#ffffff', 2)
          styleList["--vi-tag-disable-border-color"] = colourBlend(props.color, '#ffffff', 2)
        }
    }
  return styleList
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
</script>

<style lang="scss" scoped>
.vi-tag {
  --vi-tag-height: 24px;
  --vi-tag-font-size: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  box-sizing: border-box;
  height: var(--vi-tag-height);
  padding: 0 9px;
  color: var(--vi-tag-color);
  background-color: var(--vi-tag-bgcolor);
  font-size: var(--vi-tag-font-size);
  border: 1px solid var(--vi-tag-border-color);
  border-radius: 4px;
  margin: 0 0.25rem;
  cursor: pointer;
  .vi-tag-inner {
    line-height: 1em;
    height: 1em;
  }
  &.vi-tag-small {
    --vi-tag-height: 20px;
    padding: 0 7px;
    font-size: 12px;
  }

  &.vi-tag-large {
    --vi-tag-height: 32px;
    padding: 0 11px;
  }
  @each $key, $color in $colors {
    &.vi-tag-#{$key} {
      --vi-tag-color: #fff;
      --vi-tag-bgcolor: var(--vi-color-#{$key});
      --vi-tag-border-color: var(--vi-color-#{$key});
      --vi-tag-disable-color: var(--vi-button-color);
      --vi-tag-disable-bgcolor: var(--vi-color-light-#{$key}-2);
      --vi-tag-disable-border-color: var(--vi-color-light-#{$key}-2);
      --vi-tag-hover-bgcolor: var(--vi-color-light-#{$key}-1);
      --vi-tag-hover-color: var(--vi-button-color);
      --vi-tag-active-bgcolor: var(--vi-color-dark-#{$key}-1);
      --vi-tag-active-color: var(--vi-button-color);
      &.is-plain {
        --vi-tag-bgcolor: var(--vi-color-light-#{$key}-8);
        --vi-tag-color: var(--vi-color-#{$key});
        --vi-tag-hover-bgcolor: var(--vi-color-#{$key});
        --vi-tag-hover-color: #fff;
        --vi-tag-active-bgcolor: var(--vi-color-dark-#{$key}-1);
        --vi-tag-active-color: #fff;
        --vi-tag-disable-bgcolor: var(--vi-color-light-#{$key}-9);
        --vi-tag-disable-color: var(--vi-color-light-#{$key}-1);
      }
    }
  }
}
</style>
