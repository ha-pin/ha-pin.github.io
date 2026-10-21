import fs from 'node:fs';
// Compatibility-only URLs. These are not supported content locales.
for (const locale of ['kk-CN', 'kk-KZ']) {
  const dir = new URL(`../dist/${locale}/`, import.meta.url);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(new URL('index.html', dir), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><link rel="canonical" href="https://hapin.js.org/"><meta http-equiv="refresh" content="0;url=/"><title>Hapin</title></head><body><a href="/">Continue to the English site</a><script>location.replace("/")</script></body></html>');
}
