# -*- coding: utf-8 -*-
"""
Tạo file js/data-questions-ch3.js chứa 100% câu hỏi Bài tập Chương 3 (Tập lệnh RISC-V)
và câu hỏi ôn tập lý thuyết.
"""
import json

questions = []

def add_q(q):
    questions.append(q)

# ==============================================================================
# CÂU HỎI LÝ THUYẾT CHƯƠNG 3 (8 câu)
# ==============================================================================
add_q({
    "id": "lt-3.1",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.1",
    "source": "Lý thuyết mục 3.1.1 - Tập 32 thanh ghi RISC-V",
    "examTags": ["LT"],
    "pdfPage": 57,
    "printedPage": 56,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong kiến trúc RISC-V 32-bit, có bao nhiêu thanh ghi đa dụng và mỗi thanh ghi được mã hóa bằng bao nhiêu bit trong lệnh máy?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "32 thanh ghi, mỗi thanh ghi được mã hóa bằng 5 bit (vì 2^5 = 32)",
        "16 thanh ghi, mỗi thanh ghi được mã hóa bằng 4 bit (vì 2^4 = 16)",
        "32 thanh ghi, mỗi thanh ghi được mã hóa bằng 32 bit",
        "64 thanh ghi, mỗi thanh ghi được mã hóa bằng 6 bit"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Theo mục 3.1.1 trong PDF: Bộ xử lý RISC-V 32-bit có 32 thanh ghi đa dụng ($x0$ đến $x31$). Vì $32 = 2^5$ nên mỗi trường thanh ghi (<code>rd, rs1, rs2</code>) trong lệnh máy chiếm đúng <strong>5 bit</strong>.</p>"
})

add_q({
    "id": "lt-3.2",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.2",
    "source": "Lý thuyết mục 3.1.1 - Thanh ghi zero",
    "examTags": ["LT"],
    "pdfPage": 57,
    "printedPage": 56,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thanh ghi nào trong 32 thanh ghi của RISC-V là thanh ghi chỉ đọc (read-only) và có giá trị luôn bằng hằng số 0?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "zero (x0)",
        "ra (x1)",
        "sp (x2)",
        "s0 (x8)"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Theo mục 3.1.1 trong PDF: Thanh ghi <code>zero</code> ($x0$) được nối cứng xuống đất (hardwired to 0), luôn luôn mang giá trị $0$ và chỉ đọc. Mọi thao tác ghi vào $x0$ đều bị bỏ qua.</p>"
})

add_q({
    "id": "lt-3.3",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.3",
    "source": "Lý thuyết mục 3.1.1 - Quy ước bảo toàn thanh ghi",
    "examTags": ["LT"],
    "pdfPage": 57,
    "printedPage": 56,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Nhóm thanh ghi nào dưới đây thuộc loại <strong>Callee-saved</strong> (hàm con được gọi phải có trách nhiệm cất vào Stack trước khi sửa đổi và khôi phục lại trước khi return)?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "s0 - s11 (x8, x9, x18 - x27) và sp (x2)",
        "t0 - t6 (x5 - x7, x28 - x31)",
        "a0 - a7 (x10 - x17)",
        "ra (x1)"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Theo mục 3.1.1 trong PDF:</p><ul><li><strong>Callee-saved:</strong> Các thanh ghi lưu trữ <code>s0 - s11</code> và con trỏ ngăn xếp <code>sp</code>. Hàm con nếu muốn dùng phải tự cất ra ngăn xếp và khôi phục khi thoát.</li><li><strong>Caller-saved:</strong> Các thanh ghi tạm thời <code>t0 - t6</code>, tham số <code>a0 - a7</code> và địa chỉ trả về <code>ra</code>.</li></ul>"
})

add_q({
    "id": "lt-3.4",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.4",
    "source": "Lý thuyết mục 3.1.2 - Quy tắc Little-Endian",
    "examTags": ["LT"],
    "pdfPage": 58,
    "printedPage": 57,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Nguyên tắc sắp xếp dữ liệu theo thứ tự Đầu nhỏ (Little-Endian) trong RISC-V là gì?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "Byte có ý nghĩa thấp nhất (LSB) được lưu ở địa chỉ nhỏ nhất; Byte có ý nghĩa cao nhất (MSB) ở địa chỉ lớn nhất",
        "Byte có ý nghĩa cao nhất (MSB) được lưu ở địa chỉ nhỏ nhất; Byte có ý nghĩa thấp nhất (LSB) ở địa chỉ lớn nhất",
        "Các byte chẵn lưu ở địa chỉ thấp, các byte lẻ lưu ở địa chỉ cao",
        "Toàn bộ word dữ liệu được đảo ngược từng bit trước khi lưu vào RAM"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Theo mục 3.1.2 trong PDF: Trong chuẩn <strong>Little-Endian (Đầu nhỏ)</strong>, Byte có trọng số thấp nhất (LSB - 2 chữ số Hexa ngoài cùng bên phải) nằm ở địa chỉ nhỏ nhất (độ lệch +0).</p>"
})

add_q({
    "id": "lt-3.5",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.5",
    "source": "Lý thuyết mục 3.1.3 - Giới hạn hằng số addi",
    "examTags": ["LT"],
    "pdfPage": 58,
    "printedPage": 57,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Toán hạng hằng số (immediate) trong lệnh <code>addi rd, rs1, imm</code> của RISC-V dài bao nhiêu bit và nhận giá trị nguyên hợp lệ trong khoảng nào?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "12 bit có dấu, dải giá trị từ -2048 đến +2047",
        "16 bit có dấu, dải giá trị từ -32768 đến +32767",
        "12 bit không dấu, dải giá trị từ 0 đến 4095",
        "20 bit có dấu, dải giá trị từ -524288 đến +524287"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Theo mục 3.1.3 trong PDF: Hằng số <code>imm</code> của lệnh <code>addi</code> là số nguyên có dấu <strong>12 bit</strong>, nên giá trị hợp lệ chỉ nằm trong đoạn <strong>$[-2048, +2047]$</strong> (tương ứng <code>0xFFFFF800</code> đến <code>0x7FF</code>). Vượt quá dải này sẽ bị RARS báo lỗi biên dịch.</p>"
})

add_q({
    "id": "lt-3.6",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.6",
    "source": "Lý thuyết mục 3.1.3 - Mở rộng dấu lệnh logic",
    "examTags": ["LT"],
    "pdfPage": 59,
    "printedPage": 58,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Điểm khác biệt quan trọng của các lệnh logic với hằng số tức thì (<code>andi, ori, xori</code>) trong RISC-V so với kiến trúc MIPS cổ điển là gì?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "Trong RISC-V, hằng số 12-bit luôn được mở rộng có dấu (Sign-extend) thành 32-bit trước khi thực hiện phép toán",
        "Trong RISC-V, hằng số 12-bit luôn được mở rộng bằng số 0 (Zero-extend)",
        "Trong RISC-V, hằng số là 16-bit thay vì 12-bit",
        "Trong RISC-V, các lệnh logic này không hỗ trợ số âm"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Theo mục 3.1.3 trong PDF: <em>Lưu ý cực kỳ quan trọng:</em> Khác với MIPS cũ (mở rộng không dấu), trong <strong>RISC-V</strong> hằng số 12-bit của <code>andi, ori, xori</code> luôn luôn được <strong>mở rộng có dấu (Sign-extend)</strong> thành 32-bit trước khi tính toán!</p>"
})

add_q({
    "id": "lt-3.7",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.7",
    "source": "Lý thuyết mục 3.1.3 - Phân biệt dịch srl và sra",
    "examTags": ["LT"],
    "pdfPage": 60,
    "printedPage": 59,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Sự khác biệt cốt lõi giữa lệnh dịch phải logic (<code>srl, srli</code>) và lệnh dịch phải số học (<code>sra, srai</code>) là gì?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "srli luôn chèn bit 0 vào bên trái; srai giữ nguyên bit dấu (chèn bit 1 nếu số âm, chèn bit 0 nếu số dương)",
        "srai luôn chèn bit 1 vào bên trái; srli luôn chèn bit 0 vào bên trái",
        "srli dịch số thực dấu phẩy động; srai dịch số nguyên",
        "srli dịch sang trái; srai dịch sang phải"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Theo mục 3.1.3 trong PDF:</p><ul><li><code>srli</code> (Shift Right Logical): luôn chèn bit 0 vào bên trái.</li><li><code>srai</code> (Shift Right Arithmetic): <strong>giữ nguyên bit dấu</strong> (nếu số đang âm có bit 31 là 1 thì chèn toàn bit 1 vào bên trái, tương đương phép chia số có dấu cho $2^k$).</li></ul>"
})

add_q({
    "id": "lt-3.8",
    "chapter": 3,
    "groupId": "3.1",
    "groupTitle": "Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)",
    "exerciseCode": "Lý thuyết 3.8",
    "source": "Lý thuyết mục 3.1.4 - Khuôn dạng lệnh máy",
    "examTags": ["LT"],
    "pdfPage": 60,
    "printedPage": 59,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong tất cả các khuôn dạng lệnh máy có thanh ghi đích <code>rd</code> của RISC-V (kiểu R, I, U, J), trường <code>rd</code> luôn nằm cố định ở dải bit nào?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "Bit 11 đến bit 7 (5 bit, ngay bên trái trường opcode 6:0)",
        "Bit 19 đến bit 15",
        "Bit 24 đến bit 20",
        "Bit 31 đến bit 27"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Theo bảng 6 khuôn dạng lệnh (mục 3.1.4 trong PDF): Trường thanh ghi đích <code>rd</code> luôn nằm cố định ở <strong>bit 11:7</strong> (5 bit, ngay sát bên trái của trường <code>opcode</code> ở bit 6:0). Mẹo này giúp tìm nhanh thanh ghi đích của bất kỳ câu lệnh nào chỉ bằng 3 chữ số Hexa cuối!</p>"
})

# ==============================================================================
# BÀI TẬP CHƯƠNG 3 (PDF CHƯƠNG 4: BÀI 4.1 -> 4.59)
# ==============================================================================
# Nhóm 1: 4.1 -> 4.8
add_q({
    "id": "c3-4.1",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài tập 3.1 (PDF 4.1)",
    "source": "Đề Cuối kỳ 2023.1 - #08de08 & Ôn tập Cuối kỳ P2 - Câu 13",
    "examTags": ["CK"],
    "pdfPage": 63,
    "printedPage": 62,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Phát biểu nào sau đây là đúng về các thanh ghi tạm thời (<code>t0 – t6</code>) và các thanh ghi lưu trữ (<code>s0 – s11</code>) trong RISC-V?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "Trong một số quy ước gọi hàm, thanh ghi tạm thời là “caller-saved”, còn thanh ghi lưu trữ là “callee-saved”",
        "Trong một số quy ước gọi hàm, thanh ghi tạm thời là “callee-saved”, còn thanh ghi lưu trữ là “caller-saved”",
        "Giá trị của các thanh ghi lưu trữ luôn phải được lưu bởi bên được gọi (callee)",
        "Giá trị của các thanh ghi tạm thời luôn phải được lưu bởi bên gọi (caller)"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Theo quy ước gọi hàm chuẩn của RISC-V: các thanh ghi tạm thời (<code>t0 – t6</code>) là <strong>caller-saved</strong> (bên gọi chỉ lưu khi thực sự cần dùng tiếp sau lời gọi hàm, không phải “luôn luôn”), còn các thanh ghi lưu trữ (<code>s0 – s11</code>) là <strong>callee-saved</strong> (bên được gọi chỉ lưu nếu có sửa đổi).</li><li><strong>Đáp án đúng: A (hoặc B trong đề gốc: t0-t6 là caller-saved, s0-s11 là callee-saved).</strong></li></ul>"
})

add_q({
    "id": "c3-4.2a",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài tập 3.2a (PDF 4.2a)",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0008 Câu 10 & Đề 0006 Câu 5",
    "examTags": ["GK"],
    "pdfPage": 63,
    "printedPage": 62,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập tên thanh ghi (ví dụ: zero hoặc x0):",
    "acceptedAnswers": ["zero", "x0", "thanh ghi zero", "thanh ghi x0"],
    "question": "Trong 32 thanh ghi được đánh địa chỉ của bộ xử lý RISC-V 32-bit, tên của 1 thanh ghi chỉ đọc (read-only) luôn chứa hằng số 0 là gì?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "zero (hoặc x0)",
        "ra (x1)",
        "sp (x2)",
        "gp (x3)"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Thanh ghi chỉ đọc luôn có giá trị bằng 0 là thanh ghi <strong>zero (hoặc x0)</strong>. Mọi thao tác ghi vào x0 đều không làm thay đổi giá trị của nó.</p>"
})

add_q({
    "id": "c3-4.2b",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài tập 3.2b (PDF 4.2b)",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0008 Câu 10 & Đề 0006 Câu 5",
    "examTags": ["GK"],
    "pdfPage": 63,
    "printedPage": 62,
    "relatedTheoryId": "3.1.1",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong khuôn dạng lệnh R của bộ xử lý 32-bit, tại sao độ rộng của vùng thông tin thanh ghi đích <code>rd</code> phải là 5 bit?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "Vì bộ xử lý có tất cả 32 thanh ghi đa dụng, cần log2(32) = 5 bit để phân biệt",
        "Vì mỗi thanh ghi có kích thước dữ liệu là 5 byte",
        "Vì trường opcode đã chiếm 27 bit nên chỉ còn thừa lại 5 bit",
        "Vì RISC-V là kiến trúc vi xử lý 5 tầng đường ống"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Vì bộ xử lý có tất cả <strong>32 thanh ghi đa dụng</strong>. Để mã hóa và phân biệt được 32 thanh ghi khác nhau, ta cần số bit là: $$\\log_2(32) = 5\\text{ bit (vì } 2^5 = 32)$$</p>"
})

