import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Unfonts from "unplugin-fonts/vite";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unfonts({
      google: {
        families: ["Inter", "Unbounded", "Corben"],
      },
    }),
    svelte(),
    Icons({
      compiler: "svelte",
      autoInstall: true,
      defaultClass: "icon",
    }),
  ],
});
