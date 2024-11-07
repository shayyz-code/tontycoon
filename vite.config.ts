import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "./public/"),
      "@context": path.resolve(__dirname, "./src/context/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@backend": path.resolve(__dirname, "./src/backend/"),
    },
  },
  plugins: [react()],
});
