<template>
        <main class="vi-main">
            <slot></slot>
        </main>
</template>
    
<script setup lang='ts' name="ViMain">
    import { useSlots,computed, type Component, type VNode } from 'vue'
</script>
    
<style lang="scss" scoped>
.vi-main{
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
}
    
</style>