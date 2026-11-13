# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Sinh viên ngành Công nghệ Thông tin, Kỹ thuật Máy tính (Đại học Bách Khoa Hà Nội - HUST) đang theo học và ôn tập các học phần Kiến trúc Máy tính (mã học phần IT3030, IT3034, IT3283) cho các kỳ thi Giữa kỳ (GK) và Cuối kỳ (CK).

## Product Purpose

Cung cấp nền tảng ôn luyện, làm bài tập và thi thử trắc nghiệm chuyên sâu, bám sát 100% đề cương và giáo trình `KTMT_GK.pdf`. Giúp sinh viên nắm vững bản chất lý thuyết, ghi nhớ công thức tính toán hiệu năng, cấu trúc hệ thống máy tính, kiến trúc tập lệnh RISC-V và số học máy tính (mã bù 2, ALU, IEEE 754).

## Positioning

Hệ thống duy nhất tích hợp liền mạch giữa:
1. **Lý thuyết trọng tâm, Sơ đồ SVG & Tờ công thức bỏ túi (Cheat Sheet)** kèm đọc song song PDF (`KTMT_GK.pdf`) và kiểm tra nhanh tại chỗ.
2. **313 câu hỏi trắc nghiệm & Sách bài tập & Lời giải chi tiết** phân nhóm chính xác 100% theo `KTMT_GK.pdf` và các đề mẫu 0012 / 0013, trích dẫn chính xác số trang giáo trình làm nguồn đối chiếu.
3. **Bộ công cụ trực quan hóa (Interactive Calculators)** chuẩn Ch.1–4 KTMT: Tính hiệu năng CPU (Ch.1 + MFLOPS/CPI_TB/So sánh A vs B), Mô phỏng Băng nhớ & Little-Endian, Bộ chuyển đổi số thực IEEE 754 Binary32, và Bộ giải mã lệnh RISC-V 32-bit.

## Constraints & Principles

- **Tốc độ & Tính độc lập**: Hoạt động dạng Single Page Web App thuần (HTML5/CSS3/Vanilla JS), không đòi hỏi backend server, chạy mượt mà ngay trên GitHub Pages hoặc offline.
- **Độ chính xác kỹ thuật**: Mọi công thức toán, thuật ngữ kiến trúc vi xử lý (ALU, RegFile, PC, Immediate, Cache hit/miss rate, v.v.) phải chính xác tuyệt đối theo chuẩn quốc tế và giáo trình HUST.
- **Trải nghiệm học tập chuẩn mực**: Thiết kế giao diện theo tiêu chuẩn Impeccable, loại bỏ triệt để các anti-pattern (không gradient chữ, không viền thẻ 4px thô, không màu AI tím/cyan nhạt nhẽo), ưu tiên độ tương phản cao (WCAG AA), tính dễ đọc và sự tập trung tối đa cho người học.
