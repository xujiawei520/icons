import type { App } from "vue"
import Fullcalendar from "./index.vue"

export default {
  install(app: App) {
    app.component("Fullcalendar", Fullcalendar)
  }
}
