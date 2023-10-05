<script setup lang="ts">
// import {ViButton,ViIcon} from 'vity-ui'
import { ref, watch } from "vue"
// import { ViMessage } from "./plugin";
import test from "./components/test.vue";
import tests from "./components/tests.vue";
// import ViMessage from "./plugin/vi-message/index.vue";
// const Msg=ref()
const form = ref({
  username: "和H和",
  password: "213"
})

</script>

<template>
  <div style="width: 100vw;height: 50vh;">
    <test></test>
    <tests></tests>
    
  </div>
</template>

<style scoped lang="scss">
.btn {
  &+div {
    margin-top: 20px;
  }
}
</style>
