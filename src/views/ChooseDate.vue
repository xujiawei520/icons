<template>
  <ChooseDate @change-start="changeStart" @change-end="changeEnd"></ChooseDate>
</template>

<script setup lang="ts">
function changeStart(value: Date) {
  console.log(value)
}
function changeEnd(value: Date) {
  console.log(value)
}
</script>

<style scoped>
</style>
