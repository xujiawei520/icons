import { fileURLToPath, URL } from "node:url"

import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import ElementPlus from "unplugin-element-plus/vite"
import IconsResolver from "unplugin-icons/resolver"
import Icons from "unplugin-icons/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import { defineConfig } from "vite"
import vueDevTools from "vite-plugin-vue-devtools"
// https://vite.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ["ep"] // 启用 Element Plus 图标集合（ep）
        })
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ["ep"] // 启用 Element Plus 图标集合
          // 可选：自定义图标组件前缀（默认是 `i`，如 `<i-ep-Edit />`）
          // prefix: 'icon',
        })
      ]
    }),
    // 自动安装图标组件（可选，但建议保留）
    Icons({
      autoInstall: true
    }),
    ElementPlus({})
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