add_q({
    "id": "c3-4.3",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài tập 3.3 (PDF 4.3)",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0006, Câu 8",
    "examTags": ["GK"],
    "pdfPage": 64,
    "printedPage": 63,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập dung lượng theo byte (ví dụ: 600):",
    "acceptedAnswers": ["600", "600 byte", "600byte", "600 bytes"],
    "question": "Một phần mềm viết cho bộ xử lý RISC-V 32-bit có 150 lệnh hợp ngữ chuẩn (không dùng lệnh giả và không dùng lệnh nén) thì chiếm bao nhiêu byte lệnh mã máy trong bộ nhớ?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "600 byte",
        "150 byte",
        "300 byte",
        "1200 byte"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Mỗi lệnh mã máy chuẩn của kiến trúc 32-bit có độ dài cố định là $32\\text{ bit} = 4\\text{ byte}$.</li><li>Vậy 150 lệnh sẽ chiếm dung lượng là: $$150 \\times 4\\text{ byte} = 600\\text{ byte}$$</li><li><strong>Đáp số: 600 byte.</strong></li></ul>"
})

add_q({
    "id": "c3-4.4a",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài tập 3.4a (PDF 4.4a)",
    "source": "Đề Cuối kỳ 2022.2 - #17e1a7 & 2024.1 - #366b03",
    "examTags": ["CK"],
    "pdfPage": 64,
    "printedPage": 63,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Phương pháp định địa chỉ nào được sử dụng mã hóa cho toán hạng hằng số của lệnh hợp ngữ RISC-V sau: <code>addi x18, x19, -5</code>?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "Định địa chỉ tức thì (Immediate Addressing)",
        "Định địa chỉ cơ sở (Base Addressing)",
        "Định địa chỉ tương đối với PC (PC-relative Addressing)",
        "Định địa chỉ thanh ghi (Register Addressing)"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Toán hạng hằng số <code>-5</code> nằm trực tiếp ngay trong mã lệnh của lệnh <code>addi</code>, nên sử dụng phương pháp <strong>Định địa chỉ tức thì (Immediate Addressing)</strong>.</p>"
})

add_q({
    "id": "c3-4.4b",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài tập 3.4b (PDF 4.4b)",
    "source": "Đề Cuối kỳ 2022.2 & Ôn tập Cuối kỳ P2 - Câu 29",
    "examTags": ["CK"],
    "pdfPage": 64,
    "printedPage": 63,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Phương pháp định địa chỉ nào được sử dụng để xác định địa chỉ đích của lệnh rẽ nhánh <code>beq</code> hoặc lệnh nhảy <code>jal</code>?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "Định địa chỉ tương đối với PC (PC-relative Addressing)",
        "Định địa chỉ cơ sở (Base Addressing)",
        "Định địa chỉ tức thì (Immediate Addressing)",
        "Định địa chỉ thanh ghi (Register Addressing)"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Các lệnh rẽ nhánh (<code>beq, bne...</code>) và lệnh nhảy (<code>jal</code>) tính địa chỉ đích bằng cách lấy $\\text{PC} + \\text{imm}$, nên sử dụng phương pháp <strong>Định địa chỉ tương đối với PC (PC-relative Addressing)</strong>.</p>"
})

add_q({
    "id": "c3-4.5a",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài tập 3.5a (PDF 4.5 - Câu A)",
    "source": "Đề Cuối kỳ 2022.2 - #3ace1f",
    "examTags": ["CK"],
    "pdfPage": 64,
    "printedPage": 63,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong các giá trị địa chỉ được cho dưới đây, giá trị nào có thể là địa chỉ của một <strong>word nhớ</strong> trong bộ nhớ chính của máy tính 32-bit?<br>1. <code>0x00404508</code><br>2. <code>0x0050601A</code><br>3. <code>0x00601002</code><br>4. <code>0x00402346</code>",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0x00404508",
        "0x0050601A",
        "0x00601002",
        "0x00402346"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li><strong>Quy tắc căn chỉnh từ nhớ (Word alignment):</strong> Mỗi word nhớ 32-bit chiếm 4 byte, nên địa chỉ bắt buộc phải chia hết cho 4 (chữ số Hexa cuối cùng phải là <code>0, 4, 8, C</code>).</li><li>Các chữ số tận cùng <code>A (10), 2, 6</code> tuy là số chẵn nhưng không chia hết cho 4.</li><li>Chỉ có <code>0x00404508</code> tận cùng bằng <strong>8</strong> (chia hết cho 4).</li><li><strong>Đáp án đúng: 0x00404508.</strong></li></ul>"
})

add_q({
    "id": "c3-4.5b",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài tập 3.5b (PDF 4.5 - Câu B)",
    "source": "Đề Cuối kỳ 2020.2",
    "examTags": ["CK"],
    "pdfPage": 64,
    "printedPage": 63,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong các giá trị địa chỉ sau, giá trị nào có thể là địa chỉ hợp lệ của một <strong>word nhớ</strong> trong máy tính 32-bit?<br>1. <code>0x1001A00C</code><br>2. <code>0x10800016</code><br>3. <code>0x100020CE</code><br>4. <code>0x1050009A</code>",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0x1001A00C",
        "0x10800016",
        "0x100020CE",
        "0x1050009A"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Địa chỉ của word nhớ bắt buộc phải chia hết cho 4 (kết thúc bằng 0, 4, 8 hoặc C).</li><li><code>0x1001A00C</code> tận cùng bằng <strong>C (= 12)</strong> chia hết cho 4 ($12 \\div 4 = 3$).</li><li>Các địa chỉ kết thúc bằng 6, E (14), A (10) không chia hết cho 4.</li><li><strong>Đáp án đúng: 0x1001A00C.</strong></li></ul>"
})

add_q({
    "id": "c3-4.6",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài tập 3.6 (PDF 4.6)",
    "source": "Đề Cuối kỳ 2023.1 - Trang 15 & Ôn tập Giữa kỳ - Câu 18",
    "examTags": ["CK", "GK"],
    "pdfPage": 65,
    "printedPage": 64,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Toán hạng đích trong lệnh <code>sw</code> của đoạn chương trình RISC-V dưới đây có hợp lệ không?",
    "codeBlock": "lui s0, 0x10010\naddi t0, zero, 100\nsw t0, 2(s0)",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "Không, vì nó không có địa chỉ hợp lệ (No, it does not have a valid address)",
        "Có, hoàn toàn hợp lệ (Yes, it is)",
        "Có, nhưng đoạn mã này cần quyền đặc biệt để thực thi",
        "Không, vì nó không nằm trong phân đoạn dữ liệu hợp lệ"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Lệnh <code>lui s0, 0x10010</code> nạp giá trị <code>0x10010000</code> vào thanh ghi <code>s0</code>.</li><li>Lệnh <code>sw t0, 2(s0)</code> yêu cầu lưu một <strong>word 32-bit (4 byte)</strong> vào địa chỉ $\\text{0x10010000} + 2 = \\mathbf{\\text{0x10010002}}$.</li><li>Vì địa chỉ <code>0x10010002</code> tận cùng là 2 (không chia hết cho 4 – vi phạm quy tắc căn chỉnh biên từ nhớ <em>word alignment</em>), nên địa chỉ này không hợp lệ đối với lệnh <code>sw</code>.</li><li><strong>Đáp án đúng: Không, vì nó không có địa chỉ hợp lệ.</strong></li></ul>"
})

add_q({
    "id": "c3-4.7",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài tập 3.7 (PDF 4.7)",
    "source": "Ôn tập Giữa kỳ - Câu 11",
    "examTags": ["GK"],
    "pdfPage": 65,
    "printedPage": 64,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Phát biểu nào sau đây là đúng về thứ tự lưu trữ các byte trong bộ nhớ chính giữa các kiến trúc máy tính?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "ARM dùng little-endian hoặc big-endian tùy phiên bản (Bi-endian)",
        "Intel x86 dùng big-endian",
        "SunSPARC dùng middle-endian",
        "RISC-V dùng big-endian"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Intel x86 và RISC-V dùng <strong>little-endian</strong>; Motorola 680x0 và SunSPARC dùng <strong>big-endian</strong>; còn kiến trúc ARM hỗ trợ cả hai (<strong>little-endian hoặc big-endian tùy cấu hình - Bi-endian</strong>).</li><li><strong>Đáp án đúng: ARM dùng little-endian hoặc big-endian tùy phiên bản.</strong></li></ul>"
})

add_q({
    "id": "c3-4.8",
    "chapter": 3,
    "groupId": "3.2.1",
    "groupTitle": "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ",
    "exerciseCode": "Bài tập 3.8 (PDF 4.8)",
    "source": "Ôn tập Giữa kỳ - Câu 62",
    "examTags": ["GK"],
    "pdfPage": 66,
    "printedPage": 65,
    "relatedTheoryId": "3.1.3",
    "questionType": "multiple",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "(Những) câu lệnh nào sau đây <strong>bị lỗi biên dịch</strong> trong phần mềm mô phỏng RARS? (Chọn nhiều đáp án)<br>1. <code>lui x1, 0x1</code> ; <code>addi x1, x0, 0xFFFFF800</code><br>2. <code>lui x1, 0x1</code> ; <code>addi x1, x0, -2048</code><br>3. <code>li x1, 0x800</code><br>4. <code>lui x1, 0x1</code> ; <code>addi x1, x0, 2048</code><br>5. <code>lui x1, 0x1</code> ; <code>addi x1, x0, 0xFFFF800</code><br>6. <code>lui x1, 0x1</code> ; <code>addi x1, x0, 0x800</code><br>7. <code>addi x1, x0, 0x800</code>",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "1. lui x1, 0x1 ; addi x1, x0, 0xFFFFF800",
        "2. lui x1, 0x1 ; addi x1, x0, -2048",
        "3. li x1, 0x800",
        "4. lui x1, 0x1 ; addi x1, x0, 2048",
        "5. lui x1, 0x1 ; addi x1, x0, 0xFFFF800",
        "6. lui x1, 0x1 ; addi x1, x0, 0x800",
        "7. addi x1, x0, 0x800"
    ],
    "correctIndex": 3,
    "correctIndices": [3, 4, 5, 6],
    "explanation": "<p>Quy tắc kiểm tra lỗi biên dịch lệnh <code>addi</code>: Toán hạng hằng số của <code>addi</code> là số nguyên có dấu 12-bit, chỉ nhận giá trị từ <strong>-2048 đến +2047</strong> (Hexa 32-bit mở rộng dấu: <code>0xFFFFF800</code> đến <code>0x000007FF</code>):</p><ul><li>Lệnh 1 (<code>0xFFFFF800 = -2048</code>) và Lệnh 2 (<code>-2048</code>): Hợp lệ.</li><li>Lệnh 3 (<code>li x1, 0x800</code>): Hợp lệ vì <code>li</code> là lệnh giả, trình dịch tự tách thành <code>lui + addi</code>.</li><li>Lệnh 4 (<code>2048</code>), Lệnh 6 (<code>0x800 = +2048</code>), Lệnh 7 (<code>0x800 = +2048</code>): Vượt quá giới hạn +2047 &rarr; <strong>Lỗi biên dịch</strong>.</li><li>Lệnh 5 (<code>0xFFFF800</code> - chỉ có 4 chữ F): Là số dương $268\\,433\\,408 > 2047$ &rarr; <strong>Lỗi biên dịch</strong>.</li></ul><p><strong>Đáp án đúng: Chọn các ý 4, 5, 6 và 7.</strong></p>"
})

# ==============================================================================
# Nhóm 2: 4.9 -> 4.21
add_q({
    "id": "c3-4.9",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.9 (PDF 4.9)",
    "source": "Đề Giữa kỳ 2024.1 - #4610c2 & Ôn tập Giữa kỳ - Câu 10",
    "examTags": ["GK"],
    "pdfPage": 67,
    "printedPage": 66,
    "relatedTheoryId": "3.1.3",
    "questionType": "multiple",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Những lệnh nào sau đây có thể dùng để <strong>xóa nội dung của thanh ghi s0 về 0</strong> (clear the content of s0)? (Chọn nhiều đáp án)",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "AND s0, s0, zero",
        "XOR s0, s0, s0",
        "XOR s0, s0, zero",
        "AND s0, s0, s0"
    ],
    "correctIndex": 0,
    "correctIndices": [0, 1],
    "explanation": "<ul><li><code>AND s0, s0, zero</code>: Bất kỳ bit nào AND với 0 đều bằng 0 &rarr; $s0 = 0$ (Đúng).</li><li><code>XOR s0, s0, s0</code>: Hai bit giống hệt nhau XOR với nhau đều bằng 0 &rarr; $s0 = 0$ (Đúng).</li><li><code>XOR s0, s0, zero</code> và <code>AND s0, s0, s0</code> đều giữ nguyên giá trị cũ của s0.</li><li><strong>Đáp án đúng: Chọn cả A và B.</strong></li></ul>"
})

add_q({
    "id": "c3-4.10",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.10 (PDF 4.10)",
    "source": "Đề Giữa kỳ 2024.1 - #99ef6 & Ôn tập Giữa kỳ - Câu 25",
    "examTags": ["GK"],
    "pdfPage": 67,
    "printedPage": 66,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đoạn lệnh nào sau đây tương đương với lệnh giả <code>li t0, 0x20241120</code> trong RISC-V?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "lui t0, 0x20241 -> addi t0, t0, 0x120",
        "lui t0, 0x202411 -> ori t0, t0, 0x20",
        "lui t0, 0x2024 -> addi t0, t0, 0x1120",
        "lui t0, 0x2024 -> ori t0, t0, 0x1120"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Hằng số 32-bit <code>0x20241120</code> được tách thành 20 bit cao (5 chữ số Hexa đầu là <code>0x20241</code>) và 12 bit thấp (3 chữ số Hexa cuối là <code>0x120</code>).</li><li>Vì chữ số đầu của 12 bit thấp là <strong>1 (&lt; 8, số dương)</strong> nên không cần cộng 1 vào phần cao.</li><li>Ta dùng <code>lui t0, 0x20241</code> rồi cộng 12 bit thấp bằng <code>addi t0, t0, 0x120</code>.</li><li><strong>Đáp án đúng: lui t0, 0x20241 &rarr; addi t0, t0, 0x120.</strong></li></ul>"
})

