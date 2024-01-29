import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [
    {
      id: 'en-US',
      name: 'English',
    },
    {
      id: 'zh-CN',
      name: '中文',
    },
    // { id: 'kz', name: 'قازاقشا' }
  ],
  themeConfig: {
    name: '哈拼 Hapin حاپين',
    footer: `Copyright &copy; 2024 <a href="https://github.com/ha-pin">Hapin</a> All Rights Reserved <br />Powered by <a href="https://d.umijs.org">dumi</a>`,
    showLineNum: true,
    perfersColor: { default: 'auto', switch: true },
    socialLinks: {
      github: 'https://github.com/ha-pin',
    },
    nav: {
      'zh-CN': [
        {
          title: '快速上手',
          link: '/zh-CN/getting-started',
        },
        {
          title: '哈拼标准化',
          link: '/zh-CN/standardize',
        },
        {
          title: '输入法',
          link: '/zh-CN/ime',
        },
        {
          title: '开发支持',
          link: '/zh-CN/developer',
        },
        {
          title: '衍生项目',
          link: '/zh-CN/projects',
        },
      ],
      'en-US': [
        {
          title: 'Getting Started',
          link: '/getting-started',
        },
        {
          title: 'Standardize',
          link: '/standardize',
        },
        {
          title: 'IME',
          link: '/ime',
        },
        {
          title: 'Development',
          link: '/developer',
        },
        {
          title: 'Projects',
          link: '/projects',
        },
      ],
    },
  },
});
