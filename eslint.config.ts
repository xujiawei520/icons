import antfu from "@antfu/eslint-config"

// 更多自定义配置可查阅仓库：https://github.com/antfu/eslint-config
export default antfu(
  {
    // 使用外部格式化程序格式化 css、html、markdown 等文件
    formatters: true,
    // 启用样式规则
    stylistic: {
      // 缩进级别
      indent: 2,
      // 引号风格 'single' | 'double'
      quotes: "double",
      // 是否启用分号
      semi: false
    },
    // 忽略文件
    ignores: []
  },
  {
    // 对所有文件都生效的规则
    rules: {
      // vue
      "vue/block-order": ["error", { order: ["template", "script", "style"] }],
      "vue/attributes-order": "off",
      // ts
      "ts/no-use-before-define": "off",
      // node
      "node/prefer-global/process": "off",
      // style
      "style/comma-dangle": ["error", "never"],
      "style/brace-style": ["error", "1tbs"],
      // regexp
      "regexp/no-unused-capturing-group": "off",
      // other
      "no-console": "off",
      "no-debugger": "off",
      "symbol-description": "off",
      "antfu/if-newline": "off",
      "unicorn/no-instanceof-builtins": "off",
      "vue/multi-word-component-names": "off", // 组件允许单个单词
      "prefer-const": "off",
      "prefer-arrow-callback": "off",
      // 关闭 arrow-body-style 规则，不强制使用特定的箭头函数体风格
      "arrow-body-style": "off",
      // 关闭 vue/block-order 规则，不强制要求 script、template 和 style 标签的顺序
      // 配置 vue/html-self-closing 规则
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "never",
            component: "any"
          },
          svg: "always",
          math: "always"
        }
      ]
    }
  }
)
