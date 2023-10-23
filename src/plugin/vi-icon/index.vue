<template>
    <svg :class="iconClass" aria-hidden="true" :style="iconStyle">
        <use :xlink:href="iconName"></use>
    </svg>
</template>
    
<script setup lang='ts' name="ViIcon">
import { computed } from 'vue';
import "@/assets/fonts/iconfont.js"
interface Props {
    name?: string,
    size?: number,
    color?: string,
    rotating?: boolean
}
const props = withDefaults(defineProps<Props>(),{
    name: '',
    size: 14,
    color: "inherit",
    rotating: false
})
const iconStyle = computed(() => {

    return {
        fontSize: `${props.size}px`,
        color: props.color
    }
})
const iconName = computed(() => {
    return `#vi-${props.name}`
})
const iconClass = computed(() => {
    let iconClassList = ['icon', 'vi-icon']
    props.rotating ? iconClassList.push("icon-rotating") : ''
    return iconClassList
})
</script>
    
<style scoped lang="scss">
.icon {
    width: 1em;
    height: 1em;
    line-height: 1em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
    flex-shrink:0;
    &.icon-rotating {
        animation: rotation 2s linear infinite;
        -webkit-animation: rotation 2s linear infinite;
    }
}

@-webkit-keyframes rotation {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}
@keyframes rotation {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}
</style>