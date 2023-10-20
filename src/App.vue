<script setup lang="ts">
import { ViMessage } from '@/plugin'
import { onMounted, ref, watch } from 'vue'
const tagType=['default','primary','warning','error','success','info']
const tagSize=['small','default','large']
</script>

<template>
  <div style="width: 100vw; height: 100vh; display: flex">
    <vi-tag v-for="item in tagType" :type="item">{{item}}</vi-tag>
    <vi-tag plain v-for="item in tagType" :type="item">{{item}}</vi-tag>
    <vi-tag plain v-for="item in tagSize" :size="item" type="success">{{item}}</vi-tag>
  </div>
</template>

<style scoped lang="scss">
.btn {
  & + div {
    margin-top: 20px;
  }
}
</style>
