import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["bloc.png"],
      manifest: {
        name: "Bloc de notas",
        short_name: "Bloc de notas",
        description:
          "Bloc de notas para escribir texto de recordatorio o importantes",
        theme_color: "#ffffff",
        icons: [
          {
            src: "bloc-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "bloc-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 9001,
  },
});
