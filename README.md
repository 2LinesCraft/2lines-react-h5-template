# 2Lines H5 Template / H5 模板

A modern mobile-first H5 application template built with React, TypeScript, and TailwindCSS.
基于 React、TypeScript 和 TailwindCSS 构建的现代化移动端优先的 H5 应用模板。

## Features / 特性

- 🚀 Vite 4.x + React 18 + TypeScript 5
- 🎨 TailwindCSS 3.x for utility-first styling / TailwindCSS 原子化 CSS
- 📱 Mobile-first responsive design / 移动端优先的响应式设计
- 🔧 PostCSS + pxtorem for mobile adaptation / PostCSS + pxtorem 移动端适配
- 🎭 Framer Motion for smooth page transitions / Framer Motion 页面过渡动画
- 📦 Redux Toolkit + Redux Persist for state management / Redux 状态管理与持久化
- 🛠️ Modern ESLint + Prettier configuration / 现代化的代码规范配置
- 🌐 Axios for API requests with interceptors / 封装 Axios 请求
- 🔄 SPA routing with animations / 单页应用路由与动画
- 🎯 Error Boundary for graceful error handling / 优雅的错误处理

## Quick Start / 快速开始

```bash
# Clone the repository / 克隆仓库
git clone https://github.com/yourusername/2lines-h5-template.git

# Enter the project directory / 进入项目目录
cd 2lines-h5-template

# Install dependencies / 安装依赖
npm install

# Start development server / 启动开发服务器
npm run dev

# Build for production / 生产环境构建
npm run build

# Preview production build / 预览生产构建
npm run preview
```

## Project Structure / 项目结构

```
src/
  ├── api/             # API 接口定义
  │   └── test.ts      # 测试接口示例
  ├── assets/          # 静态资源
  ├── components/      # 公共组件
  │   ├── ErrorFallback.tsx  # 错误边界回退组件
  │   └── Layout.tsx         # 布局组件（含页面切换动画）
  ├── hooks/           # 自定义 Hooks
  ├── pages/          # 页面组件
  │   ├── Home.tsx    # 首页
  │   └── About.tsx   # 关于页面
  ├── router/         # 路由配置
  │   └── index.tsx   # 路由定义
  ├── store/          # Redux 状态管理
  │   ├── index.ts    # Store 配置
  │   └── reducers/   # Redux Slice
  ├── types/          # TypeScript 类型定义
  ├── utils/          # 工具函数
  │   └── request.ts  # Axios 请求封装
  ├── App.tsx         # 应用入口
  └── main.tsx        # 主入口文件
```

## Key Features / 核心功能

### Page Transitions / 页面切换

- Smooth page transitions using Framer Motion
- Configurable animation parameters
- Maintains scroll position during transitions
- 使用 Framer Motion 实现流畅的页面切换
- 可配置的动画参数
- 过渡期间保持滚动位置

### State Management / 状态管理

- Redux Toolkit for efficient state management
- Redux Persist for state persistence
- Modular store structure with slices
- Redux Toolkit 高效状态管理
- Redux Persist 状态持久化
- 基于切片的模块化存储结构

### Mobile Adaptation / 移动端适配

The template uses `postcss-pxtorem` for mobile adaptation. The root font size is set to 37.5px (based on 375px design).
模板使用 `postcss-pxtorem` 进行移动端适配。根字体大小设置为 37.5px（基于 375px 设计稿）。

### Error Handling / 错误处理

- Global error boundary for React errors
- Axios interceptors for API errors
- Custom error UI components
- React 错误边界全局处理
- Axios 拦截器处理接口错误
- 自定义错误 UI 组件

## Development Guide / 开发指南

### Code Style / 代码风格

- ESLint for code linting / ESLint 代码检查
- Prettier for code formatting / Prettier 代码格式化
- TypeScript strict mode enabled / TypeScript 严格模式

### Performance Optimization / 性能优化

- Route-based code splitting / 基于路由的代码分割
- Vite's built-in optimization / Vite 内置优化
- Gzip compression / Gzip 压缩
- Assets optimization / 资源优化

## Browser Support / 浏览器支持

- iOS 10+
- Android 5+
- Chrome 60+
- Safari 10+
- Other modern browsers / 其他现代浏览器

## Contributing / 贡献

Feel free to open issues and pull requests / 欢迎提 Issue 和 PR

## License / 许可证

MIT
