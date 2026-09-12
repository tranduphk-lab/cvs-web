# Cavisi Trust Content Matrix

## 1. Mục đích

Tài liệu này xác định nội dung nào Cavisi có thể dùng để xây dựng uy tín trên website, nội dung nào chỉ nên xem là định hướng thương hiệu, nội dung nào cần thêm tài liệu xác minh và nội dung nào chưa nên công bố.

Kết luận hiện tại: Cavisi đã có nền tảng tốt để viết nội dung về định vị thương hiệu, thành phần, vai trò hai sản phẩm và cách sử dụng. Tuy nhiên, bộ tài liệu hiện có chưa đủ để trình bày các nội dung về hiệu quả, kiểm nghiệm, tiêu chuẩn, tính an toàn hoặc tác động lên hệ vi sinh như những sự thật đã được chứng minh.

---

## 2. Phạm vi nguồn đã đối chiếu

| Mã nguồn | Tài liệu | Vai trò | Trạng thái sử dụng |
|---|---|---|---|
| S1 | `TTSP - Dầu gội trị gàu_Trần Dư.docx` | Thành phần, công dụng dự kiến, đối tượng, cách dùng, lưu ý, nơi sản xuất | Bản làm việc; trường TCCS/TNPCB và thương nhân chịu trách nhiệm trong tệp còn trống; TNPCB đã được bổ sung qua U1 |
| S2 | `TTSP - Xịt tóc gàu_Trần Dư.docx` | Thành phần, công dụng dự kiến, đối tượng, cách dùng, lưu ý, nơi sản xuất | Bản làm việc; trường TCCS/TNPCB và thương nhân chịu trách nhiệm trong tệp còn trống; TNPCB đã được bổ sung qua U1 |
| S3 | `Brand Guideline.md` | Định vị, nhận diện, triết lý hình ảnh, tone thương hiệu cấp cao | Có thể dùng làm nguồn cho thông tin thương hiệu, không phải bằng chứng hiệu quả sản phẩm |
| S4 | `Ưu điểm.md` | Diễn giải marketing về bộ đôi, Microbiome Care và Postbiotic | Tài liệu định hướng nội dung; không phải nguồn xác minh độc lập |
| S5 | `_web/index.html` | Nội dung website đang dùng | Đối tượng cần kiểm tra, không được dùng để tự chứng minh chính nó |
| S6 | Ảnh trong `Cavisi/Ảnh/` và `_web/assets/` | Minh họa hình ảnh | Có ảnh AI; không dùng làm bằng chứng kết quả thực tế |
| U1 | Dữ liệu do Du cung cấp ngày 12/09/2026 | Số tiếp nhận phiếu công bố của hai sản phẩm | Đã ghi nhận; chưa đối chiếu bản phiếu công bố gốc trong workspace |

### Số tiếp nhận phiếu công bố đã được cung cấp

| Sản phẩm | Số tiếp nhận phiếu công bố | Nguồn | Trạng thái |
|---|---|---|---|
| Cavisi Shampoo | `28338/26/CBMP-HN` | U1 | Đã có mã; chờ bản phiếu để xác minh tên sản phẩm, công dụng và thương nhân chịu trách nhiệm |
| Cavisi Spray | `28222/26/CBMP-HN` | U1 | Đã có mã; chờ bản phiếu để xác minh tên sản phẩm, công dụng và thương nhân chịu trách nhiệm |

Hai mã trên được phân loại là **số tiếp nhận phiếu công bố mỹ phẩm (TNPCB)** theo cấu trúc `CBMP-HN`. Chưa ghi nhận đây là mã TCCS; mã hoặc tệp TCCS vẫn cần được cung cấp riêng.

### Giới hạn kiểm tra

