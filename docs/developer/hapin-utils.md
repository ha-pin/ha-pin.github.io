---
title: hapin-utils
order: 1
toc: content
---

## Versions and installation

This reference targets **hapin-utils 5.0.0**. Install the matching version with `npm install hapin-utils@5.0.0`. Review the [migration guide](/developer/hapin-utils-migration) when upgrading from 4.x; existing wrappers remain available alongside the new APIs.

## Existing functions

```ts
import { transformHapinToArabic } from 'hapin-utils';
transformHapinToArabic('ara'); // ارا
```

| Source   | Supported target | Existing function          |
| -------- | ---------------- | -------------------------- |
| Hapin    | Arabic           | transformHapinToArabic     |
| Hapin    | IPA_CNA          | transformHapinToIPA_CNA    |
| Arabic   | Hapin            | transformArabicToHapin     |
| Arabic   | IPA_CNA          | transformArabicToIPA_CNA   |
| Cyrillic | Hapin            | transformCyrillicToHapin   |
| Cyrillic | Arabic           | transformCyrillicToArabic  |
| Cyrillic | IPA_CNA          | transformCyrillicToIPA_CNA |

Each accepts `(input, clean = true)`. Arabic→Hapin also accepts `easy = false` as the third argument. The three `*Array` exports are transformArabicToHapinArray, transformCyrillicToHapinArray and transformHapinToArabicArray. They split the old boundary serialization and are not a general tokenizer. `clean=false` retains old U+200B boundaries. Existing Hapin wrappers use legacy parsing; bug fixes still apply to source conversion.

## New APIs in 5.0.0

```ts
import { analyzeHapin, convert } from 'hapin-utils';
const analysis = analyzeHapin('arzangha', { rules: 'context-v1' });
const result = convert('арзанға', { from: 'cyrillic', to: 'arabic' });
// result.text: ارزانعا
```

`convert` supports only the seven directions above. `from` is explicit; `to` is hapin, arabic or ipa-cna, constrained by that matrix. Unsupported directions return an error with null text.

| Option        | Default    | Meaning                                                                      |
| ------------- | ---------- | ---------------------------------------------------------------------------- |
| rules         | context-v1 | Context rules or legacy Hapin segmentation                                   |
| inputFormat   | plain      | Preserve original zero-width text, or explicitly import legacy-boundaries    |
| maxCandidates | 8          | 1–64, counting preferred analysis; alternatives are local replacements       |
| errors        | preserve   | Keep unknown text with diagnostics; strict rejects warning/error diagnostics |
| formatting    | preserve   | Preserve layout; legacy applies compatibility layout handling                |

Analysis includes units, alternatives, diagnostics, rulesVersion and status. Unit raw/start/end refer to UTF-16 source ranges `[start,end)`; literal, unknown, whitespace, punctuation and source-mark units are distinct from letters. `convert` adds text and losses. `status` is ok, ambiguous or error; strict failure has `text=null`.

You may pass an analysis directly to `convert(analysis, { from: analysis.source, to: 'arabic' })`; to select an alternate, replace units with that alternative's units. This preserves source boundaries instead of re-parsing a display string. Diagnostics remain attached to the original analysis.

Unknown characters, unclosed quotes, ambiguous segmentation and candidate truncation have stable diagnostic codes. Normalization can lose source distinctions such as hard/soft signs or merged и/й spellings; inspect losses. No reverse IPA or general Hapin→Cyrillic function is promised.

See [generated examples](/developer/examples), [segmentation](/standardize/segmentation), and [migration](/developer/hapin-utils-migration). The library is MIT licensed; this page does not redefine historical scheme licensing.

For native Rust or Rust-backed WASM packages, see [hapin-utils-rs](/developer/hapin-utils-rs), which implements the same 5.0.0 conversion behavior and context rules.
