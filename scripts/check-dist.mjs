import fs from 'node:fs';
import assert from 'node:assert/strict';
const root = new URL('../dist/', import.meta.url);
for (const prefix of ['', 'zh-CN/']) {
  for (const route of ['standardize/segmentation/', 'standardize/segmentation-evidence/', 'developer/hapin-utils/', 'developer/hapin-utils-migration/', 'developer/hapin-utils-rs/', 'developer/examples/', 'components/playground/']) {
    const file = new URL(prefix + route + 'index.html', root);
    assert(fs.existsSync(file), `Missing built route ${prefix}${route}`);
  }
}
for (const old of ['kk-CN', 'kk-KZ']) {
  const html = fs.readFileSync(new URL(old + '/index.html', root), 'utf8');
  assert(html.includes('noindex') && html.includes('location.replace("/")'));
}
console.log('Verified fourteen bilingual routes and two compatibility-only redirects');
