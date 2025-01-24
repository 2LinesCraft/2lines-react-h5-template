import { http, HttpResponse } from 'msw'

// 示例数据
const mockUserData = {
  id: 1,
  name: '张三',
  avatar: 'https://picsum.photos/200/300?random=1',
}

const mockProductList = [
  {
    id: 1,
    name: '商品1',
    price: 99.99,
    image: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: 2,
    name: '商品2',
    price: 199.99,
    image: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: 3,
    name: '商品3',
    price: 299.99,
    image: 'https://picsum.photos/400/300?random=3',
  },
  {
    id: 4,
    name: '商品4',
    price: 399.99,
    image: 'https://picsum.photos/400/300?random=4',
  },
  {
    id: 5,
    name: '商品5',
    price: 499.99,
    image: 'https://picsum.photos/400/300?random=5',
  },
  {
    id: 6,
    name: '商品6',
    price: 599.99,
    image: 'https://picsum.photos/400/300?random=6',
  },
]

// API 处理器
export const handlers = [
  // 用户信息接口
  http.get('/api/user/info', () => {
    return HttpResponse.json(mockUserData)
  }),

  // 商品列表接口
  http.get('/api/products', ({ request }) => {
    const url = new URL(request.url)
    const page = Number(url.searchParams.get('page')) || 1
    const pageSize = Number(url.searchParams.get('pageSize')) || 10

    return HttpResponse.json({
      code: 200,
      data: mockProductList,
      pagination: {
        current: page,
        pageSize,
        total: mockProductList.length,
      },
    })
  }),

  // 登录接口
  http.post('/api/login', async ({ request }) => {
    const { username, password } = await request.json()

    if (username === 'admin' && password === '123456') {
      return HttpResponse.json({
        code: 0,
        data: {
          token: 'mock-token',
          user: mockUserData,
        },
        message: '登录成功',
      })
    }

    return HttpResponse.json(
      {
        code: 1,
        message: '用户名或密码错误',
      },
      { status: 401 }
    )
  }),
]
