import { defineConfig } from "vite";
import postcss from "./postcss.config.js";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // Only expose specific environment variables that are needed client-side
    // For example:
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    // Add any other necessary environment variables explicitly
    // 'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
