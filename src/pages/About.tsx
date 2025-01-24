import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">关于我们</h2>
      <p>这是一个示例页面</p>
      
      <div className="mt-4">
        <Link to="/" className="text-blue-500 hover:underline">返回首页</Link>
      </div>
    </div>
  );
};

export default About;
