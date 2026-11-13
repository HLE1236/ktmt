// Dữ liệu câu hỏi bài tập và lý thuyết Chương 1 & Chương 2
// Tự động tạo dựa trên file KTMT_GK.pdf - IT3030 / IT3034 / IT3283

(function(root) {
  root.KTMT_QUESTIONS_CH1_CH2 = [
  {
    "id": "lt-1.1",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.1",
    "source": "Mục 1.1.1 - Bốn thành phần cơ bản",
    "examTags": [
      "LT"
    ],
    "pdfPage": 4,
    "printedPage": 3,
    "relatedTheoryId": "1.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Mọi máy tính từ điện thoại thông minh, PC cho đến siêu máy tính đều được cấu tạo từ 4 thành phần cơ bản nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Bộ xử lý trung tâm (CPU), Bộ nhớ chính, Hệ thống vào-ra, Liên kết hệ thống",
      "CPU, Ổ đĩa SSD/HDD, Chuột/Bàn phím, Màn hình",
      "Đơn vị điều khiển (CU), Đơn vị số học logic (ALU), Tập thanh ghi, Cache",
      "Hệ điều hành, Trình biên dịch, Phần cứng, Người sử dụng"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 1.1.1 (Trang 3, KTMT_GK.pdf), 4 bộ phận cơ bản gồm: <strong>CPU</strong>, <strong>Bộ nhớ chính (Main Memory)</strong>, <strong>Hệ thống vào-ra (I/O)</strong> và <strong>Liên kết hệ thống (System Interconnection)</strong>.</p>"
  },
  {
    "id": "lt-1.2",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.2",
    "source": "Mục 1.1.1 - Phân loại máy tính",
    "examTags": [
      "LT"
    ],
    "pdfPage": 5,
    "printedPage": 4,
    "relatedTheoryId": "1.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Loại máy tính nào được đặt ẩn bên trong một thiết bị khác và thiết kế chuyên dụng cho một chức năng cụ thể (nếu có kết nối mạng gọi là thiết bị IoT)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Máy tính nhúng (Embedded Computers)",
      "Thiết bị di động cá nhân (PMD)",
      "Máy chủ (Servers)",
      "Máy tính quy mô kho (Warehouse-Scale Computers)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Máy tính nhúng (<em>Embedded Computers</em>) được tích hợp ẩn trong thiết bị chuyên dụng (lò vi sóng, ô tô, router...); khi kết nối Internet tạo thành thiết bị <strong>IoT</strong>.</p>"
  },
  {
    "id": "lt-1.3",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.3",
    "source": "Mục 1.1.2 - Ba khía cạnh KTMT",
    "examTags": [
      "LT"
    ],
    "pdfPage": 5,
    "printedPage": 4,
    "relatedTheoryId": "1.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khía cạnh nào của Kiến trúc máy tính đóng vai trò là <strong>giao diện giữa phần mềm và phần cứng</strong>, nghiên cứu máy tính theo cách nhìn của người lập trình hợp ngữ?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Kiến trúc tập lệnh (Instruction Set Architecture - ISA)",
      "Tổ chức máy tính (Computer Organization / Microarchitecture)",
      "Thiết kế phần cứng vật lý (Hardware Packaging)",
      "Phân cấp bộ nhớ (Memory Hierarchy)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>ISA (Instruction Set Architecture)</strong> là giao diện giữa phần mềm và phần cứng; cùng một ISA (như x86, ARM, RISC-V) có thể có nhiều tổ chức/vi kiến trúc và phần cứng khác nhau.</p>"
  },
  {
    "id": "lt-1.4",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.4",
    "source": "Mục 1.1.2 - Các mức dịch ngôn ngữ",
    "examTags": [
      "LT"
    ],
    "pdfPage": 6,
    "printedPage": 5,
    "relatedTheoryId": "1.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong chuỗi chuyển đổi 3 mức ngôn ngữ của chương trình, công cụ nào thực hiện nhiệm vụ dịch từ <strong>Hợp ngữ (Assembly)</strong> sang <strong>Ngôn ngữ máy (Mã nhị phân)</strong>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Trình hợp dịch (Assembler)",
      "Trình biên dịch (Compiler)",
      "Hệ điều hành (Operating System)",
      "Bộ xử lý trung tâm (CPU)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Quy trình chuẩn: Ngôn ngữ bậc cao $\\xrightarrow{\\text{Compiler}}$ Hợp ngữ $\\xrightarrow{\\text{Assembler}}$ Ngôn ngữ máy (bit 0 và 1).</p>"
  },
  {
    "id": "lt-1.5",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.5",
    "source": "Mục 1.1.2 - Lịch sử & 7 ý tưởng lớn",
    "examTags": [
      "LT"
    ],
    "pdfPage": 6,
    "printedPage": 5,
    "relatedTheoryId": "1.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Máy tính nào thiết kế năm 1952 theo nguyên lý <strong>chương trình lưu trữ trong bộ nhớ (stored program)</strong> của John von Neumann và xử lý theo số nhị phân?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Máy tính IAS",
      "Máy tính ENIAC",
      "Vi xử lý Intel 4004",
      "Máy tính IBM-PC"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 1.1.2 (Trang 5), ENIAC (1946) xử lý thập phân, còn <strong>máy tính IAS (1952)</strong> do John von Neumann thiết kế hoạt động theo nguyên lý chương trình lưu trữ (stored program) và xử lý nhị phân.</p>"
  },
  {
    "id": "lt-1.6",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.6",
    "source": "Mục 1.1.3 - Quy đổi đơn vị & MIPS",
    "examTags": [
      "LT"
    ],
    "pdfPage": 9,
    "printedPage": 8,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Phát biểu nào sau đây đúng về hạn chế của chỉ số tốc độ thực thi <strong>MIPS</strong>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Không thể dùng MIPS để so sánh trực tiếp hiệu năng giữa hai máy tính khác Kiến trúc tập lệnh (khác ISA)",
      "MIPS luôn tỷ lệ thuận tuyệt đối với tốc độ hoàn thành mọi chương trình bất kể bộ lệnh",
      "Chỉ số MIPS của một bộ xử lý là hằng số bất biến cho mọi chương trình khác nhau",
      "MIPS đo tổng thời gian tính bằng nano-giây để thực hiện một phép toán dấu phẩy động"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 1.1.3 (Trang 8): MIPS thay đổi theo từng chương trình, không phản ánh khối lượng công việc của mỗi lệnh và <strong>không dùng để so sánh hai máy khác ISA</strong>.</p>"
  },
  {
    "id": "c1-1.1",
    "chapter": 1,
    "groupId": "1.2.1",
    "groupTitle": "Nhóm 1: Khái niệm cơ bản và Các thành phần của máy tính",
    "exerciseCode": "Bài tập 1.1",
    "source": "Đề CK 2020.2, 2021.1, 2024.2 & Ôn tập 2025.1, 2025.2",
    "examTags": [
      "GK",
      "CK"
    ],
    "pdfPage": 10,
    "printedPage": 9,
    "relatedTheoryId": "1.1.1",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên thành phần (viết tắt hoặc đầy đủ):",
    "acceptedAnswers": [
      "Bộ nhớ chính",
      "Main Memory",
      "RAM",
      "bộ nhớ chính (RAM)"
    ],
    "question": "Hãy chỉ ra tên của thành phần phần cứng trong cấu trúc máy tính thực hiện chức năng chính: <em>“Chứa toàn bộ các lệnh và dữ liệu của chương trình hiện đang được thực hiện”</em>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Bộ nhớ chính (RAM)",
      "Tập thanh ghi (Register File)",
      "Bộ nhớ đệm nhanh (Cache memory)",
      "Bộ nhớ ngoài (Ổ đĩa SSD/HDD)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mô hình máy tính von Neumann, mọi chương trình khi đang được thực hiện đều phải nạp vào <strong>Bộ nhớ chính (Main Memory / RAM)</strong>. Bộ nhớ ngoài (SSD/HDD) chỉ lưu trữ lâu dài khi chưa chạy.</p>"
  },
  {
    "id": "c1-1.2",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.2",
    "source": "Slide Chương 1 - Trang 24",
    "examTags": [
      "LT",
      "GK"
    ],
    "pdfPage": 11,
    "printedPage": 10,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị (theo ns):",
    "acceptedAnswers": [
      "0.25",
      "0.25 ns",
      "0.25ns"
    ],
    "question": "Một bộ xử lý có tần số xung nhịp $f_0 = 4\\text{ GHz}$. Hãy tính chu kỳ xung nhịp $T_0$ của bộ xử lý đó theo đơn vị nano-giây ($\\text{ns}$)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0.25 ns",
      "2.5 ns",
      "4.0 ns",
      "0.025 ns"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đổi $f_0 = 4\\text{ GHz} = 4 \\times 10^9\\text{ Hz}$. Chu kỳ xung nhịp: $$T_0 = \\frac{1}{f_0} = \\frac{1}{4 \\times 10^9}\\text{ s} = 0.25 \\times 10^{-9}\\text{ s} = \\mathbf{0.25\\text{ ns}}.$$</p>"
  },
  {
    "id": "c1-1.3a",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.3 (Biến thể 1)",
    "source": "Đề Cuối kỳ 2020.2",
    "examTags": [
      "GK",
      "CK"
    ],
    "pdfPage": 11,
    "printedPage": 10,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả gần đúng (ns):",
    "acceptedAnswers": [
      "0.345",
      "0.345 ns",
      "0.345ns"
    ],
    "question": "Bộ xử lý trung tâm có tốc độ xung nhịp cố định là $2.9\\text{ GHz}$. Hãy cho biết chu kỳ xung nhịp tương ứng của bộ xử lý đó là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0.345 ns",
      "7.9 ns",
      "0.13 ps",
      "0.13 ms"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Với $f_0 = 2.9\\text{ GHz} = 2.9 \\times 10^9\\text{ Hz}$: $$T_0 = \\frac{1}{2.9 \\times 10^9} \\approx 0.3448 \\times 10^{-9}\\text{ s} \\approx \\mathbf{0.345\\text{ ns}}.$$</p>"
  },
  {
    "id": "c1-1.3b",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.3 (Biến thể 2)",
    "source": "Ôn tập Cuối kỳ 2025.1 & 2025.2 - Câu 1",
    "examTags": [
      "GK",
      "CK"
    ],
    "pdfPage": 11,
    "printedPage": 10,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả gần đúng (ns):",
    "acceptedAnswers": [
      "0.13",
      "0.13 ns",
      "0.13ns"
    ],
    "question": "Bộ xử lý có tốc độ xung nhịp là $7.9\\text{ GHz}$. Cho biết chu kỳ xung nhịp tương ứng là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0.13 ns",
      "7.9 ns",
      "0.13 ps",
      "0.13 ms"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Với $f_0 = 7.9\\text{ GHz} = 7.9 \\times 10^9\\text{ Hz}$: $$T_0 = \\frac{1}{7.9 \\times 10^9} \\approx 0.1266 \\times 10^{-9}\\text{ s} \\approx \\mathbf{0.13\\text{ ns}}.$$</p>"
  },
  {
    "id": "c1-1.4",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.4",
    "source": "Đề Giữa kỳ 2018.2 - Mã 198 C2 & Mã 199 C17",
    "examTags": [
      "GK"
    ],
    "pdfPage": 11,
    "printedPage": 10,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập thời gian (ns):",
    "acceptedAnswers": [
      "20",
      "20 ns",
      "20ns"
    ],
    "question": "Một phần mềm viết bằng ngôn ngữ hợp ngữ với 30 lệnh, được biên dịch thành 40 lệnh mã máy. Biết rằng $CPI$ trung bình là 2, và CPU có tốc độ xung nhịp $4\\text{ GHz}$. Hỏi thời gian thực hiện phần mềm là bao lâu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "20 ns",
      "60 ns",
      "80 ns",
      "15 ns"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>CPU trực tiếp thực thi <strong>40 lệnh mã máy</strong> ($IC = 40$; số 30 lệnh hợp ngữ là bẫy nhiễu). Thời gian thực thi: $$t_{\\text{CPU}} = \\frac{IC \\times CPI}{f_0} = \\frac{40 \\times 2}{4 \\times 10^9} = 20 \\times 10^{-9}\\text{ s} = \\mathbf{20\\text{ ns}}.$$</p>"
  },
  {
    "id": "c1-1.5",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.5",
    "source": "Đề Giữa kỳ 2023.2 - Đề 1, Câu 1",
    "examTags": [
      "GK"
    ],
    "pdfPage": 12,
    "printedPage": 11,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập đáp số (ms):",
    "acceptedAnswers": [
      "2.5",
      "2.5 ms",
      "2.5ms"
    ],
    "question": "Máy tính có bộ xử lý với tốc độ xung nhịp $f = 4\\text{ GHz}$. Giả sử chương trình có số lệnh $n = 5$ triệu lệnh và $CPI$ trung bình bằng $2$. Hãy cho biết thời gian $t_{\\text{CPU}}$ để hoàn thành chương trình (tính theo $\\text{ms}$)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.5 ms",
      "25 ms",
      "1.25 ms",
      "0.25 ms"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đổi $IC = 5 \\times 10^6$ lệnh, $f_0 = 4 \\times 10^9\\text{ Hz}$: $$t_{\\text{CPU}} = \\frac{5 \\times 10^6 \\times 2}{4 \\times 10^9} = 2.5 \\times 10^{-3}\\text{ s} = \\mathbf{2.5\\text{ ms}}.$$</p>"
  },
  {
    "id": "c1-1.6",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.6",
    "source": "Đề CK 2024.1 - #54583d & Ôn tập 2025.2 - P1, Câu 4",
    "examTags": [
      "CK"
    ],
    "pdfPage": 12,
    "printedPage": 11,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả (ms):",
    "acceptedAnswers": [
      "2.4",
      "2.4 ms",
      "2.4ms"
    ],
    "question": "Máy tính có bộ xử lý với tần số xung nhịp $5\\text{ GHz}$ và $CPI$ trung bình bằng $2$. Giả sử chương trình được thực hiện với $6$ triệu lệnh. Thời gian của bộ xử lý để hoàn thành chương trình đó là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.4 ms",
      "24 ms",
      "60 ms",
      "240 ms"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Với $IC = 6 \\times 10^6$, $CPI = 2$, $f_0 = 5 \\times 10^9\\text{ Hz}$: $$t_{\\text{CPU}} = \\frac{6 \\times 10^6 \\times 2}{5 \\times 10^9} = \\frac{12}{5} \\times 10^{-3}\\text{ s} = \\mathbf{2.4\\text{ ms}}.$$</p>"
  },
  {
    "id": "c1-1.7",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.7",
    "source": "Đề Cuối kỳ 2020.2 & 2021.1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 13,
    "printedPage": 12,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả (ms):",
    "acceptedAnswers": [
      "3.5",
      "3.5 ms",
      "3.5ms"
    ],
    "question": "Một bộ xử lý hoạt động ở tần số xung nhịp $1.8\\text{ GHz}$ với $CPI = 2.1$. Chương trình ứng dụng gồm tổng cộng $3$ triệu lệnh. Tổng thời gian xử lý cần thiết để CPU hoàn thành chương trình là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "3.5 ms",
      "11.3 ms",
      "35.0 ms",
      "3500.0 ms"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ta có $t_{\\text{CPU}} = \\frac{3 \\times 10^6 \\times 2.1}{1.8 \\times 10^9} = \\frac{6.3}{1.8} \\times 10^{-3}\\text{ s} = \\mathbf{3.5\\text{ ms}}$.</p>"
  },
  {
    "id": "c1-1.8",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.8",
    "source": "Đề Cuối kỳ 2022.2 & 2024.2 - Trang 12",
    "examTags": [
      "CK"
    ],
    "pdfPage": 13,
    "printedPage": 12,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả (ms):",
    "acceptedAnswers": [
      "4.5",
      "4.5 ms",
      "4.5ms"
    ],
    "question": "Cho một chương trình có $6$ triệu lệnh thực hiện trên máy tính có bộ xử lý tốc độ xung nhịp $2\\text{ GHz}$ và $CPI$ trung bình là $1.5$. Thời gian CPU hoàn thành chương trình là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "4.5 ms",
      "72 ms",
      "450 ms",
      "45 ms"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ta có $t_{\\text{CPU}} = \\frac{6 \\times 10^6 \\times 1.5}{2 \\times 10^9} = \\frac{9}{2} \\times 10^{-3}\\text{ s} = \\mathbf{4.5\\text{ ms}}$.</p>"
  },
  {
    "id": "c1-1.9a",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.9a",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 243, Câu 11",
    "examTags": [
      "GK"
    ],
    "pdfPage": 14,
    "printedPage": 13,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập chỉ số CPI:",
    "acceptedAnswers": [
      "1.5"
    ],
    "question": "Bộ xử lý có tần số xung nhịp $2\\text{ GHz}$ thực hiện phần mềm gồm $400\\,000$ lệnh máy trong $0.0003$ giây. Chỉ số $CPI$ trung bình của phần mềm là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1.5",
      "1.2",
      "2.5",
      "0.75"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Áp dụng công thức suy ngược: $$CPI = \\frac{t_{\\text{CPU}} \\times f_0}{IC} = \\frac{3 \\times 10^{-4} \\times 2 \\times 10^9}{4 \\times 10^5} = \\frac{6 \\times 10^5}{4 \\times 10^5} = \\mathbf{1.5}.$$</p>"
  },
  {
    "id": "c1-1.9b",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.9b",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 244, Câu 8",
    "examTags": [
      "GK"
    ],
    "pdfPage": 14,
    "printedPage": 13,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập chỉ số CPI:",
    "acceptedAnswers": [
      "1.2"
    ],
    "question": "Bộ xử lý có tần số xung nhịp $300\\text{ MHz}$ thực hiện phần mềm gồm $1\\,000\\,000$ lệnh máy trong $0.004$ giây. Chỉ số $CPI$ trung bình của phần mềm là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1.2",
      "1.5",
      "2.4",
      "0.8"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đổi $f_0 = 300 \\times 10^6\\text{ Hz}$, $IC = 10^6$: $$CPI = \\frac{0.004 \\times 300 \\times 10^6}{10^6} = 0.004 \\times 300 = \\mathbf{1.2}.$$</p>"
  },
  {
    "id": "c1-1.9c",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.9c",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0008, Câu 1",
    "examTags": [
      "GK"
    ],
    "pdfPage": 14,
    "printedPage": 13,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập chỉ số CPI:",
    "acceptedAnswers": [
      "2.5"
    ],
    "question": "Bộ xử lý có tần số xung nhịp $50\\text{ MHz}$ thực hiện phần mềm gồm $800\\,000$ lệnh máy trong $0.04$ giây. Chỉ số $CPI$ trung bình là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.5",
      "2.0",
      "1.6",
      "4.0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đổi $f_0 = 50 \\times 10^6\\text{ Hz}$, $IC = 0.8 \\times 10^6$: $$CPI = \\frac{0.04 \\times 50 \\times 10^6}{0.8 \\times 10^6} = \\frac{2}{0.8} = \\mathbf{2.5}.$$</p>"
  },
  {
    "id": "c1-1.10a",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ thực thi lệnh MIPS",
    "exerciseCode": "Bài tập 1.10a",
    "source": "Slide Chương 1 - Trang 35",
    "examTags": [
      "LT",
      "GK"
    ],
    "pdfPage": 15,
    "printedPage": 14,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số MIPS:",
    "acceptedAnswers": [
      "500",
      "500 MIPS"
    ],
    "question": "Tính chỉ số $\\text{MIPS}$ của bộ xử lý có tần số xung nhịp $f_0 = 2\\text{ GHz}$ và $CPI = 4$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "500 MIPS",
      "800 MIPS",
      "200 MIPS",
      "1000 MIPS"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$\\text{MIPS} = \\frac{f_0}{CPI \\times 10^6} = \\frac{2 \\times 10^9}{4 \\times 10^6} = \\frac{2000}{4} = \\mathbf{500\\text{ MIPS}}.$$</p>"
  },
  {
    "id": "c1-1.10b",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ thực thi lệnh MIPS",
    "exerciseCode": "Bài tập 1.10b",
    "source": "Slide Chương 1 - Trang 36",
    "examTags": [
      "LT",
      "GK"
    ],
    "pdfPage": 15,
    "printedPage": 14,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI:",
    "acceptedAnswers": [
      "2.5"
    ],
    "question": "Tính chỉ số $CPI$ của bộ xử lý có tần số xung nhịp $f_0 = 1\\text{ GHz}$ và tốc độ thực thi đạt $400\\text{ MIPS}$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.5",
      "4.0",
      "1.6",
      "0.4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$CPI = \\frac{f_0}{\\text{MIPS} \\times 10^6} = \\frac{10^9}{400 \\times 10^6} = \\frac{1000}{400} = \\mathbf{2.5}.$$</p>"
  },
  {
    "id": "c1-1.11a",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ thực thi lệnh MIPS",
    "exerciseCode": "Bài tập 1.11a",
    "source": "Đề Cuối kỳ 2020.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 15,
    "printedPage": 14,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập MIPS:",
    "acceptedAnswers": [
      "800",
      "800 MIPS"
    ],
    "question": "Tính số triệu lệnh thực hiện được trong một giây (đơn vị $\\text{MIPS}$) biết $f_0 = 1.2\\text{ GHz}$ và $CPI = 1.5$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "800 MIPS",
      "1 MIPS",
      "1800 MIPS",
      "1250 MIPS"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$\\text{MIPS} = \\frac{f_0\\text{ (GHz)} \\times 1000}{CPI} = \\frac{1.2 \\times 1000}{1.5} = \\frac{1200}{1.5} = \\mathbf{800\\text{ MIPS}}.$$</p>"
  },
  {
    "id": "c1-1.11b",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ thực thi lệnh MIPS",
    "exerciseCode": "Bài tập 1.11b",
    "source": "Đề CK 2022.2 & 2024.2 - #1fd28d",
    "examTags": [
      "CK"
    ],
    "pdfPage": 15,
    "printedPage": 14,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập MIPS:",
    "acceptedAnswers": [
      "1250",
      "1250 MIPS"
    ],
    "question": "Tính tốc độ $\\text{MIPS}$ của bộ xử lý có tần số xung nhịp $f_0 = 2.5\\text{ GHz}$ và $CPI = 2$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1250 MIPS",
      "1.25 MIPS",
      "5 MIPS",
      "500 MIPS"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$\\text{MIPS} = \\frac{2.5 \\times 1000}{2} = \\frac{2500}{2} = \\mathbf{1250\\text{ MIPS}}.$$</p>"
  },
  {
    "id": "c1-1.11c",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ thực thi lệnh MIPS",
    "exerciseCode": "Bài tập 1.11c",
    "source": "Đề CK 2024.1 - #3e5442 & Ôn tập 2025.2 Câu 21",
    "examTags": [
      "CK"
    ],
    "pdfPage": 15,
    "printedPage": 14,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập MIPS:",
    "acceptedAnswers": [
      "2000",
      "2000 MIPS"
    ],
    "question": "Tính tốc độ $\\text{MIPS}$ của bộ xử lý có tần số xung nhịp $f_0 = 3\\text{ GHz}$ và $CPI = 1.5$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2000 MIPS",
      "2 MIPS",
      "4.5 MIPS",
      "500 MIPS"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$\\text{MIPS} = \\frac{3 \\times 1000}{1.5} = \\frac{3000}{1.5} = \\mathbf{2000\\text{ MIPS}}.$$</p>"
  },
  {
    "id": "c1-1.12a",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ thực thi lệnh MIPS",
    "exerciseCode": "Bài tập 1.12a",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B1, Câu 1.1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 15,
    "printedPage": 14,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI:",
    "acceptedAnswers": [
      "2.5"
    ],
    "question": "Máy tính A có bộ xử lý với tần số xung nhịp $1.5\\text{ GHz}$, có khả năng thực hiện $600$ triệu lệnh trên một giây. Tính chỉ số $CPI$ của nó?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.5",
      "1.5",
      "3.0",
      "0.4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Thực hiện $600$ triệu lệnh/giây tức là $\\text{MIPS} = 600$: $$CPI = \\frac{1.5 \\times 10^9}{600 \\times 10^6} = \\frac{1500}{600} = \\mathbf{2.5}.$$</p>"
  },
  {
    "id": "c1-1.12b",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ thực thi lệnh MIPS",
    "exerciseCode": "Bài tập 1.12b",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B5, Câu 1.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 15,
    "printedPage": 14,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị gần đúng (ví dụ 3.704 hoặc 100/27):",
    "acceptedAnswers": [
      "3.704",
      "3.7",
      "100/27"
    ],
    "question": "Cho máy tính A có $\\text{MIPS} = 900$ và chu kỳ xung nhịp của bộ xử lý là $T_A = 300\\text{ ps}$. Hãy tính $CPI$ của máy tính A?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "3.704 (tức 100/27)",
      "2.700",
      "0.27",
      "3.333"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đổi $T_A = 300 \\times 10^{-12}\\text{ s} \\Rightarrow f_A = \\frac{10^{12}}{300}\\text{ Hz}$. Vậy: $$CPI = \\frac{f_A}{\\text{MIPS} \\times 10^6} = \\frac{10^{12}}{300 \\times 900 \\times 10^6} = \\frac{100}{27} \\approx \\mathbf{3.704}.$$</p>"
  },
  {
    "id": "c1-1.13a",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.13a",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 19",
    "examTags": [
      "GK"
    ],
    "pdfPage": 16,
    "printedPage": 15,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI trung bình:",
    "acceptedAnswers": [
      "1.5"
    ],
    "question": "Phần mềm X có 3 nhóm lệnh A, B, C với $CPI$ tương ứng là $1, 2, 3$ và số lượng lệnh tương ứng là $4, 1, 1$. Tính chỉ số $CPI$ trung bình của phần mềm X?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1.5",
      "2.0",
      "1.8",
      "1.33"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$CPI_{\\text{TB}} = \\frac{(1 \\times 4) + (2 \\times 1) + (3 \\times 1)}{4 + 1 + 1} = \\frac{9}{6} = \\mathbf{1.5}.$$</p>"
  },
  {
    "id": "c1-1.13b1",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.13b (Dãy 1)",
    "source": "Slide Chương 1 - Trang 32",
    "examTags": [
      "LT",
      "GK"
    ],
    "pdfPage": 17,
    "printedPage": 16,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI:",
    "acceptedAnswers": [
      "2",
      "2.0"
    ],
    "question": "Ba loại lệnh A, B, C có $CPI$ lần lượt là $1, 2, 3$. Dãy lệnh 1 có số lệnh $(A, B, C) = (20, 10, 20)$. Tính $CPI$ trung bình của Dãy lệnh 1?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.0",
      "1.5",
      "2.5",
      "1.8"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$CPI_{\\text{TB1}} = \\frac{(1 \\times 20) + (2 \\times 10) + (3 \\times 20)}{20 + 10 + 20} = \\frac{100}{50} = \\mathbf{2.0}.$$</p>"
  },
  {
    "id": "c1-1.13b2",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.13b (Dãy 2)",
    "source": "Slide Chương 1 - Trang 32",
    "examTags": [
      "LT",
      "GK"
    ],
    "pdfPage": 17,
    "printedPage": 16,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI:",
    "acceptedAnswers": [
      "1.5"
    ],
    "question": "Ba loại lệnh A, B, C có $CPI$ lần lượt là $1, 2, 3$. Dãy lệnh 2 có số lệnh $(A, B, C) = (40, 10, 10)$. Tính $CPI$ trung bình của Dãy lệnh 2?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1.5",
      "2.0",
      "1.67",
      "1.25"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$CPI_{\\text{TB2}} = \\frac{(1 \\times 40) + (2 \\times 10) + (3 \\times 10)}{40 + 10 + 10} = \\frac{90}{60} = \\mathbf{1.5}.$$</p>"
  },
  {
    "id": "c1-1.13c",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.13c",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B4, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 17,
    "printedPage": 16,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Ba loại lệnh A, B, C có $CPI$ lần lượt là $1, 2, 4$. Ba dãy lệnh có số lệnh $(A,B,C)$ lần lượt là: Dãy 1 $(1,2,2)$; Dãy 2 $(5,2,1)$; Dãy 3 $(4,1,1)$. Bộ giá trị $(CPI_{\\text{TB1}}, CPI_{\\text{TB2}}, CPI_{\\text{TB3}})$ lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "(2.6, 1.625, 1.67)",
      "(2.33, 1.75, 1.5)",
      "(2.6, 1.5, 2.0)",
      "(2.4, 1.625, 1.8)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Dãy 1: $\\frac{1\\cdot 1 + 2\\cdot 2 + 4\\cdot 2}{5} = \\frac{13}{5} = 2.6$.</li><li>Dãy 2: $\\frac{1\\cdot 5 + 2\\cdot 2 + 4\\cdot 1}{8} = \\frac{13}{8} = 1.625$.</li><li>Dãy 3: $\\frac{1\\cdot 4 + 2\\cdot 1 + 4\\cdot 1}{6} = \\frac{10}{6} \\approx 1.67$.</li></ul>"
  },
  {
    "id": "c1-1.14a",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.14a",
    "source": "Đề Giữa kỳ 2025.2 - Đề 0013, Câu 75",
    "examTags": [
      "GK"
    ],
    "pdfPage": 17,
    "printedPage": 16,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI trung bình:",
    "acceptedAnswers": [
      "4",
      "4.0"
    ],
    "question": "Một phần mềm gồm: $15\\%$ lệnh tốn $3$ chu kỳ, <strong>còn lại</strong> là lệnh $4$ chu kỳ, $35\\%$ lệnh $5$ chu kỳ và $10\\%$ lệnh $2$ chu kỳ. $CPI$ trung bình của phần mềm là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "4.0",
      "3.85",
      "4.2",
      "3.5"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tỷ lệ nhóm 4 chu kỳ còn lại: $100\\% - (15\\% + 35\\% + 10\\%) = 40\\%$. $$CPI_{\\text{TB}} = 0.15\\times 3 + 0.40\\times 4 + 0.35\\times 5 + 0.10\\times 2 = 0.45 + 1.60 + 1.75 + 0.20 = \\mathbf{4.0}.$$</p>"
  },
  {
    "id": "c1-1.14b",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.14b",
    "source": "Đề Giữa kỳ 2025.2 - Đề 0013, Câu 944",
    "examTags": [
      "GK"
    ],
    "pdfPage": 17,
    "printedPage": 16,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI trung bình:",
    "acceptedAnswers": [
      "7.2"
    ],
    "question": "Một phần mềm gồm: $10\\%$ lệnh tốn $4$ chu kỳ, $40\\%$ lệnh $6$ chu kỳ, $30\\%$ lệnh $8$ chu kỳ, <strong>còn lại</strong> là lệnh $10$ chu kỳ. $CPI$ trung bình của phần mềm là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "7.2",
      "6.8",
      "7.0",
      "7.4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tỷ lệ nhóm 10 chu kỳ còn lại: $100\\% - (10\\% + 40\\% + 30\\%) = 20\\%$. $$CPI_{\\text{TB}} = 0.10\\times 4 + 0.40\\times 6 + 0.30\\times 8 + 0.20\\times 10 = 0.4 + 2.4 + 2.4 + 2.0 = \\mathbf{7.2}.$$</p>"
  },
  {
    "id": "c1-1.14c",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.14c",
    "source": "Đề Giữa kỳ 2025.2 - Đề 0012, Câu 110",
    "examTags": [
      "GK"
    ],
    "pdfPage": 18,
    "printedPage": 17,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập thời gian (vd: 2 ms hoặc 0.002 s):",
    "acceptedAnswers": [
      "2 ms",
      "2ms",
      "0.002 s",
      "0.002s",
      "0.002"
    ],
    "question": "Bộ xử lý RISC-V có tần số xung nhịp $1\\text{ GHz}$ thực hiện phần mềm gồm $200\\,000$ lệnh máy với $CPI = 3$, $200\\,000$ lệnh máy với $CPI = 4$ và $300\\,000$ lệnh máy với $CPI = 2$. Phần mềm đó chạy trong bao lâu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2 ms (0.002 s)",
      "20 ms",
      "0.2 ms",
      "7 ms"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tổng số chu kỳ: $n = 200\\,000\\times 3 + 200\\,000\\times 4 + 300\\,000\\times 2 = 2\\,000\\,000 = 2\\times 10^6$ chu kỳ. Thời gian chạy: $$t_{\\text{CPU}} = \\frac{2\\times 10^6}{10^9} = 2\\times 10^{-3}\\text{ s} = \\mathbf{2\\text{ ms}}.$$</p>"
  },
  {
    "id": "c1-1.15",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.15",
    "source": "Đề GK 2024.1 - #a6b720 & Ôn tập 2025.2 - P1, Câu 10",
    "examTags": [
      "GK",
      "CK"
    ],
    "pdfPage": 18,
    "printedPage": 17,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số giây:",
    "acceptedAnswers": [
      "1.35",
      "1.35 giây",
      "1.35s"
    ],
    "question": "Bộ xử lý chạy chương trình $2$ tỷ lệnh ở tần số $4\\text{ GHz}$ gồm 3 loại lệnh: Loại A ($40\\%$, $CPI=1$), Loại B ($35\\%$, $CPI=3$), Loại C ($25\\%$, $CPI=5$). Tổng thời gian thực thi là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1.35 giây",
      "1.1 giây",
      "1.25 giây",
      "1.4 giây"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$CPI_{\\text{TB}} = 0.40\\times 1 + 0.35\\times 3 + 0.25\\times 5 = 2.7$. Thời gian: $$t_{\\text{CPU}} = \\frac{2\\times 10^9 \\times 2.7}{4\\times 10^9} = \\frac{5.4}{4} = \\mathbf{1.35\\text{ giây}}.$$</p>"
  },
  {
    "id": "c1-1.16a",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.16a",
    "source": "Ôn tập Cuối kỳ 2025.2 - P1, Câu 70",
    "examTags": [
      "CK"
    ],
    "pdfPage": 19,
    "printedPage": 18,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI trung bình:",
    "acceptedAnswers": [
      "4",
      "4.0"
    ],
    "question": "Bộ xử lý $2\\text{ GHz}$ thực thi 5 lớp lệnh A, B, C, D, E có $CPI$ lần lượt là $2, 3, 4, 6, 10$ với tỷ lệ $30\\%, 30\\%, 15\\%, 15\\%, 10\\%$. Tìm $CPI$ trung bình của bộ xử lý?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "4.0",
      "4.5",
      "3.8",
      "5.0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$CPI_{\\text{TB}} = (0.30\\times 2) + (0.30\\times 3) + (0.15\\times 4) + (0.15\\times 6) + (0.10\\times 10) = 0.6 + 0.9 + 0.6 + 0.9 + 1.0 = \\mathbf{4.0}.$$</p>"
  },
  {
    "id": "c1-1.16b",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.16b",
    "source": "Ôn tập Cuối kỳ 2025.2 - P1, Câu 55",
    "examTags": [
      "CK"
    ],
    "pdfPage": 19,
    "printedPage": 18,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số nguyên không dấu phân tách:",
    "acceptedAnswers": [
      "10000000000",
      "10^10",
      "10 000 000 000"
    ],
    "question": "Với dữ kiện Bài tập 1.16 ($f_0 = 2\\text{ GHz}$, $CPI_{\\text{TB}} = 4.0$), nếu thời gian thực thi chương trình là $20$ giây, hãy tìm tổng số lệnh ($IC$)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "10 000 000 000 lệnh",
      "4 000 000 000 lệnh",
      "16 000 000 000 lệnh",
      "2 500 000 000 lệnh"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$IC = \\frac{t_{\\text{CPU}} \\times f_0}{CPI_{\\text{TB}}} = \\frac{20 \\times 2\\times 10^9}{4} = 10 \\times 10^9 = \\mathbf{10\\,000\\,000\\,000\\text{ lệnh}}.$$</p>"
  },
  {
    "id": "c1-1.17a",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.17a",
    "source": "Đề Giữa kỳ 2021.1 - IT3030E, Problem 3a",
    "examTags": [
      "GK"
    ],
    "pdfPage": 20,
    "printedPage": 19,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập thời gian (theo µs):",
    "acceptedAnswers": [
      "2.75 us",
      "2.75",
      "2.75 µs"
    ],
    "question": "Chương trình gồm $2000$ lệnh: $750$ số học ($CPI=1$), $250$ store ($CPI=5$), $500$ load ($CPI=5$) và $500$ branch ($CPI=2$). Tính thời gian thực thi trên bộ xử lý $2\\text{ GHz}$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.75 µs",
      "5.5 µs",
      "1.375 µs",
      "2.75 ms"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tổng chu kỳ: $n_{\\text{cũ}} = 750\\cdot 1 + 250\\cdot 5 + 500\\cdot 5 + 500\\cdot 2 = 5500$ chu kỳ. Thời gian: $t_{\\text{cũ}} = \\frac{5500}{2\\times 10^9} = \\mathbf{2.75\\text{ }\\mu\\text{s}}$.</p>"
  },
  {
    "id": "c1-1.17b",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.17b",
    "source": "Đề Giữa kỳ 2021.1 - IT3030E, Problem 3b",
    "examTags": [
      "GK"
    ],
    "pdfPage": 20,
    "printedPage": 19,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI:",
    "acceptedAnswers": [
      "2.75"
    ],
    "question": "Với chương trình ở Bài 1.17 ($n_{\\text{cũ}} = 5500$ chu kỳ, tổng $IC_{\\text{cũ}} = 2000$ lệnh), tìm $CPI$ trung bình ban đầu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.75",
      "2.50",
      "3.25",
      "2.25"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$CPI_{\\text{cũ}} = \\frac{n_{\\text{cũ}}}{IC_{\\text{cũ}}} = \\frac{5500}{2000} = \\mathbf{2.75}.$$</p>"
  },
  {
    "id": "c1-1.17c",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.17c",
    "source": "Đề Giữa kỳ 2021.1 - IT3030E, Problem 3c",
    "examTags": [
      "GK"
    ],
    "pdfPage": 20,
    "printedPage": 19,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với dữ kiện Bài 1.17, nếu số lệnh load ($500$ lệnh, $CPI=5$) giảm đi $50\\%$, độ tăng tốc (Speedup) và $CPI_{\\text{mới}}$ lần lượt xấp xỉ bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Speedup = 1.294 lần; CPI mới ≈ 2.43",
      "Speedup = 1.50 lần; CPI mới = 2.25",
      "Speedup = 1.25 lần; CPI mới = 2.50",
      "Speedup = 1.15 lần; CPI mới = 2.60"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Giảm $250$ lệnh load $\\Rightarrow IC_{\\text{mới}} = 1750$; $n_{\\text{mới}} = 5500 - 250\\times 5 = 4250$. Suy ra $CPI_{\\text{mới}} = \\frac{4250}{1750} \\approx 2.43$ và $\\text{Speedup} = \\frac{5500}{4250} \\approx \\mathbf{1.294\\text{ lần}}$.</p>"
  },
  {
    "id": "c1-1.18a",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.18a",
    "source": "Slide Chương 1 - Trang 29",
    "examTags": [
      "LT",
      "GK"
    ],
    "pdfPage": 21,
    "printedPage": 20,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hai máy tính A và B cùng ISA: Máy A có $T_A = 250\\text{ ps}$, $CPI_A = 2.0$; Máy B có $T_B = 500\\text{ ps}$, $CPI_B = 1.2$. Máy nào nhanh hơn và nhanh hơn bao nhiêu lần?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Máy A nhanh hơn máy B 1.2 lần",
      "Máy B nhanh hơn máy A 1.2 lần",
      "Máy A nhanh hơn máy B 2.0 lần",
      "Hai máy chạy nhanh bằng nhau"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$t_A = 500\\,IC\\text{ (ps)}$, $t_B = 600\\,IC\\text{ (ps)}$. Vì $t_A &lt; t_B$ nên <strong>máy A nhanh hơn máy B</strong> $\\frac{600}{500} = \\mathbf{1.2\\text{ lần}}$.</p>"
  },
  {
    "id": "c1-1.18b",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.18b",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B1, Câu 1.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 21,
    "printedPage": 20,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hai máy tính A và B cùng ISA: Máy A có $T_A = 250\\text{ ps}$, $CPI_A = 2.0$; Máy B có $T_B = 750\\text{ ps}$, $CPI_B = 1.2$. Máy nào nhanh hơn và nhanh hơn bao nhiêu lần?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Máy A nhanh hơn máy B 1.8 lần",
      "Máy B nhanh hơn máy A 1.8 lần",
      "Máy A nhanh hơn máy B 3.0 lần",
      "Máy A nhanh hơn máy B 1.5 lần"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$t_A = 500\\,IC\\text{ (ps)}$, $t_B = 900\\,IC\\text{ (ps)}$. Vậy <strong>máy A nhanh hơn máy B</strong> $\\frac{900}{500} = \\mathbf{1.8\\text{ lần}}$.</p>"
  },
  {
    "id": "c1-1.18c",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.18c",
    "source": "Đề GK 2018.2 - Mã 198 C12 & Mã 199 C4",
    "examTags": [
      "GK"
    ],
    "pdfPage": 21,
    "printedPage": 20,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hai máy tính A và B cùng ISA: Máy A có $T_A = 300\\text{ ps}$, $CPI_A = 2.0$; Máy B có $T_B = 500\\text{ ps}$, $CPI_B = 1.1$. Kết luận nào đúng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Máy B nhanh hơn máy A",
      "Máy A nhanh hơn máy B",
      "Máy A nhanh hơn máy B 1.5 lần",
      "Hai máy có hiệu năng bằng nhau"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$t_A = 600\\,IC\\text{ (ps)}$, $t_B = 550\\,IC\\text{ (ps)}$. Vì $t_B &lt; t_A$ nên <strong>Máy B nhanh hơn Máy A</strong> (khoảng $1.09$ lần).</p>"
  },
  {
    "id": "c1-1.19a",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.19a",
    "source": "Đề CK 2023.1 - #2262f & Ôn tập 2025.2 Câu 12",
    "examTags": [
      "CK"
    ],
    "pdfPage": 22,
    "printedPage": 21,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lần:",
    "acceptedAnswers": [
      "4.5"
    ],
    "question": "Hai bộ xử lý cùng thực hiện 1 công việc: $P_1$ ($4\\text{ GHz}, CPI=0.9, IC=5.0\\text{E}9$) và $P_2$ ($3\\text{ GHz}, CPI=0.75, IC=1.0\\text{E}9$). Hỏi $P_2$ nhanh hơn $P_1$ bao nhiêu lần?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "4.5 lần",
      "1.5 lần",
      "3.0 lần",
      "5.0 lần"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$t_1 = \\frac{5\\times 0.9}{4} = 1.125\\text{ s}$; $t_2 = \\frac{1\\times 0.75}{3} = 0.25\\text{ s}$. Tỷ số tốc độ: $\\frac{P_2}{P_1} = \\frac{t_1}{t_2} = \\frac{1.125}{0.25} = \\mathbf{4.5\\text{ lần}}$.</p>"
  },
  {
    "id": "c1-1.19b",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.19b",
    "source": "Đề Giữa kỳ 2024.1 - #8cf496",
    "examTags": [
      "GK"
    ],
    "pdfPage": 22,
    "printedPage": 21,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lần:",
    "acceptedAnswers": [
      "1.5"
    ],
    "question": "Hai bộ xử lý cùng thực hiện 1 công việc: $P_1$ ($1.5\\text{ GHz}, CPI=1.8, IC=3.0\\text{E}9$) và $P_2$ ($2\\text{ GHz}, CPI=1.2, IC=4.0\\text{E}9$). Hỏi $P_2$ nhanh hơn $P_1$ bao nhiêu lần?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1.5 lần",
      "2.0 lần",
      "1.25 lần",
      "1.8 lần"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$t_1 = \\frac{3\\times 1.8}{1.5} = 3.6\\text{ s}$; $t_2 = \\frac{4\\times 1.2}{2} = 2.4\\text{ s}$. Vậy $\\frac{P_2}{P_1} = \\frac{3.6}{2.4} = \\mathbf{1.5\\text{ lần}}$.</p>"
  },
  {
    "id": "c1-1.20a",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.20a",
    "source": "Đề Giữa kỳ 2021.1 - IT3030E, Problem 2a",
    "examTags": [
      "GK"
    ],
    "pdfPage": 23,
    "printedPage": 22,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hai bộ xử lý cùng ISA: $P_1$ ($2.5\\text{ GHz}$, CPI 4 lớp A,B,C,D = $2, 1.5, 2, 1$) và $P_2$ ($3\\text{ GHz}$, CPI = $1, 2, 1, 1$). Chương trình có $10\\%$ A, $20\\%$ B, $50\\%$ C, $20\\%$ D. $CPI$ trung bình của $P_1$ và $P_2$ lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "CPI1 = 1.7; CPI2 = 1.2",
      "CPI1 = 1.625; CPI2 = 1.25",
      "CPI1 = 1.5; CPI2 = 1.3",
      "CPI1 = 1.8; CPI2 = 1.1"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$CPI_1 = 0.1\\cdot 2 + 0.2\\cdot 1.5 + 0.5\\cdot 2 + 0.2\\cdot 1 = \\mathbf{1.7}$. $CPI_2 = 0.1\\cdot 1 + 0.2\\cdot 2 + 0.5\\cdot 1 + 0.2\\cdot 1 = \\mathbf{1.2}$.</p>"
  },
  {
    "id": "c1-1.20b",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.20 (b & c)",
    "source": "Đề Giữa kỳ 2021.1 - IT3030E, Problem 2b, 2c",
    "examTags": [
      "GK"
    ],
    "pdfPage": 23,
    "printedPage": 22,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với dữ kiện Bài 1.20 ($IC = 10^6$, $P_1: 2.5\\text{ GHz}, CPI_1=1.7$; $P_2: 3\\text{ GHz}, CPI_2=1.2$), thời gian thực thi và kết luận bộ xử lý nào nhanh hơn là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "t1 = 0.68 ms, t2 = 0.40 ms -> P2 nhanh hơn P1 (1.7 lần)",
      "t1 = 0.40 ms, t2 = 0.68 ms -> P1 nhanh hơn P2 (1.7 lần)",
      "t1 = 0.85 ms, t2 = 0.40 ms -> P2 nhanh hơn P1 (2.125 lần)",
      "t1 = 0.68 ms, t2 = 0.50 ms -> P2 nhanh hơn P1 (1.36 lần)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$n_1 = 1.7\\times 10^6 \\Rightarrow t_1 = \\frac{1.7\\times 10^6}{2.5\\times 10^9} = 0.68\\text{ ms}$; $n_2 = 1.2\\times 10^6 \\Rightarrow t_2 = \\frac{1.2\\times 10^6}{3\\times 10^9} = 0.40\\text{ ms}$. Suy ra $P_2$ nhanh hơn $P_1$ $\\frac{0.68}{0.40} = \\mathbf{1.7\\text{ lần}}$.</p>"
  },
  {
    "id": "c1-1.21",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.21",
    "source": "Slide Chương 1 - Trang 26",
    "examTags": [
      "LT",
      "GK"
    ],
    "pdfPage": 24,
    "printedPage": 23,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tần số fB (GHz):",
    "acceptedAnswers": [
      "4",
      "4 GHz",
      "4GHz"
    ],
    "question": "Hai máy A và B cùng chạy 1 chương trình: Máy A có $f_A = 2\\text{ GHz}, t_A = 10\\text{ s}$. Máy B cần đạt $t_B = 6\\text{ s}$, biết số chu kỳ $n_B = 1.2\\times n_A$. Tần số xung nhịp cần thiết của máy B ($f_B$) là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "4 GHz",
      "3.33 GHz",
      "2.4 GHz",
      "4.8 GHz"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$n_A = 10\\times 2\\times 10^9 = 20\\times 10^9$ chu kỳ; $n_B = 1.2\\times 20\\times 10^9 = 24\\times 10^9$. Vậy $f_B = \\frac{24\\times 10^9}{6} = \\mathbf{4\\text{ GHz}}$.</p>"
  },
  {
    "id": "c1-1.22a",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.22a (Đề B2)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B2, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 24,
    "printedPage": 23,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lệnh ICB:",
    "acceptedAnswers": [
      "65000",
      "65 000"
    ],
    "question": "Máy A có $CPI_A = 1.3, f_A = 600\\text{ MHz}, IC_A = 100\\,000$ lệnh. Máy B có $CPI_B = 2.5, f_B = 750\\text{ MHz}$. Để $t_A = t_B$ thì số lệnh $IC_B$ trên máy B là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "65 000 lệnh",
      "54 000 lệnh",
      "80 000 lệnh",
      "75 000 lệnh"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$IC_B = \\frac{IC_A \\times CPI_A \\times f_B}{f_A \\times CPI_B} = \\frac{100\\,000 \\times 1.3 \\times 750}{600 \\times 2.5} = \\mathbf{65\\,000\\text{ lệnh}}.$$</p>"
  },
  {
    "id": "c1-1.22b",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.22b (Đề B3)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B3, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 24,
    "printedPage": 23,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lệnh ICB:",
    "acceptedAnswers": [
      "54000",
      "54 000"
    ],
    "question": "Máy A có $CPI_A = 1.2, f_A = 500\\text{ MHz}, IC_A = 90\\,000$ lệnh. Máy B có $CPI_B = 2.4, f_B = 600\\text{ MHz}$. Để $t_A = t_B$ thì số lệnh $IC_B$ là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "54 000 lệnh",
      "65 000 lệnh",
      "45 000 lệnh",
      "72 000 lệnh"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$$IC_B = \\frac{90\\,000 \\times 1.2 \\times 600}{500 \\times 2.4} = \\mathbf{54\\,000\\text{ lệnh}}.$$</p>"
  },
  {
    "id": "c1-1.22c",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.22c (Đề B6)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B6, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 25,
    "printedPage": 24,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lệnh ICB:",
    "acceptedAnswers": [
      "80000",
      "80 000"
    ],
    "question": "Máy A có $CPI_A = 1.4, f_A = 750\\text{ MHz}, IC_A = 80\\,000$ lệnh. Máy B có $CPI_B = 2.8, f_B = 1.5\\text{ GHz}$. Để $t_A = t_B$ thì số lệnh $IC_B$ là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "80 000 lệnh",
      "40 000 lệnh",
      "160 000 lệnh",
      "60 000 lệnh"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đổi $f_B = 1500\\text{ MHz}$: $$IC_B = \\frac{80\\,000 \\times 1.4 \\times 1500}{750 \\times 2.8} = \\mathbf{80\\,000\\text{ lệnh}}.$$</p>"
  },
  {
    "id": "c1-1.22d",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.22d (Đề B7)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B7, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 25,
    "printedPage": 24,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị gần đúng:",
    "acceptedAnswers": [
      "58333",
      "58 333",
      "175000/3"
    ],
    "question": "Máy A có $CPI_A = 2.4, f_A = 800\\text{ MHz}, IC_A = 70\\,000$ lệnh. Máy B có $CPI_B = 3.6, f_B = 1\\text{ GHz}$. Để $t_A = t_B$ thì số lệnh $IC_B$ xấp xỉ bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "58 333 lệnh (175000/3)",
      "50 000 lệnh",
      "64 000 lệnh",
      "46 667 lệnh"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đổi $f_B = 1000\\text{ MHz}$: $$IC_B = \\frac{70\\,000 \\times 2.4 \\times 1000}{800 \\times 3.6} = \\frac{175\\,000}{3} \\approx \\mathbf{58\\,333\\text{ lệnh}}.$$</p>"
  },
  {
    "id": "c1-1.23a",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.23 (Ý 1.1)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B8, Câu 1.1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 25,
    "printedPage": 24,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Ba bộ xử lý cùng ISA: $P_1$ ($2\\text{ GHz}, CPI=1.5$); $P_2$ ($1.5\\text{ GHz}, CPI=1.0$); $P_3$ ($3\\text{ GHz}, CPI=2.5$). Bộ xử lý nào có hiệu suất cao nhất?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "P2 (đạt 1.50 × 10^9 lệnh/giây)",
      "P1 (đạt 1.33 × 10^9 lệnh/giây)",
      "P3 (vì có xung nhịp cao nhất 3 GHz)",
      "Cả 3 bộ xử lý có hiệu suất ngang nhau"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>So sánh $f_0/CPI$: $P_1 = \\frac{2}{1.5} \\approx 1.33\\times 10^9$; $P_2 = \\frac{1.5}{1.0} = 1.50\\times 10^9$; $P_3 = \\frac{3}{2.5} = 1.20\\times 10^9$ lệnh/s $\\Rightarrow$ <strong>$P_2$ cao nhất</strong>.</p>"
  },
  {
    "id": "c1-1.23b",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.23 (Ý 1.2)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B8, Câu 1.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 26,
    "printedPage": 25,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với bảng số liệu Bài 1.23 ($P_1: 2\\text{ GHz}/1.5$; $P_2: 1.5\\text{ GHz}/1.0$; $P_3: 3\\text{ GHz}/2.5$), nếu mỗi bộ xử lý thực thi 1 chương trình trong $10\\text{ s}$, số lệnh $(IC_1, IC_2, IC_3)$ lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "(1.33×10^10, 1.50×10^10, 1.20×10^10)",
      "(2.0×10^10, 1.50×10^10, 3.0×10^10)",
      "(1.50×10^10, 1.33×10^10, 1.20×10^10)",
      "(3.0×10^10, 1.50×10^10, 7.5×10^10)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Với $n = t\\cdot f_0$ và $IC = n/CPI$: $IC_1 = \\frac{20\\times 10^9}{1.5} \\approx 1.33\\times 10^{10}$; $IC_2 = \\frac{15\\times 10^9}{1.0} = 1.50\\times 10^{10}$; $IC_3 = \\frac{30\\times 10^9}{2.5} = 1.20\\times 10^{10}$.</p>"
  },
  {
    "id": "c1-1.23c",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.23 (Ý 1.3)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B8, Câu 1.3",
    "examTags": [
      "CK"
    ],
    "pdfPage": 26,
    "printedPage": 25,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với bảng số liệu Bài 1.23, người ta muốn giảm thời gian thực thi đi $30\\%$ ($t_{\\text{mới}} = 0.7 t_{\\text{cũ}}$) nhưng làm $CPI$ tăng lên $20\\%$ ($CPI_{\\text{mới}} = 1.2 CPI_{\\text{cũ}}$). Tần số xung nhịp mới của $(P_1, P_2, P_3)$ lần lượt xấp xỉ là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "(3.43 GHz, 2.57 GHz, 5.14 GHz)",
      "(2.80 GHz, 2.10 GHz, 4.20 GHz)",
      "(3.00 GHz, 2.25 GHz, 4.50 GHz)",
      "(2.40 GHz, 1.80 GHz, 3.60 GHz)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vì $f_{\\text{mới}} = \\frac{1.2}{0.7} f_{\\text{cũ}} = \\frac{12}{7} f_{\\text{cũ}}$: $f_1' = \\frac{24}{7} \\approx 3.43\\text{ GHz}$; $f_2' = \\frac{18}{7} \\approx 2.57\\text{ GHz}$; $f_3' = \\frac{36}{7} \\approx 5.14\\text{ GHz}$.</p>"
  },
  {
    "id": "lt-2.1",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.1",
    "source": "Mục 2.1.1 - Cấu trúc CPU",
    "examTags": [
      "LT"
    ],
    "pdfPage": 28,
    "printedPage": 27,
    "relatedTheoryId": "2.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Bên trong Bộ xử lý trung tâm (CPU) bao gồm 3 bộ phận cốt lõi nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Đơn vị điều khiển (CU), Đơn vị số học và logic (ALU), Tập thanh ghi (RF)",
      "Bộ nhớ chính (RAM), Bộ nhớ đệm (Cache), Ổ đĩa cứng (SSD)",
      "Bus địa chỉ, Bus dữ liệu, Bus điều khiển",
      "Cổng vào-ra, Bộ điều khiển DMA (DMAC), Thiết bị ngoại vi"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 2.1.1 (Trang 27, KTMT_GK.pdf), CPU gồm 3 bộ phận: <strong>CU</strong>, <strong>ALU</strong> và <strong>Tập thanh ghi (RF)</strong>.</p>"
  },
  {
    "id": "lt-2.2",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.2",
    "source": "Mục 2.1.2 - Chu trình lệnh",
    "examTags": [
      "LT"
    ],
    "pdfPage": 30,
    "printedPage": 29,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thứ tự 3 bước cơ bản trong một Chu trình thực hiện lệnh (Instruction Cycle) là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Tìm nạp lệnh (Fetch) -> Giải mã lệnh (Decode) -> Thực hiện lệnh (Execute)",
      "Thực hiện lệnh (Execute) -> Giải mã lệnh (Decode) -> Tìm nạp lệnh (Fetch)",
      "Ngắt (Interrupt) -> Đọc RAM -> Ghi ra ổ cứng",
      "Giải mã lệnh (Decode) -> Tìm nạp lệnh (Fetch) -> Lưu ngăn xếp"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>CPU lặp đi lặp lại: Tìm nạp lệnh (từ <code>PC</code> vào <code>IR</code>, tăng <code>PC</code>) $\\rightarrow$ Giải mã lệnh trong <code>IR</code> $\\rightarrow$ Thực hiện lệnh.</p>"
  },
  {
    "id": "lt-2.3",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.3",
    "source": "Mục 2.1.2 - Quy trình xử lý Ngắt",
    "examTags": [
      "LT"
    ],
    "pdfPage": 31,
    "printedPage": 30,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khi CPU kiểm tra thấy có yêu cầu ngắt hợp lệ sau khi hoàn thành một lệnh máy, bước hành động ngay sau khi tạm dừng chương trình là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Cất ngữ cảnh (lưu địa chỉ trở về trên PC và thông tin liên quan vào ngăn xếp) rồi trỏ PC đến chương trình con xử lý ngắt",
      "Xóa toàn bộ bộ nhớ chính để nhường chỗ cho chương trình xử lý ngắt",
      "Tắt nguồn hệ thống và khởi động lại ngay bằng tín hiệu Reset",
      "Chuyển giao hoàn toàn CPU cho thiết bị ngoại vi điều khiển vĩnh viễn"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Quy trình 5 bước (Trang 30): Kiểm tra ngắt $\\rightarrow$ Tạm dừng $\\rightarrow$ <strong>Cất ngữ cảnh vào ngăn xếp</strong> $\\rightarrow$ Trỏ <code>PC</code> tới Interrupt Handler $\\rightarrow$ Chạy xử lý ngắt và khôi phục ngữ cảnh.</p>"
  },
  {
    "id": "lt-2.4",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.4",
    "source": "Mục 2.1.3 - Tín hiệu điều khiển Bus",
    "examTags": [
      "LT"
    ],
    "pdfPage": 33,
    "printedPage": 32,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong nhóm tín hiệu điều khiển xin nhượng bus phục vụ DMA, hai tín hiệu <code>BRQ</code> và <code>BGT</code> có ý nghĩa lần lượt là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "BRQ: Mô-đun vào-ra (DMAC) yêu cầu xin quyền bus; BGT: CPU chấp nhận chuyển nhượng quyền sử dụng bus",
      "BRQ: CPU yêu cầu đọc bộ nhớ; BGT: Bộ nhớ trả dữ liệu về CPU",
      "BRQ: Ngắt không thể che; BGT: Khởi động lại hệ thống (Reset)",
      "BRQ: Đọc cổng I/O; BGT: Ghi cổng I/O"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>BRQ (Bus Request)</strong> do DMAC gửi để xin bus; <strong>BGT (Bus Grant)</strong> do CPU phát ra để chấp nhận nhượng quyền sử dụng bus.</p>"
  },
  {
    "id": "lt-2.5",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.5",
    "source": "Mục 2.1.3 - Liên kết điểm-điểm",
    "examTags": [
      "LT"
    ],
    "pdfPage": 33,
    "printedPage": 32,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chuẩn liên kết điểm-điểm nào dùng kết nối trực tiếp từng cặp giữa các lõi xử lý (Cores) và Chipset mà không cần bộ phân xử bus?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "QPI (Quick Path Interconnect)",
      "SATA (Serial ATA)",
      "USB (Universal Serial Bus)",
      "Shared PCI Bus truyền thống"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>QPI (Quick Path Interconnect)</strong> kết nối trực tiếp từng cặp giữa các lõi xử lý và Chipset, truyền dữ liệu dạng gói theo kiến trúc phân lớp.</p>"
  },
  {
    "id": "lt-2.6",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.6",
    "source": "Mục 2.1.3 - Bus địa chỉ",
    "examTags": [
      "LT"
    ],
    "pdfPage": 32,
    "printedPage": 31,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Nếu Bus địa chỉ có độ rộng $N = 32$ bit và bộ nhớ đánh địa chỉ theo byte, không gian địa chỉ tối đa mà CPU quản lý được là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "4 GiB (2^32 byte)",
      "2 GiB (2^31 byte)",
      "32 GiB",
      "4 MiB (2^22 byte)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Không gian địa chỉ tối đa $= 2^{32}\\text{ byte} = 2^2 \\times 2^{30}\\text{ byte} = \\mathbf{4\\text{ GiB}}$.</p>"
  },
  {
    "id": "c2-2.1a",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Cấu trúc CPU, Bộ nhớ và Hệ thống vào-ra",
    "exerciseCode": "Bài tập 2.1a",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 5",
    "examTags": [
      "GK"
    ],
    "pdfPage": 35,
    "printedPage": 34,
    "relatedTheoryId": "2.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đơn vị nào bên trong CPU chịu trách nhiệm lưu giữ các thông tin tạm thời phục vụ cho hoạt động của CPU?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Tập thanh ghi (RF)",
      "Cache",
      "Bộ nhớ chính",
      "Biến nhớ"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Bên trong CPU gồm CU, ALU và Tập thanh ghi (RF); trong đó <strong>Tập thanh ghi (RF)</strong> lưu thông tin tạm thời phục vụ tức thời cho CPU.</p>"
  },
  {
    "id": "c2-2.1b",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Cấu trúc CPU, Bộ nhớ và Hệ thống vào-ra",
    "exerciseCode": "Bài tập 2.1b",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 6",
    "examTags": [
      "GK"
    ],
    "pdfPage": 35,
    "printedPage": 34,
    "relatedTheoryId": "2.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Loại bộ nhớ nào sau đây <strong>không</strong> thuộc về bộ nhớ trong?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Bộ nhớ ổ cứng HDD",
      "Bộ nhớ ROM",
      "Bộ nhớ chính (RAM)",
      "Bộ nhớ Cache"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Bộ nhớ trong gồm Bộ nhớ chính (RAM, ROM) và Bộ nhớ đệm (Cache). Ổ đĩa cứng <strong>HDD</strong> là bộ nhớ ngoài (thiết bị lưu trữ).</p>"
  },
  {
    "id": "c2-2.1c",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Cấu trúc CPU, Bộ nhớ và Hệ thống vào-ra",
    "exerciseCode": "Bài tập 2.1c",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 13",
    "examTags": [
      "GK"
    ],
    "pdfPage": 35,
    "printedPage": 34,
    "relatedTheoryId": "2.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Ngăn nhớ nằm ở chỗ nào trong hệ thống máy tính?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Bộ nhớ chính",
      "CPU",
      "Thiết bị ngoại vi",
      "Module vào-ra"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Bộ nhớ chính được tổ chức thành các <strong>ngăn nhớ</strong> được đánh địa chỉ (thường theo từng byte).</p>"
  },
  {
    "id": "c2-2.2a",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Cấu trúc CPU, Bộ nhớ và Hệ thống vào-ra",
    "exerciseCode": "Bài tập 2.2a",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0009, Câu 11",
    "examTags": [
      "GK"
    ],
    "pdfPage": 35,
    "printedPage": 34,
    "relatedTheoryId": "2.1.1",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập 2 từ cách nhau bởi dấu phẩy:",
    "acceptedAnswers": [
      "nội dung, địa chỉ",
      "nội dung; địa chỉ",
      "giá trị, địa chỉ"
    ],
    "question": "Điền cặp từ thích hợp vào phát biểu: <em>“Mỗi ngăn nhớ trong máy tính có ……… thay đổi được, nhưng ……… của nó luôn cố định.”</em>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Nội dung ; Địa chỉ",
      "Địa chỉ ; Nội dung",
      "Dung lượng ; Tốc độ",
      "Thanh ghi ; Con trỏ"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mỗi ngăn nhớ có <strong>nội dung (giá trị)</strong> thay đổi được khi ghi dữ liệu mới, nhưng <strong>địa chỉ (địa chỉ vật lý)</strong> của nó luôn cố định.</p>"
  },
  {
    "id": "c2-2.2b",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Cấu trúc CPU, Bộ nhớ và Hệ thống vào-ra",
    "exerciseCode": "Bài tập 2.2b",
    "source": "Đề GK 2022.2 Đề 0008 C11 & Ôn tập 2025.2 C41",
    "examTags": [
      "GK",
      "CK"
    ],
    "pdfPage": 35,
    "printedPage": 34,
    "relatedTheoryId": "2.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Tác dụng chính của bộ nhớ đệm nhanh (Cache) là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Tăng tốc độ truy cập đến bộ nhớ chính",
      "Giảm chi phí cho hệ thống máy tính",
      "Tăng dung lượng bộ nhớ chính",
      "Tăng tốc độ truy cập đến ổ đĩa cứng"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Cache là bộ nhớ bán dẫn nhanh đặt đệm giữa CPU và bộ nhớ chính để <strong>tăng tốc độ truy cập đến bộ nhớ chính</strong>.</p>"
  },
  {
    "id": "c2-2.3",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Cấu trúc CPU, Bộ nhớ và Hệ thống vào-ra",
    "exerciseCode": "Bài tập 2.3",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 199, Câu 20",
    "examTags": [
      "GK"
    ],
    "pdfPage": 36,
    "printedPage": 35,
    "relatedTheoryId": "2.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Bàn phím được kết nối trực tiếp với bộ phận chức năng nào trong hệ thống máy tính?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Với mô-đun vào-ra",
      "Với bộ nhớ chính",
      "Với CPU",
      "Với bus hệ thống"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Các thiết bị ngoại vi (như bàn phím, chuột, màn hình) không nối trực tiếp với CPU hay Bus hệ thống mà bắt buộc kết nối thông qua cổng của <strong>mô-đun vào-ra</strong>.</p>"
  },
  {
    "id": "c2-2.4a",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Chu trình lệnh, các thanh ghi PC / IR và Hoạt động Ngắt",
    "exerciseCode": "Bài tập 2.4a",
    "source": "Đề GK 2022.2 - Đề 0008 & Mã đề 204 Câu 4",
    "examTags": [
      "GK"
    ],
    "pdfPage": 36,
    "printedPage": 35,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên 2 thanh ghi:",
    "acceptedAnswers": [
      "PC và IR",
      "PC, IR",
      "PC IR"
    ],
    "question": "Trong chu trình hoạt động cơ bản của máy tính, ở giai đoạn tìm nạp lệnh (nhận lệnh từ bộ nhớ chính), CPU tác động tới 2 thanh ghi hệ thống nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "PC và IR",
      "ALU và CU",
      "SP và RA",
      "MAR và Stack"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Hai thanh ghi phục vụ trực tiếp quá trình tìm nạp lệnh là <strong>PC</strong> (Program Counter – phát địa chỉ lệnh cần lấy) và <strong>IR</strong> (Instruction Register – chứa lệnh vừa đọc về).</p>"
  },
  {
    "id": "c2-2.4b",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Chu trình lệnh, các thanh ghi PC / IR và Hoạt động Ngắt",
    "exerciseCode": "Bài tập 2.4b",
    "source": "Ôn tập 2025.2 C76 & Mã đề 198 C17",
    "examTags": [
      "GK",
      "CK"
    ],
    "pdfPage": 36,
    "printedPage": 35,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thanh ghi nào trong CPU luôn giữ địa chỉ của lệnh tiếp theo sẽ được lấy từ bộ nhớ và được tự động tăng mỗi khi CPU nhận xong một lệnh?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Thanh ghi Program Counter (PC)",
      "Thanh ghi Stack Pointer (SP)",
      "Thanh ghi Instruction Register (IR)",
      "Thanh ghi Memory Address Register (MAR)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Bộ đếm chương trình <strong>Program Counter (PC)</strong> luôn trỏ tới địa chỉ của lệnh tiếp theo sẽ được nạp.</p>"
  },
  {
    "id": "c2-2.4c",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Chu trình lệnh, các thanh ghi PC / IR và Hoạt động Ngắt",
    "exerciseCode": "Bài tập 2.4c",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 18",
    "examTags": [
      "GK"
    ],
    "pdfPage": 36,
    "printedPage": 35,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong quá trình giải mã lệnh, CPU sẽ tiến hành giải mã lệnh đang nằm trên thanh ghi nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Thanh ghi lệnh IR",
      "Thanh ghi con trỏ lệnh PC/IP",
      "Thanh ghi dữ liệu",
      "Thanh ghi trạng thái"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh đọc từ bộ nhớ chính được nạp vào <strong>Thanh ghi lệnh IR</strong> để đơn vị điều khiển (CU) giải mã.</p>"
  },
  {
    "id": "c2-2.4d",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Chu trình lệnh, các thanh ghi PC / IR và Hoạt động Ngắt",
    "exerciseCode": "Bài tập 2.4d",
    "source": "Ôn tập 2025.2 - Câu 56",
    "examTags": [
      "CK"
    ],
    "pdfPage": 37,
    "printedPage": 36,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong chu trình thực hiện lệnh cơ bản (Instruction Cycle), giai đoạn nào diễn ra ngay sau khi CPU lấy lệnh (Fetch) từ bộ nhớ?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Giai đoạn Giải mã (Decode), nơi CPU xác định loại lệnh và các toán hạng",
      "Giai đoạn Ghi lại kết quả (Write Back)",
      "Giai đoạn Thực thi (Execute)",
      "Giai đoạn Điều khiển ngắt"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ngay sau Tìm nạp (Fetch) là <strong>Giải mã (Decode)</strong> để biết lệnh yêu cầu thao tác gì rồi mới Thực thi (Execute).</p>"
  },
  {
    "id": "c2-2.5a",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Chu trình lệnh, các thanh ghi PC / IR và Hoạt động Ngắt",
    "exerciseCode": "Bài tập 2.5a",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 198, Câu 14",
    "examTags": [
      "GK"
    ],
    "pdfPage": 37,
    "printedPage": 36,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đáp án nào mô tả đúng về cơ chế ngắt (Interrupt)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Tạm dừng chương trình đang thực hiện để chuyển đến thực hiện chương trình con khác (chương trình con xử lý ngắt)",
      "Kết thúc phần mềm đang chạy",
      "Tạm dừng phần mềm đang hoạt động vĩnh viễn",
      "Hủy bỏ lệnh máy đang thực hiện dở mà không quay lại"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ngắt cho phép CPU tạm dừng chương trình hiện tại, cất ngữ cảnh, chạy chương trình con xử lý ngắt rồi khôi phục quay về chạy tiếp.</p>"
  },
  {
    "id": "c2-2.5b",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Chu trình lệnh, các thanh ghi PC / IR và Hoạt động Ngắt",
    "exerciseCode": "Bài tập 2.5b",
    "source": "Ôn tập 2025.2 - Câu 15",
    "examTags": [
      "CK"
    ],
    "pdfPage": 37,
    "printedPage": 36,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với phương pháp vào-ra bằng chương trình, thành phần nào của máy tính trực tiếp điều khiển vào-ra?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "CPU",
      "DMAC",
      "Thiết bị vào-ra",
      "RAM"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Trong phương pháp vào-ra bằng chương trình (hoặc bằng ngắt), <strong>CPU</strong> trực tiếp điều khiển trao đổi dữ liệu với mô-đun vào-ra (không qua DMAC).</p>"
  },
  {
    "id": "c2-2.6a",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.6a",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 198, Câu 1",
    "examTags": [
      "GK"
    ],
    "pdfPage": 38,
    "printedPage": 37,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Một CPU có bus dữ liệu và bus địa chỉ có độ rộng đều bằng 32 bit. Hỏi độ rộng của bus điều khiển bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Không xác định",
      "64 bit",
      "2^32 bit",
      "32 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Độ rộng bus chỉ quy ước cố định cho bus địa chỉ và bus dữ liệu; số đường tín hiệu trên bus điều khiển phụ thuộc thiết kế từng hệ thống cụ thể nên <strong>không xác định</strong> từ hai thông số trên.</p>"
  },
  {
    "id": "c2-2.6b",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.6b",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 198, Câu 10",
    "examTags": [
      "GK"
    ],
    "pdfPage": 38,
    "printedPage": 37,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Loại bus nào vận chuyển nội dung lệnh từ bộ nhớ tới CPU?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Bus dữ liệu",
      "Bus điều khiển",
      "Bus vào-ra",
      "Bus địa chỉ"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>Bus dữ liệu (Data Bus)</strong> truyền tải cả lệnh từ bộ nhớ đến CPU và dữ liệu giữa các thành phần.</p>"
  },
  {
    "id": "c2-2.6c",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.6c",
    "source": "Ôn tập 2025.2 - Câu 13",
    "examTags": [
      "CK"
    ],
    "pdfPage": 38,
    "printedPage": 37,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Bus dữ liệu (Data Bus) trong kiến trúc máy tính chịu trách nhiệm truyền tải loại thông tin nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Các lệnh và dữ liệu giữa các thành phần trong hệ thống máy tính",
      "Chỉ các dữ liệu giữa các thành phần trong hệ thống máy tính",
      "Địa chỉ bộ nhớ của dữ liệu cần truy cập",
      "Tín hiệu điều khiển để đồng bộ hóa hoạt động"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Bộ nhớ lưu chung lệnh và dữ liệu; Bus dữ liệu truyền tải hai chiều cả <strong>lệnh và dữ liệu</strong>.</p>"
  },
  {
    "id": "c2-2.6d",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.6d",
    "source": "Ôn tập 2025.2 - Câu 26",
    "examTags": [
      "CK"
    ],
    "pdfPage": 39,
    "printedPage": 38,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Bus Địa chỉ (Address Bus) có đặc điểm nào sau đây, đặc biệt là về hướng truyền?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Là bus một chiều (unidirectional), truyền địa chỉ từ CPU/DMA đến bộ nhớ/I/O",
      "Là bus hai chiều (bidirectional), truyền cả địa chỉ và dữ liệu",
      "Là bus hai chiều, truyền tín hiệu điều khiển và dữ liệu",
      "Là bus một chiều, truyền tín hiệu điều khiển từ bộ nhớ đến CPU"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Chỉ CPU (hoặc DMAC khi làm chủ bus) phát địa chỉ tới bộ nhớ hoặc I/O $\\Rightarrow$ Bus địa chỉ là bus <strong>một chiều</strong>.</p>"
  },
  {
    "id": "c2-2.7a",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.7a",
    "source": "Đề GK 2019.2 - Mã 243 C6 & Mã 244 C9",
    "examTags": [
      "GK"
    ],
    "pdfPage": 39,
    "printedPage": 38,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với lệnh hợp ngữ ghi bộ nhớ <code>sw t2, 4(t4)</code> (hoặc <code>sw s2, 8(s4)</code>), giá trị tổng $4 + t_4$ (hoặc $8 + s_4$) sẽ được truyền từ CPU tới bộ nhớ chính trên đường bus nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Bus địa chỉ",
      "Bus dữ liệu",
      "Bus điều khiển",
      "Bus ngoại vi"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tổng $4 + t_4$ là <strong>địa chỉ hiệu dụng</strong> của ngăn nhớ đích nên được phát ra trên <strong>Bus địa chỉ</strong> (còn nội dung thanh ghi <code>t2</code> truyền trên Bus dữ liệu).</p>"
  },
  {
    "id": "c2-2.7b",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.7b",
    "source": "Đề GK 2019.2 - Mã 243 C5 & Mã 244 C7",
    "examTags": [
      "GK"
    ],
    "pdfPage": 39,
    "printedPage": 38,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Loại bus ngoại vi nào dưới đây chỉ dùng để kết nối với ổ lưu trữ vật lý (HDD, SSD)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "SATA",
      "HDMI",
      "PCIe",
      "USB"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>SATA (Serial ATA)</strong> là chuẩn giao tiếp chuyên dụng chỉ dùng cho thiết bị lưu trữ (HDD, SSD SATA, ổ quang).</p>"
  },
  {
    "id": "c2-2.7c",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.7c",
    "source": "Đề GK 2019.2 - Mã 243 C13 & Mã 244 C13",
    "examTags": [
      "GK"
    ],
    "pdfPage": 39,
    "printedPage": 38,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong kiến trúc máy tính, khái niệm <strong>USB</strong> nói về điều gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Bus ngoại vi giữa mô-đun I/O và thiết bị",
      "Ổ lưu trữ dữ liệu tốc độ cao",
      "Khe cắm mở rộng RAM",
      "Nhà sản xuất linh kiện phần cứng"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>USB (Universal Serial Bus)</strong> là chuẩn bus ngoại vi nối tiếp kết nối giữa mô-đun vào-ra với các thiết bị ngoại vi.</p>"
  },
  {
    "id": "c2-2.8a",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.8a",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0008, Câu 3",
    "examTags": [
      "GK"
    ],
    "pdfPage": 40,
    "printedPage": 39,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kích thước (vd: 8 MiB):",
    "acceptedAnswers": [
      "8 MiB",
      "8MiB",
      "8 MB",
      "8MB",
      "8388608"
    ],
    "question": "Máy tính có bus dữ liệu 32 bit và bus địa chỉ 23 bit (đánh địa chỉ theo byte). Không gian địa chỉ bộ nhớ có kích thước bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "8 MiB (2^23 byte)",
      "4 MiB",
      "16 MiB",
      "32 MiB"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Kích thước không gian địa chỉ chỉ phụ thuộc bus địa chỉ ($N = 23$): $2^{23}\\text{ byte} = 2^3 \\times 2^{20}\\text{ byte} = \\mathbf{8\\text{ MiB}}$.</p>"
  },
  {
    "id": "c2-2.8b",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.8b",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0006, Câu 3",
    "examTags": [
      "GK"
    ],
    "pdfPage": 40,
    "printedPage": 39,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số bit:",
    "acceptedAnswers": [
      "10",
      "10 bit"
    ],
    "question": "Nếu <code>0x3FF</code> là địa chỉ bộ nhớ lớn nhất mà CPU có thể quản lý được (đánh địa chỉ từ 0 theo byte), thì bus địa chỉ có độ rộng bằng bao nhiêu bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "10 bit",
      "12 bit",
      "8 bit",
      "16 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đổi $\\text{0x3FF} = 0011\\;1111\\;1111_2 = 2^{10} - 1$ (10 bit 1). Từ $0$ đến $2^{10}-1$ có $2^{10} = 1024$ địa chỉ $\\Rightarrow$ độ rộng bus địa chỉ là <strong>10 bit</strong>.</p>"
  },
  {
    "id": "c2-2.8c",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.8c",
    "source": "Đề CK 2020.2 & Ôn tập 2025.2 Câu 11",
    "examTags": [
      "CK"
    ],
    "pdfPage": 40,
    "printedPage": 39,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số bit:",
    "acceptedAnswers": [
      "31",
      "31 bit"
    ],
    "question": "Không gian địa chỉ bộ nhớ là $2\\text{ GiB}$ (đánh địa chỉ theo từng byte), độ rộng bus địa chỉ là bao nhiêu bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "31 bit",
      "32 bit",
      "30 bit",
      "33 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$2\\text{ GiB} = 2^1 \\times 2^{30}\\text{ byte} = 2^{31}\\text{ byte} \\Rightarrow$ độ rộng bus địa chỉ là <strong>31 bit</strong>.</p>"
  },
  {
    "id": "c2-2.8d",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.8d",
    "source": "Đề GK 2019.2 - Mã 243 C16 & Mã 244 C4",
    "examTags": [
      "GK"
    ],
    "pdfPage": 40,
    "printedPage": 39,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Nếu không gian địa chỉ bộ nhớ (đánh địa chỉ theo byte) là $64\\text{ GiB}$ (Mã đề 243) và $128\\text{ GiB}$ (Mã đề 244), độ rộng bus địa chỉ tương ứng lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "36 bit và 37 bit",
      "35 bit và 36 bit",
      "34 bit và 35 bit",
      "32 bit và 36 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$64\\text{ GiB} = 2^6 \\times 2^{30} = 2^{36}\\text{ B} \\Rightarrow \\mathbf{36\\text{ bit}}$; $128\\text{ GiB} = 2^7 \\times 2^{30} = 2^{37}\\text{ B} \\Rightarrow \\mathbf{37\\text{ bit}}$.</p>"
  },
  {
    "id": "c2-2.8e",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.8e",
    "source": "Đề CK 2022.2 - #bb55ef & CK 2024.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 40,
    "printedPage": 39,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số bit:",
    "acceptedAnswers": [
      "33",
      "33 bit"
    ],
    "question": "Một hệ thống máy tính gồm có $4\\text{ MiB}$ bộ nhớ Cache, $8\\text{ GiB}$ bộ nhớ chính và $1\\text{ TiB}$ bộ nhớ thể rắn SSD. Bus địa chỉ hệ thống cần có độ rộng tối thiểu bao nhiêu bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "33 bit",
      "40 bit",
      "34 bit",
      "22 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Cache tự ánh xạ từ RAM, SSD là bộ nhớ ngoài không đánh địa chỉ trực tiếp theo byte trên bus CPU. Bus địa chỉ chỉ cần quản lý $8\\text{ GiB} = 2^3 \\times 2^{30} = 2^{33}\\text{ B} \\Rightarrow$ tối thiểu <strong>33 bit</strong>.</p>"
  },
  {
    "id": "c2-2.9a",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.9a",
    "source": "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 16",
    "examTags": [
      "GK"
    ],
    "pdfPage": 41,
    "printedPage": 40,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số bit:",
    "acceptedAnswers": [
      "18",
      "18 bit"
    ],
    "question": "Một hệ thống máy tính cần sử dụng bộ nhớ chính $128\\text{ KiB}$, cổng vào-ra $64\\text{ KiB}$ (dùng chung không gian địa chỉ) và ổ cứng SSD $256\\text{ KiB}$. Hỏi bus địa chỉ phải có độ rộng tối thiểu bằng bao nhiêu bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "18 bit",
      "17 bit",
      "19 bit",
      "20 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>SSD là bộ nhớ ngoài nên không tính. Tổng không gian địa chỉ chung RAM + I/O là $128\\text{ KiB} + 64\\text{ KiB} = 192\\text{ KiB}$. Vì $2^{17} = 128\\text{ KiB} &lt; 192\\text{ KiB} \\le 256\\text{ KiB} = 2^{18}$ nên cần tối thiểu <strong>18 bit</strong>.</p>"
  },
  {
    "id": "c2-2.9b",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.9b",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 243, Câu 14",
    "examTags": [
      "GK"
    ],
    "pdfPage": 41,
    "printedPage": 40,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập dung lượng (MiB):",
    "acceptedAnswers": [
      "8 MiB",
      "8MiB",
      "8"
    ],
    "question": "Bus hệ thống có bus địa chỉ $24\\text{ bit}$ (không có cổng vào-ra). Máy tính đã cắm $1$ thanh RAM $8\\text{ MiB}$. Có thể lắp thêm $1$ thanh RAM kích thước lớn nhất bao nhiêu và không thừa?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "8 MiB",
      "2 MiB",
      "4 MiB",
      "16 MiB"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Không gian tối đa: $2^{24}\\text{ B} = 16\\text{ MiB}$. Đã cắm $8\\text{ MiB} \\Rightarrow$ còn trống $16 - 8 = \\mathbf{8\\text{ MiB}}$ (là lũy thừa của 2 $\\Rightarrow$ vừa khít).</p>"
  },
  {
    "id": "c2-2.9c",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.9c",
    "source": "Đề Giữa kỳ 2019.2 - Mã đề 244, Câu 6",
    "examTags": [
      "GK"
    ],
    "pdfPage": 41,
    "printedPage": 40,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập dung lượng (MiB):",
    "acceptedAnswers": [
      "32 MiB",
      "32MiB",
      "32"
    ],
    "question": "Máy tính có bus địa chỉ $26\\text{ bit}$ và đã cắm $1$ thanh RAM $8\\text{ MiB}$. Có thể lắp thêm $1$ thanh RAM đơn lẻ kích thước lớn nhất là bao nhiêu mà không bị thừa dung lượng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "32 MiB",
      "8 MiB",
      "64 MiB",
      "16 MiB"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tổng không gian: $2^{26}\\text{ B} = 64\\text{ MiB}$. Còn trống: $64 - 8 = 56\\text{ MiB}$. Thanh RAM phải có dung lượng lũy thừa của 2 ($8, 16, 32, 64$) $\\le 56\\text{ MiB}$ $\\Rightarrow$ chọn <strong>32 MiB</strong>.</p>"
  },
  {
    "id": "c2-2.10a",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.10 (Ý 4.1)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B3, Câu 4.1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 42,
    "printedPage": 41,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Máy tính dùng $36$ bit địa chỉ để đánh địa chỉ cho bộ nhớ theo byte. Số byte nhớ tối đa cùng địa chỉ đầu – cuối viết ở dạng Hexa lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "64 GiB (2^36 byte) ; 0x000000000 đến 0xFFFFFFFFF",
      "32 GiB (2^35 byte) ; 0x00000000 đến 0xFFFFFFFF",
      "64 GiB (2^36 byte) ; 0x00000000 đến 0xFFFFFFFF",
      "128 GiB (2^37 byte) ; 0x000000000 đến 0xFFFFFFFFF"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$2^{36}\\text{ B} = 64\\text{ GiB}$. Vì $36 / 4 = 9$ chữ số Hexa nên địa chỉ đầu là <code>0x000000000</code> (9 chữ số 0) và địa chỉ cuối là <code>0xFFFFFFFFF</code> (9 chữ số F).</p>"
  },
  {
    "id": "c2-2.10b",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.10 (Ý 4.2)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B3, Câu 4.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 42,
    "printedPage": 41,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Máy tính dùng $16$ bit để đánh địa chỉ cho cổng vào-ra riêng biệt. Số cổng vào-ra tối đa và dải địa chỉ Hexa của chúng là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "65 536 cổng (2^16) ; từ 0x0000 đến 0xFFFF",
      "32 768 cổng (2^15) ; từ 0x0000 đến 0x7FFF",
      "16 384 cổng (2^14) ; từ 0x0000 đến 0x3FFF",
      "65 536 cổng (2^16) ; từ 0x00000 đến 0xFFFFF"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$2^{16} = 65\\,536$ cổng (64K cổng). Vì $16 / 4 = 4$ chữ số Hexa nên địa chỉ chạy từ <code>0x0000</code> đến <code>0xFFFF</code>.</p>"
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
