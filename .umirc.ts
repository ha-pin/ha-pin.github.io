import { defineConfig } from 'dumi';

export default defineConfig({
  title: '哈拼 Hapin حاپين',
  esbuild: {},
  mfsu: {},
  mode: 'site',
  navs: {
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/ha-pin',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/ha-pin',
      },
    ],
  },
  menus: {
    '/getting-started/': [
      {
        title: 'Getting Started',
      },
    ],

    '/standardarize/': [
      {
        title: 'Standardarize',
      },
    ],

    '/zh-CN/getting-started/': [
      {
        title: '快速上手',
      },
    ],

    '/zh-CN/standardarize/': [
      {
        title: '哈拼标准化',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
