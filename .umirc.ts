import { defineConfig } from '@umijs/max';
import path from 'path';

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  chainWebpack(memo, { env, webpack }) {
    // 设置 alias
    memo.resolve.alias.set('@ajax', resolve('src/utils/ajax'));
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './home',
    },
  ],
  npmClient: 'yarn',
});
