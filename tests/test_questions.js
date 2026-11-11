// tests/test_questions.js
// Kiểm thử toàn diện 199 câu hỏi KTMT Hub

const fs = require('fs');
const vm = require('vm');

const context = {
  window: {},
  console: console
};
context.globalThis = context.window;
vm.createContext(context);

function loadScript(path) {
  const code = fs.readFileSync(path, 'utf8');
  vm.runInContext(code, context);
}

loadScript('js/data-questions-ch1-ch2.js');
loadScript('js/data-questions-ch3.js');
loadScript('js/data-questions-ch4.js');
loadScript('js/data-questions.js');

const questions = context.window.KTMT_QUESTIONS;
const rawCh1Ch2 = context.window.KTMT_QUESTIONS_CH1_CH2 || [];
const rawCh3 = context.window.KTMT_QUESTIONS_CH3 || [];
const rawCh4 = context.window.KTMT_QUESTIONS_CH4 || [];

const results = {
  totalQuestions: questions.length,
  rawCounts: {
    ch1_ch2: rawCh1Ch2.length,
    ch3: rawCh3.length,
    ch4: rawCh4.length,
    sum: rawCh1Ch2.length + rawCh3.length + rawCh4.length
  },
  distribution: { A: 0, B: 0, C: 0, D: 0, other: 0 },
  chapterDistribution: {},
  errors: [],
  warnings: []
};

// 1. Phân bố đáp án và chương
questions.forEach(q => {
  if (['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
    results.distribution[q.correctAnswer]++;
  } else {
    results.distribution.other++;
    results.errors.push(`[${q.id}] correctAnswer không hợp lệ: "${q.correctAnswer}"`);
  }

  const ch = q.chapter || 'Không rõ';
  results.chapterDistribution[ch] = (results.chapterDistribution[ch] || 0) + 1;
});

// 2. Kiểm tra tính duy nhất của ID
const idMap = new Map();
questions.forEach((q, idx) => {
  if (!q.id) {
    results.errors.push(`Câu thứ ${idx + 1} không có trường id`);
  } else if (idMap.has(q.id)) {
    results.errors.push(`Trùng lặp ID câu hỏi: "${q.id}" (vị trí ${idMap.get(q.id)} và ${idx})`);
  } else {
    idMap.set(q.id, idx);
  }
});

// 3. Kiểm tra các trường bắt buộc, cấu trúc options và correctAnswer
questions.forEach((q, idx) => {
  const prefix = `[${q.id || 'Index ' + idx}]`;

  // Kiểm tra text/nội dung
  const qText = q.question || q.text;
  if (!qText || typeof qText !== 'string' || qText.trim() === '') {
    results.errors.push(`${prefix} Thiếu trường question hoặc question rỗng`);
  }

  // Kiểm tra options
  if (!Array.isArray(q.options)) {
    results.errors.push(`${prefix} options không phải là Array`);
  } else {
    if (q.options.length !== 4) {
      results.errors.push(`${prefix} Số lượng phương án không đúng 4 (thực tế: ${q.options.length})`);
    }
    const expectedKeys = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, oIdx) => {
      if (!opt || typeof opt !== 'object') {
        results.errors.push(`${prefix} Phương án ${oIdx} không phải object hợp lệ`);
      } else {
        if (opt.key !== expectedKeys[oIdx]) {
          results.warnings.push(`${prefix} Option key [${oIdx}] là "${opt.key}", kỳ vọng "${expectedKeys[oIdx]}"`);
        }
        if (opt.text === undefined || opt.text === null || String(opt.text).trim() === '') {
          results.errors.push(`${prefix} Option [${opt.key}] có nội dung rỗng hoặc null/undefined`);
        }
      }
    });

    // Kiểm tra correctIndex và correctAnswer
    if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex >= q.options.length) {
      results.errors.push(`${prefix} correctIndex (${q.correctIndex}) vượt ngoài phạm vi options (0-${q.options.length - 1})`);
    } else {
      const correctOpt = q.options[q.correctIndex];
      if (correctOpt && correctOpt.key !== q.correctAnswer) {
        results.errors.push(`${prefix} Mâu thuẫn: correctIndex (${q.correctIndex}) trỏ đến key "${correctOpt.key}" nhưng correctAnswer là "${q.correctAnswer}"`);
      }
    }
  }

  // Kiểm tra explanation
  if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim() === '') {
    results.warnings.push(`${prefix} Không có lời giải thích (explanation rỗng)`);
  }

  // Kiểm tra acceptedAnswers cho chế độ tự điền
  if (!Array.isArray(q.acceptedAnswers) || q.acceptedAnswers.length === 0) {
    results.warnings.push(`${prefix} Thiếu acceptedAnswers cho chế độ tự điền`);
  } else {
    if (!q.acceptedAnswers.includes(q.correctAnswer)) {
      results.errors.push(`${prefix} acceptedAnswers không chứa correctAnswer (${q.correctAnswer})`);
    }
  }
});

