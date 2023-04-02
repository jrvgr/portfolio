import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Unfonts from "unplugin-fonts/vite";
import { spaLoading } from "vite-plugin-spa-loading";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // spaLoading("img", {
    //   tipText: "Hold your horses, I'm here in a second!",
    //   src: "/loading.svg",
    //   css: "user-select: none, z-index: -1; pointer-events: none;",
    //   debounce: 150,
    // }),
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