add_q({
    "id": "c3-4.11",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.11 (PDF 4.11)",
    "source": "Đề Giữa kỳ 2024.1 - #e10492",
    "examTags": ["GK"],
    "pdfPage": 68,
    "printedPage": 67,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chọn đáp án đúng để thực hiện câu lệnh C sau trong RISC-V: <code>a += 0x12345678;</code> (giả sử biến a được lưu trong thanh ghi s0):",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "lui t0, 0x12345 -> addi t0, t0, 0x678 -> add s0, s0, t0",
        "li t0, 0x12345 -> addi t0, t0, 0x678 -> add s0, s0, t0",
        "lui t0, 0x1234 -> addi t0, t0, 0x5678 -> add s0, s0, t0",
        "lui t0, 0x12345 -> addi t0, t0, 0x678 -> add s0, zero, t0"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ol><li><strong>Bước 1:</strong> Nạp hằng số <code>0x12345678</code> vào thanh ghi tạm <code>t0</code> bằng cặp lệnh <code>lui t0, 0x12345</code> (20 bit cao) và <code>addi t0, t0, 0x678</code> (12 bit thấp, bắt đầu bằng 6 &lt; 8).</li><li><strong>Bước 2:</strong> Cộng dồn vào <code>s0</code> ($a = a + t_0$) bằng <code>add s0, s0, t0</code>.</li></ol><p><strong>Đáp án đúng: lui t0, 0x12345 &rarr; addi t0, t0, 0x678 &rarr; add s0, s0, t0.</strong></p>"
})

add_q({
    "id": "c3-4.12",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.12 (PDF 4.12)",
    "source": "Đề Giữa kỳ 2024.1 - #1b55cf",
    "examTags": ["GK"],
    "pdfPage": 68,
    "printedPage": 67,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của s2 (ví dụ: 0xFFFFF800):",
    "acceptedAnswers": ["0xFFFFF800", "0xfffff800", "FFFFF800", "fffff800"],
    "question": "Cho đoạn mã hợp ngữ RISC-V dưới đây. Hãy cho biết giá trị của thanh ghi <code>s2</code> ở dạng số Hexa sau khi đoạn mã thực hiện xong?",
    "codeBlock": "li s0, 1\nlui s1, 0xFFFFF\nori s1, s1, 2047\nadd s2, s0, s1",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "0xFFFFF800",
        "0xFFFFF7FF",
        "0x00000800",
        "0xFFFFFFFF"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ol><li><code>li s0, 1</code> &rarr; $s0 = \\text{0x00000001}$.</li><li><code>lui s1, 0xFFFFF</code> &rarr; $s1 = \\text{0xFFFFF000}$.</li><li><code>ori s1, s1, 2047</code>: $2047 = \\text{0x7FF}$. Mở rộng 32-bit là <code>0x000007FF</code>. Phép OR: $s1 = \\text{0xFFFFF000} \\mid \\text{0x000007FF} = \\text{0xFFFFF7FF}$.</li><li><code>add s2, s0, s1</code>: $s2 = \\text{0xFFFFF7FF} + 1 = \\mathbf{\\text{0xFFFFF800}}$ (vì $7\\text{FF} + 1 = 800$).</li></ol><p><strong>Đáp số: 0xFFFFF800.</strong></p>"
})

add_q({
    "id": "c3-4.13",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.13 (PDF 4.13)",
    "source": "Đề Cuối kỳ 2024.1 - #d9f3db & Ôn tập Giữa kỳ - Câu 23",
    "examTags": ["CK", "GK"],
    "pdfPage": 69,
    "printedPage": 68,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của s1 (ví dụ: 0x112234FF):",
    "acceptedAnswers": ["0x112234FF", "0x112234ff", "112234FF", "112234ff"],
    "question": "Cho biết nội dung thanh ghi <code>s1</code> viết theo số Hexa sau khi thực hiện đoạn chương trình hợp ngữ RISC-V dưới đây:",
    "codeBlock": "lui s0, 0x11223\nori s0, s0, 0x4AB\nori s1, s0, 0xFF",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "0x112234FF",
        "0x112234AB",
        "0x112230FF",
        "0xFFFFFFFF"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ol><li><code>lui s0, 0x11223</code> &rarr; $s0 = \\text{0x11223000}$.</li><li><code>ori s0, s0, 0x4AB</code>: $s0 = \\text{0x11223000} \\mid \\text{0x000004AB} = \\text{0x112234AB}$.</li><li><code>ori s1, s0, 0xFF</code>: $s1 = \\text{0x112234AB} \\mid \\text{0x000000FF} = \\mathbf{\\text{0x112234FF}}$.</li></ol><p><strong>Đáp số: 0x112234FF.</strong></p>"
})

add_q({
    "id": "c3-4.14a",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.14a (PDF 4.14a)",
    "source": "Đề Cuối kỳ 2022.2 - #585834",
    "examTags": ["CK"],
    "pdfPage": 69,
    "printedPage": 68,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập nội dung s1 dạng Hexa 8 chữ số (ví dụ: 0x000000CD):",
    "acceptedAnswers": ["0x000000CD", "0x000000cd", "000000CD", "000000cd"],
    "question": "Giả sử thanh ghi <code>s0</code> đang có giá trị <code>0x223389CD</code>. Thực hiện lệnh <code>andi s1, s0, 0xFF</code>. Hãy cho biết nội dung thanh ghi <code>s1</code> viết theo số Hexa (8 chữ số)?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0x000000CD",
        "0x223389FF",
        "0x22338900",
        "0xFFFFFFCD"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Hằng số <code>0x0FF</code> mở rộng thành <code>0x000000FF</code>. Phép AND với <code>0x000000FF</code> sẽ xóa 6 chữ số Hexa bên trái về 0 và chỉ giữ lại 2 chữ số Hexa cuối cùng:</p>$$s1 = \\text{0x223389CD} \\;\\&\\; \\text{0x000000FF} = \\mathbf{\\text{0x000000CD}}$$<em>(Lưu ý: Không nhầm lẫn với phép <code>ori</code> ra 0x223389FF).</em>"
})

add_q({
    "id": "c3-4.14b",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.14b (PDF 4.14b)",
    "source": "Đề Giữa kỳ 2023.2 - Đề 2 Câu 1",
    "examTags": ["GK"],
    "pdfPage": 69,
    "printedPage": 68,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Thực hiện đoạn lệnh RISC-V sau: Hãy cho biết nội dung thanh ghi <code>s1</code> và <code>s2</code> dưới dạng số Hexa?",
    "codeBlock": "lui s0, 0x4567C\naddi s0, s0, -802 # s0 = 0x4567BCDE\naddi s1, zero, -16\nand s2, s0, s1",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "s1 = 0xFFFFFFF0 ; s2 = 0x4567BCD0",
        "s1 = 0x00000010 ; s2 = 0x4567BCDE",
        "s1 = 0xFFFFFFF0 ; s2 = 0x0000000E",
        "s1 = 0xFFFFFFE0 ; s2 = 0x4567BCC0"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Thanh ghi <code>s1</code> nhận giá trị $-16$. Đổi $-16$ sang mã bù 2 32-bit: $+16 = \\text{0x00000010} \\implies$ bù 2 là $s1 = \\mathbf{\\text{0xFFFFFFF0}}$.</li><li>Thực hiện <code>and s2, s0, s1</code>: Phép AND với <code>0xFFFFFFF0</code> giữ nguyên 7 chữ số Hexa đầu và xóa chữ số cuối cùng về 0: $$s2 = \\text{0x4567BCDE} \\;\\&\\; \\text{0xFFFFFFF0} = \\mathbf{\\text{0x4567BCD0}}$$</li></ul>"
})

add_q({
    "id": "c3-4.15",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.15 (PDF 4.15)",
    "source": "Đề Giữa kỳ 2024.1 - #5e7591 & Ôn tập Giữa kỳ - Câu 16",
    "examTags": ["GK"],
    "pdfPage": 70,
    "printedPage": 69,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị thập phân của s4 (ví dụ: 141):",
    "acceptedAnswers": ["141"],
    "question": "Giá trị thập phân của thanh ghi <code>s4</code> sau khi thực hiện các lệnh dưới đây là bao nhiêu?",
    "codeBlock": "addi s1, zero, 87\naddi s2, zero, 53\nxor s3, s2, zero\naddi s3, s3, 1\nadd s4, s1, s3",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "141",
        "140",
        "88",
        "54"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>$s1 = 87$.</li><li>$s2 = 53$.</li><li><code>xor s3, s2, zero</code> &rarr; Số nào XOR với 0 cũng bằng chính nó &rarr; $s3 = 53$.</li><li><code>addi s3, s3, 1</code> &rarr; $s3 = 53 + 1 = 54$.</li><li><code>add s4, s1, s3</code> &rarr; $s4 = 87 + 54 = \\mathbf{141}$.</li><li><strong>Đáp số: 141.</strong></li></ul>"
})

add_q({
    "id": "c3-4.16",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.16 (PDF 4.16)",
    "source": "Đề Cuối kỳ 2022.2 - #7a3120, 2024.1 - #25c9d6 & Ôn tập Giữa kỳ - Câu 52",
    "examTags": ["CK", "GK"],
    "pdfPage": 70,
    "printedPage": 69,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho đoạn chương trình hợp ngữ RISC-V sau: Giá trị của <code>t2, t3, t4</code> là gì sau khi thực hiện?",
    "codeBlock": "addi t0, zero, 6\naddi t1, zero, 12\nand t2, t0, t1\nor t3, t0, t1\nxor t4, t0, t1",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "t2 = 4, t3 = 14, t4 = 10",
        "t2 = 4, t3 = 14, t4 = 5",
        "t2 = 14, t3 = 4, t4 = 10",
        "t2 = 14, t3 = 4, t4 = 5"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>$t0 = 6 = 0110_{(2)}$ và $t1 = 12 = 1100_{(2)}$.</li><li>$t2 = 0110\\text{ AND } 1100 = 0100_{(2)} = \\mathbf{4}$.</li><li>$t3 = 0110\\text{ OR } 1100 = 1110_{(2)} = 8 + 4 + 2 = \\mathbf{14}$.</li><li>$t4 = 0110\\text{ XOR } 1100 = 1010_{(2)} = 8 + 2 = \\mathbf{10}$.</li><li><strong>Đáp án đúng: t2 = 4, t3 = 14, t4 = 10.</strong></li></ul>"
})

add_q({
    "id": "c3-4.17",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.17 (PDF 4.17)",
    "source": "Đề Cuối kỳ 2022.2 - #5070f9 & Ôn tập Cuối kỳ P2 - Câu 8",
    "examTags": ["CK"],
    "pdfPage": 71,
    "printedPage": 70,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho nội dung các thanh ghi: $t0 (x5) = \\text{0x5A6B7C8D}$, $t1 (x6) = \\text{0x000FFF00}$. Hãy viết theo số Hexa nội dung các thanh ghi $t2 (x7)$ và $t3 (x28)$ sau khi thực hiện đoạn lệnh sau:",
    "codeBlock": "xor x7, x5, x6\nxor x28, x7, x6",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "t2 = 0x5A64838D ; t3 = 0x5A6B7C8D",
        "t2 = 0x5A6B7C8D ; t3 = 0x5A64838D",
        "t2 = 0x000FFF00 ; t3 = 0x5A6B7C8D",
        "t2 = 0x5A64838D ; t3 = 0x00000000"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li><strong>Quy tắc nhanh XOR với F:</strong> XOR với 0 giữ nguyên, XOR với F (=15) thì lấy $15$ trừ chữ số đó (đảo bit).</li><li>Tính $x7 (t2)$: Mặt nạ <code>0x000FFF00</code> có 3 chữ F đảo 3 chữ số giữa $B(11) \\to 4, 7 \\to 8, C(12) \\to 3$ &rarr; $x7 = \\mathbf{\\text{0x5A64838D}}$.</li><li>Tính $x28 (t3)$: Lấy kết quả $x7$ XOR lại với chính $x6$ sẽ đảo ngược về giá trị ban đầu: $(x5 \\oplus x6) \\oplus x6 = x5 = \\mathbf{\\text{0x5A6B7C8D}}$.</li></ul>"
})

add_q({
    "id": "c3-4.18a",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.18a (PDF 4.18a)",
    "source": "Đề Cuối kỳ 2020.2",
    "examTags": ["CK"],
    "pdfPage": 72,
    "printedPage": 71,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của s2 (ví dụ: 0xEDCBABCD):",
    "acceptedAnswers": ["0xEDCBABCD", "0xedcbabcd", "EDCBABCD", "edcbabcd"],
    "question": "Cho $s0 = \\text{0x1234ABCD}$ và $s1 = \\text{0xFFFF0000}$. Tìm giá trị của thanh ghi <code>s2</code> sau lệnh: <code>xor s2, s0, s1</code>?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0xEDCBABCD",
        "0x1234ABCD",
        "0xFFFFABCD",
        "0xEDCB0000"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>XOR với <code>0xFFFF0000</code> sẽ đảo 4 chữ số Hexa đầu (1234) bằng cách lấy 15 trừ đi từng chữ số và giữ nguyên 4 chữ số cuối (ABCD):</p><ul><li>$15 - 1 = 14\\text{ (E)}$; $15 - 2 = 13\\text{ (D)}$; $15 - 3 = 12\\text{ (C)}$; $15 - 4 = 11\\text{ (B)}$.</li><li>Kết quả: $s2 = \\mathbf{\\text{0xEDCBABCD}}$.</li></ul>"
})

add_q({
    "id": "c3-4.18b",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.18b (PDF 4.18b)",
    "source": "Đề Giữa kỳ 2023.2 - Đề 2 Câu 4",
    "examTags": ["GK"],
    "pdfPage": 72,
    "printedPage": 71,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho nội dung thanh ghi $t0 = \\text{0xA1B2C3D4}$, hãy viết một lệnh logic hợp ngữ để biến đổi nội dung $t0$ thành $\\text{0x286CB0F5}$ (giả sử thanh ghi mặt nạ $t1 = \\text{0x89DE7321}$).",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "xor t0, t0, t1",
        "and t0, t0, t1",
        "or t0, t0, t1",
        "xori t0, t0, -1"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Muốn biến số A thành số B bất kỳ chỉ bằng 1 phép logic, ta dùng phép XOR với mặt nạ $M = A \\oplus B$:</p><p>$$M = \\text{0xA1B2C3D4} \\oplus \\text{0x286CB0F5} = \\text{0x89DE7321}$$</p><p>Với $t1 = \\text{0x89DE7321}$, câu lệnh cần thực hiện là: <strong><code>xor t0, t0, t1</code></strong>.</p>"
})

