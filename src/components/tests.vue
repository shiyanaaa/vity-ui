<template>
  <ViButton @click="onclick5">123</ViButton>
  <ViButton @click="onclick" type="error">123</ViButton>
</template>
  
<script setup lang='ts'>
import { ViMessage } from '@/plugin';
const onclick5 = () => {
  ViMessage.success('123')
  // ViMessage.closeAll()
}
const onclick = () => {
  ViMessage.closeAll()
}
</script>
  
<style></style>