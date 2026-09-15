# Cavisi trust-first website

Website giới thiệu thương hiệu Cavisi với mục tiêu chính là tạo uy tín, giúp người đọc hiểu sản phẩm và kiểm tra trạng thái thông tin.

## Chạy tại local

```powershell
python -m http.server 4173 --directory D:\cvs-web\_web
```

Mở `http://127.0.0.1:4173`.

## Cấu trúc website

- `index.html`: Homepage định vị Scalp-first, vai trò Shampoo/Spray, cách dùng, nguyên tắc giao tiếp và FAQ.
- `co-che/index.html`: Logic Scalp-first và sơ đồ trung tính về vai trò Shampoo - Spray.
- `san-pham/index.html`: Danh mục bộ đôi sản phẩm Cavisi Microbiome Care.
- `san-pham/shampoo/index.html`: Chi tiết Cavisi Shampoo 250ml, bảng INCI, hoạt chất chính, quy trình gội.
- `san-pham/spray/index.html`: Chi tiết Cavisi Spray 30ml, bảng INCI, Zinc PCA và trạng thái hướng dẫn sử dụng.
- `thuong-hieu/index.html`: Câu chuyện thương hiệu, triết lý Science × Nature, nhà máy Butter-C.
- `kien-thuc/index.html`: Hub bài viết kiến thức chăm sóc da đầu có nguồn tham khảo.
- `kien-thuc/da-dau-khi-doi-mu-bao-hiem/index.html`: Bài kiến thức đầu tiên về nhiệt, mồ hôi và cảm giác bết khi thường xuyên đội mũ bảo hiểm.
- `kien-thuc/gau-la-gi-vi-sao-de-quay-lai/index.html`: Bài giải thích có nguồn về gàu, cơ chế nhiều yếu tố, tính tái diễn và cách chăm sóc thông thường.
- `bang-chung/index.html`: Trạng thái hồ sơ, thứ bậc nguồn và ranh giới bằng chứng của thông tin Cavisi.
- `lien-he/index.html`: Kênh liên lạc trực tiếp (Hotline, Zalo, Email), nhà máy và form tư vấn trực tuyến.
- `styles.css`: Hệ thống thiết kế typography Inter thanh lịch, responsive và motion.
- `script.js`: Scroll reveal, sticky header, menu mobile, FAQ accordion và contact form.
- `assets/`: Logo, font chữ, hình insight vấn đề da đầu, hình minh họa và packshot sản phẩm đang chờ hoàn tất inventory/phê duyệt.

## Quy tắc nội dung

- Không dùng ảnh AI, hình Before/After hoặc hình minh họa như bằng chứng kết quả.
- Không dùng claim điều trị, hiệu quả định lượng hoặc tiêu chuẩn chưa có tài liệu.
- Phân biệt nguồn về thành phẩm, nguyên liệu và kiến thức khoa học nền.
- Hai số tiếp nhận đã được đối chiếu với phiếu công bố trong bộ nguồn nội bộ.
- TNPCB Shampoo: `28338/26/CBMP-HN`.
- TNPCB Spray: `28222/26/CBMP-HN`.
- Nhà máy đã kiểm nghiệm thành phần và lưu đầy đủ giấy tờ; Cavisi hiện chưa xin bản sao nên website chưa thể tự đối chiếu hoặc công khai tên hồ sơ, chỉ tiêu và kết quả cụ thể.

## Trước khi production

- Xin bản sao hồ sơ kiểm nghiệm từ nhà máy nếu cần công khai tên tài liệu, chỉ tiêu hoặc kết quả cụ thể.
- Xác nhận quyền sở hữu Zalo, email và kênh mua chính thức.
- Không công khai tên và địa chỉ Hộ kinh doanh Trần Đình Dư cho đến khi Cavisi có quyết định mới.
