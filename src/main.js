import { createApp } from "vue";

import router from "./router";
import "./style.css";
import "font-awesome/css/font-awesome.css";

import App from "./App.vue";

//PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrado con éxito:", registration);
      })
      .catch((error) => {
        console.log("Error al registrar el Service Worker:", error);
      });
  });
}
//------------------------------------------

createApp(App).use(router).mount("#app");
