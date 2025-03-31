<template>
  <Area @change="change"></Area>
</template>

<script setup lang="ts">
// import Area from "@/components/area/index.vue"

function change(val: any) {
  console.log(val)
}
</script>

<style scoped>
</style>
