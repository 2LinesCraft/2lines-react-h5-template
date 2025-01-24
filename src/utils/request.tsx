import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 请求配置
const config = {
  // 基础URL
  baseURL: import.meta.env.VITE_API_URL || '/api',
  // 超时时间
  timeout: 10000,
  // 请求头
  headers: {
    'Content-Type': 'application/json',
  },
}

// 创建axios实例
const service: AxiosInstance = axios.create(config)

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 从localStorage获取token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.error('请求错误：', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // MSW 和实际接口返回的数据直接返回
    const res = response.data

    // 这里可以根据后端的数据结构进行调整
    if (res.code === 200) {
      return res
    }

    // 处理特定错误码
    if (res.code === 401) {
      // token过期或未登录
      localStorage.removeItem('token')
      window.location.href = '/login'
      return Promise.reject(new Error('未登录或登录过期'))
    }

    // 其他错误
    console.error('接口错误：', res.message)
    return Promise.reject(new Error(res.message || '未知错误'))
  },
  error => {
    let message = '网络错误'

    if (error.response) {
      switch (error.response.status) {
        case 400:
          message = '请求错误'
          break
        case 401:
          message = '未授权，请登录'
          localStorage.removeItem('token')
          window.location.href = '/login'
          break
        case 403:
          message = '拒绝访问'
          break
        case 404:
          message = '请求地址不存在'
          break
        case 408:
          message = '请求超时'
          break
        case 500:
          message = '服务器内部错误'
          break
        case 501:
          message = '服务未实现'
          break
        case 502:
          message = '网关错误'
          break
        case 503:
          message = '服务不可用'
          break
        case 504:
          message = '网关超时'
          break
        case 505:
          message = 'HTTP版本不受支持'
          break
        default:
          message = `连接错误${error.response.status}`
      }
    } else if (error.message.includes('timeout')) {
      message = '请求超时'
    }

    console.error('请求错误：', message)
    return Promise.reject(error)
  }
)

// 封装GET请求
export function get<T>(url: string, params?: any, config: AxiosRequestConfig = {}): Promise<T> {
  return service.get(url, { params, ...config })
}

// 封装POST请求
export function post<T>(url: string, data?: any, config: AxiosRequestConfig = {}): Promise<T> {
  return service.post(url, data, config)
}

// 封装PUT请求
export function put<T>(url: string, data?: any, config: AxiosRequestConfig = {}): Promise<T> {
  return service.put(url, data, config)
}

// 封装DELETE请求
export function del<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
  return service.delete(url, config)
}

export default service