- Hai DOCX không có comments, tracked insertions hoặc tracked deletions trong cấu trúc tệp.
- Nội dung DOCX đã được đọc theo đúng thứ tự từ `document.xml`.
- Chưa xác minh bố cục hiển thị của DOCX vì môi trường render thiếu LibreOffice đóng gói. Giới hạn này không ảnh hưởng đến việc trích xuất nội dung dùng cho matrix.
- Chưa có trong workspace: bản phiếu công bố hoàn chỉnh tương ứng với hai số tiếp nhận đã cung cấp, TCCS hoàn chỉnh, COA, kết quả kiểm nghiệm, tài liệu chứng nhận nhà máy, hồ sơ pháp nhân chịu trách nhiệm, tài liệu khoa học được chọn làm nguồn công khai hoặc review khách hàng đã xác minh.

---

## 3. Thang trạng thái nội dung

| Trạng thái | Ý nghĩa | Cách dùng trên website |
|---|---|---|
| `GREEN` | Có dữ kiện trực tiếp trong nguồn sản phẩm/nguồn thương hiệu phù hợp | Có thể soạn nội dung, nhưng vẫn đối chiếu bao bì và hồ sơ cuối trước khi launch |
| `AMBER` | Có trong bản nháp hoặc tài liệu marketing nhưng cần nguồn, ngữ cảnh hay phê duyệt | Chỉ dùng ngôn ngữ thận trọng hoặc giữ ở trạng thái chờ duyệt |
| `RED` | Không có tài liệu hỗ trợ, dễ gây hiểu nhầm hoặc mang nghĩa điều trị/kết quả đảm bảo | Không công bố ở thời điểm hiện tại |
| `MISSING` | Dữ liệu nền chưa được cung cấp | Tạo empty state hoặc bỏ section cho đến khi có tài liệu |

---

## 4. Thứ bậc nguồn cho website

Khi các tài liệu khác nhau không đồng nhất, sử dụng thứ tự ưu tiên sau:

1. Phiếu công bố, nhãn được duyệt, TCCS và hồ sơ pháp lý cuối cùng.
2. Công thức/INCI, hướng dẫn sử dụng và tài liệu kỹ thuật đã được đơn vị chịu trách nhiệm xác nhận.
3. Báo cáo kiểm nghiệm, COA, chứng nhận và tài liệu nhà máy có thể kiểm tra.
4. Brand Guideline cho định vị và nhận diện.
5. Tài liệu marketing nội bộ cho cách diễn giải.
6. Nội dung website cũ và hình ảnh AI chỉ dùng làm tham khảo sáng tạo.

Nguồn cấp thấp không được dùng để xác nhận claim thuộc cấp cao hơn.

---

## 5. Ma trận thông tin Cavisi Shampoo

| Nội dung/claim | Nguồn hiện có | Trạng thái | Cách diễn đạt đề xuất | Việc cần làm trước launch |
|---|---|---|---|---|
| Sản phẩm là dầu gội dùng cho tóc và da đầu | S1 | GREEN | `Dầu gội chăm sóc tóc và da đầu` | Đối chiếu tên chính thức trên nhãn/phụ lục công bố |
| Làm sạch tóc và da đầu | S1 | GREEN | `Giúp làm sạch tóc và da đầu` | Giữ đúng động từ và phạm vi trên hồ sơ cuối |
| Làm sạch gàu và dầu nhờn trên da đầu | S1 | GREEN | `Giúp làm sạch gàu và dầu nhờn trên da đầu` | Xác nhận wording cuối trên phiếu công bố/nhãn |
| Có Salicylic Acid | S1 | GREEN | Hiển thị trong danh sách thành phần và giải thích vai trò sau khi được duyệt | Xác minh tên INCI và nội dung giải thích thành phần |
| Có Climbazole | S1 | GREEN | Hiển thị trong danh sách thành phần và giải thích vai trò sau khi được duyệt | Xác minh nồng độ/giới hạn nếu định nói sâu về cơ chế |
| Có Hexamidine Diisethionate | S1 | GREEN | Hiển thị trong danh sách thành phần | Kiểm tra chính tả INCI nhất quán |
| Có Lactobacillus/Salix Purpurea Bark Ferment Extract | S1 | GREEN | `Công thức có thành phần Lactobacillus/Salix Purpurea Bark Ferment Extract` | Không tự suy rộng thành hiệu quả microbiome nếu chưa có nguồn |
| Làm sạch tế bào chết bề mặt | S1 không ghi trực tiếp; S4 diễn giải từ Salicylic Acid | AMBER | Chưa dùng như công dụng sản phẩm; có thể giải thích thành phần ở trang khoa học sau duyệt | Cần căn cứ kỹ thuật và phê duyệt claim |
| Cơ chế làm sạch đa tầng | S4 | AMBER | Có thể dùng như mô hình diễn giải thương hiệu, không trình bày là cơ chế đã kiểm nghiệm | Định nghĩa rõ từng “tầng” và nguồn hỗ trợ |
| Ngăn ngừa/cải thiện ngứa do gàu | S1 bản nháp | AMBER | Không đưa lên homepage; chỉ cân nhắc khi wording được duyệt chính thức | Đối chiếu phiếu công bố và tư vấn pháp lý |
| Ngăn ngừa/cải thiện tóc gãy, rụng | S1 bản nháp | RED | Không công bố hiện tại | Cần hồ sơ pháp lý và bằng chứng phù hợp; xem xét loại khỏi định vị |
| Cho tóc chắc khỏe hơn | S1 bản nháp | AMBER | Không dùng làm thông điệp chính của Cavisi | Xác nhận wording trên hồ sơ cuối |
| Trị gàu/chữa gàu | Tên tệp dùng từ “trị gàu”, nhưng chưa có hồ sơ cuối | RED | Dùng `làm sạch gàu` hoặc wording được duyệt, không dùng `điều trị/chữa` | Chốt tên sản phẩm và claim pháp lý chính thức |

