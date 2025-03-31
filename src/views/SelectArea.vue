<template>
  <SelectArea @select-city="selectCity" :cities="cities" :province="province"></SelectArea>
</template>

<script setup lang="ts">
import citys from "@/utils/city.json"
import province from "@/utils/province.json"

let { data: { cities } } = citys
function selectCity(val: string) {
  console.log(val)
}
</script>

<style scoped>
</style>
