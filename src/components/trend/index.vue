<template>
  <div class="trend">
    <slot v-if="slot.default"></slot>
    <div v-else>
      {{ text }}
    </div>
    <div class="icon">
      <el-icon :style="`color:${iconColor}`">
        <component :is="`el-icon-${type}`"></component>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue"

defineProps({
  text: {
    type: String,
    default: "默认字符串"
  },
  type: {
    type: String,
    default: "top"
  },
  iconColor: {
    type: String,
    default: "#000"
  }
})
let slot = useSlots()
console.log(slot)
</script>

<style scoped lang="scss">
.trend {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  .icon {
    color: red;
    font-size: 20px;
  }
}
</style>
