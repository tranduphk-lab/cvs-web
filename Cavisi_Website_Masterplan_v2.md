# Cavisi Website — Plan hoàn chỉnh

**Trạng thái: 7/7 trang đã có nội dung + build.** Chỉ còn thiếu ảnh thật và dữ liệu kiểm nghiệm.

## Sitemap cuối cùng

```
cavisi-website/
├── index.html                Trang chủ ..................... ✅
├── co-che/index.html         Cơ chế ........................ ✅
├── san-pham/
│   ├── index.html            Danh sách sản phẩm ............ ✅
│   ├── shampoo/index.html    Cavisi Shampoo ................ ✅
│   └── spray/index.html      Cavisi Spray .................. ✅
├── bang-chung/index.html     Bằng chứng .................... ✅ (thiếu số liệu kiểm nghiệm)
├── thuong-hieu/index.html    Câu chuyện thương hiệu ........ ✅ (thiếu câu chuyện cá nhân founder nếu muốn thêm sau)
├── lien-he/index.html        Liên hệ ....................... ✅ (hotline 0764 358 668, Zalo zalo.me/0764358668)
├── components/
│   ├── header.html                                          ✅
│   ├── footer.html                                          ✅ (đã có hotline/Zalo + đủ nav)
│   └── cta-mua-ngoai.html                                   ✅
└── assets/
    ├── css/{tokens.css, main.css}                           ✅ (đã sửa lỗi padding, contrast, heading)
    ├── js/main.js                                           ✅
    ├── fonts/{clash-display, inter}/                        ✅ file thật
    └── images/
        ├── products/, mechanism/, evidence/                 ⏳ chờ ảnh thật
        └── brand/logo.png                                   ✅ file thật
```

## Còn treo — không phải việc kỹ thuật, cần Du quyết

| # | Việc | Ảnh hưởng |
|---|---|---|
| 1 | Ảnh thật (hero, sản phẩm, cơ chế, bằng chứng) | Đang là khung placeholder có ghi chú rõ, thả ảnh vào là xong |
| 2 | Dữ liệu kiểm nghiệm ("ngày 3 cải thiện") | Trang Bằng chứng đang nói thẳng "đang hoàn thiện", không bịa số liệu |
| 3 | Câu chuyện cá nhân founder (nếu muốn) | Trang Thương hiệu hiện dùng sứ mệnh + cách vận hành đã xác nhận, không có narrative cá nhân vì chưa được cung cấp |
| 4 | Màu Neutral Grey không đạt chuẩn AA cho text nhỏ | Đã nêu ở lượt trước — chưa quyết hướng A hay B |
| 5 | Domain + hosting | Chưa xác nhận đã có chưa |

## Thứ tự việc còn lại

1. Du xác nhận hướng xử lý màu Neutral Grey (mục #4)
2. Du gửi ảnh thật → thả vào khung placeholder
3. Khi có COA → cập nhật trang Bằng chứng với số liệu thật
4. (Tuỳ chọn) Bổ sung câu chuyện cá nhân founder vào trang Thương hiệu
5. Xác nhận domain/hosting → QA → Launch

Không còn việc nào chặn được nữa ở giai đoạn nội dung/code — toàn bộ 7 trang đã có thể xem được ngay khi chạy local server.
