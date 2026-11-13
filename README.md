# Ôn tập Kiến trúc máy tính (KTMT - HUST)

Trang web ôn tập trắc nghiệm và bài tập môn Kiến trúc máy tính (mã học phần IT3030, IT3034, IT3283 - Bách Khoa). Toàn bộ lý thuyết, câu hỏi và bài tập đều được chia đúng theo từng mục và từng nhóm trong giáo trình `KTMT_GK.pdf` để học đến đâu làm bài test đến đó cho tiện.

---

## 1. Cách mở và chạy web

Dự án này là web tĩnh thuần (HTML, CSS, JavaScript), không cần cài Node.js, không cần database hay backend gì cả. 

### Cách 1: Mở thẳng bằng trình duyệt (Nhanh nhất)
1. Tải cả thư mục này về máy (hoặc dùng `git clone https://github.com/HLE1236/ktmt.git`).
2. Nhấp đúp chuột vào file `index.html`.
3. Trình duyệt (Chrome, Edge, Cốc Cốc, Firefox...) sẽ mở trang web lên và dùng được ngay.

### Cách 2: Chạy qua Live Server (nếu dùng VS Code)
- Mở thư mục này trong VS Code.
- Cài extension **Live Server** (nếu chưa có).
- Nhấp chuột phải vào file `index.html` chọn **Open with Live Server**.

### Cách 3: Dùng Python (nếu máy có sẵn Python)
Mở terminal tại thư mục này và gõ:
```bash
python -m http.server 8000
```
Sau đó mở trình duyệt vào địa chỉ: `http://localhost:8000`.

> **Dữ liệu lưu ở đâu?**  
> Điểm số, lịch sử làm bài, danh sách câu sai và ghi chú cá nhân đều được lưu trực tiếp trên trình duyệt của bạn (LocalStorage). Tắt tab hoặc tắt máy bật lại vẫn còn nguyên, không sợ mất.

---

## 2. Các phần chính trên web

### 📖 Lý thuyết
- Chia thành 2 phần y hệt trong file `KTMT_GK.pdf`:
  - **Phần 1: Lý thuyết trọng tâm** (bám sát cấu trúc 4 chương từ `KTMT_GK.pdf`).
  - **Phần 2: Toàn bộ bài tập theo nhóm** (từ Bài 1.1 đến Bài 4.30).
- Dưới mỗi công thức tính toán đều có sẵn nút **"Luyện tập dạng này"** để làm thử ngay vài câu tương ứng.
- Ở cuối mỗi mục có nút **"Làm bài test toàn bộ phần này"** để kiểm tra lại toàn bộ kiến thức vừa học.

### 🎯 Luyện tập
- Làm từng câu trắc nghiệm theo từng chương hoặc theo từng nhóm bài tập.
- Mỗi câu sau khi chọn đáp án sẽ hiện ngay lời giải chi tiết, chỉ rõ lỗi hay lừa trong đề và trích dẫn số trang trong file `KTMT_GK.pdf` để tiện mở lại sách xem.
- Có nút chuyển đổi giữa **Trắc nghiệm (chọn A/B/C/D)** và **Tự điền đáp án** (gõ số/chữ giống kiểu daotao.ai).
- Trên đầu mỗi câu có nút **"Xem lý thuyết"** để nhảy nhanh về phần lý thuyết liên quan nếu quên kiến thức.

### ⏱️ Phòng thi thử
- Có sẵn 2 chế độ thi chuẩn:
  - **Đề Giữa kỳ**: 25 câu làm trong 30 phút (gồm Chương 1 và Chương 2).
  - **Đề Cuối kỳ**: 40 câu làm trong 50 phút (bao quát cả 4 chương).
- **Test theo chuyên đề**: Có thể chọn thi riêng toàn bộ câu hỏi của 1 mục lý thuyết (như mục 1.1.4) hoặc thi riêng 1 nhóm bài tập cụ thể.
- Có đồng hồ đếm ngược, bảng chọn câu (Palette) để xem câu nào làm rồi, câu nào chưa, có nút gắn cờ xem lại và nộp bài chấm thang điểm 10.

### 📕 Sổ tay câu sai & Flashcards
- **Sổ tay câu sai**: Câu nào bạn làm sai lúc luyện tập hoặc thi thử sẽ tự động được gom về đây để luyện lại cho nhớ.
- **Flashcards**: Lật thẻ để ôn nhanh các công thức quan trọng và bảng tra cứu 32 thanh ghi của RISC-V (`x0`-`x31`, tên ABI, chức năng).

### 🛠️ Công cụ hỗ trợ tính toán
Gồm 4 công cụ nhỏ giúp tính nhanh khi làm bài tập:
1. **Tính hiệu năng CPU**: Tính chu kỳ xung nhịp $T_0$, thời gian $t_{CPU}$, MIPS và CPI trung bình.
2. **Mô phỏng phân bố bộ nhớ (Little-Endian)**: Nhập địa chỉ byte và số băng nhớ ($K=4$ hoặc $K=8$) để xem byte nằm ở băng nào và địa chỉ từ nhớ.
3. **Chuyển đổi số thực IEEE 754 (32-bit)**: Nhập số thập phân bất kỳ, tool sẽ tách bit dấu ($S$), bit mũ ($E$) và phần định trị ($M$) kèm mã Hex.
4. **Dịch ngược lệnh RISC-V**: Nhập mã hex 32-bit (ví dụ `0x00500093`), tool sẽ giải mã ra định dạng lệnh (R, I, S, B, U, J) và câu lệnh Assembly tương ứng.

---

## 3. Phím tắt thao tác nhanh

Khi đang làm bài ở mục **Luyện tập**:
- Phím `1`, `2`, `3`, `4` hoặc `A`, `B`, `C`, `D`: Chọn đáp án.
- Phím `Enter` hoặc `Mũi tên phải (→)`: Sang câu tiếp theo.
- Phím `Mũi tên trái (←)`: Quay lại câu trước.

Khi đang ở mục **Flashcards**:
- Phím `Space` hoặc `Enter`: Lật mặt thẻ để xem đáp án.
- Phím `Mũi tên phải (→)` / `Mũi tên trái (←)`: Chuyển thẻ tiếp theo hoặc thẻ trước.

---

## 4. Cấu trúc file trong thư mục

- `index.html`: File giao diện chính, mở file này để học.
- `KTMT_GK.pdf`: File tài liệu giáo trình gốc chủ đạo để đối chiếu khi cần.
- `css/style.css`: File định dạng giao diện (đã tối ưu màu tương phản dễ nhìn, có sẵn giao diện Sáng / Tối).
- `js/`: Thư mục chứa dữ liệu câu hỏi và mã xử lý:
  - `data-theory.js`: Tóm tắt lý thuyết 4 chương và liên kết bài tập.
  - `data-questions-ch1-ch2.js`, `data-questions-ch3.js`, `data-questions-ch4.js`: Ngân hàng 313 câu hỏi trắc nghiệm chia theo từng chương.
  - `tools.js`: Mã xử lý cho 4 bộ công cụ tính toán.
  - `app.js`: Xử lý chuyển tab, đếm giờ, làm bài thi và lưu tiến độ học.
- `tests/run_all.js`: File script test kiểm tra lỗi dữ liệu câu hỏi.

---

Chúc bạn ôn thi tốt và đạt điểm cao môn KTMT!
