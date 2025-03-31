<template>
  <div class="custom-upload">
    <el-upload
      :action="action"
      :headers="headers"
      :multiple="multiple"
      :limit="limit"
      :on-success="handleSuccess"
      :on-error="handleError"
      :before-upload="beforeUpload"
      :file-list="fileList"
      :auto-upload="autoUpload"
    >
      <template #trigger>
        <el-button type="primary">
          选择文件
        </el-button>
      </template>
      <template #tip>
        <div class="upload-tip">
          仅支持上传 {{ accept }} 类型的文件，单次最多上传 {{ limit }} 个
        </div>
      </template>
    </el-upload>
    <div v-if="fileList.length > 0" class="uploaded-files">
      <div v-for="(file, index) in fileList" :key="index" class="uploaded-file">
        <span>{{ file.name }}</span>
        <el-button size="mini" type="danger" @click="removeFile(index)">
          删除
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"
import { ref } from "vue"

// 接收外部传入的 props
const props = defineProps({
  action: {
    type: String,
    default: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
  },
  headers: {
    type: Object,
    default: () => ({})
  },
  multiple: {
    type: Boolean,
    default: false
  },
  limit: {
    type: Number,
    default: 1
  },
  accept: {
    type: Array,
    default: () => ["application/json", "text/javascript", "text/html", "image/jpeg", "image/png"]
  },
  autoUpload: {
    type: Boolean,
    default: true
  }
})

// 定义文件列表
const fileList = ref<File[]>([])

// 处理文件上传成功事件
function handleSuccess(response: any, file: File) {
  ElMessage.success("文件上传成功")
  fileList.value.push(file)
}

// 处理文件上传失败事件
function handleError(error: any) {
  let errorMessage = "文件上传失败"
  if (error && error.message) {
    errorMessage = `文件上传失败: ${error.message}`
  } else if (typeof error === "string") {
    errorMessage = `文件上传失败: ${error}`
  }
  ElMessage.error(errorMessage)
}

// 上传前的钩子函数
function beforeUpload(file: File) {
  const fileType = file.type
  if (!props.accept.includes(fileType)) {
    ElMessage.warning("不支持的文件类型")
    return false
  }
  return true
}

// 删除已上传的文件
function removeFile(index: number) {
  fileList.value.splice(index, 1)
}
</script>

<style scoped>
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