add_q({
    "id": "c3-4.19",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.19 (PDF 4.19)",
    "source": "Đề Cuối kỳ 2024.1 - #2a8241 & Ôn tập Giữa kỳ - Câu 39",
    "examTags": ["CK", "GK"],
    "pdfPage": 72,
    "printedPage": 71,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của t1 (ví dụ: 0x00000246):",
    "acceptedAnswers": ["0x00000246", "0x246", "00000246"],
    "question": "Cho đoạn chương trình hợp ngữ RISC-V sau: Giá trị của <code>t1</code> bằng bao nhiêu sau khi thực hiện đoạn chương trình này?",
    "codeBlock": "addi t0, x0, 0x1234\nsrli t1, t0, 3",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "0x00000246",
        "0x000091A0",
        "0x01234000",
        "0x00000001"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>$t0 = \\text{0x00001234} = 0001\\;0010\\;0011\\;0100_{(2)}$.</li><li><code>srli t1, t0, 3</code> dịch phải logic 3 bit (bỏ 3 bit cuối 100 và thêm 3 bit 000 vào đầu): $$t1 = 0000\\;0010\\;0100\\;0110_{(2)} = \\mathbf{\\text{0x00000246}}$$</li><li>Hoặc tính nhanh: Dịch phải 3 bit là chia lấy nguyên cho $2^3 = 8$: $4660 \\div 8 = 582 = \\text{0x246}$.</li><li><strong>Đáp án đúng: 0x00000246.</strong></li></ul>"
})

add_q({
    "id": "c3-4.20a",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.20a (PDF 4.20a)",
    "source": "Đề Cuối kỳ 2022.2 - #75a1b2",
    "examTags": ["CK"],
    "pdfPage": 73,
    "printedPage": 72,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của t1 (ví dụ: 0x00390000):",
    "acceptedAnswers": ["0x00390000", "0x390000", "00390000"],
    "question": "Cho $t0 = \\text{0x61728394}$. Thực hiện chuỗi lệnh dịch bit sau: Hãy viết theo số Hexa (8 chữ số) nội dung thanh ghi <code>t1</code>?",
    "codeBlock": "srli t1, t0, 4\nslli t1, t1, 24\nsrli t1, t1, 8",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "0x00390000",
        "0x39000000",
        "0x06172839",
        "0x00003900"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p><strong>Mẹo cực nhanh:</strong> Dịch 4 bit = dịch 1 chữ Hexa!</p><ol><li><code>srli t1, t0, 4</code> (dịch phải 1 chữ Hexa): $t1 = \\text{0x06172839}$.</li><li><code>slli t1, t1, 24</code> (dịch trái 6 chữ Hexa): Đẩy 2 chữ cuối <code>39</code> lên đầu &rarr; $t1 = \\text{0x39000000}$.</li><li><code>srli t1, t1, 8</code> (dịch phải 2 chữ Hexa): Đẩy lùi sang phải 2 chữ &rarr; $t1 = \\mathbf{\\text{0x00390000}}$.</li></ol><p><strong>Đáp số: 0x00390000.</strong></p>"
})

add_q({
    "id": "c3-4.20b",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.20b (PDF 4.20b)",
    "source": "Đề Cuối kỳ 2024.1 - #b68d32",
    "examTags": ["CK"],
    "pdfPage": 73,
    "printedPage": 72,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của t1 (ví dụ: 0x0A3B0000):",
    "acceptedAnswers": ["0x0A3B0000", "0x0a3b0000", "0A3B0000", "0a3b0000"],
    "question": "Cho $t0 = \\text{0x8192A3B4}$. Thực hiện chuỗi lệnh: Hãy viết theo số Hexa (8 chữ số) nội dung thanh ghi <code>t1</code>?",
    "codeBlock": "srli t1, t0, 4\nslli t1, t1, 20\nsrli t1, t1, 4",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "0x0A3B0000",
        "0xA3B00000",
        "0x08192A3B",
        "0x00A3B000"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ol><li><code>srli t1, t0, 4</code>: $t1 = \\text{0x08192A3B}$.</li><li><code>slli t1, t1, 20</code> (dịch trái 5 chữ Hexa): Đẩy 3 chữ cuối <code>A3B</code> lên đầu &rarr; $t1 = \\text{0xA3B00000}$.</li><li><code>srli t1, t1, 4</code> (dịch phải 1 chữ Hexa): $t1 = \\mathbf{\\text{0x0A3B0000}}$.</li></ol><p><strong>Đáp số: 0x0A3B0000.</strong></p>"
})

add_q({
    "id": "c3-4.20c",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.20c (PDF 4.20c)",
    "source": "Ôn tập Giữa kỳ - Câu 30",
    "examTags": ["GK"],
    "pdfPage": 73,
    "printedPage": 72,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của t1 (ví dụ: 0x003B0000):",
    "acceptedAnswers": ["0x003B0000", "0x003b0000", "003B0000", "003b0000"],
    "question": "Cho $t0 = \\text{0x8192A3B4}$. Thực hiện chuỗi lệnh (chú ý lệnh <code>srai</code>): Hãy viết theo số Hexa (8 chữ số) nội dung thanh ghi <code>t1</code>?",
    "codeBlock": "srai t1, t0, 4\nslli t1, t1, 24\nsrli t1, t1, 8",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "0x003B0000",
        "0x3B000000",
        "0xF8192A3B",
        "0x00003B00"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ol><li><code>srai t1, t0, 4</code>: dịch phải số học 1 chữ Hexa, vì chữ đầu là 8 (&ge; 8 là số âm) nên chèn chữ F vào đầu &rarr; $t1 = \\text{0xF8192A3B}$.</li><li><code>slli t1, t1, 24</code>: dịch trái 6 chữ Hexa, đẩy chữ <code>3B</code> lên đầu &rarr; $t1 = \\text{0x3B000000}$.</li><li><code>srli t1, t1, 8</code>: dịch phải logic 2 chữ Hexa &rarr; $t1 = \\mathbf{\\text{0x003B0000}}$.</li></ol><p><strong>Đáp số: 0x003B0000.</strong></p>"
})

add_q({
    "id": "c3-4.21a",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.21a (PDF 4.21a)",
    "source": "Đề Giữa kỳ 2023.2 - Đề 1 Câu 4",
    "examTags": ["GK"],
    "pdfPage": 74,
    "printedPage": 73,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho $t0 = \\text{0xAAAAAAAA}, t1 = \\text{0x00FF0000}$. Tìm giá trị của <code>t2, t3</code> sau 2 lệnh: <code>srli t2, t0, 3</code> và <code>or t3, t2, t1</code>?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "t2 = 0x15555555 ; t3 = 0x15FF5555",
        "t2 = 0x55555555 ; t3 = 0x55FF5555",
        "t2 = 0x15555555 ; t3 = 0x00FF0000",
        "t2 = 0x2AAAAAAA ; t3 = 0x2AFFAAAA"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>$A = 1010_{(2)}$. Dịch phải logic 3 bit ghép 000 vào đầu thành <code>0001 0101...</code> = $t2 = \\mathbf{\\text{0x15555555}}$.</li><li>Thực hiện <code>or t3, t2, t1</code> với $t1 = \\text{0x00FF0000}$: Bật 2 chữ số Hexa thứ 3 và 4 thành FF &rarr; $t3 = \\mathbf{\\text{0x15FF5555}}$.</li></ul>"
})

add_q({
    "id": "c3-4.21b",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.21b (PDF 4.21b)",
    "source": "Đề Cuối kỳ 2020.2",
    "examTags": ["CK"],
    "pdfPage": 74,
    "printedPage": 73,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của t3 (ví dụ: 0x0000AA80):",
    "acceptedAnswers": ["0x0000AA80", "0x0000aa80", "0000AA80"],
    "question": "Cho $t0 = \\text{0xAAAAAAAA}, t1 = \\text{0x0000FFC0}$. Tìm giá trị của thanh ghi <code>t3</code> sau lệnh: <code>and t3, t0, t1</code>?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0x0000AA80",
        "0x0000FFAA",
        "0x0000AA00",
        "0xAAAA0000"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>4 chữ Hexa đầu AND với 0000 ra 0000.</li><li>2 chữ tiếp theo AND với FF giữ nguyên là AA.</li><li>Chữ thứ 7: $A (1010_2) \\;\\&\\; C (1100_2) = 1000_2 = 8$. Chữ cuối AND với 0 ra 0.</li><li>Vậy $t3 = \\mathbf{\\text{0x0000AA80}}$.</li></ul>"
})

add_q({
    "id": "c3-4.21c",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.21c (PDF 4.21c)",
    "source": "Đề Cuối kỳ 2020.2",
    "examTags": ["CK"],
    "pdfPage": 74,
    "printedPage": 73,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Lệnh nào sau đây thay đổi <code>t0</code> từ <code>0x000000FF</code> thành <code>0x00000FF0</code>?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "slli t0, t0, 4",
        "srli t0, t0, 4",
        "slli t0, t0, 1",
        "ori t0, t0, 0xF0"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Để dịch số Hexa sang trái 1 chữ số (từ <code>0x000000FF</code> thành <code>0x00000FF0</code>), ta cần dịch trái <strong>4 bit</strong> nhị phân &rarr; Lệnh cần dùng là: <strong><code>slli t0, t0, 4</code></strong>.</p>"
})

add_q({
    "id": "c3-4.21d",
    "chapter": 3,
    "groupId": "3.2.2",
    "groupTitle": "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi",
    "exerciseCode": "Bài tập 3.21d (PDF 4.21d)",
    "source": "Đề Cuối kỳ 2021.2 - B8 Câu 2.2",
    "examTags": ["CK"],
    "pdfPage": 74,
    "printedPage": 73,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của t2 (ví dụ: 0xFEFFFEFE):",
    "acceptedAnswers": ["0xFEFFFEFE", "0xfefffefe", "FEFFFEFE"],
    "question": "Cho $t0 = \\text{0xBEADFEED}$ và $t1 = \\text{0xDEADFADE}$. Tìm <code>t2</code> sau 2 lệnh: <code>slli t2, t0, 4</code> và <code>or t2, t2, t1</code>?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0xFEFFFEFE",
        "0xDEADFADE",
        "0xBEADFEED",
        "0xFFFFFFFF"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li><code>slli t2, t0, 4</code>: Dịch trái 1 chữ Hexa được $t2 = \\text{0xEADFEED0}$.</li><li><code>or t2, t2, t1</code>: Thực hiện OR giữa <code>0xEADFEED0</code> và <code>0xDEADFADE</code> từng chữ số Hexa ra $\\mathbf{\\text{0xFEFFFEFE}}$.</li></ul>"
})

# ==============================================================================
# Ghi tạm kiểm tra
# Tiếp tục thêm các nhóm 3 -> 8...
# Để đảm bảo code sạch, tạo các nhóm kế tiếp trong cùng file
print("Loaded Chapter 3 first part. Now adding Nhóm 3 -> Nhóm 8...")

# Nhóm 3: 4.22 -> 4.24
add_q({
    "id": "c3-4.22",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh so sánh (slt, sltu, blt, bltu) và Rẽ nhánh cơ bản",
    "exerciseCode": "Bài tập 3.22 (PDF 4.22)",
    "source": "Đề Cuối kỳ 2022.2 - #09f26f & Cuối kỳ 2024.1 - #b46119",
    "examTags": ["CK"],
    "pdfPage": 75,
    "printedPage": 74,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho đoạn chương trình hợp ngữ RISC-V sau: Hãy cho biết nội dung <code>t0</code> và <code>t1</code> sau khi thực hiện?",
    "codeBlock": "addi s0, zero, 50\naddi s1, zero, -51\nslt t0, s0, s1\nsltu t1, s0, s1",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "t0 = 0 và t1 = 1",
        "t0 = 1 và t1 = 1",
        "t0 = 1 và t1 = 0",
        "t0 = 0 và t1 = 0"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>$s0 = +50$ và $s1 = -51$ (mã bù 2: <code>0xFFFFFFCD</code>).</li><li><code>slt t0, s0, s1</code> (so sánh có dấu): $+50 < -51$ là <strong>Sai</strong> &rarr; $t0 = 0$.</li><li><code>sltu t1, s0, s1</code> (so sánh không dấu): khi coi là không dấu, <code>0xFFFFFFCD</code> là số dương cực lớn $\\approx 4.29\\text{ tỷ}$. Vì $50 < 4.29\\text{ tỷ}$ là <strong>Đúng</strong> &rarr; $t1 = 1$.</li><li><strong>Đáp án đúng: t0 = 0 và t1 = 1.</strong></li></ul>"
})

add_q({
    "id": "c3-4.23",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh so sánh (slt, sltu, blt, bltu) và Rẽ nhánh cơ bản",
    "exerciseCode": "Bài tập 3.23 (PDF 4.23)",
    "source": "Đề Cuối kỳ 2021.2 - Mã đề B8, Câu 2.1",
    "examTags": ["CK"],
    "pdfPage": 76,
    "printedPage": 75,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho câu lệnh hợp ngữ: <code>slti t2, t0, X</code>. Giả sử thanh ghi $t0$ có giá trị <code>0xAD100002</code>. Với những giá trị nào của hằng số $X$ thì thanh ghi $t2$ sẽ có giá trị bằng 1?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "Với mọi giá trị hợp lệ của hằng số 12-bit có dấu X ∈ [-2048, +2047]",
        "Chỉ khi X > 0",
        "Chỉ khi X < 0",
        "Không có giá trị nào của X thỏa mãn"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Lệnh <code>slti</code> so sánh có dấu giữa $t0$ với hằng số $X$ (12-bit có dấu trong đoạn $[-2048, +2047]$).</li><li>Xét $t0 = \\text{0xAD100002}$: Chữ số đầu tiên $A = 1010_{(2)}$ có bit dấu bằng 1, nên $t0$ là số âm rất nhỏ ($\\approx -1.39 \\times 10^9$), luôn nhỏ hơn $-2048$.</li><li>Do đó, với mọi giá trị hợp lệ của $X \\in [-2048, +2047]$, điều kiện $t0 < X$ luôn luôn đúng &rarr; $t2 = 1$.</li><li><strong>Đáp án đúng: Với mọi giá trị hợp lệ của hằng số 12-bit có dấu X.</strong></li></ul>"
})

