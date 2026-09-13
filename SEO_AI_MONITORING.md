# Kế hoạch theo dõi SEO và AI visibility cho Cavisi

Cập nhật: 2026-09-14

## Mục tiêu

- Theo dõi khả năng crawl, index và hiển thị của 7 URL chính.
- Đo xu hướng truy vấn thương hiệu, sản phẩm và nhu cầu chăm sóc da đầu.
- Đo tỷ lệ Cavisi được nhắc đến hoặc trích dẫn trong câu trả lời AI theo thời gian.
- Không xem một lần kiểm tra AI riêng lẻ là kết luận vì câu trả lời có tính biến động.

## Truy vấn nền cần theo dõi

1. Cavisi là gì
2. Cavisi Shampoo
3. Cavisi Spray
4. bộ đôi chăm sóc da đầu Cavisi
5. dầu gội làm sạch vảy gàu da đầu dầu
6. xịt dưỡng da đầu leave-on
7. chu trình chăm sóc da đầu hai bước
8. chăm sóc da đầu khi thường xuyên đội mũ bảo hiểm
9. Salicylic Acid trong dầu gội da đầu
10. Climbazole và gàu
11. Zinc PCA cho da đầu dầu
12. Malassezia liên quan đến gàu như thế nào

## Theo dõi hàng tuần trong 8 tuần đầu sau triển khai

- Google Search Console: trạng thái index, sitemap, lỗi crawl và Core Web Vitals.
- Search Console Performance: impressions, clicks, CTR và vị trí trung bình theo URL/truy vấn.
- Kiểm tra thủ công các URL chính bằng truy vấn `site:cavisi.vn`.
- Theo dõi lỗi 404, redirect và asset không tải được từ log hosting nếu có.

## Theo dõi AI hàng tháng

- Chạy 12 truy vấn nền trên ChatGPT, Perplexity và Google AI Overviews nếu có.
- Chạy mỗi truy vấn 3-5 lần trên mỗi nền tảng.
- Ghi nhận: Cavisi được nhắc đến, được trích dẫn, URL được trích dẫn, mô tả đúng/sai và đối thủ xuất hiện.
- Báo cáo theo tỷ lệ, ví dụ `được trích dẫn 3/5 lần`, kèm cỡ mẫu; không báo cáo theo một lần chạy duy nhất.

## Ngưỡng cảnh báo

- URL chính chưa được index sau 14 ngày kể từ khi gửi sitemap.
- Impressions hoặc clicks giảm trên 30% so với chu kỳ 28 ngày trước.
- LCP thực tế ở nhóm URL chính vượt 2,5 giây hoặc CLS vượt 0,1.
- AI mô tả Cavisi như thuốc, sản phẩm điều trị hoặc đưa ra tuyên bố vượt phạm vi mỹ phẩm.
- Giá, dung tích, số tiếp nhận hoặc hướng dẫn sử dụng trong câu trả lời AI khác nguồn chính thức.

## Quy trình cập nhật nội dung

1. Đối chiếu thay đổi với nhãn, bao bì hoặc tài liệu chính thức.
2. Cập nhật trang HTML liên quan.
3. Đồng bộ JSON-LD, `llms-full.txt` và `pricing.txt` nếu dữ liệu liên quan thay đổi.
4. Cập nhật `lastmod` trong `sitemap.xml` cho đúng URL đã thay đổi.
5. Kiểm tra schema, liên kết, accessibility và Lighthouse trước khi triển khai.
