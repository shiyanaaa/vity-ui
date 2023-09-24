<script setup lang="ts">
// import {ViButton,ViIcon} from 'vity-ui'
import { ref, watch } from "vue"
import VityUI, { ViFooter } from "./plugin";

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
const form = ref({
  username: "和H和",
  password: "213"
})
const selectData = ref([
  { id: 1, name: "1.小米" },
  { id: 2, name: "2.华为" },
  { id: 3, name: "3.OPPO" },
  { id: 4, name: "4.VIVO" },
])
</script>

<template>
  <div style="width: 100vw;height: 50vh;">
    <ViContainer >
      <!-- <ViHeader style="background-color: rgb(76, 0, 255);"></ViHeader> -->
      
      <ViHeader style="background-color: rgb(166, 234, 175);">ViHeader</ViHeader>
      <ViMain style="background-color: rgb(218, 208, 129);">
        <ViContainer >
          <ViAside style="background-color:rgb(138, 138, 215)">ViAside</ViAside>
          <ViMain style="background-color: rgb(199, 118, 118);">ViMain</ViMain>
        </ViContainer>
      </ViMain>
      <ViFooter style="background-color: rgb(181, 158, 236);">ViFooter</ViFooter>
    </ViContainer>
  </div>
  <div style="width: 100vw;height: 50vh;">
    <ViContainer >
      <ViAside style="background-color:rgb(164, 239, 241)">ViAside</ViAside>
      
      <ViMain style="background-color: rgb(210, 205, 162);">
        <ViContainer >
          <ViHeader style="background-color: rgb(167, 230, 175);">ViHeader</ViHeader>
          <ViMain style="background-color: rgb(229, 156, 156);">ViMain</ViMain>
          <ViFooter style="background-color: rgb(223, 127, 156);">ViFooter</ViFooter>
        </ViContainer>
      </ViMain>
    </ViContainer>
  </div>
</template>

<style scoped lang="scss">
.btn {
  &+div {
    margin-top: 20px;
  }
}
</style>
