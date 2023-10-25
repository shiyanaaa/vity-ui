<script setup lang="ts">
import { ViMessage } from '@/plugin'
import { onMounted, ref, watch } from 'vue'
const select=ref("")
const options=ref([
  {label:'123',value:'112323'},
  {label:'123',value:'1212313'},
  {label:'11231223',value:'11232323423'},
  {label:'112323',value:'11231223'},
  {label:'11231223',value:'1231233'},
  {label:'112323',value:'1123111223'},
])
</script>

<template>
  <div style="width: 100vw; height: 100vh; display: flex">
    <!-- <vi-tag v-for="item in tagType" :type="item">{{item}}</vi-tag>
    <vi-tag plain v-for="item in tagType" :type="item">{{item}}</vi-tag>
    <vi-tag plain v-for="item in tagSize" :size="item" type="success">{{item}}</vi-tag> -->
    <ViSelect v-model="select" :options="options"></ViSelect>
    <vi-button>123</vi-button>
    <vi-button disabled>123</vi-button>
    <vi-button type="success">123</vi-button>
    <vi-button plain type="success">123</vi-button>
    <vi-button link type="success">123</vi-button>
    <vi-button color="#FF0033" plain link type="success">123</vi-button>
    <vi-tag type="success" plain color="#FF0033" >123</vi-tag>
    <vi-tag type="success" color="#9933FF" >123</vi-tag>
    
  </div>
</template>

<style scoped lang="scss">
.btn {
  & + div {
    margin-top: 20px;
  }
}
</style>
