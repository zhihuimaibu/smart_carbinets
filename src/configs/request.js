export const appName = '淅川高智就业'

// 请求地址
// export const requestURL = 'https://api.xcgzjy.com'
export const requestURL = 'https://prexcgzjy.yzxsaas.com'
export const requestPath = '/api'
export const requestFilePath = '/file'

const isDevelopment = process.env.NODE_ENV === 'development'

// 请求基础域名
export const getBaseURL = () => {
  return requestURL + requestPath
}

// 文件基础域名
export const getFileBaseURL = () => {
  return requestURL + requestFilePath
}

// 请求域名
export const baseURL = getBaseURL()
// 响应成功code值
export const responseSuccessCode = '20000'
// 超时时间
export const timeout = 60 * 1000

export default {
  getBaseURL,
  getFileBaseURL,
  baseURL,
  responseSuccessCode,
  timeout,
}
