<template>
  <div>
    <Icon :title="title" :visable="visable" :obj="obj" :arr="arr" :iconarr="iconarr" @db-click="dbClick"></Icon>
  </div>
</template>

<script setup lang="ts">
// import Icon from "@/components/icons/index.vue"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import { Edit, House } from "@element-plus/icons-vue"
import { reactive, ref } from "vue"

interface IProps {
  title?: string
  icon?: any
}
let title = ref("1111")
let visable = ref(false)
let obj = reactive<IProps>({})
let iconarr = [Edit, House]
// let icons = ElementPlusIconsVue
// const [key,val] =Object.entries(ElementPlusIconsVue)
// console.log(key,val);

function dbClick() {
  visable.value = !visable.value
}
let arr = []
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // console.log(key, component);
  Object.assign(obj, {
    title: key,
    icon: component
  })
  arr.push({ title: key, icon: component })
}
// console.log(arr)
</script>

<style scoped>
</style>
