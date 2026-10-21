---
title: Migrating to 5.0.0
order: 2
toc: content
---

## Version scope

This guide covers migration from 4.x to **5.0.0**. Install `hapin-utils@5.0.0` to match the API and `context-v1` rules described here. Existing transformation functions remain available; source-conversion bug fixes may change previously incorrect results.

## Keep existing behavior or opt into context rules

Existing transform functions remain available. `transformHapinToArabic('ngh')` retains the legacy result `ڭح`. New `convert('ngh', { from: 'hapin', to: 'arabic' })` prefers `نع` and reports the competing segmentation. Use rules: legacy in the new API for legacy letter priority; formatting is still preserve unless selected otherwise.

Source conversion is corrected in both APIs: нғ→نع, ңх→ڭح, нг→نگ. There is no new implicit Hapin intermediate string. Quotes terminate safely, unknown y no longer disappears, and word-local weak-tone / IPA fixes can change previously wrong outputs.

## Old boundary data

Pass inputFormat: legacy-boundaries when importing old U+200B-separated Hapin. New plain input preserves original zero-width characters without treating them as the machine protocol. Existing clean=false output is retained only by compatibility wrappers. Old easy apostrophes are display text, not supported parse separators.

## Layout, arrays and losses

New APIs preserve layout by default. Compatibility wrappers keep legacy layout conventions, except that protected quoted content is no longer rewritten. Use analysis units for structured letters; the three old Array functions keep splitting legacy serialization.

Do not expect character-perfect round trips through a simplified display encoding. Inspect losses and keep the original analysis if source spelling matters. Strict mode rejects unresolved input rather than returning a partially converted string.
