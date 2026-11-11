// tests/run_all.js
// Master Test Runner for KTMT Hub QA Suite

const { execSync } = require('child_process');

console.log('===============================================================');
console.log('       KTMT HUB (RISC-V) - AUTOMATED QA & TEST SUITE           ');
console.log('===============================================================\n');

const suites = [
  { name: '1. Question Data Integrity (199 questions)', file: 'tests/test_questions.js' },
  { name: '2. Computational Tools (tools.js)', file: 'tests/test_tools.js' },
  { name: '3. Application Engine Logic (app.js)', file: 'tests/test_app_logic.js' },
  { name: '4. UI DOM & Asset Links (index.html, style.css)', file: 'tests/test_ui_dom.js' }
];

let allPassed = true;

suites.forEach((suite, idx) => {
  console.log(`[SUITE ${idx + 1}] Running: ${suite.name}`);
  try {
    const output = execSync(`node ${suite.file}`, { encoding: 'utf8' });
    console.log(output.trim());
    console.log(`>>> SUITE ${idx + 1} COMPLETED.\n---------------------------------------------------------------\n`);
  } catch (err) {
    allPassed = false;
    console.error(`>>> SUITE ${idx + 1} FAILED with error:`, err.stdout || err.message);
    console.log('\n---------------------------------------------------------------\n');
  }
});

console.log('===============================================================');
console.log(allPassed ? 'ALL TEST SUITES EXECUTED SUCCESSFULLY!' : 'TEST SUITES COMPLETED WITH DETECTED ISSUES.');
console.log('===============================================================');
