<template>
  <el-menu
    :collapse="isCollapse"
    router
    default-active="/home"
    :collapse-transition="false"
    class="el-menu-vertical-demo"
    :collapse1="isCollapse"
  >
    <MenuItem :tree-data="routePath" title="title" index="path" icon="icon" children="children"></MenuItem>
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"

defineProps<{ isCollapse: boolean }>()
let route = useRoute()
let routePath = route.matched[0].children.filter(item => item.meta)
</script>

<style scoped lang="scss">
svg {
  width: 1em;
  height: 1em;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
