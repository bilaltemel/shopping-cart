import { createPinia } from "pinia";
import { createApp } from "vue";
import Toast from "vue-toastification";
import App from "./App.vue";
import router from "./router";

import "vue-toastification/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(Toast);
app.mount("#app");
