# Báo cáo Khử trùng lặp & Chuẩn hóa Dữ liệu (Chương 5, 6, 7)

- **Tập đối chiếu Chương 1–4 (read-only):** `420` câu
- **Tổng số câu sạch Chương 5–7 sau chuẩn hóa:** `104` câu (`ch5.json`: 34, `ch6.json`: 48, `ch7.json`: 22)
- **Tiêu chí:** Mức 1 (chuẩn hóa chuỗi câu hỏi + khối mã lệnh), ưu tiên giữ bản đầy đủ hơn và gộp nguồn; xung đột chéo 5–6–7 ưu tiên theo đúng phân bổ slide `CA.RISCV.2025`.

## 1. Bảng tổng hợp số liệu

| Chương | Sẵn có (`ch5-ch7.js`) | Trích mới (Đề thi / Slide) | Tổng đầu vào | Loại nội bộ | Loại trùng C1–C4 | Loại trùng chéo C5–C7 | **Tổng sạch cuối cùng** |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Chương 5 (Bộ xử lý)** | 30 | 5 | 35 | 1 | 0 | 0 | **34** |
| **Chương 6 (Bộ nhớ máy tính)** | 31 | 17 | 48 | 0 | 0 | 0 | **48** |
| **Chương 7 (Hệ thống Vào-Ra)** | 24 | 0 | 24 | 0 | 0 | 2 | **22** |
| **Tổng cộng** | 85 | 22 | 107 | 1 | 0 | 2 | **104** |

## 2. Chi tiết các câu bị loại bỏ

### 2.1. Loại trùng lặp nội bộ (Chương 5)
- ``: Cho đoạn mã RISC-V chạy trên CPU pipeline 5 tầng có forwarding. Tổng số chu kỳ xung nhịp cần thiết để đoạn mã hoàn thành — *Duplicate 4-instruction hazard-free 5-stage pipeline fill-up problem (x5/x6 register alias variant of pdf-2_2_4-4; merged source and examTags into pdf-2_2_4-4 which has more complete explanation)* (giữ `pdf-2_2_4-4`).

### 2.2. Loại trùng lặp chéo giữa Chương 5, 6, 7
- `pdf-2_2_6-6` (loại khỏi **Chương 7**, giữ ở **Chương 6**): Trong thực tế hiện nay, phát biểu nào sau đây <strong>SAI</strong> về việc sử dụng HDD và SSD trên c... — *Slide CA.RISCV.2025 Chương 6 chính thức trình bày Bộ nhớ ngoài (HDD, SSD, RAID); Chương 7 không chứa nội dung này -> ưu tiên giữ ở Chương 6.*
- `pdf-2_2_6-10` (loại khỏi **Chương 7**, giữ ở **Chương 6**): Đặc điểm nào sau đây <strong>KHÔNG PHẢI</strong> là ưu điểm của ổ thể rắn SSD so với ổ đĩa từ HDD tr... — *Slide CA.RISCV.2025 Chương 6 chính thức trình bày Bộ nhớ ngoài (HDD, SSD, RAID); Chương 7 không chứa nội dung này -> ưu tiên giữ ở Chương 6.*

### 2.3. Đối chiếu với Chương 1–4 (`ref_ch1_ch4.json`, 420 câu)
- Kết quả kiểm tra tự động toàn bộ `104` câu sạch của Chương 5–7 với `420` câu Chương 1–4: **0 câu trùng lặp** (các câu giao thoa trong đề thi như `P1-56`, `P1-76`, `c1-1.1`, `c2-2.2b`, `c2-2.8c`, `c2-2.8e` đã được lọc bỏ ngay từ bước quét đề thi).
