<template>
    <form :class="className" :style="style">
    <slot></slot></form>
</template>
    
<script setup lang='ts' name="ViForm">
import { computed } from 'vue'
interface Props {
    labelWidth?: string,
    labelPosition?: string
}
const props = withDefaults(defineProps<Props>(),{
    labelWidth: '120px',
    labelPosition: 'right'
} )

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