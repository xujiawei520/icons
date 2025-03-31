import Area from "@/components/area/index.vue"
import {type App} from "vue"

export default {
  install(app: App) {
    app.component("Area", Area)
  }
}
