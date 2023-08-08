const fs = require('node:fs');
const assert = require('node:assert');
const crypto = require('node:crypto');

const stdin = fs.readFileSync(0, 'utf-8');
const hash = crypto.createHash('sha256').update(stdin).digest('hex');

assert(stdin.includes('`') === false);
const stdout = `
export const VizWorkerSource = String.raw \`${stdin}\`;
export const VizWorkerHash = \`${hash}\`;
`;
fs.writeFileSync(1, stdout.trim());
