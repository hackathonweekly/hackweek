# 开发指引


## Cloudflare 部署 Nextjs
官方教程：
https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/

### 为什么使用 cloudflare
- Github Organization 可以免费部署（vercel 只有个人有免费版本）
- 因为免费额度更高

### 注意事项
#### 倾向于直接 `npm run deploy` 来部署
- 这样完全 cli 操作，比 github action 便捷（比如你不用提交代码就可以部署了）
- 这样用户可以不依赖于 bun

#### Cloudflare Pages 部署的时候环境变量要添加：
Key: NODE_VERSION 18.18.0
否则会遇到报错： 
```
You are using Node.js 18.17.1. For Next.js, Node.js version "^18.18.0 || ^19.8.0 || >= 20.0.0" is required.
```
  
### 环境变量配置
有两种方式设置环境变量：

1. 通过 wrangler.toml（适用于非敏感信息）：
```toml
[vars]
NODE_VERSION = "18.18.0"
NEXT_PUBLIC_SITE_URL = "https://example.com"

[env.production.vars]
NEXT_PUBLIC_API_URL = "https://api.example.com"
```

2. 通过 Cloudflare Dashboard（推荐用于敏感信息）：
- 登录 Dashboard
- 进入 Pages 项目
- Settings > Environment variables
- 添加变量并选择环境

环境变量使用说明：
- `NEXT_PUBLIC_*` 开头的变量可以在客户端使用
- 其他变量只能在服务器端使用
- 敏感信息（API 密钥等）建议使用 Dashboard 添加并加密

### command
```
bunx wrangler login
bun run deploy
```
  

## 头像生成
用这个网站的 api 生成头像！
文档在这里：
https://www.dicebear.com/styles/notionists/

例子：
https://api.dicebear.com/7.x/notionists/svg?seed=hahah 

可以自定义头像样式（发型、肤色、背景色等）