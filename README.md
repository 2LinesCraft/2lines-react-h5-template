# 2Lines H5 Template / H5 模板

A modern mobile-first H5 application template built with React, TypeScript, and TailwindCSS.

基于 React、TypeScript 和 TailwindCSS 构建的现代化移动端优先的 H5 应用模板。

## Features / 特性

- 🚀 Vite 4.x + React 18 + TypeScript 5
- 🎨 TailwindCSS 3.x for utility-first styling / 原子化 CSS 样式
- 📱 Mobile-first responsive design / 移动端优先的响应式设计
- 🔧 PostCSS + pxtorem for mobile adaptation / PostCSS + pxtorem 移动端适配
- 🎭 Framer Motion for smooth page transitions / Framer Motion 页面过渡动画
- 📦 Redux Toolkit + Redux Persist for state management / Redux 状态管理与持久化
- 🛠️ Modern ESLint + Prettier configuration / 现代化的代码规范配置
- 🌐 Axios for API requests with interceptors / 封装 Axios 请求
- 🔄 SPA routing with animations / 单页应用路由与动画
- 🎯 Error Boundary for graceful error handling / 优雅的错误处理
- 🔍 MSW (Mock Service Worker) for API mocking / MSW 接口模拟
- 🎁 Ahooks for common React hooks / Ahooks React Hooks 工具库
- 💫 Tailwind animations and transitions / Tailwind 动画与过渡效果

## Quick Start / 快速开始

### Installation / 安装

```bash
# Clone the repository / 克隆仓库
git clone https://github.com/yourusername/2lines-h5-template.git

# Enter the project directory / 进入项目目录
cd 2lines-h5-template

# Install dependencies with pnpm / 使用 pnpm 安装依赖
pnpm install
```

### Development Commands / 开发命令

```bash
# Start development server / 启动开发服务器
pnpm run dev

# Build for production / 生产环境构建
pnpm run build

# Preview production build / 预览生产构建
pnpm run preview

# Lint code / 代码检查
pnpm run lint

# Fix lint errors / 修复代码检查错误
pnpm run lint:fix

# Format code / 格式化代码
pnpm run format

# Type check / 类型检查
pnpm run type-check
```

## Project Structure / 项目结构

```
src/
  ├── api/             # API interfaces / 接口定义
  ├── assets/          # Static assets / 静态资源
  ├── components/      # Shared components / 公共组件
  │   ├── ErrorFallback.tsx  # Error boundary fallback / 错误边界回退组件
  │   └── Layout.tsx         # Layout with transitions / 布局组件（含过渡动画）
  ├── hooks/           # Custom React hooks / 自定义 Hooks
  ├── mocks/           # MSW mock handlers / MSW 接口模拟
  ├── pages/           # Page components / 页面组件
  ├── router/          # Route configuration / 路由配置
  ├── services/        # API services / 接口服务
  ├── store/           # Redux store / Redux 状态管理
  ├── types/           # TypeScript types / TypeScript 类型定义
  ├── utils/           # Utility functions / 工具函数
  ├── App.tsx          # Application root / 应用根组件
  └── main.tsx         # Entry point / 入口文件
```

## Key Features / 核心功能

### Mobile-First Design / 移动端优先设计

The template emphasizes mobile-first development with:

模板强调移动端优先的开发理念：

- Responsive design using Tailwind breakpoints
- Touch-friendly interactions
- Mobile-optimized components
- Performance optimization for mobile devices

- 使用 Tailwind 断点的响应式设计
- 触摸友好的交互
- 移动端优化的组件
- 移动设备性能优化

### Mock Service / 接口模拟

This project uses [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) for API mocking during development.

本项目使用 [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) 进行开发环境的接口模拟。

### Mock Configuration / Mock 配置

Mock files are located in the `mock` directory. Each mock file should export an array of mock objects with the following structure:

Mock 文件位于 `mock` 目录下。每个 mock 文件需要导出一个包含以下结构的 mock 对象数组：

```typescript
{
  url: string // API URL / 接口地址
  method: string // HTTP method / HTTP 方法
  response: () => any // Response data / 响应数据
}
```

Example / 示例：

```typescript
export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        name: '张三',
        age: 18,
      },
    }),
  },
]
```

### Usage / 使用方法

Mock service is automatically enabled in development mode. You can make API requests to the mock endpoints directly:

Mock 服务在开发环境下自动启用。你可以直接请求 mock 接口：

```typescript
import axios from 'axios'

// The request will be intercepted by the mock service
// 请求会被 mock 服务拦截
const response = await axios.get('/api/user')
```

### State Management / 状态管理

Comprehensive state management solution:

完整的状态管理解决方案：

- Redux Toolkit for efficient state updates
- Redux Persist for state persistence
- Type-safe actions and reducers
- DevTools integration

- Redux Toolkit 高效状态更新
- Redux Persist 状态持久化
- 类型安全的 actions 和 reducers
- 开发工具集成

### Error Handling / 错误处理

Robust error handling strategy:

健壮的错误处理策略：

- Global error boundary
- API error interceptors
- Custom error UI
- Development error logging

- 全局错误边界
- API 错误拦截器
- 自定义错误 UI
- 开发环境错误日志

## Best Practices / 最佳实践

### Code Style / 代码风格

We follow these coding standards:

我们遵循以下代码标准：

- ESLint for code quality
- Prettier for consistent formatting
- TypeScript strict mode
- Import sorting and organization

- ESLint 保证代码质量
- Prettier 统一代码格式
- TypeScript 严格模式
- 导入排序和组织

### Performance / 性能优化

Optimizations include:

优化措施包括：

- Route-based code splitting
- Image optimization
- Lazy loading
- Caching strategies
- Gzip compression

- 基于路由的代码分割
- 图片优化
- 懒加载
- 缓存策略
- Gzip 压缩

## Browser Support / 浏览器支持

- iOS 10+
- Android 5+
- Chrome 60+
- Safari 10+
- Other modern browsers / 其他现代浏览器

## Contributing / 贡献

We welcome contributions! Please feel free to:

我们欢迎各种形式的贡献！欢迎：

- Open issues for bugs or suggestions
- Submit pull requests
- Improve documentation
- Share your ideas

- 提交 bug 或建议
- 提交代码改进
- 改进文档
- 分享想法

## License / 许可证

MIT
