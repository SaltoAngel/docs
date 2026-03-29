// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import { createApp, h } from "vue";
import Releases from "./components/Releases.vue";
import SplashScreen from "./components/SplashScreen.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Releases", Releases);
    app.component("SplashScreen", SplashScreen);
  },
  setup() {
    // Montar el splash como una app independiente para que aparezca
    // antes de que VuePress termine de hidratarse
    if (typeof document !== "undefined") {
      const container = document.createElement("div");
      document.body.appendChild(container);
      const splashApp = createApp({ render: () => h(SplashScreen) });
      splashApp.mount(container);
    }
  },
});
