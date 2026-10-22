---
title: hapin-utils-rs
order: 4
toc: content
---

## Rust and WebAssembly 5.0.0

**hapin-utils-rs 5.0.0** is the native Rust implementation of [hapin-utils 5.0.0](/developer/hapin-utils). It implements the same seven conversion directions, `context-v1` segmentation, structured source-letter units, diagnostics and compatibility functions. It is MIT licensed.

[Source and API guide](https://github.com/ha-pin/hapin-utils-rs) · [crates.io 5.0.0](https://crates.io/crates/hapin-utils-rs/5.0.0) · [WASM v5.0.0](https://github.com/ha-pin/hapin-utils-rs/releases/tag/v5.0.0)

Use the Rust crate for native applications. Use a WASM package for a browser, Node.js or a bundler with WASM support. Native conversion and native tests require no JavaScript runtime or desktop dictionary. The optional WASM bindings reuse the same Rust core.

## Install the Rust crate

```toml
[dependencies]
hapin-utils-rs = "5.0.0"
```

The crate imports as `hapin_utils_rs`. Rust 2021 edition is used; stable Rust is tested on Linux, macOS and Windows. A minimum supported Rust version is not currently declared.

To use the released source directly, replace the registry dependency with:

```toml
[dependencies]
hapin-utils-rs = { git = "https://github.com/ha-pin/hapin-utils-rs", tag = "v5.0.0" }
```

Use `branch = "main"` for development or `rev` for a specific reviewed commit. Commit your application's `Cargo.lock` to record the resolved version.

## Supported directions

| Source   | Targets                |
| -------- | ---------------------- |
| Hapin    | Arabic, IPA_CNA        |
| Arabic   | Hapin, IPA_CNA         |
| Cyrillic | Hapin, Arabic, IPA_CNA |

`Target` uses `Hapin`, `Arabic` and `IpaCna`. Other combinations return an error-status result with `text: None` and an `unsupported-conversion` diagnostic. IPA_CNA is the reference library's broad transcription; no reverse IPA or general Hapin→Cyrillic conversion is provided.

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

Conversion consumes original letter units directly. Cyrillic `нғ`, `ңх` and `нг` retain different letter boundaries even when their simplified Hapin spellings collide. Keep the structured analysis when a later conversion must retain these distinctions.

## Analysis, candidates and errors

```rust
use hapin_utils_rs::{analyze_hapin, convert, AnalyzeOptions, ConvertOptions,
                     Source, Status, Target};

fn main() -> Result<(), hapin_utils_rs::Error> {
    let mut analysis = analyze_hapin("ngh", AnalyzeOptions::default())?;
    assert_eq!(analysis.status, Status::Ambiguous);
    // Default: N + GH. Select the returned NG + H alternative.
    analysis.units = analysis.alternatives[0].units.clone();
    let result = convert(&analysis, ConvertOptions::new(Source::Hapin, Target::Arabic))?;
    assert_eq!(result.text.as_deref(), Some("ڭح"));
    Ok(())
}
```

The default `context-v1` rules prefer N + GH for `ngh`, retain exact source-attested exceptions such as `shanghai`, and expose competing `ngul`, `ngye` / `ngxe`, S + H and overlapping-letter analyses. Each alternative changes one local conflict; it does not enumerate every combination. `max_candidates` includes the preferred path, ranges from 1 to 64 and defaults to 8. Truncation produces a `candidate-limit` warning. See the [segmentation rules](/standardize/segmentation) and [source evidence](/standardize/segmentation-evidence).

| Rust option                     | Default                   | Meaning                                                                              |
| ------------------------------- | ------------------------- | ------------------------------------------------------------------------------------ |
| `ConvertOptions.analysis.rules` | `RulesVersion::ContextV1` | Context rules; `Legacy` selects historical Hapin splitting.                          |
| `analysis.input_format`         | `InputFormat::Plain`      | Preserve ordinary U+200B, or consume old machine boundaries with `LegacyBoundaries`. |
| `analysis.max_candidates`       | `8`                       | Preferred path plus bounded local alternatives.                                      |
| `errors`                        | `ErrorsMode::Preserve`    | `Strict` rejects warning/error diagnostics.                                          |
| `formatting`                    | `Formatting::Preserve`    | Preserve layout; `Legacy` applies old ASCII-space handling.                          |

`convert` accepts `&str`, `&String` or `&Analysis`. Native Rust accesses units, diagnostics, alternatives and status through `result.analysis`; `text` and `losses` are on the result itself. Spans are UTF-16 `[start, end)` offsets, matching JavaScript rather than Rust byte indices. Use `unit.raw` to read the original text. Serde serializes the analysis fields at the top level with the reference camelCase names.

Invalid candidate limits or supplied spans return `Err(Error)`. Unsupported directions, source mismatches and strict-input failures return `Ok(ConversionResult)` with error status and no output text. `Status::Ok` can still contain warnings; inspect `diagnostics` and `losses`. Selecting an alternative retains the original diagnostics, so strict mode will still reject unresolved warnings. `source-distinction` and `unencoded-boundary` losses describe information that the display text cannot preserve.

## Compatibility API

The seven legacy wrappers use snake_case names such as `transform_hapin_to_arabic`, `transform_arabic_to_hapin` and `transform_cyrillic_to_ipa_cna`. Each default wrapper takes `&str` and returns `String`; its `_with_options` variant accepts `LegacyOptions { clean, easy }`, defaulting to `true` / `false`. `easy` only affects Arabic→Hapin.

`clean: false` retains source-specific U+200B serialization. The three `*_array` wrappers split that serialization into `Vec<String>`; use `Analysis.units` for explicit letter units. Existing Hapin wrappers keep legacy splitting: `transform_hapin_to_arabic("ngh")` is `ڭح`; the new `convert` API uses context rules. See the [complete API mapping](https://github.com/ha-pin/hapin-utils-rs#legacy-api-mapping).

## WASM packages

[WASM v5.0.0](https://github.com/ha-pin/hapin-utils-rs/releases/tag/v5.0.0) includes these target archives and [SHA256SUMS](https://github.com/ha-pin/hapin-utils-rs/releases/download/v5.0.0/SHA256SUMS):

| Runtime                             | Download                                                                                                              | Initialization                                 |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Browser / explicit ES modules       | [web](https://github.com/ha-pin/hapin-utils-rs/releases/download/v5.0.0/hapin-utils-rs-5.0.0-wasm-web.tar.gz)         | `await init()` before calling the API.         |
| Node.js / CommonJS                  | [nodejs](https://github.com/ha-pin/hapin-utils-rs/releases/download/v5.0.0/hapin-utils-rs-5.0.0-wasm-nodejs.tar.gz)   | `require()` loads WASM synchronously.          |
| Bundler with `.wasm` import support | [bundler](https://github.com/ha-pin/hapin-utils-rs/releases/download/v5.0.0/hapin-utils-rs-5.0.0-wasm-bundler.tar.gz) | The bundler handles the generated WASM import. |

Verify downloaded files against `SHA256SUMS` before extraction. The checksum list covers all three archives.

Each archive contains matching WASM, JavaScript glue, TypeScript declarations, package metadata, README and license files at its root. Keep those files together and extract each target into a separate directory, for example:

```sh
mkdir -p wasm-web wasm-nodejs wasm-bundler
tar -xzf hapin-utils-rs-5.0.0-wasm-web.tar.gz -C wasm-web
tar -xzf hapin-utils-rs-5.0.0-wasm-nodejs.tar.gz -C wasm-nodejs
tar -xzf hapin-utils-rs-5.0.0-wasm-bundler.tar.gz -C wasm-bundler
```

These are GitHub Release assets, not an npm publication of `hapin-utils-rs`.

For the web target, serve the files over HTTP with the WASM MIME type `application/wasm`; do not open them through `file://`:

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

For Node.js:

```js
const { convert } = require('./wasm-nodejs/hapin_utils_rs.js');
console.log(convert('арзанға', { from: 'cyrillic', to: 'arabic' }).text); // ارزانعا
```

For a compatible bundler:

```js
import { convert } from './wasm-bundler/hapin_utils_rs.js';
console.log(convert('арзанға', { from: 'cyrillic', to: 'arabic' }).text); // ارزانعا
```

The bundler needs WASM integration or an appropriate plugin. Otherwise, use the web package with explicit initialization. In a Node ES module application, use `createRequire` to load the CommonJS target.

WASM exports `analyzeHapin`, `convert`, `segmentationRules()` and the TypeScript API's seven camelCase transform functions and three Array functions. JavaScript uses flat options such as `rules`, `inputFormat` and `maxCandidates`; Rust nests those options under `ConvertOptions.analysis`. WASM result analysis fields are at the top level. The `segmentationRules()` export is a function in this facade. Strict conversion returns `text: null`; invalid options or malformed supplied analyses throw.

## Verification and releases

The Rust implementation is checked against 2,325 full structured/API cases and 1,600 seeded differential cases from TypeScript 5.0.0. Node and web WASM bindings each run the 2,325 full cases. CI also checks native builds, tests and README examples on Linux, macOS and Windows. Native builds use Rust; WASM maintenance additionally uses Python 3.11+, Node.js 24 and wasm-pack 0.15.0.

Main-branch pushes validate the project before publishing missing Cargo versions to crates.io and target archives to GitHub Release. Already-published versions are skipped. See the [repository publishing guide](https://github.com/ha-pin/hapin-utils-rs#automatic-publishing) for maintainer configuration, local build commands and recovery instructions.
