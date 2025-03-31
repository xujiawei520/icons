import type { App } from "vue"
import MyTable from "./index.vue"

export default {
  install(app: App) {
    app.component("MyTable", MyTable)
  }
}
