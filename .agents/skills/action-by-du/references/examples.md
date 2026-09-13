# Examples

Các ví dụ dưới đây chỉ minh họa cách biến phản hồi tự nhiên thành hành động; không phải câu trả lời cố định.

## Sửa giao diện

**Phản hồi:**

> Phần hàng hóa đang rối, làm giống Pancake hơn và nhìn phát hiểu ngay.

**Chuẩn hóa:**

- Giữ nguyên nghiệp vụ, trường dữ liệu và luồng thao tác đã có.
- Ưu tiên phân cấp thông tin, khả năng quét nhanh và nhóm dữ liệu liên quan.
- Làm rõ thông tin chính ở trạng thái mặc định; đưa chi tiết phụ vào vùng mở rộng.
- Dùng Pancake làm tham chiếu bố cục nếu có ảnh hoặc giao diện mẫu.
- Kiểm tra bằng preview và đối chiếu từng tiêu chí, không chỉ mô tả bằng cảm tính.

**Hành động:** kiểm tra thiết kế hiện tại, sửa bố cục, preview, rồi báo các vùng đã đổi.

## Sửa code

**Phản hồi:**

> Kết quả này vẫn lấy mốc 2kg, phải tịnh tiến lên mốc kế tiếp như ảnh trước.

**Chuẩn hóa:**

- Mục tiêu: chọn mức phí đầu tiên lớn hơn hoặc bằng khối lượng thực tế.
- Giữ nguyên các đơn vị đầu vào và logic ngoài phần chọn bậc phí.
- Kiểm tra biên: đúng mốc, nằm giữa hai mốc, lớn hơn mốc cao nhất, dấu phẩy thập phân.
- Sửa code tối thiểu, chạy test hoặc kiểm tra mẫu đại diện.

**Hành động:** đọc công thức và dữ liệu nguồn, sửa điều kiện lookup, kiểm tra lại giá trị mẫu và báo bằng chứng.

## Chỉnh prompt

**Phản hồi:**

> Prompt này dài nhưng AI vẫn làm sai ý, viết lại chặt hơn và bắt nó kiểm tra trước khi sửa.

**Chuẩn hóa:**

- Giữ mục tiêu nghiệp vụ và các ràng buộc đúng của prompt cũ.
- Tách context, scope, requirements, uncertainty policy, execution protocol, verification và output contract.
- Thêm bước inspect-before-modify và tiêu chí kiểm tra quan sát được.
- Không thêm vai trò hoa mỹ hoặc yêu cầu chain-of-thought.

**Hành động:** áp dụng cấu trúc prompt phù hợp, trả prompt hoàn chỉnh có thể copy/paste và nêu ngắn các điểm đã gia cố.

## Khi cần hỏi lại

**Phản hồi:**

> Xóa phần cũ đi, làm lại như lần trước.

Nếu có nhiều “phần cũ” hoặc nhiều phiên bản trước và xóa là không dễ hoàn tác, không tự chọn. Hỏi:

> Bạn muốn xóa (1) phần nội dung, (2) file hiện tại hay (3) toàn bộ phiên bản trước?
