import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks - group by functionality
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'radix-ui': ['@radix-ui/react-slot', '@radix-ui/react-dialog', '@radix-ui/react-tooltip', '@radix-ui/react-select'],
          'i18n-vendor': ['react-i18next', 'i18next'],
          'icons': ['lucide-react'],
          'animations': ['framer-motion'],
          'utils': ['clsx', 'tailwind-merge'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
}));
