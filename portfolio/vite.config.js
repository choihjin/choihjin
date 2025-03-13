import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";

export default defineConfig({
  plugins: [vue()],
  base: "/choihjin/", // ✅ 본인 레포지토리 이름과 동일하게 설정!
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ `@`을 `src/`로 인식하도록 설정
    },
  },
});
