<template>
  <el-table v-bind="$attrs" :data="cloneData" @row-click="rowClick">
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
      >
        <template #default="scope">
          <!-- 默认的table-item -->
          <template v-if="indexValue !== scope.$index + scope.column.id">
            <!-- 有插槽的table-item -->
            <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
            <!-- 没有插槽的table-item -->
            <template v-else>
              <!-- 整行编辑 默认的整行数据 -->
              <template v-if="!scope.row.editorRow">
                <span>{{ scope.row[item.prop] }}</span>
                <component :is="`el-icon-${get(icon)}`" v-if="item.editor" @click.stop="confirm(scope)"></component>
              </template>
              <!-- 整行编辑 替换的整行数据 -->
              <template v-else>
                <el-input type="text" v-model="scope.row[item.prop]" />
              </template>
            </template>
            <!-- 自定义编辑的图标 -->
          </template>
          <!-- 替换的table-item -->
          <template v-else>
            <el-input type="text" size="small" v-model="scope.row.name" style="width:70px" />
            <el-button :icon="Select" @click.stop="changeName(scope)" size="small" circle type="primary"></el-button>
            <el-button :icon="CloseBold" @click.stop="indexValue = ''" size="small" circle type="danger"></el-button>
          </template>
        </template>
      </el-table-column>
    </template>
    <!-- 自定义项 -->
    <el-table-column :label="actionOptions!.label">
      <template #default="scope">
        <slot name="editor" v-if="scope.row.editorRow" :scope="scope"></slot>
        <slot name="operation" :scope="scope" v-else></slot>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination">
    <el-pagination background layout="prev, pager, next" :total="total" @change="change" />
  </div>
</template>

<script setup lang="ts">
import type { TableOptions } from "@/types/index"
import type { PropType } from "vue"
import { get } from "@/utils"
import { CloseBold, Select } from "@element-plus/icons-vue"
import axios from "axios"
import { cloneDeep } from "lodash-es"
import { computed, onMounted, ref, watch } from "vue"

const props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    require: true,
    default: () => []
  },
  data: {
    type: Array as PropType<TableOptions[]>,
    require: true,
    default: () => []
  },
  // 自定义图标
  icon: {
    type: String,
    default: "Edit"
  },
  // 是否可以编辑整行
  isEditRow: {
    type: Boolean,
    default: false
  },
  index: {
    type: String,
    default: "edit"
  },
  total: {
    type: Number,
    default: 0
  },
  page: {
    type: Number,
    default: 1
  },
  pagesize: {
    type: Number,
    default: 10
  }
})
const emits = defineEmits(["changename", "changedata"])
// 拷贝表格数据
let cloneData = ref(cloneDeep(props.data))
// 拷贝按钮的索引
let cloneEditIndex = ref(props.index)
// 分页
function change(i: number, v: number) {
  axios.post("/api/tablelist", {
    page: i,
    pagesize: v
  }).then((res: any) => {
    emits("changedata", res.data.data)
  })
}
onMounted(() => {
  // 初始化给data添加editorRow属性
  cloneData.value.forEach((item) => {
    item.editorRow = false
  })
})
// 监听props.index的值
watch(() => props.index, (newValue) => {
  cloneEditIndex.value = newValue
})
// 监听props.data的值 如果值变化了 就重新赋值
watch(() => props.data, (val) => {
  cloneData.value = cloneDeep(val)
  cloneData.value.forEach((item) => {
    item.editorRow = false
  })
}, { deep: true })
// 没有插槽的表格数据
let tableOptions = computed(() => props.options.filter(item => !item.action))
// 自定义项
let actionOptions = computed(() => props.options.find(item => item.action))

// 唯一值 用于检查点击哪一行的edit按钮
let indexValue = ref()
// 点击编辑图标
function confirm(scope: any) {
  indexValue.value = scope.$index + scope.column.id
  // console.log(indexValue.value)
}
// 点击确定修改内容
function changeName(scope: any) {
  emits("changename", { value: scope.row.name, index: scope.$index })
  indexValue.value = ""
}
// 点击每一行
function rowClick(row: any, column: any) {
  // 点击的是否是操作项
  if (column.label === actionOptions.value?.label) {
    // 点击的是否是编辑按钮 将editorRow取反
    if (props.isEditRow && cloneEditIndex.value === "edit") {
      row.editorRow = !row.editorRow
      // 将其他行变为false
      cloneData.value.forEach((item) => {
        if (item !== row) {
          item.editorRow = false
        }
      })
    }
    if (cloneEditIndex.value === "cancel") {
      row.editorRow = false
    }
  }
}
</script>

<style scoped>
svg {
  position: relative;
  top: 3px;
  width: 1em;
  height: 1em;
  margin-left: 3px;
}
input {
  border: 1px solid #000;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
</style>
