<template>
  <el-container>
    <el-aside width="auto" class="el-aside">
      <Elaside :is-collapse="isCollapse"></Elaside>
    </el-aside>
    <el-container>
      <el-header>
        <Elheader v-model="isCollapse"></Elheader>
      </el-header>
      <el-main>
        <Elmain></Elmain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Elaside from "@/components/menu/Elaside.vue"
import Elheader from "@/components/menu/Elheader.vue"
import Elmain from "@/components/menu/Elmain.vue"
import { ref } from "vue"

let isCollapse = ref(false)
</script>

<style scoped lang="scss">
.el-aside {
  height: 100vh;
  .el-menu {
    height: 100%;
  }
}
.el-header {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.icon-size {
  width: 30px;
  height: 30px;
}
.el-main {
  height: calc(100vh - 50px);
  overflow-y: scroll;
}
// :deep(.el-header){
//   margin: 0;
//   padding: 0;
// }
</style>