### Cách dùng Shampoo có thể trình bày

Nguồn S1 hỗ trợ chuỗi hướng dẫn cơ bản:

1. Làm ướt tóc.
2. Lấy lượng sản phẩm vừa đủ.
3. Tạo bọt và massage nhẹ trên da đầu.
4. Xả kỹ bằng nước sạch.

Không thêm thời gian massage, tần suất hoặc hướng dẫn “lặp lại nếu cần” nếu chưa được đơn vị chịu trách nhiệm xác nhận.

---

## 6. Ma trận thông tin Cavisi Spray

| Nội dung/claim | Nguồn hiện có | Trạng thái | Cách diễn đạt đề xuất | Việc cần làm trước launch |
|---|---|---|---|---|
| Sản phẩm là xịt dưỡng tóc/da đầu | S2 | GREEN | `Xịt dưỡng dùng trực tiếp trên tóc và da đầu` | Chốt tên sản phẩm chính thức trên nhãn/phụ lục công bố |
| Dưỡng ẩm và làm thơm tóc | S2 | GREEN | `Giúp dưỡng ẩm và làm thơm tóc` | Đối chiếu wording cuối |
| Có Zinc PCA | S2 | GREEN | Hiển thị trong danh sách thành phần | Chỉ mô tả công dụng thành phần khi có nguồn và duyệt |
| Có O-Cymen-5-Ol | S2 | GREEN | Hiển thị trong danh sách thành phần | Kiểm tra tên INCI và phê duyệt phần giải thích |
| Có Lactobacillus/Salix Purpurea Bark Ferment Extract | S2 | GREEN | `Công thức có thành phần Lactobacillus/Salix Purpurea Bark Ferment Extract` | Không suy rộng sang hiệu quả microbiome khi chưa có tài liệu |
| Có rosemary oil, aloe vera và grapefruit peel oil theo INCI | S2 | GREEN | Có thể hiển thị trong danh sách thành phần đầy đủ | Dùng đúng tên INCI; tránh gán công dụng riêng thiếu nguồn |
| Dùng sau khi tóc gần khô | S2 | GREEN | `Nên dùng mỗi ngày sau khi sấy tóc gần khô` | Xác nhận “mỗi ngày” trong hướng dẫn cuối |
| Xịt trực tiếp lên da đầu, vùng nhiều gàu/ngứa | S2 | GREEN | Dùng trong hướng dẫn chi tiết | Xác nhận wording cuối, tránh ngụ ý điều trị vùng bệnh |
| Khoảng cách xịt 10-15 cm | S2 | GREEN | Dùng con số chính xác trong hướng dẫn | Đồng bộ ký hiệu và dấu câu trên nhãn/web |
| Không cần xả lại | Không ghi trực tiếp trong S2; được diễn giải trong S4/S5 | AMBER | Chỉ dùng sau khi nhà sản xuất/đơn vị chịu trách nhiệm xác nhận | Bổ sung rõ vào hướng dẫn sử dụng chính thức nếu đúng |
| Là sản phẩm leave-on | S4/S5, suy ra từ cách dùng nhưng S2 không nói trực tiếp | AMBER | Có thể dùng như thuật ngữ giải thích sau xác nhận | Xác nhận sản phẩm được thiết kế để lưu lại, không cần xả |
| Bổ sung Postbiotic | S4; S2 chỉ xác nhận thành phần ferment extract | AMBER | `Có thành phần từ quá trình lên men` an toàn hơn ở thời điểm hiện tại | Cần tài liệu nguyên liệu xác nhận phân loại Postbiotic |
| Hỗ trợ môi trường/hệ vi sinh da đầu cân bằng | S3/S4/S5 | AMBER | Giữ ở cấp độ triết lý thương hiệu, không trình bày là kết quả sản phẩm đã chứng minh | Cần nguồn khoa học, hồ sơ nguyên liệu và phê duyệt claim |
| Ngăn ngừa/cải thiện ngứa do gàu | S2 bản nháp | AMBER | Không đưa lên homepage; cân nhắc sau duyệt | Đối chiếu phiếu công bố và tư vấn pháp lý |
| Phục hồi tóc hư tổn, ngăn ngừa gãy rụng | S2 bản nháp | RED | Không công bố hiện tại | Cần hồ sơ pháp lý và bằng chứng phù hợp |
| Thẩm thấu sâu | S2 trong cách dùng | AMBER | Nên đổi thành `massage nhẹ để sản phẩm phân bố đều` | Tránh tuyên bố mức độ thẩm thấu khi không có dữ liệu |

