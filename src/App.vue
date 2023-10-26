<script setup lang="ts">
import { ViMessage } from '@/plugin'
import { onMounted, ref, watch } from 'vue'
const select = ref('123')
const options = ref([
  { label: '123', value: '112323', disabled: true },
  { label: '123', value: '1212313' },
  { label: '11231223', value: '11232323423' },
  { label: '112323', value: '11231223' },
  { label: '11231223', value: '1231233' },
  { label: '112323', value: '1123111223' }
])
</script>

<template>
  <div style="width: 100vw; height: 100vh; display: flex">
    <!-- <vi-tag v-for="item in tagType" :type="item">{{item}}</vi-tag>
    <vi-tag plain v-for="item in tagType" :type="item">{{item}}</vi-tag>
    <vi-tag plain v-for="item in tagSize" :size="item" type="success">{{item}}</vi-tag> -->
    <!-- <ViSelect v-model="select" :options="options"></ViSelect>
    <vi-input v-model="select"></vi-input> -->
    <vi-radio-group v-model="select">
      <vi-radio label="123"> 123 </vi-radio>
      <vi-radio label="456"> 456 </vi-radio>
      <vi-radio label="789"> 789 </vi-radio>
    </vi-radio-group>
  </div>
</template>

<style scoped lang="scss">
.btn {
  & + div {
    margin-top: 20px;
  }
}
</style>
