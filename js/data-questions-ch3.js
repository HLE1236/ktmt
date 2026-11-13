// Auto-generated from build_data_ch3.py based on KTMT_GK.pdf (Chapter 3: RISC-V)
(function(root) {
  root.KTMT_QUESTIONS_CH3 = [
  {
    "id": "lt-3.1",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.1",
    "source": "Mục 3.1.1 - Tập 32 thanh ghi RV32I",
    "examTags": [
      "LT"
    ],
    "pdfPage": 43,
    "printedPage": 42,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong kiến trúc RISC-V 32-bit (RV32I), có bao nhiêu thanh ghi đa dụng và mỗi thanh ghi được mã hóa bằng bao nhiêu bit trong lệnh máy?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "32 thanh ghi (x0–x31), mỗi thanh ghi mã hóa bằng 5 bit ($2^5 = 32$)",
      "16 thanh ghi (x0–x15), mỗi thanh ghi mã hóa bằng 4 bit ($2^4 = 16$)",
      "32 thanh ghi, mỗi thanh ghi mã hóa bằng 32 bit",
      "64 thanh ghi, mỗi thanh ghi mã hóa bằng 6 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo mục 3.1.1 trong <code>KTMT_GK.pdf</code>: Bộ xử lý RISC-V 32-bit có <strong>32 thanh ghi đa dụng</strong> ($x0$ đến $x31$). Vì $\\log_2(32) = 5$ nên các trường địa chỉ thanh ghi (<code>rd, rs1, rs2</code>) trong mã máy rộng đúng <strong>5 bit</strong>.</p>"
  },
  {
    "id": "lt-3.2",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.2",
    "source": "Mục 3.1.1 - Thanh ghi zero (x0)",
    "examTags": [
      "LT"
    ],
    "pdfPage": 43,
    "printedPage": 42,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thanh ghi nào trong 32 thanh ghi của RISC-V là thanh ghi chỉ đọc (read-only) luôn giữ hằng số $0$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "zero (x0)",
      "ra (x1)",
      "sp (x2)",
      "s0 (x8 / fp)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Thanh ghi <strong><code>zero</code> (<code>x0</code>)</strong> được nối cứng với hằng số 0. Mọi lệnh ghi vào <code>x0</code> (như <code>jal x0, Label</code>) đều bỏ qua kết quả ghi.</p>"
  },
  {
    "id": "lt-3.3",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.3",
    "source": "Mục 3.1.1 - Kiến trúc Load/Store & độ dài lệnh",
    "examTags": [
      "LT"
    ],
    "pdfPage": 44,
    "printedPage": 43,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đặc điểm cốt lõi nào sau đây đúng với tập lệnh chuẩn RISC-V 32-bit (RV32I)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Mọi lệnh máy chuẩn có độ dài cố định 32 bit (4 byte) và chỉ nhóm Load/Store mới truy cập bộ nhớ dữ liệu",
      "Các lệnh số học như add, sub có thể đọc trực tiếp toán hạng từ bộ nhớ chính RAM",
      "Độ dài lệnh chuẩn thay đổi linh hoạt từ 1 đến 15 byte giống x86",
      "Tất cả các phép tính cộng hằng số đều hỗ trợ hằng số immediate 32-bit trong 1 lệnh"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>RISC-V áp dụng kiến trúc <strong>Load/Store</strong> (tính toán chỉ trên thanh ghi; chỉ lệnh Load/Store truy cập Data Memory) và mọi lệnh chuẩn RV32I đều dài cố định <strong>32 bit = 4 byte</strong>.</p>"
  },
  {
    "id": "lt-3.4",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.4",
    "source": "Mục 3.1.2 - Little-Endian & Căn chỉnh biên Word",
    "examTags": [
      "LT"
    ],
    "pdfPage": 45,
    "printedPage": 44,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Theo quy ước lưu trữ bộ nhớ của RISC-V (Little-Endian) và căn chỉnh biên word 32-bit (Alignment), phát biểu nào ĐÚNG?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Byte có trọng số nhỏ nhất (LSB) lưu ở địa chỉ nhỏ nhất; địa chỉ word phải chia hết cho 4 (chữ số Hexa cuối là 0, 4, 8 hoặc C)",
      "Byte có trọng số lớn nhất (MSB) lưu ở địa chỉ nhỏ nhất; địa chỉ word chỉ cần là số chẵn",
      "Byte trọng số nhỏ nhất lưu ở địa chỉ lớn nhất; chữ số Hexa cuối có thể là 2, 6, A, E",
      "RISC-V sử dụng quy ước Big-Endian giống SunSPARC và Motorola 680x0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>RISC-V dùng <strong>Little-Endian</strong> (LSB nằm tại địa chỉ thấp nhất, ghép từ địa chỉ cao về thấp để đọc giá trị 32-bit) và mỗi từ nhớ 32-bit (4 byte) chuẩn phải có địa chỉ chia hết cho 4 (tận cùng Hexa là <code>0, 4, 8, C</code>).</p>"
  },
  {
    "id": "lt-3.5",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.5",
    "source": "Mục 3.1.3 - Nạp hằng số 32-bit với lui + addi",
    "examTags": [
      "LT"
    ],
    "pdfPage": 45,
    "printedPage": 44,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khi nạp hằng số 32-bit vào thanh ghi bằng cặp lệnh chuẩn <code>lui rd, imm20</code> + <code>addi rd, rd, imm12</code>, tại sao phải tăng phần 20 bit cao trong <code>lui</code> thêm $1$ khi chữ số Hexa thứ 3 từ phải sang $\\ge 8$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Vì bit 11 bằng 1 khiến lệnh addi mở rộng dấu imm12 thành số âm, nên lui cần cộng bù +1 (= +0x1000) để cân bằng",
      "Vì lệnh lui chỉ nạp được tối đa 16 bit nên cần mượn thêm 4 bit từ addi",
      "Vì addi thực hiện phép trừ ngầm định khi bit 11 bằng 1",
      "Vì các chữ số từ 8 đến F không hợp lệ trong mã Hexa của lệnh lui"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Toán hạng 12-bit của <code>addi</code> là số nguyên có dấu $[-2048, +2047]$. Khi 3 chữ số Hexa cuối thuộc $[\\text{0x800}, \\text{0xFFF}]$ (chữ số thứ 3 từ phải sang $\\ge 8$), <code>addi</code> sẽ cộng thêm số âm $\\text{imm} - 4096$, nên phải bù $+1$ vào 20 bit cao của <code>lui</code>.</p>"
  },
  {
    "id": "lt-3.6",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.6",
    "source": "Mục 3.1.3 - Load mở rộng dấu & quy tắc Ngăn xếp (Stack)",
    "examTags": [
      "LT"
    ],
    "pdfPage": 46,
    "printedPage": 45,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Phát biểu nào sau đây đúng về lệnh đọc bộ nhớ <code>lb / lbu</code> và thao tác ngăn xếp (Stack) trong RISC-V?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lb mở rộng dấu từ bit 7 lên 32 bit còn lbu chèn 0; khi cất vào Stack phải giảm sp trước rồi sw, khi khôi phục thì lw trước rồi tăng sp",
      "lbu mở rộng dấu còn lb chèn 0; khi khôi phục Stack phải tăng sp trước rồi mới lw",
      "Ngăn xếp Stack trong RISC-V phát triển theo chiều địa chỉ tăng dần khi Push",
      "Mọi lệnh lw đều phải dùng trên byte đơn lẻ và tự động tăng con trỏ sp lên 4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>lb</code> mở rộng dấu bit 7 (nếu byte đọc từ <code>0x80</code>–<code>0xFF</code> thành <code>0xFFFFFF..</code>), trong khi <code>lbu</code> mở rộng 0 (<code>0x000000..</code>). Stack phát triển về phía địa chỉ <strong>giảm dần</strong>: Push = giảm <code>sp</code> trước rồi <code>sw</code>; Pop = <code>lw</code> trước rồi tăng <code>sp</code>.</p>"
  },
  {
    "id": "lt-3.7",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.7",
    "source": "Mục 3.1.4 - Sáu khuôn dạng lệnh 32-bit",
    "examTags": [
      "LT"
    ],
    "pdfPage": 49,
    "printedPage": 48,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong 6 khuôn dạng lệnh 32-bit của RISC-V (R, I, S, B, U, J), trường <code>opcode</code> nằm ở vị trí nào và tại sao trường hằng số của B-type lưu <code>imm[12:1]</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "opcode luôn nằm ở 7 bit thấp [6:0]; B-type bỏ qua bit 0 (luôn bằng 0 vì địa chỉ lệnh chẵn) để tăng gấp đôi tầm nhảy trong phạm vi ±4 KB",
      "opcode nằm ở 6 bit cao [31:26] giống MIPS; B-type bỏ qua 2 bit cuối nên lưu imm[13:2]",
      "opcode thay đổi vị trí tùy loại R/I/S; B-type chỉ lưu hằng số không dấu 12-bit",
      "opcode nằm ở bit [14:12]; B-type dùng bước nhảy 4 byte cố định từ bit 0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mọi lệnh RV32I đều có <strong><code>opcode</code> ở 7 bit thấp <code>[6:0]</code></strong>. Định dạng B-type (và J-type) quy ước offset là bội của 2 byte (tương thích RVC 16-bit), nên bit 0 ngầm định bằng 0 và không cần lưu trong mã lệnh.</p>"
  },
  {
    "id": "lt-3.8",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.8",
    "source": "Mục 3.1.4 - 4 Phương thức định địa chỉ & RVC",
    "examTags": [
      "LT"
    ],
    "pdfPage": 50,
    "printedPage": 49,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Lệnh <code>lw t0, 8(s0)</code> và lệnh <code>beq s0, s1, L1</code> sử dụng lần lượt những phương thức định địa chỉ nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Định địa chỉ cơ sở (Base addressing) cho toán hạng bộ nhớ và Định địa chỉ tương đối với PC (PC-relative) cho nhãn nhảy",
      "Định địa chỉ tức thì (Immediate) và Định địa chỉ thanh ghi (Register)",
      "Định địa chỉ trực tiếp (Direct) và Định địa chỉ cơ sở (Base)",
      "Định địa chỉ tương đối PC và Định địa chỉ tức thì"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>lw t0, 8(s0)</code> cộng thanh ghi cơ sở với offset (<code>s0 + 8</code>) là <strong>Định địa chỉ cơ sở</strong>; còn lệnh rẽ nhánh <code>beq</code> tính $BTA = PC + \\text{offset}$ là <strong>Định địa chỉ tương đối với PC</strong>.</p>"
  },
  {
    "id": "c3-3.1",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.1",
    "source": "Đề CK 2023.1, 2023.2 & Ôn tập CK 2025.1, 2025.2 Câu 53",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 52,
    "printedPage": 51,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Phát biểu nào sau đây là đúng về các thanh ghi tạm thời (<code>t0 – t6</code>) và các thanh ghi lưu trữ (<code>s0 – s11</code>) trong RISC-V?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Trong quy ước gọi hàm, thanh ghi tạm thời là “caller-saved”, còn thanh ghi lưu trữ là “callee-saved”",
      "Giá trị của các thanh ghi lưu trữ luôn phải được lưu bởi bên được gọi (callee)",
      "Giá trị của các thanh ghi tạm thời luôn phải được lưu bởi bên gọi (caller)",
      "Trong quy ước gọi hàm, thanh ghi tạm thời là “callee-saved”, còn thanh ghi lưu trữ là “caller-saved”"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo quy ước gọi hàm RISC-V: <code>t0–t6</code> thuộc nhóm <strong>caller-saved</strong> (bên gọi tự cất nếu cần dùng lại sau lời gọi hàm, không bắt buộc “luôn luôn” phải cất); <code>s0–s11</code> thuộc nhóm <strong>callee-saved</strong> (bên được gọi chỉ cất vào Stack nếu có làm thay đổi chúng).</p>"
  },
  {
    "id": "c3-3.2a",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.2a",
    "source": "Đề GK 2022.2 (Đề 0008 Câu 10 & Đề 0006 Câu 5)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 52,
    "printedPage": 51,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên thanh ghi (vd: zero hoặc x0)",
    "acceptedAnswers": [
      "zero",
      "x0",
      "zero (x0)"
    ],
    "question": "Trong 32 thanh ghi được đánh địa chỉ của bộ xử lý RISC-V 32-bit, tên của 1 thanh ghi chỉ đọc (read-only) luôn chứa hằng số $0$ là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "zero (hoặc x0)",
      "gp (x3)",
      "tp (x4)",
      "ra (x1)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Thanh ghi chỉ đọc luôn có giá trị bằng $0$ là <strong><code>zero</code></strong> (tên quy ước của thanh ghi <strong><code>x0</code></strong>).</p>"
  },
  {
    "id": "c3-3.2b",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.2b",
    "source": "Đề GK 2022.2 (Đề 0008 Câu 10 & Đề 0006 Câu 5)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 52,
    "printedPage": 51,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong khuôn dạng lệnh R của bộ xử lý RISC-V 32-bit, tại sao độ rộng của vùng thông tin thanh ghi đích <code>rd</code> phải là $5$ bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Vì bộ xử lý có 32 thanh ghi đa dụng nên cần $\\log_2(32) = 5$ bit ($2^5 = 32$) để mã hóa phân biệt",
      "Vì thanh ghi rd lưu 5 byte dữ liệu",
      "Vì tập lệnh RV32I chỉ có tối đa 5 phép toán số học",
      "Vì trường opcode chiếm 27 bit nên còn đúng 5 bit cho rd"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Bộ xử lý RISC-V 32-bit có $32$ thanh ghi đa dụng ($x0 \\dots x31$). Để đánh số phân biệt đủ $32$ thanh ghi cần $\\log_2(32) = 5$ bit ($2^5 = 32$).</p>"
  },
  {
    "id": "c3-3.3",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.3",
    "source": "Đề GK 2022.2 (Đề 0006 Câu 8)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 53,
    "printedPage": 52,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số byte (vd: 600)",
    "acceptedAnswers": [
      "600",
      "600 byte"
    ],
    "question": "Một phần mềm viết cho bộ xử lý RISC-V 32-bit có $150$ lệnh hợp ngữ chuẩn (không dùng lệnh giả và không dùng lệnh nén) thì chiếm bao nhiêu byte lệnh mã máy trong bộ nhớ?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "600 byte",
      "150 byte",
      "300 byte",
      "1200 byte"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mỗi lệnh mã máy chuẩn RISC-V 32-bit có độ dài cố định $32\\text{ bit} = 4\\text{ byte}$. Vậy $150$ lệnh chiếm: $150 \\times 4 = \\mathbf{600\\text{ byte}}$.</p>"
  },
  {
    "id": "c3-3.4a",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.4a",
    "source": "Đề GK 2019.2 (Mã đề 243 Câu 17)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 53,
    "printedPage": 52,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số byte",
    "acceptedAnswers": [
      "68",
      "68 byte"
    ],
    "question": "(Mã đề 243): Một chương trình hợp ngữ có $8$ lệnh <code>addi</code>, $5$ lệnh <code>sub</code>, $1$ lệnh <code>lui</code>, $3$ lệnh <code>xori</code>. Hỏi mã máy của phần mềm trên chiếm bao nhiêu byte dung lượng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "68",
      "17",
      "72",
      "18"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tổng số lệnh máy chuẩn là $8 + 5 + 1 + 3 = 17$ lệnh. Mỗi lệnh dài $4$ byte nên dung lượng mã máy là $17 \\times 4 = \\mathbf{68\\text{ byte}}$.</p>"
  },
  {
    "id": "c3-3.4b",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.4b",
    "source": "Đề GK 2019.2 (Mã đề 244 Câu 10)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 53,
    "printedPage": 52,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số byte",
    "acceptedAnswers": [
      "72",
      "72 byte"
    ],
    "question": "(Mã đề 244): Một chương trình hợp ngữ có $5$ lệnh <code>addi</code>, $2$ lệnh <code>sub</code>, $3$ lệnh <code>lui</code>, $8$ lệnh <code>xori</code>. Hỏi mã máy của phần mềm trên chiếm bao nhiêu byte dung lượng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "72",
      "68",
      "18",
      "17"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tổng số lệnh máy chuẩn là $5 + 2 + 3 + 8 = 18$ lệnh. Dung lượng mã máy chiếm: $18 \\times 4 = \\mathbf{72\\text{ byte}}$.</p>"
  },
  {
    "id": "c3-3.5a",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.5a",
    "source": "Đề GK 2019.2 (Mã đề 243 Câu 20)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 53,
    "printedPage": 52,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập địa chỉ Hexa (vd: 0xBCDE800C)",
    "acceptedAnswers": [
      "0xBCDE800C",
      "BCDE800C"
    ],
    "question": "(Mã đề 243): Đoạn hợp ngữ gồm 3 lệnh chuẩn liên tiếp (<code>lui s0, ...</code> $\\to$ <code>addi s0, s0, ...</code> $\\to$ <code>lw t0, 4(s0)</code>). Nếu lệnh đầu tiên ở địa chỉ <code>0xBCDE8004</code>, hỏi lệnh cuối cùng (lệnh thứ 3) ở địa chỉ nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xBCDE800C",
      "0xBCDE8006",
      "0x20201238",
      "Không xác định"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mỗi lệnh dài $4$ byte. Lệnh 1 ở $A = \\text{0xBCDE8004}$, lệnh 2 ở $A + 4 = \\text{0xBCDE8008}$, lệnh 3 ở $A + 8 = \\mathbf{\\text{0xBCDE800C}}$.</p>"
  },
  {
    "id": "c3-3.5b",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.5b",
    "source": "Đề GK 2019.2 (Mã đề 244 Câu 2)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 53,
    "printedPage": 52,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập địa chỉ Hexa",
    "acceptedAnswers": [
      "0x8004FEE4",
      "8004FEE4"
    ],
    "question": "(Mã đề 244): Đoạn hợp ngữ gồm 3 lệnh chuẩn liên tiếp (<code>lui s0, ...</code> $\\to$ <code>addi s0, s0, ...</code> $\\to$ <code>lw t0, 4(s0)</code>). Nếu lệnh đầu tiên ở địa chỉ <code>0x8004FEDC</code>, hỏi lệnh cuối cùng (lệnh thứ 3) ở địa chỉ nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x8004FEE4",
      "0x8004FEDA",
      "0x80004000",
      "Không xác định"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh thứ 3 cách lệnh đầu $2 \\times 4 = 8$ byte: $\\text{0x8004FEDC} + 8 = \\mathbf{\\text{0x8004FEE4}}$ (vì $\\text{0xDC} + 8 = 220 + 8 = 228 = \\text{0xE4}$).</p>"
  },
  {
    "id": "c3-3.6",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.6",
    "source": "Đề CK 2022.2, 2024.1, 2024.2 & Ôn tập 2025.2 Câu 34",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 53,
    "printedPage": 52,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Phương pháp định địa chỉ nào được sử dụng để mã hóa cho toán hạng hằng số của lệnh hợp ngữ RISC-V sau: <code>addi s0, s3, -5</code> (hoặc <code>addi x18, x19, -5</code>)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Định địa chỉ tức thì",
      "Định địa chỉ cơ sở",
      "Định địa chỉ tương đối với PC",
      "Định địa chỉ thanh ghi"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Toán hạng hằng số <code>-5</code> được mã hóa trực tiếp trong mã máy của câu lệnh <code>addi</code> nên dùng phương pháp <strong>Định địa chỉ tức thì (Immediate Addressing)</strong>.</p>"
  },
  {
    "id": "c3-3.7",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.7",
    "source": "Đề GK 2018.2 (Mã đề 198, 199, 204)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 54,
    "printedPage": 53,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong các phương pháp định địa chỉ toán hạng dưới đây, phương pháp nào có tốc độ thực thi lệnh <strong>chậm hơn</strong>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Định địa chỉ trực tiếp / Định địa chỉ cơ sở (truy cập bộ nhớ)",
      "Định địa chỉ thanh ghi",
      "Định địa chỉ tức thì",
      "Định địa chỉ tức thì và định địa chỉ thanh ghi"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Định địa chỉ tức thì (toán hạng nằm sẵn trong lệnh tại IR) và định địa chỉ thanh ghi (đọc bên trong CPU) rất nhanh. Định địa chỉ trực tiếp / cơ sở phải truy xuất bộ nhớ chính RAM qua bus hệ thống nên tốc độ thực thi <strong>chậm hơn</strong>.</p>"
  },
  {
    "id": "c3-3.8a",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.8a",
    "source": "Đề CK 2020.2 (Trang 5)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 54,
    "printedPage": 53,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong các giá trị địa chỉ bộ nhớ hệ thống dưới đây, giá trị nào là địa chỉ hợp lệ và căn chỉnh đúng biên (aligned address) của một từ nhớ (word) dữ liệu 32-bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x1001A00C",
      "0x10800016",
      "0x100020CE",
      "0x1050009A"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Địa chỉ word 32-bit bắt buộc chia hết cho $4$, tức chữ số Hexa cuối cùng chỉ có thể là <code>0, 4, 8</code> hoặc <code>C</code>. Chỉ có <code>0x1001A00C</code> thỏa mãn (các số tận cùng <code>6, E, A</code> không chia hết cho $4$).</p>"
  },
  {
    "id": "c3-3.8b",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.8b",
    "source": "Đề CK 2022.2 & 2024.2 (#3ace1f)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 54,
    "printedPage": 53,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong các giá trị địa chỉ dưới đây, giá trị nào có thể là địa chỉ của một word nhớ trong bộ nhớ chính của máy tính RISC-V?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x00404508",
      "0x0050601A",
      "0x00601002",
      "0x00402346"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Chỉ có <code>0x00404508</code> có chữ số Hexa cuối bằng <code>8</code> chia hết cho $4$ (còn <code>A, 2, 6</code> chỉ chia hết cho 2, không chia hết cho 4).</p>"
  },
  {
    "id": "c3-3.8c",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.8c",
    "source": "Đề GK 2018.2 (Mã đề 198 Câu 9)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 55,
    "printedPage": 54,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Địa chỉ nào sau đây <strong>không phải</strong> là địa chỉ hợp lệ của một lệnh máy 32-bit?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x188A",
      "0xFB019AC",
      "0x18D88",
      "0x198C124"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh máy chuẩn 32-bit (4 byte) phải nằm tại địa chỉ chia hết cho $4$. Địa chỉ <code>0x188A</code> tận cùng bằng <code>A</code> ($10_{10}$) không chia hết cho $4$ nên không hợp lệ.</p>"
  },
  {
    "id": "c3-3.9",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.9",
    "source": "Đề CK 2023.1 & Ôn tập 2025.2 Câu 28",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 55,
    "printedPage": 54,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Toán hạng địa chỉ đích trong câu lệnh lưu trữ từ nhớ <code>sw</code> dưới đây của hệ RISC-V có hợp lệ để thực thi hay không?",
    "codeBlock": "lui  s0, 0x10010\naddi t0, zero, 100\nsw   t0, 2(s0)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "Không, nó không có một địa chỉ hợp lệ (do vi phạm căn lề ranh giới word nhớ – alignment error)",
      "Có, hoàn toàn hợp lệ",
      "Có, nhưng đoạn mã này yêu cầu quyền đặc biệt để thực thi",
      "Không, nó không nằm trong phân đoạn dữ liệu hợp lệ"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>lui s0, 0x10010</code> tạo <code>s0 = 0x10010000</code>. Lệnh <code>sw t0, 2(s0)</code> ghi word 32-bit vào địa chỉ <code>0x10010002</code>. Vì <code>0x10010002</code> không chia hết cho $4$ nên xảy ra lỗi vi phạm căn lề biên word (<strong>alignment error</strong>).</p>"
  },
  {
    "id": "c3-3.10a",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.10a-b",
    "source": "Đề CK 2020.2 (Trang 2, Trang 8)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 55,
    "printedPage": 54,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lần truy nhập",
    "acceptedAnswers": [
      "2",
      "2 lần"
    ],
    "question": "Hãy xác định tổng số lần CPU trực tiếp truy nhập <strong>bộ nhớ dữ liệu (Data Memory)</strong> trong đoạn chương trình sau: <code>lw t0, 0(s0)</code> $\\to$ <code>addi t1, t0, 1</code> $\\to$ <code>sw t1, 4(s0)</code> $\\to$ <code>add t2, t1, t0</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "2 lần",
      "1 lần",
      "4 lần",
      "0 lần"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Chỉ các lệnh Load (<code>lw</code>) và Store (<code>sw</code>) mới trực tiếp truy nhập Data Memory. Đoạn mã trên có 1 lệnh <code>lw</code> và 1 lệnh <code>sw</code> $\\Rightarrow$ Truy nhập bộ nhớ dữ liệu <strong>2 lần</strong>.</p>"
  },
  {
    "id": "c3-3.10c",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.10c",
    "source": "Đề GK 2018.2 (Mã đề 204 Câu 7)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 56,
    "printedPage": 55,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập số lần",
    "acceptedAnswers": [
      "0",
      "0 lần"
    ],
    "question": "Hãy xác định tổng số lần CPU trực tiếp truy nhập <strong>bộ nhớ dữ liệu (Data Memory)</strong> trong đoạn lệnh: <code>lui t0, 0x2019</code> $\\to$ <code>addi t0, t0, 0x104</code> $\\to$ <code>slli t1, t0, 3</code> $\\to$ <code>sub t2, t1, t3</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0 lần",
      "1 lần",
      "2 lần",
      "4 lần"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đoạn mã chỉ gồm các lệnh nạp hằng số, cộng, dịch bit và trừ trên thanh ghi, không có bất kỳ lệnh Load/Store nào $\\Rightarrow$ Số lần truy nhập Data Memory là <strong>0 lần</strong>.</p>"
  },
  {
    "id": "c3-3.11",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.11",
    "source": "Ôn tập CK 2025.2 (P1, Câu 18)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 56,
    "printedPage": 55,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Phát biểu nào sau đây là đúng về thứ tự lưu trữ các byte trong bộ nhớ chính?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "ARM dùng little-endian hoặc big-endian tùy phiên bản",
      "Intel x86 dùng big-endian",
      "SunSPARC dùng middle-endian",
      "RISC-V dùng big-endian"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Intel x86 và RISC-V dùng <strong>little-endian</strong>; Motorola 680x0 và SunSPARC dùng <strong>big-endian</strong>; còn kiến trúc <strong>ARM</strong> dùng little-endian hoặc big-endian tùy phiên bản cấu hình.</p>"
  },
  {
    "id": "c3-3.12a",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.12a",
    "source": "Đề CK 2025.1 (#9853fd)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 56,
    "printedPage": 55,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Phạm vi giá trị của toán hạng hằng số (immediate) trong lệnh <code>addi</code> của RISC-V là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "$[-2048,\\; +2047]$",
      "$[-2048,\\; +2048]$",
      "$[-4095,\\; +4095]$",
      "$[-2^{31},\\; +2^{31} - 1]$"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Trường <code>immediate</code> của lệnh <code>addi</code> rộng $12$ bit có dấu (mã bù 2), biểu diễn các số từ $-2^{11}$ đến $+2^{11}-1$, tức <strong>$[-2048,\\; +2047]$</strong>.</p>"
  },
  {
    "id": "c3-3.12b",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.12b",
    "source": "Ôn tập CK 2025.2 (P1, Câu 42)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 56,
    "printedPage": 55,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong danh sách lệnh sau, những câu lệnh nào bị <strong>lỗi biên dịch</strong> trong phần mềm RARS vì vượt phạm vi hằng số 12-bit của <code>addi</code>?",
    "codeBlock": "1. lui x1, 0x1 -> addi x1, x0, -2048\n2. lui x1, 0x1 -> addi x1, x0, 0x800\n3. lui x1, 0x1 -> addi x1, x0, 0xFFFF800\n4. addi x1, x0, 0x801\n5. li x1, 0x800\n6. lui x1, 0x1 -> addi x1, x0, 2048\n7. lui x1, 0x1 -> addi x1, x0, 0xFFFFF800",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "Mục (2), (3), (4) và (6)",
      "Chỉ mục (4) và (6)",
      "Mục (1), (5) và (7)",
      "Mục (2), (5) và (6)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Trường <code>imm</code> của <code>addi</code> phải thuộc $[-2048, +2047]$ (<code>0xFFFFF800</code> đến <code>0x7FF</code>):<br>• Mục (2) <code>0x800</code> = 2048, (3) <code>0xFFFF800</code> (chỉ có 4 chữ F nên là số dương lớn), (4) <code>0x801</code> = 2049, (6) <code>2048</code> đều vượt $+2047$ $\\Rightarrow$ <strong>Lỗi (2, 3, 4, 6)</strong>. (Còn <code>li x1, 0x800</code> là lệnh giả nên trình hợp dịch tự tách thành <code>lui</code> + <code>addi</code> hợp lệ).</p>"
  },
  {
    "id": "c3-3.13",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài 3.13",
    "source": "Đề GK 2021.1 (IT3030E, Problem 6)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 57,
    "printedPage": 56,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khi thu gọn độ dài lệnh chuẩn $32$ bit xuống còn $16$ bit như tập lệnh nén (RISC-V Compressed RVC hoặc ARM Thumb) để tiết kiệm bộ nhớ chương trình, hạn chế tất yếu nào sau đây xảy ra?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Giới hạn số thanh ghi truy cập (chỉ 8 thanh ghi x8–x15 qua 3 bit), chuyển sang định dạng 2 toán hạng (rd kiêm nguồn), thu hẹp hằng số immediate (5–6 bit) và khoảng cách rẽ nhánh ngắn lại",
      "Không thể thực hiện phép cộng và trừ số nguyên",
      "Mỗi thanh ghi bị cắt giảm độ rộng từ 32 bit xuống còn 16 bit",
      "Chương trình bắt buộc phải dùng định dạng Big-Endian"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Các lệnh nén RVC 16-bit vẫn chạy trên các thanh ghi 32-bit, nhưng vì mã lệnh chỉ còn 16 bit nên có 4 hạn chế chính: (1) Chỉ đánh địa chỉ trực tiếp được $8$ thanh ghi thông dụng ($3$ bit); (2) Chuyển từ $3$ toán hạng sang $2$ toán hạng (<code>c.add rd, rs2</code>); (3) Phạm vi <code>imm</code> chỉ còn 5–6 bit; (4) Tầm nhảy / rẽ nhánh tương đối PC bị thu hẹp.</p>"
  },
  {
    "id": "c3-3.14",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.14",
    "source": "Đề CK 2020.2 (Trang 4) & Đề CK 2021.1 (Trang 3)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 57,
    "printedPage": 56,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa (vd: 0x000001AC)",
    "acceptedAnswers": [
      "0x000001AC",
      "0x1AC",
      "1AC"
    ],
    "question": "Xác định nội dung giá trị số Hexa lưu trữ tại thanh ghi <code>t1</code> sau khi thực hiện đoạn lệnh hợp ngữ cơ bản dưới đây:",
    "codeBlock": "addi s5, zero, 199   # 0xC7\naddi s6, zero, 229\nadd  t1, s6, s5",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "0x000001AC (hoặc 0x1AC)",
      "0x0000019E",
      "0x000001BC",
      "0x00000428"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Phép cộng thập phân: $t1 = 229 + 199 = 428_{(10)}$.<br>Đổi sang hệ 16: $428 = 1 \\times 256 + 10 \\times 16 + 12 = \\mathbf{\\text{0x000001AC}}$.</p>"
  },
  {
    "id": "c3-3.15",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.15",
    "source": "Đề CK 2022.2 & CK 2024.2 (#014753)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 58,
    "printedPage": 57,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho đoạn chương trình hợp ngữ RISC-V bên dưới (với các giá trị khởi tạo nguyên của <code>s0, s1</code> như <code>s0 = 7, s1 = 2</code>). Hãy xác định giá trị hợp lý có thể đạt được của <code>t2</code> và <code>t3</code>:",
    "codeBlock": "add  t0, s0, s1\nsub  t1, s0, s1\naddi t2, t0, 10\naddi t3, t1, -5",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "t2 = 19, t3 = 0",
      "t2 = 19, t3 = -3",
      "t2 = 15, t3 = -5",
      "t2 = 24, t3 = -8"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Từ đoạn lệnh ta có hệ: $t2 = (s0 + s1) + 10$ và $t3 = (s0 - s1) - 5 \\Rightarrow t2 + t3 = 2 \\times s0 + 5$, luôn là <strong>số lẻ</strong> (với $s0$ nguyên).<br>Thử 4 đáp án: chỉ có <strong>$19 + 0 = 19$</strong> là số lẻ (ứng với $s0 = 7, s1 = 2$).</p>"
  },
  {
    "id": "c3-3.16a",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.16a",
    "source": "Đề GK 2024.1 (#4610c2) & Ôn tập 2025.2 Câu 75",
    "examTags": [
      "GK",
      "OT"
    ],
    "pdfPage": 59,
    "printedPage": 58,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Những lệnh nào sau đây có thể dùng để <strong>xóa nội dung thanh ghi <code>s0</code> về $0$</strong>?<br>(1) <code>and s0, s0, zero</code> &nbsp; (2) <code>xor s0, s0, s0</code> &nbsp; (3) <code>xor s0, s0, zero</code> &nbsp; (4) <code>and s0, s0, s0</code>",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Lệnh (1) và (2)",
      "Lệnh (1) và (3)",
      "Lệnh (2) và (4)",
      "Lệnh (3) và (4)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• <code>and s0, s0, zero</code>: bất kỳ bit nào AND với 0 đều ra $0$ (Đúng).<br>• <code>xor s0, s0, s0</code>: hai giá trị giống hệt nhau XOR với nhau luôn bằng $0$ (Đúng).<br>• Hai lệnh (3) và (4) đều giữ nguyên giá trị ban đầu của <code>s0</code>.</p>"
  },
  {
    "id": "c3-3.16b",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.16b",
    "source": "Đề GK 2018.2 (Mã đề 198 Câu 18)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 59,
    "printedPage": 58,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong hai lệnh <code>add s4, s4, s4</code> và <code>slli s4, s4, 1</code>, chúng cùng thực hiện phép toán nào? Hai lệnh <code>mul s4, s4, s4</code> và <code>srl s4, s4, s4</code> có tương đương với chúng không?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Cùng thực hiện phép nhân 2 ($2 \\times s4$); hai lệnh mul và srl KHÔNG tương đương",
      "Cùng thực hiện phép bình phương ($s4^2$); mul và srl có tương đương",
      "Cùng thực hiện phép chia 2 ($s4 / 2$); srl tương đương còn mul thì không",
      "Không tương đương với nhau vì lệnh dịch trái chỉ dùng cho số không dấu"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>add s4, s4, s4</code> tính $s4 + s4 = 2 \\times s4$, tương đương dịch trái $1$ bit <code>slli s4, s4, 1</code> ($\\times 2^1$). Còn <code>mul s4, s4, s4</code> tính bình phương ($s4^2$) và <code>srl</code> là dịch phải nên không tương đương.</p>"
  },
  {
    "id": "c3-3.17a",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.17a",
    "source": "Đề GK 2024.1 (#99ef6) & Ôn tập 2025.2 Câu 6",
    "examTags": [
      "GK",
      "OT"
    ],
    "pdfPage": 59,
    "printedPage": 58,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đoạn chương trình nào tương đương với lệnh giả <code>li t0, 0x20241120</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lui t0, 0x20241 -> addi t0, t0, 0x120",
      "lui t0, 0x202411 -> ori t0, t0, 0x20",
      "lui t0, 0x2024 -> addi t0, t0, 0x1120",
      "lui t0, 0x2024 -> ori t0, t0, 0x1120"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số 32-bit <code>0x20241120</code> tách thành 20 bit cao (5 chữ Hexa đầu) là <code>0x20241</code> và 12 bit thấp (3 chữ Hexa cuối) là <code>0x120</code> (chữ số thứ 3 từ phải sang là $1 < 8$ nên dương). Do đó dùng <code>lui t0, 0x20241</code> + <code>addi t0, t0, 0x120</code>.</p>"
  },
  {
    "id": "c3-3.17b",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.17b",
    "source": "Đề GK 2024.1 (#e10492)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 59,
    "printedPage": 58,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chọn đoạn lệnh RISC-V thực hiện câu lệnh C: <code>a += 0x12345678;</code> (với biến <code>a</code> nằm trong thanh ghi <code>s0</code>).",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lui t0, 0x12345 -> addi t0, t0, 0x678 -> add s0, s0, t0",
      "addi s0, s0, 0x12345678",
      "lui t0, 0x12346 -> addi t0, t0, 0x678 -> add s0, s0, t0",
      "lui t0, 0x1234 -> ori t0, t0, 0x5678 -> add s0, s0, t0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Hằng số <code>0x12345678</code> có 3 chữ cuối là <code>0x678</code> ($6 < 8$, bit 11 = 0) nên không cần cộng 1 vào <code>0x12345</code>: nạp bằng <code>lui t0, 0x12345</code> + <code>addi t0, t0, 0x678</code>, rồi cộng vào <code>s0</code> bằng <code>add s0, s0, t0</code>.</p>"
  },
  {
    "id": "c3-3.18a",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.18a",
    "source": "Đề GK 2022.2 (Đề 0008 Câu 9)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 60,
    "printedPage": 59,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Để gán hằng số <code>t2 = 0x56789</code> bằng hợp ngữ chuẩn RISC-V (không dùng lệnh giả <code>li</code>), cặp lệnh nào sau đây chính xác?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lui t2, 0x56 -> addi t2, t2, 0x789",
      "lui t2, 0x567 -> addi t2, t2, 0x89",
      "lui t2, 0x57 -> addi t2, t2, 0x789",
      "addi t2, x0, 0x56789"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Viết đủ 8 chữ số Hexa là <code>0x00056789</code>: 5 chữ đầu là <code>0x56</code>, 3 chữ cuối là <code>0x789</code> ($7 < 8$, số dương $\\le 0\\text{x}7\\text{FF}$). Vậy dùng: <code>lui t2, 0x56</code> $\\to$ <code>addi t2, t2, 0x789</code>.</p>"
  },
  {
    "id": "c3-3.18b",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.18b",
    "source": "Đề GK 2022.2 (Đề 0009 Câu 9)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 60,
    "printedPage": 59,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Để gán hằng số <code>t1 = 0xE7F</code> bằng hợp ngữ chuẩn RISC-V (không dùng lệnh giả <code>li</code>), cặp lệnh nào sau đây chính xác?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lui t1, 1 -> addi t1, t1, -385",
      "addi t1, x0, 0xE7F",
      "ori t1, x0, 0xE7F",
      "lui t1, 0 -> addi t1, t1, 0xE7F"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số <code>0x00000E7F</code> có chữ số thứ 3 từ phải sang là <code>E</code> $\\ge 8$ (nếu truyền thẳng <code>0xE7F</code> vào <code>addi/ori</code> sẽ bị mở rộng dấu thành <code>0xFFFFFE7F</code>). Phải nạp <code>lui t1, 1</code> (<code>0x1000</code>) rồi cộng $0\\text{xE}7\\text{F} - 0\\text{x}1000 = 3711 - 4096 = -385$.</p>"
  },
  {
    "id": "c3-3.18c",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.18c",
    "source": "Đề GK 2022.2 (Đề 0006 Câu 9)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 60,
    "printedPage": 59,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Để gán hằng số <code>s5 = 0xCA03CA06</code> bằng hợp ngữ chuẩn RISC-V (không dùng lệnh giả <code>li</code>), cặp lệnh nào sau đây chính xác?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lui s5, 0xCA03D -> addi s5, s5, -1530",
      "lui s5, 0xCA03C -> addi s5, s5, 0xA06",
      "lui s5, 0xCA03C -> ori s5, s5, 0xA06",
      "lui s5, 0xCA03D -> addi s5, s5, -1536"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Chữ số Hexa thứ 3 từ phải sang của <code>0xCA03CA06</code> là <code>A</code> $\\ge 8$, nên 20 bit cao phải tăng từ <code>0xCA03C</code> lên <strong><code>0xCA03D</code></strong>, còn phần bù cho <code>0xA06</code> là $2566 - 4096 = \\mathbf{-1530}$.</p>"
  },
  {
    "id": "c3-3.19",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.19",
    "source": "Đề GK 2024.1 (#1b55cf) & Ôn tập CK 2025.2 Câu 24",
    "examTags": [
      "GK",
      "OT"
    ],
    "pdfPage": 60,
    "printedPage": 59,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa (vd: 0xFFFFF800)",
    "acceptedAnswers": [
      "0xFFFFF800",
      "FFFFF800"
    ],
    "question": "Cho đoạn mã hợp ngữ RISC-V bên dưới. Hãy xác định giá trị của thanh ghi <code>s2</code> ở dạng số Hexa 32-bit sau khi thực thi:",
    "codeBlock": "li   s0, 1\nlui  s1, 0xFFFFF\nori  s1, s1, 2047\nadd  s2, s0, s1",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "0xFFFFF800",
      "0xFFFFF7FF",
      "0x00000800",
      "0xFFFFE800"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• <code>li s0, 1</code> $\\Rightarrow s0 = 1$.<br>• <code>lui s1, 0xFFFFF</code> $\\Rightarrow s1 = \\text{0xFFFFF000}$.<br>• <code>ori s1, s1, 2047</code>: vì $2047 = \\text{0x7FF}$ (bit 11 = 0) nên $s1 = \\text{0xFFFFF7FF}$.<br>• <code>add s2, s0, s1</code> $\\Rightarrow s2 = \\text{0xFFFFF7FF} + 1 = \\mathbf{\\text{0xFFFFF800}}$.</p>"
  },
  {
    "id": "c3-3.20a",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.20a",
    "source": "Đề GK 2024.1 (#5e7591) & Ôn tập 2025.2 Câu 64",
    "examTags": [
      "GK",
      "OT"
    ],
    "pdfPage": 61,
    "printedPage": 60,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân",
    "acceptedAnswers": [
      "141"
    ],
    "question": "Tính giá trị thập phân của thanh ghi <code>s4</code> sau đoạn lệnh: <code>addi s1, zero, 87</code> $\\to$ <code>addi s2, zero, 53</code> $\\to$ <code>xor s3, s2, zero</code> $\\to$ <code>addi s3, s3, 1</code> $\\to$ <code>add s4, s1, s3</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "141",
      "140",
      "88",
      "33"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>xor s3, s2, zero</code> giữ nguyên giá trị <code>s2</code> ($s3 = 53$). Sau đó $s3 = 53 + 1 = 54$, suy ra $s4 = 87 + 54 = \\mathbf{141}$.</p>"
  },
  {
    "id": "c3-3.20b",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.20b",
    "source": "Đề CK 2025.1 (#48b64c)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 61,
    "printedPage": 60,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân",
    "acceptedAnswers": [
      "137"
    ],
    "question": "Tính giá trị thập phân của thanh ghi <code>s4</code> sau đoạn lệnh: <code>addi s1, zero, 80</code> $\\to$ <code>addi s2, zero, 56</code> $\\to$ <code>xor s3, s2, zero</code> $\\to$ <code>addi s3, s3, 1</code> $\\to$ <code>add s4, s1, s3</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "137",
      "136",
      "81",
      "23"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>xor s3, s2, zero</code> gán $s3 = 56$. Lệnh tiếp theo $s3 = 56 + 1 = 57$, suy ra $s4 = 80 + 57 = \\mathbf{137}$.</p>"
  },
  {
    "id": "c3-3.21",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.21",
    "source": "Đề GK 2018.2 (Mã đề 204 Câu 9)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 61,
    "printedPage": 60,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho biết giá trị của thanh ghi <code>s1</code> sau khi thực hiện xong đoạn lệnh dưới đây:",
    "codeBlock": "addi t1, x0, -1\naddi t2, zero, 5\nor   s1, t1, t2",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "0xFFFFFFFF",
      "5",
      "-5",
      "1"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số nguyên $-1$ trong mã bù 2 32-bit gồm toàn bộ 32 bit <code>1</code> ($t1 = \\text{0xFFFFFFFF}$). Thực hiện phép OR bất kỳ với <code>0xFFFFFFFF</code> đều bật toàn bộ 32 bit lên 1 $\\Rightarrow s1 = \\mathbf{\\text{0xFFFFFFFF}}$.</p>"
  },
  {
    "id": "c3-3.22a",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.22a",
    "source": "Đề CK 2024.1 (#d9f3db) & Ôn tập 2025.2 Câu 54",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 62,
    "printedPage": 61,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa (vd: 0x112234FF)",
    "acceptedAnswers": [
      "0x112234FF",
      "112234FF"
    ],
    "question": "Cho biết nội dung thanh ghi <code>s1</code> theo số Hexa sau đoạn lệnh: <code>lui s0, 0x11223</code> $\\to$ <code>ori s0, s0, 0x4AB</code> $\\to$ <code>ori s1, s0, 0xFF</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x112234FF",
      "0x112234AB",
      "0x000000AB",
      "0x11223400"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>lui</code> và <code>ori</code> nạp $s0 = \\text{0x112234AB}$. Phép <code>ori s1, s0, 0xFF</code> giữ nguyên 6 chữ đầu và bật 8 bit cuối thành <code>FF</code> $\\Rightarrow s1 = \\mathbf{\\text{0x112234FF}}$.</p>"
  },
  {
    "id": "c3-3.22b",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.22b",
    "source": "Đề CK 2022.2 & 2024.2 (#585834)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 62,
    "printedPage": 61,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa (vd: 0x000000CD)",
    "acceptedAnswers": [
      "0x000000CD",
      "0xCD",
      "000000CD",
      "CD"
    ],
    "question": "Nếu thanh ghi <code>s0 = 0x223389CD</code>, sau khi thực hiện lệnh <code>andi s1, s0, 0xFF</code> thì nội dung thanh ghi <code>s1</code> bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x000000CD",
      "0x223389FF",
      "0x22338900",
      "0xFFFFFFCD"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Phép <code>andi s1, s0, 0xFF</code> thực hiện AND với mặt nạ <code>0x000000FF</code> (vì <code>0xFF = 255</code> có bit 11 bằng 0), xóa 24 bit cao về 0 và giữ lại 8 bit thấp $\\Rightarrow s1 = \\mathbf{\\text{0x000000CD}}$.</p>"
  },
  {
    "id": "c3-3.23a",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.23a",
    "source": "Đề CK 2020.2 (Trang 3)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 62,
    "printedPage": 61,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa",
    "acceptedAnswers": [
      "0xEDCBABCD",
      "EDCBABCD"
    ],
    "question": "Cho <code>s0 = 0x1234ABCD</code> và <code>s1 = 0xFFFF0000</code>. Tìm giá trị Hexa của <code>s2</code> sau lệnh <code>xor s2, s0, s1</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xEDCBABCD",
      "0xEDCB5432",
      "0x1234ABCD",
      "0x12345432"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>XOR với <code>0xFFFF0000</code> đảo toàn bộ 4 chữ số đầu ($15 - 1 = \\text{E}$, $15 - 2 = \\text{D}$, $15 - 3 = \\text{C}$, $15 - 4 = \\text{B}$) và giữ nguyên 4 chữ số cuối <code>ABCD</code> $\\Rightarrow s2 = \\mathbf{\\text{0xEDCBABCD}}$.</p>"
  },
  {
    "id": "c3-3.23b",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.23b",
    "source": "Đề CK 2020.2 (Trang 7)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 62,
    "printedPage": 61,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa",
    "acceptedAnswers": [
      "0x0000AA80",
      "0000AA80",
      "0xAA80"
    ],
    "question": "Cho <code>t0 = 0xAAAAAAAA</code> và <code>t1 = 0x0000FFC0</code>. Tìm giá trị Hexa của <code>t3</code> sau lệnh <code>and t3, t0, t1</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x0000AA80",
      "0x0000FFC0",
      "0x0000AAA0",
      "0xAAAAFFC0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Chữ số thứ 2 từ phải sang: $A = 1010_2$ AND $C = 1100_2 = 1000_2 = 8$; 4 chữ đầu AND 0 ra 0; 2 chữ tiếp AND F giữ nguyên <code>AA</code>; chữ cuối là 0 $\\Rightarrow t3 = \\mathbf{\\text{0x0000AA80}}$.</p>"
  },
  {
    "id": "c3-3.23c",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.23c",
    "source": "Đề CK 2022.2, 2024.2 (#5070f9) & Ôn tập 2025.2 Câu 64",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 62,
    "printedPage": 61,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho <code>t0 = 0x5A6B7C8D</code> và <code>t1 = 0x000FFF00</code>. Tìm <code>t2</code> và <code>t3</code> sau 2 lệnh: <code>xor t2, t0, t1</code> và <code>xor t3, t2, t1</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "t2 = 0x5A64838D và t3 = 0x5A6B7C8D",
      "t2 = 0x5A64838D và t3 = 0x5A64838D",
      "t2 = 0xA59B7C8D và t3 = 0x5A6B7C8D",
      "t2 = 0x5A6FFF8D và t3 = 0x00000000"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>t2</code> đảo 3 chữ giữa <code>B7C</code> thành <code>483</code> ($15 - B = 4, 15 - 7 = 8, 15 - C = 3$) nên $t2 = \\text{0x5A64838D}$. Theo tính chất $(A \\oplus B) \\oplus B = A$, XOR lần 2 khôi phục lại nguyên bản $t3 = t0 = \\mathbf{\\text{0x5A6B7C8D}}$.</p>"
  },
  {
    "id": "c3-3.23d",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.23d",
    "source": "Đề GK 2025.2 (Đề 0012 Câu 108)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 63,
    "printedPage": 62,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa",
    "acceptedAnswers": [
      "0x3AB6DDEB",
      "3AB6DDEB"
    ],
    "question": "Cho <code>t0 = 0x35B9D2E4</code> và <code>t1 = 0x0F0F0F0F</code>. Tìm giá trị Hexa của <code>t2</code> sau lệnh <code>xor t2, t0, t1</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x3AB6DDEB",
      "0xCAD92DE4",
      "0x05090204",
      "0x35B9D2EB"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>XOR với <code>0x0F0F0F0F</code> giữ nguyên các chữ số ở vị trí lẻ từ trái (<code>3, B, D, E</code>) và đảo các chữ số ở vị trí chẵn ($15 - 5 = A$, $15 - 9 = 6$, $15 - 2 = D$, $15 - 4 = B$) $\\Rightarrow t2 = \\mathbf{\\text{0x3AB6DDEB}}$.</p>"
  },
  {
    "id": "c3-3.23e",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.23e",
    "source": "Đề GK 2023.2 (Đề 2 Câu 4)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 63,
    "printedPage": 62,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa của t1",
    "acceptedAnswers": [
      "0x89DE7321",
      "89DE7321"
    ],
    "question": "Cho <code>t0 = 0xA1B2C3D4</code>. Để biến đổi <code>t0</code> thành <code>0x286CB0F5</code> bằng một lệnh logic <code>xor t0, t0, t1</code>, thanh ghi mặt nạ <code>t1</code> phải chứa hằng số Hexa nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x89DE7321",
      "0x286CB0F5",
      "0xA1B2C3D4",
      "0x79DE7321"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo tính chất phép XOR: $t1 = \\text{0xA1B2C3D4} \\oplus \\text{0x286CB0F5} = \\mathbf{\\text{0x89DE7321}}$.</p>"
  },
  {
    "id": "c3-3.24",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.24",
    "source": "Đề GK 2022.2 (Đề 0008 & 0007 Câu 5)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 63,
    "printedPage": 62,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thực hiện hai phép toán logic 32-bit: <code>0xB8C32AC9 AND 0x00FFFF00</code> và <code>0xCF072D76 OR 0xF0F0F0F0</code>, kết quả ở hệ 16 lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x00C32A00 và 0xFFF7FDF6",
      "0x00C32AC9 và 0xFFF0F0F6",
      "0xB80000C9 và 0xCF072D76",
      "0x00C32A00 và 0xF0F0F0F0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• <code>0xB8C32AC9 & 0x00FFFF00</code> giữ 4 chữ số giữa $\\Rightarrow \\mathbf{\\text{0x00C32A00}}$.<br>• <code>0xCF072D76 | 0xF0F0F0F0</code> bật các chữ số vị trí lẻ lên F ($C|F=F, 0|F=F, 2|F=F, 7|F=F$) và giữ các chữ số vị trí chẵn ($F, 7, D, 6$) $\\Rightarrow \\mathbf{\\text{0xFFF7FDF6}}$.</p>"
  },
  {
    "id": "c3-3.25",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.25",
    "source": "Đề CK 2020.2 (Trang 6) & CK 2021.1 (Trang 5)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 63,
    "printedPage": 62,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho câu lệnh C: <code>X = (Y & 0x0F) &lt;&lt; 4;</code>. Biết các biến nguyên <code>X</code> và <code>Y</code> lần lượt nằm tại <code>s2</code> và <code>s1</code>. Chuỗi lệnh RISC-V nào dịch chính xác câu lệnh C trên?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "andi t1, s1, 15 -> slli s2, t1, 4",
      "and t1, s1, 0xF -> slli s2, t1, 16",
      "andi t1, s1, 0xFFFF -> slli s2, t1, 2",
      "slli t1, s1, 15 -> andi s2, t1, 4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• Bước 1: Tính <code>Y & 0x0F</code> (với $0\\text{x}0\\text{F} = 15_{(10)}$ là hằng số tức thì) dùng <code>andi t1, s1, 15</code>.<br>• Bước 2: Dịch trái 4 bit (<code>&lt;&lt; 4</code>) cất vào <code>s2</code> dùng <code>slli s2, t1, 4</code>.</p>"
  },
  {
    "id": "c3-3.26a",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.26a",
    "source": "Đề GK 2023.2 (Đề 1 Câu 4)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 64,
    "printedPage": 63,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho <code>t0 = 0xAAAAAAAA</code>, <code>t1 = 0x00FF0000</code>. Tìm giá trị Hexa của <code>t2</code> và <code>t3</code> sau hai lệnh: <code>srli t2, t0, 3</code> và <code>or t3, t2, t1</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "t2 = 0x15555555 và t3 = 0x15FF5555",
      "t2 = 0xF5555555 và t3 = 0xFFFF5555",
      "t2 = 0x2AAAAAAA và t3 = 0x2AFFAAAA",
      "t2 = 0x55555555 và t3 = 0x55FF5555"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• $t0 = 1010\\;1010\\dots 1010_2$. Khi dịch phải logic 3 bit (<code>srli</code>), chèn <code>000</code> vào trái $\\Rightarrow 0001\\;0101\\;0101\\dots = \\mathbf{\\text{0x15555555}}$.<br>• <code>or t3, t2, 0x00FF0000</code> bật byte thứ 2 lên <code>FF</code> $\\Rightarrow t3 = \\mathbf{\\text{0x15FF5555}}$.</p>"
  },
  {
    "id": "c3-3.26b",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài 3.26b",
    "source": "Đề CK 2021.2 (Mã đề B8 Câu 2.2)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 64,
    "printedPage": 63,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa theo tài liệu KTMT_GK",
    "acceptedAnswers": [
      "0xFEFFFEFE",
      "FEFFFEFE",
      "0xFEFFFEDE"
    ],
    "question": "Cho <code>t0 = 0xBEADFEED</code>, <code>t1 = 0xDEADFADE</code>. Tìm giá trị Hexa của <code>t2</code> sau hai lệnh: <code>slli t2, t0, 4</code> và <code>or t2, t2, t1</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xFEFFFEFE",
      "0xDEADFADE",
      "0xBEADFEED",
      "0xEAFFEEFE"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• <code>slli t2, t0, 4</code> dịch trái 4 bit (1 chữ số Hexa): $t2 = \\text{0xEADFEED0}$.<br>• Lấy từng chữ số Hexa của <code>0xEADFEED0</code> OR với <code>0xDEADFADE</code>: tài liệu <code>KTMT_GK.pdf</code> ghi kết quả là <strong><code>0xFEFFFEFE</code></strong> (chú ý tính bit chính xác từng nibble ra <code>0xFEFFFEDE</code> vì $\\text{D} \\mid \\text{D} = \\text{D}$).</p>"
  },
  {
    "id": "c3-3.27",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh So sánh (slt, slti, sltu, blt, bltu) và Rẽ nhánh",
    "exerciseCode": "Bài 3.27",
    "source": "Đề CK 2021.2 (Mã đề B8 Câu 2.1)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 64,
    "printedPage": 63,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho câu lệnh hợp ngữ: <code>slti t2, t0, X</code>. Giả sử thanh ghi <code>t0</code> có giá trị <code>0xAD100002</code>. Với những giá trị nào của hằng số <code>X</code> (thập phân) thì thanh ghi <code>t2</code> sẽ nhận giá trị bằng $1$?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Mọi giá trị nguyên hợp lệ của X thuộc đoạn [-2048, +2047]",
      "Chỉ khi X > 0xAD100002",
      "Không có giá trị nào vì 0xAD100002 quá lớn",
      "Chỉ khi X >= 0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>slti</code> thực hiện so sánh <strong>có dấu</strong> giữa <code>t0</code> và hằng số 12-bit <code>X</code> $\\in [-2048, +2047]$. Vì <code>t0 = 0xAD100002</code> bắt đầu bằng $A = 1010_2$ (bit dấu = 1), <code>t0</code> là số âm rất nhỏ ($\\approx -1.39 \\times 10^9 < -2048$). Nên với <strong>mọi $X \\in [-2048, +2047]$</strong>, $t0 < X$ luôn đúng $\\Rightarrow t2 = 1$.</p>"
  },
  {
    "id": "c3-3.28a",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh So sánh (slt, slti, sltu, blt, bltu) và Rẽ nhánh",
    "exerciseCode": "Bài 3.28a",
    "source": "Đề CK 2025.1 (#a91b41)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 65,
    "printedPage": 64,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân của t1",
    "acceptedAnswers": [
      "16"
    ],
    "question": "Tìm giá trị thập phân của thanh ghi <code>t1</code> sau khi chạy đoạn mã hợp ngữ dưới đây:",
    "codeBlock": "li   s1, -15\nli   s2, 17\nslt  t0, s1, s2\nbne  t0, zero, else\naddi t1, s1, 14\nj    endif\nelse:\naddi t1, s2, -1\nendif: nop",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "16",
      "-1",
      "18",
      "-15"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vì $-15 < 17$ là Đúng nên <code>slt t0, s1, s2</code> đặt $t0 = 1$. Lệnh <code>bne t0, zero, else</code> thỏa mãn ($t0 \\neq 0$) nên nhảy tới nhãn <code>else</code>, thực hiện $t1 = s2 - 1 = 17 - 1 = \\mathbf{16}$.</p>"
  },
  {
    "id": "c3-3.28b",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh So sánh (slt, slti, sltu, blt, bltu) và Rẽ nhánh",
    "exerciseCode": "Bài 3.28b",
    "source": "Ôn tập CK 2025.2 (Câu 23)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 65,
    "printedPage": 64,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị cuối của x24",
    "acceptedAnswers": [
      "11"
    ],
    "question": "Cho <code>x22 = 10, x23 = 5, x24 = 0</code>. Chạy chuỗi lệnh: <code>slt x24, x22, x23</code> $\\to$ <code>bne x24, x0, L1</code> $\\to$ <code>addi x24, x24, 10</code> $\\to$ <code>L1: addi x24, x24, 1</code>. Tìm giá trị cuối của <code>x24</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "11",
      "1",
      "10",
      "0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vì $10 < 5$ là Sai nên <code>x24 = 0</code>. Lệnh <code>bne</code> không nhảy, thực hiện tiếp <code>addi x24, x24, 10</code> ($x24 = 10$) rồi trôi tiếp xuống nhãn <code>L1</code> cộng thêm $1$ $\\Rightarrow x24 = \\mathbf{11}$.</p>"
  },
  {
    "id": "c3-3.28c",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh So sánh (slt, slti, sltu, blt, bltu) và Rẽ nhánh",
    "exerciseCode": "Bài 3.28c",
    "source": "Ôn tập CK 2025.2 (Câu 61)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 65,
    "printedPage": 64,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân của x7",
    "acceptedAnswers": [
      "151"
    ],
    "question": "Cho <code>x5 = 0x0000000A</code> ($10$) và <code>x6 = 0x0000000A</code>. Chạy: <code>addi x7, x0, 100</code> $\\to$ <code>bne x5, x6, Skip</code> $\\to$ <code>addi x7, x7, 50</code> $\\to$ <code>Skip: addi x7, x7, 1</code>. Tìm giá trị của <code>x7</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "151",
      "101",
      "150",
      "100"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vì <code>x5 == x6</code> ($10 = 10$) nên lệnh <code>bne</code> không rẽ nhánh. Thanh ghi <code>x7</code> nhận giá trị $100 + 50 + 1 = \\mathbf{151}$.</p>"
  },
  {
    "id": "c3-3.28d1",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh So sánh (slt, slti, sltu, blt, bltu) và Rẽ nhánh",
    "exerciseCode": "Bài 3.28d (1)",
    "source": "Đề GK 2024.1 (#8d33e2)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 65,
    "printedPage": 64,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị của a0",
    "acceptedAnswers": [
      "9"
    ],
    "question": "Cho <code>t0 = -2</code>, <code>t1 = 2</code>. Chạy lệnh rẽ nhánh <code>blt t0, t1, else</code>. Nhánh không nhảy tính <code>a0 = 1 + 5</code>; nhánh <code>else</code> tính <code>a0 = 2 + 7</code>. Tìm <code>a0</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "9",
      "6",
      "7",
      "2"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>blt</code> so sánh có dấu: $-2 < 2$ là Đúng $\\Rightarrow$ Nhảy tới nhãn <code>else</code> và tính $a0 = 2 + 7 = \\mathbf{9}$.</p>"
  },
  {
    "id": "c3-3.28d2",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh So sánh (slt, slti, sltu, blt, bltu) và Rẽ nhánh",
    "exerciseCode": "Bài 3.28d (2)",
    "source": "Đề GK 2024.1 (#484325)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 65,
    "printedPage": 64,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị của a0",
    "acceptedAnswers": [
      "15"
    ],
    "question": "Cho <code>t0 = 10</code>, <code>t1 = 10</code>. Chạy lệnh rẽ nhánh <code>bltu t0, t1, else</code>. Nhánh không nhảy tính <code>a0 = 10 + 5</code>; nhánh <code>else</code> tính <code>a0 = 20 + 7</code>. Tìm <code>a0</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "15",
      "27",
      "10",
      "20"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Điều kiện <code>bltu</code> kiểm tra nhỏ hơn ngặt ($10 < 10$ là Sai) $\\Rightarrow$ Không nhảy, thực hiện nhánh liền kề tính $a0 = 10 + 5 = \\mathbf{15}$.</p>"
  },
  {
    "id": "c3-3.72",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh So sánh (slt, slti, sltu, blt, bltu) và Rẽ nhánh",
    "exerciseCode": "Bài 3.72",
    "source": "Đề CK 2022.2, 2024.1 (#ada646), 2024.2 (#f56cc1) & Ôn tập 2025.2 Câu 27",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 65,
    "printedPage": 64,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Lệnh RISC-V nào sau đây có yêu cầu phần cứng (ALU) thực hiện phép trừ?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "beq s1, s2, Label1",
      "lw s1, 12(s2)",
      "and s0, s1, s2",
      "slli t1, t2, 8"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>Kiến thức áp dụng:</strong></p><ul><li>Lệnh <code>lw s1, 12(s2)</code> sử dụng phép <strong>cộng</strong> trong ALU để tính địa chỉ bộ nhớ (<code>s2 + 12</code>).</li><li>Lệnh <code>and s0, s1, s2</code> thực hiện phép logic AND; lệnh <code>slli t1, t2, 8</code> thực hiện phép dịch trái bit.</li><li>Lệnh rẽ nhánh <strong><code>beq s1, s2, Label1</code></strong> cần kiểm tra xem hai thanh ghi <code>s1</code> và <code>s2</code> có bằng nhau hay không bằng cách đưa <code>s1</code> và <code>s2</code> vào bộ ALU để thực hiện <strong>phép trừ</strong> (<code>s1 - s2</code>). Nếu hiệu bằng $0$ (cờ $\\text{Zero} = 1$) thì hai thanh ghi bằng nhau.</li></ul>"
  },
  {
    "id": "c3-3.29",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.29",
    "source": "Đề CK 2022.2 & CK 2024.2 (#56e53f)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 66,
    "printedPage": 65,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Giả sử thanh ghi <code>s0</code> đang chứa giá trị địa chỉ <code>0x10021000</code>. Chức năng đúng của câu lệnh hợp ngữ <code>lw t0, 8(s0)</code> là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Nạp nội dung word nhớ ở địa chỉ 0x10021008 đưa vào thanh ghi t0",
      "Ghi giá trị hằng số 0x10021008 vào thanh ghi t0",
      "Lấy nội dung thanh ghi t0 cộng thêm 8 rồi lưu ra word nhớ ở địa chỉ 0x10021000",
      "Lưu nội dung thanh ghi t0 ra word nhớ ở địa chỉ 0x10021008"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Địa chỉ hiệu dụng của toán hạng bộ nhớ là $s0 + 8 = \\text{0x10021000} + 8 = \\text{0x10021008}$. Lệnh <code>lw t0, 8(s0)</code> nạp nội dung word nhớ tại <code>0x10021008</code> vào thanh ghi <code>t0</code> (nếu là <code>sw</code> thì ngược lại: lưu từ <code>t0</code> ra bộ nhớ).</p>"
  },
  {
    "id": "c3-3.30",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.30",
    "source": "Đề CK 2025.1 (#1f833e)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 66,
    "printedPage": 65,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đoạn lệnh nào dưới đây dùng để nạp một word từ địa chỉ bộ nhớ <code>0x10010004</code> vào thanh ghi <code>t1</code> (mà không dùng lệnh giả)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lui t0, 0x10010 -> addi t0, t0, 0x004 -> lw t1, 0(t0)",
      "li t0, 0x10010004 -> lw t1, zero(t0)",
      "lui t0, 0x1001 -> addi t0, t0, 0x0004 -> lw t1, 0(t0)",
      "lw t1, 0x10010004(zero)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Địa chỉ <code>0x10010004</code> có 5 chữ số Hexa đầu (20 bit cao) là <code>0x10010</code> và 3 chữ cuối là <code>0x004</code>. Lệnh <code>lui t0, 0x10010</code> tạo <code>0x10010000</code>, cộng thêm <code>0x004</code> rồi đọc <code>lw t1, 0(t0)</code>. Phương án <code>0x1001</code> bị sai vì thiếu một chữ số 0.</p>"
  },
  {
    "id": "c3-3.31",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.31",
    "source": "Đề GK 2018.2 (Mã đề 198, 199, 204)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 67,
    "printedPage": 66,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Biến <code>X</code> thuộc kiểu word 32-bit nằm ở địa chỉ <code>0x0FB028C4</code>. Đoạn chương trình nào sau đây tương đương với câu lệnh trong ngôn ngữ C: <code>X = X + 1;</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lui t3, 0x0FB03 -> addi t3, t3, -1852 -> lw s3, 0(t3) -> addi s3, s3, 1 -> sw s3, 0(t3)",
      "addi t3, x0, 0x0FB028C4 -> lw s3, 0(t3) -> addi s3, s3, 1 -> sw s3, 0(t3)",
      "lui t3, 0x28C4 -> ori t3, t3, 0x0FB0 -> lw s3, 0(t3) -> addi s3, s3, 1 -> sw s3, 0(t3)",
      "lui t3, 0x0FB03 -> addi t3, t3, -1852 -> sw s3, 0(t3) -> addi s3, s3, 1 -> lw s3, 0(t3)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vì 3 chữ cuối là <code>0x8C4</code> ($8 \\ge 8$), phải dùng <code>lui t3, 0x0FB03</code> và <code>addi t3, t3, -1852</code> ($2244 - 4096 = -1852$) để tạo đúng địa chỉ <code>0x0FB028C4</code>. Sau đó phải đọc <code>lw</code> trước, cộng <code>1</code> rồi mới ghi <code>sw</code>.</p>"
  },
  {
    "id": "c3-3.32",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.32",
    "source": "Đề CK 2022.2, 2024.1, 2024.2 & Ôn tập 2025.2 Câu 20",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 67,
    "printedPage": 66,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Biến <code>x</code> thuộc kiểu word 32-bit nằm ở địa chỉ <code>0x10010200</code>. Đoạn chương trình RISC-V nào dưới đây tương đương với câu lệnh ngôn ngữ C: <code>x = x &amp; 15;</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lui t3, 0x10010 -> addi t3, t3, 0x200 -> lw s3, 0(t3) -> andi s3, s3, 15 -> sw s3, 0(t3)",
      "andi t3, t3, 15",
      "lui t3, 0x10200 -> addi t3, t3, 0x100 -> lw s3, 0(t3) -> andi s3, s3, 15 -> sw s3, 0(t3)",
      "lui t3, 0x10010 -> addi t3, t3, 0x200 -> sw s3, 0(t3) -> andi s3, s3, 15 -> lw s3, 0(t3)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tạo địa chỉ <code>0x10010200</code> bằng <code>lui t3, 0x10010</code> + <code>addi t3, t3, 0x200</code>; sau đó đọc (<code>lw</code>), thực hiện AND với 15 (<code>andi</code>) rồi ghi trả lại bộ nhớ (<code>sw</code>).</p>"
  },
  {
    "id": "c3-3.33a",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.33a",
    "source": "Đề GK 2019.2 (Mã đề 243 Câu 19)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 68,
    "printedPage": 67,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa",
    "acceptedAnswers": [
      "0x4D3C2B1A",
      "4D3C2B1A"
    ],
    "question": "(Mã đề 243): Trong bộ nhớ chính có 4 byte theo thứ tự địa chỉ tăng dần là <code>1A, 2B, 3C, 4D</code> được lưu theo thứ tự đầu nhỏ (Little-Endian). Hỏi số nguyên 32-bit tương ứng bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x4D3C2B1A",
      "0x1A2B3C4D",
      "0x4321DCBA",
      "0xDCBA4321"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Theo quy tắc Little-Endian, byte ở địa chỉ nhỏ nhất là LSB và byte ở địa chỉ lớn nhất là MSB $\\Rightarrow$ Ghép ngược từ phải sang trái được: <strong><code>0x4D3C2B1A</code></strong>.</p>"
  },
  {
    "id": "c3-3.33b",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.33b",
    "source": "Đề GK 2019.2 (Mã đề 244 Câu 3)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 68,
    "printedPage": 67,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa",
    "acceptedAnswers": [
      "0x1A2B3C4D",
      "1A2B3C4D"
    ],
    "question": "(Mã đề 244): Trong bộ nhớ chính có 4 byte theo thứ tự địa chỉ tăng dần là <code>4D, 3C, 2B, 1A</code> được lưu theo thứ tự đầu nhỏ (Little-Endian). Hỏi số nguyên 32-bit tương ứng bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x1A2B3C4D",
      "0x4D3C2B1A",
      "0x4321DCBA",
      "0xDCBA4321"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ghép ngược từ byte ở địa chỉ cao nhất về byte ở địa chỉ thấp nhất được: <strong><code>0x1A2B3C4D</code></strong>.</p>"
  },
  {
    "id": "c3-3.33c",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.33c",
    "source": "Đề GK 2018.2 (Mã đề 204 Câu 12)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 68,
    "printedPage": 67,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "(Mã đề 204): Số 32-bit <code>0xC81A56</code> (tức <code>0x00C81A56</code>) khi được lưu trữ vào bộ nhớ chính theo thứ tự đầu nhỏ (Little-Endian) thì trình tự các byte theo địa chỉ tăng dần như thế nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "56, 1A, C8, 00",
      "56, 1A, C8",
      "00, C8, 1A, 56",
      "C8, 1A, 56"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số 32-bit viết đủ 8 chữ số Hexa (4 byte) là <code>0x00C81A56</code>. Khi lưu Little-Endian từ byte thấp nhất (LSB) đến cao nhất (MSB) theo địa chỉ tăng dần là: <strong><code>56, 1A, C8, 00</code></strong>.</p>"
  },
  {
    "id": "c3-3.33d",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.33d",
    "source": "Đề GK 2018.2 (Mã đề 198 Câu 11)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 68,
    "printedPage": 67,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "(Mã đề 198): Một số 32-bit được lưu ở 4 ngăn nhớ liên tiếp từ địa chỉ 612 đến 615 lần lượt chứa các giá trị Hexa: <code>E (tức 0E), 48, 21, A (tức 0A)</code>. Giá trị của số đó ở hệ 16 bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0E48210A nếu đầu to",
      "E4821A nếu đầu to",
      "A4821E nếu đầu to",
      "0A48210E nếu đầu nhỏ"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mỗi ngăn nhớ rộng 1 byte (2 chữ Hexa): <code>0E, 48, 21, 0A</code>. Nếu lưu theo đầu to (Big-Endian), ghép xuôi từ 612 đến 615 được <strong><code>0E48210A</code></strong> (còn đầu nhỏ thì phải là <code>0A21480E</code>).</p>"
  },
  {
    "id": "c3-3.34a",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.34a",
    "source": "Đề GK 2023.2 (Đề 1 Câu 3)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 69,
    "printedPage": 68,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa của s1",
    "acceptedAnswers": [
      "0xFFFFFFC2",
      "FFFFFFC2"
    ],
    "question": "Bộ nhớ chính lưu theo Little-Endian. Sau khi thực hiện: <code>lui s0, 0x1B32C</code> $\\to$ <code>addi s0, s0, 0x2E5</code> (để <code>s0 = 0x1B32C2E5</code>) $\\to$ <code>sw s0, 0(s6)</code> $\\to$ <code>lb s1, 1(s6)</code>. Hãy chỉ ra nội dung của <code>s1</code> theo số Hexa.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xFFFFFFC2",
      "0x000000C2",
      "0xFFFFFFE5",
      "0x00000032"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Khi <code>sw s0, 0(s6)</code> ra Little-Endian: tại <code>0(s6)</code> là <code>0xE5</code>, tại <code>1(s6)</code> là <code>0xC2</code>, <code>2(s6)</code> là <code>0x32</code>, <code>3(s6)</code> là <code>0x1B</code>.<br>Lệnh <code>lb s1, 1(s6)</code> đọc byte <code>0xC2</code>. Vì <code>C</code> $\\ge 8$ (bit dấu = 1) nên mở rộng dấu thành: <strong><code>s1 = 0xFFFFFFC2</code></strong>.</p>"
  },
  {
    "id": "c3-3.34b",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.34b",
    "source": "Đề GK 2023.2 (Đề 2 Câu 1)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 69,
    "printedPage": 68,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thực hiện đoạn lệnh: <code>lui s0, 0x4567C</code> $\\to$ <code>addi s0, s0, -802</code> (tạo <code>s0 = 0x4567BCDE</code>) $\\to$ <code>addi s1, zero, -16</code> $\\to$ <code>and s2, s0, s1</code>. Nội dung của <code>s1</code> và <code>s2</code> theo Hexa là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "s1 = 0xFFFFFFF0 và s2 = 0x4567BCD0",
      "s1 = 0xFFFFFFF0 và s2 = 0x0000000E",
      "s1 = 0x000000F0 và s2 = 0x000000D0",
      "s1 = 0xFFFFFFEF và s2 = 0x4567BCD0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số $-16$ trong bù 2 32-bit là <code>0xFFFFFFF0</code>. Phép <code>and s2, s0, s1</code> xóa chữ số Hexa cuối cùng của <code>0x4567BCDE</code> về 0, cho <strong><code>s2 = 0x4567BCD0</code></strong>.</p>"
  },
  {
    "id": "c3-3.34c",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.34c",
    "source": "Đề GK 2022.2 (Đề 0008 & 0007 Câu 2)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 69,
    "printedPage": 68,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa",
    "acceptedAnswers": [
      "0xEF0E525C",
      "EF0E525C"
    ],
    "question": "Từ địa chỉ <code>0x100110F8</code> đến <code>0x100110FB</code> lưu 4 byte theo thứ tự Little-Endian lần lượt là: <code>0x5C, 0x52, 0x0E, 0xEF</code>. Giá trị biến 32-bit này bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xEF0E525C",
      "0x5C520EEF",
      "0xEF0E525C nếu Big-Endian",
      "0xFE0E525C"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ghép ngược 4 byte từ địa chỉ lớn nhất (<code>0x100110FB</code>) về thấp nhất (<code>0x100110F8</code>) được <strong><code>0xEF0E525C</code></strong>.</p>"
  },
  {
    "id": "c3-3.35",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian",
    "exerciseCode": "Bài 3.35",
    "source": "Đề GK 2024.1 (#6a94a2) & Ôn tập CK 2025.2 Câu 49",
    "examTags": [
      "GK",
      "OT"
    ],
    "pdfPage": 70,
    "printedPage": 69,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập địa chỉ Hexa (vd: 0x1001C000)",
    "acceptedAnswers": [
      "0x1001C000",
      "1001C000"
    ],
    "question": "Địa chỉ của toán hạng đích trong lệnh <code>sw</code> bên dưới là gì (viết ở dạng số Hexa)?",
    "codeBlock": "li   s0, 0x1001BCDE\naddi s1, s0, 0x321\nsw   s0, 1(s1)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "0x1001C000",
      "0x1001BFFF",
      "0x1001C004",
      "0x1001BCDE"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• $s0 = \\text{0x1001BCDE}$.<br>• $s1 = \\text{0x1001BCDE} + \\text{0x321} = \\text{0x1001BFFF}$ (vì $\\text{CDE} + 321 = \\text{FFF}$).<br>• Địa chỉ đích của <code>sw s0, 1(s1)</code> là $s1 + 1 = \\text{0x1001BFFF} + 1 = \\mathbf{\\text{0x1001C000}}$.</p>"
  },
  {
    "id": "c3-3.36a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.36a",
    "source": "Đề GK 2018.2 (Mã đề 198 & 199)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 70,
    "printedPage": 69,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Biến $X, Y, Z$ nằm ở các thanh ghi <code>s1, s2, s3</code> tương ứng. Đoạn mã: <code>addi t1, s1, 2</code> $\\to$ <code>slli s2, s2, 2</code> $\\to$ <code>sub s3, t1, s2</code> thực hiện phép toán nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Z = X + 2 - Y * 4",
      "Z = 2 - Y * 2",
      "Z = X * 2 + Y / 2",
      "Z = X - Y * 4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• $t1 = X + 2$.<br>• <code>slli s2, s2, 2</code> dịch trái 2 bit $\\Rightarrow s2 = Y \\times 4$.<br>• <code>sub s3, t1, s2</code> $\\Rightarrow Z = X + 2 - Y \\times 4$.</p>"
  },
  {
    "id": "c3-3.36b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.36b",
    "source": "Đề GK 2018.2 (Mã đề 204 Câu 2)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 70,
    "printedPage": 69,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Biến $X, Y, Z$ nằm ở <code>s1, s2, s3</code>. Đoạn mã: <code>add t1, s1, s2</code> $\\to$ <code>srli t2, s2, 1</code> $\\to$ <code>add s3, t1, t2</code> thực hiện phép toán nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Z = X + Y + Y/2",
      "Z = X + Y * 2",
      "Z = X + Y/2",
      "Z = X/2 + Y"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• $t1 = X + Y$.<br>• <code>srli t2, s2, 1</code> dịch phải 1 bit $\\Rightarrow t2 = Y/2$.<br>• <code>add s3, t1, t2</code> $\\Rightarrow Z = X + Y + Y/2$.</p>"
  },
  {
    "id": "c3-3.37",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.37",
    "source": "Đề CK 2020.2, 2022.2, 2024.1, 2024.2 & Ôn tập 2025.2 Câu 68",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 71,
    "printedPage": 70,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đoạn lệnh hợp ngữ RISC-V dưới đây tương ứng với câu lệnh C nào (biết <code>s0, s1, s2, s3</code> tương ứng cho <code>f, g, h, i</code>)?",
    "codeBlock": "slli t0, s1, 2\nsub  s3, s0, s2\nadd  s3, s3, t0\naddi s3, s3, 5",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "i = f - h + 4 * g + 5",
      "i = f + h + 4 * g - 5",
      "i = f - h + 4 * g - 5",
      "i = f + h - 4 * g - 5"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• <code>t0 = 4 * g</code>; <code>s3 = f - h</code>.<br>• Cộng dồn: <code>s3 = f - h + 4 * g + 5</code>.</p>"
  },
  {
    "id": "c3-3.38",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.38",
    "source": "Đề GK 2021.1 (IT3030E, Problem 1)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 71,
    "printedPage": 70,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khi dịch câu lệnh C: <code>x = (4*x - y) &amp; (x + 5*z);</code> sang hợp ngữ RISC-V mà <strong>không dùng lệnh nhân <code>mul</code> hay lệnh giả</strong> (với <code>x, y, z</code> ở <code>s1, s2, s3</code>), cách tính <code>5*z</code> và kết quả chuẩn xác là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Dùng slli t1, s3, 2 rồi add t1, t1, s3 để tạo 5*z; tính vế trái t0 = (x<<2) - y rồi and s1, t0, t1",
      "Dùng slli t1, s3, 5 để tạo 5*z rồi cộng với s1",
      "Dùng ori t1, s3, 5 để tạo 5*z rồi cộng với s1",
      "Dùng slli t0, s1, 2 -> sub t0, t0, s2 rồi or s1, t0, s3"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Do không dùng lệnh <code>mul</code>, ta tách $4x = (x \\ll 2)$ và $5z = 4z + z = (z \\ll 2) + z$: <code>slli t1, s3, 2</code> $\\to$ <code>add t1, t1, s3</code> $\\to$ <code>add t1, s1, t1</code> $\\to$ <code>and s1, t0, t1</code>.</p>"
  },
  {
    "id": "c3-3.39a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.39a",
    "source": "Đề GK 2022.2 & GK 2025.2 (Đề 0012 Câu 107)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 72,
    "printedPage": 71,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập 1 lệnh RISC-V còn thiếu",
    "acceptedAnswers": [
      "slli t3, t2, 6"
    ],
    "question": "(Đề 0012 Câu 107): Cho <code>a</code> ở <code>s3</code> và <code>b</code> là thành phần còn lại trong tổng ban đầu. Giữa 2 lệnh <code>add t2, s3, s4</code> và <code>sub s3, t3, s4</code>, hãy điền 1 lệnh hợp ngữ còn thiếu để thực hiện biểu thức <code>a = (a + b) * 64 - a</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "slli t3, t2, 6",
      "slli t3, t2, 4",
      "slli t3, t2, 2",
      "slli t3, t2, 64"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Thanh ghi <code>t2</code> giữ tổng $(a + b)$. Để nhân với $64 = 2^6$ và gán vào thanh ghi <code>t3</code> (chuẩn bị cho lệnh <code>sub s3, t3, s4</code>), lệnh ở giữa phải là <strong><code>slli t3, t2, 6</code></strong>. (Tương tự nhân 16 dùng dịch 4, nhân 4 dùng dịch 2).</p>"
  },
  {
    "id": "c3-3.39b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.39b",
    "source": "Đề GK 2022.2 (Đề 0008 Câu 6)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 72,
    "printedPage": 71,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập 1 lệnh RISC-V thay thế",
    "acceptedAnswers": [
      "slli s0, t2, 4"
    ],
    "question": "Hãy thay thế chuỗi 3 lệnh liên tiếp: <code>add s0, t2, t2</code> $\\to$ <code>slli s0, s0, 1</code> $\\to$ <code>slli s0, s0, 2</code> bằng <strong>1 lệnh hợp ngữ duy nhất</strong>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "slli s0, t2, 4",
      "slli s0, t2, 3",
      "slli s0, t2, 8",
      "slli s0, t2, 16"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh 1 nhân $2$; lệnh 2 nhân $2$; lệnh 3 nhân $4$. Tổng cộng là nhân $2 \\times 2 \\times 4 = 16 = 2^4$, thay bằng 1 lệnh duy nhất: <strong><code>slli s0, t2, 4</code></strong>.</p>"
  },
  {
    "id": "c3-3.39c",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.39c",
    "source": "Đề GK 2022.2 (Đề 0007 Câu 6)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 72,
    "printedPage": 71,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đoạn lệnh RISC-V nào thực hiện chính xác biểu thức số học: <code>t0 = t1 + 8 * (t2 - 7)</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "addi t0, t2, -7 -> slli t0, t0, 3 -> add t0, t1, t0",
      "addi t0, t2, 7 -> slli t0, t0, 3 -> add t0, t1, t0",
      "add t0, t1, t2 -> addi t0, t0, -7 -> slli t0, t0, 3",
      "addi t0, t2, -7 -> slli t0, t0, 8 -> add t0, t1, t0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tính $(t2 - 7)$ bằng <code>addi t0, t2, -7</code>; nhân với $8 = 2^3$ bằng <code>slli t0, t0, 3</code>; cuối cùng cộng với <code>t1</code>.</p>"
  },
  {
    "id": "c3-3.40a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.40a",
    "source": "Đề GK 2024.1 (#f96f43)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 73,
    "printedPage": 72,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chọn đoạn lệnh RISC-V thực hiện câu lệnh C: <code>*a = b + c;</code> (giả sử <code>a</code> là con trỏ trong <code>a1</code>, còn <code>b, c</code> nằm trong <code>a2, a3</code>).",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "add t0, a2, a3 -> sw t0, 0(a1)",
      "lw t0, 0(a1) -> add t0, a2, a3",
      "add t0, a2, a3 -> lw t0, 0(a1)",
      "sw t0, 0(a1) -> add t0, a2, a3"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Toán tử <code>*a</code> ở vế trái nghĩa là lưu kết quả vào ô nhớ được trỏ bởi <code>a1</code>. Tính tổng <code>add t0, a2, a3</code> trước, rồi ghi ra bộ nhớ bằng <code>sw t0, 0(a1)</code>.</p>"
  },
  {
    "id": "c3-3.40b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.40b",
    "source": "Đề GK 2024.1 (#12416e) & Ôn tập 2025.2 Câu 32",
    "examTags": [
      "GK",
      "OT"
    ],
    "pdfPage": 73,
    "printedPage": 72,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chọn đoạn lệnh RISC-V thực hiện câu lệnh C: <code>a = b + *c;</code> (giả sử <code>a, b</code> trong <code>a1, a2</code>, còn <code>c</code> là con trỏ trong thanh ghi <code>a3</code>).",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lw t0, 0(a3) -> add a1, a2, t0",
      "li t0, 0(a3) -> add a1, a2, t0",
      "sw t0, 0(a3) -> add a1, a2, t0",
      "la t0, 0(a3) -> add a1, a2, t0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Toán tử <code>*c</code> ở vế phải nghĩa là đọc giá trị từ ô nhớ được trỏ bởi <code>a3</code>. Đọc bằng <code>lw t0, 0(a3)</code> trước rồi cộng vào <code>a1</code>.</p>"
  },
  {
    "id": "c3-3.41a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.41a",
    "source": "Đề CK 2022.2 & CK 2024.2 (#13504d)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 73,
    "printedPage": 72,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Biến <code>k</code> ở <code>s1</code>; <code>P, Q</code> là hai mảng số nguyên 32-bit có địa chỉ cơ sở ở <code>s6</code> và <code>s7</code>. Đoạn lệnh: <code>lw t0, 160(s7)</code> $\\to$ <code>add t0, s1, t0</code> $\\to$ <code>sw t0, 80(s6)</code> tương ứng với câu lệnh C nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "P[20] = k + Q[40]",
      "P[80] = k + Q[160]",
      "Q[40] = k + P[20]",
      "Q[160] = k + P[80]"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mỗi phần tử 32-bit chiếm $4$ byte: <code>160(s7)</code> tương ứng $Q[160 / 4] = Q[40]$; <code>80(s6)</code> tương ứng $P[80 / 4] = P[20]$. Vậy câu lệnh là <strong><code>P[20] = k + Q[40]</code></strong>.</p>"
  },
  {
    "id": "c3-3.41b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.41b",
    "source": "Đề GK 2024.1 (#d0125d)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 73,
    "printedPage": 72,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho <code>s1, s2</code> giữ địa chỉ cơ sở của mảng số nguyên 32-bit <code>A</code> và <code>B</code>. Đoạn lệnh: <code>lw t0, 24(s1)</code> $\\to$ <code>addi s0, t0, 1</code> $\\to$ <code>sw s0, 20(s2)</code> tương ứng với câu lệnh C nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "B[5] = A[6] + 1",
      "A[24] = B[20] + 1",
      "B[20] = A[24] + 1",
      "A[5] = B[6] + 1"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>24(s1)</code> là $A[24/4] = A[6]$; <code>20(s2)</code> là $B[20/4] = B[5]$. Vậy câu lệnh C là <strong><code>B[5] = A[6] + 1</code></strong>.</p>"
  },
  {
    "id": "c3-3.42a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.42a",
    "source": "Đề GK 2023.2 (Đề 1 Câu 5)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 74,
    "printedPage": 73,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với <code>f, g, h</code> ở <code>s0, s1, s2</code> và địa chỉ cơ sở mảng 32-bit <code>A</code> ở <code>s7</code>, đoạn lệnh nào dịch chính xác câu lệnh C: <code>f = g + h - A[20];</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lw t0, 80(s7) -> add t1, s1, s2 -> sub s0, t1, t0",
      "lw t0, 20(s7) -> add t1, s1, s2 -> sub s0, t1, t0",
      "lw t0, 80(s7) -> add t1, s1, s2 -> sub s0, t0, t1",
      "sw t0, 80(s7) -> add t1, s1, s2 -> sub s0, t1, t0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Phần tử <code>A[20]</code> có độ lệch $20 \\times 4 = 80$ byte nên đọc bằng <code>lw t0, 80(s7)</code>, sau đó tính <code>t1 = g + h</code> và gán <code>s0 = t1 - t0</code>.</p>"
  },
  {
    "id": "c3-3.42b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.42b",
    "source": "Đề GK 2023.2 (Đề 2 Câu 3)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 74,
    "printedPage": 73,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với <code>f, g, h, i, j</code> ở <code>s0..s4</code>, địa chỉ cơ sở mảng 32-bit <code>A</code> ở <code>s6</code>, đoạn lệnh: <code>add t0, s1, s0</code> $\\to$ <code>slli t1, s4, 2</code> $\\to$ <code>add t1, s6, t1</code> $\\to$ <code>sw t0, 0(t1)</code> tương ứng với câu lệnh C nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "A[j] = g + f;",
      "A[4*j] = g + f;",
      "B[i] = g + f;",
      "f = g + A[j];"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>t0 = g + f</code>; <code>slli t1, s4, 2</code> tính $4 \\times j$, cộng với <code>s6</code> ra địa chỉ của <code>A[j]</code> rồi ghi <code>t0</code> vào $\\Rightarrow$ <strong><code>A[j] = g + f;</code></strong>.</p>"
  },
  {
    "id": "c3-3.43a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.43a",
    "source": "Đề CK 2021.2 (Mã đề B2 Câu 2)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 74,
    "printedPage": 73,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Để thực hiện câu lệnh <code>x[2] = x[7] + a;</code> (biến <code>a</code> trong <code>s2</code>, mảng <code>x</code> 32-bit có địa chỉ cơ sở <code>0x00283A00</code>) mà <strong>không dùng lệnh giả</strong>, khởi tạo địa chỉ cơ sở vào <code>t0</code> và độ lệch đọc/ghi nào là ĐÚNG?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lui t0, 0x00284 -> addi t0, t0, -1536 -> lw t1, 28(t0) -> add t1, t1, s2 -> sw t1, 8(t0)",
      "lui t0, 0x00283 -> addi t0, t0, 0xA00 -> lw t1, 28(t0) -> add t1, t1, s2 -> sw t1, 8(t0)",
      "lui t0, 0x00284 -> addi t0, t0, -1536 -> lw t1, 7(t0) -> add t1, t1, s2 -> sw t1, 2(t0)",
      "lui t0, 0x00283 -> addi t0, t0, -1536 -> lw t1, 28(t0) -> add t1, t1, s2 -> sw t1, 8(t0)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vì 3 chữ số cuối là <code>0xA00</code> ($A \\ge 8$, bằng $2560 - 4096 = -1536$), phải tăng <code>0x00283</code> lên <code>0x00284</code>. Độ lệch <code>x[7]</code> là $7 \\times 4 = 28$ byte và <code>x[2]</code> là $2 \\times 4 = 8$ byte.</p>"
  },
  {
    "id": "c3-3.43b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.43b",
    "source": "Đề CK 2021.2 (Mã đề B3 Câu 2)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 75,
    "printedPage": 74,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Với mảng <code>x</code> 32-bit có địa chỉ cơ sở <code>0x00D28900</code>, đoạn mã RISC-V tối thiểu (không dùng lệnh giả) thực hiện <code>x[3] = x[9] + a;</code> (biến <code>a</code> trong <code>s2</code>) là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lui t0, 0x00D29 -> addi t0, t0, -1792 -> lw t1, 36(t0) -> add t1, t1, s2 -> sw t1, 12(t0)",
      "lui t0, 0x00D28 -> addi t0, t0, 0x900 -> lw t1, 36(t0) -> add t1, t1, s2 -> sw t1, 12(t0)",
      "lui t0, 0x00D29 -> addi t0, t0, -1792 -> lw t1, 9(t0) -> add t1, t1, s2 -> sw t1, 3(t0)",
      "lui t0, 0x00D29 -> addi t0, t0, -1536 -> lw t1, 36(t0) -> add t1, t1, s2 -> sw t1, 12(t0)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Chữ số thứ 3 từ phải sang là $9 \\ge 8$ ($0\\text{x}900 = 2304 - 4096 = -1792$), nên tăng <code>0x00D28</code> lên <code>0x00D29</code>. Độ lệch <code>x[9]</code> = 36 byte, <code>x[3]</code> = 12 byte.</p>"
  },
  {
    "id": "c3-3.44a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.44a",
    "source": "Đề GK 2019.2 (Mã đề 243 Câu 7)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 75,
    "printedPage": 74,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập địa chỉ Hexa của A[9]",
    "acceptedAnswers": [
      "0x20200514",
      "20200514"
    ],
    "question": "Cho mảng số nguyên 32-bit <code>A</code>. Nếu phần tử <code>A[6]</code> nằm ở địa chỉ <code>0x20200508</code>, hỏi phần tử <code>A[9]</code> nằm ở địa chỉ nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x20200514",
      "0x2020050B",
      "0x20200510",
      "0x20200518"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>A[9]</code> cách <code>A[6]</code> đúng $3$ phần tử $= 3 \\times 4 = 12$ byte $= \\text{0x0C}$. Vậy $A[9] = \\text{0x20200508} + \\text{0x0C} = \\mathbf{\\text{0x20200514}}$.</p>"
  },
  {
    "id": "c3-3.44b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.44b",
    "source": "Đề GK 2019.2 (Mã đề 243 Câu 8 & 244 Câu 16)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 75,
    "printedPage": 74,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên phần tử (vd: A[1])",
    "acceptedAnswers": [
      "A[1]"
    ],
    "question": "Mảng 32-bit <code>A</code> có địa chỉ cơ sở <code>0x20201234</code>. Chạy đoạn lệnh: <code>lui s0, 0x20201</code> $\\to$ <code>addi s0, s0, 0x230</code> $\\to$ <code>lw t0, 8(s0)</code>. Hỏi thanh ghi <code>t0</code> nhận phần tử nào của mảng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "A[1]",
      "A[2]",
      "A[0]",
      "A[8]"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Địa chỉ đọc thực tế là $\\text{0x20201230} + 8 = \\text{0x20201238}$. Trừ đi địa chỉ cơ sở <code>0x20201234</code> được $4$ byte $\\Rightarrow 4 \\div 4 = 1 \\rightarrow \\mathbf{A[1]}$.</p>"
  },
  {
    "id": "c3-3.44c",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.44c",
    "source": "Đề GK 2022.2 (Đề 0008 Câu 8)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 75,
    "printedPage": 74,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Mảng 32-bit <code>A</code> nằm ở địa chỉ cơ sở <code>0x1000CDC0</code>. Khi <code>s1 = 0x1000CDC4</code>, thực hiện lệnh <code>lw t1, 4(s1)</code>. Hỏi những byte địa chỉ nào được nạp vào <code>t1</code> và đó là phần tử nào của <code>A</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Các byte từ 0x1000CDC8 đến 0x1000CDCB, tương ứng phần tử A[2]",
      "Các byte từ 0x1000CDC4 đến 0x1000CDC7, tương ứng phần tử A[1]",
      "Các byte từ 0x1000CDC8 đến 0x1000CDCB, tương ứng phần tử A[4]",
      "Các byte từ 0x1000CDC0 đến 0x1000CDC3, tương ứng phần tử A[0]"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Địa chỉ đọc hiệu dụng là $\\text{0x1000CDC4} + 4 = \\text{0x1000CDC8}$ (nạp 4 byte từ <code>0x1000CDC8</code> đến <code>0x1000CDCB</code>). Độ lệch so với base <code>0x1000CDC0</code> là $8$ byte $\\Rightarrow 8 \\div 4 = 2 \\rightarrow \\mathbf{A[2]}$.</p>"
  },
  {
    "id": "c3-3.44d",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.44d",
    "source": "Đề GK 2024.1 (#3602ec) & CK 2025.1 (#da417b)",
    "examTags": [
      "GK",
      "CK"
    ],
    "pdfPage": 75,
    "printedPage": 74,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên phần tử (vd: A[4])",
    "acceptedAnswers": [
      "A[4]"
    ],
    "question": "Mảng <code>A[]</code> gồm các số nguyên 32-bit bắt đầu ở địa chỉ cơ sở <code>0x20230200</code>. Chạy: <code>lui s0, 0x20230</code> $\\to$ <code>addi s0, s0, 0x20C</code> $\\to$ <code>lw t0, 4(s0)</code>. Thanh ghi <code>t0</code> giữ phần tử nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "A[4]",
      "A[3]",
      "A[5]",
      "A[16]"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Địa chỉ đọc là $\\text{0x2023020C} + 4 = \\text{0x20230210}$. Hiệu so với <code>0x20230200</code> là $0\\text{x}10 = 16$ byte $\\Rightarrow 16 \\div 4 = 4 \\rightarrow \\mathbf{A[4]}$.</p>"
  },
  {
    "id": "c3-3.45a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.45a",
    "source": "Đề CK 2022.2 & CK 2024.2 (#0542f)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 76,
    "printedPage": 75,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Mảng <code>M[]</code> gồm 100 phần tử số nguyên 32-bit bắt đầu từ địa chỉ <code>0x10020400</code>. Đoạn lệnh hoán đổi <code>M[i]</code> và <code>M[j]</code> dùng <code>lw t0, 0(s6)</code> và <code>lw t1, 0(s7)</code>. Nếu <code>i = 9, j = 6</code>, giá trị Hexa của <code>s6, s7</code> là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "s6 = 0x10020424 và s7 = 0x10020418",
      "s6 = 0x10020409 và s7 = 0x10020406",
      "s6 = 0x10020436 và s7 = 0x10020424",
      "s6 = 0x10020428 và s7 = 0x1002041C"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• Với $i = 9$: độ lệch $= 9 \\times 4 = 36 = \\text{0x24} \\Rightarrow s6 = \\mathbf{\\text{0x10020424}}$.<br>• Với $j = 6$: độ lệch $= 6 \\times 4 = 24 = \\text{0x18} \\Rightarrow s7 = \\mathbf{\\text{0x10020418}}$.</p>"
  },
  {
    "id": "c3-3.45b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.45b",
    "source": "Đề CK 2022.2 & CK 2024.2 (#70e201)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 76,
    "printedPage": 75,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập địa chỉ Hexa của s6",
    "acceptedAnswers": [
      "0x10024030",
      "10024030"
    ],
    "question": "Mảng 2 chiều <code>M</code> kích thước $4 \\times 5$ (4 hàng, 5 cột) gồm các phần tử 32-bit, lưu trữ theo hàng bắt đầu tại địa chỉ <code>0x10024000</code>. Để lệnh <code>lw t0, 0(s6)</code> đọc phần tử <code>M[2, 2]</code> (chỉ số từ $0$), thanh ghi <code>s6</code> phải bằng bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x10024030",
      "0x10024048",
      "0x10024024",
      "0x10024028"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Số phần tử đứng trước $M[2, 2]$ (theo hàng 5 cột) là $2 \\times 5 + 2 = 12$ phần tử. Độ lệch byte $= 12 \\times 4 = 48 = \\text{0x30}$. Vậy $s6 = \\text{0x10024000} + \\text{0x30} = \\mathbf{\\text{0x10024030}}$.</p>"
  },
  {
    "id": "c3-3.46a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.46a",
    "source": "Đề CK 2021.2 (Mã đề B1 Câu 4.1)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 77,
    "printedPage": 76,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Mảng 2 chiều <code>B</code> kích thước $5 \\times 7$ (5 hàng, 7 cột, phần tử 32-bit), lưu theo hàng từ địa chỉ <code>0x000A5020</code>. Thanh ghi <code>R1</code> trỏ đầu hàng $i$, <code>R2</code> trỏ độ lệch cột $j$. Với chỉ số <strong>tính từ 1</strong> ($i=1..5, j=1..7$), khi trỏ vào <code>B[2, 5]</code> thì <code>R1, R2</code> bằng:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "R1 = 0x000A503C và R2 = 0x00000010",
      "R1 = 0x000A5058 và R2 = 0x00000014",
      "R1 = 0x000A503C và R2 = 0x00000014",
      "R1 = 0x000A504C và R2 = 0x00000010"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Kích thước 1 hàng là $7 \\times 4 = 28$ byte $= \\text{0x1C}$. Hàng thứ 2 (đếm từ 1) cách đầu mảng 1 hàng $\\Rightarrow R1 = \\text{0x000A5020} + \\text{0x1C} = \\mathbf{\\text{0x000A503C}}$. Cột 5 cách đầu hàng $5 - 1 = 4$ phần tử $= 16$ byte $= \\mathbf{\\text{0x00000010}}$.</p>"
  },
  {
    "id": "c3-3.46b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.46b",
    "source": "Ôn tập CK 2025.2 (P2, Câu 67)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 77,
    "printedPage": 76,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập địa chỉ Hexa của B[1,4]",
    "acceptedAnswers": [
      "0x000A504C",
      "000A504C",
      "0xA504C"
    ],
    "question": "Cùng mảng 2 chiều <code>B</code> kích thước $5 \\times 7$ (phần tử 32-bit, lưu theo hàng từ <code>0x000A5020</code>). Với chỉ số <strong>tính từ 0</strong> ($i=0..4, j=0..6$), cho biết địa chỉ chính xác của phần tử <code>B[1, 4]</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x000A504C",
      "0x000A503C",
      "0x000A5048",
      "0x000A5050"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Phần tử <code>B[1, 4]</code> (0-based) nằm sau $1 \\times 7 + 4 = 11$ phần tử. Độ lệch byte $= 11 \\times 4 = 44 = \\text{0x2C}$. Địa chỉ $= \\text{0x000A5020} + \\text{0x2C} = \\mathbf{\\text{0x000A504C}}$.</p>"
  },
  {
    "id": "c3-3.47a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.47a",
    "source": "Đề CK 2022.2 & CK 2024.2 (#bcfd00)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 77,
    "printedPage": 76,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho các biến <code>a, b, c</code> lần lượt trong <code>s0, s1, s2</code>. Đoạn hợp ngữ dưới đây tương ứng với câu lệnh C nào?",
    "codeBlock": "slt  t0, s2, s1\nbne  t0, zero, L1\nadd  s0, s0, s1\nj    L2\nL1: add s0, s0, s2\nL2:",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "if (b <= c) a = a + b; else a = a + c;",
      "if (b > c) a = a + b; else a = a + c;",
      "if (b < c) a = a + b; else a = a + c;",
      "if (b >= c) a = a + b; else a = a + c;"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>slt t0, s2, s1</code> kiểm tra $c < b$ (tức $b > c$). Nếu $b > c$ thì $t0 = 1 \\neq 0 \\Rightarrow$ nhảy tới <code>L1</code> tính $a = a + c$. Ngược lại ($b \\le c$), thực hiện nhánh bên trên $a = a + b$.</p>"
  },
  {
    "id": "c3-3.47b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.47b",
    "source": "Đề CK 2025.1 (#31d5bf) & Ôn tập 2025.2 Câu 46",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 78,
    "printedPage": 77,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho các biến <code>f, g, h, i, j</code> lần lượt nằm trong <code>s0, s1, s2, s3, s4</code>. Đoạn mã hợp ngữ bên dưới tương đương với đoạn mã C nào?",
    "codeBlock": "blt  s2, s1, L1\nbeq  s3, s4, L1\nadd  s0, s0, s1\njal  x0, L2\nL1: sub s0, s0, s1\nL2:",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "if ((h >= g) && (i != j)) f = f + g; else f = f - g;",
      "if ((g > h) && (i == j)) f = f + g; else f = f - g;",
      "if ((h >= g) && (i == j)) f = f + g; else f = f - g;",
      "if ((g > h) && (i != j)) f = f + g; else f = f - g;"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Để chạy vào nhánh <code>if</code> (<code>add s0, s0, s1</code> tức <code>f = f + g</code>), phải KHÔNG nhảy ở cả hai lệnh rẽ nhánh:<br>• Không nhảy <code>blt s2, s1, L1</code> ($h < g$) $\\Rightarrow h \\ge g$.<br>• Không nhảy <code>beq s3, s4, L1</code> ($i == j$) $\\Rightarrow i \\neq j$.<br>Vậy điều kiện là <strong><code>(h >= g) && (i != j)</code></strong>.</p>"
  },
  {
    "id": "c3-3.48a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.48a",
    "source": "Đề GK 2023.2 (Đề 2 Câu 5)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 78,
    "printedPage": 77,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Để dịch tối thiểu câu lệnh <code>if (i &lt;= j) f = f + g; else f = f + h;</code> (với <code>f, g, h, i, j</code> ở <code>s0..s4</code>) sang RISC-V mà không dùng lệnh giả, lệnh rẽ nhánh ngay ở dòng đầu nên là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "blt s4, s3, Else   # Nếu j < i (tức i > j) thì nhảy xuống Else",
      "ble s3, s4, Else   # Nhảy nếu i <= j",
      "bge s3, s4, Else   # Nếu i >= j thì nhảy xuống Else",
      "blt s3, s4, Else   # Nếu i < j thì nhảy xuống Else"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Để thực hiện thân <code>if</code> khi $i \\le j$, ta phải nhảy qua nó sang <code>Else</code> khi điều kiện bị sai, tức là $i > j \\iff j < i$. Lệnh chuẩn của RISC-V cho $j < i$ là <strong><code>blt s4, s3, Else</code></strong> (<code>ble</code> không phải lệnh chuẩn 1 bước cho $i > j$ khi viết sai chiều).</p>"
  },
  {
    "id": "c3-3.48d",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.48d",
    "source": "Đề CK 2021.2 (Mã đề B8 Câu 3)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 79,
    "printedPage": 78,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Dịch câu lệnh C: <code>if (a == 1) m[3] = b - a; else m[4] = b + a*2;</code> (với <code>a, b</code> ở <code>s0, s1</code>; mảng 32-bit <code>m</code> ở cơ sở <code>0x13090134</code>). Hai câu lệnh truy cập <code>m[3]</code> và <code>m[4]</code> (sau khi nạp base vào <code>t0</code>) phải dùng offset nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "sw t2, 12(t0) cho m[3] và sw t2, 16(t0) cho m[4]",
      "sw t2, 3(t0) cho m[3] và sw t2, 4(t0) cho m[4]",
      "lw t2, 12(t0) cho m[3] và lw t2, 16(t0) cho m[4]",
      "sw t2, 16(t0) cho m[3] và sw t2, 20(t0) cho m[4]"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Phần tử <code>m[3]</code> có độ lệch $3 \\times 4 = 12$ byte (<code>12(t0)</code>) và <code>m[4]</code> có độ lệch $4 \\times 4 = 16$ byte (<code>16(t0)</code>). Cả hai đều là gán giá trị vào mảng ở vế trái nên dùng lệnh ghi <code>sw</code>.</p>"
  },
  {
    "id": "c3-3.49",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.49",
    "source": "Đề GK 2021.1 (IT3030E, Problem 5)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 80,
    "printedPage": 79,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho câu lệnh C: <code>if (i &lt; j) f = A[2*i] + B[4*j];</code> (biến <code>f, i, j</code> ở <code>s0, s1, s2</code>; base mảng 32-bit <code>A, B</code> ở <code>s6, s7</code>). Phép tính độ lệch byte của <code>A[2*i]</code>, <code>B[4*j]</code> và lệnh rẽ nhánh thoát ở đầu lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "slli t0, s1, 3 (tức 8*i); slli t1, s2, 4 (tức 16*j); và bge s1, s2, Exit (mã máy 0x0124D063)",
      "slli t0, s1, 2 (tức 4*i); slli t1, s2, 2 (tức 4*j); và blt s1, s2, Exit",
      "slli t0, s1, 1 (tức 2*i); slli t1, s2, 2 (tức 4*j); và bne s1, s2, Exit",
      "slli t0, s1, 3; slli t1, s2, 4; và blt s1, s2, Exit"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mỗi phần tử rộng 4 byte nên <code>A[2*i]</code> lệch $4 \\times (2i) = 8i = (i \\ll 3)$ byte; <code>B[4*j]</code> lệch $4 \\times (4j) = 16j = (j \\ll 4)$ byte. Để thoát <code>if (i &lt; j)</code> khi sai ($i \\ge j$), dùng <code>bge s1, s2, Exit</code> (nhảy qua 8 lệnh $= +32$ byte $\\Rightarrow$ mã <code>0x0124D063</code>).</p>"
  },
  {
    "id": "c3-3.50a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.50a",
    "source": "Đề CK 2021.2 (Mã đề B1 Câu 3)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 80,
    "printedPage": 79,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Khi dịch vòng lặp <code>for (i = 0; i &lt; 50; i += 2) a = a + m[5];</code> (mảng 32-bit <code>m</code> có base <code>0x07E1100A</code>; <code>i, a</code> ở <code>s0, s1</code>) tối ưu nhất sang RISC-V, phát biểu nào đúng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Đọc sẵn lw t1, 20(t0) bên ngoài vòng lặp rồi trong vòng lặp kiểm tra bge s0, t2, Done và cộng addi s0, s0, 2",
      "Phải đặt lw t1, 20(t0) bên trong vòng lặp và tăng s0 thêm 8 mỗi vòng",
      "Phải dùng lui t0, 0x07E12 vì 0x00A >= 8",
      "Dùng beq s0, t2, Done và lw t1, 5(t0)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vì <code>m[5]</code> cố định nên ta nạp địa chỉ <code>0x07E1100A</code> (<code>lui 0x07E11</code> + <code>addi 0x00A</code>), đọc <code>lw t1, 20(t0)</code> trước khi vào vòng <code>Loop</code>, rồi trong <code>Loop</code> chỉ việc cộng <code>s1 += t1</code> và <code>i += 2</code>.</p>"
  },
  {
    "id": "c3-3.50c",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V",
    "exerciseCode": "Bài 3.50c-d",
    "source": "Đề CK 2021.2 (Mã đề B6 & B7 Câu 3)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 82,
    "printedPage": 81,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho vòng lặp <code>for (i = 0; i &lt; 100; i++) N[i] = N[i] * 16;</code> (mảng 32-bit <code>N</code> tại <code>0x100A4023</code>). Trong thân vòng lặp (khi dùng con trỏ <code>t0</code> trỏ tới <code>N[i]</code>), chuỗi lệnh thực thi chuẩn gồm:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lw t2, 0(t0) -> slli t2, t2, 4 -> sw t2, 0(t0) -> addi t0, t0, 4 -> addi s0, s0, 1",
      "lw t2, 0(t0) -> slli t2, t2, 16 -> sw t2, 0(t0) -> addi t0, t0, 1 -> addi s0, s0, 1",
      "lw t2, 0(t0) -> slli t2, t2, 3 -> sw t2, 0(t0) -> addi t0, t0, 4",
      "lw t2, 4(t0) -> slli t2, t2, 4 -> addi s0, s0, 1"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Nhân $16 = 2^4$ dùng <code>slli t2, t2, 4</code> (nếu Đề B7 nhân $8$ thì dùng <code>3</code>). Sau khi ghi lại vào <code>0(t0)</code>, tăng con trỏ <code>t0</code> thêm $4$ byte để sang <code>N[i+1]</code> và tăng <code>i++</code>.</p>"
  },
  {
    "id": "c3-3.51",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài 3.51",
    "source": "Đề CK 2020.2 (Trang 4) & CK 2021.1 (Trang 3)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 82,
    "printedPage": 81,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân của a0",
    "acceptedAnswers": [
      "56"
    ],
    "question": "Phân tích đoạn mã vòng lặp hợp ngữ RISC-V bên dưới và xác định giá trị thập phân tại thanh ghi kết quả <code>a0</code> sau khi thực thi xong:",
    "codeBlock": "addi a1, zero, 14\naddi s0, zero, 0\nadd  s1, zero, zero\nloop:\nslt  t0, a1, s1\nbne  t0, zero, finish\nadd  s0, s0, s1\naddi s1, s1, 2\nj    loop\nfinish:\nadd  a0, s0, zero",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "56",
      "14",
      "28",
      "54"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Khởi tạo $a1 = 14$, $s0 = 0$, $s1 = 0$. Lệnh <code>slt t0, a1, s1</code> thoát khi $14 < s1$. Nên <code>s1</code> cộng dồn các số chẵn từ $0$ đến $14$: $a0 = 0 + 2 + 4 + 6 + 8 + 10 + 12 + 14 = \\mathbf{56}$.</p>"
  },
  {
    "id": "c3-3.52",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài 3.52",
    "source": "Đề GK 2024.1 (#f4fd9f) & Ôn tập CK 2025.2 Câu 35",
    "examTags": [
      "GK",
      "OT"
    ],
    "pdfPage": 83,
    "printedPage": 82,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân của s5",
    "acceptedAnswers": [
      "25"
    ],
    "question": "Sau khi chạy chương trình hợp ngữ bên dưới với mảng <code>A = {1, 2, ..., 15}</code>, giá trị thập phân của thanh ghi <code>s5</code> là bao nhiêu?",
    "codeBlock": ".data\nA: .word 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15\n.text\nli s1, 0; li s3, 10; la s2, A; li s5, 0\nloop:\nadd t1, s1, s1\nadd t1, t1, t1\nadd t1, t1, s2\nlw  t0, 0(t1)\nadd s5, s5, t0\naddi s1, s1, 2\nbne s1, s3, loop",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "25",
      "16",
      "36",
      "55"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>t1 = 4 * s1 + s2</code> là địa chỉ của <code>A[s1]</code>. Biến <code>s1</code> bắt đầu từ $0$, mỗi vòng tăng $2$ và dừng khi $s1 = 10$, nên lặp với $s1 \\in \\{0, 2, 4, 6, 8\\}$. Tổng cộng dồn là: $A[0]+A[2]+A[4]+A[6]+A[8] = 1+3+5+7+9 = \\mathbf{25}$.</p>"
  },
  {
    "id": "c3-3.53",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài 3.53",
    "source": "Ôn tập CK 2025.2 (P1, Câu 33)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 84,
    "printedPage": 83,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị cuối của x15",
    "acceptedAnswers": [
      "5"
    ],
    "question": "Giả sử ban đầu <code>x14</code> chứa $4$ và <code>x15</code> chứa $0$. Sau khi thực thi đoạn mã bên dưới, giá trị cuối cùng của <code>x15</code> (thập phân) là bao nhiêu?",
    "codeBlock": "Loop:\naddi x15, x15, 1\naddi x14, x14, -1\nbge  x14, x0, Loop",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "5",
      "4",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>bge x14, x0, Loop</code> quay lại khi $x14 \\ge 0$:<br>• Lần 1: $x15=1, x14=3 \\ge 0$<br>• Lần 2: $x15=2, x14=2 \\ge 0$<br>• Lần 3: $x15=3, x14=1 \\ge 0$<br>• Lần 4: $x15=4, x14=0 \\ge 0$ (vẫn $\\ge 0$ nên lặp tiếp!)<br>• Lần 5: $x15=5, x14=-1 < 0$ (thoát). Vậy $x15 = \\mathbf{5}$.</p>"
  },
  {
    "id": "c3-3.54a1",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài 3.54a (2.1)",
    "source": "Đề CK 2021.2 (Mã đề B1 Câu 2.1)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 84,
    "printedPage": 83,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tổng số lệnh",
    "acceptedAnswers": [
      "501",
      "501 lệnh"
    ],
    "question": "(Mã đề B1): Khi thực hiện đoạn chương trình vòng lặp bên dưới, có tổng cộng bao nhiêu lệnh máy đã được thực hiện?",
    "codeBlock": "addi t1, zero, 100\nLOOP:\nlw   s1, 0(s0)\nadd  s2, s2, s1\naddi s0, s0, 4\naddi t1, t1, -1\nbne  t1, x0, LOOP",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "501 lệnh",
      "500 lệnh",
      "505 lệnh",
      "101 lệnh"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Có $1$ lệnh khởi tạo ở ngoài (<code>addi t1, zero, 100</code>) cộng với $100$ lần lặp, mỗi lần lặp thực hiện $5$ lệnh trong thân <code>LOOP</code> $\\Rightarrow 1 + 100 \\times 5 = \\mathbf{501\\text{ lệnh}}$.</p>"
  },
  {
    "id": "c3-3.54a2",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài 3.54a (2.2)",
    "source": "Đề CK 2021.2 (Mã đề B1 Câu 2.2)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 85,
    "printedPage": 84,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "(Mã đề B1): Với <code>t1</code> chứa <code>i</code>, <code>s2</code> chứa <code>a</code>, <code>s0</code> giữ địa chỉ cơ sở mảng 32-bit <code>A</code>, đoạn lệnh ở Bài 3.54a tương ứng với đoạn mã C nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "for (i = 0; i < 100; i++) a = a + A[i];",
      "for (i = 0; i <= 100; i++) a = a + A[i];",
      "for (i = 0; i < 400; i += 4) a = a + A[i];",
      "for (i = 0; i < 25; i++) a = a + A[i];"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Vòng lặp duyệt $100$ phần tử liên tiếp của mảng <code>A</code> (mỗi bước con trỏ tăng $4$ byte) và cộng dồn vào <code>a</code>: <code>for (i = 0; i &lt; 100; i++) a = a + A[i];</code> (hoặc <code>for (i = 100; i != 0; i--) { a = a + *A; A++; }</code>).</p>"
  },
  {
    "id": "c3-3.54b",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài 3.54b",
    "source": "Đề CK 2021.2 (Mã đề B5 Câu 2)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 85,
    "printedPage": 84,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "(Mã đề B5): Cho đoạn chương trình duyệt mảng B bên dưới (mỗi phần tử 4 byte). Hãy cho biết tổng số lệnh được thực hiện và ý nghĩa C tương ứng:",
    "codeBlock": "addi t1, s0, 600\nLOOP:\nlw   s1, 0(s0)\nadd  s2, s2, s1\nlw   s1, 4(s0)\nadd  s2, s2, s1\naddi s0, s0, 8\nbne  t1, s0, LOOP",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "451 lệnh (75 vòng x 6 lệnh + 1) và cộng 150 phần tử: for (i = 0; i < 150; i += 2) b = b + B[i] + B[i+1];",
      "450 lệnh (75 vòng x 6 lệnh) và cộng 75 phần tử",
      "901 lệnh (150 vòng x 6 lệnh + 1) và cộng 300 phần tử",
      "601 lệnh (100 vòng x 6 lệnh + 1) và cộng 600 phần tử"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mỗi vòng địa chỉ <code>s0</code> tăng thêm $8$ byte (2 phần tử 32-bit). Để đi hết $600$ byte cần $600 \\div 8 = 75$ vòng. Mỗi vòng có 6 lệnh + 1 lệnh khởi tạo $= 1 + 75 \\times 6 = \\mathbf{451\\text{ lệnh}}$, cộng tổng $75 \\times 2 = 150$ phần tử <code>B</code>.</p>"
  },
  {
    "id": "c3-3.55a",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài 3.55a",
    "source": "Đề CK 2021.2 (Mã đề B2 & B3 Câu 3)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 86,
    "printedPage": 85,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "(Mã đề B2/B3): Cho vòng lặp bên dưới. Nếu khởi tạo <code>t1 = 20, s2 = 0</code> thì giá trị cuối của <code>s2</code> là bao nhiêu, và với <code>t1 = N</code> ($N > 0$) tổng số lệnh thực hiện là:",
    "codeBlock": "LOOP: slt  t2, zero, t1\n      bne  t2, zero, ELSE\n      jal  x0, DONE\nELSE: addi s2, s2, 2\n      addi t1, t1, -1\n      jal  x0, LOOP\nDONE:",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "s2 = 40 và tổng số lệnh = 5N + 3",
      "s2 = 40 và tổng số lệnh = 5N",
      "s2 = 20 và tổng số lệnh = 5N + 3",
      "s2 = 42 và tổng số lệnh = 6N + 2"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• Mỗi vòng trong $N$ lần lặp ($0 < t1$) cộng thêm $2$ vào <code>s2</code> nên khi $t1 = 20 \\Rightarrow s2 = 40$ (với Đề B3 $t1 = 18 \\Rightarrow s2 = 36$).<br>• Trong $N$ lần lặp đầu thực hiện $5$ lệnh/lần (<code>slt, bne, addi s2, addi t1, jal</code>); đến khi $t1 = 0$ chạy thêm $3$ lệnh để thoát (<code>slt, bne, jal DONE</code>) $\\Rightarrow \\mathbf{5N + 3}$ lệnh.</p>"
  },
  {
    "id": "c3-3.55b",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài 3.55b",
    "source": "Đề CK 2021.2 (Mã đề B4 Câu 3)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 86,
    "printedPage": 85,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "(Mã đề B4): Cho 2 vòng lặp lồng nhau bên dưới. Nếu ban đầu <code>t1 = 18, s2 = 0</code> thì giá trị cuối của <code>s2</code> là bao nhiêu, và khi <code>t1 = N</code> ($N > 0$) tổng số lệnh thực hiện là:",
    "codeBlock": "LOOP:  addi t2, zero, 0xA\nLOOP2: addi s2, s2, 14\n       addi t2, t2, -1\n       bne  t2, x0, LOOP2\n       addi t1, t1, -1\n       bne  t1, x0, LOOP\nDONE:",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "s2 = 2520 và tổng số lệnh = 33N",
      "s2 = 2520 và tổng số lệnh = 32N + 1",
      "s2 = 252 và tổng số lệnh = 30N + 3",
      "s2 = 180 và tổng số lệnh = 33N"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• Vòng trong <code>LOOP2</code> lặp $0\\text{xA} = 10$ lần, mỗi lần cộng 14 $\\Rightarrow$ mỗi vòng ngoài tăng $10 \\times 14 = 140$. Với $t1 = 18 \\Rightarrow s2 = 18 \\times 140 = \\mathbf{2520}$.<br>• Mỗi vòng ngoài chạy: 1 lệnh (<code>addi t2</code>) + $10 \\times 3$ lệnh (<code>LOOP2</code>) + 2 lệnh cuối (<code>addi t1, bne</code>) = $33$ lệnh $\\Rightarrow \\mathbf{33N}$ lệnh.</p>"
  },
  {
    "id": "c3-3.56a",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài 3.56a",
    "source": "Đề CK 2021.2 (Mã đề B6 Câu 2)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 87,
    "printedPage": 86,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "(Mã đề B6): Với đoạn mã lặp bên dưới khi <code>K = 5, M = 3, L = 2</code>, hãy xác định tổng số lệnh thực hiện và giá trị cuối cùng của thanh ghi <code>s2</code>:",
    "codeBlock": "addi t1, zero, K\nadd  s2, x0, x0\nLOOP:\nslt  t2, x0, t1\nbeq  t2, x0, DONE\naddi s2, s2, M\nslli s2, s2, L\naddi t1, t1, -1\njal  x0, LOOP\nDONE:",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "34 lệnh và s2 = 4092",
      "32 lệnh và s2 = 1020",
      "34 lệnh và s2 = 1020",
      "30 lệnh và s2 = 4095"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• Tổng số lệnh $= 2\\text{ (khởi tạo)} + 5 \\times 6 + 2\\text{ (thoát)} = 6K + 4 = \\mathbf{34}$ lệnh.<br>• Quy luật: $s2_{\\text{mới}} = (s2_{\\text{cũ}} + 3) \\times 4$: Vòng 1: $12$; Vòng 2: $60$; Vòng 3: $252$; Vòng 4: $1020$; Vòng 5: $(1020+3) \\times 4 = \\mathbf{4092}$.</p>"
  },
  {
    "id": "c3-3.56b",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài 3.56b",
    "source": "Đề CK 2021.2 (Mã đề B7 Câu 2)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 87,
    "printedPage": 86,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị của s2",
    "acceptedAnswers": [
      "254"
    ],
    "question": "(Mã đề B7): Dùng cùng đoạn mã vòng lặp ở Bài 3.56 với <code>K = 7, M = 1, L = 1</code>, giá trị cuối của thanh ghi <code>s2</code> và tổng số lệnh lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "s2 = 254 và 46 lệnh",
      "s2 = 126 và 46 lệnh",
      "s2 = 256 và 44 lệnh",
      "s2 = 254 và 42 lệnh"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• Tổng số lệnh $= 6 \\times 7 + 4 = \\mathbf{46}$ lệnh.<br>• $s2_{\\text{mới}} = (s2_{\\text{cũ}} + 1) \\times 2$: qua 7 vòng lần lượt là $2 \\to 6 \\to 14 \\to 30 \\to 62 \\to 126 \\to \\mathbf{254}$ ($= 2^8 - 2$).</p>"
  },
  {
    "id": "c3-3.57",
    "chapter": 3,
    "groupId": "3.2.7",
    "groupTitle": "Nhóm 7: Chương trình con (Thủ tục), Ngăn xếp (Stack) và Lệnh jal / jalr",
    "exerciseCode": "Bài 3.57",
    "source": "Đề GK 2024.1 (#5ebf59) & Ôn tập CK 2025.2 Câu 50",
    "examTags": [
      "GK",
      "OT"
    ],
    "pdfPage": 88,
    "printedPage": 87,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Những lệnh nào lưu địa chỉ của <code>PC + 4</code> vào một thanh ghi trước khi thực hiện nhảy trong RISC-V?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "jal và jalr",
      "Chỉ lệnh jal",
      "beq và j",
      "j và jr"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Hai lệnh nhảy và liên kết (Jump and Link) trong RISC-V thực hiện lưu địa chỉ trở về $PC + 4$ vào thanh ghi đích (<code>rd</code>) trước khi nhảy là <strong><code>jal</code></strong> và <strong><code>jalr</code></strong>.</p>"
  },
  {
    "id": "c3-3.58",
    "chapter": 3,
    "groupId": "3.2.7",
    "groupTitle": "Nhóm 7: Chương trình con (Thủ tục), Ngăn xếp (Stack) và Lệnh jal / jalr",
    "exerciseCode": "Bài 3.58",
    "source": "Đề CK 2022.2, 2024.1, 2024.2 & Ôn tập 2025.2 Câu 31",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 88,
    "printedPage": 87,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho đoạn lệnh cất 2 thanh ghi ra ngăn xếp: <code>addi sp, sp, -8</code> $\\to$ <code>sw s3, 4(sp)</code> $\\to$ <code>sw s2, 0(sp)</code>. Đoạn lệnh nào phù hợp để <strong>khôi phục</strong> lại nội dung <code>s2, s3</code> và <code>sp</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lw s2, 0(sp) -> lw s3, 4(sp) -> addi sp, sp, 8",
      "addi sp, sp, 8 -> lw s3, 4(sp) -> lw s2, 0(sp)",
      "lw s2, 4(sp) -> lw s3, 0(sp) -> addi sp, sp, 8",
      "addi sp, sp, 8 -> lw s3, 0(sp) -> lw s2, 4(sp)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lúc cất: <code>s2</code> nằm tại <code>0(sp)</code> và <code>s3</code> nằm tại <code>4(sp)</code>. Khi khôi phục, bắt buộc phải đọc (<code>lw</code>) <code>s2</code> từ <code>0(sp)</code> và <code>s3</code> từ <code>4(sp)</code> trước, sau đó mới cộng trả lại $8$ byte cho <code>sp</code> (<code>addi sp, sp, 8</code>).</p>"
  },
  {
    "id": "c3-3.59",
    "chapter": 3,
    "groupId": "3.2.7",
    "groupTitle": "Nhóm 7: Chương trình con (Thủ tục), Ngăn xếp (Stack) và Lệnh jal / jalr",
    "exerciseCode": "Bài 3.59",
    "source": "Đề CK 2022.2, 2024.1, 2024.2 & Ôn tập 2025.2 Câu 65",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 89,
    "printedPage": 88,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho đoạn mã địa chỉ bên dưới. Hãy xác định nội dung các thanh ghi <code>PC, ra</code> ngay sau khi thực hiện <code>jal ra, XYZ</code>, và nội dung <code>PC</code> ngay sau khi thực hiện <code>ret</code>:",
    "codeBlock": "0x00402034  jal  ra, XYZ\n0x00402038  ...\n0x00402060  XYZ: addi sp, sp, -8\n            ...\n0x00402090  ret  # jalr x0, 0(ra)",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "Sau jal: PC = 0x00402060, ra = 0x00402038; sau ret: PC = 0x00402038",
      "Sau jal: PC = 0x00402038, ra = 0x00402060; sau ret: PC = 0x00402090",
      "Sau jal: PC = 0x00402060, ra = 0x00402034; sau ret: PC = 0x00402034",
      "Sau jal: PC = 0x00402090, ra = 0x00402038; sau ret: PC = 0x00402060"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>• Ngay sau <code>jal ra, XYZ</code> tại <code>0x00402034</code>: <code>PC</code> nhảy tới <code>XYZ</code> (<code>0x00402060</code>) và <code>ra (x1)</code> lưu lệnh kế tiếp (<code>0x00402038</code>).<br>• Khi gặp <code>ret</code> (<code>jalr x0, 0(ra)</code>), giá trị trong <code>ra</code> được nạp trả lại cho <code>PC = 0x00402038</code>.</p>"
  },
  {
    "id": "c3-3.60a",
    "chapter": 3,
    "groupId": "3.2.7",
    "groupTitle": "Nhóm 7: Chương trình con (Thủ tục), Ngăn xếp (Stack) và Lệnh jal / jalr",
    "exerciseCode": "Bài 3.60a",
    "source": "Đề CK 2022.2, 2024.1 & CK 2024.2 (#526d03)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 89,
    "printedPage": 88,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho chương trình con <code>count</code> bên dưới. Khi lệnh <code>beq t0, zero, L2</code> thực thi với <code>t0 = 0</code> (nhánh nhảy đến <code>L2</code>), nếu lệnh <code>count</code> bắt đầu tại <code>0x00400100</code> thì sau lệnh <code>beq</code> thanh ghi <code>PC</code> bằng bao nhiêu? (Nếu đề cắt dòng <code>beq</code> làm đầu tại <code>0x00400100</code> thì bằng bao nhiêu?)",
    "codeBlock": "count: addi s0, zero, 0\nL1:    beq  a0, zero, done\n       andi t0, a0, 1\n       beq  t0, zero, L2\n       addi s0, s0, 1\nL2:    srli a0, a0, 1\n       j    L1\ndone:  add  a0, s0, zero\n       ret",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "0x00400114 (nếu count ở 0x00400100) hoặc 0x00400108 (nếu beq ở 0x00400100)",
      "0x00400110 (nếu count ở 0x00400100) hoặc 0x00400104 (nếu beq ở 0x00400100)",
      "0x00400118 (nếu count ở 0x00400100) hoặc 0x0040010C (nếu beq ở 0x00400100)",
      "0x0040010C (nếu count ở 0x00400100) hoặc 0x00400100 (nếu beq ở 0x00400100)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Khi <code>t0 = 0</code>, lệnh <code>beq t0, zero, L2</code> bỏ qua 1 lệnh <code>addi s0, s0, 1</code>, tức nhảy tới vị trí $+8$ byte so với chính lệnh <code>beq</code>.<br>• Nếu <code>count</code> ở <code>0x00400100</code>: <code>beq</code> là lệnh thứ 4 (<code>0x0040010C</code>) $\\Rightarrow L2 = \\mathbf{\\text{0x00400114}}$.<br>• Nếu đề cắt từ dòng <code>beq</code> tại <code>0x00400100</code> $\\Rightarrow L2 = \\mathbf{\\text{0x00400108}}$.</p>"
  },
  {
    "id": "c3-3.60b",
    "chapter": 3,
    "groupId": "3.2.7",
    "groupTitle": "Nhóm 7: Chương trình con (Thủ tục), Ngăn xếp (Stack) và Lệnh jal / jalr",
    "exerciseCode": "Bài 3.60b",
    "source": "Đề CK 2022.2, 2024.1 & 2024.2 (#115355)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 90,
    "printedPage": 89,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân trả về",
    "acceptedAnswers": [
      "18"
    ],
    "question": "Giả thiết trước khi gọi chương trình con <code>count</code> ở Bài 3.60, thanh ghi <code>a0 = 0x5678ABCD</code>. Kết quả trả về tại <code>a0</code> sau khi hàm thực hiện xong (viết theo số thập phân) là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "18",
      "16",
      "14",
      "20"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Thuật toán dịch phải từng bit của <code>a0</code> và đếm số lượng bit 1 có trong biểu diễn nhị phân:<br>• <code>5</code>(2) + <code>6</code>(2) + <code>7</code>(3) + <code>8</code>(1) + <code>A</code>(2) + <code>B</code>(3) + <code>C</code>(2) + <code>D</code>(3) = <strong>$18$</strong> bit 1.</p>"
  },
  {
    "id": "c3-3.61a",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.61a",
    "source": "Ôn tập CK 2025.2 (P1, Câu 65)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 91,
    "printedPage": 90,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã máy Hexa (vd: 0x406382B3)",
    "acceptedAnswers": [
      "0x406382B3",
      "406382B3"
    ],
    "question": "Dịch câu lệnh kiểu R: <code>sub t0, t2, t1</code> sang mã máy RISC-V 32-bit biểu diễn ở hệ Hexa (8 chữ số có <code>0x</code> ở đầu).",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x406382B3",
      "0x006382B3",
      "0x407302B3",
      "0x406302B3"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>rd=t0(5=00101)</code>, <code>rs1=t2(7=00111)</code>, <code>rs2=t1(6=00110)</code>, <code>funct7=0100000</code>, <code>funct3=000</code>, <code>op=0110011</code>.<br>Ghép: <code>0100000_00110_00111_000_00101_0110011</code> = <strong><code>0x406382B3</code></strong>.</p>"
  },
  {
    "id": "c3-3.61b",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.61b",
    "source": "Ôn tập CK 2025.2 (P1, Câu 19)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 91,
    "printedPage": 90,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã máy Hexa",
    "acceptedAnswers": [
      "0xFF248913",
      "FF248913"
    ],
    "question": "Dịch câu lệnh kiểu I: <code>addi s2, s1, -14</code> sang mã máy RISC-V 32-bit dạng Hexa.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xFF248913",
      "0xFF248933",
      "0x00E48913",
      "0xFF290493"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>imm = -14</code> (12 bit) = <code>0xFF2 = 1111_1111_0010</code>; <code>rs1=s1(9=01001)</code>; <code>funct3=000</code>; <code>rd=s2(18=10010)</code>; <code>op=0010011</code>.<br>Ghép: <code>111111110010_01001_000_10010_0010011</code> = <strong><code>0xFF248913</code></strong>.</p>"
  },
  {
    "id": "c3-3.61c",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.61c",
    "source": "Ôn tập CK 2025.2 (P1, Câu 78)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 91,
    "printedPage": 90,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã máy Hexa",
    "acceptedAnswers": [
      "0xFF249F03",
      "FF249F03"
    ],
    "question": "Dịch câu lệnh đọc bộ nhớ kiểu I: <code>lh t5, -14(s1)</code> sang mã máy RISC-V 32-bit dạng Hexa.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xFF249F03",
      "0xFF248F03",
      "0xFF391303",
      "0xFF249F13"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>imm = -14 = 111111110010</code>; <code>rs1=s1(9=01001)</code>; <code>funct3=001</code> (lh); <code>rd=t5(30=11110)</code>; <code>op=0000011</code>.<br>Ghép lại thu được <strong><code>0xFF249F03</code></strong>. (Biến thể <code>lh t1, -13(s2)</code> là <code>0xFF391303</code>).</p>"
  },
  {
    "id": "c3-3.61d",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.61d",
    "source": "Ôn tập CK 2025.2 (P1, Câu 22)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 91,
    "printedPage": 90,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã máy Hexa",
    "acceptedAnswers": [
      "0xFFBA2823",
      "FFBA2823"
    ],
    "question": "Dịch câu lệnh ghi bộ nhớ kiểu S: <code>sw s11, -16(s4)</code> sang mã máy RISC-V 32-bit dạng Hexa.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xFFBA2823",
      "0xFFB92823",
      "0xFF0A2D23",
      "0xFFBA2803"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>imm = -16 = 1111111_10000</code> (<code>imm[11:5]=1111111</code>, <code>imm[4:0]=10000</code>); <code>rs2=s11(27=11011)</code>; <code>rs1=s4(20=10100)</code>; <code>funct3=010</code>; <code>op=0100011</code>.<br>Ghép: <code>1111111_11011_10100_010_10000_0100011</code> = <strong><code>0xFFBA2823</code></strong>.</p>"
  },
  {
    "id": "c3-3.61e",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.61e",
    "source": "Ôn tập CK 2025.2 (P1, Câu 11)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 91,
    "printedPage": 90,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã máy Hexa",
    "acceptedAnswers": [
      "0x01E40863",
      "01E40863"
    ],
    "question": "Dịch câu lệnh kiểu B: <code>beq s0, t5, L1</code> sang mã máy Hexa, biết địa chỉ lệnh là <code>0x00401050</code> và địa chỉ <code>L1</code> là <code>0x00401060</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x01E40863",
      "0x01E40463",
      "0x008F0863",
      "0x01E41863"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Offset $= \\text{0x00401060} - \\text{0x00401050} = +16 = 0\\_0\\_000000\\_1000\\_0_2$. Với <code>rs1=s0(8=01000)</code>, <code>rs2=t5(30=11110)</code>, <code>funct3=000</code>, <code>op=1100011</code>.<br>Ghép B-type: <code>0_000000_11110_01000_000_1000_0_1100011</code> = <strong><code>0x01E40863</code></strong>.</p>"
  },
  {
    "id": "c3-3.61f",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.61f",
    "source": "Ôn tập CK 2025.2 (P1, Câu 14)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 91,
    "printedPage": 90,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã máy Hexa",
    "acceptedAnswers": [
      "0xFE8292E3",
      "FE8292E3"
    ],
    "question": "Dịch câu lệnh kiểu B rẽ nhánh ngược: <code>bne t0, s0, L2</code> sang mã máy Hexa, biết địa chỉ lệnh là <code>0x0040008C</code> và địa chỉ <code>L2</code> là <code>0x00400070</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xFE8292E3",
      "0xFE8282E3",
      "0xFE5412E3",
      "0xFC8292E3"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Offset $= \\text{0x00400070} - \\text{0x0040008C} = -\\text{0x1C} = -28 = 1\\_1\\_111111\\_0010\\_0_2$. Với <code>rs1=t0(5=00101)</code>, <code>rs2=s0(8=01000)</code>, <code>funct3=001</code>, <code>op=1100011</code>.<br>Ghép B-type: <code>1_111111_01000_00101_001_0010_1_1100011</code> = <strong><code>0xFE8292E3</code></strong>.</p>"
  },
  {
    "id": "c3-3.61g",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.61g",
    "source": "Ôn tập CK 2025.2 (P1, Câu 5)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 91,
    "printedPage": 90,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập mã máy Hexa",
    "acceptedAnswers": [
      "0xFC9FF06F",
      "FC9FF06F"
    ],
    "question": "Dịch câu lệnh kiểu J: <code>jal x0, L1</code> sang mã máy Hexa, biết địa chỉ lệnh là <code>0x004030AC</code> và địa chỉ <code>L1</code> là <code>0x00403074</code>.",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0xFC9FF06F",
      "0xFC9FF0EF",
      "0xFE4FF06F",
      "0xFC8FF06F"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Offset $= \\text{0x00403074} - \\text{0x004030AC} = -\\text{0x38} = -56 = 1\\_11111111\\_1\\_1111100100\\_0_2$. Với <code>rd=x0(00000)</code>, <code>op=1101111</code>.<br>Ghép J-type (<code>imm[20|10:1|11|19:12]</code>): <code>1_1111100100_1_11111111_00000_1101111</code> = <strong><code>0xFC9FF06F</code></strong>.</p>"
  },
  {
    "id": "c3-3.62",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.62",
    "source": "Đề CK 2024.1 (#b9e098) & Ôn tập CK 2025.2 Câu 8",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 92,
    "printedPage": 91,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho lệnh máy RISC-V biểu diễn theo số Hexa: <code>0x012B2423</code>. Hãy chỉ ra lệnh hợp ngữ tương ứng:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "sw s2, 8(s6)",
      "add t0, s4, s5",
      "lw t2, 4(s6)",
      "addi t0, s3, -4"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>7 bit cuối (<code>0x23</code>) = <code>0100011</code> (S-type Store). Tách 32 bit: <code>imm[11:5]=0</code>, <code>rs2=10010(18=s2)</code>, <code>rs1=10110(22=s6)</code>, <code>funct3=010(sw)</code>, <code>imm[4:0]=01000(8)</code> $\\Rightarrow$ <strong><code>sw s2, 8(s6)</code></strong>.</p>"
  },
  {
    "id": "c3-3.63",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.63",
    "source": "Đề CK 2022.2 & CK 2024.2 (#b7c77a)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 93,
    "printedPage": 92,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho lệnh máy RISC-V được biểu diễn theo số Hexa: <code>0xFFC98293</code>. Hãy chỉ ra lệnh hợp ngữ tương ứng:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "addi t0, s3, -4",
      "lw t2, 4(s6)",
      "add t0, s4, s5",
      "sw s2, 8(s6)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>op=0x13(I-type)</code>, <code>funct3=000(addi)</code>, <code>imm = 0xFFC = -4</code>, <code>rs1 = 10011(19=s3)</code>, <code>rd = 00101(5=t0)</code> $\\Rightarrow$ <strong><code>addi t0, s3, -4</code></strong>.</p>"
  },
  {
    "id": "c3-3.64",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.64",
    "source": "Đề CK 2024.1 (#3ad10f) & Ôn tập CK 2025.2 Câu 62",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 93,
    "printedPage": 92,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập địa chỉ đích Hexa",
    "acceptedAnswers": [
      "0x00404034",
      "00404034"
    ],
    "question": "Giả thiết lệnh <code>bge s0, s1, L1</code> của RISC-V có mã máy là <code>0x02945063</code>, được đặt tại word nhớ có địa chỉ <code>0x00404014</code>. Hãy chỉ ra địa chỉ đích (BTA) của lệnh đó nếu điều kiện thỏa mãn?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x00404034",
      "0x00404030",
      "0x0040401F",
      "0x00404018"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tách B-type của <code>0x02945063</code>: <code>imm[12]=0, imm[10:5]=000001, imm[4:1]=0000, imm[11]=0</code> $\\Rightarrow \\text{imm} = 0\\_0\\_000001\\_0000\\_0_2 = 0\\text{x}20 = 32$.<br>$\\text{BTA} = \\text{0x00404014} + \\text{0x20} = \\mathbf{\\text{0x00404034}}$.</p>"
  },
  {
    "id": "c3-3.65a",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.65a",
    "source": "Đề CK 2020.2 (Trang 4)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 94,
    "printedPage": 93,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Lệnh <code>beq t3, s4, L1</code> trong RISC-V đặt tại địa chỉ <code>0x00401000</code>, nhãn đích <code>L1</code> nằm tại <code>0x0040104C</code>. Giá trị độ lệch byte (offset) và giá trị trường 12-bit <code>imm[12:1]</code> mã hóa trong lệnh lần lượt là:",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Offset = 76 byte (0x4C) và imm[12:1] = 38 (0x26)",
      "Offset = 72 byte (0x48) và imm[12:1] = 18 (0x12)",
      "Offset = 76 byte (0x4C) và imm[12:1] = 19 (0x13)",
      "Offset = 76 byte (0x4C) và imm[12:1] = 76"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Độ lệch byte $= \\text{0x0040104C} - \\text{0x00401000} = 0\\text{x}4\\text{C} = 76$ byte. Vì trường 12-bit <code>imm[12:1]</code> trong lệnh máy B-type bỏ qua bit 0 (tức chia $2$) nên có giá trị $76 \\div 2 = \\mathbf{38}$ ($0\\text{x}26$).</p>"
  },
  {
    "id": "c3-3.65b",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.65b",
    "source": "Đề GK 2024.1 (#a2a36c) & Ôn tập 2025.2 Câu 47",
    "examTags": [
      "GK",
      "OT"
    ],
    "pdfPage": 94,
    "printedPage": 93,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị thập phân",
    "acceptedAnswers": [
      "6"
    ],
    "question": "Cho chương trình bắt đầu từ <code>0x00400000</code>:<br>(1) <code>addi s0, zero, 100</code>; (2) <code>slti t0, s0, -100</code>; (3) <code>beq t0, zero, else</code>; (4) <code>addi t2, t2, 1</code>; (5) <code>j endif</code>; (6) <code>else: addi t2, t2, -1</code>.<br>Giá trị thập phân của trường 12-bit immediate (<code>imm[12:1]</code>) trong lệnh <code>beq</code> là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "6",
      "12",
      "3",
      "8"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh (3) <code>beq</code> ở <code>0x00400008</code>, nhãn <code>else</code> ở lệnh (6) tại <code>0x00400014</code>. Độ lệch byte $= \\text{0x14} - \\text{0x08} = 12$ byte. Trường <code>imm[12:1]</code> lưu trong mã máy bằng $12 \\div 2 = \\mathbf{6}$.</p>"
  },
  {
    "id": "c3-3.65c",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.65c",
    "source": "Ôn tập CK 2025.2 (Câu 57)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 94,
    "printedPage": 93,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập địa chỉ Hexa (vd: 0x1FF4)",
    "acceptedAnswers": [
      "0x1FF4",
      "1FF4"
    ],
    "question": "Giả sử PC hiện tại (địa chỉ lệnh <code>beq</code>) là <code>0x2000</code>. Với lệnh <code>beq x1, x2, -12</code>, nếu <code>x1 == x2</code> thì địa chỉ lệnh tiếp theo (Target PC) là bao nhiêu?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x1FF4",
      "0x1FF8",
      "0x1FE8",
      "0x200C"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>$\\text{Target PC} = \\text{0x2000} - 12 = \\text{0x2000} - \\text{0x0C} = \\mathbf{\\text{0x1FF4}}$.</p>"
  },
  {
    "id": "c3-3.66a",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.66a",
    "source": "Đề CK 2023.1 (#e08504)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 95,
    "printedPage": 94,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Lệnh mã máy <code>0x00628863</code> (<code>bne t0, t1, 16</code>) thuộc định dạng nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Định dạng B (B-format)",
      "Định dạng R (R-format)",
      "Định dạng I (I-format)",
      "Định dạng J (J-format)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>bne</code> có 7 bit opcode <code>0x63 = 1100011</code> thuộc <strong>định dạng B (B-format)</strong>.</p>"
  },
  {
    "id": "c3-3.66b",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.66b",
    "source": "Đề CK 2023.1 (#5a6d48)",
    "examTags": [
      "CK"
    ],
    "pdfPage": 95,
    "printedPage": 94,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Lệnh mã máy <code>0x00008067</code> (<code>jalr zero, ra, 0</code>) có toán hạng đích lưu tại thanh ghi nào?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Thanh ghi zero (x0)",
      "Thanh ghi ra (x1)",
      "Thanh ghi sp (x2)",
      "Thanh ghi t0 (x5)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Trong <code>jalr zero, ra, 0</code>, trường <code>rd</code> là thanh ghi <strong><code>zero (x0)</code></strong> (hủy bỏ địa chỉ trở về khi thực hiện lệnh quay về <code>ret</code>).</p>"
  },
  {
    "id": "c3-3.66c",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.66c",
    "source": "Ôn tập CK 2025.2 (P2, Câu 16)",
    "examTags": [
      "OT"
    ],
    "pdfPage": 95,
    "printedPage": 94,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho mã máy 32-bit dạng nhị phân: <code>0000000 00111 00000 000 11111 0110011</code>. Toán hạng đích (<code>rd</code>) của lệnh này là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "x31 (thanh ghi t6)",
      "x0 (thanh ghi zero)",
      "x7 (thanh ghi t2)",
      "x30 (thanh ghi t5)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>5 bit trường <code>rd</code> (đứng ngay trước 7 bit opcode <code>0110011</code>) là $11111_2 = 31 \\Rightarrow$ Thanh ghi <strong><code>x31</code> (<code>t6</code>)</strong>.</p>"
  },
  {
    "id": "c3-3.66d",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.66d",
    "source": "Đề GK 2024.1 (#1c2f2d) & CK 2025.1 (#794d71)",
    "examTags": [
      "GK",
      "CK"
    ],
    "pdfPage": 95,
    "printedPage": 94,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Tìm toán hạng đích (<code>rd</code>) của hai lệnh R-format có mã máy: (1) <code>0x007302b3</code> và (2) <code>0x01c303b3</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "(1) là t0 (x5) và (2) là t2 (x7)",
      "(1) là t2 (x7) và (2) là t0 (x5)",
      "(1) là t1 (x6) và (2) là s0 (x8)",
      "(1) là a0 (x10) và (2) là a1 (x11)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đổi 3 chữ Hexa cuối sang 12 bit (5 bit <code>rd</code> + 7 bit opcode):<br>• <code>2b3</code> = <code>00101_0110011</code> $\\Rightarrow rd = 5 = \\mathbf{t0\\text{ (x5)}}$.<br>• <code>3b3</code> = <code>00111_0110011</code> $\\Rightarrow rd = 7 = \\mathbf{t2\\text{ (x7)}}$.</p>"
  },
  {
    "id": "c3-3.66e",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.66e",
    "source": "Đề GK 2024.1 (#65dce1) & CK 2025.1 (#0c9d)",
    "examTags": [
      "GK",
      "CK"
    ],
    "pdfPage": 95,
    "printedPage": 94,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Tìm các thanh ghi nguồn (<code>rs1, rs2</code>) của hai lệnh <code>beq</code> có mã máy: (1) <code>0x01ee8463</code> và (2) <code>0x01de0463</code>?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "(1) là x29, x30 và (2) là x28, x29",
      "(1) là x30, x29 và (2) là x29, x28",
      "(1) là x14, x15 và (2) là x13, x14",
      "(1) là x8, x29 và (2) là x8, x28"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Bit <code>[24:20]</code> là <code>rs2</code>, bit <code>[19:15]</code> là <code>rs1</code>:<br>• <code>0x01ee8...</code> = <code>0000000_11110(30)_11101(29)_000</code> $\\Rightarrow$ nguồn <code>rs1=x29, rs2=x30</code>.<br>• <code>0x01de0...</code> = <code>0000000_11101(29)_11100(28)_000</code> $\\Rightarrow$ nguồn <code>rs1=x28, rs2=x29</code>.</p>"
  },
  {
    "id": "c3-3.67",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.67",
    "source": "Đề CK 2025.1 (#15fd1c) & Ôn tập CK 2025.2 Câu 48",
    "examTags": [
      "CK",
      "OT"
    ],
    "pdfPage": 96,
    "printedPage": 95,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa của PC",
    "acceptedAnswers": [
      "0x00400010",
      "00400010",
      "0x400010"
    ],
    "question": "Với chương trình hợp ngữ bên dưới đặt từ địa chỉ <code>0x00400000</code>, giá trị hệ 16 của thanh ghi <code>PC</code> <strong>ngay sau khi thực hiện lệnh <code>beq</code></strong> (tại <code>0x0040000C</code>) là bao nhiêu?",
    "codeBlock": "lui  s0, 0xFFFF0     # 0x00400000\naddi s0, zero, 0     # 0x00400004\nslti t1, s0, 100     # 0x00400008\nbeq  t1, zero, else  # 0x0040000C\naddi t2, zero, 1     # 0x00400010\naddi t3, zero, 20    # 0x00400014\nj    endif           # 0x00400018\nelse:\naddi t2, zero, -1    # 0x0040001C",
    "codeLang": "riscv",
    "svgDiagram": null,
    "options": [
      "0x00400010",
      "0x0040001C",
      "0x0040000C",
      "0x00400014"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh 2 gán $s0 = 0$; lệnh 3 kiểm tra $0 < 100$ (Đúng $\\Rightarrow t1 = 1$). Lệnh 4 <code>beq t1, zero, else</code> kiểm tra $1 == 0$ (Sai) nên <strong>không rẽ nhánh</strong>, PC tăng thêm 4 byte tới lệnh kế tiếp: $PC = \\text{0x0040000C} + 4 = \\mathbf{\\text{0x00400010}}$.</p>"
  },
  {
    "id": "c3-3.68-67",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.68 (Câu 67)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 1)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 97,
    "printedPage": 96,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa",
    "acceptedAnswers": [
      "0x007302B3",
      "007302B3",
      "0x7302B3"
    ],
    "question": "Dựa vào Bản đồ bộ nhớ Little-Endian (Đề 0013 - Bản 1) bên dưới, hãy cho biết giá trị số 32-bit ở địa chỉ <code>0x400000</code> ở hệ 16.",
    "codeBlock": "Địa chỉ  | 4 byte (+0..+3) | Mã máy 32-bit | Hợp ngữ RISC-V\n0x400000 | B3, 02, 73, 00  | 0x007302B3    | add  t0, t1, t2\n0x400004 | 13, 0E, 54, 00  | 0x00540E13    | addi t3, s0, 5\n0x400008 | 93, DE, 74, 00  | 0x0074DE93    | srli t4, s1, 7\n0x40000C | 23, 24, E9, 01  | 0x01E92423    | sw   t5, 8(s2)\n0x400010 | E3, 88, 0F, FE  | 0xFE0F88E3    | beq  t6, x0, -16\n0x400014 | B7, 59, 34, 12  | 0x123459B7    | lui  s3, 0x12345\n0x400018 | EF, F0, 9F, FE  | 0xFE9FF0EF    | jal  ra, -24",
    "codeLang": "text",
    "svgDiagram": null,
    "options": [
      "0x007302B3",
      "0xB3027300",
      "0x0073B302",
      "0x302B3007"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ghép ngược 4 byte từ <code>0x400003</code> về <code>0x400000</code> (<code>00, 73, 02, B3</code>) theo Little-Endian thu được <strong><code>0x007302B3</code></strong>.</p>"
  },
  {
    "id": "c3-3.68-68",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.68 (Câu 68)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 1)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 97,
    "printedPage": 96,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Dựa vào Bản đồ bộ nhớ (Đề 0013 - Bản 1), sau đoạn lệnh: <code>lui s0, 0x400</code> $\\to$ <code>addi s0, s0, 0x18</code> $\\to$ <code>lh t1, 0(s0)</code>, hai thanh ghi <code>s0</code> và <code>t1</code> bằng bao nhiêu?",
    "codeBlock": "Địa chỉ  | 4 byte (+0..+3) | Mã máy 32-bit | Hợp ngữ RISC-V\n0x400000 | B3, 02, 73, 00  | 0x007302B3    | add  t0, t1, t2\n0x400004 | 13, 0E, 54, 00  | 0x00540E13    | addi t3, s0, 5\n0x400008 | 93, DE, 74, 00  | 0x0074DE93    | srli t4, s1, 7\n0x40000C | 23, 24, E9, 01  | 0x01E92423    | sw   t5, 8(s2)\n0x400010 | E3, 88, 0F, FE  | 0xFE0F88E3    | beq  t6, x0, -16\n0x400014 | B7, 59, 34, 12  | 0x123459B7    | lui  s3, 0x12345\n0x400018 | EF, F0, 9F, FE  | 0xFE9FF0EF    | jal  ra, -24",
    "codeLang": "text",
    "svgDiagram": null,
    "options": [
      "s0 = 0x00400018 và t1 = 0xFFFFF0EF",
      "s0 = 0x00400018 và t1 = 0x0000F0EF",
      "s0 = 0x00400018 và t1 = 0xFFFFEFF0",
      "s0 = 0x40001800 và t1 = 0xFE9FF0EF"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Sau 2 lệnh đầu, <code>s0 = 0x00400018</code>. Lệnh <code>lh t1, 0(s0)</code> đọc 2 byte tại <code>0x400018</code> (<code>0xEF</code>) và <code>0x400019</code> (<code>0xF0</code>), ghép ngược Little-Endian thành <code>0xF0EF</code> rồi <strong>mở rộng dấu</strong> âm 32-bit thành <strong><code>t1 = 0xFFFFF0EF</code></strong>.</p>"
  },
  {
    "id": "c3-3.68-69",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.68 (Câu 69)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 1)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 97,
    "printedPage": 96,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên thanh ghi (vd: s3 hoặc x19)",
    "acceptedAnswers": [
      "s3",
      "x19",
      "s3 (x19)"
    ],
    "question": "Dựa vào Bản đồ bộ nhớ (Đề 0013 - Bản 1), lệnh ở địa chỉ <code>0x400014</code> (<code>0x123459B7</code>) có thanh ghi đích <code>rd</code> là gì?",
    "codeBlock": "Địa chỉ  | 4 byte (+0..+3) | Mã máy 32-bit | Hợp ngữ RISC-V\n0x400000 | B3, 02, 73, 00  | 0x007302B3    | add  t0, t1, t2\n0x400004 | 13, 0E, 54, 00  | 0x00540E13    | addi t3, s0, 5\n0x400008 | 93, DE, 74, 00  | 0x0074DE93    | srli t4, s1, 7\n0x40000C | 23, 24, E9, 01  | 0x01E92423    | sw   t5, 8(s2)\n0x400010 | E3, 88, 0F, FE  | 0xFE0F88E3    | beq  t6, x0, -16\n0x400014 | B7, 59, 34, 12  | 0x123459B7    | lui  s3, 0x12345\n0x400018 | EF, F0, 9F, FE  | 0xFE9FF0EF    | jal  ra, -24",
    "codeLang": "text",
    "svgDiagram": null,
    "options": [
      "s3 (x19)",
      "s2 (x18)",
      "t4 (x29)",
      "s4 (x20)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Đổi 3 chữ số Hexa cuối <code>9B7</code> sang nhị phân: <code>10011_0110111</code> $\\Rightarrow rd = 10011_2 = 19$, là thanh ghi <strong><code>s3</code> (<code>x19</code>)</strong>.</p>"
  },
  {
    "id": "c3-3.68-70",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.68 (Câu 70)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 1)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 97,
    "printedPage": 96,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập hằng số chia (thập phân)",
    "acceptedAnswers": [
      "128"
    ],
    "question": "Dựa vào Bản đồ bộ nhớ (Đề 0013 - Bản 1), lệnh thứ 3 tại <code>0x400008</code> (<code>0x0074DE93</code>) tương đương với phép chia với hằng số bằng mấy?",
    "codeBlock": "Địa chỉ  | 4 byte (+0..+3) | Mã máy 32-bit | Hợp ngữ RISC-V\n0x400000 | B3, 02, 73, 00  | 0x007302B3    | add  t0, t1, t2\n0x400004 | 13, 0E, 54, 00  | 0x00540E13    | addi t3, s0, 5\n0x400008 | 93, DE, 74, 00  | 0x0074DE93    | srli t4, s1, 7\n0x40000C | 23, 24, E9, 01  | 0x01E92423    | sw   t5, 8(s2)\n0x400010 | E3, 88, 0F, FE  | 0xFE0F88E3    | beq  t6, x0, -16\n0x400014 | B7, 59, 34, 12  | 0x123459B7    | lui  s3, 0x12345\n0x400018 | EF, F0, 9F, FE  | 0xFE9FF0EF    | jal  ra, -24",
    "codeLang": "text",
    "svgDiagram": null,
    "options": [
      "128",
      "7",
      "64",
      "256"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh tại <code>0x400008</code> là <code>srli t4, s1, 7</code> (dịch phải logic 7 bit), tương đương phép chia không dấu cho $2^7 = \\mathbf{128}$.</p>"
  },
  {
    "id": "c3-3.68-71",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.68 (Câu 71)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 1)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 97,
    "printedPage": 96,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa (vd: 0x7)",
    "acceptedAnswers": [
      "0x7",
      "0x007",
      "7"
    ],
    "question": "Hằng số tức thì (<code>imm</code>) của lệnh ở địa chỉ <code>0x400008</code> (<code>0x0074DE93</code>) bằng mấy (viết ở hệ 16)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x7 (hoặc 0x007)",
      "0x74",
      "0x128",
      "0xE93"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>12 bit cao của mã máy <code>0x0074DE93</code> chính là <code>0x007</code> $\\Rightarrow$ Trả lời: <strong><code>0x7</code></strong> (hoặc <code>0x007</code>).</p>"
  },
  {
    "id": "c3-3.68-72",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.68 (Câu 72)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 1)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 97,
    "printedPage": 96,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên lệnh (vd: beq)",
    "acceptedAnswers": [
      "beq"
    ],
    "question": "Dựa vào Bản đồ bộ nhớ (Đề 0013 - Bản 1), hãy cho biết tên thao tác (mnemonic) của lệnh ở địa chỉ <code>0x400010</code> (<code>0xFE0F88E3</code>)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "beq",
      "bne",
      "lui",
      "add"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>0xFE0F88E3</code> có <code>opcode = 1100011</code> (Branch) và <code>funct3 = 000</code> $\\Rightarrow$ Thao tác là <strong><code>beq</code></strong>.</p>"
  },
  {
    "id": "c3-3.69-936",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.69 (Câu 936)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 2)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 98,
    "printedPage": 97,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa",
    "acceptedAnswers": [
      "0xFE9FF0EF",
      "FE9FF0EF"
    ],
    "question": "Sử dụng Bản đồ bộ nhớ (Đề 0013 - Bản 2) bên dưới, giá trị số 32-bit ở địa chỉ <code>0x400018</code> ở hệ 16 là bao nhiêu?",
    "codeBlock": "Địa chỉ  | 4 byte (+0..+3) | Mã máy 32-bit | Ghi chú Bản 2 (Đề 0013)\n0x400000 | B3, 02, 73, 00  | 0x007302B3    | add  t0, t1, t2\n0x400004 | 13, 0E, 54, 00  | 0x00540E13    | addi t3, s0, 5\n0x400008 | 93, DE, 34, 00  | 0x0034DE93    | (byte 0x40000A đổi thành 0x34)\n0x40000C | 23, 24, E9, 01  | 0x01E92423    | sw   t5, 8(s2)\n0x400010 | E3, 88, 0F, FE  | 0xFE0F88E3    | beq  t6, x0, -16\n0x400014 | B7, 59, 34, 12  | 0x123459B7    | lui  s3, 0x12345\n0x400018 | EF, F0, 9F, FE  | 0xFE9FF0EF    | jal  ra, -24",
    "codeLang": "text",
    "svgDiagram": null,
    "options": [
      "0xFE9FF0EF",
      "0xEFF09FFE",
      "0x9FF0EFFE",
      "0xFE90FFEF"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Ghép ngược 4 byte từ <code>0x40001B</code> về <code>0x400018</code> (<code>FE, 9F, F0, EF</code>) được <strong><code>0xFE9FF0EF</code></strong>.</p>"
  },
  {
    "id": "c3-3.69-937",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.69 (Câu 937)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 2)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 98,
    "printedPage": 97,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Sử dụng Bản đồ bộ nhớ (Đề 0013 - Bản 2), sau đoạn lệnh: <code>lui s0, 0x400</code> $\\to$ <code>addi s0, s0, 0x16</code> $\\to$ <code>lh t1, 0(s0)</code>, hai thanh ghi <code>s0</code> và <code>t1</code> bằng bao nhiêu?",
    "codeBlock": "Địa chỉ  | 4 byte (+0..+3) | Mã máy 32-bit | Ghi chú Bản 2 (Đề 0013)\n0x400000 | B3, 02, 73, 00  | 0x007302B3    | add  t0, t1, t2\n0x400004 | 13, 0E, 54, 00  | 0x00540E13    | addi t3, s0, 5\n0x400008 | 93, DE, 34, 00  | 0x0034DE93    | (byte 0x40000A đổi thành 0x34)\n0x40000C | 23, 24, E9, 01  | 0x01E92423    | sw   t5, 8(s2)\n0x400010 | E3, 88, 0F, FE  | 0xFE0F88E3    | beq  t6, x0, -16\n0x400014 | B7, 59, 34, 12  | 0x123459B7    | lui  s3, 0x12345\n0x400018 | EF, F0, 9F, FE  | 0xFE9FF0EF    | jal  ra, -24",
    "codeLang": "text",
    "svgDiagram": null,
    "options": [
      "s0 = 0x00400016 và t1 = 0x00001234",
      "s0 = 0x00400016 và t1 = 0x00003412",
      "s0 = 0x00400016 và t1 = 0x000059B7",
      "s0 = 0x00400016 và t1 = 0xFFFF1234"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>s0 = 0x00400016</code>. Lệnh <code>lh t1, 0(s0)</code> đọc 2 byte tại <code>0x400016</code> (<code>0x34</code>) và <code>0x400017</code> (<code>0x12</code>), ghép thành <code>0x1234</code>, mở rộng dấu dương thành <strong><code>t1 = 0x00001234</code></strong>.</p>"
  },
  {
    "id": "c3-3.69-938",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.69 (Câu 938)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 2)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 98,
    "printedPage": 97,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên thanh ghi (vd: t1 hoặc x6)",
    "acceptedAnswers": [
      "t1",
      "x6",
      "t1 (x6)"
    ],
    "question": "Lệnh ở địa chỉ <code>0x400000</code> (<code>0x007302B3</code>) có thanh ghi nguồn <code>rs1</code> là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "t1 (x6)",
      "t2 (x7)",
      "t0 (x5)",
      "s0 (x8)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Bit <code>[19:15]</code> của <code>0x007302B3</code> là <code>00110</code> $= 6$, tức là thanh ghi <strong><code>t1</code> (<code>x6</code>)</strong>.</p>"
  },
  {
    "id": "c3-3.69-939",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.69 (Câu 939)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 2)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 98,
    "printedPage": 97,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập hằng số chia",
    "acceptedAnswers": [
      "8"
    ],
    "question": "Trong Đề 0013 Bản 2, lệnh thứ 3 tại <code>0x400008</code> (<code>0x0034DE93</code>) tương đương với phép chia cho hằng số bằng mấy?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "8",
      "3",
      "16",
      "128"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Mã máy <code>0x0034DE93</code> là lệnh <code>srli t4, s1, 3</code>. Dịch phải logic 3 bit tương đương chia cho $2^3 = \\mathbf{8}$.</p>"
  },
  {
    "id": "c3-3.69-940",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.69 (Câu 940)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 2)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 98,
    "printedPage": 97,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập địa chỉ Hexa",
    "acceptedAnswers": [
      "0x400010",
      "0x00400010",
      "400010"
    ],
    "question": "Trong bản đồ bộ nhớ Đề 0013 bên trên, lệnh <code>beq</code> duy nhất nằm ở địa chỉ nào?",
    "codeBlock": "Địa chỉ  | 4 byte (+0..+3) | Mã máy 32-bit | Ghi chú Bản 2 (Đề 0013)\n0x400000 | B3, 02, 73, 00  | 0x007302B3    | add  t0, t1, t2\n0x400004 | 13, 0E, 54, 00  | 0x00540E13    | addi t3, s0, 5\n0x400008 | 93, DE, 34, 00  | 0x0034DE93    | (byte 0x40000A đổi thành 0x34)\n0x40000C | 23, 24, E9, 01  | 0x01E92423    | sw   t5, 8(s2)\n0x400010 | E3, 88, 0F, FE  | 0xFE0F88E3    | beq  t6, x0, -16\n0x400014 | B7, 59, 34, 12  | 0x123459B7    | lui  s3, 0x12345\n0x400018 | EF, F0, 9F, FE  | 0xFE9FF0EF    | jal  ra, -24",
    "codeLang": "text",
    "svgDiagram": null,
    "options": [
      "0x400010",
      "0x40000C",
      "0x400014",
      "0x400018"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>beq t6, x0, -16</code> (<code>0xFE0F88E3</code>) nằm tại địa chỉ <strong><code>0x400010</code></strong>.</p>"
  },
  {
    "id": "c3-3.69-941",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.69 (Câu 941)",
    "source": "Đề GK 2025.2 (Đề 0013 Bản 2)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 98,
    "printedPage": 97,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên lệnh (vd: srli)",
    "acceptedAnswers": [
      "srli"
    ],
    "question": "Hãy cho biết tên thao tác của lệnh ở địa chỉ <code>0x400008</code> (<code>0x0034DE93</code>)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "srli",
      "srai",
      "slli",
      "addi"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>0x0034DE93</code> có <code>opcode = 0010011</code>, <code>funct3 = 101</code>, 7 bit cao bằng <code>0000000</code> $\\Rightarrow$ Thao tác là <strong><code>srli</code></strong>.</p>"
  },
  {
    "id": "c3-3.70-100",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.70 (Câu 100)",
    "source": "Đề GK 2025.2 (Đề 0012)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 98,
    "printedPage": 97,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập giá trị Hexa",
    "acceptedAnswers": [
      "0x038B0B13",
      "038B0B13"
    ],
    "question": "Dựa vào Bản đồ bộ nhớ Little-Endian (Đề 0012) bên dưới, hãy cho biết giá trị số 32-bit ở địa chỉ <code>0x400008</code> ở hệ 16.",
    "codeBlock": "Địa chỉ  | 4 byte (+0..+3) | Mã máy 32-bit | Hợp ngữ RISC-V (Đề 0012)\n0x400000 | 33, 0E, 73, 40  | 0x40730E33    | sub  t3, t1, t2\n0x400004 | 37, 0B, 04, 00  | 0x00040B37    | lui  s6, 0x40\n0x400008 | 13, 0B, 8B, 03  | 0x038B0B13    | addi s6, s6, 56\n0x40000C | E3, 0C, CB, FF  | 0xFFCB0CE3    | beq  s6, s11, -8\n0x400010 | 33, 83, C3, 01  | 0x01C38333    | add  t1, t2, t3\n0x400014 | 6F, F0, 1F, FF  | 0xFF1FF06F    | jal  x0, -16\n0x400018 | 13, 1B, 2E, 00  | 0x002E1B13    | slli s6, t3, 2",
    "codeLang": "text",
    "svgDiagram": null,
    "options": [
      "0x038B0B13",
      "0x130B8B03",
      "0x038B130B",
      "0x8B0B1303"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Tại <code>0x400008</code> có 4 byte <code>13, 0B, 8B, 03</code>. Ghép ngược theo Little-Endian thu được <strong><code>0x038B0B13</code></strong>.</p>"
  },
  {
    "id": "c3-3.70-101",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.70 (Câu 101)",
    "source": "Đề GK 2025.2 (Đề 0012)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 99,
    "printedPage": 98,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Dựa vào Bản đồ bộ nhớ (Đề 0012), sau đoạn lệnh: <code>lui s0, 0x400</code> $\\to$ <code>addi s0, s0, 0x16</code> $\\to$ <code>lb t1, 0(s0)</code>, hai thanh ghi <code>s0</code> và <code>t1</code> bằng bao nhiêu?",
    "codeBlock": "Địa chỉ  | 4 byte (+0..+3) | Mã máy 32-bit | Hợp ngữ RISC-V (Đề 0012)\n0x400000 | 33, 0E, 73, 40  | 0x40730E33    | sub  t3, t1, t2\n0x400004 | 37, 0B, 04, 00  | 0x00040B37    | lui  s6, 0x40\n0x400008 | 13, 0B, 8B, 03  | 0x038B0B13    | addi s6, s6, 56\n0x40000C | E3, 0C, CB, FF  | 0xFFCB0CE3    | beq  s6, s11, -8\n0x400010 | 33, 83, C3, 01  | 0x01C38333    | add  t1, t2, t3\n0x400014 | 6F, F0, 1F, FF  | 0xFF1FF06F    | jal  x0, -16\n0x400018 | 13, 1B, 2E, 00  | 0x002E1B13    | slli s6, t3, 2",
    "codeLang": "text",
    "svgDiagram": null,
    "options": [
      "s0 = 0x00400016 và t1 = 0x0000001F",
      "s0 = 0x00400016 và t1 = 0xFFFFFF1F",
      "s0 = 0x00400016 và t1 = 0x00001FF0",
      "s0 = 0x00400016 và t1 = 0xFFFFFFF0"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><code>s0 = 0x00400016</code>. Tại địa chỉ <code>0x400016</code> của Đề 0012 (byte thứ 3 của dòng <code>0x400014</code>) chứa byte <code>0x1F</code> (số dương vì $1 < 8$), nên sau lệnh <code>lb t1, 0(s0)</code> thu được <strong><code>t1 = 0x0000001F</code></strong>.</p>"
  },
  {
    "id": "c3-3.70-102",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.70 (Câu 102)",
    "source": "Đề GK 2025.2 (Đề 0012)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 99,
    "printedPage": 98,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên thanh ghi (vd: t2 hoặc x7)",
    "acceptedAnswers": [
      "t2",
      "x7",
      "t2 (x7)"
    ],
    "question": "Lệnh ở địa chỉ <code>0x400000</code> (<code>0x40730E33</code>) có thanh ghi nguồn <code>rs2</code> là gì?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "t2 (x7)",
      "t1 (x6)",
      "t3 (x28)",
      "s6 (x22)"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Trong <code>0x40730E33</code>, 12 bit đầu là <code>0x407 = 0100000_00111</code> $\\Rightarrow rs2 = 00111_2 = 7$, tức thanh ghi <strong><code>t2</code> (<code>x7</code>)</strong>.</p>"
  },
  {
    "id": "c3-3.70-103",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.70 (Câu 103)",
    "source": "Đề GK 2025.2 (Đề 0012)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 99,
    "printedPage": 98,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập hằng số nhân",
    "acceptedAnswers": [
      "4"
    ],
    "question": "Lệnh cuối cùng trong bản đồ Đề 0012 (tại <code>0x400018</code>: <code>0x002E1B13</code>) tương đương với phép nhân với hằng số bằng mấy?",
    "codeBlock": "Địa chỉ  | 4 byte (+0..+3) | Mã máy 32-bit | Hợp ngữ RISC-V (Đề 0012)\n0x400000 | 33, 0E, 73, 40  | 0x40730E33    | sub  t3, t1, t2\n0x400004 | 37, 0B, 04, 00  | 0x00040B37    | lui  s6, 0x40\n0x400008 | 13, 0B, 8B, 03  | 0x038B0B13    | addi s6, s6, 56\n0x40000C | E3, 0C, CB, FF  | 0xFFCB0CE3    | beq  s6, s11, -8\n0x400010 | 33, 83, C3, 01  | 0x01C38333    | add  t1, t2, t3\n0x400014 | 6F, F0, 1F, FF  | 0xFF1FF06F    | jal  x0, -16\n0x400018 | 13, 1B, 2E, 00  | 0x002E1B13    | slli s6, t3, 2",
    "codeLang": "text",
    "svgDiagram": null,
    "options": [
      "4",
      "2",
      "8",
      "16"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>0x002E1B13</code> là <code>slli s6, t3, 2</code>. Dịch trái 2 bit tương đương nhân với $2^2 = \\mathbf{4}$.</p>"
  },
  {
    "id": "c3-3.70-104",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.70 (Câu 104)",
    "source": "Đề GK 2025.2 (Đề 0012)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 99,
    "printedPage": 98,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập hằng số Hexa (vd: 0x40)",
    "acceptedAnswers": [
      "0x40",
      "0x00040",
      "40",
      "00040"
    ],
    "question": "Lệnh dạng U ở địa chỉ <code>0x400004</code> (<code>0x00040B37</code>) có toán hạng hằng số bằng mấy (viết ở hệ 16)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x40 (hoặc 0x00040)",
      "0x00040B",
      "0x400",
      "0xB37"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh dạng U ở <code>0x400004</code> (<code>0x00040B37</code>) có 20 bit cao (5 chữ số Hexa đầu) là <strong><code>0x00040</code> (hay <code>0x40</code>)</strong>.</p>"
  },
  {
    "id": "c3-3.70-105",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.70 (Câu 105)",
    "source": "Đề GK 2025.2 (Đề 0012)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 99,
    "printedPage": 98,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập tên lệnh (vd: lui)",
    "acceptedAnswers": [
      "lui"
    ],
    "question": "Hãy cho biết tên thao tác của lệnh ở địa chỉ <code>0x400004</code> (<code>0x00040B37</code>)?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "lui",
      "auipc",
      "addi",
      "jal"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Opcode của <code>0x00040B37</code> là $0110111_2 = 55_{(10)} \\Rightarrow$ Thao tác là <strong><code>lui</code></strong>.</p>"
  },
  {
    "id": "c3-3.70-106",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.70 (Câu 106/109)",
    "source": "Đề GK 2025.2 (Đề 0012)",
    "examTags": [
      "GK"
    ],
    "pdfPage": 99,
    "printedPage": 98,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": false,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Giải thích nào sau đây về lệnh <code>bne t1, t2, -16</code> là đúng?",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "Nếu t1 != t2 rẽ nhánh về 4 lệnh trước",
      "Nếu t1 != t2 rẽ nhánh về 4 lệnh sau",
      "Nếu t1 == t2 rẽ nhánh về 4 lệnh sau",
      "Nếu t1 == t2 rẽ nhánh về 4 lệnh trước"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p>Lệnh <code>bne</code> kiểm tra điều kiện khác nhau (<code>t1 != t2</code>), còn độ lệch $-16$ byte $= -4 \\times 4$ byte tức là nhảy lùi về <strong>4 lệnh trước</strong> lệnh hiện thời.</p>"
  },
  {
    "id": "c3-3.71",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ",
    "exerciseCode": "Bài 3.71",
    "source": "Đề Cuối kỳ 2024.2 (Trang 15, Câu #30) & MOOC 2022.2",
    "examTags": [
      "CK"
    ],
    "pdfPage": 99,
    "printedPage": 98,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": true,
    "fillPrompt": "Nhập địa chỉ đích dạng Hexa (vd: 0x00401058)",
    "acceptedAnswers": [
      "0x00401058",
      "00401058",
      "0x0040105C",
      "0040105C"
    ],
    "question": "Giả thiết lệnh <code>bne</code> của RISC-V có mã máy là <code>0x15330006</code>, được đặt tại word nhớ có địa chỉ <code>0x00401040</code>. Hãy chỉ ra địa chỉ đích của lệnh đó (nếu điều kiện thỏa mãn):",
    "codeBlock": null,
    "codeLang": null,
    "svgDiagram": null,
    "options": [
      "0x00401058",
      "0x00401044",
      "0x0040104E",
      "0x0040105C"
    ],
    "correctIndex": 0,
    "correctIndices": [
      0
    ],
    "explanation": "<p><strong>Phân tích nguồn gốc câu hỏi trên hệ thống thi:</strong> Mã máy <code>0x15330006</code> là câu hỏi chuyển đổi từ đề thi hệ thống MOOC 2022.2 (Trang 14), trong đó 16 bit cuối cùng là hằng số $\\text{imm} = \\texttt{0x0006} = 6$ (nhảy tiến $6\\text{ lệnh} = 6 \\times 4 = 24\\text{ byte} = \\texttt{0x18}\\text{ byte}$):</p><ul><li><strong>Nếu tính từ $PC = \\texttt{0x00401040}$ (cộng độ lệch $6 \\times 4 = \\texttt{0x18}\\text{ byte}$ theo chuẩn RISC-V):</strong>$$\\text{Địa chỉ đích} = \\texttt{0x00401040} + \\texttt{0x18} = \\mathbf{\\texttt{0x00401058}}$$</li><li><strong>Nếu tính từ $PC + 4 = \\texttt{0x00401044}$ (theo kết quả cài đặt gốc từ đề 2022.2):</strong>$$\\text{Địa chỉ đích} = (\\texttt{0x00401040} + 4) + 6 \\times 4 = \\texttt{0x00401044} + \\texttt{0x18} = \\mathbf{\\texttt{0x0040105C}}$$</li></ul>"
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
