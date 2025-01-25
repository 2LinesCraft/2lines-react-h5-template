import { PuffLoader } from 'react-spinners'

interface LoadingProps {
  loading?: boolean
  tip?: string
  className?: string
}

const Loading = ({ loading = true, tip = '加载中...', className = '' }: LoadingProps) => {
  if (!loading) return null

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-[300px] ${className}`}
    >
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]" />
      <div className="z-10 flex flex-col items-center gap-2">
        <PuffLoader color="#1677ff" size={40} />
        {tip && <span className="text-sm text-gray-500">{tip}</span>}
      </div>
    </div>
  )
}

export default Loading
