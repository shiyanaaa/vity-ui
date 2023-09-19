<script setup lang="ts">
import ViButton from './plugin/vi-button/index.vue';
const btn=[
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
    <ViButton v-for="item in btn"  :type="(item as string)">{{ item }}</ViButton>
  </div>
</template>

<style scoped></style>
