<template>
  <div class="wrap">
    <Trend text="销量" type="top" icon-color="red">
      123
    </Trend>
    <Trend text="价格" type="bottom" icon-color="green"></Trend>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
</script>

<style scoped>
.wrap {
  display: flex;
}
</style>
