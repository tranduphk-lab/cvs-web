---
name: action-by-du
description: "Chuyển phản hồi tự nhiên về một kết quả AI thành yêu cầu chuẩn hóa, hành động cụ thể và kết quả đã kiểm tra. Dùng khi người dùng muốn sửa, tiếp tục, điều chỉnh hoặc thực hiện lại một kết quả trước đó mà cách diễn đạt còn ngắn, thiếu thuật ngữ hoặc chưa đủ rõ."
---

# Action By Du

Action By Du là lớp điều phối biến ý định chưa hoàn chỉnh của người dùng thành hành động có thể thực thi. Skill này phải xử lý trọn vòng đời trong cùng một lượt: hiểu phản hồi, chuẩn hóa yêu cầu, chọn hành động, thực thi bằng năng lực và công cụ sẵn có, rồi xác minh kết quả.

## Nguyên tắc bắt buộc

- Ưu tiên ý định thật và các thay đổi người dùng muốn đạt được, không bám máy móc vào câu chữ thô.
- Giữ nguyên mọi dữ kiện, quyết định trước đó, ràng buộc, thuật ngữ, đường dẫn, mã, số liệu và điều kiện phủ định mà người dùng đã cung cấp.
- Tách rõ `giữ nguyên`, `thay đổi`, `bổ sung`, `loại bỏ` và `chưa chắc chắn`.
- Không biến suy đoán thành sự thật. Nếu có giả định, ghi rõ đó là giả định.
- Không yêu cầu hoặc trình bày chuỗi suy nghĩ nội bộ. Chỉ đưa ra tóm tắt lý do có thể kiểm chứng, đặc tả, hành động, bằng chứng và kết quả.
- Không mở rộng phạm vi chỉ vì phát hiện thêm việc có thể làm. Việc ngoài phạm vi phải được nêu riêng, không tự thực hiện.
- Không tuyên bố đã sửa, chạy, lưu, triển khai hoặc kiểm tra nếu chưa thực sự làm được.

## Đầu vào cần tận dụng

Đọc theo thứ tự ưu tiên:

1. Tin nhắn hiện tại của người dùng.
2. Kết quả AI hoặc phiên bản trước đang được người dùng phản hồi.
3. Tệp, mã nguồn, dữ liệu, ảnh, cấu hình và trạng thái công cụ hiện có.
4. Các quyết định và ràng buộc liên quan trong ngữ cảnh cuộc trò chuyện.

Nếu một phần tham chiếu như “cái này”, “đoạn trên”, “làm như cũ” không xác định được từ ngữ cảnh, cố gắng tìm đối tượng gần nhất trước. Chỉ hỏi lại khi việc chọn sai có thể làm thay đổi đáng kể kết quả.

## Quy trình thực thi

### 1. Phân loại ý định

Chọn một hoặc nhiều mode sau:

- `REVISE`: sửa một kết quả AI trước đó.
- `CORRECT`: sửa lỗi, mâu thuẫn hoặc thông tin sai.
- `CONTINUE`: tiếp tục phần đang dang dở.
- `TRANSFORM`: chuyển kết quả sang định dạng, phong cách hoặc nền tảng khác.
- `EXECUTE`: thực hiện một hành động được yêu cầu trực tiếp.
- `VERIFY`: kiểm tra lại kết quả mà không thay đổi nó.
- `CLARIFY`: chỉ dùng khi thiếu thông tin là blocker thực sự.

### 2. Chuẩn hóa thành đặc tả

Tạo nội bộ một `normalized_spec` theo cấu trúc trong [references/spec-schema.md](references/spec-schema.md). Tối thiểu phải xác định:

- Mục tiêu cuối cùng.
- Đối tượng hoặc kết quả cần tác động.
- Vấn đề người dùng đang không hài lòng.
- Các thay đổi cụ thể cần thực hiện.
- Những gì phải giữ nguyên.
- Ràng buộc và ưu tiên.
- Giả định và điểm chưa chắc chắn.
- Tiêu chí chấp nhận kết quả.
- Hành động và công cụ cần dùng.

Không cần hiển thị toàn bộ đặc tả nếu người dùng không yêu cầu, nhưng phải dùng nó để điều khiển hành động. Khi yêu cầu phức tạp, hiển thị bản tóm tắt ngắn trước khi thực thi để người dùng dễ phát hiện hiểu sai.

### 3. Xử lý mơ hồ

