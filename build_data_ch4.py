# -*- coding: utf-8 -*-
"""
Tạo file js/data-questions-ch4.js chứa 100% câu hỏi Bài tập & Lý thuyết Chương 4 (Số học máy tính)
theo tài liệu chủ đạo KTMT_GK.pdf (IT3030 / IT3034 / IT3283 - ĐHBK Hà Nội).
"""
import json

questions = []

def add_q(id, gid, gtitle, code, src, tags, ppage, rel, qtext, opts, exp,
          fill=False, prompt="", acc=None, cblock=None, clang=None, svg=None):
    assert len(opts) == 4, f"{id} must have 4 options, got {len(opts)}"
    questions.append({
        "id": id,
        "chapter": 4,
        "groupId": gid,
        "groupTitle": gtitle,
        "exerciseCode": code,
        "source": src,
        "examTags": tags,
        "pdfPage": ppage,
        "printedPage": ppage - 1,
        "relatedTheoryId": rel,
        "questionType": "single",
        "canFillBlank": fill,
        "fillPrompt": prompt,
        "acceptedAnswers": acc or [],
        "question": qtext,
        "codeBlock": cblock,
        "codeLang": clang,
        "svgDiagram": svg,
        "options": opts,
        "correctIndex": 0,
        "correctIndices": [0],
        "explanation": exp
    })

# ==============================================================================
# CÂU HỎI LÝ THUYẾT CHƯƠNG 4 (8 câu)
# ==============================================================================
G4_LT = "Câu hỏi Ôn tập Lý thuyết Chương 4"
add_q("lt-4.1", "4.1", G4_LT, "Lý thuyết 4.1", "Mục 4.1.1 - Hệ đếm & biểu diễn chính xác", ["LT"], 100, "4.1.1",
      "Trong các giá trị thập phân sau, số nào <strong>có thể biểu diễn chính xác tuyệt đối</strong> bằng hữu hạn bit trong hệ nhị phân?",
      ["0.625 (= 5/8)", "0.1 (= 1/10)", "0.3 (= 3/10)", "0.7 (= 7/10)"],
      "<p>Một số lẻ thập phân chỉ biểu diễn chính xác hữu hạn trong hệ nhị phân khi phần lẻ tối giản có mẫu số là <strong>lũy thừa của 2</strong> ($0.625 = \\frac{5}{2^3} = 0.101_2$). Các số $0.1, 0.3, 0.7$ có mẫu chứa thừa số $5$ nên lặp vô hạn tuần hoàn.</p>")

add_q("lt-4.2", "4.1", G4_LT, "Lý thuyết 4.2", "Mục 4.1.2 - Đại số Boolean & De Morgan", ["LT"], 101, "4.1.2",
      "Theo Định lý De Morgan trong đại số Boolean, biểu thức $\\overline{A \\cdot B}$ tương đương với biểu thức nào?",
      ["$\\overline{A} + \\overline{B}$", "$\\overline{A} \\cdot \\overline{B}$", "$A + B$", "$A \\oplus B$"],
      "<p>Định lý De Morgan: $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ và $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$.</p>")

add_q("lt-4.3", "4.1", G4_LT, "Lý thuyết 4.3", "Mục 4.1.2 - Mạch tổ hợp & Mạch dãy", ["LT"], 102, "4.1.2",
      "Điểm khác biệt cơ bản giữa <strong>Mạch tổ hợp (Combinational)</strong> và <strong>Mạch dãy (Sequential)</strong> là gì?",
      [
          "Mạch tổ hợp đầu ra chỉ phụ thuộc vào đầu vào hiện tại; Mạch dãy phụ thuộc cả đầu vào hiện tại và trạng thái quá khứ (nhớ)",
          "Mạch tổ hợp cần xung nhịp Clock để hoạt động; Mạch dãy không cần Clock",
          "Mạch dãy chỉ xây dựng từ cổng AND/OR/NOT, không dùng phần tử Flip-Flop",
          "Bộ giải mã Decoder và MUX là các ví dụ của mạch dãy có nhớ"
      ],
      "<p>Mạch tổ hợp (MUX, Decoder, Adder) không có nhớ; Mạch dãy (Thanh ghi) dùng phần tử nhớ Flip-Flop kết hợp Clock nên phụ thuộc trạng thái quá khứ.</p>")

add_q("lt-4.4", "4.1", G4_LT, "Lý thuyết 4.4", "Mục 4.1.3 - Dải giá trị Mã bù 2", ["LT"], 103, "4.1.3",
      "Dải giá trị biểu diễn của số nguyên có dấu $n$ bit theo chuẩn <strong>Mã bù hai (Two's Complement)</strong> là:",
      ["$[-2^{n-1},\\; 2^{n-1} - 1]$", "$[-(2^{n-1} - 1),\\; 2^{n-1} - 1]$", "$[-2^n,\\; 2^n - 1]$", "$[0,\\; 2^n - 1]$"],
      "<p>Với $n$ bit có dấu bù 2, dải giá trị luôn chạy từ $-2^{n-1}$ đến $+(2^{n-1}-1)$ (vd 8-bit là $[-128, +127]$).</p>")

add_q("lt-4.5", "4.1", G4_LT, "Lý thuyết 4.5", "Mục 4.1.4 - Quy tắc Tràn số học", ["LT"], 105, "4.1.4",
      "Khi cộng hai số nguyên <strong>có dấu</strong> $n$-bit theo mã bù 2, hiện tượng tràn số học (Overflow) xảy ra khi nào?",
      [
          "Cộng hai số CÙNG DẤU mà kết quả thu được lại có dấu NGƯỢC LẠI với hai số hạng ban đầu",
          "Mỗi khi phát sinh bit nhớ ra ngoài cùng $C_{\\text{out}} = 1$",
          "Cộng hai số TRÁI DẤU có bit nhớ $C_{\\text{out}} = 1$",
          "Cộng một số với $0$"
      ],
      "<p>Cộng 2 số trái dấu <strong>không bao giờ tràn</strong>; chỉ khi cộng 2 số cùng dấu (dương+dương ra âm, hoặc âm+âm ra dương) mới xảy ra Overflow. Giá trị $C_{\\text{out}}$ chỉ dùng kiểm tra tràn cho số <em>không dấu</em>.</p>")

add_q("lt-4.6", "4.1", G4_LT, "Lý thuyết 4.6", "Mục 4.1.4 - Nhân chia RV32M", ["LT"], 105, "4.1.4",
      "Trong mở rộng số học RV32M của RISC-V, lệnh nào trả về <strong>32 bit cao</strong> của tích có dấu $rs1 \\times rs2$, và dấu của phần dư <code>rem</code> tuân theo quy tắc nào?",
      [
          "mulh trả 32 bit cao có dấu; dấu của rem luôn cùng dấu với SỐ BỊ CHIA (rs1)",
          "mul trả 32 bit cao có dấu; dấu của rem luôn cùng dấu với SỐ CHIA (rs2)",
          "mulhu trả 32 bit cao có dấu; phần dư rem luôn không âm",
          "mulhsu trả 32 bit thấp; dấu của rem ngược dấu với thương div"
      ],
      "<p>Lệnh <code>mul</code> lấy 32 bit thấp; <code>mulh</code> lấy 32 bit cao (có dấu). Với phép chia: $\\text{Số bị chia} = \\text{Số chia}\\times \\text{Thương} + \\text{Số dư}$, dấu của <code>rem</code> <strong>luôn cùng dấu với số bị chia $rs1$</strong>.</p>")

add_q("lt-4.7", "4.1", G4_LT, "Lý thuyết 4.7", "Mục 4.1.5 - Cấu trúc IEEE 754 32-bit", ["LT"], 106, "4.1.5",
      "Một số thực chuẩn IEEE 754 32-bit (Single Precision) có cấu trúc phân bố số bit (Sign | Exponent | Fraction) và hằng số lệch Bias bằng bao nhiêu?",
      ["1 bit S - 8 bit e - 23 bit m (Bias = 127)", "1 bit S - 7 bit e - 24 bit m (Bias = 63)", "1 bit S - 11 bit e - 52 bit m (Bias = 1023)", "1 bit S - 8 bit e - 23 bit m (Bias = 128)"],
      "<p>Binary32 gồm <strong>1 bit S</strong> (bit 31), <strong>8 bit mũ $e = E + 127$</strong> (bit 30:23), <strong>23 bit phần lẻ định trị $m$</strong> (bit 22:0).</p>")

add_q("lt-4.8", "4.1", G4_LT, "Lý thuyết 4.8", "Mục 4.1.5 - Giá trị đặc biệt IEEE 754", ["LT"], 106, "4.1.5",
      "Trong chuẩn IEEE 754 32-bit, mã Hexa nào biểu diễn giá trị đặc biệt <strong>$-\\infty$ (âm vô cùng)</strong>?",
      ["0xFF800000", "0x7F800000", "0x80000000", "0xFFFFFFFF"],
      "<p>Khi $e = 255$ (<code>11111111</code>) và $m = 0$: với $S=0$ là $+\\infty$ (<code>0x7F800000</code>), với $S=1$ là $-\\infty$ (<code>0xFF800000</code>). Nếu $m \\neq 0$ sẽ là <code>NaN</code>.</p>")

