<template>
    <form :class="className" :style="style">
    <slot></slot></form>
</template>
    
<script setup lang='ts' name="ViForm">
import { computed } from 'vue'
const props = defineProps({
    labelWidth: {
        type: String,
        default: '120px'
    },
    labelPosition: {
        type: String,
        default: 'right'
    },
})
const style = computed(() => {
    return {
        '--vi-form-item-label-width': props.labelWidth,
        '--vi-form-item-label-position': props.labelPosition
    }
})
const className = computed(() => {
    let nameList = ['vi-form']

    return nameList
})
</script>
    
<style lang="scss" scope>
.vi-form{
    margin:0;
}
</style>