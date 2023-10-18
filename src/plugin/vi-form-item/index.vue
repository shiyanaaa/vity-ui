
<template>
    <div :class="className">
        <label :for="formItemId" class="vi-form-item-label" v-if="props.label">{{ props.label }}</label>
        <slot></slot>
    </div>
</template>
    
<script setup lang='ts' name="ViFormItem">
import { computed,provide } from 'vue'
interface Props {
    label?: string
}
provide(
  'vi-form-item-id',
  computed(() => formItemId.value)
)
const props = withDefaults(defineProps<Props>(),{
    label: ''
} )
const formItemId=computed(()=>{
    return 'vi-form-item-'+Math.random().toString(36)
})
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
        user-select:none;
    }
}
</style>