add_q({
    "id": "c3-4.24a",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh so sánh (slt, sltu, blt, bltu) và Rẽ nhánh cơ bản",
    "exerciseCode": "Bài tập 3.24a (PDF 4.24a)",
    "source": "Ôn tập Giữa kỳ - Câu 13",
    "examTags": ["GK"],
    "pdfPage": 76,
    "printedPage": 75,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị x24 (ví dụ: 11):",
    "acceptedAnswers": ["11"],
    "question": "Cho $x22 = 10, x23 = 5, x24 = 0$. Chạy đoạn mã sau: Tìm giá trị của thanh ghi <code>x24</code>?",
    "codeBlock": "slt x24, x22, x23\nbne x24, x0, L1\naddi x24, x24, 10\nL1: addi x24, x24, 1",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "11",
        "10",
        "1",
        "0"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>$10 < 5$ là Sai &rarr; $x24 = 0$.</li><li><code>bne x24, x0, L1</code> không nhảy vì $x24 == 0$.</li><li>Chạy lệnh kế tiếp: $x24 = 0 + 10 = 10$.</li><li>Trôi tiếp xuống nhãn <code>L1</code>: $x24 = 10 + 1 = \\mathbf{11}$.</li></ul>"
})

add_q({
    "id": "c3-4.24b",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh so sánh (slt, sltu, blt, bltu) và Rẽ nhánh cơ bản",
    "exerciseCode": "Bài tập 3.24b (PDF 4.24b)",
    "source": "Ôn tập Giữa kỳ - Câu 38",
    "examTags": ["GK"],
    "pdfPage": 76,
    "printedPage": 75,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị x7 (ví dụ: 151):",
    "acceptedAnswers": ["151"],
    "question": "Cho $x5 = 10, x6 = 10$. Chạy đoạn mã sau: Tìm giá trị của thanh ghi <code>x7</code>?",
    "codeBlock": "addi x7, x0, 100\nbne x5, x6, Skip\naddi x7, x7, 50\nSkip: addi x7, x7, 1",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "151",
        "101",
        "150",
        "100"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>$x5 == x6$ ($10 == 10$) nên lệnh <code>bne</code> không nhảy.</li><li>$x7$ được tính tuần tự: $x7 = 100 + 50 + 1 = \\mathbf{151}$.</li></ul>"
})

add_q({
    "id": "c3-4.24c",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh so sánh (slt, sltu, blt, bltu) và Rẽ nhánh cơ bản",
    "exerciseCode": "Bài tập 3.24c (PDF 4.24c)",
    "source": "Ôn tập Giữa kỳ - Câu 20",
    "examTags": ["GK"],
    "pdfPage": 76,
    "printedPage": 75,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị x12 (ví dụ: 26):",
    "acceptedAnswers": ["26"],
    "question": "Cho $x10 = \\text{0xFFFFFFF0} (-16)$ và $x11 = 5$. Chạy đoạn mã sau: Tìm giá trị của thanh ghi <code>x12</code>?",
    "codeBlock": "addi x12, x0, 20\nblt x10, x11, TakeBranch\naddi x12, x12, 10\nj Done\nTakeBranch: addi x12, x12, 5\nDone: addi x12, x12, 1",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "26",
        "31",
        "25",
        "36"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Lệnh <code>blt</code> so sánh có dấu: $-16 < 5$ là <strong>Đúng</strong> &rarr; Nhảy tới <code>TakeBranch</code>.</li><li>Tại <code>TakeBranch</code>: $x12 = 20 + 5 = 25$.</li><li>Xuống <code>Done</code>: $x12 = 25 + 1 = \\mathbf{26}$.</li></ul>"
})

add_q({
    "id": "c3-4.24d",
    "chapter": 3,
    "groupId": "3.2.3",
    "groupTitle": "Nhóm 3: Lệnh so sánh (slt, sltu, blt, bltu) và Rẽ nhánh cơ bản",
    "exerciseCode": "Bài tập 3.24d (PDF 4.24d)",
    "source": "Ôn tập Giữa kỳ - Câu 42",
    "examTags": ["GK"],
    "pdfPage": 76,
    "printedPage": 75,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị x13 (ví dụ: 31):",
    "acceptedAnswers": ["31"],
    "question": "Cũng với $x10 = \\text{0xFFFFFFF0}$ và $x11 = 5$, nhưng dùng lệnh <strong>không dấu</strong> <code>bltu</code>. Tìm giá trị cuối cùng của <code>x13</code>?",
    "codeBlock": "addi x13, x0, 20\nbltu x10, x11, TakeBranchU\naddi x13, x13, 10\nj DoneU\nTakeBranchU: addi x13, x13, 5\nDoneU: addi x13, x13, 1",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "31",
        "26",
        "25",
        "30"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li><code>bltu</code> so sánh không dấu: <code>0xFFFFFFF0</code> là số dương cực lớn $\\approx 4.29\\text{ tỷ} > 5$, nên điều kiện $x10 < x11$ là <strong>Sai</strong> &rarr; Không nhảy.</li><li>Thực hiện tiếp: $x13 = 20 + 10 = 30$.</li><li>Lệnh <code>j DoneU</code> nhảy tới <code>DoneU</code>: $x13 = 30 + 1 = \\mathbf{31}$.</li></ul>"
})

# Nhóm 4: 4.25 -> 4.32
add_q({
    "id": "c3-4.25",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, sw) theo thứ tự Little-Endian",
    "exerciseCode": "Bài tập 3.25 (PDF 4.25)",
    "source": "Đề Cuối kỳ 2022.2 - #fe0e91 & Ôn tập Cuối kỳ P2 - Câu 9",
    "examTags": ["CK"],
    "pdfPage": 77,
    "printedPage": 76,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho vùng nhớ dữ liệu lưu trữ theo thứ tự đầu nhỏ (Little-Endian) như bảng dưới. Giả thiết $s6 (x16) = \\text{0x10012000}$.<table class='data-table'><tr><th>Dữ liệu (Word 32-bit)</th><th>Địa chỉ</th></tr><tr><td>0x12345678</td><td>0x10012000</td></tr><tr><td>0xA1B2C3D4</td><td>0x10012004</td></tr><tr><td>0x11223344</td><td>0x10012008</td></tr><tr><td>0xAABBCCDD</td><td>0x1001200C</td></tr><tr><td>0x66778899</td><td>0x10012010</td></tr></table>Hãy cho biết nội dung các thanh ghi <code>t0 (x5)</code> và <code>t1 (x6)</code> dưới dạng số Hexa sau khi chạy:<br><code>lw t0, 8(s6)</code><br><code>lb t1, 14(s6)</code>",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "t0 = 0x11223344 ; t1 = 0xFFFFFFBB",
        "t0 = 0x11223344 ; t1 = 0x000000BB",
        "t0 = 0xAABBCCDD ; t1 = 0xFFFFFFCC",
        "t0 = 0x12345678 ; t1 = 0xFFFFFFAA"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ol><li><strong>Lệnh <code>lw t0, 8(s6)</code>:</strong> Địa chỉ đọc là $\\text{0x10012000} + 8 = \\text{0x10012008}$. Tra bảng tại địa chỉ này là word <strong><code>0x11223344</code></strong> &rarr; $t0 = \\text{0x11223344}$.</li><li><strong>Lệnh <code>lb t1, 14(s6)</code>:</strong> Địa chỉ đọc là $\\text{0x10012000} + 14 = \\text{0x1001200E}$ (nằm trong word tại <code>0x1001200C</code>: <code>0xAABBCCDD</code> ở độ lệch +2). Theo Little-Endian: +0 là DD, +1 là CC, +2 là <strong>BB</strong>, +3 là AA. Byte đọc lên là <code>0xBB</code>. Vì chữ B (&ge; 8) là số âm nên <code>lb</code> mở rộng dấu thành <strong><code>0xFFFFFFBB</code></strong>.</li></ol>"
})

add_q({
    "id": "c3-4.26",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, sw) theo thứ tự Little-Endian",
    "exerciseCode": "Bài tập 3.26 (PDF 4.26)",
    "source": "Đề Giữa kỳ 2023.2 - Đề 2, Câu 2",
    "examTags": ["GK"],
    "pdfPage": 78,
    "printedPage": 77,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho vùng nhớ Little-Endian như bảng dưới, với $s3 = \\text{0x10012010}$. Tìm nội dung <code>t0, t1</code> dạng Hexa sau khi chạy: <code>lw t0, 20(s3)</code> và <code>lh t1, 14(s3)</code>?<table class='data-table'><tr><th>Địa chỉ</th><th>Dữ liệu</th><th>Địa chỉ</th><th>Dữ liệu</th></tr><tr><td>0x10012010</td><td>0x2F3B4A5B</td><td>0x10012020</td><td>0xC2D1E0F1</td></tr><tr><td>0x10012014</td><td>0x6E7D8C9B</td><td>0x10012024</td><td>0xE2D3C4B5</td></tr><tr><td>0x10012018</td><td>0xAAB9C8D7</td><td>0x10012028</td><td>0xA6978879</td></tr><tr><td>0x1001201C</td><td>0xE6B5A4B3</td><td>0x1001202C</td><td>0x6A5B4C3B</td></tr></table>",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "t0 = 0xE2D3C4B5 ; t1 = 0xFFFFE6B5",
        "t0 = 0xC2D1E0F1 ; t1 = 0x0000E6B5",
        "t0 = 0xE2D3C4B5 ; t1 = 0xFFFFB5E6",
        "t0 = 0xE6B5A4B3 ; t1 = 0x0000A4B3"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ol><li><code>lw t0, 20(s3)</code>: $20 = \\text{0x14}$. Địa chỉ: $\\text{0x10012010} + \\text{0x14} = \\text{0x10012024}$. Tra bảng: $t0 = \\mathbf{\\text{0xE2D3C4B5}}$.</li><li><code>lh t1, 14(s3)</code>: $14 = 12 + 2 = \\text{0x0C} + 2$. Word nằm ở $\\text{0x10012010} + \\text{0x0C} = \\text{0x1001201C}$ (giá trị <code>0xE6B5A4B3</code>). 2 byte ở độ lệch +2, +3 là <code>E6B5</code>. Vì E là số âm nên <code>lh</code> mở rộng dấu thành $\\mathbf{\\text{0xFFFFE6B5}}$.</li></ol>"
})

add_q({
    "id": "c3-4.27a",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, sw) theo thứ tự Little-Endian",
    "exerciseCode": "Bài tập 3.27a (PDF 4.27a)",
    "source": "Đề Cuối kỳ 2023.1 - #d4c0fb & Ôn tập Giữa kỳ - Câu 54",
    "examTags": ["CK", "GK"],
    "pdfPage": 79,
    "printedPage": 78,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của s1 (ví dụ: 0x00006f5e):",
    "acceptedAnswers": ["0x00006f5e", "0x00006F5E", "00006f5e", "00006F5E"],
    "question": "Cho các byte nhớ: <code>0x10010000: 1a, 0x10010001: 2b, 0x10010002: 3c, 0x10010003: 4d, 0x10010004: 5e, 0x10010005: 6f</code>. Tìm giá trị của thanh ghi <code>s1</code> sau khi chạy:<br><code>lui t0, 0x10010</code> &rarr; <code>addi t0, t0, 2</code> &rarr; <code>lh s1, 2(t0)</code>?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0x00006f5e",
        "0x00005e6f",
        "0x00004d3c",
        "0xFFFF6f5e"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>$t0 = \\text{0x10010002}$.</li><li><code>lh s1, 2(t0)</code> đọc 1 halfword (2 byte) tại địa chỉ $\\text{0x10010002} + 2 = \\text{0x10010004}$ (gồm byte <code>0x5e</code> tại 04 và <code>0x6f</code> tại 05).</li><li>Theo Little-Endian: byte ở địa chỉ nhỏ (5e) đứng bên phải, byte ở địa chỉ lớn (6f) đứng bên trái &rarr; <code>0x6f5e</code>.</li><li>Vì 6 &lt; 8 (số dương), mở rộng dấu thành <strong><code>0x00006f5e</code></strong>.</li></ul>"
})

add_q({
    "id": "c3-4.28",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, sw) theo thứ tự Little-Endian",
    "exerciseCode": "Bài tập 3.28 (PDF 4.28)",
    "source": "Đề Cuối kỳ 2022.2 - #ad4a6e",
    "examTags": ["CK"],
    "pdfPage": 80,
    "printedPage": 79,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị byte Hexa (ví dụ: 0x33):",
    "acceptedAnswers": ["0x33", "33"],
    "question": "Mảng các số nguyên 32-bit A được lưu trữ tại địa chỉ cơ sở <code>0x10012500</code> theo Little-Endian. Cho biết phần tử $A[1] = \\text{0x22334455}$. Hãy chỉ ra nội dung byte nhớ có địa chỉ <code>0x10012506</code>?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0x33",
        "0x22",
        "0x44",
        "0x55"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Phần tử $A[1]$ bắt đầu tại địa chỉ $\\text{0x10012500} + 4 = \\text{0x10012504}$.</li><li>Theo Little-Endian, 4 byte của $A[1] = \\text{0x22334455}$ phân bố như sau:<br>• <code>0x10012504</code> (+0): <code>0x55</code><br>• <code>0x10012505</code> (+1): <code>0x44</code><br>• <code>0x10012506</code> (+2): <strong><code>0x33</code></strong><br>• <code>0x10012507</code> (+3): <code>0x22</code></li><li><strong>Đáp án đúng: 0x33.</strong></li></ul>"
})

add_q({
    "id": "c3-4.29",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, sw) theo thứ tự Little-Endian",
    "exerciseCode": "Bài tập 3.29 (PDF 4.29)",
    "source": "Đề Giữa kỳ 2023.2 - Đề 1, Câu 3",
    "examTags": ["GK"],
    "pdfPage": 80,
    "printedPage": 79,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của s1 (ví dụ: 0xFFFFFFC2):",
    "acceptedAnswers": ["0xFFFFFFC2", "0xffffffc2", "FFFFFFC2"],
    "question": "Cho biết bộ nhớ lưu theo Little-Endian. Giả sử $s6$ chứa địa chỉ một ngăn nhớ. Hãy chỉ ra nội dung của thanh ghi <code>s1</code> theo số Hexa sau khi thực hiện đoạn chương trình sau:",
    "codeBlock": "lui s0, 0x1B32C\naddi s0, s0, 0x2E5 # s0 = 0x1B32C2E5\nsw s0, 0(s6)\nlb s1, 1(s6)",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "0xFFFFFFC2",
        "0x000000C2",
        "0x000000E5",
        "0x00000032"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>$s0 = \\text{0x1B32C2E5}$. Lệnh <code>sw s0, 0(s6)</code> lưu ra RAM: +0 là <code>E5</code>, +1 là <code>C2</code>, +2 là <code>32</code>, +3 là <code>1B</code>.</li><li>Lệnh <code>lb s1, 1(s6)</code> đọc byte tại độ lệch +1 là <code>0xC2</code>.</li><li>Vì chữ $C = 1100_{(2)}$ có bit dấu bằng 1 (số âm), lệnh <code>lb</code> mở rộng dấu thành <strong><code>0xFFFFFFC2</code></strong>.</li></ul>"
})

