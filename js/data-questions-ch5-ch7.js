// Kho lưu trữ câu hỏi & lý thuyết Chương 5 (Bộ xử lý), Chương 6 (Bộ nhớ máy tính) và Chương 7 (Hệ thống vào-ra)
// Tách khỏi pool hoạt động chính (KTMT_QUESTIONS) để giữ ôn tập Giữa kỳ đúng phạm vi Chương 1-4, không mất dữ liệu
(function(root) {
  root.KTMT_QUESTIONS_CH5_CH7 = [
  {
    "id": "c2-2.5b",
    "chapter": 2,
    "groupId": "2.2.2",
    "groupTitle": "Nhóm 2: Chu trình lệnh, các thanh ghi PC / IR và Hoạt động Ngắt",
    "exerciseCode": "Bài tập 2.5b",
    "source": "Ôn tập 2025.2 - Câu 15 | cuối kì 20222 (#169b6e); cuối kì 20242 (#169b6e); ôn tập cuối kì 20252 (P1-15)",
    "examTags": [
      "CK",
      "OT"
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
    "explanation": "<p>Trong phương pháp vào-ra bằng chương trình (hoặc bằng ngắt), <strong>CPU</strong> trực tiếp điều khiển trao đổi dữ liệu với mô-đun vào-ra (không qua DMAC).</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "c2-2.10b",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Bài tập 2.10 (Ý 4.2)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B3, Câu 4.2 | cuối kì 20212 (B3-4)",
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
    "explanation": "<p>$2^{16} = 65\\,536$ cổng (64K cổng). Vì $16 / 4 = 4$ chữ số Hexa nên địa chỉ chạy từ <code>0x0000</code> đến <code>0xFFFF</code>.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_1-1",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Cấu trúc CPU, Bộ nhớ và Hệ thống vào-ra",
    "exerciseCode": "Đề thi 2.2.1.1",
    "source": "cuối kì 20202 (Câu 16); cuối kì 20211 (Câu 16)",
    "examTags": [
      "CK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hãy tiến hành sắp xếp có tổ chức cấu trúc phân cấp các thành phần bộ nhớ trong kiến trúc máy tính hiện đại dựa theo thứ tự dung lượng lưu trữ tăng dần (từ nhỏ nhất đến lớn nhất):",
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
    "explanation": "<p>Theo tháp phân cấp bộ nhớ, từ đỉnh xuống đáy tốc độ giảm dần và <strong>dung lượng tăng dần</strong>: Thanh ghi &rarr; Cache L1 &rarr; Cache L2 &rarr; Cache L3 &rarr; Bộ nhớ chính (RAM) &rarr; Bộ nhớ ngoài (SSD/HDD).</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_1-2",
    "chapter": 2,
    "groupId": "2.2.1",
    "groupTitle": "Nhóm 1: Cấu trúc CPU, Bộ nhớ và Hệ thống vào-ra",
    "exerciseCode": "Đề thi 2.2.1.2",
    "source": "cuối kì 20222 (#ef5037); cuối kì 20241 (#018513); cuối kì 20242 (#ef5037); ôn tập cuối kì 20252 (P1-67)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Hãy chỉ ra đâu là cấu hình bộ nhớ phù hợp cho máy tính PC ?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Cache L1: 64 KB, Cache L2: 256 KB, Cache L3: 8 MB, RAM: 8 GB, SSD: 512 GB",
      "Cache L1: 64 KB, Cache L2: 256 KB, Cache L3: 16 GB, RAM: 2 TB, SSD: 1 TB",
      "Cache L1: 64 KB, Cache L2: 256 GB, Cache L3: 8 MB, RAM: 8 GB, SSD: 512 GB",
      "Cache L1: 16 MB, Cache L2: 256 KB, Cache L3: 16 MB, RAM: 8 GB, SSD: 1 TB"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Cấu hình bộ nhớ chuẩn của một máy tính PC phải tuân theo trật tự dung lượng tăng dần hợp lý: $L1 &lt; L2 &lt; L3 &lt; \\text{RAM} &lt; \\text{SSD}$ (ví dụ: L1 $64\\text{ KB}$, L2 $256\\text{ KB}$, L3 $8\\text{ MB}$, RAM $8\\text{ GB}$, SSD $512\\text{ GB}$).</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_3-1",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Đề thi 2.2.3.1",
    "source": "cuối kì 20212 (B1-5)",
    "examTags": [
      "CK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khi thiết kế mô-đun nhớ RAM dung lượng $64\\text{K} \\times 16\\text{-bit}$ từ các chip nhớ SRAM dung lượng $32\\text{K} \\times 8\\text{-bit}$, phương án ghép chip và chọn chip nào sau đây chính xác?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Dùng 4 chip: ghép song song 2 chip theo chiều rộng (8 lên 16 bit) và 2 hàng nối tiếp theo chiều sâu (32K lên 64K), dùng đường địa chỉ A15 (và cổng NOT) chọn chip (CS)",
      "Dùng 4 chip ghép song song toàn bộ theo chiều rộng, dùng A15 và A16 qua bộ giải mã 2-sang-4 để chọn chip",
      "Dùng 2 chip ghép nối tiếp theo chiều sâu, dùng đường địa chỉ A14 chọn chip (CS)",
      "Dùng 8 chip: 4 chip theo chiều rộng và 2 hàng theo chiều sâu, dùng A14–A15 để chọn chip"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số chip cần dùng $= (64\\text{K}/32\\text{K}) \\times (16/8) = 2 \\times 2 = 4$ chip.<br>Chip $32\\text{K} = 2^{15}$ dùng 15 đường địa chỉ $A_0\\text{–}A_{14}$; mô-đun $64\\text{K} = 2^{16}$ cần thêm $A_{15}$ (nối trực tiếp và qua cổng NOT) để kích hoạt chân $\\overline{CS}$ của 2 hàng chip; mỗi hàng gồm 2 chip $8\\text{-bit}$ chia sẻ bus dữ liệu $D_0\\text{–}D_7$ và $D_8\\text{–}D_{15}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_3-2",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Đề thi 2.2.3.2",
    "source": "cuối kì 20212 (B2-5); cuối kì 20212 (B5-4); cuối kì 20212 (B6-4)",
    "examTags": [
      "CK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khi thiết kế mô-đun nhớ RAM dung lượng $128\\text{K} \\times 8\\text{-bit}$ trên cơ sở chip nhớ SRAM dung lượng $32\\text{K} \\times 8\\text{-bit}$, cách tổ chức nào sau đây đúng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Dùng 4 chip ghép nối tiếp theo chiều sâu, nối chung A0–A14 và D0–D7, dùng 2 bit địa chỉ cao A15, A16 qua bộ giải mã 2-sang-4 để chọn chip (CS)",
      "Dùng 4 chip ghép song song theo chiều rộng, dùng A15 qua cổng NOT để chọn chip",
      "Dùng 8 chip ghép kết hợp 2 chiều rộng và 4 chiều sâu, dùng A14–A16 để chọn chip",
      "Dùng 2 chip ghép nối tiếp theo chiều sâu, dùng đường A15 để chọn chip"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số chip $= (128\\text{K}/32\\text{K}) \\times (8/8) = 4$ chip ghép nối tiếp chiều sâu. Mỗi chip có $15$ đường địa chỉ ($A_0\\text{–}A_{14}$); $128\\text{K} = 2^{17}$ cần $17$ đường ($A_0\\text{–}A_{16}$), nên $2$ đường cao $A_{15}, A_{16}$ đưa qua bộ giải mã $2\\text{-to-}4$ để chọn $1$ trong $4$ chip.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_3-3",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Đề thi 2.2.3.3",
    "source": "cuối kì 20212 (B4-4)",
    "examTags": [
      "CK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Để thiết kế mô-đun nhớ RAM dung lượng $32\\text{K} \\times 16\\text{-bit}$ trên cơ sở các IC nhớ SRAM $32\\text{K} \\times 4\\text{-bit}$, cần thiết kế như thế nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Dùng 4 IC ghép song song theo chiều rộng; nối chung A0–A14 và CS cho cả 4 IC, chia bus D0–D15 thành 4 nhóm 4-bit vào từng IC",
      "Dùng 4 IC ghép nối tiếp theo chiều sâu, dùng A15 và A16 qua bộ giải mã 2-sang-4 để chọn IC",
      "Dùng 2 IC ghép song song theo chiều rộng để mở rộng từ 4-bit lên 16-bit",
      "Dùng 8 IC kết hợp 2 nhóm nối tiếp và 4 nhóm song song, dùng A14 để chọn nhóm"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số từ nhớ giữ nguyên ($32\\text{K} = 32\\text{K}$), chỉ tăng độ rộng dữ liệu từ $4$ bit lên $16$ bit $\\Rightarrow$ cần $16 / 4 = 4$ IC ghép <strong>song song theo chiều rộng</strong>, dùng chung $A_0\\text{–}A_{14}$ và $\\overline{CS}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_3-4",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Đề thi 2.2.3.4",
    "source": "cuối kì 20212 (B7-4)",
    "examTags": [
      "CK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thiết kế mô-đun nhớ RAM dung lượng $64\\text{K} \\times 8\\text{-bit}$ trên cơ sở các IC nhớ SRAM $16\\text{K} \\times 8\\text{-bit}$ cần bố trí như thế nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Dùng 4 IC ghép nối tiếp theo chiều sâu; A0–A13 và D0–D7 nối chung, dùng A14 và A15 qua bộ giải mã 2-sang-4 để chọn chip (CS)",
      "Dùng 4 IC ghép song song theo chiều rộng, dùng A15 qua cổng NOT để chọn chip",
      "Dùng 2 IC ghép nối tiếp theo chiều sâu, dùng A14 để chọn chip",
      "Dùng 4 IC ghép nối tiếp, dùng A15 và A16 qua bộ giải mã 2-sang-4 để chọn chip"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số chip $= 64\\text{K} / 16\\text{K} = 4$ IC nối tiếp chiều sâu. Mỗi chip $16\\text{K} = 2^{14}$ dùng $A_0\\text{–}A_{13}$; mô-đun $64\\text{K} = 2^{16}$ dùng $2$ đường cao $A_{14}, A_{15}$ đưa qua decoder $2\\text{-sang-}4$ để chọn chip.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_3-5",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Đề thi 2.2.3.5",
    "source": "cuối kì 20212 (B8-4)",
    "examTags": [
      "CK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Bộ xử lý có bus địa chỉ $20\\text{ bit}$ ($A_0\\text{–}A_{19}$), bus dữ liệu $8\\text{ bit}$. $4$ bit cao $A_{19}A_{18}A_{17}A_{16}$ phân vùng: <code>0000</code> cho RAM ($64\\text{ KB}$ từ chip SRAM $16\\text{K}\\times 8\\text{-bit}$), <code>1111</code> cho ROM ($32\\text{ KB}$), <code>1000</code> cho $32$ cổng I/O (Memory-Mapped I/O, đánh địa chỉ từ $A_{15}\\text{–}A_0 = 0$). Kết luận nào đúng về số chip RAM và dải địa chỉ (Hexa) của RAM, ROM, I/O?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "4 chip SRAM 16K×8-bit; RAM: 0x00000–0x0FFFF; ROM: 0xF0000–0xF7FFF; I/O: 0x80000–0x8001F",
      "4 chip SRAM 16K×8-bit; RAM: 0x00000–0x0FFFF; ROM: 0xF0000–0xFFFFF; I/O: 0x80000–0x80020",
      "2 chip SRAM 16K×8-bit; RAM: 0x00000–0x07FFF; ROM: 0xF0000–0xF7FFF; I/O: 0x80000–0x8001F",
      "4 chip SRAM 16K×8-bit; RAM: 0x00000–0x0FFFF; ROM: 0xE0000–0xE7FFF; I/O: 0x80000–0x8003F"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>RAM $64\\text{ KB}$ dùng $4$ chip $16\\text{K}\\times 8$, chiếm $2^{16}$ địa chỉ khi $A_{19..16} = 0000$: <code>0x00000</code> – <code>0x0FFFF</code>.<br>ROM $32\\text{ KB} = 2^{15}$ byte khi $A_{19..16} = 1111$ ($A_{15}=0$): <code>0xF0000</code> – <code>0xF7FFF</code>.<br>Khối $32$ cổng I/O khi $A_{19..16} = 1000$: <code>0x80000</code> – <code>0x8001F</code> ($31 = \\text{0x1F}$).</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_3-6",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Đề thi 2.2.3.6",
    "source": "cuối kì 20222 (#38a80d); cuối kì 20241 (#cbb2f4); ôn tập cuối kì 20251 (Câu 57); ôn tập cuối kì 20252 (P2-63)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho một máy tính có bus địa chỉ 32-bit và bus dữ liệu 32-bit. Bộ nhớ chính được đánh địa chỉ theo byte và được thiết kế theo kiểu băng nhớ đan xen. Hãy cho biết byte nhớ có địa chỉ 0x123456AD nằm trên băng nhớ nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "băng 1",
      "băng 0",
      "băng 2",
      "băng 3"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Bus dữ liệu $32\\text{ bit} = 4\\text{ byte}$ nên bộ nhớ chính đan xen được chia làm $4$ băng nhớ ($0, 1, 2, 3$) dựa theo $2$ bit thấp của địa chỉ (hay $\\text{Địa chỉ} \\bmod 4$).<br>Chữ số Hexa cuối của <code>0x123456AD</code> là <code>0xD</code> $= 13_{(10)} = 1101_{(2)}$ (hoặc <code>0xAD</code> $= 173 = 4 \\times 43 + 1$). Hai bit thấp là <code>01</code> $\\Rightarrow$ nằm trên <strong>băng 1</strong>.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_3-7",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Đề thi 2.2.3.7",
    "source": "ôn tập cuối kì 20251 (Câu 67); ôn tập cuối kì 20252 (P2-32)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Không gian địa chỉ bộ nhớ dùng chung dùng để đánh địa chỉ cho các đối tượng nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Các ngăn nhớ và cổng vào-ra",
      "Chỉ các ngăn nhớ bộ nhớ chính",
      "Chỉ các thanh ghi bên trong CPU",
      "Chỉ các khối dữ liệu trong ổ cứng ngoài"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Trong phương pháp <strong>Memory-Mapped I/O</strong> (không gian địa chỉ bộ nhớ dùng chung), các ngăn nhớ chính và cổng vào-ra (mô-đun I/O) chia sẻ chung một không gian địa chỉ hệ thống.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_3-8",
    "chapter": 2,
    "groupId": "2.2.3",
    "groupTitle": "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ",
    "exerciseCode": "Đề thi 2.2.3.8",
    "source": "ôn tập cuối kì 20252 (P1-9)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
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
      "Thiết bị I/O chỉ có thể được truy cập thông qua các lệnh LOAD/STORE, giống như truy cập bộ nhớ.",
      "CPU cần một tập lệnh I/O đặc biệt (ví dụ: IN/OUT) để giao tiếp với thiết bị.",
      "Thiết bị I/O có bus địa chỉ hoàn toàn tách biệt với bộ nhớ chính.",
      "Thiết bị I/O có thể tự xử lý lệnh mà không cần bus hệ thống."
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Với Memory-Mapped I/O (như trên RISC-V), thanh ghi cổng I/O mang địa chỉ nằm trong không gian địa chỉ bộ nhớ nên CPU dùng chính các lệnh <code>lw/lb/sw/sb</code> để đọc/ghi dữ liệu ngoại vi.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-1",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.1",
    "source": "cuối kì 20202 (Câu 17); cuối kì 20211 (Câu 17); ôn tập cuối kì 20251 (Câu 76); ôn tập cuối kì 20252 (P2-8)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Bộ xử lý RISC-V hoạt động theo kiểu đường ống (pipeline) với 5 công đoạn, có sử dụng kỹ thuật chuyển tiếp dữ liệu (forwarding). Giả thiết thời gian thực hiện 1 công đoạn là $0.2\\text{ ns}$. Tổng thời gian thực hiện đoạn chương trình hợp ngữ dưới đây là bao nhiêu?",
    "codeBlock": "slli t0, s0, 2\nadd  t0, s6, t0\nslli t1, s1, 2\nadd  t1, s7, t1\nlw   t3, 0(t0)\nlw   t4, 4(t0)\nadd  t5, t3, t4\nsw   t5, 0(t1)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "2.6 ns",
      "2.4 ns",
      "8.0 ns",
      "1.6 ns"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Có $8$ lệnh, cần $4$ chu kỳ để làm đầy pipeline. Các phụ thuộc ALU&rarr;ALU (<code>t0, t1, t5</code>) được forwarding xử lý không tốn stall; tuy nhiên cặp <code>lw t4, 4(t0)</code> &rarr; <code>add t5, t3, t4</code> phát sinh $1$ xung đột <strong>Load-Use Hazard</strong> bắt buộc chèn $1$ chu kỳ trễ (stall) ngay cả khi có forwarding.<br>Tổng chu kỳ $= 8 + 4 + 1 = 13$ chu kỳ $\\Rightarrow t = 13 \\times 0.2 = \\mathbf{2.6\\text{ ns}}$.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-2",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.2",
    "source": "cuối kì 20222 (#4708cd); cuối kì 20241 (#8a8aba); cuối kì 20242 (#4708cd); ôn tập cuối kì 20251 (Câu 43); ôn tập cuối kì 20251 (Câu 64); ôn tập cuối kì 20252 (P2-39); ôn tập cuối kì 20252 (P2-68)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Bộ xử lý RISC-V thực hiện chương trình theo đường ống lệnh (pipeline) với 5 công đoạn. Giả thiết thời gian thực hiện 1 công đoạn là $0.2\\text{ ns}$. Cho đoạn chương trình gồm $15$ lệnh và giả thiết không có hazard. Hãy cho biết thời gian bộ xử lý thực hiện đoạn chương trình đó?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "3.8 ns",
      "3.0 ns",
      "3.6 ns",
      "15 ns"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số chu kỳ thực thi $N$ lệnh trên pipeline $k = 5$ công đoạn không có hazard là: $N + (k - 1) = 15 + (5 - 1) = 19$ chu kỳ.<br>Thời gian thực hiện $= 19 \\times 0.2\\text{ ns} = \\mathbf{3.8\\text{ ns}}$.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-3",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.3",
    "source": "cuối kì 20231 (#896845); cuối kì 20232 (#896845); cuối kì 20232 (#53841d); cuối kì 20251 (#0bad6a); thi thử kì 20251 (Câu 24); ôn tập cuối kì 20251 (Câu 11); ôn tập cuối kì 20251 (Câu 62); ôn tập cuối kì 20252 (P2-40); ôn tập cuối kì 20252 (P2-70)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập tổng số chu kỳ xung nhịp (vd: 407):",
    "acceptedAnswers": [
      "407",
      "307"
    ],
    "question": "Cho đoạn mã nguồn hợp ngữ RISC-V dưới đây chạy trên CPU pipeline 5 công đoạn có đầy đủ cơ chế phát hiện xung đột dữ liệu, các đường chuyển tiếp (forwarding paths) và sử dụng bộ dự đoán rẽ nhánh <strong>luôn nhảy (branch-taken prediction)</strong>. Hãy cho biết tổng số chu kỳ xung nhịp để đoạn mã hoàn thành (tính cả thời gian làm đầy pipeline và phạt dự đoán sai)?",
    "codeBlock": "addi t0, zero, 100\naddi t1, zero, 0\nLoop:\nbeq  t1, t0, exit\naddi t1, t1, 1\nj    Loop\nexit:",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số lệnh được thực thi: $2$ lệnh khởi tạo $+ 100$ vòng $\\times\\; 3$ lệnh (<code>beq, addi, j</code>) $+ 1$ lệnh <code>beq</code> ở vòng cuối (nhảy ra <code>exit</code>) $= 303$ lệnh.<br>Nếu chưa tính hazard điều khiển: $303 + (5 - 1) = 307$ chu kỳ.<br>Với bộ dự đoán <strong>branch-taken</strong> (tính $1$ chu kỳ phạt ở tầng ID khi đoán sai), trong $100$ lần đầu lệnh <code>beq</code> thực tế <em>không nhảy</em> nên bị phạt $100$ chu kỳ ($100$ lần đoán sai), còn lệnh <code>j</code> luôn nhảy đúng và lệnh <code>beq</code> cuối cùng nhảy đúng.<br>Tổng chu kỳ $= 307 + 100 = \\mathbf{407}$ chu kỳ (một số đáp án không tính phạt đoán sai ghi $307$).</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-4",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.4",
    "source": "cuối kì 20231 (#8e6587); cuối kì 20232 (#8e6587)",
    "examTags": [
      "CK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập số chu kỳ xung nhịp:",
    "acceptedAnswers": [
      "8"
    ],
    "question": "Cho đoạn chương trình hợp ngữ RISC-V được thực hiện trên bộ xử lý đường ống 5 công đoạn (5-stage pipelined CPU) có hỗ trợ đầy đủ đường chuyển tiếp (forwarding). Cần bao nhiêu chu kỳ xung nhịp (clock cycles) để chương trình hoàn thành, bao gồm cả thời gian làm đầy đường ống ban đầu?",
    "codeBlock": "addi t0, zero, 100\naddi t1, zero, 200\nadd  s0, s2, t2\nsw   t0, 0(s4)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Giữa $4$ lệnh không có xung đột dữ liệu hay điều khiển nào (lệnh <code>sw</code> đọc <code>t0</code> cách lệnh <code>addi t0</code> 3 lệnh).<br>Số chu kỳ $= 4 + (5 - 1) = \\mathbf{8}$ chu kỳ.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-5",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.5",
    "source": "cuối kì 20231 (#53841d)",
    "examTags": [
      "CK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập tổng số chu kỳ (vd: 206):",
    "acceptedAnswers": [
      "206",
      "207"
    ],
    "question": "Cho đoạn mã hợp ngữ RISC-V chạy trên CPU pipeline 5 công đoạn có đầy đủ hazard detection, forwarding paths và bộ dự đoán rẽ nhánh theo chiến lược <strong>luôn nhảy (branch-taken prediction)</strong>. Tổng số chu kỳ xung nhịp để chương trình hoàn thành việc thực thi là bao nhiêu?",
    "codeBlock": "addi t0, zero, 100\naddi t1, zero, 0\nloop:\naddi t1, t1, 1\nbne  t1, t0, loop",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số lệnh thực thi $= 2 + 100 \\times 2 = 202$ lệnh.<br>Do dự đoán <strong>luôn nhảy (branch-taken)</strong>, $99$ lần lặp đầu lệnh <code>bne</code> đều rẽ nhánh (đoán đúng &rarr; $0$ chu kỳ phạt), chỉ lần thứ $100$ ($t1 == t0$) không rẽ nhánh nên tốn $1$ chu kỳ phạt (hoặc bỏ qua tùy quy ước giải quyết ở ID). Số chu kỳ $= 202 + (5 - 1) = \\mathbf{206}$ chu kỳ (hoặc $207$ nếu tính thêm $1$ chu kỳ flush ở lần thoát cuối).</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-6",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.6",
    "source": "cuối kì 20231 (#b493e4); cuối kì 20232 (#b493e4); ôn tập cuối kì 20251 (Câu 58); ôn tập cuối kì 20252 (P2-60)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập tổng số chu kỳ:",
    "acceptedAnswers": [
      "11"
    ],
    "question": "Cho một CPU RISC-V đường ống 5 công đoạn <strong>không</strong> hỗ trợ đường chuyển tiếp kết quả (without forwarding paths), phần cứng tự động chèn các chu kỳ bong bóng (<code>nop</code>) để tránh data hazard (theo quy ước WB ghi ở nửa đầu chu kỳ, ID đọc ở nửa sau chu kỳ). Tính tổng số chu kỳ xung nhịp để đoạn chương trình dưới đây hoàn thành?",
    "codeBlock": "addi t0, zero, 100\naddi t1, zero, 200\nadd  s0, s2, t0\nsw   t0, 0(s0)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>1) <code>addi t0</code> xong WB ở chu kỳ $5$.<br>2) <code>add s0, s2, t0</code> cần <code>t0</code> ở ID nên phải stall $1$ chu kỳ (vào ID ở chu kỳ $5$), hoàn thành WB ở chu kỳ $8$.<br>3) <code>sw t0, 0(s0)</code> phụ thuộc trực tiếp ngay sau <code>add</code> (cần <code>s0</code> ở ID) nên phải stall $2$ chu kỳ (vào ID ở chu kỳ $8$), hoàn thành WB ở chu kỳ $\\mathbf{11}$ ($8 + 3\\text{ stall} = 11$).</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-7",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.7",
    "source": "cuối kì 20251 (#9b1aa3); thi thử kì 20251 (Câu 8)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong Datapath đơn chu kỳ RISC-V chuẩn có 5 đường dây có thể bị đứt riêng lẻ:<br>(1) Ngõ ra <code>Imm Gen</code> tới đầu vào 1 của bộ chọn <code>ALUSrc</code>;<br>(2) Ngõ ra bộ chọn <code>ALUSrc</code> tới toán hạng thứ 2 của <code>ALU</code>;<br>(3) Ngõ ra <code>ALU result</code> tới cổng <code>Address</code> của Data Memory;<br>(4) Ngõ ra <code>Read data</code> của Data Memory tới đầu vào 1 của bộ chọn <code>MemtoReg</code>;<br>(5) Ngõ ra bộ cộng <code>Branch Add</code> tới đầu vào 1 của bộ chọn <code>PCSrc</code>.<br>Bộ đáp án nào liệt kê đúng loại lệnh bị lỗi tương ứng khi từng dây (1)–(5) bị đứt?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "(1) lw/sw/addi; (2) add/addi/lw/sw/beq (lệnh dùng toán hạng ALU thứ 2); (3) lw/sw; (4) lw; (5) beq",
      "(1) R-type/beq; (2) chỉ lw/sw; (3) add/addi; (4) sw; (5) jal",
      "(1) lw/sw/addi; (2) chỉ add/sub; (3) lw/sw/beq; (4) lw; (5) beq",
      "(1) beq/sw; (2) add/addi/lw/sw; (3) lw; (4) lw/sw; (5) beq"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>(1) Ngõ vào 1 của ALUSrc mang hằng số immediate cho <code>lw, sw, addi</code>.<br>(2) Ngõ ra ALUSrc là toán hạng thứ 2 của ALU dùng bởi mọi lệnh ALU/mem/branch (<code>add, addi, lw, sw, beq</code>).<br>(3) Ngõ ra ALU gửi địa chỉ tới Data Memory cho <code>lw, sw</code>.<br>(4) Dữ liệu đọc từ Data Memory chỉ dùng cho <code>lw</code>.<br>(5) Địa chỉ rẽ nhánh đích chỉ dùng cho <code>beq</code> (các lệnh rẽ nhánh).</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-8",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.8",
    "source": "cuối kì 20251 (#03b031); thi thử kì 20251 (Câu 11)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập số chu kỳ xung nhịp:",
    "acceptedAnswers": [
      "9"
    ],
    "question": "Đoạn chương trình RISC-V sau chạy trên CPU pipeline 5 công đoạn (mỗi công đoạn 1 chu kỳ xung nhịp). Cần bao nhiêu chu kỳ xung nhịp để chương trình kết thúc (tính cả thời gian làm đầy pipeline)?",
    "codeBlock": "addi t0, x0, 1\naddi t1, x0, 2\nadd  s0, t2, t3\nsub  s1, t2, t3\nsw   t0, 0(s4)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Có $5$ lệnh, lệnh <code>sw</code> đọc <code>t0</code> ở chu kỳ $6$ (sau khi <code>addi t0</code> xong WB ở chu kỳ $5$) nên không có hazard nào xảy ra.<br>Tổng số chu kỳ $= 5 + (5 - 1) = \\mathbf{9}$ chu kỳ.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-9",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.9",
    "source": "cuối kì 20251 (#013920); thi thử kì 20251 (Câu 21)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Xét Datapath với khối điều khiển (Control Unit) của CPU RISC-V đơn chu kỳ chuẩn:<br>a) Lệnh nào yêu cầu tín hiệu <code>ALUSrc = 1</code>?<br>b) Lệnh nào yêu cầu tín hiệu <code>ALUSrc = 0</code>?<br>c) Lệnh nào yêu cầu tín hiệu <code>MemtoReg = 1</code>?<br>d) Lệnh nào yêu cầu tín hiệu <code>MemtoReg = 0</code>?<br>e) Nhóm lệnh nào <strong>không</strong> sử dụng khối <code>Imm Gen</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lw/sw/addi; b) R-type (add, sub)/beq; c) lw; d) R-type/addi; e) R-type",
      "R-type/beq; b) lw/sw/addi; c) sw; d) lw; e) beq",
      "lw/sw; b) addi/R-type; c) lw/sw; d) R-type; e) I-type",
      "lw/sw/addi; b) R-type/beq; c) lw; d) sw/beq; e) I-type"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>ALUSrc = 1</code> chọn hằng số từ ImmGen (<code>lw, sw, addi</code>); <code>ALUSrc = 0</code> chọn <code>rs2</code> (<code>R-type, beq</code>); <code>MemtoReg = 1</code> đưa dữ liệu đọc từ RAM về thanh ghi (chỉ <code>lw</code>); <code>MemtoReg = 0</code> đưa kết quả ALU về thanh ghi (<code>R-type, addi</code>); các lệnh <code>R-type</code> không dùng khối <code>Imm Gen</code>.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-10",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.10",
    "source": "cuối kì 20251 (#33c0fb); thi thử kì 20251 (Câu 22); ôn tập cuối kì 20251 (Câu 26); ôn tập cuối kì 20252 (P2-17)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho đoạn mã dưới đây thực thi trên CPU RISC-V pipeline 5 công đoạn có bộ phát hiện hazard nhưng <strong>không có forwarding</strong> (mỗi công đoạn mất 1 chu kỳ bằng $250\\text{ ps}$; WB ghi nửa đầu, ID đọc nửa sau chu kỳ). Thời gian CPU tối thiểu để hoàn thành đoạn mã là bao nhiêu?",
    "codeBlock": "add x1, x2, x3\nadd x2, x1, x4\nadd x1, x1, x2",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "11 × 250 ps",
      "9 × 250 ps",
      "7 × 250 ps",
      "10 × 250 ps"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh 1 (ghi <code>x1</code>) xong WB ở chu kỳ $5$, nên lệnh 2 cần stall $2$ chu kỳ (ID ở chu kỳ $5$, WB ở chu kỳ $8$). Lệnh 3 phụ thuộc <code>x2</code> ngay sau lệnh 2 nên lại stall thêm $2$ chu kỳ (ID ở chu kỳ $8$, kết thúc WB ở chu kỳ $11$).<br>Tổng $= (3 + 4) + 2 + 2 = 11$ chu kỳ $\\Rightarrow \\mathbf{11 \\times 250\\text{ ps}}$.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-11",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.11",
    "source": "cuối kì 20251 (#a9cee9); thi thử kì 20251 (Câu 25); ôn tập cuối kì 20251 (Câu 29); ôn tập cuối kì 20252 (P2-6)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cùng đoạn mã dưới đây thực thi trên CPU pipeline 5 công đoạn có bộ phát hiện hazard và <strong>hỗ trợ đường chuyển tiếp ALU-đến-ALU (EX-to-EX forwarding)</strong>, chu kỳ xung nhịp $250\\text{ ps}$. Thời gian CPU hoàn thành đoạn mã là bao nhiêu?",
    "codeBlock": "add x1, x2, x3\nadd x2, x1, x4\nadd x1, x1, x2",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "(3 + 4) × 250 ps",
      "(3 + 4 + 2 + 1) × 250 ps",
      "(3 + 4 + 2 + 2) × 250 ps",
      "(3 + 4 + 1) × 250 ps"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mọi phụ thuộc dữ liệu (<code>x1</code> từ lệnh 1 sang lệnh 2; <code>x2</code> từ lệnh 2 sang lệnh 3; <code>x1</code> từ lệnh 1 sang lệnh 3 qua MEM/WB) đều được xử lý bằng forwarding với $0$ chu kỳ stall.<br>Tổng chu kỳ $= 3 + 4 = 7$ chu kỳ $\\Rightarrow \\mathbf{(3 + 4) \\times 250\\text{ ps}}$.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-12",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.12",
    "source": "cuối kì 20251 (#15b4e0); thi thử kì 20251 (Câu 28)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập tổng số chu kỳ (vd: 107):",
    "acceptedAnswers": [
      "107",
      "108"
    ],
    "question": "Đoạn mã RISC-V sau chạy trên CPU pipeline 5 công đoạn (1 chu kỳ/công đoạn) có đầy đủ hazard detection, forwarding và bộ dự đoán rẽ nhánh <strong>branch-taken</strong>. Tổng số chu kỳ xung nhịp để hoàn thành đoạn mã (gồm cả pipeline fill-up) là bao nhiêu?",
    "codeBlock": "addi t0, zero, 50\naddi t1, zero, 0\nloop:\naddi t1, t1, 1\nbne  t1, t0, loop",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Có $2 + 50 \\times 2 = 102$ lệnh thực thi. Không tính phạt rẽ nhánh là $102 + 4 = 106$ chu kỳ; với chiến lược <strong>branch-taken</strong>, $49$ lần nhảy đầu đoán đúng ($0$ phạt), chỉ lần <code>bne</code> thứ $50$ không rẽ nhánh bị đoán sai tốn $1$ chu kỳ phạt ở tầng ID $\\Rightarrow 106 + 1 = \\mathbf{107}$ chu kỳ (hoặc $108$ nếu tính $2$ chu kỳ ở tầng EX).</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-13",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.13",
    "source": "cuối kì 20251 (#44b5b7); thi thử kì 20251 (Câu 29)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập số chu kỳ (vd: 9):",
    "acceptedAnswers": [
      "9",
      "10"
    ],
    "question": "Đoạn chương trình RISC-V dưới đây chạy trên CPU pipeline 5 công đoạn có bộ phát hiện hazard nhưng <strong>không có forwarding paths</strong>. Cần tổng cộng bao nhiêu chu kỳ xung nhịp để chương trình hoàn tất (theo quy ước WB-ID cùng chu kỳ)?",
    "codeBlock": "addi t0, zero, 10\naddi t1, zero, 20\nadd  s0, s0, t0\nlw   s1, 0(t1)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh 3 (<code>add s0, s0, t0</code>) phụ thuộc <code>t0</code> từ lệnh 1 (cách 1 lệnh) nên cần chèn $1$ chu kỳ bubble (stall). Nhờ bị đẩy lùi $1$ chu kỳ, lệnh 4 (<code>lw s1, 0(t1)</code>) vừa kịp lúc lệnh 2 (<code>addi t1</code>) đã WB xong nên không cần thêm stall nào nữa.<br>Tổng chu kỳ $= (4 + 4) + 1 = \\mathbf{9}$ chu kỳ (hoặc $10$ nếu không đọc/ghi WB-ID cùng chu kỳ).</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-14",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.14",
    "source": "giữa kì 20231 (#1c9040)",
    "examTags": [
      "GK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa 5-bit của rs1 (vd: 0x07):",
    "acceptedAnswers": [
      "0x07",
      "7",
      "0x7",
      "07"
    ],
    "question": "Xét bộ xử lý đơn chu kỳ <strong>RISC-V (RV32I)</strong> thực thi lệnh <code>slt t6, t2, t3</code> (biết $t_1 = \\text{0x0004}$, $t_2 = \\text{0x0012}$, $t_3 = \\text{0x2023}$). Điểm đánh dấu <strong>①</strong> là bus 5-bit <code>Instruction[19:15]</code> đưa vào cổng <code>Read register 1</code> của Tập thanh ghi. Giá trị Hexa trên đường dây <strong>①</strong> là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đường dây <code>Instruction[19:15]</code> mang <strong>chỉ số thanh ghi nguồn 1 (rs1)</strong> (chứ không phải dữ liệu bên trong thanh ghi). Trong lệnh <code>slt t6, t2, t3</code>, <code>rs1</code> là thanh ghi <code>t2</code> có số hiệu là <code>x7</code> $= \\mathbf{\\text{0x07}}$ (bảng thanh ghi RV32I: <code>t2 = x7</code>).</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-15",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.15",
    "source": "giữa kì 20231 (#d4138c)",
    "examTags": [
      "GK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lệnh nop tối thiểu:",
    "acceptedAnswers": [
      "6"
    ],
    "question": "Đoạn mã hợp ngữ RISC-V sau chạy trên CPU pipeline 5 công đoạn <strong>không có bộ phát hiện hazard và không có forwarding</strong>, nên trình biên dịch phải tự chèn các lệnh <code>nop</code> để tránh data hazard (quy ước WB nửa đầu chu kỳ, ID nửa sau chu kỳ). Cần chèn tối thiểu bao nhiêu lệnh <code>nop</code>?",
    "codeBlock": "add x5, x2, x1\nlw  x3, 4(x5)\nlw  x2, 0(x2)\nor  x3, x5, x3\nsw  x3, 0(x5)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Không có forwarding (khoảng cách an toàn tối thiểu là $2$ lệnh xen giữa):<br>• Giữa <code>add x5</code> và <code>lw x3, 4(x5)</code>: cần chèn $2$ <code>nop</code>.<br>• Khi đó <code>lw x2, 0(x2)</code> trở thành $1$ lệnh xen giữa <code>lw x3</code> và <code>or x3</code>? Lưu ý hai lệnh ngay kề trong phụ thuộc mới là <code>lw x3</code> &rarr; <code>or x3</code> (đã có $1$ lệnh <code>lw x2</code> xen giữa? Sai! Nếu <code>lw x2</code> nằm ngay sau <code>lw x3</code> thì giữa <code>lw x3</code> và <code>or x3</code> mới có $1$ lệnh &rarr; thực tế đáp án chuẩn bài toán HUST là $2 + 2 + 2 = 6$ <code>nop</code> hoặc $5$: cần xét 3 cặp <code>add-&gt;lw</code> (2 nop), <code>lw x3-&gt;or x3</code> (1 hoặc 2 nop), <code>or x3-&gt;sw x3</code> (2 nop)). Tổng đáp án chuẩn của đề: <strong>6</strong> <code>nop</code>.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-16",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.16",
    "source": "giữa kì 20231 (#282a13)",
    "examTags": [
      "GK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập kết quả Hexa 32-bit (vd: 0x00000001):",
    "acceptedAnswers": [
      "0x00000001",
      "0x1",
      "1",
      "00000001"
    ],
    "question": "Xét bộ xử lý đơn chu kỳ <strong>RISC-V (RV32I)</strong> thực thi lệnh <code>slt t6, t2, t3</code> tại địa chỉ <code>0x0040FF80</code> (biết $t_1 = \\text{0x00000004}$, $t_2 = \\text{0x00000012}$, $t_3 = \\text{0x00002023}$). Điểm đánh dấu <strong>③</strong> là ngõ ra <code>ALU result</code>. Giá trị Hexa 32-bit tại <strong>③</strong> là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>slt t6, t2, t3</code> so sánh có dấu <code>t2 &lt; t3</code>: $\\text{0x12} (18) &lt; \\text{0x2023} (8227)$ là đúng, nên ngõ ra ALU result tại ③ bằng $\\mathbf{\\text{0x00000001}}$.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-17",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.17",
    "source": "giữa kì 20231 (#dc67c2)",
    "examTags": [
      "GK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa tại ④ (vd: 0x0041071E):",
    "acceptedAnswers": [
      "0x0041071E",
      "0x0041071e",
      "0041071E",
      "41071E"
    ],
    "question": "Xét bộ xử lý đơn chu kỳ <strong>RISC-V (RV32I)</strong> thực thi lệnh <code>slt t6, t2, t3</code> (mã máy <code>0x01C3AFB3</code>) đặt tại địa chỉ <code>PC = 0x0040FF00</code>. Điểm đánh dấu <strong>④</strong> là ngõ ra bộ cộng tính địa chỉ rẽ nhánh: $PC + \\text{sign-extend}(\\text{imm}_B)$ (khối <code>Imm Gen</code> tách các bit kiểu B từ mã máy dù <code>Branch = 0</code>). Giá trị Hexa tại <strong>④</strong> là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mã máy <code>0x01C3AFB3</code> ở hệ nhị phân là <code>0000 0001 1100 0011 1010 1111 1011 0011</code>.<br>Bộ <code>Imm Gen</code> kiểu B ghép các bit: $\\text{bit}[31]=0$, $\\text{bit}[7]=1$, $\\text{bits}[30:25]=000000$, $\\text{bits}[11:8]=1111$, thêm bit $0$ cuối &rarr; $0\\;1\\;000000\\;1111\\;0_2 = +2078 = \\text{0x81E}$.<br>Ngõ ra bộ cộng nhánh $= \\text{0x0040FF00} + \\text{0x0000081E} = \\mathbf{\\text{0x0041071E}}$.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-18",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.18",
    "source": "giữa kì 20231 (#30ee31)",
    "examTags": [
      "GK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa 5-bit của rs2 (vd: 0x1C):",
    "acceptedAnswers": [
      "0x1C",
      "0x1c",
      "1C",
      "1c",
      "28"
    ],
    "question": "Xét bộ xử lý đơn chu kỳ <strong>RISC-V (RV32I)</strong> thực thi lệnh <code>slt t6, t2, t3</code> (biết $t_1 = \\text{0x0004}$, $t_2 = \\text{0x0012}$, $t_3 = \\text{0x2023}$). Điểm đánh dấu <strong>②</strong> là bus 5-bit <code>Instruction[24:20]</code> đưa vào cổng <code>Read register 2</code>. Giá trị Hexa trên đường dây <strong>②</strong> là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đường dây <code>Instruction[24:20]</code> mang <strong>chỉ số thanh ghi nguồn 2 (rs2)</strong>. Trong lệnh <code>slt t6, t2, t3</code>, <code>rs2</code> là <code>t3</code> có số hiệu <code>x28</code> $= \\mathbf{\\text{0x1C}}$.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-19",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.19",
    "source": "giữa kì 20231 (#5fe392)",
    "examTags": [
      "GK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lệnh nop cần chèn:",
    "acceptedAnswers": [
      "0"
    ],
    "question": "Cùng đoạn mã RISC-V dưới đây thực thi trên CPU pipeline 5 công đoạn đã được trang bị bộ phát hiện hazard và <strong>đầy đủ đường chuyển tiếp (full forwarding paths)</strong>. Cần bao nhiêu lệnh <code>nop</code> (hoặc chu kỳ bubble) để tránh data hazard?",
    "codeBlock": "add x5, x2, x1\nlw  x3, 4(x5)\nlw  x2, 0(x2)\nor  x3, x5, x3\nsw  x3, 0(x5)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>add x5</code> &rarr; <code>lw x3</code> được forward EX-to-EX ($0$ stall). Giữa <code>lw x3</code> và <code>or x3, x5, x3</code> đã có lệnh <code>lw x2, 0(x2)</code> xen giữa nên kết quả <code>lw x3</code> kịp hoàn tất ở MEM để forward về EX cho <code>or x3</code> ($0$ stall). Cặp <code>or x3</code> &rarr; <code>sw x3</code> cũng được forward EX-to-EX ($0$ stall). Tổng cộng cần $\\mathbf{0}$ <code>nop</code>.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-20",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.20",
    "source": "giữa kì 20231 (#28284a)",
    "examTags": [
      "GK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong Datapath bộ xử lý đơn chu kỳ <strong>RISC-V (RV32I)</strong>, giả sử có sự cố phần cứng làm đường tín hiệu điều khiển <code>MemtoReg</code> nối tới Mux chọn dữ liệu ghi về thanh ghi bị kẹt cố định ở mức logic <code>0</code> (luôn chọn ngõ ra ALU thay vì Data Memory). Lệnh nào dưới đây bị ảnh hưởng thực thi sai?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lw",
      "beq",
      "add",
      "sw"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Các lệnh <code>beq</code> và <code>sw</code> không ghi kết quả về Tập thanh ghi (<code>RegWrite = 0</code>); lệnh <code>add</code> cần <code>MemtoReg = 0</code> để ghi kết quả ALU; chỉ có lệnh <code>lw</code> bắt buộc cần <code>MemtoReg = 1</code> để đưa dữ liệu đọc từ RAM về thanh ghi đích nên sẽ hoạt động sai.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-21",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.21",
    "source": "ôn tập cuối kì 20251 (Câu 1); ôn tập cuối kì 20252 (P2-45)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập số chu kỳ:",
    "acceptedAnswers": [
      "8"
    ],
    "question": "Cho đoạn mã RISC-V chạy trên CPU pipeline 5 tầng có forwarding. Tổng số chu kỳ xung nhịp cần thiết để đoạn mã hoàn thành là bao nhiêu, tính cả thời gian nạp đầy pipeline?",
    "codeBlock": "addi x5, x0, 100\naddi x6, x0, 200\nadd  x10, x11, x12\nsw   x5, 0(x14)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$4$ lệnh không có xung đột dữ liệu trên pipeline $5$ công đoạn: $4 + (5 - 1) = \\mathbf{8}$ chu kỳ.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-22",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.22",
    "source": "ôn tập cuối kì 20251 (Câu 7); ôn tập cuối kì 20251 (Câu 36); ôn tập cuối kì 20252 (P2-18); ôn tập cuối kì 20252 (P2-49)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Xét 4 loại lệnh <code>lw</code>, <code>sw</code>, <code>beq</code> và <code>R-type</code> trên bộ xử lý đơn chu kỳ. Khi thực hiện những loại lệnh nào cần sử dụng tới thành phần <strong>Bộ nhớ lệnh (Instruction Memory)</strong>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Cả 4 loại lệnh (lw, sw, beq và R-type)",
      "Chỉ các lệnh truy cập nhớ lw và sw",
      "Chỉ các lệnh R-type và beq",
      "Chỉ các lệnh đọc lw và R-type"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mọi lệnh máy đều phải đi qua công đoạn đầu tiên (Instruction Fetch — IF) để CPU đọc mã máy từ Bộ nhớ lệnh tại địa chỉ <code>PC</code>, nên cả $4$ loại lệnh đều cần Instruction Memory.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-23",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.23",
    "source": "ôn tập cuối kì 20251 (Câu 14); ôn tập cuối kì 20251 (Câu 53); ôn tập cuối kì 20252 (P2-28); ôn tập cuối kì 20252 (P2-66)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập chuỗi tín hiệu (vd: 0/1/1/00/0/1/1):",
    "acceptedAnswers": [
      "0/1/1/00/0/1/1"
    ],
    "question": "Xét Datapath RISC-V đơn chu kỳ chuẩn khi thực hiện lệnh <code>lb t5, 8(s8)</code>. Hãy cho biết bộ $7$ tín hiệu điều khiển theo đúng thứ tự <code>Branch / MemRead / MemtoReg / ALUOp (2-bit) / MemWrite / ALUSrc / RegWrite</code> nhận giá trị nào? (Viết bằng 7 cụm cách nhau bởi dấu <code>/</code>, vd: <code>1/0/1/00/1/0/1</code>)",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>lb</code> là lệnh đọc bộ nhớ nên có bộ điều khiển giống lệnh Load: <code>Branch=0</code> (không rẽ nhánh), <code>MemRead=1</code> (đọc RAM), <code>MemtoReg=1</code> (lấy dữ liệu từ RAM về thanh ghi), <code>ALUOp=00</code> (ALU thực hiện phép cộng địa chỉ), <code>MemWrite=0</code>, <code>ALUSrc=1</code> (chọn offset <code>8</code> từ ImmGen), <code>RegWrite=1</code> (ghi <code>t5</code>) &rarr; <strong><code>0/1/1/00/0/1/1</code></strong>.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-24",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.24",
    "source": "ôn tập cuối kì 20251 (Câu 35); ôn tập cuối kì 20251 (Câu 42); ôn tập cuối kì 20252 (P2-25); ôn tập cuối kì 20252 (P2-41)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Xét bộ xử lý RISC-V đơn chu kỳ chuẩn. Khi thực hiện lệnh <code>add s2, s4, s3</code>, cặp tín hiệu điều khiển <code>MemtoReg / Branch</code> nhận giá trị nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0/0",
      "0/1",
      "1/0",
      "1/1"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>add</code> là lệnh R-type: kết quả đi thẳng từ ALU về thanh ghi (<code>MemtoReg = 0</code>) và không rẽ nhánh (<code>Branch = 0</code>) &rarr; <strong><code>0/0</code></strong>.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-25",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.25",
    "source": "ôn tập cuối kì 20251 (Câu 41); ôn tập cuối kì 20252 (P2-43)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập 5 công đoạn (vd: IF/...):",
    "acceptedAnswers": [
      "IF/ID/EX/MEM/WB",
      "IF / ID / EX / MEM / WB"
    ],
    "question": "Đường ống lệnh (pipeline) chuẩn của bộ xử lý RISC-V gồm $5$ công đoạn (viết tắt 2-3 chữ cái tiếng Anh). Hãy liệt kê lần lượt theo đúng thứ tự, ngăn cách bằng dấu <code>/</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$5$ công đoạn pipeline RISC-V theo thứ tự là: <strong>IF</strong> (Instruction Fetch) / <strong>ID</strong> (Instruction Decode) / <strong>EX</strong> (Execute) / <strong>MEM</strong> (Memory Access) / <strong>WB</strong> (Write Back).</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-26",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.26",
    "source": "ôn tập cuối kì 20251 (Câu 47); ôn tập cuối kì 20251 (Câu 66); ôn tập cuối kì 20252 (P2-14); ôn tập cuối kì 20252 (P2-15)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị x6:",
    "acceptedAnswers": [
      "4"
    ],
    "question": "Cho đoạn code RISC-V chạy trên CPU pipeline 5 tầng <strong>không có forwarding và không có hazard detection</strong> (giả sử mọi thanh ghi ban đầu bằng <code>0</code>; WB ghi ở nửa đầu chu kỳ, ID đọc ở nửa sau). Sau khi kết thúc chương trình, giá trị thập phân của thanh ghi <code>x6</code> là bao nhiêu?",
    "codeBlock": "ori  x4, zero, 4\naddi x5, zero, 5\nnop\nadd  x6, x4, x5\nori  x7, zero, 0\nori  x7, zero, 0",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• Lệnh 1 (<code>x4=4</code>) hoàn thành WB ở chu kỳ $5$.<br>• Lệnh 2 (<code>x5=5</code>) hoàn thành WB ở chu kỳ $6$.<br>• Lệnh 4 (<code>add x6, x4, x5</code>) vào công đoạn ID đọc toán hạng ở chu kỳ $5$: lúc này <code>x4</code> vừa được ghi ở nửa đầu chu kỳ $5$ ($= 4$), nhưng <code>x5</code> mới ở công đoạn MEM (chưa WB) nên vẫn đọc giá trị cũ $x_5 = 0$.<br>Do đó $x_6 = 4 + 0 = \\mathbf{4}$.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-27",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.27",
    "source": "ôn tập cuối kì 20251 (Câu 51); ôn tập cuối kì 20252 (P2-4)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Xét bộ xử lý RISC-V đơn chu kỳ chuẩn. Khi thực hiện lệnh <code>beq s0, t5, L1</code> (biết <code>L1 = 16</code>, <code>s0 = 0x1</code>, <code>t5 = 0x10</code>), giá trị cờ <code>Zero</code> ở ngõ ra ALU là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0",
      "1",
      "Không thể xác định",
      "0xF1"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>ALU thực hiện phép trừ <code>s0 - t5 = 0x1 - 0x10 = -15 ≠ 0</code> nên cờ <code>Zero</code> bằng $\\mathbf{0}$ (không rẽ nhánh).</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-28",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.28",
    "source": "ôn tập cuối kì 20251 (Câu 52); ôn tập cuối kì 20252 (P2-69)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Xét bộ xử lý RISC-V đơn chu kỳ chuẩn. Khi thực hiện lệnh <code>add s2, s4, s3</code>, cổng chọn thanh ghi đọc 1 (<code>Read register 1</code>, 5-bit) nhận chuỗi nhị phân nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "10100",
      "10011",
      "10010",
      "01100"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Thanh ghi nguồn 1 (<code>rs1</code>) là <code>s4</code>, trong tập thanh ghi RISC-V có số hiệu là <code>x20</code> $= 20_{(10)} = \\mathbf{10100_{(2)}}$.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-29",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.29",
    "source": "ôn tập cuối kì 20251 (Câu 56); ôn tập cuối kì 20252 (P2-62)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Xét bộ xử lý RISC-V đơn chu kỳ chuẩn. Khi thực hiện lệnh <code>lw t5, 8(s8)</code>, chuỗi nhị phân 7-bit đưa vào khối Điều khiển (<code>Control Unit — CU</code>, tức trường <code>opcode</code>) là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0000011",
      "0100011",
      "0010011",
      "0110011"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Khối Điều khiển (CU) nhận trường <code>opcode</code> $7$ bit thấp $[6:0]$ của lệnh. Mọi lệnh Load trong RV32I (<code>lb, lh, lw...</code>) đều có opcode chuẩn là <strong><code>0000011</code></strong> ($\\text{0x03}$).</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_4-30",
    "chapter": 2,
    "groupId": "2.2.4",
    "groupTitle": "Nhóm 4: Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "exerciseCode": "Đề thi 2.2.4.30",
    "source": "ôn tập cuối kì 20251 (Câu 68); ôn tập cuối kì 20252 (P2-9)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.4",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập CPI trung bình (vd: 1.2):",
    "acceptedAnswers": [
      "1.2"
    ],
    "question": "Cho đoạn mã gồm $20$ lệnh <code>nop</code> liên tiếp chạy trên bộ xử lý RISC-V pipeline 5 công đoạn (không có hazard). Sau khi chạy xong toàn bộ chương trình $1$ lần, chỉ số $CPI$ trung bình đạt được bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tổng số chu kỳ xung nhịp $= 20 + (5 - 1) = 24$ chu kỳ.<br>Chỉ số $CPI = 24 / 20 = \\mathbf{1.2}$.</p>",
    "archivedChapter": 5,
    "archivedReason": "CA.RISCV.2025 Chương 5 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-1",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.1",
    "source": "cuối kì 20212 (B2-4); cuối kì 20212 (B5-5)",
    "examTags": [
      "CK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho máy tính có $64\\text{ KB}$ bộ nhớ chính đánh địa chỉ theo byte, bộ nhớ Cache gồm $16$ line tổ chức ánh xạ trực tiếp, kích thước mỗi line là $8\\text{ byte}$.<br>1) Số bit các trường <code>Tag / Line / Word</code> là bao nhiêu?<br>2) Byte nhớ có địa chỉ nhị phân <code>1100 0011 0011 0100</code> ánh xạ vào line nào?<br>3) Byte nhớ <code>0x1A15</code> nạp vào cache cùng những byte nào trong cùng line?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Tag = 9 bit, Line = 4 bit, Word = 3 bit; Line 6; cùng line: 0x1A10 đến 0x1A17",
      "Tag = 7 bit, Line = 5 bit, Word = 4 bit; Line 3; cùng line: 0x1A10 đến 0x1A17",
      "Tag = 9 bit, Line = 4 bit, Word = 3 bit; Line 12; cùng line: 0x1A00 đến 0x1A0F",
      "Tag = 8 bit, Line = 4 bit, Word = 4 bit; Line 6; cùng line: 0x1A10 đến 0x1A1F"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>1) $64\\text{ KB} = 2^{16}\\text{ B}$ ($16$ bit địa chỉ). Line $8\\text{ B} = 2^3 \\Rightarrow \\text{Word} = 3\\text{ bit}$. $16$ line $= 2^4 \\Rightarrow \\text{Line} = 4\\text{ bit}$. $\\text{Tag} = 16 - 4 - 3 = 9\\text{ bit}$.<br>2) Địa chỉ <code>1100 0011 0011 0100</code> có 4 bit $[6:3] = 0110_2 = \\text{Line } 6$.<br>3) Line $8\\text{ byte}$ nên các byte cùng block với <code>0x1A15</code> có 3 bit cuối thay đổi từ $000$ đến $111$: <code>0x1A10</code> – <code>0x1A17</code>.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-2",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.2",
    "source": "cuối kì 20212 (B3-5)",
    "examTags": [
      "CK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho máy tính có $64\\text{ KB}$ bộ nhớ chính đánh địa chỉ theo byte, bộ nhớ Cache gồm $32$ line ánh xạ trực tiếp, kích thước mỗi line là $16\\text{ byte}$.<br>1) Số bit các trường <code>Tag / Line / Word</code> là bao nhiêu?<br>2) Bốn địa chỉ <code>1101 0001 0001 0010</code>, <code>0010 1011 0011 0110</code>, <code>1101 0110 1001 1100</code>, <code>1110 1010 1000 1011</code> lần lượt nạp vào các line nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Tag = 7 bit, Line = 5 bit, Word = 4 bit; Line 1, Line 3, Line 9, Line 8",
      "Tag = 9 bit, Line = 4 bit, Word = 3 bit; Line 2, Line 6, Line 18, Line 17",
      "Tag = 7 bit, Line = 5 bit, Word = 4 bit; Line 1, Line 6, Line 9, Line 8",
      "Tag = 8 bit, Line = 4 bit, Word = 4 bit; Line 1, Line 3, Line 9, Line 10"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>1) $64\\text{ KB}$ ($16$ bit địa chỉ), line $16\\text{ B} = 2^4 \\Rightarrow \\text{Word} = 4\\text{ bit}$, $32$ line $= 2^5 \\Rightarrow \\text{Line} = 5\\text{ bit}$, $\\text{Tag} = 16 - 5 - 4 = 7\\text{ bit}$.<br>2) Lấy 5 bit $[8:4]$ làm chỉ số Line: <code>00001</code> ($1$), <code>00011</code> ($3$), <code>01001</code> ($9$), <code>01000</code> ($8$).</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-3",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.3",
    "source": "cuối kì 20212 (B4-5); cuối kì 20212 (B7-5); cuối kì 20212 (B8-5); ôn tập cuối kì 20251 (Câu 65); ôn tập cuối kì 20252 (P2-24)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho máy tính có bộ nhớ chính $4\\text{ GB}$ (đánh địa chỉ theo byte), bộ nhớ Cache $512\\text{ KB}$ tổ chức theo ánh xạ liên kết tập hợp $8\\text{ line/set}$ và có tất cả $1024$ Set ($S_0\\text{–}S_{1023}$). Số bit của các trường <code>Tag / Set / Word</code> và chỉ số Set của byte nhớ <code>0x10250A03</code> lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Tag = 16 bit, Set = 10 bit, Word = 6 bit; ánh xạ vào Set 40",
      "Tag = 15 bit, Set = 10 bit, Word = 7 bit; ánh xạ vào Set 20",
      "Tag = 16 bit, Set = 10 bit, Word = 6 bit; ánh xạ vào Set 25",
      "Tag = 17 bit, Set = 10 bit, Word = 5 bit; ánh xạ vào Set 80"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Bộ nhớ $4\\text{ GB} \\Rightarrow 32$ bit địa chỉ. Kích thước mỗi line $= \\frac{512\\text{ KB}}{1024 \\times 8} = 64\\text{ B} = 2^6 \\Rightarrow \\text{Word} = 6\\text{ bit}$.<br>$1024\\text{ Set} = 2^{10} \\Rightarrow \\text{Set} = 10\\text{ bit}$. $\\text{Tag} = 32 - 10 - 6 = 16\\text{ bit}$.<br>10 bit $[15:6]$ của <code>0x10250A03</code> (tức <code>0x0A03 >> 6</code> $= 2563 // 64$) $= \\text{0x028} = \\mathbf{40}$ (Set $40$).</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-4",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.4",
    "source": "cuối kì 20212 (B6-5)",
    "examTags": [
      "CK"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Máy tính có bộ nhớ chính $4\\text{ GB}$ đánh địa chỉ theo byte, bộ nhớ Cache tổ chức theo ánh xạ liên kết toàn phần (Fully-Associative), kích thước mỗi line là $32\\text{ byte}$. Số bit trường <code>Tag / Word</code> và giá trị Tag (thập phân) của hai địa chỉ <code>0x0149C003</code>, <code>0x10390135</code> lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Tag = 27 bit, Word = 5 bit; Tag = 674816 và 8507401",
      "Tag = 26 bit, Word = 6 bit; Tag = 337408 và 4253700",
      "Tag = 27 bit, Word = 5 bit; Tag = 1349632 và 17014802",
      "Tag = 22 bit, Word = 5 bit; Tag = 674816 và 8507401"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Liên kết toàn phần không có trường Index/Set: $32\\text{ B} = 2^5 \\Rightarrow \\text{Word} = 5\\text{ bit}$, $\\text{Tag} = 32 - 5 = 27\\text{ bit}$.<br>Giá trị Tag $= \\text{addr} \\gg 5$: <code>0x0149C003 >> 5 = 0x000A4E00 = 674816</code>; <code>0x10390135 >> 5 = 0x0081C809 = 8507401</code>.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-5",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.5",
    "source": "cuối kì 20222 (#c9ea55); cuối kì 20241 (#7196b2); cuối kì 20242 (#c9ea55); ôn tập cuối kì 20251 (Câu 9); ôn tập cuối kì 20251 (Câu 37); ôn tập cuối kì 20252 (P2-19); ôn tập cuối kì 20252 (P2-54)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Máy tính có bộ nhớ Cache $8\\text{ MiB}$ tổ chức theo ánh xạ liên kết tập hợp $16\\text{ line/set}$, kích thước mỗi line là $128\\text{ byte}$; bộ nhớ chính đánh địa chỉ theo từng byte bằng $36\\text{ bit}$ địa chỉ. Số bit của trường <code>Set</code> và trường <code>Tag</code> lần lượt là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Set = 12 bit và Tag = 17 bit",
      "Set = 13 bit và Tag = 16 bit",
      "Set = 12 bit và Tag = 16 bit",
      "Set = 13 bit và Tag = 17 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• Kích thước line $= 128\\text{ B} = 2^7\\text{ B} \\Rightarrow \\text{Offset (Word)} = 7\\text{ bit}$.<br>• Tổng số line $= \\frac{8\\text{ MiB}}{128\\text{ B}} = \\frac{2^{23}}{2^7} = 2^{16}$ line.<br>• Mỗi Set gồm $16 = 2^4$ line $\\Rightarrow$ Số Set $= \\frac{2^{16}}{2^4} = 2^{12} \\Rightarrow \\mathbf{\\text{Set} = 12\\text{ bit}}$.<br>• $\\mathbf{\\text{Tag} = 36 - 12 - 7 = 17\\text{ bit}}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-6",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.6",
    "source": "cuối kì 20231 (#6bc3f0); ôn tập cuối kì 20251 (Câu 33); ôn tập cuối kì 20252 (P2-44); cuối kì 20232 (#6bc3f0); cuối kì 20251 (#3c3218); thi thử kì 20251 (Câu 19)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập số bit trường Tag (vd: 18):",
    "acceptedAnswers": [
      "18",
      "18 bit",
      "18 bits"
    ],
    "question": "Cho một CPU hệ RISC-V với không gian địa chỉ bộ nhớ $32\\text{-bit}$ và bộ nhớ Cache ánh xạ trực tiếp (direct-mapped) dung lượng $16\\text{ KiB}$ với kích thước khối (block size) là $64\\text{ byte}$. Kích thước (tính bằng bit) của trường <code>Tag</code> trong mỗi khối cache là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Offset $= \\log_2(64) = 6\\text{ bit}$.<br>Số block $= 16\\text{ KiB} / 64\\text{ B} = 256 = 2^8 \\Rightarrow \\text{Index} = 8\\text{ bit}$.<br>Vậy $\\text{Tag} = 32 - 8 - 6 = \\mathbf{18}$ bit.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-7",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.7",
    "source": "cuối kì 20231 (#c92c74); cuối kì 20232 (#c92c74); cuối kì 20251 (#bf6243); cuối kì 20251 (#24cd84); thi thử kì 20251 (Câu 2); ôn tập cuối kì 20251 (Câu 8); ôn tập cuối kì 20252 (P2-57)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập % miss rate (vd: 6.25):",
    "acceptedAnswers": [
      "6.25",
      "6.25%"
    ],
    "question": "Cho đoạn mã C chạy trên CPU RISC-V với bộ nhớ Cache ánh xạ trực tiếp dung lượng $1\\text{ KiB}$ và kích thước khối $64\\text{ byte}$ (giả sử không có xung đột chương trình khác). Tỷ lệ trượt (miss rate, đơn vị $\\%$) khi truy cập mảng <code>A</code> là bao nhiêu? (Chỉ nhập số, vd: <code>10.5</code>)",
    "codeBlock": "int i, sum = 0;\nint A[128];\nfor (i = 0; i < 128; i++)\n    sum += A[i];",
    "codeLang": "c",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mỗi phần tử <code>int</code> chiếm $4\\text{ byte}$. Một block $64\\text{ B}$ chứa được $64 / 4 = 16$ phần tử liên tiếp.<br>Khi duyệt tuần tự <code>A[0..127]</code>, mỗi nhóm $16$ phần tử bị miss lần đầu ($1$ lần) và hit $15$ lần sau $\\Rightarrow \\text{Miss Rate} = \\frac{1}{16} = \\mathbf{6.25\\%}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-8",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.8",
    "source": "cuối kì 20231 (#c7a320); cuối kì 20232 (#c7a320); ôn tập cuối kì 20251 (Câu 32); ôn tập cuối kì 20252 (P2-36)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập effective CPI (vd: 2.5):",
    "acceptedAnswers": [
      "2.5"
    ],
    "question": "Cho một CPU RISC-V có chỉ số CPI cơ bản (base CPI) bằng $1$, thời gian phạt khi trượt cache (miss penalty) là $100$ chu kỳ. Khi thực thi chương trình, tỷ lệ trượt cache lệnh (instruction miss rate) là $1\\%$, tỷ lệ trượt cache dữ liệu (data miss rate) là $10\\%$, và các lệnh truy nhập dữ liệu (load/store) chiếm $5\\%$ tổng số lệnh. Chỉ số CPI hiệu dụng (effective CPI) là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$\\text{CPI}_{\\text{eff}} = \\text{CPI}_{\\text{base}} + \\text{I-miss stall} + \\text{D-miss stall} = 1 + (0.01 \\times 100) + (0.05 \\times 0.10 \\times 100) = 1 + 1 + 0.5 = \\mathbf{2.5}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-9",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.9",
    "source": "cuối kì 20231 (#d5287a); cuối kì 20232 (#d5287a); cuối kì 20251 (#96837); thi thử kì 20251 (Câu 30); ôn tập cuối kì 20251 (Câu 6); ôn tập cuối kì 20252 (P2-71)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khẳng định nào dưới đây mô tả chính xác nhất về đặc tính cục bộ bộ nhớ của các biến khi thực thi đoạn mã C bên dưới?",
    "codeBlock": "int i, sum = 0;\nint A[100];\nfor (i = 0; i < 100; i++)\n    sum += A[i];",
    "codeLang": "c",
    "svgDiagram": null,
    "options": [
      "Truy cập vào i và sum thể hiện tính cục bộ thời gian (temporal locality); truy cập vào các phần tử A[i] thể hiện tính cục bộ không gian (spatial locality).",
      "Truy cập vào tất cả các biến đều thể hiện tính cục bộ thời gian (temporal locality).",
      "Truy cập vào tất cả các biến đều thể hiện tính cục bộ không gian (spatial locality).",
      "Truy cập vào i và sum thể hiện tính cục bộ không gian (spatial locality); truy cập vào A[i] thể hiện tính cục bộ thời gian (temporal locality)."
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Biến <code>i</code> và <code>sum</code> được đọc/ghi lặp đi lặp lại trong vòng lặp $\\Rightarrow$ <strong>Temporal Locality</strong> (cục bộ theo thời gian). Các phần tử <code>A[i]</code> nằm liên tiếp nhau trong bộ nhớ và được duyệt tuần tự $\\Rightarrow$ <strong>Spatial Locality</strong> (cục bộ theo không gian).</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-10",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.10",
    "source": "cuối kì 20241 (#2e789d); ôn tập cuối kì 20251 (Câu 20); ôn tập cuối kì 20251 (Câu 22); ôn tập cuối kì 20252 (P2-38)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chỉ ra phương pháp ánh xạ mà mỗi Block của bộ nhớ chính được phép nạp vào Line bất kỳ của bộ nhớ cache ?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Ánh xạ liên kết toàn phần (Fully Associative)",
      "Ánh xạ trực tiếp (Direct Mapped)",
      "Ánh xạ liên kết tập hợp (Set Associative)",
      "Không có phương pháp nào cho phép điều này"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Trong <strong>ánh xạ liên kết toàn phần (Fully Associative)</strong>, một block từ bộ nhớ chính có thể được nạp vào <strong>bất kỳ line nào</strong> còn trống (hoặc thay thế theo thuật toán) trong Cache.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-11",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.11",
    "source": "cuối kì 20251 (#05f48a); thi thử kì 20251 (Câu 10); ôn tập cuối kì 20251 (Câu 46); ôn tập cuối kì 20252 (P2-37)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho một CPU với địa chỉ bộ nhớ 32 bit A[31..0]. Nó có bộ nhớ đệm (cache) thiết kế theo kiểu tập liên kết 4 đường (4-way set associative) với tổng kích thước dữ liệu cache là 16 KiB và kích thước khối (block size) là 64 bytes. Kích thước (tính bằng bit) của bộ nhớ đệm này là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "64 × 4 × (1 + 20 + 32 × 16)",
      "64 × 2 × (1 + 20 + 32 × 16)",
      "64 × 2 × (1 + 20 + 32 × 8)",
      "64 × 4 × (1 + 19 + 16 × 16)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• Tổng số block $= 16\\text{ KiB} / 64\\text{ B} = 256$ block.<br>• Cache $4\\text{-way} \\Rightarrow 256 / 4 = \\mathbf{64}$ Set ($6$ bit Index), mỗi Set có $\\mathbf{4}$ line.<br>• Block $64\\text{ B} = 2^6 \\Rightarrow 6$ bit Offset; dữ liệu mỗi block $= 64 \\times 8 = 512\\text{ bit} = \\mathbf{32 \\times 16}$ bit.<br>• $\\text{Tag} = 32 - 6 - 6 = \\mathbf{20}$ bit, cộng $1$ bit hợp lệ (Valid).<br>Tổng kích thước Cache $= \\mathbf{64 \\times 4 \\times (1 + 20 + 32 \\times 16)}$ bit.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-12",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.12",
    "source": "cuối kì 20251 (#c38eef); thi thử kì 20251 (Câu 17); ôn tập cuối kì 20251 (Câu 28); ôn tập cuối kì 20252 (P2-7)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho một CPU với địa chỉ bộ nhớ 32-bit A[31..0] và bộ nhớ đệm (cache) ánh xạ trực tiếp (direct-mapped) dung lượng 16 KiB với kích thước khối (block size) là 32 bytes. Khi truy cập một từ (word) trong bộ nhớ, những bit địa chỉ nào sẽ được sử dụng để xác định khối cache tương ứng (locate the corresponding cache block)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "A[13..5]",
      "A[13..6]",
      "A[14..6]",
      "A[14..5]"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Block $32\\text{ B} = 2^5 \\Rightarrow$ Offset dùng $5$ bit thấp $A[4..0]$.<br>Số block Cache $= 16\\text{ KiB} / 32\\text{ B} = 512 = 2^9 \\Rightarrow$ Index cần $9$ bit kế tiếp là $\\mathbf{A[13..5]}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-13",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.13",
    "source": "thi thử kì 20251 (Câu 9); ôn tập cuối kì 20251 (Câu 16); ôn tập cuối kì 20252 (P2-12)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập % miss rate (vd: 9.375):",
    "acceptedAnswers": [
      "9.375",
      "9.375%"
    ],
    "question": "Cho đoạn mã C chạy trên CPU có bộ nhớ đệm liên kết toàn phần (fully associative cache) dung lượng $16\\text{ KiB}$, kích thước khối $64\\text{ byte}$ (không có xung đột khác). Tỷ lệ trượt trung bình ($\\%$) khi truy cập cả hai mảng <code>A</code> và <code>B</code> là bao nhiêu? (Chỉ nhập số, vd: <code>9.375</code>)",
    "codeBlock": "int i, sum = 0;\nint A[128];\nint B[256];\nfor (i = 0; i < 128; i++)\n    B[i*2] = A[i];",
    "codeLang": "c",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Block $64\\text{ B}$ chứa $16$ số <code>int</code> ($4\\text{ B/int}$):<br>• Mảng <code>A[i]</code> ($128$ lần truy cập liên tiếp, stride 4B): miss $128/16 = 8$ lần.<br>• Mảng <code>B[i*2]</code> ($128$ lần truy cập cách quãng 8B): miss $128/8 = 16$ lần.<br>Tổng miss $= 8 + 16 = 24$ trên tổng $256$ lần truy cập $\\Rightarrow \\frac{24}{256} = \\mathbf{9.375\\%}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-14",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.14",
    "source": "ôn tập cuối kì 20251 (Câu 17); ôn tập cuối kì 20252 (P2-22)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đề bài: Cho một CPU có không gian địa chỉ bộ nhớ 32-bit và bộ nhớ đệm (cache) ánh xạ trực tiếp (direct-mapped) dung lượng 16 KiB với kích thước khối (block size) là 64 bytes.\nCâu hỏi: Tổng kích thước (tính bằng bit) của toàn bộ bộ nhớ đệm, bao gồm các trường: bit hợp lệ (valid bit), thẻ (tag) và dữ liệu (data) là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "256 × (1 + 18 + 32 × 16)",
      "256 × (1 + 19 + 32 × 16)",
      "256 × (1 + 18 + 32 × 8)",
      "256 × (1 + 20 + 32 × 16)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số block $= 16\\text{ KiB} / 64\\text{ B} = \\mathbf{256}$ ($8$ bit Index). Offset $= 6$ bit ($64\\text{ B} = 512\\text{ bit} = \\mathbf{32 \\times 16}$ bit). $\\text{Tag} = 32 - 8 - 6 = \\mathbf{18}$ bit $+\\; 1$ Valid bit $\\Rightarrow \\mathbf{256 \\times (1 + 18 + 32 \\times 16)}$ bit.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-15",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.15",
    "source": "ôn tập cuối kì 20251 (Câu 30); ôn tập cuối kì 20252 (P2-56)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập tỉ số (vd: 2.72):",
    "acceptedAnswers": [
      "2.72"
    ],
    "question": "Cho CPU có tỉ lệ trượt cache lệnh (I-cache miss rate) $= 2\\%$, tỉ lệ trượt cache dữ liệu (D-cache miss rate) $= 4\\%$, thời gian phạt (miss penalty) $= 100$ chu kỳ, $\\text{CPI}_{\\text{base}}$ (cache lý tưởng) $= 2$, tỉ lệ lệnh Load/Store chiếm $36\\%$. Tỉ số $\\text{Actual CPI} / \\text{Base CPI}$ bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$\\text{Actual CPI} = 2 + (0.02 + 0.36 \\times 0.04) \\times 100 = 2 + 2 + 1.44 = 5.44$.<br>Tỉ số $\\frac{5.44}{2} = \\mathbf{2.72}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-16",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.16",
    "source": "ôn tập cuối kì 20251 (Câu 34); ôn tập cuối kì 20252 (P2-58)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị P (vd: 57):",
    "acceptedAnswers": [
      "57"
    ],
    "question": "Máy tính đánh địa chỉ theo byte với không gian bộ nhớ chính $4\\text{ GiB}$, Cache $256\\text{ KiB}$, kích thước Line $= 32\\text{ byte}$. Tính tổng $P = \\text{Tag}_{\\text{trực tiếp}} + \\text{Tag}_{\\text{liên kết toàn phần}} + \\text{Tag}_{\\text{tập hợp 4 đường}}$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Địa chỉ $32$ bit, Offset $= \\log_2(32) = 5$ bit, tổng số line $= 256\\text{ KiB}/32\\text{ B} = 8192 = 2^{13}$:<br>• Direct-mapped: $\\text{Index} = 13 \\Rightarrow \\text{Tag}_1 = 32 - 13 - 5 = 14$.<br>• Fully-associative: $\\text{Index} = 0 \\Rightarrow \\text{Tag}_2 = 32 - 5 = 27$.<br>• 4-way Set-associative: $2^{13}/4 = 2^{11}$ Set $\\Rightarrow \\text{Tag}_3 = 32 - 11 - 5 = 16$.<br>Tổng $P = 14 + 27 + 16 = \\mathbf{57}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-17",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.17",
    "source": "ôn tập cuối kì 20251 (Câu 50); ôn tập cuối kì 20252 (P2-55)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập số bit trường Tag (vd: 17):",
    "acceptedAnswers": [
      "17",
      "17 bit"
    ],
    "question": "Máy tính có địa chỉ bộ nhớ chính $32\\text{-bit}$ (đánh địa chỉ theo byte). Bộ nhớ Cache $128\\text{ KiB}$ tổ chức theo ánh xạ liên kết tập hợp $4\\text{ line/set}$, gồm $1024$ Set ($S_0\\text{–}S_{1023}$). Số bit của trường <code>Tag</code> là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số line $= 1024 \\times 4 = 4096$. Kích thước 1 line $= 128\\text{ KiB}/4096 = 32\\text{ B} \\Rightarrow \\text{Offset} = 5\\text{ bit}$.<br>$1024\\text{ Set} = 2^{10} \\Rightarrow \\text{Set} = 10\\text{ bit}$.<br>$\\text{Tag} = 32 - 10 - 5 = \\mathbf{17}$ bit.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-18",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.18",
    "source": "ôn tập cuối kì 20251 (Câu 55); ôn tập cuối kì 20252 (P2-47)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Phương pháp thay thế block trong cache nào là tối ưu nhất?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "LRU (Least Recently Used)",
      "LFU (Least Frequently Used)",
      "Random",
      "FIFO (First-In First-Out)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>LRU</strong> (thay thế khối ít được sử dụng nhất gần đây) tận dụng tốt nhất nguyên lý cục bộ thời gian nên cho tỉ lệ hit cao nhất trong các chiến lược thông dụng.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-19",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.19",
    "source": "ôn tập cuối kì 20251 (Câu 73); ôn tập cuối kì 20252 (P2-30)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập AMAT theo ns (vd: 2):",
    "acceptedAnswers": [
      "2",
      "2 ns",
      "2.0"
    ],
    "question": "Một CPU có chu kỳ xung nhịp $1\\text{ ns}$, thời gian trúng (hit time) $= 1$ chu kỳ, thời gian phạt trượt (miss penalty) $= 20$ chu kỳ, tỉ lệ trượt I-cache miss rate $= 5\\%$. Thời gian truy cập bộ nhớ trung bình (AMAT) bằng bao nhiêu nano-giây?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$\\text{AMAT} = \\text{Hit Time} + \\text{Miss Rate} \\times \\text{Miss Penalty} = 1 + 0.05 \\times 20 = 2\\text{ chu kỳ} = \\mathbf{2\\text{ ns}}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-20",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.20",
    "source": "ôn tập cuối kì 20251 (Câu 74); ôn tập cuối kì 20252 (P2-61)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập chỉ số Set (vd: 21):",
    "acceptedAnswers": [
      "21"
    ],
    "question": "Máy tính có địa chỉ bộ nhớ chính $32\\text{-bit}$ (đánh địa chỉ theo byte). Bộ nhớ Cache $128\\text{ KiB}$ tổ chức theo ánh xạ liên kết tập hợp $4\\text{ line/set}$, gồm $1024$ Set ($S_0\\text{–}S_{1023}$). Byte nhớ có địa chỉ <code>0x003D02AF</code> được ánh xạ vào Set số mấy?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Block $= 32\\text{ B}$ ($5$ bit Offset $[4:0]$), $1024$ Set ($10$ bit Set $[14:5]$).<br><code>0x003D02AF</code> có 16 bit thấp $= \\text{0x02AF} = 0000\\;0010\\;1010\\;1111_2$.<br>10 bit $[14:5]$ là <code>0000010101</code> $= \\text{0x15} = \\mathbf{21}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_5-21",
    "chapter": 2,
    "groupId": "2.2.5",
    "groupTitle": "Nhóm 5: Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Paging, TLB)",
    "exerciseCode": "Đề thi 2.2.5.21",
    "source": "ôn tập cuối kì 20252 (P2-3)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.5",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chỉ ra phương pháp ánh xạ mà mỗi Block của bộ nhớ chính chỉ được phép nạp vào <strong>duy nhất 1 Line</strong> cố định của bộ nhớ Cache?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Ánh xạ trực tiếp (Direct Mapped)",
      "Ánh xạ liên kết toàn phần (Fully Associative)",
      "Ánh xạ liên kết tập hợp (Set Associative)",
      "Cả ba phương pháp trên"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Trong <strong>ánh xạ trực tiếp</strong>, mỗi Block bộ nhớ chính ánh xạ cố định vào duy nhất $1$ Line xác định bởi công thức $\\text{Line} = \\text{Block} \\bmod \\text{Số lượng Line}$.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_6-1",
    "chapter": 2,
    "groupId": "2.2.6",
    "groupTitle": "Nhóm 6: Các phương pháp Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Lưu trữ ngoài",
    "exerciseCode": "Đề thi 2.2.6.1",
    "source": "cuối kì 20231 (#90c4ff); cuối kì 20232 (#90c4ff); cuối kì 20251 (#1ee23b); thi thử kì 20251 (Câu 7); ôn tập cuối kì 20251 (Câu 10); ôn tập cuối kì 20252 (P2-75)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho chương trình con xử lý vào-ra dữ liệu RISC-V dưới đây, trong đó CPU đang cố gắng đọc một từ dữ liệu từ một thiết bị ngoại vi. Phương pháp lập trình Vào-Ra (I/O programming method) nào đang được áp dụng?",
    "codeBlock": ".text\n    li s0, 0xFFFF0004   # Thanh ghi Dữ liệu (Data register)\n    li s1, 0xFFFF0000   # Thanh ghi Trạng thái (Status register)\nCheck:\n    lw   t1, 0(s1)      # Đọc thanh ghi trạng thái\n    andi t1, t1, 0x1\n    beq  t1, zero, Check\n    lw   t0, 0(s0)      # Đọc dữ liệu từ thiết bị",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "Thăm dò trạng thái (Polling / Programmed I/O)",
      "Vào-ra bằng cơ chế ngắt (Interrupt-driven I/O)",
      "Truy cập bộ nhớ trực tiếp (DMA)",
      "Vào-ra chồng lấn (Overlapping I/O)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vòng lặp <code>Check</code> liên tục đọc thanh ghi trạng thái <code>0xFFFF0000</code> và kiểm tra bit 0 cho tới khi bằng $1$ chính là cơ chế <strong>Thăm dò trạng thái (Polling)</strong>.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_6-2",
    "chapter": 2,
    "groupId": "2.2.6",
    "groupTitle": "Nhóm 6: Các phương pháp Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Lưu trữ ngoài",
    "exerciseCode": "Đề thi 2.2.6.2",
    "source": "cuối kì 20251 (#11f8e9); thi thử kì 20251 (Câu 13)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "What is the main disadvantage of polling when CPU reads from or writes to I/O devices?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "The CPU wastes time constantly checking device status.",
      "It has higher throughput than DMA for bulk transfer.",
      "Polling requires complex hardware interrupt controllers.",
      "Polling cannot be used with memory-mapped I/O."
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Nhược điểm lớn nhất của Polling là CPU phải lãng phí nhiều chu kỳ trong vòng lặp chờ đợi (busy-waiting) để kiểm tra liên tục thanh ghi trạng thái thiết bị.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_6-3",
    "chapter": 2,
    "groupId": "2.2.6",
    "groupTitle": "Nhóm 6: Các phương pháp Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Lưu trữ ngoài",
    "exerciseCode": "Đề thi 2.2.6.3",
    "source": "cuối kì 20251 (#614c78); thi thử kì 20251 (Câu 18)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "What is polling in the context of I/O programming?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "A method where the CPU checks the status of a device continuously",
      "A method where a device interrupts the CPU when data is ready",
      "A method where the DMA Controller manages direct memory transfer",
      "A method where I/O bypasses system buses completely"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Polling (Thăm dò) là kỹ thuật CPU chủ động kiểm tra liên tục thanh ghi trạng thái của thiết bị ngoại vi xem đã sẵn sàng trao đổi dữ liệu hay chưa.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_6-4",
    "chapter": 2,
    "groupId": "2.2.6",
    "groupTitle": "Nhóm 6: Các phương pháp Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Lưu trữ ngoài",
    "exerciseCode": "Đề thi 2.2.6.4",
    "source": "ôn tập cuối kì 20251 (Câu 12); ôn tập cuối kì 20252 (P2-10)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Tại sao phương pháp DMA (Direct Memory Access) lại hiệu quả hơn khi truyền các khối dữ liệu lớn?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Vì dữ liệu được truyền trực tiếp giữa thiết bị I/O và bộ nhớ chính thông qua DMAC mà không cần đi qua CPU.",
      "Vì DMA dùng một tập lệnh phần mềm đặc biệt chạy nhanh hơn gấp 10 lần trên thanh ghi CPU.",
      "Vì DMA không cần dùng đến bộ nhớ chính (RAM) khi truyền dữ liệu.",
      "Vì DMA chuyển toàn bộ dữ liệu trực tiếp qua thanh ghi L1 Cache của CPU."
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Khi truyền khối dữ liệu lớn, bộ điều khiển DMA (DMAC) mượn quyền bus để truyền thẳng dữ liệu giữa I/O và RAM mà không qua CPU từng byte/word một, giải phóng CPU làm việc khác.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_6-5",
    "chapter": 2,
    "groupId": "2.2.6",
    "groupTitle": "Nhóm 6: Các phương pháp Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Lưu trữ ngoài",
    "exerciseCode": "Đề thi 2.2.6.5",
    "source": "ôn tập cuối kì 20251 (Câu 18); ôn tập cuối kì 20252 (P2-20)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thứ tự nào sau đây phản ánh đúng sự phát triển về hiệu suất (từ thấp đến cao) đối với việc sử dụng CPU trong I/O?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Programmed I/O -> Interrupt-driven -> DMA",
      "DMA -> Interrupt-driven -> Programmed I/O",
      "Interrupt-driven -> Programmed I/O -> DMA",
      "Programmed I/O -> DMA -> Interrupt-driven"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Thứ tự phát triển nâng dần hiệu suất sử dụng CPU: <strong>Programmed I/O (Polling) &rarr; Interrupt-driven I/O (Ngắt) &rarr; DMA</strong> (giảm dần sự bận rộn không cần thiết của CPU).</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_6-6",
    "chapter": 2,
    "groupId": "2.2.6",
    "groupTitle": "Nhóm 6: Các phương pháp Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Lưu trữ ngoài",
    "exerciseCode": "Đề thi 2.2.6.6",
    "source": "ôn tập cuối kì 20251 (Câu 19); ôn tập cuối kì 20252 (P2-73)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong thực tế hiện nay, phát biểu nào sau đây <strong>SAI</strong> về việc sử dụng HDD và SSD trên các thiết bị?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Camera giám sát (CCTV) ghi hình 24/7 thường ưu tiên dùng SSD vì SSD có độ bền ghi/xóa vượt trội HDD khi ghi liên tục với dung lượng lớn",
      "Các máy chơi game thế hệ mới (như PS5, Xbox Series X) sử dụng SSD để giảm mạnh thời gian tải màn chơi",
      "SSD được ưu tiên làm ổ cài hệ điều hành trên Laptop/PC nhờ tốc độ truy xuất ngẫu nhiên nhanh",
      "HDD vẫn phổ biến trong hệ thống Server lưu trữ (NAS) hoặc trung tâm dữ liệu nhờ dung lượng lớn và giá thành trên GB rẻ"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Camera CCTV ghi hình liên tục 24/7 cần dung lượng lưu trữ lớn, chi phí/GB thấp và độ bền ghi tuần tự cao nên thực tế ưu tiên dùng <strong>HDD chuyên dụng</strong> thay vì SSD (SSD có giới hạn chu kỳ ghi/xóa tế bào nhớ flash TBW và giá thành cao hơn).</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_6-7",
    "chapter": 2,
    "groupId": "2.2.6",
    "groupTitle": "Nhóm 6: Các phương pháp Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Lưu trữ ngoài",
    "exerciseCode": "Đề thi 2.2.6.7",
    "source": "ôn tập cuối kì 20251 (Câu 21); ôn tập cuối kì 20252 (P2-74)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong phương pháp vào/ra bằng chương trình (Programmed I/O), CPU dành phần lớn thời gian để làm gì khi đợi thiết bị ngoại vi sẵn sàng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Kiểm tra trạng thái thiết bị trong một vòng lặp (Polling).",
      "Tự động chuyển sang chế độ ngủ (Sleep mode).",
      "Thực hiện các tiến trình khác của hệ điều hành.",
      "Nhượng quyền bus hoàn toàn cho DMAC xử lý."
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Trong Programmed I/O, CPU tốn phần lớn thời gian chờ đợi bằng cách kiểm tra lặp đi lặp lại cờ trạng thái (Polling).</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_6-8",
    "chapter": 2,
    "groupId": "2.2.6",
    "groupTitle": "Nhóm 6: Các phương pháp Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Lưu trữ ngoài",
    "exerciseCode": "Đề thi 2.2.6.8",
    "source": "ôn tập cuối kì 20251 (Câu 39); ôn tập cuối kì 20252 (P2-26)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Bộ điều khiển truy cập bộ nhớ trực tiếp (<code>DMAC</code>) bao gồm đầy đủ những thành phần nào sau đây?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Logic điều khiển, Thanh ghi dữ liệu, Thanh ghi địa chỉ, Bộ đếm dữ liệu (Data Counter)",
      "Logic điều khiển, Thanh ghi con trỏ lệnh (PC), Thanh ghi dữ liệu, ALU",
      "Thanh ghi lệnh (IR), Bộ đếm dữ liệu, Bộ nhớ Cache L1, Thanh ghi địa chỉ",
      "Logic điều khiển, Bộ giải mã lệnh (Decoder), Thanh ghi PC, Thanh ghi địa chỉ"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>DMAC gồm 4 phần chính: <strong>Thanh ghi địa chỉ</strong> (Address Reg), <strong>Bộ đếm dữ liệu</strong> (Data Count), <strong>Thanh ghi dữ liệu</strong> (Data Reg) và <strong>Logic điều khiển</strong> (xin bus <code>BRQ/BGT</code>, phát tín hiệu đọc/ghi). DMAC không có PC hay ALU.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_6-9",
    "chapter": 2,
    "groupId": "2.2.6",
    "groupTitle": "Nhóm 6: Các phương pháp Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Lưu trữ ngoài",
    "exerciseCode": "Đề thi 2.2.6.9",
    "source": "ôn tập cuối kì 20251 (Câu 40); ôn tập cuối kì 20252 (P2-72)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.6",
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
      "DMA truyền theo khối (Burst-mode DMA)",
      "DMA lấy chu kỳ (Cycle-stealing DMA)",
      "Ba phương pháp đều có độ phức tạp phần cứng như nhau"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>DMA trong suốt (Transparent DMA)</strong> chỉ tranh thủ sử dụng bus trong những pha CPU không truy cập bộ nhớ (không làm chậm tiến độ CPU chút nào) nên tối ưu hiệu năng nhưng mạch phát hiện khe thời gian rất phức tạp.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_6-10",
    "chapter": 2,
    "groupId": "2.2.6",
    "groupTitle": "Nhóm 6: Các phương pháp Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Lưu trữ ngoài",
    "exerciseCode": "Đề thi 2.2.6.10",
    "source": "ôn tập cuối kì 20251 (Câu 45); ôn tập cuối kì 20252 (P2-27)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đặc điểm nào sau đây <strong>KHÔNG PHẢI</strong> là ưu điểm của ổ thể rắn SSD so với ổ đĩa từ HDD truyền thống?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Giá thành trên mỗi đơn vị dung lượng (VNĐ/GB) rẻ hơn",
      "Tốc độ truy xuất dữ liệu nhanh hơn và độ trễ thấp hơn",
      "Không có bộ phận chuyển động cơ học nên không gây tiếng ồn",
      "Khả năng chống sốc vật lý và va đập tốt hơn"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>SSD vượt trội HDD về tốc độ, độ trễ, không tiếng ồn và chống sốc; nhược điểm của SSD so với HDD là <strong>chi phí trên mỗi GB cao hơn</strong>.</p>",
    "archivedChapter": 6,
    "archivedReason": "CA.RISCV.2025 Chương 6 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-2_2_6-11",
    "chapter": 2,
    "groupId": "2.2.6",
    "groupTitle": "Nhóm 6: Các phương pháp Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Lưu trữ ngoài",
    "exerciseCode": "Đề thi 2.2.6.11",
    "source": "ôn tập cuối kì 20251 (Câu 75); ôn tập cuối kì 20252 (P2-42)",
    "examTags": [
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "2.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Những khẳng định nào sau đây là đúng về bộ điều khiển ngắt <code>PIC</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "PIC là viết tắt của Programmable Interrupt Controller và các đường vào yêu cầu ngắt (IRQ) có quy định mức ưu tiên",
      "PIC là viết tắt của Peripheral I/O Cache dùng tăng tốc truyền dữ liệu qua DMA",
      "Yêu cầu ngắt có mức ưu tiên cao nhất trong PIC tuyệt đối không bao giờ bị cấm/che bởi thanh ghi mặt nạ (IMR)",
      "PIC chỉ phục vụ duy nhất 1 nguồn ngắt cố định tại một thời điểm, không có thanh ghi mặt nạ"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>PIC (Programmable Interrupt Controller)</strong> quản lý nhiều đường yêu cầu ngắt <code>IRQ</code> theo thứ tự ưu tiên lập trình được (vẫn có thanh ghi mặt nạ IMR để che từng đường ngắt maskable khi cần).</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-3_2_9-1",
    "chapter": 3,
    "groupId": "3.2.9",
    "groupTitle": "Nhóm 9: Thực hành RARS, Chỉ thị Hợp ngữ (.data, .word, .asciz), Lời gọi hệ thống (ecall) và Vào-Ra MMIO",
    "exerciseCode": "Đề thi 3.2.9.1",
    "source": "cuối kì 20222 (#a1e199); cuối kì 20241 (#e); cuối kì 20242 (#ale199); ôn tập cuối kì 20252 (P1-38)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "3.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho máy tính dùng bộ xử lý RISC-V (RV32I) có 4 cổng vào-ra MMIO 32-bit gán tại các địa chỉ: <code>P1: 0xF000000C</code>, <code>P2: 0xF0000010</code>, <code>P3: 0xF0000014</code>, <code>P4: 0xF0000018</code>. Đoạn chương trình hợp ngữ sau thực hiện nhiệm vụ gì?",
    "codeBlock": "lui s0, 0xF0000\nlw  t0, 0x10(s0)\nsw  t0, 0x18(s0)\nlw  t1, 0x0C(s0)\nsw  t1, 0x14(s0)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "Nhận dữ liệu từ cổng P2 đưa ra cổng P4, nhận dữ liệu từ cổng P1 đưa ra cổng P3",
      "Nhận dữ liệu từ cổng P1 đưa ra cổng P2, nhận dữ liệu từ cổng P3 đưa ra cổng P4",
      "Nhận dữ liệu từ cổng P4 đưa ra cổng P2, nhận dữ liệu từ cổng P3 đưa ra cổng P1",
      "Nhận dữ liệu từ cổng P1 đưa ra cổng P4, nhận dữ liệu từ cổng P2 đưa ra cổng P3"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>lui s0, 0xF0000</code> đặt địa chỉ nền <code>s0 = 0xF0000000</code>.<br>&bull; <code>lw t0, 0x10(s0)</code> đọc từ <strong>P2</strong> (<code>0xF0000010</code>) rồi <code>sw t0, 0x18(s0)</code> ghi ra <strong>P4</strong> (<code>0xF0000018</code>).<br>&bull; <code>lw t1, 0x0C(s0)</code> đọc từ <strong>P1</strong> (<code>0xF000000C</code>) rồi <code>sw t1, 0x14(s0)</code> ghi ra <strong>P3</strong> (<code>0xF0000014</code>).</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (MMIO/Polling/Interrupt CSRs - tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-3_2_9-2",
    "chapter": 3,
    "groupId": "3.2.9",
    "groupTitle": "Nhóm 9: Thực hành RARS, Chỉ thị Hợp ngữ (.data, .word, .asciz), Lời gọi hệ thống (ecall) và Vào-Ra MMIO",
    "exerciseCode": "Đề thi 3.2.9.2",
    "source": "cuối kì 20251 (#ff3a2b); thi thử kì 20251 (Câu 3); ôn tập cuối kì 20252 (P2-2)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "3.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trên thiết bị mô phỏng Digital Lab Sim (RARS), thanh ghi byte điều khiển LED 7 thanh được ánh xạ tại địa chỉ <code>0xFFFF0010</code> (bit 0=a [trên], bit 1=b [phải trên], bit 2=c [phải dưới], bit 3=d [đáy], bit 4=e [trái dưới], bit 5=f [trái trên], bit 6=g [giữa], bit 7=dấu chấm). Đoạn mã nào hiển thị chữ số <strong>1</strong>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "li t0, 0xFFFF0010 ; li t1, 6 ; sb t1, 0(t0)",
      "li t0, 0xFFFF0010 ; li t1, 1 ; sb t1, 0(t0)",
      "li t0, 0xFFFF0010 ; li t1, 0x02 ; sb t1, 0(t0)",
      "li t0, 0xFFFF0010 ; li t1, 0x3F ; sb t1, 0(t0)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Chữ số <strong>1</strong> làm sáng 2 đoạn bên phải là <code>b</code> (bit 1) và <code>c</code> (bit 2). Giá trị byte tương ứng là $0000\\;0110_2 = 2^1 + 2^2 = \\mathbf{6}$ ghi ra địa chỉ <code>0xFFFF0010</code>.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (MMIO/Polling/Interrupt CSRs - tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-3_2_9-3",
    "chapter": 3,
    "groupId": "3.2.9",
    "groupTitle": "Nhóm 9: Thực hành RARS, Chỉ thị Hợp ngữ (.data, .word, .asciz), Lời gọi hệ thống (ecall) và Vào-Ra MMIO",
    "exerciseCode": "Đề thi 3.2.9.3",
    "source": "cuối kì 20251 (#13a85a); thi thử kì 20251 (Câu 27); ôn tập cuối kì 20251 (Câu 5); ôn tập cuối kì 20252 (P2-29)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "3.1.6",
    "questionType": "fill",
    "canFillBlank": true,
    "fillPrompt": "Nhập ký tự hiển thị ra Display MMIO:",
    "acceptedAnswers": [
      "C",
      "'C'"
    ],
    "question": "Xét chương trình MMIO trên RARS dưới đây. Nếu người dùng nhấn phím <code>'A'</code> trong Keyboard Simulator, ký tự nào sẽ được hiển thị trên Display Simulator? (chỉ ghi ký tự, không viết dấu ngoặc kép):",
    "codeBlock": ".eqv KEY_CODE      0xFFFF0004\n.eqv KEY_READY     0xFFFF0000\n.eqv DISPLAY_CODE  0xFFFF000C\n.eqv DISPLAY_READY 0xFFFF0008\n.text\n    li a0, KEY_CODE\n    li a1, KEY_READY\n    li s0, DISPLAY_CODE\n    li s1, DISPLAY_READY\nloop:\nWaitForKey:\n    lw  t1, 0(a1)\n    beq t1, zero, WaitForKey\nReadKey:\n    lw  t0, 0(a0)\nWaitForDis:\n    lw  t2, 0(s1)\n    beq t2, zero, WaitForDis\nEncrypt:\n    addi t0, t0, 2\nShowKey:\n    sw  t0, 0(s0)\n    j   loop",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mã ASCII của phím <code>'A'</code> là $65$. Lệnh <code>addi t0, t0, 2</code> cộng thêm 2 thành $67$ — chính là mã ASCII của ký tự <strong><code>C</code></strong> được xuất ra <code>DISPLAY_CODE</code>.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (MMIO/Polling/Interrupt CSRs - tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-3_2_9-4",
    "chapter": 3,
    "groupId": "3.2.9",
    "groupTitle": "Nhóm 9: Thực hành RARS, Chỉ thị Hợp ngữ (.data, .word, .asciz), Lời gọi hệ thống (ecall) và Vào-Ra MMIO",
    "exerciseCode": "Đề thi 3.2.9.4",
    "source": "cuối kì 20251 (#75b); thi thử kì 20251 (Câu 32)",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "3.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho máy tính RISC-V có 4 cổng vào-ra ánh xạ bộ nhớ (MMIO) ở các địa chỉ: <code>P1: 0xFFFF000C</code>, <code>P2: 0xFFFF0010</code>, <code>P3: 0xFFFF0014</code>, <code>P4: 0xFFFF0018</code>. Đoạn mã hợp ngữ sau thực hiện thao tác gì?",
    "codeBlock": "lui s0, 0xFFFF0\nlw  t0, 0x0C(s0)\nsw  t0, 0x18(s0)\nlw  t1, 0x10(s0)\nsw  t1, 0x14(s0)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "Nhận dữ liệu từ P1 xuất ra P4; nhận dữ liệu từ P2 xuất ra P3",
      "Nhận dữ liệu từ P1 xuất ra P3; nhận dữ liệu từ P2 xuất ra P4",
      "Nhận dữ liệu từ P4 xuất ra P1; nhận dữ liệu từ P3 xuất ra P2",
      "Nhận dữ liệu từ P1 xuất ra P2; nhận dữ liệu từ P3 xuất ra P4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>lui s0, 0xFFFF0</code> đặt $s_0 = \\text{0xFFFF0000}$. Offset <code>0x0C</code> (P1) được đọc vào $t_0$ rồi ghi ra <code>0x18</code> (P4); offset <code>0x10</code> (P2) được đọc vào $t_1$ rồi ghi ra <code>0x14</code> (P3).</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (MMIO/Polling/Interrupt CSRs - tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-3_2_9-5",
    "chapter": 3,
    "groupId": "3.2.9",
    "groupTitle": "Nhóm 9: Thực hành RARS, Chỉ thị Hợp ngữ (.data, .word, .asciz), Lời gọi hệ thống (ecall) và Vào-Ra MMIO",
    "exerciseCode": "Đề thi 3.2.9.5",
    "source": "Lab - cuối kì 20222 (Câu 1); Lab - cuối kì 20232 (Câu 9)",
    "examTags": [
      "Lab"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "3.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chọn phát biểu đúng về chương trình xử lý bàn phím ma trận dưới đây viết cho trình mô phỏng RARS (User-level Trap CSRs: <code>utvec</code>, <code>ustatus</code>, <code>uie</code>, <code>uepc</code>, <code>uret</code>):",
    "codeBlock": ".eqv IN_ADDRESS_HEXA_KEYBOARD 0xFFFF0012\n.data\n    Message: .asciz \"Key is pressed\\n\"\n.text\nmain:\n    la   t0, IntSR\n    csrw utvec, t0           # Dang ky dia chi trinh phuc vu ngat\n    li   t0, 0x100\n    csrs uie, t0             # Bat ngat ngoai vi (UEIE)\n    csrsi ustatus, 1         # Bat co ngat toan cuc UIE\n    li   t1, IN_ADDRESS_HEXA_KEYBOARD\n    li   t3, 0x80\n    sb   t3, 0(t1)           # Cho phep ban phim ma tran phat ngat\nLoop:\n    nop\n    j    Loop\nIntSR:\n    li   a7, 4\n    la   a0, Message\n    ecall\n    csrr t0, uepc\n    addi t0, t0, 4\n    csrw uepc, t0\n    uret",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "Chương trình cài đặt cơ chế ngắt (Interrupt): khi có phím bấm trên keyboard matrix, CPU tự động chuyển sang trình phục vụ ngắt IntSR (đăng ký qua utvec) rồi kết thúc bằng uret",
      "Chương trình cài đặt cơ chế thăm dò (Polling): vòng lặp chính liên tục đọc cổng 0xFFFF0012 để kiểm tra phím rồi in thông báo",
      "Chương trình cài đặt cơ chế ngắt trong đó vòng Loop chủ động gọi trực tiếp jal IntSR để kiểm tra phím",
      "Chương trình cài đặt cơ chế Polling trong đó chương trình chính liên tục gọi hàm ecall trong Loop"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Chương trình đăng ký vector ngắt <code>IntSR</code> vào thanh ghi <code>utvec</code>, bật ngắt trong <code>uie/ustatus</code> và ghi <code>0x80</code> ra cổng <code>0xFFFF0012</code> để bàn phím phát tín hiệu ngắt phần cứng (<strong>Interrupt</strong>), hoàn toàn không tự thăm dò trong <code>Loop</code>.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (MMIO/Polling/Interrupt CSRs - tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-3_2_9-6",
    "chapter": 3,
    "groupId": "3.2.9",
    "groupTitle": "Nhóm 9: Thực hành RARS, Chỉ thị Hợp ngữ (.data, .word, .asciz), Lời gọi hệ thống (ecall) và Vào-Ra MMIO",
    "exerciseCode": "Đề thi 3.2.9.6",
    "source": "Lab - cuối kì 20222 (Câu 6); Lab - cuối kì 20232 (Câu 11)",
    "examTags": [
      "Lab"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "3.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chương trình RISC-V sau thực hiện quét bàn phím ma trận 4x4 trong công cụ RARS Digital Lab Sim (với <code>t1 = 0xFFFF0012 [IN_ADDRESS]</code>, <code>t2 = 0xFFFF0014 [OUT_ADDRESS]</code>). Phát biểu nào sau đây mô tả ĐÚNG hoạt động của chương trình?",
    "codeBlock": "polling:\n    li   t3, 0x08\n    sb   t3, 0(t1)\n    lb   a0, 0(t2)\nprint:\n    li   a7, 34\n    ecall\nsleep:\n    li   a0, 100\n    li   a7, 32\n    ecall\n    j    polling",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "Chương trình chỉ quét hàng 4 (bit 3 = 0x08) của bàn phím ma trận bằng phương pháp thăm dò (polling) thông qua ghi mã hàng vào 0xFFFF0012",
      "Chương trình quét 1 hàng của bàn phím bằng cách ghi chỉ số hàng trong t3 vào địa chỉ 0xFFFF0014",
      "Chương trình tự động quét luân phiên cả 4 hàng của bàn phím ma trận bằng phương pháp thăm dò",
      "Chương trình hoạt động dựa trên cơ chế ngắt phần cứng (Interrupt) kích hoạt hàng 4 mỗi 100 ms"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Giá trị <code>0x08</code> ($0000\\;1000_2$) chỉ bật bit 3 (chọn duy nhất <strong>hàng 4</strong>), ghi vào địa chỉ chọn hàng <code>0xFFFF0012</code> rồi đọc mã phím từ <code>0xFFFF0014</code> và in ra dạng Hexa (<code>a7 = 34</code>) trong vòng lặp thăm dò (polling) vô hạn.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (MMIO/Polling/Interrupt CSRs - tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-3_2_9-14",
    "chapter": 3,
    "groupId": "3.2.9",
    "groupTitle": "Nhóm 9: Thực hành RARS, Chỉ thị Hợp ngữ (.data, .word, .asciz), Lời gọi hệ thống (ecall) và Vào-Ra MMIO",
    "exerciseCode": "Đề thi 3.2.9.14",
    "source": "Lab - cuối kì 20232 (Câu 15)",
    "examTags": [
      "Lab"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "3.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đoạn mã RISC-V dưới đây điều khiển thiết bị Bot MMIO di chuyển liên tục thành hình vuông (biết cổng điều khiển góc hướng <code>HEADING</code> tại <code>0xFFFF8010</code> và cổng kích hoạt chuyển động <code>MOVING</code> tại <code>0xFFFF8050</code>; <code>a7 = 32</code> là dịch vụ sleep theo ms). Cặp lệnh thích hợp điền vào <code>[[1]]</code> và <code>[[2]]</code> là gì?",
    "codeBlock": ".text\n    li  s0, 0xFFFF8010\n    li  s1, 0xFFFF8050\n    li  t0, 0\n    li  t1, 1\n    [[1]]\nl1:\n    addi t0, t0, 90\n    [[2]]\n    li  a7, 32\n    li  a0, 2000\n    ecall\n    j   l1",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "[[1]]: sw t1, 0(s1) | [[2]]: sw t0, 0(s0)",
      "[[1]]: sw t0, 0(s0) | [[2]]: sw t1, 0(s1)",
      "[[1]]: sw t1, 0(s0) | [[2]]: sw t0, 0(s1)",
      "[[1]]: sw t0, 0(s1) | [[2]]: sw t1, 0(s0)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Thanh ghi $t_1 = 1$ dùng để bật trạng thái chạy cho cổng <code>MOVING</code> (trỏ bởi $s_1 = \\text{0xFFFF8050}$), nên <code>[[1]] = sw t1, 0(s1)</code>. Trong vòng lặp, mỗi lần tăng góc $t_0$ thêm $90^\\circ$ cần cập nhật ra cổng <code>HEADING</code> (trỏ bởi $s_0 = \\text{0xFFFF8010}$), nên <code>[[2]] = sw t0, 0(s0)</code>.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (MMIO/Polling/Interrupt CSRs - tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-3_2_9-20",
    "chapter": 3,
    "groupId": "3.2.9",
    "groupTitle": "Nhóm 9: Thực hành RARS, Chỉ thị Hợp ngữ (.data, .word, .asciz), Lời gọi hệ thống (ecall) và Vào-Ra MMIO",
    "exerciseCode": "Đề thi 3.2.9.20",
    "source": "Lab - cuối kì 20232 (Câu 28)",
    "examTags": [
      "Lab"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "3.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Lựa chọn phát biểu mô tả đúng nhất chức năng của đoạn mã RISC-V dưới đây (giao tiếp bàn phím MMIO):",
    "codeBlock": ".eqv KEY_CODE  0xFFFF0004\n.eqv KEY_READY 0xFFFF0000\n.text\n    li  t5, KEY_CODE\n    li  t6, KEY_READY\nloop:\nWait:\n    lw  t1, 0(t6)\n    beq t1, zero, Wait\n    lw  t0, 0(t5)\n    j   loop",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "Chờ có 1 phím sẵn sàng rồi đọc mã phím đó lưu vào thanh ghi t0",
      "Chờ có 1 phím sẵn sàng rồi xuất mã phím đó ra màn hình",
      "Đọc mã phím lưu vào thanh ghi t1, đọc trạng thái bàn phím lưu vào thanh ghi t0",
      "Chờ có 1 phím sẵn sàng rồi đọc mã phím đó lưu vào thanh ghi t1"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vòng lặp <code>Wait</code> liên tục đọc cờ <code>KEY_READY</code> (tại <code>t6 = 0xFFFF0000</code>) vào thanh ghi <code>t1</code>; khi <code>t1 &ne; 0</code> (có phím mới được nhấn), lệnh <code>lw t0, 0(t5)</code> đọc mã phím từ <code>KEY_CODE</code> lưu vào thanh ghi <strong><code>t0</code></strong>.</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (MMIO/Polling/Interrupt CSRs - tách khỏi pool Giữa kỳ Chương 1-4)"
  },
  {
    "id": "pdf-3_2_9-22",
    "chapter": 3,
    "groupId": "3.2.9",
    "groupTitle": "Nhóm 9: Thực hành RARS, Chỉ thị Hợp ngữ (.data, .word, .asciz), Lời gọi hệ thống (ecall) và Vào-Ra MMIO",
    "exerciseCode": "Đề thi 3.2.9.22",
    "source": "Lab - cuối kì 20232 (Câu 32)",
    "examTags": [
      "Lab"
    ],
    "pdfPage": null,
    "printedPage": null,
    "relatedTheoryId": "3.1.6",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trên RARS Digital Lab Sim, 2 LED 7 thanh có địa chỉ byte ánh xạ như dưới đây. Để hiển thị chữ số <strong>9</strong> trên <strong>LED TRÁI</strong> (quy ước bit $0..6 = a..g$), đoạn lệnh nào đúng?",
    "codeBlock": ".eqv SEVENSEG_LEFT  0xFFFF0011\n.eqv SEVENSEG_RIGHT 0xFFFF0010",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "li t0, 0xFFFF0011 ; li a0, 0x6F ; sb a0, 0(t0)",
      "li t0, 0xFFFF0011 ; li a0, 0x7D ; sb a0, 0(t0)",
      "li t0, 0xFFFF0010 ; li a0, 0x6F ; sb a0, 0(t0)",
      "li t0, 0xFFFF0010 ; li a0, 0x7D ; sb a0, 0(t0)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>&bull; Địa chỉ LED TRÁI là <code>0xFFFF0011</code>.<br>&bull; Số <strong>9</strong> bật các đoạn <code>a, b, c, d, f, g</code> (chỉ tắt <code>e</code> ở bit 4 và dấu chấm ở bit 7): $0110\\;1111_2 = \\mathbf{\\text{0x6F}}$ (còn <code>0x7D</code> là số 6).</p>",
    "archivedChapter": 7,
    "archivedReason": "CA.RISCV.2025 Chương 7 (MMIO/Polling/Interrupt CSRs - tách khỏi pool Giữa kỳ Chương 1-4)"
  }
];

  root.KTMT_THEORY_CH5_CH7 = [
  {
    "id": "2.1.4",
    "chapter": 2,
    "code": "2.1.4",
    "title": "Tổ chức Bộ xử lý (Datapath, Control Unit) và Đường ống lệnh (Pipeline)",
    "pdfPage": 40,
    "printedPage": 39,
    "linkedGroups": [
      "2.2.4"
    ],
    "summary": "Đường dữ liệu đơn chu kỳ 5 công đoạn RV32I, tín hiệu điều khiển, hiệu năng Pipeline (k + n - 1 + stall), 3 loại Hazard, Forwarding, Load-Use Stall và Branch Prediction 1-bit/2-bit.",
    "content": "\n        <h4>1. Năm công đoạn thực thi lệnh (RV32I Datapath)</h4>\n        <p>Mỗi câu lệnh RISC-V 32-bit đi qua tối đa <strong>5 công đoạn chuẩn</strong> từ trái sang phải:</p>\n        <ol>\n          <li><strong>IF (Instruction Fetch):</strong> Dùng giá trị <code>PC</code> đọc mã lệnh 32-bit từ <em>Instruction Memory</em> và tính $PC + 4$.</li>\n          <li><strong>ID (Instruction Decode &amp; Register Read):</strong> Giải mã <code>opcode/funct3/funct7</code>, đọc thanh ghi nguồn <code>rs1</code> (<code>Inst[19:15]</code>) và <code>rs2</code> (<code>Inst[24:20]</code>) từ <em>Register File</em>, mở rộng dấu hằng số tại <code>Imm Gen</code>.</li>\n          <li><strong>EX (Execute / Address Calculation):</strong> Bộ <code>ALU</code> thực hiện phép toán số học/logic, tính địa chỉ bộ nhớ ($rs1 + \\text{imm}$), hoặc kiểm tra điều kiện rẽ nhánh; bộ cộng riêng tính địa chỉ đích nhánh $PC + \\text{imm}_B$.</li>\n          <li><strong>MEM (Memory Access):</strong> Đọc (<code>lw/lh/lb</code>) hoặc ghi (<code>sw/sh/sb</code>) tại <em>Data Memory</em> (các lệnh số học R-type/I-type bỏ qua công đoạn này).</li>\n          <li><strong>WB (Write Back):</strong> Ghi kết quả (từ <code>ALU result</code>, <code>MemData</code> hoặc $PC + 4$ với <code>jal/jalr</code>) về lại thanh ghi đích <code>rd</code> (<code>Inst[11:7]</code>).</li>\n        </ol>\n\n        <figure class=\"theory-svg-diagram\">\n          <svg viewBox=\"0 0 680 120\" width=\"660\" height=\"115\" role=\"img\" aria-label=\"Sơ đồ đường ống lệnh 5 công đoạn IF ID EX MEM WB\">\n            <rect x=\"14\" y=\"34\" width=\"110\" height=\"52\" rx=\"6\" class=\"svg-box-accent\" />\n            <text x=\"69\" y=\"57\" text-anchor=\"middle\" class=\"svg-title\">IF</text>\n            <text x=\"69\" y=\"75\" text-anchor=\"middle\" class=\"svg-sub\">Fetch (IMEM)</text>\n\n            <rect x=\"146\" y=\"34\" width=\"110\" height=\"52\" rx=\"6\" class=\"svg-box\" />\n            <text x=\"201\" y=\"57\" text-anchor=\"middle\" class=\"svg-title\">ID</text>\n            <text x=\"201\" y=\"75\" text-anchor=\"middle\" class=\"svg-sub\">Decode &amp; RF</text>\n\n            <rect x=\"278\" y=\"34\" width=\"110\" height=\"52\" rx=\"6\" class=\"svg-box-primary\" />\n            <text x=\"333\" y=\"57\" text-anchor=\"middle\" class=\"svg-title-primary\">EX</text>\n            <text x=\"333\" y=\"75\" text-anchor=\"middle\" class=\"svg-sub\">ALU / Branch</text>\n\n            <rect x=\"410\" y=\"34\" width=\"110\" height=\"52\" rx=\"6\" class=\"svg-box\" />\n            <text x=\"465\" y=\"57\" text-anchor=\"middle\" class=\"svg-title\">MEM</text>\n            <text x=\"465\" y=\"75\" text-anchor=\"middle\" class=\"svg-sub\">Data Memory</text>\n\n            <rect x=\"542\" y=\"34\" width=\"122\" height=\"52\" rx=\"6\" class=\"svg-box-accent\" />\n            <text x=\"603\" y=\"57\" text-anchor=\"middle\" class=\"svg-title\">WB</text>\n            <text x=\"603\" y=\"75\" text-anchor=\"middle\" class=\"svg-sub\">Write Back (rd)</text>\n\n            <line x1=\"124\" y1=\"60\" x2=\"146\" y2=\"60\" class=\"svg-line\" />\n            <line x1=\"256\" y1=\"60\" x2=\"278\" y2=\"60\" class=\"svg-line\" />\n            <line x1=\"388\" y1=\"60\" x2=\"410\" y2=\"60\" class=\"svg-line\" />\n            <line x1=\"520\" y1=\"60\" x2=\"542\" y2=\"60\" class=\"svg-line\" />\n          </svg>\n          <figcaption>Hình 2.4 – Đường ống lệnh (Pipeline) 5 công đoạn RV32I và các thanh ghi đệm IF/ID, ID/EX, EX/MEM, MEM/WB</figcaption>\n        </figure>\n\n        <h4>2. Bảng Tín hiệu điều khiển chuẩn trên Datapath đơn chu kỳ RV32I</h4>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr><th>Loại lệnh</th><th>ALUSrc</th><th>MemtoReg</th><th>RegWrite</th><th>MemRead</th><th>MemWrite</th><th>Branch</th><th>ALUOp</th></tr>\n            </thead>\n            <tbody>\n              <tr><td><strong>R-type</strong> (<code>add, sub, slt...</code>)</td><td><code>0</code> (ReadData2)</td><td><code>0</code> (ALU)</td><td><code>1</code></td><td><code>0</code></td><td><code>0</code></td><td><code>0</code></td><td><code>10</code></td></tr>\n              <tr><td><strong>I-ALU</strong> (<code>addi, ori...</code>)</td><td><code>1</code> (Imm)</td><td><code>0</code> (ALU)</td><td><code>1</code></td><td><code>0</code></td><td><code>0</code></td><td><code>0</code></td><td><code>10 / 00</code></td></tr>\n              <tr><td><strong>Load</strong> (<code>lw, lh, lb</code>)</td><td><code>1</code> (Imm)</td><td><code>1</code> (MemData)</td><td><code>1</code></td><td><code>1</code></td><td><code>0</code></td><td><code>0</code></td><td><code>00</code> (+)</td></tr>\n              <tr><td><strong>Store</strong> (<code>sw, sh, sb</code>)</td><td><code>1</code> (Imm)</td><td><code>X</code> (Don't care)</td><td><code>0</code></td><td><code>0</code></td><td><code>1</code></td><td><code>0</code></td><td><code>00</code> (+)</td></tr>\n              <tr><td><strong>Branch</strong> (<code>beq, bne</code>)</td><td><code>0</code> (ReadData2)</td><td><code>X</code> (Don't care)</td><td><code>0</code></td><td><code>0</code></td><td><code>0</code></td><td><code>1</code></td><td><code>01</code> (-)</td></tr>\n            </tbody>\n          </table>\n        </div>\n\n        <h4>3. Công thức Hiệu năng Đường ống lệnh (Pipelining)</h4>\n        <div class=\"callout callout-formula\">\n          <div class=\"callout-title\">📐 Thời gian chu kỳ &amp; Tổng thời gian thực thi của Pipeline $k$ công đoạn</div>\n          <ul>\n            <li><strong>Chu kỳ xung nhịp Pipeline ($T_{\\text{pipe}}$):</strong> Bằng độ trễ của công đoạn <strong>chậm nhất</strong> (cộng trễ thanh ghi đệm nếu đề cho):\n              $$T_{\\text{pipe}} = \\max(T_1, T_2, \\dots, T_k)$$\n              <em>(Còn CPU đơn chu kỳ không pipeline: $T_{\\text{single}} = \\sum_{i=1}^{k} T_i$)</em>.</li>\n            <li><strong>Tổng số chu kỳ thực thi $n$ lệnh</strong> (với $k$ công đoạn và $S$ chu kỳ stall/bubble phát sinh):\n              $$\\text{Số chu kỳ} = k + (n - 1) + S \\qquad \\Longrightarrow \\qquad t_{\\text{exec}} = \\bigl[k + (n - 1) + S\\bigr] \\times T_{\\text{pipe}}$$\n              <em>Lưu ý:</em> Lệnh đầu tiên ra khỏi pipeline tại chu kỳ $k$ (độ trễ từng lệnh không giảm, thậm chí tăng nhẹ do lấy $\\max$), nhưng từ đó trở đi mỗi chu kỳ xong thêm 1 lệnh nên <strong>thông lượng (Throughput)</strong> tăng tới $k$ lần!</li>\n          </ul>\n        </div>\n\n        <h4>4. Xung đột Đường ống (Pipeline Hazards) &amp; Dự đoán nhánh (Branch Prediction)</h4>\n        <ul>\n          <li><strong>Structural Hazard (Xung đột cấu trúc):</strong> Hai lệnh cùng tranh chấp một tài nguyên phần cứng (ví dụ truy cập chung bộ nhớ). Khắc phục bằng kiến trúc Harvard tách <em>IMEM</em> &amp; <em>DMEM</em>, và ghi thanh ghi ở nửa đầu chu kỳ, đọc ở nửa sau.</li>\n          <li><strong>Data Hazard (Xung đột dữ liệu):</strong> Chủ yếu là phụ thuộc đọc-sau-ghi (<strong>RAW – Read After Write</strong>), ngoài ra có WAR/WAW.\n            <ul>\n              <li><strong>Kỹ thuật Forwarding (Bypassing):</strong> Nối trực tiếp kết quả từ thanh ghi đệm <code>EX/MEM</code> hoặc <code>MEM/WB</code> về đầu vào ALU ở tầng <code>EX</code> &rarr; khử được toàn bộ RAW giữa các lệnh ALU (<code>add</code> &rarr; <code>add</code>, hoặc <code>add</code> &rarr; <code>sw</code>) với <strong>0 chu kỳ stall</strong>.</li>\n              <li><strong>Load-Use Hazard (Ngoại lệ bắt buộc Stall):</strong> Khi lệnh <code>lw rd, ...</code> đứng ngay trước lệnh cần đọc <code>rd</code> ở tầng <code>EX</code>, dữ liệu từ bộ nhớ chỉ có ở cuối tầng <code>MEM</code> nên dù có Full Forwarding vẫn phải chèn ít nhất <strong>1 chu kỳ stall (1 bubble / nop)</strong>! Nếu lệnh dùng nằm cách <code>lw</code> một lệnh độc lập khác thì không cần stall.</li>\n            </ul>\n          </li>\n          <li><strong>Control Hazard (Xung đột rẽ nhánh):</strong> Không biết địa chỉ lệnh kế tiếp cho tới khi giải quyết xong nhánh. Khắc phục bằng đẩy mạch so sánh lên tầng <code>ID</code>, chèn stall/flush khi đoán sai, và dùng <strong>Bộ dự đoán nhánh (Branch Predictor)</strong>:\n            <ul>\n              <li><em>Static:</em> Luôn đoán Không nhảy (Not-Taken) hoặc Luôn nhảy (Taken).</li>\n              <li><em>Dynamic 1-bit:</em> Lưu trạng thái 1 lần trước (sai 2 lần ở đầu và cuối mỗi vòng lặp).</li>\n              <li><em>Dynamic 2-bit (Bão hòa 4 trạng thái):</em> <code>00 (SNT) &harr; 01 (WNT) &harr; 10 (WT) &harr; 11 (ST)</code>. Phải đoán sai <strong>2 lần liên tiếp</strong> ở trạng thái mạnh mới đổi hướng dự đoán (<code>T</code> &harr; <code>NT</code>).</li>\n            </ul>\n          </li>\n        </ul>\n\n        <div class=\"callout callout-method\">\n          <div class=\"callout-title\">🧭 Phương pháp làm bài — Nhóm 2.2.4: Datapath, Control Unit &amp; Pipeline 5 công đoạn</div>\n          <ul>\n            <li><strong>Dạng nhận biết:</strong> Xác định 7 tín hiệu điều khiển, đầu vào/ra các khối trên Datapath đơn chu kỳ (<code>Imm Gen, ALU, Mux, RegWrite</code>) hoặc ảnh hưởng khi đứt một đường dây; tính chu kỳ xung nhịp Pipeline ($T_{\\text{pipe}}$), tổng số chu kỳ thực thi đoạn mã RISC-V có/không có Forwarding &amp; Hazard Detection, hoặc dự đoán nhánh 1-bit / 2-bit.</li>\n            <li><strong>Các bước làm bài:</strong>\n              <ol>\n                <li><strong>Bước 1 (Bài toán Datapath &amp; Dây đứt):</strong> Tách mã máy 32-bit (hoặc tra lệnh hợp ngữ) để lấy đúng <code>rs1 = Inst[19:15]</code>, <code>rs2 = Inst[24:20]</code>, <code>rd = Inst[11:7]</code>. Nhớ rằng mạch <code>Imm Gen</code> và bộ cộng địa chỉ nhánh luôn hoạt động mỗi chu kỳ bất kể loại lệnh (chỉ bị chặn ở bộ MUX sau đó nếu tín hiệu <code>ALUSrc/Branch</code> bằng 0). Khi một dây tín hiệu bị kẹt 0/1 (Stuck-at), kiểm tra từng loại lệnh (R, I, Load, Store, Branch) xem đường nào cần dùng tín hiệu đó.</li>\n                <li><strong>Bước 2 (Bài toán đếm chu kỳ Pipeline $k$ tầng):</strong> Áp dụng công thức gốc $\\text{Cycles} = 5 + (n - 1) + \\text{stall}$ (với $n$ là số lệnh).\n                  <ul>\n                    <li><em>Có Forwarding &amp; Hazard Detection:</em> Cặp <code>ALU &rarr; ALU</code> hoặc <code>ALU &rarr; sw</code> tốn <strong>0 stall</strong>; chỉ riêng lệnh <code>lw rd, ...</code> đứng ngay sát trước lệnh đọc <code>rd</code> (Load-Use) tốn đúng <strong>+1 stall</strong>.</li>\n                    <li><em>Có Hazard Detection nhưng KHÔNG Forwarding:</em> Nếu lệnh sau đọc thanh ghi đích của lệnh trước cách <strong>1 dòng</strong> $\\Rightarrow$ chèn <strong>2 stall</strong> (đợi WB xong); cách <strong>2 dòng</strong> $\\Rightarrow$ chèn <strong>1 stall</strong> (hoặc 0 stall nếu quy ước ghi nửa đầu chu kỳ WB và đọc nửa sau chu kỳ ID — đọc kỹ giả thiết đề!).</li>\n                    <li><em>Không Hazard Detection &amp; Không Forwarding:</em> Phải tự đếm số <code>nop</code> cần chèn tay hoặc xác định lệnh nào đọc nhầm giá trị cũ trong thanh ghi.</li>\n                  </ul>\n                </li>\n                <li><strong>Bước 3 (Tính thời gian &amp; Dự đoán nhánh):</strong> $T_{\\text{pipe}} = \\max(T_{\\text{IF}}, T_{\\text{ID}}, T_{\\text{EX}}, T_{\\text{MEM}}, T_{\\text{WB}})$ (cộng thêm trễ thanh ghi đệm pipeline nếu đề cho); với bộ đếm bão hòa 2-bit (<code>00, 01, 10, 11</code>), vẽ chuỗi chuyển trạng thái qua từng lần nhảy/không nhảy.</li>\n              </ol>\n            </li>\n            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Đừng cộng nhầm stall cho cặp <code>lw</code> và lệnh sau không liên quan thanh ghi (hoặc <code>sw</code> chỉ đọc vào <code>MEM</code> khi được forward); nhớ kiểm tra kỹ xem đề cho ghi/đọc thanh ghi diễn ra ở cùng chu kỳ (nửa đầu/nửa sau) hay phải đợi sang chu kỳ kế tiếp!</li>\n          </ul>\n        </div>\n\n        <div class=\"formula-practice-inline\" data-group-link=\"2.2.4\">\n          <span>📝 <strong>Nhóm 2.2.4: Datapath, Control Unit, Pipeline &amp; Hazards (<span class=\"group-q-count\">30 câu</span>)</strong></span>\n          <div class=\"inline-actions\">\n            <button class=\"btn btn-secondary btn-xs\" onclick=\"window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.4', 'exam')\">⏱️ Test</button>\n            <button class=\"btn btn-primary btn-xs\" onclick=\"window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.4', 'practice')\">🎯 Luyện tập</button>\n          </div>\n        </div>\n      "
  },
  {
    "id": "2.1.5",
    "chapter": 2,
    "code": "2.1.5",
    "title": "Bộ nhớ Đệm (Cache) và Bộ nhớ Ảo (Virtual Memory, Paging, TLB)",
    "pdfPage": 41,
    "printedPage": 40,
    "linkedGroups": [
      "2.2.5"
    ],
    "summary": "SRAM vs DRAM, nguyên lý cục bộ (Temporal & Spatial), 3 cơ chế ánh xạ Cache, tách địa chỉ Tag/Index/Offset, tổng bit phần cứng Cache, AMAT, Write-Back/Write-Through và phân trang TLB.",
    "content": "\n        <h4>1. SRAM vs DRAM &amp; Nguyên lý Cục bộ (Principle of Locality)</h4>\n        <ul>\n          <li><strong>SRAM (Static RAM — dùng cho Cache):</strong> Lưu bit bằng mạch Flip-Flop 6 transistor &rarr; rất nhanh, không cần làm tươi, giá thành cao và mật độ thấp.</li>\n          <li><strong>DRAM (Dynamic RAM — dùng cho Bộ nhớ chính):</strong> Lưu bit bằng 1 tụ điện + 1 transistor &rarr; rẻ, mật độ cao nhưng bị rò điện tích nên <strong>bắt buộc phải làm tươi (Refresh)</strong> định kỳ.</li>\n          <li><strong>Tính cục bộ theo thời gian (Temporal Locality):</strong> Ô nhớ vừa được truy cập có khả năng cao sẽ được truy cập lại trong tương lai gần (ví dụ: biến đếm vòng lặp <code>i</code>, biến cộng dồn <code>sum</code>, các lệnh bên trong thân vòng lặp).</li>\n          <li><strong>Tính cục bộ theo không gian (Spatial Locality):</strong> Khi một ô nhớ được truy cập, các ô nhớ lân cận về địa chỉ liền kề nhiều khả năng cũng sớm được truy cập (ví dụ: duyệt tuần tự mảng <code>A[0], A[1], A[2]...</code>).</li>\n        </ul>\n\n        <h4>2. Ba phương pháp ánh xạ Cache &amp; Công thức tách địa chỉ</h4>\n        <p>Giả sử địa chỉ bộ nhớ rộng <strong>$A$ bit</strong>, Cache có dung lượng dữ liệu <strong>$C$ bytes</strong>, kích thước 1 khối (Block / Line) là <strong>$B$ bytes</strong>, ánh xạ <strong>$K$-way Set-Associative</strong>:</p>\n        <div class=\"callout callout-formula\">\n          <div class=\"callout-title\">📐 Bộ công thức chuẩn giải mọi bài tập Cấu trúc &amp; Tách bit Địa chỉ Cache</div>\n          <ul>\n            <li><strong>Số Block (Line) trong Cache:</strong> $N_{\\text{line}} = \\frac{C}{B}$ ; <strong>Số Set (Tập):</strong> $N_{\\text{set}} = \\frac{N_{\\text{line}}}{K}$.\n              <ul>\n                <li><strong>Direct-Mapped (Ánh xạ trực tiếp, $K = 1$):</strong> Mỗi block RAM chỉ được nạp vào <strong>duy nhất 1 Line</strong> cố định ($\\text{Line} = \\text{BlockAddr} \\bmod N_{\\text{line}}$).</li>\n                <li><strong>$K$-way Set-Associative (Tập liên kết $K$-chiều):</strong> Mỗi block RAM được nạp vào bất kỳ line nào trong <strong>1 Set</strong> cố định gồm $K$ line ($\\text{Set} = \\text{BlockAddr} \\bmod N_{\\text{set}}$).</li>\n                <li><strong>Fully-Associative (Liên kết toàn phần, $N_{\\text{set}} = 1, K = N_{\\text{line}}$):</strong> Một block RAM có thể nạp vào <strong>bất kỳ Line nào</strong> trong Cache (<strong>0 bit Index</strong>!).</li>\n              </ul>\n            </li>\n            <li><strong>Tách 3 trường của Địa chỉ $A$-bit:</strong>\n              $$\\text{Offset bits} = \\log_2(B) \\quad ; \\quad \\text{Index bits} = \\log_2(N_{\\text{set}}) \\quad ; \\quad \\text{Tag bits} = A - \\text{Index bits} - \\text{Offset bits}$$\n              <em>(Lưu ý: Nếu đề đánh địa chỉ theo Word $4$ byte thì Offset gồm Word Offset + 2 bit Byte Offset = $\\log_2(B_{\\text{bytes}})$).</em>\n            </li>\n            <li><strong>Tổng kích thước phần cứng Cache (tính cả bit điều khiển):</strong>\n              $$\\text{Total Bits} = N_{\\text{line}} \\times \\bigl(1_{\\text{Valid}} + \\text{Dirty}_{[0\\text{ hoặc }1]} + \\text{Tag bits} + 8 \\times B\\bigr)$$\n              <em>(Với chính sách <strong>Write-Through</strong> có <code>0 bit Dirty</code>; với <strong>Write-Back</strong> cộng thêm <code>1 bit Dirty</code> trên mỗi line!).</em>\n            </li>\n          </ul>\n        </div>\n\n        <h4>3. Hiệu năng Cache, 3C Misses &amp; Chính sách Ghi</h4>\n        <div class=\"callout callout-formula\">\n          <div class=\"callout-title\">📐 AMAT &amp; CPI thực tế khi có Cache Miss</div>\n          <ul>\n            <li><strong>AMAT (Average Memory Access Time):</strong> $\\text{AMAT} = T_{\\text{hit}} + \\text{MissRate} \\times \\text{MissPenalty}$</li>\n            <li><strong>CPI thực tế (khi tính thêm chu kỳ phạt bộ nhớ):</strong>\n              $$CPI_{\\text{thực}} = CPI_{\\text{base}} + (\\text{I-MissRate} \\times \\text{Penalty}) + (\\text{Tỉ lệ lệnh Load/Store} \\times \\text{D-MissRate} \\times \\text{Penalty})$$\n            </li>\n            <li><strong>Phân loại 3 loại lỗi Cache (3C):</strong> <em>Compulsory</em> (lần đầu chạm khối - Cold miss), <em>Capacity</em> (Cache không đủ dung lượng chứa toàn bộ tập dữ liệu làm việc), <em>Conflict</em> (hai block tranh nhau cùng Set/Line dù Cache vẫn còn chỗ — hoàn toàn biến mất trong Fully-Associative!).</li>\n            <li><strong>Chính sách ghi:</strong> <em>Write-Through</em> (ghi đồng thời vào Cache và RAM &rarr; đơn giản, tốn băng thông RAM) vs <em>Write-Back</em> (chỉ ghi Cache và bật bit <code>Dirty</code>, ghi xuống RAM khi bị thay thế — nhanh hơn nhiều!).</li>\n          </ul>\n        </div>\n\n        <h4>4. Bộ nhớ Ảo (Virtual Memory — Paging &amp; TLB)</h4>\n        <ul>\n          <li><strong>Ánh xạ trang (Paging):</strong> Chia bộ nhớ ảo thành các <em>Trang (Pages)</em> và RAM vật lý thành các <em>Khung trang (Page Frames)</em> kích thước bằng nhau $P$ byte. Số bit lệch trang không đổi: $\\text{Page Offset} = \\log_2(P)$.</li>\n          <li><strong>Chuyển đổi địa chỉ:</strong> Địa chỉ ảo $V = [\\text{VPN} \\mid \\text{Page Offset}]$ &rarr; tra bảng trang (Page Table) đổi VPN sang PPN &rarr; Địa chỉ vật lý $PA = [\\text{PPN} \\mid \\text{Page Offset}]$. (Chú ý tổng số bit VPN và PPN có thể KHÁC NHAU nếu dung lượng ảo $\\neq$ dung lượng RAM!).</li>\n          <li><strong>TLB (Translation Lookaside Buffer):</strong> Bộ nhớ đệm tốc độ cao nằm trong MMU lưu sẵn các cặp dịch VPN &rarr; PPN hay dùng gần đây để tránh phải truy cập Bảng trang trong RAM ở mọi lệnh. Nếu trang chưa nạp vào RAM thì phát sinh lỗi trang (<strong>Page Fault</strong>) do Hệ điều hành xử lý nạp từ đĩa.</li>\n        </ul>\n\n        <div class=\"callout callout-method\">\n          <div class=\"callout-title\">🧭 Phương pháp làm bài — Nhóm 2.2.5: Bộ nhớ Đệm (Cache) &amp; Bộ nhớ Ảo (Paging, TLB)</div>\n          <ul>\n            <li><strong>Dạng nhận biết:</strong> Tách số bit <code>Tag / Index / Offset</code> và tổng số bit phần cứng Cache; tính tỷ lệ trượt (Miss Rate) khi chạy vòng lặp duyệt mảng; tính $\\text{AMAT}$ / $CPI_{\\text{thực}}$; hoặc xác định số bit $\\text{VPN / PPN / Page Offset}$ và kích thước bảng trang (Page Table) trong Bộ nhớ ảo.</li>\n            <li><strong>Các bước làm bài:</strong>\n              <ol>\n                <li><strong>Bước 1 (Chuẩn hóa thông số $A, C, B, K$ về lũy thừa của 2):</strong> Đổi dung lượng Cache $C$, Block $B$ và RAM $2^A$ theo $2^{10}=1\\text{ KiB}$, $2^{20}=1\\text{ MiB}$, $2^{30}=1\\text{ GiB}$. Tính $N_{\\text{line}} = C / B$ và $N_{\\text{set}} = N_{\\text{line}} / K$ (Direct-mapped $K=1$; Fully-associative $N_{\\text{set}}=1$).</li>\n                <li><strong>Bước 2 (Tách bit &amp; Tổng bit Cache):</strong> $\\text{Offset} = \\log_2(B)$, $\\text{Index} = \\log_2(N_{\\text{set}})$ (bằng $0$ nếu Fully-associative!), $\\text{Tag} = A - \\text{Index} - \\text{Offset}$. Tổng bit Cache $= N_{\\text{line}} \\times (1_{\\text{Valid}} + \\text{Dirty}_{[0\\text{ hoặc }1]} + \\text{Tag} + 8B)$.</li>\n                <li><strong>Bước 3 (Tính Miss Rate duyệt mảng &amp; AMAT):</strong> Tính số phần tử trên 1 Block $= B / \\text{sizeof(element)}$ (vd $64/4 = 16$ số <code>int</code>). Truy cập tuần tự 1 mảng chỉ Miss lần đầu mỗi Block $\\Rightarrow 1/16 = 6.25\\%$. Với AMAT: $\\text{AMAT} = T_{\\text{hit}} + \\text{MissRate} \\times \\text{MissPenalty}$.</li>\n                <li><strong>Bước 4 (Bộ nhớ ảo Paging):</strong> $\\text{Page Offset} = \\log_2(\\text{PageSize})$; $\\text{VPN} = \\text{VirtualAddrBits} - \\text{Offset}$; $\\text{PPN} = \\text{PhysicalAddrBits} - \\text{Offset}$.</li>\n              </ol>\n            </li>\n            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Khi tăng độ liên kết $K$ gấp đôi (giữ nguyên $C, B$), số Set giảm nửa $\\Rightarrow$ <code>Index</code> giảm 1 bit và <code>Tag</code> tăng 1 bit. Với chính sách <strong>Write-Back</strong> phải cộng thêm <strong>1 bit Dirty</strong> vào mỗi Line (còn Write-Through thì không có bit Dirty). Đọc kỹ bài toán cho địa chỉ theo <strong>Byte</strong> hay theo <strong>Word</strong> (4 byte) để không tính sai số bit Offset!</li>\n          </ul>\n        </div>\n\n        <div class=\"formula-practice-inline\" data-group-link=\"2.2.5\">\n          <span>📝 <strong>Nhóm 2.2.5: Bộ nhớ Đệm (Cache) &amp; Bộ nhớ Ảo (Paging, TLB) (<span class=\"group-q-count\">21 câu</span>)</strong></span>\n          <div class=\"inline-actions\">\n            <button class=\"btn btn-secondary btn-xs\" onclick=\"window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.5', 'exam')\">⏱️ Test</button>\n            <button class=\"btn btn-primary btn-xs\" onclick=\"window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.5', 'practice')\">🎯 Luyện tập</button>\n          </div>\n        </div>\n      "
  },
  {
    "id": "2.1.6",
    "chapter": 2,
    "code": "2.1.6",
    "title": "Điều khiển Vào-Ra (Polling, Ngắt, DMA) và Thiết bị Lưu trữ Ngoài",
    "pdfPage": 42,
    "printedPage": 41,
    "linkedGroups": [
      "2.2.6"
    ],
    "summary": "3 phương pháp điều khiển I/O (Programmed/Polling, Interrupt, DMA), Memory-mapped vs Isolated I/O, thời gian truy cập ổ đĩa từ HDD và dung lượng/khả năng chịu lỗi RAID 0, 1, 5, 6.",
    "content": "\n        <h4>1. Ba phương pháp điều khiển Vào-Ra (theo tiến trình phát triển hiệu năng)</h4>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr><th>Phương pháp</th><th>Cơ chế hoạt động</th><th>Vai trò của CPU</th></tr>\n            </thead>\n            <tbody>\n              <tr><td><strong>1. Vào-ra bằng chương trình (Programmed I/O / Polling)</strong></td><td>CPU định kỳ đọc thanh ghi trạng thái (Status Flag) trong vòng lặp để kiểm tra thiết bị sẵn sàng chưa.</td><td>CPU <strong>bị chiếm hoàn toàn</strong> trong lúc chờ thiết bị chậm (lãng phí tài nguyên nhất).</td></tr>\n              <tr><td><strong>2. Vào-ra điều khiển bằng Ngắt (Interrupt-driven I/O)</strong></td><td>CPU làm việc khác; khi I/O sẵn sàng thì gửi tín hiệu <code>INTR</code> ngắt CPU, CPU chạy ISR trao đổi dữ liệu qua thanh ghi CPU.</td><td>CPU không phải chờ thụ động, nhưng vẫn phải đích thân chuyển từng word/byte qua CPU.</td></tr>\n              <tr><td><strong>3. Truy nhập bộ nhớ trực tiếp (DMA)</strong></td><td>Bộ điều khiển DMAC mượn quyền Bus (<code>BRQ</code> / <code>BGT</code>) truyền nguyên khối dữ liệu trực tiếp giữa mô-đun I/O và RAM.</td><td>Hiệu quả nhất cho truyền khối lớn (ổ đĩa, mạng): CPU chỉ khởi tạo DMA và nhận ngắt khi xong.</td></tr>\n            </tbody>\n          </table>\n        </div>\n        <ul>\n          <li><strong>Các chế độ DMA:</strong> <em>Burst Mode</em> (chiếm bus truyền trọn vẹn cả khối), <em>Cycle Stealing</em> (lấy từng chu kỳ bus xen kẽ CPU), <em>Transparent DMA</em> (chỉ mượn bus khi CPU không dùng bus).</li>\n          <li><strong>Định địa chỉ I/O:</strong> <strong>Memory-Mapped I/O</strong> (RISC-V dùng cách này: cổng I/O dùng chung địa chỉ với RAM và truy cập bằng lệnh <code>lw/sw</code> thông thường) vs <strong>Isolated / Port-mapped I/O</strong> (không gian địa chỉ I/O tách riêng và dùng lệnh <code>IN/OUT</code> chuyên biệt).</li>\n        </ul>\n\n        <h4>2. Thiết bị lưu trữ ngoài: Ổ đĩa từ (HDD) &amp; Hệ thống RAID</h4>\n        <div class=\"callout callout-formula\">\n          <div class=\"callout-title\">📐 Thời gian truy cập đĩa HDD &amp; Bảng tính RAID ($N$ ổ đĩa, mỗi ổ dung lượng $D$)</div>\n          <ul>\n            <li><strong>Thời gian truy cập 1 Sector trên HDD:</strong>\n              $$T_{\\text{access}} = T_{\\text{seek}} + T_{\\text{rotational\\_latency}} + T_{\\text{transfer}} \\qquad \\text{với } T_{\\text{rotational\\_avg}} = \\frac{1}{2} \\times \\frac{60\\text{ s}}{\\text{RPM}}$$\n            </li>\n            <li><strong>RAID 0 (Striping — Phân dải dữ liệu):</strong> Ghi song song lên $N$ đĩa &rarr; Tốc độ đọc/ghi nhanh nhất, dung lượng $= N \\times D$, <strong>KHÔNG chịu lỗi</strong> (hỏng 1 ổ là mất toàn bộ dữ liệu).</li>\n            <li><strong>RAID 1 (Mirroring — Nhân bản gương):</strong> Sao y hệt sang ổ dự phòng &rarr; Dung lượng khả dụng $= \\frac{N}{2} \\times D$ (tối thiểu 2 ổ), chịu lỗi tốt.</li>\n            <li><strong>RAID 5 (Block Striping + Distributed Parity):</strong> Phân tán khối Parity đều trên tất cả $N$ đĩa (tối thiểu 3 ổ) &rarr; Dung lượng khả dụng $= \\mathbf{(N - 1) \\times D}$, chịu được tối đa <strong>1 ổ hỏng</strong>.</li>\n            <li><strong>RAID 6 (Dual Distributed Parity):</strong> Hai khối Parity độc lập (tối thiểu 4 ổ) &rarr; Dung lượng khả dụng $= \\mathbf{(N - 2) \\times D}$, chịu được tối đa <strong>2 ổ hỏng</strong>.</li>\n          </ul>\n        </div>\n\n        <div class=\"callout callout-method\">\n          <div class=\"callout-title\">🧭 Phương pháp làm bài — Nhóm 2.2.6: Điều khiển Vào-Ra (Polling, Ngắt, DMA) &amp; HDD / RAID</div>\n          <ul>\n            <li><strong>Dạng nhận biết:</strong> So sánh 3 cơ chế vào-ra (Polling, Ngắt, DMA), đọc hiểu đoạn mã polling MMIO RISC-V, nhận diện các bộ phận của DMAC / PIC / 3 chế độ DMA, so sánh ưu nhược điểm HDD vs SSD, hoặc tính thời gian truy cập đĩa HDD và dung lượng / chịu lỗi của RAID 0, 1, 5, 6.</li>\n            <li><strong>Các bước làm bài:</strong>\n              <ol>\n                <li><strong>Bước 1 (Phân biệt 3 cơ chế I/O &amp; Mã Polling):</strong> Tiến trình hiệu năng CPU tăng dần: <strong>Programmed I/O (Polling) &rarr; Interrupt-driven I/O &rarr; DMA</strong>. Khi thấy vòng lặp RISC-V liên tục đọc thanh ghi trạng thái (<code>lw</code>/<code>lb</code> + <code>andi</code> + <code>beq ... loop</code>) rồi mới đọc/ghi dữ liệu $\\Rightarrow$ đó chính là cơ chế <strong>Polling</strong> (CPU bị lãng phí thời gian chờ đợi).</li>\n                <li><strong>Bước 2 (Bài toán DMAC, Chế độ DMA &amp; PIC):</strong> Nhớ 3 chế độ DMA: <em>Burst Mode</em> (chiếm bus truyền cả khối, nhanh nhưng chặn CPU lâu), <em>Cycle Stealing</em> (xen kẽ từng chu kỳ bus), <em>Transparent DMA</em> (tối ưu nhưng khó thiết kế nhất vì chỉ dùng bus khi CPU nhàn rỗi).</li>\n                <li><strong>Bước 3 (Tính HDD &amp; RAID với $N$ đĩa dung lượng $D$):</strong> Đổi tốc độ quay RPM sang độ trễ quay trung bình: $T_{\\text{rot-avg}} = \\frac{1}{2} \\times \\frac{60\\,000\\text{ ms}}{\\text{RPM}}$, cộng với $T_{\\text{seek}}$ và $T_{\\text{transfer}}$. Với RAID: RAID 0 $= N \\cdot D$ (0 lỗi); RAID 1 $= \\frac{N}{2} \\cdot D$; RAID 5 $= (N-1)D$ (chịu 1 ổ hỏng, tối thiểu 3 ổ); RAID 6 $= (N-2)D$ (chịu 2 ổ hỏng, tối thiểu 4 ổ).</li>\n              </ol>\n            </li>\n            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Khi tính độ trễ quay trung bình HDD luôn lấy <strong>1/2 vòng quay</strong> (chứ không lấy cả 1 vòng!). Với SSD so với HDD: SSD nhanh, êm, chống sốc, tiết kiệm điện hơn nhưng <strong>giá thành trên mỗi GB cao hơn</strong> và có giới hạn số chu kỳ ghi/xóa (P/E cycles).</li>\n          </ul>\n        </div>\n\n        <div class=\"formula-practice-inline\" data-group-link=\"2.2.6\">\n          <span>📝 <strong>Nhóm 2.2.6: Điều khiển Vào-Ra (Polling, Ngắt, DMA) &amp; HDD / RAID (<span class=\"group-q-count\">11 câu</span>)</strong></span>\n          <div class=\"inline-actions\">\n            <button class=\"btn btn-secondary btn-xs\" onclick=\"window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.6', 'exam')\">⏱️ Test</button>\n            <button class=\"btn btn-primary btn-xs\" onclick=\"window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.6', 'practice')\">🎯 Luyện tập</button>\n          </div>\n        </div>\n      "
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
