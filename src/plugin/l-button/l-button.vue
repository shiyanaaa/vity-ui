<template >
    <button :class="className"><slot></slot></button>
</template>
<script setup lang="ts">
import {computed } from 'vue'
interface Props {
    type: ""|"primary"|"success"|"warning"|"error";
}
const props=defineProps<Props>()
const className=computed(()=>{
    let nameList=['l-button']
    console.log(props.type);
    console.log(props.type);
    
    if(props.type)
    nameList.push(`l-button-${props.type}`)
    return nameList
})
</script>
<style lang="scss">
    .l-button{
        padding:5px 10px;
    }
    .l-button-primary{
        background-color:$colorPrimary;
    }
</style>