<template>
  <MyTable :data="data" :options="options" @changename="changename" is-edit-row :index="editIndex" :pagesize="pagesize" :page="currentPage" :total="total" @changedata="change">
    <template #operation>
      <div style="display: flex;">
        <el-button type="primary" @click="edit()" size="small">
          编辑
        </el-button>
        <el-button type="danger" @click="delete1()" size="small">
          删除
        </el-button>
      </div>
    </template>
    <template #editor="{ scope }">
      <div style="display: flex;">
        <el-button type="primary" size="small" @click.stop="confirm(scope)">
          确认
        </el-button>
        <el-button type="danger" @click="cancel()" size="small">
          取消
        </el-button>
      </div>
    </template>
  </MyTable>
</template>

<script setup lang="ts">
import type { TableOptions } from "@/types"
import axios from "axios"
// import { CloseBold, Select } from "@element-plus/icons-vue"
import { onMounted, ref } from "vue"

let pagesize = ref(10)
let currentPage = ref(1)
let total = ref(0)

onMounted(() => {
  getMsg()
})
function getMsg() {
  axios.post("/api/tablelist", {
    page: currentPage.value,
    pagesize: pagesize.value
  }).then((res: any) => {
    console.log(res)
    total.value = res.data.total
    data.value = res.data.data
  })
}
function change(val: any) {
  data.value = val
}
// 表格数据
const data = ref()
// 表格配置
let options: TableOptions[] = [
  {
    prop: "date",
    label: "日期",
    width: "180px"
  },
  {
    prop: "name",
    label: "姓名",
    width: "180px",
    editor: true
  },
  {
    prop: "address",
    label: "地址",
    width: "300px"
  },
  {
    prop: "operation",
    label: "操作",
    width: "180px",
    action: true
  }
]
// 按钮标识
let editIndex = ref("edit")
// 编辑按钮
function edit() {
  editIndex.value = "edit"
}
// 确认按钮
function confirm(val: any) {
  editIndex.value = "cancel"
  data.value[val.$index] = val.row
  console.log(data.value)
}
// 取消按钮
function cancel() {
  editIndex.value = "cancel"
}

// 删除按钮
function delete1() {
  editIndex.value = "delete"
}
// 自定义事件触发修改数据
function changename(val: any) {
  data.value[val.index].name = val.value
}
</script>

<style scoped>
svg {
  width: 1em;
  height: 1em;
}
input {
  border: 1px solid #000;
  width: 100px;
}
</style>
