<template>
  <el-time-select
    v-model="startTime"
    style="width: 240px"
    :max-time="endTime"
    placeholder="Start time"
    :start="start"
    :end="end"
    v-bind="$attrs"
  >
  </el-time-select>
  <el-time-select
    v-model="endTime"
    style="width: 240px"
    :min-time="startTime"
    placeholder="End time"
    :start="start"
    :end="end"
    :disabled="flag"
  >
  </el-time-select>
</template>

<script setup lang="ts">
import { ref, useAttrs, watch } from "vue"

defineProps({
  startTime: {
    type: String,
    default: "08:00"
  },
  endTime: {
    type: String,
    default: "24:00"
  },
  step: {
    type: String,
    default: "00:30"
  },
  start: {
    type: String,
    default: "06:00"
  },
  end: {
    type: String,
    default: "24:00"
  }
})

const emits = defineEmits(["changeStart", "changeEnd"])
let attr = useAttrs()
console.log(attr)
let startTime = ref("")
let endTime = ref("")
let flag = ref(true)
watch(startTime, (val: string) => {
  if (val === undefined || val === "") {
    startTime.value = ""
    endTime.value = ""
    flag.value = true
  } else {
    flag.value = false
    emits("changeStart", val)
  }
})
watch(endTime, (val: string) => {
  if (val === undefined || val === "") {
    endTime.value = ""
  } else {
    emits("changeEnd", {
      startTime: startTime.value,
      endTime: endTime.value
    })
  }
})
</script>

<style scoped>
</style>
