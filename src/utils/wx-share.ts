import wx from 'weixin-js-sdk'

interface ShareConfig {
  title: string
  desc: string
  link: string
  imgUrl: string
  success?: () => void
  cancel?: () => void
  fail?: (err: any) => void
}

interface WxConfig {
  debug?: boolean
  appId: string
  timestamp: number
  nonceStr: string
  signature: string
  jsApiList: string[]
}

// 获取微信配置的接口
const getWxConfig = async (url: string) => {
  try {
    // 这里需要调用后端接口获取配置
    const response = await fetch('/api/wx/config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('获取微信配置失败:', error)
    throw error
  }
}

// 初始化微信配置
const initWxConfig = async (url: string) => {
  try {
    const config: WxConfig = await getWxConfig(url)
    return new Promise((resolve, reject) => {
      wx.config({
        debug: false, // 关闭调试模式
        appId: config.appId,
        timestamp: config.timestamp,
        nonceStr: config.nonceStr,
        signature: config.signature,
        jsApiList: [
          'updateAppMessageShareData', // 分享到朋友圈
          'updateTimelineShareData', // 分享给朋友
        ],
      })

      wx.ready(() => resolve(true))
      wx.error(err => reject(err))
    })
  } catch (error) {
    console.error('初始化微信配置失败:', error)
    throw error
  }
}

// 设置分享内容
const setShareInfo = (config: ShareConfig) => {
  const shareConfig = {
    title: config.title,
    desc: config.desc,
    link: config.link,
    imgUrl: config.imgUrl,
    success: () => {
      console.log('分享成功')
      config.success?.()
    },
    cancel: () => {
      console.log('取消分享')
      config.cancel?.()
    },
    fail: (err: any) => {
      console.error('分享失败:', err)
      config.fail?.(err)
    },
  }

  // 分享给朋友
  wx.updateAppMessageShareData(shareConfig)
  // 分享到朋友圈
  wx.updateTimelineShareData(shareConfig)
}

// 主函数：初始化并设置分享
export const initWxShare = async (shareConfig: ShareConfig) => {
  try {
    // 获取当前页面 URL（去除 hash）
    const url = window.location.href.split('#')[0]

    // 初始化微信配置
    await initWxConfig(url)

    // 设置分享内容
    setShareInfo(shareConfig)

    return true
  } catch (error) {
    console.error('微信分享初始化失败:', error)
    return false
  }
}

// 示例使用
export const shareToWechat = async () => {
  try {
    await initWxShare({
      title: '分享标题',
      desc: '分享描述',
      link: window.location.href,
      imgUrl: '分享图片地址',
      success: () => {
        console.log('分享成功回调')
      },
      cancel: () => {
        console.log('取消分享回调')
      },
    })
  } catch (error) {
    console.error('分享失败:', error)
  }
}
