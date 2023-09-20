<script setup lang="ts">
import {ViButton,ViIcon} from 'vity-ui'

const btn:Array<string>=[
  'default',
  'primary',
  'warning',
  'success',
  'info',
  'error'
]
</script>

<template>
  <div>
    <ViIcon name="dianhua"></ViIcon>
    <ViButton icon="xin-xianxing" v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>
    <ViButton >123</ViButton>
  </div>
</template>

<style scoped></style>