add_q({
    "id": "c3-4.30a",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, sw) theo thứ tự Little-Endian",
    "exerciseCode": "Bài tập 3.30a (PDF 4.30a)",
    "source": "Đề Giữa kỳ 2024.1 - #f5f091",
    "examTags": ["GK"],
    "pdfPage": 81,
    "printedPage": 80,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của s0 (ví dụ: 0xffffffe8):",
    "acceptedAnswers": ["0xffffffe8", "0xFFFFFFE8", "ffffffe8"],
    "question": "Giá trị của thanh ghi <code>s0</code> sau khi thực thi đoạn mã sau là gì?",
    "codeBlock": ".data\nx: .byte -24\n.text\nla t0, x\nlb s0, 0(t0)",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "0xffffffe8",
        "0x000000e8",
        "0xffffffe7",
        "0x00000018"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Lệnh <code>lb</code> nạp giá trị $-24$ vào thanh ghi 32-bit và mở rộng dấu thành số nguyên 32-bit có dấu $-24$:</p><p>$+24 = \\text{0x00000018} \\implies$ Bù 2 là <strong><code>0xffffffe8</code></strong>.</p>"
})

add_q({
    "id": "c3-4.30b",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, sw) theo thứ tự Little-Endian",
    "exerciseCode": "Bài tập 3.30b (PDF 4.30b)",
    "source": "Đề Giữa kỳ 2024.1 - #cd0189",
    "examTags": ["GK"],
    "pdfPage": 81,
    "printedPage": 80,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị Hexa của s2 (ví dụ: 0x000000d0):",
    "acceptedAnswers": ["0x000000d0", "0x000000D0", "000000d0"],
    "question": "Tìm giá trị Hexa lưu trong thanh ghi <code>s2</code> sau khi thực thi đoạn mã sau trên bộ xử lý RISC-V Little-Endian:",
    "codeBlock": ".data\nA: .word 0xa1b2c3d4\n.text\nla t0, A\nlb s1, 0(t0)\nandi s2, s1, 0xf0",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "0x000000d0",
        "0xffffffd0",
        "0x000000a0",
        "0x000000f0"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Tại địa chỉ đầu tiên <code>0(t0)</code> của word <code>0xa1b2c3d4</code> là byte thấp nhất: <code>0xd4</code>.</li><li><code>lb s1, 0(t0)</code> mở rộng dấu âm thành $s1 = \\text{0xffffffd4}$.</li><li>Lệnh <code>andi s2, s1, 0xf0</code>: hằng số <code>0x0f0</code> mở rộng 32-bit là <code>0x000000f0</code>: $$s2 = \\text{0xffffffd4} \\;\\&\\; \\text{0x000000f0} = \\mathbf{\\text{0x000000d0}}$$</li></ul>"
})

add_q({
    "id": "c3-4.32",
    "chapter": 3,
    "groupId": "3.2.4",
    "groupTitle": "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, sw) theo thứ tự Little-Endian",
    "exerciseCode": "Bài tập 3.32 (PDF 4.32)",
    "source": "Đề Giữa kỳ 2024.1 - #6a94a2 & Ôn tập Giữa kỳ - Câu 2",
    "examTags": ["GK"],
    "pdfPage": 82,
    "printedPage": 81,
    "relatedTheoryId": "3.1.2",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập địa chỉ Hexa (ví dụ: 0x1001C000):",
    "acceptedAnswers": ["0x1001C000", "0x1001c000", "1001C000"],
    "question": "Địa chỉ của toán hạng đích trong lệnh <code>sw</code> dưới đây là bao nhiêu (viết ở dạng số Hexa)?",
    "codeBlock": "li s0, 0x1001BCDE\naddi s1, s0, 0x321\nsw s0, 1(s1)",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "0x1001C000",
        "0x1001BFFF",
        "0x1001BFFE",
        "0x1001C001"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ol><li>$s0 = \\text{0x1001BCDE}$.</li><li>$s1 = \\text{0x1001BCDE} + \\text{0x321} = \\text{0x1001BFFF}$.</li><li>Lệnh <code>sw s0, 1(s1)</code> ghi vào địa chỉ: $s1 + 1 = \\text{0x1001BFFF} + 1 = \\mathbf{\\text{0x1001C000}}$.</li></ol><p><strong>Đáp số: 0x1001C000.</strong></p>"
})

# Nhóm 5: 4.33 -> 4.41
add_q({
    "id": "c3-4.33",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi câu lệnh C sang Hợp ngữ RISC-V (Mảng, Con trỏ, Rẽ nhánh)",
    "exerciseCode": "Bài tập 3.33 (PDF 4.33)",
    "source": "Đề Cuối kỳ 2022.2, 2024.1 - #f4, 2020.2 & Ôn tập Giữa kỳ - Câu 9",
    "examTags": ["CK", "GK"],
    "pdfPage": 82,
    "printedPage": 81,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Đoạn lệnh hợp ngữ RISC-V dưới đây tương ứng với câu lệnh C nào (biết $s0, s1, s2, s3$ tương ứng cho các biến $f, g, h, i$)?",
    "codeBlock": "slli t0, s1, 2\nsub s3, s0, s2\nadd s3, s3, t0\naddi s3, s3, 5",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "i = f - h + 4*g + 5",
        "i = f + h + 4*g - 5",
        "i = f - h + 4*g - 5",
        "i = f + h - 4*g - 5"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li><code>slli t0, s1, 2</code>: $t0 = 4 \\times g$.</li><li><code>sub s3, s0, s2</code>: $s3 = f - h$.</li><li><code>add s3, s3, t0</code>: $s3 = (f - h) + 4 \\times g$.</li><li><code>addi s3, s3, 5</code>: $s3 = f - h + 4 \\times g + 5$.</li><li><strong>Đáp án đúng: i = f - h + 4*g + 5.</strong></li></ul>"
})

add_q({
    "id": "c3-4.34a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi câu lệnh C sang Hợp ngữ RISC-V (Mảng, Con trỏ, Rẽ nhánh)",
    "exerciseCode": "Bài tập 3.34a (PDF 4.34a)",
    "source": "Đề Giữa kỳ 2024.1 - #f96f43",
    "examTags": ["GK"],
    "pdfPage": 83,
    "printedPage": 82,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chọn đoạn lệnh RISC-V thực hiện câu lệnh C: <code>*a = b + c;</code> (giả sử $a$ là con trỏ nằm trong thanh ghi $a1$, còn $b, c$ là các biến nằm trong $a2, a3$).",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "add t0, a2, a3 -> sw t0, 0(a1)",
        "add t0, a2, a3 -> lw t0, 0(a1)",
        "lw t0, 0(a1) -> add a1, a2, a3",
        "add a1, a2, a3 -> sw a1, 0(t0)"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Ký hiệu <code>*a = ...</code> ở vế trái nghĩa là ghi kết quả ra bộ nhớ tại địa chỉ con trỏ $a (a1)$ đang trỏ tới:</p><ol><li>Tính tổng $b + c$ vào thanh ghi tạm: <code>add t0, a2, a3</code>.</li><li>Lưu kết quả ra vùng nhớ: <code>sw t0, 0(a1)</code>.</li></ol>"
})

add_q({
    "id": "c3-4.34b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi câu lệnh C sang Hợp ngữ RISC-V (Mảng, Con trỏ, Rẽ nhánh)",
    "exerciseCode": "Bài tập 3.34b (PDF 4.34b)",
    "source": "Đề Giữa kỳ 2024.1 - #12416e & Ôn tập Giữa kỳ - Câu 47",
    "examTags": ["GK"],
    "pdfPage": 83,
    "printedPage": 82,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Chọn đoạn lệnh RISC-V thực hiện câu lệnh C: <code>a = b + *c;</code> (giả sử $a, b$ là biến trong $a1, a2$, còn $c$ là con trỏ trong $a3$).",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "lw t0, 0(a3) -> add a1, a2, t0",
        "sw t0, 0(a3) -> add a1, a2, t0",
        "add a1, a2, a3 -> lw a1, 0(a1)",
        "lw a1, 0(a3) -> add a1, a1, a2"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Ký hiệu <code>*c</code> ở vế phải nghĩa là đọc dữ liệu từ địa chỉ mà con trỏ $c (a3)$ đang trỏ tới:</p><ol><li>Đọc dữ liệu từ bộ nhớ: <code>lw t0, 0(a3)</code>.</li><li>Cộng với $b (a2)$ và cất vào $a (a1)$: <code>add a1, a2, t0</code>.</li></ol>"
})

add_q({
    "id": "c3-4.36a",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi câu lệnh C sang Hợp ngữ RISC-V (Mảng, Con trỏ, Rẽ nhánh)",
    "exerciseCode": "Bài tập 3.36a (PDF 4.36a)",
    "source": "Đề Cuối kỳ 2022.2 - #13504d & 2024.1 - Trang 7",
    "examTags": ["CK"],
    "pdfPage": 84,
    "printedPage": 83,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Giả thiết biến $k$ ở thanh ghi $s1$; P, Q là hai mảng số nguyên 32-bit có địa chỉ cơ sở nằm trong $s6$ và $s7$. Đoạn lệnh sau tương ứng với câu lệnh C nào?",
    "codeBlock": "lw t0, 160(s7)\nadd t0, s1, t0\nsw t0, 80(s6)",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "P[20] = k + Q[40];",
        "P[80] = k + Q[160];",
        "Q[40] = k + P[20];",
        "P[10] = k + Q[20];"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p><strong>Quy tắc đổi Độ lệch byte (Offset) sang Chỉ số mảng (Index):</strong> Mỗi phần tử 32-bit chiếm 4 byte, muốn tìm chỉ số phải lấy Offset chia cho 4:</p><ul><li><code>lw t0, 160(s7)</code>: $160 \\div 4 = 40 \\implies t0 = Q[40]$.</li><li><code>add t0, s1, t0</code>: $t0 = k + Q[40]$.</li><li><code>sw t0, 80(s6)</code>: $80 \\div 4 = 20 \\implies P[20] = k + Q[40]$.</li></ul><p><strong>Đáp án đúng: P[20] = k + Q[40];</strong></p>"
})

add_q({
    "id": "c3-4.36b",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi câu lệnh C sang Hợp ngữ RISC-V (Mảng, Con trỏ, Rẽ nhánh)",
    "exerciseCode": "Bài tập 3.36b (PDF 4.36b)",
    "source": "Đề Giữa kỳ 2024.1 - #d0125d",
    "examTags": ["GK"],
    "pdfPage": 84,
    "printedPage": 83,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho $s1, s2$ lần lượt giữ địa chỉ cơ sở của mảng số nguyên 32-bit A và B. Đoạn lệnh sau tương ứng với câu lệnh C nào?",
    "codeBlock": "lw t0, 24(s1)\naddi s0, t0, 1\nsw s0, 20(s2)",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "B[5] = A[6] + 1;",
        "B[20] = A[24] + 1;",
        "A[6] = B[5] + 1;",
        "B[4] = A[6] + 1;"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li><code>lw t0, 24(s1)</code>: Đọc mảng A tại chỉ số $24 \\div 4 = 6 \\implies A[6]$.</li><li><code>addi s0, t0, 1</code>: $s0 = A[6] + 1$.</li><li><code>sw s0, 20(s2)</code>: Ghi vào mảng B tại chỉ số $20 \\div 4 = 5 \\implies B[5] = A[6] + 1$.</li></ul>"
})

add_q({
    "id": "c3-4.40",
    "chapter": 3,
    "groupId": "3.2.5",
    "groupTitle": "Nhóm 5: Chuyển đổi câu lệnh C sang Hợp ngữ RISC-V (Mảng, Con trỏ, Rẽ nhánh)",
    "exerciseCode": "Bài tập 3.40 (PDF 4.40)",
    "source": "Đề Cuối kỳ 2022.2 - #bcfd00 & Ôn tập Cuối kỳ P2 - Câu 38",
    "examTags": ["CK"],
    "pdfPage": 87,
    "printedPage": 86,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho đoạn hợp ngữ RISC-V sau, biết các biến $a, b, c$ tương ứng trong $x18 (s2), x19 (s3), x20 (s4)$. Hãy chỉ ra câu lệnh C tương ứng:",
    "codeBlock": "slt x5, x20, x19\nbne x5, x0, L1\nadd x18, x18, x19\nj L2\nL1: add x18, x18, x20\nL2:",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "if (b <= c) a = a + b; else a = a + c;",
        "if (b > c) a = a + b; else a = a + c;",
        "if (b < c) a = a + b; else a = a + c;",
        "if (c <= b) a = a + c; else a = a + b;"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li><code>slt x5, x20, x19</code>: kiểm tra $x20 < x19$ tức $c < b$ (hay $b > c$). Nếu đúng $x5 = 1$, nếu sai ($b \\le c$) thì $x5 = 0$.</li><li><code>bne x5, x0, L1</code>: Nếu $c < b$, nhảy xuống <code>L1</code> làm $a = a + c$.</li><li>Nếu không nhảy (tức $b \\le c$), chạy lệnh bên dưới: $a = a + b$.</li><li>Vậy đoạn mã tương đương: <strong><code>if (b <= c) a = a + b; else a = a + c;</code></strong></li></ul>"
})

