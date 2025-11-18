#!/usr/bin/env node
/**
 * Test Runner for Classic Algorithms Codex
 * Runs all JavaScript test files
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('╔════════════════════════════════════════════╗');
console.log('║   Classic Algorithms Codex - Test Suite   ║');
console.log('╚════════════════════════════════════════════╝\n');

// Find all test files
function findTestFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findTestFiles(filePath, fileList);
    } else if (file === 'tests.js' || file.endsWith('.test.js')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const rootDir = path.join(__dirname, 'algorithms');
const testFiles = findTestFiles(rootDir);

if (testFiles.length === 0) {
  console.log('⚠️  No test files found!');
  process.exit(1);
}

console.log(`Found ${testFiles.length} test file(s)\n`);

let totalPassed = 0;
let totalFailed = 0;

testFiles.forEach((testFile, index) => {
  const relativePath = path.relative('.', testFile);
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Test ${index + 1}/${testFiles.length}: ${relativePath}`);
  console.log('='.repeat(60));

  try {
    execSync(`node ${testFile}`, { stdio: 'inherit' });
    totalPassed++;
  } catch (error) {
    console.error(`\n❌ Test failed: ${relativePath}`);
    totalFailed++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('TEST SUMMARY');
console.log('='.repeat(60));
console.log(`Total test files: ${testFiles.length}`);
console.log(`✓ Passed: ${totalPassed}`);
console.log(`✗ Failed: ${totalFailed}`);

if (totalFailed === 0) {
  console.log('\n🎉 All tests passed!\n');
  process.exit(0);
} else {
  console.log(`\n❌ ${totalFailed} test file(s) failed\n`);
  process.exit(1);
}
