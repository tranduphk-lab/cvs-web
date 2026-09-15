# Cavisi Website Brand Audit

**Ngày audit:** 15/09/2026

**Touchpoint:** `_web/` và `https://cavisi.vn/`

**Cơ sở đối chiếu:** brand package trong `brand/`

**Trạng thái:** Bản production trên Vercel đã đồng bộ dữ liệu cốt lõi và vượt kiểm tra HTTP, nội dung máy đọc và layout tại các viewport đại diện.

## Brand health scorecard

| Chiều đánh giá | Trước xử lý | Sau xử lý | Trạng thái |
|---|---:|---:|---|
| Positioning clarity | 4/5 | 4/5 | Strong |
| Visual identity consistency | 3/5 | 3/5 | Developing |
| Messaging consistency | 2/5 | 4/5 | Strong có điều kiện |
| Voice & tone | 3/5 | 4/5 | Strong có điều kiện |
| Audience alignment | 3/5 | 4/5 | Strong có điều kiện |
| Competitive differentiation | 3/5 | 3/5 | Developing |
| **Tổng** | **18/30** | **22/30** | **Nền tảng tốt, chưa production-ready** |

Điểm sau xử lý đánh giá trạng thái code hiện tại, không phải phê duyệt pháp lý hoặc bằng chứng rằng website đang được deploy tại domain chính thức.

## Sai lệch đã xử lý

### P1 - Website công bố hướng dẫn và claim chưa được xác nhận

Website từng lặp lại `leave-on`, `không cần xả lại`, hiệu quả `24 giờ`, claim hàng rào bảo vệ và hiệu quả microbiome trong nội dung hiển thị, metadata, structured data và tệp dành cho AI search.

Đã thay bằng mô tả vai trò trung tính: Shampoo làm sạch nền; Spray chăm sóc lưu lại. Ngày 15/09/2026, website đã được đồng bộ với hướng dẫn Spray dùng khi tóc gần khô, xịt từ khoảng cách 10-15 cm, massage nhẹ và không cần xả lại.

### P1 - Sơ đồ minh họa hoạt động như bằng chứng sản phẩm

Hai raster cơ chế có chữ `cân bằng vi sinh 24h` và hình ảnh khoa học mô phỏng hiệu quả. Chúng đã được gỡ khỏi nội dung hiển thị và thay bằng flow HTML/CSS hai bước không đưa ra claim hiệu quả.

### P1 - Before/After tạo khả năng hiểu nhầm

Homepage từng đặt ảnh AI theo cấu trúc trạng thái trước/sau dù có disclaimer. Khối này đã được thay bằng ba bối cảnh nhu cầu và câu hỏi người dùng, không trình bày kết quả sản phẩm.

### P2 - Messaging thiên về thuật ngữ hơn khả năng hiểu

Các cụm `bọt vi sinh`, `nước vi sinh`, `hệ vi sinh khỏe mạnh` và ngôn ngữ tương tự đã được đổi thành mô tả quan sát được hoặc mô tả thành phần có giới hạn.

### P2 - Metadata và nội dung máy đọc lệch brand package

Meta description, Open Graph, Twitter, JSON-LD, `llms.txt`, `llms-full.txt` và `_web/README.md` đã được đồng bộ với vai trò hai bước và trạng thái bằng chứng hiện tại.

## Những gì đang hoạt động tốt

- Homepage đưa Scalp-first và hệ hai bước xuất hiện sớm, đúng cấu trúc messaging của brand package.
- Shampoo và Spray có vai trò riêng, nhưng vẫn nằm trong một Branded House duy nhất.
- CTA ưu tiên tìm hiểu vấn đề, cơ chế và sản phẩm; website không dùng countdown hoặc popup ép mua.
- Hệ màu Science Blue, Fresh Aqua, nền ấm và cặp Clash Display/Inter nhìn chung khớp identity đã khai báo.
- Website có reduced-motion CSS, semantic headings, alt text và nhãn điều khiển cho các tương tác chính.

## Blocker trước production

### Badge trên artwork chưa có hồ sơ chứng minh

Nhiều ảnh packshot và lifestyle hiển thị trực tiếp badge `EU Standard` và dòng `European-Grade Postbiotic Ingredient`. Không chỉnh sửa hoặc che badge bằng CSS vì việc đó sẽ tạo artwork giả và không giải quyết nguồn gốc pháp lý.

