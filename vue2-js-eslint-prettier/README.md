# Vue 2 + JavaScript + ESLint + Prettier 项目

这是一个演示 Vue 2、JavaScript、ESLint 和 Prettier 集成的示例项目。

## 项目结构

```
vue2-js-eslint-prettier/
├── src/
│   ├── api/           # API 请求服务
│   │   └── index.js
│   ├── components/    # Vue 组件
│   │   └── HelloGreeting.vue
│   ├── views/         # 页面组件
│   │   ├── HomeView.vue
│   │   └── AboutView.vue
│   ├── router/        # 路由配置
│   │   └── index.js
│   ├── App.vue        # 根组件
│   └── main.js        # 入口文件
├── .eslintrc.js       # ESLint 配置
├── .prettierrc        # Prettier 配置
├── vue.config.js      # Vue CLI 配置
└── package.json       # 项目依赖和脚本
```

## 安装和运行

### Windows + NVM 设置

1. **查看已安装的 Node 版本**：
   ```bash
   nvm ls
   ```

2. **切换到推荐的 Node 版本**（Vue 2 推荐使用 Node 14-16）：
   ```bash
   nvm use 16.18.0
   ```

3. **验证 Node 版本**：
   ```bash
   node -v
   ```

4. **安装 Vue CLI**：
   ```bash
   npm install -g @vue/cli
   ```

5. **安装项目依赖**：
   ```bash
   npm install
   ```

6. **启动开发服务器**：
   ```bash
   npm run serve
   ```

7. **构建生产版本**：
   ```bash
   npm run build
   ```

### Windows + NVM 注意事项

#### 可能的问题和解决方案

1. **权限问题**：
   - 如果运行 `npm install` 时遇到权限错误，请尝试以管理员身份运行命令提示符。
   - 或者，您可以配置 npm 使用不同的全局包目录：
     ```bash
     npm config set prefix "%USERPROFILE%\.npm-global"
     ```

2. **PATH 配置**：
   - 确保 NVM 和 Node.js 路径已正确添加到 Windows PATH 环境变量中。
   - 默认 NVM 路径通常是 `%USERPROFILE%\AppData\Roaming\nvm`。
   - 当您运行 `nvm use` 时，它会在 `C:\Program Files\nodejs` 中创建一个指向所选 Node 版本的符号链接。

3. **默认 Node 版本**：
   - 要为新的命令提示符设置默认 Node 版本：
     ```bash
     nvm alias default 16.18.0
     ```

## ESLint + Prettier 协作机制

### 它们如何协同工作

1. **ESLint**：
   - 执行代码质量规则
   - 捕获 JavaScript 错误
   - 集成 Vue 特定规则
   - 确保代码遵循最佳实践

2. **Prettier**：
   - 一致地格式化代码
   - 处理缩进、间距和换行
   - 如果在编辑器中配置，会在保存时自动运行

3. **集成方式**：
   - ESLint 使用 `eslint-config-prettier` 禁用冲突规则
   - Prettier 格式化代码，然后 ESLint 检查代码质量
   - Vue CLI 提供了方便的 lint 命令来检查和修复代码

### 配置文件

- `.eslintrc.js`：Vue 和 JavaScript 的 ESLint 规则和扩展
- `.prettierrc`：Prettier 格式化选项
- `vue.config.js`：Vue CLI 配置
- `package.json`：项目依赖和脚本

## 关键学习点

1. **Vue 2 选项式 API**：
   - 使用 data、methods、computed、watch 等选项组织组件逻辑
   - 生命周期钩子的使用（created、mounted、updated、destroyed）
   - 组件通信（props、$emit、$parent、$children）
   - 使用 `v-bind` 和 `v-on` 指令进行数据绑定和事件监听
   - 使用 `v-if`、`v-for` 等指令进行条件渲染和列表渲染

2. **Vue Router 3**：
   - 使用 `vue-router` 配置路由
   - 组件懒加载
   - 编程式导航
   - 路由参数传递
   - 路由守卫的使用（beforeEach、beforeRouteEnter等）

3. **组件设计**：
   - 组件的拆分和复用
   - 组件的 props 和事件
   - 组件的生命周期管理
   - 组件的样式隔离（scoped CSS）
   - 组件的插槽（slot）使用

4. **API 处理**：
   - 使用 Async/await 语法处理 API 请求
   - 使用 try/catch 块进行错误处理
   - 加载状态管理
   - 在组件中更新数据
   - 使用 Vue 的响应式系统自动更新视图

5. **代码质量和格式化**：
   - Vue 和 JavaScript 的 ESLint 规则
   - 使用 Prettier 保持一致的代码风格
   - 编辑器集成提供实时反馈
   - Vue 特定的 ESLint 规则（如属性顺序、组件命名等）

6. **响应式数据处理**：
   - 使用 `Vue.set` 或 `this.$set` 向响应式对象添加新属性
   - 使用 `vm.$nextTick` 在 DOM 更新后执行回调
   - 使用 `vm.$forceUpdate` 强制组件重新渲染

7. **Vue 2 与 Vue 3 的对比**：
   - 选项式 API vs 组合式 API
   - 响应式系统的差异（Object.defineProperty vs Proxy）
   - 生命周期钩子的变化
   - 组件模板的改进

8. **性能优化**：
   - 使用 `v-once` 指令避免不必要的重新渲染
   - 使用 `v-memo` 指令缓存模板片段
   - 合理使用 computed 属性避免重复计算
   - 使用 `keep-alive` 组件缓存组件实例

## 脚本命令

- `npm run serve`：启动开发服务器
- `npm run build`：构建生产版本
- `npm run lint`：运行 ESLint 检查
- `npx prettier --write .`：使用 Prettier 格式化所有文件

## 编辑器设置

为了获得最佳开发体验，我们推荐：

1. **VS Code** 与以下扩展：
   - ESLint
   - Prettier - Code formatter
   - Vetur (Vue 2 官方推荐扩展)
   - Vue VSCode Snippets

2. **保存时自动格式化**：
   - 在 VS Code 设置中启用 `Format On Save`
   - 将 Prettier 设置为 JavaScript、Vue 文件的默认格式化程序

## 许可证

MIT
