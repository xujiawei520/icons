import { ElMessage } from "element-plus"

export async function useCopy(text: string) {
  // const input = document.createElement("input")
  // input.value = text
  // document.body.appendChild(input)
  // input.select = async () => {
  if ("clipboard" in navigator) {
    try {
      ElMessage({
        message: "复制成功",
        type: "success"
      })
      await navigator.clipboard.writeText(text)
    } catch (err) {
      ElMessage({
        message: `复制失败${err}`,
        type: "error"
      })
    }
  } else {
    document.execCommand("copy")
  }
  // }
  // document.body.removeChild(input)
  // await navigator.clipboard.writeText(text)
  // console.log("复制成功")
}
