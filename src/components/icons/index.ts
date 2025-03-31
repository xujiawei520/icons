import {type App} from "vue"
import Icon from "@/components/icons/index.vue"

export default {
  install(app: App) {
    app.component("Icon", Icon)
  }
}
