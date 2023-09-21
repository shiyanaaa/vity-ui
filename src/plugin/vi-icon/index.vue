<template>
    <svg class="icon vi-icon" aria-hidden="true" :style="iconStyle">
        <use :xlink:href="iconName"></use>
    </svg>
</template>
    
<script setup lang='ts' name="ViIcon">
import { computed } from 'vue';
import "@/assets/fonts/iconfont.js"
const props=defineProps({
    name: {
        type: String,
        default: ''
    },
    size:{
        type:Number,
        default:15
    },
    color:{
        type:String,
        default:"inherit"
    },
})
const iconStyle=computed(() => {
    
    return {
        fontSize:`${props.size}px`,
        color:props.color
    }
})
const iconName=computed(() => {
    return `#icon-${props.name}`
})
</script>
    
<style scoped lang="scss">
.icon {
       width: 1em; height: 1em;
       vertical-align: bottom;
       fill: currentColor;
       overflow: hidden;
    }
</style>