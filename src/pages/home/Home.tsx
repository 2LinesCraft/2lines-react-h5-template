import { productApi } from '@/services'
import { useRequest } from 'ahooks'
import { useCallback, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserInfo } from '../../store/reducers/userSlice'

const Home = () => {
  const dispatch = useDispatch()
  const isFirstMount = useRef(true)

  const {
    data,
    loading,
    run: fetchProductList,
  } = useRequest(() => productApi.getProducts({ page: 1, pageSize: 10 }), {
    manual: true,
  })

  const handleFetchProducts = useCallback(() => {
    if (isFirstMount.current) {
      console.log('fetchProductList')
      fetchProductList()
      isFirstMount.current = false
    }
  }, [fetchProductList])

  useEffect(() => {
    console.log('handleFetchProducts')
    handleFetchProducts()
  }, [handleFetchProducts])

  const handleLogin = useCallback(() => {
    dispatch(setUserInfo({ name: 'Test User', avatar: '' }))
  }, [dispatch])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">2Lines H5 Template</h1>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="text-gray-600 hover:text-blue-500 transition-colors">
              关于
            </Link>
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 active:bg-blue-700 transition-colors"
            >
              登录
            </button>
          </div>
        </div>
      </nav>

      {/* 主要内容区 */}
      <main className="container mx-auto px-4 py-8">
        {/* 头部区域 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">探索精选产品展示</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            这是一个现代化的移动端页面模板，展示了优雅的设计和流畅的用户体验。
          </p>
        </div>

        {/* 商品列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.data?.map(product => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition-colors">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-red-500 font-medium">¥{product.price.toFixed(2)}</p>
                  <button className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 底部信息 */}
      <footer className="bg-white border-t mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p> 2025 2Lines Template. </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