### Cách dùng Spray có thể trình bày sau khi xác nhận leave-on

1. Lắc đều chai.
2. Đặt sản phẩm cách tóc khoảng 10-15 cm.
3. Xịt trực tiếp lên da đầu, tập trung vào khu vực cần chăm sóc.
4. Massage nhẹ để sản phẩm phân bố đều.
5. Dùng sau khi tóc gần khô.

`Không cần xả lại` và `dùng mỗi ngày` cần xuất hiện nhất quán trong hướng dẫn chính thức trước khi được nhấn mạnh trên website.

---

## 7. Ma trận định vị và nội dung khoa học

| Nội dung | Nguồn hiện có | Trạng thái | Quy tắc sử dụng |
|---|---|---|---|
| `Cân bằng hệ vi sinh da đầu - Khỏe mạnh từ gốc rễ` | S3 | GREEN cho định vị | Dùng như câu định vị thương hiệu, không biến thành cam kết kết quả cho mọi người dùng |
| Scalp-first | S3 | GREEN cho triết lý | Giải thích là cách Cavisi tiếp cận chăm sóc tóc từ da đầu |
| Balance thay vì tẩy rửa quá mức | S3/S4 | GREEN cho triết lý, AMBER cho so sánh hiệu quả | Không nói Cavisi “không tẩy rửa” hoặc đối thủ “tẩy rửa thô bạo” nếu không có căn cứ |
| Science x Nature | S3 | GREEN cho nguyên tắc thương hiệu | Thể hiện bằng ngôn ngữ và hình ảnh; không dùng thay cho chứng cứ khoa học cụ thể |
| Shampoo rinse-off + Spray leave-on | S4/S5 và cách dùng S1/S2 | AMBER | Mô hình hợp lý nhưng cần xác nhận chính thức Spray không cần xả |
| Postbiotic không phải vi khuẩn sống | S4/S5 | AMBER | Cần trích nguồn khoa học/nhà cung cấp nguyên liệu trước khi đưa vào trang Bằng chứng |
| Ferment extract trong cả Shampoo và Spray | S1/S2 | GREEN | Có thể công khai từ INCI; không tự suy luận hiệu quả hệ vi sinh |
| Postbiotic hỗ trợ cân bằng hệ vi sinh da đầu | S4/S5 | AMBER | Chưa trình bày như claim đã chứng minh cho thành phẩm Cavisi |
| Da đầu là môi trường sống của hệ vi sinh | S4 | AMBER | Có thể dùng sau khi chọn nguồn khoa học đáng tin cậy và ghi tài liệu tham khảo |
| Gàu/dầu nhờn xuất hiện khi microbiome mất cân bằng | S4/S5 | RED ở dạng khẳng định nhân quả | Viết thận trọng, tránh đơn giản hóa nguyên nhân; cần nguồn y khoa/khoa học phù hợp |
| Chu trình hai bước là “tiêu chuẩn mới” | S4 | RED | Thay bằng `cách tiếp cận hai bước của Cavisi` |
| Công nghệ/tiêu chuẩn European-grade hoặc EU Standard | Chỉ thấy trên hình bao bì/creative hiện tại, không có hồ sơ trong workspace | RED | Không nhấn mạnh hoặc giải thích trên website cho đến khi có tài liệu chứng minh và quyền sử dụng claim |

