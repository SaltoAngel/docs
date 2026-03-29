import { defineUserConfig } from "@vuepress/cli";
import theme from "./theme";
import { searchPlugin } from '@vuepress/plugin-search'
import { path } from "@vuepress/utils";

export default defineUserConfig({
  alias: {
    "@Releases": path.resolve(__dirname, "components/Releases.vue"),
  },

  dest: "dist",

  head: [
    ["meta", { name: "baidu-site-verification", content: "4H7tszevS8" }],
    ["meta", { name: "baidu-site-verification", content: "nGf5yi0Gec" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "es-ES",
      title: "",
      description: "Página oficial de documentación ERP Consultores y Asociados, C.A.",
    },
  },

  theme,

  plugins: [
    searchPlugin({
      // options
      locales: {
        '/': {
          placeholder: 'Buscar',
        },
      },
    }),
  ],

  shouldPrefetch: false,
});
