# React + TypeScript + ESLint + Prettier

这是一个演示 React 18、TypeScript、ESLint 和 Prettier 集成的示例项目。

## 项目结构

```
react-ts-eslint-prettier/
├── src/
│   ├── components/        # React 组件
│   │   └── Greeting.tsx   # 示例组件
│   ├── views/             # 页面组件
│   │   ├── Home.tsx       # 首页
│   │   └── About.tsx      # 关于页面
│   ├── api/               # API 请求函数
│   │   └── index.ts
│   ├── App.tsx            # 根组件
│   ├── main.tsx           # 入口点
│   └── index.css          # 全局样式
├── .eslintrc.js           # ESLint 配置
├── .prettierrc            # Prettier 配置
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 配置
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

## ESLint + Prettier + TypeScript 协作机制

### 它们如何协同工作

1. **ESLint**：
   - 执行代码质量规则
   - 捕获 TypeScript 错误
   - 集成 React 特定规则和 Hooks
   - 使用 eslint-plugin-react-hooks 确保 React Hooks 的正确使用

2. **Prettier**：
   - 一致地格式化代码
   - 处理缩进、间距和换行
   - 如果在编辑器中配置，会在保存时自动运行

3. **TypeScript**：
   - 提供静态类型检查
   - 提高代码质量和开发体验
   - 早期捕获类型相关错误

4. **集成方式**：
   - ESLint 使用 `eslint-config-prettier` 禁用冲突规则
   - Prettier 格式化代码，然后 ESLint 检查代码质量
   - TypeScript 在整个过程中提供类型安全

### 配置文件

- `.eslintrc.js`：React 和 TypeScript 的 ESLint 规则和扩展
- `.prettierrc`：Prettier 格式化选项
- `tsconfig.json`：TypeScript 编译器选项
- `vite.config.ts`：带有 React 插件的 Vite 配置

## 关键学习点

1. **React 18 与 Hooks**：
   - 带有 Hooks 的函数组件
   - 使用 `useState` 进行状态管理
   - 使用 `useEffect` 处理生命周期事件和副作用
   - 使用 `useMemo` 进行性能优化

2. **TypeScript 集成**：
   - 为 props、变量和函数添加类型注解
   - 为复杂类型定义接口
   - 在 API 请求和响应中使用类型安全
   - 使用 React.FC 类型定义组件 props

3. **代码质量和格式化**：
   - React 和 TypeScript 的 ESLint 规则
   - 使用 Prettier 保持一致的代码风格
   - 编辑器集成提供实时反馈
   - 使用 eslint-plugin-react-hooks 确保 React Hooks 的正确使用

4. **React Router 6**：
   - 使用 `Routes` 和 `Route` 组件配置路由
   - 使用 `Link` 组件进行导航
   - 使用 `useNavigate` Hook 进行编程式导航
   - 动态路由

5. **API 处理**：
   - 使用 Async/await 语法处理 API 请求
   - 使用 try/catch 块进行错误处理
   - 加载状态管理
   - 使用 Hooks 更新状态

## 脚本命令

- `npm run dev`：启动开发服务器
- `npm run build`：构建生产版本
- `npm run lint`：运行 ESLint 检查
- `npm run preview`：预览生产构建
- `npx prettier --write .`：使用 Prettier 格式化所有文件

## 编辑器设置

为了获得最佳开发体验，我们推荐：

1. **VS Code** 与以下扩展：
   - ESLint
   - Prettier - Code formatter
   - TypeScript React Plugin (Volar)
   - Reactjs code snippets

2. **保存时自动格式化**：
   - 在 VS Code 设置中启用 `Format On Save`
   - 将 Prettier 设置为 JavaScript、TypeScript 和 React 文件的默认格式化程序

## 许可证

MIT