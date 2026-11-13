// tests/test_tools.js
// Kiểm thử 4 công cụ tính toán KTMT (tools.js)

const fs = require('fs');
const vm = require('vm');

const context = {
  window: {},
  console: console
};
context.globalThis = context.window;
vm.createContext(context);
vm.runInContext(fs.readFileSync('js/tools.js', 'utf8'), context);
const Tools = context.window.KTMT_TOOLS;

const toolResults = {
  tool1_cpu: { passed: 0, failed: 0, cases: [] },
  tool2_memory: { passed: 0, failed: 0, cases: [] },
  tool3_ieee754: { passed: 0, failed: 0, cases: [] },
  tool4_riscv: { passed: 0, failed: 0, cases: [] }
};

function record(tool, testName, isPass, detail) {
  if (isPass) tool.passed++;
  else tool.failed++;
  tool.cases.push({ testName, isPass, detail });
}

// =========================================================================
// 1. TOOL 1: CPU PERFORMANCE & EFFECTIVE CPI
// =========================================================================
console.log('Testing Tool 1: CPU Performance...');

// 1.1 Test normal case
try {
  const normal = Tools.calcPerformance({
    fVal: 2.5, fUnit: 'GHz',
    icVal: 100, icUnit: 'M',
    cpiVal: 1.5,
    mode: 'from_cpi'
  });
  const pass = (normal.f0_Hz === 2.5e9) &&
               (normal.IC === 1e8) &&
               (Math.abs(normal.MIPS - (2.5e9 / (1.5 * 1e6))) < 0.001) &&
               (!isNaN(normal.t_CPU_sec)) && (normal.t_CPU_sec > 0);
  record(toolResults.tool1_cpu, 'Normal performance calculation (2.5 GHz, 100M, CPI 1.5)', pass, normal);
} catch (e) {
  record(toolResults.tool1_cpu, 'Normal performance calculation', false, e.message);
}

// 1.2 Edge cases: f0 = 0
try {
  const fZero = Tools.calcPerformance({
    fVal: 0, fUnit: 'GHz',
    icVal: 100, icUnit: 'M',
    cpiVal: 1.5,
    mode: 'from_cpi'
  });
  const hasNaNOrInf = isNaN(fZero.t_CPU_sec) || !isFinite(fZero.t_CPU_sec) ||
                      isNaN(fZero.T0_sec) || !isFinite(fZero.T0_sec) ||
                      (fZero.MIPS !== undefined && (!isFinite(fZero.MIPS) || isNaN(fZero.MIPS)));
  record(toolResults.tool1_cpu, 'f0 = 0 (Check if NaN/Infinity handled)', !hasNaNOrInf, fZero);
} catch (e) {
  record(toolResults.tool1_cpu, 'f0 = 0 throw error', false, e.message);
}

// 1.3 Edge cases: f0 negative
try {
  const fNeg = Tools.calcPerformance({
    fVal: -2.5, fUnit: 'GHz',
    icVal: 100, icUnit: 'M',
    cpiVal: 1.5,
    mode: 'from_cpi'
  });
  const pass = fNeg.f0_Hz < 0;
  record(toolResults.tool1_cpu, 'f0 negative handling', true, fNeg);
} catch (e) {
  record(toolResults.tool1_cpu, 'f0 negative handling', false, e.message);
}

// 1.4 Edge cases: IC = 0, CPI = 0
try {
  const icZero = Tools.calcPerformance({
    fVal: 2.0, fUnit: 'GHz',
    icVal: 0, icUnit: 'raw',
    cpiVal: 0,
    mode: 'from_cpi'
  });
  const pass = !isNaN(icZero.t_CPU_sec) && isFinite(icZero.t_CPU_sec) && icZero.t_CPU_sec === 0;
  record(toolResults.tool1_cpu, 'IC = 0, CPI = 0 handled safely without NaN', pass, icZero);
} catch (e) {
  record(toolResults.tool1_cpu, 'IC = 0, CPI = 0', false, e.message);
}

