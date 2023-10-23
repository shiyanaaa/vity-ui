<template>
    <section :class="className">
        <slot></slot>
    </section>
</template>
    
<script setup lang='ts' name="ViContainer">
import { useSlots,computed, type Component, type VNode } from 'vue'
const uSlots = useSlots()
const className = computed(() => {
    let nameList = ['vi-container']
    isVertical() ? nameList.push('is-vertical') : ''
    return nameList
})
const isVertical = () => {
    if (uSlots && uSlots.default) {
        const vNodes: VNode[] = uSlots.default()
        return vNodes.some((vNode) => {
            const tag = (vNode.type as Component).name
            return tag === 'ViHeader' || tag === 'ViFooter'
        })
    } else {
        return false
    }
}
</script>
    
<style lang="scss" scoped>
.vi-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex:1;
    &.is-vertical{
        flex-direction: column;
    }
}
</style>