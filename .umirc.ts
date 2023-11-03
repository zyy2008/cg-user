import { defineConfig } from "@umijs/max";
import path from "path";

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  hash: true,
  antd: {
    configProvider: {
      prefixCls: "main",
    },
  },
  layout: {},
  lessLoader: {
    modifyVars: {
      "@ant-prefix": "main",
    },
    javascriptEnabled: true,
  },
  headScripts: [
    // 解决首次加载时白屏的问题
    { src: `/scripts/loading.js`, async: true },
  ],
  plugins: [
    require.resolve("@alita/plugins/dist/keepalive"),
    require.resolve("@alita/plugins/dist/tabs-layout"),
  ],
  keepalive: [/./],
  tabsLayout: {
    hasDropdown: true,
  },
  model: {},
  initialState: {},
  chainWebpack(memo, { env, webpack }) {
    // 设置 alias
    memo.resolve.alias.set("@ajax", resolve("src/utils/ajax"));
  },
  mfsu: false,
  request: {},
  history: {
    type: "browser",
  },
  qiankun: {
    master: {
      // sandbox: {
      //   strictStyleIsolation: false,
      //   experimentalStyleIsolation: true,
      // },
    },
  },
  proxy: {
    "/rule": {
      target: "http://192.169.7.131:8081/",
      changeOrigin: true,
      pathRewrite: { "^/rule": "" },
    },
    "/event": {
      target: "http://192.169.7.156:8081/",
      changeOrigin: true,
      pathRewrite: { "^/event": "" },
    },
  },

  clickToComponent: {},
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      name: "首页",
      path: "/index",
      component: "./index",
    },
    {
      name: "菜单管理",
      path: "/menu",
      component: "./menu",
    },
  ],
  npmClient: "yarn",
});