# ==============================================================================
# NHÓM 1: HỆ ĐẾM, CHUYỂN ĐỔI CƠ SỐ & SỐ BIT - BÀI 4.1 -> 4.2 (8 câu)
# ==============================================================================
G4_1 = "Nhóm 1: Hệ đếm, Chuyển đổi cơ số và Xác định số bit biểu diễn"
add_q("c4-4.1", "4.2.1", G4_1, "Bài tập 4.1", "Đề GK 2018.2 - Mã 198 C7 & Mã 199 C2", ["GK"], 108, "4.1.1",
      "Số dương $1101011.1011_2$ ở hệ cơ số 2 bằng với số nào trong các số thập phân sau đây?",
      ["107.6875(10)", "107.125(10)", "107.129(10)", "107.1875(10)"],
      "<p>Phần nguyên: $1101011_2 = 64+32+8+2+1 = 107$. Phần lẻ: $.1011_2 = 0.5 + 0.125 + 0.0625 = 0.6875$. Ghép lại: <strong>107.6875</strong>.</p>",
      True, "Nhập số thập phân:", ["107.6875"])

add_q("c4-4.2a", "4.2.1", G4_1, "Bài tập 4.2a", "Đề Giữa kỳ 2018.2 - Mã đề 198, Câu 3", ["GK"], 108, "4.1.3",
      "Sử dụng $9$ bit để biểu diễn một số nguyên <strong>có dấu</strong> (mã bù 2), dải biểu diễn sẽ là?",
      ["Từ -256 tới +255", "Từ -255 tới +256", "Từ 0 tới 255", "Từ 0 tới 511"],
      "<p>Với $n = 9$ bit có dấu: $[-2^{9-1},\\; 2^{9-1}-1] = [-2^8,\\; 2^8-1] = \\mathbf{[-256,\\; +255]}$.</p>")

add_q("c4-4.2b", "4.2.1", G4_1, "Bài tập 4.2b", "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 3", ["GK"], 108, "4.1.3",
      "Sử dụng $9$ bit để biểu diễn một số nguyên <strong>không dấu</strong>, dải biểu diễn sẽ là?",
      ["Từ 0 tới 511", "Từ 0 tới 255", "Từ -256 tới +255", "Từ -255 tới +256"],
      "<p>Với $n = 9$ bit không dấu: $[0,\\; 2^9 - 1] = \\mathbf{[0,\\; 511]}$.</p>")

add_q("c4-4.2c", "4.2.1", G4_1, "Bài tập 4.2c", "Đề Giữa kỳ 2018.2 - Mã đề 199, Câu 18", ["GK"], 108, "4.1.3",
      "Sử dụng $10$ bit để biểu diễn một số nguyên <strong>không dấu</strong>, dải biểu diễn sẽ là?",
      ["Từ 0 tới 1023", "Từ -511 tới +512", "Từ -512 tới +511", "Từ 0 tới 511"],
      "<p>Với $n = 10$ bit không dấu: $[0,\\; 2^{10} - 1] = \\mathbf{[0,\\; 1023]}$.</p>")

add_q("c4-4.2d", "4.2.1", G4_1, "Bài tập 4.2d", "Đề Giữa kỳ 2018.2 - Mã đề 199, Câu 12", ["GK"], 109, "4.1.3",
      "Biết rằng $511$ là số không dấu lớn nhất trong phạm vi biểu diễn. Vậy kiểu dữ liệu số nguyên này có bao nhiêu bit?",
      ["9 bit", "8 bit", "10 bit", "11 bit"],
      "<p>Ta có $2^n - 1 = 511 \\iff 2^n = 512 = 2^9 \\Rightarrow n = \\mathbf{9\\text{ bit}}$.</p>",
      True, "Nhập số bit:", ["9", "9 bit"])

add_q("c4-4.2e", "4.2.1", G4_1, "Bài tập 4.2e", "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 20", ["GK"], 109, "4.1.3",
      "Sử dụng $6$ bit nhị phân để biểu diễn số nguyên <strong>có dấu</strong>. Giá trị lớn nhất có thể biểu diễn là bao nhiêu?",
      ["31", "15", "16", "32"],
      "<p>Với $n = 6$ bit có dấu, giá trị dương lớn nhất là $2^{6-1} - 1 = 2^5 - 1 = \\mathbf{31}$.</p>",
      True, "Nhập giá trị:", ["31"])

add_q("c4-4.2f1", "4.2.1", G4_1, "Bài tập 4.2f (Ý 1)", "Đề Giữa kỳ 2019.2 - Mã đề 243, Câu 4", ["GK"], 109, "4.1.3",
      "Lớp học Kiến trúc máy tính có $150$ sinh viên. Biến số nguyên (không dấu) để đếm số sinh viên cần tối thiểu mấy bit?",
      ["8 bit", "7 bit", "9 bit", "6 bit"],
      "<p>Vì $2^7 - 1 = 127 &lt; 150 \\le 2^8 - 1 = 255$ nên cần tối thiểu <strong>8 bit</strong>.</p>",
      True, "Nhập số bit:", ["8", "8 bit"])

add_q("c4-4.2f2", "4.2.1", G4_1, "Bài tập 4.2f (Ý 2)", "Đề Giữa kỳ 2019.2 - Mã đề 244, Câu 11", ["GK"], 109, "4.1.3",
      "Hội trường C2 có $1008$ chỗ ngồi. Biến số nguyên (không dấu) để đếm số ghế cần tối thiểu mấy bit?",
      ["10 bit", "9 bit", "11 bit", "8 bit"],
      "<p>Vì $2^9 - 1 = 511 &lt; 1008 \\le 2^{10} - 1 = 1023$ nên cần tối thiểu <strong>10 bit</strong>.</p>",
      True, "Nhập số bit:", ["10", "10 bit"])

# ==============================================================================
# NHÓM 2: CỔNG LOGIC, MẠCH TỔ HỢP & FULL ADDER - BÀI 4.3 -> 4.5 (5 câu)
# ==============================================================================
G4_2 = "Nhóm 2: Nhận diện Cổng logic, Mạch tổ hợp và Bộ cộng 1-bit"
svg_nand = """<svg width="240" height="90" viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg">
  <path d="M 24 26 L 64 26 M 24 64 L 64 64" stroke="currentColor" stroke-width="2.2" fill="none"/>
  <text x="8" y="31" font-family="sans-serif" font-weight="bold" font-size="15" fill="currentColor">A</text>
  <text x="8" y="69" font-family="sans-serif" font-weight="bold" font-size="15" fill="currentColor">B</text>
  <path d="M 64 12 L 106 12 A 33 33 0 0 1 106 78 L 64 78 Z" stroke="#2563eb" stroke-width="2.5" fill="rgba(37,99,235,0.12)"/>
  <circle cx="145" cy="45" r="5.5" stroke="#2563eb" stroke-width="2.2" fill="var(--bg-card, #ffffff)"/>
  <path d="M 151 45 L 200 45" stroke="currentColor" stroke-width="2.2" fill="none"/>
  <text x="208" y="50" font-family="sans-serif" font-weight="bold" font-size="15" fill="currentColor">F</text>
</svg>"""

svg_xor = """<svg width="240" height="90" viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg">
  <path d="M 24 26 L 56 26 M 24 64 L 56 64" stroke="currentColor" stroke-width="2.2" fill="none"/>
  <text x="8" y="31" font-family="sans-serif" font-weight="bold" font-size="15" fill="currentColor">A</text>
  <text x="8" y="69" font-family="sans-serif" font-weight="bold" font-size="15" fill="currentColor">B</text>
  <path d="M 48 12 Q 66 45 48 78" stroke="#2563eb" stroke-width="2.8" fill="none"/>
  <path d="M 58 12 Q 76 45 58 78 Q 116 78 148 45 Q 116 12 58 12 Z" stroke="#2563eb" stroke-width="2.5" fill="rgba(37,99,235,0.12)"/>
  <path d="M 148 45 L 200 45" stroke="currentColor" stroke-width="2.2" fill="none"/>
  <text x="208" y="50" font-family="sans-serif" font-weight="bold" font-size="15" fill="currentColor">F</text>
</svg>"""

