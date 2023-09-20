<template >
    <button :class="className" @click="emit('click')">
        <slot></slot>
    </button>
</template>
<script setup lang="ts" name="ViButton">
import { computed, defineEmits } from 'vue'
const emit = defineEmits(['click'])
interface Props {
    type?: string | 'primary' | 'warning' | 'success' | 'info' | 'error';
}
const props = defineProps<Props>()
const className = computed(() => {
    let nameList = ['vi-button']
    if (props.type)
        nameList.push(`vi-button-${props.type}`)
    return nameList
})
</script>
<style lang="scss" scoped>
.vi-button {
    padding: 8px 15px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: #000;
}

@each $key,
$color in $colors {
    .vi-button-#{$key} {
        background-color: $color;
        border: 1px solid $color;
        color: #fff;

        &:hover {
            border-color: linght-color($color, 1);
            background-color: linght-color($color, 1);
        }

        &:active {
            border-color: dark-color($color, 1);
            background-color: dark-color($color, 1);
        }
    }
}</style>