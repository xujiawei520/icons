<template>
  <el-button @click="onClick" type="primary">
    选择图标
    <slot></slot>
  </el-button>
  <el-dialog v-model="localVisable" @close="close">
    <div class="dialog">
      <div
        v-for="item in arr"
        :key="item.title"
        class="icon-item"
        @click="copy(item.title as string)"
      >
        <div class="icon">
          <el-icon>
            <!-- <component :is="`el-icon-${get(item.title)}`" /> -->
            <component :is="item.icon" />
          </el-icon>
        </div>
        <span>
          {{ item.title }}
        </span>
      </div>
    </div>
  </el-dialog>
  <component :is="item" v-for="(item, index) in iconarr" :key="index"></component>
  <!-- <el-icon> <Edit></Edit> </el-icon> -->
  <!-- <i-ep-Edit></i-ep-Edit> -->
</template>

<script setup lang="ts">
import { useCopy } from "@/hooks/useCopy"
import { get } from "@/utils/index"
import { ref, watch } from "vue"

let props = defineProps<{
  title: string
  visable: boolean
  obj: IProps
  arr: Array<IProps>
  iconarr: Array<IProps>
}>()

let emit = defineEmits(["dbClick"])

interface IProps {
  title?: string
  icon?: any
}
let localVisable = ref(props.visable)
// console.log(getCurrentInstance())

watch(() => props.visable, (val) => {
  localVisable.value = val
})
function onClick() {
  emit("dbClick", localVisable.value)
}
function close() {
  emit("dbClick", localVisable.value)
}
function copy(val: string) {
  let text = `<el-icon-${get(val)}></el-icon-${get(val)}>`
  useCopy(text)
  localVisable.value = false
}
</script>

<style scoped lang="scss">
.dialog {
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  overflow: scroll;
  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border: 1px solid #ccc;
    margin-right: 10px;
    margin-top: 10px;
    width: 150px;
    height: 100px;
    .el-icon {
      font-size: 30px;
    }
  }
}
:deep(.el-dialog__body) {
  height: 500px !important;
  overflow: scroll !important;
}
svg {
  width: 1em;
  height: 1em;
}
</style>
