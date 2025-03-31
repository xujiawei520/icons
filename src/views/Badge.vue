<template>
  <p>
    <Notification :value="101"></Notification>
  </p>
  <br />
  <p>
    <Notification :max="10" is-dot></Notification>
  </p>
  <br />

  <p>
    <Notification icon="House"></Notification>
  </p>
  <br />

  <p>
    <Notification icon="House" :value="5">
      <img src="@/assets/tz.png" alt="" style="width: 30px;" />
      <template #list>
        <div class="list-item">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="User" name="first">
              User
            </el-tab-pane>
            <el-tab-pane label="Config" name="second">
              Config
            </el-tab-pane>
            <el-tab-pane label="Role" name="third">
              Role
            </el-tab-pane>
            <el-tab-pane label="Task" name="fourth">
              Task
            </el-tab-pane>
          </el-tabs>
          <div style="display: flex;border-top: 1px solid #ccc;">
            <div class="left" style="flex:1;text-align: center;">
              left
            </div>
            <div class="right" style="flex:1;text-align: center;">
              right
            </div>
          </div>
        </div>
      </template>
    </Notification>
  </p>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from "element-plus"
import { ref } from "vue"

const activeName = ref("first")

function handleClick(tab: TabsPaneContext, event: Event) {
  console.log(tab, event)
}
</script>

<style scoped lang="scss">
:deep(.el-tabs__nav) {
  width: 100%;
}
:deep(.el-tabs__item) {
  flex: 1;
}
</style>
