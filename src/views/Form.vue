<template>
  <MyForm :form-options="FormOptions1" label-width="100" @on-error="onError" @before-upload="beforeUpload">
    <template #area>
      <el-button type="primary">
        上传
      </el-button>
    </template>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
    <template #submit="scoped">
      <el-button @click="onClick(scoped)" type="primary">
        提交
      </el-button>
    </template>
    <template #reset="scoped">
      <el-button @click="onReset(scoped)">
        重置
      </el-button>
    </template>
  </MyForm>
  <div style="border: 1px solid #ccc" v-show="show">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden;"
      v-model="valueHtml"
      :default-config="editorConfig"
      :mode="mode"
      @on-created="handleCreated"
      @on-blur="handleBlur"
    />
  </div>
</template>

<script setup lang="ts">
import type { FormOptions } from "@/types"
import { Editor, Toolbar } from "@wangeditor/editor-for-vue"
import { ElMessage } from "element-plus"
import { onBeforeUnmount, onMounted, ref, shallowRef } from "vue"
import "@wangeditor/editor/dist/css/style.css"
// 引入 css
type InsertFnType = (url: string, alt?: string, href?: string) => void

// 编辑器实例，必须用 shallowRef
let show = ref(true)
const toolbarConfig = {}
const editorConfig = { MENU_CONF: {
  uploadImage: {}
}, placeholder: "请输入内容..." }
const editorRef = shallowRef()
const mode = "default"
// 内容 HTML
const valueHtml = ref()

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p></p>"
  }, 1000)
})

function handleBlur() {
  console.log("blur", valueHtml.value)
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

function handleCreated(editor: any) {
  editorRef.value = editor // 记录 editor 实例，重要！
}
// 自定义上传图片
editorConfig.MENU_CONF.uploadImage = {
  // 自定义上传
  //   async customUpload(file: File, insertFn: InsertFnType) {
  // TS 语法
  async customUpload(file: File, insertFn: InsertFnType) {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("text", valueHtml.value)
    let url = URL.createObjectURL(file)
    insertFn(url)
  }
}
function onError(err: any) {
  console.log("onError", err)
}
function beforeUpload(file: any) {
  console.log(file)
}
function onClick(scoped: any) {
  scoped.form.validate((valid: any) => {
    if (valid) {
      console.log("校验通过", scoped.model)
      ElMessage.success("校验通过")
    } else {
      console.log("校验不通过", scoped.model)
      ElMessage.error("校验不通过")
    }
  })
}
function onReset(scoped: any) {
  scoped.form.resetFields()
}
const FormOptions1 = ref<FormOptions[]>([
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "name",
    placeholder: "请输入用户名",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur"
      },
      {
        min: 3,
        max: 5,
        message: "用户名长度在3-5之间",
        trigger: "blur"
      }
    ],
    attrs: {
      clearable: true
    }
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    placeholder: "请输入密码",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur"
      },
      {
        min: 6,
        max: 12,
        message: "密码长度在6-12之间",
        trigger: "blur"
      }
    ],
    attrs: {
      clearable: true,
      showPassword: true
    }
  },
  {
    type: "select",
    value: "",
    label: "性别",
    prop: "sex",
    placeholder: "请选择性别",
    options: [
      {
        type: "option",
        label: "男",
        value: "男"
      },
      {
        type: "option",
        label: "女",
        value: "女"
      }
    ],
    rules: [
      {
        required: true,
        message: "请选择性别",
        trigger: "change"
      }
    ]
  },
  {
    type: "checkbox-group",
    value: [],
    prop: "like",
    label: "爱好",
    rules: [
      {
        required: true,
        message: "请选择爱好",
        trigger: "change"
      }
    ],
    options: [
      {
        type: "checkbox",
        label: "吃饭",
        value: "吃饭"
      },
      {
        type: "checkbox",
        label: "睡觉",
        value: "睡觉"
      },
      {
        type: "checkbox",
        label: "打豆豆",
        value: "打豆豆"
      }
    ]
  },
  {
    type: "radio-group",
    value: "",
    prop: "hobby",
    label: "兴趣",
    options: [
      {
        type: "radio",
        label: "吃饭",
        value: "吃饭"
      },
      {
        type: "radio",
        label: "睡觉",
        value: "睡觉"
      },
      {
        type: "radio",
        label: "打豆豆",
        value: "打豆豆"
      }
    ]
  },
  {
    type: "upload",
    prop: "upload",
    label: "上传",
    value: [{
      name: "element-plus-logo.svg",
      url: "https://element-plus.org/images/element-plus-logo.svg"
    }, {
      name: "element-plus-logo2.svg",
      url: "https://element-plus.org/images/element-plus-logo.svg"
    }]

  }
])
</script>

<style scoped lang="scss">
.custom-upload {
  border: 1px dashed #ccc;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
}

.upload-tip {
  margin-top: 10px;
  color: #999;
  font-size: 12px;
}

.uploaded-files {
  margin-top: 20px;
}

.uploaded-file {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
