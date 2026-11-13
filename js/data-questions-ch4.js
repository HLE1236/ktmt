// Dữ liệu câu hỏi bài tập và lý thuyết Chương 4 (Số học máy tính)
// Tự động tạo dựa trên file KTMT_GK.pdf - IT3030 / IT3034 / IT3283

(function(root) {
  root.KTMT_QUESTIONS_CH4 = [
  {
    "id": "lt-4.1",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4",
    "exerciseCode": "Lý thuyết 4.1",
    "source": "Mục 4.1.1 - Hệ đếm & biểu diễn chính xác",
    "examTags": [
      "LT"
    ],
    "pdfPage": 100,
    "printedPage": 99,
    "relatedTheoryId": "4.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong các giá trị thập phân sau, số nào <strong>có thể biểu diễn chính xác tuyệt đối</strong> bằng hữu hạn bit trong hệ nhị phân?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0.625 (= 5/8)",
      "0.1 (= 1/10)",
      "0.3 (= 3/10)",
      "0.7 (= 7/10)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Một số lẻ thập phân chỉ biểu diễn chính xác hữu hạn trong hệ nhị phân khi phần lẻ tối giản có mẫu số là <strong>lũy thừa của 2</strong> ($0.625 = \\frac{5}{2^3} = 0.101_2$). Các số $0.1, 0.3, 0.7$ có mẫu chứa thừa số $5$ nên lặp vô hạn tuần hoàn.</p>"
  },
  {
    "id": "lt-4.2",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4",
    "exerciseCode": "Lý thuyết 4.2",
    "source": "Mục 4.1.2 - Đại số Boolean & De Morgan",
    "examTags": [
      "LT"
    ],
    "pdfPage": 101,
    "printedPage": 100,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Theo Định lý De Morgan trong đại số Boolean, biểu thức $\\overline{A \\cdot B}$ tương đương với biểu thức nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "$\\overline{A} + \\overline{B}$",
      "$\\overline{A} \\cdot \\overline{B}$",
      "$A + B$",
      "$A \\oplus B$"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Định lý De Morgan: $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ và $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$.</p>"
  },
  {
    "id": "lt-4.3",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4",
    "exerciseCode": "Lý thuyết 4.3",
    "source": "Mục 4.1.2 - Mạch tổ hợp & Mạch dãy",
    "examTags": [
      "LT"
    ],
    "pdfPage": 102,
    "printedPage": 101,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Điểm khác biệt cơ bản giữa <strong>Mạch tổ hợp (Combinational)</strong> và <strong>Mạch dãy (Sequential)</strong> là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Mạch tổ hợp đầu ra chỉ phụ thuộc vào đầu vào hiện tại; Mạch dãy phụ thuộc cả đầu vào hiện tại và trạng thái quá khứ (nhớ)",
      "Mạch tổ hợp cần xung nhịp Clock để hoạt động; Mạch dãy không cần Clock",
      "Mạch dãy chỉ xây dựng từ cổng AND/OR/NOT, không dùng phần tử Flip-Flop",
      "Bộ giải mã Decoder và MUX là các ví dụ của mạch dãy có nhớ"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mạch tổ hợp (MUX, Decoder, Adder) không có nhớ; Mạch dãy (Thanh ghi) dùng phần tử nhớ Flip-Flop kết hợp Clock nên phụ thuộc trạng thái quá khứ.</p>"
  },
  {
    "id": "lt-4.4",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4",
    "exerciseCode": "Lý thuyết 4.4",
    "source": "Mục 4.1.3 - Dải giá trị Mã bù 2",
    "examTags": [
      "LT"
    ],
    "pdfPage": 103,
    "printedPage": 102,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Dải giá trị biểu diễn của số nguyên có dấu $n$ bit theo chuẩn <strong>Mã bù hai (Two's Complement)</strong> là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "$[-2^{n-1},\\; 2^{n-1} - 1]$",
      "$[-(2^{n-1} - 1),\\; 2^{n-1} - 1]$",
      "$[-2^n,\\; 2^n - 1]$",
      "$[0,\\; 2^n - 1]$"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Với $n$ bit có dấu bù 2, dải giá trị luôn chạy từ $-2^{n-1}$ đến $+(2^{n-1}-1)$ (vd 8-bit là $[-128, +127]$).</p>"
  },
  {
    "id": "lt-4.5",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4",
    "exerciseCode": "Lý thuyết 4.5",
    "source": "Mục 4.1.4 - Quy tắc Tràn số học",
    "examTags": [
      "LT"
    ],
    "pdfPage": 105,
    "printedPage": 104,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khi cộng hai số nguyên <strong>có dấu</strong> $n$-bit theo mã bù 2, hiện tượng tràn số học (Overflow) xảy ra khi nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Cộng hai số CÙNG DẤU mà kết quả thu được lại có dấu NGƯỢC LẠI với hai số hạng ban đầu",
      "Mỗi khi phát sinh bit nhớ ra ngoài cùng $C_{\\text{out}} = 1$",
      "Cộng hai số TRÁI DẤU có bit nhớ $C_{\\text{out}} = 1$",
      "Cộng một số với $0$"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Cộng 2 số trái dấu <strong>không bao giờ tràn</strong>; chỉ khi cộng 2 số cùng dấu (dương+dương ra âm, hoặc âm+âm ra dương) mới xảy ra Overflow. Giá trị $C_{\\text{out}}$ chỉ dùng kiểm tra tràn cho số <em>không dấu</em>.</p>"
  },
  {
    "id": "lt-4.6",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4",
    "exerciseCode": "Lý thuyết 4.6",
    "source": "Mục 4.1.4 - Nhân chia RV32M",
    "examTags": [
      "LT"
    ],
    "pdfPage": 105,
    "printedPage": 104,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong mở rộng số học RV32M của RISC-V, lệnh nào trả về <strong>32 bit cao</strong> của tích có dấu $rs1 \\times rs2$, và dấu của phần dư <code>rem</code> tuân theo quy tắc nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "mulh trả 32 bit cao có dấu; dấu của rem luôn cùng dấu với SỐ BỊ CHIA (rs1)",
      "mul trả 32 bit cao có dấu; dấu của rem luôn cùng dấu với SỐ CHIA (rs2)",
      "mulhu trả 32 bit cao có dấu; phần dư rem luôn không âm",
      "mulhsu trả 32 bit thấp; dấu của rem ngược dấu với thương div"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>mul</code> lấy 32 bit thấp; <code>mulh</code> lấy 32 bit cao (có dấu). Với phép chia: $\\text{Số bị chia} = \\text{Số chia}\\times \\text{Thương} + \\text{Số dư}$, dấu của <code>rem</code> <strong>luôn cùng dấu với số bị chia $rs1$</strong>.</p>"
  },
  {
    "id": "lt-4.7",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4",
    "exerciseCode": "Lý thuyết 4.7",
    "source": "Mục 4.1.5 - Cấu trúc IEEE 754 32-bit",
    "examTags": [
      "LT"
    ],
    "pdfPage": 106,
    "printedPage": 105,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Một số thực chuẩn IEEE 754 32-bit (Single Precision) có cấu trúc phân bố số bit (Sign | Exponent | Fraction) và hằng số lệch Bias bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1 bit S - 8 bit e - 23 bit m (Bias = 127)",
      "1 bit S - 7 bit e - 24 bit m (Bias = 63)",
      "1 bit S - 11 bit e - 52 bit m (Bias = 1023)",
      "1 bit S - 8 bit e - 23 bit m (Bias = 128)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Binary32 gồm <strong>1 bit S</strong> (bit 31), <strong>8 bit mũ $e = E + 127$</strong> (bit 30:23), <strong>23 bit phần lẻ định trị $m$</strong> (bit 22:0).</p>"
  },
  {
    "id": "lt-4.8",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4",
    "exerciseCode": "Lý thuyết 4.8",
    "source": "Mục 4.1.5 - Giá trị đặc biệt IEEE 754",
    "examTags": [
      "LT"
    ],
    "pdfPage": 106,
    "printedPage": 105,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong chuẩn IEEE 754 32-bit, mã Hexa nào biểu diễn giá trị đặc biệt <strong>$-\\infty$ (âm vô cùng)</strong>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xFF800000",
      "0x7F800000",
      "0x80000000",
      "0xFFFFFFFF"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Khi $e = 255$ (<code>11111111</code>) và $m = 0$: với $S=0$ là $+\\infty$ (<code>0x7F800000</code>), với $S=1$ là $-\\infty$ (<code>0xFF800000</code>). Nếu $m \\neq 0$ sẽ là <code>NaN</code>.</p>"
  },
  {
    "id": "c4-4.1",
    "chapter": 4,
    "groupId": "4.2.1",
    "groupTitle": "Nhóm 1: Hệ đếm, Chuyển đổi cơ số và Xác định số bit biểu diễn",
    "exerciseCode": "Bài tập 4.1",
    "source": "Đề GK 2018.2 - Mã 198 C7 & Mã 199 C2",
    "examTags": [
      "GK"
    ],
    "pdfPage": 108,
    "printedPage": 107,
    "relatedTheoryId": "4.1.1",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thập phân:",
    "acceptedAnswers": [
      "107.6875"
    ],
    "question": "Số dương $1101011.1011_2$ ở hệ cơ số 2 bằng với số nào trong các số thập phân sau đây?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "107.6875(10)",
      "107.125(10)",
      "107.129(10)",
      "107.1875(10)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Phần nguyên: $1101011_2 = 64+32+8+2+1 = 107$. Phần lẻ: $.1011_2 = 0.5 + 0.125 + 0.0625 = 0.6875$. Ghép lại: <strong>107.6875</strong>.</p>"
  },
  {
    "id": "c4-4.2a",
    "chapter": 4,
    "groupId": "4.2.1",
    "groupTitle": "Nhóm 1: Hệ đếm, Chuyển đổi cơ số và Xác định số bit biểu diễn",
    "exerciseCode": "Bài tập 4.2a",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 198, Câu 3",
    "examTags": [
      "GK"
    ],
    "pdfPage": 108,
    "printedPage": 107,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Sử dụng $9$ bit để biểu diễn một số nguyên <strong>có dấu</strong> (mã bù 2), dải biểu diễn sẽ là?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Từ -256 tới +255",
      "Từ -255 tới +256",
      "Từ 0 tới 255",
      "Từ 0 tới 511"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Với $n = 9$ bit có dấu: $[-2^{9-1},\\; 2^{9-1}-1] = [-2^8,\\; 2^8-1] = \\mathbf{[-256,\\; +255]}$.</p>"
  },
  {
    "id": "c4-4.2b",
    "chapter": 4,
    "groupId": "4.2.1",
    "groupTitle": "Nhóm 1: Hệ đếm, Chuyển đổi cơ số và Xác định số bit biểu diễn",
    "exerciseCode": "Bài tập 4.2b",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 3",
    "examTags": [
      "GK"
    ],
    "pdfPage": 108,
    "printedPage": 107,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Sử dụng $9$ bit để biểu diễn một số nguyên <strong>không dấu</strong>, dải biểu diễn sẽ là?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Từ 0 tới 511",
      "Từ 0 tới 255",
      "Từ -256 tới +255",
      "Từ -255 tới +256"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Với $n = 9$ bit không dấu: $[0,\\; 2^9 - 1] = \\mathbf{[0,\\; 511]}$.</p>"
  },
  {
    "id": "c4-4.2c",
    "chapter": 4,
    "groupId": "4.2.1",
    "groupTitle": "Nhóm 1: Hệ đếm, Chuyển đổi cơ số và Xác định số bit biểu diễn",
    "exerciseCode": "Bài tập 4.2c",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 199, Câu 18",
    "examTags": [
      "GK"
    ],
    "pdfPage": 108,
    "printedPage": 107,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Sử dụng $10$ bit để biểu diễn một số nguyên <strong>không dấu</strong>, dải biểu diễn sẽ là?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Từ 0 tới 1023",
      "Từ -511 tới +512",
      "Từ -512 tới +511",
      "Từ 0 tới 511"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Với $n = 10$ bit không dấu: $[0,\\; 2^{10} - 1] = \\mathbf{[0,\\; 1023]}$.</p>"
  },
  {
    "id": "c4-4.2d",
    "chapter": 4,
    "groupId": "4.2.1",
    "groupTitle": "Nhóm 1: Hệ đếm, Chuyển đổi cơ số và Xác định số bit biểu diễn",
    "exerciseCode": "Bài tập 4.2d",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 199, Câu 12",
    "examTags": [
      "GK"
    ],
    "pdfPage": 109,
    "printedPage": 108,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số bit:",
    "acceptedAnswers": [
      "9",
      "9 bit"
    ],
    "question": "Biết rằng $511$ là số không dấu lớn nhất trong phạm vi biểu diễn. Vậy kiểu dữ liệu số nguyên này có bao nhiêu bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "9 bit",
      "8 bit",
      "10 bit",
      "11 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ta có $2^n - 1 = 511 \\iff 2^n = 512 = 2^9 \\Rightarrow n = \\mathbf{9\\text{ bit}}$.</p>"
  },
  {
    "id": "c4-4.2e",
    "chapter": 4,
    "groupId": "4.2.1",
    "groupTitle": "Nhóm 1: Hệ đếm, Chuyển đổi cơ số và Xác định số bit biểu diễn",
    "exerciseCode": "Bài tập 4.2e",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 20",
    "examTags": [
      "GK"
    ],
    "pdfPage": 109,
    "printedPage": 108,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị:",
    "acceptedAnswers": [
      "31"
    ],
    "question": "Sử dụng $6$ bit nhị phân để biểu diễn số nguyên <strong>có dấu</strong>. Giá trị lớn nhất có thể biểu diễn là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "31",
      "15",
      "16",
      "32"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Với $n = 6$ bit có dấu, giá trị dương lớn nhất là $2^{6-1} - 1 = 2^5 - 1 = \\mathbf{31}$.</p>"
  },
  {
    "id": "c4-4.2f1",
    "chapter": 4,
    "groupId": "4.2.1",
    "groupTitle": "Nhóm 1: Hệ đếm, Chuyển đổi cơ số và Xác định số bit biểu diễn",
    "exerciseCode": "Bài tập 4.2f (Ý 1)",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 243, Câu 4",
    "examTags": [
      "GK"
    ],
    "pdfPage": 109,
    "printedPage": 108,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số bit:",
    "acceptedAnswers": [
      "8",
      "8 bit"
    ],
    "question": "Lớp học Kiến trúc máy tính có $150$ sinh viên. Biến số nguyên (không dấu) để đếm số sinh viên cần tối thiểu mấy bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "8 bit",
      "7 bit",
      "9 bit",
      "6 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vì $2^7 - 1 = 127 &lt; 150 \\le 2^8 - 1 = 255$ nên cần tối thiểu <strong>8 bit</strong>.</p>"
  },
  {
    "id": "c4-4.2f2",
    "chapter": 4,
    "groupId": "4.2.1",
    "groupTitle": "Nhóm 1: Hệ đếm, Chuyển đổi cơ số và Xác định số bit biểu diễn",
    "exerciseCode": "Bài tập 4.2f (Ý 2)",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 244, Câu 11",
    "examTags": [
      "GK"
    ],
    "pdfPage": 109,
    "printedPage": 108,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số bit:",
    "acceptedAnswers": [
      "10",
      "10 bit"
    ],
    "question": "Hội trường C2 có $1008$ chỗ ngồi. Biến số nguyên (không dấu) để đếm số ghế cần tối thiểu mấy bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "10 bit",
      "9 bit",
      "11 bit",
      "8 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vì $2^9 - 1 = 511 &lt; 1008 \\le 2^{10} - 1 = 1023$ nên cần tối thiểu <strong>10 bit</strong>.</p>"
  },
  {
    "id": "c4-4.3a",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Nhận diện Cổng logic, Mạch tổ hợp và Bộ cộng 1-bit",
    "exerciseCode": "Bài tập 4.3a (Hình a)",
    "source": "Ôn tập Cuối kỳ 2025.2 - P1, Câu 16",
    "examTags": [
      "CK"
    ],
    "pdfPage": 109,
    "printedPage": 108,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hãy cho biết hình vẽ ký hiệu cổng logic dưới đây (thân chữ D có vòng tròn nhỏ ở đầu ra) biểu diễn phép toán logic nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": "<svg width=\"240\" height=\"90\" viewBox=\"0 0 240 90\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M 24 26 L 64 26 M 24 64 L 64 64\" stroke=\"currentColor\" stroke-width=\"2.2\" fill=\"none\"/>\n  <text x=\"8\" y=\"31\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"currentColor\">A</text>\n  <text x=\"8\" y=\"69\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"currentColor\">B</text>\n  <path d=\"M 64 12 L 106 12 A 33 33 0 0 1 106 78 L 64 78 Z\" stroke=\"#2563eb\" stroke-width=\"2.5\" fill=\"rgba(37,99,235,0.12)\"/>\n  <circle cx=\"145\" cy=\"45\" r=\"5.5\" stroke=\"#2563eb\" stroke-width=\"2.2\" fill=\"var(--bg-card, #ffffff)\"/>\n  <path d=\"M 151 45 L 200 45\" stroke=\"currentColor\" stroke-width=\"2.2\" fill=\"none\"/>\n  <text x=\"208\" y=\"50\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"currentColor\">F</text>\n</svg>",
    "options": [
      "NAND",
      "NOR",
      "XOR",
      "AND"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Thân cổng hình chữ D là AND, thêm vòng tròn nhỏ đảo bit (NOT) ở đầu ra tạo thành cổng <strong>NAND ($F = \\overline{AB}$)</strong>.</p>"
  },
  {
    "id": "c4-4.3b",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Nhận diện Cổng logic, Mạch tổ hợp và Bộ cộng 1-bit",
    "exerciseCode": "Bài tập 4.3b (Hình b)",
    "source": "Ôn tập Cuối kỳ 2025.2 - P1, Câu 74",
    "examTags": [
      "CK"
    ],
    "pdfPage": 109,
    "printedPage": 108,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hãy cho biết hình vẽ ký hiệu cổng logic dưới đây (đầu nhọn giống OR kèm đường cong tách rời ở phần đuôi) biểu diễn phép toán logic nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": "<svg width=\"240\" height=\"90\" viewBox=\"0 0 240 90\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M 24 26 L 56 26 M 24 64 L 56 64\" stroke=\"currentColor\" stroke-width=\"2.2\" fill=\"none\"/>\n  <text x=\"8\" y=\"31\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"currentColor\">A</text>\n  <text x=\"8\" y=\"69\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"currentColor\">B</text>\n  <path d=\"M 48 12 Q 66 45 48 78\" stroke=\"#2563eb\" stroke-width=\"2.8\" fill=\"none\"/>\n  <path d=\"M 58 12 Q 76 45 58 78 Q 116 78 148 45 Q 116 12 58 12 Z\" stroke=\"#2563eb\" stroke-width=\"2.5\" fill=\"rgba(37,99,235,0.12)\"/>\n  <path d=\"M 148 45 L 200 45\" stroke=\"currentColor\" stroke-width=\"2.2\" fill=\"none\"/>\n  <text x=\"208\" y=\"50\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"currentColor\">F</text>\n</svg>",
    "options": [
      "XOR",
      "AND",
      "NOR",
      "NAND"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Thân cổng mũi nhọn giống OR kèm 1 đường cong song song tách rời ở đuôi là ký hiệu chuẩn của cổng <strong>XOR ($F = A \\oplus B$)</strong>.</p>"
  },
  {
    "id": "c4-4.4",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Nhận diện Cổng logic, Mạch tổ hợp và Bộ cộng 1-bit",
    "exerciseCode": "Bài tập 4.4",
    "source": "Slide Chương 4 - Trang 30 & Ôn tập Cuối kỳ 2025.2 - P1, Câu 51",
    "examTags": [
      "LT",
      "CK"
    ],
    "pdfPage": 110,
    "printedPage": 109,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Mạch logic tổ hợp dưới đây có biểu thức đại số Boolean là gì? (Ký hiệu $A'$ là NOT $A$):",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": "<svg width=\"420\" height=\"225\" viewBox=\"0 0 420 225\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"currentColor\">\n    <text x=\"28\" y=\"16\">A</text>\n    <text x=\"84\" y=\"16\">B</text>\n    <text x=\"140\" y=\"16\">C</text>\n    <text x=\"392\" y=\"142\">F</text>\n  </g>\n  <!-- Vertical true rails A, B, C -->\n  <path d=\"M 33 22 L 33 212 M 89 22 L 89 212 M 145 22 L 145 212\" stroke=\"currentColor\" stroke-width=\"1.8\" fill=\"none\"/>\n  <!-- Inverted branches A', B', C' with downward NOT gates -->\n  <g stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\">\n    <path d=\"M 33 30 L 54 30 L 54 40 M 54 62 L 54 212\"/>\n    <path d=\"M 89 30 L 110 30 L 110 40 M 110 62 L 110 212\"/>\n    <path d=\"M 145 30 L 166 30 L 166 40 M 166 62 L 166 212\"/>\n  </g>\n  <g stroke=\"#2563eb\" stroke-width=\"1.8\" fill=\"rgba(37,99,235,0.12)\">\n    <polygon points=\"46,40 62,40 54,55\"/>\n    <circle cx=\"54\" cy=\"59\" r=\"3.5\" fill=\"var(--bg-card, #fff)\"/>\n    <polygon points=\"102,40 118,40 110,55\"/>\n    <circle cx=\"110\" cy=\"59\" r=\"3.5\" fill=\"var(--bg-card, #fff)\"/>\n    <polygon points=\"158,40 174,40 166,55\"/>\n    <circle cx=\"166\" cy=\"59\" r=\"3.5\" fill=\"var(--bg-card, #fff)\"/>\n  </g>\n  <!-- Junction dots on rails -->\n  <g fill=\"currentColor\">\n    <circle cx=\"33\" cy=\"30\" r=\"2.5\"/><circle cx=\"89\" cy=\"30\" r=\"2.5\"/><circle cx=\"145\" cy=\"30\" r=\"2.5\"/>\n    <!-- AND1: A', B, C' -->\n    <circle cx=\"54\" cy=\"84\" r=\"2.5\"/><circle cx=\"89\" cy=\"95\" r=\"2.5\"/><circle cx=\"166\" cy=\"106\" r=\"2.5\"/>\n    <!-- AND2: A', B, C -->\n    <circle cx=\"54\" cy=\"126\" r=\"2.5\"/><circle cx=\"89\" cy=\"137\" r=\"2.5\"/><circle cx=\"145\" cy=\"148\" r=\"2.5\"/>\n    <!-- AND3: A, B, C' -->\n    <circle cx=\"33\" cy=\"168\" r=\"2.5\"/><circle cx=\"89\" cy=\"179\" r=\"2.5\"/><circle cx=\"166\" cy=\"190\" r=\"2.5\"/>\n  </g>\n  <!-- Horizontal wires into 3 AND gates -->\n  <g stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\">\n    <path d=\"M 54 84 L 220 84 M 89 95 L 220 95 M 166 106 L 220 106\"/>\n    <path d=\"M 54 126 L 220 126 M 89 137 L 220 137 M 145 148 L 220 148\"/>\n    <path d=\"M 33 168 L 220 168 M 89 179 L 220 179 M 166 190 L 220 190\"/>\n  </g>\n  <!-- 3 AND gates -->\n  <g stroke=\"#2563eb\" stroke-width=\"2\" fill=\"rgba(37,99,235,0.12)\">\n    <path d=\"M 220 77 L 244 77 A 18 18 0 0 1 244 113 L 220 113 Z\"/>\n    <path d=\"M 220 119 L 244 119 A 18 18 0 0 1 244 155 L 220 155 Z\"/>\n    <path d=\"M 220 161 L 244 161 A 18 18 0 0 1 244 197 L 220 197 Z\"/>\n  </g>\n  <!-- Wires from AND gates to OR gate -->\n  <g stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\">\n    <path d=\"M 262 95 L 290 95 L 290 124 L 315 124\"/>\n    <path d=\"M 262 137 L 318 137\"/>\n    <path d=\"M 262 179 L 290 179 L 290 150 L 315 150\"/>\n  </g>\n  <!-- Final OR gate -->\n  <path d=\"M 310 113 Q 324 137 310 161 Q 348 161 368 137 Q 348 113 310 113 Z\" stroke=\"#2563eb\" stroke-width=\"2.2\" fill=\"rgba(37,99,235,0.12)\"/>\n  <path d=\"M 368 137 L 386 137\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"/>\n</svg>",
    "options": [
      "$F = A'BC + A'BC' + ABC'$",
      "$F = (A + B + C')(A + B' + C)(A' + B + C)$",
      "$F = A'B'C' + A'BC + AB'C$",
      "$F = ABC' + A'BC + AB'C$"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Cổng AND 1 nối nhánh $A', B, C' \\Rightarrow A'BC'$.</li><li>Cổng AND 2 nối nhánh $A', B, C \\Rightarrow A'BC$.</li><li>Cổng AND 3 nối nhánh $A, B, C' \\Rightarrow ABC'$.</li><li>Cổng OR cộng 3 tích lại: $F = \\mathbf{A'BC + A'BC' + ABC'}$.</li></ul>"
  },
  {
    "id": "c4-4.5a",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Nhận diện Cổng logic, Mạch tổ hợp và Bộ cộng 1-bit",
    "exerciseCode": "Bài tập 4.5a",
    "source": "Slide Chương 4 - Trang 37 & Ôn tập 2025.2 - P1, Câu 17",
    "examTags": [
      "LT",
      "CK"
    ],
    "pdfPage": 111,
    "printedPage": 110,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Bản chất của bộ cộng bán phần 1-bit (Half Adder) là thực hiện hai phép toán logic nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Thực hiện phép XOR và AND",
      "Thực hiện phép OR và AND",
      "Thực hiện phép NOR và NAND",
      "Thực hiện phép OR và NAND"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Half Adder tính bit tổng $S = A \\oplus B$ (phép <strong>XOR</strong>) và bit nhớ ra $C_{\\text{out}} = A \\cdot B$ (phép <strong>AND</strong>).</p>"
  },
  {
    "id": "c4-4.5b",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Nhận diện Cổng logic, Mạch tổ hợp và Bộ cộng 1-bit",
    "exerciseCode": "Bài tập 4.5b",
    "source": "Slide Chương 4 - Trang 38 & Ôn tập 2025.2 - P1, Câu 25",
    "examTags": [
      "LT",
      "CK"
    ],
    "pdfPage": 111,
    "printedPage": 110,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Bộ cộng toàn phần 1-bit (Full Adder) có đầu vào $(A, B, C) = (1, 1, 0)$. Hãy xác định giá trị đầu ra $(S, C_{\\text{out}})$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "(0, 1)",
      "(0, 0)",
      "(1, 0)",
      "(1, 1)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Cộng 3 bit: $A + B + C = 1 + 1 + 0 = 2_{10} = 10_2 \\Rightarrow S = 0$, bit nhớ $C_{\\text{out}} = 1 \\Rightarrow$ <strong>(0, 1)</strong>.</p>"
  },
  {
    "id": "c4-4.6a",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.6a",
    "source": "Đề GK 2018.2 - Mã 198 C6 & Mã 199 C10",
    "examTags": [
      "GK"
    ],
    "pdfPage": 111,
    "printedPage": 110,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Số âm $-127_{(10)}$ bằng với số nào trong các số biểu diễn nhị phân 8-bit có dấu sau đây?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1000 0001",
      "1000 0000",
      "-0111 1111",
      "0111 1111"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$+127 = 0111\\;1111_2$. Đảo bit $\\rightarrow 1000\\;0000$, cộng 1 $\\rightarrow \\mathbf{1000\\;0001_2}$ ($-128 + 1 = -127$).</p>"
  },
  {
    "id": "c4-4.6b",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.6b",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 8",
    "examTags": [
      "GK"
    ],
    "pdfPage": 111,
    "printedPage": 110,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Số nguyên $-77_{(10)}$ được biểu diễn dưới dạng số nhị phân 8-bit bù 2 là?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1011 0011",
      "0100 1101",
      "1011 1011",
      "1011 0010"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$+77 = 64+8+4+1 = 0100\\;1101_2 \\xrightarrow{\\text{bù 1}} 1011\\;0010_2 \\xrightarrow{+1} \\mathbf{1011\\;0011_2}$.</p>"
  },
  {
    "id": "c4-4.7a",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.7a",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 243, Câu 9",
    "examTags": [
      "GK"
    ],
    "pdfPage": 112,
    "printedPage": 111,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Số nguyên 8-bit nào sau đây có dạng biểu diễn ở hệ 16 là <code>0xB2</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Là số 10110010 ở hệ 2",
      "Là số 177 ở hệ 10, không dấu",
      "Là số 00100010 ở hệ 2",
      "Là số 179 ở hệ 10, không dấu"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$\\text{B} = 1011_2$, $2 = 0010_2 \\Rightarrow \\text{0xB2} = \\mathbf{10110010_2}$ ($= 178_{10}$ không dấu).</p>"
  },
  {
    "id": "c4-4.7b",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.7b",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 244, Câu 15",
    "examTags": [
      "GK"
    ],
    "pdfPage": 112,
    "printedPage": 111,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Số nguyên 8-bit nào sau đây có dạng biểu diễn ở hệ 16 là <code>0xB2</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Là số -78 ở hệ 10, có dấu",
      "Là số 177 ở hệ 10, không dấu",
      "Là số 00100010 ở hệ 2",
      "Là số 10100000 ở hệ 2"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$\\text{0xB2} = 1011\\;0010_2$. Xét số 8-bit có dấu: $-128 + 32 + 16 + 2 = \\mathbf{-78_{(10)}}$.</p>"
  },
  {
    "id": "c4-4.8",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.8",
    "source": "Đề Cuối kỳ 2020.2 & 2021.1 - Trang 2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 112,
    "printedPage": 111,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số nguyên:",
    "acceptedAnswers": [
      "-114"
    ],
    "question": "Giả sử biến $i$ là biến số nguyên có dấu kích thước 8-bit lưu trữ với giá trị Hexa $i = \\text{0x8E}$. Giá trị thập phân của $i$ là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-114",
      "142",
      "-113",
      "-14"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$\\text{0x8E} = 1000\\;1110_2$. Với số 8-bit có dấu: $-128 + 8 + 4 + 2 = \\mathbf{-114}$.</p>"
  },
  {
    "id": "c4-4.9",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.9",
    "source": "Đề CK 2022.2 - #f9c617, 2024.2 & Ôn tập 2025.2 - P1, Câu 69",
    "examTags": [
      "CK"
    ],
    "pdfPage": 113,
    "printedPage": 112,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã Hexa 16-bit:",
    "acceptedAnswers": [
      "0xFFBC",
      "FFBC"
    ],
    "question": "Giả thiết $k$ là biến số nguyên có dấu 16-bit, cho $k = -68$. Nội dung $k$ biểu diễn theo số Hexa là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xFFBC",
      "0x00BC",
      "0x8044",
      "0xFF44"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$+68 = \\text{0x0044} = 0000\\;0000\\;0100\\;0100_2$. Đảo bit $\\rightarrow 1111\\;1111\\;1011\\;1011_2$, cộng $1 \\rightarrow \\mathbf{\\text{0xFFBC}}$.</p>"
  },
  {
    "id": "c4-4.10a",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.10a",
    "source": "Đề CK 2022.2, 2024.2 - #7151 & Ôn tập 2025.2 Câu 73",
    "examTags": [
      "CK"
    ],
    "pdfPage": 113,
    "printedPage": 112,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thập phân:",
    "acceptedAnswers": [
      "-13"
    ],
    "question": "Giả thiết $i$ là biến số nguyên có dấu 32-bit, cho nội dung $i = \\text{0xFFFFFFF3}$. Giá trị của $i$ theo số thập phân là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-13",
      "-4",
      "-3",
      "-12"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Do 7 chữ số đầu đều là <code>F</code>, lấy chữ số cuối trừ 16: $3 - 16 = \\mathbf{-13}$.</p>"
  },
  {
    "id": "c4-4.10b",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.10b",
    "source": "Đề CK 2024.1 - #0182da & Ôn tập 2025.2 Câu 45",
    "examTags": [
      "CK"
    ],
    "pdfPage": 113,
    "printedPage": 112,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thập phân:",
    "acceptedAnswers": [
      "-12"
    ],
    "question": "Giả thiết $i$ là biến số nguyên có dấu 32-bit, cho nội dung $i = \\text{0xFFFFFFF4}$. Giá trị của $i$ theo số thập phân là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-12",
      "-11",
      "-4",
      "12"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lấy chữ số cuối trừ 16: $4 - 16 = \\mathbf{-12}$.</p>"
  },
  {
    "id": "c4-4.11a",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.11a",
    "source": "Đề Cuối kỳ 2023.1 - #581f03",
    "examTags": [
      "CK"
    ],
    "pdfPage": 114,
    "printedPage": 113,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thập phân:",
    "acceptedAnswers": [
      "-6"
    ],
    "question": "Cho lệnh hợp ngữ RISC-V: <code>addi t0, s0, 0xFFA</code> (hằng số 12-bit dạng bù 2). Giá trị thập phân của toán hạng tức thời này là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-6",
      "4010",
      "-4010",
      "6"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Với hằng số 12-bit có dấu <code>0xFFA</code> (hai chữ đầu là FF, chữ cuối $A=10$): $10 - 16 = \\mathbf{-6}$.</p>"
  },
  {
    "id": "c4-4.11b",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.11b",
    "source": "Đề GK 2024.1 - #30a33e & Ôn tập 2025.2 Câu 48",
    "examTags": [
      "GK",
      "CK"
    ],
    "pdfPage": 114,
    "printedPage": 113,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thập phân:",
    "acceptedAnswers": [
      "511"
    ],
    "question": "Giá trị thập phân của toán hạng immediate trong lệnh <code>addi t0, s0, 0x1FF</code> là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "511",
      "-511",
      "2047",
      "-2047"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>0x1FF</code> có bit dấu bằng 0 (số dương): $1\\times 16^2 + 15\\times 16 + 15 = 256 + 240 + 15 = \\mathbf{511}$.</p>"
  },
  {
    "id": "c4-4.12a",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.12a",
    "source": "Đề Giữa kỳ 2023.2 - Đề 1, Câu 2",
    "examTags": [
      "GK"
    ],
    "pdfPage": 114,
    "printedPage": 113,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Biểu diễn hai số nguyên có dấu $+105$ và $-42$ theo mã bù hai 8-bit và 16-bit dưới dạng số Hexa lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "+105: 0x69 (8b), 0x0069 (16b) ; -42: 0xD6 (8b), 0xFFD6 (16b)",
      "+105: 0x69 (8b), 0x0069 (16b) ; -42: 0xD5 (8b), 0xFFD5 (16b)",
      "+105: 0x59 (8b), 0x0059 (16b) ; -42: 0xAA (8b), 0xFFAA (16b)",
      "+105: 0x69 (8b), 0xFF69 (16b) ; -42: 0xD6 (8b), 0x00D6 (16b)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>$+105 = 64+32+8+1 = 0110\\;1001_2 = \\text{0x69}$ (16-bit mở rộng 0: <code>0x0069</code>).</li><li>$+42 = 0010\\;1010_2 \\xrightarrow{\\text{bù 2}} 1101\\;0110_2 = \\text{0xD6}$ (16-bit mở rộng dấu F: <code>0xFFD6</code>).</li></ul>"
  },
  {
    "id": "c4-4.12b",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.12b",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0008 C4 & Đề 0006 C2",
    "examTags": [
      "GK"
    ],
    "pdfPage": 114,
    "printedPage": 113,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong biểu diễn số nguyên 8-bit có dấu (bù 2), cặp mã Hexa của hai số $-86$ và $-19$, cùng giá trị thập phân của <code>0011 1101</code> ($\\text{0x3D}$) lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-86 = 0xAA ; -19 = 0xED ; 0x3D = +61",
      "-86 = 0xAC ; -19 = 0xEC ; 0x3D = +61",
      "-86 = 0xA9 ; -19 = 0xED ; 0x3D = +59",
      "-86 = 0xAA ; -19 = 0xEF ; 0x3D = +63"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>$-86$: $+86 = 0101\\;0110_2 \\xrightarrow{\\text{bù 2}} 1010\\;1010_2 = \\text{0xAA}$.</li><li>$-19$: $+19 = 0001\\;0011_2 \\xrightarrow{\\text{bù 2}} 1110\\;1101_2 = \\text{0xED}$.</li><li>$0011\\;1101_2 = 32+16+8+4+1 = +61$.</li></ul>"
  },
  {
    "id": "c4-4.13a",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.13a",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 198, Câu 16",
    "examTags": [
      "GK"
    ],
    "pdfPage": 115,
    "printedPage": 114,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã Hexa:",
    "acceptedAnswers": [
      "2763",
      "0x2763"
    ],
    "question": "Cho 4 số nguyên 16-bit <strong>có dấu</strong> có mã Hexa tương ứng: <code>8792</code>, <code>2763</code>, <code>F652</code>, <code>A876</code>. Số nào là số lớn nhất?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2763",
      "A876",
      "F652",
      "8792"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ba số <code>8792, F652, A876</code> đều bắt đầu bằng chữ số $\\ge 8$ (bit dấu = 1 $\\Rightarrow$ số âm). Chỉ duy nhất <code>2763</code> bắt đầu bằng $2 &lt; 8$ là số dương $\\Rightarrow$ lớn nhất.</p>"
  },
  {
    "id": "c4-4.13b",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.13b",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 17",
    "examTags": [
      "GK"
    ],
    "pdfPage": 115,
    "printedPage": 114,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã Hexa:",
    "acceptedAnswers": [
      "F652",
      "0xF652"
    ],
    "question": "Cho 4 số nguyên 16-bit <strong>không dấu</strong> có mã Hexa tương ứng: <code>8792</code>, <code>2763</code>, <code>F652</code>, <code>A876</code>. Số nào là số lớn nhất?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "F652",
      "8792",
      "A876",
      "2763"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Khi xét số không dấu, so sánh trực tiếp từ trái sang phải: $F &gt; A &gt; 8 &gt; 2 \\Rightarrow$ lớn nhất là <strong>F652</strong>.</p>"
  },
  {
    "id": "c4-4.13c",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.13c",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 199, Câu 11",
    "examTags": [
      "GK"
    ],
    "pdfPage": 115,
    "printedPage": 114,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã Hexa:",
    "acceptedAnswers": [
      "2AB7",
      "0x2AB7"
    ],
    "question": "Cho 4 số nguyên 16-bit <strong>không dấu</strong> có mã Hexa: <code>79F1</code>, <code>2AB7</code>, <code>8000</code>, <code>FFAA</code>. Số nào là số nhỏ nhất?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2AB7",
      "8000",
      "79F1",
      "FFAA"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>So sánh chữ số Hexa đầu tiên: $2 &lt; 7 &lt; 8 &lt; F \\Rightarrow$ nhỏ nhất là <strong>2AB7</strong>.</p>"
  },
  {
    "id": "c4-4.14a",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.14a",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0006, Câu 1",
    "examTags": [
      "GK"
    ],
    "pdfPage": 115,
    "printedPage": 114,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Sắp xếp 3 số nguyên 8-bit <strong>có dấu</strong> sau theo thứ tự <strong>giảm dần</strong>: $-108$ (hệ 10), $0001\\;0001$ (hệ 2), $91$ (hệ 16)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0001 0001 > -108 > 91",
      "91 > 0001 0001 > -108",
      "91 > -108 > 0001 0001",
      "-108 > 91 > 0001 0001"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$0001\\;0001_2 = +17$; $\\text{0x91} = 1001\\;0001_2 = -128 + 16 + 1 = -111$. Vì $+17 &gt; -108 &gt; -111$ nên giảm dần là: <strong>0001 0001 &gt; -108 &gt; 91</strong>.</p>"
  },
  {
    "id": "c4-4.14b",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.14b",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0009, Câu 2",
    "examTags": [
      "GK"
    ],
    "pdfPage": 115,
    "printedPage": 114,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Mảng A gồm 3 phần tử 8-bit <strong>có dấu</strong> ở địa chỉ cơ sở <code>0x40000E</code> lần lượt là: <code>0xCE</code>, <code>0x12</code>, <code>0x20</code>. Thứ tự giá trị <strong>tăng dần</strong> là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xCE < 0x12 < 0x20",
      "0x12 < 0x20 < 0xCE",
      "0x20 < 0x12 < 0xCE",
      "0x12 < 0xCE < 0x20"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>0xCE</code> bắt đầu bằng $C \\ge 8$ nên là số âm ($-50$), còn <code>0x12</code> ($+18$) $&lt;$ <code>0x20</code> ($+32$) $\\Rightarrow$ <strong>0xCE &lt; 0x12 &lt; 0x20</strong>.</p>"
  },
  {
    "id": "c4-4.14c",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.14c",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0008, Câu 2",
    "examTags": [
      "GK"
    ],
    "pdfPage": 116,
    "printedPage": 115,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Mảng A gồm 3 phần tử 8-bit <strong>có dấu</strong> ở địa chỉ cơ sở <code>0x400008</code> lần lượt là: <code>0x38</code>, <code>0x00</code>, <code>0xD6</code>. Thứ tự giá trị <strong>tăng dần</strong> là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xD6 < 0x00 < 0x38",
      "0x00 < 0x38 < 0xD6",
      "0x00 < 0xD6 < 0x38",
      "0x38 < 0x00 < 0xD6"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>0xD6</code> là số âm ($-42$), còn $0 &lt; 56$ (`0x38`) $\\Rightarrow$ <strong>0xD6 &lt; 0x00 &lt; 0x38</strong>.</p>"
  },
  {
    "id": "c4-4.14d",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.14d",
    "source": "Đề Giữa kỳ 2025.2 - Đề 0013, Câu 73",
    "examTags": [
      "GK"
    ],
    "pdfPage": 116,
    "printedPage": 115,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Mảng A gồm 3 phần tử 8-bit <strong>có dấu</strong> tại <code>0x400009..0x40000B</code> (Memory Map Đề 0013) lần lượt là: <code>0xDE</code>, <code>0x74</code>, <code>0x00</code>. Thứ tự giá trị <strong>tăng dần</strong> là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xDE < 0x00 < 0x74",
      "0x00 < 0x74 < 0xDE",
      "0x00 < 0xDE < 0x74",
      "0x74 < 0x00 < 0xDE"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>0xDE</code> bắt đầu bằng $D \\ge 8$ là số âm ($-34$), tiếp đến <code>0x00</code> ($0$) rồi <code>0x74</code> ($+116$) $\\Rightarrow$ <strong>0xDE &lt; 0x00 &lt; 0x74</strong>.</p>"
  },
  {
    "id": "c4-4.14e",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.14e",
    "source": "Đề Giữa kỳ 2025.2 - Đề 0013, Câu 942",
    "examTags": [
      "GK"
    ],
    "pdfPage": 116,
    "printedPage": 115,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Mảng A gồm 3 phần tử 8-bit <strong>có dấu</strong> tại <code>0x400014..0x400016</code> lần lượt là: <code>0xB7</code>, <code>0x59</code>, <code>0x34</code>. Thứ tự giá trị <strong>tăng dần</strong> là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xB7 < 0x34 < 0x59",
      "0x34 < 0x59 < 0xB7",
      "0x59 < 0x34 < 0xB7",
      "0x34 < 0xB7 < 0x59"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>0xB7</code> là số âm ($-73$), còn <code>0x34</code> ($+52$) $&lt;$ <code>0x59</code> ($+89$) $\\Rightarrow$ <strong>0xB7 &lt; 0x34 &lt; 0x59</strong>.</p>"
  },
  {
    "id": "c4-4.14f",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.14f",
    "source": "Đề Giữa kỳ 2025.2 - Đề 0012, Câu 106",
    "examTags": [
      "GK"
    ],
    "pdfPage": 116,
    "printedPage": 115,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Mảng A gồm 3 phần tử 8-bit <strong>có dấu</strong> tại <code>0x400009..0x40000B</code> (Memory Map Đề 0012) lần lượt là: <code>0x0B</code>, <code>0x8B</code>, <code>0x03</code>. Thứ tự giá trị <strong>tăng dần</strong> là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x8B < 0x03 < 0x0B",
      "0x03 < 0x0B < 0x8B",
      "0x0B < 0x8B < 0x03",
      "0x03 < 0x8B < 0x0B"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>0x8B</code> là số âm ($-117$), còn <code>0x03</code> ($+3$) $&lt;$ <code>0x0B</code> ($+11$) $\\Rightarrow$ <strong>0x8B &lt; 0x03 &lt; 0x0B</strong>.</p>"
  },
  {
    "id": "c4-4.15",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.15",
    "source": "Đề GK 2018.2 - Mã 198 C8 & Mã 199 C9",
    "examTags": [
      "GK"
    ],
    "pdfPage": 116,
    "printedPage": 115,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập 8 bit kết quả:",
    "acceptedAnswers": [
      "10100010",
      "1010 0010"
    ],
    "question": "Thực hiện phép cộng hai số 8-bit không dấu $1010\\;1000 + 1111\\;1010$, kết quả 8 bit lưu trong thanh ghi sẽ bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1010 0010",
      "1000 0010",
      "1000 0100",
      "1010 0100"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>4 bit thấp: $1000 + 1010 = 1\\;0010$ (viết <code>0010</code>, nhớ $1$). 4 bit cao: $1010 + 1111 + 1 = 1\\;1010$ (giữ <code>1010</code>, $C_{\\text{out}}=1$). Vậy 8 bit kết quả là <strong>1010 0010</strong>.</p>"
  },
  {
    "id": "c4-4.16",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.16",
    "source": "Ôn tập Cuối kỳ 2025.2 - P1, Câu 2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 117,
    "printedPage": 116,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Xét 4 khẳng định khi thực hiện phép cộng hai số nguyên $n$-bit:<br>(1) Cộng không dấu $n$-bit, nếu $C_{\\text{out}} = 1 \\rightarrow$ kết quả sai.<br>(2) Cộng có dấu $n$-bit, nếu $C_{\\text{out}} = 1$ và cùng dấu $\\rightarrow$ kết quả sai.<br>(3) Cộng có dấu $n$-bit, nếu hai số trái dấu $\\rightarrow$ kết quả đúng.<br>(4) Cộng có dấu cùng dấu ra kết quả cùng dấu $\\rightarrow$ chưa kết luận được.<br>Những khẳng định nào ĐÚNG?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Chỉ (1) và (3)",
      "Chỉ (1) và (2)",
      "Chỉ (2) và (3)",
      "Cả (1), (3) và (4)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>(1) Đúng: cộng không dấu tràn khi $C_{\\text{out}} = 1$.</li><li>(2) Sai: vd $(-1)+(-1)=-2$ có $C_{\\text{out}}=1$ nhưng kết quả vẫn đúng.</li><li>(3) Đúng: cộng 2 số trái dấu không bao giờ tràn.</li><li>(4) Sai: cộng cùng dấu ra cùng dấu chắc chắn đúng.</li></ul>"
  },
  {
    "id": "c4-4.17a",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.17a",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 243, Câu 12",
    "examTags": [
      "GK"
    ],
    "pdfPage": 117,
    "printedPage": 116,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Tổng của 2 số 8-bit <strong>có dấu</strong> nào dưới đây sẽ bị hiện tượng tràn số học (Overflow)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "10010001 + 11001000",
      "01010001 + 00101100",
      "10010001 + 01001000",
      "00010001 + 11001000"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Loại các cặp trái dấu. Xét <code>10010001 + 11001000</code> $= (-111) + (-56) = -167 &lt; -128$ (cộng 2 số âm ra dương <code>01011001</code>) $\\Rightarrow$ <strong>Tràn âm</strong>.</p>"
  },
  {
    "id": "c4-4.17b",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.17b",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 244, Câu 5",
    "examTags": [
      "GK"
    ],
    "pdfPage": 118,
    "printedPage": 117,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Tổng của 2 số 8-bit <strong>có dấu</strong> nào dưới đây sẽ bị hiện tượng tràn số học (Overflow)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "01010001 + 01001000",
      "00010001 + 11001000",
      "00011001 + 00111000",
      "10010001 + 01001000"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Xét <code>01010001 + 01001000</code> $= (+81) + (+72) = +153 &gt; +127$ (cộng 2 số dương ra kết quả bit dấu bằng 1) $\\Rightarrow$ <strong>Tràn dương</strong>.</p>"
  },
  {
    "id": "c4-4.18",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.18",
    "source": "Đề CK 2022.2 - #6d82ac, 2024.2 & Ôn tập 2025.2 - P1, Câu 66",
    "examTags": [
      "CK"
    ],
    "pdfPage": 118,
    "printedPage": 117,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị sum:",
    "acceptedAnswers": [
      "98"
    ],
    "question": "Trong C, biến kiểu <code>char</code> là số nguyên có dấu 8-bit. Kết quả của biến <code>sum</code> in ra màn hình khi chạy đoạn chương trình dưới đây là:",
    "codeBlock": "#include <stdio.h>\nint main() {\n    char a = -91;\n    char b = -67;\n    char sum = a + b;\n    printf(\"sum = %d\", sum);\n    return 0;\n}",
    "codeLang": "c",
    "svgDiagram": null,
    "options": [
      "98",
      "-98",
      "-158",
      "158"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tổng toán học $S = -91 + (-67) = -158 &lt; -128$ (tràn âm 8-bit). Lấy $-158 + 256 = \\mathbf{+98}$.</p>"
  },
  {
    "id": "c4-4.19a",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.19a",
    "source": "Đề Cuối kỳ 2025.1 - #e3221e",
    "examTags": [
      "CK"
    ],
    "pdfPage": 119,
    "printedPage": 118,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị z:",
    "acceptedAnswers": [
      "-119"
    ],
    "question": "Giả thiết các biến đều là số nguyên 8-bit có dấu (<code>signed char</code>). Cho $x = 85$, $y = 52$. Tính $z = x + y$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-119",
      "137",
      "-137",
      "119"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$S = 85 + 52 = 137 &gt; 127$ (tràn dương) $\\Rightarrow z = 137 - 256 = \\mathbf{-119}$.</p>"
  },
  {
    "id": "c4-4.19b",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.19b",
    "source": "Đề GK 2024.1 - #f2d536 & Ôn tập 2025.2 Câu 40",
    "examTags": [
      "GK",
      "CK"
    ],
    "pdfPage": 119,
    "printedPage": 118,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả:",
    "acceptedAnswers": [
      "-126"
    ],
    "question": "Với số nguyên 8-bit có dấu (<code>signed char</code>), kết quả của phép cộng $+65 + 65$ lưu trong biến 8-bit là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-126",
      "130",
      "-127",
      "-128"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$S = 65 + 65 = 130 &gt; 127$ (tràn dương) $\\Rightarrow 130 - 256 = \\mathbf{-126}$.</p>"
  },
  {
    "id": "c4-4.19c",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.19c",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0007, Câu 1a",
    "examTags": [
      "GK"
    ],
    "pdfPage": 119,
    "printedPage": 118,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả:",
    "acceptedAnswers": [
      "-126"
    ],
    "question": "Với số nguyên 8-bit có dấu (<code>signed char</code>), kết quả của phép cộng $5 + 125$ lưu trong biến 8-bit là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-126",
      "130",
      "-125",
      "127"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$S = 5 + 125 = 130 &gt; 127 \\Rightarrow 130 - 256 = \\mathbf{-126}$.</p>"
  },
  {
    "id": "c4-4.19d",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.19d",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0007, Câu 1b",
    "examTags": [
      "GK"
    ],
    "pdfPage": 119,
    "printedPage": 118,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả:",
    "acceptedAnswers": [
      "106",
      "+106"
    ],
    "question": "Với số nguyên 8-bit có dấu (<code>signed char</code>), kết quả của phép cộng $(-108) + (-42)$ lưu trong biến 8-bit là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "+106",
      "-150",
      "-106",
      "+150"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$S = -108 - 42 = -150 &lt; -128$ (tràn âm) $\\Rightarrow -150 + 256 = \\mathbf{+106}$.</p>"
  },
  {
    "id": "c4-4.20a",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.20a",
    "source": "Đề CK 2023.1 - #cd9132 & Ôn tập 2025.2 Câu 7",
    "examTags": [
      "CK"
    ],
    "pdfPage": 119,
    "printedPage": 118,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thanh ghi <code>s0</code> đang lưu giá trị thập phân $1024$. Phạm vi giá trị của thanh ghi <code>s1</code> để gây ra tràn số học (Overflow) khi thực hiện <code>add s2, s0, s1</code> là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x7FFFFC00 - 0x7FFFFFFF",
      "0x7FFFFC01 - 0x80000000",
      "0x7FFFFBFF - 0x7FFFFFFF",
      "0x7FFFFC00 - 0x80000000"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$K = 1024 = \\text{0x400}$. Ngưỡng nhỏ nhất gây tràn là $\\text{0x80000000} - \\text{0x400} = \\text{0x7FFFFC00}$, cận trên dương tối đa là <code>0x7FFFFFFF</code>.</p>"
  },
  {
    "id": "c4-4.20b",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.20b",
    "source": "Đề Giữa kỳ 2024.1 - #e83dac",
    "examTags": [
      "GK"
    ],
    "pdfPage": 119,
    "printedPage": 118,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thanh ghi <code>t0</code> đang lưu giá trị thập phân $512$. Phạm vi giá trị nào của thanh ghi <code>t1</code> sẽ gây ra tràn số học khi thực hiện lệnh <code>add t2, t0, t1</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x7FFFFE00 - 0x7FFFFFFF",
      "0x7FFFFD00 - 0x7FFFFFFF",
      "0x7FFFFDFF - 0x7FFFFFFF",
      "0x7FFFFE00 - 0x80000000"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$K = 512 = \\text{0x200}$. Ngưỡng nhỏ nhất gây tràn: $\\text{0x80000000} - \\text{0x200} = \\text{0x7FFFFE00}$ đến $\\text{0x7FFFFFFF}$.</p>"
  },
  {
    "id": "c4-4.21",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.21",
    "source": "Ôn tập CK 2025.1 C15 & Ôn tập 2025.2 - P2 C59",
    "examTags": [
      "CK"
    ],
    "pdfPage": 120,
    "printedPage": 119,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đoạn lệnh RISC-V nào sau đây có xảy ra hiện tượng tràn số học (OVERFLOW)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "li x8, 0xFFFFFFFF -> li x9, 0x80000000 -> add x10, x8, x9",
      "li x8, 0xFFFFFFFF -> li x9, 0xFFFFFFFF -> add x10, x8, x9",
      "li x8, 0xFFFFFFFF -> li x9, 0x80000000 -> sub x10, x8, x9",
      "li x8, 0xFFFFFFFF -> li x9, 0xFFFFFFFF -> sub x10, x8, x9"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>0xFFFFFFFF</code> $= -1$, <code>0x80000000</code> $= -2^{31}$ (số âm nhỏ nhất 32-bit). Thực hiện <code>add</code> cho $(-1) + (-2^{31}) = -(2^{31}+1) &lt; -2^{31}$ nên lật thành số dương $\\Rightarrow$ <strong>Overflow</strong>.</p>"
  },
  {
    "id": "c4-4.22a",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.22 (Ý 4.1)",
    "source": "Đề Giữa kỳ 2021.1 - IT3030E, Problem 4.1",
    "examTags": [
      "GK"
    ],
    "pdfPage": 121,
    "printedPage": 120,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho $s_0 = \\text{0x80000000}$ và $s_1 = \\text{0xD0000000}$. Sau lệnh <code>add t0, s0, s1</code>, giá trị Hexa của <code>t0</code> và trạng thái tràn số học (Overflow) là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "t0 = 0x50000000 ; Có tràn số học (Overflow)",
      "t0 = 0x50000000 ; Không tràn số học",
      "t0 = 0xB0000000 ; Có tràn số học",
      "t0 = 0xD0000000 ; Không tràn số học"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Cộng 2 số âm ($s_0 &lt; 0, s_1 &lt; 0$): $8 + D = 15_{16} \\Rightarrow t_0 = \\text{0x50000000}$ (bit dấu = 0, số dương) $\\Rightarrow$ <strong>Có Overflow</strong>.</p>"
  },
  {
    "id": "c4-4.22b",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.22 (Ý 4.2)",
    "source": "Đề Giữa kỳ 2021.1 - IT3030E, Problem 4.2",
    "examTags": [
      "GK"
    ],
    "pdfPage": 121,
    "printedPage": 120,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho $s_0 = \\text{0x80000000}$ và $s_1 = \\text{0xD0000000}$. Sau lệnh <code>sub t0, s0, s1</code>, giá trị Hexa của <code>t0</code> và trạng thái tràn số học là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "t0 = 0xB0000000 ; Không tràn số học",
      "t0 = 0x50000000 ; Có tràn số học",
      "t0 = 0xB0000000 ; Có tràn số học",
      "t0 = 0x30000000 ; Không tràn số học"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$s_0 - s_1 = \\text{0x80000000} + (-\\text{0xD0000000}) = \\text{0x80000000} + \\text{0x30000000} = \\text{0xB0000000}$. Do cộng hai số trái dấu ($s_0 &lt; 0$ và $-s_1 &gt; 0$) nên <strong>Không tràn</strong>.</p>"
  },
  {
    "id": "c4-4.22c",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.22 (Ý 4.3)",
    "source": "Đề Giữa kỳ 2021.1 - IT3030E, Problem 4.3",
    "examTags": [
      "GK"
    ],
    "pdfPage": 121,
    "printedPage": 120,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho $s_0 = \\text{0x80000000}$ và $s_1 = \\text{0xD0000000}$. Sau hai lệnh <code>add t0, s0, s1</code> rồi <code>add t0, t0, s0</code>, kết quả cuối cùng trong <code>t0</code> là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "t0 = 0xD0000000 (lệnh 1 tràn, bản thân lệnh 2 cộng trái dấu không tràn)",
      "t0 = 0xD0000000 (cả 2 lệnh đều tràn)",
      "t0 = 0x50000000 (không lệnh nào tràn)",
      "t0 = 0x00000000 (tràn âm ở lệnh 2)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Sau lệnh 1: $t_0 = \\text{0x50000000}$ (tràn). Lệnh 2 tính $\\text{0x50000000} + \\text{0x80000000} = \\text{0xD0000000}$ (cộng dương với âm nên bản thân lệnh 2 không tràn).</p>"
  },
  {
    "id": "c4-4.23",
    "chapter": 4,
    "groupId": "4.2.5",
    "groupTitle": "Nhóm 5: Lệnh Chia và Lấy phần dư số nguyên (div, rem)",
    "exerciseCode": "Bài tập 4.23",
    "source": "Đề Giữa kỳ 2024.1 - #054a4a",
    "examTags": [
      "GK"
    ],
    "pdfPage": 122,
    "printedPage": 121,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Giá trị của các thanh ghi <code>t0, t1</code> sau khi thực hiện đoạn mã RISC-V dưới đây là gì?",
    "codeBlock": "li s0, 67\nli s1, -13\ndiv t0, s0, s1\nrem t1, s0, s1",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "t0 = 0xfffffffb, t1 = 0x00000002",
      "t0 = 0xfffffffb, t1 = 0x00000010",
      "t0 = 0x00000005, t1 = 0xfffffffd",
      "t0 = 0xfffffffb, t1 = 0x00000005"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$s_0 = +67$, $s_1 = -13$: Thương $t_0 = 67 / (-13) = -5 = \\mathbf{\\text{0xfffffffb}}$. Phần dư luôn cùng dấu số bị chia ($+67 &gt; 0$): $t_1 = +2 = \\mathbf{\\text{0x00000002}}$.</p>"
  },
  {
    "id": "c4-4.24a",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.24a",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 243, Câu 2",
    "examTags": [
      "GK"
    ],
    "pdfPage": 123,
    "printedPage": 122,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số:",
    "acceptedAnswers": [
      "0.4"
    ],
    "question": "Số thực dấu phẩy động chuẩn IEEE 754 <strong>không thể</strong> biểu diễn chính xác tuyệt đối được số nào dưới đây?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0.4",
      "0.5",
      "12",
      "2"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$0.4 = \\frac{2}{5}$ có mẫu chia hết cho $5$ nên khi đổi sang nhị phân tạo thành dãy bit tuần hoàn vô hạn $0.01100110\\dots_2$, không thể biểu diễn chính xác tuyệt đối.</p>"
  },
  {
    "id": "c4-4.24b",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.24b",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 244, Câu 17",
    "examTags": [
      "GK"
    ],
    "pdfPage": 123,
    "printedPage": 122,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số:",
    "acceptedAnswers": [
      "0.7"
    ],
    "question": "Số thực dấu phẩy động chuẩn IEEE 754 <strong>không thể</strong> biểu diễn chính xác tuyệt đối được số nào dưới đây?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0.7",
      "-8",
      "-1",
      "1"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$0.7 = \\frac{7}{10}$ có mẫu chứa thừa số nguyên tố $5 \\neq 2$, lặp vô hạn tuần hoàn trong hệ nhị phân nên bị làm tròn.</p>"
  },
  {
    "id": "c4-4.25",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.25",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 198, Câu 5",
    "examTags": [
      "GK"
    ],
    "pdfPage": 123,
    "printedPage": 122,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thập phân:",
    "acceptedAnswers": [
      "-4"
    ],
    "question": "Số dấu phẩy động 32-bit IEEE 754 sau có giá trị thập phân bằng bao nhiêu?<br><code>1100 0000 1000 0000 0000 0000 0000 0000</code>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-4",
      "-5",
      "-2.5",
      "-8"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$S = 1$ (âm); $e = 1000\\;0001_2 = 129 \\Rightarrow E = 129 - 127 = 2$; $m = 0 \\Rightarrow 1.m = 1.0$. Giá trị $X = -1.0 \\times 2^2 = \\mathbf{-4}$.</p>"
  },
  {
    "id": "c4-4.26a",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.26a",
    "source": "Đề CK 2022.2, 2024.2 - #bd4c95 & Ôn tập 2025.2 C53",
    "examTags": [
      "CK"
    ],
    "pdfPage": 124,
    "printedPage": 123,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị X:",
    "acceptedAnswers": [
      "3"
    ],
    "question": "Giả thiết $X$ là biến số dấu phẩy động chuẩn IEEE 754 32-bit có nội dung $X = \\text{0x40400000}$. Giá trị thập phân của $X$ là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "3",
      "-3",
      "2",
      "4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>404</code> $= 0100\\;0000\\;0100_2 \\Rightarrow S=0, e=128\\; (E=1), 1.m = 1.1_2 = 1.5 \\Rightarrow X = +1.5\\times 2^1 = \\mathbf{3}$.</p>"
  },
  {
    "id": "c4-4.26b",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.26b",
    "source": "Đề CK 2024.1 - #e73be8 & Ôn tập 2025.2 C39",
    "examTags": [
      "CK"
    ],
    "pdfPage": 124,
    "printedPage": 123,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị X:",
    "acceptedAnswers": [
      "5"
    ],
    "question": "Cho nội dung $X = \\text{0x40A00000}$ theo chuẩn IEEE 754 32-bit. Giá trị thập phân của $X$ là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "5",
      "6",
      "-5",
      "4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>40A</code> $= 0100\\;0000\\;1010_2 \\Rightarrow S=0, e=129\\; (E=2), 1.m = 1.01_2 = 1.25 \\Rightarrow X = +1.25\\times 2^2 = \\mathbf{5}$.</p>"
  },
  {
    "id": "c4-4.27a",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.27a",
    "source": "Đề Giữa kỳ 2024.1 - #94ec4c",
    "examTags": [
      "GK"
    ],
    "pdfPage": 125,
    "printedPage": 124,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thập phân:",
    "acceptedAnswers": [
      "-9.625"
    ],
    "question": "Số thực dấu phẩy động IEEE 754 32-bit được biểu diễn bởi word <code>0xC11A0000</code> có giá trị thập phân là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-9.625",
      "-9.375",
      "-10.625",
      "+9.625"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>C11A</code> $= 1100\\;0001\\;0001\\;1010_2 \\Rightarrow S=1, e=130\\; (E=3), 1.m = 1.001101_2$. Dịch dấu phẩy 3 bit: $-1001.101_2 = -(8+1+0.5+0.125) = \\mathbf{-9.625}$.</p>"
  },
  {
    "id": "c4-4.27b",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.27b",
    "source": "Ôn tập Cuối kỳ 2025.2 - P1, Câu 30",
    "examTags": [
      "CK"
    ],
    "pdfPage": 125,
    "printedPage": 124,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thập phân:",
    "acceptedAnswers": [
      "-28"
    ],
    "question": "Giả thiết $X$ là số thực dấu phẩy động IEEE 754 32-bit được biểu diễn bởi <code>0xC1E00000</code>. Giá trị của $X$ ở hệ thập phân là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-28",
      "-14",
      "-24",
      "-30"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>C1E</code> $= 1100\\;0001\\;1110_2 \\Rightarrow S=1, e=131\\; (E=4), 1.m = 1.11_2$. Dịch dấu phẩy 4 bit: $-11100_2 = -(16+8+4) = \\mathbf{-28}$.</p>"
  },
  {
    "id": "c4-4.28a",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.28a",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B5, Câu 1.1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 126,
    "printedPage": 125,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thập phân:",
    "acceptedAnswers": [
      "83.75",
      "+83.75"
    ],
    "question": "Chuyển đổi số IEEE 754 32-bit viết ở dạng Hexa <code>0x42A78000</code> về số thực thập phân?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "+83.75",
      "+83.5",
      "+41.875",
      "-83.75"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>42A78</code> $= 0100\\;0010\\;1010\\;0111\\;1000_2 \\Rightarrow S=0, e=133\\; (E=6), 1.m = 1.01001111_2$. Dịch 6 bit: $+1010011.11_2 = 64+16+2+1+0.5+0.25 = \\mathbf{+83.75}$.</p>"
  },
  {
    "id": "c4-4.28b",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.28b",
    "source": "Slide Chương 4 - Trang 98",
    "examTags": [
      "LT",
      "GK"
    ],
    "pdfPage": 126,
    "printedPage": 125,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thập phân:",
    "acceptedAnswers": [
      "-13.375"
    ],
    "question": "Chuyển đổi số IEEE 754 32-bit viết ở dạng Hexa <code>0xC1560000</code> về số thực thập phân?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-13.375",
      "-13.625",
      "-26.75",
      "-12.375"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>C156</code> $= 1100\\;0001\\;0101\\;0110_2 \\Rightarrow S=1, e=130\\; (E=3), 1.m = 1.101011_2$. Dịch 3 bit: $-1101.011_2 = -(8+4+1+0.25+0.125) = \\mathbf{-13.375}$.</p>"
  },
  {
    "id": "c4-4.28c",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.28c",
    "source": "Slide Chương 4 - Trang 99",
    "examTags": [
      "LT",
      "GK"
    ],
    "pdfPage": 126,
    "printedPage": 125,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thập phân:",
    "acceptedAnswers": [
      "1.5",
      "+1.5"
    ],
    "question": "Chuyển đổi số IEEE 754 32-bit <code>0x3FC00000</code> ($0011\\;1111\\;1100\\;0000\\dots$) về số thực thập phân?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "+1.5",
      "+0.75",
      "+1.25",
      "+3.0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>3FC</code> $= 0011\\;1111\\;1100_2 \\Rightarrow S=0, e=127\\; (E=0), 1.m = 1.1_2 \\Rightarrow X = +1.5 \\times 2^0 = \\mathbf{+1.5}$.</p>"
  },
  {
    "id": "c4-4.29a",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.29a",
    "source": "Đề Giữa kỳ 2024.1 - #386374 (Ý a)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 126,
    "printedPage": 125,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã Hexa 32-bit:",
    "acceptedAnswers": [
      "0xC15C0000",
      "C15C0000"
    ],
    "question": "Biểu diễn giá trị thập phân $-13.75$ sang số dấu phẩy động chuẩn IEEE 754 độ chính xác đơn (32-bit) dưới dạng số Hexa là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xC15C0000",
      "0x415C0000",
      "0xC1580000",
      "0xC16C0000"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$S=1$; $13.75 = 1101.11_2 = 1.10111_2 \\times 2^3 \\Rightarrow e = 3+127 = 130 = 1000\\;0010_2$; ghép $1\\,|\\,10000010\\,|\\,1011100\\dots = \\mathbf{\\text{0xC15C0000}}$.</p>"
  },
  {
    "id": "c4-4.29b",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.29b",
    "source": "Đề Giữa kỳ 2024.1 - #386374 (Ý b)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 126,
    "printedPage": 125,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã Hexa 32-bit:",
    "acceptedAnswers": [
      "0xC2398000",
      "C2398000"
    ],
    "question": "Biểu diễn giá trị thập phân $-46.375$ sang số dấu phẩy động chuẩn IEEE 754 độ chính xác đơn (32-bit) dưới dạng số Hexa là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xC2398000",
      "0x42398000",
      "0xC2390000",
      "0xC2B98000"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$S=1$; $46.375 = 101110.011_2 = 1.01110011_2 \\times 2^5 \\Rightarrow e = 5+127 = 132 = 1000\\;0100_2$; ghép $1\\,|\\,10000100\\,|\\,0111001100\\dots = \\mathbf{\\text{0xC2398000}}$.</p>"
  },
  {
    "id": "c4-4.30a",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.30a",
    "source": "Ôn tập Cuối kỳ 2025.2 - P1, Câu 59",
    "examTags": [
      "CK"
    ],
    "pdfPage": 127,
    "printedPage": 126,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Số thực dấu phẩy động 32-bit IEEE 754 viết theo hệ Hexa có 3 chữ số đầu bên trái là <code>7F8</code>, phần còn lại chưa biết. Khẳng định nào sau đây có khả năng đúng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Số thực này biểu diễn NaN (Not a Number) hoặc vô cùng (+Infinity)",
      "Số thực này bằng 0 hoặc biểu diễn giá trị dương hữu hạn xác định",
      "Chỉ có thể biểu diễn +Infinity",
      "Số thực này chắc chắn là một số âm"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>7F8</code> $= 0111\\;1111\\;1000_2 \\Rightarrow S=0, e=255$ (tất cả 8 bit mũ bằng 1). Nếu $m=0$ số biểu diễn $+\\infty$; nếu $m \\neq 0$ số biểu diễn <strong>NaN</strong>.</p>"
  },
  {
    "id": "c4-4.30b",
    "chapter": 4,
    "groupId": "4.2.6",
    "groupTitle": "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
    "exerciseCode": "Bài tập 4.30b",
    "source": "Ôn tập Cuối kỳ 2025.2 - P1, Câu 46",
    "examTags": [
      "CK"
    ],
    "pdfPage": 127,
    "printedPage": 126,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Có bao nhiêu cách biểu diễn <strong>NaN (Not a Number)</strong> khi dùng số thực dấu phẩy động 32-bit theo chuẩn IEEE 754?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2^24 - 2",
      "2^23 - 1",
      "128",
      "2"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Trường $e = 11111111_2$ có 1 cách; phần lẻ $m$ (23 bit) phải $\\neq 0$ nên có $2^{23} - 1$ cách; bit dấu $S$ có 2 cách ($0$ hoặc $1$). Tổng: $2 \\times (2^{23}-1) = \\mathbf{2^{24}-2}$.</p>"
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
