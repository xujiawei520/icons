<template>
  <el-progress :percentage="num" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

const props = defineProps({
  percentage: {
    type: Number,
    default: 0
  },
  animation: {
    type: Boolean,
    default: false
  },
  time: {
    type: Number,
    default: 1000
  }
})
let num = ref(0)
function animate() {
  let t = Math.ceil(props.time / props.percentage)
  let timer = setInterval(() => {
    num.value += 1
    if (num.value >= props.percentage) {
      num.value = props.percentage
      clearInterval(timer)
    }
  }, t)
}
onMounted(() => {
  if (props.animation) {
    animate()
  }
})
</script>

<style scoped>
</style>
