---
order: 2
---

# Hapin Utils

[![GitHub](https://img.shields.io/badge/GtHub-hapin--utils-lightgrey)](https://github.com/ha-pin/hapin-utils)&nbsp;
![LICENSE](https://img.shields.io/github/license/ha-pin/hapin-utils) &nbsp;
![Issues](https://img.shields.io/github/issues/ha-pin/hapin-utils)&nbsp;
![Stars](https://img.shields.io/github/stars/ha-pin/hapin-arabic)&nbsp;
![Forks](https://img.shields.io/github/forks/ha-pin/hapin-utils)&nbsp;
[![version](https://img.shields.io/npm/v/hapin-utils.svg)](https://www.npmjs.com/package/hapin-utils)&nbsp;
[![download](https://img.shields.io/npm/dm/hapin-utils.svg)](https://www.npmjs.com/package/hapin-utils)

`hapin-utils` 为 **哈拼开发工具** 的重要组成部分，驱动了哈拼文字转化、哈拼小程序、Hapin Box 等多个实用项目。你可以通过哈拼的多个项目感受到 `hapin-utils` 带来的强大功能。

## 快速上手

```bash
npm i hapin-utils@latest

# yarn
yarn add hapin-utils@latest

# pnpm
pnpm add hapin-utils@latest
```

```ts
import { transformHapinToArabic } from 'hapin-utils';

transformHapinToArabic('ara'); // ارا
```

## API

`hapin-utils` 项目通过 TypeScript 进行实现、迭代速度快，因此我们信奉 TypeScript **“代码即是文档”** 的想法。你可以通过 npm 包的 `dist/index.d.ts` 查询到完整的 `hapin-utils` 的 API。

## 许可证

`hapin-utils` 在 MIT 许可证下开源
