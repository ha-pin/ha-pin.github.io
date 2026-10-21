---
title: Letter segmentation
order: 2
toc: content
---

## What is segmented?

This is segmentation into letters or letter combinations, not full natural-language word segmentation. N, NG and GH identify different units even when a simplified Hapin string overlaps.

Source Arabic/Cyrillic letters provide hard boundaries: `нғ/نع` is N,GH; `ңх/ڭح` is NG,H; `нг/نگ` is N,G. Source conversion never re-parses a cleaned Hapin intermediate.

## context-v1 (hapin-utils 5.0.0)

| Input context                                          | Preferred analysis | Qualification                                                  |
| ------------------------------------------------------ | ------------------ | -------------------------------------------------------------- |
| ngh                                                    | N,GH               | Main corpus pattern; NG,H remains an alternative               |
| shanghai and the attested shanghaida/shanghaigha forms | NG,H               | Exact word-form exceptions, not an unrestricted prefix match   |
| ngul, e.g. amangul                                     | N,G + ul           | Candidate preference; limited data, competing NG retained      |
| ngye / ngxe                                            | NG + ye/xe         | Conflicting source analyses; N,G + ye/xe retained              |
| final ng                                               | NG                 | Default alphabet interpretation, not a correction of source нг |
| ashana and other attested forms                        | S,H                | Exact word forms retain an SH alternative                      |

Ordinary gh is GH. Explicit source units can express G,H. The parser does not declare every theoretical g+h spelling unresolved.

## Decisions and alternatives

Hard source/explicit boundaries outrank word-form rules, contextual candidates and default alphabet matching. Rules have IDs, versions and evidence metadata (`segmentationRules`). Only implemented rules are listed above: there is no general morphology engine or frequency-based probability model.

`analyzeHapin('arzangha')` prefers `a,r,z,a,n,gh,a`; `analyzeHapin('shanghai')` prefers `sh,a,ng,h,a,i`. Competing paths make `status` ambiguous. The preferred output is still available in preserve mode; strict conversion rejects unresolved diagnostics.

Alternatives are bounded **local replacements**, each changing one conflict in the preferred path. They are not an exhaustive Cartesian product. `maxCandidates` (1–64, default 8) includes the preferred analysis; a `candidate-limit` diagnostic reports omitted alternatives.

Unknown characters are preserved with diagnostics. Quoted literals are protected. No apostrophe boundary syntax has been introduced. See [API](/developer/hapin-utils), [examples](/developer/examples), and [statistical evidence](/standardize/segmentation-evidence).

## Other overlaps and conflicting spellings

Attested conflicting keys such as ang, angmye and songe keep NG by default with an N,G alternative. ashat has both SH and S,H source spellings, so it keeps SH by default with an S,H alternative rather than using a majority overwrite. shsh and hh also expose local alternatives. tsh keeps the historical T,SH priority with a TS,H alternative, preventing ts from swallowing the start of sh.
