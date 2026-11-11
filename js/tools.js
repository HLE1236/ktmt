// js/tools.js - 4 Bộ công cụ học tập tương tác KTMT

(function (root) {
  var Tools = {};

  // =========================================================================
  // 1. MÁY TÍNH HIỆU NĂNG CPU (CPU Performance Calculator)
  // =========================================================================
  Tools.calcPerformance = function (params) {
    // params: { fVal, fUnit, icVal, icUnit, cpiVal, mipsVal, mode }
    // fUnit: 'GHz' hoặc 'MHz'
    // icUnit: 'B' (tỷ), 'M' (triệu), 'raw' (số cụ thể)
    var f0_Hz = 0;
    if (params.fUnit === "GHz") f0_Hz = params.fVal * 1e9;
    else if (params.fUnit === "MHz") f0_Hz = params.fVal * 1e6;
    else f0_Hz = params.fVal;

    var IC = 0;
    if (params.icUnit === "B") IC = params.icVal * 1e9;
    else if (params.icUnit === "M") IC = params.icVal * 1e6;
    else IC = params.icVal;

    var CPI = params.cpiVal;
    var MIPS = params.mipsVal;

    if (params.mode === "from_cpi" || (!MIPS && CPI)) {
      if (f0_Hz && CPI) {
        MIPS = f0_Hz / (CPI * 1e6);
      }
    } else if (params.mode === "from_mips" || (!CPI && MIPS)) {
      if (f0_Hz && MIPS) {
        CPI = f0_Hz / (MIPS * 1e6);
      }
    }

    var T0_sec = f0_Hz > 0 ? 1 / f0_Hz : 0;
    var T0_ns = T0_sec * 1e9;
    var T0_ps = T0_sec * 1e12;

    var n_cycles = (IC > 0 && CPI > 0) ? IC * CPI : 0;
    var t_CPU_sec = (n_cycles > 0 && f0_Hz > 0) ? n_cycles / f0_Hz : 0;
    var t_CPU_ms = t_CPU_sec * 1000;

    return {
      f0_Hz: f0_Hz,
      T0_sec: T0_sec,
      T0_ns: T0_ns,
      T0_ps: T0_ps,
      IC: IC,
      CPI: CPI,
      MIPS: MIPS,
      n_cycles: n_cycles,
      t_CPU_sec: t_CPU_sec,
      t_CPU_ms: t_CPU_ms
    };
  };

  Tools.calcEffectiveCPI = function (baseCPI, missPenalty, iMissRatePercent, dMissRatePercent, memInstPercent) {
    var iPenalty = (iMissRatePercent / 100) * missPenalty;
    var dPenalty = (memInstPercent / 100) * (dMissRatePercent / 100) * missPenalty;
    var effectiveCPI = baseCPI + iPenalty + dPenalty;
    return {
      baseCPI: baseCPI,
      iPenalty: iPenalty,
      dPenalty: dPenalty,
      effectiveCPI: effectiveCPI,
      ratio: baseCPI > 0 ? (effectiveCPI / baseCPI) : 1
    };
  };

  // =========================================================================
  // 2. MÔ PHỎNG BỘ NHỚ LITTLE-ENDIAN & BĂNG NHỚ VẬT LÝ (Memory Banks)
  // =========================================================================
  Tools.simulateMemory = function (busWidthBits, startHexAddr, wordHexVal) {
    // busWidthBits: 32 hoặc 64
    // startHexAddr: chuỗi "0x10011647" hoặc số
    var K = busWidthBits === 64 ? 8 : 4;
    var addrInt = 0;
    if (typeof startHexAddr === 'number') {
      addrInt = startHexAddr;
    } else {
      addrInt = parseInt(String(startHexAddr || "0").replace(/^0x/i, ""), 16);
    }
    if (isNaN(addrInt)) addrInt = 0;

    var cleanHexVal = String(wordHexVal || "12345678").replace(/^0x/i, "").padStart(8, "0");
    if (cleanHexVal.length > 8) cleanHexVal = cleanHexVal.slice(-8);

    // Byte theo Little-Endian: Byte 0 (LSB) nằm ở addr + 0
    var b0 = cleanHexVal.slice(6, 8).toUpperCase();
    var b1 = cleanHexVal.slice(4, 6).toUpperCase();
    var b2 = cleanHexVal.slice(2, 4).toUpperCase();
    var b3 = cleanHexVal.slice(0, 2).toUpperCase();

    var bytesInfo = [
      { offset: 0, addr: addrInt + 0, hexAddr: "0x" + (addrInt + 0).toString(16).toUpperCase(), val: b0, bank: (addrInt + 0) % K },
      { offset: 1, addr: addrInt + 1, hexAddr: "0x" + (addrInt + 1).toString(16).toUpperCase(), val: b1, bank: (addrInt + 1) % K },
      { offset: 2, addr: addrInt + 2, hexAddr: "0x" + (addrInt + 2).toString(16).toUpperCase(), val: b2, bank: (addrInt + 2) % K },
      { offset: 3, addr: addrInt + 3, hexAddr: "0x" + (addrInt + 3).toString(16).toUpperCase(), val: b3, bank: (addrInt + 3) % K }
    ];

    var bankDistribution = {};
    for (var i = 0; i < K; i++) bankDistribution[i] = [];
    bytesInfo.forEach(function (b) {
      bankDistribution[b.bank].push(b);
    });

    return {
      K: K,
      baseAddrInt: addrInt,
      baseAddrHex: "0x" + addrInt.toString(16).toUpperCase(),
      bytes: bytesInfo,
      banks: bankDistribution
    };
  };

  // =========================================================================
  // 3. BỘ CHUYỂN ĐỔI SỐ HỌC & CHUẨN IEEE 754 32-BIT
  // =========================================================================
  Tools.convertInt = function (inputStr, bitWidth) {
    // bitWidth: 8, 12, 16, 32
    bitWidth = bitWidth || 32;
    var num = 0;
    inputStr = inputStr.trim();
    if (inputStr.startsWith("0x") || inputStr.startsWith("0X")) {
      num = parseInt(inputStr, 16);
      // Xử lý dấu nếu số bit cao nhất là 1
      var maxVal = Math.pow(2, bitWidth);
      if (num >= maxVal / 2) num = num - maxVal;
    } else if (inputStr.startsWith("0b") || inputStr.startsWith("0B")) {
      num = parseInt(inputStr.slice(2), 2);
      var maxVal = Math.pow(2, bitWidth);
      if (num >= maxVal / 2) num = num - maxVal;
    } else {
      num = parseInt(inputStr, 10);
    }

    if (isNaN(num)) return null;

    var minSigned = -Math.pow(2, bitWidth - 1);
    var maxSigned = Math.pow(2, bitWidth - 1) - 1;
    var isOverflow = num < minSigned || num > maxSigned;

    // Tính mã bù 2
    var mask = Math.pow(2, bitWidth) - 1;
    var unsignedVal = (num < 0 ? (Math.pow(2, bitWidth) + num) : num) & mask;
    var binStr = unsignedVal.toString(2).padStart(bitWidth, "0");
    var hexDigits = Math.ceil(bitWidth / 4);
    var hexStr = "0x" + unsignedVal.toString(16).toUpperCase().padStart(hexDigits, "0");

    return {
      bitWidth: bitWidth,
      decSigned: num,
      decUnsigned: unsignedVal,
      binStr: binStr,
      hexStr: hexStr,
      isOverflow: isOverflow,
      minSigned: minSigned,
      maxSigned: maxSigned
    };
  };

  // Đổi Float thập phân -> IEEE 754 32-bit
  Tools.floatToIEEE754 = function (floatVal) {
    var buffer = new ArrayBuffer(4);
    var floatView = new Float32Array(buffer);
    var uintView = new Uint32Array(buffer);

    floatView[0] = floatVal;
    var uintVal = uintView[0];
    var bin32 = uintVal.toString(2).padStart(32, "0");

    var signBit = bin32[0];
    var expBits = bin32.slice(1, 9);
    var fracBits = bin32.slice(9, 32);

    var expInt = parseInt(expBits, 2);
    var realE = expInt - 127;
    var hexVal = "0x" + uintVal.toString(16).toUpperCase().padStart(8, "0");

    return {
      value: floatVal,
      hex: hexVal,
      bin32: bin32,
      signBit: signBit,
      expBits: expBits,
      fracBits: fracBits,
      biasedExp: expInt,
      realE: realE
    };
  };

  // Đổi Hex 32-bit -> Float IEEE 754
  Tools.ieee754ToFloat = function (hexStr) {
    var clean = hexStr.replace(/^0x/i, "").padStart(8, "0");
    var uintVal = parseInt(clean, 16);
    if (isNaN(uintVal)) return null;

    var buffer = new ArrayBuffer(4);
    var uintView = new Uint32Array(buffer);
    var floatView = new Float32Array(buffer);

    uintView[0] = uintVal;
    var floatVal = floatView[0];
    var bin32 = uintVal.toString(2).padStart(32, "0");

    var signBit = bin32[0];
    var expBits = bin32.slice(1, 9);
    var fracBits = bin32.slice(9, 32);

    var expInt = parseInt(expBits, 2);
    var realE = expInt - 127;

    var special = null;
    if (expInt === 255) {
      if (parseInt(fracBits, 2) === 0) special = signBit === "0" ? "+∞" : "-∞";
      else special = "NaN (Not a Number)";
    } else if (expInt === 0) {
      if (parseInt(fracBits, 2) === 0) special = signBit === "0" ? "+0" : "-0";
      else special = "Denormalized (Số phi chuẩn)";
    }

    return {
      hex: "0x" + clean.toUpperCase(),
      floatVal: floatVal,
      bin32: bin32,
      signBit: signBit,
      expBits: expBits,
      fracBits: fracBits,
      biasedExp: expInt,
      realE: realE,
      special: special
    };
  };

  // =========================================================================
  // 4. BỘ DỊCH MÃ MÁY RISC-V 32-BIT ↔ HỢP NGỮ
  // =========================================================================
  Tools.decodeRISCV = function (hexOrBinStr) {
    if (!hexOrBinStr || typeof hexOrBinStr !== 'string') return { error: "Mã máy không hợp lệ!" };
    var raw = hexOrBinStr.trim();
    if (!raw) return { error: "Mã máy không hợp lệ!" };
    var uint32 = 0;
    if (raw.startsWith("0b") || raw.startsWith("0B") || (raw.length === 32 && /^[01]+$/.test(raw))) {
      var binDigits = raw.replace(/^0b/i, "");
      if (!/^[01]{1,32}$/.test(binDigits)) return { error: "Mã nhị phân không hợp lệ!" };
      uint32 = parseInt(binDigits, 2);
    } else {
      var hexOnly = raw.replace(/^0x/i, "");
      if (!/^[0-9a-fA-F]{1,8}$/.test(hexOnly)) return { error: "Mã máy không hợp lệ!" };
      var cleanHex = hexOnly.padStart(8, "0");
      uint32 = parseInt(cleanHex, 16);
    }

    if (isNaN(uint32)) return { error: "Mã máy không hợp lệ!" };

    var bin32 = (uint32 >>> 0).toString(2).padStart(32, "0");
    var opcode = bin32.slice(25, 32); // bit 6:0
    var rdNum = parseInt(bin32.slice(20, 25), 2); // bit 11:7
    var funct3 = bin32.slice(17, 20); // bit 14:12
    var rs1Num = parseInt(bin32.slice(12, 17), 2); // bit 19:15
    var rs2Num = parseInt(bin32.slice(7, 12), 2); // bit 24:20
    var funct7 = bin32.slice(0, 7); // bit 31:25

    var regNames = [
      "zero", "ra", "sp", "gp", "tp", "t0", "t1", "t2",
      "s0", "s1", "a0", "a1", "a2", "a3", "a4", "a5",
      "a6", "a7", "s2", "s3", "s4", "s5", "s6", "s7",
      "s8", "s9", "s10", "s11", "t3", "t4", "t5", "t6"
    ];

    var rdName = regNames[rdNum] || ("x" + rdNum);
    var rs1Name = regNames[rs1Num] || ("x" + rs1Num);
    var rs2Name = regNames[rs2Num] || ("x" + rs2Num);

    var format = "Unknown";
    var mnemonic = "unknown";
    var asmStr = "";
    var immVal = 0;

    // Phân loại theo Opcode
    if (opcode === "0110011") {
      // R-type
      format = "R-type";
      if (funct3 === "000") mnemonic = funct7 === "0000000" ? "add" : "sub";
      else if (funct3 === "001") mnemonic = "sll";
      else if (funct3 === "010") mnemonic = "slt";
      else if (funct3 === "011") mnemonic = "sltu";
      else if (funct3 === "100") mnemonic = "xor";
      else if (funct3 === "101") mnemonic = funct7 === "0000000" ? "srl" : "sra";
      else if (funct3 === "110") mnemonic = "or";
      else if (funct3 === "111") mnemonic = "and";
      asmStr = mnemonic + " " + rdName + ", " + rs1Name + ", " + rs2Name;
    } else if (opcode === "0010011") {
      // I-type (ALU)
      format = "I-type";
      var imm12Bin = bin32.slice(0, 12);
      immVal = parseInt(imm12Bin, 2);
      if (imm12Bin[0] === "1") immVal = immVal - 4096;

      if (funct3 === "000") mnemonic = "addi";
      else if (funct3 === "001") { mnemonic = "slli"; immVal = rs2Num; }
      else if (funct3 === "010") mnemonic = "slti";
      else if (funct3 === "011") mnemonic = "sltiu";
      else if (funct3 === "100") mnemonic = "xori";
      else if (funct3 === "101") { mnemonic = funct7 === "0000000" ? "srli" : "srai"; immVal = rs2Num; }
      else if (funct3 === "110") mnemonic = "ori";
      else if (funct3 === "111") mnemonic = "andi";

      asmStr = mnemonic + " " + rdName + ", " + rs1Name + ", " + immVal;
    } else if (opcode === "0000011") {
      // I-type (Load)
      format = "I-type (Load)";
      var imm12Bin = bin32.slice(0, 12);
      immVal = parseInt(imm12Bin, 2);
      if (imm12Bin[0] === "1") immVal = immVal - 4096;

      if (funct3 === "000") mnemonic = "lb";
      else if (funct3 === "001") mnemonic = "lh";
      else if (funct3 === "010") mnemonic = "lw";
      else if (funct3 === "100") mnemonic = "lbu";
      else if (funct3 === "101") mnemonic = "lhu";

      asmStr = mnemonic + " " + rdName + ", " + immVal + "(" + rs1Name + ")";
    } else if (opcode === "0100011") {
      // S-type (Store)
      format = "S-type (Store)";
      var immS = bin32.slice(0, 7) + bin32.slice(20, 25);
      immVal = parseInt(immS, 2);
      if (immS[0] === "1") immVal = immVal - 4096;

      if (funct3 === "000") mnemonic = "sb";
      else if (funct3 === "001") mnemonic = "sh";
      else if (funct3 === "010") mnemonic = "sw";

      asmStr = mnemonic + " " + rs2Name + ", " + immVal + "(" + rs1Name + ")";
    } else if (opcode === "1100011") {
      // B-type (Branch)
      format = "B-type (Branch)";
      // bit 31 (imm[12]), bit 7 (imm[11]), bit 30:25 (imm[10:5]), bit 11:8 (imm[4:1])
      var bImm = bin32[0] + bin32[24] + bin32.slice(1, 7) + bin32.slice(20, 24) + "0";
      immVal = parseInt(bImm, 2);
      if (bImm[0] === "1") immVal = immVal - 8192;

      if (funct3 === "000") mnemonic = "beq";
      else if (funct3 === "001") mnemonic = "bne";
      else if (funct3 === "100") mnemonic = "blt";
      else if (funct3 === "101") mnemonic = "bge";
      else if (funct3 === "110") mnemonic = "bltu";
      else if (funct3 === "111") mnemonic = "bgeu";

      asmStr = mnemonic + " " + rs1Name + ", " + rs2Name + ", " + immVal;
    } else if (opcode === "0110111") {
      // U-type (lui)
      format = "U-type";
      mnemonic = "lui";
      var immU = bin32.slice(0, 20);
      immVal = parseInt(immU, 2);
      asmStr = "lui " + rdName + ", 0x" + immVal.toString(16).toUpperCase();
    } else if (opcode === "1101111") {
      // J-type (jal)
      format = "J-type";
      mnemonic = "jal";
      // bit 31 (imm[20]), bit 19:12 (imm[19:12]), bit 20 (imm[11]), bit 30:21 (imm[10:1])
      var jImm = bin32[0] + bin32.slice(12, 20) + bin32[11] + bin32.slice(1, 11) + "0";
      immVal = parseInt(jImm, 2);
      if (jImm[0] === "1") immVal = immVal - 2097152;
      asmStr = "jal " + rdName + ", " + immVal;
    } else if (opcode === "1100111") {
      format = "I-type (jalr)";
      mnemonic = "jalr";
      var imm12Bin = bin32.slice(0, 12);
      immVal = parseInt(imm12Bin, 2);
      if (imm12Bin[0] === "1") immVal = immVal - 4096;
      asmStr = "jalr " + rdName + ", " + rs1Name + ", " + immVal;
    }

    return {
      hex: "0x" + (uint32 >>> 0).toString(16).toUpperCase().padStart(8, "0"),
      bin32: bin32,
      opcode: opcode,
      format: format,
      mnemonic: mnemonic,
      rd: rdName + " (x" + rdNum + ")",
      rs1: rs1Name + " (x" + rs1Num + ")",
      rs2: rs2Name + " (x" + rs2Num + ")",
      funct3: funct3,
      funct7: funct7,
      immVal: immVal,
      asmStr: asmStr
    };
  };

  root.KTMT_TOOLS = Tools;
})(typeof window !== "undefined" ? window : globalThis);
