<template>
  <el-popover placement="right" :width="400" trigger="click" content="111111111111">
    <template #reference>
      <el-badge :value="value" :max="max" :is-dot="isDot" :type="type">
        <slot v-if="slot.default"></slot>
        <component v-else :is="`el-icon-${get(icon)}`"></component>
      </el-badge>
    </template>
    <slot name="list"></slot>
  </el-popover>
</template>

<script setup lang="ts">
import { useSlots } from "vue"
import { get } from "../../utils/index"

defineProps({
  icon: {
    type: String,
    default: "Bell"
  },
  type: {
    type: String,
    default: "danger"
  },
  value: {
    type: [Number, String],
    default: 0
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: {
    type: Boolean,
    default: false
  }
})
const slot = useSlots()
</script>

<style scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