---

## 8. Bộ nội dung trust-first được phép phát triển ngay

### Homepage

- Cavisi là thương hiệu chăm sóc da đầu theo định hướng Microbiome Care.
- Triết lý Scalp-first, Balance và Science x Nature từ Brand Guideline.
- Bộ đôi gồm Shampoo và Spray, mỗi sản phẩm có một vai trò khác nhau.
- Shampoo là bước làm sạch tóc, da đầu, gàu và dầu nhờn theo TTSP hiện có.
- Spray là bước chăm sóc dùng trực tiếp trên tóc/da đầu sau khi tóc gần khô.
- Danh sách thành phần nổi bật có mặt trong INCI, không gán thêm hiệu quả chưa có nguồn.
- Cam kết giao tiếp: rõ vai trò, rõ nguồn, rõ giới hạn.

### Trang sản phẩm

- INCI đầy đủ.
- Công dụng và hướng dẫn bám sát wording đã được duyệt.
- Đối tượng sử dụng và lưu ý mẫn cảm thành phần.
- Nơi sản xuất sau khi xác minh tên/địa chỉ hiện hành.
- Ngày cập nhật thông tin và phiên bản tài liệu nguồn.

### Trang thương hiệu

- Định vị, ý nghĩa logo và ba nguyên tắc thương hiệu.
- Cách Cavisi lựa chọn ngôn ngữ thận trọng, không hứa hẹn điều trị.
- Founder story chỉ khi có dữ liệu do Cavisi cung cấp và xác nhận.

### Trang Bằng chứng ở trạng thái hiện tại

Có thể xuất bản một trang minh bạch dạng `Evidence status`, không giả lập bằng chứng chưa tồn tại:

- `Thành phần sản phẩm`: có danh sách INCI nội bộ, chờ đối chiếu hồ sơ cuối.
- `Thông tin sản xuất`: có tên và địa chỉ nơi sản xuất trong TTSP, chờ xác minh hồ sơ chính thức.
- `Kiểm nghiệm thành phẩm`: chưa có tài liệu trong bộ nguồn hiện tại.
- `Cơ sở khoa học Postbiotic/Microbiome`: chưa chọn nguồn công khai.
- `Kết quả người dùng`: chưa có dữ liệu xác minh.

Không nên tạo badge `Đã kiểm nghiệm`, `Đạt chuẩn EU`, `Clinical`, `Dermatologist tested` hoặc số liệu hiệu quả khi chưa có tài liệu tương ứng.

---

## 9. Ngôn ngữ website theo mức rủi ro

### Nên dùng

- `giúp làm sạch`
- `chăm sóc`
- `hỗ trợ duy trì`
- `có chứa/công thức có thành phần`
- `được thiết kế cho bước...`
- `theo định hướng Microbiome Care`
- `thông tin đang được hoàn thiện/xác minh`
- `kết quả trải nghiệm có thể khác nhau`

