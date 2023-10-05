<template>
    <div class="vi-aside" :style="style">
        <slot></slot>
    </div>
</template>
    
<script setup lang='ts' name="ViAside">
import { computed } from 'vue'
const props = defineProps({
    width: {
        type: String,
        default: '200px'
    }
})
const style = computed(() => {
    return {
        '--vi-aside-width': props.width
    }
})
</script>
    
<style lang="scss" scoped>
.vi-aside {
    width: var(--vi-aside-width);
    height: 100%;
}
</style>