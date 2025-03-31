<template>
  <template v-for="item in treeData" :key="item[index]">
    <!-- 没有children时 -->
    <el-menu-item :index="item[index]" v-if="!item[children] || item[children].length === 0">
      <!-- 不折叠时显示 -->
      <template #title v-if="collapse1 === true">
        <el-icon v-if="item.meta[icon]">
          <component :is="`el-icon-${handleLower(item.meta[icon])}`" />
        </el-icon>
        <span>{{ item.meta[title] }}</span>
      </template>
      <!-- 折叠时显示 -->
      <template v-if="collapse1 === false">
        <el-icon v-if="item.meta[icon]">
          <component :is="`el-icon-${handleLower(item.meta[icon])}`" />
        </el-icon>
        <span>{{ item.meta[title] }}</span>
      </template>
    </el-menu-item>
    <!-- 有children时 -->
    <el-sub-menu v-else :index="item[index]">
      <template #title>
        <el-icon v-if="item.meta[icon]">
          <component :is="`el-icon-${handleLower(item.meta[icon])}`" />
        </el-icon>
        <span>{{ item.meta[title] }}</span>
      </template>
      <SideBarMenu
        :tree-data="item[children]"
        :title="title"
        :index="index"
        :icon="icon"
        :children="children"
      />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import type { PropType } from "vue"

defineOptions({
  name: "SideBarMenu"
})
defineProps({
  // 菜单数据
  treeData: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  // 菜单标题
  title: {
    type: String,
    default: "title"
  },
  // 菜单唯一标识 路径
  index: {
    type: String,
    default: "index"
  },
  // 菜单图标
  icon: {
    type: String,
    default: "icon"
  },
  // 子菜单
  children: {
    type: String,
    default: "children"
  },
  // 折叠状态
  collapse1: {
    type: Boolean,
    default: false
  }
})
// 匹配正则，将驼峰转小写
function handleLower(val: string) {
  return val.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
}
</script>

<style scoped>

</style>
