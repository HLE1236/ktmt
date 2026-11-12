// Dữ liệu Lý thuyết trọng tâm, Cấu trúc chương mục và Bảng 32 thanh ghi RISC-V
// Bám sát 100% Tài liệu Ôn tập Trọng tâm Kiến trúc Máy tính (Phiên bản RISC-V) - IT3030, IT3034, IT3283 - ĐHBK Hà Nội

(function (root) {
  // 1. Bảng ánh xạ 32 thanh ghi RISC-V phục vụ tra cứu & Tooltip tương tác khi rê chuột
  root.RISCV_REGISTERS = {
    x0:  { num: "x0",  alias: "zero", bin: "00000", role: "Thanh ghi hằng số, luôn bằng 0 (chỉ đọc - read-only)", saved: "Không áp dụng", group: "Special" },
    x1:  { num: "x1",  alias: "ra",   bin: "00001", role: "Return Address: chứa địa chỉ trở về hàm (PC + 4)", saved: "Caller-saved", group: "Jump/Link" },
    x2:  { num: "x2",  alias: "sp",   bin: "00010", role: "Stack Pointer: con trỏ đỉnh ngăn xếp (phát triển giảm dần)", saved: "Callee-saved", group: "Stack" },
    x3:  { num: "x3",  alias: "gp",   bin: "00011", role: "Global Pointer: con trỏ dữ liệu toàn cục", saved: "Không áp dụng", group: "Special" },
    x4:  { num: "x4",  alias: "tp",   bin: "00100", role: "Thread Pointer: con trỏ luồng", saved: "Không áp dụng", group: "Special" },
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

  // 2. Cấu trúc 4 Chương chuẩn (Bám sát 100% mục lục và phân nhóm trong KTMT.pdf)
  root.KTMT_CHAPTERS = [
    {
      id: 1,
      code: "Chương 1",
      title: "Giới thiệu chung và Hiệu năng máy tính",
      subtitle: "Cấu trúc máy tính, phân cấp bộ nhớ, quy đổi đơn vị, 5 công thức hiệu năng cốt lõi (T0, CPI, t_CPU, MIPS) và CPI hiệu dụng.",
      pdfPageStart: 5,
      printedPageStart: 4,
      theorySections: ["1.1.1", "1.1.2", "1.1.3", "1.1.4"],
      groups: [
        { id: "1.1", title: "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 1", type: "theory", pdfPage: 4, exercises: "Lý thuyết 1.1 - 1.6", count: 6, summary: "Kiến thức nền tảng: Mô hình von Neumann, phân loại máy tính, các mức dịch chương trình và phân loại Flynn." },
        { id: "1.2.1", title: "Nhóm 1: Các thành phần máy tính và Phân cấp bộ nhớ", type: "exercise", pdfPage: 10, exercises: "Bài tập 1.1 - 1.5", count: 5, summary: "Mô hình von Neumann (CPU, RAM, I/O, Bus), thứ tự phân cấp dung lượng bộ nhớ (Register < L1 < L2 < L3 < RAM < SSD/HDD) và mẹo chọn cấu hình PC." },
        { id: "1.2.2", title: "Nhóm 2: Tính chu kỳ xung nhịp (T0), CPI và thời gian thực thi (tCPU)", type: "exercise", pdfPage: 13, exercises: "Bài tập 1.6 - 1.12", count: 7, summary: "Công thức cơ bản: T0 = 1/f0; tCPU = n * T0 = (IC * CPI)/f0. Mẹo nhanh: f0 (GHz) và T0 (ns) triệt tiêu số mũ 10^9 và 10^-9." },
        { id: "1.2.3", title: "Nhóm 3: Bài tập về chỉ số tốc độ MIPS", type: "exercise", pdfPage: 16, exercises: "Bài tập 1.13 - 1.19", count: 7, summary: "MIPS = IC / (tCPU * 10^6) = f0 (MHz) / CPI = [f0 (GHz) * 1000] / CPI. Đơn vị đo số triệu lệnh thực thi trong 1 giây." },
        { id: "1.2.4", title: "Nhóm 4: Tính CPI trung bình và thời gian với nhiều lớp lệnh", type: "exercise", pdfPage: 19, exercises: "Bài tập 1.20 - 1.27", count: 8, summary: "CPI_TB = (sum CPI_i * IC_i) / (sum IC_i) hoặc CPI_TB = sum (p_i% * CPI_i). Sau đó thay vào tính tCPU = (IC * CPI_TB) / f0." },
        { id: "1.2.5", title: "Nhóm 5: So sánh hiệu năng và thời gian giữa các bộ xử lý", type: "exercise", pdfPage: 22, exercises: "Bài tập 1.28 - 1.32", count: 12, summary: "P = 1 / tCPU. So sánh: P_A / P_B = t_B / t_A (máy chạy ít thời gian hơn là máy nhanh hơn). Bài toán thay đổi f0 khi giảm thời gian và tăng CPI." },
        { id: "1.2.6", title: "Nhóm 6: CPI hiệu dụng và Phân loại kiến trúc máy tính", type: "exercise", pdfPage: 29, exercises: "Bài tập 1.33 - 1.35", count: 4, summary: "CPI_hiệu dụng = CPI_cơ bản + Chu kỳ phạt trượt lệnh (100% * miss_I * penalty) + Chu kỳ phạt trượt dữ liệu (%LoadStore * miss_D * penalty). Phân loại Flynn: Multicore = MIMD bộ nhớ dùng chung; chưa có thực tế = MISD." }
      ]
    },
    {
      id: 2,
      code: "Chương 2",
      title: "Hệ thống máy tính",
      subtitle: "CPU (CU, ALU, Registers), Chu trình lệnh (Fetch, Decode, Execute, PC, IR, SP), Khái niệm Ngắt cơ bản, Hệ thống Bus (Bus địa chỉ, Bus dữ liệu, Bus điều khiển) và Liên kết PCIe.",
      pdfPageStart: 32,
      printedPageStart: 31,
      theorySections: ["2.1.1", "2.1.2", "2.1.3"],
      groups: [
        { id: "2.1", title: "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 2", type: "theory", pdfPage: 31, exercises: "Lý thuyết 2.1 - 2.6", count: 6, summary: "Cấu trúc CPU, chu trình thực hiện lệnh, phân loại ngắt và cấu trúc kết nối bus hệ thống." },
        { id: "2.2.1", title: "Nhóm 1: Chu trình lệnh, các thanh ghi PC/IR/SP và Ngăn nhớ", type: "exercise", pdfPage: 37, exercises: "Bài tập 2.1 - 2.6", count: 6, summary: "3 giai đoạn: Nhận lệnh (PC -> Bus địa chỉ, M[PC] -> IR, PC += 4), Giải mã (CU), Thực thi (ALU/Register). Nguyên tắc ngăn nhớ: Giá trị thay đổi nhưng địa chỉ luôn cố định." },
        { id: "2.2.2", title: "Nhóm 2: Hệ thống Bus và Tính toán độ rộng Bus địa chỉ", type: "exercise", pdfPage: 39, exercises: "Bài tập 2.7 - 2.12", count: 6, summary: "Công thức không gian nhớ: M = 2^N (byte hoặc word). Số đường bus địa chỉ: N = log2(M). Số đường bus dữ liệu xác định số bit truyền song song trên mỗi chu kỳ." }
      ]
    },
    {
      id: 3,
      code: "Chương 3",
      title: "Kiến trúc tập lệnh RISC-V",
      subtitle: "Tập 32 thanh ghi, quy tắc Little-Endian, các nhóm lệnh hợp ngữ cốt lõi, dịch C ↔ RISC-V, Vòng lặp, Ngăn xếp (Stack) và Mã máy 32-bit (6 khuôn dạng R, I, S, B, U, J).",
      pdfPageStart: 57,
      printedPageStart: 56,
      theorySections: ["3.1.1", "3.1.2", "3.1.3", "3.1.4"],
      groups: [
        { id: "3.1", title: "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 3 (RISC-V)", type: "theory", pdfPage: 56, exercises: "Lý thuyết 3.1 - 3.8", count: 8, summary: "Nguyên lý thiết kế RISC, 32 thanh ghi RV32I, quy tắc Little-Endian và 4 phương thức định địa chỉ." },
        { id: "3.2.1", title: "Nhóm 1: Thanh ghi, Phương thức định địa chỉ và Kiểm tra hợp lệ", type: "exercise", pdfPage: 63, exercises: "Bài tập 4.1 - 4.11", count: 11, summary: "Phân biệt 4 phương thức định địa chỉ: Định địa chỉ tức thì, Thanh ghi, Cơ sở (Base) và Tương đối PC. Nhận diện các lệnh hợp lệ/không hợp lệ trong RISC-V." },
        { id: "3.2.2", title: "Nhóm 2: Thực thi lệnh Số học, Logic, Dịch bit và Khởi tạo thanh ghi", type: "exercise", pdfPage: 67, exercises: "Bài tập 4.12 - 4.25", count: 20, summary: "add, sub, addi, and, or, xor, sll, srl, sra. Lưu ý dải hằng số 12-bit có dấu [-2048, 2047], lệnh lui nạp 20 bit cao và kỹ thuật đảo bit qua xori rd, rs1, -1." },
        { id: "3.2.3", title: "Nhóm 3: Lệnh so sánh (slt, sltu, blt, bltu) và Rẽ nhánh cơ bản", type: "exercise", pdfPage: 75, exercises: "Bài tập 4.26 - 4.28", count: 6, summary: "So sánh có dấu (slt, blt, bge) coi MSB=1 là số âm; so sánh không dấu (sltu, bltu, bgeu) coi mọi số đều dương. Lệnh rẽ nhánh beq, bne." },
        { id: "3.2.4", title: "Nhóm 4: Truy cập bộ nhớ (lw, lh, lb, sw) theo thứ tự Little-Endian", type: "exercise", pdfPage: 77, exercises: "Bài tập 4.29 - 4.32", count: 8, summary: "Quy tắc byte có trọng số thấp nhất (LSB) nằm ở địa chỉ bộ nhớ nhỏ nhất. Lệnh nạp mở rộng dấu (lh, lb) vs mở rộng 0 (lhu, lbu), lệnh cất sw, sh, sb." },
        { id: "3.2.5", title: "Nhóm 5: Chuyển đổi câu lệnh C sang Hợp ngữ RISC-V (Mảng, Con trỏ, Rẽ nhánh)", type: "exercise", pdfPage: 82, exercises: "Bài tập 4.33 - 4.41", count: 6, summary: "Công thức địa chỉ phần tử mảng: &A[i] = Base + i * 4 (dùng slli temp, i, 2 rồi add temp, temp, base). Chuyển đổi if-else, switch-case sang hợp ngữ." },
        { id: "3.2.6", title: "Nhóm 6: Phân tích Vòng lặp và Đếm tổng số lệnh thực thi", type: "exercise", pdfPage: 89, exercises: "Bài tập 4.42 - 4.45", count: 3, summary: "Công thức đếm tổng số lệnh thực thi trong vòng lặp: Số lệnh khởi tạo ngoài vòng lặp + N * (Số lệnh thân vòng lặp + lệnh rẽ nhánh) + 1 lệnh rẽ nhánh thoát cuối cùng." },
        { id: "3.2.7", title: "Nhóm 7: Chương trình con, Ngăn xếp (Stack) và Lệnh jal / jalr", type: "exercise", pdfPage: 93, exercises: "Bài tập 4.46 - 4.49", count: 4, summary: "Quy ước thanh ghi: s0-s11 là callee-saved (phải cất vào ngăn xếp nếu dùng), a0-a7 là tham số & kết quả trả về, ra là địa chỉ trở về hàm. Đỉnh ngăn xếp phát triển giảm dần (sp -= 16)." },
        { id: "3.2.8", title: "Nhóm 8: Dịch Mã máy ↔ Hợp ngữ, Tính địa chỉ đích và Lập trình Vào-Ra", type: "exercise", pdfPage: 96, exercises: "Bài tập 4.50 - 4.59", count: 12, summary: "6 khuôn dạng lệnh: R, I, S, B, U, J. Tính địa chỉ đích rẽ nhánh: Target = PC + (imm << 1). Cổng Vào-Ra ánh xạ bộ nhớ (Memory-mapped I/O)." }
      ]
    },
    {
      id: 4,
      code: "Chương 4",
      title: "Số học máy tính",
      subtitle: "Hệ đếm, Đại số Boolean & Cổng logic, Số nguyên có dấu (Mã bù 2), Cộng/Trừ và Tràn số học (Overflow), Nhân/Chia RV32M (div, rem) và Số thực dấu phẩy động IEEE 754 32-bit.",
      pdfPageStart: 105,
      printedPageStart: 104,
      theorySections: ["4.1.1", "4.1.2", "4.1.3", "4.1.4", "4.1.5", "4.1.6"],
      groups: [
        { id: "4.1", title: "Phần 1: Câu hỏi Ôn tập Lý thuyết Chương 4 (Số học máy tính)", type: "theory", pdfPage: 104, exercises: "Lý thuyết 4.1 - 4.8", count: 8, summary: "Hệ nhị phân, bù 2, nguyên lý mạch cộng ALU, phép nhân/chia và chuẩn IEEE 754." },
        { id: "4.2.1", title: "Nhóm 1: Nhận diện Cổng logic và Biểu thức Đại số Boolean", type: "exercise", pdfPage: 111, exercises: "Bài tập 5.1 - 5.2", count: 3, summary: "Nhận dạng 6 cổng logic cơ bản (AND, OR, NOT, NAND, NOR, XOR), bảng chân lý và biến đổi biểu thức Boolean." },
        { id: "4.2.2", title: "Nhóm 2: Chuyển đổi và So sánh Số nguyên có dấu (Mã bù 2)", type: "exercise", pdfPage: 112, exercises: "Bài tập 5.3 - 5.7", count: 7, summary: "Giá trị bù 2: A = -a_{n-1}*2^{n-1} + sum a_i*2^i. Đổi dấu số bù 2: Đảo tất cả các bit rồi cộng thêm 1. Dải giá trị n-bit: [-2^{n-1}, 2^{n-1} - 1]." },
        { id: "4.2.3", title: "Nhóm 3: Phép cộng/trừ số nguyên và Hiện tượng Tràn số học (Overflow)", type: "exercise", pdfPage: 115, exercises: "Bài tập 5.8 - 5.12", count: 6, summary: "Tràn số học chỉ xảy ra khi cộng 2 số cùng dấu mà ra kết quả trái dấu. Phép trừ A - B chuyển thành A + (-B). Dấu hiệu tràn trên mạch cộng: Cin != Cout ở bit dấu (MSB)." },
        { id: "4.2.4", title: "Nhóm 4: Lệnh Chia và Lấy phần dư số nguyên (div, rem)", type: "exercise", pdfPage: 118, exercises: "Bài tập 5.13", count: 1, summary: "Mở rộng RV32M: div rd, rs1, rs2 (lấy phần thương), rem rd, rs1, rs2 (lấy phần dư). Dấu của phần dư rem luôn cùng dấu với số bị chia (dividend rs1)." },
        { id: "4.2.5", title: "Nhóm 5: Số thực dấu phẩy động chuẩn IEEE 754 32-bit", type: "exercise", pdfPage: 119, exercises: "Bài tập 5.14 - 5.18", count: 10, summary: "Cấu trúc 32-bit: 1 bit dấu S, 8 bit mũ e = E + 127, 23 bit định trị m. Giá trị = (-1)^S * (1.m) * 2^(e - 127). Quy tắc đổi nhanh thập phân sang Hex 32-bit." }
      ]
    },
    {
      id: 6,
      code: "Chương 6",
      title: "Bộ nhớ máy tính",
      subtitle: "Tổ chức Băng nhớ vật lý đan xen (Interleaved Memory Banks) và Thiết bị lưu trữ ngoài (Ổ đĩa HDD vs Ổ bán dẫn SSD).",
      pdfPageStart: 44,
      printedPageStart: 43,
      theorySections: ["6.1.1", "6.1.2"],
      groups: [
        { id: "6.2.1", title: "Nhóm 1: Băng nhớ vật lý đan xen (Memory Banks)", type: "exercise", pdfPage: 44, exercises: "Bài tập 2.16 - 2.18c", count: 6, summary: "Bus dữ liệu m-bit -> K = m/8 băng nhớ đan xen theo byte. Vị trí băng chứa byte = Địa chỉ mod K. Địa chỉ bên trong băng = floor(Địa chỉ / K)." },
        { id: "6.2.2", title: "Nhóm 2: Thiết bị lưu trữ ngoài HDD & SSD", type: "exercise", pdfPage: 50, exercises: "Bài tập 2.25a - 2.25b", count: 2, summary: "So sánh ổ cứng cơ học HDD và ổ thể rắn SSD (chip Flash NAND, tốc độ truy xuất, độ bền ghi xóa, kịch bản ứng dụng Server vs Camera)." }
      ]
    },
    {
      id: 7,
      code: "Chương 7",
      title: "Hệ thống vào-ra",
      subtitle: "Không gian địa chỉ I/O (MMIO vs Isolated I/O), Phương pháp điều khiển Vào-Ra (Programmed I/O / Polling, Ngắt PIC, DMA / DMAC).",
      pdfPageStart: 42,
      printedPageStart: 41,
      theorySections: ["7.1.1", "7.1.2"],
      groups: [
        { id: "7.2.1", title: "Nhóm 1: Không gian địa chỉ Vào-Ra (MMIO & Isolated I/O)", type: "exercise", pdfPage: 42, exercises: "Bài tập 2.13 - 2.15b", count: 4, summary: "Bản đồ bộ nhớ (Memory-mapped I/O) chia sẻ cùng không gian RAM, dùng lệnh lw/sw. Vào-ra riêng biệt (Isolated I/O) dùng cổng I/O riêng, lệnh IN/OUT chuyên biệt." },
        { id: "7.2.2", title: "Nhóm 2: Phương pháp điều khiển Vào-Ra (Polling, Ngắt PIC, DMA)", type: "exercise", pdfPage: 47, exercises: "Bài tập 2.19 - 2.24", count: 7, summary: "Hiệu suất: Polling (CPU bận 100%) < Interrupt-driven (giải phóng CPU lúc chờ) < DMA (truyền khối không qua CPU). Cấu trúc DMAC và bộ điều khiển ngắt PIC." }
      ]
    }
  ];

  // 3. Nội dung chi tiết Sổ tay Lý thuyết trọng tâm (Bám sát 100% file KTMT.pdf)
  root.KTMT_THEORY = [
    // ==================== CHƯƠNG 1 ====================
    {
      id: "1.1.1",
      chapter: 1,
      code: "1.1.1",
      title: "Khái niệm cơ bản và các thành phần của máy tính",
      pdfPage: 5,
      printedPage: 4,
      linkedGroups: ["1.1", "1.2.1"],
      summary: "Định nghĩa Máy tính, Chương trình và 4 thành phần cốt lõi của mọi máy tính theo mô hình von Neumann.",
      content: `
        <h4>1. Máy tính và Chương trình là gì?</h4>
        <ul>
          <li><strong>Máy tính (Computer):</strong> Là thiết bị điện tử hoạt động tự động theo chương trình. Máy tính nhận dữ liệu đầu vào (<em>Input data</em>), lưu trữ, xử lý dữ liệu đó và xuất ra thông tin kết quả (<em>Output information</em>).</li>
          <li><strong>Chương trình (Program):</strong> Là một dãy các lệnh được viết sẵn và lưu trong bộ nhớ để điều khiển máy tính thực hiện công việc.</li>
        </ul>

        <h4>2. Bốn thành phần cơ bản của mọi máy tính</h4>
        <p>Dù là điện thoại thông minh, máy tính cá nhân hay siêu máy tính, mọi máy tính đều cấu tạo từ <strong>4 thành phần cốt lõi</strong>:</p>
        <ol>
          <li><strong>Bộ xử lý trung tâm (CPU - Central Processing Unit):</strong> Thành phần quan trọng nhất và nhanh nhất, có nhiệm vụ điều khiển hoạt động của toàn bộ máy tính và trực tiếp xử lý dữ liệu.</li>
          <li><strong>Bộ nhớ chính (Main Memory - thường gọi là RAM):</strong> Chứa các lệnh và dữ liệu của chương trình <strong>đang được thực hiện</strong>.</li>
          <li><strong>Hệ thống vào-ra (Input/Output - I/O):</strong> Trao đổi thông tin giữa máy tính với thế giới bên ngoài (bàn phím, chuột, màn hình, mạng, ổ cứng...).</li>
          <li><strong>Liên kết hệ thống (System Interconnection):</strong> Hệ thống các đường truyền (Bus) kết nối và vận chuyển thông tin giữa CPU, Bộ nhớ chính và Hệ thống vào-ra.</li>
        </ol>

        <div class="callout callout-trap">
          <div class="callout-title">⚠️ Lưu ý & Bẫy đề thi trắc nghiệm</div>
          <p>Các đề thi Giữa kỳ và Cuối kỳ rất hay hỏi: <em>“Thành phần nào chứa các lệnh và dữ liệu của chương trình đang được thực hiện?”</em> — Đáp án bắt buộc là <strong>Bộ nhớ chính (Main Memory / RAM)</strong>. Ổ cứng SSD/HDD là bộ nhớ ngoài chỉ dùng để lưu trữ lâu dài khi chưa chạy; còn Cache và Tập thanh ghi chỉ lưu tạm một phần rất nhỏ dữ liệu/lệnh tức thời.</p>
        </div>
      `
    },
    {
      id: "1.1.2",
      chapter: 1,
      code: "1.1.2",
      title: "Phân loại máy tính và cấu hình thực tế",
      pdfPage: 6,
      printedPage: 5,
      linkedGroups: ["1.1", "1.2.1"],
      summary: "5 nhóm máy tính phổ biến, quy tắc phân cấp dung lượng bộ nhớ và mẹo loại trừ đáp án sai khi chọn cấu hình PC.",
      content: `
        <h4>1. Năm nhóm máy tính phổ biến</h4>
        <ul>
          <li><strong>Máy tính cá nhân (PC - Personal Computer):</strong> Máy để bàn (Desktop), máy xách tay (Laptop). Dùng cho mục đích đa dụng cá nhân.</li>
          <li><strong>Thiết bị di động cá nhân (PMD - Personal Mobile Devices):</strong> Điện thoại thông minh (Smartphone), máy tính bảng (Tablet).</li>
          <li><strong>Máy tính nhúng / IoT (Embedded Computers / Internet of Things):</strong> Máy tính được đặt ẩn bên trong một thiết bị khác (trong ô tô, máy giặt, tivi) để điều khiển chuyên dụng. Nếu máy tính nhúng có kết nối Internet thì được gọi là thiết bị IoT.</li>
          <li><strong>Máy chủ (Servers):</strong> Máy tính có hiệu năng và độ tin cậy cao, hoạt động liên tục trên mạng để cung cấp dịch vụ cho nhiều người dùng.</li>
          <li><strong>Máy tính quy mô kho / Siêu máy tính (WSC / Supercomputers):</strong> Kết nối hàng nghìn máy chủ với nhau (Clusters), phục vụ tính toán khoa học kỹ thuật phức tạp, trị giá hàng triệu đến hàng trăm triệu USD.</li>
        </ul>

        <h4>2. Thứ tự dung lượng bộ nhớ và cách chọn cấu hình PC hợp lý</h4>
        <div class="callout callout-formula">
          <div class="callout-title">📐 Nguyên tắc phân cấp bộ nhớ</div>
          <p><strong>Bộ nhớ càng gần CPU thì tốc độ càng nhanh nhưng dung lượng càng nhỏ.</strong></p>
          <p>Thứ tự dung lượng <strong>tăng dần</strong> (từ nhỏ nhất đến lớn nhất):</p>
          <p class="formula-highlight">Tập thanh ghi &lt; Cache L1 &lt; Cache L2 &lt; Cache L3 &lt; Bộ nhớ chính (RAM) &lt; Bộ nhớ ngoài (SSD/HDD)</p>
        </div>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Mẹo nhận biết nhanh cấu hình PC đúng trong đề thi trắc nghiệm</div>
          <ul>
            <li><strong>Cache L1:</strong> Rất nhỏ, chỉ tính bằng <strong>KB</strong> (thường là <code>32KB</code> hoặc <code>64KB</code>). Nếu đáp án ghi Cache L1 là MB hay GB → <strong>Loại ngay</strong>.</li>
            <li><strong>Cache L2:</strong> Lớn hơn L1, thường vài trăm <strong>KB</strong> (ví dụ: <code>256KB</code> hoặc <code>512KB</code>). Nếu ghi <code>256GB</code> → <strong>Loại ngay</strong>.</li>
            <li><strong>Cache L3:</strong> Tính bằng <strong>MB</strong> (thường là <code>8MB</code>, <code>16MB</code>). Nếu ghi <code>16GB</code> → <strong>Loại ngay</strong>.</li>
            <li><strong>RAM (Bộ nhớ chính):</strong> Tính bằng <strong>GB</strong> (thường từ <code>4GB, 8GB, 16GB, 32GB</code>). Nếu ghi <code>2TB</code> cho PC thông thường (lớn hơn cả SSD 1TB) → <strong>Loại ngay</strong>.</li>
            <li><strong>SSD (Ổ cứng):</strong> Dung lượng lớn nhất, thường là <code>512GB</code> hoặc <code>1TB</code>.</li>
            <li><em>Cẩn thận bẫy thứ tự liệt kê:</em> Một số đề đưa thông số <code>RAM</code> lên đầu dòng trước <code>Cache L1</code> để đánh lạc hướng!</li>
          </ul>
        </div>
      `
    },
    {
      id: "1.1.3",
      chapter: 1,
      code: "1.1.3",
      title: "Ba khía cạnh của Kiến trúc máy tính và các mức ngôn ngữ",
      pdfPage: 7,
      printedPage: 6,
      linkedGroups: ["1.1", "1.2.6"],
      summary: "Phân biệt ISA, Tổ chức máy tính (Vi kiến trúc) và Phần cứng; quá trình dịch chương trình C → Assembly → Mã máy và Phân loại Flynn (SISD, SIMD, MISD, MIMD).",
      content: `
        <h4>1. Ba khía cạnh nghiên cứu máy tính</h4>
        <ul>
          <li><strong>Kiến trúc tập lệnh (ISA - Instruction Set Architecture):</strong> Là cách nhìn máy tính của người lập trình hợp ngữ. Nó đóng vai trò là <strong>giao diện giữa phần cứng và phần mềm</strong>. Các ISA phổ biến:
            <ul>
              <li><strong>Intel x86:</strong> Dùng cho PC, Laptop, Server.</li>
              <li><strong>ARM:</strong> Dùng phổ biến cho thiết bị di động (Smartphone, Tablet).</li>
              <li><strong>RISC-V:</strong> Kiến trúc tập lệnh mở, miễn phí bản quyền, ra đời năm 2010 tại ĐH UC Berkeley.</li>
            </ul>
          </li>
          <li><strong>Tổ chức máy tính (Computer Organization) hay Vi kiến trúc (Microarchitecture):</strong> Cách thiết kế phần cứng ở mức cao để thực thi tập lệnh đó (thiết kế bên trong CPU, đường ống lệnh pipeline, bộ nhớ Cache, cấu trúc Bus).</li>
          <li><strong>Phần cứng (Hardware):</strong> Công nghệ chế tạo mạch điện tử và đóng gói chip vật lý.</li>
        </ul>

        <h4>2. Quá trình dịch một chương trình</h4>
        <p>Máy tính không hiểu trực tiếp ngôn ngữ bậc cao như C/C++. Chương trình phải được dịch qua các bước:</p>
        <ul>
          <li><strong>Bước 1 – Biên dịch (Compiler):</strong> Dịch từ <strong>Ngôn ngữ bậc cao (C)</strong> sang <strong>Hợp ngữ (Assembly)</strong>.</li>
          <li><strong>Bước 2 – Hợp dịch (Assembler):</strong> Dịch từ <strong>Hợp ngữ (Assembly)</strong> sang <strong>Ngôn ngữ máy (Mã nhị phân 0 và 1)</strong>.</li>
        </ul>

        <h4>3. Phân loại kiến trúc máy tính của Flynn</h4>
        <ul>
          <li><strong>SISD (Single Instruction, Single Data):</strong> Máy tính đơn lõi cổ điển (1 dòng lệnh, 1 dòng dữ liệu).</li>
          <li><strong>SIMD (Single Instruction, Multiple Data):</strong> Xử lý vector, GPU (1 lệnh điều khiển nhiều dữ liệu cùng lúc).</li>
          <li><strong>MISD (Multiple Instruction, Single Data):</strong> Nhiều dòng lệnh tác động lên 1 dòng dữ liệu → <strong>Chưa tồn tại máy tính thương mại thực tế</strong>.</li>
          <li><strong>MIMD (Multiple Instruction, Multiple Data):</strong> Hệ thống đa xử lý. Một bộ xử lý đa lõi (<em>multicore processor</em>) có nhiều nhân CPU cùng nằm trên 1 chip và cùng truy cập chung một bộ nhớ chính (RAM), nên thuộc loại <strong>MIMD với bộ nhớ dùng chung</strong>.</li>
        </ul>
      `
    },
    {
      id: "1.1.4",
      chapter: 1,
      code: "1.1.4",
      title: "Đánh giá hiệu năng máy tính (Trọng tâm tính toán)",
      pdfPage: 8,
      printedPage: 7,
      linkedGroups: ["1.2.2", "1.2.3", "1.2.4", "1.2.5", "1.2.6"],
      summary: "Bảng quy đổi đơn vị chuẩn (MHz, GHz, ms, us, ns, ps) và 6 công thức cốt lõi tính T0, t_CPU, CPI trung bình, so sánh hiệu năng, MIPS và CPI hiệu dụng.",
      content: `
        <p>Đây là phần <strong>chắc chắn xuất hiện từ 2 đến 4 câu</strong> trong cả bài thi Giữa kỳ và Cuối kỳ. Để không bao giờ làm sai, bạn cần nắm vững bảng đổi đơn vị và các công thức dưới đây.</p>

        <h4>1. Bảng quy đổi đơn vị bắt buộc phải thuộc</h4>
        <table class="theory-table">
          <thead>
            <tr>
              <th>Đại lượng</th>
              <th>Đơn vị trong đề bài</th>
              <th>Cách đổi về đơn vị chuẩn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2"><strong>Tần số ($f_0$)</strong></td>
              <td>$1\\text{ MHz}$ (Mega-Hertz)</td>
              <td>$= 10^6\\text{ Hz}$ (1 triệu xung/giây)</td>
            </tr>
            <tr>
              <td>$1\\text{ GHz}$ (Giga-Hertz)</td>
              <td>$= 10^9\\text{ Hz}$ (1 tỷ xung/giây)</td>
            </tr>
            <tr>
              <td rowspan="4"><strong>Thời gian ($T_0, t$)</strong></td>
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
              <td>$= 10^9\\text{ lệnh}$</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Mẹo tính nhanh giữa GHz và ns</div>
          <p>Nếu tần số tính bằng $\\text{GHz}$ ($10^9\\text{ Hz}$) và chu kỳ tính bằng $\\text{ns}$ ($10^{-9}\\text{ s}$), hai số mũ $10^9$ và $10^{-9}$ tự triệt tiêu nhau:</p>
          <p>$$T_0\\text{ (ns)} = \\frac{1}{f_0\\text{ (GHz)}}$$</p>
          <p>Ví dụ: $f_0 = 4\\text{ GHz} \\Rightarrow T_0 = \\frac{1}{4} = 0.25\\text{ ns}$.</p>
        </div>

        <h4>2. Năm công thức cốt lõi về Hiệu năng (+ Công thức CPI hiệu dụng)</h4>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức 1: Chu kỳ xung nhịp ($T_0$) và Tần số xung nhịp ($f_0$)</div>
          <p>$$T_0 = \\frac{1}{f_0} \\quad \\text{và} \\quad f_0 = \\frac{1}{T_0}$$</p>
          <ul>
            <li>$T_0$ (Clock period): Thời gian của 1 chu kỳ xung nhịp (đơn vị: giây, ns, ps).</li>
            <li>$f_0$ (Clock rate / Clock speed): Tốc độ xung nhịp, tức số chu kỳ trong 1 giây (đơn vị: Hz, MHz, GHz).</li>
          </ul>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức 2: Thời gian thực thi của CPU ($t_{\\text{CPU}}$)</div>
          <p>Tổng số chu kỳ xung nhịp ($n$) của chương trình: $$n = IC \\times CPI$$</p>
          <p>Thời gian thực thi của CPU: $$t_{\\text{CPU}} = n \\times T_0 = \\frac{n}{f_0} = IC \\times CPI \\times T_0 = \\frac{IC \\times CPI}{f_0}$$</p>
          <ul>
            <li>$IC$ (Instruction Count): Tổng số lệnh được thực thi của chương trình.</li>
            <li>$CPI$ (Cycles Per Instruction): Số chu kỳ xung nhịp trung bình trên một lệnh.</li>
          </ul>
        </div>

        <div class="formula-practice-inline">
          <span>📝 <strong>Dạng bài liên quan trong PDF: Nhóm 2 - Tính T0, CPI và tCPU (7 câu)</strong></span>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-outline-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.2', 'exam')">⏱️ Test</button>
            <button class="btn btn-outline-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.2', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức 3: Tính $CPI$ trung bình khi chương trình có nhiều loại lệnh</div>
          <ul>
            <li><strong>Trường hợp 1 (Cho số lượng lệnh cụ thể $IC_1, IC_2, \\dots, IC_k$):</strong>
              $$CPI_{\\text{TB}} = \\frac{n}{IC} = \\frac{CPI_1 \\times IC_1 + CPI_2 \\times IC_2 + \\dots + CPI_k \\times IC_k}{IC_1 + IC_2 + \\dots + IC_k}$$
            </li>
            <li><strong>Trường hợp 2 (Cho tỷ lệ phần trăm $p_1\\%, p_2\\%, \\dots, p_k\\%$):</strong>
              $$CPI_{\\text{TB}} = (p_1\\% \\times CPI_1) + (p_2\\% \\times CPI_2) + \\dots + (p_k\\% \\times CPI_k)$$
            </li>
          </ul>
        </div>

        <div class="formula-practice-inline">
          <span>📝 <strong>Dạng bài liên quan trong PDF: Nhóm 4 - Tính CPI trung bình nhiều lớp lệnh (8 câu)</strong></span>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-outline-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.4', 'exam')">⏱️ Test</button>
            <button class="btn btn-outline-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.4', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức 4: So sánh hiệu năng giữa hai máy tính</div>
          <p>Hiệu năng ($P$) tỷ lệ nghịch với thời gian thực thi ($t$): máy nào chạy hết <strong>ít thời gian hơn</strong> thì máy đó <strong>nhanh hơn</strong>:</p>
          <p>$$P = \\frac{1}{t_{\\text{CPU}}} \\quad \\Longrightarrow \\quad \\frac{P_A}{P_B} = \\frac{t_B}{t_A}$$</p>
          <p><em>Lưu ý:</em> Khi đề hỏi <strong>“Máy A nhanh hơn máy B bao nhiêu lần?”</strong> (hoặc “P2 nhanh hơn P1 bao nhiêu lần?”), ta lấy <strong>thời gian của máy B chia cho thời gian của máy A</strong> ($t_B / t_A$, hoặc $t_1 / t_2$).</p>
        </div>

        <div class="formula-practice-inline">
          <span>📝 <strong>Dạng bài liên quan trong PDF: Nhóm 5 - So sánh hiệu năng CPU (12 câu)</strong></span>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-outline-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.5', 'exam')">⏱️ Test</button>
            <button class="btn btn-outline-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.5', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức 5: Tốc độ thực hiện lệnh MIPS (Millions of Instructions Per Second)</div>
          <p>MIPS là đơn vị đo “Số triệu lệnh thực hiện được trong 1 giây”:</p>
          <p>$$\\text{MIPS} = \\frac{IC}{t_{\\text{CPU}} \\times 10^6} = \\frac{f_0}{CPI \\times 10^6}$$</p>
          <ul>
            <li>Nếu $f_0$ cho theo <strong>MHz</strong>: $\\text{MIPS} = \\dfrac{f_0\\text{ (MHz)}}{CPI}$</li>
            <li>Nếu $f_0$ cho theo <strong>GHz</strong>: $\\text{MIPS} = \\dfrac{f_0\\text{ (GHz)} \\times 1000}{CPI} \\implies CPI = \\dfrac{f_0\\text{ (GHz)} \\times 1000}{\\text{MIPS}}$</li>
          </ul>
        </div>

        <div class="formula-practice-inline">
          <span>📝 <strong>Dạng bài liên quan trong PDF: Nhóm 3 - Bài tập chỉ số MIPS (7 câu)</strong></span>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-outline-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.3', 'exam')">⏱️ Test</button>
            <button class="btn btn-outline-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.3', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức 6 (Đề Cuối kỳ): Tính $CPI$ hiệu dụng (Effective / Actual CPI) khi có Cache Miss</div>
          <p>Mọi lệnh ($100\\%$) đều phải đọc từ Cache lệnh (I-cache), nhưng chỉ có các lệnh Load/Store ($p_{\\text{mem}}\\%$) mới truy cập Cache dữ liệu (D-cache):</p>
          <p>$$CPI_{\\text{hiệu dụng}} = CPI_{\\text{cơ bản}} + (100\\% \\times \\text{MissRate}_{\\text{I-cache}} \\times \\text{Penalty}) + (p_{\\text{mem}}\\% \\times \\text{MissRate}_{\\text{D-cache}} \\times \\text{Penalty})$$</p>
        </div>

        <div class="formula-practice-inline">
          <span>📝 <strong>Dạng bài liên quan trong PDF: Nhóm 6 - CPI hiệu dụng & Phân loại Flynn (4 câu)</strong></span>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-outline-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.6', 'exam')">⏱️ Test</button>
            <button class="btn btn-outline-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('1.2.6', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },

    // ==================== CHƯƠNG 2 ====================
    {
      id: "2.1.1",
      chapter: 2,
      code: "2.1.1",
      title: "Chi tiết các thành phần cơ bản của máy tính",
      pdfPage: 32,
      printedPage: 31,
      linkedGroups: ["2.1", "2.2.1"],
      summary: "Cấu tạo bên trong CPU (CU, ALU, RF), Hệ thống Bộ nhớ (nguyên tắc vàng của ngăn nhớ) và Hệ thống Vào-Ra (Thiết bị ngoại vi vs Mô-đun vào-ra).",
      content: `
        <h4>1. Bộ xử lý trung tâm (CPU - Central Processing Unit)</h4>
        <p>CPU điều khiển toàn bộ hoạt động của máy tính theo chương trình nằm trong bộ nhớ chính và trực tiếp xử lý dữ liệu. Bên trong CPU gồm <strong>3 bộ phận cốt lõi</strong>:</p>
        <ul>
          <li><strong>Đơn vị điều khiển (CU - Control Unit):</strong> Giải mã lệnh và phát ra các tín hiệu điều khiển hoạt động của toàn bộ máy tính theo chương trình định sẵn.</li>
          <li><strong>Đơn vị số học và logic (ALU - Arithmetic and Logic Unit):</strong> Trực tiếp thực hiện các phép toán số học (cộng, trừ, nhân, chia, so sánh) và các phép toán logic (AND, OR, XOR, dịch bit).</li>
          <li><strong>Tập thanh ghi (RF - Register File):</strong> Các ô nhớ dung lượng nhỏ nhưng có tốc độ truy cập nhanh nhất trong máy tính, nằm ngay bên trong CPU để lưu trữ các thông tin tạm thời phục vụ hoạt động tức thời của CPU.</li>
        </ul>

        <h4>2. Bộ nhớ máy tính (Memory System)</h4>
        <ul>
          <li><strong>Bộ nhớ chính (Main Memory - RAM):</strong> Chứa các lệnh và dữ liệu của chương trình đang được thực hiện. Bộ nhớ chính được chia thành các ngăn nhớ (thường mỗi ngăn nhớ là $1\\text{ byte} = 8\\text{ bit}$) và mỗi ngăn nhớ có một địa chỉ xác định.</li>
          <li><strong>Bộ nhớ đệm (Cache):</strong> Bộ nhớ bán dẫn tốc độ rất nhanh đặt đệm giữa CPU và Bộ nhớ chính nhằm tăng tốc độ CPU truy cập bộ nhớ (chia thành L1, L2, L3 tích hợp trên chip xử lý).</li>
          <li><strong>Thiết bị lưu trữ (Storage / Bộ nhớ ngoài):</strong> Lưu giữ lâu dài tài nguyên phần mềm và dữ liệu (HDD, SSD, thẻ nhớ). Về mặt cấu trúc kết nối, bộ nhớ ngoài được nối vào máy tính như một thiết bị vào-ra.</li>
        </ul>

        <div class="callout callout-trap">
          <div class="callout-title">⚠️ Nguyên tắc vàng của ngăn nhớ (Rất hay hỏi điền khuyết)</div>
          <p>“Mỗi ngăn nhớ trong máy tính có <strong>nội dung (hoặc giá trị)</strong> thay đổi được, nhưng <strong>địa chỉ (hoặc địa chỉ vật lý)</strong> của nó luôn cố định.”</p>
        </div>

        <h4>3. Hệ thống vào-ra (Input/Output System)</h4>
        <p>Bao gồm 2 phần phân biệt rõ ràng:</p>
        <ul>
          <li><strong>Các thiết bị vào-ra (I/O Devices / Thiết bị ngoại vi - Peripherals):</strong> Bàn phím, chuột, màn hình, máy in, ổ cứng, card mạng. Chúng <strong>không nối trực tiếp</strong> vào Bus hệ thống mà phải đi qua Mô-đun vào-ra.</li>
          <li><strong>Các mô-đun vào-ra (I/O Modules):</strong> Là mạch ghép nối trung gian giữa Bus hệ thống (CPU/Bộ nhớ) với các thiết bị ngoại vi. Mỗi mô-đun vào-ra chứa một hoặc nhiều <strong>cổng vào-ra (I/O Ports)</strong>, mỗi cổng được gán một địa chỉ xác định. CPU muốn giao tiếp với thiết bị ngoại vi nào thì phải đọc/ghi thông qua địa chỉ của cổng vào-ra tương ứng.</li>
        </ul>
      `
    },
    {
      id: "2.1.2",
      chapter: 2,
      code: "2.1.2",
      title: "Ba hoạt động cơ bản của máy tính (Chu trình lệnh, Ngắt, Vào-Ra)",
      pdfPage: 33,
      printedPage: 32,
      linkedGroups: ["2.1", "2.2.1"],
      summary: "Chu trình lệnh (Fetch - Decode - Execute), thanh ghi PC & IR, quy trình 5 bước xử lý Ngắt (Interrupt), PIC, và so sánh 3 phương pháp Vào-Ra (Polling, Interrupt-driven, DMA).",
      content: `
        <h4>1. Hoạt động thực hiện chương trình (Chu trình lệnh - Instruction Cycle)</h4>
        <ol>
          <li><strong>Tìm nạp lệnh (Fetch):</strong> CPU lấy lệnh từ bộ nhớ chính vào CPU. Hai thanh ghi chuyên dụng phục vụ quá trình này là:
            <ul>
              <li><strong>Bộ đếm chương trình PC (Program Counter):</strong> Luôn giữ <strong>địa chỉ của lệnh tiếp theo</strong> sẽ được nạp vào (trong x86 gọi là IP - Instruction Pointer).</li>
              <li><strong>Thanh ghi lệnh IR (Instruction Register):</strong> Chứa <strong>mã lệnh</strong> vừa được đọc từ bộ nhớ chính lên.</li>
              <li>Sau khi nạp lệnh, nếu thực hiện tuần tự, nội dung thanh ghi PC tự động tăng thêm 4 byte ($\\text{PC} = \\text{PC} + 4$ đối với lệnh 32-bit của RISC-V).</li>
            </ul>
          </li>
          <li><strong>Giải mã lệnh (Decode):</strong> Diễn ra <strong>ngay sau giai đoạn lấy lệnh (Fetch)</strong>. Đơn vị điều khiển (CU) phân tích mã lệnh trong IR để xác định thao tác cần làm và các toán hạng cần dùng.</li>
          <li><strong>Thực hiện lệnh (Execute):</strong> CPU phát tín hiệu điều khiển thực hiện 1 trong 3 nhóm thao tác:
            <ul>
              <li><em>Trao đổi dữ liệu (Data Transfer):</em> Đọc/ghi giữa CPU và Bộ nhớ hoặc Mô-đun vào-ra.</li>
              <li><em>Xử lý số học / logic (Arithmetic / Logic):</em> Tính toán trên ALU.</li>
              <li><em>Điều khiển luồng (Control Flow):</em> Rẽ nhánh có điều kiện (<code>beq</code>, <code>bne</code>) hoặc nhảy không điều kiện (<code>jal</code>), bản chất là nạp địa chỉ đích mới vào thanh ghi PC.</li>
            </ul>
          </li>
        </ol>

        <h4>2. Hoạt động Ngắt (Interrupt)</h4>
        <p><strong>Ngắt</strong> là cơ chế cho phép CPU tạm dừng chương trình đang thực hiện để chuyển sang thực hiện một chương trình con xử lý ngắt (<em>Interrupt Handler</em>) có sẵn trong bộ nhớ, sau đó quay lại làm tiếp chương trình cũ.</p>
        <ul>
          <li><strong>Nguyên nhân gây ra ngắt:</strong> Do lỗi thực hiện lệnh (tràn số, chia cho 0, sai mã lệnh), do lỗi phần cứng, do bộ định thời (Timer), hoặc do mô-đun vào-ra gửi tín hiệu yêu cầu trao đổi dữ liệu.</li>
          <li><strong>Quy trình 5 bước khi CPU xử lý ngắt từ thiết bị vào-ra:</strong>
            <ol>
              <li>Cuối mỗi chu trình lệnh, CPU kiểm tra xem có tín hiệu yêu cầu ngắt hay không.</li>
              <li>Nếu có ngắt: Tạm dừng (suspend) chương trình hiện tại và <strong>cất ngữ cảnh</strong> (lưu giá trị PC và các thanh ghi cần thiết ra ngăn xếp Stack).</li>
              <li>Nạp địa chỉ bắt đầu của Chương trình con xử lý ngắt vào thanh ghi PC.</li>
              <li>Thực thi Chương trình con xử lý ngắt.</li>
              <li><strong>Khôi phục ngữ cảnh</strong> và quay trở về tiếp tục chương trình đang bị tạm dừng.</li>
            </ol>
          </li>
          <li><strong>Khi có nhiều yêu cầu ngắt cùng lúc:</strong> Xử lý ngắt tuần tự hoặc Xử lý ngắt ưu tiên (quản lý bởi vi mạch điều khiển ngắt khả trình <strong>PIC - Programmable Interrupt Controller</strong>; các đường vào của PIC có quy định mức ưu tiên và nối vào chân <code>INTR</code> nên vẫn là ngắt có thể bị che/cấm).</li>
        </ul>

        <h4>3. Hoạt động Vào-Ra (3 phương pháp trao đổi dữ liệu)</h4>
        <ul>
          <li><strong>1. Vào-ra bằng chương trình (Programmed I/O hay Polling - Thăm dò):</strong> CPU trực tiếp điều khiển toàn bộ quá trình vào-ra. Khi đợi thiết bị ngoại vi sẵn sàng, CPU phải nằm trong một vòng lặp kiểm tra trạng thái thiết bị liên tục (Polling), gây lãng phí thời gian của CPU nhất.</li>
          <li><strong>2. Vào-ra điều khiển bằng ngắt (Interrupt-driven I/O):</strong> CPU phát lệnh vào-ra rồi chuyển sang làm việc khác. Khi thiết bị sẵn sàng sẽ gửi tín hiệu ngắt cho CPU, lúc đó CPU mới tạm dừng việc đang làm để đọc/ghi dữ liệu.</li>
          <li><strong>3. Truy cập bộ nhớ trực tiếp (DMA - Direct Memory Access):</strong> CPU trao quyền điều khiển Bus cho vi mạch chuyên dụng <strong>DMAC (DMA Controller)</strong>. DMAC tự điều khiển truyền toàn bộ khối dữ liệu lớn trực tiếp giữa Thiết bị vào-ra và Bộ nhớ chính (RAM) mà <strong>không đi qua CPU</strong>.
            <ul>
              <li><em>4 thành phần của DMAC:</em> Logic điều khiển, Bộ đếm dữ liệu (Data counter), Thanh ghi địa chỉ, Thanh ghi dữ liệu (<strong>không có</strong> Thanh ghi con trỏ lệnh PC).</li>
              <li><em>3 kiểu thực hiện DMA:</em> DMA truyền theo khối (Burst), DMA lấy chu kỳ (Cycle stealing), và <strong>DMA trong suốt (Transparent DMA)</strong> — tối ưu nhất vì không làm chậm CPU nhưng khó thực hiện phần cứng nhất.</li>
            </ul>
          </li>
        </ul>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Thứ tự hiệu suất sử dụng CPU tăng dần (từ thấp đến cao)</div>
          <p class="formula-highlight">Programmed I/O (Polling) &rarr; Interrupt-driven I/O &rarr; DMA</p>
        </div>
      `
    },
    {
      id: "2.1.3",
      chapter: 2,
      code: "2.1.3",
      title: "Liên kết hệ thống (Cấu trúc Bus, Không gian địa chỉ và Băng nhớ)",
      pdfPage: 35,
      printedPage: 34,
      linkedGroups: ["2.1", "2.2.2"],
      summary: "3 loại Bus (Bus địa chỉ 1 chiều, Bus dữ liệu 2 chiều, Bus điều khiển), công thức tính Không gian địa chỉ 2^N, công thức chia Băng nhớ vật lý (Memory Banks) và liên kết điểm-điểm (QPI, PCIe).",
      content: `
        <h4>1. Ba loại Bus chức năng trong Bus hệ thống</h4>
        <ul>
          <li><strong>Bus địa chỉ (Address Bus):</strong>
            <ul>
              <li><em>Chức năng:</em> Vận chuyển địa chỉ để xác định vị trí ngăn nhớ hoặc cổng vào-ra.</li>
              <li><em>Hướng truyền:</em> Là <strong>bus một chiều (unidirectional)</strong>, chỉ truyền địa chỉ từ CPU (hoặc DMAC) tới Bộ nhớ chính và Mô-đun vào-ra.</li>
              <li><em>Không gian địa chỉ:</em> Nếu Bus địa chỉ rộng $N$ bit (từ $A_0$ đến $A_{N-1}$), số lượng địa chỉ tối đa là $\\mathbf{2^N\\text{ địa chỉ}}$ (nếu đánh địa chỉ theo byte thì dung lượng tối đa là $\\mathbf{2^N\\text{ byte}}$).</li>
            </ul>
          </li>
          <li><strong>Bus dữ liệu (Data Bus):</strong>
            <ul>
              <li><em>Chức năng:</em> Vận chuyển <strong>cả các lệnh</strong> (từ bộ nhớ vào CPU) và <strong>dữ liệu</strong> (giữa CPU, bộ nhớ, vào-ra).</li>
              <li><em>Hướng truyền:</em> Là <strong>bus hai chiều (bidirectional)</strong>.</li>
            </ul>
          </li>
          <li><strong>Bus điều khiển (Control Bus):</strong> Vận chuyển các tín hiệu điều khiển:
            <ul>
              <li><em>Đọc/ghi:</em> <code>MEMR</code> (đọc bộ nhớ), <code>MEMW</code> (ghi bộ nhớ), <code>IOR</code> (đọc cổng I/O), <code>IOW</code> (ghi cổng I/O).</li>
              <li><em>Ngắt:</em> <code>INTR</code> (yêu cầu ngắt có thể che), <code>INTA</code> (chấp nhận ngắt), <code>NMI</code> (ngắt không thể che), <code>Reset</code>.</li>
              <li><em>Nhượng bus (cho DMA):</em> <code>BRQ</code> (Bus Request - xin nhượng bus), <code>BGT</code> (Bus Grant - chấp nhận nhượng bus).</li>
            </ul>
          </li>
        </ul>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức xác định Băng nhớ vật lý (Memory Banks)</div>
          <p>Khi bộ nhớ chính được thiết kế kiểu đan xen theo byte (<em>Low-order interleaving</em>), số lượng băng nhớ vật lý $K$ đúng bằng số byte truyền đồng thời trên Bus dữ liệu:</p>
          <p>$$K = \\frac{\\text{Độ rộng Bus dữ liệu (bit)}}{8}$$</p>
          <ul>
            <li>Bus dữ liệu $32\\text{ bit} = 4\\text{ byte} \\implies K = 4$ băng nhớ (Băng 0, 1, 2, 3).</li>
            <li>Bus dữ liệu $64\\text{ bit} = 8\\text{ byte} \\implies K = 8$ băng nhớ (Băng 0 đến Băng 7).</li>
          </ul>
          <p>Một byte nhớ có địa chỉ $X$ sẽ nằm trên băng nhớ thứ: $\\mathbf{(X \\bmod K)}$ (chỉ cần lấy <strong>chữ số Hexa cuối cùng bên phải</strong> của địa chỉ chia lấy dư cho $4$ hoặc $8$!).</p>
        </div>

        <h4>2. Bảng tra nhanh lũy thừa của 2 để tính độ rộng Bus địa chỉ ($N$ bit)</h4>
        <table class="theory-table">
          <thead>
            <tr>
              <th>Dung lượng bộ nhớ</th>
              <th>Số bit địa chỉ ($N$)</th>
              <th>Dung lượng bộ nhớ</th>
              <th>Số bit địa chỉ ($N$)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$1\\text{ KiB} = 2^{10}\\text{ B}$</td>
              <td><strong>10 bit</strong></td>
              <td>$1\\text{ GiB} = 2^{30}\\text{ B}$</td>
              <td><strong>30 bit</strong></td>
            </tr>
            <tr>
              <td>$64\\text{ KiB} = 2^6 \\times 2^{10}\\text{ B}$</td>
              <td><strong>16 bit</strong></td>
              <td>$2\\text{ GiB} = 2^1 \\times 2^{30}\\text{ B}$</td>
              <td><strong>31 bit</strong></td>
            </tr>
            <tr>
              <td>$1\\text{ MiB} = 2^{20}\\text{ B}$</td>
              <td><strong>20 bit</strong></td>
              <td>$4\\text{ GiB} = 2^2 \\times 2^{30}\\text{ B}$</td>
              <td><strong>32 bit</strong></td>
            </tr>
            <tr>
              <td>$8\\text{ MiB} = 2^3 \\times 2^{20}\\text{ B}$</td>
              <td><strong>23 bit</strong></td>
              <td>$8\\text{ GiB} = 2^3 \\times 2^{30}\\text{ B}$</td>
              <td><strong>33 bit</strong></td>
            </tr>
          </tbody>
        </table>

        <h4>3. Liên kết điểm-điểm hiện đại (Point-to-Point Interconnect)</h4>
        <ul>
          <li><strong>QPI (Quick Path Interconnect):</strong> Kết nối trực tiếp tốc độ cao giữa các nhân xử lý (Cores), các CPU và Chipset.</li>
          <li><strong>PCI Express (PCIe):</strong> Liên kết điểm-điểm tốc độ cao thay thế cho PCI bus cũ để kết nối với các thiết bị vào-ra tốc độ cao (Card đồ họa rời, SSD NVMe, Card mạng Gigabit).</li>
        </ul>
      `
    },

    // ==================== CHƯƠNG 3 (RISC-V) ====================
    {
      id: "3.1.1",
      chapter: 3,
      code: "3.1.1",
      title: "Tập 32 thanh ghi của RISC-V 32-bit và Quy ước bảo toàn",
      pdfPage: 57,
      printedPage: 56,
      linkedGroups: ["3.1", "3.2.1", "3.2.7"],
      summary: "Bảng ánh xạ đầy đủ 32 thanh ghi (x0 đến x31), chức năng từng nhóm (zero, ra, sp, t0-t6, s0-s11, a0-a7) và quy ước Caller-saved vs Callee-saved.",
      content: `
        <p>Bộ xử lý RISC-V 32-bit có tất cả <strong>32 thanh ghi đa dụng</strong>, mỗi thanh ghi có độ dài 32 bit. Vì $32 = 2^5$, nên trong mã máy, mỗi thanh ghi được mã hóa bằng đúng <strong>5 bit</strong> (từ <code>00000</code> ứng với <code>x0</code> đến <code>11111</code> ứng với <code>x31</code>).</p>

        <table class="theory-table">
          <thead>
            <tr>
              <th>Tên gọi</th>
              <th>Số hiệu</th>
              <th>Chức năng sử dụng</th>
              <th>Bảo toàn</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>zero</code></td><td><code>x0</code></td><td>Thanh ghi hằng số, luôn bằng 0 (chỉ đọc)</td><td>Không áp dụng</td></tr>
            <tr><td><code>ra</code></td><td><code>x1</code></td><td>Return Address: chứa địa chỉ trở về hàm</td><td>Caller-saved</td></tr>
            <tr><td><code>sp</code></td><td><code>x2</code></td><td>Stack Pointer: con trỏ đỉnh ngăn xếp</td><td>Callee-saved</td></tr>
            <tr><td><code>gp</code></td><td><code>x3</code></td><td>Global Pointer: con trỏ dữ liệu toàn cục</td><td>Không áp dụng</td></tr>
            <tr><td><code>tp</code></td><td><code>x4</code></td><td>Thread Pointer: con trỏ luồng</td><td>Không áp dụng</td></tr>
            <tr><td><code>t0 - t2</code></td><td><code>x5 - x7</code></td><td>Temporaries: thanh ghi biến tạm thời</td><td>Caller-saved</td></tr>
            <tr><td><code>s0 / fp</code></td><td><code>x8</code></td><td>Saved register / Frame pointer: lưu biến</td><td>Callee-saved</td></tr>
            <tr><td><code>s1</code></td><td><code>x9</code></td><td>Saved register: thanh ghi lưu biến</td><td>Callee-saved</td></tr>
            <tr><td><code>a0 - a1</code></td><td><code>x10 - x11</code></td><td>Arguments / Return: tham số và kết quả trả về</td><td>Caller-saved</td></tr>
            <tr><td><code>a2 - a7</code></td><td><code>x12 - x17</code></td><td>Arguments: tham số truyền vào chương trình con</td><td>Caller-saved</td></tr>
            <tr><td><code>s2 - s11</code></td><td><code>x18 - x27</code></td><td>Saved registers: thanh ghi lưu biến chương trình</td><td>Callee-saved</td></tr>
            <tr><td><code>t3 - t6</code></td><td><code>x28 - x31</code></td><td>Temporaries: thanh ghi biến tạm thời</td><td>Caller-saved</td></tr>
          </tbody>
        </table>

        <div class="callout callout-trap">
          <div class="callout-title">⚠️ Quy ước bảo toàn thanh ghi khi gọi hàm (Rất hay hỏi trắc nghiệm)</div>
          <ul>
            <li><strong>Các thanh ghi tạm thời (<code>t0 - t6</code>) và tham số (<code>a0 - a7</code>, <code>ra</code>):</strong> Thuộc loại <strong>Caller-saved</strong> (bên gọi hàm chỉ tự cất vào ngăn xếp nếu thực sự cần giữ lại giá trị sau khi hàm con chạy xong).</li>
            <li><strong>Các thanh ghi lưu trữ (<code>s0 - s11</code>, <code>sp</code>):</strong> Thuộc loại <strong>Callee-saved</strong> (hàm con được gọi nếu muốn sửa đổi các thanh ghi <code>s0 - s11</code> thì bắt buộc phải cất giá trị cũ vào ngăn xếp ở đầu hàm và khôi phục lại trước khi thoát hàm).</li>
          </ul>
        </div>
      `
    },
    {
      id: "3.1.2",
      chapter: 3,
      code: "3.1.2",
      title: "Tổ chức dữ liệu trong bộ nhớ và Quy tắc Little-Endian",
      pdfPage: 58,
      printedPage: 57,
      linkedGroups: ["3.1", "3.2.1", "3.2.4"],
      summary: "Đơn vị dữ liệu (Byte, Halfword, Word), quy tắc căn chỉnh biên từ nhớ (Alignment) và thứ tự lưu trữ Đầu nhỏ (Little-Endian).",
      content: `
        <h4>1. Đơn vị dữ liệu và Căn chỉnh địa chỉ (Alignment) trong RISC-V</h4>
        <ul>
          <li><strong>Byte:</strong> $8\\text{ bit}$ (chiếm 1 ngăn nhớ). Địa chỉ có thể chẵn hoặc lẻ bất kỳ.</li>
          <li><strong>Halfword (Nửa từ):</strong> $16\\text{ bit} = 2\\text{ byte}$. Địa chỉ bắt buộc phải là <strong>số chẵn</strong> (chia hết cho 2, kết thúc bằng <code>0, 2, 4, 6, 8, A, C, E</code>).</li>
          <li><strong>Word (Từ nhớ):</strong> $32\\text{ bit} = 4\\text{ byte}$. Địa chỉ bắt buộc phải là <strong>bội số của 4</strong> (chia hết cho 4, chữ số Hexa cuối cùng bắt buộc phải là <strong><code>0, 4, 8, C</code></strong>). Địa chỉ của một Word nhớ chính là địa chỉ của byte đầu tiên (byte có địa chỉ nhỏ nhất) thuộc Word đó.</li>
        </ul>

        <h4>2. Quy tắc lưu trữ Đầu nhỏ (Little-Endian)</h4>
        <p>Kiến trúc <strong>RISC-V</strong> và <strong>Intel x86</strong> sử dụng quy tắc <strong>Little-Endian (Đầu nhỏ)</strong> (trong khi Motorola 680x0, SunSPARC dùng Big-Endian; ARM hỗ trợ Bi-Endian tùy phiên bản):</p>
        <div class="callout callout-formula">
          <div class="callout-title">📐 Nguyên tắc Little-Endian</div>
          <p><strong>Byte có ý nghĩa thấp nhất (LSB - 2 chữ số Hexa ngoài cùng bên phải)</strong> được lưu ở ngăn nhớ có <strong>địa chỉ nhỏ nhất</strong>. Byte có ý nghĩa cao nhất (MSB - 2 chữ số Hexa ngoài cùng bên trái) được lưu ở ngăn nhớ có <strong>địa chỉ lớn nhất</strong>.</p>
          <p><em>Ví dụ minh họa:</em> Lưu Word 32-bit <code>0x12345678</code> vào địa chỉ <code>0x10012000</code>:</p>
          <ul>
            <li>Địa chỉ <code>0x10012000</code> (độ lệch <code>+0</code>): chứa byte <strong><code>0x78</code></strong> (byte thấp nhất).</li>
            <li>Địa chỉ <code>0x10012001</code> (độ lệch <code>+1</code>): chứa byte <strong><code>0x56</code></strong>.</li>
            <li>Địa chỉ <code>0x10012002</code> (độ lệch <code>+2</code>): chứa byte <strong><code>0x34</code></strong>.</li>
            <li>Địa chỉ <code>0x10012003</code> (độ lệch <code>+3</code>): chứa byte <strong><code>0x12</code></strong> (byte cao nhất).</li>
          </ul>
        </div>
      `
    },
    {
      id: "3.1.3",
      chapter: 3,
      code: "3.1.3",
      title: "Các nhóm lệnh hợp ngữ RISC-V cốt lõi",
      pdfPage: 58,
      printedPage: 57,
      linkedGroups: ["3.2.1", "3.2.2", "3.2.3", "3.2.4", "3.2.5", "3.2.6", "3.2.7"],
      summary: "Toàn bộ lệnh Số học (add, sub, addi, lui, li), Đọc/Ghi bộ nhớ (lw, sw, lh, lhu, lb, lbu), Logic & Dịch bit (and, or, xor, sll, srl, sra), So sánh (slt, sltu), Rẽ nhánh (beq, bne, blt, bge) và Ngăn xếp (Stack).",
      content: `
        <h4>1. Nhóm lệnh số học và khởi tạo hằng số</h4>
        <ul>
          <li><code>add rd, rs1, rs2</code>: Cộng 2 thanh ghi ($\\text{rd} = \\text{rs1} + \\text{rs2}$).</li>
          <li><code>sub rd, rs1, rs2</code>: Trừ 2 thanh ghi ($\\text{rd} = \\text{rs1} - \\text{rs2}$).</li>
          <li><code>addi rd, rs1, imm</code>: Cộng thanh ghi với hằng số 12-bit có dấu ($\\text{rd} = \\text{rs1} + \\text{SignExt}(\\text{imm})$).
            <br><strong>Lưu ý cực quan trọng:</strong> Vì <code>imm</code> là số nguyên có dấu 12-bit, giá trị hợp lệ của <code>imm</code> phải nằm trong đoạn <strong>$[-2048, +2047]$</strong> (tức từ <code>0xFFFFF800</code> đến <code>0x7FF</code>). Nếu viết <code>addi x1, x0, 2048</code> hoặc <code>0x800</code>, phần mềm RARS sẽ <strong>báo lỗi biên dịch</strong>! RISC-V không có lệnh <code>subi</code>, muốn trừ hằng số ta dùng <code>addi</code> với số âm.
          </li>
          <li><code>lui rd, upimm</code>: Nạp hằng số 20-bit vào 20 bit cao (bit 31 đến bit 12) của <code>rd</code>, đồng thời xóa 12 bit thấp (bit 11 đến bit 0) về 0.</li>
        </ul>

        <div class="callout callout-trap">
          <div class="callout-title">⚠️ Quy tắc nạp hằng số 32-bit bất kỳ (Lệnh giả <code>li</code>) & Bẫy mở rộng dấu ở bit thứ 11</div>
          <p>Để nạp số 32-bit dạng <code>0xABCDE123</code> vào thanh ghi, trình dịch tách làm 2 lệnh là <code>lui</code> (5 chữ số Hexa đầu) và <code>addi</code> (3 chữ số Hexa cuối). Chú ý chữ số Hexa thứ 3 từ phải sang:</p>
          <ul>
            <li><strong>Trường hợp 1 (Chữ số Hexa thứ 3 từ phải sang từ <code>0</code> đến <code>7</code>, bit 11 bằng 0):</strong> Giữ nguyên 5 chữ số Hexa đầu.<br>
              Ví dụ: <code>li t0, 0x20241120</code> &rarr; <code>lui t0, 0x20241</code> rồi <code>addi t0, t0, 0x120</code>.</li>
            <li><strong>Trường hợp 2 (Chữ số Hexa thứ 3 từ phải sang từ <code>8</code> đến <code>F</code>, bit 11 bằng 1 làm <code>addi</code> bị hiểu là số âm):</strong> Phải <strong>cộng thêm 1</strong> vào 5 chữ số Hexa đầu trong lệnh <code>lui</code> để bù lại phần bị trừ đi!<br>
              Ví dụ: <code>li s1, 0x12345EDC</code> &rarr; <code>lui s1, 0x12346</code> rồi <code>addi s1, s1, -292</code> (với <code>0xEDC = -292</code>).</li>
          </ul>
        </div>

        <h4>2. Nhóm lệnh Đọc/Ghi bộ nhớ (Load / Store)</h4>
        <ul>
          <li><code>lw rd, imm(rs1)</code> và <code>sw rs2, imm(rs1)</code>: Đọc và ghi 1 Word (32-bit = 4 byte). Địa chỉ hiệu dụng $\\text{rs1} + \\text{imm}$ phải chia hết cho 4.</li>
          <li><code>lh rd, imm(rs1)</code> và <code>lhu rd, imm(rs1)</code>: Đọc 1 Halfword (16-bit = 2 byte) vào 16 bit thấp của <code>rd</code>. Lệnh <code>lh</code> <strong>mở rộng dấu</strong> (nếu bit 15 là 1 thì điền <code>FFFF</code> vào 16 bit cao), còn <code>lhu</code> <strong>mở rộng không dấu</strong> (luôn điền <code>0000</code> vào 16 bit cao). Lệnh ghi tương ứng: <code>sh rs2, imm(rs1)</code>.</li>
          <li><code>lb rd, imm(rs1)</code> và <code>lbu rd, imm(rs1)</code>: Đọc 1 Byte (8-bit) vào 8 bit thấp của <code>rd</code>. Lệnh <code>lb</code> <strong>mở rộng dấu</strong> (nếu byte đọc lên từ <code>0x80</code> đến <code>0xFF</code> thì 24 bit cao điền <code>FFFFFF</code>), còn <code>lbu</code> luôn điền <code>000000</code> vào 24 bit cao. Lệnh ghi tương ứng: <code>sb rs2, imm(rs1)</code>.</li>
        </ul>

        <h4>3. Nhóm lệnh Logic, Dịch bit và So sánh</h4>
        <ul>
          <li><strong>Phép AND (<code>and</code>, <code>andi</code>):</strong> Dùng để xóa một số bit về 0 (masking) và giữ nguyên các bit khác.</li>
          <li><strong>Phép OR (<code>or</code>, <code>ori</code>):</strong> Dùng để bật (ép) một số bit lên 1.</li>
          <li><strong>Phép XOR (<code>xor</code>, <code>xori</code>):</strong> Hai bit khác nhau bằng 1, giống nhau bằng 0. Dùng để đảo bit (<code>xori rd, rs1, -1</code>) hoặc xóa thanh ghi về 0 (<code>xor s0, s0, s0</code>).</li>
          <li><strong>Lưu ý cực kỳ quan trọng về <code>andi</code>, <code>ori</code>, <code>xori</code> trong RISC-V:</strong> Khác với MIPS cũ, trong RISC-V hằng số 12-bit của <code>andi</code>, <code>ori</code>, <code>xori</code> luôn được <strong>mở rộng có dấu (Sign-extend)</strong> thành 32-bit trước khi thực hiện phép toán!</li>
          <li><strong>Dịch trái logic (<code>sll</code>, <code>slli</code>):</strong> Dịch sang trái $k$ bit, chèn 0 vào bên phải (tương đương nhân với $2^k$).</li>
          <li><strong>Dịch phải logic (<code>srl</code>, <code>srli</code>):</strong> Dịch sang phải $k$ bit, <strong>luôn chèn bit 0</strong> vào bên trái.</li>
          <li><strong>Dịch phải số học (<code>sra</code>, <code>srai</code>):</strong> Dịch sang phải $k$ bit, nhưng <strong>giữ nguyên bit dấu</strong> (nếu bit 31 là 1 thì chèn toàn bit 1 hay chữ <code>F</code> vào bên trái).</li>
          <li><strong>So sánh nhỏ hơn (<code>slt</code>, <code>slti</code> và <code>sltu</code>, <code>sltiu</code>):</strong> Nếu $\\text{rs1} < \\text{rs2}$ (hoặc $\\text{imm}$) thì $\\text{rd} = 1$, ngược lại $\\text{rd} = 0$. <code>slt/slti</code> so sánh <strong>có dấu</strong>, còn <code>sltu/sltiu</code> so sánh <strong>không dấu</strong> (khi không dấu, các số bắt đầu bằng bit 1 như <code>0xFFFFFFF0</code> là những số dương cực lớn $\\approx 4.29\\text{ tỷ}$).</li>
        </ul>

        <h4>4. Nhóm lệnh Rẽ nhánh, Nhảy, Chương trình con và Ngăn xếp (Stack)</h4>
        <ul>
          <li><strong>Rẽ nhánh có điều kiện (Kiểu B):</strong> <code>beq</code> ($=$), <code>bne</code> ($\\neq$), <code>blt</code> ($<$ có dấu), <code>bge</code> ($\\ge$ có dấu), <code>bltu</code> ($<$ không dấu), <code>bgeu</code> ($\\ge$ không dấu).</li>
          <li><strong>Gọi chương trình con (<code>jal rd, Label</code> – Kiểu J):</strong> Thực hiện đồng thời 2 việc: (1) Cất địa chỉ lệnh kế tiếp $\\text{rd} = \\text{PC} + 4$ (thường <code>rd</code> là <code>ra</code> tức <code>x1</code>); (2) Nhảy tới $\\text{PC} = \\text{PC} + \\text{imm}$. (Lệnh giả <code>j Label</code> chính là <code>jal x0, Label</code>).</li>
          <li><strong>Trở về từ chương trình con (<code>jalr rd, rs1, imm</code> – Kiểu I):</strong> Cất $\\text{rd} = \\text{PC} + 4$ và nhảy tới $\\text{PC} = \\text{rs1} + \\text{imm}$. (Lệnh giả <code>jr ra</code> chính là <code>jalr x0, ra, 0</code>).</li>
          <li><strong>Thao tác với Ngăn xếp (Stack):</strong> Ngăn xếp RISC-V phát triển theo <strong>chiều giảm địa chỉ bộ nhớ</strong>:
            <ul>
              <li><em>Khi cất (Push) $k$ thanh ghi:</em> Phải <strong>trừ <code>sp</code> trước</strong> (<code>addi sp, sp, -4*k</code>), rồi dùng <code>sw</code> lưu từng thanh ghi.</li>
              <li><em>Khi khôi phục (Pop) $k$ thanh ghi:</em> Dùng <code>lw</code> đọc từng thanh ghi ở đúng độ lệch cũ ra <strong>trước</strong>, sau đó mới cộng trả lại <code>sp</code> (<code>addi sp, sp, 4*k</code>).</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      id: "3.1.4",
      chapter: 3,
      code: "3.1.4",
      title: "Mã máy 32-bit của RISC-V và 4 Phương thức định địa chỉ",
      pdfPage: 60,
      printedPage: 59,
      linkedGroups: ["3.1", "3.2.1", "3.2.8"],
      summary: "Bảng 6 khuôn dạng lệnh máy 32-bit (R, I, S, B, U, J), bảng tra Opcode/Funct3/Funct7, công thức tính địa chỉ đích BTA/JTA = PC + imm và 4 phương thức định địa chỉ.",
      content: `
        <h4>1. Sáu khuôn dạng lệnh máy 32-bit của RISC-V</h4>
        <p>Mọi lệnh chuẩn RV32I đều dài 32 bit (4 byte). 7 bit cuối cùng (bit 6:0) luôn là trường <code>opcode</code>, và trong mọi lệnh có thanh ghi đích <code>rd</code> (R, I, U, J), trường <code>rd</code> luôn nằm ở <strong>bit 11:7</strong>:</p>
        <table class="theory-table">
          <thead>
            <tr>
              <th>Kiểu</th>
              <th>31:25 (7b)</th>
              <th>24:20 (5b)</th>
              <th>19:15 (5b)</th>
              <th>14:12 (3b)</th>
              <th>11:7 (5b)</th>
              <th>6:0 (7b)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>R-type</strong></td>
              <td><code>funct7</code></td>
              <td><code>rs2</code></td>
              <td><code>rs1</code></td>
              <td><code>funct3</code></td>
              <td><code>rd</code></td>
              <td><code>opcode</code></td>
            </tr>
            <tr>
              <td><strong>I-type</strong></td>
              <td colspan="2"><code>imm[11:0]</code> (12 bit)</td>
              <td><code>rs1</code></td>
              <td><code>funct3</code></td>
              <td><code>rd</code></td>
              <td><code>opcode</code></td>
            </tr>
            <tr>
              <td><strong>S-type</strong></td>
              <td><code>imm[11:5]</code></td>
              <td><code>rs2</code></td>
              <td><code>rs1</code></td>
              <td><code>funct3</code></td>
              <td><code>imm[4:0]</code></td>
              <td><code>opcode</code></td>
            </tr>
            <tr>
              <td><strong>B-type</strong></td>
              <td><code>imm[12,10:5]</code></td>
              <td><code>rs2</code></td>
              <td><code>rs1</code></td>
              <td><code>funct3</code></td>
              <td><code>imm[4:1,11]</code></td>
              <td><code>opcode</code></td>
            </tr>
            <tr>
              <td><strong>U-type</strong></td>
              <td colspan="4"><code>imm[31:12]</code> (20 bit)</td>
              <td><code>rd</code></td>
              <td><code>opcode</code></td>
            </tr>
            <tr>
              <td><strong>J-type</strong></td>
              <td colspan="4"><code>imm[20,10:1,11,19:12]</code> (20 bit)</td>
              <td><code>rd</code></td>
              <td><code>opcode</code></td>
            </tr>
          </tbody>
        </table>

        <h4>2. Bảng tra nhanh Opcode và Funct3/Funct7 của các lệnh thường thi nhất</h4>
        <ul>
          <li><strong>Kiểu R (<code>opcode = 0110011</code>):</strong> <code>add</code> (funct3=<code>000</code>, funct7=<code>0000000</code>), <code>sub</code> (funct3=<code>000</code>, funct7=<code>0100000</code>), <code>sll</code> (<code>001</code>), <code>slt</code> (<code>010</code>), <code>sltu</code> (<code>011</code>), <code>xor</code> (<code>100</code>), <code>srl</code> (<code>101</code>, <code>0000000</code>), <code>sra</code> (<code>101</code>, <code>0100000</code>), <code>or</code> (<code>110</code>), <code>and</code> (<code>111</code>).</li>
          <li><strong>Kiểu I – Tính toán (<code>opcode = 0010011</code>):</strong> <code>addi</code> (<code>000</code>), <code>slli</code> (<code>001</code>), <code>slti</code> (<code>010</code>), <code>xori</code> (<code>100</code>), <code>srli/srai</code> (<code>101</code>), <code>ori</code> (<code>110</code>), <code>andi</code> (<code>111</code>).</li>
          <li><strong>Kiểu I – Đọc bộ nhớ Load (<code>opcode = 0000011</code>):</strong> <code>lb</code> (<code>000</code>), <code>lh</code> (<code>001</code>), <code>lw</code> (<code>010</code>), <code>lbu</code> (<code>100</code>), <code>lhu</code> (<code>101</code>).</li>
          <li><strong>Kiểu S – Ghi bộ nhớ Store (<code>opcode = 0100011</code>):</strong> <code>sb</code> (<code>000</code>), <code>sh</code> (<code>001</code>), <code>sw</code> (<code>010</code>).</li>
          <li><strong>Kiểu B – Rẽ nhánh (<code>opcode = 1100011</code>):</strong> <code>beq</code> (<code>000</code>), <code>bne</code> (<code>001</code>), <code>blt</code> (<code>100</code>), <code>bge</code> (<code>101</code>), <code>bltu</code> (<code>110</code>), <code>bgeu</code> (<code>111</code>).</li>
          <li><strong>Kiểu U & J:</strong> <code>lui</code> (<code>0110111</code>), <code>auipc</code> (<code>0010111</code>), <code>jal</code> (<code>1101111</code>), <code>jalr</code> (Kiểu I, <code>1100111</code>).</li>
        </ul>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức tính địa chỉ đích rẽ nhánh (BTA) và nhảy (JTA) trong RISC-V</div>
          <p>Khác với MIPS cũ (tính từ $\\text{PC} + 4$), trong <strong>RISC-V</strong> mọi độ lệch rẽ nhánh và nhảy đều tính trực tiếp từ <strong>địa chỉ của chính câu lệnh đó ($\\text{PC}$)</strong>:</p>
          <p>$$\\text{Địa chỉ đích (BTA hoặc JTA)} = \\text{PC}_{\\text{hiện tại}} + \\text{imm} \\quad \\Longrightarrow \\quad \\text{imm} = \\text{Địa chỉ đích} - \\text{PC}_{\\text{hiện tại}}$$</p>
          <p><em>Lưu ý:</em> Vì các lệnh luôn ở địa chỉ chẵn, nên bit số 0 (<code>imm[0]</code>) luôn bằng 0 và <strong>không được lưu trong mã máy</strong>. Mã máy kiểu B chỉ lưu từ <code>imm[12]</code> đến <code>imm[1]</code> (tức giá trị trường 12-bit trong mã máy bằng $\\text{imm} / 2$).</p>
        </div>

        <h4>3. Bốn phương thức định địa chỉ trong RISC-V</h4>
        <ol>
          <li><strong>Định địa chỉ thanh ghi (Register Addressing):</strong> Toán hạng nằm hoàn toàn trong các thanh ghi (dùng cho lệnh kiểu R như <code>add</code>, <code>sub</code>, <code>and</code>, <code>or</code>...).</li>
          <li><strong>Định địa chỉ tức thì (Immediate Addressing):</strong> Toán hạng là hằng số <code>imm</code> nằm ngay trong câu lệnh (dùng cho toán hạng hằng số của <code>addi</code>, <code>ori</code>, <code>andi</code>, <code>lui</code>...).</li>
          <li><strong>Định địa chỉ cơ sở (Base Addressing):</strong> Địa chỉ bộ nhớ bằng nội dung thanh ghi cơ sở cộng độ lệch ($\\text{Address} = \\text{rs1} + \\text{imm}$, dùng cho <code>lw</code>, <code>sw</code>, <code>lb</code>, <code>lh</code>...).</li>
          <li><strong>Định địa chỉ tương đối với PC (PC-relative Addressing):</strong> Địa chỉ đích bằng $\\text{PC} + \\text{imm}$ (dùng cho các lệnh rẽ nhánh kiểu B như <code>beq</code>, <code>bne</code>, <code>bge</code> và lệnh nhảy <code>jal</code>).</li>
        </ol>
      `
    },

    // ==================== CHƯƠNG 4 (SỐ HỌC MÁY TÍNH) ====================
    {
      id: "4.1.1",
      chapter: 4,
      code: "4.1.1",
      title: "Hệ đếm và Chuyển đổi giữa các hệ đếm",
      pdfPage: 105,
      printedPage: 104,
      linkedGroups: ["4.1", "4.2.2", "4.2.5"],
      summary: "Hệ thập phân, nhị phân, thập lục phân (Hexa), bảng quy đổi nhanh 4-bit và cách đổi số thực thập phân (phần nguyên + phần lẻ) sang nhị phân.",
      content: `
        <h4>1. Bảng quy đổi nhanh 4-bit Nhị phân – Hexa – Thập phân</h4>
        <table class="theory-table">
          <thead>
            <tr>
              <th>Nhị phân</th><th>Hex</th><th>Hệ 10</th>
              <th>Nhị phân</th><th>Hex</th><th>Hệ 10</th>
              <th>Nhị phân</th><th>Hex</th><th>Hệ 10</th>
              <th>Nhị phân</th><th>Hex</th><th>Hệ 10</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>0000</code></td><td><strong>0</strong></td><td>0</td><td><code>0100</code></td><td><strong>4</strong></td><td>4</td><td><code>1000</code></td><td><strong>8</strong></td><td>8</td><td><code>1100</code></td><td><strong>C</strong></td><td>12</td></tr>
            <tr><td><code>0001</code></td><td><strong>1</strong></td><td>1</td><td><code>0101</code></td><td><strong>5</strong></td><td>5</td><td><code>1001</code></td><td><strong>9</strong></td><td>9</td><td><code>1101</code></td><td><strong>D</strong></td><td>13</td></tr>
            <tr><td><code>0010</code></td><td><strong>2</strong></td><td>2</td><td><code>0110</code></td><td><strong>6</strong></td><td>6</td><td><code>1010</code></td><td><strong>A</strong></td><td>10</td><td><code>1110</code></td><td><strong>E</strong></td><td>14</td></tr>
            <tr><td><code>0011</code></td><td><strong>3</strong></td><td>3</td><td><code>0111</code></td><td><strong>7</strong></td><td>7</td><td><code>1011</code></td><td><strong>B</strong></td><td>11</td><td><code>1111</code></td><td><strong>F</strong></td><td>15</td></tr>
          </tbody>
        </table>

        <h4>2. Cách đổi số thực thập phân (có phần nguyên và phần lẻ) sang nhị phân</h4>
        <ul>
          <li><strong>Phần nguyên:</strong> Phân tích thành tổng các lũy thừa của 2 ($128, 64, 32, 16, 8, 4, 2, 1$). Ví dụ: $13 = 8 + 4 + 1 = 1101_{(2)}$.</li>
          <li><strong>Phần lẻ:</strong> Nhân liên tiếp phần lẻ với 2 và lấy phần nguyên từ trên xuống (hoặc nhớ nhanh các phân số phổ biến):
            <ul>
              <li>$0.5 = 0.1_{(2)}$; $0.25 = 0.01_{(2)}$; $0.75 = 0.5 + 0.25 = 0.11_{(2)}$</li>
              <li>$0.125 = 0.001_{(2)}$; $0.375 = 0.011_{(2)}$; $0.625 = 0.101_{(2)}$; $0.875 = 0.111_{(2)}$</li>
            </ul>
          </li>
          <li>Ví dụ: $13.75_{(10)} = 1101.11_{(2)}$.</li>
        </ul>
      `
    },
    {
      id: "4.1.2",
      chapter: 4,
      code: "4.1.2",
      title: "Đại số Boolean, Cổng logic và Mạch số cơ bản",
      pdfPage: 106,
      printedPage: 105,
      linkedGroups: ["4.1", "4.2.1"],
      summary: "Nhận diện 6 cổng logic (AND, NAND, OR, NOR, XOR, NOT), Định lý De Morgan và phân biệt Mạch tổ hợp (MUX, Decoder, Full-Adder) với Mạch dãy (Flip-Flop, Thanh ghi).",
      content: `
        <h4>1. Sáu cổng logic cơ bản cần nhận diện hình vẽ</h4>
        <ul>
          <li><strong>Cổng AND ($F = A \\cdot B$):</strong> Hình chữ D (đầu phẳng, mũi tròn). Bằng 1 khi tất cả đầu vào bằng 1.</li>
          <li><strong>Cổng NAND ($F = \\overline{A \\cdot B}$):</strong> Hình cổng AND có thêm <strong>vòng tròn nhỏ (nút đảo)</strong> ở đầu ra.</li>
          <li><strong>Cổng OR ($F = A + B$):</strong> Hình đầu nhọn, đuôi cong lõm vào. Bằng 1 khi có ít nhất 1 đầu vào bằng 1.</li>
          <li><strong>Cổng NOR ($F = \\overline{A + B}$):</strong> Hình cổng OR có thêm <strong>vòng tròn nhỏ</strong> ở đầu ra.</li>
          <li><strong>Cổng XOR ($F = A \\oplus B = A\\overline{B} + \\overline{A}B$):</strong> Giống cổng OR nhưng có thêm <strong>một vạch cong song song ở phần đuôi</strong>. Bằng 1 khi hai đầu vào khác nhau.</li>
          <li><strong>Cổng NOT ($F = \\overline{A}$ hay $A'$):</strong> Hình tam giác có vòng tròn nhỏ ở mũi, dùng để đảo bit ($0 \\leftrightarrow 1$).</li>
        </ul>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Định lý De Morgan</div>
          <p>$$\\overline{A \\cdot B} = \\overline{A} + \\overline{B} \\quad \\text{và} \\quad \\overline{A + B} = \\overline{A} \\cdot \\overline{B}$$</p>
        </div>

        <h4>2. Các mạch tổ hợp và mạch dãy cơ bản trong CPU</h4>
        <ul>
          <li><strong>Mạch tổ hợp (Combinational Circuits – không có nhớ):</strong> Đầu ra chỉ phụ thuộc vào đầu vào tại thời điểm hiện tại. Gồm:
            <ul>
              <li><em>Bộ ghép kênh (MUX – Multiplexer):</em> Có $2^n$ đầu vào dữ liệu, $n$ đầu vào chọn ($S$), và 1 đầu ra. Với MUX 2-ra-1: $F = D_0 \\cdot \\overline{S} + D_1 \\cdot S$.</li>
              <li><em>Bộ giải mã (Decoder):</em> Có $n$ đầu vào và $2^n$ đầu ra, tại mỗi thời điểm chỉ có duy nhất 1 đầu ra tích cực.</li>
              <li><em>Bộ cộng toàn phần 1-bit (Full-Adder):</em> Cộng 3 bit ($A, B, C_{\\text{in}}$) tạo ra bit tổng $S$ và bit nhớ ra $C_{\\text{out}} = AB + AC_{\\text{in}} + BC_{\\text{in}}$.</li>
            </ul>
          </li>
          <li><strong>Mạch dãy (Sequential Circuits – có nhớ):</strong> Đầu ra phụ thuộc cả đầu vào hiện tại lẫn trạng thái quá khứ. Được xây dựng từ các phần tử nhớ <strong>Flip-Flop (SR, JK, D)</strong> để tạo thành <strong>Thanh ghi (Register)</strong> và Bộ đếm.</li>
        </ul>
      `
    },
    {
      id: "4.1.3",
      chapter: 4,
      code: "4.1.3",
      title: "Biểu diễn Số nguyên không dấu và Số nguyên có dấu (Mã bù 2)",
      pdfPage: 106,
      printedPage: 105,
      linkedGroups: ["4.1", "4.2.2"],
      summary: "Quy tắc 2 bước tìm Mã bù hai, công thức tính nhanh số 8-bit (-128 + ...), mẹo tính nhẩm số âm 0xFFFFFFF... và bảng dải giá trị 8/12/16/32-bit.",
      content: `
        <h4>1. Số nguyên có dấu theo Mã bù hai (Two's Complement)</h4>
        <p>Bit ngoài cùng bên trái ($a_{n-1}$) là <strong>bit dấu (Sign bit)</strong>: bằng <code>0</code> là số dương (hoặc 0), bằng <code>1</code> là số âm.</p>
        <ul>
          <li><strong>Bước 1 (Tìm bù 1):</strong> Đảo tất cả các bit của số dương tương ứng ($0 \\leftrightarrow 1$).</li>
          <li><strong>Bước 2 (Tìm bù 2):</strong> Cộng thêm <code>1</code> vào bit cuối cùng bên phải của số bù 1.</li>
        </ul>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức tính nhanh số nguyên có dấu 8-bit ($a_7a_6a_5a_4a_3a_2a_1a_0$)</div>
          <p>Trọng số của bit đầu tiên ($a_7$) là <strong>$-128$</strong>, các bit sau mang trọng số dương ($+64, +32, +16, +8, +4, +2, +1$):</p>
          <p>$$A = -a_7 \\times 128 + a_6 \\times 64 + a_5 \\times 32 + a_4 \\times 16 + a_3 \\times 8 + a_2 \\times 4 + a_1 \\times 2 + a_0 \\times 1$$</p>
          <p>Ví dụ: <code>0x8E</code> $= 1000\\text{ }1110_{(2)} = -128 + 8 + 4 + 2 = \\mathbf{-114}$.</p>
        </div>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Mẹo tính nhẩm siêu tốc các số âm dạng <code>0xFFFFFFF...</code></div>
          <p>Vì <code>0xFFFFFFFF</code> $= -1$, nên khi các chữ số đầu đều là <code>F</code>, bạn chỉ cần <strong>lấy chữ số Hexa cuối cùng trừ đi 16</strong>!</p>
          <ul>
            <li>Ví dụ: <code>0xFFFFFFF3</code> $\\implies 3 - 16 = \\mathbf{-13}$.</li>
            <li>Ví dụ: <code>0xFFFFFFF4</code> $\\implies 4 - 16 = \\mathbf{-12}$.</li>
            <li>Ví dụ: <code>0xFFA</code> (12-bit) $\\implies 10 - 16 = \\mathbf{-6}$.</li>
          </ul>
        </div>

        <h4>2. Bảng tổng hợp dải giá trị của số nguyên có dấu $n$-bit</h4>
        <table class="theory-table">
          <thead>
            <tr>
              <th>Số bit ($n$)</th>
              <th>Dải giá trị thập phân</th>
              <th>Số âm nhỏ nhất (Hex)</th>
              <th>Số dương lớn nhất (Hex)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>8-bit (<code>char</code>)</strong></td><td>$[-128, +127]$</td><td><code>0x80</code> ($-128$)</td><td><code>0x7F</code> ($+127$)</td></tr>
            <tr><td><strong>12-bit (<code>imm</code>)</strong></td><td>$[-2048, +2047]$</td><td><code>0x800</code> ($-2048$)</td><td><code>0x7FF</code> ($+2047$)</td></tr>
            <tr><td><strong>16-bit (<code>short</code>)</strong></td><td>$[-32768, +32767]$</td><td><code>0x8000</code> ($-32768$)</td><td><code>0x7FFF</code> ($+32767$)</td></tr>
            <tr><td><strong>32-bit (<code>int</code>)</strong></td><td>$[-2^{31}, +2^{31}-1]$</td><td><code>0x80000000</code></td><td><code>0x7FFFFFFF</code></td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "4.1.4",
      chapter: 4,
      code: "4.1.4",
      title: "Cộng/Trừ số nguyên và Hiện tượng Tràn số học (Overflow)",
      pdfPage: 107,
      printedPage: 106,
      linkedGroups: ["4.1", "4.2.3"],
      summary: "Điều kiện xảy ra Tràn số học (cộng 2 số cùng dấu ra kết quả ngược dấu), công thức biến char 8-bit bị tràn (±256) và công thức tìm dải thanh ghi gây tràn 32-bit.",
      content: `
        <h4>1. Điều kiện xảy ra Tràn số học (Overflow) với số có dấu</h4>
        <ul>
          <li>Khi cộng hai số <strong>khác dấu</strong>, kết quả <strong>không bao giờ bị tràn</strong>.</li>
          <li>Hiện tượng tràn số học (Overflow) chỉ xảy ra khi <strong>cộng hai số CÙNG DẤU mà kết quả thu được lại NGƯỢC DẤU</strong>:
            <ul>
              <li><strong>Tràn dương:</strong> $(\\text{Số dương}) + (\\text{Số dương}) \\to$ vượt quá $+2^{n-1}-1$, biến thành <strong>Số âm</strong>.</li>
              <li><strong>Tràn âm:</strong> $(\\text{Số âm}) + (\\text{Số âm}) \\to$ nhỏ hơn $-2^{n-1}$, biến thành <strong>Số dương</strong>.</li>
              <li>Đối với phép trừ $X - Y = X + (-Y)$: Tràn xảy ra khi lấy $(\\text{Số dương}) - (\\text{Số âm})$ ra âm, hoặc $(\\text{Số âm}) - (\\text{Số dương})$ ra dương.</li>
            </ul>
          </li>
        </ul>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức 1: Biến kiểu <code>char</code> 8-bit bị tràn trong ngôn ngữ C</div>
          <p>Dải biểu diễn của <code>char</code> (8-bit có dấu) là $[-128, +127]$:</p>
          <ul>
            <li>Nếu tổng toán học $S = a + b > +127$ (tràn dương): Giá trị thực tế là $\\mathbf{S - 256}$ (ví dụ: $65 + 65 = 130 \\implies 130 - 256 = -126$).</li>
            <li>Nếu tổng toán học $S = a + b < -128$ (tràn âm): Giá trị thực tế là $\\mathbf{S + 256}$ (ví dụ: $-91 + (-67) = -158 \\implies -158 + 256 = +98$).</li>
          </ul>
        </div>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức 2: Tìm dải giá trị của thanh ghi thứ hai gây tràn khi <code>add</code> 32-bit</div>
          <p>Giả sử thanh ghi thứ nhất chứa số dương $K > 0$ (ví dụ $K = 512 = \\text{0x200}$ hoặc $K = 1024 = \\text{0x400}$). Khi thực hiện <code>add rd, rs1, rs2</code>, tràn dương xảy ra khi:</p>
          <p>$$K + \\text{rs2} > \\text{0x7FFFFFFF} \\iff \\text{rs2} \\ge \\text{0x80000000} - K$$</p>
          <p>Vậy dải giá trị gây tràn luôn từ <strong><code>(0x80000000 - K)</code> đến <code>0x7FFFFFFF</code></strong> (tuyệt đối không chọn đáp án kết thúc bằng <code>0x80000000</code> vì <code>0x80000000</code> là số âm!).</p>
        </div>
      `
    },
    {
      id: "4.1.5",
      chapter: 4,
      code: "4.1.5",
      title: "Nhân/Chia số nguyên và Mở rộng RVM trong RISC-V",
      pdfPage: 108,
      printedPage: 107,
      linkedGroups: ["4.1", "4.2.4"],
      summary: "Các lệnh mul, mulh, div, rem trong RV32M và quy tắc vàng về dấu của Thương (div) và Số dư (rem).",
      content: `
        <h4>1. Các lệnh Nhân và Chia số nguyên (RV32M)</h4>
        <ul>
          <li><strong>Nhân hai thanh ghi 32-bit tạo tích 64-bit:</strong>
            <ul>
              <li><code>mul rd, rs1, rs2</code>: Lưu <strong>32 bit thấp</strong> của tích vào <code>rd</code>.</li>
              <li><code>mulh rd, rs1, rs2</code>: Lưu <strong>32 bit cao</strong> của tích (nhân 2 số có dấu). (<code>mulhu</code> cho 2 số không dấu; <code>mulhsu</code> cho <code>rs1</code> có dấu, <code>rs2</code> không dấu).</li>
            </ul>
          </li>
          <li><strong>Chia hai thanh ghi 32-bit:</strong>
            <ul>
              <li><code>div rd, rs1, rs2</code> (có dấu) và <code>divu</code> (không dấu): Lấy <strong>phần thương nguyên</strong>.</li>
              <li><code>rem rd, rs1, rs2</code> (có dấu) và <code>remu</code> (không dấu): Lấy <strong>phần số dư</strong>.</li>
            </ul>
          </li>
        </ul>

        <div class="callout callout-trap">
          <div class="callout-title">⚠️ Quy tắc dấu của Thương (<code>div</code>) và Số dư (<code>rem</code>) trong phép chia có dấu</div>
          <ul>
            <li><strong>Dấu của Thương ($Q$):</strong> Hai số cùng dấu thì thương dương ($+$), hai số trái dấu thì thương âm ($-$).</li>
            <li><strong>Dấu của Số dư ($R$):</strong> Số dư luôn luôn <strong>cùng dấu với SỐ BỊ CHIA</strong> (thừa số đứng trước), bất kể số chia âm hay dương!</li>
            <li><em>Ví dụ:</em> Chia $67$ cho $-13$: Thương $Q = 67 \\div (-13) = -5$ (<code>0xfffffffb</code>), Số dư $R = 67 - (-13) \\times (-5) = +2$ (<code>0x00000002</code>).</li>
          </ul>
        </div>
      `
    },
    {
      id: "4.1.6",
      chapter: 4,
      code: "4.1.6",
      title: "Số thực dấu phẩy động chuẩn IEEE 754 32-bit",
      pdfPage: 109,
      printedPage: 108,
      linkedGroups: ["4.1", "4.2.5"],
      summary: "Cấu trúc 3 trường [S (1 bit) | e (8 bit) | m (23 bit)], công thức (-1)^S * (1.m)_2 * 2^(e-127), và các quy ước đặc biệt (±0, ±∞, NaN = 2^24 - 2).",
      content: `
        <h4>1. Cấu trúc chuẩn IEEE 754 độ chính xác đơn 32-bit (Single Precision)</h4>
        <table class="theory-table">
          <thead>
            <tr>
              <th>Bit 31 (1 bit)</th>
              <th>Bit 30:23 (8 bit)</th>
              <th>Bit 22:0 (23 bit)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Bit dấu $S$</strong> (0: dương, 1: âm)</td>
              <td><strong>Số mũ lệch $e$</strong> (Biased Exponent, Bias = 127)</td>
              <td><strong>Phần lẻ định trị $m$</strong> (Fraction, ẩn số <code>1.</code> ở trước)</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức xác định giá trị số thực $X$</div>
          <p>$$X = (-1)^S \\times (1.m)_{(2)} \\times 2^{e - 127}$$</p>
          <ul>
            <li><strong>Số mũ thực $E$:</strong> $E = e - 127 \\iff e = E + 127$ (với chuẩn 64-bit Double Precision: $e$ dài 11 bit, Bias là $1023$, $m$ dài 52 bit).</li>
            <li><strong>Phần định trị $(1.m)_{(2)}$:</strong> Luôn có số <code>1.</code> ẩn trước dấu phẩy nhị phân. Các bit sau dấu phẩy có giá trị lần lượt là $2^{-1} = 0.5$, $2^{-2} = 0.25$, $2^{-3} = 0.125$, $2^{-4} = 0.0625$...</li>
          </ul>
        </div>

        <h4>2. Các quy ước đặc biệt của chuẩn IEEE 754 32-bit (Rất hay hỏi trắc nghiệm)</h4>
        <ul>
          <li><strong>Số $\\pm 0$:</strong> Khi tất cả 8 bit mũ $e = 0$ (<code>00000000</code>) và tất cả 23 bit $m = 0$.</li>
          <li><strong>Số Vô cùng ($\\pm\\infty$):</strong> Khi tất cả 8 bit mũ $e = 255$ (<code>11111111</code>) và tất cả 23 bit $m = 0$ (tức <code>0x7F800000</code> cho $+\\infty$ và <code>0xFF800000</code> cho $-\\infty$).</li>
          <li><strong>Không phải là số (NaN – Not a Number):</strong> Khi tất cả 8 bit mũ $e = 255$ (<code>11111111</code>) và phần lẻ $m \\neq 0$ (có ít nhất 1 bit bằng 1 trong 23 bit của $m$).</li>
          <li><strong>Tổng số cách biểu diễn NaN trong chuẩn 32-bit:</strong> Có 2 cách chọn dấu $S$ ($0$ hoặc $1$) và $(2^{23} - 1)$ cách chọn $m \\neq 0$:
            $$2 \\times (2^{23} - 1) = \\mathbf{2^{24} - 2}$$
          </li>
        </ul>
      `
    },
    // ==================== CHƯƠNG 6 (BỘ NHỚ MÁY TÍNH) ====================
    {
      id: "6.1.1",
      chapter: 6,
      code: "6.1.1",
      title: "Tổ chức Băng nhớ vật lý đan xen (Interleaved Memory Banks)",
      pdfPage: 44,
      printedPage: 43,
      linkedGroups: ["6.2.1"],
      summary: "Bus dữ liệu m-bit, số băng nhớ K = m/8, vị trí băng chứa byte = Địa chỉ mod K.",
      content: `
        <h4>1. Nguyên lý tổ chức băng nhớ đan xen (Low-order interleaving)</h4>
        <p>Để tăng băng thông truy xuất bộ nhớ, bộ nhớ chính được chia thành nhiều khối vật lý độc lập gọi là các <strong>băng nhớ (Memory Banks / Mô-đun nhớ)</strong> có thể hoạt động song song.</p>
        <p>Số lượng băng nhớ vật lý $K$ được quyết định bởi độ rộng của Bus dữ liệu kết nối giữa CPU và Bộ nhớ chính:</p>
        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức xác định số lượng Băng nhớ vật lý ($K$)</div>
          <p>$$K = \\frac{\\text{Độ rộng Bus dữ liệu (bit)}}{8\\text{ bit/byte}}$$</p>
          <ul>
            <li>Bus dữ liệu $32\\text{ bit} \\implies K = \\frac{32}{8} = 4$ băng nhớ (Băng 0, 1, 2, 3).</li>
            <li>Bus dữ liệu $64\\text{ bit} \\implies K = \\frac{64}{8} = 8$ băng nhớ (Băng 0 đến Băng 7).</li>
          </ul>
        </div>

        <h4>2. Xác định vị trí băng nhớ chứa byte có địa chỉ $X$</h4>
        <ul>
          <li><strong>Vị trí băng nhớ chứa byte:</strong> $\\text{Bank} = X \\bmod K$.</li>
          <li><strong>Mẹo làm nhanh với địa chỉ Hexa:</strong>
            <ul>
              <li>Với $K = 4$: Lấy chữ số Hex cuối cùng đổi ra nhị phân (2 bit cuối) hoặc chia lấy dư cho 4.</li>
              <li>Với $K = 8$: Lấy chữ số Hex cuối cùng chia lấy dư cho 8 (ví dụ: chữ số cuối là <code>7</code> $\\implies$ Băng 7; chữ số cuối là <code>D</code> (13) $\\implies 13 \\bmod 8 = 5 \\implies$ Băng 5).</li>
            </ul>
          </li>
          <li><strong>Địa chỉ của byte bên trong từng băng nhớ:</strong> $\\text{Offset} = \\lfloor X / K \\rfloor$.</li>
        </ul>
      `
    },
    {
      id: "6.1.2",
      chapter: 6,
      code: "6.1.2",
      title: "Thiết bị lưu trữ ngoài (Ổ đĩa HDD và Ổ bán dẫn SSD)",
      pdfPage: 50,
      printedPage: 49,
      linkedGroups: ["6.2.2"],
      summary: "So sánh đặc điểm và kịch bản ứng dụng giữa ổ từ HDD và ổ bán dẫn SSD.",
      content: `
        <h4>1. So sánh ổ đĩa cứng cơ học HDD và ổ thể rắn SSD</h4>
        <table class="theory-table">
          <thead>
            <tr>
              <th>Đặc trưng</th>
              <th>Ổ đĩa từ (HDD)</th>
              <th>Ổ bán dẫn thể rắn (SSD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cơ chế hoạt động</strong></td>
              <td>Đĩa quay cơ học, đầu từ chuyển động để đọc/ghi</td>
              <td>Vi mạch bán dẫn Flash NAND (hoàn toàn điện tử, không cơ học)</td>
            </tr>
            <tr>
              <td><strong>Tốc độ & Độ trễ</strong></td>
              <td>Chậm (có độ trễ tìm rãnh Seek Time và chờ quay)</td>
              <td>Rất nhanh, độ trễ truy xuất ngẫu nhiên cực thấp</td>
            </tr>
            <tr>
              <td><strong>Tiếng ồn & Chống sốc</strong></td>
              <td>Phát ra tiếng ồn khi quay, dễ hỏng khi rơi sốc vật lý</td>
              <td>Hoàn toàn im lặng, khả năng chống sốc vật lý xuất sắc</td>
            </tr>
            <tr>
              <td><strong>Chi phí / Dung lượng</strong></td>
              <td>Giá trên mỗi GB rất rẻ</td>
              <td>Giá trên mỗi GB cao hơn HDD</td>
            </tr>
            <tr>
              <td><strong>Độ bền ghi xóa</strong></td>
              <td>Ghi đè từ tính liên tục gần như không giới hạn</td>
              <td>Có giới hạn số chu kỳ ghi/xóa (TBW - Terabytes Written)</td>
            </tr>
          </tbody>
        </table>

        <h4>2. Kịch bản ứng dụng thực tế</h4>
        <ul>
          <li><strong>Ưu tiên dùng SSD:</strong> Ổ cài đặt Hệ điều hành (Windows, Linux), máy tính chơi game (giảm thời gian load), Laptop di động, Smartphone, Tablet.</li>
          <li><strong>Ưu tiên dùng HDD:</strong> Hệ thống lưu trữ mạng (NAS), máy chủ dữ liệu lớn (Data Center), hệ thống camera giám sát ghi hình 24/7 (cần ghi đè liên tục dung lượng khổng lồ với chi phí thấp).</li>
        </ul>
      `
    },

    // ==================== CHƯƠNG 7 (HỆ THỐNG VÀO-RA) ====================
    {
      id: "7.1.1",
      chapter: 7,
      code: "7.1.1",
      title: "Không gian địa chỉ Vào-Ra (MMIO vs Isolated I/O)",
      pdfPage: 42,
      printedPage: 41,
      linkedGroups: ["7.2.1"],
      summary: "Vào-ra theo bản đồ bộ nhớ (Memory-Mapped I/O) vs Vào-ra riêng biệt (Isolated I/O).",
      content: `
        <h4>1. Vào-ra theo bản đồ bộ nhớ (Memory-Mapped I/O - MMIO)</h4>
        <ul>
          <li><strong>Nguyên tắc:</strong> Cổng vào-ra của thiết bị ngoại vi được đánh địa chỉ nằm <em>chung không gian địa chỉ</em> với bộ nhớ chính (RAM).</li>
          <li><strong>Tập lệnh sử dụng:</strong> CPU sử dụng chính các lệnh đọc/ghi bộ nhớ thông thường (<code>lw</code>, <code>sw</code>, <code>lb</code>, <code>sb</code> trong RISC-V) để trao đổi dữ liệu với thiết bị vào-ra.</li>
          <li><strong>Ưu điểm:</strong> Không cần bổ sung tập lệnh I/O đặc biệt, mạch điều khiển CPU đơn giản.</li>
          <li><strong>Nhược điểm:</strong> Chiếm dụng một phần không gian địa chỉ của bộ nhớ chính.</li>
        </ul>

        <h4>2. Vào-ra riêng biệt (Isolated I/O / Port-Mapped I/O)</h4>
        <ul>
          <li><strong>Nguyên tắc:</strong> Không gian địa chỉ cho cổng vào-ra tách biệt hoàn toàn với không gian địa chỉ của bộ nhớ chính.</li>
          <li><strong>Tập lệnh sử dụng:</strong> CPU bắt buộc phải có tập lệnh I/O chuyên biệt (như <code>IN</code>, <code>OUT</code> trong vi xử lý Intel x86).</li>
          <li><strong>Đặc điểm:</strong> Bus điều khiển cần có các tín hiệu đọc/ghi cổng riêng (<code>IOR</code>, <code>IOW</code>) tách biệt với <code>MEMR</code>, <code>MEMW</code>.</li>
          <li><strong>Dung lượng quản lý:</strong> Nếu bus địa chỉ cổng vào-ra rộng $k$ bit, số cổng vào-ra tối đa là $2^k$ cổng (ví dụ: $16\\text{ bit} \\implies 2^{16} = 65536$ cổng, từ <code>0x0000</code> đến <code>0xFFFF</code>).</li>
        </ul>
      `
    },
    {
      id: "7.1.2",
      chapter: 7,
      code: "7.1.2",
      title: "Các phương pháp điều khiển Vào-Ra (Polling, Ngắt PIC, DMA)",
      pdfPage: 47,
      printedPage: 46,
      linkedGroups: ["7.2.2"],
      summary: "So sánh hiệu suất 3 phương pháp Vào-Ra (Polling < Ngắt < DMA), bộ điều khiển PIC và vi mạch DMAC.",
      content: `
        <h4>1. Ba phương pháp điều khiển Vào-Ra cốt lõi</h4>
        <ul>
          <li><strong>1. Vào-ra bằng chương trình (Programmed I/O hay Polling - Thăm dò):</strong>
            <ul>
              <li>CPU trực tiếp điều khiển toàn bộ quá trình truyền dữ liệu.</li>
              <li>Trong lúc chờ thiết bị ngoại vi hoàn thành và sẵn sàng, CPU bị “khóa” trong một vòng lặp kiểm tra bit trạng thái liên tục (<em>busy waiting</em>).</li>
              <li><strong>Hiệu suất CPU thấp nhất</strong> vì lãng phí chu kỳ xử lý của CPU.</li>
            </ul>
          </li>
          <li><strong>2. Vào-ra điều khiển bằng ngắt (Interrupt-driven I/O):</strong>
            <ul>
              <li>CPU ra lệnh vào-ra cho mô-đun rồi tiếp tục thực hiện chương trình khác.</li>
              <li>Khi thiết bị ngoại vi sẵn sàng, mô-đun vào-ra sẽ gửi tín hiệu ngắt (<code>INTR</code>) tới CPU. CPU tạm dừng việc đang làm để xử lý trao đổi dữ liệu.</li>
              <li><strong>Giải phóng CPU</strong> trong suốt khoảng thời gian chờ thiết bị ngoại vi sẵn sàng.</li>
              <li><em>Bộ điều khiển ngắt khả trình (PIC - Programmable Interrupt Controller):</em> Tiếp nhận nhiều đường yêu cầu ngắt (IR0-IR7) từ nhiều thiết bị, có phân định mức ưu tiên để gửi tới CPU.</li>
            </ul>
          </li>
          <li><strong>3. Truy cập bộ nhớ trực tiếp (DMA - Direct Memory Access):</strong>
            <ul>
              <li>CPU giao phó toàn quyền điều khiển đường truyền Bus cho vi mạch chuyên dụng <strong>DMAC (DMA Controller)</strong>.</li>
              <li>DMAC truyền dữ liệu theo từng khối lớn trực tiếp giữa Thiết bị vào-ra và Bộ nhớ chính (RAM) mà <strong>hoàn toàn không đi qua CPU</strong>.</li>
              <li><strong>Cấu tạo của DMAC gồm 4 khối:</strong> Logic điều khiển, Bộ đếm dữ liệu (Data counter), Thanh ghi địa chỉ (Address register), Thanh ghi dữ liệu (Data register). <strong>Lưu ý: DMAC không có thanh ghi PC (Bộ đếm chương trình)</strong> vì DMAC không thực thi mã lệnh.</li>
              <li><strong>Kỹ thuật DMA trong suốt (Transparent DMA):</strong> DMAC chỉ tranh thủ dùng Bus vào những chu kỳ mà CPU đang xử lý nội bộ (không dùng Bus). Đây là cách tối ưu nhất vì không làm chậm CPU nhưng phức tạp nhất về mặt thiết kế phần cứng.</li>
            </ul>
          </li>
        </ul>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Thứ tự hiệu suất sử dụng CPU tăng dần (từ thấp đến cao)</div>
          <p class="formula-highlight">Programmed I/O (Polling) &rarr; Interrupt-driven I/O &rarr; DMA</p>
        </div>
      `
    }

  ];
})(typeof window !== "undefined" ? window : globalThis);
