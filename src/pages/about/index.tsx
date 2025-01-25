import { productApi } from '@/services'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const { data, run: fetchProductList } = useRequest(
    () => productApi.getProducts({ page: 1, pageSize: 10 }),
    {
      manual: true,
      onSuccess: () => {
        console.log('数据请求成功')
      },
    }
  )

  useEffect(() => {
    console.log('进入 useEffect')
    fetchProductList()
  }, []) // 空依赖数组，仅在组件挂载时执行一次

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">关于我们</h2>
      <p>这是一个示例页面</p>

      <div className="mt-4">
        <Link to="/" className="text-blue-500 hover:underline">
          返回首页
        </Link>
      </div>
    </div>
  )
}

export default About
