<script setup lang="ts">
// import {ViButton,ViIcon} from 'vity-ui'
import { ref } from "vue"
interface Btn {
  type?: string,
  icon?: string,
  circle?: boolean
}
const btn: Array<Btn> = [
  { type: 'default' },
  { type: 'primary' },
  { type: 'warning' },
  { type: 'success' },
  { type: 'info' },
  { type: 'error' }
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
const loading = ref(false)
</script>

<template>
  <div class="btn">
    <h1>vity-ui</h1>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" loadIcon="tongbu" v-for="item in btn" :key="item.type"
        :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" v-for="item in btn" :key="item.type" :type="item.type"
        icon="weizhi"></ViButton>
    </div>
    <div>
      <ViButton round @click="loading = !loading" :loading="loading" v-for="item in btn" :key="item.type" :type="item.type"
        icon="weizhi"></ViButton>
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" loadIcon="shuaxin" plain v-for="item in btn" :key="item.type"
        :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" icon="weizhi" v-for="item in btn" :key="item.type"
        :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" icon="haoping" plain v-for="item in btn" :key="item.type"
        :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" round icon="shijian" v-for="item in btn" :key="item.type"
        :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" round icon="lingdang" plain v-for="item in btn"
        :key="item.type" :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" circle icon="xihuan" plain v-for="item in btn"
        :key="item.type" :type="item.type" />
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" square icon="xihuan" plain v-for="item in btn"
        :key="item.type" :type="item.type" />
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" square icon="xihuan" v-for="item in btn" :key="item.type"
        :type="item.type" />
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" circle icon="shoucang" v-for="item in btn" :key="item.type"
        :type="item.type" />
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" disabled circle icon="suoding" v-for="item in btn"
        :key="item.type" :type="item.type" />
    </div>
    <div>
      <ViButton @click="loading = !loading" :loading="loading" loadIcon="jiazailoading-A" disabled v-for="item in btn" plain
        :key="item.type" :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton :color="item" @click="loading = !loading" loadIcon="jiazailoading-A" v-for="item in colorList" :key="item">
        {{ item }}</ViButton>
    </div>
    <div>
      <ViButton :color="item" @click="loading = !loading" loadIcon="jiazailoading-A" v-for="item in colorList" plain
        :key="item">{{ item }}</ViButton>
    </div>
  <div>
    <ViButton disabled :color="item" @click="loading=!loading" loadIcon="jiazailoading-A" v-for="item in colorList"
      plain :key="item">{{ item }}</ViButton>
  </div>

</div>
</template>

<style scoped lang="scss">.btn {
  div {
    margin-top: 20px;
  }
}</style>
