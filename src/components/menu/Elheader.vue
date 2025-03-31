<template>
  <el-icon-expand class="icon-size" v-if="!modelValue" @click="change"></el-icon-expand>
  <el-icon-fold class="icon-size" v-else @click="change"></el-icon-fold>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits<{
  (event: "update:modelValue", value: boolean): void
}>()
function change() {
  emit("update:modelValue", !props.modelValue)
}
</script>

<style scoped lang="scss">

</style>
