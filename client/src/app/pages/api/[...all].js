import { createProxyMiddleware } from "http-proxy-middleware"

const proxy = createProxyMiddleware({
  target: "http://localhost:8000", // backend server
  changeOrigin: true,
  pathRewrite: {
    "^/proxy": "", // remove /api prefix when forwarding
  },
})

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    proxy(req, res, (err) => {
      if (err) reject(err)
      resolve()
    })
  })
}
