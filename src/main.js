import "./global.css";
import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";

const app = HMR(App, { target: document.body }, "routify-app");

import "./global.scss";

export default app;