### Chỉ dùng sau khi có nguồn và phê duyệt

- `Postbiotic`
- `hỗ trợ cân bằng hệ vi sinh`
- `không cần xả lại`
- `ngăn ngừa/cải thiện`
- `phục hồi`
- `an toàn`
- `đã kiểm nghiệm`
- `đạt chuẩn`
- `hiệu quả sau X ngày`

### Không dùng trong phiên bản hiện tại

- `điều trị`, `chữa khỏi`, `trị dứt điểm`
- `loại bỏ nguyên nhân gàu`
- `khôi phục hệ vi sinh`
- `cam kết hiệu quả`
- `an toàn tuyệt đối`
- `phù hợp cho mọi loại da đầu`
- `tiêu chuẩn mới` nếu không có cơ sở so sánh thị trường
- claim EU/clinical/dermatologist chưa có tài liệu

---

## 10. Ma trận tài liệu tạo niềm tin còn thiếu

| Ưu tiên | Tài liệu/dữ liệu cần có | Dùng để xác minh | Trạng thái hiện tại |
|---|---|---|---|
| P0 | Bản phiếu công bố mỹ phẩm hoàn chỉnh của từng sản phẩm | Xác minh tên, công dụng và đơn vị chịu trách nhiệm theo số tiếp nhận đã có | PARTIAL - đã có `28338/26/CBMP-HN` cho Shampoo và `28222/26/CBMP-HN` cho Spray; chưa có bản phiếu |
| P0 | Nhãn/artwork bao bì cuối đã duyệt | Tên sản phẩm, INCI, cách dùng, cảnh báo, claim trên bao bì | MISSING |
| P0 | TCCS hoàn chỉnh | Chỉ tiêu chất lượng và tiêu chuẩn cơ sở | MISSING |
| P0 | Thông tin thương nhân chịu trách nhiệm | Danh tính pháp nhân và kênh xác minh | MISSING |
| P0 | Xác nhận hướng dẫn Spray không cần xả lại | Cơ sở cho thuật ngữ leave-on và routine 2 bước | MISSING |
| P1 | COA/phiếu kiểm nghiệm thành phẩm | Các chỉ tiêu đã kiểm tra và đơn vị thực hiện | MISSING |
| P1 | Hồ sơ/chứng nhận nhà máy được phép công bố | Thông tin sản xuất và tiêu chuẩn nhà máy | MISSING |
| P1 | TDS/specification của Lactobacillus/Salix Purpurea Bark Ferment Extract | Thành phần, phân loại Postbiotic và công dụng nguyên liệu | MISSING |
| P1 | Tài liệu khoa học được chuyên môn duyệt | Giải thích scalp microbiome và Postbiotic | MISSING |
| P1 | Claim matrix được duyệt | Từ ngữ nào dùng ở homepage/product/evidence | MISSING |
| P2 | Review/khảo sát người dùng có consent và phương pháp | Social proof có thể xác minh | MISSING |
| P2 | Founder story và hồ sơ đội ngũ | Tăng tính người thật và trách nhiệm thương hiệu | MISSING |

---

## 11. Ma trận nội dung theo trang

| Trang | Câu hỏi niềm tin cần trả lời | Nội dung đã có | Nội dung đang thiếu |
|---|---|---|---|
| Homepage | Cavisi là ai và khác ở góc nhìn nào? | Định vị, triết lý, bộ đôi, hình ảnh | Proof cue có nguồn và danh tính pháp nhân |
| Cơ chế | Hai bước và Microbiome Care nghĩa là gì? | Narrative trong S3/S4, INCI ferment extract | Nguồn khoa học, TDS nguyên liệu, wording được duyệt |
| Bộ đôi | Vai trò của Shampoo và Spray khác nhau thế nào? | Công dụng/cách dùng S1/S2 | Xác nhận leave-on và claim hệ thống hai bước |
| Shampoo | Công thức, cách dùng, lưu ý là gì? | INCI, công dụng dự kiến, cách dùng, nơi sản xuất | Hồ sơ công bố/nhãn/TCCS cuối |
| Spray | Công thức, cách dùng, lưu ý là gì? | INCI, công dụng dự kiến, cách dùng, nơi sản xuất | Hồ sơ công bố/nhãn/TCCS cuối; xác nhận không xả lại |
| Bằng chứng | Cavisi dựa trên nguồn nào? | Có thể công khai trạng thái tài liệu | Tất cả hồ sơ P0/P1 quan trọng |
| Thương hiệu | Ai đứng sau và nguyên tắc làm việc là gì? | Brand Guideline | Pháp nhân, founder/đội ngũ, quy trình trách nhiệm |
| Liên hệ | Kênh nào là chính thức? | Hotline, Zalo, email đang có trên web | Xác nhận quyền sở hữu, địa chỉ pháp nhân, chính sách hỗ trợ |