svg_comb_4_4 = """<svg width="420" height="225" viewBox="0 0 420 225" xmlns="http://www.w3.org/2000/svg">
  <g font-family="sans-serif" font-weight="bold" font-size="14" fill="currentColor">
    <text x="28" y="16">A</text>
    <text x="84" y="16">B</text>
    <text x="140" y="16">C</text>
    <text x="392" y="142">F</text>
  </g>
  <!-- Vertical true rails A, B, C -->
  <path d="M 33 22 L 33 212 M 89 22 L 89 212 M 145 22 L 145 212" stroke="currentColor" stroke-width="1.8" fill="none"/>
  <!-- Inverted branches A', B', C' with downward NOT gates -->
  <g stroke="currentColor" stroke-width="1.6" fill="none">
    <path d="M 33 30 L 54 30 L 54 40 M 54 62 L 54 212"/>
    <path d="M 89 30 L 110 30 L 110 40 M 110 62 L 110 212"/>
    <path d="M 145 30 L 166 30 L 166 40 M 166 62 L 166 212"/>
  </g>
  <g stroke="#2563eb" stroke-width="1.8" fill="rgba(37,99,235,0.12)">
    <polygon points="46,40 62,40 54,55"/>
    <circle cx="54" cy="59" r="3.5" fill="var(--bg-card, #fff)"/>
    <polygon points="102,40 118,40 110,55"/>
    <circle cx="110" cy="59" r="3.5" fill="var(--bg-card, #fff)"/>
    <polygon points="158,40 174,40 166,55"/>
    <circle cx="166" cy="59" r="3.5" fill="var(--bg-card, #fff)"/>
  </g>
  <!-- Junction dots on rails -->
  <g fill="currentColor">
    <circle cx="33" cy="30" r="2.5"/><circle cx="89" cy="30" r="2.5"/><circle cx="145" cy="30" r="2.5"/>
    <!-- AND1: A', B, C' -->
    <circle cx="54" cy="84" r="2.5"/><circle cx="89" cy="95" r="2.5"/><circle cx="166" cy="106" r="2.5"/>
    <!-- AND2: A', B, C -->
    <circle cx="54" cy="126" r="2.5"/><circle cx="89" cy="137" r="2.5"/><circle cx="145" cy="148" r="2.5"/>
    <!-- AND3: A, B, C' -->
    <circle cx="33" cy="168" r="2.5"/><circle cx="89" cy="179" r="2.5"/><circle cx="166" cy="190" r="2.5"/>
  </g>
  <!-- Horizontal wires into 3 AND gates -->
  <g stroke="currentColor" stroke-width="1.6" fill="none">
    <path d="M 54 84 L 220 84 M 89 95 L 220 95 M 166 106 L 220 106"/>
    <path d="M 54 126 L 220 126 M 89 137 L 220 137 M 145 148 L 220 148"/>
    <path d="M 33 168 L 220 168 M 89 179 L 220 179 M 166 190 L 220 190"/>
  </g>
  <!-- 3 AND gates -->
  <g stroke="#2563eb" stroke-width="2" fill="rgba(37,99,235,0.12)">
    <path d="M 220 77 L 244 77 A 18 18 0 0 1 244 113 L 220 113 Z"/>
    <path d="M 220 119 L 244 119 A 18 18 0 0 1 244 155 L 220 155 Z"/>
    <path d="M 220 161 L 244 161 A 18 18 0 0 1 244 197 L 220 197 Z"/>
  </g>
  <!-- Wires from AND gates to OR gate -->
  <g stroke="currentColor" stroke-width="1.6" fill="none">
    <path d="M 262 95 L 290 95 L 290 124 L 315 124"/>
    <path d="M 262 137 L 318 137"/>
    <path d="M 262 179 L 290 179 L 290 150 L 315 150"/>
  </g>
  <!-- Final OR gate -->
  <path d="M 310 113 Q 324 137 310 161 Q 348 161 368 137 Q 348 113 310 113 Z" stroke="#2563eb" stroke-width="2.2" fill="rgba(37,99,235,0.12)"/>
  <path d="M 368 137 L 386 137" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>"""

add_q("c4-4.3a", "4.2.2", G4_2, "Bài tập 4.3a (Hình a)", "Ôn tập Cuối kỳ 2025.2 - P1, Câu 16", ["CK"], 109, "4.1.2",
      "Hãy cho biết hình vẽ ký hiệu cổng logic dưới đây (thân chữ D có vòng tròn nhỏ ở đầu ra) biểu diễn phép toán logic nào?",
      ["NAND", "NOR", "XOR", "AND"],
      "<p>Thân cổng hình chữ D là AND, thêm vòng tròn nhỏ đảo bit (NOT) ở đầu ra tạo thành cổng <strong>NAND ($F = \\overline{AB}$)</strong>.</p>",
      False, "", [], None, None, svg_nand)

add_q("c4-4.3b", "4.2.2", G4_2, "Bài tập 4.3b (Hình b)", "Ôn tập Cuối kỳ 2025.2 - P1, Câu 74", ["CK"], 109, "4.1.2",
      "Hãy cho biết hình vẽ ký hiệu cổng logic dưới đây (đầu nhọn giống OR kèm đường cong tách rời ở phần đuôi) biểu diễn phép toán logic nào?",
      ["XOR", "AND", "NOR", "NAND"],
      "<p>Thân cổng mũi nhọn giống OR kèm 1 đường cong song song tách rời ở đuôi là ký hiệu chuẩn của cổng <strong>XOR ($F = A \\oplus B$)</strong>.</p>",
      False, "", [], None, None, svg_xor)

add_q("c4-4.4", "4.2.2", G4_2, "Bài tập 4.4", "Slide Chương 4 - Trang 30 & Ôn tập Cuối kỳ 2025.2 - P1, Câu 51", ["LT", "CK"], 110, "4.1.2",
      "Mạch logic tổ hợp dưới đây có biểu thức đại số Boolean là gì? (Ký hiệu $A'$ là NOT $A$):",
      [
          "$F = A'BC + A'BC' + ABC'$",
          "$F = (A + B + C')(A + B' + C)(A' + B + C)$",
          "$F = A'B'C' + A'BC + AB'C$",
          "$F = ABC' + A'BC + AB'C$"
      ],
      "<ul><li>Cổng AND 1 nối nhánh $A', B, C' \\Rightarrow A'BC'$.</li><li>Cổng AND 2 nối nhánh $A', B, C \\Rightarrow A'BC$.</li><li>Cổng AND 3 nối nhánh $A, B, C' \\Rightarrow ABC'$.</li><li>Cổng OR cộng 3 tích lại: $F = \\mathbf{A'BC + A'BC' + ABC'}$.</li></ul>",
      False, "", [], None, None, svg_comb_4_4)

add_q("c4-4.5a", "4.2.2", G4_2, "Bài tập 4.5a", "Slide Chương 4 - Trang 37 & Ôn tập 2025.2 - P1, Câu 17", ["LT", "CK"], 111, "4.1.2",
      "Bản chất của bộ cộng bán phần 1-bit (Half Adder) là thực hiện hai phép toán logic nào?",
      [
          "Thực hiện phép XOR và AND",
          "Thực hiện phép OR và AND",
          "Thực hiện phép NOR và NAND",
          "Thực hiện phép OR và NAND"
      ],
      "<p>Half Adder tính bit tổng $S = A \\oplus B$ (phép <strong>XOR</strong>) và bit nhớ ra $C_{\\text{out}} = A \\cdot B$ (phép <strong>AND</strong>).</p>")

add_q("c4-4.5b", "4.2.2", G4_2, "Bài tập 4.5b", "Slide Chương 4 - Trang 38 & Ôn tập 2025.2 - P1, Câu 25", ["LT", "CK"], 111, "4.1.2",
      "Bộ cộng toàn phần 1-bit (Full Adder) có đầu vào $(A, B, C) = (1, 1, 0)$. Hãy xác định giá trị đầu ra $(S, C_{\\text{out}})$?",
      ["(0, 1)", "(0, 0)", "(1, 0)", "(1, 1)"],
      "<p>Cộng 3 bit: $A + B + C = 1 + 1 + 0 = 2_{10} = 10_2 \\Rightarrow S = 0$, bit nhớ $C_{\\text{out}} = 1 \\Rightarrow$ <strong>(0, 1)</strong>.</p>")

# ==============================================================================
# NHÓM 3: MÃ BÙ 2 - BÀI 4.6 -> 4.14 (21 câu)
# ==============================================================================
G4_3 = "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)"
add_q("c4-4.6a", "4.2.3", G4_3, "Bài tập 4.6a", "Đề GK 2018.2 - Mã 198 C6 & Mã 199 C10", ["GK"], 111, "4.1.3",
      "Số âm $-127_{(10)}$ bằng với số nào trong các số biểu diễn nhị phân 8-bit có dấu sau đây?",
      ["1000 0001", "1000 0000", "-0111 1111", "0111 1111"],
      "<p>$+127 = 0111\\;1111_2$. Đảo bit $\\rightarrow 1000\\;0000$, cộng 1 $\\rightarrow \\mathbf{1000\\;0001_2}$ ($-128 + 1 = -127$).</p>")

add_q("c4-4.6b", "4.2.3", G4_3, "Bài tập 4.6b", "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 8", ["GK"], 111, "4.1.3",
      "Số nguyên $-77_{(10)}$ được biểu diễn dưới dạng số nhị phân 8-bit bù 2 là?",
      ["1011 0011", "0100 1101", "1011 1011", "1011 0010"],
      "<p>$+77 = 64+8+4+1 = 0100\\;1101_2 \\xrightarrow{\\text{bù 1}} 1011\\;0010_2 \\xrightarrow{+1} \\mathbf{1011\\;0011_2}$.</p>")

