// 代理进行跨域
const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:5000', // 转发的目的地址
      changeOrigin: true,
      pathRewrite: { '^api': '' }, // 重写请求路径
    })
  )
}
