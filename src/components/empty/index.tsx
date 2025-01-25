import { NetworkErrorIcon, NoDataIcon, NoSearchIcon } from './empty-icons'

export type EmptyType = 'data' | 'search' | 'network'

interface EmptyProps {
  type?: EmptyType
  title?: string
  description?: string
  image?: React.ReactNode
  className?: string
  imageClassName?: string
  extra?: React.ReactNode
}

const defaultMessages = {
  data: {
    title: '暂无数据',
    description: '当前暂无相关数据',
  },
  search: {
    title: '无搜索结果',
    description: '没有找到相关内容，换个搜索词试试',
  },
  network: {
    title: '网络错误',
    description: '网络连接失败，请检查网络后重试',
  },
}

const iconMap = {
  data: NoDataIcon,
  search: NoSearchIcon,
  network: NetworkErrorIcon,
}

const Empty = ({
  type = 'data',
  title,
  description,
  image,
  className = '',
  imageClassName = 'w-40 h-40',
  extra,
}: EmptyProps) => {
  const Icon = iconMap[type]
  const defaultMessage = defaultMessages[type]

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      {image || <Icon className={`text-gray-200 ${imageClassName}`} />}
      {title && <div className="mt-4 text-lg font-medium text-gray-600">{title}</div>}
      {!title && defaultMessage.title && (
        <div className="mt-4 text-lg font-medium text-gray-600">{defaultMessage.title}</div>
      )}
      {description && <div className="mt-2 text-sm text-gray-400">{description}</div>}
      {!description && defaultMessage.description && (
        <div className="mt-2 text-sm text-gray-400">{defaultMessage.description}</div>
      )}
      {extra && <div className="mt-4">{extra}</div>}
    </div>
  )
}

export default Empty
