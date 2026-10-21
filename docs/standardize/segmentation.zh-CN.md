---
title: 字母切分规则
order: 2
toc: content
---

## 切分的对象

这里切分的是字母或字母组合，不是完整自然语言分词。N、NG、GH 是不同字母单元，简洁 Hapin 字符串却可能出现重叠。

阿拉伯/西里尔来源直接提供确定边界：`нғ/نع` 为 N,GH，`ңх/ڭح` 为 NG,H，`нг/نگ` 为 N,G。跨文字转换不会重新解析已清理的中间 Hapin。

## context-v1（hapin-utils 5.0.0）

| 输入上下文                             | 首选切分   | 适用限制                            |
| -------------------------------------- | ---------- | ----------------------------------- |
| ngh                                    | N,GH       | 语料主分布；仍提供 NG,H 备选        |
| shanghai 及已见 shanghaida/shanghaigha | NG,H       | 完整词形例外，不无限匹配此前缀      |
| ngul，例如 amangul                     | N,G + ul   | 候选偏好，样本有限，保留 NG 备选    |
| ngye / ngxe                            | NG + ye/xe | 来源存在冲突，保留 N,G + ye/xe      |
| 词尾 ng                                | NG         | 默认字母解析，不能据此纠正源文字 нг |
| ashana 等已见词形                      | S,H        | 完整词形匹配，保留 SH 备选          |

普通 gh 按 GH 识别；结构化来源可以表达 G,H。解析器不会把所有理论上的 g+h 都判为未决。

## 决策与备选

确定来源/显式边界优先于词形规则、上下文候选和默认字母匹配。规则有 ID、版本与证据元数据（`segmentationRules`）。上表只描述实际实现；当前没有通用形态分析器或基于使用频次的概率模型。

`analyzeHapin('arzangha')` 首选 `a,r,z,a,n,gh,a`；`analyzeHapin('shanghai')` 首选 `sh,a,ng,h,a,i`。存在竞争路径时状态为 ambiguous，保留模式仍返回首选输出；严格转换拒绝未决诊断。

备选是有数量上限的**局部替换**，每项只改变首选路径中的一个冲突，不枚举所有组合。`maxCandidates` 为 1–64，默认 8，包含首选；截断时返回 `candidate-limit` 诊断。

未知字符保留并给诊断，引号原文受到保护；本次没有新增单引号边界语法。参见 [API](/zh-CN/developer/hapin-utils)、[执行示例](/zh-CN/developer/examples)和[统计依据](/zh-CN/standardize/segmentation-evidence)。

## 更多重叠与同键冲突

已知 ang、angmye、songe 等同键来源变体保留 NG 默认并提供 N,G；ashat 同时有 SH 与 S,H 来源，因此保留 SH 默认和 S,H 备选，不按多数票覆盖。shsh、hh 也返回局部替代分析。tsh 保留历史 T,SH 优先级并提供 TS,H，避免 ts 吞掉 sh 的开头。
