import { createBrowserRouter } from 'react-router-dom'
import { ErrorFallback } from '../components/ErrorFallback'
import Layout from '../components/Layout'
import About from '../pages/About'
import Home from '../pages/home/Home'

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
    ],
  },
])

export default router
