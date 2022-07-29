---
nav:
  title: IME Support
  order: 3
---

## IME Support

哈拼起初的设计构想就是 **帮助汉族学习哈萨克语** 和 **实现在 PC 端键入哈萨克语**，因此输入法的支持对哈拼项目来说意义深远。

哈拼的输入法支持基于 [Rime | 中州韵输入法引擎](https://rime.im)（`GPL-3.0` 许可证开源项目） 为哈萨克语的 PC 端键入提供了支持。

> 你可以参考 [Hapin Rime 方案使用指南](https://ha-pin.github.io/ime-guide) 项目进行安装使用。

目前我们为哈拼支持的输入方案如下：

> 兼容 `哈拼正式版方案v1.x`

| 方案名称                               | 项目地址                                                   | 说明                         | 开源协议  |
| -------------------------------------- | ---------------------------------------------------------- | ---------------------------- | --------- |
| [Hapin Arabic](./ime/hapin-arabic)     | [hapin-arabic](https://github.com/ha-pin/hapin-arabic)     | **波斯-阿拉伯字母** 键入支持 | `GPL-3.0` |
| [Hapin Cyrillic](./ime/hapin-cyrillic) | [hapin-cyrillic](https://github.com/ha-pin/hapin-cyrillic) | **西里尔字母** 键入支持      | `GPL-3.0` |

> **TODO** 随着哈萨克斯坦拉丁化改革，哈拼有计划对此进行支持，但目前尚未稳定。
