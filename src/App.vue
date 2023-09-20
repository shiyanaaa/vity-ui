<script setup lang="ts">
import {ViButton} from "vity-ui"
const btn=[
  'default',
  'primary',
  'warning',
  'success',
  'info',
  'error',
  'aaa'
]
</script>

<template>
  <div>
    <ViButton v-for="item in btn" :key="item" :type="(item as string)">{{ item }}</ViButton>
  </div>
</template>

<style scoped></style>
