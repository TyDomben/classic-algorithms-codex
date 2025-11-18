const { selectionSort, selectionSortDescending } = require('./implementation');

let pass = 0, total = 0;
const assert = (cond, name) => { total++; if (cond) { pass++; console.log(`✓ ${name}`); } else console.log(`✗ ${name}`); };
const eq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

console.log('=== Selection Sort Tests ===\n');

const t1 = [64, 25, 12, 22, 11];
selectionSort(t1);
assert(eq(t1, [11, 12, 22, 25, 64]), 'Basic sort');

const t2 = [1];
selectionSort(t2);
assert(eq(t2, [1]), 'Single element');

const t3 = [];
selectionSort(t3);
assert(eq(t3, []), 'Empty array');

const t4 = [1, 2, 3, 4, 5];
selectionSort(t4);
assert(eq(t4, [1, 2, 3, 4, 5]), 'Already sorted');

const t5 = [5, 4, 3, 2, 1];
selectionSort(t5);
assert(eq(t5, [1, 2, 3, 4, 5]), 'Reverse sorted');

const t6 = [64, 25, 12, 22, 11];
selectionSortDescending(t6);
assert(eq(t6, [64, 25, 22, 12, 11]), 'Descending');

console.log(`\n${pass}/${total} tests passed`);
process.exit(pass === total ? 0 : 1);
