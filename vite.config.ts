import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 引入node提供的path模块
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 配置代理跨域
  server: {
    proxy: {
      // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
      "/api": {
        target: "http://syt.atguigu.cn",
        changeOrigin: true,
        // 路径重写，此处不需要
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
