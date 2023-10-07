<template>
  <ViButton type="success" @click="onclick5">单行提示</ViButton>
  <ViButton @click="onclick" type="error">全部关闭</ViButton>
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