// 4. Kiểm tra định dạng LaTeX
function checkLatex(str, label) {
  if (!str) return;
  // Đếm dấu $ không được escape
  // Bỏ qua \$
  const cleaned = str.replace(/\\\$/g, '');
  // Đếm số lượng $
  const matches = cleaned.match(/\$/g);
  if (matches && matches.length % 2 !== 0) {
    results.warnings.push(`${label}: Số lượng ký tự '$' lẻ (${matches.length}), có thể chưa đóng cặp công thức LaTeX!`);
  }

  // Kiểm tra đóng mở ngoặc nhọn lồng nhau trong các khối $...$
  const mathBlocks = cleaned.match(/\$\$[\s\S]*?\$\$|\$[^\$]+?\$/g);
  if (mathBlocks) {
    mathBlocks.forEach(block => {
      let openBraces = 0;
      for (let i = 0; i < block.length; i++) {
        if (block[i] === '{' && (i === 0 || block[i - 1] !== '\\')) openBraces++;
        if (block[i] === '}' && (i === 0 || block[i - 1] !== '\\')) openBraces--;
      }
      if (openBraces !== 0) {
        results.warnings.push(`${label}: Mất cân bằng dấu ngoặc nhọn {} trong LaTeX: "${block.slice(0, 30)}..."`);
      }
    });
  }
}

// 5. Kiểm tra cú pháp HTML cơ bản
function checkHTML(str, label) {
  if (!str) return;
  const tagsToCheck = ['b', 'i', 'strong', 'em', 'code', 'span', 'div', 'p', 'table', 'tr', 'td', 'th', 'ul', 'ol', 'li'];
  tagsToCheck.forEach(tag => {
    const openRegex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
    const closeRegex = new RegExp(`</${tag}>`, 'gi');
    const openCount = (str.match(openRegex) || []).length;
    const closeCount = (str.match(closeRegex) || []).length;
    if (openCount !== closeCount) {
      results.warnings.push(`${label}: Thẻ HTML <${tag}> không cân bằng (Mở: ${openCount}, Đóng: ${closeCount})`);
    }
  });
}

// Chạy kiểm tra LaTeX và HTML trên text, options, explanation
questions.forEach(q => {
  const prefix = `[${q.id}]`;
  const qText = q.question || q.text;
  checkLatex(qText, `${prefix} (question)`);
  checkLatex(q.explanation, `${prefix} (explanation)`);
  checkHTML(qText, `${prefix} (question)`);
  checkHTML(q.explanation, `${prefix} (explanation)`);

  if (Array.isArray(q.options)) {
    q.options.forEach(opt => {
      checkLatex(opt.text, `${prefix} (opt ${opt.key})`);
      checkHTML(opt.text, `${prefix} (opt ${opt.key})`);
    });
  }
});

console.log(JSON.stringify(results, null, 2));
