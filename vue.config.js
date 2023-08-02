const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const AutoImportComponents = require("unplugin-vue-components/webpack");
const { AntDesignVueResolver } = require("unplugin-vue-components/resolvers");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          {
            "vue-request": ["useRequest"],
          },
        ],
        dts: true,
        eslintrc: {
          enabled: true, // <-- this
        },
      }),
      AutoImportComponents({
        dts: true,
        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // css in js
          }),
        ],
      }),
    ],
  },
});
