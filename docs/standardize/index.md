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

| Hapin scheme | The Persian-Arabic Alphabet | The Cyrillic Alphabet | IPA |
| ------------ | --------------------------- | --------------------- | --- |
| a            | ا                           | А а                   | ɑ   |
| b            | ب                           | Б б                   | b   |
| d            | د                           | Д д                   | d   |
| e            | ى                           | Ы ы                   | e   |
| f            | ف                           | Ф ф                   | f   |
| g            | گ                           | Г г                   | ɡ   |
| h            | ح                           | Х х                   | x   |
| i            | ي                           | Й й                   | j   |
| j            | ج                           | Ж ж                   | dʒ  |
| k            | ك                           | К к                   | k   |
| l            | ل                           | Л л                   | l   |
| m            | م                           | М м                   | m   |
| n            | ن                           | Н н                   | n   |
| o            | و                           | О о                   | o   |
| p            | پ                           | П п                   | p   |
| q            | ق                           | Қ қ                   | q   |
| r            | ر                           | Р р                   | r   |
| s            | س                           | С с                   | s   |
| t            | ت                           | Т т                   | t   |
| u            | ۇ                           | Ұ ұ                   | u   |
| v            | ۆ                           | В в                   | v   |
| w            | ۋ                           | У у                   | w   |
| z            | ز                           | З з                   | z   |

## Hapin Double Alphabets

| Hapin scheme | The Persian-Arabic Alphabet | The Cyrillic Alphabet | IPA |
| ------------ | --------------------------- | --------------------- | --- |
| ye           | ە                           | Е е                   | e   |
| gh           | ع                           | Ғ ғ                   | ʁ   |
| hh           | ھ                           | Һ һ                   | h   |
| ng           | ڭ                           | Ң ң                   | ŋ   |
| sh           | ش                           | Ш ш                   | ʃ   |
| ch           | چ                           | Ч ч                   | tʃ  |

## Hapin Alphabets with The Weak Tone

| Hapin scheme | The Persian-Arabic Alphabet | The Cyrillic Alphabet | IPA |
| ------------ | --------------------------- | --------------------- | --- |
| xa           | ٴا                          | Ә ә                   | æ   |
| xe           | ٴى                          | І і                   | i   |
| xo           | ٴو                          | Ө ө                   | y   |
| xu / yu      | ٴۇ                          | Ү ү                   | ø   |

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

| Hapin scheme | The Persian-Arabic Alphabet | The Cyrillic Alphabet | IPA |
| ------------ | --------------------------- | --------------------- | --- |
| io / yo      | يو                          | Ё ё                   | jo  |
| i / yi       | ي                           | И и                   | j   |
| shsh         | شش                          | Щ щ                   | ʃtʃ |
| ts / c       | تس                          | Ц ц                   | ts  |
| xx           | --                          | Ъ ъ                   | --  |
| xy           | --                          | Ь ь                   | --  |
| yy           | --                          | Э э                   |     |
| iw / yw      | يۋ                          | Ю ю                   | jw  |
| ia / ya      | يا                          | Я я                   | jɑ  |

> **It should be noted that:** `hapin-arabic` would not support the the above-mentioned(Only for The Cyrillic Alphabet) scheme. And the homologous alphabet of `И и` is `ٴى` before, but now is `ي`.
