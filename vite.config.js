import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // troque "portfolio" pelo nome exato do seu repo no GitHub
});
