import {
  LoginParams,
  LoginResponse,
  PaginationParams,
  Product,
  ResponseBodyType,
  UserInfo,
} from '@/types'
import { get, post } from '@/utils/request'

export const productApi = {
  // 获取商品列表
  getProducts: (params: PaginationParams) => get<ResponseBodyType<Product[]>>('/products', params),

  // 获取商品详情
  getProductDetail: (id: number) => get<ResponseBodyType<Product>>(`/products/${id}`),
}

export const userApi = {
  // 获取用户信息
  getUserInfo: () => get<ResponseBodyType<UserInfo>>('/user/info'),

  // 登录
  login: (data: LoginParams) => post<ResponseBodyType<LoginResponse>>('/login', data),
}
