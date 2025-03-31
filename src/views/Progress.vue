<template>
  <Mprogress :percentage="percentage" :animation="true"></Mprogress>
  <Mprogress :percentage="percentage" type="circle" :animation="true"></Mprogress>
</template>

<script setup lang="ts">
import { ref } from "vue"

let percentage = ref<number>(50)
</script>

<style scoped>
</style>