Cavisi đã xác nhận `Bao bì Cavisi ok8.pdf` là bản in cuối, tiếp tục dùng badge và nguyên liệu Postbiotic nhập khẩu từ châu Âu có giấy tờ hợp lệ. Website có thể nêu đúng nguồn gốc nguyên liệu, nhưng chưa nên diễn giải badge thành chứng nhận EU của toàn bộ thành phẩm nếu không có hồ sơ riêng cho badge.

### Trạng thái triển khai production

- `https://cavisi.vn/` đang được phục vụ bởi Vercel và đã triển khai các commit cập nhật ngày 15/09/2026.
- Bản live đã hiển thị hotline `076 435 8668`, giá combo `359.000đ`, hướng dẫn Spray leave-on và dữ liệu sitemap ngày `2026-09-15`.
- Hash các tài nguyên production đã được đối chiếu với nội dung commit tương ứng sau khi triển khai.
- Sitemap `https://cavisi.vn/sitemap.xml` đã được gửi trong Google Search Console ngày 15/09/2026; trạng thái `Thành công`, Google ghi nhận lần đọc cùng ngày và khám phá 8 trang tại thời điểm xác nhận.

### Dữ liệu và hồ sơ còn cần quản trị

- Quyết định khi nào công khai pháp nhân chịu trách nhiệm và địa chỉ; hiện tại chưa công khai Hộ kinh doanh Trần Đình Dư.
- Quyền sở hữu Zalo/email và nơi mua chính thức.
- TCCS, COA/kiểm nghiệm và căn cứ cho claim microbiome, bã nhờn, hàng rào bảo vệ, `24 giờ`.
- Quyền sử dụng và trạng thái AI/composite của từng asset.

## Kiểm tra đã thực hiện

- Quét toàn bộ HTML/TXT/README để loại các cụm claim đang bị chặn.
- Parse toàn bộ HTML và kiểm tra liên kết/asset nội bộ.
- Kiểm tra `git diff --check`.
- Render headless homepage ở `1440px` và `375px`, trang Spray ở `1440px`, trang Liên hệ ở `375px`.
- Đối chiếu layout, navigation, CTA và text wrapping ở các viewport đại diện.
- Kiểm tra HTTP production: các URL chính trả `200`, HTTP chuyển sang HTTPS bằng `308`, và `www` chuyển về non-www bằng `307`.
- So sánh SHA-256 sau triển khai: toàn bộ HTML/TXT/XML production được kiểm tra khớp nội dung website trong commit đã deploy.
- Kiểm tra production không có `X-Robots-Tag: noindex`; canonical và robots hiện không tạo blocker crawl rõ ràng.
- Vercel vẫn trả `application/octet-stream` cho `sitemap.xml` và các tệp TXT dù repository có cấu hình header tại project root. Nội dung đều truy cập được và hợp lệ; đây không phải blocker crawl/index hiện tại.
- Render production ở desktop `1440x1100` và mobile `375x812`; đo DOM xác nhận `document.scrollWidth` bằng viewport và không có overflow ngang toàn trang.

## Điều kiện hoàn tất vòng production

- [ ] Lưu hồ sơ chứng minh/quyền sử dụng badge `EU STANDARD`.
- [x] Đồng bộ website với tên, dung tích, giá, hotline, phiếu công bố, nguồn gốc nguyên liệu Postbiotic và hướng dẫn Spray đã xác nhận.
- [ ] Bổ sung TCCS, kiểm nghiệm và hồ sơ claim trước khi mở rộng nội dung khoa học.
- [x] Xác nhận `cavisi.vn` đang chạy trên Vercel và production đã nhận bản cập nhật từ `main`.
- [x] Commit và push bản local đã duyệt để kích hoạt deployment mới trên Vercel.
- [x] Xác nhận production mới khớp nội dung commit và kiểm tra các dữ kiện trọng yếu.
- [x] Gửi sitemap sau khi production mới vượt kiểm tra; Search Console báo `Thành công` và đã khám phá 8 trang ngày 15/09/2026.
- [x] Chạy lại visual QA trên bản deploy ở mobile 375px và desktop; xác nhận không có overflow ngang toàn trang.
- [ ] Kiểm tra tương tác keyboard focus và reduced motion trên trình duyệt tương tác khi có phiên phù hợp.
