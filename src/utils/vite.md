Vite 是一个现代化的前端构建工具，它使用 Rollup 作为底层打包工具。Vite 的默认配置项已经经过优化，适合大多数项目的需求。如果你想详细了解 Vite 的默认配置项，可以通过查看 [Vite 官方文档](https://vitejs.dev/config/) 或其源码来获取更多信息。

以下是一个详细的 Vite 默认配置项列表，基于 Vite 的核心功能和插件行为：

---

### **1. 核心配置项**

#### **root**

- **类型**: `string`
- **默认值**: `process.cwd()`（当前工作目录）
- **说明**: 指定项目的根目录。Vite 会从该目录开始解析文件。

#### **base**

- **类型**: `string`
- **默认值**: `/`
- **说明**: 部署时的基本路径。如果应用部署在子路径下（如 `/app/`），需要设置为相应的路径。

#### **mode**

- **类型**: `string`
- **默认值**: `development`（开发模式）或 `production`（生产模式）
- **说明**: 指定当前运行环境的模式。可以通过 `import.meta.env.MODE` 访问。

#### **define**

- **类型**: `{ [key: string]: string }`
- **默认值**: 无
- **说明**: 定义全局常量替换。例如：
  ```javascript
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0'),
  },
  ```

#### **plugins**

- **类型**: `Plugin[]`
- **默认值**: 无
- **说明**: 配置 Vite 插件。可以是内置插件或第三方插件。

#### **publicDir**

- **类型**: `string | false`
- **默认值**: `'public'`
- **说明**: 指定公共目录。该目录下的文件会被直接复制到构建输出目录中。

#### **cacheDir**

- **类型**: `string`
- **默认值**: `node_modules/.vite`
- **说明**: 指定缓存目录。用于存储预构建的依赖和中间文件。

#### **resolve.alias**

- **类型**: `{ [key: string]: string } | Array<{ find: string | RegExp, replacement: string }>`
- **默认值**: 无
- **说明**: 配置路径别名。例如：
  ```javascript
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ```

#### **resolve.dedupe**

- **类型**: `string[]`
- **默认值**: 无
- **说明**: 强制将某些依赖解析为同一个版本，避免重复加载。

#### **resolve.conditions**

- **类型**: `string[]`
- **默认值**: 无
- **说明**: 配置条件导出的优先级。

#### **resolve.mainFields**

- **类型**: `string[]`
- **默认值**: `['module', 'jsnext:main', 'jsnext']`
- **说明**: 解析包入口时的字段优先级。

#### **resolve.extensions**

- **类型**: `string[]`
- **默认值**: `['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']`
- **说明**: 自动补全的文件扩展名。

---

### **2. 开发服务器配置项**

#### **server.host**

- **类型**: `string | boolean`
- **默认值**: `'localhost'`
- **说明**: 指定开发服务器监听的主机地址。设置为 `true` 时会监听所有地址。

#### **server.port**

- **类型**: `number`
- **默认值**: `3000`
- **说明**: 开发服务器的端口号。

#### **server.strictPort**

- **类型**: `boolean`
- **默认值**: `false`
- **说明**: 如果端口被占用，是否抛出错误。

#### **server.https**

- **类型**: `boolean | https.ServerOptions`
- **默认值**: `false`
- **说明**: 启用 HTTPS，并可配置自定义选项。

#### **server.open**

- **类型**: `boolean | string`
- **默认值**: `false`
- **说明**: 是否自动打开浏览器。可以指定具体的路径。

#### **server.proxy**

- **类型**: `Record<string, string | ProxyOptions>`
- **默认值**: 无
- **说明**: 配置代理规则。例如：
  ```javascript
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
  ```

#### **server.cors**

- **类型**: `boolean | CorsOptions`
- **默认值**: `true`
- **说明**: 配置跨域资源共享（CORS）。

#### **server.force**

- **类型**: `boolean`
- **默认值**: `false`
- **说明**: 强制依赖预构建，即使缓存存在。

---

### **3. 构建配置项**

#### **build.target**

- **类型**: `string | string[]`
- **默认值**: `'modules'`
- **说明**: 构建目标的浏览器兼容性。例如：`esnext`、`es2020`。

#### **build.polyfillModulePreload**

- **类型**: `boolean`
- **默认值**: `true`
- **说明**: 是否注入模块预加载的 polyfill。

#### **build.outDir**

- **类型**: `string`
- **默认值**: `'dist'`
- **说明**: 构建输出目录。

#### **build.assetsDir**

- **类型**: `string`
- **默认值**: `'assets'`
- **说明**: 静态资源的存放目录。

#### **build.assetsInlineLimit**

- **类型**: `number`
- **默认值**: `4096`（4KB）
- **说明**: 小于该大小的静态资源会被内联为 base64。

#### **build.cssCodeSplit**

- **类型**: `boolean`
- **默认值**: `true`
- **说明**: 是否启用 CSS 拆分。

#### **build.sourcemap**

- **类型**: `boolean | 'inline' | 'hidden'`
- **默认值**: `false`
- **说明**: 是否生成 source map。

#### **build.rollupOptions**

- **类型**: `RollupOptions`
- **默认值**: 无
- **说明**: 自定义 Rollup 配置。

#### **build.minify**

- **类型**: `'terser' | 'esbuild' | false`
- **默认值**: `'esbuild'`
- **说明**: 使用的代码压缩工具。

#### **build.terserOptions**

- **类型**: `TerserOptions`
- **默认值**: 无
- **说明**: Terser 的额外配置。

#### **build.write**

- **类型**: `boolean`
- **默认值**: `true`
- **说明**: 是否将构建结果写入磁盘。

#### **build.emptyOutDir**

- **类型**: `boolean`
- **默认值**: `true`
- **说明**: 是否清空输出目录。

---

### **4. CSS 配置项**

#### **css.modules**

- **类型**: `CSSModulesOptions | false`
- **默认值**: 无
- **说明**: 配置 CSS 模块的行为。

#### **css.postcss**

- **类型**: `string | PostCSS.ProcessOptions`
- **默认值**: 无
- **说明**: 自定义 PostCSS 配置。

#### **css.preprocessorOptions**

- **类型**: `{ [key: string]: any }`
- **默认值**: 无
- **说明**: 配置 CSS 预处理器的选项。例如：
  ```javascript
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  ```

---

### **5. 其他配置项**

#### **envPrefix**

- **类型**: `string | string[]`
- **默认值**: `'VITE_'`
- **说明**: 环境变量前缀。

#### **logLevel**

- **类型**: `'info' | 'warn' | 'error' | 'silent'`
- **默认值**: `'info'`
- **说明**: 日志级别。

#### **clearScreen**

- **类型**: `boolean`
- **默认值**: `true`
- **说明**: 是否在启动时清屏。

#### **optimizeDeps**

- **类型**: `DepOptimizationOptions`
- **默认值**: 无
- **说明**: 依赖优化的配置。

---

### 总结

以上是 Vite 的默认配置项的详细列表。你可以根据项目需求覆盖这些默认配置。如果你需要更高级的功能，可以参考 [Vite 官方文档](https://vitejs.dev/config/) 或其源码中的 `defaultConfig` 文件。

希望这份清单对你有所帮助！
