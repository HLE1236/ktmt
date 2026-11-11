// Dữ liệu câu hỏi bài tập và lý thuyết Chương 4 (Số học máy tính)
// Tự động tạo dựa trên file KTMT.pdf - IT3030 / IT3034 / IT3283

(function(root) {
  root.KTMT_QUESTIONS_CH4 = [
  {
    "id": "lt-4.1",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4 (Số học máy tính)",
    "exerciseCode": "Lý thuyết 4.1",
    "source": "Lý thuyết mục 4.1.2 - Định lý De Morgan",
    "examTags": [
      "LT"
    ],
    "pdfPage": 106,
    "printedPage": 105,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Theo Định lý De Morgan trong đại số Boolean, biểu thức phủ định của tích $(A \\cdot B)'$ và phủ định của tổng $(A + B)'$ lần lượt bằng:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "(A · B)' = A' + B'  và  (A + B)' = A' · B'",
      "(A · B)' = A' · B'  và  (A + B)' = A' + B'",
      "(A · B)' = A + B  và  (A + B)' = A · B",
      "(A · B)' = (A + B)'  và  A' · B' = A' + B'"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Định lý De Morgan cơ bản trong đại số Boolean:</p>$$\\overline{A \\cdot B} = \\overline{A} + \\overline{B} \\quad \\text{và} \\quad \\overline{A + B} = \\overline{A} \\cdot \\overline{B}$$"
  },
  {
    "id": "lt-4.2",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4 (Số học máy tính)",
    "exerciseCode": "Lý thuyết 4.2",
    "source": "Lý thuyết mục 4.1.2 - Phân biệt mạch tổ hợp và mạch dãy",
    "examTags": [
      "LT"
    ],
    "pdfPage": 106,
    "printedPage": 105,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Điểm khác biệt cơ bản giữa <strong>Mạch tổ hợp (Combinational Circuits)</strong> và <strong>Mạch dãy (Sequential Circuits)</strong> trong CPU là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Mạch tổ hợp không có bộ nhớ (đầu ra chỉ phụ thuộc đầu vào hiện tại); Mạch dãy có bộ nhớ (đầu ra phụ thuộc cả trạng thái quá khứ)",
      "Mạch tổ hợp có xung clock điều khiển; Mạch dãy không cần xung clock",
      "Mạch tổ hợp chỉ xử lý số thực; Mạch dãy chỉ xử lý số nguyên",
      "Mạch tổ hợp là phần mềm; Mạch dãy là phần cứng"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 4.1.2 trong PDF:</p><ul><li><strong>Mạch tổ hợp (không có nhớ):</strong> Đầu ra chỉ phụ thuộc vào tín hiệu đầu vào ở thời điểm hiện tại (ví dụ: MUX, Decoder, Full-Adder).</li><li><strong>Mạch dãy (có nhớ):</strong> Xây dựng từ Flip-Flop, đầu ra phụ thuộc cả đầu vào hiện tại và trạng thái lưu giữ trong quá khứ (ví dụ: Thanh ghi, Bộ đếm).</li></ul>"
  },
  {
    "id": "lt-4.3",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4 (Số học máy tính)",
    "exerciseCode": "Lý thuyết 4.3",
    "source": "Lý thuyết mục 4.1.3 - Dải giá trị số nguyên",
    "examTags": [
      "LT"
    ],
    "pdfPage": 107,
    "printedPage": 106,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Dải giá trị biểu diễn của số nguyên có dấu 8-bit (kiểu <code>char</code>) và 16-bit (kiểu <code>short</code>) theo mã bù hai là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "8-bit: [-128, +127]  và  16-bit: [-32768, +32767]",
      "8-bit: [-127, +128]  và  16-bit: [-32767, +32768]",
      "8-bit: [0, 255]  và  16-bit: [0, 65535]",
      "8-bit: [-256, +255]  và  16-bit: [-65536, +65535]"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Công thức dải giá trị số nguyên có dấu $n$-bit là $[-2^{n-1}, +2^{n-1}-1]$:</p><ul><li>Với $n = 8$: $[-2^7, +2^7 - 1] = \\mathbf{[-128, +127]}$.</li><li>Với $n = 16$: $[-2^{15}, +2^{15} - 1] = \\mathbf{[-32768, +32767]}$.</li></ul>"
  },
  {
    "id": "lt-4.4",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4 (Số học máy tính)",
    "exerciseCode": "Lý thuyết 4.4",
    "source": "Lý thuyết mục 4.1.4 - Hiện tượng Tràn số học",
    "examTags": [
      "LT"
    ],
    "pdfPage": 108,
    "printedPage": 107,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khi cộng hai số nguyên có dấu (Signed Integer), hiện tượng Tràn số học (Overflow) xảy ra trong trường hợp nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Cộng hai số CÙNG DẤU mà kết quả thu được lại NGƯỢC DẤU",
      "Cộng hai số KHÁC DẤU mà bit nhớ ra ngoài cùng Cout = 1",
      "Bất kỳ khi nào tổng hai số vượt quá số 0",
      "Khi lấy số âm trừ đi số dương"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Khi cộng hai số <strong>khác dấu</strong>, kết quả không bao giờ bị tràn.</li><li>Hiện tượng tràn số học (Overflow) chỉ xảy ra khi <strong>cộng hai số CÙNG DẤU mà kết quả thu được lại NGƯỢC DẤU</strong> (dương + dương &rarr; âm, hoặc âm + âm &rarr; dương).</li><li>Tràn số học không phụ thuộc vào bit $C_{\\text{out}}$.</li></ul>"
  },
  {
    "id": "lt-4.5",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4 (Số học máy tính)",
    "exerciseCode": "Lý thuyết 4.5",
    "source": "Lý thuyết mục 4.1.5 - Quy tắc dấu của div và rem",
    "examTags": [
      "LT"
    ],
    "pdfPage": 109,
    "printedPage": 108,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong phép chia số nguyên có dấu của RISC-V (lệnh <code>rem</code>), dấu của <strong>Số dư</strong> luôn được xác định như thế nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Số dư luôn luôn cùng dấu với SỐ BỊ CHIA (thừa số đứng trước), bất kể số chia âm hay dương",
      "Số dư luôn luôn mang dấu dương (+)",
      "Số dư luôn luôn cùng dấu với Số chia",
      "Số dư mang dấu âm nếu thương là số âm"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>Quy tắc vàng của phép chia số nguyên trong máy tính:</strong> Dấu của Số dư (<code>rem</code>) <strong>luôn luôn cùng dấu với SỐ BỊ CHIA</strong> (toán hạng thứ nhất), bất kể số chia âm hay dương.</p><p>Ví dụ: $67 \\div (-13) \\implies$ Thương $Q = -5$, Số dư $R = \\mathbf{+2}$ (vì số bị chia $+67 > 0$).</p>"
  },
  {
    "id": "lt-4.6",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4 (Số học máy tính)",
    "exerciseCode": "Lý thuyết 4.6",
    "source": "Lý thuyết mục 4.1.6 - Cấu trúc chuẩn IEEE 754",
    "examTags": [
      "LT"
    ],
    "pdfPage": 109,
    "printedPage": 108,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Một số thực 32-bit theo chuẩn IEEE 754 độ chính xác đơn (Single Precision) được phân chia thành 3 trường với kích thước bit lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1 bit dấu S, 8 bit số mũ e (Bias = 127), 23 bit phần lẻ định trị m",
      "1 bit dấu S, 11 bit số mũ e (Bias = 1023), 20 bit phần lẻ m",
      "2 bit dấu S, 7 bit số mũ e, 23 bit phần lẻ m",
      "1 bit dấu S, 8 bit số mũ e, 24 bit phần lẻ m"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 4.1.6 trong PDF, chuẩn IEEE 754 32-bit đơn:</p><ul><li>Bit 31: <strong>1 bit dấu S</strong></li><li>Bit 30:23: <strong>8 bit số mũ lệch $e$</strong> (độ lệch Bias = 127)</li><li>Bit 22:0: <strong>23 bit phần lẻ định trị $m$</strong></li></ul>"
  },
  {
    "id": "lt-4.7",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4 (Số học máy tính)",
    "exerciseCode": "Lý thuyết 4.7",
    "source": "Lý thuyết mục 4.1.6 - Quy ước IEEE 754",
    "examTags": [
      "LT"
    ],
    "pdfPage": 109,
    "printedPage": 108,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong chuẩn IEEE 754 32-bit, khi 8 bit trường mũ $e = 255$ (toàn bit 1) và 23 bit phần lẻ $m = 0$, giá trị này đại diện cho:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Số Vô cùng (±∞)",
      "Số Không (±0)",
      "Không phải là số (NaN - Not a Number)",
      "Số thực nhỏ nhất có thể biểu diễn"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo quy ước chuẩn IEEE 754:</p><ul><li>$e = 255$ và $m = 0$: Biểu diễn <strong>Số Vô cùng ($\\pm\\infty$)</strong>. (<code>0x7F800000</code> cho $+\\infty$ và <code>0xFF800000</code> cho $-\\infty$).</li><li>$e = 255$ và $m \\neq 0$: Biểu diễn <strong>NaN (Not a Number)</strong>.</li><li>$e = 0$ và $m = 0$: Biểu diễn <strong>Số 0 ($\\pm 0$)</strong>.</li></ul>"
  },
  {
    "id": "lt-4.8",
    "chapter": 4,
    "groupId": "4.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 4 (Số học máy tính)",
    "exerciseCode": "Lý thuyết 4.8",
    "source": "Lý thuyết mục 4.1.5 - Nhân hai số 32-bit",
    "examTags": [
      "LT"
    ],
    "pdfPage": 108,
    "printedPage": 107,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong tập mở rộng RV32M, khi nhân hai số 32-bit tạo ra tích 64-bit, câu lệnh nào được dùng để lưu trữ <strong>32 bit cao</strong> của tích?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "mulh rd, rs1, rs2 (hoặc mulhu, mulhsu)",
      "mul rd, rs1, rs2",
      "div rd, rs1, rs2",
      "slli rd, rs1, 32"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 4.1.5 trong PDF:</p><ul><li><code>mul rd, rs1, rs2</code>: Lưu <strong>32 bit thấp</strong> của tích.</li><li><code>mulh rd, rs1, rs2</code>: Lưu <strong>32 bit cao</strong> của tích (với 2 số có dấu).</li></ul>"
  },
  {
    "id": "c4-5.1a",
    "chapter": 4,
    "groupId": "4.2.1",
    "groupTitle": "Nhóm 1: Nhận diện Cổng logic và Biểu thức Đại số Boolean",
    "exerciseCode": "Bài tập 4.1a (PDF 5.1a)",
    "source": "Ôn tập Giữa kỳ - Câu 1",
    "examTags": [
      "GK"
    ],
    "pdfPage": 111,
    "printedPage": 110,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho hình vẽ cổng logic có 2 đầu vào A, B, thân cổng hình mũi nhọn giống cổng OR nhưng có thêm <strong>một đường cong song song ở phần đuôi</strong>. Hình đó biểu diễn phép toán logic nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": "<svg width=\"220\" height=\"90\" viewBox=\"0 0 220 90\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M 20 25 L 55 25\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"none\"/>\n  <path d=\"M 20 65 L 55 65\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"none\"/>\n  <text x=\"8\" y=\"30\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#1e293b\">A</text>\n  <text x=\"8\" y=\"70\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#1e293b\">B</text>\n  <path d=\"M 45 10 Q 65 45 45 80\" stroke=\"#2563eb\" stroke-width=\"3\" fill=\"none\"/>\n  <path d=\"M 55 10 Q 75 45 55 80 Q 115 80 150 45 Q 115 10 55 10 Z\" stroke=\"#2563eb\" stroke-width=\"2.5\" fill=\"#eff6ff\"/>\n  <path d=\"M 150 45 L 195 45\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"none\"/>\n  <text x=\"202\" y=\"50\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#1e293b\">F</text>\n</svg>",
    "options": [
      "XOR (F = A ⊕ B)",
      "NAND",
      "AND",
      "NOR"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Cổng có đầu nhọn kèm 1 vạch cong tách rời ở đuôi là ký hiệu chuẩn của cổng <strong>XOR ($F = A \\oplus B$)</strong>.</p>"
  },
  {
    "id": "c4-5.1b",
    "chapter": 4,
    "groupId": "4.2.1",
    "groupTitle": "Nhóm 1: Nhận diện Cổng logic và Biểu thức Đại số Boolean",
    "exerciseCode": "Bài tập 4.1b (PDF 5.1b)",
    "source": "Ôn tập Giữa kỳ - Câu 53",
    "examTags": [
      "GK"
    ],
    "pdfPage": 111,
    "printedPage": 110,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho hình vẽ cổng logic có 2 đầu vào A, B, thân cổng hình chữ D (giống cổng AND) và có thêm <strong>một vòng tròn nhỏ ở đầu ra F</strong>. Hình đó biểu diễn phép toán logic nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": "<svg width=\"220\" height=\"90\" viewBox=\"0 0 220 90\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M 20 25 L 60 25\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"none\"/>\n  <path d=\"M 20 65 L 60 65\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"none\"/>\n  <text x=\"8\" y=\"30\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#1e293b\">A</text>\n  <text x=\"8\" y=\"70\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#1e293b\">B</text>\n  <path d=\"M 60 10 L 105 10 A 35 35 0 0 1 105 80 L 60 80 Z\" stroke=\"#2563eb\" stroke-width=\"2.5\" fill=\"#eff6ff\"/>\n  <circle cx=\"146\" cy=\"45\" r=\"6\" stroke=\"#2563eb\" stroke-width=\"2\" fill=\"#fff\"/>\n  <path d=\"M 152 45 L 195 45\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"none\"/>\n  <text x=\"202\" y=\"50\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#1e293b\">F</text>\n</svg>",
    "options": [
      "NAND (F = (A · B)')",
      "NOR",
      "XOR",
      "AND"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Cổng hình chữ D là AND, thêm vòng tròn đảo ở đầu ra thành NOT-AND tức là <strong>NAND ($F = \\overline{A \\cdot B}$)</strong>.</p>"
  },
  {
    "id": "c4-5.2",
    "chapter": 4,
    "groupId": "4.2.1",
    "groupTitle": "Nhóm 1: Nhận diện Cổng logic và Biểu thức Đại số Boolean",
    "exerciseCode": "Bài tập 4.2 (PDF 5.2)",
    "source": "Slide Chương 4 - Trang 30 & Ôn tập Giữa kỳ - Câu 70",
    "examTags": [
      "SLIDE",
      "GK"
    ],
    "pdfPage": 111,
    "printedPage": 110,
    "relatedTheoryId": "4.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho sơ đồ mạch logic tổ hợp có 3 tín hiệu vào A, B, C. Mạch gồm 3 cổng AND 3-đầu-vào ở tầng trước nối vào 1 cổng OR ở đầu ra F:<br>• Cổng AND thứ 1: nối với $A'$ (sau NOT), $B$, và $C'$ (sau NOT).<br>• Cổng AND thứ 2: nối với $A'$ (sau NOT), $B$, và $C$.<br>• Cổng AND thứ 3: nối với $A$, $B$, và $C'$ (sau NOT).<br>Mạch trên có biểu thức đại số Boolean là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "F = A'BC + A'BC' + ABC'",
      "F = A'B'C' + A'BC + AB'C",
      "F = ABC' + A'BC + AB'C",
      "F = (A + B + C')(A' + B + C)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li>Đầu ra cổng AND thứ 1: $A'BC'$.</li><li>Đầu ra cổng AND thứ 2: $A'BC$.</li><li>Đầu ra cổng AND thứ 3: $ABC'$.</li><li>Cổng OR ở cuối cộng 3 tích trên lại: $$F = A'BC' + A'BC + ABC' = \\mathbf{A'BC + A'BC' + ABC'}$$</li></ol><p><strong>Đáp án đúng: F = A'BC + A'BC' + ABC'.</strong></p>"
  },
  {
    "id": "c4-5.3",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Chuyển đổi và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.3 (PDF 5.3)",
    "source": "Đề Cuối kỳ 2022.2 - #f9c617 & Ôn tập Giữa kỳ - Câu 32",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 112,
    "printedPage": 111,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa 16-bit (ví dụ: 0xFFBC):",
    "acceptedAnswers": [
      "0xFFBC",
      "0xffbc",
      "FFBC",
      "ffbc"
    ],
    "question": "Giả thiết $k$ là biến số nguyên có dấu 16-bit, cho $k = -68$. Hãy cho biết nội dung $k$ biểu diễn theo số Hexa (có 0x ở đầu)?",
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
    "explanation": "<ol><li>$+68 = 64 + 4 = 0100\\;0100_{(2)} = \\text{0x44}$. Biểu diễn 16-bit: <code>0000 0000 0100 0100</code>.</li><li>Lấy bù 1: <code>1111 1111 1011 1011</code>.</li><li>Lấy bù 2 (cộng 1): <code>1111 1111 1011 1100</code> = $\\mathbf{\\text{0xFFBC}}$.</li></ol><p><strong>Đáp án đúng: 0xFFBC.</strong></p>"
  },
  {
    "id": "c4-5.4a",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Chuyển đổi và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.4a (PDF 5.4a)",
    "source": "Đề Cuối kỳ 2022.2 - #7151 & Ôn tập Giữa kỳ - Câu 58",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 113,
    "printedPage": 112,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân (ví dụ: -13):",
    "acceptedAnswers": [
      "-13"
    ],
    "question": "Xác định giá trị thập phân của biến số nguyên có dấu 32-bit: $i = \\text{0xFFFFFFF3}$.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-13",
      "-3",
      "13",
      "-19"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>Mẹo tính nhẩm siêu tốc:</strong> Vì <code>0xFFFFFFFF = -1</code>, khi các chữ số đầu đều là F, ta lấy chữ số cuối trừ đi 16:</p>$$i = 3 - 16 = \\mathbf{-13}$$"
  },
  {
    "id": "c4-5.4b",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Chuyển đổi và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.4b (PDF 5.4b)",
    "source": "Đề Cuối kỳ 2024.1 - #0182da & Ôn tập Giữa kỳ - Câu 48",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 113,
    "printedPage": 112,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân (ví dụ: -12):",
    "acceptedAnswers": [
      "-12"
    ],
    "question": "Xác định giá trị thập phân của biến số nguyên có dấu 32-bit: $i = \\text{0xFFFFFFF4}$.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-12",
      "-4",
      "12",
      "-20"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Áp dụng mẹo nhẩm: $i = 4 - 16 = \\mathbf{-12}$.</p>"
  },
  {
    "id": "c4-5.4c",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Chuyển đổi và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.4c (PDF 5.4c)",
    "source": "Đề Cuối kỳ 2020.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 113,
    "printedPage": 112,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân (ví dụ: -114):",
    "acceptedAnswers": [
      "-114"
    ],
    "question": "Xác định giá trị thập phân của biến 8-bit có dấu: $i = \\text{0x8E}$.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-114",
      "-14",
      "142",
      "-126"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đổi sang 8-bit nhị phân: $\\text{0x8E} = 1000\\;1110_{(2)}$. Bit đầu tiên có trọng số $-128$:</p>$$i = -128 + 8 + 4 + 2 = -128 + 14 = \\mathbf{-114}$$"
  },
  {
    "id": "c4-5.5a",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Chuyển đổi và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.5a (PDF 5.5a)",
    "source": "Đề Giữa kỳ 2024.1 & Ôn tập Giữa kỳ - Câu 33",
    "examTags": [
      "GK"
    ],
    "pdfPage": 113,
    "printedPage": 112,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân (ví dụ: 511):",
    "acceptedAnswers": [
      "511",
      "+511"
    ],
    "question": "Giá trị thập phân của toán hạng hằng số (immediate operand) trong câu lệnh <code>addi t0, s0, 0x1FF</code> là bao nhiêu?",
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
    "explanation": "<p>Hằng số 12-bit có dấu <code>0x1FF</code> bắt đầu bằng chữ số 1 ($0001_2$, bit dấu 11 bằng 0) nên là <strong>số dương</strong>:</p>$$\\text{0x1FF} = 1 \\times 16^2 + 15 \\times 16^1 + 15 \\times 16^0 = 256 + 240 + 15 = \\mathbf{511}$$"
  },
  {
    "id": "c4-5.5b",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Chuyển đổi và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.5b (PDF 5.5b)",
    "source": "Đề Cuối kỳ 2023.1 - #581f03",
    "examTags": [
      "CK"
    ],
    "pdfPage": 113,
    "printedPage": 112,
    "relatedTheoryId": "4.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân (ví dụ: -6):",
    "acceptedAnswers": [
      "-6"
    ],
    "question": "Nếu hằng số 12-bit có dấu trong lệnh <code>addi</code> là <code>0xFFA</code> (hoặc 16-bit <code>0xFFFA</code>), thì giá trị thập phân của toán hạng hằng số đó là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-6",
      "6",
      "-65530",
      "65530"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Hằng số <code>0xFFA</code> có các chữ đầu là F (bit dấu bằng 1, số âm) và chữ số cuối là $A = 10$. Áp dụng mẹo lấy chữ cuối trừ 16:</p>$$10 - 16 = \\mathbf{-6}$$<p><strong>Đáp án đúng: -6.</strong></p>"
  },
  {
    "id": "c4-5.7a",
    "chapter": 4,
    "groupId": "4.2.2",
    "groupTitle": "Nhóm 2: Chuyển đổi và So sánh Số nguyên có dấu (Mã bù 2)",
    "exerciseCode": "Bài tập 4.7a (PDF 5.7a)",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0006 Câu 1",
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
    "question": "Hãy sắp xếp các số nguyên 8-bit có dấu sau theo thứ tự <strong>giảm dần</strong>: <code>-108 (hệ 10)</code>, <code>0001 0001 (hệ 2)</code>, <code>91 (hệ 16)</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0001 0001 > -108 > 91 (hệ 16)",
      "91 (hệ 16) > 0001 0001 > -108",
      "-108 > 91 (hệ 16) > 0001 0001",
      "0001 0001 > 91 (hệ 16) > -108"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li>Số thứ 1: $-108$.</li><li>Số thứ 2: $0001\\;0001_{(2)} = 16 + 1 = +17$.</li><li>Số thứ 3: $91_{(16)} = 1001\\;0001_{(2)} = -128 + 16 + 1 = -111$.</li><li>Vì $+17 > -108 > -111$, thứ tự giảm dần là: <strong>0001 0001 &gt; -108 &gt; 91</strong>.</li></ol>"
  },
  {
    "id": "c4-5.8",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.8 (PDF 5.8)",
    "source": "Đề Cuối kỳ 2022.2 - #6d82ac & Ôn tập Giữa kỳ - Câu 31",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 115,
    "printedPage": 114,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả sum (ví dụ: 98):",
    "acceptedAnswers": [
      "98",
      "+98"
    ],
    "question": "Trong ngôn ngữ C, biến <code>char</code> là số nguyên có dấu 8-bit. Cho chương trình C sau, hãy cho biết kết quả của biến <code>sum</code> hiển thị trên màn hình?",
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
    "explanation": "<ol><li>Tổng toán học: $S = (-91) + (-67) = -158$.</li><li>Vì biến <code>char</code> chỉ biểu diễn trong đoạn $[-128, +127]$, giá trị $-158 < -128$ gây <strong>tràn âm</strong>.</li><li>Áp dụng công thức tràn âm 8-bit (cộng thêm 256): $$sum = -158 + 256 = \\mathbf{98}$$</li></ol><p><strong>Đáp án đúng: 98.</strong></p>"
  },
  {
    "id": "c4-5.9a",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.9a (PDF 5.9a)",
    "source": "Đề Giữa kỳ 2024.1 - #f2d536 & Ôn tập Giữa kỳ - Câu 41",
    "examTags": [
      "GK"
    ],
    "pdfPage": 116,
    "printedPage": 115,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả (ví dụ: -126):",
    "acceptedAnswers": [
      "-126"
    ],
    "question": "Giả thiết các số được biểu diễn dưới dạng số nguyên 8-bit có dấu (mã bù 2). Hãy cho biết kết quả ở hệ thập phân khi máy tính thực hiện phép toán: <code>+65 + 65 = ?</code>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-126",
      "130",
      "-130",
      "126"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tổng toán học: $65 + 65 = 130 > +127$ (tràn dương) &rarr; Kết quả thực tế: $130 - 256 = \\mathbf{-126}$.</p>"
  },
  {
    "id": "c4-5.9c",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.9c (PDF 5.9c)",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0007, Câu 1b",
    "examTags": [
      "GK"
    ],
    "pdfPage": 116,
    "printedPage": 115,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả (ví dụ: +106 hoặc 106):",
    "acceptedAnswers": [
      "+106",
      "106"
    ],
    "question": "Giả thiết số nguyên 8-bit có dấu. Hãy cho biết kết quả ở hệ thập phân khi thực hiện phép toán: <code>(-108) + (-42) = ?</code>",
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
    "explanation": "<p>Tổng toán học: $(-108) + (-42) = -150 < -128$ (tràn âm) &rarr; Kết quả thực tế: $-150 + 256 = \\mathbf{+106}$.</p>"
  },
  {
    "id": "c4-5.10",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.10 (PDF 5.10)",
    "source": "Đề Cuối kỳ 2023.1 - #cd9132 & Ôn tập Giữa kỳ - Câu 34",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 116,
    "printedPage": 115,
    "relatedTheoryId": "4.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Giả sử thanh ghi <code>s0</code> đang giữ giá trị thập phân là 1024. Dải giá trị nào của thanh ghi <code>s1</code> sẽ gây ra <strong>tràn số học (overflow)</strong> khi thực hiện lệnh <code>add s2, s0, s1</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x7ffffc00 – 0x7fffffff",
      "0x7ffffc01 – 0x80000000",
      "0x7ffffbff – 0x7fffffff",
      "0x7ffffc00 – 0x80000000"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>$K = 1024 = \\text{0x400}$. Tràn xảy ra khi $K + s1 > \\text{0x7FFFFFFF} \\iff s1 \\ge \\text{0x80000000} - \\text{0x400} = \\mathbf{\\text{0x7ffffc00}}$.</li><li>Điểm kết thúc của dải số dương là <code>0x7fffffff</code>. Tuyệt đối không chọn đáp án kết thúc bằng <code>0x80000000</code> vì <code>0x80000000</code> là số âm!</li><li><strong>Đáp án đúng: 0x7ffffc00 – 0x7fffffff.</strong></li></ul>"
  },
  {
    "id": "c4-5.11",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.11 (PDF 5.11)",
    "source": "Đề Giữa kỳ 2024.1 - #e83dac",
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
    "question": "Giả sử thanh ghi <code>t0</code> đang giữ giá trị thập phân là 512. Dải giá trị nào của thanh ghi <code>t1</code> sẽ gây ra tràn số học (overflow) khi thực hiện lệnh <code>add t2, t0, t1</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x7FFFFE00 – 0x7FFFFFFF",
      "0x7FFFFD00 – 0x7FFFFFFF",
      "0x7FFFFDFF – 0x7FFFFFFF",
      "0x7FFFFE00 – 0x80000000"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>$K = 512 = \\text{0x200}$.</li><li>Giá trị nhỏ nhất của $t1$ bắt đầu gây tràn: $$\\text{0x80000000} - \\text{0x200} = \\mathbf{\\text{0x7FFFFE00}}$$</li><li>Dải giá trị: <strong>0x7FFFFE00 – 0x7FFFFFFF</strong>.</li></ul>"
  },
  {
    "id": "c4-5.12",
    "chapter": 4,
    "groupId": "4.2.3",
    "groupTitle": "Nhóm 3: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
    "exerciseCode": "Bài tập 4.12 (PDF 5.12)",
    "source": "Ôn tập Cuối kỳ P2 - Câu 65",
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
    "question": "Đoạn lệnh nào sau đây có xảy ra hiện tượng <strong>tràn số học (OVERFLOW)</strong>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "li x8, 0xFFFFFFFF ; li x9, 0x80000000 ; add x10, x8, x9",
      "li x8, 0xFFFFFFFF ; li x9, 0x80000000 ; sub x10, x8, x9",
      "li x8, 0xFFFFFFFF ; li x9, 0xFFFFFFFF ; sub x10, x8, x9",
      "li x8, 0xFFFFFFFF ; li x9, 0xFFFFFFFF ; add x10, x8, x9"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Ta có <code>0xFFFFFFFF = -1</code> và <code>0x80000000 = -2^31</code> (số âm nhỏ nhất 32-bit).</li><li>Xét phương án cộng hai số âm: $$(-1) + (-2^{31}) = -(2^{31} + 1) < -2^{31}$$</li><li>Do $x9$ đã ở tận cùng biên âm, cộng thêm $-1$ sẽ bị vượt biên và lật sang số dương <code>0x7FFFFFFF</code> &rarr; <strong>Xảy ra tràn âm (Overflow)!</strong></li><li><strong>Đáp án đúng: li x8, 0xFFFFFFFF ; li x9, 0x80000000 ; add x10, x8, x9.</strong></li></ul>"
  },
  {
    "id": "c4-5.13",
    "chapter": 4,
    "groupId": "4.2.4",
    "groupTitle": "Nhóm 4: Lệnh Chia và Lấy phần dư số nguyên (div, rem)",
    "exerciseCode": "Bài tập 4.13 (PDF 5.13)",
    "source": "Đề Giữa kỳ 2024.1 - #054a4a",
    "examTags": [
      "GK"
    ],
    "pdfPage": 118,
    "printedPage": 117,
    "relatedTheoryId": "4.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Giá trị của các thanh ghi <code>t0, t1</code> sau khi thực hiện đoạn mã RISC-V dưới đây là gì?",
    "codeBlock": "li s0, 67\nli s1, -13\ndiv t0, s0, s1\nrem t1, s0, s1",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "t0 = 0xfffffffb , t1 = 0x00000002",
      "t0 = 0xfffffffb , t1 = 0x00000010",
      "t0 = 0x00000005 , t1 = 0xfffffffd",
      "t0 = 0xfffffffb , t1 = 0x00000005"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li>Số bị chia $s0 = +67$ và số chia $s1 = -13$.</li><li><strong>Thương $t0$ (<code>div</code>):</strong> $67 \\div (-13) = -5 = \\mathbf{\\text{0xfffffffb}}$.</li><li><strong>Số dư $t1$ (<code>rem</code>):</strong> $67 = (-13) \\times (-5) + 2$. Số dư <strong>luôn cùng dấu với số bị chia (+67 &gt; 0)</strong> &rarr; $t1 = +2 = \\mathbf{\\text{0x00000002}}$.</li></ol><p><strong>Đáp án đúng: t0 = 0xfffffffb, t1 = 0x00000002.</strong></p>"
  },
  {
    "id": "c4-5.14a",
    "chapter": 4,
    "groupId": "4.2.5",
    "groupTitle": "Nhóm 5: Số thực dấu phẩy động chuẩn IEEE 754 32-bit",
    "exerciseCode": "Bài tập 4.14a (PDF 5.14a)",
    "source": "Đề Cuối kỳ 2022.2 - #bd4c95 & Ôn tập Giữa kỳ - Câu 61",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 119,
    "printedPage": 118,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân (ví dụ: 3):",
    "acceptedAnswers": [
      "3",
      "3.0",
      "3,0",
      "+3"
    ],
    "question": "Giả thiết X là biến số dấu phẩy động theo chuẩn IEEE 754 32-bit, cho nội dung $X = \\text{0x40400000}$. Hãy xác định giá trị của X dưới dạng thập phân.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "3.0",
      "5.0",
      "1.5",
      "6.0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li>Đổi 3 chữ Hexa đầu (<code>404</code>): $0100\\;0000\\;0100_{(2)}$.</li><li>Tách các trường:<br>• Bit dấu $S = 0$ (dương).<br>• $e = 1000\\;0000_{(2)} = 128 \\implies E = 128 - 127 = 1$.<br>• $m = 1000... \\implies 1.m = 1.1_{(2)} = 1.5$.</li><li>$$X = +1.5 \\times 2^1 = \\mathbf{3.0}$$</li></ol>"
  },
  {
    "id": "c4-5.14b",
    "chapter": 4,
    "groupId": "4.2.5",
    "groupTitle": "Nhóm 5: Số thực dấu phẩy động chuẩn IEEE 754 32-bit",
    "exerciseCode": "Bài tập 4.14b (PDF 5.14b)",
    "source": "Đề Cuối kỳ 2024.1 - #e73be8 & Ôn tập Giữa kỳ - Câu 24",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 119,
    "printedPage": 118,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân (ví dụ: 5):",
    "acceptedAnswers": [
      "5",
      "5.0",
      "5,0",
      "+5"
    ],
    "question": "Cho nội dung $X = \\text{0x40A00000}$ theo chuẩn IEEE 754 32-bit. Hãy xác định giá trị của X dưới dạng thập phân.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "5.0",
      "2.5",
      "10.0",
      "4.5"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li>Đổi 3 chữ Hexa đầu (<code>40A</code>): $0100\\;0000\\;1010_{(2)}$.</li><li>$S = 0$ (dương); $e = 1000\\;0001_{(2)} = 129 \\implies E = 129 - 127 = 2$.</li><li>$m = 0100... \\implies 1.m = 1.01_{(2)} = 1.25$.</li><li>$$X = +1.25 \\times 2^2 = 1.25 \\times 4 = \\mathbf{5.0}$$</li></ol>"
  },
  {
    "id": "c4-5.15a",
    "chapter": 4,
    "groupId": "4.2.5",
    "groupTitle": "Nhóm 5: Số thực dấu phẩy động chuẩn IEEE 754 32-bit",
    "exerciseCode": "Bài tập 4.15a (PDF 5.15a)",
    "source": "Đề Giữa kỳ 2024.1 - #94ec4c & Ôn tập Giữa kỳ - Câu 5",
    "examTags": [
      "GK"
    ],
    "pdfPage": 120,
    "printedPage": 119,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân (ví dụ: -9.625):",
    "acceptedAnswers": [
      "-9.625",
      "-9,625"
    ],
    "question": "Cho số thực dấu phẩy động IEEE 754 32-bit được biểu diễn bởi word <code>0xC11A0000</code>. Giá trị của số này ở hệ thập phân là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-9.625",
      "-19.25",
      "-4.8125",
      "9.625"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><code>C11A</code>: $1100\\;0001\\;0001\\;1010_{(2)}$.</li><li>$S = 1$ (âm); $e = 1000\\;0010_{(2)} = 130 \\implies E = 130 - 127 = 3$.</li><li>$1.m = 1.001101_{(2)}$. Dịch dấu phẩy sang phải 3 vị trí: $$-1001.101_{(2)} = -(8 + 1 + 0.5 + 0.125) = \\mathbf{-9.625}$$</li></ol>"
  },
  {
    "id": "c4-5.15b",
    "chapter": 4,
    "groupId": "4.2.5",
    "groupTitle": "Nhóm 5: Số thực dấu phẩy động chuẩn IEEE 754 32-bit",
    "exerciseCode": "Bài tập 4.15b (PDF 5.15b)",
    "source": "Ôn tập Giữa kỳ - Câu 63",
    "examTags": [
      "GK"
    ],
    "pdfPage": 120,
    "printedPage": 119,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân (ví dụ: -28):",
    "acceptedAnswers": [
      "-28",
      "-28.0"
    ],
    "question": "Cho số thực dấu phẩy động IEEE 754 32-bit được biểu diễn bởi <code>0xC1E00000</code>. Giá trị của X ở hệ thập phân là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-28",
      "-14",
      "-56",
      "28"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><code>C1E</code>: $1100\\;0001\\;1110_{(2)}$.</li><li>$S = 1$ (âm); $e = 1000\\;0011_{(2)} = 131 \\implies E = 131 - 127 = 4$.</li><li>$1.m = 1.11_{(2)}$. Nhân với $2^4$ (dịch 4 vị trí): $$-11100_{(2)} = -(16 + 8 + 4) = \\mathbf{-28}$$</li></ol>"
  },
  {
    "id": "c4-5.16a",
    "chapter": 4,
    "groupId": "4.2.5",
    "groupTitle": "Nhóm 5: Số thực dấu phẩy động chuẩn IEEE 754 32-bit",
    "exerciseCode": "Bài tập 4.16a (PDF 5.16a)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B5, Câu 1.1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 121,
    "printedPage": 120,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân (ví dụ: +83.75 hoặc 83.75):",
    "acceptedAnswers": [
      "83.75",
      "+83.75",
      "83,75"
    ],
    "question": "Chuyển đổi số biểu diễn dưới dạng Hexa sau về số thực theo chuẩn IEEE 754 32-bit: <code>0x42A78000</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "+83.75",
      "+41.875",
      "+167.5",
      "-83.75"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><code>42A78</code>: $0100\\;0010\\;1010\\;0111\\;1000_{(2)}$.</li><li>$S = 0$ (dương); $e = 1000\\;0101_{(2)} = 133 \\implies E = 133 - 127 = 6$.</li><li>$1.m = 1.01001111_{(2)}$. Dịch dấu phẩy 6 vị trí: $$X = +1010011.11_{(2)} = (64 + 16 + 2 + 1) + (0.5 + 0.25) = \\mathbf{+83.75}$$</li></ol>"
  },
  {
    "id": "c4-5.16b",
    "chapter": 4,
    "groupId": "4.2.5",
    "groupTitle": "Nhóm 5: Số thực dấu phẩy động chuẩn IEEE 754 32-bit",
    "exerciseCode": "Bài tập 4.16b (PDF 5.16b)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B5, Câu 1.1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 121,
    "printedPage": 120,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân (ví dụ: -13.375):",
    "acceptedAnswers": [
      "-13.375",
      "-13,375"
    ],
    "question": "Chuyển đổi số biểu diễn dưới dạng Hexa sau về số thực theo chuẩn IEEE 754 32-bit: <code>0xC1560000</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "-13.375",
      "-26.75",
      "-6.6875",
      "+13.375"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><code>C156</code>: $1100\\;0001\\;0101\\;0110_{(2)}$.</li><li>$S = 1$ (âm); $e = 130 \\implies E = 130 - 127 = 3$.</li><li>$1.m = 1.101011_{(2)}$. Dịch 3 vị trí: $$-1101.011_{(2)} = -(8 + 4 + 1 + 0.25 + 0.125) = \\mathbf{-13.375}$$</li></ol>"
  },
  {
    "id": "c4-5.17a",
    "chapter": 4,
    "groupId": "4.2.5",
    "groupTitle": "Nhóm 5: Số thực dấu phẩy động chuẩn IEEE 754 32-bit",
    "exerciseCode": "Bài tập 4.17a (PDF 5.17a)",
    "source": "Đề Giữa kỳ 2024.1 - #386374 & Ôn tập Giữa kỳ - Câu 45",
    "examTags": [
      "GK"
    ],
    "pdfPage": 121,
    "printedPage": 120,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã Hexa (ví dụ: 0xC15C0000):",
    "acceptedAnswers": [
      "0xC15C0000",
      "0xc15c0000",
      "C15C0000"
    ],
    "question": "Biểu diễn số thực thập phân sau đây theo chuẩn IEEE 754 32-bit dưới dạng số Hexa: <code>-13.75</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xC15C0000",
      "0x415C0000",
      "0xC16E0000",
      "0xC25C0000"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li>Số âm $\\implies S = 1$.</li><li>$13.75 = 1101.11_{(2)} = 1.10111 \\times 2^3 \\implies E = 3$.</li><li>$e = 3 + 127 = 130 = 1000\\;0010_{(2)}$.</li><li>Ghép $[S \\mid e \\mid m]$: <code>1 10000010 10111000000...</code> = $\\mathbf{\\text{0xC15C0000}}$.</li></ol>"
  },
  {
    "id": "c4-5.17b",
    "chapter": 4,
    "groupId": "4.2.5",
    "groupTitle": "Nhóm 5: Số thực dấu phẩy động chuẩn IEEE 754 32-bit",
    "exerciseCode": "Bài tập 4.17b (PDF 5.17b)",
    "source": "Ôn tập Giữa kỳ - Câu 65",
    "examTags": [
      "GK"
    ],
    "pdfPage": 121,
    "printedPage": 120,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã Hexa (ví dụ: 0xC2398000):",
    "acceptedAnswers": [
      "0xC2398000",
      "0xc2398000",
      "C2398000"
    ],
    "question": "Biểu diễn số thực thập phân sau đây theo chuẩn IEEE 754 32-bit dưới dạng số Hexa: <code>-46.375</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xC2398000",
      "0x42398000",
      "0xC1398000",
      "0xC2B98000"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li>$S = 1$.</li><li>$46.375 = 101110.011_{(2)} = 1.01110011 \\times 2^5 \\implies E = 5$.</li><li>$e = 5 + 127 = 132 = 1000\\;0100_{(2)}$.</li><li>Ghép $[S \\mid e \\mid m]$: <code>1 10000100 01110011000...</code> = $\\mathbf{\\text{0xC2398000}}$.</li></ol>"
  },
  {
    "id": "c4-5.18a",
    "chapter": 4,
    "groupId": "4.2.5",
    "groupTitle": "Nhóm 5: Số thực dấu phẩy động chuẩn IEEE 754 32-bit",
    "exerciseCode": "Bài tập 4.18a (PDF 5.18a)",
    "source": "Ôn tập Giữa kỳ - Câu 19",
    "examTags": [
      "GK"
    ],
    "pdfPage": 122,
    "printedPage": 121,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho số thực 32-bit theo chuẩn IEEE 754 viết theo hệ Hexa có 3 chữ số có ý nghĩa lớn nhất (bên trái) là <code>7F8</code>, phần còn lại chưa được biết. Khẳng định nào dưới đây có khả năng đúng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Khẳng định 3 và 4 đều có khả năng đúng (NaN hoặc Vô cùng)",
      "Khẳng định 1: Số thực này biểu diễn giá trị dương xác định",
      "Khẳng định 2: Số thực này bằng 0",
      "Chỉ khẳng định 1 và 2 có khả năng đúng"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li><code>7F8</code> $= 0111\\;1111\\;1000_{(2)}$. Cả 8 bit trường mũ đều là 1 ($e = 255$).</li><li>Nếu 20 bit còn lại đều bằng 0 ($m = 0$) &rarr; Biểu diễn <strong>vô cùng ($+\\infty$)</strong>.</li><li>Nếu trong 20 bit còn lại có ít nhất 1 bit bằng 1 ($m \\neq 0$) &rarr; Biểu diễn <strong>NaN (Not a Number)</strong>.</li><li><strong>Đáp án đúng: Khẳng định 3 và 4 đều có khả năng đúng (NaN hoặc Vô cùng).</strong></li></ul>"
  },
  {
    "id": "c4-5.18b",
    "chapter": 4,
    "groupId": "4.2.5",
    "groupTitle": "Nhóm 5: Số thực dấu phẩy động chuẩn IEEE 754 32-bit",
    "exerciseCode": "Bài tập 4.18b (PDF 5.18b)",
    "source": "Ôn tập Giữa kỳ - Câu 35",
    "examTags": [
      "GK"
    ],
    "pdfPage": 122,
    "printedPage": 121,
    "relatedTheoryId": "4.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Có bao nhiêu cách biểu diễn NaN (Not a Number) khi dùng số thực dấu phẩy động 32 bit theo chuẩn IEEE 754?",
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
    "explanation": "<ul><li>Trường mũ $e = 11111111$ (1 cách).</li><li>23 bit của $m$ có $2^{23}$ tổ hợp, trừ đi 1 tổ hợp toàn 0 (vì toàn 0 là $\\pm\\infty$) &rarr; $(2^{23} - 1)$ cách.</li><li>Có 2 cách chọn bit dấu S (0 hoặc 1): $$2 \\times (2^{23} - 1) = \\mathbf{2^{24} - 2}$$</li><li><strong>Đáp án đúng: 2^24 - 2.</strong></li></ul>"
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
