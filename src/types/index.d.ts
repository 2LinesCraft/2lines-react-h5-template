export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export interface PaginationParams {
  page: number
  pageSize: number
}

export interface ResponseBodyType<T> {
  code: number
  data: T
  pagination?: {
    current: number
    pageSize: number
    total: number
  }
}

export interface UserInfo {
  id: number
  name: string
  avatar: string
}

export interface LoginParams {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
  user: UserInfo
}