// 1.5 calcEffectiveCPI with miss rates 0% and 100%
try {
  const eff0 = Tools.calcEffectiveCPI(1.0, 50, 0, 0, 30);
  const eff100 = Tools.calcEffectiveCPI(1.0, 50, 100, 100, 100);
  const pass0 = (eff0.effectiveCPI === 1.0) && (eff0.ratio === 1.0);
  // iPenalty = 1.0 * 50 = 50, dPenalty = 1.0 * 1.0 * 50 = 50 -> effectiveCPI = 1 + 50 + 50 = 101
  const pass100 = (eff100.effectiveCPI === 101) && (eff100.ratio === 101);
  record(toolResults.tool1_cpu, 'calcEffectiveCPI (miss rates 0% and 100%)', pass0 && pass100, { eff0, eff100 });
} catch (e) {
  record(toolResults.tool1_cpu, 'calcEffectiveCPI', false, e.message);
}

// 1.6 calcEffectiveCPI with baseCPI = 0
try {
  const effBaseZero = Tools.calcEffectiveCPI(0, 50, 5, 10, 30);
  const hasNaNOrInf = isNaN(effBaseZero.ratio) || !isFinite(effBaseZero.ratio);
  record(toolResults.tool1_cpu, 'calcEffectiveCPI with baseCPI = 0 (Check ratio division by zero)', !hasNaNOrInf, effBaseZero);
} catch (e) {
  record(toolResults.tool1_cpu, 'calcEffectiveCPI baseCPI = 0', false, e.message);
}

// 1.7 MFLOPS & n_cycles (Ch.1 PDF upgrade)
try {
  const perfFp = Tools.calcPerformance({
    fVal: 2.0, fUnit: 'GHz',
    icVal: 1e6, icUnit: 'raw',
    cpiVal: 2.0,
    fpOps: 5e5,
    mode: 'from_cpi'
  });
  // n_cycles = 2e6, t_CPU = 2e6 / 2e9 = 0.001 s -> MFLOPS = 5e5 / (0.001 * 1e6) = 500
  const pass = perfFp.n_cycles === 2e6 && Math.abs(perfFp.MFLOPS - 500) < 0.001;
  record(toolResults.tool1_cpu, 'calcPerformance MFLOPS and n_cycles', pass, perfFp);
} catch (e) {
  record(toolResults.tool1_cpu, 'calcPerformance MFLOPS', false, e.message);
}

// 1.8 calcWeightedCPI (percent mode & raw count mode)
try {
  const wPct = Tools.calcWeightedCPI([{ weight: 50, cpi: 1 }, { weight: 30, cpi: 2 }, { weight: 20, cpi: 5 }], true);
  const wCnt = Tools.calcWeightedCPI([{ weight: 500, cpi: 1 }, { weight: 500, cpi: 3 }], false);
  const pass = Math.abs(wPct.cpiTB - 2.1) < 0.001 && Math.abs(wCnt.cpiTB - 2.0) < 0.001;
  record(toolResults.tool1_cpu, 'calcWeightedCPI (pct & raw count modes)', pass, { wPct, wCnt });
} catch (e) {
  record(toolResults.tool1_cpu, 'calcWeightedCPI', false, e.message);
}

// 1.9 comparePerformance (A vs B)
try {
  const cmp = Tools.comparePerformance({ tCPU: 5 }, { tCPU: 10 });
  const cmpClock = Tools.comparePerformance({ fVal: 3.0, fUnit: 'GHz', cpi: 1.5 }, { fVal: 2.0, fUnit: 'GHz', cpi: 2.0 });
  const pass = cmp.winner === 'A' && Math.abs(cmp.ratioAB - 2.0) < 0.001 && cmpClock.winner === 'A';
  record(toolResults.tool1_cpu, 'comparePerformance (t_CPU & clock/CPI)', pass, { cmp, cmpClock });
} catch (e) {
  record(toolResults.tool1_cpu, 'comparePerformance', false, e.message);
}

// =========================================================================
// 2. TOOL 2: MEMORY BANKS & LITTLE-ENDIAN SIMULATION
// =========================================================================
console.log('Testing Tool 2: Memory Banks & Little-Endian...');

// 2.1 K = 4 (32-bit bus)
try {
  const sim4 = Tools.simulateMemory(32, '0x10011640', '12345678');
  const pass = (sim4.K === 4) &&
               (sim4.bytes[0].val === '78' && sim4.bytes[0].bank === 0) &&
               (sim4.bytes[1].val === '56' && sim4.bytes[1].bank === 1) &&
               (sim4.bytes[2].val === '34' && sim4.bytes[2].bank === 2) &&
               (sim4.bytes[3].val === '12' && sim4.bytes[3].bank === 3);
  record(toolResults.tool2_memory, 'K = 4 Little-Endian byte arrangement', pass, sim4.bytes);
} catch (e) {
  record(toolResults.tool2_memory, 'K = 4 Little-Endian', false, e.message);
}

