import type { App } from "vue"
import SelectArea from "./index.vue"

export default {
  install(app: App) {
    app.component("SelectArea", SelectArea)
  }

}
