<template>
    <div :class="selectClass">
    </div>
</template>
    
<script setup lang='ts' name="ViSelect">
import { computed } from 'vue';
interface Props {
    modelValue: string | number,
}
const props = defineProps<Props>()
console.log(props.modelValue);

const emit = defineEmits(['update:modelValue'])
const selectStyle = computed(() => {

    return {

    }
})

const selectClass = computed(() => {
    let nameList = ['vi-select']
    return nameList
})
</script>
    
<style scoped lang="scss">
.vi-select {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    line-height: 32px;
    background-color:#CCC;
}
</style>