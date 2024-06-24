import { createApp } from "vue";
import { createPinia } from "pinia";

// reset css
import "ant-design-vue/dist/reset.css";
import router from "@/router";

import App from "./App";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
