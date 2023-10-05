<template>
    <div class="vi-footer">
        <slot></slot>
    </div>
</template>
    
<script setup lang='ts' name="ViFooter">
    import { useSlots,computed, type Component, type VNode } from 'vue'
</script>
    
<style lang="scss" scoped>
    .vi-footer{
        width:100%;
        --el-header-height: 60px;
        height: var(--el-header-height)
    }
</style>