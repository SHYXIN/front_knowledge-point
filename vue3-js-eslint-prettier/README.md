# Vue3 + ESLint + Prettier

这是一个演示 Vue3、ESLint 和 Prettier 集成的示例项目，不使用 TypeScript。

## 项目结构

```
vue3-js-eslint-prettier/
├── src/
│   ├── components/        # Vue 组件
│   │   └── Greeting.vue   # 示例组件
│   ├── views/             # 页面组件
│   │   ├── HomeView.vue   # 首页
│   │   └── AboutView.vue  # 关于页面
│   ├── router/            # Vue Router 配置
│   │   └── index.js
│   ├── api/               # API 请求函数
│   │   └── index.js
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── .eslintrc.js           # ESLint 配置
├── .prettierrc            # Prettier 配置
├── vite.config.js         # Vite 配置
└── package.json           # 项目依赖和脚本
```

## 安装和运行

### Windows + NVM 设置

1. **查看已安装的 Node 版本**：
   ```bash
   nvm ls
   ```

2. **切换到推荐的 Node 版本**：
   ```bash
   nvm use 18.16.0
   ```

3. **验证 Node 版本**：
   ```bash
   node -v
   ```

4. **安装依赖**：
   ```bash
   npm install
   ```

5. **启动开发服务器**：
   ```bash
   npm run dev
   ```

6. **构建生产版本**：
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
     nvm alias default 18.16.0
     ```

## ESLint + Prettier 协作机制

### 它们如何协同工作

1. **ESLint**：
   - 执行代码质量规则
   - 集成 Vue 特定规则
   - 捕获常见 JavaScript 错误

2. **Prettier**：
   - 一致地格式化代码
   - 处理缩进、间距和换行
   - 如果在编辑器中配置，会在保存时自动运行

3. **集成方式**：
   - ESLint 使用 `@vue/eslint-config-prettier` 禁用冲突规则
   - Prettier 格式化代码，然后 ESLint 检查代码质量

### 配置文件

- `.eslintrc.js`：ESLint 规则和扩展
- `.prettierrc`：Prettier 格式化选项
- `vite.config.js`：Vite 配置

## 关键学习点

1. **Vue3 组合式 API**：
   - 使用 `script setup` 语法简洁定义组件
   - 使用 `ref` 和 `reactive` 创建响应式状态
   - 使用 `computed` 创建计算属性
   - 使用生命周期钩子如 `onMounted`、`onUpdated`、`onUnmounted`

2. **JavaScript 使用**：
   - 无 TypeScript 的动态类型
   - 使用 Vue 内置验证进行 Props 验证
   - 灵活的函数返回类型

3. **代码质量和格式化**：
   - Vue 和 JavaScript 的 ESLint 规则
   - 使用 Prettier 保持一致的代码风格
   - 编辑器集成提供实时反馈

4. **Vue Router**：
   - 路由配置和导航
   - 路由组件的懒加载
   - 编程式导航

5. **API 处理**：
   - 使用 Async/await 语法处理 API 请求
   - 错误处理
   - 加载状态管理

## 脚本命令

- `npm run dev`：启动开发服务器
- `npm run build`：构建生产版本
- `npm run preview`：预览生产构建
- `npx eslint .`：运行 ESLint 检查
- `npx prettier --write .`：使用 Prettier 格式化所有文件

## 编辑器设置

为了获得最佳开发体验，我们推荐：

1. **VS Code** 与以下扩展：
   - Volar（用于 Vue3）
   - ESLint
   - Prettier - Code formatter

2. **保存时自动格式化**：
   - 在 VS Code 设置中启用 `Format On Save`
   - 将 Prettier 设置为 Vue 和 JavaScript 文件的默认格式化程序

## 许可证

MIT