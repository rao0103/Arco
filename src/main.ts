import { createApp } from "vue";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
// import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
const app = createApp(App);
app.use(router).mount("#app");
// app.use(Antd);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Icon", Icon);