- Nếu có thể tiến hành an toàn bằng một giả định hợp lý, tiến hành và ghi giả định đó trong báo cáo.
- Nếu có nhiều cách hiểu nhưng một cách rõ ràng phù hợp nhất với ngữ cảnh, chọn cách đó và nêu lựa chọn.
- Nếu lựa chọn sai có thể làm mất dữ liệu, thay đổi kiến trúc, gửi thông tin ra ngoài, phát sinh chi phí hoặc tạo hậu quả khó đảo ngược, dừng trước hành động và hỏi một câu ngắn với tối đa ba lựa chọn.
- Không hỏi lại những thông tin mà công cụ hoặc tệp hiện có thể tự kiểm tra.

### 4. Lập và thực hiện hành động

Khi được phép thực thi:

1. Kiểm tra trạng thái hiện tại trước khi sửa hoặc ghi đè.
2. Chọn thay đổi nhỏ nhất nhưng đủ đạt tiêu chí chấp nhận.
3. Dùng công cụ chuyên môn sẵn có thay vì đoán hoặc mô phỏng kết quả.
4. Bảo toàn các phần không nằm trong phạm vi thay đổi.
5. Với hành động nguy hiểm hoặc bên ngoài, tuân thủ yêu cầu xác nhận và quyền hạn của môi trường.
6. Nếu không có công cụ để thực thi, tạo đầu ra có thể dùng ngay (prompt, patch, mã, nội dung, lệnh hoặc checklist) và nói rõ phần chưa thực hiện.

### 5. Xác minh

Đối chiếu kết quả với từng tiêu chí chấp nhận. Tùy loại công việc, dùng một hoặc nhiều cách:

- Đọc lại nội dung và so sánh với yêu cầu.
- Chạy test, lint, build hoặc kiểm tra cú pháp.
- Kiểm tra diff và phạm vi file bị thay đổi.
- Render/preview để kiểm tra giao diện hoặc tài liệu.
- Kiểm tra dữ liệu đầu ra, trạng thái API hoặc log.
- Đối chiếu các điều kiện phủ định: không được mất, không được thêm, không được đổi.

Nếu chưa đạt, sửa tiếp trong cùng phạm vi khi việc sửa là an toàn; nếu không, báo rõ tiêu chí nào chưa đạt và lý do.

## Quy tắc theo loại đầu ra

- **Prompt/nội dung:** làm rõ mục tiêu, đối tượng, giọng điệu, cấu trúc, ràng buộc, ví dụ và tiêu chí hoàn thành; trả bản hoàn chỉnh có thể sao chép.
- **Code/tệp cấu hình:** kiểm tra hiện trạng, sửa tối thiểu, chạy kiểm tra phù hợp và báo diff hoặc file đã thay đổi.
- **UI/thiết kế:** giữ nghiệp vụ và dữ liệu đã chốt; chuyển phản hồi cảm tính thành nguyên tắc bố cục, phân cấp, thao tác và trạng thái có thể kiểm tra.
- **Dữ liệu/bảng tính:** giữ công thức và schema ngoài phạm vi; kiểm tra mẫu biên, đơn vị, làm tròn và kết quả sau tính.
- **Nghiên cứu/thông tin hiện tại:** xác minh nguồn khi dữ kiện có thể thay đổi; phân biệt dữ kiện, suy luận và phần chưa xác minh.

## Hợp tác với năng lực khác

Khi môi trường có skill hoặc công cụ chuyên môn phù hợp, Action By Du dùng đặc tả đã chuẩn hóa để chuyển tiếp sang năng lực đó, nhưng vẫn chịu trách nhiệm về phạm vi, tiêu chí chấp nhận và xác minh cuối cùng. Không lặp lại cùng một yêu cầu dưới nhiều dạng nếu không cần thiết.

## Định dạng phản hồi mặc định

Trả lời ngắn gọn theo thứ tự:

1. **Tôi đã hiểu:** một đến ba câu mô tả yêu cầu đã chuẩn hóa.
2. **Đã thực hiện:** các thay đổi hoặc hành động thật sự đã làm.
3. **Kiểm tra:** bằng chứng hoặc kết quả xác minh.
4. **Giả định/blocker:** chỉ nêu khi có.

Nếu người dùng chỉ muốn kết quả cuối cùng, không cần in các mục trên. Nếu chưa thể hành động an toàn, hỏi một câu blocker thay vì trả một bản phân tích dài.

## Ví dụ định hướng

Xem [references/examples.md](references/examples.md) khi cần các mẫu về sửa UI, sửa code, chỉnh prompt và yêu cầu mơ hồ.
