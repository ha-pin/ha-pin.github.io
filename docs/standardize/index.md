---
title: Standardize v1
group: standardize
toc: content
---

## The Standardization of Hapin

The Standardization of Hapin goes through **Hapin Experimental Scheme Stage (v0.x)**, **Hapin Scheme Preview Stage** and **Hapin Offical Scheme Stage (v1.x)**. We have fixed several issues, and then released the **Hapin Offical Scheme Stage (v1.x)**.

`Hapin Offical Scheme Stage (v1.x)` has passed `v1.0` and `v1.1` minor version iteration, it is mature and stable in **The Persian-Arabic Alphabet** based Kazakh language. `v1.1` version has supported **The Cyrillic Alphabet** based Kazakh language.

## Open Source

The content of this part was open-sourced under `GPL-3.0` license, GitHub: [ha-pin/rime-kz-experiment](https://github.com/ha-pin/rime-kz-experiment).

You can get the commits history by visiting the GitHub repo.

You can get the development history by the post:

- [《基于 Rime 的哈拼 Hapin 输入方案设计》](/posts/hapin-scheme-design-based-on-rime)

## Hapin Offical Scheme

### Hapin Single Alphabets

| Hapin scheme | The Persian-Arabic Alphabet | The Cyrillic Alphabet |
| ------------ | --------------------------- | --------------------- |
| a            | ا                           | А а                   |
| b            | ب                           | Б б                   |
| d            | د                           | Д д                   |
| e            | ى                           | Ы ы                   |
| f            | ف                           | Ф ф                   |
| g            | گ                           | Г г                   |
| h            | ح                           | Х х                   |
| i            | ي                           | Й й                   |
| j            | ج                           | Ж ж                   |
| k            | ك                           | К к                   |
| l            | ل                           | Л л                   |
| m            | م                           | М м                   |
| n            | ن                           | Н н                   |
| o            | و                           | О о                   |
| p            | پ                           | П п                   |
| q            | ق                           | Қ қ                   |
| r            | ر                           | Р р                   |
| s            | س                           | С с                   |
| t            | ت                           | Т т                   |
| u            | ۇ                           | Ұ ұ                   |
| v            | ۆ                           | В в                   |
| w            | ۋ                           | У у                   |
| z            | ز                           | З з                   |

## Hapin Double Alphabets

| Hapin scheme | The Persian-Arabic Alphabet | The Cyrillic Alphabet |
| ------------ | --------------------------- | --------------------- |
| ye           | ە                           | Е е                   |
| gh           | ع                           | Ғ ғ                   |
| hh           | ھ                           | Һ һ                   |
| ng           | ڭ                           | Ң ң                   |
| sh           | ش                           | Ш ш                   |
| ch           | چ                           | Ч ч                   |

## Hapin Alphabets with The Weak Tone

| Hapin scheme | The Persian-Arabic Alphabet | The Cyrillic Alphabet |
| ------------ | --------------------------- | --------------------- |
| xa           | ٴا                          | Ә ә                   |
| xe           | ٴى                          | І і                   |
| xo           | ٴو                          | Ө ө                   |
| xu / yu      | ٴۇ                          | Ү ү                   |

> The weak tone symbol `ٴ` was defined as `x`. Due to the reason that the pronunciation of `ٴۇ` is really like `yu` of Pinyin, so hapin supportes both `xu` and `yu` for `ٴۇ`.

### Symbols for The Persian-Arabic Alphabet

| Hapin scheme | The Persian-Arabic Alphabet |
| ------------ | --------------------------- |
| x            | ٴ                           |
| ,            | ،                           |
| ?            | ؟                           |
| ;            | ؛                           |
| -            | ۔                           |
| .            | ٜ                           |

### For The Cyrillic Alphabet

| Hapin scheme | The Persian-Arabic Alphabet | The Cyrillic Alphabet |
| ------------ | --------------------------- | --------------------- |
| io / yo      | يو                          | Ё ё                   |
| i / yi       | ي                           | И и                   |
| shsh         | شش                          | Щ щ                   |
| ts / c       | تس                          | Ц ц                   |
| xx           | --                          | Ъ ъ                   |
| xy           | --                          | Ь ь                   |
| ye           | ە                           | Э э                   |
| iw / yw      | يۋ                          | Ю ю                   |
| ia / ya      | يا                          | Я я                   |

> **It should be noted that:** `hapin-arabic` would not support the the above-mentioned(Only for The Cyrillic Alphabet) scheme. And the homologous alphabet of `И и` is `ٴى` before, but now is `ي`.
