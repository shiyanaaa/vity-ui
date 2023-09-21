<script setup lang="ts">
// import {ViButton,ViIcon} from 'vity-ui'
interface Btn{
  type?:string,
  icon?:string,
  circle?:boolean
}
const btn:Array<Btn>=[
  {type:'default'},
  {type:'primary'},
  {type:'warning'},
  {type:'success'},
  {type:'info'},
  {type:'error'}
]
const click=()=>{
  console.log("click");
  
}
</script>

<template>
  <div class="btn">
    <h1>vity-ui</h1>
    <div>
      <ViButton v-for="item in btn" :key="item.type" :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton v-for="item in btn" :key="item.type" :type="item.type" icon="weizhi"></ViButton>
    </div>
    <div>
      <ViButton plain v-for="item in btn" :key="item.type" :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton icon="weizhi" v-for="item in btn" :key="item.type" :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton icon="haoping" plain v-for="item in btn" :key="item.type" :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton round icon="shijian" v-for="item in btn" :key="item.type" :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton round icon="lingdang" plain v-for="item in btn" :key="item.type" :type="item.type">{{ item.type }}</ViButton>
    </div>
    <div>
      <ViButton circle icon="xihuan" plain v-for="item in btn" :key="item.type" :type="item.type" />
    </div>
    <div>
      <ViButton square icon="xihuan" plain v-for="item in btn" :key="item.type" :type="item.type" />
    </div>
    <div>
      <ViButton square icon="xihuan" v-for="item in btn" :key="item.type" :type="item.type" />
    </div>
    <div>
      <ViButton  @click="click" circle icon="shoucang" v-for="item in btn" :key="item.type" :type="item.type" />
    </div>
    <div>
      <ViButton @click="click" disabled circle icon="suoding" v-for="item in btn" :key="item.type" :type="item.type" />
    </div>
    <div>
      <ViButton round v-for="item in btn" :key="item.type" :type="item.type" icon="suoding"></ViButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btn{
  div{
    margin-top: 20px;
  }
}
</style>
