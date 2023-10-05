<template>
    <div class="vi-header">
        <slot></slot>
    </div>
</template>
    
<script setup lang='ts' name="ViHeader">
    import { useSlots,computed, type Component, type VNode } from 'vue'
</script>
    
<style lang="scss" scoped>
    .vi-header{
        width:100%;
        --el-header-height: 60px;
        height: var(--el-header-height)
    }
</style>