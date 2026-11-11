---
name: ktmt-quiz
description: HUST Computer Architecture Exam & Practice Platform Design System
colors:
  primary: "#1d4ed8"
  primary-hover: "#1e40af"
  primary-light: "#eff6ff"
  primary-border: "#bfdbfe"
  text-primary: "#0f172a"
  text-secondary: "#334155"
  text-muted: "#475569"
  bg-body: "#f8fafc"
  bg-surface: "#ffffff"
  bg-muted: "#f1f5f9"
  border: "#cbd5e1"
  border-subtle: "#e2e8f0"
  success: "#047857"
  success-light: "#ecfdf5"
  success-border: "#a7f3d0"
  error: "#b91c1c"
  error-light: "#fef2f2"
  error-border: "#fecaca"
  warning: "#b45309"
  warning-light: "#fffbeb"
  warning-border: "#fde68a"
  accent-indigo: "#4338ca"
  accent-indigo-light: "#eef2ff"
typography:
  display:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  headline:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  code:
    fontFamily: 'ui-monospace, "SF Mono", "Cascadia Code", "Consolas", monospace'
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "8px 18px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "8px 18px"
---

# Design System

## Overview

Hệ thống thiết kế của ứng dụng Ôn thi Kiến trúc Máy tính (KTMT) tuân thủ nghiêm ngặt các nguyên tắc thiết kế chuyên nghiệp của **Impeccable**:
- Loại bỏ hoàn toàn các anti-pattern giao diện (không gradient chữ, không viền thẻ bên 4px thô ráp, không bảng màu AI tím/cyan nhạt nhẽo).
- Ưu tiên tính công thái học và khả năng tiếp cận (Accessibility): Tất cả màu văn bản đều đạt độ tương phản chuẩn WCAG AA ($\ge 4.5:1$ cho văn bản thường, $\ge 3:1$ cho tiêu đề lớn).
- Phông chữ hệ thống sắc nét với `font-variant-numeric: tabular-nums` cho đồng hồ, điểm số, bộ đếm câu hỏi và mã hex trong mô phỏng kiến trúc vi xử lý.

## Colors

### Bảng màu Ánh sáng (Light Mode)
- **Primary / Brand**: `#1d4ed8` (Royal Blue) • Hover: `#1e40af` (Deep Blue). Tỷ lệ tương phản trên nền trắng: **5.9:1** (Đạt chuẩn WCAG AA).
- **Backgrounds**: Nền trang `#f8fafc` (Slate 50), Nền thẻ `#ffffff`, Khối đệm `#f1f5f9` (Slate 100).
- **Text & Neutral**:
  - Text chính: `#0f172a` (Slate 900) - Tương phản **15.9:1**.
  - Text phụ: `#334155` (Slate 700) - Tương phản **9.6:1**.
  - Text chú thích: `#475569` (Slate 600) - Tương phản **5.8:1** (Vượt chuẩn 4.5:1).
- **Semantic Feedback**:
  - **Success (Đúng)**: `#047857` (Forest Emerald) - Tương phản **5.1:1**. Nền: `#ecfdf5`.
  - **Error (Sai / Bẫy)**: `#b91c1c` (Crimson) - Tương phản **7.2:1**. Nền: `#fef2f2`.
  - **Warning (Lưu ý)**: `#b45309` (Amber) - Tương phản **5.6:1**. Nền: `#fffbeb`.
  - **Accent**: `#4338ca` (Indigo) - Tương phản **8.6:1**. Nền: `#eef2ff`.

### Bảng màu Tối (Dark Mode)
- Nền trang: `#0b0f19` • Nền thẻ: `#111827` • Khối phụ: `#1f2937`.
- Text chính: `#f8fafc` • Text phụ: `#cbd5e1` • Đường viền: `#334155`.

## Typography

- **Font Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.
- **Code & Registers**: `ui-monospace, "SF Mono", "Cascadia Code", "Consolas", monospace`.
- **Tabular Data**: Sử dụng `font-variant-numeric: tabular-nums` để đồng hồ đếm ngược, chỉ số câu hỏi, địa chỉ bộ nhớ không bị giật layout khi số thay đổi.

## Layout

- Bố cục 2 cột với Sidebar điều hướng cố định (Desktop $\ge 992\text{px}$) và Responsive Drawer trên Mobile.
- Khoảng cách nhịp nhàng: Thẻ chứa nội dung có padding tối thiểu 24px, khoảng cách giữa các khối là 24px–32px.
- Giới hạn dòng đọc lý thuyết (Reading measure): Giữ bề rộng khối đọc tối ưu 65–75 ký tự (`max-width: 860px` hoặc `900px`).

## Elevation & Depth

- Tránh các bóng đổ màu lòe loẹt hoặc bóng cứng 0-blur.
- Sử dụng phân tầng bóng thực tế (Multi-layer soft shadows):
  - Card chuẩn: `box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03);`
  - Hover: `box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.04);`
  - Modal & Dropdown: `box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.05);`

## Shapes

- Bo góc tinh tế, nhất quán: `sm` (6px cho nút nhỏ, badge), `md` (10px cho nút bấm, thẻ bài tập), `lg` (14px cho modal, thẻ bài test tổng hợp).
- Đường viền hoàn chỉnh 1px `border: 1px solid var(--border-subtle)` thay cho viền 4px một bên (side-tab).

## Components

### 1. Nút bấm (Buttons)
- **Primary**: Nền `#1d4ed8`, chữ trắng đậm, tương phản $\ge 5.9:1$, hover `#1e40af`.
- **Secondary**: Nền `#f1f5f9`, chữ `#0f172a`, viền `#cbd5e1`.
- **Active / Focus**: Viền `:focus-visible` với outline `2px solid var(--primary)` và offset 2px.

### 2. Thẻ Đánh Giá (Theory Assessment Card)
- Loại bỏ dải viền bên (side-tab `::before`), sử dụng bao bọc viền nhẹ toàn thể `border: 1px solid var(--primary-border)` cùng nền phân tầng trang nhã `background-color: var(--primary-light)`.
- Tiêu đề solid không gradient.

### 3. Lựa chọn câu hỏi (Option Button)
- Trạng thái bình thường: Nền `#ffffff`, viền `#cbd5e1`, phím A/B/C/D rõ ràng.
- Trạng thái hover: Nền `#f8fafc`, viền `#1d4ed8`.
- Trạng thái chọn / đúng / sai: Viền và nền semantic có độ tương phản $\ge 4.5:1$.

## Do's and Don'ts

### Do:
- Luôn kiểm tra tỷ lệ tương phản chữ $\ge 4.5:1$ trước khi chọn màu.
- Sử dụng màu solid trang trọng, uy tín đại học kỹ thuật cho tiêu đề và huy hiệu.
- Đảm bảo các nút và liên kết có trạng thái `:focus-visible` rõ ràng cho bàn phím.
- Giữ typography đồng bộ trên toàn bộ 4 công cụ mô phỏng vi xử lý.

### Don't:
- Không sử dụng gradient chữ (`background-clip: text`) trên bất kỳ tiêu đề nào.
- Không sử dụng viền dày 4px một bên (`border-left: 4px solid ...`) - anti-pattern của AI.
- Không dùng màu xám nhạt (`#94a3b8`) trên nền trắng hoặc xám sáng vì vi phạm tương phản WCAG.
- Không lồng thẻ trong thẻ (nested cards) gây rối mắt.
