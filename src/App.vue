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
const fits= ['fill', 'contain', 'cover', 'none', 'scale-down']
const src=ref("https://fuss10.elemecdn.com/e/5d/4a731a91320594a4af544c0c25941171jpeg.jpeg")
const aaa=()=>{
  src.value="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
}

</script>

<template>
  <div style="width: 100vw; height: 100vh; display: flex">
    <vi-avatar v-for="item in fits" size="100" :fit="item" @click="aaa" :src="src">123</vi-avatar>
    
  </div>
</template>

<style scoped lang="scss">
.btn {
  & + div {
    margin-top: 20px;
  }
}
</style>