add_q("c4-4.7a", "4.2.3", G4_3, "Bài tập 4.7a", "Đề Giữa kỳ 2019.2 - Mã đề 243, Câu 9", ["GK"], 112, "4.1.3",
      "Số nguyên 8-bit nào sau đây có dạng biểu diễn ở hệ 16 là <code>0xB2</code>?",
      ["Là số 10110010 ở hệ 2", "Là số 177 ở hệ 10, không dấu", "Là số 00100010 ở hệ 2", "Là số 179 ở hệ 10, không dấu"],
      "<p>$\\text{B} = 1011_2$, $2 = 0010_2 \\Rightarrow \\text{0xB2} = \\mathbf{10110010_2}$ ($= 178_{10}$ không dấu).</p>")

add_q("c4-4.7b", "4.2.3", G4_3, "Bài tập 4.7b", "Đề Giữa kỳ 2019.2 - Mã đề 244, Câu 15", ["GK"], 112, "4.1.3",
      "Số nguyên 8-bit nào sau đây có dạng biểu diễn ở hệ 16 là <code>0xB2</code>?",
      ["Là số -78 ở hệ 10, có dấu", "Là số 177 ở hệ 10, không dấu", "Là số 00100010 ở hệ 2", "Là số 10100000 ở hệ 2"],
      "<p>$\\text{0xB2} = 1011\\;0010_2$. Xét số 8-bit có dấu: $-128 + 32 + 16 + 2 = \\mathbf{-78_{(10)}}$.</p>")

add_q("c4-4.8", "4.2.3", G4_3, "Bài tập 4.8", "Đề Cuối kỳ 2020.2 & 2021.1 - Trang 2", ["CK"], 112, "4.1.3",
      "Giả sử biến $i$ là biến số nguyên có dấu kích thước 8-bit lưu trữ với giá trị Hexa $i = \\text{0x8E}$. Giá trị thập phân của $i$ là:",
      ["-114", "142", "-113", "-14"],
      "<p>$\\text{0x8E} = 1000\\;1110_2$. Với số 8-bit có dấu: $-128 + 8 + 4 + 2 = \\mathbf{-114}$.</p>",
      True, "Nhập số nguyên:", ["-114"])

add_q("c4-4.9", "4.2.3", G4_3, "Bài tập 4.9", "Đề CK 2022.2 - #f9c617, 2024.2 & Ôn tập 2025.2 - P1, Câu 69", ["CK"], 113, "4.1.3",
      "Giả thiết $k$ là biến số nguyên có dấu 16-bit, cho $k = -68$. Nội dung $k$ biểu diễn theo số Hexa là:",
      ["0xFFBC", "0x00BC", "0x8044", "0xFF44"],
      "<p>$+68 = \\text{0x0044} = 0000\\;0000\\;0100\\;0100_2$. Đảo bit $\\rightarrow 1111\\;1111\\;1011\\;1011_2$, cộng $1 \\rightarrow \\mathbf{\\text{0xFFBC}}$.</p>",
      True, "Nhập mã Hexa 16-bit:", ["0xFFBC", "FFBC"])

add_q("c4-4.10a", "4.2.3", G4_3, "Bài tập 4.10a", "Đề CK 2022.2, 2024.2 - #7151 & Ôn tập 2025.2 Câu 73", ["CK"], 113, "4.1.3",
      "Giả thiết $i$ là biến số nguyên có dấu 32-bit, cho nội dung $i = \\text{0xFFFFFFF3}$. Giá trị của $i$ theo số thập phân là:",
      ["-13", "-4", "-3", "-12"],
      "<p>Do 7 chữ số đầu đều là <code>F</code>, lấy chữ số cuối trừ 16: $3 - 16 = \\mathbf{-13}$.</p>",
      True, "Nhập số thập phân:", ["-13"])

add_q("c4-4.10b", "4.2.3", G4_3, "Bài tập 4.10b", "Đề CK 2024.1 - #0182da & Ôn tập 2025.2 Câu 45", ["CK"], 113, "4.1.3",
      "Giả thiết $i$ là biến số nguyên có dấu 32-bit, cho nội dung $i = \\text{0xFFFFFFF4}$. Giá trị của $i$ theo số thập phân là:",
      ["-12", "-11", "-4", "12"],
      "<p>Lấy chữ số cuối trừ 16: $4 - 16 = \\mathbf{-12}$.</p>",
      True, "Nhập số thập phân:", ["-12"])

add_q("c4-4.11a", "4.2.3", G4_3, "Bài tập 4.11a", "Đề Cuối kỳ 2023.1 - #581f03", ["CK"], 114, "4.1.3",
      "Cho lệnh hợp ngữ RISC-V: <code>addi t0, s0, 0xFFA</code> (hằng số 12-bit dạng bù 2). Giá trị thập phân của toán hạng tức thời này là:",
      ["-6", "4010", "-4010", "6"],
      "<p>Với hằng số 12-bit có dấu <code>0xFFA</code> (hai chữ đầu là FF, chữ cuối $A=10$): $10 - 16 = \\mathbf{-6}$.</p>",
      True, "Nhập số thập phân:", ["-6"])

add_q("c4-4.11b", "4.2.3", G4_3, "Bài tập 4.11b", "Đề GK 2024.1 - #30a33e & Ôn tập 2025.2 Câu 48", ["GK", "CK"], 114, "4.1.3",
      "Giá trị thập phân của toán hạng immediate trong lệnh <code>addi t0, s0, 0x1FF</code> là bao nhiêu?",
      ["511", "-511", "2047", "-2047"],
      "<p><code>0x1FF</code> có bit dấu bằng 0 (số dương): $1\\times 16^2 + 15\\times 16 + 15 = 256 + 240 + 15 = \\mathbf{511}$.</p>",
      True, "Nhập số thập phân:", ["511"])

add_q("c4-4.12a", "4.2.3", G4_3, "Bài tập 4.12a", "Đề Giữa kỳ 2023.2 - Đề 1, Câu 2", ["GK"], 114, "4.1.3",
      "Biểu diễn hai số nguyên có dấu $+105$ và $-42$ theo mã bù hai 8-bit và 16-bit dưới dạng số Hexa lần lượt là:",
      [
          "+105: 0x69 (8b), 0x0069 (16b) ; -42: 0xD6 (8b), 0xFFD6 (16b)",
          "+105: 0x69 (8b), 0x0069 (16b) ; -42: 0xD5 (8b), 0xFFD5 (16b)",
          "+105: 0x59 (8b), 0x0059 (16b) ; -42: 0xAA (8b), 0xFFAA (16b)",
          "+105: 0x69 (8b), 0xFF69 (16b) ; -42: 0xD6 (8b), 0x00D6 (16b)"
      ],
      "<ul><li>$+105 = 64+32+8+1 = 0110\\;1001_2 = \\text{0x69}$ (16-bit mở rộng 0: <code>0x0069</code>).</li><li>$+42 = 0010\\;1010_2 \\xrightarrow{\\text{bù 2}} 1101\\;0110_2 = \\text{0xD6}$ (16-bit mở rộng dấu F: <code>0xFFD6</code>).</li></ul>")

add_q("c4-4.12b", "4.2.3", G4_3, "Bài tập 4.12b", "Đề Giữa kỳ 2022.2 - Đề 0008 C4 & Đề 0006 C2", ["GK"], 114, "4.1.3",
      "Trong biểu diễn số nguyên 8-bit có dấu (bù 2), cặp mã Hexa của hai số $-86$ và $-19$, cùng giá trị thập phân của <code>0011 1101</code> ($\\text{0x3D}$) lần lượt là:",
      [
          "-86 = 0xAA ; -19 = 0xED ; 0x3D = +61",
          "-86 = 0xAC ; -19 = 0xEC ; 0x3D = +61",
          "-86 = 0xA9 ; -19 = 0xED ; 0x3D = +59",
          "-86 = 0xAA ; -19 = 0xEF ; 0x3D = +63"
      ],
      "<ul><li>$-86$: $+86 = 0101\\;0110_2 \\xrightarrow{\\text{bù 2}} 1010\\;1010_2 = \\text{0xAA}$.</li><li>$-19$: $+19 = 0001\\;0011_2 \\xrightarrow{\\text{bù 2}} 1110\\;1101_2 = \\text{0xED}$.</li><li>$0011\\;1101_2 = 32+16+8+4+1 = +61$.</li></ul>")

