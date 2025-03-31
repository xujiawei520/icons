import type { App } from "vue"
import Notification from "./index.vue"

export default {
  install(app: App) {
    app.component("Notification", Notification)
  }
}
