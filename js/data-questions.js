// js/data-questions.js - Tổng hợp, Xáo trộn xác định, Gắn bộ đề các năm & Chuẩn hóa câu hỏi KTMT từ 7 chương (RISC-V)

(function (root) {
  var ch1_ch2 = root.KTMT_QUESTIONS_CH1_CH2 || [];
  var ch3 = root.KTMT_QUESTIONS_CH3 || [];
  var ch4 = root.KTMT_QUESTIONS_CH4 || [];
  var ch5_ch7 = root.KTMT_QUESTIONS_CH5_CH7 || [];

  var rawList = [].concat(ch1_ch2, ch3, ch4, ch5_ch7);
  var keysLetter = ['A', 'B', 'C', 'D'];

  // Danh mục 22 bộ đề thi chính thức các năm (2018.2 - 2025.2)
  root.KTMT_EXAM_SETS = [
    // Đề Giữa kỳ (GK)
    { id: 'GK-2025.2', title: 'Đề Giữa kỳ 2025.2 (Đề 0012 & 0013)', shortTitle: 'GK 2025.2', category: 'GK', semester: '2025.2', description: 'Đề thi Giữa kỳ mới nhất 2025.2 (gồm Đề 0012 & Đề 0013 Bản 1, 2)' },
    { id: 'GK-2024.1', title: 'Đề Giữa kỳ 2024.1', shortTitle: 'GK 2024.1', category: 'GK', semester: '2024.1', description: 'Đề thi Giữa kỳ trắc nghiệm & điền khuyết 2024.1' },
    { id: 'GK-2023.2', title: 'Đề Giữa kỳ 2023.2', shortTitle: 'GK 2023.2', category: 'GK', semester: '2023.2', description: 'Đề thi Giữa kỳ 2023.2 (Đề 1 & Đề 2)' },
    { id: 'GK-2023.1', title: 'Đề Giữa kỳ 2023.1', shortTitle: 'GK 2023.1', category: 'GK', semester: '2023.1', description: 'Đề thi Giữa kỳ 2023.1 (gồm câu hỏi Datapath & ISA)' },
    { id: 'GK-2022.2', title: 'Đề Giữa kỳ 2022.2 (Đề 0006–0009)', shortTitle: 'GK 2022.2', category: 'GK', semester: '2022.2', description: 'Tổng hợp các mã đề Giữa kỳ 2022.2 (0006, 0007, 0008, 0009)' },
    { id: 'GK-2021.1', title: 'Đề Giữa kỳ 2021.1 (IT3030E)', shortTitle: 'GK 2021.1', category: 'GK', semester: '2021.1', description: 'Đề Giữa kỳ chương trình tiên tiến IT3030E 2021.1' },
    { id: 'GK-2019.2', title: 'Đề Giữa kỳ 2019.2 (Mã 243, 244)', shortTitle: 'GK 2019.2', category: 'GK', semester: '2019.2', description: 'Đề thi Giữa kỳ 2019.2 (Mã đề 243 & Mã đề 244)' },
    { id: 'GK-2018.2', title: 'Đề Giữa kỳ 2018.2 (Mã 198, 199, 204)', shortTitle: 'GK 2018.2', category: 'GK', semester: '2018.2', description: 'Đề thi Giữa kỳ 2018.2 (3 mã đề 198, 199, 204)' },

    // Đề Cuối kỳ (CK)
    { id: 'CK-2025.1', title: 'Đề Cuối kỳ 2025.1', shortTitle: 'CK 2025.1', category: 'CK', semester: '2025.1', description: 'Đề thi Cuối kỳ học kỳ 2025.1 (tổng hợp 4 chương)' },
    { id: 'CK-2024.2', title: 'Đề Cuối kỳ 2024.2', shortTitle: 'CK 2024.2', category: 'CK', semester: '2024.2', description: 'Đề thi Cuối kỳ học kỳ 2024.2 (RISC-V)' },
    { id: 'CK-2024.1', title: 'Đề Cuối kỳ 2024.1', shortTitle: 'CK 2024.1', category: 'CK', semester: '2024.1', description: 'Đề thi Cuối kỳ học kỳ 2024.1' },
    { id: 'CK-2023.2', title: 'Đề Cuối kỳ 2023.2', shortTitle: 'CK 2023.2', category: 'CK', semester: '2023.2', description: 'Đề thi Cuối kỳ học kỳ 2023.2 (đã chuẩn hóa RISC-V)' },
    { id: 'CK-2023.1', title: 'Đề Cuối kỳ 2023.1', shortTitle: 'CK 2023.1', category: 'CK', semester: '2023.1', description: 'Đề thi Cuối kỳ học kỳ 2023.1' },
    { id: 'CK-2022.2', title: 'Đề Cuối kỳ 2022.2', shortTitle: 'CK 2022.2', category: 'CK', semester: '2022.2', description: 'Đề thi Cuối kỳ học kỳ 2022.2 (đã chuẩn hóa RISC-V)' },
    { id: 'CK-2021.2', title: 'Đề Cuối kỳ 2021.2 (Mã B1–B8)', shortTitle: 'CK 2021.2', category: 'CK', semester: '2021.2', description: 'Tổng hợp 8 mã đề tự luận B1–B8 Cuối kỳ 2021.2' },
    { id: 'CK-2021.1', title: 'Đề Cuối kỳ 2021.1', shortTitle: 'CK 2021.1', category: 'CK', semester: '2021.1', description: 'Đề thi Cuối kỳ học kỳ 2021.1 (đã chuẩn hóa RISC-V)' },
    { id: 'CK-2020.2', title: 'Đề Cuối kỳ 2020.2', shortTitle: 'CK 2020.2', category: 'CK', semester: '2020.2', description: 'Đề thi Cuối kỳ học kỳ 2020.2' },

    // Đề Thi thử & Đề cương Ôn tập (OT)
    { id: 'TT-2025.1', title: 'Đề Thi thử kỳ 2025.1', shortTitle: 'Thi thử 2025.1', category: 'OT', semester: '2025.1', description: 'Đề thi thử Cuối kỳ chính thức 2025.1' },
    { id: 'OT-2025.2', title: 'Đề cương Ôn tập Cuối kỳ 2025.2 (P1 & P2)', shortTitle: 'Ôn tập 2025.2', category: 'OT', semester: '2025.2', description: 'Ngân hàng Ôn tập Cuối kỳ 2025.2 Phần 1 & Phần 2' },
    { id: 'OT-2025.1', title: 'Đề cương Ôn tập Cuối kỳ 2025.1', shortTitle: 'Ôn tập 2025.1', category: 'OT', semester: '2025.1', description: 'Ngân hàng Ôn tập Cuối kỳ 2025.1' },

    // Đề Thi Thực hành Lab (Lab)
    { id: 'LAB-2023.2', title: 'Đề Cuối kỳ Thực hành Lab 2023.2', shortTitle: 'Lab 2023.2', category: 'Lab', semester: '2023.2', description: 'Đề thi Cuối kỳ Thực hành RARS/MMIO 2023.2' },
    { id: 'LAB-2022.2', title: 'Đề Cuối kỳ Thực hành Lab 2022.2', shortTitle: 'Lab 2022.2', category: 'Lab', semester: '2022.2', description: 'Đề thi Cuối kỳ Thực hành RARS/MMIO 2022.2' }
  ];

  var validSetIds = {};
  root.KTMT_EXAM_SETS.forEach(function (s) {
    s.count = 0;
    s.mcqCount = 0;
    s.fillCount = 0;
    validSetIds[s.id] = s;
  });

  function formatSemester(rawYear) {
    var digits = String(rawYear).replace(/\D/g, '');
    if (digits.length === 5) {
      return digits.slice(0, 4) + '.' + digits.slice(4);
    }
    return rawYear;
  }

  function extractExamSets(sourceStr) {
    var result = [];
    if (!sourceStr) return result;
    var str = String(sourceStr);

    function addSet(id) {
      if (validSetIds[id] && !result.includes(id)) {
        result.push(id);
      }
    }

    // Tách theo dấu phân cách giữa các nguồn (|, ;, &)
    var parts = str.split(/\s*[|;&]\s*/);
    var lastCat = null;

    parts.forEach(function (part) {
      if (!part) return;
      var lower = part.toLowerCase();

      // Kiểm tra đặc biệt Đề 0012 / 0013 (Giữa kỳ 2025.2) và 0006-0009 (Giữa kỳ 2022.2)
      if (/(?:đề\s*0012|đề\s*0013)/i.test(part)) {
        addSet('GK-2025.2');
      }
      if (/(?:đề\s*000[6789])/i.test(part)) {
        addSet('GK-2022.2');
      }

      // Quét các từ khóa loại đề và năm theo thứ tự xuất hiện trong đoạn
      var tokenRx = /(lab\s*[-–]?\s*cuối\s*k[ìỳ]|lab|thi\s*thử(?:\s*k[ìỳ])?|ôn\s*tập(?:\s*cuối\s*k[ìỳ]|\s*ck)?|giữa\s*k[ìỳ]|\bgk\b|cuối\s*k[ìỳ]|\bck\b|20\d{2}\.?\d)/gi;
      var catInPart = null;
      var m;
      while ((m = tokenRx.exec(part)) !== null) {
        var tok = m[0].toLowerCase();
        if (/lab/.test(tok)) {
          catInPart = 'LAB';
          lastCat = 'LAB';
        } else if (/thi\s*thử/.test(tok)) {
          catInPart = 'TT';
          lastCat = 'TT';
        } else if (/ôn\s*tập/.test(tok)) {
          catInPart = 'OT';
          lastCat = 'OT';
        } else if (/giữa\s*k[ìỳ]|\bgk\b/.test(tok)) {
          catInPart = 'GK';
          lastCat = 'GK';
        } else if (/cuối\s*k[ìỳ]|\bck\b/.test(tok)) {
          catInPart = 'CK';
          lastCat = 'CK';
        } else if (/^20\d{2}\.?\d$/.test(tok)) {
          var sem = formatSemester(tok);
          var useCat = catInPart || lastCat;
          if (useCat) {
            addSet(useCat + '-' + sem);
          } else if (/(?:b[1-8]|câu\s*page)/i.test(lower)) {
            addSet('CK-' + sem);
          }
        }
      }
    });

    return result;
  }

  function getSeed(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  function deterministicShuffle(array, seed) {
    var arr = array.slice();
    var m = arr.length, t, i;
    var s = seed;
    while (m) {
      s = (s * 9301 + 49297) % 233280;
      i = Math.floor((s / 233280) * m--);
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
    return arr;
  }

  root.KTMT_QUESTIONS = rawList.map(function (q, qIdx) {
    var group = q.group || q.groupId || q.exerciseCode || 'General';
    var examTag = q.examTag || (q.examTags && q.examTags[0]) || 'LT';
    var examSets = Array.isArray(q.examSets) && q.examSets.length > 0 ? q.examSets.slice() : extractExamSets(q.source);
    var isFixedFill = q.questionType === 'fill';
    var rawOptions = (q.options || []).slice(0, 4); // Always exactly 4 options for MCQ
    var origCorrectIdx = q.correctIndex !== undefined ? q.correctIndex : 0;
    if (origCorrectIdx >= rawOptions.length) origCorrectIdx = 0;

    if (isFixedFill) {
      var origCorrectRaw = rawOptions[origCorrectIdx];
      var origCorrectText = typeof origCorrectRaw === 'string' ? origCorrectRaw : (origCorrectRaw ? (origCorrectRaw.text || origCorrectRaw.value || '') : '');
      var fillAccepted = [];
      if (q.acceptedAnswers && q.acceptedAnswers.length > 0) {
        q.acceptedAnswers.forEach(function (ans) {
          if (ans !== undefined && ans !== null && String(ans).trim() !== '' && !fillAccepted.includes(ans)) {
            fillAccepted.push(ans);
          }
        });
      }
      if (origCorrectText) {
        var strippedFill = origCorrectText.replace(/<[^>]+>/g, '').trim();
        if (strippedFill && !fillAccepted.includes(strippedFill)) {
          fillAccepted.push(strippedFill);
        }
      }
      var primaryFillAnswer = origCorrectText || fillAccepted[0] || '';
      var fillExp = q.explanation || '';
      if (fillExp) {
        var fillDapanRegex = /<strong>\s*(?:Đáp án(?:\s*đúng|\s*chuẩn)?|Đáp số)\s*:[\s\S]*?<\/strong>/gi;
        var newFillDapanHtml = '<strong>Đáp án đúng: ' + primaryFillAnswer + '.</strong>';
        if (fillDapanRegex.test(fillExp)) {
          fillExp = fillExp.replace(fillDapanRegex, newFillDapanHtml);
        } else {
          fillExp = fillExp + '<p>' + newFillDapanHtml + '</p>';
        }
      }

      return Object.assign({}, q, {
        group: group,
        examTag: examTag,
        examSets: examSets,
        questionType: 'fill',
        canFillBlank: true,
        correctIndex: 0,
        correctAnswer: primaryFillAnswer,
        options: [],
        acceptedAnswers: fillAccepted,
        explanation: fillExp
      });
    }

    // Gắn thẻ theo dõi đáp án đúng gốc
    var indexed = rawOptions.map(function (opt, idx) {
      return {
        isCorrect: idx === origCorrectIdx,
        text: typeof opt === 'string' ? opt : (opt.text || opt.value || '')
      };
    });

    // Xáo trộn xác định dựa trên mã câu hỏi để phân bố đều 25% A, B, C, D
    var seed = getSeed(q.id || ('q' + qIdx));
    var shuffled = deterministicShuffle(indexed, seed);

    var newCorrectIdx = 0;
    for (var i = 0; i < shuffled.length; i++) {
      if (shuffled[i].isCorrect) {
        newCorrectIdx = i;
        break;
      }
    }

    var newCorrectLetter = keysLetter[newCorrectIdx] || 'A';

    var formattedOptions = shuffled.map(function (item, idx) {
      var k = keysLetter[idx] || String(idx);
      return {
        key: k,
        text: item.text
      };
    });

    // Chuẩn bị các phương án trả lời được chấp nhận cho chế độ Tự điền
    var accepted = [newCorrectLetter];
    if (formattedOptions[newCorrectIdx] && formattedOptions[newCorrectIdx].text) {
      var rawTxt = formattedOptions[newCorrectIdx].text.replace(/<[^>]+>/g, '').trim();
      if (rawTxt.length <= 40 && !accepted.includes(rawTxt)) {
        accepted.push(rawTxt);
      }
    }
    if (q.acceptedAnswers && q.acceptedAnswers.length > 0) {
      q.acceptedAnswers.forEach(function (ans) {
        if (!accepted.includes(ans)) accepted.push(ans);
      });
    }

    // Đồng bộ nội dung và ký tự đáp án đúng trong phần giải thích
    var correctOptionText = formattedOptions[newCorrectIdx] ? formattedOptions[newCorrectIdx].text : '';
    var updatedExplanation = q.explanation || '';
    if (updatedExplanation) {
      var dapanRegex = /<strong>\s*(?:Đáp án(?:\s*đúng|\s*chuẩn)?|Đáp số)\s*:[\s\S]*?<\/strong>/gi;
      var newDapanHtml = correctOptionText
        ? '<strong>Đáp án đúng: ' + newCorrectLetter + ' (' + correctOptionText + ').</strong>'
        : '<strong>Đáp án đúng: ' + newCorrectLetter + '.</strong>';

      if (dapanRegex.test(updatedExplanation)) {
        updatedExplanation = updatedExplanation.replace(dapanRegex, newDapanHtml);
      } else {
        updatedExplanation = updatedExplanation + '<p>' + newDapanHtml + '</p>';
      }
    }

    return Object.assign({}, q, {
      group: group,
      examTag: examTag,
      examSets: examSets,
      correctIndex: newCorrectIdx,
      correctAnswer: newCorrectLetter,
      options: formattedOptions,
      acceptedAnswers: accepted,
      explanation: updatedExplanation
    });
  });

  // Thống kê số lượng câu hỏi cho từng bộ đề các năm
  root.KTMT_EXAM_SET_MAP = {};
  root.KTMT_EXAM_SETS.forEach(function (s) {
    root.KTMT_EXAM_SET_MAP[s.id] = s;
  });
  root.KTMT_QUESTIONS.forEach(function (q) {
    var isFill = q.questionType === 'fill';
    (q.examSets || []).forEach(function (setId) {
      var s = root.KTMT_EXAM_SET_MAP[setId];
      if (s) {
        s.count += 1;
        if (isFill) s.fillCount += 1;
        else s.mcqCount += 1;
      }
    });
  });

  // Kho lưu trữ Chương 5–7 (tách khỏi pool Giữa kỳ Chương 1–4, vẫn bảo toàn trong data)
  root.KTMT_QUESTIONS_ARCHIVE = root.KTMT_QUESTIONS_CH5_CH7 || [];
  root.KTMT_THEORY_ARCHIVE = root.KTMT_THEORY_CH5_CH7 || [];

  // Tạo map id -> question để tìm kiếm siêu tốc O(1)
  root.KTMT_QUESTION_MAP = {};
  root.KTMT_QUESTIONS.forEach(function (q) {
    root.KTMT_QUESTION_MAP[q.id] = q;
  });

  console.log("KTMT Total Questions Loaded & Shuffled:", root.KTMT_QUESTIONS.length);
})(typeof window !== "undefined" ? window : globalThis);
