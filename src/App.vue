<script setup lang="ts">
// import {ViButton,ViIcon} from 'vity-ui'
import { ref } from "vue"
import VityUI from "./plugin";

const btn: Array<string> = [
  'default',
  'primary',
  'warning',
  'success',
  'info',
  'error'
]
const colorList: Array<string> = [
  "#996699",
  "#003399",
  "#9933FF",
  "#FF99CC",
  "#0099CC",
  "#FF0033"
]
const click = () => {
  console.log("click");

}
const selectValue=ref("")
const selectData=ref([
  {id:1,name:"1.小米"},
  {id:2,name:"2.华为"},
  {id:3,name:"3.OPPO"},
  {id:4,name:"4.VIVO"},
])
const inputValue=ref("VityUI")
const loading = ref(false)
</script>

<template>
  <div class="btn">
    <h1>vity-ui</h1>
    <div>
      <h2>Button按钮</h2>
      <ViButton @click="loading = !loading" :loading="loading" loadIcon="tongbu" :type="btn[0]">{{ btn[0] }}</ViButton>
      <ViButton @click="loading = !loading" :loading="loading" :type="btn[1]" icon="weizhi"></ViButton>
      <ViButton round @click="loading = !loading" :loading="loading" :type="btn[2]" icon="weizhi"></ViButton>
      <ViButton @click="loading = !loading" :loading="loading" loadIcon="shuaxin" plain :type="btn[3]">{{ btn[3] }}</ViButton>
      <ViButton @click="loading = !loading" :loading="loading" icon="weizhi" :type="btn[3]">{{ btn[3] }}</ViButton>
      <ViButton @click="loading = !loading" :loading="loading" icon="haoping" plain :type="btn[4]">{{ btn[4] }}</ViButton>
      <ViButton @click="loading = !loading" :loading="loading" round icon="shijian" :type="btn[5]">{{ btn[5] }}</ViButton>
      <ViButton @click="loading = !loading" :loading="loading" round icon="lingdang" plain :type="btn[0]">{{ btn[0] }}</ViButton>
      <ViButton @click="loading = !loading" :loading="loading" circle icon="xihuan" plain :type="btn[1]" />
      <ViButton @click="loading = !loading" :loading="loading" square icon="xihuan" plain :type="btn[0]" />
      <ViButton @click="loading = !loading" :loading="loading" square icon="xihuan" :type="btn[1]" />
      <ViButton @click="loading = !loading" :loading="loading" circle icon="shoucang" :type="btn[2]" />
      <ViButton @click="loading = !loading" :loading="loading" disabled circle icon="suoding" :type="btn[3]" />
      <ViButton @click="loading = !loading" :loading="loading" loadIcon="jiazailoading-A" disabled plain :type="btn[4]">{{ btn[4] }}</ViButton>
      <ViButton :color="colorList[0]" @click="loading = !loading" loadIcon="jiazailoading-A">{{ colorList[0] }}</ViButton>
      <ViButton :color="colorList[1]" @click="loading = !loading" loadIcon="jiazailoading-A" plain>{{ colorList[1] }}</ViButton>
      <ViButton disabled :color="colorList[2]" @click="loading = !loading" loadIcon="jiazailoading-A" plain>{{ colorList[2] }}</ViButton>
    </div>
    <div>
      <h2>Select选择器</h2>
      <ViSelect v-model="selectValue">123</ViSelect>
    </div>
    <div>
      <h2>Input输入框--{{ inputValue }}</h2>
      <div style="width:200px"><ViInput v-model="inputValue">123</ViInput></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btn {
  &+div {
    margin-top: 20px;
  }
}
</style>
