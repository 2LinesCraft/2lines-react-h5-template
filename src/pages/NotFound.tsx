import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <svg
        className="w-64 h-64 mb-8 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">哎呀！你似乎迷路了</p>
        <p className="text-md text-gray-500 mb-8">你要找的页面可能已被删除、重命名或暂时不可用</p>

        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-full 
                               hover:bg-blue-600 transition-colors duration-300 
                               shadow-md hover:shadow-lg"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}

export default NotFound
