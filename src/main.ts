import myui from "@/components/index.ts"

import * as ElementPlusIconsVue from "@element-plus/icons-vue"
// import ElementPlus from "element-plus"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { get } from "./utils/index"
// import "element-plus/dist/index.css"
import "@/mock"
// import "@/assets/reset.scss"

let app = createApp(App)

// app.use(ElementPlus)

app.use(router)
app.use(myui)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${get(key)}`, component)
}
app.mount("#app")