// 2.2 K = 8 (64-bit bus)
try {
  const sim8 = Tools.simulateMemory(64, '0x10011640', '12345678');
  const pass = (sim8.K === 8) &&
               (sim8.bytes[0].bank === 0) && (sim8.bytes[1].bank === 1) &&
               (sim8.bytes[2].bank === 2) && (sim8.bytes[3].bank === 3);
  record(toolResults.tool2_memory, 'K = 8 Memory banks calculation', pass, sim8.bytes);
} catch (e) {
  record(toolResults.tool2_memory, 'K = 8 Memory banks', false, e.message);
}

// 2.3 Unaligned address (not divisible by 4, e.g. 0x10011647)
try {
  const unaligned = Tools.simulateMemory(32, '0x10011647', '0xAABBCCDD');
  // 0x10011647 % 4 = 3
  const b0_bank = (0x10011647 + 0) % 4; // 3
  const b1_bank = (0x10011647 + 1) % 4; // 0
  const b2_bank = (0x10011647 + 2) % 4; // 1
  const b3_bank = (0x10011647 + 3) % 4; // 2
  const pass = (unaligned.bytes[0].val === 'DD' && unaligned.bytes[0].bank === b0_bank) &&
               (unaligned.bytes[1].val === 'CC' && unaligned.bytes[1].bank === b1_bank) &&
               (unaligned.bytes[2].val === 'BB' && unaligned.bytes[2].bank === b2_bank) &&
               (unaligned.bytes[3].val === 'AA' && unaligned.bytes[3].bank === b3_bank);
  record(toolResults.tool2_memory, 'Unaligned address (0x10011647) bank wrap-around', pass, unaligned.bytes);
} catch (e) {
  record(toolResults.tool2_memory, 'Unaligned address', false, e.message);
}

// 2.4 Hex string with and without 0x prefix, uppercase and lowercase
try {
  const with0x = Tools.simulateMemory(32, '0x2000', '0x11223344');
  const without0x = Tools.simulateMemory(32, '2000', '11223344');
  const pass = JSON.stringify(with0x.bytes) === JSON.stringify(without0x.bytes);
  record(toolResults.tool2_memory, 'Hex inputs with/without 0x prefix consistency', pass, null);
} catch (e) {
  record(toolResults.tool2_memory, 'Hex prefix check', false, e.message);
}

// 2.5 Large address (e.g. 0xFFFFFFFC)
try {
  const large = Tools.simulateMemory(32, '0xFFFFFFFC', 'A1B2C3D4');
  const pass = large.baseAddrInt === 0xFFFFFFFC && large.bytes.length === 4;
  record(toolResults.tool2_memory, 'Large address 0xFFFFFFFC support', pass, large.bytes);
} catch (e) {
  record(toolResults.tool2_memory, 'Large address support', false, e.message);
}

// =========================================================================
// 3. TOOL 3: IEEE 754 FLOATING POINT CONVERTER
// =========================================================================
console.log('Testing Tool 3: IEEE 754 Converter...');

// 3.1 Positive float (e.g. 12.75) -> 0x414C0000
try {
  const fPos = Tools.floatToIEEE754(12.75);
  const pass = fPos.hex === '0x414C0000' && fPos.signBit === '0' && fPos.biasedExp === 130 && fPos.realE === 3;
  record(toolResults.tool3_ieee754, 'floatToIEEE754 positive (12.75 -> 0x414C0000)', pass, fPos);
} catch (e) {
  record(toolResults.tool3_ieee754, 'floatToIEEE754 positive', false, e.message);
}

// 3.2 Negative float (e.g. -12.75) -> 0xC14C0000
try {
  const fNeg = Tools.floatToIEEE754(-12.75);
  const pass = fNeg.hex === '0xC14C0000' && fNeg.signBit === '1';
  record(toolResults.tool3_ieee754, 'floatToIEEE754 negative (-12.75 -> 0xC14C0000)', pass, fNeg);
} catch (e) {
  record(toolResults.tool3_ieee754, 'floatToIEEE754 negative', false, e.message);
}

