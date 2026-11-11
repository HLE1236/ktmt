# KTMT Hub - Nền tảng Ôn luyện & Thi thử Kiến trúc máy tính (RISC-V)

Ứng dụng web ôn tập trắc nghiệm, bài tập và lý thuyết môn **Kiến trúc máy tính** (Học phần IT3030, IT3034, IT3283 - Đại học Bách Khoa Hà Nội), bám sát 100% nội dung giáo trình `KTMT.pdf`.

---

## 🚀 Tính năng nổi bật

- **Ngân hàng 199 câu hỏi chuẩn hóa:** Phủ trọn vẹn 137 bài tập gốc (1.1–1.35, 2.1–2.25, 4.1–4.59, 5.1–5.18) và lý thuyết 4 chương.
- **Chế độ Luyện tập linh hoạt:** Hỗ trợ cả **Trắc nghiệm 4 lựa chọn** (Kahoot/Quizizz) và **Tự điền đáp án** (daotao.ai).
- **Giải thích chi tiết:** Từng bước giải thích rõ ràng, công thức toán KaTeX và trích dẫn số trang chính xác trong `KTMT.pdf`.
- **4 Công cụ Mô phỏng & Tính toán KTMT:**
  1. *Hiệu năng CPU & Cache:* Tính $T_0, t_{\text{CPU}}$, MIPS, CPI hiệu dụng có tính đến Cache Penalty.
  2. *Little-Endian & Memory Banks:* Phân bố địa chỉ byte vào $K=4$ hoặc $K=8$ băng nhớ vật lý.
  3. *Chuyển đổi số & Chuẩn IEEE 754 32-bit:* Phân rã trực quan Bit dấu ($S$), Mũ lệch ($e$) và Định trị ($m$).
  4. *Dịch ngược mã máy RISC-V 32-bit:* Giải mã 6 định dạng (R, I, S, B, U, J) sang mã Assembly.
- **Phòng Thi thử (Exam Mode):** Đề Giữa kỳ (25 câu / 30 phút) và Cuối kỳ (40 câu / 50 phút) với đồng hồ đếm ngược và chấm điểm tự động.
- **Sổ tay câu sai (Mistake Notebook):** Tự động gom các câu làm sai và hỗ trợ luyện tập lại đến khi thành thạo.
- **Thẻ ghi nhớ (Flashcards):** Ôn nhanh công thức và bảng 32 thanh ghi RISC-V với hiệu ứng lật thẻ 3D.
- **Giao diện hiện đại & Local 100%:** Thiết kế tối giản Notion / daotao.ai, hỗ trợ Dark Mode / Light Mode, tích hợp xem tài liệu PDF gốc trực tiếp trong ứng dụng.

---

## 📖 Hướng dẫn sử dụng

### Cách 1: Mở trực tiếp (Không cần cài đặt)
Nhấp đúp chuột vào file `index.html` để mở trực tiếp trên trình duyệt (Chrome, Edge, Brave, Firefox).

### Cách 2: Chạy qua Local Web Server
```bash
# Khởi động web server bằng Python
python -m http.server 8080
```
Sau đó truy cập: `http://localhost:8080` trên trình duyệt.

### ⌨️ Phím tắt thao tác nhanh
- `1`, `2`, `3`, `4` hoặc `A`, `B`, `C`, `D`: Chọn đáp án tương ứng.
- `Enter` hoặc `Phím mũi tên phải`: Chuyển sang câu tiếp theo.
- `Phím mũi tên trái`: Quay lại câu trước.
- `Phím Space`: Lật thẻ ghi nhớ (ở tab Flashcards).

---

## 📁 Cấu trúc thư mục

```
├── index.html                   # Giao diện chính của ứng dụng
├── KTMT.pdf                     # Giáo trình tham chiếu gốc (ĐHBK Hà Nội)
├── README.md                    # Hướng dẫn sử dụng
├── css/
│   └── style.css                # Giao diện tối giản (Light / Dark mode)
├── js/
│   ├── data-theory.js           # Cẩm nang lý thuyết 4 chương & bảng 32 thanh ghi
│   ├── data-questions-ch1-ch2.js # Ngân hàng câu hỏi Chương 1 & Chương 2
│   ├── data-questions-ch3.js    # Ngân hàng câu hỏi Chương 3 (Tập lệnh RISC-V)
│   ├── data-questions-ch4.js    # Ngân hàng câu hỏi Chương 4 (Số học máy tính)
│   ├── data-questions.js        # Tổng hợp, chuẩn hóa và xáo trộn 199 câu hỏi
│   ├── tools.js                 # Thuật toán 4 bộ công cụ tính toán
│   └── app.js                   # Engine điều hướng, Luyện tập, Thi thử, LocalStorage
└── tests/
    └── run_all.js               # Bộ kiểm thử tự động toàn diện
```

---

## 🧪 Kiểm thử tự động (Automated Tests)

Chạy bộ kiểm thử tự động 370+ test cases để kiểm tra tính toàn vẹn hệ thống:
```bash
node tests/run_all.js
```
