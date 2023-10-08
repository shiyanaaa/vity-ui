<script setup lang="ts">
import { ViMessage } from "@/plugin"
import { ref, watch } from "vue"
const form = ref({
  username: true,
  password: "213"
})
interface Tree {
  label: string
  value: string
  children?: Tree[]
}
const treeData = ref<Tree[]>([
  { label: '测试1', value: '1', children: [{ label: '测试1-1', value: '1-1', children: [{ label: '测试1-1-1', value: '1-1-1' }] }] },
  { label: '测试2', value: '2' },
])
const change = (e: boolean) => {
  ViMessage.success(`当前为：${e}`)
}
</script>

<template>
  <div style="width: 100vw;height: 100vh;">
    <ViMenu :data="treeData">
      <!-- <ViMenuItem v-for="item in treeData" :label="item.label">
        <ViMenuItem v-for="item1 in item.children" :label="item1.label">
          <ViMenuItem v-for="item11 in item1.children" :label="item11.label">

          </ViMenuItem>
        </ViMenuItem>
      </ViMenuItem> -->
    </ViMenu>
  </div>
</template>

<style scoped lang="scss">
.btn {
  &+div {
    margin-top: 20px;
  }
}
</style>