add_q("c4-4.13a", "4.2.3", G4_3, "Bài tập 4.13a", "Đề Giữa kỳ 2018.2 - Mã đề 198, Câu 16", ["GK"], 115, "4.1.3",
      "Cho 4 số nguyên 16-bit <strong>có dấu</strong> có mã Hexa tương ứng: <code>8792</code>, <code>2763</code>, <code>F652</code>, <code>A876</code>. Số nào là số lớn nhất?",
      ["2763", "A876", "F652", "8792"],
      "<p>Ba số <code>8792, F652, A876</code> đều bắt đầu bằng chữ số $\\ge 8$ (bit dấu = 1 $\\Rightarrow$ số âm). Chỉ duy nhất <code>2763</code> bắt đầu bằng $2 &lt; 8$ là số dương $\\Rightarrow$ lớn nhất.</p>",
      True, "Nhập mã Hexa:", ["2763", "0x2763"])

add_q("c4-4.13b", "4.2.3", G4_3, "Bài tập 4.13b", "Đề Giữa kỳ 2018.2 - Mã đề 204, Câu 17", ["GK"], 115, "4.1.3",
      "Cho 4 số nguyên 16-bit <strong>không dấu</strong> có mã Hexa tương ứng: <code>8792</code>, <code>2763</code>, <code>F652</code>, <code>A876</code>. Số nào là số lớn nhất?",
      ["F652", "8792", "A876", "2763"],
      "<p>Khi xét số không dấu, so sánh trực tiếp từ trái sang phải: $F &gt; A &gt; 8 &gt; 2 \\Rightarrow$ lớn nhất là <strong>F652</strong>.</p>",
      True, "Nhập mã Hexa:", ["F652", "0xF652"])

add_q("c4-4.13c", "4.2.3", G4_3, "Bài tập 4.13c", "Đề Giữa kỳ 2018.2 - Mã đề 199, Câu 11", ["GK"], 115, "4.1.3",
      "Cho 4 số nguyên 16-bit <strong>không dấu</strong> có mã Hexa: <code>79F1</code>, <code>2AB7</code>, <code>8000</code>, <code>FFAA</code>. Số nào là số nhỏ nhất?",
      ["2AB7", "8000", "79F1", "FFAA"],
      "<p>So sánh chữ số Hexa đầu tiên: $2 &lt; 7 &lt; 8 &lt; F \\Rightarrow$ nhỏ nhất là <strong>2AB7</strong>.</p>",
      True, "Nhập mã Hexa:", ["2AB7", "0x2AB7"])

add_q("c4-4.14a", "4.2.3", G4_3, "Bài tập 4.14a", "Đề Giữa kỳ 2022.2 - Đề 0006, Câu 1", ["GK"], 115, "4.1.3",
      "Sắp xếp 3 số nguyên 8-bit <strong>có dấu</strong> sau theo thứ tự <strong>giảm dần</strong>: $-108$ (hệ 10), $0001\\;0001$ (hệ 2), $91$ (hệ 16)?",
      [
          "0001 0001 > -108 > 91",
          "91 > 0001 0001 > -108",
          "91 > -108 > 0001 0001",
          "-108 > 91 > 0001 0001"
      ],
      "<p>$0001\\;0001_2 = +17$; $\\text{0x91} = 1001\\;0001_2 = -128 + 16 + 1 = -111$. Vì $+17 &gt; -108 &gt; -111$ nên giảm dần là: <strong>0001 0001 &gt; -108 &gt; 91</strong>.</p>")

add_q("c4-4.14b", "4.2.3", G4_3, "Bài tập 4.14b", "Đề Giữa kỳ 2022.2 - Đề 0009, Câu 2", ["GK"], 115, "4.1.3",
      "Mảng A gồm 3 phần tử 8-bit <strong>có dấu</strong> ở địa chỉ cơ sở <code>0x40000E</code> lần lượt là: <code>0xCE</code>, <code>0x12</code>, <code>0x20</code>. Thứ tự giá trị <strong>tăng dần</strong> là:",
      ["0xCE < 0x12 < 0x20", "0x12 < 0x20 < 0xCE", "0x20 < 0x12 < 0xCE", "0x12 < 0xCE < 0x20"],
      "<p><code>0xCE</code> bắt đầu bằng $C \\ge 8$ nên là số âm ($-50$), còn <code>0x12</code> ($+18$) $&lt;$ <code>0x20</code> ($+32$) $\\Rightarrow$ <strong>0xCE &lt; 0x12 &lt; 0x20</strong>.</p>")

add_q("c4-4.14c", "4.2.3", G4_3, "Bài tập 4.14c", "Đề Giữa kỳ 2022.2 - Đề 0008, Câu 2", ["GK"], 116, "4.1.3",
      "Mảng A gồm 3 phần tử 8-bit <strong>có dấu</strong> ở địa chỉ cơ sở <code>0x400008</code> lần lượt là: <code>0x38</code>, <code>0x00</code>, <code>0xD6</code>. Thứ tự giá trị <strong>tăng dần</strong> là:",
      ["0xD6 < 0x00 < 0x38", "0x00 < 0x38 < 0xD6", "0x00 < 0xD6 < 0x38", "0x38 < 0x00 < 0xD6"],
      "<p><code>0xD6</code> là số âm ($-42$), còn $0 &lt; 56$ (`0x38`) $\\Rightarrow$ <strong>0xD6 &lt; 0x00 &lt; 0x38</strong>.</p>")

add_q("c4-4.14d", "4.2.3", G4_3, "Bài tập 4.14d", "Đề Giữa kỳ 2025.2 - Đề 0013, Câu 73", ["GK"], 116, "4.1.3",
      "Mảng A gồm 3 phần tử 8-bit <strong>có dấu</strong> tại <code>0x400009..0x40000B</code> (Memory Map Đề 0013) lần lượt là: <code>0xDE</code>, <code>0x74</code>, <code>0x00</code>. Thứ tự giá trị <strong>tăng dần</strong> là:",
      ["0xDE < 0x00 < 0x74", "0x00 < 0x74 < 0xDE", "0x00 < 0xDE < 0x74", "0x74 < 0x00 < 0xDE"],
      "<p><code>0xDE</code> bắt đầu bằng $D \\ge 8$ là số âm ($-34$), tiếp đến <code>0x00</code> ($0$) rồi <code>0x74</code> ($+116$) $\\Rightarrow$ <strong>0xDE &lt; 0x00 &lt; 0x74</strong>.</p>")

add_q("c4-4.14e", "4.2.3", G4_3, "Bài tập 4.14e", "Đề Giữa kỳ 2025.2 - Đề 0013, Câu 942", ["GK"], 116, "4.1.3",
      "Mảng A gồm 3 phần tử 8-bit <strong>có dấu</strong> tại <code>0x400014..0x400016</code> lần lượt là: <code>0xB7</code>, <code>0x59</code>, <code>0x34</code>. Thứ tự giá trị <strong>tăng dần</strong> là:",
      ["0xB7 < 0x34 < 0x59", "0x34 < 0x59 < 0xB7", "0x59 < 0x34 < 0xB7", "0x34 < 0xB7 < 0x59"],
      "<p><code>0xB7</code> là số âm ($-73$), còn <code>0x34</code> ($+52$) $&lt;$ <code>0x59</code> ($+89$) $\\Rightarrow$ <strong>0xB7 &lt; 0x34 &lt; 0x59</strong>.</p>")

add_q("c4-4.14f", "4.2.3", G4_3, "Bài tập 4.14f", "Đề Giữa kỳ 2025.2 - Đề 0012, Câu 106", ["GK"], 116, "4.1.3",
      "Mảng A gồm 3 phần tử 8-bit <strong>có dấu</strong> tại <code>0x400009..0x40000B</code> (Memory Map Đề 0012) lần lượt là: <code>0x0B</code>, <code>0x8B</code>, <code>0x03</code>. Thứ tự giá trị <strong>tăng dần</strong> là:",
      ["0x8B < 0x03 < 0x0B", "0x03 < 0x0B < 0x8B", "0x0B < 0x8B < 0x03", "0x03 < 0x8B < 0x0B"],
      "<p><code>0x8B</code> là số âm ($-117$), còn <code>0x03</code> ($+3$) $&lt;$ <code>0x0B</code> ($+11$) $\\Rightarrow$ <strong>0x8B &lt; 0x03 &lt; 0x0B</strong>.</p>")

# ==============================================================================
# NHÓM 4: CỘNG/TRỪ SỐ NGUYÊN & OVERFLOW - BÀI 4.15 -> 4.22 (15 câu)
# ==============================================================================
G4_4 = "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)"
add_q("c4-4.15", "4.2.4", G4_4, "Bài tập 4.15", "Đề GK 2018.2 - Mã 198 C8 & Mã 199 C9", ["GK"], 116, "4.1.4",
      "Thực hiện phép cộng hai số 8-bit không dấu $1010\\;1000 + 1111\\;1010$, kết quả 8 bit lưu trong thanh ghi sẽ bằng bao nhiêu?",
      ["1010 0010", "1000 0010", "1000 0100", "1010 0100"],
      "<p>4 bit thấp: $1000 + 1010 = 1\\;0010$ (viết <code>0010</code>, nhớ $1$). 4 bit cao: $1010 + 1111 + 1 = 1\\;1010$ (giữ <code>1010</code>, $C_{\\text{out}}=1$). Vậy 8 bit kết quả là <strong>1010 0010</strong>.</p>",
      True, "Nhập 8 bit kết quả:", ["10100010", "1010 0010"])

