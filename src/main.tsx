import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.less'
import { setupMock } from './mocks'

async function bootstrap() {
  // 开发环境下初始化 mock
  await setupMock()

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

bootstrap()
