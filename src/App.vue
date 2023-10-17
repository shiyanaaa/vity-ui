<script setup lang="ts">
import { ViMessage } from '@/plugin'
import { onMounted, ref, watch } from 'vue'
const form = ref({
  username: true,
  password: '213'
})

const treeData = ref([
  {
    index: '1',
    label: '测试1',
    children: [
      {
        label: '测试1-1',
        index: '1-1',
        children: [{ index: '1-1-1', label: '测试1-1-1' }]
      },
      {
        label: '测试1-2',
        value: '1-2',
        link: '/aaa',
        index: '1-2',
        children: [{ index: '1-2-1', label: '测试1-2-1' }]
      },
      {
        label: '测试1-3',
        index: '1-3',
        children: [{ index: '1-3-1', label: '测试1-3-1' }]
      }
    ]
  },
  {
    index: '2',
    label: '测试2',
    isGroup: true,
    children: [
      {
        label: '测试2-1',
        index: '2-1'
      },
      {
        label: '测试2-2',
        index: '2-2'
      },
      {
        label: '测试2-3',
        index: '2-3'
      }
    ]
  },
  { index: '3', label: '测试3' },
  { index: '4', label: '测试4' },
  { index: '5', label: '测试5' },
  { index: '6', label: '测试6' }
])
const change = (e: boolean) => {
  ViMessage.success(`当前为：${e}`)
}
const index = ref(0)
const options = [
  { label: '测试1', value: 1 },
  { label: '测试2', value: 2 },
  { label: '测试3', value: 3 },
  { label: '测试4', value: 4 }
]
const btn = () => {
  ViMessage.success('点击了按钮')
}
const bool = ref(false)
</script>

<template>
  <div style="width: 100vw; height: 100vh; display: flex">
    <ViMenu
      rightBorder

      :data="treeData"
      v-model="index"
    >
    </ViMenu>
    <div>
      
      <ViButton type="success" @click="btn">提示</ViButton>
      <ViSwitch v-model="bool"></ViSwitch>
      <ViForm labelWidth="50px">
        <ViFormItem label="帐号">
          <ViInput></ViInput>
        </ViFormItem>
        <ViFormItem label="爱好">
          <ViSelect v-model="index" :options="options"></ViSelect>
        </ViFormItem>
      </ViForm>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btn {
  & + div {
    margin-top: 20px;
  }
}
</style>
