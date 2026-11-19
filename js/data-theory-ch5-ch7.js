// js/data-theory-ch5-ch7.js
// Bổ sung cấu trúc Chương 5, 6, 7 (CA.RISCV.2025), Sổ tay Lý thuyết trọng tâm kèm Sơ đồ SVG vector chuẩn theme,
// Cheatsheet công thức và Phương pháp giải cho 11 dạng bài Cuối kỳ (5.1-5.4, 6.1-6.4, 7.1-7.3).

(function (root) {
  root.KTMT_CHAPTERS = root.KTMT_CHAPTERS || [];
  root.KTMT_THEORY = root.KTMT_THEORY || [];
  root.KTMT_CHEATSHEET = root.KTMT_CHEATSHEET || [];
  root.KTMT_PROBLEM_METHODS_CHEATSHEET = root.KTMT_PROBLEM_METHODS_CHEATSHEET || [];

  // 1. Bổ sung metadata 3 Chương 5, 6, 7
  var extraChapters = [
    {
      id: 5,
      code: "Chương 5",
      title: "Bộ xử lý",
      subtitle: "Đường dữ liệu đơn/đa chu kỳ RV32I, Control Unit (7 tín hiệu), Đường ống lệnh Pipeline 5 tầng, Hazards (Structural/Data/Control), Forwarding, Load-Use Stall và Dự đoán rẽ nhánh 1-bit/2-bit.",
      pdfPageStart: 1,
      printedPageStart: 1,
      theorySections: ["5.1.1", "5.1.2", "5.1.3", "5.1.4"],
      groups: [
        { id: "5.1", title: "Nhóm 1: Đường dữ liệu (Datapath) & Tín hiệu điều khiển (Control Unit)", type: "exercise", pdfPage: null, exercises: "Bài tập 5.1 - 5.16", count: 16, summary: "Đường dữ liệu đơn chu kỳ RV32I, 7 tín hiệu điều khiển (Branch, MemRead, MemtoReg, ALUOp, MemWrite, ALUSrc, RegWrite), ALU Control và phân tích lỗi dây đứt (Stuck-at)." },
        { id: "5.2", title: "Nhóm 2: Đường ống lệnh (Pipeline) & Tính toán hiệu năng Pipeline", type: "exercise", pdfPage: null, exercises: "Bài tập 5.17 - 5.22", count: 6, summary: "Chu kỳ xung nhịp T_pipe = max(T_i), tổng chu kỳ k + (n - 1) + S, thông lượng (Throughput) và tốc độ tăng tốc (Speedup)." },
        { id: "5.3", title: "Nhóm 3: Xung đột đường ống (Hazards), Forwarding & Stall", type: "exercise", pdfPage: null, exercises: "Bài tập 5.23 - 5.31", count: 9, summary: "Phụ thuộc dữ liệu RAW/WAR/WAW, kỹ thuật Forwarding từ EX/MEM & MEM/WB, ngoại lệ Load-Use (+1 stall) và chèn nop khi không có Forwarding." },
        { id: "5.4", title: "Nhóm 4: Dự đoán rẽ nhánh (Branch Prediction) & Đa chu kỳ / Nâng cao", type: "exercise", pdfPage: null, exercises: "Bài tập 5.32 - 5.34", count: 3, summary: "Bộ dự đoán nhánh tĩnh vs động 1-bit/2-bit bão hòa 4 trạng thái (00 SNT ↔ 01 WNT ↔ 10 WT ↔ 11 ST), CPU đa chu kỳ và ILP." }
      ]
    },
    {
      id: 6,
      code: "Chương 6",
      title: "Bộ nhớ máy tính",
      subtitle: "Phân cấp bộ nhớ, Nguyên lý cục bộ, SRAM/DRAM/ROM & Mở rộng chip RAM, Ánh xạ Cache (Tag/Index/Offset), Chính sách ghi/3C/AMAT, Bộ nhớ ảo (Paging/TLB) và Bộ nhớ ngoài (HDD/SSD/RAID).",
      pdfPageStart: 1,
      printedPageStart: 1,
      theorySections: ["6.1.1", "6.1.2", "6.1.3", "6.1.4"],
      groups: [
        { id: "6.1", title: "Nhóm 1: Phân cấp bộ nhớ, Nguyên lý cục bộ, SRAM/DRAM & Tổ chức chip nhớ", type: "exercise", pdfPage: null, exercises: "Bài tập 6.1 - 6.16", count: 16, summary: "Phân cấp dung lượng/tốc độ, Temporal & Spatial Locality, SRAM vs DRAM vs ROM/Flash, ghép mở rộng chip RAM, bộ nhớ đan xen (Interleaved) và HDD/SSD." },
        { id: "6.2", title: "Nhóm 2: Ánh xạ Cache, Tách bit địa chỉ (Tag/Index/Offset) & Kích thước phần cứng", type: "exercise", pdfPage: null, exercises: "Bài tập 6.17 - 6.34", count: 18, summary: "Direct-Mapped (K=1), K-way Set-Associative, Fully-Associative (Index=0), tách Tag/Index/Offset và tính tổng số bit phần cứng Cache (Valid + Dirty + Tag + Data)." },
        { id: "6.3", title: "Nhóm 3: Chính sách ghi, Thay thế, Lỗi 3C & Hiệu năng Cache (AMAT / CPI)", type: "exercise", pdfPage: null, exercises: "Bài tập 6.35 - 6.42", count: 8, summary: "Write-Through vs Write-Back, LRU/FIFO, 3C Misses (Compulsory/Capacity/Conflict), Miss Rate duyệt mảng và AMAT / CPI thực tế." },
        { id: "6.4", title: "Nhóm 4: Bộ nhớ ảo (Virtual Memory), Phân trang (Paging) & TLB", type: "exercise", pdfPage: null, exercises: "Bài tập 6.43 - 6.48", count: 6, summary: "Phân trang Paging, dịch VPN → PPN + Page Offset, kích thước Page Table, Page Fault/Thrashing, TLB và Inverted Page Table." }
      ]
    },
    {
      id: 7,
      code: "Chương 7",
      title: "Hệ thống Vào-Ra",
      subtitle: "Thiết bị ngoại vi, Mô-đun Vào-Ra, Định địa chỉ MMIO vs Isolated I/O, 3 phương pháp điều khiển (Polling, Interrupt/PIC/CSRs, DMA/DMAC) và Thực hành MMIO RISC-V (RARS, LED 7 thanh, Bàn phím).",
      pdfPageStart: 1,
      printedPageStart: 1,
      theorySections: ["7.1.1", "7.1.2", "7.1.3"],
      groups: [
        { id: "7.1", title: "Nhóm 1: Tổng quan Hệ thống Vào-Ra, Mô-đun Vào-Ra & Định địa chỉ I/O (MMIO / Isolated)", type: "exercise", pdfPage: null, exercises: "Bài tập 7.1 - 7.3", count: 3, summary: "Chức năng Mô-đun I/O, so sánh Memory-Mapped I/O (RISC-V) vs Isolated I/O và tính số cổng/dải địa chỉ Hexa." },
        { id: "7.2", title: "Nhóm 2: Các phương pháp điều khiển Vào-Ra (Polling, Ngắt, DMA & DMAC)", type: "exercise", pdfPage: null, exercises: "Bài tập 7.4 - 7.13", count: 10, summary: "So sánh hiệu năng Programmed I/O (Polling), Interrupt-driven I/O (PIC), DMA (DMAC, BRQ/BGT, Burst / Cycle Stealing / Transparent)." },
        { id: "7.3", title: "Nhóm 3: Lập trình MMIO RISC-V (RARS, LED 7 thanh, Bàn phím) & Ngắt ngoại vi", type: "exercise", pdfPage: null, exercises: "Bài tập 7.14 - 7.22", count: 9, summary: "Mã LED 7 thanh (0xFFFF0011/0xFFFF0010), Keyboard & Display MMIO Simulator (0xFFFF0000-0xFFFF000C), vòng lặp Polling và thanh ghi CSRs ngắt." }
      ]
    }
  ];

  extraChapters.forEach(function (ch) {
    if (!root.KTMT_CHAPTERS.some(function (x) { return x.id === ch.id; })) {
      root.KTMT_CHAPTERS.push(ch);
    }
  });

  // 2. Bổ sung 11 mục Lý thuyết trọng tâm kèm Sơ đồ SVG vector chuẩn theme Dark/Light
  var extraTheory = [
    // ==================== CHƯƠNG 5 ====================
    {
      id: "5.1.1",
      chapter: 5,
      code: "5.1.1",
      title: "Đường dữ liệu đơn chu kỳ RV32I & Đơn vị điều khiển (Control Unit)",
      pdfPage: null,
      printedPage: null,
      linkedGroups: ["5.1"],
      summary: "5 công đoạn thực thi lệnh (IF, ID, EX, MEM, WB), các khối chức năng trên Datapath RV32I, bảng 7 tín hiệu điều khiển chính và phân tích lỗi dây đứt (Stuck-at).",
      content: `
        <h4>1. Kiến trúc Đường dữ liệu đơn chu kỳ RV32I (Single-Cycle Datapath)</h4>
        <p>Trong bộ xử lý đơn chu kỳ, <strong>mọi lệnh thực thi trọn vẹn trong đúng 1 chu kỳ xung nhịp</strong> ($\\text{CPI} = 1$). Dữ liệu đi qua tối đa 5 khối chức năng chính từ trái sang phải:</p>
        <ol>
          <li><strong>IF (Instruction Fetch):</strong> Dùng <code>PC</code> đọc mã lệnh 32-bit từ <em>Instruction Memory (IMEM)</em> và tính $PC + 4$.</li>
          <li><strong>ID (Instruction Decode):</strong> Giải mã <code>opcode = Inst[6:0]</code>, đọc <code>rs1 = Inst[19:15]</code>, <code>rs2 = Inst[24:20]</code> từ <em>Register File</em>, tạo hằng số mở rộng dấu 32-bit tại <code>Imm Gen</code>.</li>
          <li><strong>EX (Execute):</strong> Bộ <code>ALU</code> thực hiện phép toán số học/logic, tính địa chỉ bộ nhớ ($rs1 + \\text{imm}$), hoặc trừ so sánh rẽ nhánh (tín hiệu <code>Zero</code>); bộ cộng riêng tính đích nhánh $\\text{BTA} = PC + \\text{imm}_B$.</li>
          <li><strong>MEM (Memory Access):</strong> Chỉ lệnh <code>Load</code> (<code>MemRead=1</code>) đọc và <code>Store</code> (<code>MemWrite=1</code>) ghi tại <em>Data Memory (DMEM)</em>.</li>
          <li><strong>WB (Write Back):</strong> Chọn kết quả từ ALU hoặc DMEM (qua MUX <code>MemtoReg</code>) ghi về <code>rd = Inst[11:7]</code> khi <code>RegWrite=1</code>.</li>
        </ol>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 760 220" width="740" height="215" role="img" aria-label="Sơ đồ Đường dữ liệu đơn chu kỳ RV32I và Control Unit">
            <rect x="12" y="88" width="54" height="54" rx="6" class="svg-box-accent" />
            <text x="39" y="119" text-anchor="middle" class="svg-title">PC</text>

            <rect x="86" y="76" width="90" height="78" rx="6" class="svg-box" />
            <text x="131" y="110" text-anchor="middle" class="svg-title">IMEM</text>
            <text x="131" y="128" text-anchor="middle" class="svg-sub">Inst[31:0]</text>

            <rect x="198" y="12" width="160" height="44" rx="6" class="svg-box-primary" />
            <text x="278" y="31" text-anchor="middle" class="svg-title-primary">Control Unit</text>
            <text x="278" y="47" text-anchor="middle" class="svg-sub">7 tín hiệu điều khiển</text>

            <rect x="206" y="72" width="112" height="72" rx="6" class="svg-box" />
            <text x="262" y="102" text-anchor="middle" class="svg-title">Register File</text>
            <text x="262" y="120" text-anchor="middle" class="svg-sub">rs1, rs2 → rd</text>

            <rect x="206" y="158" width="112" height="42" rx="6" class="svg-box-accent" />
            <text x="262" y="177" text-anchor="middle" class="svg-title">Imm Gen</text>
            <text x="262" y="192" text-anchor="middle" class="svg-sub">Sign-Extend 32b</text>

            <rect x="352" y="82" width="92" height="78" rx="6" class="svg-box-primary" />
            <text x="398" y="115" text-anchor="middle" class="svg-title-primary">ALU</text>
            <text x="398" y="133" text-anchor="middle" class="svg-sub">Zero / Result</text>

            <rect x="478" y="78" width="104" height="84" rx="6" class="svg-box" />
            <text x="530" y="112" text-anchor="middle" class="svg-title">DMEM</text>
            <text x="530" y="130" text-anchor="middle" class="svg-sub">MemRead / Write</text>

            <rect x="616" y="86" width="128" height="68" rx="6" class="svg-box-accent" />
            <text x="680" y="114" text-anchor="middle" class="svg-title">MUX MemtoReg</text>
            <text x="680" y="132" text-anchor="middle" class="svg-sub">Write Back → rd</text>

            <line x1="66" y1="115" x2="86" y2="115" class="svg-line" />
            <line x1="176" y1="108" x2="206" y2="108" class="svg-line" />
            <line x1="186" y1="108" x2="186" y2="34" class="svg-line" />
            <line x1="186" y1="34" x2="198" y2="34" class="svg-line" />
            <line x1="186" y1="108" x2="186" y2="179" class="svg-line" />
            <line x1="186" y1="179" x2="206" y2="179" class="svg-line" />
            <line x1="318" y1="102" x2="352" y2="102" class="svg-line" />
            <line x1="318" y1="179" x2="336" y2="179" class="svg-line" />
            <line x1="336" y1="179" x2="336" y2="136" class="svg-line" />
            <line x1="336" y1="136" x2="352" y2="136" class="svg-line" />
            <line x1="444" y1="120" x2="478" y2="120" class="svg-line" />
            <line x1="582" y1="120" x2="616" y2="120" class="svg-line" />
            <line x1="358" y1="34" x2="530" y2="34" class="svg-line" stroke-dasharray="4 3" />
            <line x1="530" y1="34" x2="530" y2="78" class="svg-line" stroke-dasharray="4 3" />
          </svg>
          <figcaption>Hình 5.1 – Sơ đồ khối Đường dữ liệu đơn chu kỳ RV32I và Đơn vị điều khiển (Control Unit)</figcaption>
        </figure>

        <h4>2. Bảng 7 tín hiệu điều khiển chuẩn trên Datapath RV32I</h4>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr><th>Loại lệnh</th><th>ALUSrc</th><th>MemtoReg</th><th>RegWrite</th><th>MemRead</th><th>MemWrite</th><th>Branch</th><th>ALUOp</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>R-type</strong> (<code>add, sub, slt, and, or</code>)</td><td><code>0</code> (rs2)</td><td><code>0</code> (ALU)</td><td><code>1</code></td><td><code>0</code></td><td><code>0</code></td><td><code>0</code></td><td><code>10</code></td></tr>
              <tr><td><strong>I-ALU</strong> (<code>addi, ori, andi...</code>)</td><td><code>1</code> (Imm)</td><td><code>0</code> (ALU)</td><td><code>1</code></td><td><code>0</code></td><td><code>0</code></td><td><code>0</code></td><td><code>10 / 00</code></td></tr>
              <tr><td><strong>Load</strong> (<code>lw, lh, lb</code>)</td><td><code>1</code> (Imm)</td><td><code>1</code> (Mem)</td><td><code>1</code></td><td><code>1</code></td><td><code>0</code></td><td><code>0</code></td><td><code>00</code> (+)</td></tr>
              <tr><td><strong>Store</strong> (<code>sw, sh, sb</code>)</td><td><code>1</code> (Imm)</td><td><code>X</code> (Don't care)</td><td><code>0</code></td><td><code>0</code></td><td><code>1</code></td><td><code>0</code></td><td><code>00</code> (+)</td></tr>
              <tr><td><strong>Branch</strong> (<code>beq, bne</code>)</td><td><code>0</code> (rs2)</td><td><code>X</code> (Don't care)</td><td><code>0</code></td><td><code>0</code></td><td><code>0</code></td><td><code>1</code></td><td><code>01</code> (-)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="formula-practice-inline" data-group-link="5.1">
          <span>📝 <strong>Nhóm 5.1: Đường dữ liệu (Datapath) &amp; Tín hiệu điều khiển (<span class="group-q-count">16 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('5.1', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('5.1', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "5.1.2",
      chapter: 5,
      code: "5.1.2",
      title: "Đường ống lệnh (Pipelining) & Tính toán Hiệu năng Pipeline",
      pdfPage: null,
      printedPage: null,
      linkedGroups: ["5.2"],
      summary: "Nguyên lý 5 tầng đường ống lệnh, 4 thanh ghi đệm (IF/ID, ID/EX, EX/MEM, MEM/WB), công thức T_pipe, tổng số chu kỳ k + (n-1) + S và tăng tốc Speedup.",
      content: `
        <h4>1. Nguyên lý Đường ống lệnh 5 công đoạn &amp; Thanh ghi đệm</h4>
        <p><strong>Pipelining</strong> cho phép thực thi gối đầu nhiều lệnh đồng thời ở các công đoạn khác nhau, ngăn cách bởi <strong>4 thanh ghi đệm</strong>: <code>IF/ID</code>, <code>ID/EX</code>, <code>EX/MEM</code> và <code>MEM/WB</code>. Pipelining <strong>không làm giảm độ trễ của 1 lệnh đơn lẻ</strong> mà làm tăng mạnh <strong>thông lượng (Throughput)</strong>.</p>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 720 135" width="700" height="130" role="img" aria-label="Đường ống lệnh 5 công đoạn và 4 thanh ghi đệm">
            <rect x="14" y="34" width="102" height="58" rx="6" class="svg-box-accent" />
            <text x="65" y="58" text-anchor="middle" class="svg-title">IF</text>
            <text x="65" y="76" text-anchor="middle" class="svg-sub">Fetch (IMEM)</text>

            <rect x="130" y="22" width="18" height="82" rx="3" class="svg-box-primary" />
            <text x="139" y="120" text-anchor="middle" class="svg-sub">IF/ID</text>

            <rect x="162" y="34" width="102" height="58" rx="6" class="svg-box" />
            <text x="213" y="58" text-anchor="middle" class="svg-title">ID</text>
            <text x="213" y="76" text-anchor="middle" class="svg-sub">Decode &amp; RF</text>

            <rect x="278" y="22" width="18" height="82" rx="3" class="svg-box-primary" />
            <text x="287" y="120" text-anchor="middle" class="svg-sub">ID/EX</text>

            <rect x="310" y="34" width="102" height="58" rx="6" class="svg-box-primary" />
            <text x="361" y="58" text-anchor="middle" class="svg-title-primary">EX</text>
            <text x="361" y="76" text-anchor="middle" class="svg-sub">ALU / Branch</text>

            <rect x="426" y="22" width="18" height="82" rx="3" class="svg-box-primary" />
            <text x="435" y="120" text-anchor="middle" class="svg-sub">EX/MEM</text>

            <rect x="458" y="34" width="102" height="58" rx="6" class="svg-box" />
            <text x="509" y="58" text-anchor="middle" class="svg-title">MEM</text>
            <text x="509" y="76" text-anchor="middle" class="svg-sub">Data Memory</text>

            <rect x="574" y="22" width="18" height="82" rx="3" class="svg-box-primary" />
            <text x="583" y="120" text-anchor="middle" class="svg-sub">MEM/WB</text>

            <rect x="606" y="34" width="100" height="58" rx="6" class="svg-box-accent" />
            <text x="656" y="58" text-anchor="middle" class="svg-title">WB</text>
            <text x="656" y="76" text-anchor="middle" class="svg-sub">Write Back</text>

            <line x1="116" y1="63" x2="130" y2="63" class="svg-line" />
            <line x1="148" y1="63" x2="162" y2="63" class="svg-line" />
            <line x1="264" y1="63" x2="278" y2="63" class="svg-line" />
            <line x1="296" y1="63" x2="310" y2="63" class="svg-line" />
            <line x1="412" y1="63" x2="426" y2="63" class="svg-line" />
            <line x1="444" y1="63" x2="458" y2="63" class="svg-line" />
            <line x1="560" y1="63" x2="574" y2="63" class="svg-line" />
            <line x1="592" y1="63" x2="606" y2="63" class="svg-line" />
          </svg>
          <figcaption>Hình 5.2 – Đường ống lệnh 5 công đoạn RV32I và 4 thanh ghi đệm IF/ID, ID/EX, EX/MEM, MEM/WB</figcaption>
        </figure>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Bộ công thức chuẩn tính Hiệu năng Pipeline $k$ công đoạn</div>
          <ul>
            <li><strong>Chu kỳ xung nhịp Pipeline:</strong> $T_{\\text{pipe}} = \\max(T_1, T_2, \\dots, T_k) + T_{\\text{reg}}$ (so với đơn chu kỳ: $T_{\\text{single}} = \\sum_{i=1}^{k} T_i$).</li>
            <li><strong>Tổng số chu kỳ thực thi $n$ lệnh</strong> (có $S$ chu kỳ stall/bubble):
              $$\\text{Cycles} = k + (n - 1) + S \\qquad \\Longrightarrow \\qquad t_{\\text{exec}} = \\bigl[k + (n - 1) + S\\bigr] \\times T_{\\text{pipe}}$$
            </li>
            <li><strong>Tốc độ tăng tốc lý tưởng (khi $n \\to \\infty$, các tầng cân bằng, không hazard):</strong> $\\text{Speedup} \\approx k$ (với 5 tầng $\\approx 5\\times$).</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="5.2">
          <span>📝 <strong>Nhóm 5.2: Đường ống lệnh (Pipeline) &amp; Hiệu năng (<span class="group-q-count">6 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('5.2', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('5.2', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "5.1.3",
      chapter: 5,
      code: "5.1.3",
      title: "Xung đột đường ống (Hazards), Forwarding & Load-Use Stall",
      pdfPage: null,
      printedPage: null,
      linkedGroups: ["5.3"],
      summary: "3 loại xung đột (Structural, Data RAW/WAR/WAW, Control), cơ chế Forwarding (EX/MEM & MEM/WB → ALU), ngoại lệ Load-Use (+1 stall) và quy tắc WB nửa đầu / ID nửa sau.",
      content: `
        <h4>1. Ba loại Xung đột Đường ống (Pipeline Hazards)</h4>
        <ul>
          <li><strong>Structural Hazard (Xung đột cấu trúc):</strong> Tranh chấp tài nguyên phần cứng (cùng truy cập bộ nhớ). Khắc phục bằng tách <em>IMEM</em> &amp; <em>DMEM</em> (kiến trúc Harvard), và quy ước <strong>ghi Register File ở nửa đầu chu kỳ WB, đọc ở nửa sau chu kỳ ID</strong>.</li>
          <li><strong>Data Hazard (Xung đột dữ liệu — chủ yếu là RAW: Read After Write):</strong> Lệnh sau cần đọc thanh ghi mà lệnh trước chưa kịp ghi xong.</li>
          <li><strong>Control Hazard (Xung đột điều khiển / rẽ nhánh):</strong> Chưa biết nhánh có nhảy hay không khi nạp lệnh kế tiếp.</li>
        </ul>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 700 165" width="680" height="160" role="img" aria-label="Kỹ thuật Forwarding và Load-Use Stall">
            <text x="16" y="34" class="svg-title">L1: add x1, x2, x3</text>
            <rect x="170" y="14" width="66" height="28" rx="4" class="svg-box" /><text x="203" y="32" text-anchor="middle" class="svg-sub">IF</text>
            <rect x="242" y="14" width="66" height="28" rx="4" class="svg-box" /><text x="275" y="32" text-anchor="middle" class="svg-sub">ID</text>
            <rect x="314" y="14" width="66" height="28" rx="4" class="svg-box-primary" /><text x="347" y="32" text-anchor="middle" class="svg-title-primary">EX</text>
            <rect x="386" y="14" width="66" height="28" rx="4" class="svg-box" /><text x="419" y="32" text-anchor="middle" class="svg-sub">MEM</text>
            <rect x="458" y="14" width="66" height="28" rx="4" class="svg-box" /><text x="491" y="32" text-anchor="middle" class="svg-sub">WB</text>

            <text x="16" y="76" class="svg-title">L2: sub x4, x1, x5</text>
            <rect x="242" y="56" width="66" height="28" rx="4" class="svg-box" /><text x="275" y="74" text-anchor="middle" class="svg-sub">IF</text>
            <rect x="314" y="56" width="66" height="28" rx="4" class="svg-box" /><text x="347" y="74" text-anchor="middle" class="svg-sub">ID</text>
            <rect x="386" y="56" width="66" height="28" rx="4" class="svg-box-primary" /><text x="419" y="74" text-anchor="middle" class="svg-title-primary">EX</text>
            <rect x="458" y="56" width="66" height="28" rx="4" class="svg-box" /><text x="491" y="74" text-anchor="middle" class="svg-sub">MEM</text>
            <rect x="530" y="56" width="66" height="28" rx="4" class="svg-box" /><text x="563" y="74" text-anchor="middle" class="svg-sub">WB</text>
            <line x1="380" y1="36" x2="394" y2="56" class="svg-line" stroke-width="2" />
            <text x="615" y="74" class="svg-sub">0 stall (EX→EX)</text>

            <text x="16" y="138" class="svg-title">Load-Use: lw→add</text>
            <rect x="170" y="118" width="66" height="28" rx="4" class="svg-box" /><text x="203" y="136" text-anchor="middle" class="svg-sub">IF</text>
            <rect x="242" y="118" width="66" height="28" rx="4" class="svg-box" /><text x="275" y="136" text-anchor="middle" class="svg-sub">ID</text>
            <rect x="314" y="118" width="66" height="28" rx="4" class="svg-box-accent" /><text x="347" y="136" text-anchor="middle" class="svg-title">STALL</text>
            <rect x="386" y="118" width="66" height="28" rx="4" class="svg-box-primary" /><text x="419" y="136" text-anchor="middle" class="svg-title-primary">EX</text>
            <rect x="458" y="118" width="66" height="28" rx="4" class="svg-box" /><text x="491" y="136" text-anchor="middle" class="svg-sub">MEM</text>
            <text x="550" y="136" class="svg-sub">Bắt buộc +1 stall (MEM→EX)</text>
          </svg>
          <figcaption>Hình 5.3 – Kỹ thuật Forwarding (0 stall cho ALU→ALU) và ngoại lệ Load-Use Hazard (+1 stall bắt buộc)</figcaption>
        </figure>

        <h4>2. Bảng đếm số chu kỳ Stall nhanh cho mọi đề thi</h4>
        <ul>
          <li><strong>Có Full Forwarding &amp; Hazard Detection:</strong> <code>ALU → ALU</code> hoặc <code>ALU → sw</code>: <strong>0 stall</strong>; chỉ riêng <code>lw rd → lệnh đọc rd ngay kế tiếp</code> (Load-Use): <strong>+1 stall</strong>.</li>
          <li><strong>KHÔNG Forwarding (có WB ghi nửa đầu / ID đọc nửa sau):</strong> Lệnh đọc thanh ghi cách lệnh ghi <strong>1 dòng</strong> $\\Rightarrow$ cần <strong>2 stall (2 nop)</strong>; cách <strong>2 dòng</strong> $\\Rightarrow$ cần <strong>1 stall (1 nop)</strong>; cách <strong>3 dòng trở lên</strong> $\\Rightarrow$ <strong>0 stall</strong>.</li>
        </ul>

        <div class="formula-practice-inline" data-group-link="5.3">
          <span>📝 <strong>Nhóm 5.3: Xung đột đường ống (Hazards), Forwarding &amp; Stall (<span class="group-q-count">9 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('5.3', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('5.3', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "5.1.4",
      chapter: 5,
      code: "5.1.4",
      title: "Dự đoán rẽ nhánh (Branch Prediction) & Đa chu kỳ / ILP",
      pdfPage: null,
      printedPage: null,
      linkedGroups: ["5.4"],
      summary: "Dự đoán nhánh tĩnh (Always Not-Taken / Taken), dự đoán động 1-bit & 2-bit bão hòa 4 trạng thái (00 ↔ 01 ↔ 10 ↔ 11), bộ xử lý đa chu kỳ và Superscalar.",
      content: `
        <h4>1. Bộ dự đoán rẽ nhánh (Branch Prediction)</h4>
        <ul>
          <li><strong>Dự đoán tĩnh (Static):</strong> Luôn đoán <em>Not-Taken</em> (không nhảy) hoặc luôn đoán <em>Taken</em> (nhảy, hay dùng cho vòng lặp nhảy ngược).</li>
          <li><strong>Dự đoán động 1-bit:</strong> Lưu lại kết quả lần gần nhất. Với vòng lặp $N$ lần, 1-bit đoán sai <strong>2 lần mỗi lượt vòng lặp</strong> (lần thoát vòng lặp và lần đầu vào lại).</li>
          <li><strong>Dự đoán động 2-bit (Bão hòa 4 trạng thái):</strong> Phải đoán sai <strong>2 lần liên tiếp</strong> ở trạng thái mạnh mới đổi hướng dự đoán $\\Rightarrow$ khắc phục lỗi sai kép của bộ 1-bit!</li>
        </ul>

        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 700 130" width="680" height="125" role="img" aria-label="Máy trạng thái Branch Predictor 2-bit 4 trạng thái">
            <rect x="20" y="38" width="136" height="54" rx="24" class="svg-box" />
            <text x="88" y="61" text-anchor="middle" class="svg-title">00 (SNT)</text>
            <text x="88" y="79" text-anchor="middle" class="svg-sub">Đoán Không nhảy</text>

            <rect x="194" y="38" width="136" height="54" rx="24" class="svg-box-accent" />
            <text x="262" y="61" text-anchor="middle" class="svg-title">01 (WNT)</text>
            <text x="262" y="79" text-anchor="middle" class="svg-sub">Đoán Không nhảy</text>

            <rect x="368" y="38" width="136" height="54" rx="24" class="svg-box-accent" />
            <text x="436" y="61" text-anchor="middle" class="svg-title">10 (WT)</text>
            <text x="436" y="79" text-anchor="middle" class="svg-sub">Đoán Nhảy (T)</text>

            <rect x="542" y="38" width="136" height="54" rx="24" class="svg-box-primary" />
            <text x="610" y="61" text-anchor="middle" class="svg-title-primary">11 (ST)</text>
            <text x="610" y="79" text-anchor="middle" class="svg-sub">Đoán Nhảy (T)</text>

            <line x1="156" y1="54" x2="194" y2="54" class="svg-line" /><text x="175" y="48" text-anchor="middle" class="svg-sub">T</text>
            <line x1="194" y1="76" x2="156" y2="76" class="svg-line" /><text x="175" y="92" text-anchor="middle" class="svg-sub">NT</text>

            <line x1="330" y1="54" x2="368" y2="54" class="svg-line" /><text x="349" y="48" text-anchor="middle" class="svg-sub">T</text>
            <line x1="368" y1="76" x2="330" y2="76" class="svg-line" /><text x="349" y="92" text-anchor="middle" class="svg-sub">NT</text>

            <line x1="504" y1="54" x2="542" y2="54" class="svg-line" /><text x="523" y="48" text-anchor="middle" class="svg-sub">T</text>
            <line x1="542" y1="76" x2="504" y2="76" class="svg-line" /><text x="523" y="92" text-anchor="middle" class="svg-sub">NT</text>
          </svg>
          <figcaption>Hình 5.4 – Bộ đếm bão hòa 2-bit (Saturating Counter): T tăng (+1, tối đa 11), NT giảm (-1, tối thiểu 00)</figcaption>
        </figure>

        <h4>2. Đa chu kỳ (Multicycle) &amp; Song song mức lệnh (ILP)</h4>
        <ul>
          <li><strong>CPU Đa chu kỳ:</strong> Dùng chung 1 bộ nhớ và 1 ALU qua các chu kỳ khác nhau (lệnh nhanh tốn ít chu kỳ hơn: Branch 3, R-type/Store 4, Load 5 chu kỳ).</li>
          <li><strong>Superscalar (Siêu vô hướng):</strong> Phát hành nhiều lệnh cùng lúc trong 1 chu kỳ ($\\text{CPI} < 1$, $\\text{IPC} > 1$).</li>
        </ul>

        <div class="formula-practice-inline" data-group-link="5.4">
          <span>📝 <strong>Nhóm 5.4: Dự đoán rẽ nhánh &amp; Đa chu kỳ / Nâng cao (<span class="group-q-count">3 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('5.4', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('5.4', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },

    // ==================== CHƯƠNG 6 ====================
    {
      id: "6.1.1",
      chapter: 6,
      code: "6.1.1",
      title: "Phân cấp bộ nhớ, Nguyên lý cục bộ, SRAM/DRAM & Mở rộng chip RAM",
      pdfPage: null,
      printedPage: null,
      linkedGroups: ["6.1"],
      summary: "Kim tự tháp phân cấp bộ nhớ, Temporal & Spatial Locality, SRAM vs DRAM vs ROM/Flash, thiết kế ghép nối mở rộng chip RAM và Bộ nhớ đan xen (Interleaved Memory).",
      content: `
        <h4>1. Phân cấp bộ nhớ &amp; Nguyên lý Cục bộ (Principle of Locality)</h4>
        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 185" width="660" height="180" role="img" aria-label="Kim tự tháp Phân cấp bộ nhớ">
            <polygon points="340,12 270,46 410,46" class="svg-box-primary" />
            <text x="340" y="38" text-anchor="middle" class="svg-title-primary">Thanh ghi</text>

            <polygon points="264,50 416,50 450,84 230,84" class="svg-box-accent" />
            <text x="340" y="72" text-anchor="middle" class="svg-title">Cache (L1 / L2 / L3 — SRAM)</text>

            <polygon points="224,88 456,88 494,124 186,124" class="svg-box" />
            <text x="340" y="111" text-anchor="middle" class="svg-title">Bộ nhớ chính (RAM — DRAM)</text>

            <polygon points="180,128 500,128 544,168 136,168" class="svg-box" />
            <text x="340" y="153" text-anchor="middle" class="svg-title">Bộ nhớ ngoài (SSD / HDD / Quang)</text>

            <text x="72" y="45" text-anchor="middle" class="svg-title">Nhanh nhất</text>
            <text x="72" y="64" text-anchor="middle" class="svg-sub">Đắt / Nhỏ</text>
            <line x1="72" y1="74" x2="72" y2="148" class="svg-line" />
            <text x="72" y="165" text-anchor="middle" class="svg-sub">Chậm / Lớn</text>

            <text x="608" y="45" text-anchor="middle" class="svg-title">CPU gần nhất</text>
            <text x="608" y="153" text-anchor="middle" class="svg-sub">Dung lượng lớn nhất</text>
          </svg>
          <figcaption>Hình 6.1 – Kim tự tháp phân cấp bộ nhớ: dung lượng tăng dần từ Thanh ghi → Cache L1/L2/L3 → RAM → Bộ nhớ ngoài</figcaption>
        </figure>

        <ul>
          <li><strong>Temporal Locality (Cục bộ thời gian):</strong> Ô nhớ vừa truy cập sớm được truy cập lại (biến đếm vòng lặp, thân vòng lặp).</li>
          <li><strong>Spatial Locality (Cục bộ không gian):</strong> Các ô nhớ lân cận về địa chỉ liền kề sớm được truy cập (duyệt mảng tuần tự <code>A[0], A[1], A[2]...</code>).</li>
          <li><strong>SRAM (Static RAM — Cache):</strong> 6 transistor / Flip-Flop $\\rightarrow$ siêu nhanh, <strong>không cần làm tươi</strong>, giá cao.</li>
          <li><strong>DRAM (Dynamic RAM — RAM chính):</strong> 1 tụ điện + 1 transistor $\\rightarrow$ rẻ, mật độ cao, <strong>bắt buộc phải làm tươi (Refresh)</strong>.</li>
          <li><strong>Ghép mở rộng chip RAM:</strong> Cần thiết kế mô-đun $M \\times N$ từ IC $m \\times n$: số chip mở rộng độ dài từ $= N/n$, số hàng mở rộng dung lượng $= M/m$, tổng số IC $= \\frac{M \\times N}{m \\times n}$.</li>
        </ul>

        <div class="formula-practice-inline" data-group-link="6.1">
          <span>📝 <strong>Nhóm 6.1: Phân cấp bộ nhớ, SRAM/DRAM &amp; Chip RAM (<span class="group-q-count">16 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('6.1', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('6.1', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "6.1.2",
      chapter: 6,
      code: "6.1.2",
      title: "Bộ nhớ đệm (Cache): 3 cơ chế ánh xạ & Tách bit địa chỉ",
      pdfPage: null,
      printedPage: null,
      linkedGroups: ["6.2"],
      summary: "Direct-Mapped, K-way Set-Associative, Fully-Associative, bộ công thức tách Tag/Index/Offset và tính tổng kích thước phần cứng Cache.",
      content: `
        <h4>1. Cấu trúc tách bit Địa chỉ $A$-bit cho Bộ nhớ đệm Cache</h4>
        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 110" width="660" height="105" role="img" aria-label="Tách 3 trường địa chỉ Tag Index Offset của Cache">
            <rect x="20" y="24" width="260" height="52" rx="6" class="svg-box-primary" />
            <text x="150" y="47" text-anchor="middle" class="svg-title-primary">TAG</text>
            <text x="150" y="65" text-anchor="middle" class="svg-sub">A - Index - Offset bits</text>

            <rect x="284" y="24" width="196" height="52" rx="6" class="svg-box-accent" />
            <text x="382" y="47" text-anchor="middle" class="svg-title">INDEX (Line / Set)</text>
            <text x="382" y="65" text-anchor="middle" class="svg-sub">log2(N_set) bits (= 0 nếu Fully)</text>

            <rect x="484" y="24" width="176" height="52" rx="6" class="svg-box" />
            <text x="572" y="47" text-anchor="middle" class="svg-title">BYTE OFFSET</text>
            <text x="572" y="65" text-anchor="middle" class="svg-sub">log2(BlockSize B) bits</text>

            <text x="340" y="98" text-anchor="middle" class="svg-sub">Tổng chiều rộng địa chỉ vật lý = A bit (MSB bên trái → LSB bên phải)</text>
          </svg>
          <figcaption>Hình 6.2 – Khuôn dạng tách địa chỉ Cache thành 3 trường: Tag | Index | Byte Offset</figcaption>
        </figure>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Bộ công thức chuẩn giải mọi bài tập Ánh xạ &amp; Kích thước Cache</div>
          <p>Cho địa chỉ rộng $A$ bit, dung lượng dữ liệu Cache $C$ bytes, kích thước Block/Line $B$ bytes, độ liên kết $K$-way:</p>
          <ul>
            <li><strong>Số Line:</strong> $N_{\\text{line}} = \\dfrac{C}{B}$ &nbsp;;&nbsp; <strong>Số Set:</strong> $N_{\\text{set}} = \\dfrac{N_{\\text{line}}}{K}$.
              <ul>
                <li><em>Direct-Mapped ($K = 1$):</em> $N_{\\text{set}} = N_{\\text{line}}$.</li>
                <li><em>$K$-way Set-Associative:</em> $N_{\\text{set}} = N_{\\text{line}} / K$ (tăng $K$ gấp đôi $\\Rightarrow$ <code>Index</code> giảm 1 bit, <code>Tag</code> tăng 1 bit).</li>
                <li><em>Fully-Associative ($N_{\\text{set}} = 1$):</em> <strong>0 bit Index</strong> $\\Rightarrow \\text{Tag} = A - \\text{Offset}$.</li>
              </ul>
            </li>
            <li><strong>Tách 3 trường:</strong> $\\text{Offset} = \\log_2(B)$ ; $\\text{Index} = \\log_2(N_{\\text{set}})$ ; $\\text{Tag} = A - \\text{Index} - \\text{Offset}$.</li>
            <li><strong>Tổng số bit phần cứng Cache:</strong>
              $$\\text{Total Bits} = N_{\\text{line}} \\times \\bigl(1_{\\text{Valid}} + \\text{Dirty}_{[0\\text{ hoặc }1]} + \\text{Tag} + 8 \\times B\\bigr)$$
              <em>(Write-Through: 0 bit Dirty; Write-Back: +1 bit Dirty mỗi line).</em>
            </li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="6.2">
          <span>📝 <strong>Nhóm 6.2: Ánh xạ Cache, Tách bit &amp; Kích thước phần cứng (<span class="group-q-count">18 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('6.2', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('6.2', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "6.1.3",
      chapter: 6,
      code: "6.1.3",
      title: "Chính sách ghi, Thay thế, Lỗi 3C & Hiệu năng Cache (AMAT / CPI)",
      pdfPage: null,
      printedPage: null,
      linkedGroups: ["6.3"],
      summary: "Write-Through vs Write-Back, LRU/FIFO/LFU/Random, 3C Misses (Compulsory/Capacity/Conflict), Miss Rate duyệt mảng và AMAT / CPI thực tế.",
      content: `
        <h4>1. Chính sách Ghi, Thay thế &amp; Phân loại 3C Misses</h4>
        <ul>
          <li><strong>Write-Through:</strong> Ghi đồng thời vào cả Cache và RAM (đơn giản, luôn nhất quán, cần 0 bit Dirty nhưng tốn băng thông RAM).</li>
          <li><strong>Write-Back:</strong> Chỉ ghi vào Cache và bật bit <code>Dirty = 1</code>; chỉ ghi ngược xuống RAM khi block bị đẩy ra (nhanh, tiết kiệm bus).</li>
          <li><strong>Chính sách thay thế:</strong> <strong>LRU</strong> (Least Recently Used — phổ biến nhất), <strong>FIFO</strong> (First-In First-Out), <strong>LFU</strong>, <strong>Random</strong>.</li>
          <li><strong>Phân loại lỗi 3C:</strong> <em>Compulsory</em> (lần đầu truy cập khối), <em>Capacity</em> (Cache quá nhỏ không chứa hết tập dữ liệu làm việc), <em>Conflict</em> (tranh chấp cùng Set/Line dù Cache còn chỗ — bằng 0 ở Fully-Associative).</li>
        </ul>

        <div class="callout callout-formula">
          <div class="callout-title">📐 Công thức AMAT &amp; CPI thực tế khi có Cache Miss</div>
          <ul>
            <li><strong>AMAT (Average Memory Access Time):</strong> $\\text{AMAT} = T_{\\text{hit}} + \\text{MissRate} \\times \\text{MissPenalty}$.</li>
            <li><strong>Cache 2 mức (L1 + L2):</strong> $\\text{AMAT} = T_{\\text{hit,L1}} + \\text{MR}_{\\text{L1}} \\times \\bigl(T_{\\text{hit,L2}} + \\text{MR}_{\\text{L2}} \\times \\text{Penalty}_{\\text{L2}}\\bigr)$.</li>
            <li><strong>CPI thực tế:</strong> $\\text{CPI}_{\\text{thực}} = \\text{CPI}_{\\text{base}} + (\\text{I-MR} \\times \\text{Penalty}) + (f_{\\text{Load/Store}} \\times \\text{D-MR} \\times \\text{Penalty})$.</li>
          </ul>
        </div>

        <div class="formula-practice-inline" data-group-link="6.3">
          <span>📝 <strong>Nhóm 6.3: Chính sách ghi, 3C &amp; Hiệu năng AMAT/CPI (<span class="group-q-count">8 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('6.3', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('6.3', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "6.1.4",
      chapter: 6,
      code: "6.1.4",
      title: "Bộ nhớ ảo (Paging, TLB) & Bộ nhớ ngoài (HDD, SSD, RAID)",
      pdfPage: null,
      printedPage: null,
      linkedGroups: ["6.4"],
      summary: "Dịch địa chỉ ảo VPN → PPN + Page Offset, Page Table, TLB, Page Fault, thời gian truy cập HDD, so sánh SSD vs HDD và dung lượng/chịu lỗi RAID 0, 1, 5, 6.",
      content: `
        <h4>1. Dịch địa chỉ Bộ nhớ ảo (Virtual Memory — Paging &amp; TLB)</h4>
        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 700 135" width="680" height="130" role="img" aria-label="Sơ đồ dịch địa chỉ ảo qua TLB và Page Table">
            <rect x="16" y="34" width="120" height="54" rx="6" class="svg-box-accent" />
            <text x="76" y="57" text-anchor="middle" class="svg-title">VPN</text>
            <text x="76" y="75" text-anchor="middle" class="svg-sub">Virtual Page Num</text>

            <rect x="136" y="34" width="102" height="54" rx="6" class="svg-box" />
            <text x="187" y="57" text-anchor="middle" class="svg-title">Offset</text>
            <text x="187" y="75" text-anchor="middle" class="svg-sub">log2(PageSize)</text>

            <rect x="278" y="14" width="154" height="44" rx="6" class="svg-box-primary" />
            <text x="355" y="33" text-anchor="middle" class="svg-title-primary">TLB (Cache nhanh)</text>
            <text x="355" y="49" text-anchor="middle" class="svg-sub">Hit → lấy PPN ngay</text>

            <rect x="278" y="72" width="154" height="44" rx="6" class="svg-box" />
            <text x="355" y="91" text-anchor="middle" class="svg-title">Page Table (RAM)</text>
            <text x="355" y="107" text-anchor="middle" class="svg-sub">TLB Miss → tra bảng</text>

            <rect x="476" y="34" width="106" height="54" rx="6" class="svg-box-primary" />
            <text x="529" y="57" text-anchor="middle" class="svg-title-primary">PPN</text>
            <text x="529" y="75" text-anchor="middle" class="svg-sub">Physical Frame</text>

            <rect x="582" y="34" width="102" height="54" rx="6" class="svg-box" />
            <text x="633" y="57" text-anchor="middle" class="svg-title">Offset</text>
            <text x="633" y="75" text-anchor="middle" class="svg-sub">Giữ nguyên</text>

            <line x1="238" y1="61" x2="278" y2="36" class="svg-line" />
            <line x1="238" y1="61" x2="278" y2="94" class="svg-line" />
            <line x1="432" y1="36" x2="476" y2="61" class="svg-line" />
            <line x1="432" y1="94" x2="476" y2="61" class="svg-line" />
          </svg>
          <figcaption>Hình 6.3 – Dịch địa chỉ ảo [VPN | Offset] sang địa chỉ vật lý [PPN | Offset] qua TLB / Page Table</figcaption>
        </figure>

        <h4>2. Bộ nhớ ngoài (Slide 6.4): HDD, SSD &amp; Hệ thống mảng đĩa RAID</h4>
        <ul>
          <li><strong>Thời gian truy cập ổ đĩa từ HDD:</strong> $T_{\\text{access}} = T_{\\text{seek}} + T_{\\text{rot\\_avg}} + T_{\\text{transfer}}$, với $T_{\\text{rot\\_avg}} = \\dfrac{1}{2} \\times \\dfrac{60\\text{ s}}{\\text{RPM}}$.</li>
          <li><strong>SSD vs HDD:</strong> SSD nhanh, êm, chống sốc, tiết kiệm điện hơn nhưng <strong>giá/GB cao hơn</strong> và có giới hạn chu kỳ ghi/xóa (P/E cycles).</li>
          <li><strong>RAID ($N$ ổ đĩa, mỗi ổ dung lượng $D$):</strong> <strong>RAID 0</strong> $= N \\cdot D$ (0 lỗi); <strong>RAID 1</strong> $= (N/2) \\cdot D$ (tối thiểu 2 ổ); <strong>RAID 5</strong> $= (N-1) \\cdot D$ (chịu 1 ổ hỏng, tối thiểu 3 ổ); <strong>RAID 6</strong> $= (N-2) \\cdot D$ (chịu 2 ổ hỏng, tối thiểu 4 ổ).</li>
        </ul>

        <div class="formula-practice-inline" data-group-link="6.4">
          <span>📝 <strong>Nhóm 6.4: Bộ nhớ ảo (Virtual Memory), Paging &amp; TLB (<span class="group-q-count">6 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('6.4', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('6.4', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },

    // ==================== CHƯƠNG 7 ====================
    {
      id: "7.1.1",
      chapter: 7,
      code: "7.1.1",
      title: "Tổng quan Hệ thống Vào-Ra, Mô-đun Vào-Ra & Định địa chỉ I/O",
      pdfPage: null,
      printedPage: null,
      linkedGroups: ["7.1"],
      summary: "Chức năng & cấu trúc Mô-đun Vào-Ra, so sánh Memory-Mapped I/O (RISC-V) và Isolated/Port-Mapped I/O, công thức tính số cổng & dải địa chỉ Hexa.",
      content: `
        <h4>1. Mô-đun Vào-Ra &amp; Hai phương pháp định địa chỉ cổng I/O</h4>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr><th>Tiêu chí</th><th>Memory-Mapped I/O (MMIO — RISC-V)</th><th>Isolated / Port-Mapped I/O</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Không gian địa chỉ</strong></td><td>Dùng chung không gian địa chỉ với RAM</td><td>Tách riêng không gian địa chỉ I/O độc lập</td></tr>
              <tr><td><strong>Tập lệnh sử dụng</strong></td><td>Dùng lệnh đọc/ghi bộ nhớ chuẩn (<code>lw, sw, lb, sb</code>)</td><td>Cần lệnh chuyên biệt (<code>IN, OUT</code>) và tín hiệu <code>IOR/IOW</code></td></tr>
              <tr><td><strong>Ưu / Nhược điểm</strong></td><td>Lập trình linh hoạt, nhưng chiếm một phần không gian RAM</td><td>Không chiếm địa chỉ RAM, nhưng tập lệnh hạn chế hơn</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Công thức tính số cổng:</strong> Dùng $k$ bit đánh địa chỉ cổng $\\Rightarrow$ quản lý tối đa $2^k$ cổng (ví dụ $k = 16 \\Rightarrow 65\\,536$ cổng từ <code>0x0000</code> đến <code>0xFFFF</code>).</p>

        <div class="formula-practice-inline" data-group-link="7.1">
          <span>📝 <strong>Nhóm 7.1: Tổng quan Vào-Ra &amp; Định địa chỉ MMIO/Isolated (<span class="group-q-count">3 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('7.1', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('7.1', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "7.1.2",
      chapter: 7,
      code: "7.1.2",
      title: "Ba phương pháp điều khiển Vào-Ra: Polling, Ngắt (PIC/CSRs) & DMA",
      pdfPage: null,
      printedPage: null,
      linkedGroups: ["7.2"],
      summary: "So sánh Programmed I/O (Polling), Interrupt-driven I/O (PIC, CSRs) và DMA (DMAC, BRQ/BGT, Burst / Cycle Stealing / Transparent DMA).",
      content: `
        <h4>1. Tiến trình phát triển 3 phương pháp điều khiển Vào-Ra</h4>
        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 700 130" width="680" height="125" role="img" aria-label="So sánh 3 cơ chế điều khiển Vào-Ra Polling Interrupt DMA">
            <rect x="16" y="20" width="204" height="88" rx="8" class="svg-box" />
            <text x="118" y="45" text-anchor="middle" class="svg-title">1. Programmed I/O</text>
            <text x="118" y="65" text-anchor="middle" class="svg-sub">CPU hỏi vòng (Polling)</text>
            <text x="118" y="84" text-anchor="middle" class="svg-sub">Lãng phí CPU nhiều nhất</text>

            <rect x="248" y="20" width="204" height="88" rx="8" class="svg-box-accent" />
            <text x="350" y="45" text-anchor="middle" class="svg-title">2. Interrupt-Driven I/O</text>
            <text x="350" y="65" text-anchor="middle" class="svg-sub">I/O gửi INTR → CPU chạy ISR</text>
            <text x="350" y="84" text-anchor="middle" class="svg-sub">Vẫn chuyển từng byte qua CPU</text>

            <rect x="480" y="20" width="204" height="88" rx="8" class="svg-box-primary" />
            <text x="582" y="45" text-anchor="middle" class="svg-title-primary">3. DMA (DMAC)</text>
            <text x="582" y="65" text-anchor="middle" class="svg-sub">Truyền khối trực tiếp I/O ↔ RAM</text>
            <text x="582" y="84" text-anchor="middle" class="svg-sub">Tối ưu nhất (BRQ / BGT)</text>

            <line x1="220" y1="64" x2="248" y2="64" class="svg-line" />
            <line x1="452" y1="64" x2="480" y2="64" class="svg-line" />
          </svg>
          <figcaption>Hình 7.1 – Hiệu năng CPU tăng dần: Programmed I/O (Polling) → Interrupt-Driven I/O → DMA</figcaption>
        </figure>

        <ul>
          <li><strong>Chế độ truyền DMA:</strong> <em>Burst Mode</em> (chiếm bus truyền trọn khối), <em>Cycle Stealing</em> (xen kẽ từng chu kỳ bus với CPU), <em>Transparent DMA</em> (chỉ dùng bus khi CPU rỗi — khó thiết kế nhất).</li>
          <li><strong>Thanh ghi CSRs xử lý ngắt RISC-V:</strong> <code>mtvec/utvec</code> (địa chỉ ISR), <code>mepc/uepc</code> (lưu PC trở về), <code>mcause/ucause</code> (nguyên nhân ngắt), <code>mstatus/ustatus</code> (bật/tắt ngắt toàn cục), <code>mie/uie</code> (cho phép từng nguồn ngắt).</li>
        </ul>

        <div class="formula-practice-inline" data-group-link="7.2">
          <span>📝 <strong>Nhóm 7.2: Polling, Ngắt (PIC) &amp; DMA/DMAC (<span class="group-q-count">10 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('7.2', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('7.2', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    },
    {
      id: "7.1.3",
      chapter: 7,
      code: "7.1.3",
      title: "Thực hành MMIO RISC-V trên RARS (LED 7 thanh, Bàn phím & Ngắt)",
      pdfPage: null,
      printedPage: null,
      linkedGroups: ["7.3"],
      summary: "Bản đồ địa chỉ MMIO RARS (0xFFFF0000–0xFFFF0011), sơ đồ 8 bit LED 7 thanh (dp g f e d c b a) và vòng lặp Polling Keyboard/Display.",
      content: `
        <h4>1. Sơ đồ 8 bit LED 7 thanh &amp; Bản đồ địa chỉ MMIO RARS</h4>
        <figure class="theory-svg-diagram">
          <svg viewBox="0 0 680 175" width="660" height="170" role="img" aria-label="Sơ đồ LED 7 thanh 8 bit và địa chỉ MMIO RARS">
            <!-- 7-segment display -->
            <rect x="65" y="20" width="70" height="10" rx="4" class="svg-box-primary" /><text x="100" y="14" text-anchor="middle" class="svg-sub">a (bit 0)</text>
            <rect x="137" y="30" width="10" height="52" rx="4" class="svg-box-primary" /><text x="168" y="60" text-anchor="middle" class="svg-sub">b (b1)</text>
            <rect x="137" y="92" width="10" height="52" rx="4" class="svg-box-primary" /><text x="168" y="122" text-anchor="middle" class="svg-sub">c (b2)</text>
            <rect x="65" y="146" width="70" height="10" rx="4" class="svg-box-primary" /><text x="100" y="170" text-anchor="middle" class="svg-sub">d (bit 3)</text>
            <rect x="53" y="92" width="10" height="52" rx="4" class="svg-box-accent" /><text x="30" y="122" text-anchor="middle" class="svg-sub">e (b4)</text>
            <rect x="53" y="30" width="10" height="52" rx="4" class="svg-box-accent" /><text x="30" y="60" text-anchor="middle" class="svg-sub">f (b5)</text>
            <rect x="65" y="82" width="70" height="10" rx="4" class="svg-box-accent" /><text x="100" y="76" text-anchor="middle" class="svg-sub">g (bit 6)</text>
            <circle cx="162" cy="150" r="6" class="svg-box" /><text x="195" y="154" text-anchor="middle" class="svg-sub">dp (b7)</text>

            <!-- MMIO Map -->
            <rect x="240" y="16" width="420" height="142" rx="8" class="svg-box" />
            <text x="450" y="38" text-anchor="middle" class="svg-title">Bản đồ địa chỉ MMIO chuẩn trong RARS</text>
            <text x="256" y="62" class="svg-sub">• 0xFFFF0000 : Receiver Control (bit 0 = Ready, bit 1 = IE)</text>
            <text x="256" y="82" class="svg-sub">• 0xFFFF0004 : Receiver Data (mã ASCII phím vừa nhấn)</text>
            <text x="256" y="102" class="svg-sub">• 0xFFFF0008 : Transmitter Control (bit 0 = Ready)</text>
            <text x="256" y="122" class="svg-sub">• 0xFFFF000C : Transmitter Data (ghi ký tự ra màn hình)</text>
            <text x="256" y="142" class="svg-title">• 0xFFFF0011 (LED TRÁI)  |  0xFFFF0010 (LED PHẢI)</text>
          </svg>
          <figcaption>Hình 7.2 – Quy ước 8 bit (dp,g,f,e,d,c,b,a) của LED 7 thanh và Bản đồ thanh ghi MMIO RARS</figcaption>
        </figure>

        <p><strong>Bảng mã Hexa LED 7 thanh nhanh:</strong> <code>0=0x3F</code>, <code>1=0x06</code>, <code>2=0x5B</code>, <code>3=0x4F</code>, <code>4=0x66</code>, <code>5=0x6D</code>, <code>6=0x7D</code>, <code>7=0x07</code>, <code>8=0x7F</code>, <code>9=0x6F</code>.</p>

        <div class="formula-practice-inline" data-group-link="7.3">
          <span>📝 <strong>Nhóm 7.3: Lập trình MMIO RISC-V (RARS, LED 7 thanh, Bàn phím) (<span class="group-q-count">9 câu</span>)</strong></span>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('7.3', 'exam')">⏱️ Test</button>
            <button class="btn btn-primary btn-xs" onclick="window.KTMT_APP && window.KTMT_APP.startGroupTest('7.3', 'practice')">🎯 Luyện tập</button>
          </div>
        </div>
      `
    }
  ];

  extraTheory.forEach(function (sec) {
    if (!root.KTMT_THEORY.some(function (x) { return x.id === sec.id; })) {
      root.KTMT_THEORY.push(sec);
    }
  });

  // 3. Bổ sung 3 thẻ Cheatsheet Công thức Chương 5, 6, 7
  var extraCheatsheet = [
    {
      chapter: 5,
      title: "Chương 5 — Datapath, Pipeline & Hazards",
      items: [
        "Đơn chu kỳ: $T_{\\text{single}} = \\sum T_i$ ; Pipeline $k$ tầng: $T_{\\text{pipe}} = \\max(T_i) + T_{\\text{reg}}$",
        "Tổng số chu kỳ Pipeline: $\\text{Cycles} = k + (n - 1) + S$ ; $t_{\\text{exec}} = \\text{Cycles} \\times T_{\\text{pipe}}$",
        "Load-Use Hazard (có Forwarding): bắt buộc $+1$ stall khi <code>lw</code> đứng ngay trước lệnh đọc đích",
        "7 tín hiệu Control (<code>ALUSrc/MemtoReg/RegWrite/MemRead/MemWrite/Branch/ALUOp</code>): R-type <code>0/0/1/0/0/0/10</code>, lw <code>1/1/1/1/0/0/00</code>, sw <code>1/X/0/0/1/0/00</code>, beq <code>0/X/0/0/0/1/01</code>",
        "Branch Predictor 2-bit: <code>00(SNT) ↔ 01(WNT) ↔ 10(WT) ↔ 11(ST)</code> (sai 2 lần liên tiếp ở trạng thái mạnh mới đổi hướng)"
      ]
    },
    {
      chapter: 6,
      title: "Chương 6 — Cache, Bộ nhớ ảo & HDD/RAID",
      items: [
        "Cache ($A$-bit addr, dung lượng $C$, block $B$, $K$-way): $N_{\\text{line}} = C/B$, $N_{\\text{set}} = N_{\\text{line}}/K$",
        "Tách bit: $\\text{Offset} = \\log_2(B)$, $\\text{Index} = \\log_2(N_{\\text{set}})$ (Fully $= 0$), $\\text{Tag} = A - \\text{Index} - \\text{Offset}$",
        "Tổng bit phần cứng Cache: $N_{\\text{line}} \\times (1_{\\text{Valid}} + \\text{Dirty}_{[0/1]} + \\text{Tag} + 8B)$",
        "AMAT: $T_{\\text{hit}} + \\text{MR} \\times \\text{Penalty}$ ; Paging: $\\text{Offset} = \\log_2(P)$, $\\text{VPN} = V - \\text{Offset}$, $\\text{PPN} = P_{\\text{addr}} - \\text{Offset}$",
        "HDD: $T_{\\text{rot\\_avg}} = \\frac{1}{2} \\times \\frac{60}{\\text{RPM}}$ ; RAID ($N$ ổ $\\times D$): R0=$ND$, R1=$\\frac{N}{2}D$, R5=$(N-1)D$, R6=$(N-2)D$"
      ]
    },
    {
      chapter: 7,
      title: "Chương 7 — Hệ thống Vào-Ra & MMIO RARS",
      items: [
        "Số cổng I/O $k$-bit: $2^k$ cổng (16-bit $\\rightarrow 65\\,536$ cổng <code>0x0000–0xFFFF</code>)",
        "Hiệu năng I/O tăng dần: <strong>Polling → Interrupt (PIC) → DMA (Burst / Cycle Stealing / Transparent)</strong>",
        "MMIO RARS: <code>0xFFFF0000</code> (Rx Ctrl), <code>0xFFFF0004</code> (Rx Data), <code>0xFFFF0008</code> (Tx Ctrl), <code>0xFFFF000C</code> (Tx Data)",
        "LED 7 thanh RARS: <code>0xFFFF0011</code> (TRÁI), <code>0xFFFF0010</code> (PHẢI); bit 0..7 = <code>a,b,c,d,e,f,g,dp</code>",
        "Mã LED chuẩn: <code>0=0x3F, 1=0x06, 2=0x5B, 3=0x4F, 4=0x66, 5=0x6D, 6=0x7D, 7=0x07, 8=0x7F, 9=0x6F</code>"
      ]
    }
  ];

  extraCheatsheet.forEach(function (card) {
    if (!root.KTMT_CHEATSHEET.some(function (x) { return x.chapter === card.chapter; })) {
      root.KTMT_CHEATSHEET.push(card);
    }
  });

  // 4. Bổ sung Phương pháp giải 11 dạng bài Chương 5, 6, 7 vào Cheatsheet
  var extraMethods = [
    {
      chapter: 5,
      title: "Chương 5 — Bộ xử lý (4 dạng bài trọng tâm)",
      methods: [
        {
          id: "5.1",
          name: "Nhóm 5.1: Đường dữ liệu (Datapath) & Tín hiệu điều khiển",
          recognize: "Xác định 7 tín hiệu điều khiển, đầu vào/ra các khối Datapath RV32I hoặc phân tích lỗi dây đứt (Stuck-at 0/1).",
          formulas: "R-type: <code>ALUSrc=0, RegWrite=1, ALUOp=10</code> | Load: <code>ALUSrc=1, MemtoReg=1, MemRead=1, RegWrite=1</code> | Store: <code>ALUSrc=1, MemWrite=1, RegWrite=0</code>",
          steps: "<ol><li>Xác định loại lệnh (R, I-ALU, Load, Store, Branch) và các trường <code>rs1, rs2, rd, imm</code>.</li><li>Tra bảng 7 tín hiệu; với bài dây đứt, kiểm tra lệnh nào cần tín hiệu bị kẹt đó.</li></ol>",
          trap: "<code>Imm Gen</code> và bộ cộng <code>PC+4</code> hoạt động ở mọi chu kỳ; <code>MemtoReg</code> là Don't care (X) với Store và Branch."
        },
        {
          id: "5.2",
          name: "Nhóm 5.2: Hiệu năng Đường ống lệnh (Pipeline)",
          recognize: "Cho độ trễ 5 công đoạn IF/ID/EX/MEM/WB, tính chu kỳ xung nhịp, tổng thời gian thực thi $n$ lệnh hoặc Speedup.",
          formulas: "$T_{\\text{pipe}} = \\max(T_i) + T_{\\text{reg}}$ ; $\\text{Cycles} = k + (n - 1) + S$ ; $t_{\\text{exec}} = \\text{Cycles} \\times T_{\\text{pipe}}$",
          steps: "<ol><li>Tìm công đoạn chậm nhất lấy $T_{\\text{pipe}}$.</li><li>Thay số lệnh $n$, số tầng $k=5$ và số stall $S$ vào công thức.</li></ol>",
          trap: "Đừng quên cộng thêm $T_{\\text{reg}}$ (độ trễ thanh ghi đệm pipeline) nếu đề bài có cho!"
        },
        {
          id: "5.3",
          name: "Nhóm 5.3: Hazards, Forwarding & Load-Use Stall",
          recognize: "Đoạn mã RISC-V chạy trên Pipeline có/không có Forwarding & Hazard Detection; đếm stall/nop hoặc tìm giá trị thanh ghi cuối.",
          formulas: "Có Forwarding: chỉ <code>lw → dùng ngay</code> tốn $+1$ stall. Không Forwarding (WB nửa đầu / ID nửa sau): cách 1 dòng $\\rightarrow 2$ nop, cách 2 dòng $\\rightarrow 1$ nop.",
          steps: "<ol><li>Khoanh tròn mọi cặp phụ thuộc RAW (thanh ghi đích <code>rd</code> của lệnh trước trùng <code>rs1/rs2</code> lệnh sau).</li><li>Kiểm tra khoảng cách dòng và quy ước Forwarding/WB-ID của đề.</li></ol>",
          trap: "Nếu đề ghi <em>không có Forwarding và không có Hazard Detection</em>, lệnh sau sẽ đọc <strong>giá trị cũ (thường là 0)</strong> trong thanh ghi!"
        },
        {
          id: "5.4",
          name: "Nhóm 5.4: Dự đoán rẽ nhánh (Branch Prediction) & Đa chu kỳ",
          recognize: "Chuỗi kết quả nhánh T/NT cho bộ dự đoán 1-bit hoặc 2-bit bão hòa, tính tỉ lệ đoán đúng.",
          formulas: "2-bit: <code>00(SNT) ↔ 01(WNT) ↔ 10(WT) ↔ 11(ST)</code>. Gặp T tăng 1 (max 11), gặp NT giảm 1 (min 00).",
          steps: "<ol><li>Ghi trạng thái hiện tại → suy ra dự đoán (0x = NT, 1x = T).</li><li>So với thực tế để đếm Đúng/Sai rồi cập nhật trạng thái mới.</li></ol>",
          trap: "Trạng thái <code>01</code> vẫn đoán NT và <code>10</code> vẫn đoán T; đọc kỹ trạng thái khởi tạo đề cho."
        }
      ]
    },
    {
      chapter: 6,
      title: "Chương 6 — Bộ nhớ máy tính (4 dạng bài trọng tâm)",
      methods: [
        {
          id: "6.1",
          name: "Nhóm 6.1: Phân cấp bộ nhớ, SRAM/DRAM & Mở rộng chip RAM",
          recognize: "So sánh SRAM/DRAM/ROM/Flash, tính số IC mở rộng RAM $M \\times N$ từ IC $m \\times n$, Interleaved Memory, HDD/SSD.",
          formulas: "Tổng số IC $= \\frac{M}{m} \\times \\frac{N}{n}$ ; Địa chỉ chip $= \\log_2(m)$ bit + $\\log_2(M/m)$ bit chọn hàng (Decoder).",
          steps: "<ol><li>Đổi dung lượng về lũy thừa của 2.</li><li>Tính số IC theo chiều ngang ($N/n$) và chiều dọc ($M/m$).</li></ol>",
          trap: "DRAM cần làm tươi (Refresh), SRAM không cần; bộ nhớ chính chứa chương trình đang chạy."
        },
        {
          id: "6.2",
          name: "Nhóm 6.2: Ánh xạ Cache, Tách bit & Tổng bit phần cứng",
          recognize: "Cho địa chỉ $A$-bit, Cache $C$, Block $B$, $K$-way; tìm Tag/Index/Offset hoặc tổng số bit lưu trữ của Cache.",
          formulas: "$\\text{Offset} = \\log_2(B)$ ; $\\text{Index} = \\log_2(C/(B \\cdot K))$ ; $\\text{Tag} = A - \\text{Index} - \\text{Offset}$",
          steps: "<ol><li>Tính $N_{\\text{line}} = C/B$ và $N_{\\text{set}} = N_{\\text{line}}/K$.</li><li>Tính Offset, Index, Tag rồi nhân $N_{\\text{line}} \\times (1 + \\text{Dirty} + \\text{Tag} + 8B)$.</li></ol>",
          trap: "Write-Back có thêm 1 bit Dirty mỗi line; Fully-Associative luôn có <code>Index = 0</code> bit."
        },
        {
          id: "6.3",
          name: "Nhóm 6.3: Chính sách ghi, 3C Misses & AMAT / CPI",
          recognize: "Tính AMAT, CPI thực tế có Cache Miss, tỉ lệ Miss khi duyệt mảng hoặc phân loại 3C.",
          formulas: "$\\text{AMAT} = T_{\\text{hit}} + \\text{MR} \\times \\text{Penalty}$ ; Miss Rate duyệt mảng tuần tự $= \\frac{\\text{sizeof(elem)}}{B}$",
          steps: "<ol><li>Xác định số phần tử trên 1 Block $= B / \\text{sizeof(elem)}$.</li><li>Áp dụng công thức AMAT hoặc cộng thêm chu kỳ phạt I-Cache & D-Cache vào $\\text{CPI}_{\\text{base}}$.</li></ol>",
          trap: "Đừng quên nhân <strong>tỉ lệ lệnh Load/Store</strong> vào thành phần D-Cache Miss khi tính $\\text{CPI}_{\\text{thực}}$!"
        },
        {
          id: "6.4",
          name: "Nhóm 6.4: Bộ nhớ ảo (Paging, Page Table, TLB)",
          recognize: "Cho kích thước trang $P$, địa chỉ ảo $V$-bit và vật lý $P_{\\text{addr}}$-bit; tìm VPN, PPN, kích thước Page Table.",
          formulas: "$\\text{Page Offset} = \\log_2(P)$ ; Số mục Page Table $= 2^{\\text{VPN}}$ ; Kích thước $= 2^{\\text{VPN}} \\times \\text{EntrySize}$",
          steps: "<ol><li>Tính số bit Offset từ kích thước trang $P$.</li><li>Lấy số bit địa chỉ trừ Offset ra VPN và PPN.</li></ol>",
          trap: "Page Offset trong địa chỉ ảo và địa chỉ vật lý luôn giống hệt nhau; TLB lưu các cặp VPN→PPN hay dùng."
        }
      ]
    },
    {
      chapter: 7,
      title: "Chương 7 — Hệ thống Vào-Ra (3 dạng bài trọng tâm)",
      methods: [
        {
          id: "7.1",
          name: "Nhóm 7.1: Mô-đun I/O & Định địa chỉ MMIO / Isolated",
          recognize: "Phân biệt MMIO vs Isolated I/O, tính số cổng I/O tối đa và dải địa chỉ Hexa từ số bit địa chỉ.",
          formulas: "Số cổng $= 2^k$ ; số chữ số Hexa $= k / 4$.",
          steps: "<ol><li>Tính $2^k$ để ra tổng số cổng.</li><li>Chuyển từ <code>0x00...0</code> đến <code>0xFF...F</code> ($k/4$ ký tự).</li></ol>",
          trap: "RISC-V dùng <strong>Memory-Mapped I/O</strong> (không có lệnh IN/OUT riêng)."
        },
        {
          id: "7.2",
          name: "Nhóm 7.2: Điều khiển Vào-Ra (Polling, Ngắt, DMA)",
          recognize: "So sánh vai trò CPU trong 3 phương pháp I/O, nhận diện 3 chế độ DMA và vai trò PIC / DMAC.",
          formulas: "Polling (CPU chờ vòng) → Interrupt (CPU chạy ISR) → DMA (DMAC mượn bus truyền khối trực tiếp).",
          steps: "<ol><li>Xác định thành phần trực tiếp điều khiển truyền dữ liệu (CPU hay DMAC).</li><li>Phân biệt Burst (chiếm trọn khối), Cycle Stealing (xen kẽ từng chu kỳ), Transparent (khi CPU rỗi).</li></ol>",
          trap: "Trong vào-ra bằng ngắt, CPU không phải hỏi vòng nhưng <strong>vẫn trực tiếp chuyển từng byte/word</strong> qua thanh ghi CPU."
        },
        {
          id: "7.3",
          name: "Nhóm 7.3: Lập trình MMIO RISC-V (RARS, LED 7 thanh, Bàn phím)",
          recognize: "Đoạn mã RISC-V truy cập <code>0xFFFF0000..0xFFFF0011</code>, mã LED 7 thanh, vòng lặp Polling hoặc thanh ghi CSRs.",
          formulas: "LED TRÁI = <code>0xFFFF0011</code>, LED PHẢI = <code>0xFFFF0010</code>; thứ tự bit 7→0: <code>dp g f e d c b a</code>.",
          steps: "<ol><li>Xác định các thanh <code>a..g</code> cần bật cho chữ số yêu cầu → viết chuỗi 8 bit từ <code>dp</code> đến <code>a</code>.</li><li>Đổi 2 nhóm 4 bit sang Hexa rồi dùng <code>sb</code> ghi ra đúng địa chỉ LED trái/phải.</li></ol>",
          trap: "Bit 0 là thanh <code>a</code> (trên cùng), bit 6 là thanh <code>g</code> (giữa), bit 7 là dấu chấm <code>dp</code> — hay nhầm ngược thứ tự!"
        }
      ]
    }
  ];

  extraMethods.forEach(function (m) {
    if (!root.KTMT_PROBLEM_METHODS_CHEATSHEET.some(function (x) { return x.chapter === m.chapter; })) {
      root.KTMT_PROBLEM_METHODS_CHEATSHEET.push(m);
    }
  });
})(typeof window !== 'undefined' ? window : globalThis);
