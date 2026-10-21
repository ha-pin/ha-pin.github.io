import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { renderExamples } from './doc-examples.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const walk = p => fs.readdirSync(path.join(root, p), { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(p, e.name)) : [path.join(p, e.name)]);
const files = [...walk('docs'), ...walk('src')].filter(p => p.endsWith('.md'));
const config = read('.dumirc.ts');
assert.deepEqual([...config.matchAll(/id: '(.*?)'/g)].map(m => m[1]), ['en-US', 'zh-CN']);
assert(!/kk-CN|kk-KZ/.test(config));
assert(!/kk-CN|kk-KZ/.test(read('.dumi/app.ts')));
assert(!files.some(p => /\.kk-/.test(p)));
const data = JSON.parse(read('data/api-examples.json'));
assert.equal(data.packageVersion, '5.0.0');
assert.equal(data.releaseStatus, 'stable');
for (const chinese of [false, true]) assert.equal(read(`docs/developer/examples${chinese ? '.zh-CN' : ''}.md`), renderExamples(data, chinese), 'Stale generated example page');
const routes = new Set(files.map(p => {
  const chinese = p.endsWith('.zh-CN.md');
  let route = p.replace(/^docs[\/]/, '').replace(/^src[\/]/, 'components/').replace(/\.zh-CN(?=\.md$)/, '').replace(/\.md$/, '').replace(/\/index$/, '').replace(/^index$/, '');
  return (chinese ? '/zh-CN/' : '/') + route;
}));
let links = 0;
for (const p of files) {
  const text = read(p);
  for (const m of text.matchAll(/(?<!!)\[[^\]]*\]\((\/[^)]+)\)/g)) {
    const url = m[1].split(/[?#]/)[0].replace(/\/$/, '') || '/';
    if (/\.[a-z0-9]+$/i.test(url)) continue;
    assert(routes.has(url), `${p}: missing route ${url}`); links++;
  }
}
for (const stem of ['standardize/segmentation', 'standardize/segmentation-evidence', 'developer/hapin-utils', 'developer/hapin-utils-migration']) {
  assert(fs.existsSync(path.join(root, `docs/${stem}.md`)) && fs.existsSync(path.join(root, `docs/${stem}.zh-CN.md`)));
}
console.log(`Verified two content locales, ${data.examples.length} versioned examples, paired core pages and ${links} absolute internal links`);
