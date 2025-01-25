import { useRouteError } from 'react-router-dom'

export function ErrorFallback() {
  // 尝试获取路由错误
  const routeError = useRouteError()

  // 使用路由错误或传入的错误
  const errorMessage = routeError ? (routeError as Error).message : '未知错误'

  const handleReset = () => {
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">抱歉，出现了一些问题</h2>
          <p className="text-gray-600 mb-6">
            我们正在努力修复这个问题。您可以尝试刷新页面或返回首页。
          </p>
        </div>

        {/* 错误信息窗口 */}
        <div className="bg-white shadow-sm rounded-lg p-4 border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">错误信息：</div>
          <div className="bg-gray-50 rounded p-3 font-mono text-sm text-gray-800 break-all">
            {errorMessage}
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleReset}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700 transition-colors"
          >
            重试
          </button>
          <a
            href="/"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 active:bg-gray-300 transition-colors"
          >
            返回首页
          </a>
        </div>
      </div>
    </div>
  )
}
