<template>
  <el-form ref="form" v-if="model" :model="model" :rules="rules" :validate-on-rule-change="false" v-bind="$attrs">
    <template v-for="(item, index) in formOptions" :key="index">
      <el-form-item :prop="item.prop" :label="item.label" v-if="!item.options || item.options.length === 0">
        <component v-if="item.type !== 'upload'" v-bind="item.attrs" :placeholder="item.placeholder" v-model="model[item.prop!]" :is="`el-${item.type}`"></component>
        <el-upload
          v-else v-bind="$attrs" v-model:file-list="model[item.prop!]"
          :on-error="onError"
          :before-upload="beforeUpload"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        >
          <slot name="area"></slot>
          <slot name="tip"></slot>
        </el-upload>
      </el-form-item>
      <el-form-item :prop="item.prop" :label="item.label" v-else>
        <component v-bind="item.attrs" :placeholder="item.placeholder" v-model="model[item.prop!]" :is="`el-${item.type}`">
          <component v-for="(item1, index1) in item.options" :key="index1" :is="`el-${item1.type}`" :label="item1.label" :value="item1.value"></component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="submit" :form="form" :model="model"></slot>
      <slot name="reset" :form="form"></slot>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import type { FormOptions } from "@/types"
import type { FormInstance } from "element-plus"
import type { PropType } from "vue"
import { ElCheckbox, ElInput } from "element-plus"
import { cloneDeep } from "lodash-es"
import { onMounted, ref, watch } from "vue"

const props = defineProps({
  formOptions: {
    type: Array as PropType<FormOptions[]>,
    default: () => []
  }
})
const emits = defineEmits(["onError", "beforeUpload"])
let form = ref<FormInstance | null>()
let model = ref<any>(null)
let rules = ref<any>(null)

onMounted(() => {
  render()
})
function render() {
  if (props.formOptions && props.formOptions.length > 0) {
    let m: any = {}
    let r: any = {}
    props.formOptions.forEach((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
    console.log(model.value, rules.value)
  }
}
watch(() => props.formOptions, () => {
  render()
})
function onError(err: any) {
  emits("onError", err)
}
function beforeUpload(file: any) {
  console.log(file)
  emits("beforeUpload", file)
}
</script>

<style scoped>

</style>
