import type { App } from "vue"
import MyUpload from "./index.vue"

export default {
  install(app: App) {
    app.component("MyUpload", MyUpload)
  }
}
