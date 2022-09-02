import { defineConfig } from 'dumi';

export default defineConfig({
  title: '哈拼 Hapin حاپين',
  esbuild: {},
  mfsu: {},
  mode: 'site',
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
    // ['kz', 'قازاقشا'],
  ],
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

    '/projects/': [
      {
        title: 'Projects',
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

    '/zh-CN/projects/': [
      {
        title: '衍生项目',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
