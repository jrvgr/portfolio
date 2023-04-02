import "./app.scss";
import App from "./App.svelte";

document.getElementById("vite-plugin-spa-loading").remove();

const app = new App({
  target: document.getElementById("app"),
});

export default app;
