<template>
  <el-menu default-active="2" style="width: 200px;" :collapse="collapse" :collspae1="collapse">
    <MenuItem :tree-data="treeData" title="a" children="d" index="b" icon="icon"></MenuItem>
  </el-menu>
  <button @click="collapse = !collapse">
    btn
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue"

let collapse = ref(false)
const treeData = [
  {
    b: "1",
    meta: {
      icon: "House",
      a: "一级菜单 1",
      f: "name1"
    },
    d: [
      {

        b: "1-1",
        meta: {
          icon: "House",
          a: "二级菜单 1-1",
          f: "name1"
        }

      },
      {
        b: "1-2",
        meta: {
          icon: "House",
          a: "二级菜单 1-2",

          f: "name1"
        },
        d: [
          {
            b: "1-3-1",
            meta: {
              icon: "House",
              a: "三级菜单 1-3-1",

              f: "name1"
            }
          },
          {
            b: "1-3-2",
            meta: {
              icon: "House",
              a: "三级菜单 1-3-2",

              f: "name1"
            }
          }
        ]
      }
    ]
  },
  {
    b: "2",
    meta: {
      a: "一级菜单 2",

      icon: "House",
      f: "name1"
    }
  },
  {
    b: "3",
    meta: {
      icon: "House",
      a: "一级菜单 3",

      f: "name1"
    }
  }
]
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