add_q("c4-4.16", "4.2.4", G4_4, "Bài tập 4.16", "Ôn tập Cuối kỳ 2025.2 - P1, Câu 2", ["CK"], 117, "4.1.4",
      "Xét 4 khẳng định khi thực hiện phép cộng hai số nguyên $n$-bit:<br>(1) Cộng không dấu $n$-bit, nếu $C_{\\text{out}} = 1 \\rightarrow$ kết quả sai.<br>(2) Cộng có dấu $n$-bit, nếu $C_{\\text{out}} = 1$ và cùng dấu $\\rightarrow$ kết quả sai.<br>(3) Cộng có dấu $n$-bit, nếu hai số trái dấu $\\rightarrow$ kết quả đúng.<br>(4) Cộng có dấu cùng dấu ra kết quả cùng dấu $\\rightarrow$ chưa kết luận được.<br>Những khẳng định nào ĐÚNG?",
      ["Chỉ (1) và (3)", "Chỉ (1) và (2)", "Chỉ (2) và (3)", "Cả (1), (3) và (4)"],
      "<ul><li>(1) Đúng: cộng không dấu tràn khi $C_{\\text{out}} = 1$.</li><li>(2) Sai: vd $(-1)+(-1)=-2$ có $C_{\\text{out}}=1$ nhưng kết quả vẫn đúng.</li><li>(3) Đúng: cộng 2 số trái dấu không bao giờ tràn.</li><li>(4) Sai: cộng cùng dấu ra cùng dấu chắc chắn đúng.</li></ul>")

add_q("c4-4.17a", "4.2.4", G4_4, "Bài tập 4.17a", "Đề Giữa kỳ 2019.2 - Mã đề 243, Câu 12", ["GK"], 117, "4.1.4",
      "Tổng của 2 số 8-bit <strong>có dấu</strong> nào dưới đây sẽ bị hiện tượng tràn số học (Overflow)?",
      [
          "10010001 + 11001000",
          "01010001 + 00101100",
          "10010001 + 01001000",
          "00010001 + 11001000"
      ],
      "<p>Loại các cặp trái dấu. Xét <code>10010001 + 11001000</code> $= (-111) + (-56) = -167 &lt; -128$ (cộng 2 số âm ra dương <code>01011001</code>) $\\Rightarrow$ <strong>Tràn âm</strong>.</p>")

add_q("c4-4.17b", "4.2.4", G4_4, "Bài tập 4.17b", "Đề Giữa kỳ 2019.2 - Mã đề 244, Câu 5", ["GK"], 118, "4.1.4",
      "Tổng của 2 số 8-bit <strong>có dấu</strong> nào dưới đây sẽ bị hiện tượng tràn số học (Overflow)?",
      [
          "01010001 + 01001000",
          "00010001 + 11001000",
          "00011001 + 00111000",
          "10010001 + 01001000"
      ],
      "<p>Xét <code>01010001 + 01001000</code> $= (+81) + (+72) = +153 &gt; +127$ (cộng 2 số dương ra kết quả bit dấu bằng 1) $\\Rightarrow$ <strong>Tràn dương</strong>.</p>")

add_q("c4-4.18", "4.2.4", G4_4, "Bài tập 4.18", "Đề CK 2022.2 - #6d82ac, 2024.2 & Ôn tập 2025.2 - P1, Câu 66", ["CK"], 118, "4.1.4",
      "Trong C, biến kiểu <code>char</code> là số nguyên có dấu 8-bit. Kết quả của biến <code>sum</code> in ra màn hình khi chạy đoạn chương trình dưới đây là:",
      ["98", "-98", "-158", "158"],
      "<p>Tổng toán học $S = -91 + (-67) = -158 &lt; -128$ (tràn âm 8-bit). Lấy $-158 + 256 = \\mathbf{+98}$.</p>",
      True, "Nhập giá trị sum:", ["98"],
      "#include <stdio.h>\nint main() {\n    char a = -91;\n    char b = -67;\n    char sum = a + b;\n    printf(\"sum = %d\", sum);\n    return 0;\n}", "c")

add_q("c4-4.19a", "4.2.4", G4_4, "Bài tập 4.19a", "Đề Cuối kỳ 2025.1 - #e3221e", ["CK"], 119, "4.1.4",
      "Giả thiết các biến đều là số nguyên 8-bit có dấu (<code>signed char</code>). Cho $x = 85$, $y = 52$. Tính $z = x + y$?",
      ["-119", "137", "-137", "119"],
      "<p>$S = 85 + 52 = 137 &gt; 127$ (tràn dương) $\\Rightarrow z = 137 - 256 = \\mathbf{-119}$.</p>",
      True, "Nhập giá trị z:", ["-119"])

add_q("c4-4.19b", "4.2.4", G4_4, "Bài tập 4.19b", "Đề GK 2024.1 - #f2d536 & Ôn tập 2025.2 Câu 40", ["GK", "CK"], 119, "4.1.4",
      "Với số nguyên 8-bit có dấu (<code>signed char</code>), kết quả của phép cộng $+65 + 65$ lưu trong biến 8-bit là:",
      ["-126", "130", "-127", "-128"],
      "<p>$S = 65 + 65 = 130 &gt; 127$ (tràn dương) $\\Rightarrow 130 - 256 = \\mathbf{-126}$.</p>",
      True, "Nhập kết quả:", ["-126"])

add_q("c4-4.19c", "4.2.4", G4_4, "Bài tập 4.19c", "Đề Giữa kỳ 2022.2 - Đề 0007, Câu 1a", ["GK"], 119, "4.1.4",
      "Với số nguyên 8-bit có dấu (<code>signed char</code>), kết quả của phép cộng $5 + 125$ lưu trong biến 8-bit là:",
      ["-126", "130", "-125", "127"],
      "<p>$S = 5 + 125 = 130 &gt; 127 \\Rightarrow 130 - 256 = \\mathbf{-126}$.</p>",
      True, "Nhập kết quả:", ["-126"])

add_q("c4-4.19d", "4.2.4", G4_4, "Bài tập 4.19d", "Đề Giữa kỳ 2022.2 - Đề 0007, Câu 1b", ["GK"], 119, "4.1.4",
      "Với số nguyên 8-bit có dấu (<code>signed char</code>), kết quả của phép cộng $(-108) + (-42)$ lưu trong biến 8-bit là:",
      ["+106", "-150", "-106", "+150"],
      "<p>$S = -108 - 42 = -150 &lt; -128$ (tràn âm) $\\Rightarrow -150 + 256 = \\mathbf{+106}$.</p>",
      True, "Nhập kết quả:", ["106", "+106"])

add_q("c4-4.20a", "4.2.4", G4_4, "Bài tập 4.20a", "Đề CK 2023.1 - #cd9132 & Ôn tập 2025.2 Câu 7", ["CK"], 119, "4.1.4",
      "Thanh ghi <code>s0</code> đang lưu giá trị thập phân $1024$. Phạm vi giá trị của thanh ghi <code>s1</code> để gây ra tràn số học (Overflow) khi thực hiện <code>add s2, s0, s1</code> là:",
      [
          "0x7FFFFC00 - 0x7FFFFFFF",
          "0x7FFFFC01 - 0x80000000",
          "0x7FFFFBFF - 0x7FFFFFFF",
          "0x7FFFFC00 - 0x80000000"
      ],
      "<p>$K = 1024 = \\text{0x400}$. Ngưỡng nhỏ nhất gây tràn là $\\text{0x80000000} - \\text{0x400} = \\text{0x7FFFFC00}$, cận trên dương tối đa là <code>0x7FFFFFFF</code>.</p>")

add_q("c4-4.20b", "4.2.4", G4_4, "Bài tập 4.20b", "Đề Giữa kỳ 2024.1 - #e83dac", ["GK"], 119, "4.1.4",
      "Thanh ghi <code>t0</code> đang lưu giá trị thập phân $512$. Phạm vi giá trị nào của thanh ghi <code>t1</code> sẽ gây ra tràn số học khi thực hiện lệnh <code>add t2, t0, t1</code>?",
      [
          "0x7FFFFE00 - 0x7FFFFFFF",
          "0x7FFFFD00 - 0x7FFFFFFF",
          "0x7FFFFDFF - 0x7FFFFFFF",
          "0x7FFFFE00 - 0x80000000"
      ],
      "<p>$K = 512 = \\text{0x200}$. Ngưỡng nhỏ nhất gây tràn: $\\text{0x80000000} - \\text{0x200} = \\text{0x7FFFFE00}$ đến $\\text{0x7FFFFFFF}$.</p>")

