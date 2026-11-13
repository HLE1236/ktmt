/**
 * KTMT QUIZIZZ & LEARNING PLATFORM - CORE APPLICATION
 * Computer Architecture (RISC-V) - HUST IT3030/IT3034/IT3283
 */

(function () {
  'use strict';

  // ==========================================
  // STATE MANAGEMENT & LOCAL STORAGE
  // ==========================================
  const STORAGE_KEY = 'ktmt_learning_platform_v1';

  const defaultState = {
    theme: 'light',
    bookmarks: [],      // Array of question IDs
    mistakes: [],       // Array of question IDs
    history: {},        // { [qid]: { answered: true, isCorrect: true, lastAnswer: 'A', timestamp: ... } }
    notes: {},          // { [qid]: "Personal note" }
    flashcardMastered: [], // Array of question IDs
    studyStreak: 1,
    lastStudyDate: new Date().toISOString().split('T')[0]
  };

  function loadState() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? Object.assign({}, defaultState, JSON.parse(data)) : Object.assign({}, defaultState);
    } catch (e) {
      console.error('Failed to load state from localStorage:', e);
      return Object.assign({}, defaultState);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
      console.error('Failed to save state to localStorage:', e);
    }
  }

  const appState = loadState();

  // Update streak
  (function updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    if (appState.lastStudyDate !== today) {
      const prevDate = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (appState.lastStudyDate === prevDate) {
        appState.studyStreak += 1;
      } else {
        appState.studyStreak = 1;
      }
      appState.lastStudyDate = today;
      saveState();
    }
  })();

  // ==========================================
  // RUNTIME DATA ACCESSORS
  // ==========================================
  const allQuestions = window.KTMT_QUESTIONS || [];
  const questionMap = window.KTMT_QUESTION_MAP || {};
  const chaptersList = window.KTMT_CHAPTERS || [];
  const theorySections = window.KTMT_THEORY || [];
  const registerLookup = window.RISCV_REGISTER_LOOKUP || window.RISCV_REGISTERS || {};

  let currentTab = 'dashboard';
  
  // Practice runtime state
  let practiceQueue = [];
  let currentPracticeIndex = 0;
  let practiceMode = 'mcq'; // 'mcq' or 'fill'
  let practiceViewMode = 'quiz'; // 'quiz' or 'workbook'
  let workbookExpandAll = false;
  let practiceAnswerSubmitted = false;
  let isTheorySplitPdf = false;
  const miniCheckIndexMap = {};

  // Exam runtime state
  let examQuestions = [];
  let currentExamIndex = 0;
  let examAnswers = {};     // { [idx]: selectedOption }
  let examFlags = {};       // { [idx]: boolean }
  let examTimerInterval = null;
  let examTimeRemaining = 0; // in seconds
  let examTotalTime = 0;

  // Flashcards runtime state
  let flashcardQueue = [];
  let currentFlashcardIndex = 0;
  let isCardFlipped = false;

  // ==========================================
  // UTILITIES & HELPERS
  // ==========================================
  function showToast(msg, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function renderMath(container) {
    if (window.renderMathInElement && container) {
      try {
        window.renderMathInElement(container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } catch (err) {
        console.warn('KaTeX rendering error:', err);
      }
    }
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderQuestionMedia(q) {
    if (!q) return '';
    let mediaHtml = '';
    if (q.svgDiagram) {
      mediaHtml += `<div class="quiz-svg-diagram">${q.svgDiagram}</div>`;
    }
    if (q.codeBlock) {
      const langLabel = q.codeLang === 'text' ? 'Bản đồ bộ nhớ / Bảng tra'
        : (q.codeLang ? q.codeLang.toUpperCase() : 'CODE');
      mediaHtml += `
        <div class="quiz-code-block">
          <div class="quiz-code-block-header">${escapeHtml(langLabel)}</div>
          <pre><code>${escapeHtml(q.codeBlock)}</code></pre>
        </div>
      `;
    }
    return mediaHtml;
  }

  // Wraps register occurrences with interactive tooltips safely outside KaTeX & tags
  function enhanceRegisterTooltips(html) {
    if (!html || typeof html !== 'string') return html;
    if (!registerLookup || Object.keys(registerLookup).length === 0) return html;

    // Phân tách cả thẻ HTML và các khối KaTeX $...$, $$...$$ để bảo toàn cú pháp
    const parts = html.split(/(<[^>]+>|\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);
    const regex = /\b(?:x[0-9]|x[12][0-9]|x3[01]|zero|ra|sp|gp|tp|t[0-6]|s[0-9]|s1[01]|a[0-7]|fp)\b/g;

    let codeDepth = 0;
    let svgDepth = 0;
    let skipTagDepth = 0;

    return parts.map((part, idx) => {
      // Nếu là thẻ HTML hoặc khối công thức KaTeX
      if (idx % 2 === 1) {
        if (part.startsWith('<') && !/\/\s*>$/.test(part)) {
          if (/^<\s*(code|pre|kbd)\b/i.test(part)) {
            codeDepth++;
          } else if (/^<\/\s*(code|pre|kbd)\s*>/i.test(part)) {
            codeDepth = Math.max(0, codeDepth - 1);
          } else if (/^<\s*svg\b/i.test(part)) {
            svgDepth++;
          } else if (/^<\/\s*svg\s*>/i.test(part)) {
            svgDepth = Math.max(0, svgDepth - 1);
          } else if (/^<\s*(style|script)\b/i.test(part)) {
            skipTagDepth++;
          } else if (/^<\/\s*(style|script)\s*>/i.test(part)) {
            skipTagDepth = Math.max(0, skipTagDepth - 1);
          }
        }
        return part;
      }

      if (svgDepth > 0 || skipTagDepth > 0) return part;

      const inCode = codeDepth > 0;

      // Đoạn văn bản thuần
      return part.replace(regex, (match, offset) => {
        const info = registerLookup[match];
        if (!info) return match;

        // Đặc biệt xử lý từ "ra" để tránh nhầm lẫn với từ tiếng Việt thông thường (vào-ra, chỉ ra, xảy ra, ra ngoài...)
        if (match.toLowerCase() === 'ra') {
          const before = part.slice(0, offset);
          const after = part.slice(offset + match.length);

          // 1. Luôn loại trừ nếu có gạch nối hoặc gạch chéo: vào-ra, -ra, /ra, ra-
          if (/[-–—/]\s*$/.test(before) || /^\s*[-–—/]/.test(after)) {
            return match;
          }

          // 2. Loại trừ cụm từ tiếng Việt theo sau: ra ngoài, ra đời, ra ngăn xếp, ra RAM, ra cổng, ra âm, ra dương...
          if (/^\s+(?:ngoài|đời|sao|lệnh|một|hai|ba|bốn|năm|sáu|bảy|tám|chín|mười|các|nhiều|màn|thiết|bộ\s+nhớ|cổng|khỏi|đây|đó|hơn|kém|nhất|kết\s+quả|đáp\s+án|ngăn\s+xếp|RAM|ngoại\s+vi|phần|vào|trước|sau|giây|bit|byte|âm|dương)\b/i.test(after)) {
            return match;
          }

          // 3. Loại trừ nếu đi sau động từ tiếng Việt phổ biến (chỉ ra, tạo ra, xảy ra, đưa ra, xuất ra, sinh ra...)
          if (/(?:vào|đầu|ngõ|chân|cổng|mô-đun|thiết\s+bị|chỉ|tạo|xảy|đưa|xuất|sinh|rút|viết|tìm|bỏ|phát|diễn|đi|lấy|đổi|tính|dịch|chuyển|cắt|chia|đặt|nhận|nhìn|bay|thải|mang|gây|bắn|hóa|nhớ|nghĩ|lộ|mở|bước|rơi|chảy|phun|trút|gửi|truyền|lưu|nhảy|suy|kết\s+luận)\s+$/i.test(before)) {
            return match;
          }

          // 4. Nếu nằm trong thẻ <code> hoặc <pre>, luôn coi là thanh ghi/mã lệnh
          if (inCode) {
            return `<span class="reg-tip" data-reg="${match}">${match}</span>`;
          }

          // 5. Nếu ngoài thẻ code, CHỈ coi là thanh ghi khi có ngữ cảnh hợp ngữ rõ ràng:
          const inParens = /\(\s*$/.test(before) && /^\s*\)/.test(after);
          const withX1 = /x1\s*\(\s*$/i.test(before);
          const withRegWord = /(?:thanh\s+ghi(?:\s+(?:số\s+)?(?:1|x1))?|register)\s+$/i.test(before);
          const withAsmOp = /(?:jal|jalr|sw|lw|jr|mv)\s+$/i.test(before);
          const withDollar = /\$\s*$/.test(before);
          const inRegList = /(?:zero|x0|x1|[ast]\d)\s*,\s*$/i.test(before) || /^\s*,\s*(?:sp|x\d|[ast]\d)/i.test(after);

          if (inParens || withX1 || withRegWord || withAsmOp || withDollar || inRegList) {
            return `<span class="reg-tip" data-reg="${match}">${match}</span>`;
          }

          // Không thỏa mãn các điều kiện trên -> coi là từ tiếng Việt, không gắn tooltip
          return match;
        }

        return `<span class="reg-tip" data-reg="${match}">${match}</span>`;
      });
    }).join('');
  }

  // ==========================================
  // REGISTER HOVER TOOLTIP POPUP
  // ==========================================
  const floatingTooltip = document.createElement('div');
  floatingTooltip.id = 'reg-floating-tooltip';
  document.body.appendChild(floatingTooltip);

  document.addEventListener('mouseover', (e) => {
    const tipTarget = e.target.closest('.reg-tip');
    if (tipTarget) {
      const reg = tipTarget.getAttribute('data-reg');
      const info = registerLookup[reg];
      if (info) {
        floatingTooltip.innerHTML = `
          <div class="tip-title">Thanh ghi: ${reg.toUpperCase()} (${info.alias || info.num})</div>
          <div><strong>Mã nhị phân:</strong> <code>${info.bin || ''}</code></div>
          <div><strong>Quy ước lưu trữ:</strong> ${info.saved || ''}</div>
          <div style="margin-top:4px; font-size:0.75rem; color:#cbd5e1;">${info.role || ''}</div>
        `;
        floatingTooltip.style.display = 'block';
        const rect = tipTarget.getBoundingClientRect();
        floatingTooltip.style.left = `${Math.min(rect.left + window.scrollX, window.innerWidth - 280)}px`;
        floatingTooltip.style.top = `${rect.bottom + window.scrollY + 6}px`;
      }
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.reg-tip')) {
      floatingTooltip.style.display = 'none';
    }
  });

  // ==========================================
  // THEME CONTROLLER
  // ==========================================
  function applyTheme(theme) {
    appState.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = document.getElementById('theme-toggle-icon');
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    saveState();
  }

  // ==========================================
  // TAB NAVIGATION
  // ==========================================
  function switchTab(tabId) {
    currentTab = tabId;
    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.remove('active');
    });
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });

    const targetView = document.getElementById(`tab-${tabId}`);
    const targetNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);

    if (targetView) targetView.classList.add('active');
    if (targetNav) targetNav.classList.add('active');

    // Tab-specific initializations
    if (tabId === 'dashboard') {
      renderDashboard();
    } else if (tabId === 'theory') {
      renderTheory();
    } else if (tabId === 'cheatsheet') {
      renderCheatSheet();
    } else if (tabId === 'practice') {
      if (practiceQueue.length === 0) {
        initPracticeQueue();
      }
      renderPracticeModeView();
    } else if (tabId === 'flashcard') {
      initFlashcards();
    } else if (tabId === 'mistakes') {
      renderMistakesList();
    } else if (tabId === 'stats') {
      renderStats();
    } else if (tabId === 'exam') {
      populateExamTargetDropdown();
    }

    // Close mobile sidebar if open
    document.getElementById('sidebar')?.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================
  // DASHBOARD VIEW
  // ==========================================
  function renderDashboardChaptersToc() {
    [1, 2, 3, 4].forEach(chNum => {
      const container = document.getElementById(`dash-ch${chNum}-links`);
      if (!container) return;
      const chObj = chaptersList.find(c => c.id === chNum);
      const secs = theorySections.filter(s => s.chapter === chNum);
      const exGroups = (chObj && chObj.groups ? chObj.groups : []).filter(g => g.type === 'exercise' || g.id !== `${chNum}.1`);

      let html = '';
      if (secs.length > 0) {
        html += `<div class="dash-toc-part"><div class="dash-toc-part-title">Phần 1 — Lý thuyết (${secs.length} mục)</div><div class="dash-toc-links">`;
        secs.forEach(s => {
          const shortTitle = s.title.split('(')[0].trim();
          html += `<button type="button" class="dash-toc-pill" data-dash-sec="${s.id}" title="${escapeHtml(s.code + ': ' + s.title)}">${escapeHtml(s.code)} ${escapeHtml(shortTitle)}</button>`;
        });
        html += `</div></div>`;
      }

      if (exGroups.length > 0) {
        html += `<div class="dash-toc-part"><div class="dash-toc-part-title">Phần 2 — Bài tập & Lời giải</div><div class="dash-toc-links">`;
        exGroups.forEach(g => {
          const cnt = getGroupQuestions(g.id).length;
          html += `<button type="button" class="dash-toc-pill" data-dash-grp="${g.id}" title="${escapeHtml(g.title)} (${cnt} câu)">${escapeHtml(g.id)} (${cnt})</button>`;
        });
        html += `<button type="button" class="dash-toc-pill" data-dash-wb="${chNum}">Sách lời giải Ch.${chNum}</button>`;
        html += `</div></div>`;
      }

      container.innerHTML = html;

      container.querySelectorAll('[data-dash-sec]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          jumpToTheory(btn.getAttribute('data-dash-sec'));
        });
      });
      container.querySelectorAll('[data-dash-grp]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          startGroupTest(btn.getAttribute('data-dash-grp'), 'practice');
        });
      });
      container.querySelectorAll('[data-dash-wb]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          openWorkbookForChapter(parseInt(btn.getAttribute('data-dash-wb'), 10) || 1);
        });
      });
    });
  }

  function renderDashboard() {
    const totalQ = allQuestions.length;
    const answeredCount = Object.keys(appState.history).length;
    const correctCount = Object.values(appState.history).filter(h => h.isCorrect).length;
    const mistakeCount = appState.mistakes.length;
    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    const elTotal = document.getElementById('dash-total-questions');
    const elAnswered = document.getElementById('dash-answered-count');
    const elAccuracy = document.getElementById('dash-accuracy');
    const elMistakes = document.getElementById('dash-mistakes-count');

    if (elTotal) elTotal.textContent = totalQ;
    if (elAnswered) elAnswered.textContent = answeredCount;
    if (elAccuracy) elAccuracy.textContent = `${accuracy}%`;
    if (elMistakes) elMistakes.textContent = mistakeCount;

    // Update chapter cards progress
    [1, 2, 3, 4].forEach(chNum => {
      const chQuestions = allQuestions.filter(q => q.chapter === chNum);
      const chCorrect = chQuestions.filter(q => appState.history[q.id] && appState.history[q.id].isCorrect);
      const pct = chQuestions.length > 0 ? Math.round((chCorrect.length / chQuestions.length) * 100) : 0;

      const countEl = document.getElementById(`dash-ch${chNum}-count`);
      const fillEl = document.getElementById(`dash-ch${chNum}-fill`);
      const metaEl = document.getElementById(`dash-ch${chNum}-meta`);
      if (countEl) countEl.textContent = `${chQuestions.length} câu`;
      if (fillEl) fillEl.style.width = `${pct}%`;
      if (metaEl) metaEl.textContent = `${chCorrect.length}/${chQuestions.length} câu (${pct}%)`;
    });

    renderDashboardChaptersToc();

    const navTotalBadge = document.getElementById('nav-total-q-badge');
    if (navTotalBadge) navTotalBadge.textContent = totalQ;

    // Update nav badge count for mistakes
    const mistakeBadge = document.getElementById('nav-mistake-badge');
    if (mistakeBadge) {
      mistakeBadge.textContent = mistakeCount;
      mistakeBadge.style.display = mistakeCount > 0 ? 'inline-block' : 'none';
    }
  }

  // ==========================================
  // THEORY VIEW & ASSESSMENT ENGINE
  // ==========================================
  let currentTheoryChapter = 1;

  // Phân loại chính xác 1-1 từng câu hỏi về đúng mục lý thuyết trong KTMT_GK.pdf (4 chương)
  function getQuestionSectionId(q) {
    if (q.relatedTheoryId && theorySections.some(s => s.id === q.relatedTheoryId)) {
      return q.relatedTheoryId;
    }
    const g = q.groupId || q.group || '';
    if (q.chapter === 1) {
      if (g === '1.2.1') return '1.1.1';
      if (g === '1.1') return '1.1.2';
      return '1.1.3';
    }
    if (q.chapter === 2) {
      if (g === '2.2.1') return '2.1.1';
      if (g === '2.2.2') return '2.1.2';
      return '2.1.3';
    }
    if (q.chapter === 3) {
      if (g === '3.2.7' || g === '3.1') return '3.1.1';
      if (g === '3.2.4') return '3.1.2';
      if (g === '3.2.8' || g === '3.2.1') return '3.1.4';
      return '3.1.3';
    }
    if (q.chapter === 4) {
      if (g === '4.2.1') return '4.1.1';
      if (g === '4.2.2') return '4.1.2';
      if (g === '4.2.3') return '4.1.3';
      if (g === '4.2.4' || g === '4.2.5') return '4.1.4';
      return '4.1.5';
    }
    return q.relatedTheoryId || '1.1.1';
  }

  // Lấy toàn bộ câu hỏi liên quan đến một mục lý thuyết (100% không trùng lặp giữa các mục)
  function getSectionQuestions(sectionId) {
    return allQuestions.filter(q => getQuestionSectionId(q) === sectionId);
  }

  // Lấy toàn bộ câu hỏi của một nhóm bài tập
  function getGroupQuestions(groupId) {
    return allQuestions.filter(q => (q.groupId || q.group) === groupId);
  }

  function syncSplitPdf(page) {
    const p = page || 1;
    const iframe = document.getElementById('theory-split-iframe');
    const label = document.getElementById('theory-split-page-label');
    const newTab = document.getElementById('theory-split-newtab');
    if (iframe) iframe.src = `KTMT_GK.pdf#page=${p}&view=FitH`;
    if (label) label.textContent = `KTMT_GK.pdf — Trang ${p}`;
    if (newTab) newTab.href = `KTMT_GK.pdf#page=${p}`;
  }

  function toggleTheorySplitPdf(forceState) {
    isTheorySplitPdf = typeof forceState === 'boolean' ? forceState : !isTheorySplitPdf;
    const ws = document.getElementById('theory-workspace');
    const btn = document.getElementById('btn-toggle-pdf-split');
    if (ws) ws.classList.toggle('split-pdf-active', isTheorySplitPdf);
    if (btn) btn.textContent = isTheorySplitPdf ? 'Đóng PDF song song' : 'Đọc song song PDF';
    if (isTheorySplitPdf) {
      const chObj = chaptersList.find(c => c.id === currentTheoryChapter) || {};
      syncSplitPdf(chObj.pdfPageStart || 1);
    }
  }

  function openTheoryPdfPage(page) {
    if (currentTab === 'theory' && isTheorySplitPdf) {
      syncSplitPdf(page);
      showToast(`Đã đồng bộ PDF sang trang ${page}`, 'info');
    } else {
      openPdfModal(page);
    }
  }

  function buildMiniCheckHtml(sec, secQuestions) {
    if (!secQuestions || secQuestions.length === 0) return '';
    if (miniCheckIndexMap[sec.id] === undefined) miniCheckIndexMap[sec.id] = 0;
    const idx = miniCheckIndexMap[sec.id] % secQuestions.length;
    const q = secQuestions[idx];
    const optsHtml = (q.options || []).map((opt, i) => {
      const key = opt.key || ['A', 'B', 'C', 'D'][i];
      return `<button type="button" class="minicheck-opt" data-opt-key="${key}"><strong>${key}.</strong> ${enhanceRegisterTooltips(opt.text)}</button>`;
    }).join('');

    return `
      <div class="theory-minicheck-box" data-minicheck-box="${sec.id}">
        <div class="minicheck-header">
          <span class="minicheck-title">Kiểm tra nhanh tại chỗ — Câu ${idx + 1}/${secQuestions.length}</span>
          <div class="inline-actions">
            ${secQuestions.length > 1 ? `<button type="button" class="btn btn-secondary btn-xs btn-minicheck-next" data-minicheck-sec="${sec.id}">Đổi câu khác ↻</button>` : ''}
            <button type="button" class="btn btn-outline-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startSectionTest('${sec.id}', 'practice')">Luyện cả ${secQuestions.length} câu</button>
          </div>
        </div>
        <div class="minicheck-q-text">${enhanceRegisterTooltips(q.question)}</div>
        ${renderQuestionMedia(q)}
        <div class="minicheck-opts">${optsHtml}</div>
        <div class="minicheck-feedback" style="display:none;"></div>
      </div>
    `;
  }

  function bindMiniCheckBox(box, sec) {
    const secQuestions = getSectionQuestions(sec.id);
    if (!box || secQuestions.length === 0) return;
    const idx = (miniCheckIndexMap[sec.id] || 0) % secQuestions.length;
    const q = secQuestions[idx];

    box.querySelector('.btn-minicheck-next')?.addEventListener('click', () => {
      miniCheckIndexMap[sec.id] = (idx + 1) % secQuestions.length;
      const wrapper = document.createElement('div');
      wrapper.innerHTML = buildMiniCheckHtml(sec, secQuestions);
      const newBox = wrapper.firstElementChild;
      if (newBox) {
        box.replaceWith(newBox);
        renderMath(newBox);
        bindMiniCheckBox(newBox, sec);
      }
    });

    box.querySelectorAll('.minicheck-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        const picked = btn.getAttribute('data-opt-key');
        const isOk = picked === q.correctAnswer;
        box.querySelectorAll('.minicheck-opt').forEach(b => {
          b.disabled = true;
          const k = b.getAttribute('data-opt-key');
          if (k === q.correctAnswer) b.classList.add('correct');
          else if (k === picked && !isOk) b.classList.add('wrong');
        });
        const fb = box.querySelector('.minicheck-feedback');
        if (fb) {
          fb.style.display = 'block';
          fb.innerHTML = `<strong>${isOk ? '✓ Chính xác!' : `✗ Chưa đúng (Đáp án: ${q.correctAnswer}).`}</strong> ${enhanceRegisterTooltips(q.explanation || '')}`;
          renderMath(fb);
        }
        appState.history[q.id] = { answered: true, isCorrect: isOk, lastAnswer: picked, timestamp: Date.now() };
        if (!isOk && !appState.mistakes.includes(q.id)) appState.mistakes.push(q.id);
        saveState();
      });
    });
  }

  function updateTheoryFooterNav(chapterNum) {
    const prevBtn = document.getElementById('btn-theory-prev-ch');
    const nextBtn = document.getElementById('btn-theory-next-ch');
    if (prevBtn) {
      prevBtn.disabled = chapterNum <= 1;
      prevBtn.textContent = chapterNum > 1 ? `← Chương ${chapterNum - 1}` : '← Chương trước';
    }
    if (nextBtn) {
      nextBtn.disabled = chapterNum >= 4;
      nextBtn.textContent = chapterNum < 4 ? `Chương ${chapterNum + 1} →` : 'Chương tiếp →';
    }
  }

  let theoryScrollspyBound = false;
  function updateTheoryScrollspy() {
    if (currentTab !== 'theory') return;
    const tocItems = Array.from(document.querySelectorAll('#theory-toc .theory-toc-item'));
    if (tocItems.length === 0) return;
    let activeHref = null;
    for (const link of tocItems) {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) continue;
      const target = document.getElementById(href.slice(1));
      if (target && target.getBoundingClientRect().top <= 165) {
        activeHref = href;
      }
    }
    if (activeHref) {
      tocItems.forEach(el => el.classList.toggle('active', el.getAttribute('href') === activeHref));
    }
  }

  function renderTheory(chapterNum = currentTheoryChapter) {
    currentTheoryChapter = chapterNum;
    const chapterObj = chaptersList.find(c => c.id === chapterNum) || chaptersList[0] || {};
    const sections = theorySections.filter(s => s.chapter === chapterNum);

    if (isTheorySplitPdf) {
      syncSplitPdf(chapterObj.pdfPageStart || 1);
    }
    updateTheoryFooterNav(chapterNum);

    // Render Table of Contents (Phân chia đúng 2 Phần theo giáo trình KTMT_GK.pdf)
    const tocContainer = document.getElementById('theory-toc');
    if (tocContainer) {
      tocContainer.innerHTML = '';

      // Header Phần 1
      const headerPart1 = document.createElement('div');
      headerPart1.className = 'theory-toc-section-header';
      headerPart1.textContent = `📌 ${chapterNum}.1 Phần 1: Lý thuyết trọng tâm`;
      tocContainer.appendChild(headerPart1);

      sections.forEach((sec, idx) => {
        const item = document.createElement('a');
        item.className = `theory-toc-item ${idx === 0 ? 'active' : ''}`;
        const secQuestions = getSectionQuestions(sec.id);
        item.innerHTML = `<span>${sec.code} ${sec.title.split('(')[0]}</span><span class="toc-count-pill" title="Tổng số câu trắc nghiệm mục này">${secQuestions.length} câu</span>`;
        item.href = `#sec-${sec.id}`;
        item.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelectorAll('.theory-toc-item').forEach(el => el.classList.remove('active'));
          item.classList.add('active');
          const target = document.getElementById(`sec-${sec.id}`);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (isTheorySplitPdf && sec.pdfPage) syncSplitPdf(sec.pdfPage);
        });
        tocContainer.appendChild(item);
      });

      // Header Phần 2 (Bài tập theo nhóm chuẩn PDF)
      const headerPart2 = document.createElement('div');
      headerPart2.className = 'theory-toc-section-header';
      headerPart2.textContent = `📝 ${chapterNum}.2 Phần 2: Toàn bộ bài tập theo nhóm`;
      tocContainer.appendChild(headerPart2);

      const chapterGroups = (chapterObj.groups || []).filter(g => g.type === 'exercise' || g.id !== `${chapterNum}.1`);
      chapterGroups.forEach(grp => {
        const grpQuestions = getGroupQuestions(grp.id);
        const item = document.createElement('a');
        item.className = 'theory-toc-item group-item';
        const displayTitle = grp.title.length > 28 ? grp.title.substring(0, 26) + '...' : grp.title;
        item.innerHTML = `<span>${displayTitle}</span><span class="toc-count-pill">${grpQuestions.length} câu</span>`;
        item.href = `#group-sec-${grp.id}`;
        item.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelectorAll('.theory-toc-item').forEach(el => el.classList.remove('active'));
          item.classList.add('active');
          const target = document.getElementById(`group-sec-${grp.id}`) || document.getElementById(`sec-part2-${chapterNum}`);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (isTheorySplitPdf && grp.pdfPage) syncSplitPdf(grp.pdfPage);
        });
        tocContainer.appendChild(item);
      });
    }

    // Render Chapter Header & Actions
    const titleEl = document.getElementById('theory-chapter-title');
    const descEl = document.getElementById('theory-chapter-desc');
    const pageBadge = document.getElementById('theory-pdf-page-badge');
    if (titleEl) titleEl.textContent = chapterObj.title ? `${chapterObj.code}: ${chapterObj.title}` : `Chương ${chapterNum}`;
    if (descEl) descEl.textContent = chapterObj.subtitle || 'Tài liệu ôn tập bám sát giáo trình KTMT_GK.pdf';
    if (pageBadge) {
      pageBadge.textContent = `PDF Trang ${chapterObj.pdfPageStart || 1}`;
      pageBadge.onclick = () => openTheoryPdfPage(chapterObj.pdfPageStart || 1);
    }

    // Render Content Sections
    const contentEl = document.getElementById('theory-content-body');
    if (contentEl) {
      let html = '';

      // Banner Phần 1
      html += `
        <div style="margin-bottom: 24px; padding-bottom: 12px; border-bottom: 2px solid var(--primary);">
          <span class="badge badge-chapter" style="margin-bottom: 6px; display: inline-block;">PHẦN 1 GIÁO TRÌNH KTMT_GK.PDF</span>
          <h2 style="font-size: 1.45rem; color: var(--primary); margin: 4px 0 0 0; border: none; padding: 0;">
            ${chapterNum}.1 Phần 1: Lý thuyết trọng tâm
          </h2>
        </div>
      `;

      sections.forEach(sec => {
        const secQuestions = getSectionQuestions(sec.id);
        html += `<section id="sec-${sec.id}" class="theory-section-block">`;
        html += `
          <div class="section-heading-row" style="margin-bottom: 12px;">
            <h2 style="font-size: 1.3rem; color: var(--primary); margin: 0; border: none; padding: 0;">${sec.code}. ${sec.title}</h2>
            <button type="button" class="section-pdf-chip" data-pdf-jump-page="${sec.pdfPage}" title="Mở trang ${sec.pdfPage} trong KTMT_GK.pdf">
              Trang ${sec.pdfPage} (KTMT_GK.pdf)
            </button>
          </div>
        `;

        if (sec.summary) {
          html += `<div class="theory-summary-box"><strong>Tóm tắt trọng tâm:</strong> ${sec.summary}</div>`;
        }

        html += enhanceRegisterTooltips(sec.content);
        html += buildMiniCheckHtml(sec, secQuestions);

        // THẺ ĐÁNH GIÁ & BÀI TEST TOÀN DIỆN CHO MỤC NÀY (Không trùng lặp)
        html += `
          <div class="theory-assessment-card" id="assessment-${sec.id}">
            <div class="assessment-header">
              <div class="assessment-badge">BÀI KIỂM TRA MỤC ${sec.code}</div>
              <div class="assessment-count-badge">${secQuestions.length} câu trắc nghiệm</div>
            </div>
            <h3 class="assessment-title">Kiểm tra kiến thức: ${sec.title}</h3>
            <p class="assessment-desc">
              Học xong phần này? Làm bài kiểm tra gồm <strong>toàn bộ ${secQuestions.length} câu hỏi trọng tâm</strong> bám sát mục này hoặc mở Sách bài tập & lời giải.
            </p>

            <div class="assessment-main-actions">
              <button class="btn btn-primary" onclick="window.KTMT_APP && window.KTMT_APP.startSectionTest('${sec.id}', 'exam')">
                ⏱️ Làm Bài Test (${secQuestions.length} câu)
              </button>
              <button class="btn btn-secondary" onclick="window.KTMT_APP && window.KTMT_APP.startSectionTest('${sec.id}', 'practice')">
                🎯 Luyện Tập Có Giải Thích (${secQuestions.length} câu)
              </button>
            </div>
          </div>
        `;

        html += `</section>`;
      });

      // SECTION 2: TOÀN BỘ BÀI TẬP VÀ HƯỚNG DẪN GIẢI CHUẨN PDF
      const exerciseGroups = (chapterObj.groups || []).filter(g => g.type === 'exercise' || g.id !== `${chapterNum}.1`);
      if (exerciseGroups.length > 0) {
        html += `
          <section id="sec-part2-${chapterNum}" class="theory-section-block" style="margin-top: 40px; padding-top: 28px; border-top: 2px solid var(--primary); border-bottom: none;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 8px;">
              <div>
                <span class="badge badge-chapter" style="margin-bottom: 6px; display: inline-block;">PHẦN 2 GIÁO TRÌNH KTMT_GK.PDF</span>
                <h2 style="font-size: 1.45rem; color: var(--primary); margin: 4px 0 0 0; border: none; padding: 0;">
                  ${chapterNum}.2 Phần 2: Toàn bộ bài tập Chương ${chapterNum} và Hướng dẫn giải
                </h2>
                <p style="color: var(--text-secondary); margin-top: 6px; font-size: 0.92rem;">
                  Phân nhóm chuẩn 100% theo giáo trình KTMT_GK.pdf. Chọn nhóm bất kỳ để làm test hoặc mở Sách lời giải.
                </p>
              </div>
              <button type="button" class="section-pdf-chip" data-pdf-jump-page="${exerciseGroups[0].pdfPage || chapterObj.pdfPageStart}">
                Trang ${exerciseGroups[0].pdfPage || chapterObj.pdfPageStart} (KTMT_GK.pdf)
              </button>
            </div>

            <div class="part2-groups-grid">
              ${exerciseGroups.map(grp => {
                const grpQuestions = getGroupQuestions(grp.id);
                return `
                  <div class="part2-group-card" id="group-sec-${grp.id}">
                    <div>
                      <div class="part2-group-card-header">
                        <span class="group-id-badge">${grp.id}</span>
                        <button type="button" class="btn btn-outline-secondary btn-xs" data-pdf-jump-page="${grp.pdfPage}" title="Xem trang ${grp.pdfPage} trong PDF">
                          📄 Trang ${grp.pdfPage}
                        </button>
                      </div>
                      <div class="part2-group-title">${grp.title}</div>
                      <div class="part2-group-meta">
                        ${grp.exercises ? `<strong>${grp.exercises}</strong> • ` : ''}${grpQuestions.length} câu trắc nghiệm
                      </div>
                      ${grp.summary ? `<div class="part2-group-summary"><strong>Tóm tắt dạng bài:</strong> ${grp.summary}</div>` : ''}
                    </div>
                    <div class="part2-group-actions">
                      <button class="btn btn-primary btn-sm" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('${grp.id}', 'exam')" style="flex: 1;">
                        ⏱️ Test (${grpQuestions.length})
                      </button>
                      <button class="btn btn-secondary btn-sm" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('${grp.id}', 'practice')">
                        🎯 Luyện
                      </button>
                      <button class="btn btn-outline-secondary btn-sm" onclick="window.KTMT_APP && window.KTMT_APP.openWorkbookGroup('${grp.id}')" title="Xem toàn bộ bài & hướng dẫn giải chi tiết">
                        📖 Lời giải
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
        `;
      }

      contentEl.innerHTML = html;
      renderMath(contentEl);

      // Dynamic group counts & PDF/Mini-check bindings
      contentEl.querySelectorAll('.group-q-count[data-group-link]').forEach(el => {
        const gid = el.getAttribute('data-group-link');
        el.textContent = `(${getGroupQuestions(gid).length} câu)`;
      });
      contentEl.querySelectorAll('[data-pdf-jump-page]').forEach(btn => {
        btn.addEventListener('click', () => {
          openTheoryPdfPage(parseInt(btn.getAttribute('data-pdf-jump-page'), 10) || 1);
        });
      });
      sections.forEach(sec => {
        const box = contentEl.querySelector(`[data-minicheck-box="${sec.id}"]`);
        if (box) bindMiniCheckBox(box, sec);
      });
    }

    if (!theoryScrollspyBound) {
      theoryScrollspyBound = true;
      let spyQueued = false;
      window.addEventListener('scroll', () => {
        if (currentTab !== 'theory' || spyQueued) return;
        spyQueued = true;
        requestAnimationFrame(() => {
          spyQueued = false;
          updateTheoryScrollspy();
        });
      }, { passive: true });
    }

    // Update active tab buttons in theory header
    document.querySelectorAll('.theory-tab-btn').forEach(btn => {
      const ch = parseInt(btn.getAttribute('data-chapter'));
      btn.classList.toggle('active', ch === chapterNum);
    });
  }

  // ==========================================
  // CHEAT SHEET TAB ENGINE
  // ==========================================
  function renderCheatSheet() {
    const container = document.getElementById('cheatsheet-content');
    if (!container) return;

    const csCards = window.KTMT_CHEATSHEET || [];
    const regs = window.RISCV_REGISTERS || {};
    const regRows = Object.values(regs).map(r => `
      <tr>
        <td><code>${r.num}</code></td>
        <td><strong>${r.alias}</strong></td>
        <td><code>${r.bin}</code></td>
        <td>${escapeHtml(r.saved)}</td>
        <td>${escapeHtml(r.role)}</td>
      </tr>
    `).join('');

    let html = `<div class="cheatsheet-grid">`;
    csCards.forEach(card => {
      html += `
        <article class="cheatsheet-card">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">
            <h3 style="margin:0;border:none;padding:0;">${escapeHtml(card.title)}</h3>
            <button type="button" class="section-pdf-chip" data-cs-pdf="${card.pdfPage || 1}">Trang ${card.pdfPage || 1}</button>
          </div>
          <ul>
            ${(card.items || []).map(it => `<li><strong>${escapeHtml(it.label)}:</strong> ${it.formula}</li>`).join('')}
          </ul>
        </article>
      `;
    });
    html += `</div>`;

    html += `
      <article class="cheatsheet-card" style="margin-bottom: 18px;">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">
          <h3 style="margin:0;border:none;padding:0;">Bảng 6 Định dạng lệnh &amp; Opcode RISC-V 32-bit (KTMT_GK.pdf trang 61–62)</h3>
          <button type="button" class="section-pdf-chip" data-cs-pdf="61">Trang 61</button>
        </div>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr><th>Format</th><th>Opcode (bit 6:0)</th><th>Lệnh đại diện</th><th>Bố cục bit 31..0</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>R-type</strong></td><td><code>0110011</code> (0x33)</td><td>add, sub, sll, slt, sltu, xor, srl, sra, or, and</td><td>funct7[31:25] | rs2[24:20] | rs1[19:15] | funct3[14:12] | rd[11:7] | opcode</td></tr>
              <tr><td><strong>I-type (ALU)</strong></td><td><code>0010011</code> (0x13)</td><td>addi, slti, xori, ori, andi, slli, srli, srai</td><td>imm[11:0] | rs1 | funct3 | rd | opcode</td></tr>
              <tr><td><strong>I-type (Load/JALR)</strong></td><td><code>0000011</code> / <code>1100111</code></td><td>lb, lh, lw, lbu, lhu / jalr</td><td>imm[11:0] (Mở rộng dấu 12 bit) | rs1 | funct3 | rd | opcode</td></tr>
              <tr><td><strong>S-type</strong></td><td><code>0100011</code> (0x23)</td><td>sb, sh, sw</td><td>imm[11:5] | rs2 | rs1 | funct3 | imm[4:0] | opcode</td></tr>
              <tr><td><strong>B-type</strong></td><td><code>1100011</code> (0x63)</td><td>beq, bne, blt, bge, bltu, bgeu</td><td>imm[12|10:5] | rs2 | rs1 | funct3 | imm[4:1|11] | opcode (dịch 1 bit = ×2 byte)</td></tr>
              <tr><td><strong>U-type</strong></td><td><code>0110111</code> / <code>0010111</code></td><td>lui / auipc</td><td>imm[31:12] (20 bit cao) | rd[11:7] | opcode</td></tr>
              <tr><td><strong>J-type</strong></td><td><code>1101111</code> (0x6F)</td><td>jal</td><td>imm[20|10:1|11|19:12] | rd[11:7] | opcode (bước nhảy chẵn ×2)</td></tr>
            </tbody>
          </table>
        </div>
      </article>

      <article class="cheatsheet-card">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">
          <h3 style="margin:0;border:none;padding:0;">Bảng tra cứu 32 thanh ghi RISC-V RV32I (KTMT_GK.pdf trang 51)</h3>
          <button type="button" class="section-pdf-chip" data-cs-pdf="51">Trang 51</button>
        </div>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr><th>Số hiệu</th><th>ABI</th><th>Mã 5-bit</th><th>Quy ước lưu trữ</th><th>Chức năng chính</th></tr>
            </thead>
            <tbody>${regRows}</tbody>
          </table>
        </div>
      </article>
    `;

    container.innerHTML = html;
    renderMath(container);
    container.querySelectorAll('[data-cs-pdf]').forEach(btn => {
      btn.addEventListener('click', () => openPdfModal(parseInt(btn.getAttribute('data-cs-pdf'), 10) || 1));
    });
  }

  // ==========================================
  // PRACTICE & WORKBOOK SOLUTIONS ENGINE
  // ==========================================
  function getTagBadgeClass(tag) {
    if (tag === 'GK') return 'badge-tag-gk';
    if (tag === 'CK') return 'badge-tag-ck';
    if (tag === 'Ôn tập' || tag === 'OT') return 'badge-tag-ot';
    return 'badge-tag-lt';
  }

  function setPracticeViewMode(mode) {
    practiceViewMode = mode === 'workbook' ? 'workbook' : 'quiz';
    document.getElementById('btn-practice-mode-quiz')?.classList.toggle('active', practiceViewMode === 'quiz');
    document.getElementById('btn-practice-mode-workbook')?.classList.toggle('active', practiceViewMode === 'workbook');

    const quizWrap = document.getElementById('practice-quiz-wrapper');
    const wbWrap = document.getElementById('practice-workbook-container');
    const bulkWrap = document.getElementById('workbook-bulk-actions');
    if (quizWrap) quizWrap.style.display = practiceViewMode === 'quiz' ? 'block' : 'none';
    if (wbWrap) wbWrap.style.display = practiceViewMode === 'workbook' ? 'block' : 'none';
    if (bulkWrap) bulkWrap.style.display = practiceViewMode === 'workbook' ? 'flex' : 'none';
  }

  function renderPracticeModeView() {
    setPracticeViewMode(practiceViewMode);
    if (practiceViewMode === 'workbook') {
      renderPracticeWorkbook();
    } else {
      renderPracticeQuestion();
    }
  }

  function openWorkbookForChapter(chNum) {
    const chSelect = document.getElementById('practice-filter-chapter');
    if (chSelect) chSelect.value = String(chNum);
    updateGroupDropdownOptions(String(chNum));
    const grpSelect = document.getElementById('practice-filter-group');
    if (grpSelect) grpSelect.value = 'all';
    const shuf = document.getElementById('practice-shuffle-toggle');
    if (shuf) shuf.checked = false;
    setPracticeViewMode('workbook');
    initPracticeQueue();
    switchTab('practice');
  }

  function openWorkbookGroup(groupId) {
    let chNum = 1;
    chaptersList.forEach(ch => {
      if ((ch.groups || []).some(g => g.id === groupId)) chNum = ch.id;
    });
    const chSelect = document.getElementById('practice-filter-chapter');
    if (chSelect) chSelect.value = String(chNum);
    updateGroupDropdownOptions(String(chNum));
    const grpSelect = document.getElementById('practice-filter-group');
    if (grpSelect) grpSelect.value = groupId;
    const shuf = document.getElementById('practice-shuffle-toggle');
    if (shuf) shuf.checked = false;
    setPracticeViewMode('workbook');
    initPracticeQueue();
    switchTab('practice');
  }

  function renderPracticeWorkbook() {
    const container = document.getElementById('practice-workbook-container');
    if (!container) return;

    const toggleAllBtn = document.getElementById('btn-workbook-toggle-all');
    if (toggleAllBtn) {
      toggleAllBtn.textContent = workbookExpandAll ? 'Thu gọn tất cả lời giải' : 'Mở tất cả lời giải chi tiết';
    }

    if (practiceQueue.length === 0) {
      container.innerHTML = `
        <div class="quiz-card" style="text-align:center; padding: 40px 20px;">
          <h3>Không có bài tập phù hợp với bộ lọc</h3>
          <p style="color:var(--text-secondary); margin: 8px 0 16px;">Hãy đổi Chương hoặc Nhóm bài tập ở thanh lọc phía trên.</p>
          <button type="button" class="btn btn-primary btn-sm" id="btn-wb-reset-filters">Hiển thị tất cả ${allQuestions.length} bài</button>
        </div>`;
      container.querySelector('#btn-wb-reset-filters')?.addEventListener('click', () => {
        document.getElementById('practice-filter-chapter').value = 'all';
        document.getElementById('practice-filter-tag').value = 'all';
        updateGroupDropdownOptions('all');
        document.getElementById('practice-filter-group').value = 'all';
        initPracticeQueue();
        renderPracticeWorkbook();
      });
      return;
    }

    const itemsHtml = practiceQueue.map((q, idx) => {
      const grpInfo = getQuestionGroupInfo(q);
      const tagClass = getTagBadgeClass(q.examTag);
      const correctOpt = (q.options && q.options[q.correctIndex]) ? q.options[q.correctIndex].text : '';
      const optsHtml = (q.options || []).map((opt, oIdx) => {
        const key = opt.key || ['A', 'B', 'C', 'D'][oIdx];
        const isAns = workbookExpandAll && key === q.correctAnswer;
        return `<div class="workbook-opt-pill ${isAns ? 'is-answer' : ''}" data-wb-key="${key}"><strong>${key}.</strong> ${enhanceRegisterTooltips(opt.text)}</div>`;
      }).join('');

      return `
        <article class="workbook-item">
          <div class="workbook-item-head">
            <div class="badge-tags">
              <span class="badge badge-chapter">Bài #${idx + 1} • Ch.${q.chapter}</span>
              <span class="badge badge-group">${escapeHtml(grpInfo.groupTitle)}</span>
              <span class="badge ${tagClass}">${escapeHtml(q.examTag || 'GK')}</span>
              ${q.source ? `<span class="badge badge-group">${escapeHtml(q.source)}</span>` : ''}
            </div>
            <div class="inline-actions">
              <button type="button" class="section-pdf-chip" data-wb-pdf="${q.pdfPage || 1}">Trang ${q.pdfPage || 1} (KTMT_GK.pdf)</button>
              ${grpInfo.linkedSec ? `<button type="button" class="btn btn-outline-secondary btn-xs" data-wb-theory="${grpInfo.linkedSec.id}">Lý thuyết ${grpInfo.linkedSec.code}</button>` : ''}
            </div>
          </div>
          <div class="workbook-stem">${enhanceRegisterTooltips(q.question)}</div>
          ${renderQuestionMedia(q)}
          <div class="workbook-options-list">${optsHtml}</div>
          <div class="inline-actions">
            <button type="button" class="btn btn-primary btn-xs btn-toggle-wb-sol" data-correct-key="${q.correctAnswer}">
              ${workbookExpandAll ? 'Ẩn hướng dẫn giải chi tiết' : 'Hiện hướng dẫn giải chi tiết'}
            </button>
          </div>
          <div class="workbook-solution-box ${workbookExpandAll ? 'open' : ''}">
            <div style="margin-bottom: 6px;"><strong>Đáp án đúng: ${q.correctAnswer}${correctOpt ? '. ' + enhanceRegisterTooltips(correctOpt) : ''}</strong></div>
            <div>${enhanceRegisterTooltips(q.explanation || 'Đang cập nhật lời giải.')}</div>
          </div>
        </article>
      `;
    }).join('');

    container.innerHTML = `<div class="workbook-list">${itemsHtml}</div>`;
    renderMath(container);

    container.querySelectorAll('[data-wb-pdf]').forEach(btn => {
      btn.addEventListener('click', () => openPdfModal(parseInt(btn.getAttribute('data-wb-pdf'), 10) || 1));
    });
    container.querySelectorAll('[data-wb-theory]').forEach(btn => {
      btn.addEventListener('click', () => jumpToTheory(btn.getAttribute('data-wb-theory')));
    });
    container.querySelectorAll('.btn-toggle-wb-sol').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.workbook-item');
        const box = card?.querySelector('.workbook-solution-box');
        if (!box) return;
        const isOpen = box.classList.toggle('open');
        const ansKey = btn.getAttribute('data-correct-key');
        btn.textContent = isOpen ? 'Ẩn hướng dẫn giải chi tiết' : 'Hiện hướng dẫn giải chi tiết';
        card.querySelectorAll('.workbook-opt-pill').forEach(pill => {
          pill.classList.toggle('is-answer', isOpen && pill.getAttribute('data-wb-key') === ansKey);
        });
      });
    });
  }

  function initPracticeQueue() {
    const chFilter = document.getElementById('practice-filter-chapter')?.value || 'all';
    const tagFilter = document.getElementById('practice-filter-tag')?.value || 'all';
    const groupFilter = document.getElementById('practice-filter-group')?.value || 'all';
    const isShuffle = document.getElementById('practice-shuffle-toggle')?.checked || false;

    let filtered = allQuestions.slice();

    if (chFilter !== 'all') {
      const chNum = parseInt(chFilter);
      filtered = filtered.filter(q => q.chapter === chNum);
    }
    if (tagFilter !== 'all') {
      filtered = filtered.filter(q => q.examTag === tagFilter || (Array.isArray(q.examTags) && q.examTags.includes(tagFilter)));
    }
    if (groupFilter !== 'all') {
      if (groupFilter.startsWith('sec-')) {
        const secId = groupFilter.replace('sec-', '');
        filtered = filtered.filter(q => getQuestionSectionId(q) === secId);
      } else {
        filtered = filtered.filter(q => (q.groupId || q.group) === groupFilter);
      }
    }

    if (isShuffle) {
      filtered = shuffleArray(filtered);
    }

    practiceQueue = filtered;
    currentPracticeIndex = 0;
    practiceAnswerSubmitted = false;
  }

  function updateGroupDropdownOptions(chFilter) {
    const groupSelect = document.getElementById('practice-filter-group');
    if (!groupSelect) return;
    const currentVal = groupSelect.value;
    groupSelect.innerHTML = '';

    if (chFilter === 'all') {
      const optAll = document.createElement('option');
      optAll.value = 'all';
      optAll.textContent = `Tất cả bài tập (${allQuestions.length} câu)`;
      groupSelect.appendChild(optAll);

      chaptersList.forEach(ch => {
        const chSections = theorySections.filter(s => s.chapter === ch.id);
        if (chSections.length > 0) {
          const optGroupSec = document.createElement('optgroup');
          optGroupSec.label = `--- ${ch.code}: Theo Mục Lý Thuyết ---`;
          chSections.forEach(s => {
            const qCount = getSectionQuestions(s.id).length;
            const opt = document.createElement('option');
            opt.value = 'sec-' + s.id;
            opt.textContent = `Mục ${s.code}: ${s.title.substring(0, 30)}... (${qCount} câu)`;
            optGroupSec.appendChild(opt);
          });
          groupSelect.appendChild(optGroupSec);
        }

        const optGroupGrp = document.createElement('optgroup');
        optGroupGrp.label = `--- ${ch.code}: Theo Nhóm Bài Tập (Chuẩn PDF) ---`;
        (ch.groups || []).forEach(g => {
          const qCount = getGroupQuestions(g.id).length;
          const opt = document.createElement('option');
          opt.value = g.id;
          opt.textContent = `${g.title} (${qCount} câu)`;
          optGroupGrp.appendChild(opt);
        });
        groupSelect.appendChild(optGroupGrp);
      });
    } else {
      const chNum = parseInt(chFilter);
      const ch = chaptersList.find(c => c.id === chNum);
      const chQuestions = allQuestions.filter(q => q.chapter === chNum);

      const optAll = document.createElement('option');
      optAll.value = 'all';
      optAll.textContent = `Tất cả câu hỏi Chương ${chNum} (${chQuestions.length} câu)`;
      groupSelect.appendChild(optAll);

      if (ch) {
        const chSections = theorySections.filter(s => s.chapter === chNum);
        if (chSections.length > 0) {
          const optGroupSec = document.createElement('optgroup');
          optGroupSec.label = `📋 LÀM BÀI THEO MỤC LÝ THUYẾT (TẤT CẢ CÂU LIÊN QUAN)`;
          chSections.forEach(s => {
            const qCount = getSectionQuestions(s.id).length;
            const opt = document.createElement('option');
            opt.value = 'sec-' + s.id;
            opt.textContent = `Mục ${s.code}: ${s.title} (Toàn bộ ${qCount} câu)`;
            optGroupSec.appendChild(opt);
          });
          groupSelect.appendChild(optGroupSec);
        }

        const optGroupGrp = document.createElement('optgroup');
        optGroupGrp.label = `📝 LÀM BÀI THEO TỪNG NHÓM (PHẦN 2 - CHUẨN PDF)`;
        (ch.groups || []).forEach(g => {
          const qCount = getGroupQuestions(g.id).length;
          const opt = document.createElement('option');
          opt.value = g.id;
          opt.textContent = `${g.title} (${qCount} câu)`;
          optGroupGrp.appendChild(opt);
        });
        groupSelect.appendChild(optGroupGrp);
      }
    }

    if (groupSelect.options && Array.from(groupSelect.options).some(o => o.value === currentVal)) {
      groupSelect.value = currentVal;
    }
  }

  function getQuestionGroupInfo(q) {
    let groupTitle = `Bài ${q.group}`;
    let linkedSec = null;
    const ch = chaptersList.find(c => c.id === q.chapter);
    if (ch && ch.groups) {
      const grp = ch.groups.find(g => g.id === q.group);
      if (grp) {
        groupTitle = grp.title;
      }
    }
    const secId = getQuestionSectionId(q);
    const sec = theorySections.find(s => s.id === secId);
    if (sec) {
      linkedSec = sec;
    }
    return { groupTitle, linkedSec };
  }

  function renderPracticeQuestion() {
    const container = document.getElementById('practice-card-content');
    if (!container) return;

    if (practiceQueue.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 48px 20px;">
          <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Không tìm thấy câu hỏi phù hợp</h3>
          <p style="color: var(--text-secondary); margin-bottom: 20px;">Hãy thay đổi bộ lọc chương hoặc nhóm bài tập ở thanh bên trên.</p>
          <button class="btn btn-primary" id="btn-reset-filters">Đặt lại bộ lọc</button>
        </div>
      `;
      document.getElementById('btn-reset-filters')?.addEventListener('click', () => {
        document.getElementById('practice-filter-chapter').value = 'all';
        document.getElementById('practice-filter-tag').value = 'all';
        document.getElementById('practice-filter-group').value = 'all';
        initPracticeQueue();
        renderPracticeQuestion();
      });
      return;
    }

    const q = practiceQueue[currentPracticeIndex];
    practiceAnswerSubmitted = false;

    // Counter & Progress
    const counterEl = document.getElementById('practice-question-counter');
    const progressBar = document.getElementById('practice-progress-fill');
    if (counterEl) counterEl.textContent = `Câu ${currentPracticeIndex + 1} / ${practiceQueue.length}`;
    if (progressBar) progressBar.style.width = `${((currentPracticeIndex + 1) / practiceQueue.length) * 100}%`;

    const isBookmarked = appState.bookmarks.includes(q.id);
    const hasNote = Boolean(appState.notes[q.id]);
    const tagBadgeClass = getTagBadgeClass(q.examTag);
    const grpInfo = getQuestionGroupInfo(q);

    let html = `
      <div class="quiz-header-meta">
        <div class="badge-tags">
          <span class="badge badge-chapter">Chương ${q.chapter}</span>
          <span class="badge badge-group" title="${grpInfo.groupTitle}">
            ${grpInfo.groupTitle.length > 32 ? grpInfo.groupTitle.substring(0, 32) + '...' : grpInfo.groupTitle}
          </span>
          <span class="badge ${tagBadgeClass}">${q.examTag}</span>
          <span class="badge" style="background-color: var(--bg-muted); color: var(--text-secondary); cursor: pointer;" id="btn-view-pdf-page">
            📄 Trang ${q.pdfPage} (KTMT_GK.pdf)
          </span>
          ${grpInfo.linkedSec ? `
            <button class="btn btn-outline-primary btn-xs" style="padding: 2px 8px; font-size: 0.76rem; border-radius: 9999px;" onclick="window.KTMT_APP && window.KTMT_APP.jumpToTheory('${grpInfo.linkedSec.id}')" title="Xem lý thuyết mục ${grpInfo.linkedSec.code}: ${grpInfo.linkedSec.title}">
              📖 Xem lý thuyết: Mục ${grpInfo.linkedSec.code}
            </button>
          ` : ''}
        </div>
        <div class="quiz-actions-top">
          <button class="icon-btn ${isBookmarked ? 'active' : ''}" id="btn-toggle-bookmark" title="Đánh dấu câu này">
            ${isBookmarked ? '★' : '☆'}
          </button>
          <button class="icon-btn ${hasNote ? 'active' : ''}" id="btn-open-note" title="Ghi chú cá nhân">
            ✏️
          </button>
        </div>
      </div>

      <div class="quiz-question-text" id="quiz-q-text">
        ${enhanceRegisterTooltips(q.question)}
      </div>
      ${renderQuestionMedia(q)}
    `;

    // Question Body: MCQ vs Fill-in
    if (practiceMode === 'mcq') {
      html += `<div class="options-grid" id="practice-options-grid">`;
      q.options.forEach((opt, idx) => {
        const key = opt.key || ['A', 'B', 'C', 'D'][idx];
        html += `
          <button class="option-btn" data-key="${key}" data-index="${idx}">
            <div class="option-key">${key}</div>
            <div class="option-content">${enhanceRegisterTooltips(opt.text)}</div>
          </button>
        `;
      });
      html += `</div>`;
    } else {
      html += `
        <div class="fill-in-box">
          <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 0.9rem;">
            Chế độ tự điền đáp án (daotao.ai style):
          </label>
          <div class="fill-in-input-wrap">
            <input type="text" class="fill-in-input" id="practice-fill-input" placeholder="Nhập đáp án của bạn (ví dụ: 0x..., 1.25, -42, addi)..." autofocus autocomplete="off" />
            <button class="btn btn-primary" id="btn-submit-fill">Kiểm tra</button>
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
            Nhấn Enter để kiểm tra đáp án. Hệ thống tự động chuẩn hóa chữ hoa/thường và khoảng trắng.
          </div>
        </div>
      `;
    }

    // Explanation Block (hidden by default)
    html += `
      <div class="explanation-container" id="practice-explanation-container">
        <div class="explanation-header" id="practice-explanation-header"></div>
        <div class="explanation-body" id="practice-explanation-body">
          ${enhanceRegisterTooltips(q.explanation)}
        </div>
        <div class="explanation-meta">
          <span>📚 Nguồn: <strong>Trang ${q.pdfPage} trong KTMT_GK.pdf</strong></span>
          <button class="btn btn-secondary btn-sm" id="btn-open-pdf-exp" style="padding: 4px 10px; font-size: 0.8rem;">
            Mở xem trang ${q.pdfPage} 📄
          </button>
        </div>
      </div>

      <div class="quiz-nav-bottom">
        <button class="btn btn-secondary" id="btn-prev-question" ${currentPracticeIndex === 0 ? 'disabled' : ''}>
          ← Câu trước
        </button>
        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
          ${appState.learningContext && appState.learningContext.sectionId ? `
            <button class="btn btn-outline-secondary" id="btn-practice-back-theory" title="Quay lại đọc lý thuyết mục ${appState.learningContext.secCode}">
              📖 Về lý thuyết (${appState.learningContext.secCode})
            </button>
          ` : ''}
          <button class="btn btn-secondary" id="btn-toggle-input-mode">
            ${practiceMode === 'mcq' ? 'Chuyển sang Tự điền ✍️' : 'Chuyển sang Trắc nghiệm 🔘'}
          </button>
          <button class="btn btn-primary" id="btn-next-question">
            ${currentPracticeIndex === practiceQueue.length - 1 ? 'Hoàn thành 🎉' : 'Câu tiếp theo →'}
          </button>
        </div>
      </div>
    `;

    container.innerHTML = html;
    renderMath(container);

    // Event Listeners
    document.getElementById('btn-view-pdf-page')?.addEventListener('click', () => openPdfModal(q.pdfPage));
    document.getElementById('btn-open-pdf-exp')?.addEventListener('click', () => openPdfModal(q.pdfPage));

    document.getElementById('btn-practice-back-theory')?.addEventListener('click', () => {
      if (appState.learningContext && appState.learningContext.sectionId) {
        jumpToTheory(appState.learningContext.sectionId);
      }
    });

    document.getElementById('btn-toggle-bookmark')?.addEventListener('click', () => {
      toggleBookmark(q.id);
      renderPracticeQuestion();
    });

    document.getElementById('btn-open-note')?.addEventListener('click', () => {
      openNoteModal(q.id);
    });

    document.getElementById('btn-toggle-input-mode')?.addEventListener('click', () => {
      practiceMode = practiceMode === 'mcq' ? 'fill' : 'mcq';
      renderPracticeQuestion();
    });

    document.getElementById('btn-prev-question')?.addEventListener('click', () => {
      if (currentPracticeIndex > 0) {
        currentPracticeIndex--;
        renderPracticeQuestion();
      }
    });

    document.getElementById('btn-next-question')?.addEventListener('click', () => {
      if (currentPracticeIndex < practiceQueue.length - 1) {
        currentPracticeIndex++;
        renderPracticeQuestion();
      } else {
        renderPracticeCompletion();
      }
    });

    // Handle MCQ Selection
    if (practiceMode === 'mcq') {
      const optionButtons = container.querySelectorAll('.option-btn');
      optionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          if (practiceAnswerSubmitted) return;
          const selectedKey = btn.getAttribute('data-key');
          submitPracticeAnswer(selectedKey, q);
        });
      });
    } else {
      const inputEl = document.getElementById('practice-fill-input');
      const submitBtn = document.getElementById('btn-submit-fill');
      const handleFillSubmit = () => {
        if (practiceAnswerSubmitted) return;
        const val = inputEl.value.trim();
        if (!val) {
          showToast('Vui lòng nhập câu trả lời của bạn.', 'error');
          return;
        }
        submitPracticeAnswer(val, q);
      };

      submitBtn?.addEventListener('click', handleFillSubmit);
      inputEl?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleFillSubmit();
      });
    }
  }

  function renderPracticeCompletion() {
    const container = document.getElementById('practice-card-content');
    if (!container) return;
    const ctx = appState.learningContext;
    const total = practiceQueue.length;

    let html = `
      <div class="practice-completion-card">
        <div class="practice-completion-icon">🎉</div>
        <h2 class="practice-completion-title">
          Hoàn thành luyện tập!
        </h2>
        <p class="practice-completion-desc">
          Bạn đã hoàn thành toàn bộ <strong>${total} câu hỏi</strong>
          ${ctx ? `thuộc <strong>${ctx.sourceType === 'section' ? `Mục ${ctx.secCode}: ${ctx.secTitle}` : ctx.groupTitle}</strong>.` : 'trong danh sách lựa chọn.'}
        </p>

        <div class="practice-completion-actions">
          ${ctx && ctx.sectionId ? `
            <button class="btn btn-primary" id="btn-practice-finish-theory">
              📖 Quay lại học tiếp Mục ${ctx.secCode}
            </button>
          ` : ''}
          ${ctx && ctx.nextSectionId ? `
            <button class="btn btn-secondary" id="btn-practice-finish-next">
              Học tiếp: Mục ${ctx.nextSecCode} ➡️
            </button>
          ` : ''}
          <button class="btn btn-outline-primary" id="btn-practice-finish-restart">
            Luyện tập lại từ đầu 🔄
          </button>
        </div>
      </div>
    `;

    container.innerHTML = html;
    triggerConfetti();

    document.getElementById('btn-practice-finish-theory')?.addEventListener('click', () => {
      if (ctx && ctx.sectionId) jumpToTheory(ctx.sectionId);
    });
    document.getElementById('btn-practice-finish-next')?.addEventListener('click', () => {
      if (ctx && ctx.nextSectionId) jumpToTheory(ctx.nextSectionId);
    });
    document.getElementById('btn-practice-finish-restart')?.addEventListener('click', () => {
      currentPracticeIndex = 0;
      renderPracticeQuestion();
    });
  }

  function submitPracticeAnswer(answer, q) {
    practiceAnswerSubmitted = true;
    let isCorrect = false;

    if (practiceMode === 'mcq') {
      isCorrect = (answer === q.correctAnswer);
      const optionButtons = document.querySelectorAll('.option-btn');
      optionButtons.forEach(btn => {
        btn.classList.add('disabled');
        const key = btn.getAttribute('data-key');
        if (key === q.correctAnswer) {
          btn.classList.add('correct');
        } else if (key === answer && !isCorrect) {
          btn.classList.add('incorrect');
        }
      });
    } else {
      const normalizedUser = answer.toLowerCase().replace(/\s+/g, '');
      const accepted = (q.acceptedAnswers || [q.correctAnswer]).map(a => String(a).toLowerCase().replace(/\s+/g, ''));
      isCorrect = accepted.includes(normalizedUser);

      const inputEl = document.getElementById('practice-fill-input');
      if (inputEl) {
        inputEl.disabled = true;
        inputEl.style.borderColor = isCorrect ? 'var(--success)' : 'var(--error)';
        inputEl.style.backgroundColor = isCorrect ? 'var(--success-light)' : 'var(--error-light)';
      }
    }

    appState.history[q.id] = {
      answered: true,
      isCorrect: isCorrect,
      lastAnswer: answer,
      timestamp: Date.now()
    };

    if (!isCorrect) {
      if (!appState.mistakes.includes(q.id)) {
        appState.mistakes.push(q.id);
      }
    } else {
      triggerConfetti();
    }
    saveState();

    // Show Explanation
    const expContainer = document.getElementById('practice-explanation-container');
    const expHeader = document.getElementById('practice-explanation-header');
    if (expContainer && expHeader) {
      const correctOptText = (q.options && q.options[q.correctIndex]) ? q.options[q.correctIndex].text : '';
      const ansDisplay = correctOptText ? `${q.correctAnswer}: ${correctOptText}` : q.correctAnswer;
      expHeader.className = `explanation-header ${isCorrect ? 'correct' : 'incorrect'}`;
      expHeader.innerHTML = isCorrect 
        ? `<span>🎉 Chính xác! Đáp án đúng là <strong>${ansDisplay}</strong></span>` 
        : `<span>❌ Chưa chính xác! Đáp án đúng là <strong>${ansDisplay}</strong></span>`;
      expContainer.style.display = 'block';
      renderMath(expContainer);
    }
  }

  function toggleBookmark(qid) {
    const idx = appState.bookmarks.indexOf(qid);
    if (idx >= 0) {
      appState.bookmarks.splice(idx, 1);
      showToast('Đã bỏ đánh dấu câu hỏi.');
    } else {
      appState.bookmarks.push(qid);
      showToast('Đã lưu câu hỏi vào danh sách đánh dấu! ⭐', 'success');
    }
    saveState();
  }

  function triggerConfetti() {
    if (window.confetti) {
      window.confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  }

  // ==========================================
  // EXAM MODE ENGINE
  // ==========================================
  function sampleBalancedByChapters(basePool, totalCount) {
    const chosen = [];
    const chosenIds = new Set();
    const quotas = [1, 2, 3, 4].map((ch, idx) => {
      const perCh = Math.floor(totalCount / 4) + (idx < (totalCount % 4) ? 1 : 0);
      return { ch, target: perCh };
    });

    quotas.forEach(({ ch, target }) => {
      const chItems = shuffleArray(basePool.filter(q => q.chapter === ch));
      chItems.slice(0, target).forEach(q => {
        chosen.push(q);
        chosenIds.add(q.id);
      });
    });

    if (chosen.length < totalCount) {
      shuffleArray(basePool).forEach(q => {
        if (chosen.length < totalCount && !chosenIds.has(q.id)) {
          chosen.push(q);
          chosenIds.add(q.id);
        }
      });
    }
    return chosen.slice(0, totalCount);
  }

  function startExam(presetType, customConfig = {}) {
    if (['gk', 'ck', 'de0012', 'de0013', 'custom'].includes(presetType)) {
      appState.learningContext = null;
    }

    let pool = allQuestions.slice();
    let durationMins = 30;
    let questionCount = 25;
    let examTitle = 'Phòng Thi Thử KTMT';
    let preserveOrder = false;

    if (presetType === 'gk') {
      const gkPool = pool.filter(q => q.examTag === 'GK' || (Array.isArray(q.examTags) && q.examTags.includes('GK')));
      pool = gkPool.length >= 20 ? gkPool : pool;
      durationMins = 45;
      questionCount = Math.min(35, pool.length);
      examTitle = `Đề thi Giữa kỳ KTMT chuẩn KTMT_GK.pdf (4 chương - ${questionCount} câu)`;
      examQuestions = sampleBalancedByChapters(pool, questionCount);
      preserveOrder = true; // already balanced-sampled across 4 chapters
    } else if (presetType === 'ck') {
      durationMins = 50;
      questionCount = Math.min(40, pool.length);
      examTitle = `Đề thi Cuối kỳ KTMT (Toàn diện 4 chương - ${questionCount} câu)`;
      examQuestions = sampleBalancedByChapters(pool, questionCount);
      preserveOrder = true;
    } else if (presetType === 'de0012') {
      const rx = /0012/i;
      pool = pool.filter(q => rx.test(q.source || ''));
      questionCount = pool.length;
      durationMins = Math.max(15, Math.ceil(questionCount * 1.5));
      examTitle = `Đề thi mẫu 0012 — KTMT_GK.pdf (${questionCount} câu)`;
      preserveOrder = true;
    } else if (presetType === 'de0013') {
      const rx = /0013/i;
      pool = pool.filter(q => rx.test(q.source || ''));
      questionCount = pool.length;
      durationMins = Math.max(20, Math.ceil(questionCount * 1.5));
      examTitle = `Đề thi mẫu 0013 (Bản 1 & Bản 2) — KTMT_GK.pdf (${questionCount} câu)`;
      preserveOrder = true;
    } else if (presetType === 'section' || presetType === 'group') {
      pool = (customConfig.questions || []).slice();
      questionCount = pool.length;
      durationMins = customConfig.time || Math.max(12, Math.ceil(questionCount * 1.5));
      examTitle = customConfig.title || 'Bài kiểm tra theo chuyên đề';
      preserveOrder = true;
    } else if (presetType === 'custom') {
      if (customConfig.chapters && customConfig.chapters.length > 0) {
        pool = pool.filter(q => customConfig.chapters.includes(q.chapter));
      }
      durationMins = customConfig.time || 30;
      questionCount = Math.min(customConfig.count || 25, pool.length);
      examTitle = customConfig.title || 'Bài thi tùy chỉnh';
    }

    if (pool.length === 0) {
      showToast('Không tìm thấy câu hỏi phù hợp cho bộ đề này!', 'error');
      return;
    }

    if (presetType !== 'gk' && presetType !== 'ck') {
      examQuestions = preserveOrder ? pool.slice(0, questionCount) : shuffleArray(pool).slice(0, questionCount);
    }
    examAnswers = {};
    examFlags = {};
    currentExamIndex = 0;
    examTotalTime = durationMins * 60;
    examTimeRemaining = examTotalTime;

    const titleEl = document.getElementById('exam-active-title');
    if (titleEl) {
      titleEl.innerHTML = `<span>⏱️</span> <span>${examTitle}</span>`;
    }

    document.getElementById('exam-setup-view').style.display = 'none';
    document.getElementById('exam-active-view').style.display = 'block';
    document.getElementById('exam-result-view').style.display = 'none';

    renderExamQuestion();
    renderExamPalette();

    if (examTimerInterval) clearInterval(examTimerInterval);
    examTimerInterval = setInterval(() => {
      examTimeRemaining--;
      updateExamTimerDisplay();
      if (examTimeRemaining <= 0) {
        clearInterval(examTimerInterval);
        submitExam();
        showToast('Hết giờ làm bài!', 'error');
      }
    }, 1000);
    updateExamTimerDisplay();
  }

  function updateExamTimerDisplay() {
    const timerEl = document.getElementById('exam-timer-text');
    if (!timerEl) return;
    const mins = Math.floor(examTimeRemaining / 60);
    const secs = examTimeRemaining % 60;
    timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (examTimeRemaining < 300) {
      timerEl.classList.add('danger');
    } else {
      timerEl.classList.remove('danger');
    }
  }

  function renderExamPalette() {
    const paletteEl = document.getElementById('exam-palette-grid');
    if (!paletteEl) return;
    paletteEl.innerHTML = '';

    examQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      if (idx === currentExamIndex) btn.classList.add('active');
      if (examAnswers[idx] !== undefined) btn.classList.add('answered');
      if (examFlags[idx]) btn.classList.add('flagged');
      btn.textContent = idx + 1;
      btn.addEventListener('click', () => {
        currentExamIndex = idx;
        renderExamQuestion();
        renderExamPalette();
      });
      paletteEl.appendChild(btn);
    });
  }

  function renderExamQuestion() {
    const container = document.getElementById('exam-question-card');
    if (!container) return;
    const q = examQuestions[currentExamIndex];
    const isFlagged = examFlags[currentExamIndex];
    const selectedAnswer = examAnswers[currentExamIndex];
    const grpInfo = getQuestionGroupInfo(q);

    let html = `
      <div class="quiz-header-meta">
        <div class="badge-tags">
          <span class="badge badge-chapter">Chương ${q.chapter}</span>
          <span class="badge badge-group" title="${grpInfo.groupTitle}">
            ${grpInfo.groupTitle.length > 35 ? grpInfo.groupTitle.substring(0, 35) + '...' : grpInfo.groupTitle}
          </span>
          <span class="badge">${q.examTag}</span>
        </div>
        <button class="icon-btn ${isFlagged ? 'active' : ''}" id="btn-exam-flag">
          ${isFlagged ? '★ Đã đánh dấu' : '☆ Đánh dấu xem lại'}
        </button>
      </div>

      <div class="quiz-question-text">
        <strong>Câu ${currentExamIndex + 1}:</strong> ${enhanceRegisterTooltips(q.question)}
      </div>
      ${renderQuestionMedia(q)}

      <div class="options-grid">
    `;

    q.options.forEach((opt, idx) => {
      const key = opt.key || ['A', 'B', 'C', 'D'][idx];
      const isSelected = selectedAnswer === key;
      html += `
        <button class="option-btn ${isSelected ? 'correct' : ''}" data-key="${key}">
          <div class="option-key">${key}</div>
          <div class="option-content">${enhanceRegisterTooltips(opt.text)}</div>
        </button>
      `;
    });

    html += `
      </div>
      <div class="quiz-nav-bottom">
        <button class="btn btn-secondary" id="btn-exam-prev" ${currentExamIndex === 0 ? 'disabled' : ''}>← Câu trước</button>
        <button class="btn btn-primary" id="btn-exam-next">
          ${currentExamIndex === examQuestions.length - 1 ? 'Nộp bài 🏁' : 'Câu tiếp theo →'}
        </button>
      </div>
    `;

    container.innerHTML = html;
    renderMath(container);

    document.getElementById('btn-exam-flag')?.addEventListener('click', () => {
      examFlags[currentExamIndex] = !examFlags[currentExamIndex];
      renderExamQuestion();
      renderExamPalette();
    });

    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-key');
        examAnswers[currentExamIndex] = key;
        renderExamQuestion();
        renderExamPalette();
      });
    });

    document.getElementById('btn-exam-prev')?.addEventListener('click', () => {
      if (currentExamIndex > 0) {
        currentExamIndex--;
        renderExamQuestion();
        renderExamPalette();
      }
    });

    document.getElementById('btn-exam-next')?.addEventListener('click', () => {
      if (currentExamIndex < examQuestions.length - 1) {
        currentExamIndex++;
        renderExamQuestion();
        renderExamPalette();
      } else {
        confirmSubmitExam();
      }
    });
  }

  function confirmSubmitExam() {
    const answeredCount = Object.keys(examAnswers).length;
    const totalCount = examQuestions.length;
    const unanswered = totalCount - answeredCount;

    let confirmMsg = `Bạn đã hoàn thành ${answeredCount}/${totalCount} câu hỏi.`;
    if (unanswered > 0) {
      confirmMsg += ` Vẫn còn ${unanswered} câu chưa điền đáp án! Bạn có chắc chắn muốn nộp bài?`;
    } else {
      confirmMsg += ' Bạn có chắc chắn muốn nộp bài thi?';
    }

    if (confirm(confirmMsg)) {
      submitExam();
    }
  }

  function buildExamWeaknessHtml(questions, answers) {
    const groupMap = {};
    questions.forEach((q, idx) => {
      const gid = q.groupId || q.group || `ch${q.chapter}`;
      const info = getQuestionGroupInfo(q);
      if (!groupMap[gid]) {
        groupMap[gid] = {
          groupId: gid,
          title: info.groupTitle || gid,
          secId: info.linkedSec ? info.linkedSec.id : null,
          secCode: info.linkedSec ? info.linkedSec.code : null,
          total: 0,
          correct: 0
        };
      }
      groupMap[gid].total++;
      if (answers[idx] === q.correctAnswer) groupMap[gid].correct++;
    });

    const rows = Object.values(groupMap).map(r => ({
      ...r,
      pct: Math.round((r.correct / r.total) * 100)
    })).sort((a, b) => a.pct - b.pct);

    if (rows.length <= 1) return '';

    return `
      <div style="margin-bottom: 24px; text-align: left;">
        <h3 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 10px;">Phân tích điểm yếu theo nhóm bài tập (${rows.length} nhóm)</h3>
        <div class="exam-weakness-grid">
          ${rows.map(r => `
            <div class="exam-weakness-card ${r.pct < 70 ? 'weak' : ''}">
              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <span class="group-id-badge">${escapeHtml(r.groupId)}</span>
                <strong style="font-size:0.86rem; color:${r.pct < 70 ? 'var(--warning-text)' : 'var(--success-text)'};">
                  ${r.correct}/${r.total} (${r.pct}%)${r.pct < 70 ? ' — Cần ôn lại' : ''}
                </strong>
              </div>
              <div style="font-size:0.86rem; font-weight:600; color:var(--text-main);">${escapeHtml(r.title)}</div>
              <div class="inline-actions">
                ${r.secId ? `<button type="button" class="btn btn-outline-secondary btn-xs" data-weak-sec="${r.secId}">Lý thuyết ${r.secCode || ''}</button>` : ''}
                <button type="button" class="btn btn-secondary btn-xs" data-weak-grp="${escapeHtml(r.groupId)}">Luyện nhóm này</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function submitExam() {
    if (examTimerInterval) clearInterval(examTimerInterval);

    let correctCount = 0;
    const wrongQuestions = [];

    examQuestions.forEach((q, idx) => {
      const userAns = examAnswers[idx];
      const isCorrect = userAns === q.correctAnswer;
      if (isCorrect) {
        correctCount++;
      } else {
        wrongQuestions.push({ question: q, userAns: userAns });
        if (!appState.mistakes.includes(q.id)) {
          appState.mistakes.push(q.id);
        }
      }
      appState.history[q.id] = {
        answered: true,
        isCorrect: isCorrect,
        lastAnswer: userAns || 'Chưa trả lời',
        timestamp: Date.now()
      };
    });

    saveState();

    document.getElementById('exam-active-view').style.display = 'none';
    const resultView = document.getElementById('exam-result-view');
    resultView.style.display = 'block';

    const score = ((correctCount / examQuestions.length) * 10).toFixed(1);
    const timeSpent = examTotalTime - examTimeRemaining;
    const minsSpent = Math.floor(timeSpent / 60);
    const secsSpent = timeSpent % 60;

    const ctx = appState.learningContext;
    let learningBannerHtml = '';
    if (ctx) {
      const isSec = ctx.sourceType === 'section';
      const label = isSec ? `Mục ${ctx.secCode}: ${ctx.secTitle}` : ctx.groupTitle;
      learningBannerHtml = `
        <div class="learning-return-banner">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
            <div>
              <div class="banner-sub">🎯 Lộ trình học lý thuyết & thực hành</div>
              <div class="banner-title">Đã làm xong bài kiểm tra: <strong>${label}</strong></div>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${ctx.sectionId ? `
                <button class="btn btn-primary" id="btn-exam-return-sec" style="font-weight: 600;">
                  📖 Quay lại học tiếp Mục ${ctx.secCode || ''}
                </button>
              ` : `
                <button class="btn btn-primary" id="btn-exam-return-grp" style="font-weight: 600;">
                  📖 Quay lại nhóm bài tập ${ctx.groupId || ''}
                </button>
              `}
              ${ctx.nextSectionId ? `
                <button class="btn btn-secondary" id="btn-exam-next-sec" style="font-weight: 600;">
                  Học tiếp: Mục ${ctx.nextSecCode} ➡️
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }

    let html = `
      ${learningBannerHtml}
      <div style="text-align: center; margin-bottom: 28px;">
        <div style="font-size: 3rem; margin-bottom: 8px;">${score >= 8.0 ? '🏆' : score >= 5.0 ? '👏' : '💪'}</div>
        <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 6px;">Điểm số của bạn: ${score} / 10</h2>
        <p style="color: var(--text-secondary);">
          Đúng <strong>${correctCount}/${examQuestions.length}</strong> câu • Thời gian làm bài: <strong>${minsSpent} phút ${secsSpent} giây</strong>
        </p>
      </div>

      <div style="display: flex; gap: 12px; justify-content: center; margin-bottom: 24px;">
        <button class="btn btn-primary" id="btn-exam-retry">Làm đề khác 🔄</button>
        <button class="btn btn-secondary" id="btn-view-mistakes-tab">Vào Sổ tay câu sai 📖</button>
      </div>

      ${buildExamWeaknessHtml(examQuestions, examAnswers)}

      <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 16px;">Chi tiết bài làm:</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
    `;

    examQuestions.forEach((q, idx) => {
      const userAns = examAnswers[idx];
      const isCorrect = userAns === q.correctAnswer;
      const userOpt = (userAns && q.options) ? q.options.find(o => o.key === userAns) : null;
      const userDisplay = userAns ? `${userAns}${userOpt && userOpt.text ? '. ' + userOpt.text : ''}` : '(Chưa điền)';
      const correctOpt = (q.options && q.options[q.correctIndex]) ? q.options[q.correctIndex].text : '';
      const correctDisplay = `${q.correctAnswer}${correctOpt ? '. ' + correctOpt : ''}`;
      html += `
        <div style="background-color: var(--bg-surface); border: 1px solid ${isCorrect ? 'var(--success-border)' : 'var(--error-border)'}; border-radius: var(--radius-md); padding: 18px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-weight: 700;">Câu ${idx + 1} (${q.group})</span>
            <span style="font-weight: 700; color: ${isCorrect ? 'var(--success)' : 'var(--error)'};">
              ${isCorrect ? '✓ Đúng' : '✗ Sai'}
            </span>
          </div>
          <div style="margin-bottom: 8px;">${enhanceRegisterTooltips(q.question)}</div>
          <div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 6px;">
            Đáp án của bạn: <strong>${userDisplay}</strong> | Đáp án đúng: <strong style="color: var(--success);">${correctDisplay}</strong>
          </div>
          <div style="font-size: 0.85rem; background-color: var(--bg-muted); padding: 10px; border-radius: 6px; margin-top: 8px;">
            <strong>Giải thích:</strong> ${enhanceRegisterTooltips(q.explanation)}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    resultView.innerHTML = html;
    renderMath(resultView);

    if (score >= 8.0) triggerConfetti();

    document.getElementById('btn-exam-return-sec')?.addEventListener('click', () => {
      if (ctx && ctx.sectionId) jumpToTheory(ctx.sectionId);
    });

    document.getElementById('btn-exam-return-grp')?.addEventListener('click', () => {
      if (ctx && ctx.groupId) jumpToGroup(ctx.groupId);
    });

    document.getElementById('btn-exam-next-sec')?.addEventListener('click', () => {
      if (ctx && ctx.nextSectionId) jumpToTheory(ctx.nextSectionId);
    });

    document.getElementById('btn-exam-retry')?.addEventListener('click', () => {
      document.getElementById('exam-setup-view').style.display = 'block';
      document.getElementById('exam-active-view').style.display = 'none';
      document.getElementById('exam-result-view').style.display = 'none';
    });

    document.getElementById('btn-view-mistakes-tab')?.addEventListener('click', () => {
      switchTab('mistakes');
    });

    resultView.querySelectorAll('[data-weak-sec]').forEach(btn => {
      btn.addEventListener('click', () => jumpToTheory(btn.getAttribute('data-weak-sec')));
    });
    resultView.querySelectorAll('[data-weak-grp]').forEach(btn => {
      btn.addEventListener('click', () => startGroupTest(btn.getAttribute('data-weak-grp'), 'practice'));
    });
  }

  // ==========================================
  // FLASHCARDS ENGINE
  // ==========================================
  function initFlashcards() {
    const chSelect = document.getElementById('flashcard-filter-chapter');
    const chVal = chSelect ? chSelect.value : 'all';

    let cards = allQuestions.slice();
    if (chVal !== 'all') {
      cards = cards.filter(q => q.chapter === parseInt(chVal));
    }

    flashcardQueue = cards;
    currentFlashcardIndex = 0;
    isCardFlipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    const cardContainer = document.getElementById('flashcard-card-box');
    if (!cardContainer || flashcardQueue.length === 0) return;

    const q = flashcardQueue[currentFlashcardIndex];
    isCardFlipped = false;

    const counterEl = document.getElementById('flashcard-counter');
    if (counterEl) counterEl.textContent = `Thẻ ${currentFlashcardIndex + 1} / ${flashcardQueue.length}`;

    const flashCorrectOpt = (q.options && q.options[q.correctIndex]) ? q.options[q.correctIndex].text : '';
    const flashAnsDisplay = flashCorrectOpt ? `${q.correctAnswer}. ${flashCorrectOpt}` : q.correctAnswer;
    cardContainer.innerHTML = `
      <div class="flashcard-inner" id="flashcard-inner-box">
        <div class="flashcard-front">
          <div class="flashcard-type">Chương ${q.chapter} • ${q.exerciseCode || ('Bài ' + q.group)} • ${q.examTag}</div>
          <div class="flashcard-main-text">${enhanceRegisterTooltips(q.question)}</div>
          ${renderQuestionMedia(q)}
          <div class="flashcard-hint">💡 Nhấn vào thẻ hoặc phím Space để lật xem đáp án & giải thích</div>
        </div>
        <div class="flashcard-back">
          <div class="flashcard-type" style="color: var(--success);">Đáp án đúng: ${flashAnsDisplay}</div>
          <div style="font-size: 0.95rem; line-height: 1.6; overflow-y: auto; max-height: 250px;">
            ${enhanceRegisterTooltips(q.explanation)}
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); text-align: center;">Trang ${q.pdfPage} (KTMT_GK.pdf)</div>
        </div>
      </div>
    `;

    renderMath(cardContainer);

    const innerBox = document.getElementById('flashcard-inner-box');
    innerBox?.addEventListener('click', () => {
      isCardFlipped = !isCardFlipped;
      innerBox.classList.toggle('flipped', isCardFlipped);
    });
  }

  // ==========================================
  // SỔ TAY CÂU SAI (MISTAKES NOTEBOOK)
  // ==========================================
  function renderMistakesList() {
    const container = document.getElementById('mistakes-container');
    if (!container) return;

    const mistakeQues = allQuestions.filter(q => appState.mistakes.includes(q.id));

    if (mistakeQues.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <div style="font-size: 3rem; margin-bottom: 12px;">🎉</div>
          <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">Tuyệt vời! Bạn không có câu sai nào</h3>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 20px auto;">
            Mỗi khi làm bài tập hoặc thi thử có câu trả lời sai, câu đó sẽ tự động được thêm vào đây để bạn dễ dàng ôn luyện lại.
          </p>
          <button class="btn btn-primary" id="btn-goto-practice">Luyện tập thêm ngay</button>
        </div>
      `;
      document.getElementById('btn-goto-practice')?.addEventListener('click', () => switchTab('practice'));
      return;
    }

    let html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
        <div>
          <h2 style="font-size: 1.4rem; font-weight: 700;">Sổ tay câu sai (${mistakeQues.length} câu)</h2>
          <p style="font-size: 0.88rem; color: var(--text-secondary);">Tập trung giải quyết các điểm yếu kiến trúc máy tính của bạn</p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn btn-primary" id="btn-practice-all-mistakes">Luyện tập lại các câu sai 🎯</button>
          <button class="btn btn-secondary" id="btn-clear-mistakes">Xóa toàn bộ câu sai 🗑️</button>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px;">
    `;

    mistakeQues.forEach((q, idx) => {
      html += `
        <div class="quiz-card" style="margin-bottom: 0;">
          <div class="quiz-header-meta">
            <div class="badge-tags">
              <span class="badge badge-chapter">Chương ${q.chapter}</span>
              <span class="badge badge-group">Bài ${q.group}</span>
              <span class="badge badge-tag-ck">${q.examTag}</span>
              <span class="badge" style="background-color: var(--bg-muted); color: var(--text-secondary);">Trang ${q.pdfPage}</span>
            </div>
            <button class="btn btn-secondary btn-sm" data-remove-id="${q.id}" style="padding: 4px 10px; font-size: 0.8rem;">
              Đã thành thạo (Xóa khỏi danh sách) ✓
            </button>
          </div>
          <div style="font-weight: 600; font-size: 1.05rem; margin-bottom: 12px;">
            ${enhanceRegisterTooltips(q.question)}
          </div>
          <div style="background-color: var(--bg-muted); padding: 12px 16px; border-radius: var(--radius-sm); font-size: 0.9rem;">
            <div style="color: var(--success); font-weight: 700; margin-bottom: 6px;">Đáp án đúng: ${q.correctAnswer}${q.options && q.options[q.correctIndex] ? '. ' + q.options[q.correctIndex].text : ''}</div>
            <div style="color: var(--text-secondary);">${enhanceRegisterTooltips(q.explanation)}</div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
    renderMath(container);

    container.querySelectorAll('[data-remove-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-remove-id');
        const idx = appState.mistakes.indexOf(id);
        if (idx >= 0) {
          appState.mistakes.splice(idx, 1);
          saveState();
          renderMistakesList();
          renderDashboard();
          showToast('Đã xóa câu hỏi khỏi Sổ tay câu sai! 👍', 'success');
        }
      });
    });

    document.getElementById('btn-clear-mistakes')?.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn xóa toàn bộ danh sách câu sai?')) {
        appState.mistakes = [];
        saveState();
        renderMistakesList();
        renderDashboard();
        showToast('Đã làm trống sổ tay câu sai.');
      }
    });

    document.getElementById('btn-practice-all-mistakes')?.addEventListener('click', () => {
      practiceQueue = mistakeQues.slice();
      currentPracticeIndex = 0;
      switchTab('practice');
    });
  }

  // ==========================================
  // THỐNG KÊ & DỮ LIỆU
  // ==========================================
  function renderStats() {
    const statsContainer = document.getElementById('stats-view-content');
    if (!statsContainer) return;

    const totalQ = allQuestions.length;
    const answeredEntries = Object.entries(appState.history);
    const totalAnswered = answeredEntries.length;
    const correctCount = answeredEntries.filter(([_, h]) => h.isCorrect).length;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    let html = `
      <div class="stats-grid" style="margin-bottom: 32px;">
        <div class="stat-card">
          <div class="stat-icon blue">📊</div>
          <div class="stat-info">
            <div class="stat-value">${totalAnswered} / ${totalQ}</div>
            <div class="stat-label">Số câu đã làm</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon green">🎯</div>
          <div class="stat-info">
            <div class="stat-value">${accuracy}%</div>
            <div class="stat-label">Độ chính xác trung bình</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon purple">⭐</div>
          <div class="stat-info">
            <div class="stat-value">${appState.bookmarks.length}</div>
            <div class="stat-label">Câu đã đánh dấu</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon red">⚠️</div>
          <div class="stat-info">
            <div class="stat-value">${appState.mistakes.length}</div>
            <div class="stat-label">Câu cần ôn lại</div>
          </div>
        </div>
      </div>

      <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 16px;">Tiến độ theo chương</h3>
      <div style="background-color: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 24px; margin-bottom: 32px;">
    `;

    [1, 2, 3, 4].forEach(chNum => {
      const chQuestions = allQuestions.filter(q => q.chapter === chNum);
      const chCorrect = chQuestions.filter(q => appState.history[q.id] && appState.history[q.id].isCorrect);
      const pct = chQuestions.length > 0 ? Math.round((chCorrect.length / chQuestions.length) * 100) : 0;
      const chTitle = chaptersList.find(c => c.id === chNum)?.title || `Chương ${chNum}`;

      html += `
        <div style="margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 0.95rem; margin-bottom: 6px;">
            <span>Chương ${chNum}: ${chTitle}</span>
            <span>${chCorrect.length} / ${chQuestions.length} câu (${pct}%)</span>
          </div>
          <div class="chapter-progress-bar" style="height: 10px;">
            <div class="chapter-progress-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
    });

    html += `
      </div>

      <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 16px;">Sao lưu & Phục hồi dữ liệu học tập</h3>
      <div style="background-color: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 24px;">
        <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.92rem;">
          Toàn bộ lịch sử làm bài, danh sách câu sai, dấu trang và ghi chú được lưu an toàn trong trình duyệt của bạn. Bạn có thể xuất ra file JSON để đồng bộ sang máy khác hoặc dự phòng.
        </p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button class="btn btn-primary" id="btn-export-json">Xuất dữ liệu (.json) 💾</button>
          <label class="btn btn-secondary" style="cursor: pointer; margin-bottom: 0;">
            Nhập dữ liệu từ file 📥
            <input type="file" id="input-import-json" accept=".json" style="display: none;" />
          </label>
          <button class="btn btn-secondary" id="btn-reset-all-data" style="color: var(--error);">
            Xóa toàn bộ dữ liệu ⚠️
          </button>
        </div>
      </div>
    `;

    statsContainer.innerHTML = html;

    // JSON Export
    document.getElementById('btn-export-json')?.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(appState, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ktmt-learning-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Đã tải xuống file sao lưu!');
    });

    // JSON Import
    document.getElementById('input-import-json')?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          Object.assign(appState, imported);
          saveState();
          showToast('Nhập dữ liệu thành công! Đang tải lại...', 'success');
          setTimeout(() => location.reload(), 1000);
        } catch (err) {
          showToast('File JSON không hợp lệ!', 'error');
        }
      };
      reader.readAsText(file);
    });

    // Reset Data
    document.getElementById('btn-reset-all-data')?.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn xóa TOÀN BỘ dữ liệu học tập? Thao tác này không thể hoàn tác!')) {
        localStorage.removeItem(STORAGE_KEY);
        showToast('Đã xóa dữ liệu. Đang tải lại...');
        setTimeout(() => location.reload(), 1000);
      }
    });
  }

  // ==========================================
  // MODALS & NOTES
  // ==========================================
  function openPdfModal(page = 1) {
    const modal = document.getElementById('modal-pdf');
    const iframe = document.getElementById('pdf-modal-iframe');
    const titleEl = document.getElementById('pdf-modal-title');
    const openNewTabLink = document.getElementById('pdf-open-new-tab-btn');
    if (!modal || !iframe) return;

    iframe.src = `KTMT_GK.pdf#page=${page}&view=FitH`;
    if (titleEl) {
      titleEl.textContent = `Giáo trình KTMT_GK.pdf — Trang ${page}`;
    }
    if (openNewTabLink) {
      openNewTabLink.href = `KTMT_GK.pdf#page=${page}`;
    }
    modal.classList.add('open');
  }

  function openNoteModal(qid) {
    const modal = document.getElementById('modal-note');
    const noteTextarea = document.getElementById('note-modal-textarea');
    const saveBtn = document.getElementById('note-modal-save-btn');
    if (!modal || !noteTextarea) return;

    noteTextarea.value = appState.notes[qid] || '';
    modal.classList.add('open');

    saveBtn.onclick = () => {
      const text = noteTextarea.value.trim();
      if (text) {
        appState.notes[qid] = text;
      } else {
        delete appState.notes[qid];
      }
      saveState();
      modal.classList.remove('open');
      showToast('Đã lưu ghi chú!', 'success');
      renderPracticeQuestion();
    };
  }

  // ==========================================
  // INTERACTIVE TOOLS TAB CONTROLLER
  // ==========================================
  function initTools() {
    // Tool Tab Navigation
    document.querySelectorAll('.tool-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTool = btn.getAttribute('data-tool');
        document.querySelectorAll('.tool-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(`tool-panel-${targetTool}`)?.classList.add('active');
      });
    });

    // Tool 1: CPU Performance Calculator (Full Ch.1 + Optional Cache Miss)
    const getNumVal = (id, fallback) => {
      const el = document.getElementById(id);
      if (!el) return fallback;
      const v = parseFloat(el.value);
      return isNaN(v) ? fallback : v;
    };

    const calcPerf = () => {
      const f0 = getNumVal('calc-f0', 2.0);
      const fUnit = document.getElementById('calc-f-unit')?.value || 'GHz';
      const ic = getNumVal('calc-ic', 1000000);
      const cpi = getNumVal('calc-cpi', 1.5);
      const fpOps = getNumVal('calc-fp-ops', 0);

      const pMissI = getNumVal('calc-miss-i', 0.02);
      const pMem = getNumVal('calc-pmem', 0.3);
      const pMissD = getNumVal('calc-miss-d', 0.05);
      const penalty = getNumVal('calc-penalty', 50);

      if (window.KTMT_TOOLS && window.KTMT_TOOLS.calcPerformance) {
        const perf = window.KTMT_TOOLS.calcPerformance({
          fVal: f0,
          fUnit: fUnit,
          icVal: ic,
          icUnit: 'raw',
          cpiVal: cpi,
          mode: 'from_cpi',
          fpOps: fpOps
        });
        const eff = window.KTMT_TOOLS.calcEffectiveCPI(cpi, penalty, pMissI * 100, pMissD * 100, pMem * 100);

        const elT0 = document.getElementById('perf-res-t0');
        const elCycles = document.getElementById('perf-res-cycles');
        const elTcpu = document.getElementById('perf-res-tcpu');
        const elMips = document.getElementById('perf-res-mips');
        const elMflops = document.getElementById('perf-res-mflops');
        const elEff = document.getElementById('perf-res-eff-cpi');

        if (elT0) elT0.textContent = perf.T0_ns ? `${perf.T0_ns.toFixed(4)} ns` : '--';
        if (elCycles) elCycles.textContent = perf.n_cycles ? `${Math.round(perf.n_cycles).toLocaleString('en-US')} chu kỳ` : '--';
        if (elTcpu) elTcpu.textContent = perf.t_CPU_sec ? `${perf.t_CPU_sec.toFixed(6)} s (${perf.t_CPU_ms.toFixed(3)} ms)` : '--';
        if (elMips) elMips.textContent = perf.MIPS ? `${perf.MIPS.toFixed(2)} MIPS` : '--';
        if (elMflops) elMflops.textContent = perf.MFLOPS ? `${perf.MFLOPS.toFixed(2)} MFLOPS` : '--';
        if (elEff) elEff.textContent = eff.effectiveCPI ? eff.effectiveCPI.toFixed(3) : '--';
      }
    };

    const calcWeightedCpiUi = () => {
      if (!window.KTMT_TOOLS || !window.KTMT_TOOLS.calcWeightedCPI) return 0;
      const mode = document.getElementById('calc-cpi-weight-mode')?.value || 'pct';
      const classes = [1, 2, 3].map(i => ({
        weight: getNumVal(`cpi-w${i}`, 0),
        cpi: getNumVal(`cpi-c${i}`, 0)
      }));
      const res = window.KTMT_TOOLS.calcWeightedCPI(classes, mode === 'pct');
      const outEl = document.getElementById('perf-res-cpitb');
      if (outEl) {
        outEl.textContent = res.cpiTB > 0
          ? `${res.cpiTB.toFixed(3)} (Tổng trọng số: ${res.totalWeight})`
          : '--';
      }
      return res.cpiTB;
    };

    const calcCompareUi = () => {
      if (!window.KTMT_TOOLS || !window.KTMT_TOOLS.comparePerformance) return;
      const res = window.KTMT_TOOLS.comparePerformance(
        { tCPU: getNumVal('cmp-ta', 0), fVal: getNumVal('cmp-fa', 0), fUnit: 'GHz', cpi: getNumVal('cmp-cpia', 0) },
        { tCPU: getNumVal('cmp-tb', 0), fVal: getNumVal('cmp-fb', 0), fUnit: 'GHz', cpi: getNumVal('cmp-cpib', 0) }
      );
      const outEl = document.getElementById('cmp-perf-result');
      if (!outEl) return;
      if (res.tA <= 0 || res.tB <= 0) {
        outEl.textContent = 'Nhập đủ t_CPU hoặc (f0, CPI) của cả Máy A và Máy B để so sánh.';
      } else if (res.winner === 'A') {
        outEl.textContent = `Máy A nhanh hơn Máy B ${res.fasterBy.toFixed(3)} lần (P_A / P_B = ${res.ratioAB.toFixed(3)})`;
      } else if (res.winner === 'B') {
        outEl.textContent = `Máy B nhanh hơn Máy A ${res.fasterBy.toFixed(3)} lần (P_B / P_A = ${res.ratioBA.toFixed(3)})`;
      } else {
        outEl.textContent = 'Hai máy có hiệu năng tương đương nhau (1.000 lần).';
      }
    };

    ['calc-f0', 'calc-f-unit', 'calc-ic', 'calc-cpi', 'calc-fp-ops', 'calc-miss-i', 'calc-pmem', 'calc-miss-d', 'calc-penalty'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', calcPerf);
      document.getElementById(id)?.addEventListener('change', calcPerf);
    });
    ['calc-cpi-weight-mode', 'cpi-w1', 'cpi-c1', 'cpi-w2', 'cpi-c2', 'cpi-w3', 'cpi-c3'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', calcWeightedCpiUi);
      document.getElementById(id)?.addEventListener('change', calcWeightedCpiUi);
    });
    document.getElementById('btn-apply-cpitb')?.addEventListener('click', () => {
      const cpiTB = calcWeightedCpiUi();
      const cpiInput = document.getElementById('calc-cpi');
      if (cpiTB > 0 && cpiInput) {
        cpiInput.value = cpiTB.toFixed(4);
        calcPerf();
        showToast(`Đã áp dụng CPI_TB = ${cpiTB.toFixed(3)} lên công thức CPU`, 'success');
      }
    });
    ['cmp-ta', 'cmp-fa', 'cmp-cpia', 'cmp-tb', 'cmp-fb', 'cmp-cpib'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', calcCompareUi);
    });
    calcPerf();
    calcWeightedCpiUi();
    calcCompareUi();

    // Tool 2: Memory Banks Simulator
    const simMemory = () => {
      const addrInput = document.getElementById('mem-sim-addr')?.value || '0x1004';
      const busWidth = parseInt(document.getElementById('mem-sim-bus')?.value) || 32;

      if (window.KTMT_TOOLS && window.KTMT_TOOLS.simulateMemory) {
        const res = window.KTMT_TOOLS.simulateMemory(busWidth, addrInput, "0x12345678");
        const elBanks = document.getElementById('mem-res-banks-count');
        const elIdx = document.getElementById('mem-res-bank-index');
        const elWord = document.getElementById('mem-res-word-addr');

        const firstByte = res.bytes && res.bytes[0];
        if (elBanks) elBanks.textContent = res.K;
        if (elIdx) elIdx.textContent = firstByte ? firstByte.bank : 0;
        if (elWord) elWord.textContent = res.baseAddrHex;

        // Render visual banks
        const grid = document.getElementById('mem-banks-grid-display');
        if (grid && res.banks) {
          let gridHtml = '';
          grid.style.gridTemplateColumns = `repeat(${res.K}, 1fr)`;
          for (let b = 0; b < res.K; b++) {
            const bytesInBank = res.banks[b] || [];
            const hasBytes = bytesInBank.length > 0;
            gridHtml += `
              <div class="memory-bank-col ${hasBytes ? 'highlighted' : ''}">
                <div class="bank-header">Bank ${b} ${hasBytes ? '🎯' : ''}</div>
                <div class="bank-cells">
            `;
            if (hasBytes) {
              bytesInBank.forEach(item => {
                gridHtml += `<div class="bank-cell active-byte">${item.hexAddr}: 0x${item.val}</div>`;
              });
            } else {
              gridHtml += `<div class="bank-cell" style="color:var(--text-muted);">(Trống)</div>`;
            }
            gridHtml += `</div></div>`;
          }
          grid.innerHTML = gridHtml;
        }
      }
    };

    document.getElementById('mem-sim-addr')?.addEventListener('input', simMemory);
    document.getElementById('mem-sim-bus')?.addEventListener('change', simMemory);
    simMemory();

    // Tool 3: Number & IEEE 754 Converter
    const convertIEEE = () => {
      const floatInput = parseFloat(document.getElementById('ieee-float-input')?.value);
      if (!isNaN(floatInput) && window.KTMT_TOOLS && window.KTMT_TOOLS.floatToIEEE754) {
        const res = window.KTMT_TOOLS.floatToIEEE754(floatInput);
        const elHex = document.getElementById('ieee-res-hex');
        const elSign = document.getElementById('ieee-res-sign');
        const elExp = document.getElementById('ieee-res-exp');
        const elMant = document.getElementById('ieee-res-mantissa');

        if (elHex) elHex.textContent = res.hex;
        if (elSign) elSign.textContent = `${res.signBit} (${res.signBit === '0' ? '+ Dương' : '- Âm'})`;
        if (elExp) elExp.textContent = `${res.expBits} (${res.biasedExp} - 127 = ${res.realE})`;
        if (elMant) elMant.textContent = res.fracBits;
      }
    };

    document.getElementById('ieee-float-input')?.addEventListener('input', convertIEEE);
    convertIEEE();

    // Tool 4: RISC-V Disassembler
    const disasmRISCV = () => {
      const hexInput = document.getElementById('riscv-hex-input')?.value.trim() || '0x00500093';

      if (window.KTMT_TOOLS && window.KTMT_TOOLS.decodeRISCV) {
        const dec = window.KTMT_TOOLS.decodeRISCV(hexInput);
        const elType = document.getElementById('riscv-dec-type');
        const elOp = document.getElementById('riscv-dec-opcode');
        const elAsm = document.getElementById('riscv-dec-asm');
        const elFields = document.getElementById('riscv-dec-fields');

        if (elType) elType.textContent = dec.format || 'Unknown';
        if (elOp) elOp.textContent = dec.opcode ? `0b${dec.opcode}` : '--';
        if (elAsm) elAsm.textContent = dec.asmStr || 'Mã không hợp lệ';
        if (elFields) elFields.textContent = `${dec.rd || ''} | ${dec.rs1 || ''} | ${dec.rs2 || ''} | imm: ${dec.immVal !== undefined ? dec.immVal : '--'}`;
      }
    };

    document.getElementById('riscv-hex-input')?.addEventListener('input', disasmRISCV);
    disasmRISCV();
  }

  // ==========================================
  // GLOBAL KEYBOARD SHORTCUTS
  // ==========================================
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    if (currentTab === 'practice') {
      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key) - 1;
        const btn = document.querySelector(`.option-btn[data-index="${idx}"]`);
        btn?.click();
      } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
        const key = e.key.toUpperCase();
        const btn = document.querySelector(`.option-btn[data-key="${key}"]`);
        btn?.click();
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        document.getElementById('btn-next-question')?.click();
      } else if (e.key === 'ArrowLeft') {
        document.getElementById('btn-prev-question')?.click();
      }
    } else if (currentTab === 'flashcard') {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('flashcard-inner-box')?.click();
      } else if (e.key === 'ArrowRight') {
        document.getElementById('btn-flashcard-next')?.click();
      } else if (e.key === 'ArrowLeft') {
        document.getElementById('btn-flashcard-prev')?.click();
      }
    }
  });

  // ==========================================
  // ASSESSMENT & NAVIGATION ACTIONS
  // ==========================================
  function startSectionTest(sectionId, mode = 'exam') {
    const sec = theorySections.find(s => s.id === sectionId);
    const questions = getSectionQuestions(sectionId);
    if (!questions || questions.length === 0) {
      showToast(`Chưa có câu hỏi trắc nghiệm cho mục ${sectionId}`, 'info');
      return;
    }

    const secTitle = sec ? `Mục ${sec.code}: ${sec.title}` : `Mục ${sectionId}`;
    const curIndex = theorySections.findIndex(s => s.id === sectionId);
    const nextSec = (curIndex >= 0 && curIndex < theorySections.length - 1) ? theorySections[curIndex + 1] : null;

    appState.learningContext = {
      sourceType: 'section',
      sectionId: sectionId,
      secCode: sec ? sec.code : sectionId,
      secTitle: sec ? sec.title : '',
      chapter: sec ? sec.chapter : 1,
      nextSectionId: nextSec ? nextSec.id : null,
      nextSecCode: nextSec ? nextSec.code : null,
      nextSecTitle: nextSec ? nextSec.title : null,
      mode: mode
    };

    if (mode === 'exam') {
      switchTab('exam');
      startExam('section', {
        questions: questions,
        time: Math.max(15, Math.ceil(questions.length * 1.5)),
        title: `Bài kiểm tra: ${secTitle} (${questions.length} câu)`
      });
      showToast(`Bắt đầu làm bài test ${secTitle} (${questions.length} câu)! 🚀`, 'success');
    } else {
      // Practice mode
      if (sec) {
        const chSelect = document.getElementById('practice-filter-chapter');
        if (chSelect) {
          chSelect.value = String(sec.chapter);
          updateGroupDropdownOptions(String(sec.chapter));
        }
      }
      const grpSelect = document.getElementById('practice-filter-group');
      if (grpSelect) {
        grpSelect.value = 'sec-' + sectionId;
      }
      initPracticeQueue();
      switchTab('practice');
      showToast(`Đang luyện tập toàn bộ ${questions.length} câu hỏi thuộc ${secTitle}! 🎯`, 'success');
    }
  }

  function startGroupTest(groupId, mode = 'exam') {
    const questions = getGroupQuestions(groupId);
    if (!questions || questions.length === 0) {
      showToast(`Chưa có câu hỏi trắc nghiệm cho nhóm ${groupId}`, 'info');
      return;
    }

    let grpTitle = `Nhóm bài tập ${groupId}`;
    let chNum = 1;
    chaptersList.forEach(ch => {
      (ch.groups || []).forEach(g => {
        if (g.id === groupId) {
          grpTitle = g.title;
          chNum = ch.id;
        }
      });
    });

    const sec = theorySections.find(s => s.chapter === chNum && s.linkedGroups && s.linkedGroups.includes(groupId));

    appState.learningContext = {
      sourceType: 'group',
      groupId: groupId,
      groupTitle: grpTitle,
      chapter: chNum,
      sectionId: sec ? sec.id : null,
      secCode: sec ? sec.code : null,
      secTitle: sec ? sec.title : null,
      mode: mode
    };

    if (mode === 'exam') {
      switchTab('exam');
      startExam('group', {
        questions: questions,
        time: Math.max(8, Math.ceil(questions.length * 1.5)),
        title: `Bài kiểm tra: ${grpTitle} (${questions.length} câu)`
      });
      showToast(`Bắt đầu làm bài test ${grpTitle} (${questions.length} câu)! 🚀`, 'success');
    } else {
      // Practice mode
      const chSelect = document.getElementById('practice-filter-chapter');
      if (chSelect) {
        chSelect.value = String(chNum);
        updateGroupDropdownOptions(String(chNum));
      }
      const grpSelect = document.getElementById('practice-filter-group');
      if (grpSelect) {
        grpSelect.value = groupId;
      }
      initPracticeQueue();
      switchTab('practice');
      showToast(`Đang luyện tập ${questions.length} câu của ${grpTitle}! 🎯`, 'success');
    }
  }

  // Alias for backward compatibility
  function startGroupPractice(groupId) {
    startGroupTest(groupId, 'practice');
  }

  // Chuyển thẳng đến mục lý thuyết và cuộn mượt + hiệu ứng sáng vị trí
  function jumpToTheory(theorySecId) {
    if (!theorySecId) return;
    const parts = theorySecId.split('.');
    const chNum = parseInt(parts[0]) || 1;

    switchTab('theory');

    document.querySelectorAll('.theory-tab-btn').forEach(btn => {
      const ch = parseInt(btn.getAttribute('data-chapter'));
      btn.classList.toggle('active', ch === chNum);
    });

    renderTheory(chNum);

    setTimeout(() => {
      const targetEl = document.getElementById(`sec-${theorySecId}`) ||
                       document.getElementById(`assessment-${theorySecId}`) ||
                       document.getElementById(`group-sec-${theorySecId}`) ||
                       document.getElementById(`sec-part2-${chNum}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetEl.classList.remove('section-pulse-active');
        void targetEl.offsetWidth;
        targetEl.classList.add('section-pulse-active');
        setTimeout(() => {
          targetEl.classList.remove('section-pulse-active');
        }, 2500);
      }
      const secObj = theorySections.find(s => s.id === theorySecId);
      if (isTheorySplitPdf && secObj && secObj.pdfPage) {
        syncSplitPdf(secObj.pdfPage);
      }
    }, 160);
  }

  // Chuyển thẳng đến nhóm bài tập Phần 2 và cuộn mượt
  function jumpToGroup(groupId) {
    if (!groupId) return;
    const parts = groupId.split('.');
    const chNum = parseInt(parts[0]) || 1;

    switchTab('theory');

    document.querySelectorAll('.theory-tab-btn').forEach(btn => {
      const ch = parseInt(btn.getAttribute('data-chapter'));
      btn.classList.toggle('active', ch === chNum);
    });

    renderTheory(chNum);

    setTimeout(() => {
      const targetEl = document.getElementById(`group-sec-${groupId}`) ||
                       document.getElementById(`sec-part2-${chNum}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetEl.classList.remove('section-pulse-active');
        void targetEl.offsetWidth;
        targetEl.classList.add('section-pulse-active');
        setTimeout(() => {
          targetEl.classList.remove('section-pulse-active');
        }, 2500);
      }
    }, 160);
  }

  // Điền dữ liệu vào dropdown chọn bài test theo mục tiêu trong tab Phòng thi
  function populateExamTargetDropdown() {
    const select = document.getElementById('exam-select-target');
    if (!select) return;
    const currentVal = select.value;
    select.innerHTML = '';

    // Nhóm 0: Theo từng Chương (Chương 1–4)
    const ogCh = document.createElement('optgroup');
    ogCh.label = '📘 ĐỀ THI TỔNG HỢP THEO TỪNG CHƯƠNG (CHƯƠNG 1–4)';
    chaptersList.forEach(ch => {
      const qCount = allQuestions.filter(q => q.chapter === ch.id).length;
      if (qCount > 0) {
        const opt = document.createElement('option');
        opt.value = `ch-${ch.id}`;
        opt.textContent = `${ch.code}: ${ch.title} (${Math.min(30, qCount)}/${qCount} câu)`;
        ogCh.appendChild(opt);
      }
    });
    select.appendChild(ogCh);

    // Nhóm 1: Theo mục lý thuyết trọng tâm
    const ogSec = document.createElement('optgroup');
    ogSec.label = '⭐ BÀI TEST TOÀN DIỆN THEO MỤC LÝ THUYẾT (TẤT CẢ CÂU LIÊN QUAN)';
    theorySections.forEach(sec => {
      const qCount = getSectionQuestions(sec.id).length;
      if (qCount > 0) {
        const opt = document.createElement('option');
        opt.value = 'sec-' + sec.id;
        opt.textContent = `Mục ${sec.code}: ${sec.title} (Toàn bộ ${qCount} câu)`;
        ogSec.appendChild(opt);
      }
    });
    select.appendChild(ogSec);

    // Nhóm 2: Theo từng nhóm bài tập chuẩn PDF
    const ogGrp = document.createElement('optgroup');
    ogGrp.label = '📚 BÀI TEST THEO TỪNG NHÓM BÀI TẬP (PHẦN 2 CHUẨN KTMT_GK.PDF)';
    chaptersList.forEach(ch => {
      (ch.groups || []).forEach(g => {
        const qCount = getGroupQuestions(g.id).length;
        if (qCount > 0) {
          const opt = document.createElement('option');
          opt.value = g.id;
          opt.textContent = `${g.title} (${qCount} câu)`;
          ogGrp.appendChild(opt);
        }
      });
    });
    select.appendChild(ogGrp);

    if (currentVal && select.options && Array.from(select.options).some(o => o.value === currentVal)) {
      select.value = currentVal;
    }
  }

  function runTargetExamSelection() {
    const val = document.getElementById('exam-select-target')?.value;
    if (!val) return;
    if (val.startsWith('ch-')) {
      const chNum = parseInt(val.replace('ch-', ''), 10) || 1;
      const chObj = chaptersList.find(c => c.id === chNum);
      const chCount = allQuestions.filter(q => q.chapter === chNum).length;
      const takeCount = Math.min(30, chCount);
      startExam('custom', {
        chapters: [chNum],
        count: takeCount,
        time: Math.max(20, Math.ceil(takeCount * 1.25)),
        title: `Đề tổng hợp ${chObj ? chObj.code + ': ' + chObj.title : 'Chương ' + chNum} (${takeCount} câu)`
      });
    } else if (val.startsWith('sec-')) {
      startSectionTest(val.replace('sec-', ''), 'exam');
    } else {
      startGroupTest(val, 'exam');
    }
  }

  function stripHtmlText(str) {
    return String(str || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function renderGlobalSearchDropdown(rawQuery) {
    const dropdown = document.getElementById('global-search-results');
    if (!dropdown) return;
    const q = (rawQuery || '').toLowerCase().trim();
    if (q.length < 2) {
      dropdown.classList.remove('open');
      dropdown.innerHTML = '';
      return;
    }

    const secMatches = theorySections.filter(s => {
      const hay = `${s.code} ${s.title} ${s.summary || ''} ${stripHtmlText(s.content)}`.toLowerCase();
      return hay.includes(q);
    }).slice(0, 5);

    const qMatches = allQuestions.filter(item => {
      const hay = `${item.id || ''} ${item.question || ''} ${item.group || ''} ${item.source || ''} ${item.explanation || ''}`.toLowerCase();
      return hay.includes(q);
    }).slice(0, 8);

    if (secMatches.length === 0 && qMatches.length === 0) {
      dropdown.innerHTML = `<div class="search-res-empty">Không tìm thấy mục lý thuyết hay câu hỏi nào cho "<strong>${escapeHtml(rawQuery)}</strong>".</div>`;
      dropdown.classList.add('open');
      return;
    }

    let html = '';
    if (secMatches.length > 0) {
      html += `<div class="search-res-group">Lý thuyết KTMT_GK.pdf (${secMatches.length})</div>`;
      secMatches.forEach(s => {
        html += `
          <button type="button" class="search-res-item" data-search-sec="${s.id}">
            <span class="search-res-title">${escapeHtml(s.code)} — ${escapeHtml(s.title)}</span>
            <span class="search-res-meta">Chương ${s.chapter} • Trang ${s.pdfPage || 1}</span>
          </button>
        `;
      });
    }

    if (qMatches.length > 0) {
      html += `<div class="search-res-group">Câu hỏi &amp; Bài tập (${qMatches.length})</div>`;
      qMatches.forEach((item, idx) => {
        const plain = stripHtmlText(item.question);
        const snippet = plain.length > 92 ? plain.slice(0, 92) + '...' : plain;
        html += `
          <button type="button" class="search-res-item" data-search-qid="${escapeHtml(item.id)}" data-search-qidx="${idx}">
            <span class="search-res-title">${escapeHtml(snippet)}</span>
            <span class="search-res-meta">Chương ${item.chapter} • Nhóm ${escapeHtml(item.group)} • Trang ${item.pdfPage || 1}</span>
          </button>
        `;
      });
    }

    dropdown.innerHTML = html;
    dropdown.classList.add('open');

    dropdown.querySelectorAll('[data-search-sec]').forEach(btn => {
      btn.addEventListener('click', () => {
        const secId = btn.getAttribute('data-search-sec');
        dropdown.classList.remove('open');
        jumpToTheory(secId);
      });
    });

    dropdown.querySelectorAll('[data-search-qid]').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.getAttribute('data-search-qid');
        const fullMatches = allQuestions.filter(item =>
          `${item.id || ''} ${item.question || ''} ${item.group || ''} ${item.source || ''} ${item.explanation || ''}`.toLowerCase().includes(q)
        );
        const pickedIdx = Math.max(0, fullMatches.findIndex(item => item.id === qid));
        practiceQueue = fullMatches.length > 0 ? fullMatches : allQuestions.slice();
        currentPracticeIndex = pickedIdx;
        practiceAnswerSubmitted = false;
        setPracticeViewMode('quiz');
        dropdown.classList.remove('open');
        switchTab('practice');
      });
    });
  }

  // ==========================================
  // INITIALIZATION ON DOM READY
  // ==========================================
  window.addEventListener('DOMContentLoaded', () => {
    applyTheme(appState.theme);

    // Sidebar navigation clicks
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        if (tab) switchTab(tab);
      });
    });

    // Mobile sidebar toggle
    document.getElementById('btn-toggle-sidebar')?.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.toggle('open');
    });

    // Theme toggle button
    document.getElementById('btn-theme-toggle')?.addEventListener('click', () => {
      applyTheme(appState.theme === 'dark' ? 'light' : 'dark');
    });

    // Global header/sidebar PDF & CheatSheet shortcuts
    document.getElementById('btn-sidebar-open-pdf')?.addEventListener('click', () => openPdfModal(1));
    document.getElementById('btn-header-open-pdf')?.addEventListener('click', () => openPdfModal(1));
    document.getElementById('btn-open-cheatsheet')?.addEventListener('click', () => switchTab('cheatsheet'));

    // Top search bar (Theory + Questions live dropdown)
    const searchInput = document.getElementById('global-search-input');
    const searchDropdown = document.getElementById('global-search-results');
    searchInput?.addEventListener('input', (e) => renderGlobalSearchDropdown(e.target.value));
    searchInput?.addEventListener('focus', (e) => {
      if ((e.target.value || '').trim().length >= 2) renderGlobalSearchDropdown(e.target.value);
    });
    searchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchDropdown?.classList.remove('open');
        searchInput.blur();
      } else if (e.key === 'Enter') {
        const firstBtn = searchDropdown?.querySelector('.search-res-item');
        if (firstBtn) {
          e.preventDefault();
          firstBtn.click();
        }
      }
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrapper')) {
        searchDropdown?.classList.remove('open');
      }
    });

    // Modal close buttons
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.modal-overlay')?.classList.remove('open');
      });
    });
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    });

    // Theory chapter tab buttons & split/print/nav controls
    document.querySelectorAll('.theory-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const ch = parseInt(btn.getAttribute('data-chapter'));
        renderTheory(ch);
      });
    });
    document.getElementById('btn-toggle-pdf-split')?.addEventListener('click', () => toggleTheorySplitPdf());
    document.getElementById('btn-close-pdf-split')?.addEventListener('click', () => toggleTheorySplitPdf(false));
    document.getElementById('btn-theory-open-workbook')?.addEventListener('click', () => openWorkbookForChapter(currentTheoryChapter));
    document.getElementById('btn-print-theory')?.addEventListener('click', () => window.print());
    document.getElementById('btn-theory-prev-ch')?.addEventListener('click', () => {
      if (currentTheoryChapter > 1) {
        renderTheory(currentTheoryChapter - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    document.getElementById('btn-theory-next-ch')?.addEventListener('click', () => {
      if (currentTheoryChapter < 4) {
        renderTheory(currentTheoryChapter + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    document.getElementById('btn-theory-scroll-top')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Cheat Sheet actions
    document.getElementById('btn-print-cheatsheet')?.addEventListener('click', () => window.print());
    document.getElementById('btn-cheatsheet-back-theory')?.addEventListener('click', () => switchTab('theory'));

    // Flashcard buttons
    document.getElementById('btn-flashcard-prev')?.addEventListener('click', () => {
      if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        renderFlashcard();
      }
    });
    document.getElementById('btn-flashcard-next')?.addEventListener('click', () => {
      if (currentFlashcardIndex < flashcardQueue.length - 1) {
        currentFlashcardIndex++;
        renderFlashcard();
      }
    });
    document.getElementById('btn-flashcard-flip')?.addEventListener('click', () => {
      document.getElementById('flashcard-inner-box')?.click();
    });
    document.getElementById('btn-flashcard-shuffle')?.addEventListener('click', () => {
      flashcardQueue = shuffleArray(flashcardQueue);
      currentFlashcardIndex = 0;
      renderFlashcard();
      showToast('Đã trộn ngẫu nhiên thẻ ghi nhớ!');
    });
    document.getElementById('flashcard-filter-chapter')?.addEventListener('change', initFlashcards);

    // Practice dual-mode toggle & workbook bulk toggle
    document.getElementById('btn-practice-mode-quiz')?.addEventListener('click', () => {
      setPracticeViewMode('quiz');
      renderPracticeModeView();
    });
    document.getElementById('btn-practice-mode-workbook')?.addEventListener('click', () => {
      setPracticeViewMode('workbook');
      renderPracticeModeView();
    });
    document.getElementById('btn-workbook-toggle-all')?.addEventListener('click', () => {
      workbookExpandAll = !workbookExpandAll;
      renderPracticeWorkbook();
    });

    // Practice filter change events
    updateGroupDropdownOptions(document.getElementById('practice-filter-chapter')?.value || 'all');
    document.getElementById('practice-filter-chapter')?.addEventListener('change', (e) => {
      updateGroupDropdownOptions(e.target.value);
      initPracticeQueue();
      renderPracticeModeView();
    });
    ['practice-filter-tag', 'practice-filter-group', 'practice-shuffle-toggle'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => {
        initPracticeQueue();
        renderPracticeModeView();
      });
    });

    // Exam Presets & Target Exam
    document.getElementById('btn-exam-start-gk')?.addEventListener('click', () => startExam('gk'));
    document.getElementById('btn-exam-start-ck')?.addEventListener('click', () => startExam('ck'));
    document.getElementById('btn-exam-start-0012')?.addEventListener('click', () => startExam('de0012'));
    document.getElementById('btn-exam-start-0013')?.addEventListener('click', () => startExam('de0013'));
    document.getElementById('btn-exam-start-target-card')?.addEventListener('click', () => {
      document.getElementById('exam-select-target')?.focus();
      runTargetExamSelection();
    });
    document.getElementById('btn-start-target-exam')?.addEventListener('click', runTargetExamSelection);
    document.getElementById('btn-exam-submit-confirm')?.addEventListener('click', confirmSubmitExam);

    // Dashboard quick action buttons
    document.getElementById('btn-dash-open-theory')?.addEventListener('click', () => switchTab('theory'));
    document.getElementById('btn-dash-open-workbook')?.addEventListener('click', () => openWorkbookForChapter('all'));
    document.getElementById('btn-dash-cheatsheet')?.addEventListener('click', () => switchTab('cheatsheet'));
    document.getElementById('btn-dash-start-practice')?.addEventListener('click', () => {
      setPracticeViewMode('quiz');
      switchTab('practice');
    });
    document.getElementById('btn-dash-start-exam')?.addEventListener('click', () => switchTab('exam'));
    document.getElementById('btn-dash-open-pdf')?.addEventListener('click', () => openPdfModal(1));

    document.querySelectorAll('.dash-pdf-jump').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openPdfModal(parseInt(btn.getAttribute('data-pdf-page'), 10) || 1);
      });
    });

    // Dashboard chapter card clicks
    document.querySelectorAll('.chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const ch = parseInt(card.getAttribute('data-chapter'));
        const chSel = document.getElementById('practice-filter-chapter');
        if (chSel) chSel.value = String(ch);
        updateGroupDropdownOptions(String(ch));
        const grpSel = document.getElementById('practice-filter-group');
        if (grpSel) grpSel.value = 'all';
        initPracticeQueue();
        switchTab('practice');
      });
    });

    // Initialize tools
    initTools();

    // Populate exam target dropdown
    populateExamTargetDropdown();

    // Initial KaTeX pass on static tabs & initial render
    renderMath(document.getElementById('tab-dashboard'));
    renderMath(document.getElementById('tab-tools'));
    switchTab('dashboard');
  });

  // Export for debugging & in-line event handlers
  window.KTMT_APP = {
    state: appState,
    switchTab,
    openPdfModal,
    openTheoryPdfPage,
    toggleTheorySplitPdf,
    startSectionTest,
    startGroupTest,
    startGroupPractice,
    openWorkbookGroup,
    openWorkbookForChapter,
    renderCheatSheet,
    jumpToTheory,
    jumpToGroup,
    startExam,
    getSectionQuestions,
    getGroupQuestions,
    enhanceRegisterTooltips
  };
})();
