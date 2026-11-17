// Dữ liệu Lý thuyết trọng tâm, Cấu trúc chương mục và Bảng 32 thanh ghi RISC-V
// Bám sát 100% Tài liệu Ôn tập Trọng tâm Kiến trúc Máy tính (KTMT_GK.pdf - Phiên bản RISC-V) - IT3030, IT3034, IT3283 - ĐHBK Hà Nội

(function (root) {
  // 1. Bảng ánh xạ 32 thanh ghi RISC-V phục vụ tra cứu & Tooltip tương tác khi rê chuột
  root.RISCV_REGISTERS = {
    x0:  { num: "x0",  alias: "zero", bin: "00000", role: "Thanh ghi hằng số, luôn bằng 0 (chỉ đọc - read-only)", saved: "Không áp dụng", group: "Special" },
    x1:  { num: "x1",  alias: "ra",   bin: "00001", role: "Return Address: chứa địa chỉ trở về hàm (PC + 4)", saved: "Caller-saved", group: "Jump/Link" },
    x2:  { num: "x2",  alias: "sp",   bin: "00010", role: "Stack Pointer: con trỏ đỉnh ngăn xếp (phát triển giảm dần)", saved: "Callee-saved", group: "Stack" },
    x3:  { num: "x3",  alias: "gp",   bin: "00011", role: "Global Pointer: con trỏ dữ liệu toàn cục", saved: "Không áp dụng", group: "Special" },
    x4:  { num: "x4",  alias: "tp",   bin: "00100", role: "Thread Pointer: con trỏ luồng thực thi", saved: "Không áp dụng", group: "Special" },
    x5:  { num: "x5",  alias: "t0",   bin: "00101", role: "Temporary 0: thanh ghi biến tạm thời", saved: "Caller-saved", group: "Temporary" },
    x6:  { num: "x6",  alias: "t1",   bin: "00110", role: "Temporary 1: thanh ghi biến tạm thời", saved: "Caller-saved", group: "Temporary" },
    x7:  { num: "x7",  alias: "t2",   bin: "00111", role: "Temporary 2: thanh ghi biến tạm thời", saved: "Caller-saved", group: "Temporary" },
    x8:  { num: "x8",  alias: "s0 / fp", bin: "01000", role: "Saved register 0 / Frame pointer: lưu biến hoặc con trỏ khung", saved: "Callee-saved", group: "Saved" },
    x9:  { num: "x9",  alias: "s1",   bin: "01001", role: "Saved register 1: thanh ghi lưu biến chương trình", saved: "Callee-saved", group: "Saved" },
    x10: { num: "x10", alias: "a0",   bin: "01010", role: "Argument 0 / Return value 0: tham số truyền vào & kết quả trả về", saved: "Caller-saved", group: "Argument" },
    x11: { num: "x11", alias: "a1",   bin: "01011", role: "Argument 1 / Return value 1: tham số truyền vào & kết quả trả về", saved: "Caller-saved", group: "Argument" },
    x12: { num: "x12", alias: "a2",   bin: "01100", role: "Argument 2: tham số truyền vào chương trình con", saved: "Caller-saved", group: "Argument" },
    x13: { num: "x13", alias: "a3",   bin: "01101", role: "Argument 3: tham số truyền vào chương trình con", saved: "Caller-saved", group: "Argument" },
    x14: { num: "x14", alias: "a4",   bin: "01110", role: "Argument 4: tham số truyền vào chương trình con", saved: "Caller-saved", group: "Argument" },
    x15: { num: "x15", alias: "a5",   bin: "01111", role: "Argument 5: tham số truyền vào chương trình con", saved: "Caller-saved", group: "Argument" },
    x16: { num: "x16", alias: "a6",   bin: "10000", role: "Argument 6: tham số truyền vào chương trình con", saved: "Caller-saved", group: "Argument" },
    x17: { num: "x17", alias: "a7",   bin: "10001", role: "Argument 7: tham số truyền vào chương trình con (hoặc mã ecall)", saved: "Caller-saved", group: "Argument" },
    x18: { num: "x18", alias: "s2",   bin: "10010", role: "Saved register 2: thanh ghi lưu biến chương trình", saved: "Callee-saved", group: "Saved" },
    x19: { num: "x19", alias: "s3",   bin: "10011", role: "Saved register 3: thanh ghi lưu biến chương trình", saved: "Callee-saved", group: "Saved" },
    x20: { num: "x20", alias: "s4",   bin: "10100", role: "Saved register 4: thanh ghi lưu biến chương trình", saved: "Callee-saved", group: "Saved" },
    x21: { num: "x21", alias: "s5",   bin: "10101", role: "Saved register 5: thanh ghi lưu biến chương trình", saved: "Callee-saved", group: "Saved" },
    x22: { num: "x22", alias: "s6",   bin: "10110", role: "Saved register 6: thanh ghi lưu biến chương trình", saved: "Callee-saved", group: "Saved" },
    x23: { num: "x23", alias: "s7",   bin: "10111", role: "Saved register 7: thanh ghi lưu biến chương trình", saved: "Callee-saved", group: "Saved" },
    x24: { num: "x24", alias: "s8",   bin: "11000", role: "Saved register 8: thanh ghi lưu biến chương trình", saved: "Callee-saved", group: "Saved" },
    x25: { num: "x25", alias: "s9",   bin: "11001", role: "Saved register 9: thanh ghi lưu biến chương trình", saved: "Callee-saved", group: "Saved" },
    x26: { num: "x26", alias: "s10",  bin: "11010", role: "Saved register 10: thanh ghi lưu biến chương trình", saved: "Callee-saved", group: "Saved" },
    x27: { num: "x27", alias: "s11",  bin: "11011", role: "Saved register 11: thanh ghi lưu biến chương trình", saved: "Callee-saved", group: "Saved" },
    x28: { num: "x28", alias: "t3",   bin: "11100", role: "Temporary 3: thanh ghi biến tạm thời", saved: "Caller-saved", group: "Temporary" },
    x29: { num: "x29", alias: "t4",   bin: "11101", role: "Temporary 4: thanh ghi biến tạm thời", saved: "Caller-saved", group: "Temporary" },
    x30: { num: "x30", alias: "t5",   bin: "11110", role: "Temporary 5: thanh ghi biến tạm thời", saved: "Caller-saved", group: "Temporary" },
    x31: { num: "x31", alias: "t6",   bin: "11111", role: "Temporary 6: thanh ghi biến tạm thời", saved: "Caller-saved", group: "Temporary" }
  };

  // Tạo bảng tra ngược theo tên gợi nhớ (zero, ra, sp, s0, fp, t0..t6, a0..a7)
  root.RISCV_REGISTER_LOOKUP = {};
  Object.keys(root.RISCV_REGISTERS).forEach(function (k) {
    var reg = root.RISCV_REGISTERS[k];
    root.RISCV_REGISTER_LOOKUP[k] = reg;
    if (reg.alias === "s0 / fp") {
      root.RISCV_REGISTER_LOOKUP["s0"] = reg;
      root.RISCV_REGISTER_LOOKUP["fp"] = reg;
    } else {
      root.RISCV_REGISTER_LOOKUP[reg.alias] = reg;
    }
  });

  // 2. Cấu trúc 4 Chương chuẩn (Bám sát 100% mục lục và phân nhóm trong KTMT_GK.pdf)
  root.KTMT_CHAPTERS = [
    {
      id: 1,
      code: "Chương 1",
      title: "Giới thiệu chung và Hiệu năng máy tính",
      subtitle: "4 thành phần cơ bản, 5 nhóm máy tính, ISA & 7 ý tưởng lớn, phân lớp biên dịch và 5 công thức hiệu năng (T0, n, t_CPU, CPI_TB, MIPS/MFLOPS).",
      pdfPageStart: 4,
      printedPageStart: 3,
      theorySections: ["1.1.1", "1.1.2", "1.1.3"],
      groups: [
        { id: "1.1", title: "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 1", type: "theory", pdfPage: 4, exercises: "Lý thuyết 1.1 - 1.6", count: 6, summary: "Kiến thức nền tảng: 4 thành phần cơ bản, 5 loại máy tính, ISA/Tổ chức/Phần cứng, 7 ý tưởng lớn và các mức biên dịch." },
        { id: "1.2.1", title: "Nhóm 1: Khái niệm cơ bản và Các thành phần của máy tính", type: "exercise", pdfPage: 10, exercises: "Bài tập 1.1 & Đề thi", count: 3, summary: "Thành phần chứa chương trình đang chạy (Bộ nhớ chính) và phân loại kiến trúc Flynn (SISD, SIMD, MISD, MIMD)." },
        { id: "1.2.2", title: "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và Thời gian thực thi (tCPU)", type: "exercise", pdfPage: 10, exercises: "Bài tập 1.2 - 1.9", count: 11, summary: "Công thức cơ bản: T0 = 1/f0; tCPU = n * T0 = (IC * CPI)/f0. Mẹo nhanh: f0 (GHz) và T0 (ns) triệt tiêu số mũ 10^9 và 10^-9." },
        { id: "1.2.3", title: "Nhóm 3: Bài tập về chỉ số tốc độ thực thi lệnh MIPS", type: "exercise", pdfPage: 15, exercises: "Bài tập 1.10 - 1.12", count: 7, summary: "MIPS = IC / (tCPU * 10^6) = f0 (MHz) / CPI = [f0 (GHz) * 1000] / CPI và tính MFLOPS, lưu ý nhược điểm của MIPS." },
        { id: "1.2.4", title: "Nhóm 4: Tính CPI trung bình và Thời gian thực thi với nhiều lớp lệnh", type: "exercise", pdfPage: 16, exercises: "Bài tập 1.13 - 1.17", count: 13, summary: "CPI_TB = (sum CPI_i * IC_i) / (sum IC_i) hoặc sum (p_i% * CPI_i), sau đó thay vào tCPU = (IC * CPI_TB) / f0." },
        { id: "1.2.5", title: "Nhóm 5: So sánh hiệu năng và cân bằng thời gian giữa các bộ xử lý", type: "exercise", pdfPage: 21, exercises: "Bài tập 1.18 - 1.23", count: 15, summary: "P = 1 / tCPU; P_A / P_B = t_B / t_A. Bài toán thay đổi tần số f0 khi giảm thời gian và tăng CPI, so sánh trình biên dịch." }
      ]
    },
    {
      id: 2,
      code: "Chương 2",
      title: "Hệ thống máy tính",
      subtitle: "Cấu trúc CPU (CU, ALU, RF), Bộ nhớ & Hệ thống I/O tổng quan, Chu trình thực hiện lệnh (PC, IR) & Ngắt, Bus hệ thống (QPI, PCIe) và Không gian địa chỉ.",
      pdfPageStart: 28,
      printedPageStart: 27,
      theorySections: ["2.1.1", "2.1.2", "2.1.3"],
      groups: [
        { id: "2.1", title: "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 2", type: "theory", pdfPage: 28, exercises: "Lý thuyết 2.1 - 2.6", count: 6, summary: "Cấu trúc CPU, Bộ nhớ/I/O, Chu trình Fetch-Execute, Ngắt, 3 loại Bus và Liên kết điểm-điểm (QPI, PCIe, SATA, USB)." },
        { id: "2.2.1", title: "Nhóm 1: Cấu trúc CPU, Bộ nhớ và Hệ thống vào-ra", type: "exercise", pdfPage: 35, exercises: "Bài tập 2.1 - 2.3", count: 6, summary: "Chức năng CU/ALU/RF, vai trò Cache, bộ nhớ trong vs bộ nhớ ngoài, tính chất ngăn nhớ và mô-đun vào-ra." },
        { id: "2.2.2", title: "Nhóm 2: Chu trình lệnh, các thanh ghi PC / IR và Hoạt động Ngắt", type: "exercise", pdfPage: 36, exercises: "Bài tập 2.4 - 2.5", count: 5, summary: "Quy trình Tìm nạp (PC -> IR, PC += 4), Giải mã, Thực thi và Thứ tự cất ngữ cảnh / xử lý Ngắt đơn và nhiều ngắt." },
        { id: "2.2.3", title: "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ", type: "exercise", pdfPage: 38, exercises: "Bài tập 2.6 - 2.10", count: 16, summary: "Bus địa chỉ/dữ liệu/điều khiển (MEMR, IOW, INTR, INTA, BRQ, BGT), QPI/PCIe/SATA/USB và tính không gian địa chỉ M = 2^N." }
      ]
    },
    {
      id: 3,
      code: "Chương 3",
      title: "Kiến trúc tập lệnh RISC-V",
      subtitle: "Tập 32 thanh ghi, Little-Endian, Hợp ngữ RV32I, Dịch C ↔ RISC-V, Vòng lặp, Ngăn xếp, Mã máy 32-bit, Lệnh nén 16-bit, Bản đồ bộ nhớ và Thực hành RARS / ecall.",
      pdfPageStart: 43,
      printedPageStart: 42,
      theorySections: ["3.1.1", "3.1.2", "3.1.3", "3.1.4", "3.1.5", "3.1.6"],
      groups: [
        { id: "3.1", title: "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)", type: "theory", pdfPage: 43, exercises: "Lý thuyết 3.1 - 3.8", count: 8, summary: "Nguyên lý RISC, 32 thanh ghi RV32I, quy tắc Little-Endian, 6 khuôn dạng lệnh 32-bit, lệnh nén 16-bit và 4 định địa chỉ." },
        { id: "3.2.1", title: "Nhóm 1: Tập Thanh ghi, Kích thước lệnh (32-bit / RVC 16-bit), Khuôn dạng và Phương thức định địa chỉ", type: "exercise", pdfPage: 52, exercises: "Bài tập 3.1 - 3.7, 3.13 & Đề thi", count: 24, summary: "32 thanh ghi RV32I (t0-t6, s0-s11, zero), kích thước mã máy 32-bit vs RVC 16-bit, khuôn dạng lệnh R/I/S/B/U/J, giả lệnh và 4 phương thức định địa chỉ." },
        { id: "3.2.2", title: "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit, Phạm vi 12-bit và Khởi tạo thanh ghi", type: "exercise", pdfPage: 57, exercises: "Bài tập 3.12, 3.14 - 3.26 & Đề thi", count: 42, summary: "add, sub, addi (phạm vi hằng 12-bit [-2048, +2047]), and, or, xor, slli, srli, srai, lui. Quy tắc lui + addi nạp hằng số 32-bit." },
        { id: "3.2.3", title: "Nhóm 3: Lệnh So sánh (slt, slti, sltu, blt, bltu) và Rẽ nhánh", type: "exercise", pdfPage: 64, exercises: "Bài tập 3.27 - 3.28, 3.72 & Đề thi", count: 15, summary: "So sánh có dấu (slt, slti, blt, bge) vs không dấu (sltu, sltiu, bltu) với hằng số âm/Hexa có bit dấu bằng 1 và điều khiển luồng." },
        { id: "3.2.4", title: "Nhóm 4: Căn chỉnh biên (Alignment), Thứ tự Little-Endian và Truy cập bộ nhớ (lw, lh, lb, lbu, sw)", type: "exercise", pdfPage: 66, exercises: "Bài tập 3.8 - 3.11, 3.29 - 3.35 & Đề thi", count: 34, summary: "Căn chỉnh biên word/halfword (chia hết cho 4/2), quy tắc Little-Endian (LSB ở địa chỉ nhỏ nhất), đếm truy cập Data Memory và lw/lh/lb/lbu/sw/sb." },
        { id: "3.2.5", title: "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V", type: "exercise", pdfPage: 70, exercises: "Bài tập 3.36 - 3.50 & Đề thi", count: 35, summary: "Địa chỉ phần tử mảng &A[i] = Base + 4*i, cấu trúc if-else, biểu thức số học tối ưu, vòng lặp while/for và xâu ký tự." },
        { id: "3.2.6", title: "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi", type: "exercise", pdfPage: 82, exercises: "Bài tập 3.51 - 3.56 & Đề thi", count: 13, summary: "Tính kết quả vòng lặp và công thức đếm tổng số lệnh thực thi: Khởi tạo + N*(Thân + Branch) + Thoát." },
        { id: "3.2.7", title: "Nhóm 7: Chương trình con (Thủ tục), Ngăn xếp (Stack) và Lệnh jal / jalr", type: "exercise", pdfPage: 88, exercises: "Bài tập 3.57 - 3.60 & Đề thi", count: 14, summary: "Quy ước Caller-saved vs Callee-saved, thao tác Push/Pop trên đỉnh ngăn xếp sp (LIFO) và gọi đệ quy/hàm lồng nhau." },
        { id: "3.2.8", title: "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ", type: "exercise", pdfPage: 91, exercises: "Bài tập 3.61 - 3.71 & Đề thi", count: 60, summary: "Dịch hợp ngữ <-> mã máy 32-bit (R, I, S, B, U, J), trường shamt/funct3/funct7, đích nhảy BTA/JTA và giải mã Bản đồ bộ nhớ." },
        { id: "3.2.9", title: "Nhóm 9: Thực hành RARS, Chỉ thị Hợp ngữ (.data, .word, .asciz) và Lời gọi hệ thống (ecall)", type: "exercise", pdfPage: 98, exercises: "Đề thi Lab & Ôn tập RARS", count: 14, summary: "Phân vùng .text (0x00400000) / .data (0x10010000), chỉ thị .word/.ascii/.asciz, dịch vụ ecall (a7=1,4,10,11,32,34), cấp phát mảng 2D Bitmap và căn chỉnh 4-byte trong RARS." }
      ]
    },
    {
      id: 4,
      code: "Chương 4",
      title: "Số học máy tính",
      subtitle: "Hệ đếm, Đại số Boolean & Cổng logic, Mã bù 2, Cộng/Trừ & Tràn số học (Overflow), Nhân/Chia RV32M (div, rem) và Số thực IEEE 754 32-bit.",
      pdfPageStart: 100,
      printedPageStart: 99,
      theorySections: ["4.1.1", "4.1.2", "4.1.3", "4.1.4", "4.1.5"],
      groups: [
        { id: "4.1", title: "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 4 (Số học máy tính)", type: "theory", pdfPage: 100, exercises: "Lý thuyết 4.1 - 4.8", count: 8, summary: "Hệ đếm, cổng logic, mã bù 2, quy tắc tràn số học, phép nhân/chia RV32M và chuẩn dấu phẩy động IEEE 754." },
        { id: "4.2.1", title: "Nhóm 1: Hệ đếm và Chuyển đổi cơ số (Nhị phân, Thập phân, Thập lục phân)", type: "exercise", pdfPage: 108, exercises: "Bài tập 4.1", count: 1, summary: "Chuyển đổi số có phần nguyên và phần lẻ giữa các hệ cơ số (nhị phân, thập phân, thập lục phân)." },
        { id: "4.2.2", title: "Nhóm 2: Nhận diện Cổng logic, Mạch tổ hợp và Bộ cộng 1-bit", type: "exercise", pdfPage: 109, exercises: "Bài tập 4.3 - 4.5", count: 5, summary: "Nhận dạng 6 cổng logic (AND, OR, NOT, NAND, NOR, XOR), phân tích mạch tổ hợp SOP và công thức S, C_out bộ Full Adder." },
        { id: "4.2.3", title: "Nhóm 3: Biểu diễn Số nguyên không dấu, có dấu (Dải giá trị, Mã bù 2) và So sánh", type: "exercise", pdfPage: 111, exercises: "Bài tập 4.2, 4.6 - 4.14 & Đề thi", count: 29, summary: "Xác định số bit tối thiểu (2^n >= M), dải giá trị không dấu/có dấu n-bit bù 2 [-2^{n-1}, 2^{n-1}-1], tính bù 2 và sắp xếp dãy số nguyên." },
        { id: "4.2.4", title: "Nhóm 4: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)", type: "exercise", pdfPage: 116, exercises: "Bài tập 4.15 - 4.22", count: 15, summary: "Cộng cùng dấu ra trái dấu -> tràn số; char (8-bit) tràn +-256; dải giá trị thanh ghi gây tràn 32-bit [0x80000000 - K, 0x7FFFFFFF]." },
        { id: "4.2.5", title: "Nhóm 5: Lệnh Chia và Lấy phần dư số nguyên (div, rem)", type: "exercise", pdfPage: 122, exercises: "Bài tập 4.23", count: 1, summary: "Mở rộng RV32M: div rd, rs1, rs2 và rem rd, rs1, rs2. Số dư luôn cùng dấu với số bị chia rs1." },
        { id: "4.2.6", title: "Nhóm 6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)", type: "exercise", pdfPage: 123, exercises: "Bài tập 4.24 - 4.30", count: 14, summary: "Cấu trúc 1-8-23 (Bias = 127), đổi thập phân <-> Hexa 32-bit, nhận diện +-Infinity, số cách biểu diễn NaN (2^24 - 2)." }
      ]
    }
  ];

  // 3. Nội dung chi tiết Sổ tay Lý thuyết trọng tâm (Bám sát 100% file KTMT_GK.pdf + Sơ đồ SVG kỹ thuật)
  root.KTMT_THEORY = [
    // ==================== CHƯƠNG 1 ====================
    {
      id: "1.1.1",
      chapter: 1,
      code: "1.1.1",
      title: "Máy tính, chương trình và phân loại máy tính",
      pdfPage: 4,
      printedPage: 3,
      linkedGroups: ["1.1", "1.2.1"],
      summary: "Định nghĩa Máy tính, Chương trình, 4 thành phần cốt lõi của mọi máy tính và 5 nhóm phân loại máy tính theo quy mô.",
      content: `
        <h4>1. Khái niệm cơ bản</h4>
        <ul>
          <li><strong>Máy tính (Computer):</strong> Là thiết bị điện tử hoạt động theo chương trình lưu trữ sẵn (<em>stored-program</em>), có khả năng nhập dữ liệu (<em>input data</em>), lưu trữ dữ liệu, xử lý dữ liệu và xuất ra thông tin (<em>output information</em>).</li>
          <li><strong>Chương trình (Program):</strong> Là dãy các lệnh được lập trình sẵn và được lưu trong bộ nhớ để điều khiển máy tính thực hiện theo.</li>
          <li><strong>Sơ đồ đơn giản của hệ thống máy tính:</strong> Gồm các khối chức năng phối hợp: Các thiết bị vào, CPU (xử lý dữ liệu), Bộ nhớ chính (chứa chương trình đang thực hiện), Các thiết bị lưu trữ (lưu trữ phần mềm &amp; dữ liệu), Các thiết bị ra và Các thiết bị truyền thông (kết nối mạng/Internet).</li>
        </ul>

        <h4>2. Bốn thành phần cơ bản của mọi máy tính</h4>
        <p>Mọi máy tính đều được cấu thành từ <strong>4 bộ phận cơ bản</strong>:</p>
        <ol>
          <li><strong>Bộ xử lý trung tâm (CPU – Central Processing Unit):</strong> Điều khiển hoạt động của máy tính và xử lý dữ liệu.</li>
          <li><strong>Bộ nhớ chính (Main Memory):</strong> Chứa các lệnh và dữ liệu của chương trình <strong>hiện đang được thực hiện</strong>. (Các thiết bị lưu trữ như ổ cứng HDD, SSD thuộc <em>bộ nhớ ngoài</em>, dùng để lưu trữ phần mềm và dữ liệu lâu dài khi chương trình chưa chạy).</li>
          <li><strong>Hệ thống vào-ra (Input/Output – I/O):</strong> Trao đổi thông tin giữa máy tính với môi trường bên ngoài.</li>
          <li><strong>Liên kết hệ thống (System Interconnection):</strong> Kết nối và vận chuyển thông tin giữa CPU, bộ nhớ chính và hệ thống vào-ra.</li>
        </ol>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 180" width="660" height="175" role="img" aria-label="Sơ đồ 4 thành phần cơ bản của máy tính">
            <rect x="20" y="45" width="145" height="90" rx="8" class="svg-box-accent" />
            <text x="92" y="80" text-anchor="middle" class="svg-title">CPU</text>
            <text x="92" y="102" text-anchor="middle" class="svg-sub">Điều khiển &amp; Xử lý</text>
            <text x="92" y="120" text-anchor="middle" class="svg-sub">(CU, ALU, Register)</text>

            <rect x="225" y="15" width="230" height="44" rx="8" class="svg-box-primary" />
            <text x="340" y="42" text-anchor="middle" class="svg-title-primary">Liên kết hệ thống (System Bus)</text>

            <rect x="225" y="108" width="165" height="58" rx="8" class="svg-box" />
            <text x="307" y="133" text-anchor="middle" class="svg-title">Bộ nhớ chính (RAM)</text>
            <text x="307" y="152" text-anchor="middle" class="svg-sub">Lệnh &amp; Dữ liệu đang chạy</text>

            <rect x="445" y="108" width="215" height="58" rx="8" class="svg-box" />
            <text x="552" y="133" text-anchor="middle" class="svg-title">Hệ thống Vào-Ra (I/O)</text>
            <text x="552" y="152" text-anchor="middle" class="svg-sub">Mô-đun I/O &amp; Ngoại vi (HDD/SSD...)</text>

            <line x1="165" y1="78" x2="225" y2="42" class="svg-line" />
            <line x1="307" y1="59" x2="307" y2="108" class="svg-line" />
            <line x1="455" y1="42" x2="520" y2="108" class="svg-line" />
            <line x1="165" y1="136" x2="225" y2="136" class="svg-line-dashed" />
          </svg>
          <figcaption>Hình 1.1 – Bốn bộ phận cơ bản cấu thành mọi hệ thống máy tính</figcaption>
        </figure>

        <div class="callout callout-trap">
          <div class="callout-title">⚠️ Bẫy đề thi hay gặp (Bài tập 1.1)</div>
          <p>Đề thi hay hỏi: <em>“Thành phần nào chứa các lệnh và dữ liệu của chương trình hiện đang được thực hiện?”</em> — Đáp án đúng luôn là <strong>Bộ nhớ chính (Main Memory)</strong>. Không chọn ổ cứng SSD/HDD (chỉ lưu trữ phần mềm và dữ liệu lâu dài khi chương trình chưa chạy) hay Bộ xử lý trung tâm CPU.</p>
        </div>

        <h4>3. Phân loại máy tính (5 nhóm)</h4>
        <p>Dựa theo quy mô, công dụng và giá thành, máy tính được chia thành <strong>5 nhóm</strong>:</p>
        <ul>
          <li><strong>Máy tính cá nhân (PC – Personal Computers):</strong> Gồm máy tính để bàn (Desktop) và máy tính xách tay (Laptop), phục vụ mục đích đa dụng cho cá nhân.</li>
          <li><strong>Thiết bị di động cá nhân (PMD – Personal Mobile Devices):</strong> Điện thoại thông minh (Smartphones), máy tính bảng (Tablets).</li>
          <li><strong>Máy tính nhúng / IoT (Embedded Computers / Internet of Things):</strong> Máy tính được đặt ẩn bên trong một thiết bị khác và được thiết kế chuyên dụng cho một chức năng cụ thể. Máy tính nhúng có kết nối Internet được gọi là <em>thiết bị IoT</em>.</li>
          <li><strong>Máy chủ (Servers):</strong> Dùng trong mạng máy tính để quản lý tài nguyên và cung cấp dịch vụ cho nhiều người dùng; có hiệu năng và độ tin cậy cao, giá thành từ hàng nghìn đến hàng triệu USD.</li>
          <li><strong>Máy tính quy mô kho / Siêu máy tính (WSC – Warehouse-Scale Computers / Supercomputers):</strong> Kết nối hàng nghìn máy chủ với nhau (<em>Clusters</em>). Siêu máy tính là một dạng WSC dùng cho các bài toán tính toán lớn trong khoa học và kỹ thuật, giá thành từ hàng triệu đến hàng trăm triệu USD.</li>
        </ul>

        <h4>4. Phân loại kiến trúc song song theo Flynn (Flynn's Taxonomy)</h4>
        <ul>
          <li><strong>SISD (Single Instruction, Single Data):</strong> Máy tính đơn nhân tuần tự cổ điển (1 luồng lệnh xử lý 1 luồng dữ liệu).</li>
          <li><strong>SIMD (Single Instruction, Multiple Data):</strong> Một luồng lệnh điều khiển nhiều bộ xử lý cùng lúc trên nhiều dữ liệu khác nhau (ví dụ tập lệnh vector AVX, GPU).</li>
          <li><strong>MISD (Multiple Instruction, Single Data):</strong> Nhiều luồng lệnh xử lý trên cùng một luồng dữ liệu — mô hình này hầu như <strong>không tồn tại</strong> trong thực tế thương mại.</li>
          <li><strong>MIMD (Multiple Instruction, Multiple Data):</strong> Nhiều bộ xử lý chạy đồng thời nhiều luồng lệnh độc lập trên nhiều luồng dữ liệu (điển hình là <strong>CPU đa lõi / multi-core dùng chung bộ nhớ - Shared Memory</strong> hoặc hệ phân tán Clusters).</li>
        </ul>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 1.2.1: Khái niệm cơ bản, Thành phần máy tính &amp; Phân loại Flynn</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Câu hỏi lý thuyết yêu cầu chỉ ra bộ phận lưu trữ chương trình đang thực thi, phân biệt các loại bộ nhớ, hoặc phân loại kiến trúc hệ thống (đơn nhân, đa lõi, vector/GPU, mô hình lý thuyết) theo bảng phân loại Flynn.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Xác định đúng vai trò 4 thành phần cốt lõi):</strong> Chứa lệnh và dữ liệu của chương trình <em>hiện đang được thực hiện</em> &rarr; chọn <strong>Bộ nhớ chính (Main Memory)</strong>; giải mã lệnh và xử lý dữ liệu &rarr; <strong>CPU</strong>; lưu trữ phần mềm lâu dài khi chưa chạy &rarr; <strong>Thiết bị lưu trữ ngoài (HDD/SSD)</strong>; kết nối vận chuyển tín hiệu giữa các khối &rarr; <strong>Liên kết hệ thống</strong>.</li>
                <li><strong>Bước 2 (Đối chiếu phân loại Flynn theo số luồng Lệnh – Dữ liệu):</strong> 1 luồng lệnh + 1 luồng dữ liệu (máy tuần tự cổ điển) &rarr; <strong>SISD</strong>; 1 luồng lệnh điều khiển nhiều dữ liệu song song (tập lệnh vector, GPU) &rarr; <strong>SIMD</strong>; nhiều bộ xử lý / đa lõi (<code>dual-core</code>, <code>multi-core</code>) chạy các luồng lệnh và dữ liệu độc lập &rarr; <strong>MIMD dùng chung bộ nhớ (Shared Memory)</strong>; nhiều luồng lệnh trên cùng 1 dữ liệu (hầu như không tồn tại thực tế) &rarr; <strong>MISD</strong>.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Không nhầm <em>Bộ nhớ chính (RAM)</em> với <em>Bộ nhớ ngoài (SSD/HDD)</em> hay <em>Thanh ghi</em> (chỉ lưu toán hạng tức thời bên trong CPU). Với CPU đa lõi (<code>multi-core</code>), đáp án đúng là <strong>MIMD</strong> chứ không phải SIMD.</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="1.2.1">
          <span>📝 <strong>Nhóm 1.2.1: Khái niệm cơ bản, Thành phần máy tính &amp; Phân loại Flynn (<span class="group-q-count">3 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.1', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.1', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "1.1.2",
      chapter: 1,
      code: "1.1.2",
      title: "Kiến trúc máy tính, phân lớp và các mức ngôn ngữ",
      pdfPage: 5,
      printedPage: 4,
      linkedGroups: ["1.1"],
      summary: "3 khía cạnh kiến trúc (x86/ARM/RISC-V International), 7 ý tưởng lớn, 4 yếu tố hiệu năng, 3 lớp & mức dịch ngôn ngữ, các loại IC điển hình và quy trình sản xuất chip (defect, die, yield).",
      content: `
        <h4>1. Ba khía cạnh của Kiến trúc máy tính</h4>
        <ul>
          <li><strong>Kiến trúc tập lệnh (ISA – Instruction Set Architecture):</strong> Nghiên cứu máy tính theo cách nhìn của người lập trình hợp ngữ; là giao diện giữa phần mềm và phần cứng. Các kiến trúc tập lệnh thông dụng hiện nay gồm:
            <ul>
              <li><strong>Intel x86:</strong> Ra đời từ năm 1978, dùng phổ biến trong Laptop, Desktop, Servers.</li>
              <li><strong>ARM:</strong> Ra đời từ năm 1985, dùng phổ biến trong Smartphones, Tablets.</li>
              <li><strong>RISC-V:</strong> Kiến trúc tập lệnh mở (miễn phí bản quyền), phát triển từ năm 2010 tại Đại học UC Berkeley; thành lập RISC-V Foundation (2015) và chuyển thành <strong>RISC-V International Association</strong> năm 2020 tại Thụy Sỹ (quy tụ khoảng 4.500 thành viên từ 70 quốc gia).</li>
            </ul>
          </li>
          <li><strong>Tổ chức máy tính (Computer Organization) hay Vi kiến trúc (Microarchitecture):</strong> Nghiên cứu việc thiết kế máy tính ở mức cao để thực thi kiến trúc tập lệnh (thiết kế CPU, hệ thống nhớ, cấu trúc bus).</li>
          <li><strong>Phần cứng (Hardware):</strong> Nghiên cứu thiết kế mạch chi tiết và công nghệ đóng gói vật lý của máy tính. Cùng một kiến trúc tập lệnh có thể có nhiều sản phẩm phần cứng và tổ chức khác nhau.</li>
        </ul>

        <h4>2. Bảy ý tưởng lớn trong thiết kế Kiến trúc máy tính</h4>
        <ol>
          <li>Sử dụng trừu tượng hóa để đơn giản hóa thiết kế (<em>Use abstraction to simplify design</em>).</li>
          <li>Tối ưu hóa cho trường hợp thường gặp (<em>Make the common case fast</em>).</li>
          <li>Tăng hiệu năng nhờ xử lý song song (<em>Performance via parallelism</em>).</li>
          <li>Tăng hiệu năng nhờ kỹ thuật đường ống lệnh (<em>Performance via pipelining</em>).</li>
          <li>Tăng hiệu năng nhờ dự đoán (<em>Performance via prediction</em>).</li>
          <li>Phân cấp bộ nhớ (<em>Hierarchy of memories</em>).</li>
          <li>Đảm bảo độ tin cậy nhờ dự phòng (<em>Dependability via redundancy</em>).</li>
        </ol>

        <h4>3. Các yếu tố quyết định hiệu năng của chương trình</h4>
        <ul>
          <li><strong>Thuật toán:</strong> Quyết định số phép toán cần thực hiện.</li>
          <li><strong>Ngôn ngữ lập trình, trình biên dịch và kiến trúc tập lệnh:</strong> Quyết định số lệnh máy (<em>Instruction Count – IC</em>) được tạo ra để thực hiện chương trình.</li>
          <li><strong>Bộ xử lý và hệ thống bộ nhớ:</strong> Quyết định tốc độ thực hiện các lệnh máy.</li>
          <li><strong>Hệ thống vào-ra và hệ điều hành:</strong> Quyết định tốc độ thực hiện các thao tác vào-ra dữ liệu.</li>
        </ul>

        <h4>4. Phân lớp máy tính và các mức chuyển đổi mã chương trình</h4>
        <ul>
          <li><strong>Ba lớp đồng tâm của hệ thống máy tính:</strong> Từ trong ra ngoài gồm <strong>Phần cứng</strong> (CPU, bộ nhớ, mô-đun vào-ra) $\\rightarrow$ <strong>Phần mềm hệ thống</strong> (gồm <em>Hệ điều hành – OS</em> thực hiện lập lịch chạy chương trình, quản lý bộ nhớ/lưu trữ, điều khiển vào-ra; và <em>Chương trình dịch – Compilers</em>) $\\rightarrow$ <strong>Phần mềm ứng dụng</strong>.</li>
          <li><strong>Quá trình dịch chương trình qua 3 mức ngôn ngữ (ví dụ hàm <code>swap</code> trên RISC-V):</strong>
            <ol>
              <li><strong>Ngôn ngữ bậc cao (High-Level Language – HLL):</strong> Như ngôn ngữ C, gần với bài toán cần giải quyết, độc lập với phần cứng.</li>
              <li><strong>Trình biên dịch (Compiler):</strong> Dịch chương trình từ Ngôn ngữ bậc cao sang <strong>Hợp ngữ (Assembly Language)</strong> — mô tả lệnh dưới dạng văn bản gợi nhớ (như <code>slli, add, lw, sw, jalr zero, 0(ra)</code> trên RISC-V), phụ thuộc vào từng kiến trúc tập lệnh cụ thể.</li>
              <li><strong>Trình hợp dịch (Assembler):</strong> Dịch từ Hợp ngữ sang <strong>Ngôn ngữ máy (Machine Language / Mã máy)</strong> — được mã hóa hoàn toàn bằng các bit nhị phân <code>0</code> và <code>1</code> (chuỗi 32-bit trên RV32I) để phần cứng trực tiếp thực thi.</li>
            </ol>
          </li>
        </ul>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 120" width="660" height="118" role="img" aria-label="Chuỗi dịch chương trình qua 3 mức ngôn ngữ">
            <rect x="14" y="25" width="140" height="62" rx="8" class="svg-box" />
            <text x="84" y="50" text-anchor="middle" class="svg-title">Ngôn ngữ bậc cao</text>
            <text x="84" y="70" text-anchor="middle" class="svg-sub">C / C++ (swap(a,b))</text>

            <rect x="178" y="34" width="84" height="44" rx="6" class="svg-box-primary" />
            <text x="220" y="61" text-anchor="middle" class="svg-title-primary">Compiler</text>

            <rect x="286" y="25" width="130" height="62" rx="8" class="svg-box-accent" />
            <text x="351" y="50" text-anchor="middle" class="svg-title">Hợp ngữ (ASM)</text>
            <text x="351" y="70" text-anchor="middle" class="svg-sub">addi, lw, sw...</text>

            <rect x="440" y="34" width="84" height="44" rx="6" class="svg-box-primary" />
            <text x="482" y="61" text-anchor="middle" class="svg-title-primary">Assembler</text>

            <rect x="548" y="25" width="118" height="62" rx="8" class="svg-box" />
            <text x="607" y="50" text-anchor="middle" class="svg-title">Mã máy (0/1)</text>
            <text x="607" y="70" text-anchor="middle" class="svg-sub">32-bit RV32I</text>

            <line x1="154" y1="56" x2="178" y2="56" class="svg-line" />
            <line x1="262" y1="56" x2="286" y2="56" class="svg-line" />
            <line x1="416" y1="56" x2="440" y2="56" class="svg-line" />
            <line x1="524" y1="56" x2="548" y2="56" class="svg-line" />
          </svg>
          <figcaption>Hình 1.2 – Chuỗi biên dịch và hợp dịch qua 3 mức ngôn ngữ chương trình</figcaption>
        </figure>

        <h4>5. Sự tiến hóa của công nghệ máy tính và Các loại vi mạch điển hình</h4>
        <ul>
          <li><strong>Thế hệ đèn điện tử chân không (1950s):</strong> Máy tính <strong>ENIAC (1946)</strong> — do John Mauchly thiết kế, nặng ~30 tấn, xử lý theo số thập phân; và máy tính <strong>IAS (1952)</strong> — do John von Neumann thiết kế theo nguyên lý chương trình lưu trữ trong bộ nhớ (<em>“stored program”</em>), xử lý theo số nhị phân.</li>
          <li><strong>Thế hệ linh kiện:</strong> Transistors (1960s) $\\rightarrow$ Vi mạch SSI, MSI, LSI (1970s) $\\rightarrow$ Vi mạch VLSI (1980s) $\\rightarrow$ Vi mạch ULSI (1990s – nay).</li>
          <li><strong>Các loại vi mạch (IC) điển hình trong máy tính hiện đại:</strong>
            <ul>
              <li><strong>Bộ vi xử lý (Microprocessor):</strong> Tích hợp CPU (ngày nay thường gồm nhiều nhân xử lý) trên một vi mạch.</li>
              <li><strong>Chipset:</strong> Tập hợp vi mạch hỗ trợ kết nối và điều phối dữ liệu giữa CPU với bộ nhớ chính và hệ thống vào-ra.</li>
              <li><strong>Bộ nhớ bán dẫn (Semiconductor Memory):</strong> Các chip nhớ ROM, RAM (DRAM/SRAM), Flash.</li>
              <li><strong>Hệ thống trên chip / Vi điều khiển (SoC / Microcontrollers):</strong> Tích hợp CPU, bộ nhớ và các khối giao tiếp ngoại vi trên cùng một chip (dùng phổ biến trong thiết bị di động và hệ thống nhúng).</li>
              <li><strong>Bộ xử lý đồ họa (GPU – Graphics Processing Unit):</strong> Vi mạch chuyên dụng cho xử lý đồ họa và tính toán song song khối lượng lớn.</li>
            </ul>
          </li>
          <li><strong>Sự phát triển độ rộng bit của vi xử lý:</strong> 4-bit (Intel 4004 năm 1971) $\\rightarrow$ 8-bit (1972) $\\rightarrow$ 16-bit (1978, máy tính IBM-PC ra đời năm 1981) $\\rightarrow$ 32-bit (1985) $\\rightarrow$ 64-bit (2001) $\\rightarrow$ Đa lõi (Multicores – từ năm 2006, tích hợp nhiều nhân CPU trên cùng một chip).</li>
        </ul>

        <h4>6. Quy trình sản xuất chip (“Từ cát thành chip”)</h4>
        <ul>
          <li><strong>Chuỗi công đoạn chế tạo vi mạch:</strong> Thỏi tinh thể silic tinh khiết (<em>Silicon ingot</em>) $\\rightarrow$ Máy cắt lát (<em>Slicer</em>) $\\rightarrow$ Đĩa silic trơn (<em>Blank wafers</em>) $\\rightarrow$ 20–40 bước quang khắc và khắc mạch $\\rightarrow$ Wafer đã tạo mạch (<em>Patterned wafers</em>) $\\rightarrow$ Kiểm tra trên wafer (<em>Wafer tester</em>) $\\rightarrow$ Cắt wafer thành từng chip (<em>Dicer</em>) $\\rightarrow$ Các mảnh chip đã kiểm tra (<em>Tested dies</em>) $\\rightarrow$ Gắn die vào vỏ đóng gói (<em>Bond die to package</em>) $\\rightarrow$ Chip đã đóng gói (<em>Packaged dies</em>) $\\rightarrow$ Kiểm tra thành phẩm (<em>Part tester</em>) $\\rightarrow$ Xuất xưởng (<em>Ship</em>).</li>
          <li><strong>Ba khái niệm cốt lõi về chất lượng chế tạo:</strong>
            <ul>
              <li><strong>Die (Mảnh chip):</strong> Một vi mạch riêng lẻ được cắt ra từ tấm đĩa wafer.</li>
              <li><strong>Defect (Khuyết tật):</strong> Lỗi vật lý/vi mô phát sinh trên bề mặt wafer làm hỏng mạch tại vị trí đó.</li>
              <li><strong>Yield (Hiệu suất / Tỉ lệ đạt chuẩn):</strong> Tỉ lệ phần trăm số <em>die</em> hoạt động tốt trên tổng số <em>die</em> của một wafer (công nghệ càng tiên tiến và diện tích die càng nhỏ thì số die trên mỗi wafer càng nhiều). <em>Ví dụ (Intel 10th Gen):</em> Wafer đường kính 300 mm, tiến trình 10 nm, kích thước mỗi die $11.4 \\times 10.7\\text{ mm}$ cho <strong>506 dies</strong> trên một wafer.</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      id: "1.1.3",
      chapter: 1,
      code: "1.1.3",
      title: "Đánh giá hiệu năng máy tính (Trọng tâm tính toán)",
      pdfPage: 7,
      printedPage: 6,
      linkedGroups: ["1.2.2", "1.2.3", "1.2.4", "1.2.5"],
      summary: "Bảng quy đổi đơn vị chuẩn, 5 công thức cốt lõi (T0, n, t_CPU, CPI_TB nhiều lớp lệnh, P_A/P_B & Amdahl, MIPS/MFLOPS–PFLOPS) và 5 hạn chế của MIPS.",
      content: `
        <h4>1. Bảng quy đổi đơn vị chuẩn khi giải bài tập Hiệu năng</h4>
        <p>Khi thay số vào công thức, luôn đổi tất cả đại lượng về đơn vị chuẩn: <strong>giây (s)</strong> đối với thời gian, <strong>Hertz (Hz)</strong> đối với tần số, và <strong>số lệnh</strong> đối với khối lượng lệnh.</p>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Đại lượng</th>
                <th>Đơn vị trong đề bài</th>
                <th>Quy đổi về đơn vị chuẩn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2"><strong>Tần số xung nhịp ($f_0$)</strong></td>
                <td>$1\\text{ MHz}$ (MegaHertz)</td>
                <td>$= 10^6\\text{ Hz}$ (1 triệu chu kỳ/giây)</td>
              </tr>
              <tr>
                <td>$1\\text{ GHz}$ (GigaHertz)</td>
                <td>$= 10^9\\text{ Hz}$ (1 tỷ chu kỳ/giây)</td>
              </tr>
              <tr>
                <td rowspan="4"><strong>Thời gian ($T_0, t_{\\text{CPU}}$)</strong></td>
                <td>$1\\text{ ms}$ (mili-giây)</td>
                <td>$= 10^{-3}\\text{ s}$</td>
              </tr>
              <tr>
                <td>$1\\text{ }\\mu\\text{s}$ (micro-giây)</td>
                <td>$= 10^{-6}\\text{ s}$</td>
              </tr>
              <tr>
                <td>$1\\text{ ns}$ (nano-giây)</td>
                <td>$= 10^{-9}\\text{ s}$</td>
              </tr>
              <tr>
                <td>$1\\text{ ps}$ (pico-giây)</td>
                <td>$= 10^{-12}\\text{ s}$</td>
              </tr>
              <tr>
                <td rowspan="2"><strong>Số lượng lệnh ($IC$)</strong></td>
                <td>1 triệu lệnh</td>
                <td>$= 10^6\\text{ lệnh}$</td>
              </tr>
              <tr>
                <td>1 tỷ lệnh (hoặc <code>1.0E9</code>)</td>
                <td>$= 10^9\\text{ lệnh}$ ($x\\text{E}y = x \\times 10^y$)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Quan hệ rút gọn giữa GHz và ns</div>
          <p>Vì $1\\text{ GHz} = 10^9\\text{ Hz}$ và $1\\text{ ns} = 10^{-9}\\text{ s}$ nên hai số mũ tự triệt tiêu:</p>
          <p>$$T_0\\text{ (tính bằng ns)} = \\frac{1}{f_0\\text{ (tính bằng GHz)}}$$</p>
        </div>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 140" width="660" height="136" role="img" aria-label="Sơ đồ liên hệ các công thức hiệu năng CPU">
            <rect x="20" y="22" width="140" height="44" rx="7" class="svg-box" />
            <text x="90" y="49" text-anchor="middle" class="svg-title">f0 (Hz) ⇄ T0 = 1/f0</text>
            <rect x="20" y="80" width="140" height="44" rx="7" class="svg-box" />
            <text x="90" y="107" text-anchor="middle" class="svg-title">IC × CPI = n (chu kỳ)</text>
            <rect x="230" y="46" width="210" height="54" rx="8" class="svg-box-primary" />
            <text x="335" y="70" text-anchor="middle" class="svg-title-primary">t_CPU = n × T0 = (IC × CPI)/f0</text>
            <text x="335" y="89" text-anchor="middle" class="svg-sub-primary">Đo bằng giây (s)</text>
            <rect x="495" y="22" width="165" height="44" rx="7" class="svg-box-accent" />
            <text x="577" y="49" text-anchor="middle" class="svg-title">Hiệu năng P = 1 / t_CPU</text>
            <rect x="495" y="80" width="165" height="44" rx="7" class="svg-box" />
            <text x="577" y="107" text-anchor="middle" class="svg-title">MIPS = IC / (t_CPU × 10⁶)</text>

            <line x1="160" y1="44" x2="230" y2="66" class="svg-line" />
            <line x1="160" y1="102" x2="230" y2="80" class="svg-line" />
            <line x1="440" y1="64" x2="495" y2="44" class="svg-line" />
            <line x1="440" y1="84" x2="495" y2="102" class="svg-line" />
          </svg>
          <figcaption>Hình 1.3 – Chuỗi liên kết các đại lượng hiệu năng CPU Chương 1</figcaption>
        </figure>

        <h4>2. Năm công thức cốt lõi về Hiệu năng</h4>

        <div class="callout callout-formula">
          <div class="callout-title">📐 1) Chu kỳ xung nhịp ($T_0$) và Tần số xung nhịp ($f_0$)</div>
          <ul>
            <li><strong>Chu kỳ xung nhịp ($T_0$ – Clock period):</strong> Là thời gian kéo dài của một chu kỳ xung nhịp (đơn vị: $\\text{s, ms, ns, ps}$).</li>
            <li><strong>Tần số xung nhịp ($f_0$ – Clock rate / Clock speed):</strong> Là số chu kỳ xung nhịp diễn ra trong 1 giây (đơn vị: $\\text{Hz, MHz, GHz}$).</li>
          </ul>
          <p>$$T_0 = \\frac{1}{f_0} \\qquad \\text{và} \\qquad f_0 = \\frac{1}{T_0}$$</p>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 2) Tổng số chu kỳ xung nhịp ($n$) và Thời gian thực thi ($t_{\\text{CPU}}$)</div>
          <p>Gọi $IC$ (Instruction Count) là tổng số lệnh máy thực hiện; $CPI$ (Cycles Per Instruction) là số chu kỳ xung nhịp trung bình trên mỗi lệnh:</p>
          <p>$$n = IC \\times CPI \\qquad ; \\qquad t_{\\text{CPU}} = n \\times T_0 = \\frac{n}{f_0} = IC \\times CPI \\times T_0 = \\frac{IC \\times CPI}{f_0}$$</p>
          <p>Các công thức suy diễn ngược (khi đề bài cho trước $t_{\\text{CPU}}$):</p>
          <p>$$n = t_{\\text{CPU}} \\times f_0 \\quad ; \\quad CPI = \\frac{t_{\\text{CPU}} \\times f_0}{IC} \\quad ; \\quad IC = \\frac{t_{\\text{CPU}} \\times f_0}{CPI}$$</p>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 1.2.2: Tính chu kỳ xung nhịp ($T_0$), $CPI$ và Thời gian thực thi ($t_{\\text{CPU}}$)</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Cho tần số $f_0$ (hoặc $T_0$), số lượng lệnh $IC$ và $CPI$, yêu cầu tính $T_0$, tổng số chu kỳ $n$, thời gian chạy $t_{\\text{CPU}}$, hoặc tìm ngược $CPI$ / $IC$ khi biết thời gian thực thi.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Đổi đơn vị chuẩn ngay lập tức):</strong> Đưa $f_0$ về $\\text{Hz}$ ($1\\text{ MHz} = 10^6\\text{ Hz}$, $1\\text{ GHz} = 10^9\\text{ Hz}$). Nếu đề hỏi $T_0$ theo $\\text{ns}$, áp dụng ngay mẹo: $T_0\\text{ (ns)} = \\frac{1}{f_0\\text{ (GHz)}}$ (muốn sang $\\text{ps}$ thì nhân thêm $1000$).</li>
                <li><strong>Bước 2 (Tính tổng chu kỳ hoặc thời gian CPU):</strong> Tính $n = IC \\times CPI$, sau đó $t_{\\text{CPU}} = n \\times T_0 = \\frac{IC \\times CPI}{f_0}$. Nếu tìm ngược: $CPI = \\frac{t_{\\text{CPU}} \\times f_0}{IC}$ hoặc $IC = \\frac{t_{\\text{CPU}} \\times f_0}{CPI}$.</li>
                <li><strong>Bước 3 (Kiểm tra đơn vị kết quả):</strong> Đổi giây ($\\text{s}$) về $\\text{ms}$ ($\\times 10^3$), $\\mu\\text{s}$ ($\\times 10^6$), hoặc $\\text{ns}$ ($\\times 10^9$) khớp với phương án trắc nghiệm.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Nếu đề cho cả số dòng hợp ngữ và số lệnh mã máy sau biên dịch (vd 30 lệnh hợp ngữ $\\rightarrow$ 40 lệnh mã máy), bắt buộc phải lấy <strong>số lệnh mã máy ($IC = 40$)</strong>. Kiểm tra bậc lũy thừa khi đọc kí hiệu <code>xEy</code> ($= x \\times 10^y$).</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="1.2.2">
          <span>📝 <strong>Nhóm 1.2.2: Tính T0, CPI và Thời gian thực thi tCPU (<span class="group-q-count">11 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.2', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.2', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 3) Công thức tính $CPI$ trung bình ($CPI_{\\text{TB}}$) nhiều lớp lệnh</div>
          <p>Nếu chương trình gồm $K$ loại lệnh khác nhau, mỗi loại $i$ có số chu kỳ riêng $CPI_i$:</p>
          <ul>
            <li><strong>Trường hợp 1 (Cho số lượng lệnh cụ thể $IC_1, IC_2, \\dots, IC_K$):</strong>
              $$IC = \\sum_{i=1}^{K} IC_i \\quad ; \\quad n = \\sum_{i=1}^{K} (CPI_i \\times IC_i) \\quad ; \\quad CPI_{\\text{TB}} = \\frac{n}{IC} = \\frac{\\sum_{i=1}^{K} (CPI_i \\times IC_i)}{\\sum_{i=1}^{K} IC_i}$$
            </li>
            <li><strong>Trường hợp 2 (Cho tỷ lệ phần trăm $p_1\\%, p_2\\%, \\dots, p_K\\%$, với $\\sum p_i\\% = 100\\% = 1$):</strong>
              $$CPI_{\\text{TB}} = \\sum_{i=1}^{K} (p_i\\% \\times CPI_i)$$
            </li>
          </ul>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 1.2.4: Tính $CPI_{\\text{TB}}$ và Thời gian thực thi nhiều lớp lệnh</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Cho bảng gồm nhiều nhóm lệnh ($A, B, C\\dots$ hoặc ALU, Load, Store, Branch) với $CPI_i$ và số lượng $IC_i$ (hoặc tỷ lệ $p_i\\%$), yêu cầu tính $CPI_{\\text{TB}}$, $t_{\\text{CPU}}$, hoặc xét tác động khi tăng/giảm số lượng một nhóm lệnh.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Kiểm tra đủ $100\\%$ hoặc tổng $IC$):</strong> Nếu đề viết "còn lại là lệnh...", lấy $100\\% - \\sum p_{\\text{đã cho}}\\%$ để ra tỷ lệ nhóm lệnh còn lại trước khi nhân.</li>
                <li><strong>Bước 2 (Tính $CPI_{\\text{TB}}$):</strong> Với số lượng cụ thể, tính tổng chu kỳ $n = \\sum (CPI_i \\times IC_i)$ và tổng lệnh $IC = \\sum IC_i$, rồi lấy $CPI_{\\text{TB}} = \\frac{n}{IC}$. Với tỷ lệ phần trăm, lấy $CPI_{\\text{TB}} = \\sum (p_i\\% \\times CPI_i)$.</li>
                <li><strong>Bước 3 (Tính $t_{\\text{CPU}}$ hoặc bài toán biến thiên):</strong> Thay vào $t_{\\text{CPU}} = \\frac{n}{f_0} = \\frac{IC \\times CPI_{\\text{TB}}}{f_0}$. Nếu một lớp lệnh bị nhân đôi hoặc giảm một nửa, tính lại <strong>cả $n_{\\text{mới}}$ lẫn $IC_{\\text{mới}}$</strong> rồi chia $CPI_{\\text{TB, mới}} = n_{\\text{mới}} / IC_{\\text{mới}}$.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Tuyệt đối không lấy trung bình cộng giản đơn $\\frac{\\sum CPI_i}{K}$ khi tỷ lệ hoặc số lệnh các nhóm khác nhau! Khi thay đổi số lệnh của một nhóm, nhớ cập nhật lại cả tổng $IC_{\\text{mới}}$ ở mẫu số.</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="1.2.4">
          <span>📝 <strong>Nhóm 1.2.4: Tính CPI trung bình nhiều lớp lệnh (<span class="group-q-count">13 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.4', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.4', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 4) Định nghĩa Hiệu năng ($P$), So sánh tốc độ hai máy &amp; Định luật Amdahl</div>
          <p>Hiệu năng ($P$ – Performance) là nghịch đảo của thời gian thực hiện chương trình (máy có $t_{\\text{CPU}}$ nhỏ hơn thì nhanh hơn):</p>
          <p>$$P = \\frac{1}{t_{\\text{CPU}}} \\qquad \\Longrightarrow \\qquad k = \\frac{P_A}{P_B} = \\frac{t_B}{t_A}$$</p>
          <p>Nếu hai máy A và B có <strong>cùng kiến trúc tập lệnh (ISA)</strong> và chạy cùng một chương trình (cùng trình biên dịch) thì $IC_A = IC_B = IC$ tự triệt tiêu:</p>
          <p>$$\\frac{P_A}{P_B} = \\frac{t_B}{t_A} = \\frac{CPI_B \\times T_B}{CPI_A \\times T_A} = \\frac{CPI_B / f_B}{CPI_A / f_A}$$</p>
          <p><strong>Định luật Amdahl:</strong> Nếu cải tiến làm nhanh một phần chiếm tỷ lệ $p$ thời gian ban đầu lên $S$ lần, độ tăng tốc toàn hệ thống là: $$S_{\\text{tổng}} = \\frac{1}{(1 - p) + \\frac{p}{S}}$$</p>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 1.2.5: So sánh hiệu năng &amp; Cân bằng thời gian</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> So sánh máy A nhanh hơn máy B bao nhiêu lần; tìm tần số mới $f_{\\text{mới}}$ để giảm $t_{\\text{CPU}}$ đi $x\\%$ khi $CPI$ tăng; so sánh hai trình biên dịch khác $IC$; hoặc tính độ tăng tốc theo Định luật Amdahl.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Kiểm tra xem $IC$ có giống nhau không):</strong> Nếu đề nói rõ <em>cùng ISA và cùng chương trình</em> (chỉ đổi phần cứng $f_0, T_0, CPI$) thì $IC_A = IC_B$; ngược lại nếu <em>khác trình biên dịch</em> hoặc đề cho hai giá trị $IC_1 \\neq IC_2$ thì bắt buộc tính $t_1 = \\frac{IC_1 \\cdot CPI_1}{f_1}$ và $t_2 = \\frac{IC_2 \\cdot CPI_2}{f_2}$ riêng.</li>
                <li><strong>Bước 2 (Lập tỷ số thời gian nghịch đảo):</strong> $\\frac{P_{\\text{nhanh}}}{P_{\\text{chậm}}} = \\frac{t_{\\text{chậm}}}{t_{\\text{nhanh}}}$ (luôn ra số $&gt; 1$ khi nói máy A nhanh hơn máy B bao nhiêu lần).</li>
                <li><strong>Bước 3 (Bài toán thiết kế lại tần số):</strong> Muốn giảm $t_{\\text{CPU}}$ đi $x\\%$ tức $t_{\\text{mới}} = (1 - \\frac{x}{100}) t_{\\text{cũ}}$. Từ $\\frac{CPI_{\\text{mới}}}{f_{\\text{mới}}} = (1 - \\frac{x}{100}) \\frac{CPI_{\\text{cũ}}}{f_{\\text{cũ}}}$ suy ra $f_{\\text{mới}} = \\frac{f_{\\text{cũ}}}{(1 - x/100)} \\times \\frac{CPI_{\\text{mới}}}{CPI_{\\text{cũ}}}$.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Đừng rút gọn $IC$ khi đề so sánh hai trình biên dịch hoặc cho $IC_1 \\neq IC_2$! Luôn quy đổi thống nhất $T_A, T_B$ (vd $\\text{ps}$ vs $\\text{ns}$) và đối chiếu đúng chiều "A nhanh hơn B" hay "B nhanh hơn A".</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="1.2.5">
          <span>📝 <strong>Nhóm 1.2.5: So sánh hiệu năng &amp; cân bằng thời gian (<span class="group-q-count">15 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.5', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.5', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 5) Chỉ số tốc độ thực thi MIPS và MFLOPS / GFLOPS / TFLOPS / PFLOPS</div>
          <p><strong>MIPS</strong> (Millions of Instructions Per Second – số triệu lệnh thực hiện được trong 1 giây):</p>
          <p>$$\\text{MIPS} = \\frac{IC}{t_{\\text{CPU}} \\times 10^6} = \\frac{f_0}{CPI \\times 10^6} = \\frac{f_0\\text{ (MHz)}}{CPI} = \\frac{f_0\\text{ (GHz)} \\times 1000}{CPI}$$</p>
          <p>Suy ngược $CPI$ khi biết MIPS: $$CPI = \\frac{f_0}{\\text{MIPS} \\times 10^6} = \\frac{f_0\\text{ (MHz)}}{\\text{MIPS}} = \\frac{f_0\\text{ (GHz)} \\times 1000}{\\text{MIPS}}$$</p>
          <p><strong>MFLOPS</strong> (Millions of Floating-Point Operations Per Second) và các bội số lớn hơn:</p>
          <p>$$\\text{MFLOPS} = \\frac{\\text{Số phép toán FP thực thi}}{t_{\\text{CPU}} \\times 10^6} \\quad;\\quad \\text{GFLOPS} = \\frac{\\text{FP ops}}{t_{\\text{CPU}} \\times 10^9} \\quad;\\quad \\text{TFLOPS} = \\frac{\\text{FP ops}}{t_{\\text{CPU}} \\times 10^{12}} \\quad;\\quad \\text{PFLOPS} = \\frac{\\text{FP ops}}{t_{\\text{CPU}} \\times 10^{15}}$$</p>
        </div>

        <div class="callout callout-trap">
          <div class="callout-title">⚠️ 5 hạn chế của chỉ số MIPS</div>
          <ol>
            <li>Chỉ đo tốc độ thực thi lệnh, <strong>không phản ánh được khả năng</strong> của tập lệnh (ISA).</li>
            <li><strong>Không thể dùng để so sánh</strong> giữa các máy tính có kiến trúc tập lệnh (ISA) khác nhau.</li>
            <li>Giá trị MIPS <strong>thay đổi theo từng chương trình</strong> trên cùng một máy tính.</li>
            <li>Phụ thuộc trực tiếp vào <strong>$CPI$ và tần số xung nhịp $f_0$</strong> (hai tham số có thể thay đổi ngược chiều nhau).</li>
            <li><strong>Có thể độc lập với hiệu năng thực sự:</strong> một chương trình dùng nhiều lệnh đơn giản hơn có thể đạt chỉ số MIPS cao hơn nhưng tổng thời gian thực thi $t_{\\text{CPU}}$ thực tế lại lâu hơn.</li>
          </ol>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 1.2.3: Bài tập chỉ số MIPS, suy ngược $CPI$ &amp; MFLOPS</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Tính số triệu lệnh/giây ($\\text{MIPS}$) từ $f_0$ và $CPI$ (hoặc từ $IC$ và $t_{\\text{CPU}}$); tìm ngược $CPI$ khi biết $\\text{MIPS}$ và $f_0$ (hoặc $T_0$); hoặc tính $\\text{MFLOPS/GFLOPS}$ và nhận diện hạn chế của $\\text{MIPS}$.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Đổi nhanh $f_0$ về $\\text{MHz}$):</strong> Nhân $f_0\\text{ (GHz)} \\times 1000$ để ra $\\text{MHz}$. Nếu đề cho chu kỳ $T_0$ theo $\\text{ps}$, tính $f_0\\text{ (MHz)} = \\frac{10^6}{T_0\\text{ (ps)}}$ (vì $1\\text{ MHz} \\cdot 1\\text{ }\\mu\\text{s} = 1$ và $1\\text{ }\\mu\\text{s} = 10^6\\text{ ps}$).</li>
                <li><strong>Bước 2 (Áp dụng công thức triệt tiêu $10^6$):</strong> Tính $\\text{MIPS} = \\frac{f_0\\text{ (MHz)}}{CPI}$, hoặc tìm ngược $CPI = \\frac{f_0\\text{ (MHz)}}{\\text{MIPS}}$.</li>
                <li><strong>Bước 3 (Với bài $\\text{MFLOPS}$):</strong> Đếm đúng tổng số phép toán dấu phẩy động (Floating-Point) thực hiện và chia cho $t_{\\text{CPU}} \\times 10^6$ (hoặc $10^9$ cho $\\text{GFLOPS}$).</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Đừng nhầm lẫn hệ số $10^6$ (MHz / MIPS / MFLOPS) với $10^9$ (GHz / GFLOPS). Nhớ rằng chỉ số $\\text{MIPS}$ cao hơn KHÔNG đồng nghĩa thời gian chạy ngắn hơn nếu khác ISA hoặc khác số lệnh $IC$.</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="1.2.3">
          <span>📝 <strong>Nhóm 1.2.3: Bài tập chỉ số MIPS &amp; MFLOPS (<span class="group-q-count">7 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.3', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.3', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },

    // ==================== CHƯƠNG 2 ====================
    {
      id: "2.1.1",
      chapter: 2,
      code: "2.1.1",
      title: "Các thành phần cơ bản của máy tính",
      pdfPage: 28,
      printedPage: 27,
      linkedGroups: ["2.1", "2.2.1"],
      summary: "Chi tiết CPU (CU, ALU, RF), Hệ thống bộ nhớ (Bộ nhớ chính, Cache, Storage) và Hệ thống vào-ra (Thiết bị ngoại vi, Mô-đun vào-ra, Cổng I/O).",
      content: `
        <p>Mọi hệ thống máy tính đều hoạt động dựa trên sự phối hợp của các mô-đun phần cứng chính: <strong>Bộ xử lý trung tâm (CPU)</strong>, <strong>Bộ nhớ máy tính</strong> và <strong>Hệ thống vào-ra</strong>, được kết nối với nhau thông qua <strong>Liên kết hệ thống (Bus)</strong>.</p>

        <h4>1. Bộ xử lý trung tâm (CPU – Central Processing Unit)</h4>
        <ul>
          <li><strong>Chức năng:</strong> Điều khiển hoạt động của toàn bộ máy tính và trực tiếp xử lý dữ liệu.</li>
          <li><strong>Nguyên tắc hoạt động:</strong> CPU hoạt động theo chương trình nằm trong bộ nhớ chính và là thành phần có tốc độ xử lý nhanh nhất trong hệ thống.</li>
          <li><strong>Ba thành phần cơ bản bên trong CPU:</strong>
            <ol>
              <li><strong>Đơn vị điều khiển (CU – Control Unit):</strong> Giải mã lệnh và phát các tín hiệu điều khiển hoạt động của máy tính theo chương trình đã định sẵn.</li>
              <li><strong>Đơn vị số học và logic (ALU – Arithmetic and Logic Unit):</strong> Thực hiện các phép toán số học (cộng, trừ, nhân, chia, so sánh) và các phép toán logic (AND, OR, XOR, NOT, dịch bit).</li>
              <li><strong>Tập thanh ghi (RF – Register File):</strong> Gồm các thanh ghi nằm ngay bên trong CPU, có tốc độ truy cập nhanh nhất, chịu trách nhiệm lưu giữ các thông tin tạm thời phục vụ cho hoạt động tức thời của CPU.</li>
            </ol>
          </li>
        </ul>

        <h4>2. Bộ nhớ máy tính (Memory System)</h4>
        <ul>
          <li><strong>Chức năng và thao tác:</strong> Lưu trữ chương trình và dữ liệu dưới dạng nhị phân. Có hai thao tác cơ bản với bộ nhớ là thao tác <strong>Ghi (Write)</strong> và thao tác <strong>Đọc (Read)</strong>.</li>
          <li><strong>Phân biệt Bộ nhớ trong và Bộ nhớ ngoài:</strong>
            <ul>
              <li><strong>Bộ nhớ trong:</strong> Gồm Bộ nhớ chính (RAM, ROM) và Bộ nhớ đệm (Cache).</li>
              <li><strong>Bộ nhớ ngoài (Thiết bị lưu trữ – Storage):</strong> Gồm ổ đĩa cứng từ tính (HDD), ổ thể rắn bán dẫn (SSD), ổ nhớ Flash, thẻ nhớ, đĩa quang (CD, DVD).</li>
            </ul>
          </li>
          <li><strong>Đặc điểm của 3 thành phần bộ nhớ:</strong>
            <ol>
              <li><strong>Bộ nhớ chính (Main Memory):</strong> Tồn tại trên mọi máy tính, chứa các lệnh và dữ liệu của chương trình đang được thực hiện. Bộ nhớ chính sử dụng bộ nhớ bán dẫn, được tổ chức thành các ngăn nhớ được đánh địa chỉ (thường đánh địa chỉ theo từng byte).
                <br/><em>Tính chất quan trọng của ngăn nhớ:</em> Mỗi ngăn nhớ trong máy tính có <strong>nội dung (giá trị dữ liệu) có thể thay đổi</strong>, nhưng <strong>địa chỉ vật lý của ngăn nhớ đó luôn cố định</strong>. CPU muốn đọc hoặc ghi một ngăn nhớ thì bắt buộc phải biết địa chỉ của ngăn nhớ đó.
              </li>
              <li><strong>Bộ nhớ đệm (Cache Memory):</strong> Là bộ nhớ bán dẫn có tốc độ nhanh được đặt đệm giữa CPU và bộ nhớ chính nhằm tăng tốc độ CPU truy cập bộ nhớ. Cache có dung lượng nhỏ hơn bộ nhớ chính, thường được chia thành các mức (L1, L2, L3) và tích hợp trên cùng chip bộ xử lý.</li>
              <li><strong>Thiết bị lưu trữ (Storage / Bộ nhớ ngoài):</strong> Dùng để lưu giữ lâu dài tài nguyên phần mềm và dữ liệu; có dung lượng rất lớn nhưng tốc độ chậm. Về mặt liên kết hệ thống, thiết bị lưu trữ được kết nối với máy tính dưới dạng các thiết bị vào-ra.</li>
            </ol>
          </li>
        </ul>

        <h4>3. Hệ thống vào-ra (Input/Output System)</h4>
        <ul>
          <li><strong>Chức năng và thao tác:</strong> Trao đổi thông tin giữa máy tính với thế giới bên ngoài thông qua hai thao tác cơ bản là <strong>Vào dữ liệu (Input)</strong> và <strong>Ra dữ liệu (Output)</strong>.</li>
          <li><strong>Hai thành phần chính của hệ thống vào-ra:</strong>
            <ol>
              <li><strong>Các thiết bị vào-ra (I/O Devices / Thiết bị ngoại vi – Peripherals):</strong> Làm nhiệm vụ chuyển đổi dữ liệu giữa bên trong và bên ngoài máy tính. Gồm 4 nhóm: Thiết bị vào (bàn phím, chuột), Thiết bị ra (màn hình, máy in), Thiết bị lưu trữ (HDD, SSD), và Thiết bị truyền thông (card mạng, modem). <em>Lưu ý: Các thiết bị ngoại vi không nối trực tiếp với CPU hay Bus hệ thống mà phải kết nối thông qua Mô-đun vào-ra.</em></li>
              <li><strong>Các mô-đun vào-ra (I/O Modules):</strong> Làm nhiệm vụ nối ghép các thiết bị vào-ra với máy tính (qua Bus hệ thống). Mỗi mô-đun vào-ra có một hoặc một vài <strong>cổng vào-ra (I/O Ports)</strong>, mỗi cổng được đánh một địa chỉ xác định. CPU muốn trao đổi dữ liệu với thiết bị ngoại vi nào thì phải thông qua địa chỉ của cổng vào-ra tương ứng.</li>
            </ol>
          </li>
        </ul>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 190" width="660" height="185" role="img" aria-label="Sơ đồ cấu trúc kết nối CPU, Bus hệ thống, Bộ nhớ chính và Hệ thống vào-ra theo trang 29 PDF">
            <rect x="24" y="34" width="165" height="118" rx="6" class="svg-box-accent" />
            <text x="106" y="80" text-anchor="middle" class="svg-title">CPU</text>
            <text x="106" y="106" text-anchor="middle" class="svg-sub">(PC, IR, CU, ALU, RF)</text>

            <text x="242" y="22" text-anchor="middle" class="svg-title">Bus hệ thống</text>
            <line x1="234" y1="34" x2="234" y2="164" class="svg-bus-rail" />
            <line x1="250" y1="34" x2="250" y2="164" class="svg-bus-rail" />

            <rect x="298" y="34" width="165" height="58" rx="6" class="svg-box" />
            <text x="380" y="58" text-anchor="middle" class="svg-title">Bộ nhớ chính</text>
            <text x="380" y="79" text-anchor="middle" class="svg-sub">(Các ngăn nhớ)</text>

            <rect x="298" y="106" width="165" height="62" rx="6" class="svg-box" />
            <text x="380" y="130" text-anchor="middle" class="svg-title">Mô-đun vào-ra</text>
            <text x="380" y="152" text-anchor="middle" class="svg-sub">(Các cổng vào-ra)</text>

            <rect x="514" y="102" width="146" height="28" rx="5" class="svg-box" />
            <text x="587" y="121" text-anchor="middle" class="svg-sub">Thiết bị ngoại vi 1</text>
            <rect x="514" y="142" width="146" height="28" rx="5" class="svg-box" />
            <text x="587" y="161" text-anchor="middle" class="svg-sub">Thiết bị ngoại vi 2</text>

            <line x1="189" y1="93" x2="234" y2="93" class="svg-line-bidir" />
            <line x1="250" y1="63" x2="298" y2="63" class="svg-line-bidir" />
            <line x1="250" y1="137" x2="298" y2="137" class="svg-line-bidir" />
            <line x1="463" y1="116" x2="514" y2="116" class="svg-line-bidir" />
            <line x1="463" y1="156" x2="514" y2="156" class="svg-line-bidir" />
          </svg>
          <figcaption>Hình 2.1 – Sơ đồ ghép nối các thành phần cơ bản qua Bus hệ thống (KTMT_GK.pdf trang 30)</figcaption>
        </figure>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 2.2.1: Cấu trúc CPU, Bộ nhớ &amp; Hệ thống vào-ra</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Hỏi chức năng từng khối bên trong CPU (<code>CU, ALU, RF</code>), phân biệt bộ nhớ trong vs bộ nhớ ngoài, tính chất của ngăn nhớ, vai trò chính của Cache, hoặc cách kết nối thiết bị ngoại vi.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Ánh xạ chức năng khối phần cứng):</strong> Lưu tạm thời tức thời bên trong CPU &rarr; <strong>Tập thanh ghi (RF)</strong>; giải mã &amp; phát điều khiển &rarr; <strong>CU</strong>; tính toán số học/logic &rarr; <strong>ALU</strong>; ngăn nhớ có <em>nội dung thay đổi được</em> nhưng <em>địa chỉ vật lý cố định</em>.</li>
                <li><strong>Bước 2 (Phân biệt Bộ nhớ &amp; Thiết bị ngoại vi):</strong> Cache đặt đệm giữa CPU và bộ nhớ chính để <strong>tăng tốc độ truy cập bộ nhớ chính</strong>; thiết bị ngoại vi (như bàn phím, màn hình) không nối trực tiếp với CPU hay Bus hệ thống mà luôn kết nối qua <strong>Mô-đun vào-ra</strong>.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Bộ nhớ ngoài (SSD/HDD/USB Flash/DVD) KHÔNG thuộc bộ nhớ trong; thiết bị lưu trữ về mặt liên kết hệ thống được ghép nối dưới dạng thiết bị vào-ra.</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="2.2.1">
          <span>📝 <strong>Nhóm 2.2.1: Cấu trúc CPU, Bộ nhớ &amp; Hệ thống vào-ra (<span class="group-q-count">6 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.1', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.1', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "2.1.2",
      chapter: 2,
      code: "2.1.2",
      title: "Ba hoạt động cơ bản của máy tính",
      pdfPage: 30,
      printedPage: 29,
      linkedGroups: ["2.1", "2.2.2"],
      summary: "Chu trình lệnh (Fetch-Decode-Execute, PC, IR), Cơ chế Ngắt (Interrupt Handler, tuần tự vs ưu tiên) và 2 kiểu hoạt động Vào-Ra (qua CPU vs DMA).",
      content: `
        <h4>1. Hoạt động thực hiện chương trình (Chu trình lệnh)</h4>
        <p>Máy tính thực hiện chương trình bằng cách lặp đi lặp lại chu trình lệnh gồm hai bước chính: <strong>Tìm nạp lệnh (Fetch instruction)</strong> và <strong>Thực hiện lệnh (Execute instruction)</strong>. Hoạt động này chỉ dừng lại khi gặp lệnh thực hiện bị lỗi, gặp lệnh dừng hoặc tắt máy.</p>
        <ul>
          <li><strong>Quá trình Tìm nạp lệnh (Fetch):</strong>
            <ul>
              <li><strong>Bộ đếm chương trình PC (Program Counter):</strong> Là thanh ghi của CPU luôn chứa <strong>địa chỉ của lệnh tiếp theo</strong> sẽ được nạp vào để thực hiện (trên kiến trúc Intel x86, thanh ghi này được gọi là <code>IP</code> – Instruction Pointer). <em>Địa chỉ khởi động ban đầu của PC khi bật máy do người thiết kế CPU quy định.</em></li>
              <li>Bắt đầu mỗi chu trình lệnh, CPU phát địa chỉ từ thanh ghi <code>PC</code> ra bộ nhớ chính để tìm ngăn nhớ chứa lệnh.</li>
              <li>Lệnh đọc từ bộ nhớ chính được nạp vào <strong>Thanh ghi lệnh IR (Instruction Register)</strong> của CPU.</li>
              <li>Sau khi lệnh được nạp vào <code>IR</code>, nếu chương trình thực hiện tuần tự, CPU sẽ <strong>tự động tăng nội dung thanh ghi PC</strong> theo độ dài lệnh (với tập lệnh 32-bit cố định của RISC-V, mỗi lệnh chiếm 4 byte nên $PC \\leftarrow PC + 4$; nếu là lệnh rẽ nhánh hoặc nhảy thành công thì $PC$ nhận giá trị <em>địa chỉ đích</em>).</li>
            </ul>
          </li>
          <li><strong>Quá trình Giải mã và Thực hiện lệnh (Decode &amp; Execute):</strong>
            <br/>Ngay sau khi lấy lệnh vào thanh ghi <code>IR</code>, CPU tiến hành giải mã lệnh đang nằm trong thanh ghi <code>IR</code> và phát các tín hiệu điều khiển thực hiện 1 trong <strong>3 kiểu thao tác cơ bản</strong>:
            <ol>
              <li>Trao đổi dữ liệu giữa CPU với bộ nhớ chính hoặc với mô-đun vào-ra.</li>
              <li>Thực hiện các phép toán số học hoặc phép toán logic với các dữ liệu (trên ALU).</li>
              <li>Chuyển điều khiển trong chương trình (rẽ nhánh hoặc nhảy đến vị trí khác, bản chất là thay đổi giá trị của thanh ghi <code>PC</code> bằng địa chỉ đích).</li>
            </ol>
          </li>
        </ul>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 140" width="660" height="136" role="img" aria-label="Sơ đồ chu trình lệnh Fetch-Execute và kiểm tra Ngắt">
            <rect x="20" y="34" width="165" height="72" rx="8" class="svg-box-accent" />
            <text x="102" y="60" text-anchor="middle" class="svg-title">1. Tìm nạp (Fetch)</text>
            <text x="102" y="80" text-anchor="middle" class="svg-sub">IR ← Mem[PC]</text>
            <text x="102" y="96" text-anchor="middle" class="svg-sub">PC ← PC + 4</text>

            <rect x="225" y="34" width="195" height="72" rx="8" class="svg-box-primary" />
            <text x="322" y="60" text-anchor="middle" class="svg-title-primary">2. Giải mã &amp; Thực hiện</text>
            <text x="322" y="80" text-anchor="middle" class="svg-sub-primary">CU giải mã IR → ALU / Mem / PC</text>
            <text x="322" y="96" text-anchor="middle" class="svg-sub-primary">(Ngắt kiểm tra sau mỗi lệnh)</text>

            <rect x="460" y="34" width="195" height="72" rx="8" class="svg-box" />
            <text x="557" y="60" text-anchor="middle" class="svg-title">3. Kiểm tra Ngắt (INT)</text>
            <text x="557" y="80" text-anchor="middle" class="svg-sub">Cất ngữ cảnh → Interrupt Handler</text>
            <text x="557" y="96" text-anchor="middle" class="svg-sub">Khôi phục → Quay về lệnh kế</text>

            <line x1="185" y1="70" x2="225" y2="70" class="svg-line" />
            <line x1="420" y1="70" x2="460" y2="70" class="svg-line" />
            <path d="M 557 106 L 557 126 L 102 126 L 102 106" fill="none" class="svg-line" />
          </svg>
          <figcaption>Hình 2.2 – Chu trình Nạp – Giải mã – Thực hiện lệnh và Kiểm tra ngắt cuối mỗi chu trình</figcaption>
        </figure>

        <h4>2. Hoạt động Ngắt (Interrupt)</h4>
        <ul>
          <li><strong>Định nghĩa:</strong> Ngắt là cơ chế cho phép CPU tạm dừng chương trình đang thực hiện để chuyển sang thực hiện một chương trình con có sẵn trong bộ nhớ gọi là <strong>chương trình con xử lý ngắt (Interrupt Handler)</strong>.</li>
          <li><strong>Các loại nguyên nhân gây ngắt:</strong>
            <ul>
              <li>Ngắt do lỗi khi thực hiện lệnh (ví dụ: tràn số học, chia cho 0, mã lệnh sai).</li>
              <li>Ngắt do lỗi phần cứng.</li>
              <li>Ngắt do bộ định thời (Timer).</li>
              <li>Ngắt do bộ điều khiển vào-ra gửi tín hiệu ngắt đến CPU để yêu cầu trao đổi dữ liệu.</li>
            </ul>
          </li>
          <li><strong>Quy trình CPU xử lý ngắt từ mô-đun vào-ra (5 bước):</strong>
            <ol>
              <li>Sau khi hoàn thành <strong>mỗi một lệnh máy</strong>, CPU kiểm tra tín hiệu ngắt. Nếu không có ngắt, CPU tìm nạp lệnh tiếp theo.</li>
              <li>Nếu có tín hiệu ngắt, CPU tạm dừng (suspend) chương trình đang thực hiện.</li>
              <li><strong>Cất ngữ cảnh:</strong> Lưu địa chỉ trở về trên <code>PC</code> và các thông tin liên quan đến chương trình bị ngắt vào ngăn xếp.</li>
              <li>Thiết lập bộ đếm chương trình <code>PC</code> trỏ đến địa chỉ bắt đầu của chương trình con xử lý ngắt tương ứng.</li>
              <li>Thực hiện chương trình con xử lý ngắt, sau đó khôi phục ngữ cảnh và trở về tiếp tục thực hiện chương trình đang bị tạm dừng (tại lệnh kế tiếp $i + 1$).</li>
            </ol>
          </li>
          <li><strong>Xử lý khi có nhiều yêu cầu ngắt:</strong> Gồm hai phương pháp là <strong>Xử lý ngắt tuần tự</strong> (thực hiện lần lượt hết chương trình xử lý ngắt X rồi mới thực hiện chương trình xử lý ngắt Y) và <strong>Xử lý ngắt ưu tiên</strong> (chương trình xử lý ngắt Y có mức ưu tiên cao hơn được phép ngắt tạm thời chương trình xử lý ngắt X đang chạy).</li>
        </ul>

        <h4>3. Hoạt động Vào-Ra (Input/Output Operations)</h4>
        <p>Là hoạt động trao đổi dữ liệu giữa mô-đun vào-ra với bên trong máy tính, có <strong>2 kiểu cơ bản</strong>:</p>
        <ol>
          <li><strong>Vào-ra qua CPU:</strong> CPU trực tiếp trao đổi dữ liệu với mô-đun vào-ra thông qua các lệnh vào-ra trong chương trình (<em>Vào-ra bằng chương trình</em> hoặc <em>Vào-ra điều khiển bằng ngắt</em>).</li>
          <li><strong>DMA (Direct Memory Access – Truy nhập bộ nhớ trực tiếp):</strong> CPU trao quyền điều khiển hệ thống bus cho phép mô-đun vào-ra trao đổi dữ liệu trực tiếp với bộ nhớ chính mà không đi qua CPU.</li>
        </ol>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 2.2.2: Chu trình lệnh (PC / IR) &amp; Hoạt động Ngắt</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Hỏi thứ tự các bước trong chu trình Tìm nạp – Giải mã – Thực hiện, vai trò của thanh ghi <code>PC</code> và <code>IR</code>, hoặc cơ chế và thứ tự xử lý ngắt (đơn / nhiều ngắt).</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Chuỗi Fetch–Decode–Execute):</strong> Tìm nạp: CPU tác động lên <strong>Bộ nhớ chính</strong> bằng địa chỉ từ <code>PC</code> &rarr; nạp lệnh vào <code>IR</code> &rarr; tăng <code>PC</code> (<code>PC += 4</code> với lệnh 32-bit). Giải mã: giải mã mã lệnh đang nằm trong <strong><code>IR</code></strong>. Thực hiện: trao đổi Mem/I/O, ALU hoặc rẽ nhánh cập nhật <code>PC</code>.</li>
                <li><strong>Bước 2 (Xác định thời điểm &amp; thứ tự Ngắt):</strong> CPU kiểm tra tín hiệu ngắt <strong>sau khi kết thúc mỗi lệnh máy</strong> (không ngắt giữa chừng khi đang thực hiện lệnh). Thứ tự chuẩn: Tạm dừng chương trình chính &rarr; Cất ngữ cảnh (<code>PC</code> &amp; thanh ghi vào Stack) &rarr; Nạp địa chỉ ISR vào <code>PC</code> &rarr; Chạy ISR &rarr; Khôi phục ngữ cảnh &amp; chạy tiếp lệnh $i+1$.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Không nhầm <code>PC</code> (giữ địa chỉ lệnh kế tiếp) với <code>IR</code> (giữ mã lệnh hiện hành đang giải mã); phân biệt <em>Ngắt tuần tự</em> (chạy hết ISR X mới chạy ISR Y) với <em>Ngắt ưu tiên</em> (ISR mức cao ngắt ngang ISR mức thấp).</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="2.2.2">
          <span>📝 <strong>Nhóm 2.2.2: Chu trình lệnh (PC / IR) &amp; Hoạt động Ngắt (<span class="group-q-count">5 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.2', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.2', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "2.1.3",
      chapter: 2,
      code: "2.1.3",
      title: "Liên kết trong máy tính (Hệ thống Bus và Liên kết điểm-điểm)",
      pdfPage: 31,
      printedPage: 30,
      linkedGroups: ["2.1", "2.2.3"],
      summary: "Luồng thông tin mô-đun nhớ/I/O/CPU, 3 loại Bus, 11 tín hiệu điều khiển điển hình, Bus dùng chung vs Đa bus và Liên kết điểm-điểm (QPI 4 lớp Phit/Flit, PCIe 1.0–6.0, SATA, USB).",
      content: `
        <h4>1. Luồng thông tin kết nối tới từng mô-đun</h4>
        <ul>
          <li><strong>Mô-đun nhớ:</strong> Nhận <strong>Địa chỉ</strong> xác định ngăn nhớ; nhận <strong>Dữ liệu</strong> khi ghi; đưa <strong>Dữ liệu hoặc Lệnh</strong> ra khi đọc (<em>lưu ý quan trọng: bản thân bộ nhớ <strong>không phân biệt lệnh và dữ liệu</strong></em>, mọi ngăn nhớ đều chỉ lưu các chuỗi bit nhị phân; CPU tự phân biệt khi đọc vào <code>IR</code> hay thanh ghi dữ liệu); nhận tín hiệu điều khiển Đọc (<code>Read</code>) và Ghi (<code>Write</code>).</li>
          <li><strong>Mô-đun vào-ra:</strong> Nhận <strong>Địa chỉ</strong> xác định cổng vào-ra; chuyển <strong>Dữ liệu</strong> hai chiều giữa bên trong máy tính và bên ngoài; nhận tín hiệu điều khiển Đọc/Ghi từ CPU; phát tín hiệu điều khiển đến thiết bị ngoại vi và phát tín hiệu yêu cầu ngắt (<code>INTR</code>) đến CPU.</li>
          <li><strong>CPU:</strong> Phát <strong>Địa chỉ</strong> đến mô-đun nhớ hoặc mô-đun vào-ra; đọc <strong>Lệnh</strong> từ bộ nhớ; đọc/ghi <strong>Dữ liệu</strong> với bộ nhớ hoặc mô-đun vào-ra; phát tín hiệu điều khiển đọc/ghi và nhận tín hiệu yêu cầu ngắt.</li>
        </ul>

        <h4>2. Liên kết Bus trong máy tính</h4>
        <p><strong>Bus</strong> là tập hợp các đường dây kết nối dùng để vận chuyển thông tin giữa các mô-đun của máy tính với nhau. <strong>Độ rộng bus</strong> là số đường dây của bus có thể truyền các bit thông tin đồng thời (khái niệm độ rộng bus chỉ dùng cho Bus địa chỉ và Bus dữ liệu, không cố định cho Bus điều khiển).</p>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 760 176" width="740" height="172" role="img" aria-label="Sơ đồ 3 loại Bus hệ thống: Địa chỉ, Dữ liệu và Điều khiển">
            <rect x="20" y="18" width="136" height="138" rx="8" class="svg-box-accent" />
            <text x="88" y="74" text-anchor="middle" class="svg-title">CPU</text>
            <text x="88" y="94" text-anchor="middle" class="svg-sub">Phát địa chỉ &amp;</text>
            <text x="88" y="110" text-anchor="middle" class="svg-sub">Tín hiệu điều khiển</text>

            <rect x="604" y="18" width="136" height="60" rx="7" class="svg-box" />
            <text x="672" y="45" text-anchor="middle" class="svg-title">Bộ nhớ chính</text>
            <text x="672" y="62" text-anchor="middle" class="svg-sub">RAM / ROM</text>

            <rect x="604" y="96" width="136" height="60" rx="7" class="svg-box" />
            <text x="672" y="123" text-anchor="middle" class="svg-title">Mô-đun I/O</text>
            <text x="672" y="140" text-anchor="middle" class="svg-sub">Cổng vào-ra</text>

            <rect x="196" y="18" width="368" height="38" rx="5" class="svg-box-primary" />
            <text x="380" y="34" text-anchor="middle" class="svg-title-primary">Bus Địa chỉ (Address Bus)</text>
            <text x="380" y="49" text-anchor="middle" class="svg-sub-primary">1 chiều: CPU/DMA → Mem, I/O — 2ᴺ địa chỉ</text>

            <rect x="196" y="68" width="368" height="38" rx="5" class="svg-box" />
            <text x="380" y="84" text-anchor="middle" class="svg-title">Bus Dữ liệu (Data Bus)</text>
            <text x="380" y="99" text-anchor="middle" class="svg-sub">2 chiều: CPU ⇄ Mem, I/O — M bit = M/8 byte</text>

            <rect x="196" y="118" width="368" height="38" rx="5" class="svg-box" />
            <text x="380" y="134" text-anchor="middle" class="svg-title">Bus Điều khiển (Control Bus)</text>
            <text x="380" y="149" text-anchor="middle" class="svg-sub">MEMR/W, IOR/W, INTR/INTA, BRQ/BGT</text>

            <line x1="156" y1="37" x2="196" y2="37" class="svg-line" />
            <line x1="564" y1="37" x2="604" y2="37" class="svg-line" />
            <polyline points="580,37 580,112 604,112" class="svg-line" />

            <line x1="156" y1="87" x2="196" y2="87" class="svg-line-bidir" />
            <polyline points="564,87 588,87 588,54 604,54" class="svg-line-bidir" />
            <polyline points="588,87 588,126 604,126" class="svg-line-bidir" />

            <line x1="156" y1="137" x2="196" y2="137" class="svg-line-bidir" />
            <polyline points="564,137 596,137 596,68 604,68" class="svg-line-bidir" />
            <line x1="596" y1="137" x2="604" y2="137" class="svg-line-bidir" />
          </svg>
          <figcaption>Hình 2.3 – Cấu trúc Bus hệ thống 3 thành phần (Địa chỉ, Dữ liệu, Điều khiển)</figcaption>
        </figure>

        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Loại Bus</th>
                <th>Hướng truyền</th>
                <th>Chức năng và Công thức tính toán</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Bus địa chỉ<br/>(Address Bus)</strong></td>
                <td><strong>Một chiều</strong><br/>(Từ CPU/DMA đến Bộ nhớ và I/O)</td>
                <td>Vận chuyển địa chỉ để xác định vị trí ngăn nhớ hay cổng vào-ra.<br/>Nếu có độ rộng $N$ bit ($A_{N-1}\\dots A_0$), số địa chỉ tối đa (không gian địa chỉ) là: <strong>$2^N$ địa chỉ</strong> (từ $00\\dots 0_{(2)}$ đến $11\\dots 1_{(2)}$).</td>
              </tr>
              <tr>
                <td><strong>Bus dữ liệu<br/>(Data Bus)</strong></td>
                <td><strong>Hai chiều</strong><br/>(Giữa CPU, Bộ nhớ và I/O)</td>
                <td>Vận chuyển lệnh từ bộ nhớ đến CPU và vận chuyển dữ liệu giữa các thành phần.<br/>Nếu có độ rộng $M$ bit ($D_{M-1}\\dots D_0$, thường là $8, 16, 32, 64$ bit), mỗi thời điểm truyền đồng thời được $M$ bit ($= M/8$ byte).</td>
              </tr>
              <tr>
                <td><strong>Bus điều khiển<br/>(Control Bus)</strong></td>
                <td>Tùy từng đường tín hiệu</td>
                <td>Vận chuyển các tín hiệu điều khiển đọc/ghi, điều khiển ngắt và điều khiển xin nhượng bus.<br/>Độ rộng phụ thuộc vào thiết kế cụ thể của từng bộ xử lý (không xác định cố định theo bus dữ liệu).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="formula-practice-inline" data-group-link="2.2.3">
          <span>📝 <strong>Nhóm 2.2.3: Bus hệ thống &amp; Tính toán Không gian địa chỉ (<span class="group-q-count">16 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.3', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('2.2.3', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <h4>3. Các tín hiệu điều khiển điển hình trên Bus điều khiển</h4>
        <ul>
          <li><strong>Nhóm tín hiệu điều khiển đọc/ghi (do CPU phát ra):</strong>
            <ul>
              <li><code>MEMR</code> (Memory Read): Điều khiển đọc dữ liệu/lệnh từ ngăn nhớ có địa chỉ xác định đưa lên bus dữ liệu chuyển vào CPU.</li>
              <li><code>MEMW</code> (Memory Write): Điều khiển ghi dữ liệu trên bus dữ liệu (từ CPU) vào ngăn nhớ có địa chỉ xác định.</li>
              <li><code>IOR</code> (I/O Read): Điều khiển đọc dữ liệu từ cổng vào-ra có địa chỉ xác định đưa lên bus dữ liệu chuyển vào CPU.</li>
              <li><code>IOW</code> (I/O Write): Điều khiển ghi dữ liệu trên bus dữ liệu (từ CPU) ra cổng vào-ra có địa chỉ xác định.</li>
            </ul>
          </li>
          <li><strong>Nhóm tín hiệu điều khiển ngắt:</strong>
            <ul>
              <li><code>INTR</code> (Interrupt Request): Từ bộ điều khiển vào-ra gửi đến yêu cầu ngắt CPU để trao đổi vào-ra (tín hiệu này có thể bị che/cấm).</li>
              <li><code>INTA</code> (Interrupt Acknowledge): Từ CPU phát ra báo cho bộ điều khiển vào-ra biết CPU chấp nhận ngắt.</li>
              <li><code>NMI</code> (Non-Maskable Interrupt): Tín hiệu ngắt không thể che gửi đến CPU.</li>
              <li><code>Reset</code>: Tín hiệu từ bên ngoài gửi đến để khởi động lại máy tính.</li>
            </ul>
          </li>
          <li><strong>Nhóm tín hiệu điều khiển bus (phục vụ DMA):</strong>
            <ul>
              <li><code>BRQ</code> (Bus Request): Từ mô-đun vào-ra (DMAC) gửi đến yêu cầu CPU chuyển nhượng quyền sử dụng bus.</li>
              <li><code>BGT</code> (Bus Grant): Từ CPU phát ra chấp nhận chuyển nhượng quyền sử dụng bus.</li>
              <li><code>Lock/Unlock</code>: Tín hiệu cấm hoặc cho phép xin chuyển nhượng bus.</li>
            </ul>
          </li>
        </ul>

        <h4>4. Bus dùng chung (Shared Bus), Đa bus (Multiple Bus) và Liên kết điểm-điểm</h4>
        <ul>
          <li><strong>Đặc điểm &amp; hạn chế của Bus dùng chung (Shared Bus):</strong>
            <ul>
              <li>Nhiều mô-đun (CPU, RAM, các mô-đun I/O) cùng kết nối vào một bus chung nên bắt buộc phải có <strong>bộ phân xử bus (Bus Arbiter)</strong> để phân quyền truy cập.</li>
              <li>Tại một thời điểm chỉ phục vụ được <strong>một yêu cầu</strong> trao đổi dữ liệu nên độ trễ lớn và dễ nghẽn cổ chai.</li>
              <li>Khó đồng bộ hóa và nâng tốc độ xung nhịp bus khi kết nối chung cả các mô-đun nhanh (CPU, RAM) và các mô-đun chậm (ngoại vi).</li>
            </ul>
          </li>
          <li><strong>Kiến trúc Đa bus (Multiple Bus):</strong> Khắc phục nhược điểm của bus dùng chung bằng cách tách thành các bus phân cấp theo tốc độ: <strong>Bus CPU / Hệ thống</strong> (tốc độ cao nhất nối CPU với Cache/cầu nối), <strong>Bus Bộ nhớ</strong> (nối RAM), và <strong>Bus Vào-Ra / Mở rộng</strong> (nối các thiết bị I/O qua cầu nối/bộ điều khiển), giảm tranh chấp và tăng băng thông tổng thể.</li>
          <li><strong>Liên kết điểm-điểm (Point-to-point Interconnection) và các bus ngoại vi phổ biến:</strong> Cho độ trễ nhỏ, tốc độ rất cao và khả năng mở rộng tốt:
            <ul>
              <li><strong>QPI (Intel Quick Path Interconnect – 2008):</strong> Kết nối trực tiếp từng cặp điểm-điểm giữa các bộ xử lý / lõi (Cores) và bộ điều khiển <strong>I/O Hub</strong> (loại bỏ hoàn toàn bộ phân xử bus). QPI truyền dữ liệu dạng gói tốc độ cao theo kiến trúc giao thức <strong>4 lớp</strong>: <strong>Physical</strong> (Vật lý) $\\rightarrow$ <strong>Link</strong> (Liên kết) $\\rightarrow$ <strong>Routing</strong> (Định tuyến) $\\rightarrow$ <strong>Protocol</strong> (Giao thức), sử dụng đơn vị truyền vật lý <strong>Phit (20-bit)</strong> và đơn vị khung liên kết <strong>Flit (80-bit)</strong> ($1\\text{ Flit} = 4\\text{ Phit}$), đồng thời kết nối qua <strong>I/O Hub</strong> ra khe <strong>PCIe</strong>.</li>
              <li><strong>PCI Express (PCIe 1.0 – 6.0):</strong> Chuẩn liên kết điểm-điểm nối tiếp băng thông cao thay thế hoàn toàn cho bus dùng chung <strong>PCI</strong> truyền thống để ghép nối các thiết bị ngoại vi tốc độ cao (GPU, card mạng, SSD NVMe). Cấu trúc gồm <strong>Root Complex</strong> (kết nối CPU/RAM), <strong>Switch</strong> (bộ chuyển mạch phân nhánh điểm-điểm), và <strong>Endpoint</strong> (thiết bị đầu cuối); hỗ trợ mở rộng nhiều làn (x1, x4, x8, x16) qua các thế hệ từ <strong>PCIe 1.0 đến PCIe 6.0</strong>.</li>
              <li><strong>SATA (Serial ATA):</strong> Chuẩn kết nối điểm-điểm chuyên dụng chỉ dùng để kết nối với các ổ lưu trữ vật lý (HDD, SSD SATA).</li>
              <li><strong>USB (Universal Serial Bus):</strong> Chuẩn bus ngoại vi nối tiếp đa dụng kết nối giữa mô-đun vào-ra và nhiều loại thiết bị ngoại vi (bàn phím, chuột, ổ nhớ Flash, máy in...).</li>
            </ul>
          </li>
        </ul>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 2.2.3: Bus hệ thống &amp; Tính toán Không gian địa chỉ</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Xác định chức năng/độ rộng/hướng truyền của 3 loại Bus và các tín hiệu điều khiển; phân biệt QPI/PCIe/SATA/USB; tính không gian địa chỉ tối đa ($2^N$), độ rộng bus địa chỉ tối thiểu, hoặc dung lượng RAM có thể lắp thêm.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Tính không gian địa chỉ &amp; Dung lượng tối đa):</strong> Độ rộng bus địa chỉ $N$ bit quản lý tối đa $2^N$ địa chỉ (từ <code>0</code> đến $2^N - 1$). Nếu đánh địa chỉ theo byte: $\\text{Dung lượng} = 2^N\\text{ byte}$ (nhớ $2^{10}=1\\text{ KiB},\\; 2^{20}=1\\text{ MiB},\\; 2^{30}=1\\text{ GiB},\\; 2^{40}=1\\text{ TiB}$). Nếu biết địa chỉ cao nhất dạng Hexa (vd <code>0x3FF</code>), lấy $(\\text{Giá trị Hexa} + 1)$ sẽ ra tổng số ô nhớ $= 2^N \\Rightarrow$ tìm ra $N$.</li>
                <li><strong>Bước 2 (Bài toán trừ phần bộ nhớ/I/O đã dùng):</strong> Tính tổng không gian $2^N$, rồi trừ đi tổng dung lượng RAM đã cắm và vùng cổng vào-ra (nếu dùng chung không gian địa chỉ) để ra dung lượng thanh RAM đơn lẻ còn lắp thêm được; bỏ qua ổ lưu trữ ngoài (HDD/SSD) vì không chiếm không gian địa chỉ bus hệ thống.</li>
                <li><strong>Bước 3 (Kiểm tra tín hiệu Bus điều khiển &amp; chuẩn Bus):</strong> Phân biệt <code>MEMR/MEMW</code> (đọc/ghi RAM), <code>IOR/IOW</code> (đọc/ghi cổng I/O), <code>INTR/INTA</code> (ngắt), <code>BRQ/BGT</code> (xin/nhượng bus DMA); nhớ độ rộng bus điều khiển <strong>không xác định cố định</strong> theo độ rộng bus dữ liệu hay bus địa chỉ.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Khi tính độ rộng bus địa chỉ tối thiểu, chỉ cộng <strong>Bộ nhớ chính (RAM) + Cổng vào-ra dùng chung</strong>, KHÔNG cộng dung lượng ổ SSD/HDD hay Cache! Với lệnh như <code>sw t2, 4(t4)</code>, giá trị địa chỉ hiệu dụng $4 + t_4$ được gửi ra trên <strong>Bus địa chỉ</strong> (không phải Bus dữ liệu!).</li>
          </ul>
        </div>
      `
    },

    // ==================== CHƯƠNG 3 ====================
    {
      id: "3.1.1",
      chapter: 3,
      code: "3.1.1",
      title: "Tổng quan về Kiến trúc tập lệnh và Tập 32 thanh ghi",
      pdfPage: 43,
      printedPage: 42,
      linkedGroups: ["3.1", "3.2.1"],
      summary: "Phân biệt CISC vs RISC, 9 đặc trưng RISC, số địa chỉ toán hạng (3/2/1/0), 3 cách đọc/ghi bộ nhớ và Bảng tra cứu 32 thanh ghi kèm quy ước Caller-saved / Callee-saved.",
      content: `
        <h4>1. Đặc trưng của kiến trúc tập lệnh RISC-V, Toán hạng và Cách đọc/ghi bộ nhớ</h4>
        <ul>
          <li><strong>Phân biệt CISC và RISC:</strong>
            <ul>
              <li><strong>CISC (Complex Instruction Set Computer):</strong> Máy tính với tập lệnh phức tạp (điển hình là Intel x86, Motorola 680x0). Độ dài lệnh thay đổi từ <strong>1 đến 15 byte</strong>, cho phép lệnh tính toán trực tiếp với toán hạng nằm trong bộ nhớ.</li>
              <li><strong>RISC (Reduced Instruction Set Computer):</strong> Máy tính với tập lệnh thu gọn (điển hình là RISC-V, MIPS, ARM). <strong>RISC-V</strong> là kiến trúc RISC thế hệ thứ 5 (phát triển từ 2010 tại UC Berkeley; RISC-V Foundation 2015; RISC-V International Association 2020 tại Thụy Sỹ).</li>
            </ul>
          </li>
          <li><strong>9 đặc trưng cốt lõi của kiến trúc RISC (và RISC-V):</strong>
            <ol>
              <li>Số lượng lệnh ít, khuôn dạng lệnh đơn giản và các lệnh chuẩn có <strong>độ dài cố định 32 bit ($= 4$ byte)</strong> (địa chỉ mọi lệnh máy chuẩn luôn là bội số của 4, chữ số Hexa tận cùng là <code>0, 4, 8, C</code>).</li>
              <li>Độ dài và khuôn dạng lệnh cố định giúp <strong>dễ giải mã trực tiếp bằng phần cứng</strong> (<em>hardwired control</em>).</li>
              <li>Chỉ truy cập bộ nhớ dữ liệu thông qua các lệnh chuyên biệt là <strong>Load</strong> (đọc từ bộ nhớ vào thanh ghi) và <strong>Store</strong> (ghi từ thanh ghi ra bộ nhớ).</li>
              <li>Các lệnh số học và logic chỉ thao tác với các toán hạng nằm trong <strong>thanh ghi</strong> (hoặc hằng số tức thì nằm ngay trong lệnh).</li>
              <li>Tập thanh ghi đa dụng lớn và đồng nhất (32 thanh ghi 32-bit <code>x0–x31</code>).</li>
              <li>Ít phương thức định địa chỉ đơn giản (4 phương thức chuẩn trên RISC-V).</li>
              <li>Ít kiểu dữ liệu cơ bản được hỗ trợ trực tiếp ở mức phần cứng.</li>
              <li>Hầu hết lệnh đơn giản thực hiện trong <strong>1 chu kỳ xung nhịp</strong>, tối ưu cho kỹ thuật <strong>đường ống lệnh (Pipelining)</strong>.</li>
              <li>Thiết kế thân thiện với trình biên dịch (<em>Compiler-friendly</em>), hỗ trợ tối ưu hóa sinh mã.</li>
            </ol>
          </li>
          <li><strong>Số lượng địa chỉ toán hạng trong lệnh (3, 2, 1, 0 địa chỉ):</strong>
            <ul>
              <li><em>Lệnh 3 địa chỉ:</em> Chỉ rõ 2 toán hạng nguồn và 1 toán hạng đích (như RISC-V: <code>add rd, rs1, rs2</code>).</li>
              <li><em>Lệnh 2 địa chỉ:</em> Một toán hạng vừa làm nguồn vừa làm đích (như Intel x86: <code>add eax, ebx</code>).</li>
              <li><em>Lệnh 1 địa chỉ:</em> Sử dụng ngầm thanh ghi tích lũy <em>Accumulator (AC)</em> làm một nguồn và đích.</li>
              <li><em>Lệnh 0 địa chỉ:</em> Kiến trúc máy ngăn xếp (<em>Stack machine</em>), toán hạng lấy/cất ngầm định ở đỉnh ngăn xếp.</li>
            </ul>
          </li>
          <li><strong>Ba cách CPU đọc/ghi dữ liệu trong bộ nhớ chính:</strong>
            <ol>
              <li>Dùng <strong>hằng số địa chỉ trực tiếp</strong> (<em>Direct addressing</em>).</li>
              <li>Dùng <strong>thanh ghi con trỏ</strong> chứa địa chỉ ngăn nhớ (<em>Register indirect</em>).</li>
              <li>Dùng <strong>địa chỉ cơ sở (thanh ghi) + độ lệch (offset)</strong> — đây là cách chuẩn mà các lệnh Load/Store của RISC-V sử dụng: <code>lw rd, offset(rs1)</code>.</li>
            </ol>
          </li>
        </ul>

        <h4>2. Tập 32 thanh ghi đa dụng của RISC-V 32-bit (RV32I)</h4>
        <p>Bộ xử lý RISC-V 32-bit có <strong>32 thanh ghi số nguyên</strong>, mỗi thanh ghi rộng 32 bit, đánh số từ <code>x0</code> đến <code>x31</code>. Vì $32 = 2^5$, mỗi thanh ghi được mã hóa trong lệnh máy bằng đúng <strong>5 bit</strong> (từ <code>00000</code> đến <code>11111</code>).</p>

        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Tên gọi</th>
                <th>Số hiệu</th>
                <th>Chức năng sử dụng trong chương trình</th>
                <th>Quy ước bảo toàn</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>zero</code></td><td><code>x0</code></td><td>Luôn chứa hằng số 0 (thanh ghi chỉ đọc, mọi thao tác ghi vào <code>x0</code> đều bị bỏ qua)</td><td>Không áp dụng</td></tr>
              <tr><td><code>ra</code></td><td><code>x1</code></td><td>Return Address: Chứa địa chỉ trở về khi gọi chương trình con</td><td>Caller-saved</td></tr>
              <tr><td><code>sp</code></td><td><code>x2</code></td><td>Stack Pointer: Con trỏ ngăn xếp (luôn trỏ vào đỉnh ngăn xếp)</td><td><strong>Callee-saved</strong></td></tr>
              <tr><td><code>gp</code></td><td><code>x3</code></td><td>Global Pointer: Con trỏ vùng dữ liệu tĩnh toàn cục</td><td>Không áp dụng</td></tr>
              <tr><td><code>tp</code></td><td><code>x4</code></td><td>Thread Pointer: Con trỏ luồng thực thi</td><td>Không áp dụng</td></tr>
              <tr><td><code>t0 – t2</code></td><td><code>x5 – x7</code></td><td>Temporaries: Các thanh ghi chứa giá trị trung gian tạm thời</td><td>Caller-saved</td></tr>
              <tr><td><code>s0 / fp</code></td><td><code>x8</code></td><td>Saved register / Frame pointer: Lưu biến hoặc làm con trỏ khung</td><td><strong>Callee-saved</strong></td></tr>
              <tr><td><code>s1</code></td><td><code>x9</code></td><td>Saved register: Thanh ghi lưu biến của chương trình</td><td><strong>Callee-saved</strong></td></tr>
              <tr><td><code>a0 – a1</code></td><td><code>x10 – x11</code></td><td>Arguments / Return values: Truyền tham số đầu vào và nhận kết quả trả về của hàm</td><td>Caller-saved</td></tr>
              <tr><td><code>a2 – a7</code></td><td><code>x12 – x17</code></td><td>Arguments: Truyền các tham số đầu vào thứ 3 đến thứ 8 của hàm</td><td>Caller-saved</td></tr>
              <tr><td><code>s2 – s11</code></td><td><code>x18 – x27</code></td><td>Saved registers: Các thanh ghi lưu biến bền vững của chương trình</td><td><strong>Callee-saved</strong></td></tr>
              <tr><td><code>t3 – t6</code></td><td><code>x28 – x31</code></td><td>Temporaries: Các thanh ghi chứa giá trị trung gian tạm thời</td><td>Caller-saved</td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Quy tắc bảo toàn thanh ghi khi gọi chương trình con</div>
          <ul>
            <li><strong>Nhóm tạm thời (<code>t0 – t6</code>, <code>a0 – a7</code>, <code>ra</code>):</strong> Thuộc nhóm <strong>Caller-saved</strong> (hàm gọi tự bảo vệ trên ngăn xếp nếu muốn dùng lại sau lời gọi hàm; hàm được gọi có quyền thay đổi tự do).</li>
            <li><strong>Nhóm lưu trữ (<code>s0 – s11</code>, <code>sp</code>):</strong> Thuộc nhóm <strong>Callee-saved</strong> (hàm được gọi bắt buộc phải cất giá trị cũ vào ngăn xếp trước khi sử dụng và khôi phục lại nguyên trạng trước khi thoát hàm).</li>
          </ul>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 3.2.1: Tập Thanh ghi, Kích thước lệnh, Khuôn dạng &amp; Định địa chỉ</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Hỏi quy ước bảo toàn thanh ghi (<code>t0–t6</code> vs <code>s0–s11</code>, thanh ghi <code>x0/zero</code>), lý do trường thanh ghi rộng 5 bit, tính kích thước mã chương trình (lệnh chuẩn 32-bit vs lệnh nén RVC 16-bit), phân biệt lệnh thực RV32I vs giả lệnh, hoặc phân loại 6 khuôn dạng và 4 phương thức định địa chỉ.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Thanh ghi &amp; kích thước lệnh):</strong> Nhớ $32 = 2^5 \Rightarrow$ mỗi trường <code>rs1, rs2, rd</code> rộng <strong>5 bit</strong>; <code>x0/zero</code> luôn bằng 0 không thể ghi đè; <code>t0–t6, a0–a7, ra</code> là <em>Caller-saved</em>; <code>s0–s11, sp</code> là <em>Callee-saved</em>. Mỗi lệnh RV32I chuẩn = <strong>4 byte</strong> (32 bit); mỗi lệnh nén RVC = <strong>2 byte</strong> (16 bit).</li>
                <li><strong>Bước 2 (Phân loại nhanh 6 khuôn dạng):</strong> Không có <code>imm</code> &rarr; <strong>R-type</strong> (dùng cả <code>funct3</code> và <code>funct7</code>); hằng số 20-bit &rarr; <strong>U-type</strong> (<code>lui, auipc</code>) hoặc <strong>J-type</strong> (<code>jal</code>); không có <code>rd</code> &rarr; <strong>S-type</strong> (Store) hoặc <strong>B-type</strong> (Branch); dịch bit tức thì <code>slli/srli/srai</code> thuộc <strong>I-type</strong> (5 bit <code>shamt</code> ở vị trí <code>[24:20]</code>).</li>
                <li><strong>Bước 3 (Phát hiện giả lệnh &amp; Định địa chỉ):</strong> Các lệnh như <code>li, mv, not, neg, j, jr, ret, nop, bgt, ble, bgez</code> đều là <strong>giả lệnh (Pseudoinstruction)</strong> — hoặc khi <code>addi</code> dùng hằng ngoài $[-2048, +2047]$ cũng phải tách thành 2 lệnh <code>lui + addi</code>. Định địa chỉ: thanh ghi (R), tức thì (hằng trong <code>addi/lui</code>), cơ sở (<code>lw/sw</code>), tương đối PC (<code>beq/bne/jal</code>).</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> <code>jalr</code> thuộc <strong>I-type</strong> (12-bit imm), không phải J-type! Khi đếm tổng byte mã máy của một đoạn hợp ngữ, kiểm tra kỹ xem hằng số trong <code>addi</code> có vượt $[-2048, +2047]$ hay có giả lệnh nào bị tách thành 2 lệnh thật (8 byte) không!</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="3.2.1">
          <span>📝 <strong>Nhóm 3.2.1: Tập Thanh ghi, Khuôn dạng Lệnh &amp; Phương thức định địa chỉ (<span class="group-q-count">24 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.1', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.1', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "3.1.2",
      chapter: 3,
      code: "3.1.2",
      title: "Tổ chức dữ liệu trong bộ nhớ và Quy tắc Đầu nhỏ (Little-Endian)",
      pdfPage: 45,
      printedPage: 44,
      linkedGroups: ["3.1", "3.2.4"],
      summary: "Các đơn vị dữ liệu Byte / Halfword / Word, quy tắc căn chỉnh biên địa chỉ (Alignment), Little-Endian vs. Big-Endian và Bảng mã ASCII / lưu trữ xâu ký tự.",
      content: `
        <h4>1. Các đơn vị dữ liệu và Quy tắc căn chỉnh biên địa chỉ (Alignment)</h4>
        <ul>
          <li><strong>Byte (8 bit):</strong> Chiếm 1 ngăn nhớ. Địa chỉ có thể là số chẵn hoặc số lẻ bất kỳ.</li>
          <li><strong>Halfword – Nửa từ (16 bit = 2 byte):</strong> Chiếm 2 ngăn nhớ liên tiếp. Địa chỉ hiệu dụng bắt buộc phải là <strong>số chẵn</strong> (chia hết cho 2, chữ số Hexa cuối là <code>0, 2, 4, 6, 8, A, C, E</code>).</li>
          <li><strong>Word – Từ nhớ (32 bit = 4 byte):</strong> Chiếm 4 ngăn nhớ liên tiếp. Địa chỉ của một Word là địa chỉ của byte đầu tiên (byte có địa chỉ nhỏ nhất) thuộc Word đó và bắt buộc phải <strong>chia hết cho 4</strong> (chữ số Hexa cuối cùng chỉ có thể là <code>0, 4, 8</code> hoặc <code>C</code>).</li>
        </ul>

        <h4>2. Thứ tự lưu trữ các byte trong bộ nhớ: Đầu nhỏ (Little-Endian) vs. Đầu to (Big-Endian)</h4>
        <ul>
          <li><strong>Đầu nhỏ (Little-Endian):</strong> Byte có ý nghĩa thấp nhất (<strong>LSB</strong> – 2 chữ số Hexa ngoài cùng bên phải) được lưu ở ngăn nhớ có <strong>địa chỉ nhỏ nhất</strong>; byte có ý nghĩa cao nhất (<strong>MSB</strong> – 2 chữ số Hexa ngoài cùng bên trái) được lưu ở ngăn nhớ có <strong>địa chỉ lớn nhất</strong>.
            <br/><em>Các kiến trúc sử dụng:</em> <strong>RISC-V</strong> và <strong>Intel x86</strong> sử dụng Little-Endian.
          </li>
          <li><strong>Đầu to (Big-Endian):</strong> Byte có ý nghĩa cao nhất (MSB) được lưu ở ngăn nhớ có địa chỉ nhỏ nhất; byte có ý nghĩa thấp nhất (LSB) được lưu ở ngăn nhớ có địa chỉ lớn nhất.
            <br/><em>Các kiến trúc sử dụng:</em> Motorola 680x0, SunSPARC dùng Big-Endian. Riêng kiến trúc <strong>ARM</strong> hỗ trợ cả Little-Endian hoặc Big-Endian tùy phiên bản cấu hình.
          </li>
        </ul>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 190" width="660" height="184" role="img" aria-label="Sơ đồ minh họa Word 32-bit 0x1A2B3C4D theo Little-Endian và Big-Endian tại địa chỉ 0x10010008">
            <text x="340" y="22" text-anchor="middle" class="svg-title">Word 32-bit = 0x1A2B3C4D lưu tại địa chỉ 0x10010008</text>

            <text x="175" y="48" text-anchor="middle" class="svg-title-blue">Thứ tự Đầu nhỏ (Little-Endian – RISC-V)</text>
            <rect x="75" y="60" width="110" height="28" class="svg-box-accent" />
            <text x="130" y="79" text-anchor="middle" class="svg-mono">0x4D (LSB)</text>
            <text x="230" y="79" text-anchor="middle" class="svg-mono-muted">0x10010008</text>
            <rect x="75" y="88" width="110" height="28" class="svg-box" />
            <text x="130" y="107" text-anchor="middle" class="svg-mono">0x3C</text>
            <text x="230" y="107" text-anchor="middle" class="svg-mono-muted">0x10010009</text>
            <rect x="75" y="116" width="110" height="28" class="svg-box" />
            <text x="130" y="135" text-anchor="middle" class="svg-mono">0x2B</text>
            <text x="230" y="135" text-anchor="middle" class="svg-mono-muted">0x1001000A</text>
            <rect x="75" y="144" width="110" height="28" class="svg-box" />
            <text x="130" y="163" text-anchor="middle" class="svg-mono">0x1A (MSB)</text>
            <text x="230" y="163" text-anchor="middle" class="svg-mono-muted">0x1001000B</text>

            <text x="505" y="48" text-anchor="middle" class="svg-title">Thứ tự Đầu to (Big-Endian)</text>
            <rect x="405" y="60" width="110" height="28" class="svg-box" />
            <text x="460" y="79" text-anchor="middle" class="svg-mono">0x1A (MSB)</text>
            <text x="560" y="79" text-anchor="middle" class="svg-mono-muted">0x10010008</text>
            <rect x="405" y="88" width="110" height="28" class="svg-box" />
            <text x="460" y="107" text-anchor="middle" class="svg-mono">0x2B</text>
            <text x="560" y="107" text-anchor="middle" class="svg-mono-muted">0x10010009</text>
            <rect x="405" y="116" width="110" height="28" class="svg-box" />
            <text x="460" y="135" text-anchor="middle" class="svg-mono">0x3C</text>
            <text x="560" y="135" text-anchor="middle" class="svg-mono-muted">0x1001000A</text>
            <rect x="405" y="144" width="110" height="28" class="svg-box" />
            <text x="460" y="163" text-anchor="middle" class="svg-mono">0x4D (LSB)</text>
            <text x="560" y="163" text-anchor="middle" class="svg-mono-muted">0x1001000B</text>
          </svg>
          <figcaption>Hình 3.1 – Cách lưu trữ Word <code>0x1A2B3C4D</code> trong bộ nhớ theo Little-Endian vs. Big-Endian (KTMT_GK.pdf trang 45)</figcaption>
        </figure>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Mẹo đọc ngược bảng bản đồ bộ nhớ Little-Endian</div>
          <p>Khi nhìn bảng bản đồ bộ nhớ theo hàng ngang (từ địa chỉ thấp sang địa chỉ cao <code>+0, +1, +2, +3</code>), chỉ cần ghép <strong>ngược từ phải sang trái</strong> sẽ ra ngay giá trị Word/Halfword 32-bit hoặc 16-bit chuẩn trong thanh ghi!</p>
        </div>

        <h4>3. Lưu trữ Xâu ký tự và Bộ mã ASCII (theo Little-Endian)</h4>
        <ul>
          <li><strong>Bộ mã ASCII chuẩn (7-bit đóng gói trong 1 byte <code>0x00–0x7F</code>):</strong>
            <ul>
              <li><strong>Nhóm ký tự điều khiển (<code>0x00–0x1F</code> và <code>0x7F</code>):</strong> Thường gặp: <code>NUL = 0x00</code> (<code>\\0</code> kết thúc chuỗi), <code>BS = 0x08</code> (Backspace), <code>LF = 0x0A</code> (<code>\\n</code>, xuống dòng), <code>FF = 0x0C</code> (Form Feed), <code>CR = 0x0D</code> (<code>\\r</code>, về đầu dòng), <code>DEL = 0x7F</code>.</li>
              <li><strong>Nhóm ký tự hiển thị (<code>0x20–0x7E</code>):</strong> Dấu cách <code>' ' = 0x20</code> (32); chữ số <code>'0'–'9' = 0x30–0x39</code> (48–57); chữ in hoa <code>'A'–'Z' = 0x41–0x5A</code> (65–90); chữ thường <code>'a'–'z' = 0x61–0x7A</code> (97–122).</li>
              <li><strong>Mẹo đổi chữ hoa $\\leftrightarrow$ chữ thường:</strong> Mã chữ thường và chữ hoa tương ứng luôn lệch nhau đúng <strong>$32 = \\text{0x20}$</strong> (chỉ khác nhau bit số 5), nên đổi thường &rarr; hoa dùng phép <code>ch &amp; 0xDF</code> (hoặc trừ <code>32</code>), còn hoa &rarr; thường dùng <code>ch | 0x20</code> (hoặc cộng <code>32</code>).</li>
            </ul>
          </li>
          <li><strong>Quy tắc xếp xâu ký tự theo word Little-Endian:</strong> Trong bộ nhớ, các ký tự của chuỗi được lưu tuần tự từng byte từ địa chỉ thấp đến địa chỉ cao (ký tự đầu tiên ở <code>+0</code>). Khi gom mỗi 4 ký tự thành 1 word 32-bit hiển thị theo Little-Endian, byte ở địa chỉ thấp (<code>+0</code>) nằm ở <strong>ngoài cùng bên phải</strong> của word Hexa!
            <br/><em>Ví dụ:</em> Chuỗi <code>"Hello World!\\r\\nVIETNAM"</code> lưu tuần tự từ offset <code>0</code>:
            <ul>
              <li>Word 0 (<code>+0..+3</code>): <code>'H'(0x48), 'e'(0x65), 'l'(0x6C), 'l'(0x6C)</code> &rarr; Word Hexa: <code>0x6C6C6548</code> (đọc theo thứ tự byte cao $\\to$ thấp là <code>"lleH"</code>).</li>
              <li>Word 1 (<code>+4..+7</code>): <code>'o'(0x6F), ' '(0x20), 'W'(0x57), 'o'(0x6F)</code> &rarr; Word Hexa: <code>0x6F57206F</code>.</li>
              <li>Word 2 (<code>+8..+11</code>): <code>'r'(0x72), 'l'(0x6C), 'd'(0x64), '!'(0x21)</code> &rarr; Word Hexa: <code>0x21646C72</code>.</li>
              <li>Word 3 (<code>+12..+15</code>): <code>'\\r'(0x0D), '\\n'(0x0A), 'V'(0x56), 'I'(0x49)</code> &rarr; Word Hexa: <code>0x49560A0D</code>.</li>
              <li>Word 4 (<code>+16..+19</code>): <code>'E'(0x45), 'T'(0x54), 'N'(0x4E), 'A'(0x41)</code> &rarr; Word Hexa: <code>0x414E5445</code>; tiếp theo <code>'M'(0x4D)</code> và <code>'\\0'(0x00)</code>.</li>
            </ul>
          </li>
        </ul>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 3.2.4: Alignment, Little-Endian &amp; Load/Store Bộ nhớ</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Kiểm tra địa chỉ hợp lệ (căn chỉnh biên Word/Halfword/Lệnh 32-bit), đếm số lần truy cập Data Memory, nạp/ghi từ <code>lw, sw, lh, lhu, sh, lb, lbu, sb</code> trên bảng bản đồ bộ nhớ Little-Endian, hoặc xác định thứ tự byte của số 32-bit / chuỗi ASCII.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Tính địa chỉ hiệu dụng &amp; Căn chỉnh biên):</strong> Tính $\\text{EA} = rs1 + \\text{offset}$. Lệnh <code>lw/sw</code> và địa chỉ lệnh máy 32-bit bắt buộc chia hết cho 4 (ký tự Hexa cuối $\\in \\{0, 4, 8, \\text{C}\\}$); <code>lh/lhu/sh</code> bắt buộc chia hết cho 2 (đuôi chẵn); <code>lb/lbu/sb</code> nhận mọi địa chỉ chẵn lẻ.</li>
                <li><strong>Bước 2 (Đếm truy cập Data Memory):</strong> Chỉ tính các lệnh <strong>Load/Store</strong> (<code>lw, lh, lb, sw, sh, sb</code>); tuyệt đối không đếm <code>add, addi, lui, slli</code>!</li>
                <li><strong>Bước 3 (Đọc/Ghi theo Little-Endian &amp; Mở rộng dấu):</strong> Byte thấp nhất (2 chữ số Hexa cuối) luôn đặt ở địa chỉ nhỏ nhất (<code>+0</code>), byte cao nhất ở <code>+3</code>. Nếu bảng cho sẵn Word 32-bit ở địa chỉ gốc <code>Base</code>, tách ngược từ phải sang trái để gán vào <code>Base+0, +1, +2, +3</code>. Với <code>lb/lh</code>: kiểm tra chữ số Hexa đầu của byte/halfword vừa đọc — nếu từ <code>8–F</code> thì điền <code>FFFFFF...</code> / <code>FFFF...</code> lên phần cao; còn <code>lbu/lhu</code> luôn điền <code>0</code>!</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Khi ghi <code>sb/sh</code> chỉ thay đổi đúng 1 byte hoặc 2 byte tại vị trí tương ứng trong Word mà <strong>giữ nguyên các byte còn lại</strong>; nhớ phân biệt <code>lb</code> (có dấu) và <code>lbu</code> (không dấu) khi byte đọc được $\\ge \\text{0x80}$!</li>
          </ul>
        </div>
      `
    },
    {
      id: "3.1.3",
      chapter: 3,
      code: "3.1.3",
      title: "Các nhóm lệnh hợp ngữ RISC-V cốt lõi",
      pdfPage: 45,
      printedPage: 44,
      linkedGroups: ["3.2.2", "3.2.3", "3.2.4", "3.2.5", "3.2.6", "3.2.7"],
      summary: "Số học & nạp hằng 32-bit lui+addi, Load/Store, Logic/Dịch bit, So sánh/Rẽ nhánh, dịch cấu trúc if/else/switch/while/do...while/for, Stack LIFO, 6 bước gọi hàm và Thủ tục lá vs Thủ tục cành (đệ quy).",
      content: `
        <h4>1. Nhóm lệnh số học và Nạp hằng số vào thanh ghi</h4>
        <ul>
          <li><code>add rd, rs1, rs2</code>: Cộng hai thanh ghi ($rd = rs1 + rs2$).</li>
          <li><code>sub rd, rs1, rs2</code>: Trừ hai thanh ghi ($rd = rs1 - rs2$).</li>
          <li><code>addi rd, rs1, imm</code>: Cộng thanh ghi với hằng số 12-bit có dấu ($rd = rs1 + \\text{SignExt}(imm)$).
            <ul>
              <li><strong>Giới hạn của hằng số <code>imm</code>:</strong> Vì <code>imm</code> là số nguyên có dấu 12 bit, giá trị hợp lệ bắt buộc phải nằm trong đoạn <strong>$[-2048, +2047]$</strong> (viết ở hệ Hexa 12-bit là từ <code>0x800</code> đến <code>0x7FF</code>, hoặc mở rộng dấu 32-bit là từ <code>0xFFFFF800</code> đến <code>0x000007FF</code>). Nếu truyền số $\\ge 2048$ (như <code>0x800</code> theo nghĩa dương) vào lệnh <code>addi</code>, trình dịch sẽ báo lỗi.</li>
              <li>RISC-V <strong>không có lệnh <code>subi</code></strong>; để trừ một hằng số, ta dùng lệnh <code>addi</code> với hằng số âm.</li>
            </ul>
          </li>
          <li><code>lui rd, upimm</code> (Load Upper Immediate): Đưa hằng số 20-bit (<code>upimm</code>) vào 20 bit cao của thanh ghi đích <code>rd</code> (từ bit 31 đến bit 12) và xóa 12 bit thấp (bit 11 đến bit 0) về 0.</li>
        </ul>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Quy tắc nạp hằng số 32-bit bất kỳ vào thanh ghi (Bản chất của lệnh giả <code>li</code>)</div>
          <p>Để nạp hằng số 32-bit dạng <code>0xABCDE123</code> vào thanh ghi <code>rd</code> mà không dùng lệnh giả <code>li</code>, ta tách thành 20 bit cao (5 chữ số Hexa đầu <code>0xABCDE</code>) và 12 bit thấp (3 chữ số Hexa cuối <code>0x123</code>), rồi kết hợp <code>lui</code> với <code>addi</code>:</p>
          <ol>
            <li><strong>Trường hợp 1 (Chữ số Hexa thứ 3 từ phải sang nhỏ hơn 8 – từ <code>0</code> đến <code>7</code>):</strong> Bit số 11 bằng 0 nên phần 12-bit thấp là số dương. Giữ nguyên 5 chữ số Hexa đầu cho lệnh <code>lui</code>:
              <br/><em>Ví dụ nạp <code>0x20241120</code>:</em> <code>lui t0, 0x20241</code> $\\rightarrow$ <code>addi t0, t0, 0x120</code>.
            </li>
            <li><strong>Trường hợp 2 (Chữ số Hexa thứ 3 từ phải sang từ <code>8</code> đến <code>F</code>):</strong> Bit số 11 bằng 1 nên lệnh <code>addi</code> sẽ mở rộng dấu và hiểu 12-bit thấp là một số âm (bị trừ lùi đi $2^{12} = \\text{0x1000}$). Để bù lại, ta bắt buộc phải <strong>cộng thêm 1 vào 5 chữ số Hexa đầu</strong> trong lệnh <code>lui</code>:
              <br/><em>Ví dụ nạp <code>0x12345EDC</code> (chữ thứ 3 từ phải sang là <code>E</code> $\\ge 8$, với $\\text{0xEDC} = -292$):</em> Dùng <code>lui s1, 0x12346</code> (tăng <code>12345</code> lên <code>12346</code>), sau đó <code>addi s1, s1, -292</code>.
            </li>
          </ol>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 3.2.2: Số học, Logic, Dịch bit &amp; Nạp hằng 32-bit (lui + addi)</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Kiểm tra tính hợp lệ của hằng số 12-bit trong <code>addi</code>, viết cặp lệnh <code>lui + addi</code> nạp hằng 32-bit (thay <code>li</code>), thực hiện từng bit <code>and/andi/or/ori/xor/xori</code>, dịch bit <code>slli/srli/srai</code>, hoặc xóa/đảo bit thanh ghi.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Kiểm tra giới hạn 12-bit &amp; Quy tắc <code>lui + addi</code>):</strong> <code>addi</code> chỉ nhận hằng số $[-2048, +2047]$. Để nạp hằng 32-bit <code>0xABCDE123</code>: nhìn chữ số Hexa thứ 3 từ phải sang (bit 11): nếu từ <code>0–7</code> giữ nguyên <code>0xABCDE</code> cho <code>lui</code>; nếu từ <code>8–F</code> phải <strong>tăng <code>0xABCDE</code> thêm 1</strong> và đổi 3 chữ cuối thành số âm bù 2 (vd <code>0xEDC = -292</code>).</li>
                <li><strong>Bước 2 (Bitwise &amp; Dịch bit):</strong> Đổi hai toán hạng sang Hexa 8 chữ số (hoặc nhị phân 4 bit mỗi chữ số). Nhớ: trong <code>andi/ori/xori</code>, hằng 12-bit được <strong>mở rộng dấu lên 32-bit</strong> (vd <code>andi ..., 0xFF</code> là <code>0x000000FF</code>, nhưng <code>xori ..., -1</code> là <code>0xFFFFFFFF</code> giúp đảo toàn bộ 32 bit!). Với dịch bit: <code>slli k</code> đẩy sang trái $k$ bit (chèn 0 bên phải); <code>srli k</code> chèn 0 bên trái; <code>srai k</code> chèn <strong>bit dấu 31</strong> (<code>0</code> nếu chữ đầu <code>0–7</code>, <code>1</code> tức chữ <code>F</code> nếu chữ đầu <code>8–F</code>) bên trái!</li>
                <li><strong>Bước 3 (Mẹo dịch bội 4 bit):</strong> Dịch 4 bit = dịch 1 chữ Hexa; dịch 8 bit = 2 chữ Hexa; dịch 20 bit = 5 chữ Hexa; dịch 24 bit = 6 chữ Hexa.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Đừng dùng <code>lui + ori</code> thay cho <code>lui + addi</code> trong các bài kiểm tra quy tắc bù bit 11 của <code>li</code> (trình hợp dịch chuẩn RISC-V luôn dùng <code>lui + addi</code> nên phải cộng +1 khi bit 11 = 1); phân biệt kỹ <code>srli</code> (chèn 0) và <code>srai</code> (giữ bit dấu) khi giá trị thanh ghi bắt đầu bằng <code>8–F</code>!</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="3.2.2">
          <span>📝 <strong>Nhóm 3.2.2: Số học, Logic, Dịch bit &amp; lui+addi (<span class="group-q-count">42 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.2', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.2', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <h4>2. Nhóm lệnh Đọc và Ghi bộ nhớ (Load / Store)</h4>
        <ul>
          <li><strong>Thao tác với Word (32 bit = 4 byte):</strong>
            <ul>
              <li><code>lw rd, imm(rs1)</code>: Đọc 1 word (4 byte) tại địa chỉ $rs1 + \\text{SignExt}(imm)$ nạp vào thanh ghi <code>rd</code>.</li>
              <li><code>sw rs2, imm(rs1)</code>: Ghi 1 word (4 byte) từ thanh ghi nguồn <code>rs2</code> ra bộ nhớ tại địa chỉ $rs1 + \\text{SignExt}(imm)$.</li>
            </ul>
          </li>
          <li><strong>Thao tác với Halfword (16 bit = 2 byte):</strong>
            <ul>
              <li><code>lh rd, imm(rs1)</code>: Đọc 2 byte từ bộ nhớ vào 16 bit thấp của <code>rd</code>, <strong>mở rộng có dấu</strong> (Sign-extend: lấy bit số 15 điền vào toàn bộ 16 bit cao của <code>rd</code>).</li>
              <li><code>lhu rd, imm(rs1)</code>: Đọc 2 byte từ bộ nhớ vào 16 bit thấp của <code>rd</code>, <strong>mở rộng không dấu</strong> (Zero-extend: luôn điền <code>0x0000</code> vào 16 bit cao của <code>rd</code>).</li>
              <li><code>sh rs2, imm(rs1)</code>: Ghi 2 byte bên phải (16 bit thấp) của thanh ghi <code>rs2</code> ra bộ nhớ.</li>
            </ul>
          </li>
          <li><strong>Thao tác với Byte (8 bit = 1 byte):</strong>
            <ul>
              <li><code>lb rd, imm(rs1)</code>: Đọc 1 byte từ bộ nhớ vào 8 bit thấp của <code>rd</code>, <strong>mở rộng có dấu</strong> (Sign-extend: nếu byte đọc lên có chữ số Hexa đầu từ <code>8</code> đến <code>F</code> thì 24 bit cao của <code>rd</code> điền toàn <code>0xFFFFFF</code>; nếu từ <code>0</code> đến <code>7</code> thì điền <code>0x000000</code>).</li>
              <li><code>lbu rd, imm(rs1)</code>: Đọc 1 byte từ bộ nhớ vào 8 bit thấp của <code>rd</code>, <strong>mở rộng không dấu</strong> (Zero-extend: luôn điền <code>0x000000</code> vào 24 bit cao của <code>rd</code>).</li>
              <li><code>sb rs2, imm(rs1)</code>: Chỉ ghi 1 byte bên phải (8 bit thấp) của thanh ghi <code>rs2</code> ra bộ nhớ.</li>
            </ul>
          </li>
        </ul>

        <div class="formula-practice-inline" data-group-link="3.2.4">
          <span>📝 <strong>Nhóm 3.2.4: Load/Store &amp; Bộ nhớ Little-Endian (<span class="group-q-count">34 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.4', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.4', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <h4>3. Nhóm lệnh Logic và Dịch bit</h4>
        <ul>
          <li><strong>Các phép toán logic từng bit (Bitwise):</strong>
            <ul>
              <li><code>and rd, rs1, rs2</code> và <code>andi rd, rs1, imm</code>: Phép AND (1 AND 1 = 1, còn lại bằng 0). Dùng để xóa một số bit về 0 và trích xuất các bit cần giữ.</li>
              <li><code>or rd, rs1, rs2</code> và <code>ori rd, rs1, imm</code>: Phép OR (0 OR 0 = 0, còn lại bằng 1). Dùng để thiết lập một số bit lên 1.</li>
              <li><code>xor rd, rs1, rs2</code> và <code>xori rd, rs1, imm</code>: Phép XOR (hai bit khác nhau thì bằng 1, giống nhau thì bằng 0). Dùng để đảo giá trị các bit (thay thế cho lệnh <code>not rd, rs1</code> bằng <code>xori rd, rs1, -1</code>) hoặc xóa thanh ghi về 0 (<code>xor s0, s0, s0</code>).</li>
              <li><em>Lưu ý đặc biệt của RISC-V:</em> Hằng số 12-bit <code>imm</code> trong các lệnh <code>andi, ori, xori</code> của RISC-V luôn được <strong>mở rộng có dấu (Sign-extended) thành 32-bit</strong> trước khi thực hiện phép toán.</li>
            </ul>
          </li>
          <li><strong>Các phép dịch bit (Shift):</strong> Với <code>uimm</code> là hằng số không dấu 5 bit (từ 0 đến 31), hoặc dịch theo 5 bit thấp của thanh ghi <code>rs2</code>:
            <ul>
              <li><strong>Dịch trái logic (<code>sll, slli</code>):</strong> Đẩy các bit sang trái $k$ vị trí, chèn $k$ bit 0 vào bên phải. Tương đương nhân với $2^k$.</li>
              <li><strong>Dịch phải logic (<code>srl, srli</code>):</strong> Đẩy các bit sang phải $k$ vị trí, luôn chèn $k$ bit 0 vào bên trái. Tương đương chia số không dấu cho $2^k$ lấy phần nguyên.</li>
              <li><strong>Dịch phải số học (<code>sra, srai</code>):</strong> Đẩy các bit sang phải $k$ vị trí, nhưng <strong>giữ nguyên bit dấu</strong> (nếu bit 31 đang là 1 thì chèn toàn bit 1 vào bên trái; nếu bit 31 là 0 thì chèn bit 0). Tương đương chia số có dấu cho $2^k$ lấy phần nguyên.</li>
              <li><em>Quy đổi nhanh khi dịch theo bội số của 4 bit:</em> Vì 1 chữ số Hexa = 4 bit, nên dịch trái/phải 4 bit là dịch 1 chữ số Hexa; dịch 8 bit là dịch 2 chữ số Hexa; dịch 20 bit là dịch 5 chữ số Hexa; dịch 24 bit là dịch 6 chữ số Hexa.</li>
            </ul>
          </li>
        </ul>

        <h4>4. Nhóm lệnh So sánh, Rẽ nhánh, Nhảy và Quản lý Ngăn xếp (Stack)</h4>
        <ul>
          <li><strong>Lệnh thiết lập nếu nhỏ hơn (Set Less Than):</strong>
            <ul>
              <li><code>slt rd, rs1, rs2</code> và <code>slti rd, rs1, imm</code>: So sánh hai số nguyên <strong>có dấu</strong>. Nếu $rs1 &lt; rs2$ (hoặc $\\text{SignExt}(imm)$) thì $rd = 1$, ngược lại $rd = 0$.</li>
              <li><code>sltu rd, rs1, rs2</code> và <code>sltiu rd, rs1, imm</code>: So sánh hai số nguyên <strong>không dấu</strong>.</li>
            </ul>
          </li>
          <li><strong>Các lệnh rẽ nhánh có điều kiện (Branch):</strong>
            <ul>
              <li><code>beq rs1, rs2, L1</code> (rẽ nhánh nếu $rs1 == rs2$); <code>bne rs1, rs2, L1</code> (rẽ nhánh nếu $rs1 \\neq rs2$).</li>
              <li><code>blt rs1, rs2, L1</code> (nếu $rs1 &lt; rs2$ có dấu); <code>bge rs1, rs2, L1</code> (nếu $rs1 \\ge rs2$ có dấu).</li>
              <li><code>bltu rs1, rs2, L1</code> (nếu $rs1 &lt; rs2$ không dấu); <code>bgeu rs1, rs2, L1</code> (nếu $rs1 \\ge rs2$ không dấu).</li>
              <li><em>Lưu ý khi dịch câu lệnh <code>if / while</code> từ C sang hợp ngữ:</em> Điều kiện kiểm tra trong lệnh rẽ nhánh nhảy tới nhãn thoát (<code>done</code> hoặc <code>else</code>) thường là <strong>điều kiện ngược</strong> với điều kiện viết trong câu lệnh C (ví dụ: trong C viết <code>if (i == j)</code> thì hợp ngữ dùng <code>bne</code> để nhảy qua khối lệnh nếu $i \\neq j$).</li>
            </ul>
          </li>

          <div class="callout callout-method">
            <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 3.2.3: Lệnh So sánh (slt/slti/sltu) &amp; Rẽ nhánh có điều kiện</div>
            <ul>
              <li><strong>Dạng nhận biết:</strong> Tính giá trị <code>0</code> hay <code>1</code> sau <code>slt, slti, sltu, sltiu</code> (đặc biệt khi thanh ghi là số Hexa có bit đầu bằng 1 như <code>0xFFFFFFF0</code> hoặc <code>0xAD100002</code>), hoặc dò luồng thực thi qua <code>beq, bne, blt, bge, bltu, bgeu</code>.</li>
              <li><strong>Các bước làm bài:</strong>
                <ol>
                  <li><strong>Bước 1 (Phân biệt Có dấu vs Không dấu):</strong>
                    <ul>
                      <li><strong>Có dấu (<code>slt, slti, blt, bge</code>):</strong> Chữ số Hexa đầu từ <code>8–F</code> là <strong>số âm</strong> (luôn nhỏ hơn mọi số dương/0 có chữ đầu <code>0–7</code>).</li>
                      <li><strong>Không dấu (<code>sltu, sltiu, bltu, bgeu</code>):</strong> Coi mọi giá trị 32-bit là số dương trong $[0, 2^{32}-1]$, nên số đầu <code>8–F</code> (vd <code>0xFFFFFFF0</code> $\\approx 4.29 \\times 10^9$) <strong>lớn hơn rất nhiều</strong> so với số dương nhỏ (vd <code>0x00000005</code>).</li>
                    </ul>
                  </li>
                  <li><strong>Bước 2 (Kiểm tra hằng số mở rộng dấu trong <code>slti / sltiu</code>):</strong> Hằng số 12-bit <code>imm</code> luôn được mở rộng dấu lên 32-bit trước khi so sánh (kể cả với <code>sltiu</code>: hằng số âm như <code>-1</code> mở rộng thành <code>0xFFFFFFFF</code> rồi mới so sánh không dấu!).</li>
                  <li><strong>Bước 3 (Theo dấu đường nhảy):</strong> Nếu điều kiện nhánh đúng &rarr; nhảy tới nhãn (bỏ qua khối lệnh phía dưới); nếu sai &rarr; thực hiện tuần tự câu lệnh ngay kế tiếp.</li>
                </ol>
              </li>
              <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Đừng đánh đồng <code>0xAD100002</code> là số lớn hơn số dương khi dùng <code>slt / slti / blt</code> (nó là số âm!). Chú ý lệnh <code>beq, bne, blt, bge, slt</code> đều yêu cầu <strong>ALU thực hiện phép trừ</strong> để so sánh!</li>
            </ul>
          </div>

          <div class="formula-practice-inline" data-group-link="3.2.3">
            <span>📝 <strong>Nhóm 3.2.3: Lệnh So sánh (slt/slti/sltu) &amp; Rẽ nhánh (<span class="group-q-count">15 câu</span>)</strong></span>
            <div class="inline-actions">
              <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.3', 'exam')">⏱️ Test</button>
              <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.3', 'practice')">🎯 Luyện tập</button>
            </div>
          </div>
          <li><strong>Các lệnh gọi và trở về từ chương trình con (Thủ tục):</strong>
            <ul>
              <li><code>jal rd, Label</code> (Jump and Link): Thực hiện đồng thời 2 việc: (1) Lưu địa chỉ của lệnh kế tiếp vào thanh ghi đích $rd = PC + 4$, và (2) Nhảy tới nhãn đích $PC = PC + imm$.
                <br/>– Khi gọi chương trình con: Dùng <code>jal ra, ProcLabel</code> (lưu địa chỉ trở về vào <code>ra</code>).
                <br/>– Khi nhảy không điều kiện (tương đương lệnh giả <code>j Label</code>): Dùng <code>jal x0, Label</code> (hủy địa chỉ trở về vào <code>x0</code>).
              </li>
              <li><code>jalr rd, rs1, imm</code> (Jump and Link Register): Lưu $rd = PC + 4$ và nhảy tới địa chỉ $PC = rs1 + \\text{SignExt}(imm)$.
                <br/>– Khi trở về từ chương trình con (tương đương lệnh giả <code>ret</code> hoặc <code>jr ra</code>): Dùng <code>jalr x0, ra, 0</code> (hoặc viết dạng <code>jalr x0, 0(ra)</code>).
              </li>
            </ul>
          </li>
          <li><strong>Thao tác với Ngăn xếp (Stack):</strong>
            <br/>Ngăn xếp là vùng nhớ hoạt động theo cơ chế <strong>LIFO (Last In – First Out: Vào sau – Ra trước)</strong> nằm trong bộ nhớ chính (RAM). Thanh ghi <code>sp</code> (<code>x2</code>) luôn chứa địa chỉ của đỉnh ngăn xếp. Trong RISC-V, ngăn xếp <strong>phát triển theo chiều giảm địa chỉ bộ nhớ</strong>:
            <ol>
              <li><strong>Khi cất (Push) $k$ thanh ghi</strong> (mỗi thanh ghi 4 byte) vào ngăn xếp: Phải giảm <code>sp</code> trước bằng lệnh <code>addi sp, sp, -4*k</code>, sau đó dùng lệnh <code>sw</code> lưu các thanh ghi vào <code>0(sp)</code>, <code>4(sp)</code>,...</li>
              <li><strong>Khi lấy (Pop / Khôi phục) $k$ thanh ghi</strong> ra khỏi ngăn xếp: Phải dùng lệnh <code>lw</code> đọc các thanh ghi từ <code>0(sp)</code>, <code>4(sp)</code>,... ra đúng vị trí cũ trước, sau đó mới tăng <code>sp</code> trả lại bằng lệnh <code>addi sp, sp, 4*k</code>.</li>
            </ol>
          </li>
        </ul>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 170" width="660" height="165" role="img" aria-label="Sơ đồ ngăn xếp Stack phát triển theo chiều giảm địa chỉ trong RISC-V">
            <rect x="65" y="18" width="175" height="32" class="svg-box" />
            <text x="152" y="39" text-anchor="middle" class="svg-sub">Ngăn nhớ cao (đã cấp trước)</text>
            <text x="275" y="39" text-anchor="start" class="svg-mono-muted">← sp cũ (ban đầu)</text>

            <rect x="65" y="50" width="175" height="34" class="svg-box-accent" />
            <text x="152" y="72" text-anchor="middle" class="svg-mono">sw s0, 4(sp)</text>
            <text x="275" y="72" text-anchor="start" class="svg-mono-muted">sp_mới + 4</text>

            <rect x="65" y="84" width="175" height="34" class="svg-box-primary" />
            <text x="152" y="106" text-anchor="middle" class="svg-title-primary">sw ra, 0(sp)</text>
            <text x="275" y="106" text-anchor="start" class="svg-title-blue">← sp mới (sau addi sp, sp, -8)</text>

            <rect x="65" y="118" width="175" height="30" class="svg-box" />
            <text x="152" y="138" text-anchor="middle" class="svg-sub">Địa chỉ bộ nhớ thấp hơn ↓</text>

            <path d="M 38 34 L 38 124" class="svg-line" />
            <text x="26" y="80" text-anchor="middle" transform="rotate(-90 26 80)" class="svg-sub">Giảm địa chỉ</text>
          </svg>
          <figcaption>Hình 3.2 – Ngăn xếp Stack (LIFO) phát triển về phía địa chỉ thấp khi Push 2 thanh ghi (<code>ra, s0</code>)</figcaption>
        </figure>

        <h4>5. Quy tắc dịch các cấu trúc điều khiển (<code>if</code>, <code>if/else</code>, <code>switch/case</code>, <code>while</code>, <code>do...while</code>, <code>for</code>)</h4>
        <ul>
          <li><strong>Cấu trúc <code>if</code>:</strong> Dùng lệnh rẽ nhánh mang <strong>điều kiện đảo (phủ định)</strong> để nhảy vượt qua khối thân <code>if</code> đến nhãn <code>Exit</code> nếu điều kiện sai.</li>
          <li><strong>Cấu trúc <code>if / else</code>:</strong> Dùng điều kiện đảo ở đầu để nhảy tới nhãn <code>Else</code>; ở cuối khối lệnh của nhánh <code>if</code> phải đặt một lệnh nhảy không điều kiện (<code>jal x0, Exit</code> hoặc <code>beq x0, x0, Exit</code>) để không chạy lọt xuống nhánh <code>Else</code>.</li>
          <li><strong>Cấu trúc <code>switch / case</code>:</strong>
            <ul>
              <li><em>Cách 1 (Chuỗi so sánh):</em> Chuyển thành chuỗi các lệnh <code>addi t0, x0, const_i</code> + <code>beq var, t0, Case_i</code> (kèm <code>jal x0, Done</code> ở cuối mỗi nhánh <code>break</code>).</li>
              <li><em>Cách 2 (Bảng nhảy – Jump Table):</em> Lưu mảng địa chỉ các nhãn <code>Case_0, Case_1...</code> trong bộ nhớ; kiểm tra biên biến chỉ số, tính offset $4 \\times k$, nạp địa chỉ từ bảng rồi dùng <code>jalr x0, reg, 0</code> để nhảy trực tiếp (tối ưu khi nhiều nhánh <code>case</code> liên tiếp).</li>
            </ul>
          </li>
          <li><strong>Vòng lặp <code>while</code> (kiểm tra đầu vòng):</strong> Đặt nhãn <code>Loop:</code> ở đầu, kiểm tra <strong>điều kiện đảo</strong> để thoát ra <code>Exit</code>, thực hiện thân vòng lặp và cuối thân nhảy ngược lên <code>jal x0, Loop</code>.</li>
          <li><strong>Vòng lặp <code>do...while</code> (kiểm tra cuối vòng):</strong> Thực hiện thân vòng lặp ít nhất 1 lần ngay dưới nhãn <code>Loop:</code>, đến cuối thân dùng lệnh rẽ nhánh với <strong>điều kiện thuận</strong> để nhảy ngược lại <code>Loop</code> (không cần lệnh nhảy không điều kiện bổ sung!).</li>
          <li><strong>Vòng lặp <code>for</code>:</strong> Có 2 cách dịch chuẩn: (1) dịch theo mẫu <code>while</code> (khởi tạo trước vòng $\\rightarrow$ kiểm tra đầu vòng $\\rightarrow$ thân + bước lặp + <code>jal x0, Loop</code>), hoặc (2) kiểm tra điều kiện lần đầu rồi dịch thân theo mẫu <code>do...while</code> để giảm số lệnh nhảy trong mỗi vòng lặp.</li>
        </ul>

        <h4>6. Sáu bước gọi Thủ tục và Phân biệt Thủ tục lá vs. Thủ tục cành (Đệ quy)</h4>
        <ul>
          <li><strong>Quy trình 6 bước gọi thủ tục (Procedure Calling Steps):</strong>
            <ol>
              <li>Chương trình gọi (<em>Caller</em>) đặt các tham số đầu vào vào vị trí quy ước (<code>a0–a7</code>).</li>
              <li>Chuyển quyền điều khiển cho thủ tục bằng <code>jal ra, Procedure</code> (lưu địa chỉ lệnh kế tiếp <code>PC + 4</code> vào <code>ra</code>).</li>
              <li>Thủ tục được gọi (<em>Callee</em>) cấp phát vùng nhớ ngăn xếp (<code>addi sp, sp, -4*k</code>) và cất các thanh ghi cần bảo toàn.</li>
              <li>Thực hiện các thao tác xử lý trong thân thủ tục.</li>
              <li>Đặt kết quả trả về vào <code>a0–a1</code>, khôi phục các thanh ghi đã cất từ ngăn xếp và giải phóng ngăn xếp (<code>addi sp, sp, 4*k</code>).</li>
              <li>Trả quyền điều khiển về vị trí gọi bằng lệnh <code>jalr x0, ra, 0</code>.</li>
            </ol>
          </li>
          <li><strong>Phân biệt Thủ tục lá (Leaf) vs. Thủ tục cành / Đệ quy (Non-leaf):</strong>
            <ul>
              <li><strong>Thủ tục lá (Leaf procedure — ví dụ <code>leaf_example</code>):</strong> Là thủ tục <em>không gọi bất kỳ thủ tục con nào khác</em> bên trong nó. Do không làm thay đổi <code>ra</code>, thủ tục lá <strong>không cần cất <code>ra</code></strong> vào Stack; chỉ cần cất/khôi phục các thanh ghi <code>s0–s11</code> nếu có sử dụng (nếu chỉ dùng <code>t0–t6, a0–a7</code> thì không cần động đến Stack).</li>
              <li><strong>Thủ tục cành / Đệ quy (Non-leaf / Recursive procedure — ví dụ <code>fact(n)</code>):</strong> Là thủ tục có gọi thủ tục con khác (hoặc gọi đệ quy chính nó). Vì lệnh <code>jal ra, ...</code> bên trong sẽ ghi đè <code>ra</code>, thủ tục cành <strong>bắt buộc phải cất <code>ra</code> (và các tham số/biến tạm cần giữ lại sau lời gọi như <code>a0</code>) vào Stack</strong> trước khi gọi, và khôi phục lại từ Stack trước khi <code>jalr x0, ra, 0</code>.</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      id: "3.1.4",
      chapter: 3,
      code: "3.1.4",
      title: "Mã máy 32-bit của RISC-V, Lệnh nén 16-bit và 4 Phương thức định địa chỉ",
      pdfPage: 49,
      printedPage: 48,
      linkedGroups: ["3.1", "3.2.1", "3.2.8"],
      summary: "6 khuôn dạng lệnh 32-bit, quy tắc tối ưu mã hóa imm (instr31, BTA/JTA), Bảng RV32I (Table B.1), RVC 16-bit (Table B.6), Lệnh giả (Table B.7) và 4 định địa chỉ.",
      content: `
        <h4>1. Sáu khuôn dạng lệnh máy 32-bit của RISC-V (RV32I)</h4>
        <p>Mọi câu lệnh chuẩn 32-bit của RISC-V đều thuộc 1 trong 6 khuôn dạng: <strong>R, I, S, B, U, J</strong>. Trường <code>opcode</code> luôn cố định ở 7 bit cuối cùng (bit <code>6:0</code>).</p>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 235" width="660" height="230" role="img" aria-label="Biểu đồ chia trường bit của 6 khuôn dạng lệnh máy 32-bit RISC-V">
            <text x="90" y="20" class="svg-mono-muted">Bit 31..25</text>
            <text x="200" y="20" class="svg-mono-muted">24..20</text>
            <text x="305" y="20" class="svg-mono-muted">19..15</text>
            <text x="410" y="20" class="svg-mono-muted">14..12</text>
            <text x="505" y="20" class="svg-mono-muted">11..7</text>
            <text x="612" y="20" class="svg-mono-muted">6..0</text>

            <!-- R-type -->
            <text x="26" y="47" class="svg-title-blue">R</text>
            <rect x="60" y="30" width="110" height="26" class="svg-box" /><text x="115" y="47" text-anchor="middle" class="svg-mono">funct7 (7)</text>
            <rect x="170" y="30" width="100" height="26" class="svg-box-accent" /><text x="220" y="47" text-anchor="middle" class="svg-mono">rs2 (5)</text>
            <rect x="270" y="30" width="100" height="26" class="svg-box-accent" /><text x="320" y="47" text-anchor="middle" class="svg-mono">rs1 (5)</text>
            <rect x="370" y="30" width="76" height="26" class="svg-box" /><text x="408" y="47" text-anchor="middle" class="svg-mono">funct3</text>
            <rect x="446" y="30" width="100" height="26" class="svg-box-accent" /><text x="496" y="47" text-anchor="middle" class="svg-mono">rd (5)</text>
            <rect x="546" y="30" width="114" height="26" class="svg-box-primary" /><text x="603" y="47" text-anchor="middle" class="svg-title-primary">opcode (7)</text>

            <!-- I-type -->
            <text x="26" y="81" class="svg-title-blue">I</text>
            <rect x="60" y="64" width="210" height="26" class="svg-box-warn" /><text x="165" y="81" text-anchor="middle" class="svg-mono">imm[11:0] (12 bit)</text>
            <rect x="270" y="64" width="100" height="26" class="svg-box-accent" /><text x="320" y="81" text-anchor="middle" class="svg-mono">rs1 (5)</text>
            <rect x="370" y="64" width="76" height="26" class="svg-box" /><text x="408" y="81" text-anchor="middle" class="svg-mono">funct3</text>
            <rect x="446" y="64" width="100" height="26" class="svg-box-accent" /><text x="496" y="81" text-anchor="middle" class="svg-mono">rd (5)</text>
            <rect x="546" y="64" width="114" height="26" class="svg-box-primary" /><text x="603" y="81" text-anchor="middle" class="svg-title-primary">opcode (7)</text>

            <!-- S-type -->
            <text x="26" y="115" class="svg-title-blue">S</text>
            <rect x="60" y="98" width="110" height="26" class="svg-box-warn" /><text x="115" y="115" text-anchor="middle" class="svg-mono">imm[11:5]</text>
            <rect x="170" y="98" width="100" height="26" class="svg-box-accent" /><text x="220" y="115" text-anchor="middle" class="svg-mono">rs2 (5)</text>
            <rect x="270" y="98" width="100" height="26" class="svg-box-accent" /><text x="320" y="115" text-anchor="middle" class="svg-mono">rs1 (5)</text>
            <rect x="370" y="98" width="76" height="26" class="svg-box" /><text x="408" y="115" text-anchor="middle" class="svg-mono">funct3</text>
            <rect x="446" y="98" width="100" height="26" class="svg-box-warn" /><text x="496" y="115" text-anchor="middle" class="svg-mono">imm[4:0]</text>
            <rect x="546" y="98" width="114" height="26" class="svg-box-primary" /><text x="603" y="115" text-anchor="middle" class="svg-title-primary">opcode (7)</text>

            <!-- B-type -->
            <text x="26" y="149" class="svg-title-blue">B</text>
            <rect x="60" y="132" width="110" height="26" class="svg-box-warn" /><text x="115" y="149" text-anchor="middle" class="svg-mono">imm[12,10:5]</text>
            <rect x="170" y="132" width="100" height="26" class="svg-box-accent" /><text x="220" y="149" text-anchor="middle" class="svg-mono">rs2 (5)</text>
            <rect x="270" y="132" width="100" height="26" class="svg-box-accent" /><text x="320" y="149" text-anchor="middle" class="svg-mono">rs1 (5)</text>
            <rect x="370" y="132" width="76" height="26" class="svg-box" /><text x="408" y="149" text-anchor="middle" class="svg-mono">funct3</text>
            <rect x="446" y="132" width="100" height="26" class="svg-box-warn" /><text x="496" y="149" text-anchor="middle" class="svg-mono">imm[4:1,11]</text>
            <rect x="546" y="132" width="114" height="26" class="svg-box-primary" /><text x="603" y="149" text-anchor="middle" class="svg-title-primary">opcode (7)</text>

            <!-- U-type -->
            <text x="26" y="183" class="svg-title-blue">U</text>
            <rect x="60" y="166" width="386" height="26" class="svg-box-warn" /><text x="253" y="183" text-anchor="middle" class="svg-mono">imm[31:12] (20 bit)</text>
            <rect x="446" y="166" width="100" height="26" class="svg-box-accent" /><text x="496" y="183" text-anchor="middle" class="svg-mono">rd (5)</text>
            <rect x="546" y="166" width="114" height="26" class="svg-box-primary" /><text x="603" y="183" text-anchor="middle" class="svg-title-primary">opcode (7)</text>

            <!-- J-type -->
            <text x="26" y="217" class="svg-title-blue">J</text>
            <rect x="60" y="200" width="386" height="26" class="svg-box-warn" /><text x="253" y="217" text-anchor="middle" class="svg-mono">imm[20,10:1,11,19:12] (20 bit)</text>
            <rect x="446" y="200" width="100" height="26" class="svg-box-accent" /><text x="496" y="217" text-anchor="middle" class="svg-mono">rd (5)</text>
            <rect x="546" y="200" width="114" height="26" class="svg-box-primary" /><text x="603" y="217" text-anchor="middle" class="svg-title-primary">opcode (7)</text>
          </svg>
          <figcaption>Hình 3.3 – Phân bố 32 bit của cả 6 khuôn dạng lệnh chuẩn RISC-V (R, I, S, B, U, J)</figcaption>
        </figure>

        <div class="callout callout-trap">
          <div class="callout-title">⚠️ Các đặc điểm nhận dạng nhanh trong đề thi (KTMT_GK.pdf trang 49)</div>
          <ul>
            <li>Khuôn dạng <strong>duy nhất không chứa hằng số (<code>imm</code>)</strong> là kiểu <strong>R-type</strong> (chỉ dùng cho các phép toán thanh ghi – thanh ghi).</li>
            <li>Khuôn dạng <strong>bắt buộc sử dụng đầy đủ cả hai trường <code>funct3</code> và <code>funct7</code></strong> là kiểu <strong>R-type</strong> (ngoài ra các lệnh dịch bit tức thì <code>slli, srli, srai</code> thuộc kiểu I nhưng dùng 7 bit đầu <code>imm[11:5]</code> đóng vai trò như <code>funct7</code> và 5 bit <code>imm[4:0]</code> làm số lượng bit cần dịch <code>uimm</code>).</li>
            <li>Hai khuôn dạng có <strong>trường hằng số dài 20 bit</strong> là kiểu <strong>U-type</strong> (<code>lui, auipc</code>) và kiểu <strong>J-type</strong> (<code>jal</code>). <em>Lưu ý: Lệnh <code>jalr</code> thuộc kiểu I-type (12-bit imm), không phải J-type.</em></li>
            <li>Hai khuôn dạng <strong>không có thanh ghi đích <code>rd</code></strong> là kiểu <strong>S-type</strong> (Store) và kiểu <strong>B-type</strong> (Branch).</li>
          </ul>
        </div>

        <h4>2. Bảng tra cứu đầy đủ Tập lệnh RV32I (Table B.1: Opcode, Funct3 và Funct7)</h4>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr><th>Nhóm / Kiểu</th><th>Opcode (6:0)</th><th>funct3</th><th>funct7 / imm[11:5]</th><th>Tên lệnh hợp ngữ tương ứng</th></tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="6"><strong>R-type</strong><br/>(Số học / Logic)</td>
                <td rowspan="6"><code>0110011</code><br/>(<code>0x33</code> = 51)</td>
                <td><code>000</code></td><td><code>0000000</code></td><td><code>add rd, rs1, rs2</code></td>
              </tr>
              <tr><td><code>000</code></td><td><code>0100000</code></td><td><code>sub rd, rs1, rs2</code></td></tr>
              <tr><td><code>001 / 010 / 011</code></td><td><code>0000000</code></td><td><code>sll (001), slt (010), sltu (011)</code></td></tr>
              <tr><td><code>100</code></td><td><code>0000000</code></td><td><code>xor rd, rs1, rs2</code></td></tr>
              <tr><td><code>101</code></td><td><code>0000000</code> / <code>0100000</code></td><td><code>srl (0000000)</code> / <code>sra (0100000)</code></td></tr>
              <tr><td><code>110 / 111</code></td><td><code>0000000</code></td><td><code>or (110), and (111)</code></td></tr>
              <tr>
                <td rowspan="4"><strong>I-type</strong><br/>(ALU tức thì)</td>
                <td rowspan="4"><code>0010011</code><br/>(<code>0x13</code> = 19)</td>
                <td><code>000 / 010 / 011</code></td><td><code>imm[11:0]</code></td><td><code>addi (000), slti (010), sltiu (011)</code></td>
              </tr>
              <tr><td><code>100 / 110 / 111</code></td><td><code>imm[11:0]</code></td><td><code>xori (100), ori (110), andi (111)</code></td></tr>
              <tr><td><code>001</code></td><td><code>0000000</code> (+ <code>shamt</code>)</td><td><code>slli rd, rs1, uimm</code></td></tr>
              <tr><td><code>101</code></td><td><code>0000000</code> / <code>0100000</code></td><td><code>srli (0000000)</code> / <code>srai (0100000)</code></td></tr>
              <tr><td><strong>I-type (Load)</strong></td><td><code>0000011</code> (<code>0x03</code> = 3)</td><td><code>000..101</code></td><td><code>imm[11:0]</code></td><td><code>lb (000), lh (001), lw (010), lbu (100), lhu (101)</code></td></tr>
              <tr><td><strong>S-type (Store)</strong></td><td><code>0100011</code> (<code>0x23</code> = 35)</td><td><code>000..010</code></td><td><code>imm[11:5] | imm[4:0]</code></td><td><code>sb (000), sh (001), sw (010)</code></td></tr>
              <tr><td><strong>B-type (Branch)</strong></td><td><code>1100011</code> (<code>0x63</code> = 99)</td><td><code>000..111</code></td><td><code>imm[12,10:5|4:1,11]</code></td><td><code>beq (000), bne (001), blt (100), bge (101), bltu (110), bgeu (111)</code></td></tr>
              <tr><td><strong>U-type</strong></td><td><code>0110111</code> (<code>0x37</code>) / <code>0010111</code> (<code>0x17</code>)</td><td><code>–</code></td><td><code>imm[31:12]</code></td><td><code>lui rd, upimm</code> (<code>0x37</code> = 55); <code>auipc rd, upimm</code> (<code>0x17</code> = 23)</td></tr>
              <tr><td><strong>J-type &amp; I-jalr</strong></td><td><code>1101111</code> (<code>0x6F</code>) / <code>1100111</code> (<code>0x67</code>)</td><td><code>–</code> / <code>000</code></td><td><code>–</code></td><td><code>jal rd, label</code> (J-type, <code>0x6F</code> = 111); <code>jalr rd, rs1, imm</code> (I-type, <code>0x67</code> = 103, <code>funct3=000</code>)</td></tr>
              <tr><td><strong>I-type (System)</strong></td><td><code>1110011</code> (<code>0x73</code> = 115)</td><td><code>000</code></td><td><code>0x000</code> / <code>0x001</code></td><td><code>ecall</code> (<code>imm=0</code>) / <code>ebreak</code> (<code>imm=1</code>)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Quy tắc tối ưu mã hóa bit hằng số (<code>imm</code>) cho phần cứng RISC-V</div>
          <ul>
            <li><strong>Cố định vị trí bit dấu &amp; các thanh ghi:</strong> Trên tất cả khuôn dạng có hằng số (I, S, B, U, J), bit cao nhất <code>instr[31]</code> <strong>luôn là bit dấu</strong> của <code>imm</code> giúp bộ tạo hằng số (<code>Imm Gen</code>) thực hiện mở rộng dấu ngay lập tức. Đồng thời các trường <code>rs1 [19:15]</code>, <code>rs2 [24:20]</code>, <code>rd [11:7]</code> luôn giữ cố định một vị trí duy nhất để đọc thanh ghi song song với giải mã opcode.</li>
            <li><strong>Tái sử dụng tối đa vị trí bit <code>imm</code>:</strong> Bit <code>instr[30:25]</code> luôn là <code>imm[10:5]</code> (ở cả I, S, B, J); bit <code>instr[19:12]</code> là <code>imm[19:12]</code> (ở cả U, J). Chỉ bit <code>imm[11]</code> ở B/J được dời sang vị trí trống (<code>instr[7]</code> ở B, <code>instr[20]</code> ở J) để hạn chế tối đa số ngõ vào bộ dồn kênh (MUX) trong phần cứng!</li>
            <li><strong>Địa chỉ đích nhảy rẽ nhánh (bội số của 2 byte):</strong> Vì lệnh RISC-V (cả 32-bit lẫn RVC 16-bit) luôn nằm ở địa chỉ chẵn, bit <code>imm[0]</code> luôn bằng <code>0</code> nên không lưu trong mã máy; phần cứng tự chèn <code>1'b0</code> vào vị trí bit 0:
              $$\\text{BTA} = PC + \\text{SignExt}(\\{\\text{imm}[12:1],\\; 1'\\text{b}0\\}) \\qquad ; \\qquad \\text{JTA} = PC + \\text{SignExt}(\\{\\text{imm}[20:1],\\; 1'\\text{b}0\\})$$
            </li>
          </ul>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 3.2.8: Dịch Mã máy 32-bit, Đích nhảy &amp; Bản đồ bộ nhớ</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Chuyển hợp ngữ RV32I sang mã máy Hexa 32-bit (R, I, S, B, U, J); dịch ngược mã máy Hexa (hoặc dãy byte Little-Endian trong Memory Map) sang hợp ngữ; tìm thanh ghi <code>rs1, rs2, rd</code>, trường <code>shamt/funct3/funct7</code>, tính độ lệch <code>imm</code> hoặc địa chỉ đích nhảy <code>BTA / JTA</code> và giá trị <code>PC</code>.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Đọc Bản đồ bộ nhớ &amp; Tách Opcode <code>[6:0]</code>):</strong> Nếu đề cho từng byte tại <code>+0, +1, +2, +3</code>, ghép <strong>ngược từ phải sang trái</strong> (<code>+3</code> trái nhất &rarr; <code>+0</code> phải nhất) thành số Hexa 8 chữ số rồi đổi ra 32 bit nhị phân. Lấy <strong>7 bit phải nhất <code>[6:0]</code></strong> để xác định loại lệnh: <code>0110011</code> (R), <code>0010011</code> (I-ALU), <code>0000011</code> (I-Load), <code>1100111</code> (<code>jalr</code>), <code>0100011</code> (S), <code>1100011</code> (B), <code>0110111</code> (<code>lui</code>), <code>1101111</code> (<code>jal</code>).</li>
                <li><strong>Bước 2 (Mã hóa / Giải mã theo đúng khuôn dạng):</strong>
                  <ul>
                    <li><em>R-type:</em> <code>funct7[31:25] | rs2[24:20] | rs1[19:15] | funct3[14:12] | rd[11:7] | opcode[6:0]</code>.</li>
                    <li><em>I-type:</em> <code>imm[11:0]</code> (đủ 12 bit bù 2 nếu âm) <code>| rs1 | funct3 | rd | opcode</code>. (Lưu ý <code>slli/srli/srai</code>: <code>[31:25]</code> là <code>0000000</code> hoặc <code>0100000</code>, còn <code>[24:20]</code> là <code>shamt</code>).</li>
                    <li><em>S-type:</em> cắt <code>imm[11:0]</code> thành 7 bit cao <code>imm[11:5]</code> ở <code>[31:25]</code> và 5 bit thấp <code>imm[4:0]</code> ở <code>[11:7]</code>!</li>
                    <li><em>B-type &amp; J-type:</em> Tính độ lệch byte $\\text{offset} = \\text{Đích} - PC_{\\text{lệnh hiện tại}}$, đổi ra nhị phân có dấu <strong>13 bit</strong> (B-type) hoặc <strong>21 bit</strong> (J-type), <strong>bỏ bit 0 cuối cùng</strong>, rồi xếp đúng thứ tự xáo trộn: B-type đặt <code>imm[12|10:5]</code> vào <code>[31:25]</code> và <code>imm[4:1|11]</code> vào <code>[11:7]</code>; J-type đặt <code>imm[20|10:1|11|19:12]</code> vào <code>[31:12]</code>.</li>
                  </ul>
                </li>
                <li><strong>Bước 3 (Gom nhóm 4 bit ra Hexa):</strong> Chia 32 bit thành 8 cụm 4 bit từ trái sang phải (<code>[31:28] ... [3:0]</code>) rồi viết thành 8 chữ số Hexa <code>0x........</code>.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Khi tính <code>offset</code> cho <code>beq/bne/jal</code> của RISC-V, mốc luôn là <strong>$PC_{\\text{lệnh hiện tại}}$</strong> (KHÔNG tính từ $PC+4$!). Khi giải mã S-type, nhớ thanh ghi lưu dữ liệu là <code>rs2 [24:20]</code>, thanh ghi địa chỉ cơ sở là <code>rs1 [19:15]</code>.</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="3.2.8">
          <span>📝 <strong>Nhóm 3.2.8: Dịch Mã máy 32-bit, Đích nhảy &amp; Bản đồ bộ nhớ (<span class="group-q-count">60 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.8', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.8', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <h4>3. Tập lệnh nén 16-bit (Compressed Instructions – RVC, Table B.6)</h4>
        <p>Để giảm dung lượng bộ nhớ lưu trữ mã chương trình (tiết kiệm khoảng 25–30% kích thước mã máy), RISC-V (tương tự ARM Thumb) cung cấp tập lệnh nén có <strong>độ dài 16 bit (2 byte)</strong> cho các thao tác thường gặp, ký hiệu bằng tiền tố <code>c.</code>.</p>
        <p><strong>Các hạn chế của lệnh nén 16-bit so với lệnh 32-bit:</strong></p>
        <ol>
          <li><strong>Giảm số lượng thanh ghi</strong> có thể truy cập trực tiếp (nhiều lệnh nén dùng 3 bit để chỉ định 8 thanh ghi phổ biến <code>x8–x15</code>, ký hiệu <code>rd', rs1', rs2'</code>).</li>
          <li><strong>Giảm số lượng toán hạng</strong> trong lệnh (thường gộp thanh ghi đích trùng với thanh ghi nguồn thứ nhất: $rd = rd + rs2$).</li>
          <li><strong>Phạm vi biểu diễn của hằng số tức thời (<code>imm</code>)</strong> và khoảng cách nhảy rẽ nhánh bị thu hẹp đáng kể.</li>
        </ol>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr><th>Nhóm RVC 16-bit</th><th>Các lệnh tiêu biểu (Table B.6)</th><th>Ý nghĩa tương đương RV32I 32-bit</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Load / Store</strong></td><td><code>c.lw rd', uimm(rs1')</code> ; <code>c.sw rs2', uimm(rs1')</code><br/><code>c.lwsp rd, uimm(sp)</code> ; <code>c.swsp rs2, uimm(sp)</code></td><td>Đọc/ghi word dùng thanh ghi <code>x8–x15</code> hoặc theo con trỏ ngăn xếp <code>sp</code></td></tr>
              <tr><td><strong>ALU &amp; Nạp hằng</strong></td><td><code>c.addi rd, imm</code> ; <code>c.li rd, imm</code> ; <code>c.lui rd, uimm</code><br/><code>c.add rd, rs2</code> ; <code>c.mv rd, rs2</code> ; <code>c.sub rd', rs2'</code><br/><code>c.and / c.or / c.xor</code> ; <code>c.slli / c.srli / c.srai</code></td><td>Cộng/nạp hằng nhỏ; thao tác 2 toán hạng ($rd = rd \\;\\text{op}\\; rs2$); dịch bit 5-bit</td></tr>
              <tr><td><strong>Nhảy &amp; Rẽ nhánh</strong></td><td><code>c.j imm</code> ; <code>c.jal imm</code> ; <code>c.jr rs1</code> ; <code>c.jalr rs1</code><br/><code>c.beqz rs1', imm</code> ; <code>c.bnez rs1', imm</code> ; <code>c.nop</code></td><td>Nhảy không điều kiện / gọi hàm / rẽ nhánh so sánh với <code>x0</code> (<code>== 0</code>, <code>!= 0</code>)</td></tr>
            </tbody>
          </table>
        </div>

        <h4>4. Bảng Lệnh giả phổ biến (Pseudoinstructions – Table B.7)</h4>
        <p>Lệnh giả giúp lập trình viên viết hợp ngữ ngắn gọn hơn; trình hợp dịch (Assembler) sẽ tự động dịch chúng sang 1 hoặc 2 lệnh thật RV32I trước khi sinh mã máy:</p>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr><th>Lệnh giả (Pseudoinstruction)</th><th>Lệnh thật RV32I tương ứng</th><th>Chức năng</th></tr>
            </thead>
            <tbody>
              <tr><td><code>nop</code></td><td><code>addi x0, x0, 0</code></td><td>Không làm gì (No operation)</td></tr>
              <tr><td><code>mv rd, rs</code></td><td><code>addi rd, rs, 0</code></td><td>Sao chép thanh ghi: $rd = rs$</td></tr>
              <tr><td><code>not rd, rs</code></td><td><code>xori rd, rs, -1</code></td><td>Đảo từng bit (NOT bitwise)</td></tr>
              <tr><td><code>neg rd, rs</code></td><td><code>sub rd, x0, rs</code></td><td>Đổi dấu số nguyên: $rd = -rs$</td></tr>
              <tr><td><code>li rd, imm32</code></td><td><code>lui rd, upimm</code> + <code>addi rd, rd, loimm</code> (hoặc <code>addi</code> nếu vừa 12-bit)</td><td>Nạp hằng số 32-bit bất kỳ vào <code>rd</code></td></tr>
              <tr><td><code>seqz rd, rs</code> / <code>snez rd, rs</code></td><td><code>sltiu rd, rs, 1</code> / <code>sltu rd, x0, rs</code></td><td>Đặt $rd = 1$ nếu $rs == 0$ (hoặc $rs \\neq 0$)</td></tr>
              <tr><td><code>beqz rs, off</code> / <code>bnez rs, off</code></td><td><code>beq rs, x0, off</code> / <code>bne rs, x0, off</code></td><td>Rẽ nhánh nếu $rs == 0$ (hoặc $rs \\neq 0$)</td></tr>
              <tr><td><code>bgez rs, off</code> / <code>bltz rs, off</code></td><td><code>bge rs, x0, off</code> / <code>blt rs, x0, off</code></td><td>Rẽ nhánh nếu $rs \\ge 0$ (hoặc $rs &lt; 0$)</td></tr>
              <tr><td><code>bgt rs, rt, off</code> / <code>ble rs, rt, off</code></td><td><code>blt rt, rs, off</code> / <code>bge rt, rs, off</code> (đảo 2 toán hạng)</td><td>Rẽ nhánh nếu $rs &gt; rt$ (hoặc $rs \\le rt$)</td></tr>
              <tr><td><code>j offset</code> / <code>jr rs</code> / <code>ret</code></td><td><code>jal x0, offset</code> / <code>jalr x0, rs, 0</code> / <code>jalr x0, ra, 0</code></td><td>Nhảy không điều kiện / Trở về từ thủ tục</td></tr>
              <tr><td><code>la rd, symbol</code> / <code>call offset</code></td><td><code>auipc</code> + <code>addi</code> / <code>auipc ra, ...</code> + <code>jalr ra, ...</code></td><td>Nạp địa chỉ nhãn / Gọi thủ tục ở xa</td></tr>
            </tbody>
          </table>
        </div>

        <h4>5. Bốn phương thức định địa chỉ của RISC-V</h4>
        <ol>
          <li><strong>Định địa chỉ thanh ghi (Register Addressing):</strong> Toán hạng nằm hoàn toàn trong các thanh ghi (áp dụng cho các lệnh kiểu R).</li>
          <li><strong>Định địa chỉ tức thì (Immediate Addressing):</strong> Toán hạng là hằng số nằm ngay bên trong lệnh máy (áp dụng cho toán hạng hằng số của <code>addi, andi, ori, lui...</code>).</li>
          <li><strong>Định địa chỉ cơ sở (Base Addressing):</strong> Toán hạng nằm trong bộ nhớ, địa chỉ được tính bằng tổng nội dung thanh ghi cơ sở và hằng số độ lệch: $\\text{Address} = rs1 + \\text{SignExt}(imm)$ (áp dụng cho các lệnh Load và Store).</li>
          <li><strong>Định địa chỉ tương đối với PC (PC-relative Addressing):</strong> Địa chỉ của lệnh đích cần nhảy tới bằng tổng giá trị thanh ghi PC (địa chỉ của chính lệnh rẽ nhánh/nhảy hiện tại) cộng với hằng số độ lệch:
            $$\\text{Địa chỉ đích (BTA hoặc JTA)} = PC_{\\text{hiện tại}} + imm \\iff imm = \\text{Địa chỉ đích} - PC_{\\text{hiện tại}}$$
          </li>
        </ol>
      `
    },
    {
      id: "3.1.5",
      chapter: 3,
      code: "3.1.5",
      title: "Phương pháp dịch ngược Hợp ngữ RISC-V sang C/C++ & Giải 5 dạng bài tập",
      pdfPage: 70,
      printedPage: 69,
      linkedGroups: ["3.2.5", "3.2.6", "3.2.7"],
      summary: "Quy trình 4 bước đọc hiểu code RISC-V, Bảng mẫu Assembly ↔ C/C++, phương pháp giải 5 dạng bài tập (kèm Trace Table & các bẫy hay gặp) và đọc thêm x86 / ARM / ARMv8.",
      content: `
        <div class="callout callout-tip">
          <div class="callout-title">🧭 Quy trình 4 bước đọc hiểu &amp; dịch ngược RISC-V sang C/C++ (Không bị lú)</div>
          <p>Thay vì cố đọc từng dòng rời rạc rồi đoán ý đồ, hãy làm đúng 4 bước sau trước mọi đoạn code Assembly:</p>
          <ol>
            <li><strong>Bước 1 – Lập bảng ánh xạ (Ghi chú biến $\\leftrightarrow$ thanh ghi):</strong>
              <br/>Đề bài thường cho sẵn (ví dụ <code>s0 = f, s1 = g, s2 = A</code>). Nếu không cho sẵn, hãy tự đặt tên ngắn gọn ngay bên cạnh (<code>s0 = sum</code>, <code>s1 = i</code>, <code>t0 = temp</code>). Gặp <code>zero</code> / <code>x0</code> thay luôn bằng số <code>0</code>.</li>
            <li><strong>Bước 2 – Khoanh vùng khung chương trình qua các nhãn (<code>label:</code>) và lệnh nhảy:</strong>
              <br/>Liếc nhanh các nhãn (<code>loop:</code>, <code>else:</code>, <code>exit:</code>) và lệnh nhảy (<code>beq, bne, blt, bge, j, jalr</code>) <strong>trước khi</strong> đọc chi tiết phép tính:
              <ul>
                <li>Lệnh rẽ nhánh nhảy <strong>xuống dưới</strong> $\\rightarrow$ cấu trúc <code>if / else</code> hoặc <strong>điều kiện thoát vòng lặp</strong>.</li>
                <li>Lệnh <code>j loop</code> (hoặc <code>beq/bne ... loop</code>) nhảy <strong>ngược lên trên</strong> $\\rightarrow$ chắc chắn là <strong>vòng lặp (<code>while / for</code>)</strong>.</li>
                <li>Thấy <code>jal ra, func</code> hoặc <code>addi sp, sp, -...</code> $\\rightarrow$ <strong>gọi hàm con / đệ quy</strong>.</li>
              </ul>
            </li>
            <li><strong>Bước 3 – Dịch từng khối lệnh &amp; Kẻ bảng theo dõi (Trace Table):</strong>
              <br/>Dịch các lệnh tính toán thành biểu thức C, thay dần biến tạm <code>t0, t1, t2</code>. Nếu đề hỏi <em>"giá trị thanh ghi sau khi chạy xong"</em>, tuyệt đối không nhẩm miệng — hãy kẻ bảng theo dõi từng vòng lặp.</li>
            <li><strong>Bước 4 – Soi lại "Bẫy điều kiện ngược":</strong>
              <br/>Lệnh rẽ nhánh nhảy tới <code>else</code> hoặc <code>exit</code> luôn mang <strong>điều kiện phủ định</strong> so với câu lệnh <code>if</code> / <code>while</code> viết trong C!</li>
          </ol>
        </div>

        <h4>1. Bảng mẫu đối chiếu nhanh (RISC-V Assembly $\\leftrightarrow$ C/C++)</h4>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Mẫu lệnh RISC-V</th>
                <th>Ý nghĩa tương đương trong C/C++</th>
                <th>Ghi chú nhanh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>addi rd, zero, C</code> / <code>li rd, C</code></td>
                <td><code>rd = C;</code></td>
                <td>Khởi tạo biến bằng hằng số</td>
              </tr>
              <tr>
                <td><code>add rd, rs1, zero</code> / <code>mv rd, rs1</code></td>
                <td><code>rd = rs1;</code></td>
                <td>Gán giá trị biến (<code>rs1 + 0</code>)</td>
              </tr>
              <tr>
                <td><code>slli rd, rs1, k</code></td>
                <td><code>rd = rs1 * 2^k;</code></td>
                <td>Hay gặp <code>k=2</code> ($\\times 4$ tính offset mảng <code>int</code>)</td>
              </tr>
              <tr>
                <td><code>srli rd, rs1, k</code> / <code>srai rd, rs1, k</code></td>
                <td><code>rd = rs1 / 2^k;</code></td>
                <td>Chia nguyên cho $2^k$ (không dấu / có dấu)</td>
              </tr>
              <tr>
                <td><code>slli t0, i, 2</code> $\\to$ <code>add t0, t0, Base</code> $\\to$ <code>lw x, 0(t0)</code></td>
                <td><code>x = A[i];</code></td>
                <td>Mảng <code>int</code> (mỗi phần tử 4 byte)</td>
              </tr>
              <tr>
                <td><code>add t0, Base, i</code> $\\to$ <code>lbu x, 0(t0)</code></td>
                <td><code>x = str[i];</code></td>
                <td>Mảng <code>char</code> (1 byte, <strong>không nhân 4</strong>)</td>
              </tr>
              <tr>
                <td><code>slt t0, a, b</code> $\\to$ <code>bne t0, zero, Exit</code></td>
                <td>Nếu <code>a &lt; b</code> thì thoát (lặp khi <code>a &gt;= b</code>)</td>
                <td><code>slt = 1</code> khi <code>a &lt; b</code>; <code>bne zero</code> = nhảy nếu đúng</td>
              </tr>
              <tr>
                <td><code>slt t0, a, b</code> $\\to$ <code>beq t0, zero, Exit</code></td>
                <td>Nếu <code>a &gt;= b</code> thì thoát (lặp khi <code>a &lt; b</code>)</td>
                <td><code>beq zero</code> = nhảy nếu <code>slt</code> sai (<code>a &gt;= b</code>)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>2. Phương pháp làm bài cho 5 dạng thường gặp (kèm Ví dụ cụ thể)</h4>

        <h5>Dạng 1: Biểu thức số học &amp; Dịch bit (Nhóm 3.2.5)</h5>
        <p><strong>Cách làm:</strong> Viết nghĩa C ngay bên phải từng dòng lệnh, sau đó thế ngược các thanh ghi tạm (<code>t0, t1, t2</code>) vào thanh ghi kết quả cuối cùng.</p>
        <div class="theory-code-compare">
          <div class="quiz-code-block">
            <div class="quiz-code-block-header">RISC-V (s0=f, s1=g, s2=h, s3=i)</div>
            <pre>slli t0, s1, 2     # t0 = g * 4
sub  s3, s0, s2    # i  = f - h
add  s3, s3, t0    # i  = (f - h) + 4*g
addi s3, s3, 5     # i  = f - h + 4*g + 5</pre>
          </div>
          <div class="quiz-code-block">
            <div class="quiz-code-block-header">Kết quả C/C++ tương ứng</div>
            <pre>// Thế t0 = 4 * g vào s3:
i = f - h + 4 * g + 5;</pre>
          </div>
        </div>

        <h5>Dạng 2: Truy cập Mảng &amp; Con trỏ (<code>lw, sw, lbu, sb</code>)</h5>
        <p><strong>Cách làm:</strong> Nhớ công thức địa chỉ phần tử mảng <code>int A[]</code> là <code>&amp;A[i] = Base_A + 4 * i</code>. Nếu gặp hằng số offset dạng <code>8(s2)</code> hay <code>12(s2)</code> thì lấy số đó <strong>chia cho 4</strong> để ra chỉ số phần tử: <code>8(s2)</code> chính là <code>A[2]</code>, <code>12(s2)</code> chính là <code>A[3]</code>!</p>
        <div class="theory-code-compare">
          <div class="quiz-code-block">
            <div class="quiz-code-block-header">RISC-V (s0=i, s1=j, s2=&amp;A[0], s3=&amp;B[0])</div>
            <pre>slli t0, s0, 2     # t0 = 4 * i
add  t0, t0, s2    # t0 = &amp;A[i]
lw   t1, 0(t0)     # t1 = A[i]
lw   t2, 8(s2)     # t2 = A[2] (vì 8 / 4 = 2)
add  t1, t1, t2    # t1 = A[i] + A[2]
slli t3, s1, 2     # t3 = 4 * j
add  t3, t3, s3    # t3 = &amp;B[j]
sw   t1, 0(t3)     # B[j] = A[i] + A[2]</pre>
          </div>
          <div class="quiz-code-block">
            <div class="quiz-code-block-header">Kết quả C/C++ tương ứng</div>
            <pre>// Đọc A[i] và A[2], cộng lại rồi ghi vào B[j]:
B[j] = A[i] + A[2];</pre>
          </div>
        </div>

        <h5>Dạng 3: Cấu trúc rẽ nhánh <code>if / else</code></h5>
        <p><strong>Cách làm:</strong> Trong Assembly, khối lệnh <code>if</code> nằm ngay phía dưới lệnh rẽ nhánh. Vì vậy lệnh rẽ nhánh ở đầu luôn kiểm tra <strong>điều kiện ngược (phủ định)</strong> để nhảy sang <code>else</code> hoặc <code>exit</code>:</p>
        <ul>
          <li><code>bne a, b, Else</code> $\\Rightarrow$ vào nhánh <code>if</code> khi <code>a == b</code>.</li>
          <li><code>beq a, b, Else</code> $\\Rightarrow$ vào nhánh <code>if</code> khi <code>a != b</code>.</li>
          <li><code>bge a, b, Else</code> $\\Rightarrow$ vào nhánh <code>if</code> khi <code>a &lt; b</code>.</li>
          <li><code>blt a, b, Else</code> $\\Rightarrow$ vào nhánh <code>if</code> khi <code>a &gt;= b</code>.</li>
        </ul>
        <div class="theory-code-compare">
          <div class="quiz-code-block">
            <div class="quiz-code-block-header">RISC-V (s0=f, s1=g, s2=h, s3=i, s4=j)</div>
            <pre>    bne s3, s4, Else   # Nếu i != j thì nhảy Else
    add s0, s1, s2     # Nhánh đúng: f = g + h
    j   Exit           # Nhảy qua Else!
Else:
    sub s0, s1, s2     # Nhánh sai: f = g - h
Exit:</pre>
          </div>
          <div class="quiz-code-block">
            <div class="quiz-code-block-header">Kết quả C/C++ tương ứng</div>
            <pre>if (i == j) {
    f = g + h;
} else {
    f = g - h;
}</pre>
          </div>
        </div>

        <h5>Dạng 4: Vòng lặp (<code>while / for</code>) &amp; Đếm tổng số lệnh thực thi (Nhóm 3.2.6)</h5>
        <p><strong>Cách làm:</strong> Tách đoạn mã thành 3 phần: <strong>(1) Khởi tạo</strong> trước <code>loop:</code> $\\rightarrow$ <strong>(2) Kiểm tra thoát</strong> ở đầu <code>loop:</code> (lấy phủ định để ra điều kiện lặp) $\\rightarrow$ <strong>(3) Thân vòng + Bước tăng + <code>j loop</code></strong>.</p>
        <p><em>Ví dụ thực chiến (Dạng đề thi CK):</em> Cho đoạn mã sau, tìm giá trị thập phân của <code>a0</code> và đếm tổng số lệnh đã thực thi.</p>
        <div class="theory-code-compare">
          <div class="quiz-code-block">
            <div class="quiz-code-block-header">RISC-V</div>
            <pre>    addi a1, zero, 14   # max = 14
    addi s0, zero, 0    # sum = 0
    add  s1, zero, zero # i = 0
loop:
    slt  t0, a1, s1     # t0 = (14 &lt; i) ? 1 : 0
    bne  t0, zero, finish # Nếu i &gt; 14 thì thoát
    add  s0, s0, s1     # sum = sum + i
    addi s1, s1, 2      # i = i + 2
    j    loop
finish:
    add  a0, s0, zero   # return sum</pre>
          </div>
          <div class="quiz-code-block">
            <div class="quiz-code-block-header">Dịch sang C/C++</div>
            <pre>int max = 14, sum = 0;
for (int i = 0; i &lt;= max; i += 2) {
    sum += i;
}
return sum;</pre>
          </div>
        </div>

        <p><strong>Kẻ bảng theo dõi thanh ghi (Trace Table)</strong> để chắc chắn không nhầm biên:</p>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Lượt lặp</th>
                <th><code>i (s1)</code> đầu vòng</th>
                <th><code>slt t0, 14, s1</code> (<code>14 &lt; i</code>?)</th>
                <th><code>sum (s0)</code> sau cộng</th>
                <th><code>i (s1)</code> sau tăng <code>+2</code></th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Vòng 1</td><td>0</td><td><code>0</code> (tiếp tục)</td><td>$0 + 0 = 0$</td><td>2</td></tr>
              <tr><td>Vòng 2</td><td>2</td><td><code>0</code> (tiếp tục)</td><td>$0 + 2 = 2$</td><td>4</td></tr>
              <tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
              <tr><td>Vòng 8</td><td>14</td><td><code>0</code> (tiếp tục)</td><td>$0+2+4+6+8+10+12+14 = \\mathbf{56}$</td><td>16</td></tr>
              <tr><td>Lần kiểm tra cuối</td><td>16</td><td><code>1</code> (thoát $\\rightarrow$ <code>finish</code>)</td><td>Giữ nguyên <strong>56</strong></td><td>–</td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức đếm tổng số lệnh thực thi của vòng lặp</div>
          <p>$$\\text{Tổng lệnh} = \\text{Lệnh khởi tạo} + N \\times (\\text{Số lệnh trong 1 vòng lặp}) + \\text{Lệnh kiểm tra lần cuối để thoát} + \\text{Lệnh sau vòng lặp}$$</p>
          <p>Áp dụng ngay cho ví dụ trên: Khởi tạo (3 lệnh) + $N = 8$ vòng $\\times$ 5 lệnh/vòng (<code>slt, bne, add, addi, j</code>) + Lần kiểm tra thứ 9 để thoát (2 lệnh: <code>slt, bne</code>) + Lệnh ở <code>finish</code> (1 lệnh) $= 3 + 8 \\times 5 + 2 + 1 = \\mathbf{46}$ lệnh.</p>
        </div>

        <h5>Dạng 5: Chương trình con (Thủ tục), Đệ quy &amp; Ngăn xếp (Nhóm 3.2.7)</h5>
        <p><strong>Cách làm:</strong> Một hàm RISC-V chuẩn luôn gồm 3 khúc rõ ràng:</p>
        <ol>
          <li><strong>Khúc mở đầu (Prologue):</strong> Thấy <code>addi sp, sp, -4*k</code> và <code>sw</code> $\\rightarrow$ chỉ là bước "cất đồ" (<code>ra</code>, <code>s0...</code>, tham số <code>a0</code>) vào Stack để lát gọi hàm khác không bị mất. <em>Không cần dịch khúc này thành logic C!</em></li>
          <li><strong>Khúc thân hàm:</strong> Đọc tham số từ <code>a0, a1...</code>; nếu thấy <code>jal ra, func</code> là đang gọi hàm (hoặc gọi đệ quy chính nó); kết quả trả về của hàm con nằm trong <code>a0</code>.</li>
          <li><strong>Khúc kết thúc (Epilogue):</strong> Thấy <code>lw</code> khôi phục lại thanh ghi, <code>addi sp, sp, 4*k</code> rồi <code>jalr x0, ra, 0</code> (<code>ret</code>) $\\rightarrow$ tương đương <code>return a0;</code>.</li>
        </ol>
        <div class="theory-code-compare">
          <div class="quiz-code-block">
            <div class="quiz-code-block-header">RISC-V (Hàm đệ quy sum(n), a0 = n)</div>
            <pre>sum:
    addi sp, sp, -8      # Cất ra và a0
    sw   ra, 4(sp)
    sw   a0, 0(sp)
    slti t0, a0, 1       # n &lt; 1 ?
    beq  t0, zero, L1    # Nếu n &gt;= 1 nhảy L1
    addi a0, zero, 0     # Base case: trả về 0
    addi sp, sp, 8
    jalr x0, ra, 0
L1:
    addi a0, a0, -1      # Tham số mới: n - 1
    jal  ra, sum         # Gọi sum(n - 1) -&gt; kq ở a0
    lw   t0, 0(sp)       # Lấy lại n ban đầu
    lw   ra, 4(sp)       # Lấy lại ra
    addi sp, sp, 8
    add  a0, t0, a0      # a0 = n + sum(n - 1)
    jalr x0, ra, 0       # return a0</pre>
          </div>
          <div class="quiz-code-block">
            <div class="quiz-code-block-header">Kết quả C/C++ tương ứng</div>
            <pre>int sum(int n) {
    if (n &lt; 1) {
        return 0;
    }
    return n + sum(n - 1);
}</pre>
          </div>
        </div>

        <div class="callout callout-trap">
          <div class="callout-title">⚠️ 4 "Bẫy" kinh điển khiến sinh viên hay dịch sai</div>
          <ol>
            <li><strong>Bẫy điều kiện ngược của <code>if / while</code>:</strong> Thấy <code>bne s0, s1, Exit</code> mà lại dịch thành <code>if (s0 != s1)</code> là sai ngược! Phải hỏi: <em>"Khi nào nó KHÔNG nhảy tới Exit để chạy phần code bên dưới?"</em> $\\rightarrow$ Khi <code>s0 == s1</code>.</li>
            <li><strong>Bẫy <code>slt</code> đi kèm <code>beq/bne</code> với <code>zero</code>:</strong> <code>slt t0, a, b</code> trả về <code>1</code> nếu $a &lt; b$. Sau đó <code>bne t0, zero, L</code> nghĩa là nhảy khi $t0 \\neq 0$ (tức là $a &lt; b$ đúng); còn <code>beq t0, zero, L</code> nghĩa là nhảy khi $t0 = 0$ (tức là $a \\ge b$).</li>
            <li><strong>Bẫy mảng <code>int</code> vs mảng <code>char</code>:</strong> Mảng <code>int</code> (4 byte) dùng <code>slli ..., 2</code> ($\\times 4$) + <code>lw/sw</code>. Mảng <code>char</code> / xâu ký tự (1 byte) <strong>không nhân 4</strong> và dùng <code>lb/lbu/sb</code>.</li>
            <li><strong>Bẫy quên lần kiểm tra thoát vòng lặp khi đếm lệnh:</strong> Vòng lặp chạy $N$ lần thì thân vòng lặp chạy $N$ lần, nhưng phần kiểm tra điều kiện đầu vòng lặp luôn chạy <strong>$N + 1$ lần</strong> (thêm 1 lần cuối cùng khi điều kiện sai để nhảy thoát).</li>
          </ol>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 3.2.5: Chuyển đổi Ngôn ngữ C $\\leftrightarrow$ Hợp ngữ RISC-V</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Dịch biểu thức số học / logic tối ưu không dùng <code>mul</code>, tính địa chỉ phần tử mảng 1 chiều <code>A[i]</code> / mảng 2 chiều <code>M[i][j]</code> / con trỏ <code>*p</code>, hoặc chuyển đổi qua lại cấu trúc rẽ nhánh <code>if / else</code> và câu lệnh gán.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Tối ưu phép nhân/chia hằng số &amp; Biểu thức):</strong> Nhân $2^k$ dùng <code>slli ..., k</code>; chia không dấu/có dấu $2^k$ dùng <code>srli/srai ..., k</code>; nhân hằng không phải lũy thừa 2 tách thành tổng dịch bit (vd $5x = 4x + x \Rightarrow$ <code>slli t0, x, 2; add t0, t0, x</code>; $8(a-7) \Rightarrow$ <code>addi t0, a, -7; slli t0, t0, 3</code>). Khi dịch ngược, thay thế ngược các thanh ghi tạm <code>t0, t1</code> vào biểu thức cuối.</li>
                <li><strong>Bước 2 (Tính địa chỉ mảng 1D / 2D &amp; Con trỏ):</strong>
                  <ul>
                    <li>Mảng <code>int</code> 1 chiều (4 byte/phần tử): $\\&A[i] = \\text{Base}_A + 4 \\times i$ (dùng <code>slli t0, i, 2</code> rồi <code>add</code>). Nếu gặp offset hằng <code>k(s2)</code> thì chỉ số phần tử là $k/4$.</li>
                    <li>Mảng 2 chiều $R \\times C$ (32-bit, lưu theo hàng – row-major): $\\&M[i][j] = \\text{Base}_M + (i \\times C + j) \\times 4$.</li>
                    <li>Mảng <code>char</code> (1 byte/phần tử): $\\&S[i] = \\text{Base}_S + i$ (KHÔNG nhân 4, dùng <code>lb/lbu/sb</code>).</li>
                  </ul>
                </li>
                <li><strong>Bước 3 (Dịch <code>if / else</code>):</strong> Dùng lệnh nhánh mang <strong>điều kiện phủ định</strong> nhảy xuống <code>Else</code> (hoặc <code>Exit</code>), và luôn đặt <code>jal zero, Exit</code> (hoặc <code>j Exit</code>) ở cuối khối <code>if</code> để tránh rơi vào khối <code>Else</code>.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Chú ý mảng có thanh ghi cơ sở giữ <code>&amp;A[0]</code> hay giữ <code>&amp;A[1]</code> (vd cho <code>s1 = 0x1000CDC4</code> là <code>A[1]</code> thì <code>4(s1)</code> là <code>A[2]</code> chứ không phải <code>A[1]</code>!). Luôn kiểm tra kỹ bẫy đảo điều kiện nhánh ở câu <code>if / else</code>.</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="3.2.5">
          <span>📝 <strong>Nhóm 3.2.5: Thực hành Chuyển đổi C $\\leftrightarrow$ RISC-V (<span class="group-q-count">35 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.5', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.5', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 3.2.6: Phân tích Vòng lặp &amp; Đếm tổng số lệnh thực thi</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Cho đoạn hợp ngữ RISC-V có vòng lặp (1 vòng hoặc 2 vòng lồng nhau), yêu cầu xác định giá trị thanh ghi sau khi thoát vòng lặp hoặc đếm tổng số lệnh máy đã thực thi.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Khoanh vùng 3 phần của vòng lặp):</strong> (1) Các lệnh khởi tạo trước nhãn <code>loop:</code>; (2) Phần kiểm tra điều kiện nhảy thoát; (3) Thân vòng lặp + bước tăng biến đếm + lệnh nhảy quay lại đầu vòng.</li>
                <li><strong>Bước 2 (Kẻ bảng Trace Table xác định số lượt lặp $N$):</strong> Viết rõ biến đếm và biến tích lũy ở vòng 1, vòng 2, và vòng cuối cùng ngay sát điều kiện dừng. Đừng nhẩm miệng nếu bước tăng khác 1 (vd <code>i += 2</code>) hoặc mảng bắt đầu từ chỉ số 0 hay 1!</li>
                <li><strong>Bước 3 (Áp dụng công thức đếm tổng số lệnh động):</strong>
                  $$\\text{Tổng lệnh} = \\text{Khởi tạo} + N \\times (\\text{Số lệnh trong 1 vòng}) + \\text{Lệnh kiểm tra lần cuối để thoát} + \\text{Lệnh sau vòng}$$
                  <em>(Với 2 vòng lồng nhau: tính tổng số lệnh của vòng trong ứng với mỗi lượt vòng ngoài rồi cộng tổng lại!).</em>
                </li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Sai lầm phổ biến nhất là <strong>quên cộng lần kiểm tra thoát vòng lặp cuối cùng</strong> (vòng <code>while/for</code> chạy $N$ lượt thì khối kiểm tra điều kiện chạy $N + 1$ lượt) hoặc nhầm dấu so sánh biên <code>&lt;</code> vs <code>&le;</code> trong cặp lệnh <code>slt + beq/bne</code>!</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="3.2.6">
          <span>📝 <strong>Nhóm 3.2.6: Phân tích Vòng lặp &amp; Đếm tổng số lệnh (<span class="group-q-count">13 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.6', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.6', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 3.2.7: Chương trình con (Thủ tục), Ngăn xếp &amp; <code>jal / jalr</code></div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Hỏi thanh ghi <code>sp</code>, cơ chế LIFO, viết đúng cặp lệnh Push/Pop trên Stack, xác định giá trị <code>PC</code> và <code>ra</code> ngay khi chạy <code>jal / jalr</code>, phân tích hàm lồng nhau hoặc đệ quy (tìm kết quả trả về <code>a0</code>, lỗi quên cất <code>ra</code>).</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Kiểm tra chuẩn Push / Pop trên Stack):</strong> Stack RISC-V mọc theo chiều <strong>giảm địa chỉ</strong>:
                  <ul>
                    <li><em>Push $k$ thanh ghi:</em> Giảm <code>sp</code> trước (<code>addi sp, sp, -4*k</code>) rồi mới <code>sw</code> vào <code>0(sp), 4(sp)...</code>.</li>
                    <li><em>Pop $k$ thanh ghi:</em> Đọc <code>lw</code> từ <code>0(sp), 4(sp)...</code> trước rồi mới tăng <code>sp</code> trả lại (<code>addi sp, sp, 4*k</code>).</li>
                  </ul>
                </li>
                <li><strong>Bước 2 (Theo dõi <code>jal</code> và <code>jalr</code>):</strong> Khi thực hiện <code>jal ra, Proc</code> tại địa chỉ $A$: đồng thời đặt <code>ra = A + 4</code> và nhảy <code>PC = địa chỉ Proc</code>. Khi gặp <code>jalr x0, 0(ra)</code> ở cuối hàm: <code>PC</code> nhảy về đúng địa chỉ đang lưu trong <code>ra</code>.</li>
                <li><strong>Bước 3 (Phân tích hàm lồng nhau / Đệ quy):</strong> Kiểm tra xem hàm có gọi tiếp hàm khác không: nếu <strong>có gọi</strong> mà không cất <code>ra</code> lên Stack thì <code>ra</code> bị ghi đè $\\Rightarrow$ <code>jalr x0, 0(ra)</code> sẽ nhảy lặp vô tận tại lệnh sau lời gọi trong cùng hàm đó! Với đệ quy, vẽ cây gọi hàm từ tham số đầu vào tới điều kiện cơ sở (Base case) rồi tính ngược lên <code>a0</code>.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Đừng dịch phần Prologue/Epilogue (<code>addi sp, sp, ±4k</code>) thành phép tính logic C của bài toán! Kiểm tra kỹ khi thanh ghi truyền vào bị thay đổi trước khi nhảy đệ quy, cần xem hàm khôi phục thanh ghi nào từ Stack (<code>lw t0, 0(sp)</code>) để tính tổng/tích sau lời gọi.</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="3.2.7">
          <span>📝 <strong>Nhóm 3.2.7: Chương trình con, Ngăn xếp &amp; jal/jalr (<span class="group-q-count">14 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.7', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.7', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <h4>3. Đọc thêm: So sánh nhanh RISC-V với kiến trúc x86 và ARM / ARMv8</h4>
        <ul>
          <li><strong>Kiến trúc Intel x86 (CISC – 32-bit IA-32 &amp; 64-bit x86-64):</strong> Độ dài lệnh thay đổi linh hoạt từ <strong>1 đến 15 byte</strong>; số lượng thanh ghi đa dụng ít hơn nhiều (8 thanh ghi 32-bit <code>EAX..EDI</code> ở IA-32, mở rộng lên 16 thanh ghi 64-bit ở x86-64); phổ biến lệnh <strong>2 địa chỉ</strong> và cho phép toán hạng tính toán nằm trực tiếp trong bộ nhớ (không thuần Load/Store); dùng con trỏ lệnh <code>IP / EIP / RIP</code> và thứ tự byte Little-Endian.</li>
          <li><strong>Kiến trúc ARM &amp; ARMv8 / AArch64 (RISC):</strong> Chia sẻ rất nhiều điểm tương đồng với RISC-V (kiến trúc Load/Store, lệnh chuẩn 32-bit cố định kết hợp tập lệnh nén Thumb 16-bit tiết kiệm bộ nhớ, tập thanh ghi lớn: 16 thanh ghi ở ARMv7 và 31 thanh ghi đa dụng 64-bit <code>X0–X30</code> ở ARMv8). Điểm khác biệt nổi bật của ARM truyền thống (ARMv7) là hầu hết lệnh có trường điều kiện (<em>Conditional Execution</em>) dựa vào các cờ trạng thái <code>N, Z, C, V</code> trong thanh ghi CPSR, trong khi RISC-V tách riêng so sánh và rẽ nhánh (<code>blt/beq</code>) không dùng thanh ghi cờ trạng thái.</li>
        </ul>
      `
    },
    {
      id: "3.1.6",
      chapter: 3,
      code: "3.1.6",
      title: "Thực hành RARS, Chỉ thị Hợp ngữ (.data, .word, .asciz) và Lời gọi hệ thống (ecall)",
      pdfPage: 98,
      printedPage: 97,
      linkedGroups: ["3.2.9"],
      summary: "Bố cục bộ nhớ mặc định trên RARS (.text 0x00400000, .data 0x10010000, gp, sp), chỉ thị .word/.ascii/.asciz, dịch vụ ecall (a7=1,4,5,10,11,32,34) và định địa chỉ mảng 2D Bitmap.",
      content: `
        <h4>1. Bố cục Bộ nhớ mặc định &amp; Chỉ thị Hợp ngữ trên RARS</h4>
        <ul>
          <li><strong>Bố cục các phân đoạn mặc định (Default Memory Configuration):</strong>
            <ul>
              <li><code>.text</code> (vùng lệnh): Mặc định bắt đầu tại <strong><code>0x00400000</code></strong>.</li>
              <li><code>.data</code> (vùng dữ liệu tĩnh): Mặc định bắt đầu tại <strong><code>0x10010000</code></strong> (cửa sổ <em>Data Segment</em> cho phép xem <code>.data</code>, <code>gp</code> và <code>sp [stack]</code>).</li>
              <li><strong>Điều kiện lắp ráp (Assemble):</strong> Tệp mã nguồn bắt buộc <strong>phải được lưu (Save)</strong> trên ổ đĩa và <strong>không có lỗi cú pháp</strong> (không bắt buộc phải khai báo <code>.data</code> nếu không dùng biến tĩnh).</li>
            </ul>
          </li>
          <li><strong>Các chỉ thị khai báo dữ liệu quan trọng:</strong>
            <ul>
              <li><code>.word v1, v2...</code>: Cấp phát 4 byte/phần tử và <strong>tự động căn lề chia hết cho 4 byte</strong> (padding nếu trước đó là chuỗi lẻ byte). Dạng <code>.word val:count</code> tạo <code>count</code> phần tử lặp giá trị <code>val</code> (chiếm $4 \\times \\text{count}$ byte).</li>
              <li><code>.byte</code> (1 byte), <code>.half</code> (2 byte), <code>.space N</code> (cấp phát $N$ byte trống).</li>
              <li><strong>Phân biệt <code>.asciz</code> và <code>.ascii</code>:</strong> Chỉ thị <code>.asciz "ABC"</code> (hoặc <code>.string</code>) tự động chèn thêm 1 byte kết thúc null <code>\\0</code> (tổng 4 byte); còn <code>.ascii "ABC"</code> <strong>KHÔNG</strong> chèn byte <code>\\0</code> nên nếu in chuỗi kế tiếp ngay sau sẽ bị nối chuỗi tràn sang biến kế bên!</li>
            </ul>
          </li>
        </ul>

        <h4>2. Lời gọi hệ thống (<code>ecall</code>) &amp; Mảng 2 chiều Bitmap trên RARS</h4>
        <p>Đặt mã số dịch vụ vào thanh ghi <strong><code>a7</code></strong>, truyền tham số vào <code>a0</code> (<code>a1</code>), rồi gọi lệnh <strong><code>ecall</code></strong>:</p>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr><th><code>a7</code></th><th>Tên dịch vụ</th><th>Tham số vào</th><th>Kết quả trả về</th></tr>
            </thead>
            <tbody>
              <tr><td><code>1</code></td><td>PrintInt</td><td><code>a0</code> = số nguyên cần in</td><td>In hệ 10 ra Run I/O</td></tr>
              <tr><td><code>4</code></td><td>PrintString</td><td><code>a0</code> = địa chỉ chuỗi kết thúc <code>\\0</code></td><td>In chuỗi ra Run I/O</td></tr>
              <tr><td><code>5</code></td><td>ReadInt</td><td>–</td><td><code>a0</code> = số nguyên nhập vào</td></tr>
              <tr><td><code>10</code></td><td>Exit</td><td>–</td><td>Kết thúc chương trình</td></tr>
              <tr><td><code>11</code></td><td>PrintChar</td><td><code>a0</code> = mã ASCII (byte thấp)</td><td>In 1 ký tự ra Run I/O</td></tr>
              <tr><td><code>32</code></td><td>Sleep</td><td><code>a0</code> = thời gian chờ (ms)</td><td>Tạm dừng thực thi</td></tr>
              <tr><td><code>34</code></td><td>PrintIntHex</td><td><code>a0</code> = số nguyên 32-bit</td><td>In dạng <code>0x...</code> ra Run I/O</td></tr>
            </tbody>
          </table>
        </div>
        <ul>
          <li><strong>Mảng 2 chiều Bitmap Display trong vùng nhớ dữ liệu:</strong> Mỗi pixel trên Bitmap Display chiếm 1 word (4 byte màu RGB 24-bit dạng <code>0x00RRGGBB</code>, màu đỏ = <code>0x00FF0000</code>), tọa độ 0-based <code>(row, col)</code> có offset byte $= (\\text{row} \\times \\text{Số cột} + \\text{col}) \\times 4$ tính từ Base Address (vd <code>0x10010000</code>).</li>
        </ul>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 3.2.9: Thực hành RARS, Chỉ thị <code>.data</code> &amp; <code>ecall</code></div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Tính địa chỉ biến trong vùng <code>.data</code> (<code>.word, .half, .byte, .space, .ascii, .asciz</code>), xác định kết quả dịch vụ <code>ecall</code> (theo mã <code>a7</code>), điều kiện Assemble trên RARS, số byte lệnh <code>li</code> sau hợp dịch và tính offset mảng 2D Bitmap Display.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Tính địa chỉ biến trong <code>.data</code> từ <code>0x10010000</code>):</strong> Cộng tuần tự kích thước từng khai báo: <code>.byte</code> (+1), <code>.half</code> (+2, căn lề chẵn), <code>.space N</code> (+N), <code>.ascii</code> (+độ dài chuỗi), <code>.asciz / .string</code> (+độ dài chuỗi <strong>+ 1</strong> cho byte <code>\\0</code>). Riêng trước khi cấp phát <code>.word</code> (<code>.word val:count</code> chiếm $4 \\times \\text{count}$ byte), bắt buộc <strong>làm tròn địa chỉ hiện tại lên bội số tiếp theo của 4</strong>!</li>
                <li><strong>Bước 2 (Tra <code>ecall</code>, Kích thước lệnh &amp; Điều kiện Assemble):</strong> Nhớ mã <code>a7</code> trọng tâm: <code>1</code> (PrintInt), <code>4</code> (PrintString), <code>5</code> (ReadInt), <code>10</code> (Exit), <code>11</code> (PrintChar), <code>32</code> (Sleep ms), <code>34</code> (PrintIntHex). Lệnh giả <code>li rd, imm32</code> lớn hơn 12 bit sẽ bung thành <code>lui + addi</code> (8 byte = 2 lệnh thật). RARS chỉ lắp ráp được khi file <strong>đã lưu</strong> và <strong>không có lỗi cú pháp</strong>.</li>
                <li><strong>Bước 3 (Mảng 2D Bitmap Display):</strong> Hàng 1, cột 1 ứng chỉ số 0-based <code>(0, 0)</code> $\\Rightarrow$ địa chỉ pixel tại hàng $r$, cột $c$ là $\\text{Base} + [(r - 1) \\times \\text{Số cột} + (c - 1)] \\times 4$.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Đừng quên <strong>byte padding căn lề 4 byte</strong> trước <code>.word</code> nếu ngay phía trên là chuỗi <code>.ascii / .asciz</code> có độ dài không chia hết cho 4! Nếu chuỗi dùng <code>.ascii</code> (không có <code>\\0</code>), lệnh <code>ecall a7=4</code> sẽ in nối tiếp cả chuỗi liền sau cho tới khi gặp byte <code>0x00</code>!</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="3.2.9">
          <span>📝 <strong>Nhóm 3.2.9: Thực hành RARS, Chỉ thị .data &amp; ecall (<span class="group-q-count">14 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.9', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.9', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },

    // ==================== CHƯƠNG 4 ====================
    {
      id: "4.1.1",
      chapter: 4,
      code: "4.1.1",
      title: "Hệ đếm và Chuyển đổi giữa các hệ đếm",
      pdfPage: 100,
      printedPage: 99,
      linkedGroups: ["4.1", "4.2.1"],
      summary: "3 hệ đếm (10, 2, 16), Bảng quy đổi 4-bit Nhị phân – Hexa – Thập phân, công thức phần nguyên + phần lẻ, số thực không hữu hạn và Bảng đơn vị dữ liệu truyền thống vs IEC mới (KiB–EiB).",
      content: `
        <h4>1. Ba hệ đếm cơ bản trong máy tính</h4>
        <ul>
          <li><strong>Hệ thập phân (Decimal – Cơ số 10):</strong> Gồm 10 chữ số từ 0 đến 9. Dùng $n$ chữ số thập phân biểu diễn được $10^n$ giá trị khác nhau (từ $0$ đến $10^n - 1$).</li>
          <li><strong>Hệ nhị phân (Binary – Cơ số 2):</strong> Gồm 2 chữ số là <code>0</code> và <code>1</code> (mỗi chữ số nhị phân gọi là <strong>1 bit</strong> – đơn vị thông tin nhỏ nhất). Một nhóm 8 bit tạo thành 1 byte ($2^8 = 256$ giá trị). Dùng $n$ bit có thể biểu diễn được <strong>$2^n$ giá trị</strong> khác nhau.</li>
          <li><strong>Hệ mười sáu (Hexadecimal – Cơ số 16):</strong> Gồm 16 ký tự: <code>0–9</code> và <code>A (10), B (11), C (12), D (13), E (14), F (15)</code>. Hệ Hexa dùng để viết gọn cho số nhị phân: cứ <strong>1 nhóm 4-bit nhị phân</strong> (tính từ dấu phẩy sang hai bên) được thay bằng đúng <strong>1 chữ số Hexa</strong>.</li>
        </ul>

        <h4>Bảng quy đổi chuẩn giữa 4-bit Nhị phân, Hệ Hexa và Hệ Thập phân</h4>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Hệ 2</th><th>Hex</th><th>Hệ 10</th>
                <th>Hệ 2</th><th>Hex</th><th>Hệ 10</th>
                <th>Hệ 2</th><th>Hex</th><th>Hệ 10</th>
                <th>Hệ 2</th><th>Hex</th><th>Hệ 10</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>0000</code></td><td><code>0</code></td><td>0</td><td><code>0100</code></td><td><code>4</code></td><td>4</td><td><code>1000</code></td><td><code>8</code></td><td>8</td><td><code>1100</code></td><td><code>C</code></td><td>12</td></tr>
              <tr><td><code>0001</code></td><td><code>1</code></td><td>1</td><td><code>0101</code></td><td><code>5</code></td><td>5</td><td><code>1001</code></td><td><code>9</code></td><td>9</td><td><code>1101</code></td><td><code>D</code></td><td>13</td></tr>
              <tr><td><code>0010</code></td><td><code>2</code></td><td>2</td><td><code>0110</code></td><td><code>6</code></td><td>6</td><td><code>1010</code></td><td><code>A</code></td><td>10</td><td><code>1110</code></td><td><code>E</code></td><td>14</td></tr>
              <tr><td><code>0011</code></td><td><code>3</code></td><td>3</td><td><code>0111</code></td><td><code>7</code></td><td>7</td><td><code>1011</code></td><td><code>B</code></td><td>11</td><td><code>1111</code></td><td><code>F</code></td><td>15</td></tr>
            </tbody>
          </table>
        </div>

        <h4>2. Công thức giá trị và Quy tắc chuyển đổi giữa Hệ 10 và Hệ 2</h4>
        <p><strong>Dạng tổng quát của số nhị phân có cả phần nguyên và phần lẻ:</strong></p>
        <p>$$A = a_n a_{n-1}\\dots a_1 a_0 . a_{-1} a_{-2}\\dots a_{-m(2)} = \\sum_{i=-m}^{n} a_i \\times 2^i$$</p>
        <p>Trong đó các bit phần nguyên có trọng số là $2^0 = 1, 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16, 2^5 = 32, 2^6 = 64, 2^7 = 128\\dots$; các bit phần lẻ sau dấu phẩy có trọng số là:</p>
        <p>$$2^{-1} = 0.5 \\quad ; \\quad 2^{-2} = 0.25 \\quad ; \\quad 2^{-3} = 0.125 \\quad ; \\quad 2^{-4} = 0.0625 \\quad ; \\quad 2^{-5} = 0.03125$$</p>

        <ul>
          <li><strong>Chuyển đổi phần nguyên:</strong> Chia liên tiếp cho 2 rồi viết các số dư theo thứ tự <strong>ngược từ dưới lên</strong> (hoặc phân tích thành tổng các lũy thừa $2^i$ giảm dần: $128, 64, 32, 16, 8, 4, 2, 1$).</li>
          <li><strong>Chuyển đổi phần lẻ thập phân:</strong> Nhân liên tiếp phần lẻ với 2, lấy phần nguyên (<code>0</code> hoặc <code>1</code>) sau mỗi lần nhân viết theo thứ tự <strong>từ trên xuống dưới</strong>.</li>
        </ul>

        <div class="callout callout-trap">
          <div class="callout-title">⚠️ Số thực KHÔNG thể biểu diễn chính xác tuyệt đối trong hệ nhị phân</div>
          <p>Một số lẻ thập phân chỉ biểu diễn chính xác hữu hạn trong hệ nhị phân nếu phần lẻ của nó viết được dưới dạng phân số tối giản có mẫu số là <strong>lũy thừa của 2</strong> ($\\frac{k}{2^m}$, như $0.5 = \\frac{1}{2},\\; 0.25 = \\frac{1}{4},\\; 0.75 = \\frac{3}{4},\\; 0.125 = \\frac{1}{8},\\; 0.375 = \\frac{3}{8},\\; 0.625 = \\frac{5}{8}$). Các số như <strong>$0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9$</strong> khi nhân đôi liên tiếp sẽ lặp vô hạn tuần hoàn nên <strong>không thể biểu diễn chính xác tuyệt đối</strong> bằng số dấu phẩy động nhị phân.</p>
        </div>

        <h4>3. Bảng đơn vị dữ liệu: Quy ước truyền thống (KHMT) vs. Chuẩn IEC mới &amp; Thập phân SI</h4>
        <p>Trong máy tính, truyền thông và thiết bị lưu trữ có hai hệ bội số cần phân biệt rõ: hệ nhị phân (lũy thừa của $2^{10} = 1024$) và hệ thập phân SI (lũy thừa của $10^3 = 1000$):</p>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr><th>Bội số</th><th>Quy ước truyền thống (KHMT / RAM)</th><th>Chuẩn nhị phân IEC mới (Chính xác $2^{10k}$)</th><th>Chuẩn thập phân SI (Ổ đĩa / Mạng)</th></tr>
            </thead>
            <tbody>
              <tr><td>$10^3$ / $2^{10}$</td><td><code>1 KB</code> = $2^{10}$ B $= 1\\,024$ B</td><td><strong><code>1 KiB</code></strong> (Kibibyte) $= 2^{10}$ B</td><td><code>1 KB</code> = $10^3$ B $= 1\\,000$ B</td></tr>
              <tr><td>$10^6$ / $2^{20}$</td><td><code>1 MB</code> = $2^{20}$ B</td><td><strong><code>1 MiB</code></strong> (Mebibyte) $= 2^{20}$ B</td><td><code>1 MB</code> = $10^6$ B</td></tr>
              <tr><td>$10^9$ / $2^{30}$</td><td><code>1 GB</code> = $2^{30}$ B</td><td><strong><code>1 GiB</code></strong> (Gibibyte) $= 2^{30}$ B</td><td><code>1 GB</code> = $10^9$ B</td></tr>
              <tr><td>$10^{12}$ / $2^{40}$</td><td><code>1 TB</code> = $2^{40}$ B</td><td><strong><code>1 TiB</code></strong> (Tebibyte) $= 2^{40}$ B</td><td><code>1 TB</code> = $10^{12}$ B</td></tr>
              <tr><td>$10^{15}$ / $2^{50}$</td><td><code>1 PB</code> = $2^{50}$ B</td><td><strong><code>1 PiB</code></strong> (Pebibyte) $= 2^{50}$ B</td><td><code>1 PB</code> = $10^{15}$ B</td></tr>
              <tr><td>$10^{18}$ / $2^{60}$</td><td><code>1 EB</code> = $2^{60}$ B</td><td><strong><code>1 EiB</code></strong> (Exbibyte) $= 2^{60}$ B</td><td><code>1 EB</code> = $10^{18}$ B</td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 4.2.1: Hệ đếm &amp; Chuyển đổi cơ số</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Chuyển đổi số có cả phần nguyên và phần lẻ giữa hệ nhị phân (cơ số 2), thập phân (cơ số 10) và thập lục phân (cơ số 16); nhận diện số thực thập phân nào không thể biểu diễn hữu hạn trong hệ nhị phân; hoặc quy đổi đơn vị dữ liệu IEC/SI.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Chuyển Hệ 2 &rarr; Hệ 10):</strong> Tách tại dấu phẩy: các bit bên trái nhân trọng số tăng dần $2^0, 2^1, 2^2, \\dots$; các bit bên phải nhân trọng số giảm dần $2^{-1}=0.5,\\; 2^{-2}=0.25,\\; 2^{-3}=0.125,\\; 2^{-4}=0.0625,\\dots$ rồi cộng tổng lại.</li>
                <li><strong>Bước 2 (Chuyển Hệ 10 &rarr; Hệ 2):</strong> Phần nguyên chia liên tiếp cho 2 lấy phần dư viết <strong>ngược từ dưới lên</strong> (hoặc tách tổng các lũy thừa $2^i$); phần lẻ nhân liên tiếp với 2 lấy phần nguyên viết <strong>xuôi từ trên xuống</strong>.</li>
                <li><strong>Bước 3 (Chuyển Hệ 2 &harr; Hệ 16):</strong> Từ dấu phẩy gom từng cụm <strong>4 bit sang hai bên</strong> (bù thêm <code>0</code> nếu thiếu), tra bảng 4-bit ra 1 chữ số Hexa <code>0–F</code>.</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Khi kiểm tra một số thập phân có viết hữu hạn được ở nhị phân hay không, đổi phần lẻ về phân số tối giản $p/q$: nếu mẫu số $q$ có chứa ước nguyên tố khác $2$ (vd $0.1 = 1/10$, $0.3 = 3/10$, $0.6 = 3/5$) thì <strong>lặp vô hạn</strong>, không biểu diễn chính xác tuyệt đối được!</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="4.2.1">
          <span>📝 <strong>Nhóm 4.2.1: Hệ đếm &amp; Chuyển đổi cơ số (<span class="group-q-count">1 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.1', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.1', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "4.1.2",
      chapter: 4,
      code: "4.1.2",
      title: "Đại số Boolean, Cổng logic và Mạch số cơ bản",
      pdfPage: 101,
      printedPage: 100,
      linkedGroups: ["4.1", "4.2.2"],
      summary: "Ký hiệu 6 cổng logic chuẩn IEEE, định lý De Morgan, mạch tổ hợp (SOP, MUX 2-1/4-1/2^n-1, Decoder, Half/Full Adder, bộ cộng 4/32-bit) và mạch dãy (Flip-Flop S-R/J-K/D, thanh ghi song song & dịch).",
      content: `
        <h4>1. Các phép toán Đại số Boolean và Cổng logic cơ bản</h4>
        <ul>
          <li><strong>Ba phép toán cơ bản:</strong> NOT ($\\overline{A}$ hoặc $A'$), AND ($A \\cdot B$ hoặc $AB$), OR ($A + B$). Thứ tự ưu tiên: <strong>NOT &gt; AND &gt; OR</strong>.</li>
          <li><strong>Ba phép toán mở rộng:</strong>
            <ul>
              <li><strong>NAND (NOT-AND):</strong> $F = \\overline{A \\cdot B}$ (Chỉ bằng 0 khi cả $A = 1$ và $B = 1$).</li>
              <li><strong>NOR (NOT-OR):</strong> $F = \\overline{A + B}$ (Chỉ bằng 1 khi cả $A = 0$ và $B = 0$).</li>
              <li><strong>XOR (Exclusive-OR):</strong> $F = A \\oplus B = \\overline{A}B + A\\overline{B}$ (Bằng 1 khi hai đầu vào khác nhau; bằng 0 khi hai đầu vào giống nhau).</li>
            </ul>
          </li>
          <li><strong>Định lý De Morgan:</strong> $$\\overline{A \\cdot B} = \\overline{A} + \\overline{B} \\qquad \\text{và} \\qquad \\overline{A + B} = \\overline{A} \\cdot \\overline{B}$$</li>
        </ul>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 185" width="660" height="180" role="img" aria-label="Ký hiệu hình vẽ chuẩn của 6 cổng logic cơ bản: AND, OR, NOT, NAND, NOR, XOR">
            <!-- AND -->
            <g transform="translate(20, 12)">
              <text x="0" y="16" class="svg-mono">A</text><line x1="14" y1="12" x2="36" y2="12" class="svg-wire" />
              <text x="0" y="34" class="svg-mono">B</text><line x1="14" y1="30" x2="36" y2="30" class="svg-wire" />
              <path d="M 36 4 L 58 4 A 18 17 0 0 1 58 38 L 36 38 Z" class="svg-gate" />
              <line x1="76" y1="21" x2="100" y2="21" class="svg-wire" />
              <text x="106" y="25" class="svg-mono">F = AB</text>
              <text x="58" y="60" text-anchor="middle" class="svg-title">Cổng AND</text>
            </g>

            <!-- OR -->
            <g transform="translate(245, 12)">
              <text x="0" y="16" class="svg-mono">A</text><line x1="14" y1="12" x2="40" y2="12" class="svg-wire" />
              <text x="0" y="34" class="svg-mono">B</text><line x1="14" y1="30" x2="40" y2="30" class="svg-wire" />
              <path d="M 34 4 Q 56 4 78 21 Q 56 38 34 38 Q 46 21 34 4 Z" class="svg-gate" />
              <line x1="78" y1="21" x2="100" y2="21" class="svg-wire" />
              <text x="106" y="25" class="svg-mono">F = A + B</text>
              <text x="58" y="60" text-anchor="middle" class="svg-title">Cổng OR</text>
            </g>

            <!-- NOT -->
            <g transform="translate(475, 12)">
              <text x="0" y="25" class="svg-mono">A</text><line x1="14" y1="21" x2="36" y2="21" class="svg-wire" />
              <polygon points="36,5 36,37 68,21" class="svg-gate" />
              <circle cx="73" cy="21" r="4.5" class="svg-gate" />
              <line x1="78" y1="21" x2="100" y2="21" class="svg-wire" />
              <text x="106" y="25" class="svg-mono">F = Ā</text>
              <text x="58" y="60" text-anchor="middle" class="svg-title">Cổng NOT</text>
            </g>

            <!-- NAND -->
            <g transform="translate(20, 102)">
              <text x="0" y="16" class="svg-mono">A</text><line x1="14" y1="12" x2="36" y2="12" class="svg-wire" />
              <text x="0" y="34" class="svg-mono">B</text><line x1="14" y1="30" x2="36" y2="30" class="svg-wire" />
              <path d="M 36 4 L 58 4 A 18 17 0 0 1 58 38 L 36 38 Z" class="svg-gate" />
              <circle cx="81" cy="21" r="4.5" class="svg-gate" />
              <line x1="86" y1="21" x2="104" y2="21" class="svg-wire" />
              <text x="110" y="25" class="svg-mono">F = <tspan text-decoration="overline">AB</tspan></text>
              <text x="58" y="60" text-anchor="middle" class="svg-title">Cổng NAND</text>
            </g>

            <!-- NOR -->
            <g transform="translate(245, 102)">
              <text x="0" y="16" class="svg-mono">A</text><line x1="14" y1="12" x2="40" y2="12" class="svg-wire" />
              <text x="0" y="34" class="svg-mono">B</text><line x1="14" y1="30" x2="40" y2="30" class="svg-wire" />
              <path d="M 34 4 Q 56 4 76 21 Q 56 38 34 38 Q 46 21 34 4 Z" class="svg-gate" />
              <circle cx="81" cy="21" r="4.5" class="svg-gate" />
              <line x1="86" y1="21" x2="104" y2="21" class="svg-wire" />
              <text x="110" y="25" class="svg-mono">F = <tspan text-decoration="overline">A+B</tspan></text>
              <text x="58" y="60" text-anchor="middle" class="svg-title">Cổng NOR</text>
            </g>

            <!-- XOR -->
            <g transform="translate(475, 102)">
              <text x="0" y="16" class="svg-mono">A</text><line x1="14" y1="12" x2="36" y2="12" class="svg-wire" />
              <text x="0" y="34" class="svg-mono">B</text><line x1="14" y1="30" x2="36" y2="30" class="svg-wire" />
              <path d="M 29 4 Q 41 21 29 38" fill="none" class="svg-wire" />
              <path d="M 36 4 Q 58 4 80 21 Q 58 38 36 38 Q 48 21 36 4 Z" class="svg-gate" />
              <line x1="80" y1="21" x2="102" y2="21" class="svg-wire" />
              <text x="108" y="25" class="svg-mono">F = A ⊕ B</text>
              <text x="58" y="60" text-anchor="middle" class="svg-title">Cổng XOR</text>
            </g>
          </svg>
          <figcaption>Hình 4.1 – Ký hiệu hình vẽ chuẩn của 6 cổng logic cơ bản (KTMT_GK.pdf trang 101)</figcaption>
        </figure>

        <h4>2. Các mạch tổ hợp và mạch dãy cơ bản trong máy tính</h4>
        <ul>
          <li><strong>Mạch tổ hợp (Combinational Circuits – mạch không nhớ):</strong> Giá trị đầu ra chỉ phụ thuộc vào tổ hợp giá trị đầu vào tại thời điểm hiện tại. Quy trình thiết kế chuẩn: <em>Bảng chân lý (Truth Table) $\\rightarrow$ Biểu thức Boolean dạng Tổng các tích (SOP – Sum of Products) $\\rightarrow$ Sơ đồ cổng logic</em>. Các mạch tổ hợp trọng tâm:
            <ul>
              <li><strong>Bộ dồn kênh / Bộ chọn (MUX – Multiplexer):</strong> Có $2^n$ đường vào dữ liệu, $n$ bit đầu vào chọn ($S$) và 1 đầu ra $F$:
                <ul>
                  <li><em>MUX 2-1:</em> 2 đầu vào $(D_0, D_1)$, 1 bit chọn $S$: $$F = D_0 \\cdot \\overline{S} + D_1 \\cdot S$$</li>
                  <li><em>MUX 4-1:</em> 4 đầu vào $(D_0, D_1, D_2, D_3)$, 2 bit chọn $(S_1, S_0)$: $$F = D_0\\overline{S_1}\\,\\overline{S_0} + D_1\\overline{S_1}S_0 + D_2 S_1\\overline{S_0} + D_3 S_1 S_0$$</li>
                  <li><em>Tổng quát MUX $2^n$-to-1:</em> $2^n$ đầu vào dữ liệu, $n$ đầu vào chọn $S_{n-1}\\dots S_0$, 1 đầu ra.</li>
                </ul>
              </li>
              <li><strong>Bộ giải mã (Decoder $N$-to-$2^N$):</strong> Có $N$ đầu vào và $2^N$ đầu ra; với mỗi tổ hợp đầu vào chỉ có <strong>duy nhất 1 đầu ra tích cực</strong> bằng 1 (dùng để giải mã opcode hoặc chọn chip RAM <code>CS</code>). Ví dụ <em>Decoder 2-4</em> với $(A_1, A_0)$:
                $$Y_0 = \\overline{A_1}\\,\\overline{A_0},\\quad Y_1 = \\overline{A_1}A_0,\\quad Y_2 = A_1\\overline{A_0},\\quad Y_3 = A_1 A_0$$
              </li>
              <li><strong>Bộ cộng bán phần 1-bit (Half-Adder):</strong> Cộng 2 bit $A, B$ (chưa có nhớ vào):
                $$S = A \\oplus B \\qquad ; \\qquad C_{\\text{out}} = A \\cdot B$$
              </li>
              <li><strong>Bộ cộng toàn phần 1-bit (Full-Adder):</strong> Cộng 3 bit ($A, B$ và bit nhớ vào $C_{\\text{in}}$, hoặc ký hiệu là $C$) tạo ra bit tổng $S$ và bit nhớ ra $C_{\\text{out}}$:
                $$S = A \\oplus B \\oplus C_{\\text{in}} = \\overline{A}\\,\\overline{B}C_{\\text{in}} + \\overline{A}B\\overline{C_{\\text{in}}} + A\\overline{B}\\,\\overline{C_{\\text{in}}} + ABC_{\\text{in}} \\qquad ; \\qquad C_{\\text{out}} = AB + AC_{\\text{in}} + BC_{\\text{in}}$$
                <em>Quy tắc nhớ nhanh Full Adder:</em> Đếm số lượng bit 1 trong 3 đầu vào $(A, B, C_{\\text{in}})$: nếu có <strong>lẻ bit 1</strong> (1 hoặc 3 bit 1) thì $S = 1$, ngược lại $S = 0$; nếu có <strong>từ 2 bit 1 trở lên</strong> thì $C_{\\text{out}} = 1$, ngược lại $C_{\\text{out}} = 0$.
              </li>
              <li><strong>Bộ cộng nhiều bit (Bộ cộng 4-bit / 32-bit Ripple-Carry Adder):</strong> Ghép nối tiếp 4 (hoặc 32) bộ Full-Adder cạnh nhau, trong đó $C_{\\text{out}}$ của tầng bit thứ $i$ nối trực tiếp vào $C_{\\text{in}}$ của tầng bit thứ $i+1$. Khi thực hiện phép cộng đặt $C_0 = 0$; khi thực hiện phép trừ $X - Y = X + \\overline{Y} + 1$, đặt $C_0 = 1$ và đảo các bit của $Y$ qua cổng NOT!</li>
            </ul>
          </li>
          <li><strong>Mạch dãy (Sequential Circuits – mạch có nhớ):</strong> Đầu ra phụ thuộc cả đầu vào hiện tại lẫn trạng thái lưu trước đó (đồng bộ theo xung nhịp <strong>Clock</strong>). Các phần tử và khối mạch dãy cơ bản:
            <ul>
              <li><strong>Flip-Flop S-R (Set–Reset):</strong> $S=1, R=0 \\Rightarrow Q=1$; $S=0, R=1 \\Rightarrow Q=0$; $S=0, R=0 \\Rightarrow$ giữ trạng thái cũ; $S=1, R=1 \\Rightarrow$ <em>trạng thái cấm / không xác định</em>.</li>
              <li><strong>Flip-Flop J-K:</strong> Cải tiến từ S-R (loại bỏ trạng thái cấm): khi $J=1, K=1$ sẽ <strong>đảo trạng thái</strong> ($Q_{\\text{next}} = \\overline{Q}$).</li>
              <li><strong>Flip-Flop D (Data / Delay):</strong> Chỉ có 1 đầu vào dữ liệu $D$, lưu đúng giá trị $D$ vào ngõ ra $Q$ tại cạnh xung nhịp Clock ($Q_{\\text{next}} = D$) — là đơn vị nhớ 1-bit cấu tạo nên thanh ghi và SRAM.</li>
              <li><strong>Thanh ghi song song (Parallel Register):</strong> Ghép $n$ Flip-Flop D dùng chung một tín hiệu Clock để đọc/ghi đồng thời $n$ bit dữ liệu.</li>
              <li><strong>Thanh ghi dịch (Shift Register):</strong> Nối nối tiếp ngõ ra $Q_i$ vào ngõ vào $D_{i+1}$ để dịch chuỗi bit sang trái hoặc sang phải sau mỗi nhịp Clock (dùng trong bộ nhân/chia và giao tiếp nối tiếp).</li>
            </ul>
          </li>
        </ul>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 4.2.2: Cổng logic, Mạch tổ hợp &amp; Full Adder</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Nhận dạng ký hiệu hình vẽ của 6 cổng logic (<code>AND, OR, NOT, NAND, NOR, XOR</code>), rút gọn biểu thức Boolean từ sơ đồ mạch nhiều tầng về dạng SOP, hỏi phép toán của Half Adder, hoặc tính $(S, C_{\\text{out}})$ của Full Adder.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Nhận diện ký hiệu 6 cổng):</strong> Thân chữ D (một bên phẳng, một bên cong tròn) là <code>AND</code>; thân cong nhọn đầu mũi tên là <code>OR</code>; có thêm <strong>đường cong phụ tách rời ở phần đuôi</strong> là <code>XOR</code>; tam giác có vòng tròn nhỏ là <code>NOT</code>; có vòng tròn đảo ở đầu ra của AND/OR là <code>NAND / NOR</code>.</li>
                <li><strong>Bước 2 (Phân tích sơ đồ mạch tổ hợp):</strong> Đặt biến tại đầu vào, viết biểu thức đầu ra từng cổng từ trái sang phải, sau đó áp dụng luật De Morgan ($\\overline{A\\cdot B} = \\overline{A} + \\overline{B}$ và $\\overline{A + B} = \\overline{A}\\cdot \\overline{B}$) để đưa về dạng chuẩn tổng các tích (SOP).</li>
                <li><strong>Bước 3 (Tính nhanh Half Adder &amp; Full Adder):</strong> Half Adder gồm <code>XOR</code> (tính $S$) và <code>AND</code> (tính $C_{\\text{out}}$). Với Full Adder $(A, B, C_{\\text{in}})$, chỉ cần <strong>cộng số học 3 bit đầu vào</strong> (tổng từ $0$ đến $3$) rồi đổi sang nhị phân 2 bit $(C_{\\text{out}}\\; S)_2$ (vd $1 + 1 + 0 = 2 = 10_2 \\Rightarrow C_{\\text{out}} = 1, S = 0$; $1 + 1 + 1 = 3 = 11_2 \\Rightarrow C_{\\text{out}} = 1, S = 1$).</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Đừng nhầm lẫn thứ tự cặp $(S, C_{\\text{out}})$ với $(C_{\\text{out}}, S)$ khi chọn đáp án! Kiểm tra kỹ dấu đảo (vòng tròn nhỏ) trên hình vẽ cổng NAND / NOR / XOR để không đọc nhầm sang AND / OR.</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="4.2.2">
          <span>📝 <strong>Nhóm 4.2.2: Cổng logic, Mạch tổ hợp &amp; Full Adder (<span class="group-q-count">5 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.2', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.2', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "4.1.3",
      chapter: 4,
      code: "4.1.3",
      title: "Biểu diễn Số nguyên không dấu và Số nguyên có dấu (Mã bù 2)",
      pdfPage: 102,
      printedPage: 101,
      linkedGroups: ["4.1", "4.2.3"],
      summary: "Dải không dấu [0, 2^n - 1], Mã bù 2 [-2^{n-1}, 2^{n-1} - 1], Trục tròn số học, Sign/Zero-extension, lệnh so sánh có dấu/không dấu và 3 mẹo tính nhẩm Hexa.",
      content: `
        <h4>1. Biểu diễn số nguyên không dấu (Unsigned Integer) với $n$ bit</h4>
        <ul>
          <li>Tất cả $n$ bit ($a_{n-1}a_{n-2}\\dots a_1 a_0$) đều dùng để biểu diễn độ lớn: $A = \\sum_{i=0}^{n-1} a_i 2^i$.</li>
          <li><strong>Dải biểu diễn của số nguyên không dấu $n$ bit:</strong> Từ $0$ đến $2^n - 1$.
            <br/><em>Ví dụ:</em> Với 8 bit: $[0, 255]$; với 9 bit: $[0, 511]$; với 10 bit: $[0, 1023]$; với 16 bit: $[0, 65\\,535]$.
          </li>
          <li><strong>Bài toán ngược:</strong> Để đếm hoặc mã hóa $M$ đối tượng không âm (ví dụ đếm $M$ sinh viên hoặc $M$ chỗ ngồi), số bit tối thiểu $n$ cần dùng phải thỏa mãn <strong>$2^n \\ge M$</strong> (hoặc $2^n - 1 \\ge M$ nếu tính cả giá trị 0).</li>
        </ul>

        <h4>2. Biểu diễn số nguyên có dấu (Signed Integer) theo Mã bù hai (Two's Complement)</h4>
        <p>Trong máy tính, số nguyên có dấu $n$ bit ($A = a_{n-1}a_{n-2}\\dots a_1 a_0$) được biểu diễn theo <strong>Mã bù hai</strong>. Bit ngoài cùng bên trái ($a_{n-1}$) là bit dấu (Sign bit):</p>
        <ul>
          <li>Nếu $a_{n-1} = 0$: $A$ là số không âm ($\\ge 0$). Giá trị tính như số không dấu: $A = \\sum_{i=0}^{n-2} a_i 2^i$.</li>
          <li>Nếu $a_{n-1} = 1$: $A$ là số nguyên âm ($&lt; 0$).</li>
        </ul>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức tổng quát và Phép đảo dấu Mã bù hai</div>
          <p>$$A = -a_{n-1} 2^{n-1} + \\sum_{i=0}^{n-2} a_i 2^i \\qquad ; \\qquad \\text{Dải biểu diễn } n\\text{-bit: } [-2^{n-1},\\; +(2^{n-1} - 1)]$$</p>
          <p><strong>Quy tắc tìm Mã bù một và Mã bù hai (Phép đảo dấu số nguyên):</strong></p>
          <ol>
            <li><strong>Bước 1 (Tìm số bù một):</strong> Đảo giá trị tất cả các bit của số ban đầu (<code>0 → 1</code> và <code>1 → 0</code>).</li>
            <li><strong>Bước 2 (Tìm số bù hai):</strong> Lấy số bù một cộng thêm 1 ở bit cuối cùng bên phải:
              $$\\text{Số bù hai của } A = (\\text{Số bù một của } A) + 1 = 2^n - A = -A$$
            </li>
          </ol>
          <p><strong>Quy tắc mở rộng bit cho số nguyên (Sign-extension vs. Zero-extension):</strong></p>
          <ul>
            <li><strong>Mở rộng không dấu (Zero-extended):</strong> Luôn thêm các bit <code>0</code> vào bên trái.</li>
            <li><strong>Mở rộng có dấu (Sign-extended):</strong> Giữ nguyên giá trị của bit dấu đẩy sang toàn bộ các bit mới ở bên trái (số dương thêm toàn bit <code>0</code> tức chữ Hexa <code>0</code>; số âm thêm toàn bit <code>1</code> tức chữ Hexa <code>F</code>).</li>
          </ul>
        </div>

        <h4>Bảng dải biểu diễn của Số nguyên có dấu và Mẹo tính nhẩm nhanh</h4>
        <div class="table-scroll">
          <table class="theory-table">
            <thead><tr><th>Số lượng bit ($n$)</th><th>Dải giá trị thập phân</th><th>Số âm nhỏ nhất</th><th>Số dương lớn nhất</th></tr></thead>
            <tbody>
              <tr><td>6 bit</td><td>$[-32, +31]$</td><td><code>100000</code><sub>(2)</sub> ($-32$)</td><td><code>011111</code><sub>(2)</sub> ($+31$)</td></tr>
              <tr><td>8 bit (<code>char</code>)</td><td>$[-128, +127]$</td><td><code>0x80</code> ($-128$)</td><td><code>0x7F</code> ($+127$)</td></tr>
              <tr><td>9 bit</td><td>$[-256, +255]$</td><td><code>1 0000 0000</code><sub>(2)</sub> ($-256$)</td><td><code>0 1111 1111</code><sub>(2)</sub> ($+255$)</td></tr>
              <tr><td>12 bit (<code>imm</code>)</td><td>$[-2048, +2047]$</td><td><code>0x800</code> ($-2048$)</td><td><code>0x7FF</code> ($+2047$)</td></tr>
              <tr><td>16 bit (<code>short</code>)</td><td>$[-32\\,768, +32\\,767]$</td><td><code>0x8000</code> ($-32\\,768$)</td><td><code>0x7FFF</code> ($+32\\,767$)</td></tr>
              <tr><td>32 bit (<code>int</code>)</td><td>$[-2^{31}, +2^{31}-1]$</td><td><code>0x80000000</code></td><td><code>0x7FFFFFFF</code></td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Ba quy tắc tính nhẩm nhanh số bù hai trong phòng thi</div>
          <ol>
            <li><strong>Với số 8-bit có dấu ($a_7 a_6 a_5 a_4 a_3 a_2 a_1 a_0$):</strong> Bit đầu $a_7$ mang giá trị $-128$, các bit còn lại mang giá trị dương $+64, +32, +16, +8, +4, +2, +1$.
              <br/><em>Ví dụ:</em> <code>0x8E</code> $= 1000\\,1110_2 = -128 + 8 + 4 + 2 = -114$.
            </li>
            <li><strong>Với các số Hexa có dạng toàn chữ <code>F</code> ở đầu (như <code>0xFFFFFFF3</code> hoặc <code>0xFFA</code>):</strong> Vì <code>0xFFFFFFFF = -1</code>, nên nếu tất cả các chữ số phía trước đều là <code>F</code>, chỉ cần lấy chữ số Hexa cuối cùng trừ đi 16:
              <br/><em>Ví dụ:</em> <code>0xFFFFFFF3</code> $\\Longrightarrow 3 - 16 = -13$; <code>0xFFA</code> $\\Longrightarrow 10 - 16 = -6$.
            </li>
            <li><strong>So sánh nhanh các số nguyên có dấu viết ở dạng Hexa:</strong>
              <ul>
                <li>Chữ số Hexa đầu tiên từ <code>0</code> đến <code>7</code>: Bit dấu bằng 0 $\\Longrightarrow$ Số dương (hoặc 0).</li>
                <li>Chữ số Hexa đầu tiên từ <code>8</code> đến <code>F</code>: Bit dấu bằng 1 $\\Longrightarrow$ Số âm (luôn nhỏ hơn mọi số dương).</li>
              </ul>
            </li>
          </ol>
        </div>

        <h4>3. Trục tròn số học máy tính và Lệnh so sánh trong RISC-V</h4>
        <ul>
          <li><strong>Trục tròn số học $n$-bit (Modular Arithmetic):</strong> Vì thanh ghi có độ rộng cố định $n$ bit, tất cả $2^n$ tổ hợp bit tạo thành một vòng tròn khép kín theo modulo $2^n$:
            <ul>
              <li>Với <strong>số nguyên không dấu</strong>: giá trị tăng theo chiều kim đồng hồ từ $0$ đến $2^n - 1$; khi cộng vượt qua ranh giới $2^n - 1 \\to 0$ sẽ quay vòng và phát sinh cờ nhớ $C_{\\text{out}} = 1$.</li>
              <li>Với <strong>số nguyên có dấu mã bù hai</strong>: nửa vòng đầu ($0 \\dots +(2^{n-1}-1)$) có bit dấu <code>0</code>; nửa vòng còn lại ($-2^{n-1} \\dots -1$) có bit dấu <code>1</code>. Chỉ có <strong>duy nhất một giá trị $0$</strong>, và hai số đối nhau $A, -A$ cộng lại bằng $2^n \\equiv 0 \\pmod{2^n}$. Vượt qua ranh giới giữa $+(2^{n-1}-1)$ và $-2^{n-1}$ chính là hiện tượng <strong>Tràn số học (Overflow)</strong>.</li>
            </ul>
          </li>
          <li><strong>Lệnh so sánh trong RISC-V:</strong> Phân biệt cặp lệnh <strong>có dấu</strong> (<code>slt, slti, blt, bge</code>) với cặp lệnh <strong>không dấu</strong> (<code>sltu, sltiu, bltu, bgeu</code>) để tránh đọc nhầm các số Hexa có bit dấu bằng 1 (<code>0x80000000–0xFFFFFFFF</code>).</li>
        </ul>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 4.2.3: Biểu diễn Số nguyên &amp; Mã bù hai</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Xác định dải biểu diễn hoặc giá trị lớn nhất/nhỏ nhất của $n$ bit (có dấu/không dấu), tìm số bit tối thiểu $n$ để biểu diễn $M$ đối tượng, đổi qua lại giữa số thập phân âm và mã bù 2 (nhị phân/Hexa), mở rộng dấu, hoặc sắp xếp dãy số nguyên 8-bit/16-bit/32-bit theo thứ tự tăng/giảm.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Dải biểu diễn &amp; Số bit tối thiểu $n$):</strong>
                  <ul>
                    <li>Không dấu $n$ bit: $[0,\\; 2^n - 1]$; chứa $M$ đối tượng dùng $2^n \\ge M$ (nếu chứa cả giá trị từ $0$ đến $M$ thì $2^n - 1 \\ge M$).</li>
                    <li>Có dấu mã bù 2 $n$ bit: $[-2^{n-1},\\; +(2^{n-1} - 1)]$; chứa $[-K, +K]$ chọn $n$ nhỏ nhất thỏa $2^{n-1} - 1 \\ge K$.</li>
                  </ul>
                </li>
                <li><strong>Bước 2 (Tìm mã bù 2 &amp; Tính nhẩm nhanh số âm):</strong> Để đổi dấu số nhị phân, đi từ <strong>phải sang trái</strong>: giữ nguyên các bit 0 tận cùng và bit 1 đầu tiên gặp, rồi đảo ngược toàn bộ các bit bên trái. Với byte 8-bit có dấu: trọng số bit đầu là $-128$, 7 bit sau cộng dương ($+64, +32, +16, +8, +4, +2, +1$). Với Hexa đầu toàn chữ <code>F</code>: lấy chữ cuối trừ $16$ (vd <code>0xFFFFFFF3</code> $\\rightarrow 3 - 16 = -13$).</li>
                <li><strong>Bước 3 (Sắp xếp dãy số Hexa):</strong> Nếu là <strong>không dấu</strong>, so sánh từ trái sang phải như bình thường. Nếu là <strong>có dấu</strong>, tách thành 2 nhóm: nhóm đầu <code>8–F</code> (số âm — đặt nhỏ hơn mọi số đầu <code>0–7</code>!) và nhóm đầu <code>0–7</code> (số dương); trong nội bộ nhóm âm, giá trị Hexa càng nhỏ thì số âm càng sâu (<code>0x80 = -128 &lt; 0xFF = -1</code>)!</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Đọc kỹ đề hỏi <strong>có dấu</strong> hay <strong>không dấu</strong> và <strong>tăng dần</strong> hay <strong>giảm dần</strong>! Đừng quên quy tắc $2^n - 1$ (vd 9 bit không dấu lớn nhất là $511$, có dấu là $[-256, +255]$).</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="4.2.3">
          <span>📝 <strong>Nhóm 4.2.3: Biểu diễn Số nguyên &amp; Mã bù hai (<span class="group-q-count">29 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.3', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.3', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "4.1.4",
      chapter: 4,
      code: "4.1.4",
      title: "Cộng / Trừ / Nhân / Chia số nguyên và Hiện tượng Tràn số học (Overflow)",
      pdfPage: 104,
      printedPage: 103,
      linkedGroups: ["4.1", "4.2.4", "4.2.5"],
      summary: "Tràn nhớ (Cout) vs Tràn số học (Overflow), bài toán char & add 32-bit, thuật toán nhân/chia không dấu & có dấu và Bảng RV32M (Table B.5: mul/mulh/div/rem).",
      content: `
        <h4>1. Cộng số nguyên không dấu và Tràn nhớ (Carry Out)</h4>
        <p>Khi cộng hai số nguyên không dấu $n$ bit, nếu tổng vượt quá $2^n - 1$ thì phát sinh bit nhớ ra ngoài cùng $C_{\\text{out}} = 1$, làm kết quả $n$ bit bị sai (gọi là <strong>tràn nhớ</strong>). Nếu $C_{\\text{out}} = 0$ thì kết quả đúng.</p>

        <h4>2. Cộng/Trừ số nguyên có dấu và Hiện tượng Tràn số học (Overflow)</h4>
        <ul>
          <li>Phép trừ hai số nguyên được phần cứng đưa về phép cộng thông qua lấy bù hai: $$X - Y = X + (-Y) = X + \\overline{Y} + 1$$</li>
          <li>Khi cộng hai số nguyên có dấu $n$ bit, kết quả đúng hay sai <strong>không phụ thuộc vào bit nhớ $C_{\\text{out}}$</strong>:
            <ul>
              <li><strong>Khi cộng hai số nguyên trái dấu nhau:</strong> Kết quả <strong>luôn luôn đúng</strong> (không bao giờ xảy ra tràn số học).</li>
              <li><strong>Khi cộng hai số nguyên cùng dấu nhau:</strong> Nếu bit dấu của kết quả giống với bit dấu của hai số hạng ban đầu thì kết quả đúng. Nếu bit dấu của kết quả <strong>ngược lại</strong> với bit dấu của hai số hạng ban đầu (<em>Cộng hai số dương ra số âm, hoặc Cộng hai số âm ra số dương</em>) thì xảy ra <strong>Tràn số học (Overflow)</strong> và kết quả bị sai!</li>
            </ul>
          </li>
        </ul>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Hai dạng bài toán Tràn số học (Overflow) trọng tâm trong đề thi</div>
          <ul>
            <li><strong>Dạng 1: Tính giá trị hiển thị khi cộng hai biến <code>char</code> (8-bit có dấu) bị tràn</strong>
              <br/>Biến kiểu <code>char</code> (hoặc <code>int8_t</code>) có dải giá trị $[-128, +127]$. Tính tổng toán học thông thường $S = x + y$:
              <ul>
                <li>Nếu $S \\in [-128, +127]$: Không tràn, kết quả chính là $S$.</li>
                <li>Nếu $S &gt; +127$ (tràn dương): Lấy $S - 256$ (<em>Ví dụ: $85 + 52 = 137 &gt; 127 \\Longrightarrow 137 - 256 = -119$</em>).</li>
                <li>Nếu $S &lt; -128$ (tràn âm): Lấy $S + 256$ (<em>Ví dụ: $(-91) + (-67) = -158 &lt; -128 \\Longrightarrow -158 + 256 = +98$</em>).</li>
              </ul>
            </li>
            <li><strong>Dạng 2: Tìm phạm vi của thanh ghi thứ hai gây tràn khi thực hiện lệnh <code>add rd, rs1, rs2</code></strong>
              <br/>Giả sử thanh ghi thứ nhất đang giữ một số nguyên dương $K &gt; 0$ (ví dụ $K = 512 = \\text{0x200}$ hoặc $K = 1024 = \\text{0x400}$). Vì $K &gt; 0$, phép cộng 32-bit <code>add</code> chỉ bị tràn khi thanh ghi thứ hai cũng là một số dương lớn sao cho tổng vượt quá số dương lớn nhất 32-bit là $\\text{MAX} = \\text{0x7FFFFFFF}$:
              $$K + rs2 &gt; \\text{0x7FFFFFFF} \\iff rs2 \\ge \\text{0x80000000} - K$$
              Vậy phạm vi của thanh ghi thứ hai gây tràn luôn là: <strong>Từ $(\\text{0x80000000} - K)$ đến $\\text{0x7FFFFFFF}$</strong>.
              <br/><em>Lưu ý: Điểm kết thúc luôn là <code>0x7FFFFFFF</code>, không bao giờ chọn đáp án kết thúc bởi <code>0x80000000</code> vì <code>0x80000000</code> là số âm $-2^{31}$, cộng với số dương $K$ là hai số trái dấu nên không bao giờ tràn!</em>
            </li>
          </ul>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 4.2.4: Cộng/Trừ số nguyên &amp; Hiện tượng Tràn số học (Overflow)</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Kiểm tra bit $C_{\\text{out}}$ của phép cộng không dấu, nhận diện cặp số 8-bit/32-bit có dấu gây tràn (Overflow), tính giá trị thực sự hiển thị của biến <code>char</code> (8-bit có dấu) sau phép cộng tràn, hoặc tìm dải giá trị thanh ghi thứ hai gây tràn trong lệnh <code>add</code> 32-bit.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Phân biệt Tràn nhớ $C_{\\text{out}}$ vs Tràn số học Overflow):</strong>
                  <ul>
                    <li><em>Không dấu $n$-bit:</em> Cộng lấy đúng $n$ bit cuối; nếu có bit nhớ $C_{\\text{out}} = 1$ thì kết quả $n$-bit bị sai (tràn nhớ).</li>
                    <li><em>Có dấu $n$-bit (bỏ qua $C_{\\text{out}}$!):</em> Hai số <strong>trái dấu</strong> cộng nhau <strong>KHÔNG BAO GIỜ tràn</strong>. Hai số <strong>cùng dấu</strong> cộng nhau chỉ tràn khi dấu kết quả <strong>ngược lại</strong> (dương + dương = âm; âm + âm = dương). Với phép trừ $X - Y = X + (-Y)$, kiểm tra tràn tương đương phép cộng $X$ và $(-Y)$ (trừ 2 số cùng dấu không bao giờ tràn!).</li>
                  </ul>
                </li>
                <li><strong>Bước 2 (Tính giá trị tràn cho biến <code>char</code> 8-bit):</strong> Cộng bình thường ra $S = x + y$: nếu $S &gt; 127$ thì lấy $S - 256$; nếu $S &lt; -128$ thì lấy $S + 256$.</li>
                <li><strong>Bước 3 (Tìm dải giá trị gây tràn cho <code>add rd, rs1, rs2</code> khi biết $rs1 = K &gt; 0$):</strong> Tràn dương xảy ra khi $rs2 &gt; 0$ và $K + rs2 &gt; \\text{0x7FFFFFFF}$ $\\iff rs2 \\in [\\text{0x80000000} - K,\\; \\text{0x7FFFFFFF}]$. (Nếu $rs1 = -K &lt; 0$, tràn âm xảy ra khi $rs2 \\in [\\text{0x80000000},\\; \\text{0x7FFFFFFF} - K + 1]$).</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Tuyệt đối không dùng cờ $C_{\\text{out}}$ để kết luận tràn số có dấu! Với dải gây tràn của số dương $K &gt; 0$, cận trên luôn là <code>0x7FFFFFFF</code> (KHÔNG bao giờ là <code>0x80000000</code> vì <code>0x80000000</code> là số âm $-2^{31}$!).</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="4.2.4">
          <span>📝 <strong>Nhóm 4.2.4: Bài tập Cộng/Trừ &amp; Tràn số học Overflow (<span class="group-q-count">15 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.4', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.4', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <h4>3. Thuật toán Nhân/Chia số nguyên và Tập lệnh RV32M (Table B.5)</h4>
        <ul>
          <li><strong>Phép nhân số nguyên (tích $n$-bit $\\times$ $n$-bit $\\rightarrow$ $2n$-bit):</strong> Vì thanh ghi tích rộng $2n$ bit (vd 32-bit $\\times$ 32-bit cho tích 64-bit), phép nhân hai số nguyên $n$-bit <strong>không bao giờ bị tràn số học</strong> trong kết quả $2n$-bit:
            <ul>
              <li><strong>Thuật toán nhân không dấu (Bộ nhân dùng thanh ghi <code>C, A, Q</code> và số bị nhân <code>M</code>):</strong> Khởi tạo $A = 0, C = 0$, $Q$ = số nhân. Lặp $n$ bước: nếu bit thấp nhất $Q_0 == 1$ thì thực hiện $A \\leftarrow A + M$ (có nhớ vào $C$); sau đó dịch phải toàn bộ cụm $(C, A, Q)$ đi 1 bit. Kết quả $2n$-bit nằm ở cặp thanh ghi $(A, Q)$.</li>
              <li><strong>Nhân có dấu:</strong> Cách chuẩn là đưa hai thừa số về dạng dương (lấy bù 2 nếu âm), thực hiện nhân không dấu, rồi hiệu chỉnh dấu tích $2n$-bit (cùng dấu $\\rightarrow$ dương; khác dấu $\\rightarrow$ lấy bù 2 sang âm); hoặc dùng <strong>Thuật toán Booth</strong> nhân trực tiếp số bù 2 theo cặp bit $(Q_0, Q_{-1})$.</li>
            </ul>
          </li>
          <li><strong>Phép chia số nguyên:</strong>
            <ul>
              <li><strong>Thuật toán chia không dấu (Khôi phục – Restoring Division với <code>A, Q, M</code>):</strong> Khởi tạo $A = 0$, $Q$ = số bị chia, $M$ = số chia. Lặp $n$ bước: dịch trái cụm $(A, Q)$ đi 1 bit $\\rightarrow$ trừ $A \\leftarrow A - M$. Nếu $A &lt; 0$ thì đặt $Q_0 = 0$ và <strong>khôi phục</strong> $A \\leftarrow A + M$; ngược lại ($A \\ge 0$) đặt $Q_0 = 1$. Sau $n$ bước: <strong>Thương</strong> nằm ở thanh ghi <code>Q</code> và <strong>Số dư</strong> nằm ở thanh ghi <code>A</code>.</li>
              <li><strong>Chia số nguyên có dấu &amp; Quy tắc dấu thương / số dư:</strong> Đưa cả hai số về dương, chia không dấu tìm trị tuyệt đối thương $|q|$ và số dư $|r|$, rồi hiệu chỉnh dấu sao cho thỏa mãn đồng nhất thức:
                $$\\text{Số bị chia} = (\\text{Số chia} \\times \\text{Thương}) + \\text{Số dư} \\qquad (|\\text{Số dư}| &lt; |\\text{Số chia}|)$$
                <ul>
                  <li><strong>Dấu của Thương:</strong> Hai số cùng dấu $\\rightarrow$ thương dương ($+$); khác dấu $\\rightarrow$ thương âm ($-$).</li>
                  <li><strong>Dấu của Số dư:</strong> Số dư <strong>luôn luôn cùng dấu với SỐ BỊ CHIA</strong> (bất kể số chia âm hay dương!).</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <p><strong>Bảng các lệnh Nhân / Chia mở rộng RV32M của RISC-V (Table B.5):</strong></p>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr><th>Lệnh RV32M</th><th>Kiểu toán hạng</th><th>Kết quả lưu vào thanh ghi đích <code>rd</code></th></tr>
            </thead>
            <tbody>
              <tr><td><code>mul rd, rs1, rs2</code></td><td>Có dấu / Không dấu</td><td>Lấy <strong>32 bit thấp</strong> của tích 64-bit: <code>(rs1 * rs2)[31:0]</code></td></tr>
              <tr><td><code>mulh rd, rs1, rs2</code></td><td><code>rs1</code> có dấu $\\times$ <code>rs2</code> có dấu</td><td>Lấy <strong>32 bit cao</strong> của tích 64-bit: <code>(rs1 * rs2)[63:32]</code></td></tr>
              <tr><td><code>mulhu rd, rs1, rs2</code></td><td><code>rs1</code> không dấu $\\times$ <code>rs2</code> không dấu</td><td>Lấy <strong>32 bit cao</strong> của tích 64-bit: <code>(rs1 * rs2)[63:32]</code></td></tr>
              <tr><td><code>mulhsu rd, rs1, rs2</code></td><td><code>rs1</code> có dấu $\\times$ <code>rs2</code> không dấu</td><td>Lấy <strong>32 bit cao</strong> của tích 64-bit: <code>(rs1 * rs2)[63:32]</code></td></tr>
              <tr><td><code>div rd, rs1, rs2</code> / <code>divu</code></td><td>Có dấu / Không dấu</td><td>Thương nguyên của phép chia <code>rs1 / rs2</code></td></tr>
              <tr><td><code>rem rd, rs1, rs2</code> / <code>remu</code></td><td>Có dấu / Không dấu</td><td>Phần dư của phép chia <code>rs1 % rs2</code> (<code>rem</code> luôn cùng dấu <code>rs1</code>)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 4.2.5: Lệnh Nhân/Chia số nguyên RV32M (<code>mul, div, rem</code>)</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Xác định giá trị thanh ghi đích sau các lệnh chia/lấy dư <code>div, divu, rem, remu</code> (đặc biệt với số bị chia hoặc số chia âm) hoặc hỏi chức năng của các lệnh nhân 64-bit <code>mul, mulh, mulhu, mulhsu</code>.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Chia lấy thương &amp; dư theo trị tuyệt đối):</strong> Tính phần nguyên $|q| = \\lfloor |a| / |b| \\rfloor$ và phần dư $|r| = |a| - |b|\\cdot |q|$.</li>
                <li><strong>Bước 2 (Áp dụng quy tắc dấu cho <code>div</code> và <code>rem</code>):</strong> Nếu <code>a</code> và <code>b</code> cùng dấu thì $q = +|q|$, khác dấu thì $q = -|q|$. Còn dấu của số dư $r$ trong <code>rem</code> <strong>bắt buộc lấy theo dấu của SỐ BỊ CHIA $a$</strong> (<code>rs1</code>). Kiểm tra lại: $b \\times q + r$ có đúng bằng $a$ không! (Ví dụ: $(-17) \\div 3 \\Rightarrow q = -5,\\; r = -2$; còn $17 \\div (-3) \\Rightarrow q = -5,\\; r = +2$).</li>
                <li><strong>Bước 3 (Phân biệt nhóm nhân RV32M):</strong> <code>mul</code> luôn lấy 32 bit thấp (dùng chung cho cả có dấu &amp; không dấu); muốn lấy 32 bit cao thì kiểm tra đúng hậu tố <code>h</code> (signed $\\times$ signed), <code>hu</code> (unsigned $\\times$ unsigned), hoặc <code>hsu</code> (<code>rs1</code> signed $\\times$ <code>rs2</code> unsigned).</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Sai lầm hay gặp nhất là gán dấu của số dư <code>rem</code> theo số chia hoặc luôn để số dư dương — nhớ kỹ <strong>số dư luôn cùng dấu với SỐ BỊ CHIA <code>rs1</code></strong>!</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="4.2.5">
          <span>📝 <strong>Nhóm 4.2.5: Lệnh Chia &amp; Lấy dư số nguyên div/rem (<span class="group-q-count">1 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.5', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.5', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "4.1.5",
      chapter: 4,
      code: "4.1.5",
      title: "Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)",
      pdfPage: 106,
      printedPage: 105,
      linkedGroups: ["4.1", "4.2.6"],
      summary: "Chuẩn IEEE 754-2008 (Binary32, Binary64, Binary128), công thức (-1)^S*(1.m)*2^(e-127), giá trị đặc biệt & NaN, 4 khả năng tràn, lưu đồ + Guard bits và Bảng lệnh FP (Table B.3).",
      content: `
        <h4>1. Dạng tổng quát và Bảng chuẩn IEEE 754-2008 (8-bit, 16-bit, 32-bit, 64-bit, 128-bit)</h4>
        <p>Tổng quát một số dấu phẩy động được biểu diễn dạng $X = \\pm M \\times R^E$. Chuẩn <strong>IEEE 754-2008</strong> sử dụng cơ số $R = 2$ với 3 trường bit <code>[S | e | m]</code> (trong đó $\\text{Bias} = 2^{k-1} - 1$ với $k$ là số bit của trường mũ $e$):</p>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr><th>Định dạng IEEE 754-2008</th><th>Tổng bit</th><th>S (Dấu)</th><th>e (Mũ lệch)</th><th>Bias</th><th>m (Định trị)</th><th>Dải giá trị chuẩn hóa (xấp xỉ)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>8-bit (Minifloat 1-4-3)</strong></td><td>8 bit</td><td>1 bit</td><td>4 bit</td><td>$7$</td><td>3 bit</td><td>Dạng thu gọn minh họa ($1-4-3$)</td></tr>
              <tr><td><strong>Binary16 (Half Precision)</strong></td><td>16 bit</td><td>1 bit</td><td>5 bit</td><td>$15$</td><td>10 bit</td><td>$6.1 \\times 10^{-5} \\dots 6.55 \\times 10^{4}$</td></tr>
              <tr><td><strong>Binary32 (Single / <code>float</code>)</strong></td><td>32 bit</td><td>1 bit</td><td>8 bit</td><td>$127$</td><td>23 bit</td><td><strong>$2^{-126} \\dots (2^{128} - 2^{104})$</strong> ($\\approx 10^{-38} \\dots 10^{+38}$)</td></tr>
              <tr><td><strong>Binary64 (Double / <code>double</code>)</strong></td><td>64 bit</td><td>1 bit</td><td>11 bit</td><td>$1023$</td><td>52 bit</td><td>$\\approx 2.2 \\times 10^{-308} \\dots 1.8 \\times 10^{+308}$</td></tr>
              <tr><td><strong>Binary128 (Quad Precision)</strong></td><td>128 bit</td><td>1 bit</td><td>15 bit</td><td>$16\\,383$</td><td>112 bit</td><td>$\\approx 3.36 \\times 10^{-4932} \\dots 1.18 \\times 10^{+4932}$</td></tr>
            </tbody>
          </table>
        </div>

        <p>Một số thực dấu phẩy động chuẩn hóa 32-bit (<strong>Binary32</strong>) gồm <strong>3 trường từ trái sang phải (1 bit – 8 bit – 23 bit)</strong>:</p>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 96" width="660" height="94" role="img" aria-label="Cấu trúc 32-bit chuẩn IEEE 754 Single Precision (1-8-23)">
            <text x="48" y="18" text-anchor="middle" class="svg-mono-muted">Bit 31</text>
            <text x="155" y="18" text-anchor="middle" class="svg-mono-muted">Bit 30 .. 23</text>
            <text x="445" y="18" text-anchor="middle" class="svg-mono-muted">Bit 22 .. 0</text>

            <rect x="20" y="26" width="56" height="44" rx="4" class="svg-box-warn" />
            <text x="48" y="47" text-anchor="middle" class="svg-title">S (1b)</text>
            <text x="48" y="63" text-anchor="middle" class="svg-sub">Dấu</text>

            <rect x="80" y="26" width="150" height="44" rx="4" class="svg-box-primary" />
            <text x="155" y="47" text-anchor="middle" class="svg-title-primary">e = E + 127 (8b)</text>
            <text x="155" y="63" text-anchor="middle" class="svg-sub-primary">Mũ lệch (Bias 127)</text>

            <rect x="234" y="26" width="426" height="44" rx="4" class="svg-box-accent" />
            <text x="447" y="47" text-anchor="middle" class="svg-title">m — Phần lẻ định trị (23 bit)</text>
            <text x="447" y="63" text-anchor="middle" class="svg-sub">Bit "1." trước dấu phẩy được ẩn (implied bit = 1)</text>
          </svg>
          <figcaption>Hình 4.2 – Bố cục 3 trường bit chuẩn IEEE 754 Binary32 (KTMT_GK.pdf trang 106)</figcaption>
        </figure>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức xác định giá trị số thực $X$ ở trạng thái chuẩn hóa ($0 &lt; e &lt; 255$)</div>
          <p>$$X = (-1)^S \\times (1.m)_{(2)} \\times 2^{e - 127}$$</p>
          <ul>
            <li><strong>Bit dấu $S$:</strong> Nếu $S = 0$ thì $X &gt; 0$ (số dương); nếu $S = 1$ thì $X &lt; 0$ (số âm).</li>
            <li><strong>Số mũ thực $E$:</strong> $E = e - 127 \\iff e = E + 127$ (số $127$ là hằng số độ lệch <strong>Bias</strong> của dạng 32-bit).</li>
            <li><strong>Phần định trị $M = (1.m)_{(2)}$:</strong> Bit $1.$ trước dấu phẩy được ẩn đi (<em>implied bit</em>) để tiết kiệm 1 bit lưu trữ.</li>
            <li><em>(Với dạng 64-bit Double Precision: Gồm 1 bit dấu $S$, 11 bit mũ $e = E + 1023$, và 52 bit lẻ định trị $m$).</em></li>
          </ul>
        </div>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Ví dụ giải mẫu: Chuyển số thực <code>-12.375</code> sang mã Hexa IEEE 754 (32-bit)</div>
          <ol>
            <li>Số âm $\\Rightarrow S = 1$.</li>
            <li>Đổi độ lớn sang nhị phân: $12_{(10)} = 1100_{(2)}$ và $0.375_{(10)} = 0.011_{(2)}$ $\\Rightarrow 12.375 = 1100.011_{(2)}$.</li>
            <li>Chuẩn hóa về dạng $1.m \\times 2^E$: $1.100011_{(2)} \\times 2^3 \\Rightarrow E = 3$, phần lẻ $m = 100011000\\dots 0$ (23 bit).</li>
            <li>Mũ lệch $e = E + 127 = 3 + 127 = 130_{(10)} = 10000010_{(2)}$.</li>
            <li>Ghép 32 bit: <code>1 10000010 10001100000000000000000</code> = <code>1100 0001 0100 0110 0000 ...</code> = <strong><code>0xC1460000</code></strong>.</li>
          </ol>
        </div>

        <h4>2. Các giá trị đặc biệt trong chuẩn IEEE 754 32-bit</h4>
        <div class="table-scroll">
          <table class="theory-table">
            <thead><tr><th>Giá trị đặc biệt</th><th>Điều kiện trường $e$ &amp; $m$</th><th>Ví dụ / Mã Hexa chuẩn</th></tr></thead>
            <tbody>
              <tr><td><strong>Số $\\pm 0$</strong></td><td>Tất cả 8 bit mũ $e = 0$ (<code>00000000</code>) và tất cả 23 bit $m = 0$</td><td><code>0x00000000</code> là $+0$; <code>0x80000000</code> là $-0$</td></tr>
              <tr><td><strong>Vô cùng ($\\pm \\infty$)</strong></td><td>Tất cả 8 bit mũ $e = 255$ (<code>11111111</code>) và tất cả 23 bit $m = 0$</td><td><code>0x7F800000</code> ($+\\infty$, đầu <code>7F8</code>); <code>0xFF800000</code> ($-\\infty$, đầu <code>FF8</code>)</td></tr>
              <tr><td><strong>NaN (Not a Number)</strong></td><td>Tất cả 8 bit mũ $e = 255$ (<code>11111111</code>) và phần lẻ $m \\neq 0$ (có ít nhất 1 bit $= 1$)</td><td>Mọi mã có đầu <code>7F8..7FF</code> hoặc <code>FF8..FFF</code> khác <code>±∞</code></td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-trap">
          <div class="callout-title">📐 Tổng số cách biểu diễn NaN trong chuẩn IEEE 754 32-bit</div>
          <p>Trường $e = \\text{11111111}$ có $1$ cách; phần lẻ $m$ (23 bit) phải khác $0$ nên có $2^{23} - 1$ tổ hợp; bit dấu $S$ có $2$ cách chọn ($0$ hoặc $1$). Vậy tổng số biểu diễn NaN là:</p>
          <p>$$2 \\times (2^{23} - 1) = 2^{24} - 2$$</p>
        </div>

        <h4>3. Bốn khả năng tràn số dấu phẩy động &amp; Lưu đồ Cộng / Trừ / Nhân / Chia</h4>
        <ul>
          <li><strong>Bốn khả năng tràn khi tính toán số dấu phẩy động:</strong>
            <ol>
              <li><strong>Exponent Overflow (Tràn dương số mũ):</strong> Kết quả quá lớn khiến số mũ dương vượt quá giới hạn trên ($E &gt; +127$ ở Binary32) $\\Rightarrow$ kết quả thành $\\pm\\infty$.</li>
              <li><strong>Exponent Underflow (Tràn âm số mũ):</strong> Kết quả quá nhỏ gần 0 khiến số mũ âm nhỏ hơn giới hạn dưới ($E &lt; -126$ ở Binary32) $\\Rightarrow$ đưa về $\\pm 0$ (hoặc số dưới chuẩn).</li>
              <li><strong>Mantissa / Significand Overflow (Tràn phần định trị):</strong> Khi cộng hai phần định trị cho kết quả $\\ge 2$ (phát sinh nhớ ra ngoài dấu phẩy) $\\Rightarrow$ khắc phục bằng cách <strong>dịch phải phần định trị 1 bit và tăng số mũ lên $+1$</strong>.</li>
              <li><strong>Mantissa / Significand Underflow (Tràn âm phần định trị):</strong> Khi trừ hai số gần nhau hoặc căn chỉnh mũ khiến các bit có nghĩa bị đẩy ra khỏi 23 bit lẻ hoặc phần định trị $&lt; 1.0$ $\\Rightarrow$ dịch trái chuẩn hóa lại và dùng các <strong>Guard bits</strong> (bit bảo vệ, làm tròn, sticky) để giảm sai số làm tròn.</li>
            </ol>
          </li>
          <li><strong>Lưu đồ Cộng / Trừ hai số dấu phẩy động ($X \\pm Y$):</strong>
            <ol>
              <li>Kiểm tra các toán hạng đặc biệt ($0, \\pm\\infty, \\text{NaN}$).</li>
              <li><strong>Căn chỉnh số mũ (Align):</strong> Dịch phải phần định trị của số có mũ nhỏ hơn để đưa về cùng số mũ lớn hơn (các <strong>Guard bits</strong> tạm giữ những bit bị dịch ra ngoài bên phải để giữ độ chính xác khi làm tròn).</li>
              <li>Thực hiện cộng / trừ phần định trị.</li>
              <li><strong>Chuẩn hóa (Normalize)</strong> về dạng $1.m$ (dịch phải $+1$ mũ nếu $\\ge 2$, dịch trái giảm mũ nếu $&lt; 1$), kiểm tra tràn số mũ, rồi <strong>Làm tròn (Round)</strong> kết quả.</li>
            </ol>
          </li>
          <li><strong>Lưu đồ Nhân / Chia hai số dấu phẩy động:</strong>
            <ul>
              <li><em>Phép nhân ($X \\times Y$):</em> Tính dấu $S = S_X \\oplus S_Y$; cộng mũ lệch rồi trừ Bias: $e = e_X + e_Y - \\text{Bias}$; nhân phần định trị $(1.m_X) \\times (1.m_Y)$; chuẩn hóa và làm tròn.</li>
              <li><em>Phép chia ($X / Y$):</em> Tính dấu $S = S_X \\oplus S_Y$; trừ mũ lệch rồi cộng Bias: $e = e_X - e_Y + \\text{Bias}$; chia phần định trị $(1.m_X) / (1.m_Y)$; chuẩn hóa và làm tròn.</li>
            </ul>
          </li>
        </ul>

        <h4>4. Tập lệnh Số thực của RISC-V (RV32F / RV32D – Table B.3)</h4>
        <p>RISC-V cung cấp riêng <strong>32 thanh ghi số thực</strong> đánh số <code>f0–f31</code> (hỗ trợ độ chính xác đơn <code>.s</code> 32-bit và kép <code>.d</code> 64-bit):</p>
        <ul>
          <li><strong>Quy ước tên ABI của 32 thanh ghi số thực:</strong> <code>ft0–ft7</code> (<code>f0–f7</code>, tạm thời), <code>fs0–fs1</code> (<code>f8–f9</code>, lưu trữ), <code>fa0–fa1</code> (<code>f10–f11</code>, tham số &amp; trả về), <code>fa2–fa7</code> (<code>f12–f17</code>, tham số), <code>fs2–fs11</code> (<code>f18–f27</code>, lưu trữ), <code>ft8–ft11</code> (<code>f28–f31</code>, tạm thời).</li>
        </ul>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr><th>Nhóm lệnh FP (Table B.3)</th><th>Độ chính xác đơn (32-bit)</th><th>Độ chính xác kép (64-bit)</th><th>Ghi chú</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Đọc / Ghi bộ nhớ</strong></td><td><code>flw fd, imm(rs1)</code> / <code>fsw fs2, imm(rs1)</code></td><td><code>fld fd, imm(rs1)</code> / <code>fsd fs2, imm(rs1)</code></td><td>Thanh ghi địa chỉ cơ sở <code>rs1</code> là thanh ghi số nguyên <code>x</code></td></tr>
              <tr><td><strong>Số học dấu phẩy động</strong></td><td><code>fadd.s, fsub.s, fmul.s, fdiv.s, fsqrt.s</code></td><td><code>fadd.d, fsub.d, fmul.d, fdiv.d, fsqrt.d</code></td><td>Thao tác trên các thanh ghi <code>f0–f31</code></td></tr>
              <tr><td><strong>So sánh số thực</strong></td><td><code>feq.s, flt.s, fle.s rd, fs1, fs2</code></td><td><code>feq.d, flt.d, fle.d rd, fs1, fs2</code></td><td>Ghi kết quả <code>1/0</code> vào thanh ghi <strong>số nguyên <code>rd</code></strong>!</td></tr>
              <tr><td><strong>Chuyển đổi &amp; Di chuyển</strong></td><td><code>fcvt.w.s</code> / <code>fcvt.s.w</code> / <code>fmv.s</code></td><td><code>fcvt.w.d</code> / <code>fcvt.d.w</code> / <code>fmv.d</code></td><td>Đổi giữa <code>int</code> và <code>float/double</code></td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-method">
          <div class="callout-title">🧭 Phương pháp làm bài — Nhóm 4.2.6: Số thực dấu phẩy động chuẩn IEEE 754 (32-bit)</div>
          <ul>
            <li><strong>Dạng nhận biết:</strong> Xác định số thập phân không biểu diễn chính xác hữu hạn được trong chuẩn IEEE 754; đổi mã nhị phân hoặc mã Hexa 32-bit sang số thực thập phân; đổi số thực thập phân (dương hoặc âm) sang mã Hexa IEEE 754; nhận diện $\\pm 0, \\pm\\infty, \\text{NaN}$ và đếm số lượng NaN.</li>
            <li><strong>Các bước làm bài:</strong>
              <ol>
                <li><strong>Bước 1 (Hexa / Nhị phân &rarr; Số thực):</strong> Viết đủ 32 bit (mỗi chữ số Hexa = 4 bit) rồi cắt theo ranh giới <strong><code>1 bit S | 8 bit e | 23 bit m</code></strong> (hoặc đọc nhanh 3 chữ Hexa đầu: bit 31 là dấu, bit 30..23 là $e$). Kiểm tra trường hợp đặc biệt trước ($e = 0$ hoặc $e = 255$). Nếu $0 &lt; e &lt; 255$, tính số mũ thực $E = e - 127$, tính $(1.m)_2 = 1 + \\sum b_i 2^{-i}$, rồi nhân $(-1)^S \\times (1.m)_2 \\times 2^E$.</li>
                <li><strong>Bước 2 (Số thực &rarr; Mã Hexa 32-bit):</strong> Xác định bit dấu $S$ ($0$ dương, $1$ âm) $\\rightarrow$ đổi trị tuyệt đối ra nhị phân có dấu phẩy $\\rightarrow$ dịch dấu phẩy về dạng chuẩn $1.m \\times 2^E$ để lấy $E$ và chuỗi bit sau dấu chấm $m$ (bù 0 bên phải cho đủ 23 bit) $\\rightarrow$ tính $e = E + 127$ đổi ra 8 bit nhị phân $\\rightarrow$ ghép <code>S | e | m</code> rồi gom 4 bit thành 8 chữ số Hexa!</li>
                <li><strong>Bước 3 (Nhận diện đặc biệt):</strong> $e = 255, m = 0 \\Rightarrow \\pm\\infty$ (<code>0x7F800000</code> hoặc <code>0xFF800000</code>); $e = 255, m \\neq 0 \\Rightarrow \\text{NaN}$ (tổng cộng $2 \\times (2^{23} - 1) = 2^{24} - 2$ mã NaN).</li>
              </ol>
            </li>
            <li><strong>Bẫy thường gặp / Lưu ý kiểm tra đáp án:</strong> Sai lầm hay gặp là cắt sai ranh giới 8 bit của trường $e$ khi viết theo Hexa (nhớ $e$ chiếm 7 bit của 2 chữ Hexa đầu cộng thêm <strong>bit cao nhất của chữ Hexa thứ 3</strong> — ví dụ <code>0xC1460000</code> thì <code>C14</code> = <code>1 10000010 1...</code> có $S=1$, $e=10000010_2 = 130$). Đừng quên cộng thêm bit <code>1.</code> ẩn trước phần lẻ $m$!</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="4.2.6">
          <span>📝 <strong>Nhóm 4.2.6: Bài tập Số thực dấu phẩy động IEEE 754 32-bit (<span class="group-q-count">14 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.6', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.6', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    }
  ];

  // 4. Dữ liệu Tờ Công thức Bỏ túi (Cheat Sheet) tổng hợp 4 Chương theo KTMT_GK.pdf + Chuyên đề nâng cao
  root.KTMT_CHEATSHEET = [
    {
      chapter: 1,
      title: "Chương 1: Hiệu năng máy tính & Phân loại Flynn",
      pdfPage: 7,
      items: [
        { label: "Chu kỳ & Tần số", formula: "$$T_0 = \\frac{1}{f_0} \\quad;\\quad T_0\\text{ (ns)} = \\frac{1}{f_0\\text{ (GHz)}}$$" },
        { label: "Tổng chu kỳ & Thời gian CPU", formula: "$$n = IC \\times CPI \\quad;\\quad t_{\\text{CPU}} = n \\cdot T_0 = \\frac{IC \\times CPI}{f_0}$$" },
        { label: "CPI trung bình nhiều lớp lệnh", formula: "$$CPI_{\\text{TB}} = \\frac{\\sum (CPI_i \\times IC_i)}{\\sum IC_i} = \\sum (p_i\\% \\times CPI_i)$$" },
        { label: "So sánh Hiệu năng & Amdahl", formula: "$$P = \\frac{1}{t_{\\text{CPU}}} \\quad;\\quad \\frac{P_A}{P_B} = \\frac{t_B}{t_A} \\quad;\\quad S_{\\text{tổng}} = \\frac{1}{(1-p) + \\frac{p}{S}}$$" },
        { label: "Chỉ số MIPS & MFLOPS..PFLOPS", formula: "$$\\text{MIPS} = \\frac{IC}{t_{\\text{CPU}} \\cdot 10^6} = \\frac{f_0\\text{ (MHz)}}{CPI} = \\frac{f_0\\text{ (GHz)} \\cdot 1000}{CPI}$$ $\\text{MFLOPS/G/T/P} = \\frac{\\text{FP ops}}{t_{\\text{CPU}} \\cdot 10^{6/9/12/15}}$." }
      ]
    },
    {
      chapter: 2,
      title: "Chương 2: Hệ thống máy tính, Chu trình lệnh & Bus",
      pdfPage: 28,
      items: [
        { label: "Thành phần & Ngăn nhớ", formula: "4 phần: CPU (CU, ALU, RF), Bộ nhớ (Main Memory: địa chỉ cố định, nội dung đổi, không phân biệt lệnh/dữ liệu; Cache; Storage), Hệ thống vào-ra (ngoại vi nối qua Mô-đun I/O), Liên kết hệ thống." },
        { label: "Chu trình lệnh & Ngắt", formula: "Tìm nạp ($IR \\leftarrow \\text{Mem}[PC],\\; PC \\leftarrow PC+4$) &rarr; Giải mã (trong <code>IR</code>) &rarr; Thực hiện. Kiểm tra Ngắt sau mỗi lệnh: Tạm dừng &rarr; Cất ngữ cảnh &rarr; Chạy ISR &rarr; Khôi phục &rarr; Lệnh $i+1$." },
        { label: "Bus hệ thống & Không gian địa chỉ", formula: "Địa chỉ $N$ bit $\\Rightarrow 2^N$ ô nhớ ($0 \\to 2^N-1$); SSD/HDD không chiếm không gian địa chỉ bus hệ thống. Điều khiển: <code>MEMR/W, IOR/W, INTR/INTA, BRQ/BGT</code> (độ rộng không phụ thuộc bus dữ liệu/địa chỉ)." },
        { label: "Đa bus, QPI & PCIe", formula: "QPI (2008): điểm-điểm, 4 lớp, Phit 20-bit, Flit 80-bit, I/O Hub; PCIe 1.0–6.0 (Root Complex / Switch / Endpoint); SATA chuyên dụng ổ lưu trữ (HDD/SSD); USB nối tiếp ngoại vi." }
      ]
    },
    {
      chapter: 3,
      title: "Chương 3: Tập lệnh RISC-V (RV32I) & RARS",
      pdfPage: 44,
      items: [
        { label: "Little-Endian, Alignment & ASCII", formula: "LSB ở địa chỉ nhỏ nhất; Word ⋮ 4 (<code>0,4,8,C</code>), Halfword ⋮ 2. ASCII: <code>'0'=0x30</code>, <code>'A'=0x41</code>, <code>'a'=0x61</code> (lệch <code>0x20</code>), <code>BS=0x08</code>, <code>LF=0x0A</code>, <code>FF=0x0C</code>, <code>CR=0x0D</code>." },
        { label: "Nạp hằng 32-bit (lui + addi)", formula: "Hằng số <code>addi</code>: $[-2048, +2047]$. Chữ Hexa thứ 3 từ phải $\\ge 8$ (bit 11 $=1$) $\\Rightarrow$ <strong>cộng +1 vào 20 bit cao của <code>lui</code></strong>." },
        { label: "Định địa chỉ PC-relative & Mã máy", formula: "$$\\text{BTA / JTA} = PC_{\\text{hiện tại}} + imm \\iff imm = \\text{Đích} - PC_{\\text{hiện tại}}$$ <code>instr[31]</code> luôn là bit dấu; RVC 16-bit (<code>c.</code>); Giả lệnh: <code>mv, not, li, j, jr, ret, bgt, bgez</code>." },
        { label: "Gọi hàm & Ngăn xếp LIFO", formula: "Caller-saved: <code>ra, t0–t6, a0–a7</code>. Callee-saved: <code>sp, s0–s11</code>. Push: <code>addi sp, sp, -4k</code> trước <code>sw</code>; Pop: <code>lw</code> trước <code>addi sp, sp, 4k</code>." },
        { label: "RARS, Chỉ thị .data & ecall (a7)", formula: "<code>.text=0x00400000</code>, <code>.data=0x10010000</code>; <code>.ascii</code> thiếu <code>\\0</code>, <code>.asciz</code> có <code>\\0</code>; <code>.word</code> tự căn lề 4 byte. <code>a7</code>: <code>1</code>(Int), <code>4</code>(Str), <code>5</code>(ReadInt), <code>10</code>(Exit), <code>11</code>(Char), <code>32</code>(Sleep), <code>34</code>(Hex)." }
      ]
    },
    {
      chapter: 4,
      title: "Chương 4: Số học máy tính",
      pdfPage: 100,
      items: [
        { label: "Đơn vị IEC & Dải biểu diễn n-bit", formula: "IEC: <code>KiB..EiB</code> ($2^{10}..2^{60}$). Không dấu: $[0, 2^n - 1]$ ($2^n \\ge M$). Có dấu bù 2: $[-2^{n-1},\\; 2^{n-1}-1]$, đổi dấu: đảo bit $+ 1$." },
        { label: "Mạch tổ hợp & Mạch dãy", formula: "De Morgan: $\\overline{AB} = \\overline{A}+\\overline{B}$. MUX 2-1: $D_0\\overline{S}+D_1 S$. Full Adder: $S = A\\oplus B\\oplus C$, $C_{\\text{out}} = AB+AC+BC$. Flip-Flop S-R, J-K, D ($Q_{\\text{next}}=D$)." },
        { label: "Tràn số học & RV32M (Table B.5)", formula: "Tràn khi cộng cùng dấu ra trái dấu. <code>char</code>: $S&gt;127 \\Rightarrow S-256$; $S&lt;-128 \\Rightarrow S+256$. <code>add</code>: $[\\text{0x80000000}-K,\\; \\text{0x7FFFFFFF}]$. <code>mul/mulh/mulhu/mulhsu</code>; <code>rem</code> cùng dấu Số bị chia." },
        { label: "IEEE 754-2008 & Lệnh FP (f0–f31)", formula: "Binary32 (<code>1-8-23</code>, Bias=127): $X = (-1)^S (1.m)_2 \\cdot 2^{e-127}$; Binary64 (<code>1-11-52</code>, Bias=1023); Binary128 (<code>1-15-112</code>). $\\pm\\infty$: <code>0x7F800000 / 0xFF800000</code>; NaN: $2^{24}-2$. Lệnh FP: <code>fadd.s/d, flw/fld, feq.s/d</code>." }
      ]
    }
  ];
})(typeof window !== "undefined" ? window : globalThis);