add_q("c4-4.21", "4.2.4", G4_4, "Bài tập 4.21", "Ôn tập CK 2025.1 C15 & Ôn tập 2025.2 - P2 C59", ["CK"], 120, "4.1.4",
      "Đoạn lệnh RISC-V nào sau đây có xảy ra hiện tượng tràn số học (OVERFLOW)?",
      [
          "li x8, 0xFFFFFFFF -> li x9, 0x80000000 -> add x10, x8, x9",
          "li x8, 0xFFFFFFFF -> li x9, 0xFFFFFFFF -> add x10, x8, x9",
          "li x8, 0xFFFFFFFF -> li x9, 0x80000000 -> sub x10, x8, x9",
          "li x8, 0xFFFFFFFF -> li x9, 0xFFFFFFFF -> sub x10, x8, x9"
      ],
      "<p><code>0xFFFFFFFF</code> $= -1$, <code>0x80000000</code> $= -2^{31}$ (số âm nhỏ nhất 32-bit). Thực hiện <code>add</code> cho $(-1) + (-2^{31}) = -(2^{31}+1) &lt; -2^{31}$ nên lật thành số dương $\\Rightarrow$ <strong>Overflow</strong>.</p>")

add_q("c4-4.22a", "4.2.4", G4_4, "Bài tập 4.22 (Ý 4.1)", "Đề Giữa kỳ 2021.1 - IT3030E, Problem 4.1", ["GK"], 121, "4.1.4",
      "Cho $s_0 = \\text{0x80000000}$ và $s_1 = \\text{0xD0000000}$. Sau lệnh <code>add t0, s0, s1</code>, giá trị Hexa của <code>t0</code> và trạng thái tràn số học (Overflow) là:",
      ["t0 = 0x50000000 ; Có tràn số học (Overflow)", "t0 = 0x50000000 ; Không tràn số học", "t0 = 0xB0000000 ; Có tràn số học", "t0 = 0xD0000000 ; Không tràn số học"],
      "<p>Cộng 2 số âm ($s_0 &lt; 0, s_1 &lt; 0$): $8 + D = 15_{16} \\Rightarrow t_0 = \\text{0x50000000}$ (bit dấu = 0, số dương) $\\Rightarrow$ <strong>Có Overflow</strong>.</p>")

add_q("c4-4.22b", "4.2.4", G4_4, "Bài tập 4.22 (Ý 4.2)", "Đề Giữa kỳ 2021.1 - IT3030E, Problem 4.2", ["GK"], 121, "4.1.4",
      "Cho $s_0 = \\text{0x80000000}$ và $s_1 = \\text{0xD0000000}$. Sau lệnh <code>sub t0, s0, s1</code>, giá trị Hexa của <code>t0</code> và trạng thái tràn số học là:",
      ["t0 = 0xB0000000 ; Không tràn số học", "t0 = 0x50000000 ; Có tràn số học", "t0 = 0xB0000000 ; Có tràn số học", "t0 = 0x30000000 ; Không tràn số học"],
      "<p>$s_0 - s_1 = \\text{0x80000000} + (-\\text{0xD0000000}) = \\text{0x80000000} + \\text{0x30000000} = \\text{0xB0000000}$. Do cộng hai số trái dấu ($s_0 &lt; 0$ và $-s_1 &gt; 0$) nên <strong>Không tràn</strong>.</p>")

add_q("c4-4.22c", "4.2.4", G4_4, "Bài tập 4.22 (Ý 4.3)", "Đề Giữa kỳ 2021.1 - IT3030E, Problem 4.3", ["GK"], 121, "4.1.4",
      "Cho $s_0 = \\text{0x80000000}$ và $s_1 = \\text{0xD0000000}$. Sau hai lệnh <code>add t0, s0, s1</code> rồi <code>add t0, t0, s0</code>, kết quả cuối cùng trong <code>t0</code> là:",
      [
          "t0 = 0xD0000000 (lệnh 1 tràn, bản thân lệnh 2 cộng trái dấu không tràn)",
          "t0 = 0xD0000000 (cả 2 lệnh đều tràn)",
          "t0 = 0x50000000 (không lệnh nào tràn)",
          "t0 = 0x00000000 (tràn âm ở lệnh 2)"
      ],
      "<p>Sau lệnh 1: $t_0 = \\text{0x50000000}$ (tràn). Lệnh 2 tính $\\text{0x50000000} + \\text{0x80000000} = \\text{0xD0000000}$ (cộng dương với âm nên bản thân lệnh 2 không tràn).</p>")

# ==============================================================================
# NHÓM 5: LỆNH CHIA & PHẦN DƯ (div, rem) - BÀI 4.23 (1 câu)
# ==============================================================================
G4_5 = "Nhóm 5: Lệnh Chia và Lấy phần dư số nguyên (div, rem)"
add_q("c4-4.23", "4.2.5", G4_5, "Bài tập 4.23", "Đề Giữa kỳ 2024.1 - #054a4a", ["GK"], 122, "4.1.4",
      "Giá trị của các thanh ghi <code>t0, t1</code> sau khi thực hiện đoạn mã RISC-V dưới đây là gì?",
      [
          "t0 = 0xfffffffb, t1 = 0x00000002",
          "t0 = 0xfffffffb, t1 = 0x00000010",
          "t0 = 0x00000005, t1 = 0xfffffffd",
          "t0 = 0xfffffffb, t1 = 0x00000005"
      ],
      "<p>$s_0 = +67$, $s_1 = -13$: Thương $t_0 = 67 / (-13) = -5 = \\mathbf{\\text{0xfffffffb}}$. Phần dư luôn cùng dấu số bị chia ($+67 &gt; 0$): $t_1 = +2 = \\mathbf{\\text{0x00000002}}$.</p>",
      False, "", [],
      "li s0, 67\nli s1, -13\ndiv t0, s0, s1\nrem t1, s0, s1", "riscv")

# ==============================================================================
# NHÓM 6: IEEE 754 (32-BIT) - BÀI 4.24 -> 4.30 (14 câu)
# ==============================================================================
G4_6 = "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)"
add_q("c4-4.24a", "4.2.6", G4_6, "Bài tập 4.24a", "Đề Giữa kỳ 2019.2 - Mã đề 243, Câu 2", ["GK"], 123, "4.1.5",
      "Số thực dấu phẩy động chuẩn IEEE 754 <strong>không thể</strong> biểu diễn chính xác tuyệt đối được số nào dưới đây?",
      ["0.4", "0.5", "12", "2"],
      "<p>$0.4 = \\frac{2}{5}$ có mẫu chia hết cho $5$ nên khi đổi sang nhị phân tạo thành dãy bit tuần hoàn vô hạn $0.01100110\\dots_2$, không thể biểu diễn chính xác tuyệt đối.</p>",
      True, "Nhập số:", ["0.4"])

add_q("c4-4.24b", "4.2.6", G4_6, "Bài tập 4.24b", "Đề Giữa kỳ 2019.2 - Mã đề 244, Câu 17", ["GK"], 123, "4.1.5",
      "Số thực dấu phẩy động chuẩn IEEE 754 <strong>không thể</strong> biểu diễn chính xác tuyệt đối được số nào dưới đây?",
      ["0.7", "-8", "-1", "1"],
      "<p>$0.7 = \\frac{7}{10}$ có mẫu chứa thừa số nguyên tố $5 \\neq 2$, lặp vô hạn tuần hoàn trong hệ nhị phân nên bị làm tròn.</p>",
      True, "Nhập số:", ["0.7"])

add_q("c4-4.25", "4.2.6", G4_6, "Bài tập 4.25", "Đề Giữa kỳ 2018.2 - Mã đề 198, Câu 5", ["GK"], 123, "4.1.5",
      "Số dấu phẩy động 32-bit IEEE 754 sau có giá trị thập phân bằng bao nhiêu?<br><code>1100 0000 1000 0000 0000 0000 0000 0000</code>",
      ["-4", "-5", "-2.5", "-8"],
      "<p>$S = 1$ (âm); $e = 1000\\;0001_2 = 129 \\Rightarrow E = 129 - 127 = 2$; $m = 0 \\Rightarrow 1.m = 1.0$. Giá trị $X = -1.0 \\times 2^2 = \\mathbf{-4}$.</p>",
      True, "Nhập số thập phân:", ["-4"])

add_q("c4-4.26a", "4.2.6", G4_6, "Bài tập 4.26a", "Đề CK 2022.2, 2024.2 - #bd4c95 & Ôn tập 2025.2 C53", ["CK"], 124, "4.1.5",
      "Giả thiết $X$ là biến số dấu phẩy động chuẩn IEEE 754 32-bit có nội dung $X = \\text{0x40400000}$. Giá trị thập phân của $X$ là:",
      ["3", "-3", "2", "4"],
      "<p><code>404</code> $= 0100\\;0000\\;0100_2 \\Rightarrow S=0, e=128\\; (E=1), 1.m = 1.1_2 = 1.5 \\Rightarrow X = +1.5\\times 2^1 = \\mathbf{3}$.</p>",
      True, "Nhập giá trị X:", ["3"])