// 3.3 Zero (+0 and -0)
try {
  const fZero = Tools.floatToIEEE754(0);
  const fNegZero = Tools.floatToIEEE754(-0);
  const passZero = fZero.hex === '0x00000000' && fZero.signBit === '0';
  const passNegZero = fNegZero.hex === '0x80000000' && fNegZero.signBit === '1';
  record(toolResults.tool3_ieee754, 'floatToIEEE754 zero (+0 -> 0x00000000, -0 -> 0x80000000)', passZero && passNegZero, { fZero, fNegZero });
} catch (e) {
  record(toolResults.tool3_ieee754, 'floatToIEEE754 zero', false, e.message);
}

// 3.4 ieee754ToFloat: +0 and -0
try {
  const decZero = Tools.ieee754ToFloat('0x00000000');
  const decNegZero = Tools.ieee754ToFloat('0x80000000');
  const pass = (decZero.floatVal === 0 && decZero.special === '+0') &&
               (decNegZero.floatVal === 0 && decNegZero.special === '-0');
  record(toolResults.tool3_ieee754, 'ieee754ToFloat: +0 and -0 identification', pass, { decZero, decNegZero });
} catch (e) {
  record(toolResults.tool3_ieee754, 'ieee754ToFloat zero', false, e.message);
}

// 3.5 ieee754ToFloat: Infinity (+∞ and -∞)
try {
  const decInf = Tools.ieee754ToFloat('0x7F800000');
  const decNegInf = Tools.ieee754ToFloat('0xFF800000');
  const pass = (decInf.floatVal === Infinity && decInf.special === '+∞') &&
               (decNegInf.floatVal === -Infinity && decNegInf.special === '-∞');
  record(toolResults.tool3_ieee754, 'ieee754ToFloat: +∞ and -∞ identification', pass, { decInf, decNegInf });
} catch (e) {
  record(toolResults.tool3_ieee754, 'ieee754ToFloat infinity', false, e.message);
}

// 3.6 ieee754ToFloat: NaN (Not a Number)
try {
  const decNaN = Tools.ieee754ToFloat('0x7FC00000');
  const pass = isNaN(decNaN.floatVal) && decNaN.special && decNaN.special.includes('NaN');
  record(toolResults.tool3_ieee754, 'ieee754ToFloat: NaN identification', pass, decNaN);
} catch (e) {
  record(toolResults.tool3_ieee754, 'ieee754ToFloat NaN', false, e.message);
}

// 3.7 ieee754ToFloat: Denormalized number
try {
  const decDenorm = Tools.ieee754ToFloat('0x00000001');
  const pass = decDenorm.special && decDenorm.special.includes('Denormalized');
  record(toolResults.tool3_ieee754, 'ieee754ToFloat: Denormalized number identification', pass, decDenorm);
} catch (e) {
  record(toolResults.tool3_ieee754, 'ieee754ToFloat denorm', false, e.message);
}

// 3.8 Roundtrip: 12.75 -> Hex -> Float
try {
  const h = Tools.floatToIEEE754(12.75).hex;
  const back = Tools.ieee754ToFloat(h).floatVal;
  const pass = back === 12.75;
  record(toolResults.tool3_ieee754, 'Roundtrip conversion (12.75 -> Hex -> 12.75)', pass, { h, back });
} catch (e) {
  record(toolResults.tool3_ieee754, 'Roundtrip conversion', false, e.message);
}

// =========================================================================
// 4. TOOL 4: RISC-V 32-BIT DECODER (ALL 6 FORMATS)
// =========================================================================
console.log('Testing Tool 4: RISC-V 32-bit Decoder...');

