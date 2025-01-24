import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserInfo } from '../store/reducers/userSlice'

const Home = () => {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(setUserInfo({ name: 'Test User', avatar: '' }))
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">首页</h2>
      <div className="mb-4">
        <Link to="/about" className="text-blue-500 hover:underline">
          关于我们
        </Link>
      </div>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700 mb-4"
      >
        模拟登录
      </button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default Home