# Nhóm 6: 4.42 -> 4.45
add_q({
    "id": "c3-4.42",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài tập 3.42 (PDF 4.42)",
    "source": "Đề Giữa kỳ 2024.1 - #f4fd9f",
    "examTags": ["GK"],
    "pdfPage": 89,
    "printedPage": 88,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị thập phân của s5 (ví dụ: 25):",
    "acceptedAnswers": ["25"],
    "question": "Giá trị của thanh ghi <code>s5</code> ở hệ thập phân sau khi thực hiện đoạn mã RISC-V dưới đây là bao nhiêu (giả sử ban đầu $s5 = 0$)?",
    "codeBlock": ".data\nA: .word 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15\n.text\nli s1, 0\nli s3, 10\nla s2, A\nloop:\nadd t1, s1, s1\nadd t1, t1, t1\nadd t1, t1, s2\nlw t0, 0(t1)\nadd s5, s5, t0\naddi s1, s1, 2\nbne s1, s3, loop",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "25",
        "55",
        "120",
        "15"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Biến chạy $s1$ bắt đầu từ 0, mỗi vòng tăng 2, dừng khi $s1 == 10$ &rarr; $s1$ lần lượt nhận: $0, 2, 4, 6, 8$.</li><li>Đoạn mã cộng dồn các phần tử: $s5 = A[0] + A[2] + A[4] + A[6] + A[8]$.</li><li>Với mảng $A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...]$: $$s5 = 1 + 3 + 5 + 7 + 9 = \\mathbf{25}$$</li><li><strong>Đáp số: 25.</strong></li></ul>"
})

add_q({
    "id": "c3-4.43",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài tập 3.43 (PDF 4.43)",
    "source": "Đề Cuối kỳ 2020.2",
    "examTags": ["CK"],
    "pdfPage": 90,
    "printedPage": 89,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị của a0 (ví dụ: 56):",
    "acceptedAnswers": ["56"],
    "question": "Hãy cho biết nội dung thanh ghi <code>a0</code> nhận giá trị bằng bao nhiêu sau khi thực hiện đoạn chương trình dưới đây?",
    "codeBlock": "addi a1, x0, 14\naddi s0, x0, 0\nadd s1, x0, x0\nloop: slt t0, a1, s1\nbne t0, x0, finish\nadd s0, s0, s1\naddi s1, s1, 2\nj loop\nfinish:\nadd a0, s0, x0",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "56",
        "54",
        "14",
        "28"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Khởi tạo: $a1 = 14$, tổng $s0 = 0$, biến chạy $s1 = 0$.</li><li>Điều kiện thoát: $14 < s1$. Chương trình tính tổng các số chẵn từ 0 đến 14: $$a0 = s0 = 0 + 2 + 4 + 6 + 8 + 10 + 12 + 14 = \\mathbf{56}$$</li><li><strong>Đáp án đúng: C (56).</strong></li></ul>"
})

add_q({
    "id": "c3-4.44",
    "chapter": 3,
    "groupId": "3.2.6",
    "groupTitle": "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi",
    "exerciseCode": "Bài tập 3.44 (PDF 4.44)",
    "source": "Đề Cuối kỳ 2022.2 - #526d03 & Cuối kỳ 2024.1 - #115355",
    "examTags": ["CK"],
    "pdfPage": 90,
    "printedPage": 89,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập giá trị của a1 (ví dụ: 18):",
    "acceptedAnswers": ["18"],
    "question": "Cho chương trình con <code>count</code>. Giả thiết trước khi chạy, $a0 = \\text{0x5678ABCD}$. Hãy cho biết nội dung thanh ghi kết quả <code>a1</code> sau khi chạy xong (viết theo số thập phân)?",
    "codeBlock": "count: addi s0, zero, 0\nL1: beq a0, zero, done\nandi t0, a0, 1\nbeq t0, zero, L2\naddi s0, s0, 1\nL2: srli a0, a0, 1\njal x0, L1\ndone: add a1, s0, zero\njalr x0, ra, 0",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "18",
        "16",
        "20",
        "14"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p><strong>Hiểu thuật toán:</strong> Chương trình con này dùng để <strong>đếm tổng số bit 1</strong> có trong biểu diễn nhị phân của thanh ghi $a0$!</p><ul><li>Đếm nhanh số bit 1 trong <code>0x5678ABCD</code>:<br>• $5 (0101_2) \\to 2$<br>• $6 (0110_2) \\to 2$<br>• $7 (0111_2) \\to 3$<br>• $8 (1000_2) \\to 1$<br>• $A (1010_2) \\to 2$<br>• $B (1011_2) \\to 3$<br>• $C (1100_2) \\to 2$<br>• $D (1101_2) \\to 3$</li><li>Tổng số bit 1: $(2+2+3+1) + (2+3+2+3) = 8 + 10 = \\mathbf{18}$.</li></ul><p><strong>Đáp số: 18.</strong></p>"
})

# Nhóm 7: 4.46 -> 4.49
add_q({
    "id": "c3-4.46",
    "chapter": 3,
    "groupId": "3.2.7",
    "groupTitle": "Nhóm 7: Chương trình con, Ngăn xếp (Stack) và Lệnh jal / jalr",
    "exerciseCode": "Bài tập 3.46 (PDF 4.46)",
    "source": "Đề Giữa kỳ 2024.1 - #5ebf59 & Ôn tập Giữa kỳ - Câu 22",
    "examTags": ["GK"],
    "pdfPage": 93,
    "printedPage": 92,
    "relatedTheoryId": "3.1.3",
    "questionType": "multiple",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Những lệnh nào trong RISC-V lưu địa chỉ $\\text{PC} + 4$ vào một thanh ghi trước khi thực hiện rẽ nhánh/nhảy? (Chọn nhiều đáp án)",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "jal",
        "j",
        "beq",
        "jalr",
        "jr"
    ],
    "correctIndex": 0,
    "correctIndices": [0, 3],
    "explanation": "<ul><li>Hai lệnh nhảy và liên kết (Jump and Link) dùng để gọi chương trình con và tự động lưu địa chỉ trở về $\\text{PC} + 4$ vào thanh ghi đích là <strong>jal</strong> và <strong>jalr</strong>.</li><li>Lệnh giả <code>j</code> dùng $x0$ nên bỏ qua địa chỉ trở về, <code>beq</code> là rẽ nhánh điều kiện, <code>jr</code> là nhảy qua thanh ghi.</li><li><strong>Đáp án đúng: Chọn cả A (jal) và D (jalr).</strong></li></ul>"
})

add_q({
    "id": "c3-4.47a",
    "chapter": 3,
    "groupId": "3.2.7",
    "groupTitle": "Nhóm 7: Chương trình con, Ngăn xếp (Stack) và Lệnh jal / jalr",
    "exerciseCode": "Bài tập 3.47a (PDF 4.47a)",
    "source": "Đề Giữa kỳ 2024.1 - #907ec8 & Ôn tập Giữa kỳ - Câu 46",
    "examTags": ["GK"],
    "pdfPage": 94,
    "printedPage": 93,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Ngăn xếp (stack) của RISC-V phát triển theo chiều giảm địa chỉ bộ nhớ. Đoạn mã nào sau đây phù hợp để cấp phát và lưu 1 word ($s0$) vào ngăn xếp?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "addi sp, sp, -4 -> sw s0, 0(sp)",
        "addi sp, sp, 0 -> sw s0, 0(sp)",
        "addi sp, sp, 4 -> sw s0, 0(sp)",
        "addi sp, sp, -8 -> sw s0, 4(sp)"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Để lưu 1 word (4 byte) vào ngăn xếp, ta phải giảm con trỏ <code>sp</code> đi 4 byte (<code>addi sp, sp, -4</code>) rồi lưu vào đỉnh ngăn xếp mới (<code>sw s0, 0(sp)</code>).</p>"
})

add_q({
    "id": "c3-4.48",
    "chapter": 3,
    "groupId": "3.2.7",
    "groupTitle": "Nhóm 7: Chương trình con, Ngăn xếp (Stack) và Lệnh jal / jalr",
    "exerciseCode": "Bài tập 3.48 (PDF 4.48)",
    "source": "Đề Cuối kỳ 2022.2 - #a3c257, 2024.1 - #e79a4d & Ôn tập Cuối kỳ P2 - Câu 48",
    "examTags": ["CK"],
    "pdfPage": 94,
    "printedPage": 93,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Ở đầu hàm con ta cất $s2, s3$ ra ngăn xếp bằng: <code>addi sp, sp, -8</code> &rarr; <code>sw s3, 4(sp)</code> &rarr; <code>sw s2, 0(sp)</code>. Hãy chỉ ra đoạn lệnh phù hợp để khôi phục lại nội dung $s2, s3$ và $sp$ ở cuối hàm?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "lw s2, 0(sp) -> lw s3, 4(sp) -> addi sp, sp, 8",
        "addi sp, sp, 8 -> lw s3, 4(sp) -> lw s2, 0(sp)",
        "lw s2, 4(sp) -> lw s3, 0(sp) -> addi sp, sp, 8",
        "addi sp, sp, 8 -> lw s3, 0(sp) -> lw s2, 4(sp)"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li><strong>Nguyên tắc khôi phục ngăn xếp:</strong> Lúc cất vào ở độ lệch nào so với <code>sp</code> thì lúc đọc ra (<code>lw</code>) phải lấy ở đúng độ lệch đó <strong>trước khi cộng trả lại sp</strong>.</li><li>Ở đầu hàm cất $s3$ vào <code>4(sp)</code> và $s2$ vào <code>0(sp)</code>. Khi khôi phục: đọc <code>lw s2, 0(sp)</code> và <code>lw s3, 4(sp)</code> trước, rồi mới <code>addi sp, sp, 8</code>.</li><li><strong>Đáp án đúng: A.</strong></li></ul>"
})

add_q({
    "id": "c3-4.49",
    "chapter": 3,
    "groupId": "3.2.7",
    "groupTitle": "Nhóm 7: Chương trình con, Ngăn xếp (Stack) và Lệnh jal / jalr",
    "exerciseCode": "Bài tập 3.49 (PDF 4.49)",
    "source": "Đề Cuối kỳ 2022.2 - #9aec2f, 2024.1 - #f023de & Ôn tập Cuối kỳ P2 - Câu 40",
    "examTags": ["CK"],
    "pdfPage": 95,
    "printedPage": 94,
    "relatedTheoryId": "3.1.3",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho đoạn lệnh RISC-V với địa chỉ tương ứng:<br><code>0x00402034   jal x1, XYZ</code><br><code>0x00402038   ...</code><br><code>0x00402060   XYZ: addi sp, sp, -8</code><br><code>0x00402090   jalr x0, 0(x1)</code><br>Tìm PC và x1 ngay sau lệnh <code>jal</code>, và PC ngay sau lệnh <code>jalr</code>?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "Sau jal: PC = 0x00402060, x1 = 0x00402038 ; Sau jalr: PC = 0x00402038",
        "Sau jal: PC = 0x00402038, x1 = 0x00402060 ; Sau jalr: PC = 0x00402090",
        "Sau jal: PC = 0x00402060, x1 = 0x00402034 ; Sau jalr: PC = 0x00402060",
        "Sau jal: PC = 0x00402090, x1 = 0x00402038 ; Sau jalr: PC = 0x00402034"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Lệnh <code>jal x1, XYZ</code> nhảy tới nhãn XYZ nên $PC = \\mathbf{\\text{0x00402060}}$, đồng thời cất địa chỉ lệnh kế tiếp $\\text{PC}_{jal} + 4 = \\mathbf{\\text{0x00402038}}$ vào $x1 (ra)$.</li><li>Lệnh <code>jalr x0, 0(x1)</code> nhảy trở về địa chỉ trong $x1$ nên $PC = \\mathbf{\\text{0x00402038}}$.</li></ul>"
})

# Nhóm 8: 4.50 -> 4.59
add_q({
    "id": "c3-4.50",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.50 (PDF 4.50)",
    "source": "Đề Cuối kỳ 2023.1 - #9f7fd7 & Ôn tập Cuối kỳ P2 - Câu 60",
    "examTags": ["CK"],
    "pdfPage": 96,
    "printedPage": 95,
    "relatedTheoryId": "3.1.4",
    "questionType": "multiple",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Lệnh nào sau đây trong RISC-V yêu cầu trường <code>opcode</code>? (Chọn nhiều đáp án)",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "ori",
        "sw",
        "j (jal)",
        "bge (beq)"
    ],
    "correctIndex": 0,
    "correctIndices": [0, 1, 2, 3],
    "explanation": "<p>Mọi câu lệnh mã máy của RISC-V (cả 6 khuôn dạng R, I, S, B, U, J) đều <strong>bắt buộc phải có trường opcode</strong> (7 bit từ bit 6 đến bit 0) để bộ điều khiển nhận diện nhóm lệnh.</p><p><strong>Đáp án đúng: Chọn tất cả các lệnh (A, B, C, D).</strong></p>"
})

add_q({
    "id": "c3-4.51",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.51 (PDF 4.51)",
    "source": "Đề Giữa kỳ 2024.1 - #b744e1",
    "examTags": ["GK"],
    "pdfPage": 96,
    "printedPage": 95,
    "relatedTheoryId": "3.1.4",
    "questionType": "multiple",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Những lệnh nào sau đây trong RISC-V có trường hằng số (immediate field) dài <strong>20-bit</strong>? (Chọn nhiều đáp án)<br>1. lui &nbsp; 2. auipc &nbsp; 3. jal &nbsp; 4. sw &nbsp; 5. lw &nbsp; 6. addi &nbsp; 7. beq",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "1. lui",
        "2. auipc",
        "3. jal",
        "4. sw",
        "5. lw",
        "6. addi",
        "7. beq"
    ],
    "correctIndex": 0,
    "correctIndices": [0, 1, 2],
    "explanation": "<p>Theo bảng khuôn dạng lệnh RISC-V:</p><ul><li>Các lệnh kiểu I (lw, addi), kiểu S (sw), và kiểu B (beq) chỉ có trường imm 12 bit.</li><li>Chỉ có các lệnh <strong>kiểu U (lui, auipc)</strong> và <strong>kiểu J (jal)</strong> mới có trường imm dài <strong>20 bit</strong> (từ bit 31 đến bit 12).</li></ul><p><strong>Đáp án đúng: Chọn lui, auipc và jal (1, 2, 3).</strong></p>"
})

