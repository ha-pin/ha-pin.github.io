import fs from 'node:fs';
import { renderExamples } from './doc-examples.mjs';
const data = JSON.parse(fs.readFileSync(new URL('../data/api-examples.json', import.meta.url), 'utf8'));
for (const chinese of [false, true]) fs.writeFileSync(new URL(`../docs/developer/examples${chinese ? '.zh-CN' : ''}.md`, import.meta.url), renderExamples(data, chinese));
