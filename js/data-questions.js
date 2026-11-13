// js/data-questions.js - Tổng hợp, Xáo trộn xác định & Chuẩn hóa 315 câu hỏi KTMT từ 4 chương (KTMT_GK.pdf + Bổ sung)

(function (root) {
  var ch1_ch2 = root.KTMT_QUESTIONS_CH1_CH2 || [];
  var ch3 = root.KTMT_QUESTIONS_CH3 || [];
  var ch4 = root.KTMT_QUESTIONS_CH4 || [];

  var rawList = [].concat(ch1_ch2, ch3, ch4);
  var keysLetter = ['A', 'B', 'C', 'D'];

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
    var rawOptions = (q.options || []).slice(0, 4); // Always exactly 4 options
    var origCorrectIdx = q.correctIndex !== undefined ? q.correctIndex : 0;
    if (origCorrectIdx >= rawOptions.length) origCorrectIdx = 0;

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
      correctIndex: newCorrectIdx,
      correctAnswer: newCorrectLetter,
      options: formattedOptions,
      acceptedAnswers: accepted,
      explanation: updatedExplanation
    });
  });

  // Tạo map id -> question để tìm kiếm siêu tốc O(1)
  root.KTMT_QUESTION_MAP = {};
  root.KTMT_QUESTIONS.forEach(function (q) {
    root.KTMT_QUESTION_MAP[q.id] = q;
  });

  console.log("KTMT Total Questions Loaded & Shuffled:", root.KTMT_QUESTIONS.length);
})(typeof window !== "undefined" ? window : globalThis);
