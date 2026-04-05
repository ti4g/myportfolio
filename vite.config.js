import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/newportifolio/",  // ← tem que bater com o nome exato do repo
});
