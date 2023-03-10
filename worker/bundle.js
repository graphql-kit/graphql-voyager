const fs = require('node:fs');
const assert = require('node:assert');

const stdin = fs.readFileSync(0, 'utf-8');
assert(stdin.includes('`') === false);
const stdout = `
const source = String.raw \`${stdin}\`;
const blob = new Blob([source], { type: 'application/javascript' })
const url = URL.createObjectURL(blob);
const VizWorker = new Worker(url);
export default VizWorker;
`;
fs.writeFileSync(1, stdout.trim());
