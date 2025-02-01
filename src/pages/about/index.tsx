import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">关于</h1>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors">
              首页
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default About
