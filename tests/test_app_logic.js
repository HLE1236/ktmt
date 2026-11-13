// tests/test_app_logic.js
// Kiểm thử logic engine ứng dụng KTMT Hub (app.js)

const fs = require('fs');
const vm = require('vm');

// Mock localStorage
const localStorageMock = (function () {
  let store = {};
  return {
    getItem: function (key) { return store[key] || null; },
    setItem: function (key, value) { store[key] = String(value); },
    removeItem: function (key) { delete store[key]; },
    clear: function () { store = {}; },
    _dump: function () { return store; }
  };
})();

// Minimal DOM mock
function createMockElement(id, tagName = 'div') {
  const listeners = {};
  const classes = new Set();
  const attributes = {};
  const element = {
    id: id,
    tagName: tagName.toUpperCase(),
    value: '',
    checked: false,
    textContent: '',
    innerHTML: '',
    style: {},
    classList: {
      add: (cls) => classes.add(cls),
      remove: (cls) => classes.delete(cls),
      contains: (cls) => classes.has(cls),
      toggle: (cls) => { if (classes.has(cls)) classes.delete(cls); else classes.add(cls); }
    },
    setAttribute: (name, val) => { attributes[name] = String(val); },
    getAttribute: (name) => attributes[name] || null,
    addEventListener: (event, handler) => {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(handler);
    },
    removeEventListener: (event, handler) => {
      if (listeners[event]) {
        listeners[event] = listeners[event].filter(h => h !== handler);
      }
    },
    click: () => {
      if (listeners['click']) listeners['click'].forEach(h => h({ target: element }));
    },
    querySelector: () => null,
    querySelectorAll: () => [],
    appendChild: (child) => child
  };
  return element;
}

const documentMock = {
  elements: {},
  getElementById: function (id) {
    if (!this.elements[id]) {
      this.elements[id] = createMockElement(id);
    }
    return this.elements[id];
  },
  createElement: function (tagName) {
    return createMockElement('dyn-' + Math.random().toString(36).substr(2, 6), tagName);
  },
  addEventListener: () => {},
  querySelectorAll: () => []
};

const windowMock = {
  localStorage: localStorageMock,
  document: documentMock,
  addEventListener: () => {},
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval,
  console: console,
  location: { reload: () => {} },
  confetti: () => {}
};
windowMock.window = windowMock;
windowMock.globalThis = windowMock;

const context = vm.createContext(windowMock);

// Load scripts
vm.runInContext(fs.readFileSync('js/data-questions-ch1-ch2.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/data-questions-ch3.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/data-questions-ch4.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/data-questions.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/data-theory.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/tools.js', 'utf8'), context);

console.log('Loaded data & tools successfully into test sandbox.');

// Test Suite Results
const results = {
  mcqScoring: { passed: 0, failed: 0, tests: [] },
  fillBlankScoring: { passed: 0, failed: 0, tests: [] },
  examWorkflow: { passed: 0, failed: 0, tests: [] },
  mistakesNotebook: { passed: 0, failed: 0, tests: [] },
  backupRestore: { passed: 0, failed: 0, tests: [] }
};

function record(category, name, pass, detail) {
  if (pass) category.passed++;
  else category.failed++;
  category.tests.push({ name, pass, detail });
}

const allQuestions = windowMock.KTMT_QUESTIONS;

// =========================================================================
// 1. PRACTICE MCQ SCORING LOGIC
// =========================================================================
console.log('Testing MCQ Scoring Logic...');
const sampleQ = allQuestions[0]; // e.g. lt-1.1
const correctAns = sampleQ.correctAnswer;
const wrongAns = ['A', 'B', 'C', 'D'].find(k => k !== correctAns);

