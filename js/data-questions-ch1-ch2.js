// Dữ liệu câu hỏi bài tập và lý thuyết Chương 1 & Chương 2
// Tự động tạo dựa trên file KTMT.pdf - IT3030 / IT3034 / IT3283

(function(root) {
  root.KTMT_QUESTIONS_CH1_CH2 = [
  {
    "id": "lt-1.1",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.1",
    "source": "Lý thuyết mục 1.1.1 - Khái niệm cơ bản",
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
    "question": "Mọi máy tính từ điện thoại thông minh, PC cho đến siêu máy tính đều được cấu tạo từ 4 thành phần cốt lõi nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "CPU, Bộ nhớ chính, Hệ thống Vào-Ra, Liên kết hệ thống (Bus)",
      "CPU, Bộ nhớ ngoài (SSD/HDD), Chuột/Bàn phím, Màn hình",
      "Bộ điều khiển (CU), Bộ số học logic (ALU), Thanh ghi, Bộ nhớ Cache",
      "Hệ điều hành, Trình biên dịch, Phần cứng, Người sử dụng"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 1.1.1 trong PDF, 4 thành phần cơ bản của mọi máy tính gồm:</p><ol><li><strong>Bộ xử lý trung tâm (CPU):</strong> Điều khiển hoạt động và trực tiếp xử lý dữ liệu.</li><li><strong>Bộ nhớ chính (RAM):</strong> Chứa lệnh và dữ liệu của chương trình đang được thực hiện.</li><li><strong>Hệ thống vào-ra (I/O):</strong> Trao đổi thông tin giữa máy tính với bên ngoài.</li><li><strong>Liên kết hệ thống (Bus):</strong> Kết nối và vận chuyển thông tin giữa CPU, Bộ nhớ chính và I/O.</li></ol>"
  },
  {
    "id": "lt-1.2",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.2",
    "source": "Lý thuyết mục 1.1.2 - Phân loại máy tính",
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
    "question": "Loại máy tính nào được đặt ẩn bên trong một thiết bị khác (ô tô, máy giặt, tivi) nhằm phục vụ điều khiển chuyên dụng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Máy tính nhúng / Thiết bị IoT (Embedded Computers)",
      "Thiết bị di động cá nhân (PMD)",
      "Máy tính cá nhân (PC)",
      "Máy tính quy mô kho (WSC)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 1.1.2 trong PDF:</p><ul><li><strong>Máy tính nhúng (Embedded Computers):</strong> Được đặt ẩn bên trong thiết bị khác để điều khiển chuyên dụng. Khi có kết nối Internet thì được gọi là thiết bị IoT.</li><li>PMD là điện thoại thông minh, máy tính bảng; PC là máy bàn, laptop; WSC là cụm siêu máy tính quy mô kho.</li></ul>"
  },
  {
    "id": "lt-1.3",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.3",
    "source": "Lý thuyết mục 1.1.3 - Ba khía cạnh kiến trúc máy tính",
    "examTags": [
      "LT"
    ],
    "pdfPage": 7,
    "printedPage": 6,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khía cạnh nào đóng vai trò là <strong>giao diện giữa phần cứng và phần mềm</strong>, thể hiện cách nhìn máy tính của người lập trình hợp ngữ?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Kiến trúc tập lệnh (ISA - Instruction Set Architecture)",
      "Tổ chức máy tính (Vi kiến trúc - Microarchitecture)",
      "Phần cứng (Hardware / Mạch điện tử)",
      "Hệ điều hành (Operating System)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 1.1.3 trong PDF:</p><ul><li><strong>ISA (Instruction Set Architecture):</strong> Giao diện giữa phần cứng và phần mềm, là cách nhìn máy tính của người lập trình hợp ngữ (như RISC-V, x86, ARM).</li><li><strong>Vi kiến trúc (Microarchitecture):</strong> Thiết kế phần cứng cụ thể bên trong chip để thực thi tập lệnh đó (pipeline, cache, bus).</li><li><strong>Phần cứng:</strong> Quy trình bán dẫn, chế tạo mạch vật lý.</li></ul>"
  },
  {
    "id": "lt-1.4",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.4",
    "source": "Lý thuyết mục 1.1.3 - Quá trình dịch chương trình",
    "examTags": [
      "LT"
    ],
    "pdfPage": 7,
    "printedPage": 6,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Công cụ nào thực hiện nhiệm vụ chuyển đổi từ <strong>Hợp ngữ (Assembly)</strong> sang <strong>Ngôn ngữ máy (Mã nhị phân 0 và 1)</strong>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Trình hợp dịch (Assembler)",
      "Trình biên dịch (Compiler)",
      "Trình liên kết (Linker)",
      "Trình nạp (Loader)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 1.1.3 trong PDF:</p><ul><li><strong>Biên dịch (Compiler):</strong> Dịch Ngôn ngữ bậc cao (C/C++) &rarr; Hợp ngữ (Assembly).</li><li><strong>Hợp dịch (Assembler):</strong> Dịch Hợp ngữ (Assembly) &rarr; Ngôn ngữ máy (Binary Machine Code).</li></ul>"
  },
  {
    "id": "lt-1.5",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.5",
    "source": "Lý thuyết mục 1.1.4 - Bảng đổi đơn vị",
    "examTags": [
      "LT"
    ],
    "pdfPage": 8,
    "printedPage": 7,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Một pico-giây (1 ps) và một nano-giây (1 ns) lần lượt bằng bao nhiêu giây?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1 ps = 10^-12 s và 1 ns = 10^-9 s",
      "1 ps = 10^-9 s và 1 ns = 10^-6 s",
      "1 ps = 10^-6 s và 1 ns = 10^-3 s",
      "1 ps = 10^-15 s và 1 ns = 10^-12 s"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo bảng đổi đơn vị mục 1.1.4 trong PDF:</p><ul><li>$1\\text{ ms} = 10^{-3}\\text{ s}$</li><li>$1\\text{ }\\mu\\text{s} = 10^{-6}\\text{ s}$</li><li>$1\\text{ ns} = 10^{-9}\\text{ s}$</li><li>$1\\text{ ps} = 10^{-12}\\text{ s}$</li></ul>"
  },
  {
    "id": "lt-1.6",
    "chapter": 1,
    "groupId": "1.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 1",
    "exerciseCode": "Lý thuyết 1.6",
    "source": "Lý thuyết mục 1.2.6 - Phân loại Flynn",
    "examTags": [
      "LT"
    ],
    "pdfPage": 31,
    "printedPage": 30,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Kiến trúc máy tính xử lý đồ họa GPU hoặc xử lý vector (thực hiện cùng 1 lệnh trên nhiều luồng dữ liệu đồng thời) thuộc loại nào trong phân loại của Flynn?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "SIMD (Single Instruction, Multiple Data)",
      "SISD (Single Instruction, Single Data)",
      "MIMD (Multiple Instruction, Multiple Data)",
      "MISD (Multiple Instruction, Single Data)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 1.2.6 trong PDF:</p><ul><li><strong>SIMD (Single Instruction, Multiple Data):</strong> Xử lý vector, card đồ họa GPU (1 lệnh điều khiển nhiều dữ liệu cùng lúc).</li><li><strong>SISD:</strong> Máy tính đơn lõi cổ điển.</li><li><strong>MISD:</strong> Chưa tồn tại máy tính thương mại thực tế.</li><li><strong>MIMD:</strong> Máy tính đa lõi (multicore) hoặc hệ thống phân tán.</li></ul>"
  },
  {
    "id": "c1-1.1",
    "chapter": 1,
    "groupId": "1.2.1",
    "groupTitle": "Nhóm 1: Các thành phần máy tính và Phân cấp bộ nhớ",
    "exerciseCode": "Bài tập 1.1",
    "source": "Đề Cuối kỳ 2020.2 & Ôn tập Cuối kỳ P2 - Câu 19",
    "examTags": [
      "CK"
    ],
    "pdfPage": 10,
    "printedPage": 9,
    "relatedTheoryId": "1.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hãy chỉ ra tên của thành phần máy tính thực hiện chức năng: “Chứa các lệnh và dữ liệu của chương trình đang được thực hiện”?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Bộ nhớ chính",
      "Bộ nhớ đệm nhanh cache",
      "Tập thanh ghi",
      "Bộ nhớ ngoài"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Theo nguyên lý hoạt động cơ bản của máy tính (mô hình von Neumann), mọi chương trình khi đang chạy (đang thực hiện) đều phải được nạp vào <strong>Bộ nhớ chính (Main Memory / RAM)</strong>.</li><li>Bộ nhớ ngoài (ổ cứng) chỉ lưu trữ phần mềm và dữ liệu khi chưa chạy. Cache và Tập thanh ghi chỉ lưu tạm một phần rất nhỏ dữ liệu/lệnh mà CPU đang dùng tức thời.</li><li><strong>Đáp án đúng: A (Bộ nhớ chính).</strong></li></ul>"
  },
  {
    "id": "c1-1.2",
    "chapter": 1,
    "groupId": "1.2.1",
    "groupTitle": "Nhóm 1: Các thành phần máy tính và Phân cấp bộ nhớ",
    "exerciseCode": "Bài tập 1.2",
    "source": "Đề Cuối kỳ 2020.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 10,
    "printedPage": 9,
    "relatedTheoryId": "1.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Sắp xếp các thành phần của bộ nhớ máy tính theo thứ tự dung lượng tăng dần:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Cache L1, Cache L2, Cache L3, Bộ nhớ chính, Bộ nhớ ngoài",
      "Cache L3, Cache L2, Cache L1, Bộ nhớ chính, Bộ nhớ ngoài",
      "Bộ nhớ chính, Cache L3, Cache L2, Cache L1, Bộ nhớ ngoài",
      "Cache L1, Cache L2, Bộ nhớ chính, Cache L3, Bộ nhớ ngoài"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Trong phân cấp bộ nhớ, Cache L1 nằm sát nhân CPU nhất nên có tốc độ nhanh nhất nhưng dung lượng nhỏ nhất (vài chục KB), tiếp theo là Cache L2 (vài trăm KB), rồi đến Cache L3 (vài MB đến vài chục MB).</li><li>Lớn hơn Cache là Bộ nhớ chính (RAM - vài GB đến vài chục GB), và lớn nhất là Bộ nhớ ngoài (SSD/HDD - hàng trăm GB đến hàng TB).</li><li><strong>Đáp án đúng: A (Cache L1 &lt; Cache L2 &lt; Cache L3 &lt; Bộ nhớ chính &lt; Bộ nhớ ngoài).</strong></li></ul>"
  },
  {
    "id": "c1-1.3",
    "chapter": 1,
    "groupId": "1.2.1",
    "groupTitle": "Nhóm 1: Các thành phần máy tính và Phân cấp bộ nhớ",
    "exerciseCode": "Bài tập 1.3",
    "source": "Đề Cuối kỳ 2022.2 - #ef5037 & Đề Cuối kỳ 2024.1 - #018513",
    "examTags": [
      "CK"
    ],
    "pdfPage": 11,
    "printedPage": 10,
    "relatedTheoryId": "1.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hãy chỉ ra đâu là cấu hình bộ nhớ phù hợp cho máy tính PC?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Cache L1: 64KB, Cache L2: 256KB, Cache L3: 8MB, RAM: 8GB, SSD: 512GB",
      "Cache L1: 64KB, Cache L2: 256KB, Cache L3: 16GB, RAM: 2TB, SSD: 1TB",
      "Cache L1: 64KB, Cache L2: 256GB, Cache L3: 8MB, RAM: 8GB, SSD: 512GB",
      "Cache L1: 16MB, Cache L2: 256KB, Cache L3: 16MB, RAM: 8GB, SSD: 1TB"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ta kiểm tra từng phương án dựa trên nguyên tắc dung lượng $L1 < L2 < L3 < \\text{RAM} < \\text{SSD}$:</p><ul><li>Phương án B sai vì Cache L3 lên tới 16GB (quá lớn, ngang RAM) và RAM 2TB lớn hơn cả SSD 1TB.</li><li>Phương án C sai vì Cache L2 là 256GB (lớn hơn Cache L3 8MB và RAM 8GB).</li><li>Phương án D sai vì Cache L1 là 16MB (lớn hơn Cache L2 256KB).</li><li>Phương án A hoàn toàn hợp lý: 64KB &lt; 256KB &lt; 8MB &lt; 8GB &lt; 512GB.</li><li><strong>Đáp án đúng: A.</strong></li></ul>"
  },
  {
    "id": "c1-1.4",
    "chapter": 1,
    "groupId": "1.2.1",
    "groupTitle": "Nhóm 1: Các thành phần máy tính và Phân cấp bộ nhớ",
    "exerciseCode": "Bài tập 1.4",
    "source": "Ôn tập Giữa kỳ - Câu 6",
    "examTags": [
      "GK"
    ],
    "pdfPage": 11,
    "printedPage": 10,
    "relatedTheoryId": "1.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hãy chỉ ra đâu là cấu hình phù hợp cho máy tính PC?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "RAM: 4GB, Cache L1: 64KB, Cache L2: 256KB, Cache L3: 8MB, SSD: 512GB",
      "RAM: 2TB, Cache L1: 64KB, Cache L2: 256KB, Cache L3: 16GB, SSD: 1TB",
      "RAM: 8GB, Cache L1: 16MB, Cache L2: 256KB, Cache L3: 16MB, SSD: 1TB",
      "RAM: 8GB, Cache L1: 64KB, Cache L2: 256GB, Cache L3: 8MB, SSD: 512GB"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Cẩn thận bẫy thứ tự liệt kê: ở câu này đề bài đưa thông số RAM lên đầu dòng để đánh lạc hướng.</li><li>Loại B vì Cache L3 = 16GB và RAM = 2TB. Loại C vì Cache L1 = 16MB &gt; Cache L2 = 256KB. Loại D vì Cache L2 = 256GB.</li><li><strong>Đáp án đúng: RAM: 4GB, Cache L1: 64KB, Cache L2: 256KB, Cache L3: 8MB, SSD: 512GB.</strong></li></ul>"
  },
  {
    "id": "c1-1.5",
    "chapter": 1,
    "groupId": "1.2.1",
    "groupTitle": "Nhóm 1: Các thành phần máy tính và Phân cấp bộ nhớ",
    "exerciseCode": "Bài tập 1.5",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0008, Câu 11 & Ôn tập Giữa kỳ - Câu 69",
    "examTags": [
      "GK"
    ],
    "pdfPage": 12,
    "printedPage": 11,
    "relatedTheoryId": "1.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Tác dụng của bộ nhớ đệm (Cache) là gì? (Hoặc: Loại bộ nhớ giúp CPU tăng tốc truy cập bộ nhớ chính có tên là gì?)",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Tăng tốc độ truy cập đến bộ nhớ chính",
      "Tăng tốc độ truy cập đến ổ đĩa cứng",
      "Tăng dung lượng bộ nhớ chính",
      "Giảm chi phí cho hệ thống máy tính"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Bộ nhớ Cache được đặt đệm giữa CPU và Bộ nhớ chính (RAM) nhằm mục đích <strong>tăng tốc độ CPU truy cập bộ nhớ chính</strong>.</li><li>Nếu điền khuyết tự luận, từ cần điền là: <strong>Bộ nhớ đệm</strong> hoặc <strong>Cache</strong>.</li><li><strong>Đáp án đúng: Tăng tốc độ truy cập đến bộ nhớ chính.</strong></li></ul>"
  },
  {
    "id": "c1-1.6",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.6",
    "source": "Slide Chương 1 - Trang 24",
    "examTags": [
      "SLIDE"
    ],
    "pdfPage": 13,
    "printedPage": 12,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập chu kỳ T0 tính theo ns (ví dụ: 0.25):",
    "acceptedAnswers": [
      "0.25",
      "0,25",
      "0.25 ns",
      "0.25ns"
    ],
    "question": "Một bộ xử lý có tần số xung nhịp $f_0 = 4\\text{ GHz}$. Hãy tính chu kỳ xung nhịp $T_0$ của bộ xử lý đó theo đơn vị nano-giây (ns).",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0.25 ns",
      "4.0 ns",
      "2.5 ns",
      "0.025 ns"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Đổi đơn vị: $f_0 = 4\\text{ GHz} = 4 \\times 10^9\\text{ Hz}$.</li><li>Áp dụng công thức chu kỳ xung nhịp: $$T_0 = \\frac{1}{f_0} = \\frac{1}{4 \\times 10^9} = 0.25 \\times 10^{-9}\\text{ s} = 0.25\\text{ ns}$$</li><li>Hoặc dùng mẹo nhanh: $T_0\\text{ (ns)} = \\dfrac{1}{f_0\\text{ (GHz)}} = \\dfrac{1}{4} = 0.25\\text{ ns}$.</li><li><strong>Đáp số: 0.25 ns.</strong></li></ul>"
  },
  {
    "id": "c1-1.7",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.7",
    "source": "Đề Cuối kỳ 2020.2 & Ôn tập Cuối kỳ P2 - Câu 59",
    "examTags": [
      "CK"
    ],
    "pdfPage": 13,
    "printedPage": 12,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập chu kỳ T0 (ví dụ: 0.13 ns):",
    "acceptedAnswers": [
      "0.13 ns",
      "0.13ns",
      "0.13",
      "0,13"
    ],
    "question": "Bộ xử lý có tốc độ xung nhịp là $7.9\\text{ GHz}$. Cho biết chu kỳ xung nhịp tương ứng là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0.13 ns",
      "0.13 ms",
      "7.9 ns",
      "0.13 ps"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Ta có tần số $f_0 = 7.9\\text{ GHz} = 7.9 \\times 10^9\\text{ Hz}$.</li><li>Chu kỳ xung nhịp: $$T_0 = \\frac{1}{f_0} = \\frac{1}{7.9 \\times 10^9}\\text{ s} \\approx 0.12658 \\times 10^{-9}\\text{ s} \\approx 0.13 \\times 10^{-9}\\text{ s} = 0.13\\text{ ns}$$</li><li><strong>Đáp án đúng: 0.13 ns.</strong></li></ul>"
  },
  {
    "id": "c1-1.8",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.8",
    "source": "Đề Giữa kỳ 2023.2 - Câu 1",
    "examTags": [
      "GK"
    ],
    "pdfPage": 14,
    "printedPage": 13,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập thời gian t_CPU theo ms (ví dụ: 2.5):",
    "acceptedAnswers": [
      "2.5",
      "2,5",
      "2.5 ms",
      "2.5ms"
    ],
    "question": "Máy tính có bộ xử lý với tốc độ xung nhịp là $f = 4\\text{ GHz}$. Giả sử có chương trình được thực hiện trên máy tính đó với số lệnh $n = 5\\text{ triệu lệnh}$ và $CPI$ trung bình bằng $2$. Hãy cho biết thời gian của CPU ($t_{\\text{CPU}}$) để hoàn thành chương trình đó (tính theo ms)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.5 ms",
      "10 ms",
      "25 ms",
      "1.25 ms"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><strong>Bước 1 – Đổi dữ kiện về chuẩn:</strong><br>$IC = 5\\text{ triệu} = 5 \\times 10^6\\text{ lệnh}$; $CPI = 2$; $f_0 = 4\\text{ GHz} = 4 \\times 10^9\\text{ Hz}$.</li><li><strong>Bước 2 – Áp dụng công thức:</strong><br>$$t_{\\text{CPU}} = \\frac{IC \\times CPI}{f_0} = \\frac{5 \\times 10^6 \\times 2}{4 \\times 10^9} = \\frac{10 \\times 10^6}{4 \\times 10^9} = 2.5 \\times 10^{-3}\\text{ s}$$</li><li><strong>Bước 3 – Đổi sang ms:</strong> $2.5 \\times 10^{-3}\\text{ s} = 2.5\\text{ ms}$.</li></ol><p><strong>Đáp số: 2.5 ms.</strong></p>"
  },
  {
    "id": "c1-1.9",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.9",
    "source": "Đề Cuối kỳ 2024.1 - #54583d & Ôn tập Giữa kỳ - Câu 51",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 14,
    "printedPage": 13,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập thời gian t_CPU (ví dụ: 2.4 ms):",
    "acceptedAnswers": [
      "2.4 ms",
      "2.4ms",
      "2.4",
      "2,4"
    ],
    "question": "Máy tính có bộ xử lý với tần số xung nhịp $5\\text{ GHz}$ và $CPI$ trung bình bằng $2$. Giả sử có chương trình được thực hiện trên máy tính đó với $6\\text{ triệu lệnh}$. Hãy cho biết thời gian của bộ xử lý để hoàn thành chương trình đó?",
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
    "explanation": "<ul><li>Đổi đơn vị: $IC = 6 \\times 10^6\\text{ lệnh}$; $CPI = 2$; $f_0 = 5\\text{ GHz} = 5 \\times 10^9\\text{ Hz}$.</li><li>Thời gian thực thi: $$t_{\\text{CPU}} = \\frac{IC \\times CPI}{f_0} = \\frac{6 \\times 10^6 \\times 2}{5 \\times 10^9} = \\frac{12}{5} \\times 10^{-3}\\text{ s} = 2.4 \\times 10^{-3}\\text{ s} = 2.4\\text{ ms}$$</li><li><strong>Đáp án đúng: 2.4 ms.</strong></li></ul>"
  },
  {
    "id": "c1-1.10",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.10",
    "source": "Đề Cuối kỳ 2020.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 15,
    "printedPage": 14,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập thời gian t_CPU (ví dụ: 3.5 ms):",
    "acceptedAnswers": [
      "3.5 ms",
      "3.5ms",
      "3.5",
      "3,5"
    ],
    "question": "Máy tính có bộ xử lý với tốc độ xung nhịp là $1.8\\text{ GHz}$ và số chu kỳ lệnh trung bình ($CPI$) là $2.1$. Giả sử có chương trình với $3\\text{ triệu lệnh}$ được thực hiện trên máy tính này. Cho biết thời gian của bộ xử lý để hoàn thành chương trình đó?",
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
    "explanation": "<ul><li>Đổi đơn vị: $IC = 3 \\times 10^6\\text{ lệnh}$; $CPI = 2.1$; $f_0 = 1.8\\text{ GHz} = 1.8 \\times 10^9\\text{ Hz}$.</li><li>Thời gian thực thi: $$t_{\\text{CPU}} = \\frac{3 \\times 10^6 \\times 2.1}{1.8 \\times 10^9} = \\frac{6.3}{1.8} \\times 10^{-3}\\text{ s} = 3.5 \\times 10^{-3}\\text{ s} = 3.5\\text{ ms}$$</li><li><strong>Đáp án đúng: 3.5 ms.</strong></li></ul>"
  },
  {
    "id": "c1-1.11",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.11",
    "source": "Đề Cuối kỳ 2022.2 - Trang 12",
    "examTags": [
      "CK"
    ],
    "pdfPage": 15,
    "printedPage": 14,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập thời gian t_CPU (ví dụ: 4.5 ms):",
    "acceptedAnswers": [
      "4.5 ms",
      "4.5ms",
      "4.5",
      "4,5"
    ],
    "question": "Một chương trình được thực hiện trên máy tính với $6\\text{ triệu lệnh}$. Biết bộ xử lý có tần số xung nhịp $f_0 = 2\\text{ GHz}$ và $CPI = 1.5$ (hoặc $f_0 = 4\\text{ GHz}, CPI = 3$). Hãy cho biết thời gian của bộ xử lý để hoàn thành chương trình đó?",
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
    "explanation": "<ul><li>Với $IC = 6 \\times 10^6\\text{ lệnh}$, $f_0 = 2\\text{ GHz} = 2 \\times 10^9\\text{ Hz}$ và $CPI = 1.5$: $$t_{\\text{CPU}} = \\frac{6 \\times 10^6 \\times 1.5}{2 \\times 10^9} = \\frac{9}{2} \\times 10^{-3}\\text{ s} = 4.5\\text{ ms}$$</li><li>Nếu đề có dạng $f_0 = 4\\text{ GHz}, CPI = 3$: $\\dfrac{6 \\times 10^6 \\times 3}{4 \\times 10^9} = \\dfrac{18}{4} \\times 10^{-3}\\text{ s} = 4.5\\text{ ms}$ (kết quả vẫn là $4.5\\text{ ms}$).</li><li><strong>Đáp án đúng: 4.5 ms.</strong></li></ul>"
  },
  {
    "id": "c1-1.12",
    "chapter": 1,
    "groupId": "1.2.2",
    "groupTitle": "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và thời gian thực thi (tCPU)",
    "exerciseCode": "Bài tập 1.12",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0008, Câu 1",
    "examTags": [
      "GK"
    ],
    "pdfPage": 16,
    "printedPage": 15,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị CPI (ví dụ: 2.5):",
    "acceptedAnswers": [
      "2.5",
      "2,5"
    ],
    "question": "Bộ xử lý có tần số xung nhịp $50\\text{ MHz}$ thực hiện phần mềm gồm $800\\,000\\text{ lệnh máy}$ trong $0.04\\text{ giây}$. Hỏi phần mềm đó có $CPI$ trung bình bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.5",
      "1.6",
      "4.0",
      "0.4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><strong>Đổi đơn vị về chuẩn:</strong><br>$f_0 = 50\\text{ MHz} = 50 \\times 10^6\\text{ Hz}$; $IC = 800\\,000 = 8 \\times 10^5\\text{ lệnh}$; $t_{\\text{CPU}} = 0.04\\text{ s}$.</li><li><strong>Từ công thức tính $t_{\\text{CPU}}$:</strong><br>$$CPI = \\frac{t_{\\text{CPU}} \\times f_0}{IC} = \\frac{0.04 \\times 50 \\times 10^6}{800\\,000} = \\frac{2\\,000\\,000}{800\\,000} = 2.5$$</li></ol><p><strong>Đáp số: CPI = 2.5.</strong></p>"
  },
  {
    "id": "c1-1.13",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ MIPS",
    "exerciseCode": "Bài tập 1.13",
    "source": "Slide Chương 1 - Trang 35",
    "examTags": [
      "SLIDE"
    ],
    "pdfPage": 16,
    "printedPage": 15,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập chỉ số MIPS (ví dụ: 500):",
    "acceptedAnswers": [
      "500",
      "500 MIPS",
      "500MIPS"
    ],
    "question": "Tính chỉ số MIPS của bộ xử lý với tần số xung nhịp $f_0 = 2\\text{ GHz}$ và $CPI = 4$.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "500 MIPS",
      "8000 MIPS",
      "250 MIPS",
      "2000 MIPS"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Áp dụng công thức tính nhanh khi $f_0$ tính bằng GHz:</p>$$\\text{MIPS} = \\frac{f_0\\text{ (GHz)} \\times 1000}{CPI} = \\frac{2 \\times 1000}{4} = 500\\text{ MIPS}$$<p><strong>Đáp số: 500 MIPS.</strong></p>"
  },
  {
    "id": "c1-1.14",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ MIPS",
    "exerciseCode": "Bài tập 1.14",
    "source": "Slide Chương 1 - Trang 36",
    "examTags": [
      "SLIDE"
    ],
    "pdfPage": 17,
    "printedPage": 16,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI (ví dụ: 2.5):",
    "acceptedAnswers": [
      "2.5",
      "2,5"
    ],
    "question": "Tính $CPI$ của bộ xử lý biết tần số xung nhịp $f_0 = 1\\text{ GHz}$ và tốc độ thực hiện đạt $400\\text{ MIPS}$.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.5",
      "0.4",
      "4.0",
      "1.25"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Áp dụng công thức suy ra $CPI$ từ MIPS:</p>$$CPI = \\frac{f_0\\text{ (GHz)} \\times 1000}{\\text{MIPS}} = \\frac{1 \\times 1000}{400} = 2.5$$<p><strong>Đáp số: CPI = 2.5.</strong></p>"
  },
  {
    "id": "c1-1.15",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ MIPS",
    "exerciseCode": "Bài tập 1.15",
    "source": "Đề Cuối kỳ 2022.2 - #1fd28d & Ôn tập Giữa kỳ - Câu 17",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 17,
    "printedPage": 16,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số triệu lệnh/s (ví dụ: 1250):",
    "acceptedAnswers": [
      "1250",
      "1250 MIPS",
      "1250MIPS"
    ],
    "question": "Bộ xử lý có tốc độ xung nhịp $2.5\\text{ GHz}$ và $CPI$ trung bình là $2$. Hãy cho biết số triệu lệnh được thực hiện trên một giây?",
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
    "explanation": "<ul><li>“Số triệu lệnh được thực hiện trên một giây” chính là định nghĩa của chỉ số <strong>MIPS</strong>.</li><li>Thay số vào công thức: $$\\text{MIPS} = \\frac{f_0}{CPI \\times 10^6} = \\frac{2.5 \\times 10^9}{2 \\times 10^6} = \\frac{2500}{2} = 1250\\text{ MIPS}$$</li><li><strong>Đáp án đúng: 1250 MIPS.</strong></li></ul>"
  },
  {
    "id": "c1-1.16",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ MIPS",
    "exerciseCode": "Bài tập 1.16",
    "source": "Đề Cuối kỳ 2024.1 - #3e5442 & Ôn tập Giữa kỳ - Câu 36",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 17,
    "printedPage": 16,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số triệu lệnh/s (ví dụ: 2000):",
    "acceptedAnswers": [
      "2000",
      "2000 MIPS",
      "2000MIPS"
    ],
    "question": "Bộ xử lý có tần số xung nhịp $3\\text{ GHz}$ và $CPI$ trung bình là $1.5$. Hãy cho biết số triệu lệnh được thực hiện trên một giây?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2000 MIPS",
      "4.5 MIPS",
      "500 MIPS",
      "2 MIPS"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Áp dụng công thức: $$\\text{MIPS} = \\frac{3 \\times 10^9}{1.5 \\times 10^6} = \\frac{3000}{1.5} = 2000\\text{ MIPS}$$</li><li><strong>Đáp án đúng: 2000 MIPS.</strong></li></ul>"
  },
  {
    "id": "c1-1.17",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ MIPS",
    "exerciseCode": "Bài tập 1.17",
    "source": "Đề Cuối kỳ 2020.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 18,
    "printedPage": 17,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số triệu lệnh/s (ví dụ: 800):",
    "acceptedAnswers": [
      "800",
      "800 MIPS",
      "800MIPS"
    ],
    "question": "Máy tính có CPU với tốc độ xung nhịp $1.2\\text{ GHz}$ và $CPI$ bằng $1.5$. Xác định số lệnh thực hiện trên 1 giây (đơn vị MIPS)?",
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
    "explanation": "<ul><li>Áp dụng công thức: $$\\text{MIPS} = \\frac{1.2 \\times 10^9}{1.5 \\times 10^6} = \\frac{1200}{1.5} = 800\\text{ MIPS}$$</li><li><strong>Đáp án đúng: 800 MIPS.</strong></li></ul>"
  },
  {
    "id": "c1-1.18",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ MIPS",
    "exerciseCode": "Bài tập 1.18",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B1, Câu 1.1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 18,
    "printedPage": 17,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI (ví dụ: 2.5):",
    "acceptedAnswers": [
      "2.5",
      "2,5"
    ],
    "question": "Máy tính A có bộ xử lý với tần số xung nhịp $1.5\\text{ GHz}$, có khả năng thực hiện $600\\text{ triệu lệnh trên một giây}$. Tính $CPI$ của nó?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.5",
      "0.4",
      "4.0",
      "0.9"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Đề bài cho “600 triệu lệnh trên một giây” nghĩa là $\\text{MIPS} = 600$.</li><li>Tần số $f_0 = 1.5\\text{ GHz} = 1500\\text{ MHz}$.</li><li>Áp dụng công thức: $$CPI = \\frac{f_0}{\\text{MIPS} \\times 10^6} = \\frac{1.5 \\times 10^9}{600 \\times 10^6} = \\frac{1500}{600} = 2.5$$</li><li><strong>Đáp số: CPI = 2.5.</strong></li></ul>"
  },
  {
    "id": "c1-1.19",
    "chapter": 1,
    "groupId": "1.2.3",
    "groupTitle": "Nhóm 3: Bài tập về chỉ số tốc độ MIPS",
    "exerciseCode": "Bài tập 1.19",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B5, Câu 1.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 19,
    "printedPage": 18,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI (ví dụ: 3.7 hoặc 100/27):",
    "acceptedAnswers": [
      "3.7",
      "3,7",
      "100/27",
      "3.704"
    ],
    "question": "Cho máy tính A với bộ xử lý có $\\text{MIPS} = 900$. Hãy tính $CPI$ của máy tính đó nếu biết chu kỳ xung nhịp của bộ xử lý là $T_A = 300\\text{ ps}$.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "3.7 (100/27)",
      "2.7",
      "4.5",
      "0.27"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><strong>Bước 1 – Đổi chu kỳ $T_A$ ra giây và tìm tần số $f_A$:</strong><br>$$T_A = 300\\text{ ps} = 300 \\times 10^{-12}\\text{ s} \\implies f_A = \\frac{1}{T_A} = \\frac{10^{12}}{300}\\text{ Hz}$$</li><li><strong>Bước 2 – Thay vào công thức tính $CPI$:</strong><br>$$CPI = \\frac{f_A}{\\text{MIPS} \\times 10^6} = \\frac{10^{12}}{300 \\times 900 \\times 10^6} = \\frac{10^6}{270\\,000} = \\frac{100}{27} \\approx 3.704$$</li></ol><p><strong>Đáp số: CPI = 100/27 ≈ 3.7.</strong></p>"
  },
  {
    "id": "c1-1.20a",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và thời gian với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.20a",
    "source": "Slide Chương 1 - Trang 32",
    "examTags": [
      "SLIDE"
    ],
    "pdfPage": 19,
    "printedPage": 18,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI trung bình (ví dụ: 2.0):",
    "acceptedAnswers": [
      "2.0",
      "2",
      "2,0"
    ],
    "question": "Cho bảng chỉ ra các dãy lệnh sử dụng các lệnh thuộc các loại A, B, C:<table class='data-table'><tr><th>Loại lệnh</th><th>A</th><th>B</th><th>C</th></tr><tr><td>CPI theo loại lệnh</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Số lệnh (IC) trong dãy lệnh 1</td><td>20</td><td>10</td><td>20</td></tr><tr><td>Số lệnh (IC) trong dãy lệnh 2</td><td>40</td><td>10</td><td>10</td></tr></table>Hãy tính <strong>CPI trung bình của Dãy lệnh 1</strong>:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.0",
      "1.5",
      "2.2",
      "1.8"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Tổng số lệnh: $IC_1 = 20 + 10 + 20 = 50\\text{ lệnh}$.</li><li>Tổng số chu kỳ: $n_1 = (1 \\times 20) + (2 \\times 10) + (3 \\times 20) = 20 + 20 + 60 = 100\\text{ chu kỳ}$.</li><li>$$CPI_{\\text{TB1}} = \\frac{n_1}{IC_1} = \\frac{100}{50} = 2.0$$</li><li><strong>Đáp số: 2.0.</strong></li></ul>"
  },
  {
    "id": "c1-1.20b",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và thời gian với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.20b",
    "source": "Slide Chương 1 - Trang 32",
    "examTags": [
      "SLIDE"
    ],
    "pdfPage": 19,
    "printedPage": 18,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI trung bình (ví dụ: 1.5):",
    "acceptedAnswers": [
      "1.5",
      "1,5"
    ],
    "question": "Dựa vào bảng dữ liệu ở Bài 1.20 (Loại A: CPI=1, Loại B: CPI=2, Loại C: CPI=3; Dãy lệnh 2 có số lệnh tương ứng là 40, 10, 10), hãy tính <strong>CPI trung bình của Dãy lệnh 2</strong>:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1.5",
      "2.0",
      "1.75",
      "1.25"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Tổng số lệnh: $IC_2 = 40 + 10 + 10 = 60\\text{ lệnh}$.</li><li>Tổng số chu kỳ: $n_2 = (1 \\times 40) + (2 \\times 10) + (3 \\times 10) = 40 + 20 + 30 = 90\\text{ chu kỳ}$.</li><li>$$CPI_{\\text{TB2}} = \\frac{n_2}{IC_2} = \\frac{90}{60} = 1.5$$</li><li><strong>Đáp số: 1.5.</strong></li></ul>"
  },
  {
    "id": "c1-1.21a",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và thời gian với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.21a",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B4, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 20,
    "printedPage": 19,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI trung bình (ví dụ: 2.6):",
    "acceptedAnswers": [
      "2.6",
      "2,6",
      "13/5"
    ],
    "question": "Trong tập lệnh máy tính có 3 lớp lệnh A, B, C với CPI lần lượt là 1, 2, 4. Dãy lệnh 1 có số lệnh tương ứng là A=1, B=2, C=2. Tính <strong>CPI trung bình ứng với Dãy lệnh 1</strong>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.6",
      "2.33",
      "1.625",
      "3.0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Áp dụng công thức $CPI_{\\text{TB}} = \\dfrac{\\sum (CPI_i \\times IC_i)}{\\sum IC_i}$:</p>$$CPI_{\\text{TB1}} = \\frac{(1 \\times 1) + (2 \\times 2) + (4 \\times 2)}{1 + 2 + 2} = \\frac{1 + 4 + 8}{5} = \\frac{13}{5} = 2.6$$<p><strong>Đáp số: 2.6.</strong></p>"
  },
  {
    "id": "c1-1.21b",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và thời gian với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.21b",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B4, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 20,
    "printedPage": 19,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI trung bình (ví dụ: 1.625):",
    "acceptedAnswers": [
      "1.625",
      "1,625",
      "13/8"
    ],
    "question": "Trong tập lệnh máy tính có 3 lớp lệnh A, B, C với CPI lần lượt là 1, 2, 4. Dãy lệnh 2 có số lệnh tương ứng là A=5, B=2, C=1. Tính <strong>CPI trung bình ứng với Dãy lệnh 2</strong>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1.625",
      "1.875",
      "2.125",
      "2.6"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Áp dụng công thức:</p>$$CPI_{\\text{TB2}} = \\frac{(1 \\times 5) + (2 \\times 2) + (4 \\times 1)}{5 + 2 + 1} = \\frac{5 + 4 + 4}{8} = \\frac{13}{8} = 1.625$$<p><strong>Đáp số: 1.625.</strong></p>"
  },
  {
    "id": "c1-1.21c",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và thời gian với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.21c",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B4, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 21,
    "printedPage": 20,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI trung bình (ví dụ: 1.67 hoặc 5/3):",
    "acceptedAnswers": [
      "1.67",
      "1,67",
      "10/6",
      "5/3",
      "1.667"
    ],
    "question": "Trong tập lệnh máy tính có 3 lớp lệnh A, B, C với CPI lần lượt là 1, 2, 4. Dãy lệnh 3 có số lệnh tương ứng là A=4, B=1, C=1. Tính <strong>CPI trung bình ứng với Dãy lệnh 3</strong>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1.67 (10/6)",
      "2.0",
      "1.5",
      "2.33"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Áp dụng công thức:</p>$$CPI_{\\text{TB3}} = \\frac{(1 \\times 4) + (2 \\times 1) + (4 \\times 1)}{4 + 1 + 1} = \\frac{4 + 2 + 4}{6} = \\frac{10}{6} \\approx 1.67$$<p><strong>Đáp số: 10/6 ≈ 1.67.</strong></p>"
  },
  {
    "id": "c1-1.22",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và thời gian với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.22",
    "source": "Đề Giữa kỳ 2024.1 - #a6b720 & Ôn tập Giữa kỳ - Câu 4",
    "examTags": [
      "GK"
    ],
    "pdfPage": 21,
    "printedPage": 20,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập thời gian thực thi (ví dụ: 1.35):",
    "acceptedAnswers": [
      "1.35",
      "1,35",
      "1.35s",
      "1.35 s",
      "1.35 giây"
    ],
    "question": "Một bộ xử lý chạy một chương trình với tần số xung nhịp $4\\text{ GHz}$. Chương trình gồm ba loại lệnh:<br>• Loại A: chiếm 40% tổng số lệnh với $CPI$ là 1<br>• Loại B: chiếm 35% tổng số lệnh với $CPI$ là 3<br>• Loại C: chiếm 25% tổng số lệnh với $CPI$ là 5<br>Tổng số lệnh cho chương trình là 2 tỷ lệnh. Tổng thời gian thực thi là bao nhiêu?",
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
    "explanation": "<ol><li><strong>Bước 1 – Tính $CPI$ trung bình:</strong><br>$$CPI_{\\text{TB}} = (0.40 \\times 1) + (0.35 \\times 3) + (0.25 \\times 5) = 0.4 + 1.05 + 1.25 = 2.7$$</li><li><strong>Bước 2 – Tính tổng thời gian thực thi $t_{\\text{CPU}}$:</strong><br>Biết $IC = 2\\text{ tỷ lệnh} = 2 \\times 10^9\\text{ lệnh}$ và $f_0 = 4\\text{ GHz} = 4 \\times 10^9\\text{ Hz}$:<br>$$t_{\\text{CPU}} = \\frac{IC \\times CPI_{\\text{TB}}}{f_0} = \\frac{2 \\times 10^9 \\times 2.7}{4 \\times 10^9} = \\frac{5.4}{4} = 1.35\\text{ giây}$$</li></ol><p><strong>Đáp án đúng: C (1.35 giây).</strong></p>"
  },
  {
    "id": "c1-1.23a",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và thời gian với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.23a",
    "source": "Ôn tập Giữa kỳ - Câu 68",
    "examTags": [
      "GK"
    ],
    "pdfPage": 22,
    "printedPage": 21,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI trung bình (ví dụ: 4):",
    "acceptedAnswers": [
      "4",
      "4.0",
      "4,0"
    ],
    "question": "Cho một bộ xử lý $2\\text{ GHz}$ thực thi tập lệnh gồm năm lớp lệnh A, B, C, D, E với CPI lần lượt là 2, 3, 4, 6 và 10. Máy tính đang thực hiện một chương trình trong đó các lớp lệnh A, B, C, D, E chiếm lần lượt 30%, 30%, 15%, 15% và 10% tổng số lệnh. <strong>Tìm CPI trung bình của bộ xử lý này.</strong>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "4.0",
      "5.0",
      "3.5",
      "4.5"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tính $CPI$ trung bình:</p>$$CPI_{\\text{TB}} = (0.30 \\times 2) + (0.30 \\times 3) + (0.15 \\times 4) + (0.15 \\times 6) + (0.10 \\times 10)$$$$CPI_{\\text{TB}} = 0.6 + 0.9 + 0.6 + 0.9 + 1.0 = 4.0$$<p><strong>Đáp số: 4 (hoặc 4.0).</strong></p>"
  },
  {
    "id": "c1-1.23b",
    "chapter": 1,
    "groupId": "1.2.4",
    "groupTitle": "Nhóm 4: Tính CPI trung bình và thời gian với nhiều lớp lệnh",
    "exerciseCode": "Bài tập 1.23b",
    "source": "Ôn tập Giữa kỳ - Câu 37",
    "examTags": [
      "GK"
    ],
    "pdfPage": 22,
    "printedPage": 21,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tổng số lệnh không chứa dấu phân tách (ví dụ: 10000000000):",
    "acceptedAnswers": [
      "10000000000",
      "10^10",
      "10 tỷ"
    ],
    "question": "Với dữ kiện Bài 1.23 ($f_0 = 2\\text{ GHz}$, $CPI_{\\text{TB}} = 4.0$), nếu thời gian thực thi của chương trình này là $20\\text{ giây}$, hãy tìm <strong>tổng số lệnh ($IC$)</strong>. Đáp án viết không chứa dấu phân tách chữ số.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "10000000000 (10 tỷ lệnh)",
      "5000000000 (5 tỷ lệnh)",
      "20000000000 (20 tỷ lệnh)",
      "1000000000 (1 tỷ lệnh)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ta có $f_0 = 2\\text{ GHz} = 2 \\times 10^9\\text{ Hz}$.</p><p>Từ công thức $t_{\\text{CPU}} = \\dfrac{IC \\times CPI_{\\text{TB}}}{f_0}$, rút ra:</p>$$IC = \\frac{t_{\\text{CPU}} \\times f_0}{CPI_{\\text{TB}}} = \\frac{20 \\times 2 \\times 10^9}{4} = 10 \\times 10^9 = 10\\,000\\,000\\,000$$<p><strong>Đáp số điền: 10000000000 (số 1 và 10 chữ số 0).</strong></p>"
  },
  {
    "id": "c1-1.24a",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.24a",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B1, Câu 1.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 22,
    "printedPage": 21,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lần nhanh hơn (ví dụ: 1.8):",
    "acceptedAnswers": [
      "1.8",
      "1,8",
      "1.8 lần"
    ],
    "question": "Hai máy tính A và B có cùng kiến trúc tập lệnh (ISA) và cùng chạy 1 chương trình. Máy A có chu kỳ $T_A = 250\\text{ ps}, CPI_A = 2.0$. Máy B có chu kỳ $T_B = 750\\text{ ps}, CPI_B = 1.2$. Hỏi máy tính nào nhanh hơn và nhanh hơn bao nhiêu lần?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Máy A nhanh hơn máy B 1.8 lần",
      "Máy B nhanh hơn máy A 1.8 lần",
      "Máy A nhanh hơn máy B 1.5 lần",
      "Máy A nhanh hơn máy B 1.2 lần"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Thời gian chạy trên máy A: $t_A = IC \\times CPI_A \\times T_A = IC \\times 2.0 \\times 250\\text{ ps} = 500 \\times IC\\text{ (ps)}$.</li><li>Thời gian chạy trên máy B: $t_B = IC \\times CPI_B \\times T_B = IC \\times 1.2 \\times 750\\text{ ps} = 900 \\times IC\\text{ (ps)}$.</li><li>Vì $t_A < t_B$ ($500 < 900$) nên <strong>máy A nhanh hơn máy B</strong>.</li><li>Số lần nhanh hơn: $$\\frac{P_A}{P_B} = \\frac{t_B}{t_A} = \\frac{900 \\times IC}{500 \\times IC} = 1.8\\text{ lần}$$</li><li><strong>Đáp số: Máy A nhanh hơn máy B 1.8 lần.</strong></li></ul>"
  },
  {
    "id": "c1-1.24b",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.24b",
    "source": "Slide Chương 1 - Trang 29",
    "examTags": [
      "SLIDE"
    ],
    "pdfPage": 23,
    "printedPage": 22,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lần nhanh hơn (ví dụ: 1.2):",
    "acceptedAnswers": [
      "1.2",
      "1,2",
      "1.2 lần"
    ],
    "question": "Hai máy tính A và B có cùng ISA và cùng chạy 1 chương trình. Máy A có $T_A = 250\\text{ ps}, CPI_A = 2.0$. Máy B có $T_B = 500\\text{ ps}, CPI_B = 1.2$. Hỏi máy tính nào nhanh hơn và nhanh hơn bao nhiêu lần?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Máy A nhanh hơn máy B 1.2 lần",
      "Máy A nhanh hơn máy B 1.8 lần",
      "Máy B nhanh hơn máy A 1.2 lần",
      "Hai máy có hiệu năng bằng nhau"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>$t_A = 500 \\times IC\\text{ (ps)}$; $t_B = IC \\times 1.2 \\times 500\\text{ ps} = 600 \\times IC\\text{ (ps)}$.</li><li>Máy A nhanh hơn máy B số lần là: $$\\frac{t_B}{t_A} = \\frac{600}{500} = 1.2\\text{ lần}$$</li><li><strong>Đáp số: Máy A nhanh hơn máy B 1.2 lần.</strong></li></ul>"
  },
  {
    "id": "c1-1.25",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.25",
    "source": "Đề Cuối kỳ 2023.1 - #2262f & Ôn tập Giữa kỳ - Câu 3",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 23,
    "printedPage": 22,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lần nhanh hơn (ví dụ: 4.5):",
    "acceptedAnswers": [
      "4.5",
      "4,5",
      "4.5 lần"
    ],
    "question": "Xét hai bộ xử lý sau đây làm cùng một công việc:<br>• P1 có tần số xung nhịp $4\\text{ GHz}, CPI = 0.9$ và yêu cầu thực hiện $5.0\\text{E}9\\text{ lệnh}$.<br>• P2 có tần số xung nhịp $3\\text{ GHz}, CPI = 0.75$ và yêu cầu thực hiện $1.0\\text{E}9\\text{ lệnh}$.<br>Hỏi P2 nhanh hơn P1 bao nhiêu lần khi làm công việc này? (Lưu ý: $x\\text{E}y = x \\times 10^y$).",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "4.5 lần",
      "3.0 lần",
      "1.5 lần",
      "2.25 lần"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><strong>Thời gian thực thi của P1 ($t_1$):</strong><br>$$t_1 = \\frac{5.0 \\times 10^9 \\times 0.9}{4 \\times 10^9} = \\frac{4.5}{4} = 1.125\\text{ giây}$$</li><li><strong>Thời gian thực thi của P2 ($t_2$):</strong><br>$$t_2 = \\frac{1.0 \\times 10^9 \\times 0.75}{3 \\times 10^9} = \\frac{0.75}{3} = 0.25\\text{ giây}$$</li><li><strong>Tính độ tăng tốc của P2 so với P1:</strong><br>Đề hỏi “P2 nhanh hơn P1 bao nhiêu lần”, ta lấy thời gian $t_1$ chia cho $t_2$:<br>$$\\frac{P_2}{P_1} = \\frac{t_1}{t_2} = \\frac{1.125}{0.25} = 4.5\\text{ lần}$$</li></ol><p><strong>Đáp số: 4.5.</strong></p>"
  },
  {
    "id": "c1-1.26",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.26",
    "source": "Đề Giữa kỳ 2024.1 - #8cf496",
    "examTags": [
      "GK"
    ],
    "pdfPage": 24,
    "printedPage": 23,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lần nhanh hơn (ví dụ: 1.5):",
    "acceptedAnswers": [
      "1.5",
      "1,5",
      "1.5 lần"
    ],
    "question": "Xét hai bộ xử lý sau đây làm cùng một công việc:<br>• P1 có tần số xung nhịp $1.5\\text{ GHz}, CPI = 1.8$, và cần thực hiện $3.0\\text{E}9\\text{ lệnh}$.<br>• P2 có tần số xung nhịp $2\\text{ GHz}, CPI = 1.2$, và cần thực hiện $4.0\\text{E}9\\text{ lệnh}$.<br>Hỏi P2 nhanh hơn P1 bao nhiêu lần khi thực hiện công việc này?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "1.5 lần",
      "2.0 lần",
      "1.2 lần",
      "0.67 lần"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><strong>Tính $t_1$:</strong> $$t_1 = \\frac{3.0 \\times 10^9 \\times 1.8}{1.5 \\times 10^9} = \\frac{5.4}{1.5} = 3.6\\text{ giây}$$</li><li><strong>Tính $t_2$:</strong> $$t_2 = \\frac{4.0 \\times 10^9 \\times 1.2}{2 \\times 10^9} = \\frac{4.8}{2} = 2.4\\text{ giây}$$</li><li><strong>So sánh P2 với P1:</strong> $$\\frac{P_2}{P_1} = \\frac{t_1}{t_2} = \\frac{3.6}{2.4} = 1.5\\text{ lần}$$</li></ol><p><strong>Đáp số: 1.5.</strong></p>"
  },
  {
    "id": "c1-1.27",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.27",
    "source": "Slide Chương 1 - Trang 26",
    "examTags": [
      "SLIDE"
    ],
    "pdfPage": 24,
    "printedPage": 23,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tần số fB theo GHz (ví dụ: 4):",
    "acceptedAnswers": [
      "4",
      "4 GHz",
      "4GHz",
      "4.0"
    ],
    "question": "Hai máy tính A và B cùng chạy một chương trình:<br>• Máy tính A có tần số $f_A = 2\\text{ GHz}$, thời gian thực hiện $t_A = 10\\text{ s}$.<br>• Máy tính B cần đạt thời gian $t_B = 6\\text{ s}$. Biết số chu kỳ khi chạy trên máy B ($n_B$) bằng $1.2\\text{ lần}$ số chu kỳ khi chạy trên máy A ($n_A$).<br>Hãy xác định tần số xung nhịp cần thiết cho máy B ($f_B$)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "4 GHz",
      "2.4 GHz",
      "3.6 GHz",
      "5 GHz"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><strong>Tổng số chu kỳ của máy A:</strong><br>$n_A = t_A \\times f_A = 10\\text{ s} \\times 2 \\times 10^9\\text{ Hz} = 20 \\times 10^9\\text{ chu kỳ}$.</li><li><strong>Tổng số chu kỳ của máy B:</strong><br>$n_B = 1.2 \\times n_A = 1.2 \\times 20 \\times 10^9 = 24 \\times 10^9\\text{ chu kỳ}$.</li><li><strong>Tần số cần thiết cho máy B:</strong><br>$$f_B = \\frac{n_B}{t_B} = \\frac{24 \\times 10^9}{6} = 4 \\times 10^9\\text{ Hz} = 4\\text{ GHz}$$</li></ol><p><strong>Đáp số: fB = 4 GHz.</strong></p>"
  },
  {
    "id": "c1-1.28",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.28",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B2, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 25,
    "printedPage": 24,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lệnh IC_B (ví dụ: 65000):",
    "acceptedAnswers": [
      "65000",
      "65 000",
      "65000 lệnh"
    ],
    "question": "Máy tính A có $CPI = 1.3$ và $f_A = 600\\text{ MHz}$. Máy tính B có $CPI = 2.5$ và $f_B = 750\\text{ MHz}$. Giả sử có một chương trình chạy được trên cả hai máy tính đó. Khi dịch trên máy A chương trình được $100\\,000\\text{ lệnh}$. Hãy xác định khi dịch trên máy B chương trình được dịch thành bao nhiêu lệnh để cả hai máy có cùng thời gian thực hiện ($t_A = t_B$)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "65 000 lệnh",
      "75 000 lệnh",
      "50 000 lệnh",
      "80 000 lệnh"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lập phương trình cân bằng thời gian $t_A = t_B$:</p>$$\\frac{IC_A \\times CPI_A}{f_A} = \\frac{IC_B \\times CPI_B}{f_B} \\iff \\frac{100\\,000 \\times 1.3}{600} = \\frac{IC_B \\times 2.5}{750}$$$$IC_B = \\frac{100\\,000 \\times 1.3 \\times 750}{600 \\times 2.5} = \\frac{97\\,500\\,000}{1500} = 65\\,000\\text{ lệnh}$$<p><strong>Đáp số: 65 000 lệnh.</strong></p>"
  },
  {
    "id": "c1-1.29",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.29",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B3, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 26,
    "printedPage": 25,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lệnh IC_B (ví dụ: 54000):",
    "acceptedAnswers": [
      "54000",
      "54 000",
      "54000 lệnh"
    ],
    "question": "Máy tính A có $CPI = 1.2$ và $f_A = 500\\text{ MHz}$. Máy tính B có $CPI = 2.4$ và $f_B = 600\\text{ MHz}$. Khi dịch trên máy A chương trình được $90\\,000\\text{ lệnh}$. Hãy xác định khi dịch trên máy B chương trình được dịch thành bao nhiêu lệnh để cả hai máy có cùng thời gian thực hiện?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "54 000 lệnh",
      "45 000 lệnh",
      "60 000 lệnh",
      "48 000 lệnh"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lập phương trình cân bằng thời gian $t_A = t_B$:</p>$$\\frac{90\\,000 \\times 1.2}{500} = \\frac{IC_B \\times 2.4}{600} \\implies IC_B = \\frac{90\\,000 \\times 1.2 \\times 600}{500 \\times 2.4} = \\frac{64\\,800\\,000}{1200} = 54\\,000\\text{ lệnh}$$<p><strong>Đáp số: 54 000 lệnh.</strong></p>"
  },
  {
    "id": "c1-1.30",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.30",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B6, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 26,
    "printedPage": 25,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lệnh IC_B (ví dụ: 80000):",
    "acceptedAnswers": [
      "80000",
      "80 000",
      "80000 lệnh"
    ],
    "question": "Máy tính A có $CPI = 1.4$ và $f_A = 750\\text{ MHz}$. Máy tính B có $CPI = 2.8$ và $f_B = 1.5\\text{ GHz}$. Khi dịch trên máy A chương trình được $80\\,000\\text{ lệnh}$. Hãy xác định khi dịch trên máy B chương trình được dịch thành bao nhiêu lệnh để cả hai máy có cùng thời gian thực hiện?",
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
    "explanation": "<ul><li>Chú ý bẫy đơn vị: $f_A = 750\\text{ MHz}$, $f_B = 1.5\\text{ GHz} = 1500\\text{ MHz}$.</li><li>Phương trình: $$\\frac{80\\,000 \\times 1.4}{750} = \\frac{IC_B \\times 2.8}{1500} \\implies IC_B = \\frac{80\\,000 \\times 1.4 \\times 1500}{750 \\times 2.8} = 80\\,000\\text{ lệnh}$$</li><li><strong>Đáp số: 80 000 lệnh.</strong></li></ul>"
  },
  {
    "id": "c1-1.31",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.31",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B7, Câu 1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 27,
    "printedPage": 26,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lệnh IC_B (ví dụ: 58333 hoặc 175000/3):",
    "acceptedAnswers": [
      "58333",
      "58 333",
      "175000/3"
    ],
    "question": "Máy tính A có $CPI = 2.4$ và $f_A = 800\\text{ MHz}$. Máy tính B có $CPI = 3.6$ và $f_B = 1\\text{ GHz}$. Khi dịch trên máy A chương trình được $70\\,000\\text{ lệnh}$. Hãy xác định khi dịch trên máy B thì chương trình được dịch thành bao nhiêu lệnh để cả hai máy có cùng thời gian thực hiện?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "≈ 58 333 lệnh (175 000 / 3)",
      "≈ 70 000 lệnh",
      "≈ 46 667 lệnh",
      "≈ 52 500 lệnh"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Đổi về cùng đơn vị MHz: $f_A = 800\\text{ MHz}$; $f_B = 1\\text{ GHz} = 1000\\text{ MHz}$.</li><li>Lập phương trình: $$\\frac{70\\,000 \\times 2.4}{800} = \\frac{IC_B \\times 3.6}{1000} \\implies IC_B = \\frac{70\\,000 \\times 2.4 \\times 1000}{800 \\times 3.6} = \\frac{175\\,000}{3} \\approx 58\\,333\\text{ lệnh}$$</li><li><strong>Đáp số: 175 000 / 3 ≈ 58 333 lệnh.</strong></li></ul>"
  },
  {
    "id": "c1-1.32a",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.32 (Ý 1.1)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B8, Câu 1.1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 27,
    "printedPage": 26,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Giả sử có 3 bộ xử lý P1, P2, P3 có cùng kiến trúc tập lệnh (ISA):<br>• P1: $f_0 = 2\\text{ GHz}, CPI = 1.5$<br>• P2: $f_0 = 1.5\\text{ GHz}, CPI = 1.0$<br>• P3: $f_0 = 3\\text{ GHz}, CPI = 2.5$<br><strong>Bộ xử lý nào có hiệu suất cao nhất?</strong>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "P2 (1500 MIPS)",
      "P1 (1333 MIPS)",
      "P3 (1200 MIPS)",
      "Cả ba bộ xử lý có hiệu suất như nhau"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Do cùng kiến trúc tập lệnh (ISA), ta tính tốc độ thực hiện lệnh $\\dfrac{f_0}{CPI}$ của từng bộ xử lý:</p><ul><li>Với P1: $\\dfrac{2\\text{ GHz}}{1.5} \\approx 1.33 \\times 10^9\\text{ lệnh/s}$ ($1333\\text{ MIPS}$).</li><li>Với P2: $\\dfrac{1.5\\text{ GHz}}{1.0} = 1.50 \\times 10^9\\text{ lệnh/s}$ ($1500\\text{ MIPS}$).</li><li>Với P3: $\\dfrac{3\\text{ GHz}}{2.5} = 1.20 \\times 10^9\\text{ lệnh/s}$ ($1200\\text{ MIPS}$).</li></ul><p><strong>Vậy bộ xử lý P2 có hiệu suất cao nhất (1500 MIPS).</strong></p>"
  },
  {
    "id": "c1-1.32b",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.32 (Ý 1.2)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B8, Câu 1.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 28,
    "printedPage": 27,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với dữ kiện Bài 1.32 (P1: 2GHz, CPI 1.5; P2: 1.5GHz, CPI 1.0; P3: 3GHz, CPI 2.5), mỗi bộ xử lý thực thi một chương trình trong $10\\text{ s}$. <strong>Tính số chu kỳ ($n$) và số lệnh ($IC$) của mỗi bộ xử lý:</strong>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "P1: n = 20×10^9, IC ≈ 13.33×10^9; P2: n = 15×10^9, IC = 15×10^9; P3: n = 30×10^9, IC = 12×10^9",
      "P1: n = 20×10^9, IC = 30×10^9; P2: n = 15×10^9, IC = 15×10^9; P3: n = 30×10^9, IC = 75×10^9",
      "P1: n = 10×10^9, IC = 6.67×10^9; P2: n = 15×10^9, IC = 15×10^9; P3: n = 20×10^9, IC = 8×10^9",
      "P1: n = 2×10^9, IC = 1.33×10^9; P2: n = 1.5×10^9, IC = 1.5×10^9; P3: n = 3×10^9, IC = 1.2×10^9"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Công thức: $n = t \\times f_0$; $IC = \\dfrac{n}{CPI}$.</p><ul><li><strong>P1:</strong> $n_1 = 10 \\times 2 \\times 10^9 = 20 \\times 10^9\\text{ chu kỳ}$; $IC_1 = \\dfrac{20 \\times 10^9}{1.5} \\approx 13.33 \\times 10^9\\text{ lệnh}$.</li><li><strong>P2:</strong> $n_2 = 10 \\times 1.5 \\times 10^9 = 15 \\times 10^9\\text{ chu kỳ}$; $IC_2 = \\dfrac{15 \\times 10^9}{1.0} = 15 \\times 10^9\\text{ lệnh}$.</li><li><strong>P3:</strong> $n_3 = 10 \\times 3 \\times 10^9 = 30 \\times 10^9\\text{ chu kỳ}$; $IC_3 = \\dfrac{30 \\times 10^9}{2.5} = 12 \\times 10^9\\text{ lệnh}$.</li></ul><p><strong>Đáp án đúng: A.</strong></p>"
  },
  {
    "id": "c1-1.32c",
    "chapter": 1,
    "groupId": "1.2.5",
    "groupTitle": "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý",
    "exerciseCode": "Bài tập 1.32 (Ý 1.3)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B8, Câu 1.3",
    "examTags": [
      "CK"
    ],
    "pdfPage": 28,
    "printedPage": 27,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với dữ kiện Bài 1.32 (P1: 2GHz, P2: 1.5GHz, P3: 3GHz), người ta muốn giảm thời gian thực thi đi 30%, nhưng điều này lại làm tăng CPI lên 20%. <strong>Tính tần số xung nhịp mới của mỗi bộ xử lý lúc này:</strong>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "P1: 3.43 GHz (24/7), P2: 2.57 GHz (18/7), P3: 5.14 GHz (36/7)",
      "P1: 2.80 GHz, P2: 2.10 GHz, P3: 4.20 GHz",
      "P1: 2.40 GHz, P2: 1.80 GHz, P3: 3.60 GHz",
      "P1: 4.00 GHz, P2: 3.00 GHz, P3: 6.00 GHz"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li>Giảm thời gian $30\\% \\implies t_{\\text{mới}} = 0.7 \\times t_{\\text{cũ}}$.</li><li>Tăng CPI $20\\% \\implies CPI_{\\text{mới}} = 1.2 \\times CPI_{\\text{cũ}}$.</li><li>Vì số lệnh $IC$ không đổi:<br>$$f_{\\text{mới}} = \\frac{IC \\times CPI_{\\text{mới}}}{t_{\\text{mới}}} = \\frac{1.2}{0.7} \\times f_{\\text{cũ}} = \\frac{12}{7} \\times f_{\\text{cũ}}$$</li><li>Thay số:<br>• $f_{1\\text{ mới}} = \\dfrac{12}{7} \\times 2 = \\dfrac{24}{7} \\approx 3.43\\text{ GHz}$<br>• $f_{2\\text{ mới}} = \\dfrac{12}{7} \\times 1.5 = \\dfrac{18}{7} \\approx 2.57\\text{ GHz}$<br>• $f_{3\\text{ mới}} = \\dfrac{12}{7} \\times 3 = \\dfrac{36}{7} \\approx 5.14\\text{ GHz}$</li></ol><p><strong>Đáp án đúng: A.</strong></p>"
  },
  {
    "id": "c1-1.33",
    "chapter": 1,
    "groupId": "1.2.6",
    "groupTitle": "Nhóm 6: CPI hiệu dụng và Phân loại kiến trúc máy tính",
    "exerciseCode": "Bài tập 1.33",
    "source": "Đề Cuối kỳ 2023.1 - #c7a320 & Ôn tập Cuối kỳ P2 - Câu 6",
    "examTags": [
      "CK"
    ],
    "pdfPage": 29,
    "printedPage": 28,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI hiệu dụng (ví dụ: 2.5):",
    "acceptedAnswers": [
      "2.5",
      "2,5"
    ],
    "question": "Cho một CPU RISC-V có $CPI$ cơ bản (base CPI) bằng $1$. Bộ nhớ đệm (Cache) của nó có thời gian phạt khi bỏ lỡ (miss penalty) là $100\\text{ chu kỳ}$. Khi thực thi một chương trình, tỷ lệ bỏ lỡ lệnh (instruction miss rate) và tỷ lệ bỏ lỡ dữ liệu (data miss rate) lần lượt là $1\\%$ và $10\\%$. Các lệnh truy cập bộ nhớ (load/store) chiếm $5\\%$ tổng số lệnh trong chương trình này. $CPI$ hiệu dụng (effective CPI) khi thực thi chương trình này là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.5",
      "1.1",
      "2.0",
      "3.0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><strong>Hiểu bản chất:</strong> Mọi lệnh ($100\\%$) đều phải đọc từ I-cache, nhưng chỉ các lệnh Load/Store ($5\\%$) mới truy cập D-cache.</li><li><strong>Công thức tính CPI hiệu dụng:</strong><br>$$CPI_{\\text{hiệu dụng}} = CPI_{\\text{cơ bản}} + \\text{Phạt trượt lệnh} + \\text{Phạt trượt dữ liệu}$$</li><li>Trong đó:<br>• Phạt trượt lệnh: $100\\% \\times 1\\% \\times 100 = 0.01 \\times 100 = 1.0\\text{ chu kỳ}$.<br>• Phạt trượt dữ liệu: $5\\% \\times 10\\% \\times 100 = 0.05 \\times 0.10 \\times 100 = 0.5\\text{ chu kỳ}$.</li><li>$$CPI_{\\text{hiệu dụng}} = 1 + 1.0 + 0.5 = 2.5$$</li></ol><p><strong>Đáp số: 2.5.</strong></p>"
  },
  {
    "id": "c1-1.34",
    "chapter": 1,
    "groupId": "1.2.6",
    "groupTitle": "Nhóm 6: CPI hiệu dụng và Phân loại kiến trúc máy tính",
    "exerciseCode": "Bài tập 1.34",
    "source": "Ôn tập Cuối kỳ P2 - Câu 58",
    "examTags": [
      "CK"
    ],
    "pdfPage": 30,
    "printedPage": 29,
    "relatedTheoryId": "1.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tỷ số Actual CPI / Base CPI (ví dụ: 2.72):",
    "acceptedAnswers": [
      "2.72",
      "2,72"
    ],
    "question": "Cho biết:<br>• Tỷ lệ trượt Cache lệnh (I-cache miss rate) = 2%<br>• Tỷ lệ trượt Cache dữ liệu (D-cache miss rate) = 4%<br>• Thời gian phạt khi trượt (Miss penalty) = 100 chu kỳ<br>• $CPI$ cơ bản khi Cache lý tưởng (Base CPI) = 2<br>• Các lệnh Load và Store chiếm 36% tổng số lệnh.<br>Hãy tính tỷ số: $\\text{Actual CPI} / \\text{Base CPI} = \\text{?}$",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2.72",
      "1.72",
      "5.44",
      "3.44"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><strong>Tính số chu kỳ phạt trên mỗi lệnh:</strong><br>• Phạt trượt lệnh: $1 \\times 2\\% \\times 100 = 0.02 \\times 100 = 2.0\\text{ chu kỳ}$.<br>• Phạt trượt dữ liệu: $36\\% \\times 4\\% \\times 100 = 0.36 \\times 0.04 \\times 100 = 1.44\\text{ chu kỳ}$.</li><li><strong>Tính CPI thực tế (Actual CPI):</strong><br>$$\\text{Actual CPI} = \\text{Base CPI} + 2.0 + 1.44 = 2 + 3.44 = 5.44$$</li><li><strong>Tính tỷ số:</strong><br>$$\\frac{\\text{Actual CPI}}{\\text{Base CPI}} = \\frac{5.44}{2} = 2.72$$</li></ol><p><strong>Đáp số: 2.72.</strong></p>"
  },
  {
    "id": "c1-1.35a",
    "chapter": 1,
    "groupId": "1.2.6",
    "groupTitle": "Nhóm 6: CPI hiệu dụng và Phân loại kiến trúc máy tính",
    "exerciseCode": "Bài tập 1.35a",
    "source": "Đề Cuối kỳ 2020.2, 2022.2 - #c0ca61 & Ôn tập Cuối kỳ P2 - Câu 2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 31,
    "printedPage": 30,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Máy tính với 1 bộ xử lý đa lõi (multicore processor) thuộc kiến trúc nào theo phân loại của Flynn?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "MIMD với bộ nhớ dùng chung",
      "SISD",
      "SIMD",
      "MIMD với bộ nhớ phân tán"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Một bộ xử lý đa lõi (multicore) có nhiều nhân CPU cùng nằm trên 1 chip và cùng truy cập chung một bộ nhớ chính (RAM), nên thuộc loại <strong>MIMD với bộ nhớ dùng chung (Shared Memory MIMD)</strong>.</li><li><strong>Đáp án đúng: MIMD với bộ nhớ dùng chung.</strong></li></ul>"
  },
  {
    "id": "c1-1.35b",
    "chapter": 1,
    "groupId": "1.2.6",
    "groupTitle": "Nhóm 6: CPI hiệu dụng và Phân loại kiến trúc máy tính",
    "exerciseCode": "Bài tập 1.35b",
    "source": "Đề Cuối kỳ 2020.2 & Ôn tập Cuối kỳ P2 - Câu 35",
    "examTags": [
      "CK"
    ],
    "pdfPage": 31,
    "printedPage": 30,
    "relatedTheoryId": "1.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Kiến trúc nào dưới đây chưa tồn tại máy tính thương mại trong thực tế theo phân loại của Flynn?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "MISD (Multiple Instruction, Single Data)",
      "SIMD",
      "SISD",
      "MIMD"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li><strong>MISD (Multiple Instruction, Single Data):</strong> Nhiều dòng lệnh tác động lên 1 dòng dữ liệu &rarr; Cho đến nay chưa tồn tại hệ thống thương mại nào được xây dựng theo mô hình này.</li><li><strong>Đáp án đúng: MISD.</strong></li></ul>"
  },
  {
    "id": "lt-2.1",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.1",
    "source": "Lý thuyết mục 2.1.1 - Cấu tạo CPU",
    "examTags": [
      "LT"
    ],
    "pdfPage": 32,
    "printedPage": 31,
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
      "Đơn vị điều khiển (CU), Đơn vị số học logic (ALU), Tập thanh ghi (Register File)",
      "Bộ nhớ chính (RAM), Bộ nhớ Cache, Ổ đĩa cứng (SSD/HDD)",
      "Bộ đếm chương trình (PC), Bộ giải mã (Decoder), Bộ cộng (Adder)",
      "Bus địa chỉ, Bus dữ liệu, Bus điều khiển"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 2.1.1 trong PDF, bên trong CPU gồm 3 bộ phận cốt lõi:</p><ol><li><strong>CU (Control Unit):</strong> Giải mã lệnh và phát tín hiệu điều khiển.</li><li><strong>ALU (Arithmetic & Logic Unit):</strong> Thực hiện phép toán số học và logic.</li><li><strong>Register File (RF):</strong> Tập các thanh ghi tốc độ nhanh nhất lưu tạm dữ liệu phục vụ CPU.</li></ol>"
  },
  {
    "id": "lt-2.2",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.2",
    "source": "Lý thuyết mục 2.1.2 - Chu trình lệnh",
    "examTags": [
      "LT"
    ],
    "pdfPage": 33,
    "printedPage": 32,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thứ tự 3 giai đoạn cơ bản của một Chu trình lệnh (Instruction Cycle) trong CPU là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Tìm nạp lệnh (Fetch) &rarr; Giải mã lệnh (Decode) &rarr; Thực hiện lệnh (Execute)",
      "Giải mã lệnh (Decode) &rarr; Tìm nạp lệnh (Fetch) &rarr; Thực hiện lệnh (Execute)",
      "Tìm nạp lệnh (Fetch) &rarr; Thực hiện lệnh (Execute) &rarr; Ghi kết quả (Writeback)",
      "Đọc bộ nhớ &rarr; Tính toán trên ALU &rarr; Ghi vào thanh ghi"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 2.1.2 trong PDF, Chu trình lệnh gồm 3 giai đoạn theo đúng thứ tự:</p><ol><li><strong>Fetch (Tìm nạp):</strong> Lấy lệnh từ RAM vào thanh ghi IR (thanh ghi PC trỏ lệnh kế tiếp).</li><li><strong>Decode (Giải mã):</strong> CU phân tích mã lệnh trong IR để xác định thao tác.</li><li><strong>Execute (Thực hiện):</strong> Phát tín hiệu trao đổi dữ liệu, tính toán ALU hoặc rẽ nhánh PC.</li></ol>"
  },
  {
    "id": "lt-2.3",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.3",
    "source": "Lý thuyết mục 2.1.2 - Hoạt động Ngắt",
    "examTags": [
      "LT"
    ],
    "pdfPage": 34,
    "printedPage": 33,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khi CPU nhận được tín hiệu yêu cầu ngắt từ thiết bị vào-ra, thao tác đầu tiên CPU cần thực hiện trước khi nạp địa chỉ chương trình xử lý ngắt vào PC là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Tạm dừng chương trình hiện tại và cất ngữ cảnh (lưu PC và thanh ghi ra ngăn xếp)",
      "Xóa sạch nội dung bộ nhớ RAM để giải phóng tài nguyên",
      "Khởi động lại toàn bộ hệ thống máy tính",
      "Gửi tín hiệu từ chối ngắt về cho thiết bị ngoại vi"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo Quy trình 5 bước xử lý ngắt (mục 2.1.2 trong PDF):</p><ol><li>Kiểm tra tín hiệu ngắt ở cuối chu trình lệnh.</li><li><strong>Tạm dừng chương trình hiện tại và cất ngữ cảnh (lưu giá trị PC và các thanh ghi cần thiết ra ngăn xếp Stack)</strong> để sau này quay lại làm tiếp.</li><li>Nạp địa chỉ bắt đầu của Interrupt Handler vào PC.</li><li>Thực thi chương trình con xử lý ngắt.</li><li>Khôi phục ngữ cảnh từ Stack và quay về tiếp tục chương trình cũ.</li></ol>"
  },
  {
    "id": "lt-2.4",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.4",
    "source": "Lý thuyết mục 2.1.3 - Hệ thống Bus",
    "examTags": [
      "LT"
    ],
    "pdfPage": 35,
    "printedPage": 34,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Tín hiệu điều khiển nào trên Bus điều khiển (Control Bus) do bộ điều khiển DMA phát ra để xin CPU trao quyền sử dụng Bus?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "BRQ (Bus Request)",
      "BGT (Bus Grant)",
      "INTR (Interrupt Request)",
      "MEMW (Memory Write)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 2.1.3 trong PDF về Bus điều khiển:</p><ul><li><strong>BRQ (Bus Request):</strong> DMAC phát tín hiệu <em>xin nhượng bus</em> gửi tới CPU.</li><li><strong>BGT (Bus Grant):</strong> CPU phát tín hiệu <em>chấp nhận nhượng bus</em> cho DMAC.</li><li><strong>INTR:</strong> Yêu cầu ngắt; <strong>MEMW:</strong> Ghi bộ nhớ.</li></ul>"
  },
  {
    "id": "lt-2.5",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.5",
    "source": "Lý thuyết mục 2.1.3 - Liên kết điểm-điểm",
    "examTags": [
      "LT"
    ],
    "pdfPage": 36,
    "printedPage": 35,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chuẩn kết nối điểm-điểm tốc độ cao nào hiện nay được dùng để kết nối trực tiếp Card đồ họa rời (GPU), ổ cứng SSD NVMe và Card mạng với bo mạch chủ?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "PCI Express (PCIe)",
      "QPI (Quick Path Interconnect)",
      "ISA Bus",
      "SATA I"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 2.1.3 trong PDF:</p><ul><li><strong>PCI Express (PCIe):</strong> Liên kết điểm-điểm tốc độ cao thay thế PCI bus cũ để nối card đồ họa rời, SSD NVMe, card mạng Gigabit.</li><li><strong>QPI (Quick Path Interconnect):</strong> Kết nối trực tiếp giữa các nhân CPU, chip vi xử lý và Chipset.</li></ul>"
  },
  {
    "id": "lt-2.6",
    "chapter": 2,
    "groupId": "2.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 2",
    "exerciseCode": "Lý thuyết 2.6",
    "source": "Lý thuyết mục 2.1.3 - Không gian địa chỉ",
    "examTags": [
      "LT"
    ],
    "pdfPage": 35,
    "printedPage": 34,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Nếu Bus địa chỉ của máy tính có độ rộng 32 bit và máy tính quản lý bộ nhớ theo từng byte, thì dung lượng bộ nhớ tối đa mà hệ thống có thể đánh địa chỉ trực tiếp là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "4 GiB (2^32 byte)",
      "2 GiB (2^31 byte)",
      "8 GiB (2^33 byte)",
      "16 GiB (2^34 byte)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo công thức Không gian địa chỉ (mục 2.1.3):</p><p>$$2^N\\text{ byte} = 2^{32}\\text{ byte} = 2^2 \\times 2^{30}\\text{ byte} = 4\\text{ GiB}$$</p><p><strong>Đáp án đúng: 4 GiB (2^32 byte).</strong></p>"
  },
  {
    "id": "c2-2.1",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Chu trình lệnh, các thanh ghi PC/IR/SP và Ngăn nhớ",
    "exerciseCode": "Bài tập 2.1",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0009, Câu 11",
    "examTags": [
      "GK"
    ],
    "pdfPage": 37,
    "printedPage": 36,
    "relatedTheoryId": "2.1.1",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập 2 từ còn thiếu cách nhau dấu phẩy (ví dụ: nội dung, địa chỉ):",
    "acceptedAnswers": [
      "nội dung, địa chỉ",
      "giá trị, địa chỉ",
      "nội dung, địa chỉ vật lý",
      "giá trị, địa chỉ vật lý"
    ],
    "question": "Điền từ còn thiếu vào 2 ô trống trong phát biểu sau: “Mỗi ngăn nhớ trong máy tính có .................... thay đổi được, nhưng .................... của nó luôn cố định.”",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "nội dung (giá trị) ; địa chỉ (địa chỉ vật lý)",
      "địa chỉ ; nội dung",
      "kích thước ; vị trí",
      "tên gọi ; dung lượng"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Đối chiếu trực tiếp với định nghĩa Bộ nhớ chính (Slide trang 9, Chương 2): Mỗi ngăn nhớ có <strong>nội dung (dữ liệu lưu bên trong)</strong> có thể đọc/ghi thay đổi liên tục, nhưng <strong>địa chỉ vật lý</strong> của ngăn nhớ đó là cố định.</li><li><strong>Đáp số: Ô trống 1: nội dung (hoặc giá trị); Ô trống 2: địa chỉ (hoặc địa chỉ vật lý).</strong></li></ul>"
  },
  {
    "id": "c2-2.2",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Chu trình lệnh, các thanh ghi PC/IR/SP và Ngăn nhớ",
    "exerciseCode": "Bài tập 2.2",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0008 & 0009, Câu 10",
    "examTags": [
      "GK"
    ],
    "pdfPage": 37,
    "printedPage": 36,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên 2 thanh ghi (ví dụ: PC và IR):",
    "acceptedAnswers": [
      "PC và IR",
      "PC, IR",
      "IR và PC",
      "Program Counter và Instruction Register"
    ],
    "question": "Tên của 2 thanh ghi phục vụ cho quá trình nhận lệnh (tìm nạp lệnh) từ bộ nhớ chính là gì? Viết tên đầy đủ hoặc viết tắt.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "PC (Bộ đếm chương trình) và IR (Thanh ghi lệnh)",
      "MAR (Thanh ghi địa chỉ) và MBR (Thanh ghi đệm dữ liệu)",
      "SP (Con trỏ ngăn xếp) và PC (Bộ đếm chương trình)",
      "ALU và CU"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Trong giai đoạn Tìm nạp lệnh (Fetch), CPU dùng thanh ghi <strong>PC (Program Counter)</strong> để phát địa chỉ lệnh ra bộ nhớ, và nhận mã lệnh nạp vào thanh ghi <strong>IR (Instruction Register)</strong>.</li><li><strong>Đáp số: PC và IR.</strong></li></ul>"
  },
  {
    "id": "c2-2.3",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Chu trình lệnh, các thanh ghi PC/IR/SP và Ngăn nhớ",
    "exerciseCode": "Bài tập 2.3",
    "source": "Ôn tập Giữa kỳ - Câu 60",
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
    "question": "Thanh ghi nào trong CPU luôn giữ địa chỉ của lệnh tiếp theo sẽ được lấy từ bộ nhớ?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Thanh ghi Bộ đếm Chương trình (Program Counter - PC)",
      "Thanh ghi Địa chỉ Bộ nhớ (Memory Address Register - MAR)",
      "Thanh ghi Lệnh (Instruction Register - IR)",
      "Thanh ghi Dữ liệu Bộ nhớ (Memory Buffer Register - MBR)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Thanh ghi giữ địa chỉ của lệnh tiếp theo sẽ được nạp vào CPU là <strong>Bộ đếm chương trình PC (Program Counter)</strong>.</li><li><strong>Đáp án đúng: Thanh ghi Bộ đếm Chương trình (Program Counter - PC).</strong></li></ul>"
  },
  {
    "id": "c2-2.4",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Chu trình lệnh, các thanh ghi PC/IR/SP và Ngăn nhớ",
    "exerciseCode": "Bài tập 2.4",
    "source": "Đề Cuối kỳ 2022.2 - #6f0a57, Giữa kỳ 2022.2 - Đề 0006 Câu 4 & Ôn tập Cuối kỳ P2 - Câu 14",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 38,
    "printedPage": 37,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hãy chỉ ra tên của thành phần trong máy tính thực hiện chức năng chứa địa chỉ của ngăn nhớ đỉnh ngăn xếp?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Stack Pointer (SP)",
      "Base Register",
      "Program Counter (PC)",
      "Instruction Register (IR)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Con trỏ ngăn xếp <strong>Stack Pointer (SP)</strong> (trong RISC-V là thanh ghi <code>sp</code> hay <code>x2</code>) luôn chứa địa chỉ của ngăn nhớ đỉnh ngăn xếp.</li><li><strong>Đáp án đúng: Stack Pointer (SP).</strong></li></ul>"
  },
  {
    "id": "c2-2.5",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Chu trình lệnh, các thanh ghi PC/IR/SP và Ngăn nhớ",
    "exerciseCode": "Bài tập 2.5",
    "source": "Ôn tập Giữa kỳ - Câu 40",
    "examTags": [
      "GK"
    ],
    "pdfPage": 38,
    "printedPage": 37,
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
      "Giai đoạn Thực thi (Execute), nơi lệnh được xử lý bởi ALU",
      "Giai đoạn Ghi lại kết quả (Write Back), nơi kết quả được lưu vào thanh ghi hoặc bộ nhớ",
      "Giai đoạn Điều khiển ngắt (Interrupt Check), để xử lý các yêu cầu I/O"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Ngay sau khi lấy mã lệnh từ bộ nhớ vào thanh ghi IR (Fetch), CPU phải tiến hành <strong>Giải mã lệnh (Decode)</strong> để biết lệnh đó yêu cầu thao tác gì và lấy toán hạng ở đâu, rồi mới sang bước Thực thi (Execute).</li><li><strong>Đáp án đúng: Giai đoạn Giải mã (Decode).</strong></li></ul>"
  },
  {
    "id": "c2-2.6",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Chu trình lệnh, các thanh ghi PC/IR/SP và Ngăn nhớ",
    "exerciseCode": "Bài tập 2.6",
    "source": "Ôn tập Giữa kỳ - Câu 43",
    "examTags": [
      "GK"
    ],
    "pdfPage": 39,
    "printedPage": 38,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Lệnh <code>beq rs1, rs2, offset</code> là ví dụ điển hình cho loại hoạt động cơ bản nào của máy tính?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Hoạt động điều khiển luồng (Control Flow Operation)",
      "Hoạt động truyền dữ liệu (Data Transfer Operation)",
      "Hoạt động số học (Arithmetic Operation)",
      "Hoạt động I/O (I/O Operation)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Lệnh <code>beq</code> (branch if equal) kiểm tra điều kiện để thay đổi trình tự thực hiện lệnh (rẽ nhánh sang nhãn khác thay vì chạy tuần tự), nên thuộc nhóm <strong>Hoạt động điều khiển luồng (Control Flow Operation)</strong>.</li><li><strong>Đáp án đúng: Hoạt động điều khiển luồng (Control Flow Operation).</strong></li></ul>"
  },
  {
    "id": "c2-2.7",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Hệ thống Bus và Tính toán độ rộng Bus địa chỉ",
    "exerciseCode": "Bài tập 2.7",
    "source": "Ôn tập Giữa kỳ - Câu 14",
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
    "question": "Bus Địa chỉ (Address Bus) có đặc điểm nào sau đây, đặc biệt là về hướng truyền?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Là bus một chiều (unidirectional), truyền địa chỉ từ CPU/DMA đến bộ nhớ/I/O",
      "Là bus hai chiều, truyền tín hiệu điều khiển và dữ liệu",
      "Là bus hai chiều (bidirectional), truyền cả địa chỉ và dữ liệu",
      "Là bus một chiều, truyền tín hiệu điều khiển từ bộ nhớ đến CPU"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Chỉ có CPU (hoặc bộ điều khiển DMA khi được nhượng bus) mới phát địa chỉ ra để tìm ngăn nhớ hoặc cổng vào-ra. Bộ nhớ và I/O chỉ nhận địa chỉ chứ không phát ngược lại. Do đó Address Bus là <strong>bus một chiều (unidirectional)</strong>.</li><li><strong>Đáp án đúng: Là bus một chiều (unidirectional), truyền địa chỉ từ CPU/DMA đến bộ nhớ/I/O.</strong></li></ul>"
  },
  {
    "id": "c2-2.8",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Hệ thống Bus và Tính toán độ rộng Bus địa chỉ",
    "exerciseCode": "Bài tập 2.8",
    "source": "Ôn tập Giữa kỳ - Câu 56",
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
    "question": "Bus dữ liệu (Data Bus) trong kiến trúc máy tính chịu trách nhiệm truyền tải loại thông tin nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Các lệnh và dữ liệu giữa các thành phần trong hệ thống máy tính",
      "Địa chỉ bộ nhớ của dữ liệu cần truy cập",
      "Tín hiệu điều khiển để đồng bộ hóa hoạt động",
      "Chỉ riêng các số liệu tính toán giữa các thanh ghi"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Theo Slide trang 34 (Chương 2), chức năng của Bus dữ liệu gồm 2 ý: (1) Vận chuyển lệnh từ bộ nhớ đến CPU, và (2) Vận chuyển dữ liệu giữa các thành phần của máy tính với nhau.</li><li><strong>Đáp án chuẩn theo giáo trình: Các lệnh và dữ liệu giữa các thành phần trong hệ thống máy tính.</strong></li></ul>"
  },
  {
    "id": "c2-2.9",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Hệ thống Bus và Tính toán độ rộng Bus địa chỉ",
    "exerciseCode": "Bài tập 2.9",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0008, Câu 3",
    "examTags": [
      "GK"
    ],
    "pdfPage": 40,
    "printedPage": 39,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập kích thước không gian địa chỉ (ví dụ: 8 MiB hoặc 8 MB):",
    "acceptedAnswers": [
      "8 MiB",
      "8 MB",
      "8MiB",
      "8MB",
      "2^23 byte",
      "8388608 byte"
    ],
    "question": "Một máy tính có bus hệ thống gồm bus dữ liệu 32 bit và bus địa chỉ 23 bit, quản lý bộ nhớ theo byte. Hỏi không gian địa chỉ bộ nhớ có kích thước bao nhiêu byte?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "8 MiB (hoặc 8 MB = 2^23 byte)",
      "32 MiB (2^25 byte)",
      "4 MiB (2^22 byte)",
      "16 MiB (2^24 byte)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Không gian địa chỉ chỉ phụ thuộc vào độ rộng của Bus địa chỉ ($N = 23\\text{ bit}$), không phụ thuộc vào Bus dữ liệu.</li><li>Vì máy tính quản lý bộ nhớ theo từng byte nên kích thước không gian địa chỉ là: $$2^{23}\\text{ byte} = 2^3 \\times 2^{20}\\text{ byte} = 8\\text{ MiB (hoặc 8 MB = 8 388 608 byte)}$$</li><li><strong>Đáp số: 2^23 byte = 8 MiB (hoặc 8 MB).</strong></li></ul>"
  },
  {
    "id": "c2-2.10",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Hệ thống Bus và Tính toán độ rộng Bus địa chỉ",
    "exerciseCode": "Bài tập 2.10",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0006, Câu 3",
    "examTags": [
      "GK"
    ],
    "pdfPage": 41,
    "printedPage": 40,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập độ rộng bus địa chỉ theo bit (ví dụ: 10):",
    "acceptedAnswers": [
      "10",
      "10 bit",
      "10bit"
    ],
    "question": "Nếu như <code>0x3FF</code> là địa chỉ bộ nhớ lớn nhất mà CPU có thể quản lý được, thì bus địa chỉ có độ rộng bằng bao nhiêu bit?",
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
    "explanation": "<ul><li>Đổi địa chỉ lớn nhất <code>0x3FF</code> sang nhị phân: $\\text{0x3FF} = 0011\\;1111\\;1111_{(2)} = 11\\;1111\\;1111_{(2)}$.</li><li>Đếm số lượng bit 1: có tất cả $2 + 4 + 4 = 10\\text{ bit 1}$ (tương ứng giá trị $2^{10} - 1 = 1023$).</li><li>Như vậy địa chỉ chạy từ <code>0x000</code> đến <code>0x3FF</code> gồm $2^{10} = 1024\\text{ địa chỉ}$, suy ra độ rộng Bus địa chỉ là <strong>10 bit</strong>.</li><li><strong>Đáp số: 10 bit.</strong></li></ul>"
  },
  {
    "id": "c2-2.11",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Hệ thống Bus và Tính toán độ rộng Bus địa chỉ",
    "exerciseCode": "Bài tập 2.11",
    "source": "Đề Cuối kỳ 2020.2 & Ôn tập Cuối kỳ P2 - Câu 28",
    "examTags": [
      "CK"
    ],
    "pdfPage": 41,
    "printedPage": 40,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số bit địa chỉ (ví dụ: 31):",
    "acceptedAnswers": [
      "31",
      "31 bit",
      "31bit"
    ],
    "question": "Cho biết không gian địa chỉ bộ nhớ là $2\\text{ GiB}$, hãy cho biết độ rộng bus địa chỉ tương ứng của máy tính là bao nhiêu bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "31 bit",
      "30 bit",
      "32 bit",
      "21 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Ta có $1\\text{ GiB} = 2^{30}\\text{ byte}$.</li><li>Suy ra $2\\text{ GiB} = 2^1 \\times 2^{30}\\text{ byte} = 2^{31}\\text{ byte}$.</li><li>Để đánh địa chỉ cho $2^{31}$ byte nhớ, bus địa chỉ cần có độ rộng là <strong>31 bit</strong>.</li><li><strong>Đáp án đúng: 31 bit.</strong></li></ul>"
  },
  {
    "id": "c2-2.12",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Hệ thống Bus và Tính toán độ rộng Bus địa chỉ",
    "exerciseCode": "Bài tập 2.12",
    "source": "Đề Cuối kỳ 2022.2 - #bb55ef & Ôn tập Cuối kỳ P2 - Câu 36",
    "examTags": [
      "CK"
    ],
    "pdfPage": 42,
    "printedPage": 41,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập độ rộng tối thiểu theo bit (ví dụ: 33):",
    "acceptedAnswers": [
      "33",
      "33 bit",
      "33bit"
    ],
    "question": "Một hệ thống máy tính gồm có $4\\text{ MiB}$ bộ nhớ cache, $8\\text{ GiB}$ bộ nhớ chính, $1\\text{ TiB}$ bộ nhớ thể rắn SSD. Hỏi bus địa chỉ của hệ thống máy tính cần có độ rộng tối thiểu bao nhiêu bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "33 bit",
      "41 bit",
      "32 bit",
      "30 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li><strong>Phân tích bản chất vật lý (chuẩn SoICT Bách Khoa):</strong><br>• Cache là bộ nhớ đệm trong suốt, tự động ánh xạ từ RAM nên không đánh địa chỉ riêng trên Bus.<br>• Ổ SSD là bộ nhớ ngoài (I/O device), giao tiếp qua cổng I/O theo khối (block), không được CPU đánh địa chỉ trực tiếp từng byte trên Bus hệ thống.<br>• Bus địa chỉ hệ thống chỉ dùng để đánh địa chỉ trực tiếp cho từng byte của <strong>Bộ nhớ chính (RAM) 8 GiB</strong>:<br>$$8\\text{ GiB} = 2^3 \\times 2^{30}\\text{ byte} = 2^{33}\\text{ byte} \\implies N = 33\\text{ bit}$$</li><li><em>Lưu ý:</em> Trên hệ thống thi daotao.ai của trường, đáp án chuẩn là <strong>33</strong> (trong file Forms P2 sinh viên tự làm có người hiểu nhầm cộng SSD 1TiB = 2^40 ra 41). Đi thi thật nhớ điền 33!</li><li><strong>Đáp số: 33 bit.</strong></li></ul>"
  },
  {
    "id": "c2-2.13",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Hệ thống Bus và Tính toán độ rộng Bus địa chỉ",
    "exerciseCode": "Bài tập 2.13",
    "source": "Ôn tập Cuối kỳ P2 - Câu 16",
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
    "question": "Không gian địa chỉ bộ nhớ dùng chung (Memory-mapped I/O) dùng để đánh địa chỉ cho các đối tượng nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Các ngăn nhớ và các cổng vào-ra",
      "Các ngăn nhớ và các thiết bị ngoại vi",
      "Các ngăn nhớ và mô-đun vào-ra",
      "Chỉ riêng các ngăn nhớ của bộ nhớ chính"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Theo Slide trang 31 (Chương 3) và trang 33 (Chương 2): Không gian địa chỉ bộ nhớ dùng chung đánh địa chỉ trực tiếp cho <strong>các ngăn nhớ (trong bộ nhớ chính) và các cổng vào-ra (trên mô-đun vào-ra)</strong>. Thiết bị ngoại vi nối vào cổng vào-ra chứ không trực tiếp mang địa chỉ bộ nhớ.</li><li><strong>Đáp án đúng: Các ngăn nhớ và các cổng vào-ra.</strong></li></ul>"
  },
  {
    "id": "c2-2.14",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Hệ thống Bus và Tính toán độ rộng Bus địa chỉ",
    "exerciseCode": "Bài tập 2.14",
    "source": "Ôn tập Giữa kỳ - Câu 27",
    "examTags": [
      "GK"
    ],
    "pdfPage": 43,
    "printedPage": 42,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cổng truy cập (Port) của thiết bị Vào/Ra (I/O) được ánh xạ vào không gian địa chỉ bộ nhớ (Memory-Mapped I/O) có ý nghĩa gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Thiết bị I/O chỉ có thể được truy cập thông qua các lệnh LOAD/STORE, giống như truy cập bộ nhớ",
      "Thiết bị I/O có bus dữ liệu riêng biệt với bộ nhớ chính",
      "Thiết bị I/O có thể tự truy cập bộ nhớ mà không cần sự can thiệp của CPU",
      "CPU cần một tập lệnh I/O đặc biệt (ví dụ: IN/OUT) để giao tiếp với thiết bị"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Trong cơ chế vào-ra ánh xạ bộ nhớ (Memory-Mapped I/O) mà RISC-V sử dụng, các cổng vào-ra được coi như các ngăn nhớ đặc biệt. CPU không có lệnh IN/OUT riêng mà dùng chính các lệnh đọc/ghi bộ nhớ (<code>lw, sw, lb, sb</code>) để giao tiếp với thiết bị I/O.</li><li><strong>Đáp án đúng: Thiết bị I/O chỉ có thể được truy cập thông qua các lệnh LOAD/STORE.</strong></li></ul>"
  },
  {
    "id": "c2-2.15a",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Hệ thống Bus và Tính toán độ rộng Bus địa chỉ",
    "exerciseCode": "Bài tập 2.15a",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B3, Câu 4.1",
    "examTags": [
      "CK"
    ],
    "pdfPage": 44,
    "printedPage": 43,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập dung lượng bộ nhớ (ví dụ: 64 GiB):",
    "acceptedAnswers": [
      "64 GiB",
      "64GiB",
      "64 GB",
      "2^36 byte",
      "64GB"
    ],
    "question": "Máy tính dùng 36 bit địa chỉ để đánh địa chỉ cho bộ nhớ theo byte, 16 bit để đánh địa chỉ cho cổng vào-ra riêng biệt; bus dữ liệu là 64 bit.<br><strong>Hãy cho biết số byte nhớ tối đa được đánh địa chỉ và địa chỉ đầu/cuối dưới dạng Hexa?</strong>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "64 GiB; Địa chỉ: 0x000000000 đến 0xFFFFFFFFF (9 chữ số Hexa)",
      "36 GiB; Địa chỉ: 0x000000000 đến 0x8FFFFFFFF",
      "16 GiB; Địa chỉ: 0x00000000 đến 0xFFFFFFFF (8 chữ số Hexa)",
      "64 GiB; Địa chỉ: 0x00000000 đến 0xFFFFFFFF"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Số byte nhớ tối đa: $2^{36}\\text{ byte} = 2^6 \\times 2^{30}\\text{ byte} = 64\\text{ GiB}$.</li><li>Vì 36 bit chia cho 4 được đúng 9 chữ số Hexa, nên:<br>• Địa chỉ đầu (36 bit 0): <code>0x000000000</code> (9 chữ số 0).<br>• Địa chỉ cuối (36 bit 1): <code>0xFFFFFFFFF</code> (9 chữ số F).</li><li><strong>Đáp án đúng: 64 GiB; 0x000000000 đến 0xFFFFFFFFF.</strong></li></ul>"
  },
  {
    "id": "c2-2.15b",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Hệ thống Bus và Tính toán độ rộng Bus địa chỉ",
    "exerciseCode": "Bài tập 2.15b",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B3, Câu 4.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 44,
    "printedPage": 43,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số cổng vào-ra tối đa (ví dụ: 65536):",
    "acceptedAnswers": [
      "65536",
      "65 536",
      "64K cổng",
      "2^16",
      "65536 cổng"
    ],
    "question": "Với dữ kiện Bài 2.15 (16 bit để đánh địa chỉ cho cổng vào-ra riêng biệt), <strong>hãy cho biết số cổng vào-ra tối đa được đánh địa chỉ và địa chỉ cổng đầu/cuối dưới dạng Hexa?</strong>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "65 536 cổng (64K cổng); Địa chỉ: 0x0000 đến 0xFFFF",
      "16 384 cổng; Địa chỉ: 0x0000 đến 0x3FFF",
      "32 768 cổng; Địa chỉ: 0x0000 đến 0x7FFF",
      "65 536 cổng; Địa chỉ: 0x00000 đến 0xFFFFF"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Số cổng vào-ra tối đa: $2^{16} = 65\\,536\\text{ cổng}$ (tức $64\\text{K cổng}$).</li><li>Vì 16 bit ứng với 4 chữ số Hexa, nên:<br>• Địa chỉ cổng đầu: <code>0x0000</code>.<br>• Địa chỉ cổng cuối: <code>0xFFFF</code>.</li><li><strong>Đáp án đúng: 65 536 cổng; 0x0000 đến 0xFFFF.</strong></li></ul>"
  },
  {
    "id": "c2-2.16",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Bài toán xác định Băng nhớ vật lý (Memory Banks)",
    "exerciseCode": "Bài tập 2.16",
    "source": "Đề Cuối kỳ 2022.2 - #38a80d, 2024.1 - #cbb2f4 & Ôn tập Cuối kỳ P2 - Câu 32",
    "examTags": [
      "CK"
    ],
    "pdfPage": 45,
    "printedPage": 44,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên băng nhớ (ví dụ: Băng 3 hoặc 3):",
    "acceptedAnswers": [
      "Băng 3",
      "3",
      "Bang 3",
      "băng 3"
    ],
    "question": "Cho một máy tính có bus địa chỉ 32 bit và bus dữ liệu 32 bit. Bộ nhớ chính được đánh địa chỉ theo byte và được thiết kế theo kiểu băng nhớ đan xen. Hãy cho biết byte nhớ có địa chỉ <code>0x10011647</code> nằm trên băng nhớ nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Băng 3",
      "Băng 1",
      "Băng 2",
      "Băng 0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li><strong>Bước 1:</strong> Bus dữ liệu là $32\\text{ bit} = 4\\text{ byte}$, nên bộ nhớ chia thành $K = 4$ băng nhớ (đánh số Băng 0, 1, 2, 3).</li><li><strong>Bước 2:</strong> Lấy chữ số Hexa cuối cùng của địa chỉ <code>0x10011647</code> là chữ số <strong>7</strong>.</li><li><strong>Bước 3:</strong> Thực hiện phép chia lấy dư cho 4: $$7 \\bmod 4 = 3$$</li><li>Vậy byte nhớ này nằm trên <strong>Băng 3</strong>.</li></ol><p><strong>Đáp án đúng: B (Băng 3).</strong></p>"
  },
  {
    "id": "c2-2.17a",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Bài toán xác định Băng nhớ vật lý (Memory Banks)",
    "exerciseCode": "Bài tập 2.17a",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B3, Câu 4.3",
    "examTags": [
      "CK"
    ],
    "pdfPage": 45,
    "printedPage": 44,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thứ tự băng nhớ (ví dụ: 1 hoặc Băng 1):",
    "acceptedAnswers": [
      "1",
      "Băng 1",
      "Bang 1",
      "băng 1"
    ],
    "question": "Máy tính có bus dữ liệu kết nối bộ nhớ chính là 64 bit (bộ nhớ đánh địa chỉ theo byte đan xen). Hãy cho biết byte nhớ có địa chỉ <code>0x0FE12C39</code> được bố trí ở băng nhớ nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Băng 1",
      "Băng 3",
      "Băng 5",
      "Băng 7"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Bus dữ liệu $64\\text{ bit} = 8\\text{ byte} \\implies K = 8$ băng nhớ (Băng 0 đến 7).</li><li>Chữ số Hexa cuối cùng của <code>0x0FE12C39</code> là <strong>9</strong>.</li><li>Phép chia lấy dư cho 8: $$9 \\bmod 8 = 1 \\implies \\text{Nằm ở Băng 1}$$</li><li><strong>Đáp số: Băng 1.</strong></li></ul>"
  },
  {
    "id": "c2-2.17b",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Bài toán xác định Băng nhớ vật lý (Memory Banks)",
    "exerciseCode": "Bài tập 2.17b",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B3, Câu 4.3",
    "examTags": [
      "CK"
    ],
    "pdfPage": 46,
    "printedPage": 45,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số thứ tự băng nhớ (ví dụ: 5 hoặc Băng 5):",
    "acceptedAnswers": [
      "5",
      "Băng 5",
      "Bang 5",
      "băng 5"
    ],
    "question": "Máy tính có bus dữ liệu 64 bit (8 băng nhớ đan xen theo byte). Hãy cho biết byte nhớ có địa chỉ <code>0x10ABCD05</code> được bố trí ở băng nhớ nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Băng 5",
      "Băng 1",
      "Băng 0",
      "Băng 4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Chữ số Hexa cuối cùng của <code>0x10ABCD05</code> là <strong>5</strong>.</li><li>Phép chia lấy dư cho 8: $$5 \\bmod 8 = 5 \\implies \\text{Nằm ở Băng 5}$$</li><li><strong>Đáp số: Băng 5.</strong></li></ul>"
  },
  {
    "id": "c2-2.18a",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Bài toán xác định Băng nhớ vật lý (Memory Banks)",
    "exerciseCode": "Bài tập 2.18a",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B1, Câu 4 & Ôn tập Cuối kỳ P2 - Câu 26",
    "examTags": [
      "CK"
    ],
    "pdfPage": 46,
    "printedPage": 45,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập địa chỉ Hexa (ví dụ: 0x000A504C):",
    "acceptedAnswers": [
      "0x000A504C",
      "0x000a504c",
      "000A504C",
      "000a504c"
    ],
    "question": "Trên máy tính có bus địa chỉ 32 bit, bus dữ liệu 64 bit. Mảng 2 chiều B có kích thước $5 \\times 7$ (5 hàng, 7 cột) gồm các phần tử 32 bit (4 byte), lưu trữ theo hàng từ địa chỉ cơ sở <code>0x000A5020</code>. Nếu chỉ số hàng và cột tính từ 0 ($i = 0..4, j = 0..6$), <strong>cho biết địa chỉ bắt đầu của phần tử B[1, 4]?</strong>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x000A504C",
      "0x000A5048",
      "0x000A5034",
      "0x000A5050"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li>Mảng có 7 cột (mỗi hàng có 7 phần tử), mỗi phần tử 32 bit = 4 byte.</li><li>Xét phần tử $B[1, 4]$ ($i = 1, j = 4$):<br>• Số phần tử đứng trước: $1 \\times 7 + 4 = 11\\text{ phần tử}$.<br>• Độ lệch địa chỉ (Offset): $11 \\times 4\\text{ byte} = 44\\text{ byte} = \\text{0x2C byte}$.<br>• Địa chỉ của $B[1, 4]$: $\\text{0x000A5020} + \\text{0x2C} = \\mathbf{\\text{0x000A504C}}$.</li></ol><p><strong>Đáp số: 0x000A504C.</strong></p>"
  },
  {
    "id": "c2-2.18b",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Bài toán xác định Băng nhớ vật lý (Memory Banks)",
    "exerciseCode": "Bài tập 2.18b",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B1, Câu 4 & Ôn tập Cuối kỳ P2 - Câu 44",
    "examTags": [
      "CK"
    ],
    "pdfPage": 47,
    "printedPage": 46,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập danh sách băng nhớ cách nhau dấu phẩy (ví dụ: 4, 5, 6, 7):",
    "acceptedAnswers": [
      "4, 5, 6, 7",
      "4,5,6,7",
      "Băng 4, 5, 6, 7"
    ],
    "question": "Với dữ kiện Bài 2.18 (bus dữ liệu 64 bit &rarr; 8 băng nhớ), phần tử $B[1, 4]$ (kích thước 4 byte, bắt đầu từ địa chỉ <code>0x000A504C</code>) <strong>nằm trên các băng nhớ nào của bộ nhớ vật lý?</strong>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Băng 4, 5, 6, 7",
      "Băng 0, 1, 2, 3",
      "Băng 2, 3, 4, 5",
      "Băng 1, 2, 3, 4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li>Phần tử $B[1, 4]$ bắt đầu tại <code>0x000A504C</code>, chiếm 4 byte liên tiếp tại các địa chỉ kết thúc bằng: <strong>C (12), D (13), E (14), F (15)</strong>.</li><li>Chia lấy dư lần lượt cho 8 (vì có 8 băng):<br>• $12 \\bmod 8 = 4$<br>• $13 \\bmod 8 = 5$<br>• $14 \\bmod 8 = 6$<br>• $15 \\bmod 8 = 7$</li><li>Vậy phần tử này nằm trên các băng nhớ: <strong>4, 5, 6, 7</strong>.</li></ol><p><strong>Đáp số: Băng 4, 5, 6, 7.</strong></p>"
  },
  {
    "id": "c2-2.18c",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Bài toán xác định Băng nhớ vật lý (Memory Banks)",
    "exerciseCode": "Bài tập 2.18c",
    "source": "Ôn tập Cuối kỳ P2 - Câu 44",
    "examTags": [
      "CK"
    ],
    "pdfPage": 47,
    "printedPage": 46,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập danh sách băng nhớ cách nhau dấu phẩy (ví dụ: 0, 1, 2, 3):",
    "acceptedAnswers": [
      "0, 1, 2, 3",
      "0,1,2,3",
      "Băng 0, 1, 2, 3"
    ],
    "question": "Với dữ kiện Bài 2.18 (bus dữ liệu 64 bit &rarr; 8 băng nhớ), phần tử $B[1, 5]$ (đứng ngay sau $B[1, 4]$, có địa chỉ bắt đầu là <code>0x000A5050</code>) <strong>nằm trên các băng nhớ nào của bộ nhớ vật lý?</strong>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Băng 0, 1, 2, 3",
      "Băng 4, 5, 6, 7",
      "Băng 1, 2, 3, 4",
      "Băng 5, 6, 7, 0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ol><li>Phần tử $B[1, 5]$ có địa chỉ bắt đầu <code>0x000A5050</code>, chiếm 4 byte liên tiếp tại các địa chỉ kết thúc bằng: <strong>0, 1, 2, 3</strong>.</li><li>Chia lấy dư cho 8:<br>• $0 \\bmod 8 = 0$<br>• $1 \\bmod 8 = 1$<br>• $2 \\bmod 8 = 2$<br>• $3 \\bmod 8 = 3$</li><li>Vậy phần tử $B[1, 5]$ nằm trên các băng nhớ: <strong>0, 1, 2, 3</strong>.</li></ol><p><strong>Đáp số: Băng 0, 1, 2, 3.</strong></p>"
  },
  {
    "id": "c2-2.19",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Các phương pháp Vào-Ra (Polling, Interrupt, DMA) và Thiết bị lưu trữ",
    "exerciseCode": "Bài tập 2.19",
    "source": "Đề Cuối kỳ 2022.2 - #169b6e & Ôn tập Giữa kỳ - Câu 21",
    "examTags": [
      "CK",
      "GK"
    ],
    "pdfPage": 47,
    "printedPage": 46,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với phương pháp Vào-ra bằng chương trình (Programmed I/O), thành phần nào của máy tính trực tiếp điều khiển vào-ra?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "CPU",
      "Thiết bị vào-ra",
      "DMAC",
      "RAM"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Trong phương pháp Vào-ra bằng chương trình, <strong>CPU</strong> phải trực tiếp thực hiện các lệnh kiểm tra trạng thái và đọc/ghi dữ liệu với cổng vào-ra.</li><li><strong>Đáp án đúng: B (CPU).</strong></li></ul>"
  },
  {
    "id": "c2-2.20",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Các phương pháp Vào-Ra (Polling, Interrupt, DMA) và Thiết bị lưu trữ",
    "exerciseCode": "Bài tập 2.20",
    "source": "Ôn tập Cuối kỳ P2 - Câu 22",
    "examTags": [
      "CK"
    ],
    "pdfPage": 48,
    "printedPage": 47,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong phương pháp vào/ra bằng chương trình (Programmed I/O), CPU dành phần lớn thời gian để làm gì khi đợi thiết bị ngoại vi sẵn sàng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Kiểm tra trạng thái thiết bị trong một vòng lặp (Polling)",
      "Giải phóng Bus hệ thống cho các thiết bị khác",
      "Thực hiện các tiến trình khác của người dùng",
      "Tự động chuyển sang chế độ nghỉ (Sleep mode)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Vì thiết bị ngoại vi rất chậm so với CPU, trong Programmed I/O, CPU phải liên tục đọc thanh ghi trạng thái của thiết bị trong một vòng lặp (gọi là <strong>Polling - hỏi vòng/thăm dò</strong>) cho đến khi thiết bị báo sẵn sàng.</li><li><strong>Đáp án đúng: Kiểm tra trạng thái thiết bị trong một vòng lặp (Polling).</strong></li></ul>"
  },
  {
    "id": "c2-2.21",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Các phương pháp Vào-Ra (Polling, Interrupt, DMA) và Thiết bị lưu trữ",
    "exerciseCode": "Bài tập 2.21",
    "source": "Ôn tập Cuối kỳ P2 - Câu 27",
    "examTags": [
      "CK"
    ],
    "pdfPage": 48,
    "printedPage": 47,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thứ tự nào sau đây phản ánh đúng sự phát triển về hiệu suất (từ thấp đến cao) đối với việc sử dụng CPU trong I/O?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Programmed I/O &rarr; Interrupt-driven &rarr; DMA",
      "Interrupt-driven &rarr; Programmed I/O &rarr; DMA",
      "DMA &rarr; Interrupt-driven &rarr; Programmed I/O",
      "Programmed I/O &rarr; DMA &rarr; Interrupt-driven"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>Programmed I/O làm CPU bị bận 100% thời gian chờ đợi (hiệu suất thấp nhất) &rarr; Interrupt-driven giải phóng CPU trong lúc chờ đợi &rarr; DMA giải phóng CPU cả trong lúc truyền khối dữ liệu (hiệu suất cao nhất).</li><li><strong>Đáp án đúng: Programmed I/O &rarr; Interrupt-driven &rarr; DMA.</strong></li></ul>"
  },
  {
    "id": "c2-2.22",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Các phương pháp Vào-Ra (Polling, Interrupt, DMA) và Thiết bị lưu trữ",
    "exerciseCode": "Bài tập 2.22",
    "source": "Ôn tập Cuối kỳ P2 - Câu 62",
    "examTags": [
      "CK"
    ],
    "pdfPage": 49,
    "printedPage": 48,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Tại sao phương pháp DMA (Direct Memory Access) lại hiệu quả hơn khi truyền các khối dữ liệu lớn?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Vì dữ liệu được truyền trực tiếp giữa thiết bị và bộ nhớ mà không đi qua CPU",
      "Vì nó không cần sử dụng bộ nhớ chính (RAM)",
      "Vì DMA sử dụng phần mềm thay vì phần cứng",
      "Vì nó cho phép CPU thực hiện lệnh truyền dữ liệu nhanh hơn"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>DMA sử dụng bộ điều khiển phần cứng DMAC để truyền dữ liệu trực tiếp giữa mô-đun vào-ra và bộ nhớ chính (RAM) mà không cần CPU phải can thiệp vào từng từ dữ liệu.</li><li><strong>Đáp án đúng: Vì dữ liệu được truyền trực tiếp giữa thiết bị và bộ nhớ mà không đi qua CPU.</strong></li></ul>"
  },
  {
    "id": "c2-2.23a",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Các phương pháp Vào-Ra (Polling, Interrupt, DMA) và Thiết bị lưu trữ",
    "exerciseCode": "Bài tập 2.23a",
    "source": "Ôn tập Cuối kỳ P2 - Câu 45",
    "examTags": [
      "CK"
    ],
    "pdfPage": 49,
    "printedPage": 48,
    "relatedTheoryId": "2.1.2",
    "questionType": "multiple",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Bộ điều khiển DMA (DMAC) gồm những thành phần nào dưới đây?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Logic điều khiển, Bộ đếm dữ liệu (Data counter), Thanh ghi địa chỉ và Thanh ghi dữ liệu",
      "Thanh ghi con trỏ lệnh (PC), ALU và Bộ đếm dữ liệu",
      "Thanh ghi con trỏ lệnh (PC), Thanh ghi cờ trạng thái và Bộ giải mã lệnh",
      "Chỉ gồm Thanh ghi dữ liệu và Thanh ghi con trỏ lệnh (PC)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li>DMAC không thực thi chương trình nên <strong>không có Thanh ghi con trỏ lệnh (PC)</strong>.</li><li>DMAC gồm 4 thành phần chính: <strong>Logic điều khiển, Bộ đếm dữ liệu (Data counter), Thanh ghi địa chỉ, và Thanh ghi dữ liệu</strong>.</li></ul>"
  },
  {
    "id": "c2-2.23b",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Các phương pháp Vào-Ra (Polling, Interrupt, DMA) và Thiết bị lưu trữ",
    "exerciseCode": "Bài tập 2.23b",
    "source": "Ôn tập Cuối kỳ P2 - Câu 57",
    "examTags": [
      "CK"
    ],
    "pdfPage": 49,
    "printedPage": 48,
    "relatedTheoryId": "2.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cách thực hiện DMA nào dưới đây là tối ưu và khó thực hiện hơn cả?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "DMA trong suốt (Transparent DMA)",
      "DMA lấy chu kỳ (Cycle stealing)",
      "DMA truyền theo khối (Burst transfer)",
      "Cả ba phương pháp tương tự nhau"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li><strong>DMA trong suốt (Transparent DMA):</strong> Chỉ tranh thủ sử dụng Bus hệ thống vào những chu kỳ mà CPU không dùng đến Bus (CPU đang xử lý nội bộ), nên không làm chậm CPU chút nào (tối ưu nhất), nhưng mạch đồng bộ phần cứng khó thiết kế nhất.</li><li><strong>Đáp án đúng: DMA trong suốt.</strong></li></ul>"
  },
  {
    "id": "c2-2.24",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Các phương pháp Vào-Ra (Polling, Interrupt, DMA) và Thiết bị lưu trữ",
    "exerciseCode": "Bài tập 2.24",
    "source": "Ôn tập Cuối kỳ P2 - Câu 54",
    "examTags": [
      "CK"
    ],
    "pdfPage": 50,
    "printedPage": 49,
    "relatedTheoryId": "2.1.2",
    "questionType": "multiple",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Những khẳng định nào dưới đây đúng về PIC? (Chọn nhiều đáp án)",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Trong PIC, yêu cầu ngắt có mức ưu tiên cao nhất sẽ không thể bị cấm và do đó được gửi tới CPU đầu tiên",
      "Các đường vào yêu cầu ngắt của PIC có quy định mức ưu tiên",
      "Đây là 1 phương pháp nối ghép ngắt (cụ thể là hỏi vòng bằng phần cứng)",
      "PIC là viết tắt của Programmable Interrupt Controller"
    ],
    "correctIndex": 1,
    "correctIndices": [
      1,
      3
    ],
    "explanation": "<ul><li><strong>PIC là viết tắt của Programmable Interrupt Controller</strong> (Bộ điều khiển ngắt khả trình).</li><li><strong>Các đường vào yêu cầu ngắt (IR0...IR7) của PIC có quy định mức ưu tiên.</strong></li><li>Ý A sai vì mọi ngắt qua PIC đều nối vào chân INTR của CPU nên đều là ngắt có thể bị che (cấm). Ý C sai vì PIC là phương pháp ngắt ưu tiên phần cứng độc lập, không phải hỏi vòng (daisy chain/polling).</li><li><strong>Đáp án đúng: Chọn B và D.</strong></li></ul>"
  },
  {
    "id": "c2-2.25a",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Các phương pháp Vào-Ra (Polling, Interrupt, DMA) và Thiết bị lưu trữ",
    "exerciseCode": "Bài tập 2.25a",
    "source": "Ôn tập Cuối kỳ P2 - Câu 51",
    "examTags": [
      "CK"
    ],
    "pdfPage": 50,
    "printedPage": 49,
    "relatedTheoryId": "2.1.1",
    "questionType": "multiple",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Những đặc điểm nào sau đây là ưu điểm của ổ cứng bán dẫn SSD so với ổ đĩa từ HDD? (Chọn nhiều đáp án)",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Giá thành trên mỗi đơn vị lưu trữ (GB) rẻ hơn",
      "Không gây tiếng ồn khi hoạt động",
      "Tốc độ truy xuất dữ liệu nhanh hơn và độ trễ thấp hơn",
      "Khả năng chống sốc vật lý tốt hơn"
    ],
    "correctIndex": 1,
    "correctIndices": [
      1,
      2,
      3
    ],
    "explanation": "<ul><li>SSD dùng chip nhớ bán dẫn Flash (không có đĩa quay cơ học như HDD) nên có 3 ưu điểm vượt trội: <strong>Không gây tiếng ồn (2), Tốc độ truy xuất nhanh và độ trễ thấp (3), Chống sốc vật lý tốt hơn (4)</strong>.</li><li>Nhược điểm của SSD là giá thành trên mỗi GB đắt hơn HDD (nên ý 1 sai).</li><li><strong>Đáp án đúng: Chọn 2, 3 và 4.</strong></li></ul>"
  },
  {
    "id": "c2-2.25b",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Các phương pháp Vào-Ra (Polling, Interrupt, DMA) và Thiết bị lưu trữ",
    "exerciseCode": "Bài tập 2.25b",
    "source": "Ôn tập Cuối kỳ P2 - Câu 24",
    "examTags": [
      "CK"
    ],
    "pdfPage": 51,
    "printedPage": 50,
    "relatedTheoryId": "2.1.1",
    "questionType": "multiple",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong thực tế hiện nay, nhận định nào sau đây là CHÍNH XÁC về việc sử dụng ổ cứng HDD và ổ thể rắn SSD?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "HDD vẫn được sử dụng phổ biến trong Server lưu trữ (NAS) / Data Center nhờ dung lượng lớn và giá thành rẻ hơn SSD",
      "Camera giám sát 24/7 luôn ưu tiên dùng SSD vì chip nhớ SSD có số lần ghi xóa vô hạn",
      "SSD không thể dùng làm ổ cài hệ điều hành trên Laptop vì tốc độ khởi động chậm hơn HDD cơ học",
      "Các thiết bị Smartphone và Tablet hiện nay đều sử dụng ổ đĩa từ tính HDD thu nhỏ"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<ul><li><strong>Nhận định đúng:</strong> HDD vẫn có ưu thế lớn trong lưu trữ dữ liệu trung tâm nhờ chi phí trên mỗi GB thấp.</li><li>Chip nhớ SSD có giới hạn chu kỳ ghi/xóa nên camera giám sát 24/7 ưu tiên HDD chuyên dụng (WD Purple); smartphone dùng bộ nhớ Flash NAND bán dẫn chứ không dùng HDD.</li></ul>"
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
