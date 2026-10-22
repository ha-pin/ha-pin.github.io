---
title: hapin-utils-rs
order: 4
toc: content
---

## Rust 与 WebAssembly 5.0.0

**hapin-utils-rs 5.0.0** 是 [hapin-utils 5.0.0](/zh-CN/developer/hapin-utils) 的原生 Rust 实现，覆盖相同的七种转换方向、`context-v1` 切分规则、结构化原文字母单元、诊断和旧接口兼容行为，按 MIT 开源。

[源码与完整 API 文档](https://github.com/ha-pin/hapin-utils-rs) · [crates.io 5.0.0](https://crates.io/crates/hapin-utils-rs/5.0.0) · [WASM v5.0.0](https://github.com/ha-pin/hapin-utils-rs/releases/tag/v5.0.0)

原生应用使用 Rust crate；浏览器、Node.js 或支持 WASM 的 bundler 使用对应 WASM 包。原生转换和原生测试不依赖 JavaScript 运行时或桌面词库，可选 WASM 绑定复用同一套 Rust 核心。

## 安装 Rust crate

```toml
[dependencies]
hapin-utils-rs = "5.0.0"
```

Rust 导入名为 `hapin_utils_rs`。项目使用 Rust 2021 edition，stable Rust 在 Linux、macOS、Windows 上通过 CI 验证；目前尚未声明最低 Rust 版本。

如需直接依赖已发布的源码标签，可将 registry 依赖替换为：

```toml
[dependencies]
hapin-utils-rs = { git = "https://github.com/ha-pin/hapin-utils-rs", tag = "v5.0.0" }
```

开发版可使用 `branch = "main"`，指定提交可使用 `rev`。应用应提交自己的 `Cargo.lock`，记录实际解析的版本。

## 支持的转换方向

| 来源       | 支持的目标                 |
| ---------- | -------------------------- |
| Hapin      | 阿拉伯字母、IPA_CNA        |
| 阿拉伯字母 | Hapin、IPA_CNA             |
| 西里尔字母 | Hapin、阿拉伯字母、IPA_CNA |

`Target` 枚举为 `Hapin`、`Arabic`、`IpaCna`。其他组合返回 error 状态、`text: None` 和 `unsupported-conversion` 诊断。IPA_CNA 是参考库的宽式转写；当前不提供 IPA 反向或通用 Hapin→ 西里尔转换。

```rust
use hapin_utils_rs::{convert, ConvertOptions, Source, Target};

fn main() -> Result<(), hapin_utils_rs::Error> {
    let result = convert(
        "арзанға",
        ConvertOptions::new(Source::Cyrillic, Target::Arabic),
    )?;
    assert_eq!(result.text.as_deref(), Some("ارزانعا"));
    Ok(())
}
```

转换直接使用原文字母单元。西里尔 `нғ`、`ңх`、`нг` 即使在简化 Hapin 拼写中发生碰撞，也能保留不同字母边界。后续转换需要保留这些区别时，应继续保存结构化分析。

## 分析、候选与错误

```rust
use hapin_utils_rs::{analyze_hapin, convert, AnalyzeOptions, ConvertOptions,
                     Source, Status, Target};

fn main() -> Result<(), hapin_utils_rs::Error> {
    let mut analysis = analyze_hapin("ngh", AnalyzeOptions::default())?;
    assert_eq!(analysis.status, Status::Ambiguous);
    // 默认 N + GH；选择返回的 NG + H 局部候选。
    analysis.units = analysis.alternatives[0].units.clone();
    let result = convert(&analysis, ConvertOptions::new(Source::Hapin, Target::Arabic))?;
    assert_eq!(result.text.as_deref(), Some("ڭح"));
    Ok(())
}
```

默认 `context-v1` 将 `ngh` 优先解释为 N + GH，同时保留 `shanghai` 等完整词形的来源例外；`ngul`、`ngye` / `ngxe`、S + H 和重叠字母等冲突会提供竞争分析。每个候选只替换一个局部冲突，不枚举全部组合。`max_candidates` 包含首选路径，范围为 1–64，默认 8；截断会报告 `candidate-limit`。详见[切分规则](/zh-CN/standardize/segmentation)和[来源证据](/zh-CN/standardize/segmentation-evidence)。

| Rust 选项                       | 默认值                    | 含义                                                      |
| ------------------------------- | ------------------------- | --------------------------------------------------------- |
| `ConvertOptions.analysis.rules` | `RulesVersion::ContextV1` | 上下文规则；`Legacy` 使用历史 Hapin 切分。                |
| `analysis.input_format`         | `InputFormat::Plain`      | 保留普通 U+200B，或用 `LegacyBoundaries` 读取旧机器边界。 |
| `analysis.max_candidates`       | `8`                       | 首选路径与有限局部候选的总上限。                          |
| `errors`                        | `ErrorsMode::Preserve`    | `Strict` 拒绝 warning／error 诊断。                       |
| `formatting`                    | `Formatting::Preserve`    | 保留布局；`Legacy` 应用旧 ASCII 空格处理。                |

`convert` 接受 `&str`、`&String` 或 `&Analysis`。原生 Rust 通过 `result.analysis` 访问 units、diagnostics、alternatives 和 status，结果自身还有 `text` 和 `losses`。位置使用与 JavaScript 一致的 UTF-16 `[start, end)`，不是 Rust 字节索引；读取原文可直接使用 `unit.raw`。Serde 序列化会将分析字段展开到顶层，并使用参考实现的 camelCase 字段名。

非法候选上限或外部传入的错误源位置返回 `Err(Error)`；不支持的方向、来源不匹配和严格模式失败返回 `Ok(ConversionResult)`，其中状态为 error、没有输出文本。`Status::Ok` 仍可能包含 warning，应检查 `diagnostics` 和 `losses`。选择候选不会自动清除原诊断，严格模式仍会拒绝未解决的 warning。`source-distinction` 和 `unencoded-boundary` 描述显示文本不能保留的信息。

## 兼容接口

七个旧转换函数使用 snake_case 名称，例如 `transform_hapin_to_arabic`、`transform_arabic_to_hapin`、`transform_cyrillic_to_ipa_cna`。默认函数接受 `&str`、返回 `String`；对应的 `_with_options` 函数接受 `LegacyOptions { clean, easy }`，默认分别为 `true`／`false`。`easy` 只作用于阿拉伯 →Hapin。

`clean: false` 保留按来源区分的 U+200B 序列化。三个 `*_array` 函数将该序列化拆成 `Vec<String>`；明确的字母单元应读取 `Analysis.units`。Hapin 旧包装函数保留历史切分：`transform_hapin_to_arabic("ngh")` 返回 `ڭح`；新 `convert` 使用上下文规则。完整映射见[API 文档](https://github.com/ha-pin/hapin-utils-rs/blob/main/README.zh-CN.md#旧版兼容接口)。

## WASM 包

[WASM v5.0.0](https://github.com/ha-pin/hapin-utils-rs/releases/tag/v5.0.0) 包含以下目标压缩包和 [SHA256SUMS](https://github.com/ha-pin/hapin-utils-rs/releases/download/v5.0.0/SHA256SUMS)：

| 运行环境                    | 下载                                                                                                                  | 初始化方式                          |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 浏览器／显式 ES module      | [web](https://github.com/ha-pin/hapin-utils-rs/releases/download/v5.0.0/hapin-utils-rs-5.0.0-wasm-web.tar.gz)         | 调用 API 前 `await init()`。        |
| Node.js／CommonJS           | [nodejs](https://github.com/ha-pin/hapin-utils-rs/releases/download/v5.0.0/hapin-utils-rs-5.0.0-wasm-nodejs.tar.gz)   | `require()` 同步加载 WASM。         |
| 支持 `.wasm` 导入的 bundler | [bundler](https://github.com/ha-pin/hapin-utils-rs/releases/download/v5.0.0/hapin-utils-rs-5.0.0-wasm-bundler.tar.gz) | 由 bundler 处理生成的 WASM import。 |

解压前应按 `SHA256SUMS` 校验下载文件；该清单包含三个压缩包的校验值。

每个压缩包的根目录包含匹配的 WASM、JavaScript 胶水代码、TypeScript 声明、package metadata、README 和 LICENSE。保持这些文件在一起，分别解压到独立目录，例如：

```sh
mkdir -p wasm-web wasm-nodejs wasm-bundler
tar -xzf hapin-utils-rs-5.0.0-wasm-web.tar.gz -C wasm-web
tar -xzf hapin-utils-rs-5.0.0-wasm-nodejs.tar.gz -C wasm-nodejs
tar -xzf hapin-utils-rs-5.0.0-wasm-bundler.tar.gz -C wasm-bundler
```

这些是 GitHub Release 资产，不表示 `hapin-utils-rs` 已发布 npm 包。

web 目标通过 HTTP 提供文件，WASM MIME 为 `application/wasm`，不要通过 `file://` 打开：

```js
import init, {
  convert,
  analyzeHapin,
  segmentationRules,
} from './wasm-web/hapin_utils_rs.js';
await init();
console.log(convert('арзанға', { from: 'cyrillic', to: 'arabic' }).text); // ارزانعا
console.log(analyzeHapin('ngh', {}).alternatives);
console.log(segmentationRules());
```

Node.js：

```js
const { convert } = require('./wasm-nodejs/hapin_utils_rs.js');
console.log(convert('арзанға', { from: 'cyrillic', to: 'arabic' }).text); // ارزانعا
```

兼容 bundler：

```js
import { convert } from './wasm-bundler/hapin_utils_rs.js';
console.log(convert('арзанға', { from: 'cyrillic', to: 'arabic' }).text); // ارزانعا
```

bundler 需要 WASM 支持或合适的插件，否则应使用 web 包并显式初始化。Node ES module 应用可用 `createRequire` 加载 CommonJS 目标。

WASM 暴露 `analyzeHapin`、`convert`、`segmentationRules()`，以及 TypeScript API 同名的七个 camelCase 转换函数和三个 Array 函数。JavaScript 选项扁平化为 `rules`、`inputFormat`、`maxCandidates` 等；Rust 则将这些选项放在 `ConvertOptions.analysis`。WASM 分析字段位于结果顶层，`segmentationRules()` 在此绑定中是函数。严格转换失败返回 `text: null`，非法选项或外部传入的非法分析会抛出异常。

## 验证与发布

Rust 实现与 TypeScript 5.0.0 的 2,325 个完整结构化/API 案例和 1,600 个确定性随机案例对照验证；Node 和 web WASM 绑定分别执行 2,325 个完整案例。CI 还在 Linux、macOS、Windows 上检查原生构建、测试和 README 示例。原生构建使用 Rust，WASM 维护额外使用 Python 3.11+、Node.js 24 和 wasm-pack 0.15.0。

推送 main 后，验证通过才会向 crates.io 发布尚不存在的 Cargo 版本，并向 GitHub Release 上传目标压缩包；已发布版本会跳过。维护者配置、本地构建命令和失败恢复说明见[仓库发布指南](https://github.com/ha-pin/hapin-utils-rs/blob/main/README.zh-CN.md#主分支自动发布)。
