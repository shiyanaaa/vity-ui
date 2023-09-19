<template >
    <button :class="className" @click="emit('click')">
        <slot></slot>
    </button>
</template>
<script setup lang="ts" name="ViButton">
import { computed,defineEmits  } from 'vue'
const emit = defineEmits(['click'])
interface Props {
    type?:  string | 'default' | 'primary' | 'warning' | 'success' | 'info' | 'error';
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

}
@each $key, $color in $colors {
    .vi-button-#{$key} {
         background-color: $color;
         color:#fff;
         &:hover {
             background-color: mix($color, #fff, 90%);
         }
         &:active {
             background-color: mix($color, #000, 90%);
         }
    }
}
</style>