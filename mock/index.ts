import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          id: 1,
          name: '张三',
          avatar: '/picsum.photos/200/300?random=1',
        },
      }
    },
  },
  {
    url: '/api/products',
    method: 'get',
    timeout: 2000,
    response: () => {
      return {
        code: 200,
        data: [
          {
            id: 1,
            name: '商品1',
            price: 99.99,
            image: '/picsum.photos/400/300?random=1',
          },
          {
            id: 2,
            name: '商品2',
            price: 199.99,
            image: '/picsum.photos/400/300?random=2',
          },
          {
            id: 3,
            name: '商品3',
            price: 299.99,
            image: '/picsum.photos/400/300?random=3',
          },
          {
            id: 4,
            name: '商品4',
            price: 399.99,
            image: '/picsum.photos/400/300?random=4',
          },
        ],
      }
    },
  },
] as MockMethod[]
