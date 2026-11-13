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
    x17: { num: "x17", alias: "a7",   bin: "10001", role: "Argument 7: tham số truyền vào chương trình con (hoặc mã syscall)", saved: "Caller-saved", group: "Argument" },
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
        { id: "1.2.1", title: "Nhóm 1: Khái niệm cơ bản và Các thành phần của máy tính", type: "exercise", pdfPage: 10, exercises: "Bài tập 1.1", count: 1, summary: "Xác định thành phần chứa chương trình đang thực hiện (Bộ nhớ chính - Main Memory) và phân biệt với bộ nhớ ngoài." },
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
      subtitle: "CPU (CU, ALU, RF), Bộ nhớ & Hệ thống I/O, Chu trình lệnh (PC, IR), Ngắt (Interrupt), Bus hệ thống, Tín hiệu điều khiển và Không gian địa chỉ.",
      pdfPageStart: 28,
      printedPageStart: 27,
      theorySections: ["2.1.1", "2.1.2", "2.1.3"],
      groups: [
        { id: "2.1", title: "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 2", type: "theory", pdfPage: 28, exercises: "Lý thuyết 2.1 - 2.6", count: 6, summary: "Cấu trúc CPU, Bộ nhớ/I/O, Chu trình Fetch-Execute, Ngắt, 3 loại Bus và Liên kết điểm-điểm (QPI, PCIe, SATA, USB)." },
        { id: "2.2.1", title: "Nhóm 1: Cấu trúc CPU, Bộ nhớ và Hệ thống vào-ra", type: "exercise", pdfPage: 35, exercises: "Bài tập 2.1 - 2.3", count: 6, summary: "Chức năng CU/ALU/RF, bộ nhớ trong/ngoài, tính chất ngăn nhớ (nội dung đổi, địa chỉ cố định) và mô-đun vào-ra." },
        { id: "2.2.2", title: "Nhóm 2: Chu trình lệnh, các thanh ghi PC / IR và Hoạt động Ngắt", type: "exercise", pdfPage: 36, exercises: "Bài tập 2.4 - 2.5", count: 6, summary: "Quy trình Tìm nạp (PC -> IR, PC += 4), Giải mã, Thực thi và Thứ tự cất ngữ cảnh / xử lý Ngắt đơn và nhiều ngắt." },
        { id: "2.2.3", title: "Nhóm 3: Liên kết hệ thống, Các loại Bus và Tính toán không gian địa chỉ", type: "exercise", pdfPage: 38, exercises: "Bài tập 2.6 - 2.10", count: 17, summary: "Bus địa chỉ/dữ liệu/điều khiển (MEMR, IOW, INTR, INTA, BRQ, BGT), tính không gian địa chỉ M = 2^N và độ rộng bus N." }
      ]
    },
    {
      id: 3,
      code: "Chương 3",
      title: "Kiến trúc tập lệnh RISC-V",
      subtitle: "Tập 32 thanh ghi, quy tắc Little-Endian, hợp ngữ RISC-V, dịch C ↔ RISC-V, Vòng lặp, Ngăn xếp, Mã máy 32-bit, Lệnh nén 16-bit và Bản đồ bộ nhớ.",
      pdfPageStart: 43,
      printedPageStart: 42,
      theorySections: ["3.1.1", "3.1.2", "3.1.3", "3.1.4"],
      groups: [
        { id: "3.1", title: "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)", type: "theory", pdfPage: 43, exercises: "Lý thuyết 3.1 - 3.8", count: 8, summary: "Nguyên lý RISC, 32 thanh ghi RV32I, quy tắc Little-Endian, 6 khuôn dạng lệnh 32-bit, lệnh nén 16-bit và 4 định địa chỉ." },
        { id: "3.2.1", title: "Nhóm 1: Thanh ghi, Khuôn dạng lệnh, Phương thức định địa chỉ và Kiểm tra hợp lệ", type: "exercise", pdfPage: 52, exercises: "Bài tập 3.1 - 3.13", count: 20, summary: "Phân biệt 4 phương thức định địa chỉ, kiểm tra lệnh hợp lệ/không hợp lệ, khuôn dạng R/I/S/B/U/J và hạn chế lệnh nén 16-bit." },
        { id: "3.2.2", title: "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi", type: "exercise", pdfPage: 57, exercises: "Bài tập 3.14 - 3.26", count: 24, summary: "add, sub, addi, and, or, xor, sll, srl, sra, lui. Quy tắc lui + addi nạp hằng số 32-bit (cộng 1 khi bit 11 bằng 1)." },
        { id: "3.2.3", title: "Nhóm 3: Lệnh So sánh (slt, slti, sltu, blt, bltu) và Rẽ nhánh", type: "exercise", pdfPage: 64, exercises: "Bài tập 3.27 - 3.28, 3.72", count: 7, summary: "So sánh có dấu (slt, slti, blt, bge) vs không dấu (sltu, sltiu, bltu) với hằng số âm/Hexa có bit dấu bằng 1 và cơ chế ALU trừ (beq/bne)." },
        { id: "3.2.4", title: "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, lbu, sw) và Thứ tự Little-Endian", type: "exercise", pdfPage: 66, exercises: "Bài tập 3.29 - 3.35", count: 12, summary: "Quy tắc LSB nằm ở địa chỉ nhỏ nhất; mở rộng dấu (lb, lh) vs mở rộng 0 (lbu, lhu) và lưu trữ mảng trong bộ nhớ." },
        { id: "3.2.5", title: "Nhóm 5: Chuyển đổi giữa Ngôn ngữ C và Hợp ngữ RISC-V", type: "exercise", pdfPage: 70, exercises: "Bài tập 3.36 - 3.50", count: 30, summary: "Địa chỉ phần tử mảng &A[i] = Base + 4*i, cấu trúc if-else, vòng lặp while/for và xử lý xâu ký tự/mảng char." },
        { id: "3.2.6", title: "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi", type: "exercise", pdfPage: 82, exercises: "Bài tập 3.51 - 3.56", count: 10, summary: "Tính kết quả vòng lặp và công thức đếm tổng số lệnh thực thi: Khởi tạo + N*(Thân + Branch) + Thoát." },
        { id: "3.2.7", title: "Nhóm 7: Chương trình con (Thủ tục), Ngăn xếp (Stack) và Lệnh jal / jalr", type: "exercise", pdfPage: 88, exercises: "Bài tập 3.57 - 3.60", count: 5, summary: "Quy ước Caller-saved vs Callee-saved, thao tác Push/Pop trên đỉnh ngăn xếp sp và gọi đệ quy/hàm lồng nhau." },
        { id: "3.2.8", title: "Nhóm 8: Dịch Mã máy – Hợp ngữ, Tính địa chỉ đích và Giải mã Bản đồ bộ nhớ", type: "exercise", pdfPage: 91, exercises: "Bài tập 3.61 - 3.71", count: 39, summary: "Dịch hợp ngữ <-> mã máy 32-bit (R, I, S, B, U, J), tính đích nhảy BTA/JTA và giải mã Bản đồ bộ nhớ Đề 0012, 0013." }
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
        { id: "4.2.1", title: "Nhóm 1: Hệ đếm, Chuyển đổi cơ số và Xác định số bit biểu diễn", type: "exercise", pdfPage: 108, exercises: "Bài tập 4.1 - 4.2", count: 8, summary: "Tìm số bit tối thiểu mã hóa M giá trị (2^n >= M), chuyển đổi thập phân có phần lẻ (0.1, 0.25...) sang nhị phân và Hexa." },
        { id: "4.2.2", title: "Nhóm 2: Nhận diện Cổng logic, Mạch tổ hợp và Bộ cộng 1-bit", type: "exercise", pdfPage: 109, exercises: "Bài tập 4.3 - 4.5", count: 5, summary: "Nhận dạng 6 cổng logic (AND, OR, NOT, NAND, NOR, XOR), phân tích mạch tổ hợp SOP và công thức S, C_out bộ Full Adder." },
        { id: "4.2.3", title: "Nhóm 3: Biểu diễn và So sánh Số nguyên có dấu (Mã bù 2)", type: "exercise", pdfPage: 111, exercises: "Bài tập 4.6 - 4.14", count: 21, summary: "Dải giá trị n-bit bù 2 [-2^{n-1}, 2^{n-1}-1], tính bù 2, chuyển đổi 8/16/32-bit và sắp xếp dãy số nguyên có/không dấu." },
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
          <li><strong>Máy tính (Computer):</strong> Là thiết bị điện tử hoạt động theo chương trình, có khả năng nhập dữ liệu (<em>input data</em>), lưu trữ dữ liệu, xử lý dữ liệu và xuất ra thông tin (<em>output information</em>).</li>
          <li><strong>Chương trình (Program):</strong> Là dãy các lệnh được lập trình sẵn và được lưu trong bộ nhớ để điều khiển máy tính thực hiện theo.</li>
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
      summary: "3 khía cạnh kiến trúc máy tính, 7 ý tưởng lớn, 4 yếu tố quyết định hiệu năng, 3 lớp hệ thống, 3 mức dịch ngôn ngữ và lịch sử tiến hóa.",
      content: `
        <h4>1. Ba khía cạnh của Kiến trúc máy tính</h4>
        <ul>
          <li><strong>Kiến trúc tập lệnh (ISA – Instruction Set Architecture):</strong> Nghiên cứu máy tính theo cách nhìn của người lập trình hợp ngữ; là giao diện giữa phần mềm và phần cứng. Các kiến trúc tập lệnh thông dụng hiện nay gồm:
            <ul>
              <li><strong>Intel x86:</strong> Ra đời từ năm 1978, dùng phổ biến trong Laptop, Desktop, Servers.</li>
              <li><strong>ARM:</strong> Ra đời từ năm 1985, dùng phổ biến trong Smartphones, Tablets.</li>
              <li><strong>RISC-V:</strong> Kiến trúc tập lệnh mở (miễn phí bản quyền), phát triển từ năm 2010 tại Đại học UC Berkeley.</li>
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
          <li><strong>Ba lớp của hệ thống máy tính:</strong> Từ trong ra ngoài gồm <strong>Phần cứng</strong> (Bộ xử lý, bộ nhớ, mô-đun vào-ra) $\\rightarrow$ <strong>Phần mềm hệ thống</strong> (Hệ điều hành quản lý tài nguyên và Chương trình dịch) $\\rightarrow$ <strong>Phần mềm ứng dụng</strong>.</li>
          <li><strong>Quá trình dịch chương trình qua 3 mức ngôn ngữ:</strong>
            <ol>
              <li><strong>Ngôn ngữ bậc cao (High-Level Language – HLL):</strong> Như ngôn ngữ C, gần với bài toán cần giải quyết, độc lập với phần cứng.</li>
              <li><strong>Trình biên dịch (Compiler):</strong> Dịch chương trình từ Ngôn ngữ bậc cao sang <strong>Hợp ngữ (Assembly Language)</strong> — mô tả lệnh dưới dạng văn bản gợi nhớ, phụ thuộc vào từng kiến trúc tập lệnh cụ thể.</li>
              <li><strong>Trình hợp dịch (Assembler):</strong> Dịch từ Hợp ngữ sang <strong>Ngôn ngữ máy (Machine Language / Mã máy)</strong> — được mã hóa hoàn toàn bằng các bit nhị phân <code>0</code> và <code>1</code> để phần cứng trực tiếp thực thi.</li>
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

        <h4>5. Sự tiến hóa của công nghệ máy tính</h4>
        <ul>
          <li><strong>Thế hệ đèn điện tử chân không (1950s):</strong> Máy tính <strong>ENIAC (1946)</strong> — xử lý theo số thập phân; và máy tính <strong>IAS (1952)</strong> — do John von Neumann thiết kế theo nguyên lý chương trình lưu trữ trong bộ nhớ (<em>“stored program”</em>), xử lý theo số nhị phân.</li>
          <li><strong>Thế hệ linh kiện:</strong> Transistors (1960s) $\\rightarrow$ Vi mạch SSI, MSI, LSI (1970s) $\\rightarrow$ Vi mạch VLSI (1980s) $\\rightarrow$ Vi mạch ULSI (1990s – nay).</li>
          <li><strong>Sự phát triển độ rộng bit của vi xử lý:</strong> 4-bit (Intel 4004 năm 1971) $\\rightarrow$ 8-bit (1972) $\\rightarrow$ 16-bit (1978, máy tính IBM-PC ra đời năm 1981) $\\rightarrow$ 32-bit (1985) $\\rightarrow$ 64-bit (2001) $\\rightarrow$ Đa lõi (Multicores – từ năm 2006, tích hợp nhiều nhân CPU trên cùng một chip).</li>
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
      summary: "Bảng quy đổi đơn vị chuẩn, 5 công thức cốt lõi (T0, n, t_CPU, CPI_TB nhiều lớp lệnh, P_A/P_B, MIPS/MFLOPS) và hạn chế của MIPS.",
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

        <div class="formula-practice-inline" data-group-link="1.2.4">
          <span>📝 <strong>Nhóm 1.2.4: Tính CPI trung bình nhiều lớp lệnh (<span class="group-q-count">13 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.4', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.4', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 4) Định nghĩa Hiệu năng ($P$) và So sánh tốc độ giữa hai máy tính</div>
          <p>Hiệu năng ($P$ – Performance) là nghịch đảo của thời gian thực hiện chương trình (máy có $t_{\\text{CPU}}$ nhỏ hơn thì nhanh hơn):</p>
          <p>$$P = \\frac{1}{t_{\\text{CPU}}} \\qquad \\Longrightarrow \\qquad k = \\frac{P_A}{P_B} = \\frac{t_B}{t_A}$$</p>
          <p>Nếu hai máy A và B có <strong>cùng kiến trúc tập lệnh (ISA)</strong> và chạy cùng một chương trình thì $IC_A = IC_B = IC$ tự triệt tiêu:</p>
          <p>$$\\frac{P_A}{P_B} = \\frac{t_B}{t_A} = \\frac{CPI_B \\times T_B}{CPI_A \\times T_A} = \\frac{CPI_B / f_B}{CPI_A / f_A}$$</p>
        </div>

        <div class="formula-practice-inline" data-group-link="1.2.5">
          <span>📝 <strong>Nhóm 1.2.5: So sánh hiệu năng &amp; cân bằng thời gian (<span class="group-q-count">15 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.5', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.5', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 5) Chỉ số tốc độ thực thi MIPS và MFLOPS</div>
          <p><strong>MIPS</strong> (Millions of Instructions Per Second – số triệu lệnh thực hiện được trong 1 giây):</p>
          <p>$$\\text{MIPS} = \\frac{IC}{t_{\\text{CPU}} \\times 10^6} = \\frac{f_0}{CPI \\times 10^6} = \\frac{f_0\\text{ (MHz)}}{CPI} = \\frac{f_0\\text{ (GHz)} \\times 1000}{CPI}$$</p>
          <p>Suy ngược $CPI$ khi biết MIPS: $$CPI = \\frac{f_0}{\\text{MIPS} \\times 10^6} = \\frac{f_0\\text{ (GHz)} \\times 1000}{\\text{MIPS}}$$</p>
          <p><strong>MFLOPS</strong> (Millions of Floating-Point Operations Per Second): $$\\text{MFLOPS} = \\frac{\\text{Số phép toán dấu phẩy động thực thi}}{t_{\\text{CPU}} \\times 10^6}$$ Các bội số lớn hơn: GFLOPS ($10^9$), TFLOPS ($10^{12}$), PFLOPS ($10^{15}$).</p>
        </div>

        <div class="callout callout-trap">
          <div class="callout-title">⚠️ Hạn chế của chỉ số MIPS</div>
          <p>MIPS chỉ đo tốc độ thực thi lệnh mà không phản ánh khả năng của từng lệnh; <strong>không dùng để so sánh hai máy khác kiến trúc tập lệnh (khác ISA)</strong>; thay đổi theo từng chương trình trên cùng một máy; đôi khi một chương trình có nhiều lệnh đơn giản hơn lại cho chỉ số MIPS cao hơn nhưng tổng thời gian chạy thực tế lại lâu hơn.</p>
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
              <li><strong>Bộ đếm chương trình PC (Program Counter):</strong> Là thanh ghi của CPU luôn chứa <strong>địa chỉ của lệnh tiếp theo</strong> sẽ được nạp vào để thực hiện (trên kiến trúc Intel x86, thanh ghi này được gọi là <code>IP</code> – Instruction Pointer).</li>
              <li>Bắt đầu mỗi chu trình lệnh, CPU phát địa chỉ từ thanh ghi <code>PC</code> ra bộ nhớ chính để tìm ngăn nhớ chứa lệnh.</li>
              <li>Lệnh đọc từ bộ nhớ chính được nạp vào <strong>Thanh ghi lệnh IR (Instruction Register)</strong> của CPU.</li>
              <li>Sau khi lệnh được nạp vào <code>IR</code>, nếu chương trình thực hiện tuần tự, CPU sẽ <strong>tự động tăng nội dung thanh ghi PC</strong> để trỏ sang lệnh kế tiếp (với tập lệnh 32-bit cố định của RISC-V, mỗi lệnh chiếm 4 byte nên $PC \\leftarrow PC + 4$).</li>
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
              <li>Thực hiện chương trình con xử lý ngắt, sau đó khôi phục ngữ cảnh và trở về tiếp tục thực hiện chương trình đang bị tạm dừng.</li>
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
      summary: "Luồng thông tin mô-đun nhớ/I/O/CPU, 3 loại Bus, 11 tín hiệu điều khiển điển hình và Liên kết điểm-điểm (QPI, PCIe, SATA, USB).",
      content: `
        <h4>1. Luồng thông tin kết nối tới từng mô-đun</h4>
        <ul>
          <li><strong>Mô-đun nhớ:</strong> Nhận địa chỉ để xác định ngăn nhớ; nhận dữ liệu khi ghi; đưa dữ liệu hoặc lệnh ra khi đọc (<em>bộ nhớ không phân biệt lệnh và dữ liệu</em>); nhận tín hiệu điều khiển Đọc (Read) và Ghi (Write).</li>
          <li><strong>Mô-đun vào-ra:</strong> Nhận địa chỉ để xác định cổng vào-ra; chuyển dữ liệu hai chiều giữa bên trong và bên ngoài; nhận tín hiệu điều khiển Đọc/Ghi từ CPU; phát tín hiệu điều khiển đến thiết bị ngoại vi và phát tín hiệu yêu cầu ngắt đến CPU.</li>
          <li><strong>CPU:</strong> Phát địa chỉ đến mô-đun nhớ hoặc mô-đun vào-ra; đọc lệnh từ bộ nhớ; đọc/ghi dữ liệu với bộ nhớ hoặc mô-đun vào-ra; phát tín hiệu điều khiển đọc/ghi và nhận tín hiệu yêu cầu ngắt.</li>
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
          <span>📝 <strong>Nhóm 2.2.3: Bus hệ thống, Tín hiệu điều khiển &amp; Không gian địa chỉ (<span class="group-q-count">17 câu</span>)</strong></span>
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

        <h4>4. Hạn chế của Bus dùng chung (Shared Bus) và Liên kết điểm-điểm</h4>
        <ul>
          <li><strong>Hạn chế của Bus dùng chung:</strong> Cần có bộ phân xử bus; tại một thời điểm chỉ phục vụ được một yêu cầu trao đổi dữ liệu nên độ trễ lớn; khó đồng bộ hóa khi tốc độ truyền cao.</li>
          <li><strong>Giải pháp khắc phục:</strong> Sử dụng cấu trúc <strong>Đa bus (Multiple bus)</strong> hoặc <strong>Liên kết điểm-điểm (Point-to-point interconnection)</strong>.</li>
          <li><strong>Các liên kết điểm-điểm và bus ngoại vi phổ biến:</strong>
            <ul>
              <li><strong>QPI (Quick Path Interconnect):</strong> Đa kết nối trực tiếp từng cặp giữa các lõi xử lý (Cores) và Chipset, không cần phân xử bus, truyền dữ liệu dạng gói theo kiến trúc phân lớp.</li>
              <li><strong>PCI Express (PCIe):</strong> Liên kết điểm-điểm tốc độ cao thay thế cho bus dùng chung PCI truyền thống để nối ghép các thiết bị vào-ra băng thông lớn (card đồ họa, ổ SSD NVMe).</li>
              <li><strong>SATA:</strong> Chuẩn kết nối chuyên dụng chỉ dùng để kết nối với các ổ lưu trữ vật lý (HDD, SSD SATA).</li>
              <li><strong>USB (Universal Serial Bus):</strong> Chuẩn bus ngoại vi nối tiếp đa dụng kết nối giữa mô-đun vào-ra và các thiết bị ngoại vi.</li>
            </ul>
          </li>
        </ul>
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
      linkedGroups: ["3.1", "3.2.1", "3.2.7"],
      summary: "Phân biệt CISC vs RISC, 3 đặc trưng RV32I và Bảng tra cứu 32 thanh ghi kèm quy ước bảo toàn Caller-saved / Callee-saved.",
      content: `
        <h4>1. Đặc trưng của kiến trúc tập lệnh thu gọn RISC và RISC-V</h4>
        <ul>
          <li><strong>Phân biệt CISC và RISC:</strong>
            <ul>
              <li><strong>CISC (Complex Instruction Set Computer):</strong> Máy tính với tập lệnh phức tạp (điển hình là Intel x86, Motorola 680x0). Độ dài lệnh thay đổi từ <strong>1 đến 15 byte</strong>, cho phép lệnh tính toán trực tiếp với toán hạng nằm trong bộ nhớ.</li>
              <li><strong>RISC (Reduced Instruction Set Computer):</strong> Máy tính với tập lệnh thu gọn (điển hình là RISC-V, MIPS, ARM).</li>
            </ul>
          </li>
          <li><strong>Các đặc trưng cốt lõi của kiến trúc RISC (và RISC-V 32-bit):</strong>
            <ol>
              <li>Các lệnh chuẩn có <strong>độ dài cố định bằng 32 bit ($= 4$ byte)</strong>. Do đó, địa chỉ của mọi lệnh máy chuẩn trong bộ nhớ luôn là bội số của 4 (chữ số Hexa tận cùng là <code>0, 4, 8, C</code>).</li>
              <li>Các lệnh số học và logic chỉ thao tác với các toán hạng nằm trong <strong>thanh ghi</strong> (hoặc hằng số nằm ngay trong lệnh).</li>
              <li>Chỉ truy cập bộ nhớ dữ liệu thông qua các lệnh chuyên biệt là <strong>Load</strong> (đọc từ bộ nhớ vào thanh ghi) và <strong>Store</strong> (ghi từ thanh ghi ra bộ nhớ).</li>
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
      `
    },
    {
      id: "3.1.2",
      chapter: 3,
      code: "3.1.2",
      title: "Tổ chức dữ liệu trong bộ nhớ và Quy tắc Đầu nhỏ (Little-Endian)",
      pdfPage: 45,
      printedPage: 44,
      linkedGroups: ["3.1", "3.2.4", "3.2.8"],
      summary: "Các đơn vị dữ liệu Byte / Halfword / Word, quy tắc căn chỉnh biên địa chỉ (Alignment) và sơ đồ đối chiếu Little-Endian vs. Big-Endian.",
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
      summary: "Đầy đủ 4 nhóm lệnh: Số học & quy tắc nạp hằng 32-bit lui+addi (ví dụ 0x20241120 vs 0x12345EDC), Load/Store, Logic/Dịch bit, So sánh/Rẽ nhánh, jal/jalr và Stack LIFO.",
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

        <div class="formula-practice-inline" data-group-link="3.2.2">
          <span>📝 <strong>Nhóm 3.2.2: Số học, Logic, Dịch bit &amp; lui+addi (<span class="group-q-count">24 câu</span>)</strong></span>
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
          <span>📝 <strong>Nhóm 3.2.4: Load/Store &amp; Bộ nhớ Little-Endian (<span class="group-q-count">12 câu</span>)</strong></span>
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
      summary: "Bảng cấu trúc 6 khuôn dạng lệnh 32-bit (R, I, S, B, U, J), bảng tra Opcode/Funct3/Funct7 RV32I đầy đủ, RVC 16-bit và 4 định địa chỉ.",
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

        <h4>2. Bảng tra cứu nhanh Opcode, Funct3 và Funct7 của tập lệnh RV32I</h4>
        <div class="table-scroll">
          <table class="theory-table">
            <thead>
              <tr><th>Nhóm / Kiểu</th><th>Opcode (6:0)</th><th>funct3</th><th>funct7</th><th>Tên lệnh hợp ngữ tương ứng</th></tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="4"><strong>R-type</strong><br/>(Số học / Logic)</td>
                <td rowspan="4"><code>0110011</code> (51)</td>
                <td><code>000</code></td><td><code>0000000</code></td><td><code>add rd, rs1, rs2</code></td>
              </tr>
              <tr><td><code>000</code></td><td><code>0100000</code></td><td><code>sub rd, rs1, rs2</code></td></tr>
              <tr><td><code>001 / 010</code></td><td><code>0000000</code></td><td><code>sll (001), slt (010), sltu (011)</code></td></tr>
              <tr><td><code>100 / 101</code></td><td><code>000/010..</code></td><td><code>xor (100), srl/sra (101), or (110), and (111)</code></td></tr>
              <tr>
                <td rowspan="2"><strong>I-type</strong><br/>(Tính toán)</td>
                <td rowspan="2"><code>0010011</code> (19)</td>
                <td><code>000 / 010</code></td><td><code>–</code></td><td><code>addi (000), slti (010), sltiu (011)</code></td>
              </tr>
              <tr><td><code>100 / 110</code></td><td><code>–</code></td><td><code>xori (100), ori (110), andi (111), slli (001), srli/srai (101)</code></td></tr>
              <tr><td><strong>I-type (Load)</strong></td><td><code>0000011</code> (3)</td><td><code>000..101</code></td><td><code>–</code></td><td><code>lb (000), lh (001), lw (010), lbu (100), lhu (101)</code></td></tr>
              <tr><td><strong>S-type (Store)</strong></td><td><code>0100011</code> (35)</td><td><code>000..010</code></td><td><code>–</code></td><td><code>sb (000), sh (001), sw (010)</code></td></tr>
              <tr><td><strong>B-type (Branch)</strong></td><td><code>1100011</code> (99)</td><td><code>000..111</code></td><td><code>–</code></td><td><code>beq (000), bne (001), blt (100), bge (101), bltu (110), bgeu (111)</code></td></tr>
              <tr><td><strong>U-type</strong></td><td><code>0110111</code> (55)</td><td><code>–</code></td><td><code>–</code></td><td><code>lui rd, upimm</code> (<code>auipc</code> có opcode <code>0010111</code>)</td></tr>
              <tr><td><strong>J-type &amp; I-jalr</strong></td><td><code>1101111</code> (111)</td><td><code>–</code></td><td><code>–</code></td><td><code>jal rd, label</code> (Riêng <code>jalr</code> là kiểu I, opcode <code>1100111</code>, <code>funct3=000</code>)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="formula-practice-inline" data-group-link="3.2.8">
          <span>📝 <strong>Nhóm 3.2.8: Dịch Mã máy 32-bit, Đích nhảy &amp; Bản đồ bộ nhớ Đề 0012/0013 (<span class="group-q-count">38 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.8', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('3.2.8', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <h4>3. Tập lệnh nén 16-bit (Compressed Instructions – RVC)</h4>
        <p>Để giảm dung lượng bộ nhớ lưu trữ mã chương trình, RISC-V (cũng như ARM Thumb) cung cấp tập lệnh nén có <strong>độ dài 16 bit (2 byte)</strong> cho các thao tác thường gặp, ký hiệu bằng tiền tố <code>c.</code> (ví dụ: <code>c.add, c.addi, c.lw</code>).</p>
        <p><strong>Các hạn chế của lệnh nén 16-bit so với lệnh 32-bit:</strong></p>
        <ol>
          <li><strong>Giảm số lượng thanh ghi</strong> có thể truy cập trực tiếp (nhiều lệnh nén chỉ dùng 3 bit để định danh 8 thanh ghi phổ biến từ <code>x8</code> đến <code>x15</code>).</li>
          <li><strong>Giảm số lượng toán hạng</strong> trong lệnh (thường gộp thanh ghi đích trùng với thanh ghi nguồn thứ nhất: $rd = rd + rs2$).</li>
          <li><strong>Phạm vi biểu diễn của hằng số tức thời (<code>imm</code>)</strong> và khoảng cách nhảy rẽ nhánh bị thu hẹp đáng kể.</li>
        </ol>

        <h4>4. Bốn phương thức định địa chỉ của RISC-V</h4>
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

    // ==================== CHƯƠNG 4 ====================
    {
      id: "4.1.1",
      chapter: 4,
      code: "4.1.1",
      title: "Hệ đếm và Chuyển đổi giữa các hệ đếm",
      pdfPage: 100,
      printedPage: 99,
      linkedGroups: ["4.1", "4.2.1"],
      summary: "3 hệ đếm (10, 2, 16), Bảng quy đổi chuẩn 4-bit Nhị phân – Hexa – Thập phân, công thức tổng quát phần nguyên + phần lẻ và số thực không biểu diễn chính xác hữu hạn.",
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
      summary: "Ký hiệu 6 cổng logic chuẩn IEEE (AND, OR, NOT, NAND, NOR, XOR), định lý De Morgan, mạch tổ hợp (MUX, Decoder, Half/Full Adder) và mạch dãy Flip-Flop.",
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
          <li><strong>Mạch tổ hợp (Combinational Circuits – mạch không nhớ):</strong> Giá trị đầu ra chỉ phụ thuộc vào tổ hợp giá trị đầu vào tại thời điểm hiện tại. Các bộ phận điển hình:
            <ul>
              <li><strong>Bộ ghép kênh (MUX – Multiplexer):</strong> Có $2^n$ đầu vào dữ liệu, $n$ đầu vào chọn ($S$) và 1 đầu ra. Với MUX 2-ra-1: $$F = D_0 \\cdot \\overline{S} + D_1 \\cdot S$$ (khi $S = 0$ thì nối $D_0$ ra $F$; khi $S = 1$ thì nối $D_1$ ra $F$).</li>
              <li><strong>Bộ giải mã (Decoder):</strong> Có $n$ đầu vào và $2^n$ đầu ra. Với mỗi tổ hợp của $n$ đầu vào, chỉ có duy nhất 1 đầu ra tích cực.</li>
              <li><strong>Bộ cộng bán phần 1-bit (Half Adder):</strong> Cộng 2 bit $A, B$ tạo ra bit tổng $S = A \\oplus B$ (dùng cổng XOR) và bit nhớ ra $C_{\\text{out}} = A \\cdot B$ (dùng cổng AND).</li>
              <li><strong>Bộ cộng toàn phần 1-bit (Full Adder):</strong> Cộng 3 bit ($A, B$ và bit nhớ vào $C_{\\text{in}}$, hoặc ký hiệu là $C$) tạo ra bit tổng $S$ và bit nhớ ra $C_{\\text{out}}$:
                $$S = A \\oplus B \\oplus C = \\overline{A}\\,\\overline{B}C + \\overline{A}B\\overline{C} + A\\overline{B}\\,\\overline{C} + ABC \\qquad ; \\qquad C_{\\text{out}} = AB + AC + BC$$
                <em>Quy tắc nhớ nhanh Full Adder:</em> Đếm số lượng bit 1 trong 3 đầu vào $(A, B, C)$: nếu có <strong>lẻ bit 1</strong> (1 hoặc 3 bit 1) thì $S = 1$, ngược lại $S = 0$; nếu có <strong>từ 2 bit 1 trở lên</strong> thì $C_{\\text{out}} = 1$, ngược lại $C_{\\text{out}} = 0$.
              </li>
            </ul>
          </li>
          <li><strong>Mạch dãy (Sequential Circuits – mạch có nhớ):</strong> Đầu ra phụ thuộc cả đầu vào hiện tại và trạng thái quá khứ. Được xây dựng từ các phần tử nhớ <strong>Flip-Flop (S-R, J-K, D)</strong> kết hợp xung nhịp (Clock) để tạo thành các <strong>Thanh ghi song song</strong> và <strong>Thanh ghi dịch</strong>.</li>
        </ul>
      `
    },
    {
      id: "4.1.3",
      chapter: 4,
      code: "4.1.3",
      title: "Biểu diễn Số nguyên không dấu và Số nguyên có dấu (Mã bù 2)",
      pdfPage: 102,
      printedPage: 101,
      linkedGroups: ["4.1", "4.2.1", "4.2.3"],
      summary: "Dải không dấu [0, 2^n - 1], Mã bù 2 [-2^{n-1}, 2^{n-1} - 1], tìm bù 2, Sign/Zero-extension, bảng dải biểu diễn 6–32 bit và 3 mẹo tính nhẩm Hexa.",
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
      summary: "Tràn nhớ (Cout) vs Tràn số học (Overflow), 2 dạng bài toán tràn số trọng tâm (char +-256 & phạm vi add 32-bit), nhân 64-bit và quy tắc dấu phép chia div/rem RV32M.",
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

        <div class="formula-practice-inline" data-group-link="4.2.4">
          <span>📝 <strong>Nhóm 4.2.4: Bài tập Cộng/Trừ &amp; Tràn số học Overflow (<span class="group-q-count">15 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.4', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('4.2.4', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <h4>3. Nhân/Chia số nguyên và Quy tắc dấu của phép chia trong RISC-V (RV32M)</h4>
        <ul>
          <li><strong>Nhân hai số 32-bit tạo tích 64-bit:</strong> Lệnh <code>mul rd, rs1, rs2</code> lấy <strong>32 bit thấp</strong> của tích; các lệnh <code>mulh</code> (2 số có dấu), <code>mulhu</code> (2 số không dấu), <code>mulhsu</code> (<code>rs1</code> có dấu, <code>rs2</code> không dấu) lấy <strong>32 bit cao</strong> của tích.</li>
          <li><strong>Chia hai số nguyên 32-bit có dấu (<code>div</code> và <code>rem</code>):</strong>
            $$\\text{Số bị chia} = (\\text{Số chia} \\times \\text{Thương}) + \\text{Số dư}$$
            <ul>
              <li><strong>Dấu của Thương (<code>div rd, rs1, rs2</code>):</strong> Cùng dấu thì thương dương ($+$); khác dấu thì thương âm ($-$).</li>
              <li><strong>Dấu của Số dư (<code>rem rd, rs1, rs2</code>):</strong> Số dư <strong>luôn luôn cùng dấu với SỐ BỊ CHIA (<code>rs1</code>)</strong>, bất kể số chia âm hay dương.</li>
            </ul>
          </li>
        </ul>
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
      summary: "Cấu trúc Binary32 (1-8-23, Bias = 127), Double Precision 64-bit, công thức X = (-1)^S * (1.m) * 2^(e-127), các giá trị đặc biệt (+-0, +-Infinity) và tổng số biểu diễn NaN (2^24 - 2).",
      content: `
        <h4>1. Cấu trúc chuẩn IEEE 754 độ chính xác đơn 32-bit (Single Precision – Binary32)</h4>
        <p>Một số thực dấu phẩy động 32-bit gồm <strong>3 trường từ trái sang phải (1 bit – 8 bit – 23 bit)</strong>:</p>

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

  // 4. Dữ liệu Tờ Công thức Bỏ túi (Cheat Sheet) tổng hợp 4 Chương theo KTMT_GK.pdf
  root.KTMT_CHEATSHEET = [
    {
      chapter: 1,
      title: "Chương 1: Hiệu năng máy tính",
      pdfPage: 7,
      items: [
        { label: "Chu kỳ & Tần số", formula: "$$T_0 = \\frac{1}{f_0} \\quad;\\quad T_0\\text{ (ns)} = \\frac{1}{f_0\\text{ (GHz)}}$$" },
        { label: "Tổng chu kỳ & Thời gian CPU", formula: "$$n = IC \\times CPI \\quad;\\quad t_{\\text{CPU}} = n \\cdot T_0 = \\frac{IC \\times CPI}{f_0}$$" },
        { label: "CPI trung bình nhiều lớp lệnh", formula: "$$CPI_{\\text{TB}} = \\frac{\\sum (CPI_i \\times IC_i)}{\\sum IC_i} = \\sum (p_i\\% \\times CPI_i)$$" },
        { label: "So sánh Hiệu năng", formula: "$$P = \\frac{1}{t_{\\text{CPU}}} \\quad;\\quad \\frac{P_A}{P_B} = \\frac{t_B}{t_A} = \\frac{CPI_B/f_B}{CPI_A/f_A}\\text{ (cùng ISA)}$$" },
        { label: "Chỉ số MIPS & MFLOPS", formula: "$$\\text{MIPS} = \\frac{IC}{t_{\\text{CPU}} \\cdot 10^6} = \\frac{f_0\\text{ (MHz)}}{CPI} = \\frac{f_0\\text{ (GHz)} \\cdot 1000}{CPI}$$" }
      ]
    },
    {
      chapter: 2,
      title: "Chương 2: Hệ thống máy tính & Bus",
      pdfPage: 31,
      items: [
        { label: "Thành phần & Ngăn nhớ", formula: "4 phần: CPU (CU, ALU, RF), Main Memory (lệnh/dữ liệu đang chạy), I/O, Bus. Ngăn nhớ: nội dung đổi, địa chỉ cố định." },
        { label: "Chu trình lệnh (RV32I)", formula: "Fetch ($IR \\leftarrow \\text{Mem}[PC],\\; PC \\leftarrow PC + 4$) $\\rightarrow$ Decode &amp; Execute $\\rightarrow$ Kiểm tra Ngắt sau mỗi lệnh." },
        { label: "Bus Địa chỉ & Không gian địa chỉ", formula: "1 chiều (CPU/DMA $\\rightarrow$ Mem, I/O). Độ rộng $N$ bit $\\Rightarrow 2^N$ địa chỉ ($00\\dots 0_2$ đến $11\\dots 1_2$)." },
        { label: "Bus Dữ liệu & Control Bus", formula: "Dữ liệu: 2 chiều, độ rộng $M$ bit $= M/8$ byte/lần. Điều khiển: <code>MEMR, MEMW, IOR, IOW, INTR, INTA, NMI, BRQ, BGT</code>." }
      ]
    },
    {
      chapter: 3,
      title: "Chương 3: Tập lệnh RISC-V (RV32I)",
      pdfPage: 44,
      items: [
        { label: "Little-Endian & Alignment", formula: "LSB ở địa chỉ nhỏ nhất; MSB ở địa chỉ lớn nhất. Word ⋮ 4 (đuôi <code>0,4,8,C</code>), Halfword ⋮ 2 (đuôi chẵn)." },
        { label: "Nạp hằng 32-bit (lui + addi)", formula: "Hằng số <code>addi</code>: $[-2048, +2047]$. Chữ Hexa thứ 3 từ phải $\\ge 8$ (bit 11 $=1$) $\\Rightarrow$ <strong>cộng +1 vào 20 bit cao của <code>lui</code></strong>." },
        { label: "Định địa chỉ PC-relative", formula: "$$\\text{BTA / JTA} = PC_{\\text{hiện tại}} + imm \\iff imm = \\text{Đích} - PC_{\\text{hiện tại}}$$" },
        { label: "Gọi hàm & Ngăn xếp LIFO", formula: "Caller-saved: <code>ra, t0–t6, a0–a7</code>. Callee-saved: <code>sp, s0–s11</code>. Push: <code>addi sp, sp, -4k</code> trước <code>sw</code>; Pop: <code>lw</code> trước <code>addi sp, sp, 4k</code>." }
      ]
    },
    {
      chapter: 4,
      title: "Chương 4: Số học máy tính",
      pdfPage: 100,
      items: [
        { label: "Dải biểu diễn n-bit", formula: "Không dấu: $[0, 2^n - 1]$ ($2^n \\ge M$). Có dấu bù 2: $[-2^{n-1},\\; 2^{n-1}-1]$, đổi dấu: đảo bit $+ 1$." },
        { label: "Mạch tổ hợp & Full Adder", formula: "De Morgan: $\\overline{AB} = \\overline{A}+\\overline{B}$, $\\overline{A+B} = \\overline{A}\\cdot\\overline{B}$. Full Adder: $S = A\\oplus B\\oplus C$, $C_{\\text{out}} = AB+AC+BC$." },
        { label: "Tràn số học & Chia RV32M", formula: "Tràn khi cộng cùng dấu ra trái dấu. <code>char</code>: $S&gt;127 \\Rightarrow S-256$; $S&lt;-128 \\Rightarrow S+256$. <code>add</code>: $[\\text{0x80000000}-K,\\; \\text{0x7FFFFFFF}]$. <code>rem</code> cùng dấu Số bị chia." },
        { label: "IEEE 754 Binary32 (1-8-23)", formula: "$$X = (-1)^S \\times (1.m)_2 \\times 2^{e-127}$$ $\\pm\\infty$: <code>0x7F800000 / 0xFF800000</code>; Số lượng NaN: $2^{24}-2$." }
      ]
    }
  ];
})(typeof window !== "undefined" ? window : globalThis);
