import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: "/choihjin/", // ✅ 본인 레포지토리 이름과 동일하게 설정!
});
