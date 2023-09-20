<template>
    <svg class="icon" aria-hidden="true">
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
    }
})
const iconName=computed(() => {
    return `#icon-${props.name}`
})
</script>
    
<style scoped lang="scss">
.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>