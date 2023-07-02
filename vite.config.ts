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
});
