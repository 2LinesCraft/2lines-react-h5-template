import { createBrowserRouter } from 'react-router-dom'
import { ErrorFallback } from '../components/error-fallback'
import Layout from '../components/layout'
import About from '../pages/about'
import Home from '../pages/home'
import NotFound from '../pages/not-found'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorFallback />,
    hasErrorBoundary: false,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router
