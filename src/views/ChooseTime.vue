<template>
  <ChooseTime @change-start="chengeStart" @change-end="changeEnd" :options="options" />
</template>

<script setup lang="ts">
interface Time {
  startTime: string
  endTime: string
}
interface Options {
  size: string
  clearable: boolean
}

function chengeStart(val: string) {
  console.log("开始时间:", val)
}
function changeEnd(obj: Time) {
  let { startTime, endTime } = obj
  console.log(`选择的时间段为:${startTime}-${endTime}`)
}
let options: Options = {
  size: "small",
  clearable: false
}
</script>

<style scoped>
</style>
