import type { App } from "vue"
import ChooseDate from "./index.vue"

export default {
  install(app: App) {
    app.component("ChooseDate", ChooseDate)
  }
}
