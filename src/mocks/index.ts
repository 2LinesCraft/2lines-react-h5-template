async function setupMock() {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('./browser')
    return worker.start({
      onUnhandledRequest: 'bypass', // 对未处理的请求直接放行
    })
  }
  return Promise.resolve()
}

export { setupMock }