add_q({
    "id": "c3-4.52a",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.52a (PDF 4.52a)",
    "source": "Đề Giữa kỳ 2024.1 - #1c2f2d & Ôn tập Giữa kỳ - Câu 50",
    "examTags": ["GK"],
    "pdfPage": 97,
    "printedPage": 96,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập tên thanh ghi đích (ví dụ: x5 hoặc t0):",
    "acceptedAnswers": ["x5", "t0", "x5 (t0)"],
    "question": "Cho lệnh máy kiểu R của RISC-V ở dạng Hexa: <code>0x007302b3</code>. Toán hạng đích (destination operand <code>rd</code>) của lệnh này là gì?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "x5 (t0)",
        "x7",
        "x10",
        "x6"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li><strong>Mẹo tìm nhanh thanh ghi đích rd (bit 11:7):</strong> Đổi 3 chữ số Hexa cuối cùng (<code>2b3</code>) sang nhị phân 12-bit: $$\\text{2b3}_{(16)} = 0010\\;1011\\;0011_{(2)}$$</li><li>Tách 5 bit ở vị trí bit 11:7 (ngay sát 7 bit opcode <code>0110011</code> ở đuôi): $$\\text{rd} = 00101_{(2)} = 4 + 1 = 5 \\implies \\text{Thanh ghi đích là } \\mathbf{x5 (t0)}$$</li><li><strong>Đáp án đúng: x5.</strong></li></ul>"
})

add_q({
    "id": "c3-4.53",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.53 (PDF 4.53)",
    "source": "Đề Giữa kỳ 2024.1 - #65dce1 & Ôn tập Giữa kỳ - Câu 59",
    "examTags": ["GK"],
    "pdfPage": 97,
    "printedPage": 96,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho một lệnh rẽ nhánh <code>beq</code> có mã máy là <code>0x01ee8463</code>. Các thanh ghi nguồn (<code>rs1, rs2</code>) của câu lệnh này là gì?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "x29, x30",
        "x30, x31",
        "x29, x29",
        "x5, x6"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Đổi mã máy <code>0x01ee8463</code> sang nhị phân và tách theo kiểu B (7 - 5 - 5 - 3 - 5 - 7):<br>• $7\\text{ bit: } 0000000$ (imm[12,10:5])<br>• <strong>$5\\text{ bit rs2: } 11110_{(2)} = 30 (x30)$</strong><br>• <strong>$5\\text{ bit rs1: } 11101_{(2)} = 29 (x29)$</strong><br>• $3\\text{ bit funct3: } 000$<br>• $5\\text{ bit imm: } 01000$<br>• $7\\text{ bit opcode: } 1100011$</li><li>Vậy $rs1 = x29$ và $rs2 = x30$.</li><li><strong>Đáp án đúng: x29, x30.</strong></li></ul>"
})

add_q({
    "id": "c3-4.54",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.54 (PDF 4.54)",
    "source": "Đề Cuối kỳ 2024.1 - #b9e098 & Ôn tập Giữa kỳ - Câu 7",
    "examTags": ["CK", "GK"],
    "pdfPage": 98,
    "printedPage": 97,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho lệnh máy RISC-V được biểu diễn theo số Hexa: <code>0x012B2423</code>. Hãy chỉ ra lệnh hợp ngữ tương ứng?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "sw s2, 8(s6)",
        "lw t2, 4(s6)",
        "add t0, s4, s5",
        "addi t0, s3, -4"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Hai chữ số Hexa cuối là <code>23</code> ($0010\\;0011_2$ &rarr; 7 bit cuối là <code>0100011</code> = opcode Store).</li><li>Tách theo S-type (7 - 5 - 5 - 3 - 5 - 7):<br>• imm = <code>0000000</code> và <code>01000</code> &rarr; imm = 8.<br>• rs2 = <code>10010</code> = 18 ($s2$).<br>• rs1 = <code>10110</code> = 22 ($s6$).<br>• funct3 = <code>010</code> (sw).</li><li>Lệnh hợp ngữ tương ứng là: <strong><code>sw s2, 8(s6)</code></strong>.</li></ul>"
})

add_q({
    "id": "c3-4.55a",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.55a (PDF 4.55a)",
    "source": "Ôn tập Giữa kỳ - Câu 55",
    "examTags": ["GK"],
    "pdfPage": 99,
    "printedPage": 98,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập mã máy Hexa 8 chữ số (ví dụ: 0x406382B3):",
    "acceptedAnswers": ["0x406382B3", "0x406382b3", "406382B3"],
    "question": "Hãy dịch câu lệnh hợp ngữ RISC-V sau sang mã máy biểu diễn ở hệ Hexa (8 chữ số, có 0x ở đầu):<br><code>sub t0, t2, t1</code>",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0x406382B3",
        "0x006382B3",
        "0x40B302B3",
        "0x007302B3"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>$rd = t0 = x5 (00101)$; $rs1 = t2 = x7 (00111)$; $rs2 = t1 = x6 (00110)$.</li><li>Lệnh <code>sub</code> có opcode = <code>0110011</code>, funct3 = <code>000</code>, funct7 = <code>0100000</code>.</li><li>Ghép 32 bit (funct7 | rs2 | rs1 | funct3 | rd | op):<br><code>0100000 00110 00111 000 00101 0110011</code> = $\\mathbf{\\text{0x406382B3}}$.</li></ul>"
})

add_q({
    "id": "c3-4.55b",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.55b (PDF 4.55b)",
    "source": "Ôn tập Giữa kỳ - Câu 71",
    "examTags": ["GK"],
    "pdfPage": 99,
    "printedPage": 98,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập mã máy Hexa (ví dụ: 0xFF248913):",
    "acceptedAnswers": ["0xFF248913", "0xff248913", "FF248913"],
    "question": "Hãy dịch câu lệnh hợp ngữ RISC-V sau sang mã máy biểu diễn ở hệ Hexa:<br><code>addi s2, s1, -14</code>",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0xFF248913",
        "0x00E48913",
        "0xFF240913",
        "0xFFE48913"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>$rd = s2 = x18 (10010)$; $rs1 = s1 = x9 (01001)$; funct3 = <code>000</code>; op = <code>0010011</code>.</li><li>$-14$ bù 2 12-bit là <code>1111 1111 0010</code> (<code>0xFF2</code>).</li><li>Ghép 32 bit: <code>1111 1111 0010 01001 000 10010 0010011</code> = $\\mathbf{\\text{0xFF248913}}$.</li></ul>"
})

add_q({
    "id": "c3-4.56a",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.56a (PDF 4.56a)",
    "source": "Đề Cuối kỳ 2024.1 - #3ad10f",
    "examTags": ["CK"],
    "pdfPage": 101,
    "printedPage": 100,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập địa chỉ đích (ví dụ: 0x00404034):",
    "acceptedAnswers": ["0x00404034", "0x00404034", "00404034"],
    "question": "Giả thiết lệnh <code>bge s0, s1, L1</code> của RISC-V có mã máy là <code>0x02945063</code>, được đặt tại word nhớ có địa chỉ <code>0x00404014</code>. Hãy chỉ ra địa chỉ đích của lệnh đó (nếu điều kiện thỏa mãn)?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0x00404034",
        "0x0040401F",
        "0x00404030",
        "0x00404018"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Giải mã <code>0x02945063</code> ra các bit của trường imm kiểu B: $imm = 32_{(10)} = \\text{0x20}$.</li><li>Trong RISC-V, địa chỉ đích cộng trực tiếp vào PC của chính câu lệnh:<br>$$\\text{BTA} = \\text{PC} + imm = \\text{0x00404014} + \\text{0x20} = \\mathbf{\\text{0x00404034}}$$</li><li><strong>Đáp án đúng: B (0x00404034).</strong></li></ul>"
})

add_q({
    "id": "c3-4.56b",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.56b (PDF 4.56b)",
    "source": "Ôn tập Giữa kỳ - Câu 28",
    "examTags": ["GK"],
    "pdfPage": 101,
    "printedPage": 100,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": True,
    "fillPrompt": "Nhập địa chỉ Target PC (ví dụ: 0x1FF4):",
    "acceptedAnswers": ["0x1FF4", "0x1ff4", "1FF4"],
    "question": "Giả sử PC hiện tại (địa chỉ của lệnh beq) là <code>0x2000</code>. Với câu lệnh <code>(0x2000) beq x1, x2, -12</code>, nếu $x1 == x2$ thì địa chỉ lệnh tiếp theo (Target PC) sẽ là bao nhiêu?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0x1FF4",
        "0x1FF8",
        "0x200C",
        "0x1FE8"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Trong RISC-V, độ lệch cộng trực tiếp vào chính PC của lệnh rẽ nhánh: $\\text{Target PC} = \\text{0x2000} - 12 = \\text{0x2000} - \\text{0x0C} = \\mathbf{\\text{0x1FF4}}$.</p><p><strong>Đáp án đúng: A (0x1FF4).</strong></p>"
})

add_q({
    "id": "c3-4.57",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.57 (PDF 4.57)",
    "source": "Đề Cuối kỳ 2022.2 - #a1e199, 2024.1 - Trang 3 & Ôn tập Giữa kỳ - Câu 8",
    "examTags": ["CK", "GK"],
    "pdfPage": 102,
    "printedPage": 101,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho máy tính dùng RISC-V với 4 cổng vào-ra 32-bit: P1 (0xFFFF000C), P2 (0xFFFF0010), P3 (0xFFFF0014), P4 (0xFFFF0018). Hãy cho biết đoạn chương trình hợp ngữ sau làm gì?",
    "codeBlock": "lui s0, 0xFFFF0\nlw t0, 0x0C(s0)\nsw t0, 0x18(s0)\nlw t1, 0x10(s0)\nsw t1, 0x14(s0)",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "Nhận dữ liệu từ cổng P1 đưa ra cổng P4, nhận dữ liệu từ P2 đưa ra cổng P3",
        "Nhận dữ liệu từ cổng P1 đưa ra cổng P2, nhận dữ liệu từ P3 đưa ra cổng P4",
        "Nhận dữ liệu từ cổng P1 đưa ra cổng P3, nhận dữ liệu từ P2 đưa ra cổng P4",
        "Nhận dữ liệu từ cổng P4 đưa ra cổng P1, nhận dữ liệu từ P3 đưa ra cổng P2"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li><code>lw t0, 0x0C(s0)</code>: Đọc dữ liệu từ địa chỉ <code>0xFFFF000C</code> (cổng <strong>P1</strong>) vào t0.</li><li><code>sw t0, 0x18(s0)</code>: Ghi dữ liệu t0 ra địa chỉ <code>0xFFFF0018</code> (cổng <strong>P4</strong>).</li><li><code>lw t1, 0x10(s0)</code>: Đọc dữ liệu từ địa chỉ <code>0xFFFF0010</code> (cổng <strong>P2</strong>) vào t1.</li><li><code>sw t1, 0x14(s0)</code>: Ghi dữ liệu t1 ra địa chỉ <code>0xFFFF0014</code> (cổng <strong>P3</strong>).</li><li><strong>Đáp án đúng: Nhận dữ liệu từ P1 đưa ra P4, nhận dữ liệu từ P2 đưa ra P3.</strong></li></ul>"
})

add_q({
    "id": "c3-4.58",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.58 (PDF 4.58)",
    "source": "Đề Cuối kỳ 2023.1 - #90c4ff & Ôn tập Cuối kỳ P2 - Câu 55",
    "examTags": ["CK"],
    "pdfPage": 103,
    "printedPage": 102,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Trong đoạn chương trình dưới đây, CPU đang cố gắng đọc một byte từ thiết bị I/O. Phương pháp lập trình I/O nào đang được sử dụng?",
    "codeBlock": ".text\nli s0, 0xFFFF0004 # Data register\nli s1, 0xFFFF0000 # Status register\nCheck: lw t1, 0(s1)\nandi t1, t1, 0x1\nbeq t1, zero, Check\nlb t0, 0(s0) # read data from device",
    "codeLang": "riscv",
    "svgDiagram": None,
    "options": [
        "Polling (Thăm dò / Hỏi vòng)",
        "Overlapping I/O (I/O chồng lấn)",
        "Interrupt (Ngắt)",
        "DMA (Truy cập bộ nhớ trực tiếp)"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<ul><li>Nhãn <code>Check</code> thực hiện đọc thanh ghi trạng thái (0xFFFF0000), kiểm tra bit sẵn sàng số 0. Nếu bằng 0 thì CPU quay lại hỏi tiếp liên tục cho đến khi thiết bị sẵn sàng mới đọc dữ liệu.</li><li>Đây chính là phương pháp <strong>Polling (Thăm dò / Vào-ra bằng chương trình)</strong>.</li></ul>"
})

add_q({
    "id": "c3-4.59",
    "chapter": 3,
    "groupId": "3.2.8",
    "groupTitle": "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra",
    "exerciseCode": "Bài tập 3.59 (PDF 4.59)",
    "source": "Đề Giữa kỳ 2022.2 - Đề 0009 & 0008, Câu 1 – 7",
    "examTags": ["GK"],
    "pdfPage": 104,
    "printedPage": 103,
    "relatedTheoryId": "3.1.4",
    "questionType": "single",
    "canFillBlank": False,
    "fillPrompt": "",
    "acceptedAnswers": [],
    "question": "Cho bản đồ bộ nhớ Little-Endian từ địa chỉ <code>0x400010</code> có 4 byte liên tiếp là: <code>0x20 (0x400010), 0x48 (0x400011), 0x4B (0x400012), 0x01 (0x400013)</code>. Hãy viết mã máy (ở hệ 16) tại địa chỉ <code>0x400010</code>?",
    "codeBlock": None,
    "codeLang": None,
    "svgDiagram": None,
    "options": [
        "0x014B4820",
        "0x20484B01",
        "0x0120484B",
        "0x4B482001"
    ],
    "correctIndex": 0,
    "correctIndices": [0],
    "explanation": "<p>Ghép mã máy 32-bit từ 4 byte theo <strong>Little-Endian</strong>: Byte ở địa chỉ lớn nhất đứng bên trái, byte ở địa chỉ nhỏ nhất đứng bên phải:</p><p>Ghép ngược từ <code>0x400013</code> về <code>0x400010</code> ta được: <strong><code>0x014B4820</code></strong>.</p>"
})

# Ghi ra file js/data-questions-ch3.js
output_js = "// Dữ liệu câu hỏi bài tập và lý thuyết Chương 3 (Kiến trúc tập lệnh RISC-V)\n"
output_js += "// Tự động tạo dựa trên file KTMT.pdf - IT3030 / IT3034 / IT3283\n\n"
output_js += "(function(root) {\n"
output_js += "  root.KTMT_QUESTIONS_CH3 = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"
output_js += "})(typeof window !== 'undefined' ? window : globalThis);\n"

with open("js/data-questions-ch3.js", "w", encoding="utf-8") as f:
    f.write(output_js)

print(f"Successfully generated js/data-questions-ch3.js with {len(questions)} questions.")
