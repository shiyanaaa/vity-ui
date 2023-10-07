
<template>
    <div :class="className">
        <div class="vi-form-item-label" v-if="props.label">{{ props.label }}</div>
        <slot></slot>
    </div>
</template>
    
<script setup lang='ts' name="ViFormItem">
import { computed } from 'vue'
interface Props {
    label?: string
}
const props = withDefaults(defineProps<Props>(),{
    label: ''
} )
const className = computed(() => {
    let nameList = ['vi-form-item']

    return nameList
})
</script>
    
<style lang="scss" scope>
.vi-form-item {
    display: flex;
    margin-bottom: 20px;

    .vi-form-item-label {
        width: var(--vi-form-item-label-width, 120px);
        min-width: var(--vi-form-item-label-width, 120px);
        text-align: var(--vi-form-item-label-position, right);
        line-height: var(--vi-height-default);
        padding-right: 10px;
    }
}
</style>