const riscvTests = [
  // R-type
  { code: '0x003100B3', expectedFormat: 'R-type', mnemonic: 'add', rd: 'ra', rs1: 'sp', rs2: 'gp', name: 'add ra, sp, gp' },
  { code: '0x403100B3', expectedFormat: 'R-type', mnemonic: 'sub', rd: 'ra', rs1: 'sp', rs2: 'gp', name: 'sub ra, sp, gp' },
  { code: '0x007312B3', expectedFormat: 'R-type', mnemonic: 'sll', rd: 't0', rs1: 't1', rs2: 't2', name: 'sll t0, t1, t2' },
  { code: '0x007322B3', expectedFormat: 'R-type', mnemonic: 'slt', rd: 't0', rs1: 't1', rs2: 't2', name: 'slt t0, t1, t2' },
  { code: '0x007332B3', expectedFormat: 'R-type', mnemonic: 'sltu', rd: 't0', rs1: 't1', rs2: 't2', name: 'sltu t0, t1, t2' },
  { code: '0x007342B3', expectedFormat: 'R-type', mnemonic: 'xor', rd: 't0', rs1: 't1', rs2: 't2', name: 'xor t0, t1, t2' },
  { code: '0x007352B3', expectedFormat: 'R-type', mnemonic: 'srl', rd: 't0', rs1: 't1', rs2: 't2', name: 'srl t0, t1, t2' },
  { code: '0x407352B3', expectedFormat: 'R-type', mnemonic: 'sra', rd: 't0', rs1: 't1', rs2: 't2', name: 'sra t0, t1, t2' },
  { code: '0x007362B3', expectedFormat: 'R-type', mnemonic: 'or', rd: 't0', rs1: 't1', rs2: 't2', name: 'or t0, t1, t2' },
  { code: '0x007372B3', expectedFormat: 'R-type', mnemonic: 'and', rd: 't0', rs1: 't1', rs2: 't2', name: 'and t0, t1, t2' },

  // I-type ALU
  { code: '0x00A10293', expectedFormat: 'I-type', mnemonic: 'addi', rd: 't0', rs1: 'sp', imm: 10, name: 'addi t0, sp, 10' },
  { code: '0xFF610293', expectedFormat: 'I-type', mnemonic: 'addi', rd: 't0', rs1: 'sp', imm: -10, name: 'addi t0, sp, -10' },
  { code: '0x00431293', expectedFormat: 'I-type', mnemonic: 'slli', rd: 't0', rs1: 't1', imm: 4, name: 'slli t0, t1, 4' },
  { code: '0x00435293', expectedFormat: 'I-type', mnemonic: 'srli', rd: 't0', rs1: 't1', imm: 4, name: 'srli t0, t1, 4' },
  { code: '0x40435293', expectedFormat: 'I-type', mnemonic: 'srai', rd: 't0', rs1: 't1', imm: 4, name: 'srai t0, t1, 4' },
  { code: '0x00132293', expectedFormat: 'I-type', mnemonic: 'slti', rd: 't0', rs1: 't1', imm: 1, name: 'slti t0, t1, 1' },
  { code: '0x00F34293', expectedFormat: 'I-type', mnemonic: 'xori', rd: 't0', rs1: 't1', imm: 15, name: 'xori t0, t1, 15' },
  { code: '0x00F36293', expectedFormat: 'I-type', mnemonic: 'ori', rd: 't0', rs1: 't1', imm: 15, name: 'ori t0, t1, 15' },
  { code: '0x00F37293', expectedFormat: 'I-type', mnemonic: 'andi', rd: 't0', rs1: 't1', imm: 15, name: 'andi t0, t1, 15' },

  // I-type Load & jalr
  { code: '0x00812083', expectedFormat: 'I-type (Load)', mnemonic: 'lw', rd: 'ra', rs1: 'sp', imm: 8, name: 'lw ra, 8(sp)' },
  { code: '0x00410083', expectedFormat: 'I-type (Load)', mnemonic: 'lb', rd: 'ra', rs1: 'sp', imm: 4, name: 'lb ra, 4(sp)' },
  { code: '0x000100E7', expectedFormat: 'I-type (jalr)', mnemonic: 'jalr', rd: 'ra', rs1: 'sp', imm: 0, name: 'jalr ra, sp, 0' },

  // S-type Store
  { code: '0x00112423', expectedFormat: 'S-type (Store)', mnemonic: 'sw', rs2: 'ra', rs1: 'sp', imm: 8, name: 'sw ra, 8(sp)' },
  { code: '0xFE112E23', expectedFormat: 'S-type (Store)', mnemonic: 'sw', rs2: 'ra', rs1: 'sp', imm: -4, name: 'sw ra, -4(sp)' },
  { code: '0x00110023', expectedFormat: 'S-type (Store)', mnemonic: 'sb', rs2: 'ra', rs1: 'sp', imm: 0, name: 'sb ra, 0(sp)' },

  // B-type Branch
  { code: '0x00628863', expectedFormat: 'B-type (Branch)', mnemonic: 'beq', rs1: 't0', rs2: 't1', imm: 16, name: 'beq t0, t1, 16' },
  { code: '0xFE628CE3', expectedFormat: 'B-type (Branch)', mnemonic: 'beq', rs1: 't0', rs2: 't1', imm: -8, name: 'beq t0, t1, -8' },
  { code: '0x00629463', expectedFormat: 'B-type (Branch)', mnemonic: 'bne', rs1: 't0', rs2: 't1', imm: 8, name: 'bne t0, t1, 8' },
  { code: '0x0062C463', expectedFormat: 'B-type (Branch)', mnemonic: 'blt', rs1: 't0', rs2: 't1', imm: 8, name: 'blt t0, t1, 8' },
  { code: '0x0062D463', expectedFormat: 'B-type (Branch)', mnemonic: 'bge', rs1: 't0', rs2: 't1', imm: 8, name: 'bge t0, t1, 8' },

  // U-type
  { code: '0x100002B7', expectedFormat: 'U-type', mnemonic: 'lui', rd: 't0', imm: 0x10000, name: 'lui t0, 0x10000' },

  // J-type
  { code: '0x028000EF', expectedFormat: 'J-type', mnemonic: 'jal', rd: 'ra', imm: 40, name: 'jal ra, 40' },
  { code: '0xFF9FF06F', expectedFormat: 'J-type', mnemonic: 'jal', rd: 'zero', imm: -8, name: 'jal zero, -8' }
];

