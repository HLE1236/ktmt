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
  let practiceAnswerSubmitted = false;

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

  // Wraps register occurrences with interactive tooltips safely outside KaTeX & tags
  function enhanceRegisterTooltips(html) {
    if (!html || typeof html !== 'string') return html;
    if (!registerLookup || Object.keys(registerLookup).length === 0) return html;

    // Phân tách cả thẻ HTML và các khối KaTeX $...$, $$...$$ để bảo toàn cú pháp
    const parts = html.split(/(<[^>]+>|\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);
    const regex = /\b(?:x[0-9]|x[12][0-9]|x3[01]|zero|ra|sp|gp|tp|t[0-6]|s[0-9]|s1[01]|a[0-7]|fp)\b/g;

    let inCode = false;

    return parts.map((part, idx) => {
      // Nếu là thẻ HTML hoặc khối công thức KaTeX
      if (idx % 2 === 1) {
        if (/^<\s*(code|pre|kbd)\b/i.test(part)) {
          inCode = true;
        } else if (/^<\/\s*(code|pre|kbd)\s*>/i.test(part)) {
          inCode = false;
        }
        return part;
      }

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
    } else if (tabId === 'practice') {
      if (practiceQueue.length === 0) {
        initPracticeQueue();
      }
      renderPracticeQuestion();
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

      const fillEl = document.getElementById(`dash-ch${chNum}-fill`);
      const metaEl = document.getElementById(`dash-ch${chNum}-meta`);
      if (fillEl) fillEl.style.width = `${pct}%`;
      if (metaEl) metaEl.textContent = `${chCorrect.length}/${chQuestions.length} câu (${pct}%)`;
    });

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

  // Phân loại chính xác 1-1 từng câu hỏi về đúng mục lý thuyết tương ứng (loại bỏ hoàn toàn trùng lặp)
  function getQuestionSectionId(q) {
    // CHƯƠNG 1 (49 câu)
    if (q.chapter === 1) {
      if (['lt-1.1', 'lt-1.4', 'c1-1.1', 'c1-1.2', 'c1-1.5'].includes(q.id)) return '1.1.1';
      if (['lt-1.2', 'c1-1.3', 'c1-1.4'].includes(q.id)) return '1.1.2';
      if (['lt-1.3', 'lt-1.6', 'c1-1.35a', 'c1-1.35b'].includes(q.id)) return '1.1.3';
      return '1.1.4'; // lt-1.5, nhóm 1.2.2 (7c), 1.2.3 (7c), 1.2.4 (8c), 1.2.5 (12c), c1-1.33, c1-1.34
    }
    // CHƯƠNG 2 (37 câu)
    if (q.chapter === 2) {
      if (['lt-2.1', 'c2-2.1', 'c2-2.2', 'c2-2.3', 'c2-2.4'].includes(q.id)) return '2.1.1';
      if (q.group === '2.2.4' || ['lt-2.2', 'lt-2.3', 'c2-2.5', 'c2-2.6'].includes(q.id)) return '2.1.2';
      return '2.1.3'; // lt-2.4, lt-2.5, lt-2.6, nhóm 2.2.2 (10c), nhóm 2.2.3 (6c)
    }
    // CHƯƠNG 3 (78 câu)
    if (q.chapter === 3) {
      if (q.group === '3.2.7' || ['lt-3.1', 'c3-3.1', 'c3-3.2', 'c3-3.3', 'c3-3.4', 'c3-3.5', 'c3-3.6'].includes(q.id)) return '3.1.1';
      if (q.group === '3.2.4' || ['lt-3.2', 'lt-3.3'].includes(q.id)) return '3.1.2';
      if (q.group === '3.2.8' || ['lt-3.6', 'lt-3.7', 'lt-3.8', 'c3-4.3', 'c3-4.4a', 'c3-4.4b'].includes(q.id)) return '3.1.4';
      return '3.1.3'; // nhóm 3.2.2 (20c), 3.2.3 (6c), 3.2.5 (6c), 3.2.6 (3c), lt-3.4, lt-3.5, các câu còn lại của 3.2.1
    }
    // CHƯƠNG 4 (35 câu)
    if (q.chapter === 4) {
      if (['c4-5.4a', 'c4-5.4b'].includes(q.id)) return '4.1.1';
      if (q.group === '4.2.1' || ['lt-4.1', 'lt-4.2'].includes(q.id)) return '4.1.2';
      if (q.group === '4.2.3' || ['lt-4.4'].includes(q.id)) return '4.1.4';
      if (q.group === '4.2.4' || ['lt-4.5', 'lt-4.8'].includes(q.id)) return '4.1.5';
      if (q.group === '4.2.5' || ['lt-4.6', 'lt-4.7'].includes(q.id)) return '4.1.6';
      return '4.1.3'; // lt-4.3, các câu còn lại của nhóm 4.2.2
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

  function renderTheory(chapterNum = currentTheoryChapter) {
    currentTheoryChapter = chapterNum;
    const chapterObj = chaptersList.find(c => c.id === chapterNum) || chaptersList[0] || {};
    const sections = theorySections.filter(s => s.chapter === chapterNum);

    // Render Table of Contents (Phân chia đúng 2 Phần theo giáo trình KTMT.pdf)
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
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
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
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
        tocContainer.appendChild(item);
      });
    }

    // Render Chapter Header & Actions
    const titleEl = document.getElementById('theory-chapter-title');
    const descEl = document.getElementById('theory-chapter-desc');
    const pageBadge = document.getElementById('theory-pdf-page-badge');
    if (titleEl) titleEl.textContent = chapterObj.title ? `${chapterObj.code}: ${chapterObj.title}` : `Chương ${chapterNum}`;
    if (descEl) descEl.textContent = chapterObj.subtitle || 'Tài liệu ôn tập bám sát giáo trình KTMT.pdf';
    if (pageBadge) {
      pageBadge.textContent = `PDF Trang ${chapterObj.pdfPageStart || 1}`;
      pageBadge.onclick = () => openPdfModal(chapterObj.pdfPageStart || 1);
    }

    // Render Content Sections
    const contentEl = document.getElementById('theory-content-body');
    if (contentEl) {
      let html = '';

      // Banner Phần 1
      html += `
        <div style="margin-bottom: 24px; padding-bottom: 12px; border-bottom: 2px solid var(--primary);">
          <span class="badge" style="background-color: var(--primary); color: white; margin-bottom: 6px; display: inline-block;">PHẦN 1 GIÁO TRÌNH KTMT.PDF</span>
          <h2 style="font-size: 1.45rem; color: var(--primary); margin: 4px 0 0 0;">
            ${chapterNum}.1 Phần 1: Lý thuyết trọng tâm
          </h2>
        </div>
      `;

      sections.forEach(sec => {
        const secQuestions = getSectionQuestions(sec.id);
        html += `<section id="sec-${sec.id}" class="theory-section-box" style="margin-bottom: 40px; padding-bottom: 24px; border-bottom: 1px solid var(--border-subtle);">`;
        html += `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <h2 style="font-size: 1.3rem; color: var(--primary); margin: 0;">${sec.code}. ${sec.title}</h2>
            <button class="btn btn-secondary btn-sm" onclick="window.KTMT_APP && window.KTMT_APP.openPdfModal(${sec.pdfPage})" style="padding: 4px 10px; font-size: 0.8rem;">
              📄 Mở xem Trang ${sec.pdfPage} (KTMT.pdf)
            </button>
          </div>
        `;
        
        if (sec.summary) {
          html += `<div style="background-color: var(--bg-muted); border-left: 3px solid var(--primary); padding: 10px 14px; border-radius: 4px; font-size: 0.9rem; margin-bottom: 16px;">
            <strong>Tóm tắt trọng tâm:</strong> ${sec.summary}
          </div>`;
        }

        html += enhanceRegisterTooltips(sec.content);

        // THẺ ĐÁNH GIÁ & BÀI TEST TOÀN DIỆN CHO MỤC NÀY (Không trùng lặp)
        html += `
          <div class="theory-assessment-card" id="assessment-${sec.id}">
            <div class="assessment-header">
              <div class="assessment-badge">📋 BÀI KIỂM TRA MỤC ${sec.code}</div>
              <div class="assessment-count-badge">${secQuestions.length} câu trắc nghiệm</div>
            </div>
            <h3 class="assessment-title">Kiểm tra kiến thức: ${sec.title}</h3>
            <p class="assessment-desc">
              Học xong phần này? Hãy làm ngay bài test gồm <strong>toàn bộ ${secQuestions.length} câu hỏi trọng tâm</strong> bám sát mục này để củng cố kiến thức trước khi tiếp tục.
            </p>

            <div class="assessment-main-actions">
              <button class="btn btn-primary" onclick="window.KTMT_APP && window.KTMT_APP.startSectionTest('${sec.id}', 'exam')">
                ⏱️ Làm Bài Test Mục Này (${secQuestions.length} câu)
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
          <section id="sec-part2-${chapterNum}" class="theory-section-box" style="margin-top: 50px; padding-top: 32px; border-top: 3px solid var(--primary);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 8px;">
              <div>
                <span class="badge" style="background-color: var(--primary); color: white; margin-bottom: 6px; display: inline-block;">PHẦN 2 GIÁO TRÌNH KTMT.PDF</span>
                <h2 style="font-size: 1.45rem; color: var(--primary); margin: 4px 0 0 0;">
                  ${chapterNum}.2 Phần 2: Toàn bộ bài tập Chương ${chapterNum} và Hướng dẫn giải
                </h2>
                <p style="color: var(--text-secondary); margin-top: 6px; font-size: 0.92rem;">
                  Phân nhóm chính xác 100% theo các nhóm bài tập trong giáo trình KTMT.pdf. Chọn nhóm bất kỳ để làm bài test hoặc luyện tập.
                </p>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="window.KTMT_APP && window.KTMT_APP.openPdfModal(${exerciseGroups[0].pdfPage || chapterObj.pdfPageStart})" style="padding: 6px 14px; font-size: 0.82rem;">
                📄 Mở xem Phần 2 trong KTMT.pdf
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
                        <button class="btn btn-outline-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.openPdfModal(${grp.pdfPage})" title="Xem trang ${grp.pdfPage} trong PDF">
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
                        ⏱️ Làm bài Test (${grpQuestions.length} câu)
                      </button>
                      <button class="btn btn-secondary btn-sm" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('${grp.id}', 'practice')">
                        🎯 Luyện tập
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
    }

    // Update active tab buttons in theory header
    document.querySelectorAll('.theory-tab-btn').forEach(btn => {
      const ch = parseInt(btn.getAttribute('data-chapter'));
      btn.classList.toggle('active', ch === chapterNum);
    });
  }

  // ==========================================
  // PRACTICE MODE ENGINE
  // ==========================================
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
      filtered = filtered.filter(q => q.examTag === tagFilter);
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

    let tagBadgeClass = 'badge-tag-lt';
    if (q.examTag === 'GK') tagBadgeClass = 'badge-tag-gk';
    if (q.examTag === 'CK') tagBadgeClass = 'badge-tag-ck';

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
            📄 Trang ${q.pdfPage} (KTMT.pdf)
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
          <span>📚 Nguồn: <strong>Trang ${q.pdfPage} trong KTMT.pdf</strong></span>
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
      expHeader.className = `explanation-header ${isCorrect ? 'correct' : 'incorrect'}`;
      expHeader.innerHTML = isCorrect 
        ? `<span>🎉 Chính xác! Đáp án đúng là <strong>${q.correctAnswer}</strong></span>` 
        : `<span>❌ Chưa chính xác! Đáp án đúng là <strong>${q.correctAnswer}</strong></span>`;
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
  function startExam(presetType, customConfig = {}) {
    if (presetType === 'gk' || presetType === 'ck' || presetType === 'custom') {
      appState.learningContext = null;
    }

    let pool = allQuestions.slice();
    let durationMins = 30;
    let questionCount = 25;
    let examTitle = 'Phòng Thi Thử KTMT';

    if (presetType === 'gk') {
      pool = pool.filter(q => q.chapter === 1 || q.chapter === 2);
      durationMins = 30;
      questionCount = 25;
      examTitle = 'Đề thi Giữa kỳ KTMT (Chương 1 & 2 - 25 câu)';
    } else if (presetType === 'ck') {
      pool = pool.slice();
      durationMins = 50;
      questionCount = 40;
      examTitle = 'Đề thi Cuối kỳ KTMT (Toàn diện 4 chương - 40 câu)';
    } else if (presetType === 'section') {
      pool = (customConfig.questions || []).slice();
      questionCount = pool.length;
      durationMins = customConfig.time || Math.max(15, Math.ceil(questionCount * 1.5));
      examTitle = customConfig.title || 'Bài kiểm tra theo mục lý thuyết';
    } else if (presetType === 'group') {
      pool = (customConfig.questions || []).slice();
      questionCount = pool.length;
      durationMins = customConfig.time || Math.max(8, Math.ceil(questionCount * 1.5));
      examTitle = customConfig.title || 'Bài kiểm tra theo nhóm bài tập';
    } else if (presetType === 'custom') {
      if (customConfig.chapters && customConfig.chapters.length > 0) {
        pool = pool.filter(q => customConfig.chapters.includes(q.chapter));
      }
      durationMins = customConfig.time || 30;
      questionCount = Math.min(customConfig.count || 25, pool.length);
      examTitle = customConfig.title || 'Bài thi tùy chỉnh';
    }

    if (presetType === 'section' || presetType === 'group') {
      examQuestions = pool.slice(); // Giữ nguyên toàn bộ câu hỏi của mục/nhóm đó
    } else {
      examQuestions = shuffleArray(pool).slice(0, questionCount);
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

      <div style="display: flex; gap: 12px; justify-content: center; margin-bottom: 30px;">
        <button class="btn btn-primary" id="btn-exam-retry">Làm đề khác 🔄</button>
        <button class="btn btn-secondary" id="btn-view-mistakes-tab">Vào Sổ tay câu sai 📖</button>
      </div>

      <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 16px;">Chi tiết bài làm:</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
    `;

    examQuestions.forEach((q, idx) => {
      const userAns = examAnswers[idx];
      const isCorrect = userAns === q.correctAnswer;
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
            Đáp án của bạn: <strong>${userAns || '(Chưa điền)'}</strong> | Đáp án đúng: <strong style="color: var(--success);">${q.correctAnswer}</strong>
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

    cardContainer.innerHTML = `
      <div class="flashcard-inner" id="flashcard-inner-box">
        <div class="flashcard-front">
          <div class="flashcard-type">Chương ${q.chapter} • Bài ${q.group} • ${q.examTag}</div>
          <div class="flashcard-main-text">${enhanceRegisterTooltips(q.question)}</div>
          <div class="flashcard-hint">💡 Nhấn vào thẻ hoặc phím Space để lật xem đáp án & giải thích</div>
        </div>
        <div class="flashcard-back">
          <div class="flashcard-type" style="color: var(--success);">Đáp án: ${q.correctAnswer}</div>
          <div style="font-size: 0.95rem; line-height: 1.6; overflow-y: auto; max-height: 250px;">
            ${enhanceRegisterTooltips(q.explanation)}
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); text-align: center;">Trang ${q.pdfPage} (KTMT.pdf)</div>
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
            <div style="color: var(--success); font-weight: 700; margin-bottom: 6px;">Đáp án đúng: ${q.correctAnswer}</div>
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
    const openNewTabLink = document.getElementById('pdf-open-new-tab-btn');
    if (!modal || !iframe) return;

    iframe.src = `KTMT.pdf#page=${page}`;
    if (openNewTabLink) {
      openNewTabLink.href = `KTMT.pdf#page=${page}`;
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

    // Tool 1: CPU Performance Calculator
    const calcPerf = () => {
      const getNumVal = (id, fallback) => {
        const el = document.getElementById(id);
        if (!el) return fallback;
        const v = parseFloat(el.value);
        return isNaN(v) ? fallback : v;
      };

      const f0 = getNumVal('calc-f0', 2.0);
      const fUnit = document.getElementById('calc-f-unit')?.value || 'GHz';
      const ic = getNumVal('calc-ic', 1000000);
      const cpi = getNumVal('calc-cpi', 1.5);

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
          mode: 'from_cpi'
        });
        const eff = window.KTMT_TOOLS.calcEffectiveCPI(cpi, penalty, pMissI * 100, pMissD * 100, pMem * 100);

        const elT0 = document.getElementById('perf-res-t0');
        const elTcpu = document.getElementById('perf-res-tcpu');
        const elMips = document.getElementById('perf-res-mips');
        const elEff = document.getElementById('perf-res-eff-cpi');

        if (elT0) elT0.textContent = perf.T0_ns ? `${perf.T0_ns.toFixed(3)} ns` : '--';
        if (elTcpu) elTcpu.textContent = perf.t_CPU_sec ? `${perf.t_CPU_sec.toFixed(6)} s` : '--';
        if (elMips) elMips.textContent = perf.MIPS ? perf.MIPS.toFixed(2) : '--';
        if (elEff) elEff.textContent = eff.effectiveCPI ? eff.effectiveCPI.toFixed(3) : '--';
      }
    };

    ['calc-f0', 'calc-f-unit', 'calc-ic', 'calc-cpi', 'calc-miss-i', 'calc-pmem', 'calc-miss-d', 'calc-penalty'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', calcPerf);
      document.getElementById(id)?.addEventListener('change', calcPerf);
    });
    calcPerf();

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

    document.querySelectorAll('.theory-ch-btn').forEach(btn => {
      const ch = parseInt(btn.getAttribute('data-chapter'));
      if (ch === chNum) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    renderTheory(chNum);

    setTimeout(() => {
      const targetEl = document.getElementById(`sec-${theorySecId}`) ||
                       document.getElementById(`assessment-${theorySecId}`) ||
                       document.getElementById(`theory-sec-${theorySecId}`) ||
                       document.getElementById(`group-sec-${theorySecId}`) ||
                       document.getElementById(`sec-part2-${chNum}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetEl.classList.remove('section-pulse-active');
        void targetEl.offsetWidth;
        targetEl.classList.add('section-pulse-active');
        targetEl.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
        targetEl.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.4)';
        targetEl.style.borderColor = 'var(--primary)';
        setTimeout(() => {
          targetEl.style.boxShadow = '';
          targetEl.style.borderColor = '';
          targetEl.classList.remove('section-pulse-active');
        }, 3000);
      }
    }, 160);
  }

  // Chuyển thẳng đến nhóm bài tập Phần 2 và cuộn mượt
  function jumpToGroup(groupId) {
    if (!groupId) return;
    const parts = groupId.split('.');
    const chNum = parseInt(parts[0]) || 1;

    switchTab('theory');

    document.querySelectorAll('.theory-ch-btn').forEach(btn => {
      const ch = parseInt(btn.getAttribute('data-chapter'));
      if (ch === chNum) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
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
        targetEl.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
        targetEl.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.4)';
        targetEl.style.borderColor = 'var(--primary)';
        setTimeout(() => {
          targetEl.style.boxShadow = '';
          targetEl.style.borderColor = '';
          targetEl.classList.remove('section-pulse-active');
        }, 3000);
      }
    }, 160);
  }

  // Điền dữ liệu vào dropdown chọn bài test theo mục tiêu trong tab Phòng thi
  function populateExamTargetDropdown() {
    const select = document.getElementById('exam-select-target');
    if (!select) return;
    const currentVal = select.value;
    select.innerHTML = '';

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
    ogGrp.label = '📚 BÀI TEST THEO TỪNG NHÓM BÀI TẬP (PHẦN 2 CHUẨN KTMT.PDF)';
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

    // Top search bar
    const searchInput = document.getElementById('global-search-input');
    searchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (q.length >= 2) {
        const matched = allQuestions.filter(item => 
          item.question.toLowerCase().includes(q) || 
          item.group.toLowerCase().includes(q) ||
          item.explanation.toLowerCase().includes(q)
        );
        if (matched.length > 0) {
          practiceQueue = matched;
          currentPracticeIndex = 0;
          switchTab('practice');
        }
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

    // Theory chapter tab buttons
    document.querySelectorAll('.theory-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const ch = parseInt(btn.getAttribute('data-chapter'));
        renderTheory(ch);
      });
    });

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

    // Practice filter change events
    ['practice-filter-chapter', 'practice-filter-tag', 'practice-filter-group', 'practice-shuffle-toggle'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => {
        initPracticeQueue();
        renderPracticeQuestion();
      });
    });

    // Exam Presets & Target Exam
    document.getElementById('btn-exam-start-gk')?.addEventListener('click', () => startExam('gk'));
    document.getElementById('btn-exam-start-ck')?.addEventListener('click', () => startExam('ck'));
    document.getElementById('btn-start-target-exam')?.addEventListener('click', () => {
      const val = document.getElementById('exam-select-target')?.value;
      if (!val) return;
      if (val.startsWith('sec-')) {
        startSectionTest(val.replace('sec-', ''), 'exam');
      } else {
        startGroupTest(val, 'exam');
      }
    });
    document.getElementById('btn-exam-submit-confirm')?.addEventListener('click', confirmSubmitExam);

    // Dashboard quick action buttons
    document.getElementById('btn-dash-start-practice')?.addEventListener('click', () => switchTab('practice'));
    document.getElementById('btn-dash-start-exam')?.addEventListener('click', () => switchTab('exam'));
    document.getElementById('btn-dash-open-pdf')?.addEventListener('click', () => openPdfModal(1));

    // Dashboard chapter card clicks
    document.querySelectorAll('.chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const ch = parseInt(card.getAttribute('data-chapter'));
        document.getElementById('practice-filter-chapter').value = String(ch);
        initPracticeQueue();
        switchTab('practice');
      });
    });

    // Initialize tools
    initTools();

    // Populate exam target dropdown
    populateExamTargetDropdown();

    // Initial render
    switchTab('dashboard');
  });

  // Export for debugging & in-line event handlers
  window.KTMT_APP = {
    state: appState,
    switchTab,
    openPdfModal,
    startSectionTest,
    startGroupTest,
    startGroupPractice,
    jumpToTheory,
    jumpToGroup,
    startExam,
    getSectionQuestions,
    getGroupQuestions,
    enhanceRegisterTooltips
  };
})();
