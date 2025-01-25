import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ErrorFallback } from './components/error-fallback'
import router from './router'
import { persistor, store } from './store'

function App() {
  const handleReset = () => {
    // 可以在这里添加重置应用状态的逻辑
    window.location.href = '/'
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={handleReset}
      onError={(error, info) => {
        // 这里可以添加错误日志上报逻辑
        console.error('Error:', error)
        console.error('Component Stack:', info.componentStack)
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