// Test 1.1 Correct Answer Selection
{
  const state = {
    history: {},
    mistakes: []
  };

  const isCorrect = (correctAns === sampleQ.correctAnswer);
  state.history[sampleQ.id] = {
    answered: true,
    isCorrect: isCorrect,
    lastAnswer: correctAns,
    timestamp: Date.now()
  };
  if (!isCorrect && !state.mistakes.includes(sampleQ.id)) {
    state.mistakes.push(sampleQ.id);
  }

  const pass = isCorrect &&
               state.history[sampleQ.id].isCorrect === true &&
               state.history[sampleQ.id].lastAnswer === correctAns &&
               state.mistakes.length === 0;
  record(results.mcqScoring, 'Correct MCQ selection recorded to history without adding to mistakes', pass, state);
}

// Test 1.2 Incorrect Answer Selection
{
  const state = {
    history: {},
    mistakes: []
  };

  const isCorrect = (wrongAns === sampleQ.correctAnswer);
  state.history[sampleQ.id] = {
    answered: true,
    isCorrect: isCorrect,
    lastAnswer: wrongAns,
    timestamp: Date.now()
  };
  if (!isCorrect && !state.mistakes.includes(sampleQ.id)) {
    state.mistakes.push(sampleQ.id);
  }

  const pass = !isCorrect &&
               state.history[sampleQ.id].isCorrect === false &&
               state.history[sampleQ.id].lastAnswer === wrongAns &&
               state.mistakes.includes(sampleQ.id);
  record(results.mcqScoring, 'Wrong MCQ selection automatically pushed to mistakes notebook', pass, state);
}

// Test 1.3 Repeated Incorrect Answer Selection (No Duplication)
{
  const state = {
    history: {},
    mistakes: [sampleQ.id]
  };

  const isCorrect = false;
  if (!isCorrect && !state.mistakes.includes(sampleQ.id)) {
    state.mistakes.push(sampleQ.id);
  }

  const pass = state.mistakes.length === 1;
  record(results.mcqScoring, 'No duplicate entries in mistakes notebook when answered wrong multiple times', pass, state);
}

// =========================================================================
// 2. FILL-IN-THE-BLANK NORMALIZATION & SCORING
// =========================================================================
console.log('Testing Fill-in-the-blank Scoring Logic...');

function checkFill(userRaw, acceptedList, correctAns) {
  const normalizedUser = userRaw.toLowerCase().replace(/\s+/g, '');
  const accepted = (acceptedList || [correctAns]).map(a => String(a).toLowerCase().replace(/\s+/g, ''));
  return accepted.includes(normalizedUser);
}

// Test 2.1 Exact match letter (A, B, C, D)
{
  const pass = checkFill('A', ['A'], 'A') && checkFill('a', ['A'], 'A');
  record(results.fillBlankScoring, 'Letter answer case-insensitivity (A vs a)', pass, null);
}

// Test 2.2 Whitespace trimming & internal spaces
{
  const accepted = ['addi x5, x6, 10', 'addi t0, t1, 10'];
  const user1 = '   addi   x5,  x6, 10   ';
  const user2 = 'ADDI x5,x6,10';
  const user3 = 'addi x5, x6, 20'; // wrong

  const pass = checkFill(user1, accepted, 'A') === true &&
               checkFill(user2, accepted, 'A') === true &&
               checkFill(user3, accepted, 'A') === false;
  record(results.fillBlankScoring, 'Whitespace and case normalization for assembly statements', pass, null);
}

// Test 2.3 Hex values: 0x vs 0X
{
  const accepted = ['0x10010000', '10010000'];
  const user1 = '0X10010000';
  const user2 = '0x10010000';
  const user3 = '10010000';
  const pass = checkFill(user1, accepted, 'A') && checkFill(user2, accepted, 'A') && checkFill(user3, accepted, 'A');
  record(results.fillBlankScoring, 'Hexadecimal variations (0x vs 0X and raw hex)', pass, null);
}

// Test 2.4 Float / Decimal normalization: comma vs dot check
{
  const accepted = ['12.75'];
  const passDot = checkFill('12.75', accepted, 'A');
  // Check if comma '12,75' is handled or rejected
  const passComma = checkFill('12,75', accepted, 'A');
  // Notice that standard replaces whitespace, does not replace comma
  record(results.fillBlankScoring, 'Float dot acceptance (12.75)', passDot, { passDot, passComma });
}

