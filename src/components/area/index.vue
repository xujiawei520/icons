<template>
  <el-select clearable placeholder="请选择省份" style="width: 240px" v-model="province" @change="changeProvince" @clear="clearProvince">
    <el-option v-for="item in City" :key="item.code" :value="item.name">
      {{ item.name }}
    </el-option>
  </el-select>
  <el-select :disabled="typeof city !== 'object'" clearable placeholder="请选择城市" style="width: 240px" v-model="activeCity" @change="changeCity" @clear="clearCity">
    <el-option v-for="item in city" :key="item.name" :value="item.name">
      {{ item.name }}
    </el-option>
  </el-select>
  <el-select :disabled="typeof area !== 'object'" clearable placeholder="请选择区" style="width: 240px" v-model="activeArea" @change="changeArea">
    <el-option v-for="item in area" :key="item.name" :value="item.name">
      {{ item.name }}
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ref } from "vue"
import City from "../../../lib/pca-code.json"

const emits = defineEmits(["change"])
// let activeProvince = ref()
let activeCity = ref()
let activeArea = ref()
let province = ref()
let city = ref()
let area = ref()

function changeProvince() {
  City.forEach((item: any) => {
    if (item.name === province.value) {
      city.value = item.children
    }
  })
  activeCity.value = ""
  activeArea.value = ""
}
function changeCity() {
  city.value.forEach((item: any) => {
    if (item.name === activeCity.value) {
      area.value = item.children
    }
  })
  activeArea.value = ""
}
function changeArea() {
  let chooseArea = {
    province: province.value,
    city: activeCity.value,
    area: activeArea.value
  }
  emits("change", chooseArea)
  // console.log(province.value, activeCity.value, activeArea.value)
}
function clearProvince() {
  activeCity.value = ""
  activeArea.value = ""
  city.value = undefined
  area.value = undefined
}
function clearCity() {
  activeCity.value = ""
  activeArea.value = ""
  area.value = undefined
}
</script>

<style scoped>
</style>
