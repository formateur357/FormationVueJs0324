import { createApp } from "vue";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import router from "./routeur";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify);
app.use(pinia);
app.use(router);
app.mount("#app");