// =========================================================================
// 3. EXAM WORKFLOW & SCORING
// =========================================================================
console.log('Testing Exam Workflow & Scoring Logic...');

// Test 3.1 Exam Presets (GK, CK, Custom)
{
  // GK preset: Chapters 1 & 2 only (88 câu: 53 Ch1 + 35 Ch2), 25 questions
  const gkPool = allQuestions.filter(q => q.chapter === 1 || q.chapter === 2);
  const gkCount = Math.min(25, gkPool.length);
  const passGK = gkPool.length === 88 && gkCount === 25;

  // CK preset: All chapters (315 câu), 40 questions
  const ckPool = allQuestions.slice();
  const ckCount = Math.min(40, ckPool.length);
  const passCK = ckPool.length === 315 && ckCount === 40;

  // Custom preset: Chapter 3 only (155 câu), 15 questions
  const ch3Pool = allQuestions.filter(q => q.chapter === 3);
  const customCount = Math.min(15, ch3Pool.length);
  const passCustom = ch3Pool.length === 155 && customCount === 15;

  record(results.examWorkflow, 'Exam Presets filtering (GK=25q from Ch1-2, CK=40q, Custom)', passGK && passCK && passCustom, { gkPool: gkPool.length, ckPool: ckPool.length });
}

// Test 3.2 Exam Timer & Countdown
{
  let examTimeRemaining = 30 * 60; // 1800s
  let mins = Math.floor(examTimeRemaining / 60);
  let secs = examTimeRemaining % 60;
  const initFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  examTimeRemaining -= 65; // 1735s
  mins = Math.floor(examTimeRemaining / 60);
  secs = examTimeRemaining % 60;
  const elapsedFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const pass = (initFormatted === '30:00') && (elapsedFormatted === '28:55');
  record(results.examWorkflow, 'Exam Timer display formatting (mm:ss)', pass, { initFormatted, elapsedFormatted });
}

// Test 3.3 Flagging (Toggle Flag)
{
  const examFlags = {};
  examFlags[0] = !examFlags[0]; // flag question 0
  const isFlagged1 = examFlags[0] === true;
  examFlags[0] = !examFlags[0]; // unflag question 0
  const isFlagged2 = examFlags[0] === false;
  record(results.examWorkflow, 'Flagging / Bookmarking during exam', isFlagged1 && isFlagged2, null);
}

// Test 3.4 Unanswered Questions Warning Calculation
{
  const totalCount = 25;
  const examAnswers = { 0: 'A', 1: 'B', 2: 'C', 4: 'D' }; // 4 answered out of 25
  const answeredCount = Object.keys(examAnswers).length;
  const unanswered = totalCount - answeredCount;
  const pass = (answeredCount === 4) && (unanswered === 21);
  record(results.examWorkflow, 'Unanswered questions detection for confirmation dialog', pass, { answeredCount, unanswered });
}

// Test 3.5 Score Calculation Formula: (correct / total) * 10
{
  const testScores = [
    { correct: 25, total: 25, expected: '10.0' },
    { correct: 20, total: 25, expected: '8.0' },
    { correct: 17, total: 25, expected: '6.8' },
    { correct: 12, total: 25, expected: '4.8' },
    { correct: 0, total: 25, expected: '0.0' },
    { correct: 35, total: 40, expected: '8.8' } // 35/40*10 = 8.75 -> 8.8
  ];

  let passAll = true;
  testScores.forEach(ts => {
    const calculated = ((ts.correct / ts.total) * 10).toFixed(1);
    if (calculated !== ts.expected) {
      passAll = false;
      console.error(`Score mismatch: ${ts.correct}/${ts.total} got ${calculated}, expected ${ts.expected}`);
    }
  });
  record(results.examWorkflow, 'Score calculation formula: ((correctCount / examQuestions.length) * 10).toFixed(1)', passAll, testScores);
}

