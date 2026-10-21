---
title: hapin-utils
order: 1
toc: content
---

## 版本与安装

本文档对应正式版 **hapin-utils 5.0.0**，使用 `npm install hapin-utils@5.0.0` 安装对应版本。从 4.x 升级时请阅读[迁移说明](/zh-CN/developer/hapin-utils-migration)；旧包装函数与新 API 同时保留。

## 已有函数

```ts
import { transformHapinToArabic } from 'hapin-utils';
transformHapinToArabic('ara'); // ارا
```

| 来源       | 已支持目标 | 已有函数                   |
| ---------- | ---------- | -------------------------- |
| Hapin      | 阿拉伯字母 | transformHapinToArabic     |
| Hapin      | IPA_CNA    | transformHapinToIPA_CNA    |
| 阿拉伯字母 | Hapin      | transformArabicToHapin     |
| 阿拉伯字母 | IPA_CNA    | transformArabicToIPA_CNA   |
| 西里尔字母 | Hapin      | transformCyrillicToHapin   |
| 西里尔字母 | 阿拉伯字母 | transformCyrillicToArabic  |
| 西里尔字母 | IPA_CNA    | transformCyrillicToIPA_CNA |

各函数参数为 `(input, clean = true)`；阿拉伯 →Hapin 另有第三参数 `easy = false`。三个数组导出为 transformArabicToHapinArray、transformCyrillicToHapinArray、transformHapinToArabicArray，它们拆分旧边界序列化结果，不是通用 tokenizer。`clean=false` 保留旧 U+200B 边界；旧 Hapin 包装函数沿用历史切分，来源转换仍包含已修复的错误。

## 5.0.0 新 API

```ts
import { analyzeHapin, convert } from 'hapin-utils';
const analysis = analyzeHapin('arzangha', { rules: 'context-v1' });
const result = convert('арزانға', { from: 'cyrillic', to: 'arabic' });
// result.text: ارزانعا
```

`convert` 只支持上表七个方向，来源 from 必须明确；to 为 hapin、arabic 或 ipa-cna，仍受方向矩阵限制。未支持方向返回 error 与 null 文本。

| 选项          | 默认值     | 含义                                                      |
| ------------- | ---------- | --------------------------------------------------------- |
| rules         | context-v1 | 上下文规则或 legacy 历史切分                              |
| inputFormat   | plain      | 保留原零宽文本，或显式用 legacy-boundaries 导入旧边界格式 |
| maxCandidates | 8          | 1–64，含首选；备选为局部替换                              |
| errors        | preserve   | 保留未知文本并诊断；strict 拒绝警告/错误诊断              |
| formatting    | preserve   | 保留布局；legacy 使用兼容布局处理                         |

分析结果包含 units、alternatives、diagnostics、rulesVersion 和 status。单元 raw/start/end 指向 UTF-16 原文区间 `[start,end)`，区分字母、引用原文、未知字符、空白、标点及来源符号。`convert` 另有 text 和 losses。状态为 ok、ambiguous 或 error，严格失败时 `text=null`。

可把分析结果直接传给 `convert(analysis, { from: analysis.source, to: 'arabic' })`；选择备选时将 units 替换为该备选的 units。这样保留字母边界，不重新分析显示字符串；诊断仍保留原分析信息。

未知字符、未闭合引号、切分歧义和候选截断都有诊断 code。规范化可能丢失硬软音符号、и/й 等来源区别，应检查 losses。当前不承诺 IPA 反向或通用 Hapin→ 西里尔转换。

参见[执行示例](/zh-CN/developer/examples)、[切分规则](/zh-CN/standardize/segmentation)和[迁移说明](/zh-CN/developer/hapin-utils-migration)。工具包按 MIT 开源，本页不重新定义历史方案许可。