---

## 12. Quy tắc trình bày nguồn trên website

- Mỗi nội dung bằng chứng có: tên tài liệu, đơn vị phát hành, ngày, phạm vi và trạng thái.
- Phân biệt rõ `Bằng chứng cho thành phẩm`, `Thông tin nguyên liệu` và `Nguồn khoa học nền`.
- Không dùng nghiên cứu của một nguyên liệu để tuyên bố thành phẩm đạt cùng kết quả.
- Không dùng chứng nhận nhà máy để suy ra hiệu quả sản phẩm.
- Link/tệp nguồn phải mở được, có tiêu đề rõ và không che phần giới hạn/phương pháp.
- Nội dung đang thiếu được ghi `Chưa công bố` hoặc không hiển thị; không dùng placeholder tạo cảm giác sắp có kết quả chắc chắn.
- Cập nhật `Ngày rà soát gần nhất` cho trang Bằng chứng.

---

## 13. Việc cần Cavisi xác nhận

### Bắt buộc trước khi viết nội dung production

1. Tên chính thức của hai sản phẩm trên phiếu công bố.
2. Bản phiếu công bố tương ứng với `28338/26/CBMP-HN` và `28222/26/CBMP-HN`, cùng mã/tệp TCCS riêng của từng sản phẩm.
3. Tên, mã số thuế, địa chỉ và vai trò của thương nhân chịu trách nhiệm.
4. INCI và artwork bao bì cuối có trùng với hai TTSP hiện tại không.
5. Spray có chính thức là leave-on và không cần xả lại không.
6. Claim nào đã được phép dùng trên nhãn/quảng cáo.
7. Căn cứ cho dấu/claim `EU Standard` hoặc `European-grade` trên creative/bao bì.
8. Tài liệu nào được phép tải công khai và tài liệu nào chỉ được tóm tắt.

### Nên có để website tạo uy tín mạnh

1. Tài liệu nhà máy và quy trình kiểm soát chất lượng.
2. COA/kiểm nghiệm từng sản phẩm.
3. Hồ sơ nguyên liệu ferment extract.
4. Nguồn khoa học về scalp microbiome/Postbiotic đã được chuyên môn chọn.
5. Founder story hoặc giới thiệu người phụ trách sản phẩm.
6. Chính sách phản hồi khi khách hàng có dấu hiệu kích ứng.

---

## 14. Bước triển khai kế tiếp

Trong khi chờ hồ sơ P0, có thể bắt đầu wireframe trust-first với các nguyên tắc:

- Homepage dùng nội dung GREEN và nội dung định vị từ Brand Guideline.
- Trang sản phẩm dùng INCI/cách dùng nhưng gắn trạng thái `Chờ đối chiếu hồ sơ cuối` trong bản nội bộ, không hiển thị nhãn này trên production.
- Trang Cơ chế chỉ dựng cấu trúc; phần khoa học để placeholder nội bộ, chưa viết claim chắc chắn.
- Trang Bằng chứng thiết kế theo trạng thái thật: tài liệu nào chưa có thì không tạo badge xác minh.
- Loại khối Before/After AI khỏi luồng tạo niềm tin.

Đầu ra tiếp theo nên là wireframe nội dung cho **Homepage** và **Bằng chứng & Minh bạch**, sử dụng chính matrix này làm tiêu chuẩn kiểm soát claim.