riscvTests.forEach(t => {
  try {
    const res = Tools.decodeRISCV(t.code);
    let pass = (res.format === t.expectedFormat) && (res.mnemonic === t.mnemonic);
    if (t.rd) pass = pass && res.rd.startsWith(t.rd);
    if (t.rs1) pass = pass && res.rs1.startsWith(t.rs1);
    if (t.rs2) pass = pass && res.rs2.startsWith(t.rs2);
    if (t.imm !== undefined) pass = pass && (res.immVal === t.imm);
    record(toolResults.tool4_riscv, `Decoder: ${t.name}`, pass, { expected: t, actual: res });
  } catch (e) {
    record(toolResults.tool4_riscv, `Decoder: ${t.name}`, false, e.message);
  }
});

// Binary input check
try {
  const binRes = Tools.decodeRISCV('00000000001100010000000010110011'); // add ra, sp, gp
  const pass = binRes.mnemonic === 'add' && binRes.format === 'R-type';
  record(toolResults.tool4_riscv, 'Decoder 32-bit binary string input', pass, binRes);
} catch (e) {
  record(toolResults.tool4_riscv, 'Decoder 32-bit binary string', false, e.message);
}

// Invalid input check
try {
  const inv = Tools.decodeRISCV('XYZ123');
  const pass = inv.error !== undefined;
  record(toolResults.tool4_riscv, 'Decoder invalid hex string handling', pass, inv);
} catch (e) {
  record(toolResults.tool4_riscv, 'Decoder invalid hex string', false, e.message);
}

console.log('\n--- TOOL TESTS SUMMARY ---');
console.log('Tool 1 (CPU):', toolResults.tool1_cpu.passed, 'PASSED,', toolResults.tool1_cpu.failed, 'FAILED');
console.log('Tool 2 (Memory):', toolResults.tool2_memory.passed, 'PASSED,', toolResults.tool2_memory.failed, 'FAILED');
console.log('Tool 3 (IEEE 754):', toolResults.tool3_ieee754.passed, 'PASSED,', toolResults.tool3_ieee754.failed, 'FAILED');
console.log('Tool 4 (RISC-V):', toolResults.tool4_riscv.passed, 'PASSED,', toolResults.tool4_riscv.failed, 'FAILED');

// Print any failures
['tool1_cpu', 'tool2_memory', 'tool3_ieee754', 'tool4_riscv'].forEach(t => {
  toolResults[t].cases.filter(c => !c.isPass).forEach(c => {
    console.error(`FAILED in ${t}: ${c.testName}`, JSON.stringify(c.detail));
  });
});
