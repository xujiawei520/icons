import type { App } from "vue"
import MenuItem from "./index.vue"

export default {
  install(app: App) {
    app.component("MenuItem", MenuItem)
  }
}
