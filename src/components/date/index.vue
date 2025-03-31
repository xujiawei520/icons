<template>
  <el-date-picker
    v-model="startDate"
    placeholder="起始日期"
    v-bind="$attrs"
  />
  <el-date-picker
    v-model="endDate"
    :disabled="flag"
    placeholder="结束日期"
    :disabled-date="enddisabledDate"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue"

const emits = defineEmits(["changeStart", "changeEnd"])
let startDate = ref()
let endDate = ref()
let flag = ref(true)
// function startdisabledDate(val: Date) {
//   return val.getTime() > new Date().getTime()
// }
function enddisabledDate(val: Date) {
  return val.getTime() < startDate.value
}
watch(startDate, (val: Date) => {
  if (!startDate.value) {
    flag.value = true
    endDate.value = ""
  } else {
    flag.value = false
    emits("changeStart", val)
  }
})
watch(endDate, (val: Date) => {
  if (startDate.value) {
    emits("changeEnd", val)
  }
})
</script>

<style scoped>
</style>
