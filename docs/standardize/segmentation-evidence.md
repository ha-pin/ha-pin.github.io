---
title: Segmentation evidence
order: 3
toc: content
---

## Dataset and counting

Only the source Arabic (58,632 word entries) and Cyrillic (8,953 entries) dictionaries were inspected. Labels come from source letters, not the old Hapin tokenizer. Counts below are occurrences within dictionary entries, not usage frequencies. Overlapping ng/gh inside ngh are excluded from the independent counts.

| Pattern            | Arabic source | Cyrillic source |
| ------------------ | ------------- | --------------- |
| ngh: N,GH / NG,H   | 435 / 9       | 23 / 0          |
| ngye: NG / N,G     | 307 / 214     | 23 / 16         |
| final ng: NG / N,G | 5988 / 0      | 460 / 2         |
| ngul: N,G / NG     | 27 / 0        | no samples      |

Nine NG,H counterexamples include shanghai and its attested forms, tunghwa and wanghung. Final-ng counterexamples include source анг and самсунг. Similar-looking words cannot be merged automatically. Thirteen same-Hapin/same-position conflict groups were found in the inspected ng/ngh/gh/sh/hh patterns; that is not the same metric as all 32 simplified-key collision groups found earlier.

## Evaluation limits

A simple right-two-character classifier reduced mismatches from 65 to 59 in a 2,680-event exploratory grouped holdout, recovering only 6 of 65 minority N,G cases. This was an earlier prototype, **not the accuracy of the current rule implementation**. Prefix grouping does not guarantee morphological-family independence, and this holdout has already been inspected.

Corpus-majority evidence supports rule development but cannot prove every unknown word correct. The 27 ngul occurrences justify a candidate preference, not a universal hard rule. New rule promotion requires independent word-family evaluation, counterexamples and per-class false-change/recall reporting.

The source data contains spelling variants; it is not a fully reviewed linguistic gold standard. The implemented rule catalog and reproducible source hashes are stored with the library. No raw dictionary is shipped with the website.

## Current implementation audit

The two profiles of the current core were compared on the inspected source entries. These data include rule-development examples and are not independent held-out accuracy. A mismatch is disagreement with source spelling, not necessarily a linguistic error. Uncertain preferred results still retain alternatives.

| Pattern | Events | Legacy mismatches | Context mismatches | Newly wrong |
| ------- | -----: | ----------------: | -----------------: | ----------: |
| sh      |   9042 |                49 |                 36 |           0 |
| ng      |  14113 |               333 |                306 |           0 |
| gh      |   7267 |                 0 |                  0 |           0 |
| ngh     |    467 |               458 |                  0 |           0 |
| hh      |     31 |                 1 |                  1 |           0 |
