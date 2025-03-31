import type { App } from "vue"
import Mprogress from "./index.vue"

export default {
  install(app: App) {
    app.component("Mprogress", Mprogress)
  }
}
