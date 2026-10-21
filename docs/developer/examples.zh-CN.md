---
title: 工具包执行示例
order: 3
---

<!-- snapshot-sha256:b73659e4c1f4cf44cb5c44f8fc3ae2fb26bb4b042e382a17af85f58349d98f35 -->

由 hapin-utils 5.0.0 执行生成的固定版本快照，使用 context-v1 规则。stable 表示正式版本通道，发布动作由维护者执行。

Package: 5.0.0; rules: context-v1; status: stable.

| ID | Input | Output | Status |
| --- | --- | --- | --- |
| basic | `ara` | `ارا` | ok |
| ngh-prior | `arzangha` | `ارزانعا` | ambiguous |
| ngh-exception | `shanghai` | `شاڭحاي` | ambiguous |
| ngul-candidate | `amangul` | `امانگۇل` | ambiguous |
| ngye-conflict | `angye` | `اڭە` | ambiguous |
| source-ngh | `нғ` | `نع` | ok |
| source-ng-h | `ңх` | `ڭح` | ok |
| source-n-g | `нг` | `نگ` | ok |
| front-vowels | `xa xo xe xu` | `æ y i ø` | ok |
| quoted-layout | `a  xa "w"` | `ا  ٴا "w"` | ok |
| legacy-boundary | `n\u200bgh` | `نع` | ok |