add_q("c4-4.26b", "4.2.6", G4_6, "Bài tập 4.26b", "Đề CK 2024.1 - #e73be8 & Ôn tập 2025.2 C39", ["CK"], 124, "4.1.5",
      "Cho nội dung $X = \\text{0x40A00000}$ theo chuẩn IEEE 754 32-bit. Giá trị thập phân của $X$ là:",
      ["5", "6", "-5", "4"],
      "<p><code>40A</code> $= 0100\\;0000\\;1010_2 \\Rightarrow S=0, e=129\\; (E=2), 1.m = 1.01_2 = 1.25 \\Rightarrow X = +1.25\\times 2^2 = \\mathbf{5}$.</p>",
      True, "Nhập giá trị X:", ["5"])

add_q("c4-4.27a", "4.2.6", G4_6, "Bài tập 4.27a", "Đề Giữa kỳ 2024.1 - #94ec4c", ["GK"], 125, "4.1.5",
      "Số thực dấu phẩy động IEEE 754 32-bit được biểu diễn bởi word <code>0xC11A0000</code> có giá trị thập phân là:",
      ["-9.625", "-9.375", "-10.625", "+9.625"],
      "<p><code>C11A</code> $= 1100\\;0001\\;0001\\;1010_2 \\Rightarrow S=1, e=130\\; (E=3), 1.m = 1.001101_2$. Dịch dấu phẩy 3 bit: $-1001.101_2 = -(8+1+0.5+0.125) = \\mathbf{-9.625}$.</p>",
      True, "Nhập số thập phân:", ["-9.625"])

add_q("c4-4.27b", "4.2.6", G4_6, "Bài tập 4.27b", "Ôn tập Cuối kỳ 2025.2 - P1, Câu 30", ["CK"], 125, "4.1.5",
      "Giả thiết $X$ là số thực dấu phẩy động IEEE 754 32-bit được biểu diễn bởi <code>0xC1E00000</code>. Giá trị của $X$ ở hệ thập phân là:",
      ["-28", "-14", "-24", "-30"],
      "<p><code>C1E</code> $= 1100\\;0001\\;1110_2 \\Rightarrow S=1, e=131\\; (E=4), 1.m = 1.11_2$. Dịch dấu phẩy 4 bit: $-11100_2 = -(16+8+4) = \\mathbf{-28}$.</p>",
      True, "Nhập số thập phân:", ["-28"])

add_q("c4-4.28a", "4.2.6", G4_6, "Bài tập 4.28a", "Đề Cuối kỳ 2021.2 - Mã đề B5, Câu 1.1", ["CK"], 126, "4.1.5",
      "Chuyển đổi số IEEE 754 32-bit viết ở dạng Hexa <code>0x42A78000</code> về số thực thập phân?",
      ["+83.75", "+83.5", "+41.875", "-83.75"],
      "<p><code>42A78</code> $= 0100\\;0010\\;1010\\;0111\\;1000_2 \\Rightarrow S=0, e=133\\; (E=6), 1.m = 1.01001111_2$. Dịch 6 bit: $+1010011.11_2 = 64+16+2+1+0.5+0.25 = \\mathbf{+83.75}$.</p>",
      True, "Nhập số thập phân:", ["83.75", "+83.75"])

add_q("c4-4.28b", "4.2.6", G4_6, "Bài tập 4.28b", "Slide Chương 4 - Trang 98", ["LT", "GK"], 126, "4.1.5",
      "Chuyển đổi số IEEE 754 32-bit viết ở dạng Hexa <code>0xC1560000</code> về số thực thập phân?",
      ["-13.375", "-13.625", "-26.75", "-12.375"],
      "<p><code>C156</code> $= 1100\\;0001\\;0101\\;0110_2 \\Rightarrow S=1, e=130\\; (E=3), 1.m = 1.101011_2$. Dịch 3 bit: $-1101.011_2 = -(8+4+1+0.25+0.125) = \\mathbf{-13.375}$.</p>",
      True, "Nhập số thập phân:", ["-13.375"])

add_q("c4-4.28c", "4.2.6", G4_6, "Bài tập 4.28c", "Slide Chương 4 - Trang 99", ["LT", "GK"], 126, "4.1.5",
      "Chuyển đổi số IEEE 754 32-bit <code>0x3FC00000</code> ($0011\\;1111\\;1100\\;0000\\dots$) về số thực thập phân?",
      ["+1.5", "+0.75", "+1.25", "+3.0"],
      "<p><code>3FC</code> $= 0011\\;1111\\;1100_2 \\Rightarrow S=0, e=127\\; (E=0), 1.m = 1.1_2 \\Rightarrow X = +1.5 \\times 2^0 = \\mathbf{+1.5}$.</p>",
      True, "Nhập số thập phân:", ["1.5", "+1.5"])

add_q("c4-4.29a", "4.2.6", G4_6, "Bài tập 4.29a", "Đề Giữa kỳ 2024.1 - #386374 (Ý a)", ["GK"], 126, "4.1.5",
      "Biểu diễn giá trị thập phân $-13.75$ sang số dấu phẩy động chuẩn IEEE 754 độ chính xác đơn (32-bit) dưới dạng số Hexa là:",
      ["0xC15C0000", "0x415C0000", "0xC1580000", "0xC16C0000"],
      "<p>$S=1$; $13.75 = 1101.11_2 = 1.10111_2 \\times 2^3 \\Rightarrow e = 3+127 = 130 = 1000\\;0010_2$; ghép $1\\,|\\,10000010\\,|\\,1011100\\dots = \\mathbf{\\text{0xC15C0000}}$.</p>",
      True, "Nhập mã Hexa 32-bit:", ["0xC15C0000", "C15C0000"])

add_q("c4-4.29b", "4.2.6", G4_6, "Bài tập 4.29b", "Đề Giữa kỳ 2024.1 - #386374 (Ý b)", ["GK"], 126, "4.1.5",
      "Biểu diễn giá trị thập phân $-46.375$ sang số dấu phẩy động chuẩn IEEE 754 độ chính xác đơn (32-bit) dưới dạng số Hexa là:",
      ["0xC2398000", "0x42398000", "0xC2390000", "0xC2B98000"],
      "<p>$S=1$; $46.375 = 101110.011_2 = 1.01110011_2 \\times 2^5 \\Rightarrow e = 5+127 = 132 = 1000\\;0100_2$; ghép $1\\,|\\,10000100\\,|\\,0111001100\\dots = \\mathbf{\\text{0xC2398000}}$.</p>",
      True, "Nhập mã Hexa 32-bit:", ["0xC2398000", "C2398000"])

add_q("c4-4.30a", "4.2.6", G4_6, "Bài tập 4.30a", "Ôn tập Cuối kỳ 2025.2 - P1, Câu 59", ["CK"], 127, "4.1.5",
      "Số thực dấu phẩy động 32-bit IEEE 754 viết theo hệ Hexa có 3 chữ số đầu bên trái là <code>7F8</code>, phần còn lại chưa biết. Khẳng định nào sau đây có khả năng đúng?",
      [
          "Số thực này biểu diễn NaN (Not a Number) hoặc vô cùng (+Infinity)",
          "Số thực này bằng 0 hoặc biểu diễn giá trị dương hữu hạn xác định",
          "Chỉ có thể biểu diễn +Infinity",
          "Số thực này chắc chắn là một số âm"
      ],
      "<p><code>7F8</code> $= 0111\\;1111\\;1000_2 \\Rightarrow S=0, e=255$ (tất cả 8 bit mũ bằng 1). Nếu $m=0$ số biểu diễn $+\\infty$; nếu $m \\neq 0$ số biểu diễn <strong>NaN</strong>.</p>")

add_q("c4-4.30b", "4.2.6", G4_6, "Bài tập 4.30b", "Ôn tập Cuối kỳ 2025.2 - P1, Câu 46", ["CK"], 127, "4.1.5",
      "Có bao nhiêu cách biểu diễn <strong>NaN (Not a Number)</strong> khi dùng số thực dấu phẩy động 32-bit theo chuẩn IEEE 754?",
      ["2^24 - 2", "2^23 - 1", "128", "2"],
      "<p>Trường $e = 11111111_2$ có 1 cách; phần lẻ $m$ (23 bit) phải $\\neq 0$ nên có $2^{23} - 1$ cách; bit dấu $S$ có 2 cách ($0$ hoặc $1$). Tổng: $2 \\times (2^{23}-1) = \\mathbf{2^{24}-2}$.</p>")

output_js = "// Dữ liệu câu hỏi bài tập và lý thuyết Chương 4 (Số học máy tính)\n"
output_js += "// Tự động tạo dựa trên file KTMT_GK.pdf - IT3030 / IT3034 / IT3283\n\n"
output_js += "(function(root) {\n"
output_js += "  root.KTMT_QUESTIONS_CH4 = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"
output_js += "})(typeof window !== 'undefined' ? window : globalThis);\n"

with open("js/data-questions-ch4.js", "w", encoding="utf-8") as f:
    f.write(output_js)

print(f"Generated js/data-questions-ch4.js with {len(questions)} questions.")
