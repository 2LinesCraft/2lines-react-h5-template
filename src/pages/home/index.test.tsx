import { configureStore } from '@reduxjs/toolkit'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { describe, expect, it, vi } from 'vitest'
import Home from './index'

// Mock React Router
vi.mock('react-router-dom', () => ({
  MemoryRouter: ({ children }: { children: React.ReactNode }) => children,
  Routes: ({ children }: { children: React.ReactNode }) => children,
  Route: ({ element }: { element: React.ReactNode }) => element,
  useNavigate: () => vi.fn(),
  useLocation: () => ({ pathname: '/' }),
  Link: ({ children }: { children: React.ReactNode }) => children,
}))

// Mock 依赖
vi.mock('@/api/product', () => ({
  productApi: {
    getProducts: vi.fn().mockResolvedValue({
      data: [],
      total: 0,
    }),
  },
}))

// 创建一个模拟的 Redux store
const mockStore = configureStore({
  reducer: {},
  preloadedState: {},
})

// 创建测试 Wrapper 组件
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider store={mockStore}>{children}</Provider>
)

describe('Home Page', () => {
  it('renders home page correctly', () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )
    expect(screen.getByText('探索精选产品展示')).toBeInTheDocument()
  })
})
