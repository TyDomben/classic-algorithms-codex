const { linearSearch, linearSearchAll } = require('./implementation');

let p = 0, t = 0;
const a = (c, n) => { t++; if(c) { p++; console.log(`✓ ${n}`); } else console.log(`✗ ${n}`); };

console.log('=== Linear Search Tests ===\n');

a(linearSearch([4, 2, 7, 1, 9], 7) === 2, 'Find element');
a(linearSearch([4, 2, 7, 1, 9], 5) === -1, 'Element not found');
a(linearSearch([], 1) === -1, 'Empty array');
a(linearSearch([1], 1) === 0, 'Single element found');
a(linearSearch([1], 2) === -1, 'Single element not found');

const all = linearSearchAll([3, 1, 3, 7, 3], 3);
a(all.length === 3 && all[0] === 0 && all[1] === 2 && all[2] === 4, 'Find all occurrences');

console.log(`\n${p}/${t} tests passed`);
process.exit(p === t ? 0 : 1);