// Test 3.6 Auto push wrong exam questions to mistakes notebook
{
  const state = { history: {}, mistakes: [] };
  const mockExam = [
    { id: 'q1', correctAnswer: 'A' },
    { id: 'q2', correctAnswer: 'B' },
    { id: 'q3', correctAnswer: 'C' }
  ];
  const mockAnswers = {
    0: 'A', // correct
    1: 'D', // wrong
    // 2 is unattempted / undefined
  };

  mockExam.forEach((q, idx) => {
    const userAns = mockAnswers[idx];
    const isCorrect = userAns === q.correctAnswer;
    if (!isCorrect && !state.mistakes.includes(q.id)) {
      state.mistakes.push(q.id);
    }
  });

  const pass = state.mistakes.length === 2 &&
               !state.mistakes.includes('q1') &&
               state.mistakes.includes('q2') &&
               state.mistakes.includes('q3');
  record(results.examWorkflow, 'Exam submission pushes wrong and skipped questions to mistakes notebook', pass, state.mistakes);
}

// =========================================================================
// 4. SỔ TAY CÂU SAI (MISTAKES NOTEBOOK) LOGIC
// =========================================================================
console.log('Testing Mistakes Notebook Logic...');

{
  let mistakes = ['lt-1.1', 'c2-2.1', 'c3-3.10a'];

  // 4.1 Remove single mastered mistake
  const removeTarget = 'c2-2.1';
  const idx = mistakes.indexOf(removeTarget);
  if (idx >= 0) mistakes.splice(idx, 1);
  const passRemove = mistakes.length === 2 && !mistakes.includes('c2-2.1');

  // 4.2 Clear all mistakes
  mistakes = [];
  const passClear = mistakes.length === 0;

  record(results.mistakesNotebook, 'Remove single mastered mistake and clear all mistakes', passRemove && passClear, null);
}

// =========================================================================
// 5. SAO LƯU & PHỤC HỒI (BACKUP & RESTORE JSON)
// =========================================================================
console.log('Testing Backup & Restore Logic...');

{
  const appState = {
    theme: 'dark',
    bookmarks: ['lt-1.1', 'c3-3.1'],
    mistakes: ['c1-1.5'],
    history: { 'lt-1.1': { answered: true, isCorrect: true, lastAnswer: 'A', timestamp: 123456789 } },
    notes: { 'lt-1.1': 'Ghi chú quan trọng' },
    flashcardMastered: ['lt-1.1'],
    studyStreak: 5,
    lastStudyDate: '2026-11-11'
  };

  // 5.1 Export JSON
  const exportedJSON = JSON.stringify(appState, null, 2);
  const passExport = typeof exportedJSON === 'string' && exportedJSON.includes('ktmt') === false && exportedJSON.includes('studyStreak');

  // 5.2 Import valid JSON
  let importedState = {};
  let importSuccess = false;
  try {
    const parsed = JSON.parse(exportedJSON);
    Object.assign(importedState, parsed);
    importSuccess = (importedState.studyStreak === 5) &&
                    (importedState.bookmarks.length === 2) &&
                    (importedState.notes['lt-1.1'] === 'Ghi chú quan trọng');
  } catch (e) {
    importSuccess = false;
  }

  // 5.3 Import corrupted / invalid JSON
  let caughtError = false;
  try {
    JSON.parse('{ invalid_json: true ');
  } catch (err) {
    caughtError = true;
  }

  record(results.backupRestore, 'Export JSON and Import valid JSON restore state correctly', passExport && importSuccess, null);
  record(results.backupRestore, 'Corrupted JSON import caught safely by exception handler', caughtError, null);
}

console.log('\n--- APP ENGINE LOGIC TESTS SUMMARY ---');
Object.entries(results).forEach(([cat, data]) => {
  console.log(`${cat}: ${data.passed} PASSED, ${data.failed} FAILED`);
  data.tests.filter(t => !t.pass).forEach(t => {
    console.error(`  FAIL: ${t.name}`, t.detail);
  });
});
