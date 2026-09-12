# Cavisi Website - UX/UI Masterplan v3

**Phạm vi:** đánh giá `Cavisi_Website_Masterplan_v2.md`, mẫu website trong `cavisi-website_2.zip`, landing page tại `_web/` và Brand Guideline Cavisi.

**Mục tiêu:** xây dựng website thương hiệu giúp Cavisi tạo uy tín và niềm tin bằng định vị rõ ràng, thông tin minh bạch, cơ sở khoa học dễ kiểm chứng và cách giao tiếp có trách nhiệm. Website không được tổ chức như một sales funnel và không lấy chuyển đổi mua hàng làm mục tiêu chính.

**Trạng thái tài liệu:** plan UX/UI đề xuất, chưa phải xác nhận đã triển khai.

**Đặc tả triển khai liên quan:** `Cavisi_Trust_Content_Matrix.md` kiểm soát nguồn/claim; `Cavisi_Wireframe_Home_Evidence.md` là wireframe nội dung cho Homepage và trang Bằng chứng & Minh bạch.

---

## 1. Kết luận điều hành

Chọn mô hình **website thương hiệu nhiều trang: homepage định vị + hệ trang chuyên sâu**.

- Dùng `_web` làm chuẩn visual direction: giàu hình ảnh, cá tính, đúng tinh thần Science x Nature.
- Dùng ZIP làm nền kiến trúc thông tin: route riêng cho sản phẩm, cơ chế, bằng chứng, thương hiệu và liên hệ.
- Không dùng nguyên trạng bản nào. Landing hiện tại quá dài và có rủi ro claim/bằng chứng; ZIP hiện mới ở mức wireframe, chưa đạt chất lượng thương hiệu hoặc mobile UX.
- Trục kể chuyện chính phải là: **Cavisi là ai -> Cavisi nhìn nhận da đầu như thế nào -> hệ chăm sóc hai bước hoạt động ra sao -> cơ sở và nguồn nào hỗ trợ thông tin -> thương hiệu giao tiếp có trách nhiệm như thế nào.**
- Hành động chính trên website là **tìm hiểu và kiểm chứng**: `Hiểu cơ chế`, `Xem sản phẩm`, `Xem nguồn và bằng chứng`. Liên hệ hoặc nơi mua là tiện ích phụ, không phải điểm nhấn lặp lại trên mọi màn hình.

### Quyết định quan trọng

1. **Bộ đôi là sản phẩm chủ lực**, Shampoo và Spray là hai nhiệm vụ trong cùng một hệ thống, không trình bày như hai SKU ngang hàng thiếu liên kết.
2. **Homepage không chứa toàn bộ nội dung của 7-8 trang.** Homepage chỉ kể câu chuyện đủ để hiểu và chuyển tiếp đến trang chi tiết.
3. **Không dùng ảnh AI Before/After như bằng chứng hiệu quả.** Nếu giữ, phải đổi tên thành “Minh họa tình trạng”, đặt ngoài trang Bằng chứng và hiển thị disclaimer ngay tại ảnh.
4. **Trang Bằng chứng chỉ xuất bản dữ liệu có nguồn.** Trạng thái “đang kiểm nghiệm/đang cập nhật” phải trung tính, không tạo cảm giác đã chứng minh hiệu quả.
5. **Giữ Clash Display + Inter và bảng màu Cavisi.** Không thay bằng font/palette chung từ công cụ gợi ý vì Brand Guideline là nguồn ưu tiên cao hơn.
6. **Không dùng pressure pattern.** Không countdown, popup thúc mua, CTA cố định lặp lại, claim phóng đại hoặc bố cục giả khan hiếm.

---

## 2. Đánh giá plan v2

### Điểm tốt

- Đã xác định các nhóm nội dung quan trọng: cơ chế, sản phẩm, bằng chứng, thương hiệu, liên hệ.
- Có ý thức không bịa dữ liệu kiểm nghiệm và founder story.
- Đã ghi nhận vấn đề tương phản của Neutral Grey.
- Có định hướng component dùng chung, token, font và asset folder.

### Vấn đề cần sửa

| Mức độ | Vấn đề | Tác động | Hướng xử lý |
|---|---|---|---|
| Critical | Ghi “7/7 trang” nhưng sitemap thực tế có 8 trang gồm homepage | Sai phạm vi, khó estimate và QA | Chốt sitemap theo route, đếm lại template/page |
| High | Plan thiên về trạng thái build, chưa có hành trình xây dựng niềm tin | Có trang nhưng chưa tạo được nhận thức thương hiệu có hệ thống | Bổ sung luồng Orient -> Understand -> Verify -> Remember |
| High | Chưa định nghĩa vai trò riêng của homepage và các trang chi tiết | Dễ lặp nội dung, homepage quá dài | Xác định câu hỏi niềm tin mà từng trang phải trả lời |
| High | Thiếu responsive behavior cụ thể | Mobile dễ vỡ nav, crop chữ, nút cố định đè nội dung | Quy định breakpoint, thứ tự nội dung và navigation rõ ràng |
| High | “Bằng chứng” chưa có taxonomy nguồn | Dễ trộn chứng nhận, thành phần, ảnh AI và kết quả người dùng | Chia Proof thành hồ sơ sản xuất, công thức, kiểm nghiệm, review xác minh |
| Medium | Chưa có component inventory và state | Khó triển khai đồng nhất | Xây danh mục component, variant và trạng thái tương tác |
| Medium | Chưa có content/claim governance | Rủi ro ngôn ngữ gần claim điều trị | Thiết lập danh sách từ được dùng, cần duyệt và không dùng |
| Medium | Chưa có KPI hoặc acceptance criteria | Không biết khi nào thiết kế “đạt” | Thêm tiêu chí UX, accessibility, mức độ tìm hiểu và tín hiệu tin cậy |

---

## 3. Đánh giá hai mẫu hiện có

### 3.1 Landing page `_web`

**Điểm mạnh**

- Visual identity rõ: Science Blue, Fresh Aqua, Clash Display, capsule/halo và ảnh người mẫu tạo dấu ấn riêng.
- Hero thể hiện ngay sản phẩm và định vị; mạnh hơn rõ rệt so với hero placeholder trong ZIP.
- Storytelling “sau khi tắt vòi nước” và cặp Rinse-off + Leave-on diễn đạt khác biệt sản phẩm tốt.
- Có skip link, menu semantics và hỗ trợ reduced-motion.
- Các section sản phẩm, routine, science và FAQ đã hình thành một hệ visual tương đối nhất quán.

**Điểm cần sửa**

- Mobile hero bị cắt ngang headline do cỡ chữ lớn kết hợp `overflow-x: clip`; câu chủ đạo không đọc trọn vẹn ở viewport 390px.
- Body text mobile đang 14px ở nhiều nơi; mục tiêu nên là 16px cho nội dung chính.
- Homepage có 11 section + khối kêu gọi hành động cuối trang, tạo tải nhận thức và chiều dài lớn; nhiều nội dung nên chuyển sang route chi tiết.
- Before/After dùng ảnh AI dù có disclaimer vẫn dễ bị hiểu là chứng minh hiệu quả; không phù hợp với định hướng “Bằng chứng”.
- Một số caption/label 7-10px quá nhỏ, không phù hợp nội dung cần đọc.
- `Fresh Aqua` trên nền trắng chỉ đạt khoảng **1.84:1**; chỉ dùng trang trí hoặc text lớn trên nền tối, không dùng cho text nhỏ.
- `#60767C` trên `#F6F8F3` đạt khoảng **4.48:1**, sát/ngay dưới ngưỡng 4.5:1 do làm tròn; nên đổi text phụ sang `#566A72` hoặc tối hơn.
- Ảnh dưới fold cần `loading="lazy"`, khai báo kích thước/aspect ratio và responsive source để giảm tải/CLS.
- Mobile sticky bar mang tính bán hàng không phù hợp mục tiêu trust-first; nên loại bỏ hoặc thay bằng utility contact không cố định.

### 3.2 Website 7/8 trang trong ZIP

**Điểm mạnh**

- Có cấu trúc URL riêng, tốt hơn cho SEO, quảng cáo và deep link.
- Nội dung từng trang có mục tiêu tương đối rõ; trang Shampoo/Spray/Cơ chế đã phân tách hợp lý.
- Có design tokens, font local và tinh thần không tạo số liệu giả.
- Copy trang chủ bắt đầu từ pain point, có khả năng thu hút nhóm người dùng đã thử nhiều sản phẩm.

**Điểm cần sửa**

- Khi render đúng web root, giao diện vẫn mang tính wireframe: quá nhiều khoảng trắng, ít nhịp thị giác, thiếu hình ảnh và điểm neo.
- Logo hiển thị quá nhỏ; header desktop/mobile thiếu cân bằng và thứ bậc điều hướng chưa rõ.
- Mobile nav vỡ: chỉ hiện một phần menu, không có menu drawer/hamburger hoạt động rõ ràng.
- Hero placeholder chiếm phần lớn first viewport nhưng không tạo giá trị khi chưa có ảnh.
- Các link “đọc thêm” chưa tạo thành đường tìm hiểu logic từ định vị đến cơ chế, nguồn và bằng chứng.
- Component include bằng JavaScript làm nội dung header/footer phụ thuộc runtime; cần đảm bảo graceful fallback và đường dẫn tương đối/hosting phù hợp.
- Trang chủ chưa cho thấy sản phẩm thật ngay first fold, làm giảm nhận diện và độ tin cậy.
- Thiếu proof cue sớm: nguồn gốc công thức, minh bạch thành phần, quy trình sản xuất hoặc trạng thái kiểm nghiệm.

---

## 4. Đối tượng và nhu cầu người dùng

### Nhóm chính: người có gàu/dầu tái diễn

- Bối cảnh: đã đổi nhiều dầu gội, hoài nghi quảng cáo, muốn giải pháp dễ hiểu và dễ dùng.
- Câu hỏi: “Khác dầu gội trị gàu thông thường ở đâu?”, “Spray có cần thiết không?”, “Bao lâu dùng?”, “Có an toàn không?”
- Nhu cầu thông tin: nhận ra Cavisi khác gì, hiểu cơ chế trong 30-60 giây, kiểm tra cách dùng và xác định thông tin có đáng tin hay không.

### Nhóm phụ: người quan tâm chăm sóc da đầu chủ động

- Bối cảnh: quan tâm skincare/haircare, dễ tiếp nhận khái niệm microbiome và leave-on.
- Câu hỏi: “Postbiotic là gì?”, “Có giống toner cho da đầu không?”, “Thành phần nào nổi bật?”
- Nhu cầu thông tin: đọc khoa học, xem thành phần, hiểu đúng Postbiotic và có nội dung đủ rõ để lưu hoặc chia sẻ.

### Nhóm cần tạo niềm tin: người thận trọng với claim

- Bối cảnh: quan tâm nguồn gốc, kiểm nghiệm, hồ sơ sản xuất và ngôn ngữ có trách nhiệm.
- Câu hỏi: “Dữ liệu ở đâu?”, “Ảnh có phải khách hàng thật?”, “Đây là mỹ phẩm hay thuốc?”
- Nhu cầu thông tin: kiểm tra nguồn, ngày cập nhật, disclaimer, FAQ và danh tính/kênh liên hệ chính thức của thương hiệu.

---

## 5. Kiến trúc thông tin đề xuất

### Sitemap

```text
/
├── /co-che/                 Microbiome, rinse-off/leave-on, Postbiotic
├── /san-pham/               Bộ đôi và lựa chọn sản phẩm
│   ├── /san-pham/shampoo/   Vai trò làm sạch nền
│   └── /san-pham/spray/     Vai trò chăm sóc tiếp nối
├── /bang-chung/             Nguồn, hồ sơ, kiểm nghiệm, review xác minh
├── /thuong-hieu/            Định vị, nguyên tắc, câu chuyện thương hiệu
└── /lien-he/                Danh tính pháp nhân, kênh chính thức, hỗ trợ
```

Tổng cộng: **8 trang** tính cả homepage và trang danh sách sản phẩm.

### Navigation desktop

- Logo -> Trang chủ
- Cơ chế
- Sản phẩm (dropdown: Bộ đôi, Shampoo, Spray)
- Bằng chứng
- Thương hiệu
- Nav emphasis: **Bằng chứng & Minh bạch** để đưa người dùng đến khu vực xác minh quan trọng nhất

“Liên hệ” có thể đặt ở footer hoặc utility navigation. Header không cần nút mua nổi bật; ưu tiên điều hướng cân bằng giữa Cơ chế, Sản phẩm, Bằng chứng và Thương hiệu.

### Navigation mobile

- Header: logo + nút menu 44x44px.
- Drawer full-screen: 5 mục chính, thông tin hotline/Zalo phía dưới.
- Không dùng sticky sales bar. Chỉ cân nhắc thanh tiện ích liên hệ khi có nhu cầu hỗ trợ thực tế và không để nó che nội dung.
- Các link trong drawer có cùng trọng lượng; “Bằng chứng & Minh bạch” có thể được đánh dấu nhẹ bằng border hoặc label, không tạo cảm giác quảng cáo.

---

## 6. Hành trình xây dựng niềm tin

```text
Search / Social / Giới thiệu / Bao bì
          |
          v
 Homepage hoặc trang nội dung chuyên sâu
          |
          +--> Orient: Cavisi là ai và đang nói về điều gì?
          |
          +--> Understand: Vì sao là Shampoo + Spray và Microbiome Care?
          |
          +--> Verify: Nguồn, thành phần, hồ sơ và giới hạn của thông tin ở đâu?
          |
          +--> Remember: Ghi nhớ Cavisi là thương hiệu khoa học, minh bạch và có trách nhiệm
```

### Nguyên tắc điều hướng hành động

- Nút/link phải mô tả chính xác nội dung đích: `Hiểu cơ chế 2 bước`, `Xem thành phần`, `Xem hồ sơ minh bạch`.
- Không cần một primary CTA mang tính bán hàng trên mọi viewport hoặc section.
- `Liên hệ`, `Zalo` và `Nơi mua chính thức` đặt ở vị trí dễ tìm nhưng có trọng lượng thị giác thứ cấp.
- Không dùng popup, scarcity, countdown hoặc thanh mua cố định để ép hành động.
- Chỉ đo hành vi đọc và tìm hiểu ở mức cần thiết; không biến website thành hệ thống retargeting dày đặc.

---

## 7. Homepage blueprint

Mục tiêu homepage: trong 90 giây, người dùng hiểu Cavisi là thương hiệu gì, triết lý hai bước có cơ sở ra sao và có thể tự kiểm tra thông tin quan trọng ở đâu.

### 1. Header

- Trong suốt trên hero, chuyển nền sáng khi scroll.
- Logo đúng vùng an toàn, chiều rộng desktop khoảng 128-148px; mobile 108-120px.
- Header không cần CTA bán hàng nổi bật; menu keyboard-accessible, có focus ring rõ và làm nổi nhẹ mục `Bằng chứng`.

### 2. Hero - Promise + Product

- Eyebrow: `SCALP MICROBIOME CARE`.
- H1: `Cân bằng hệ vi sinh. Khỏe mạnh từ gốc rễ.`
- Supporting copy tối đa 2-3 dòng, nhấn “Shampoo + Spray tiếp nối chăm sóc sau khi gội”.
- Visual: người mẫu + bộ đôi hoặc packshot studio; luôn thấy cả Shampoo và Spray.
- Link chính: `Hiểu triết lý 2 bước`.
- Link phụ: `Xem bộ đôi Cavisi`.
- Trust microcopy dưới nhóm link: `Rinse-off + Leave-on` / `Postbiotic` / `Chu trình 2 bước`.
- Mobile: H1 tối đa khoảng 48-56px, không vượt viewport; ảnh bắt đầu xuất hiện trong hoặc ngay sau first screen.

### 3. Problem insight - Sau khi tắt vòi nước

- Một headline, một đoạn giải thích ngắn, timeline 3 bước.
- Không dùng copy đổ lỗi “mọi sản phẩm khác giải quyết sai chỗ”. Dùng ngôn ngữ cân bằng: dầu gội có giới hạn tự nhiên vì là sản phẩm rửa trôi.
- Context link: `Xem giải thích đầy đủ`.

### 4. Two-step system - Core value proposition

- Hai card liên kết trực quan bằng dấu `+` hoặc đường chu trình.
- Shampoo: làm sạch nền / rinse-off.
- Spray: chăm sóc tiếp nối / leave-on.
- Context link: `Tìm hiểu vai trò từng sản phẩm`.
- Link phụ trên từng card đến trang sản phẩm chi tiết.

### 5. How it works - Science made simple

- Minh họa 3 bước: Làm sạch tích tụ -> bổ sung chăm sóc leave-on -> hỗ trợ môi trường da đầu cân bằng.
- Giải thích rõ Postbiotic không phải vi khuẩn sống.
- Không dùng animation phân tử dày đặc; ưu tiên diagram brand mark/capsule có nhãn.
- Context link: `Đọc về Microbiome Care`.

### 6. Proof preview - Minh bạch trước

- Chỉ hiển thị 3-4 proof card có trạng thái rõ:
  - Hồ sơ/tiêu chuẩn sản xuất.
  - Danh sách thành phần công khai.
  - Cơ sở khoa học của thành phần.
  - Kiểm nghiệm sản phẩm (chỉ khi có tài liệu).
- Mỗi card có `Nguồn`, `Ngày cập nhật`, `Xem chi tiết`.
- Không đặt ảnh AI Before/After tại đây.

### 7. Routine - Hai bước dễ duy trì

- Dạng 2 card hoặc timeline, mỗi bước có ảnh thao tác thật.
- Copy ngắn, có “không cần xả lại” cho Spray.
- Link đến hướng dẫn chi tiết và lưu ý sử dụng.

### 8. FAQ

- 5-7 câu quan trọng nhất, mặc định đóng.
- Bao gồm: Spray có thay dầu gội không; Postbiotic là gì; tần suất; da đầu nhạy cảm; khi nào cần bác sĩ; mua ở đâu.
- Accordion dùng button semantics, cập nhật `aria-expanded`, điều khiển được bằng bàn phím.

### 9. Brand close + Footer

- Kết trang bằng tuyên ngôn thương hiệu “Hai bước, một chu trình” và ba nguyên tắc: rõ vai trò, rõ nguồn, rõ giới hạn.
- Link tiếp nối: `Về Cavisi` và `Xem Bằng chứng & Minh bạch`.
- Footer: sitemap, danh tính pháp nhân, hotline/Zalo, kênh chính thức, pháp lý, chính sách và disclaimer mỹ phẩm.

Homepage mục tiêu: **8 section nội dung + header/footer**, giảm từ 11 section hiện tại.

---

## 8. Blueprint các trang chi tiết

### `/co-che/` - Cơ chế

1. Hero: “Làm sạch trước, chăm sóc tiếp nối sau”.
2. Giới hạn tự nhiên của rinse-off.
3. Diagram chu trình 2 bước.
4. Postbiotic giải thích dễ hiểu, có glossary/tooltip.
5. Thành phần theo vai trò, không liệt kê dày đặc.
6. FAQ khoa học + nguồn tham khảo.
7. Link đến sản phẩm liên quan và trang nguồn/bằng chứng.

### `/san-pham/` - Bộ đôi

1. Hero packshot bộ đôi + lợi ích hệ thống.
2. Bản đồ vai trò: Shampoo làm sạch nền / Spray chăm sóc tiếp nối / Bộ đôi là chu trình hoàn chỉnh.
3. Comparison theo nhiệm vụ, thời điểm, cách dùng, dạng rinse-off/leave-on.
4. Giải thích vì sao hai sản phẩm được thiết kế để đi cùng nhau.
5. Routine.
6. Nguồn thông tin, FAQ và kênh hỗ trợ chính thức.

### `/san-pham/shampoo/`

1. Product hero + vai trò trong chu trình.
2. Lợi ích được phép công bố.
3. Thành phần và vai trò.
4. Cách dùng.
5. Đối tượng/lưu ý.
6. Liên kết kiến thức: “Vai trò tiếp nối của Cavisi Spray”.
7. Nguồn/FAQ và thông tin sản phẩm liên quan.

### `/san-pham/spray/`

1. Product hero + `Leave-on / Không cần xả lại`.
2. Lý do cần chăm sóc giữa hai lần gội.
3. Postbiotic và thành phần.
4. Hướng dẫn chia tóc/xịt/massage bằng 3 ảnh.
5. Đối tượng/lưu ý.
6. Liên kết kiến thức: “Vai trò làm sạch nền của Cavisi Shampoo”.
7. Nguồn/FAQ và thông tin sản phẩm liên quan.

### `/bang-chung/`

1. Hero: “Minh bạch trước, cam kết sau”.
2. Bộ lọc: Sản xuất / Thành phần / Kiểm nghiệm / Người dùng.
3. Evidence card chuẩn: tên tài liệu, đơn vị, ngày, phạm vi, kết luận tóm tắt, link/tệp nguồn.
4. Trạng thái rõ: `Đã xác minh`, `Đang cập nhật`, `Chưa công bố`.
5. Methodology/disclaimer.
6. Không dùng placeholder khổng lồ; dùng empty state có giải thích và ngày cập nhật dự kiến nếu đã xác nhận.

### `/thuong-hieu/`

1. Hero định vị.
2. Vì sao Cavisi tồn tại.
3. Ba nguyên tắc: Scalp-first / Balance / Science x Nature.
4. Hệ biểu tượng logo và triết lý thiết kế ở mức ngắn.
5. Founder story chỉ thêm khi có dữ liệu thật.
6. Link đến triết lý sản phẩm và trang Bằng chứng.

### `/lien-he/`

- Hotline, Zalo, email/kênh chính thức, giờ hỗ trợ.
- Danh tính pháp nhân, địa chỉ/kênh chính thức và nơi mua chính thức nếu có.
- Nếu có form: label hiển thị, input type đúng, lỗi inline, trạng thái gửi và privacy note.
- Không yêu cầu thông tin không cần thiết; tên + số điện thoại/kênh trả lời + nội dung là đủ.

---

## 9. Visual design system

### Hướng phong cách

**Clinical editorial + living ecosystem**: khoa học sạch và đáng tin, nhưng mềm, có sức sống và mang tính chăm sóc cá nhân.

- Nền sáng ấm thay vì trắng bệnh viện.
- Science Blue giữ vai trò neo niềm tin.
- Fresh Aqua dùng cho điểm nhấn, diagram và mảng lớn; không dùng làm text nhỏ trên trắng.
- Capsule, vòng quỹ đạo và brand mark tạo ngôn ngữ hệ sinh thái.
- Ảnh sản phẩm/người thật là hero; đồ họa khoa học là lớp hỗ trợ, không lấn át.

### Color tokens đề xuất

| Token | Giá trị | Vai trò |
|---|---:|---|
| `--color-primary` | `#00516D` | Heading, nav, link nhấn, key surface |
| `--color-primary-deep` | `#003B50` | Dark section, foreground mạnh |
| `--color-secondary` | `#76CEC3` | Accent, diagram, decorative highlight |
| `--color-surface` | `#F6F8F3` | Nền chính |
| `--color-surface-mint` | `#DFF4ED` | Nền section/card phụ |
| `--color-text` | `#14333D` | Body text chính |
| `--color-text-muted` | `#566A72` | Text phụ đạt contrast tốt hơn |
| `--color-border` | `rgba(0,81,109,.18)` | Divider/border |
| `--color-success` | chốt sau kiểm tra contrast | Trạng thái xác minh, không thay Fresh Aqua |
| `--color-error` | chốt sau kiểm tra contrast | Lỗi form |

### Typography

- Display: Clash Display 500-600.
- Body/UI: Inter 400-700.
- Desktop H1: 72-96px tùy độ dài; mobile H1: 44-56px.
- H2: desktop 48-72px; mobile 36-44px.
- Body: desktop 16-18px; mobile tối thiểu 16px, line-height 1.55-1.75.
- Caption/eyebrow đọc được: tối thiểu 11-12px; chỉ decorative label mới có thể nhỏ hơn và không chứa thông tin bắt buộc.
- Text measure: 60-75 ký tự desktop, 35-60 ký tự mobile.

### Grid và spacing

- Content max width: 1280px; prose max width: 720px.
- Desktop grid: 12 cột; tablet: 8; mobile: 4.
- Gutters: 20px mobile, 32px tablet, 64-96px desktop.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Section padding: 72-88px mobile, 112-160px desktop tùy cấp độ.

### Radius, border, shadow

- Button: 8-12px hoặc capsule có chủ đích; không trộn ngẫu nhiên.
- Card: 20-28px.
- Media hero: capsule/arch lớn; product card: bo mềm nhưng gọn.
- Shadow chỉ dùng tiết chế cho packshot hoặc lớp thông tin nổi; card chủ yếu phân tầng bằng màu và border.

### Imagery

- Ưu tiên ảnh thật: packshot, thao tác trên da đầu, người mẫu tự nhiên, ánh sáng mềm.
- Không dùng hình stock phân tử/bong bóng chung chung.
- Ảnh khoa học có thể là macro texture hoặc diagram được brand hóa.
- Tất cả ảnh AI phải được gắn nhãn trong metadata/quy trình nội bộ; ảnh có khả năng bị hiểu là kết quả thật phải có disclosure hiển thị tại chỗ.

---

## 10. Component inventory

### Global

- Header desktop/mobile + product dropdown.
- Mobile drawer.
- Primary, secondary, text-link và icon button.
- Footer + contact block.
- Skip link, focus ring và breadcrumb trên trang sâu.

### Content

- Hero split layout.
- Section kicker.
- Product system card.
- Product packshot stage.
- Benefit list.
- Ingredient/term chip có wrap.
- Routine step card.
- Science diagram.
- Evidence card + status badge + source metadata.
- FAQ accordion.
- Testimonial/review card chỉ dành cho dữ liệu xác minh.
- Empty state cho bằng chứng chưa có.
- Inline disclaimer/callout.

### Trạng thái bắt buộc

- Default, hover, focus-visible, active/pressed, disabled, loading.
- Accordion closed/open.
- Menu closed/open.
- Evidence verified/updating/unavailable.
- Form idle/error/submitting/success.

---

## 11. Motion và interaction

- Motion có nhiệm vụ: reveal mối liên hệ 2 bước, giải thích progression và phản hồi tương tác.
- Entrance: opacity + translate nhẹ; stagger 30-50ms trong nhóm, không kéo dài toàn trang.
- Hover product: transform nhẹ trên ảnh, không làm layout shift.
- Accordion/menu: 180-280ms, interruptible.
- Tránh parallax/scrub phức tạp trên mobile.
- `prefers-reduced-motion`: tắt reveal/parallax/spin; nội dung hiển thị ở final state ngay.
- Không khóa scroll hoặc input trong lúc animation.

---

## 12. Responsive rules

### Breakpoints kiểm thử

- 375px: điện thoại nhỏ.
- 390/430px: điện thoại phổ biến/lớn.
- 768px: tablet portrait.
- 1024px: tablet landscape/small laptop.
- 1440px: desktop.

### Mobile-first priorities

1. Promise và sản phẩm.
2. Hai bước của chu trình.
3. Cơ chế ngắn.
4. Proof.
5. Cách dùng.
6. FAQ và điểm dẫn đến nội dung chuyên sâu.

### Quy tắc

- Không có horizontal scroll/crop text.
- Grid hai cột chuyển thành một cột; thứ tự DOM phải đúng thứ tự đọc mobile.
- Product image không cao quá mức khiến người dùng chỉ thấy ảnh mà không thấy nội dung giải thích.
- Header hoặc thanh tiện ích cố định không che footer, focus target hoặc nội dung cuối trang.
- Hỗ trợ landscape: giảm media height, không khóa `100vh`; dùng `min-height: 100dvh` khi cần.
- Link/nút web tối thiểu 24x24 CSS px theo WCAG 2.2; nút quan trọng nên đạt ít nhất 44px chiều cao để thao tác thoải mái.

---

## 13. Accessibility và performance

### Accessibility acceptance

- Text thường đạt contrast tối thiểu 4.5:1; text lớn/UI boundary tối thiểu 3:1 theo vai trò.
- Mọi control có focus-visible 2-4px, không bị header hoặc lớp cố định che.
- Heading hierarchy tuần tự; mỗi trang có một H1.
- Menu, dropdown, accordion và form dùng được hoàn toàn bằng bàn phím.
- Icon-only control có accessible name; icon trang trí `aria-hidden="true"`.
- Alt text mô tả mục đích ảnh, không lặp caption; ảnh trang trí dùng alt rỗng.
- Không truyền tải trạng thái chỉ bằng màu.
- Không disable zoom.

### Performance acceptance

- Hero dùng AVIF/WebP và responsive `srcset`; ảnh dưới fold lazy-load.
- Khai báo `width`/`height` hoặc `aspect-ratio` cho media.
- Chỉ preload font/asset thật sự critical; `font-display: swap`.
- Giảm JS cho include/animation; nội dung cốt lõi vẫn đọc được khi JS lỗi.
- Mục tiêu Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms trên mobile thực tế hoặc profile tương đương.

---

## 14. Content và claim governance

### Có thể dùng khi đúng tài liệu sản phẩm

- Làm sạch vảy gàu nhìn thấy, bụi bẩn và bã nhờn tích tụ.
- Hỗ trợ chăm sóc/duy trì môi trường da đầu cân bằng.
- Không cần xả lại.
- Thành phần có nguồn gốc từ quá trình lên men/Postbiotic.

### Cần nguồn và phê duyệt trước khi dùng

- Số ngày cải thiện, phần trăm hiệu quả, so sánh hơn đối thủ.
- “Được bác sĩ khuyên dùng”, “đã chứng minh lâm sàng”, “an toàn cho mọi da đầu”.
- Chứng nhận, tiêu chuẩn EU, hồ sơ nhà máy hoặc claim ingredient-grade cụ thể.

### Không dùng nếu sản phẩm là mỹ phẩm và không có cơ sở pháp lý phù hợp

- Điều trị/chữa khỏi gàu, viêm da hoặc bệnh da đầu.
- Phục hồi hệ vi sinh như một kết quả đảm bảo.
- Before/After AI hoặc ảnh minh họa được đặt trong ngữ cảnh khiến người dùng hiểu là kết quả thật.

---

## 15. Đo lường mức độ tin cậy và khả năng tìm hiểu

### KPI trải nghiệm

- Tỷ lệ người dùng đến section Two-step System và Proof Preview.
- Tỷ lệ đi từ homepage sang `/co-che/`, `/bang-chung/` và trang sản phẩm.
- Tỷ lệ xem nguồn/tài liệu, mở FAQ và đọc disclaimer.
- Khả năng tìm thấy danh tính pháp nhân, kênh chính thức và thông tin liên hệ.
- Exit rate tại hero, scroll depth và lỗi điều hướng trên mobile.
- Chỉ số định tính qua phỏng vấn ngắn: người dùng có mô tả đúng Cavisi, hiểu đúng vai trò Shampoo/Spray và phân biệt được nội dung đã/đang kiểm nghiệm hay không.

### Sự kiện đề xuất

```text
view_home_hero
view_two_step_system
view_product
view_evidence
open_evidence_source
view_brand_principles
faq_open
menu_open
```

`click_zalo`, `click_hotline` hoặc `view_official_channels` có thể đo như tín hiệu tìm kiếm hỗ trợ, không dùng làm KPI bán hàng. Không lưu nội dung nhạy cảm từ form/contact vào analytics.

---

## 16. Roadmap triển khai

### P0 - Chốt nền tảng

- Chốt sitemap 8 trang và nhiệm vụ tạo niềm tin của từng trang.
- Chốt claim matrix và tài liệu bằng chứng có thể công bố.
- Chốt asset thật: hero, packshot, thao tác sử dụng, hồ sơ/chứng nhận.
- Chuẩn hóa token màu/typography/spacing và contrast.

### P1 - UX structure

- Wireframe mobile-first cho homepage và bằng chứng đã được đặc tả trong `Cavisi_Wireframe_Home_Evidence.md`; tiếp theo là bộ đôi và product detail.
- Prototype nav/drawer và đường dẫn đến Bằng chứng.
- Content hierarchy và trust-question mapping cho từng trang.
- Review wireframe trước khi polish visual.

### P2 - Visual system

- Áp dụng visual direction từ `_web` vào component system.
- Tạo product stage, two-step cards, diagram và evidence cards.
- Hoàn thiện desktop/tablet/mobile.

### P3 - Build và migration

- Tách landing dài thành homepage rút gọn + route chi tiết.
- Giữ URL từ ZIP hoặc thiết lập redirect nếu đổi route.
- Tối ưu ảnh/font, semantic HTML và progressive enhancement.

### P4 - QA và launch

- Test 375/390/430/768/1024/1440 và landscape.
- Keyboard, screen reader smoke test, reduced motion, 200% zoom.
- Lighthouse/Core Web Vitals, broken links, metadata, schema và analytics tối thiểu.
- Legal/content sign-off cho claim, evidence và disclaimer.

---

## 17. Definition of Done

Thiết kế chỉ được coi là hoàn thành khi:

- Homepage truyền đạt được “vì sao 2 bước” trước khi người dùng đi qua nửa trang.
- Cả Shampoo và Spray luôn được hiểu là một chu trình liên kết.
- Mỗi trang trả lời một nhóm câu hỏi niềm tin rõ ràng và có đường dẫn hợp lý đến nguồn liên quan.
- Không còn headline bị crop hoặc horizontal scroll ở các breakpoint kiểm thử.
- Body text mobile tối thiểu 16px; contrast và focus đạt tiêu chí.
- Trang Bằng chứng không chứa dữ liệu/ảnh gây hiểu nhầm.
- Nav, drawer, FAQ, form và các link/nút dùng được bằng bàn phím.
- Asset không gây CLS đáng kể; ảnh dưới fold được tối ưu/lazy-load.
- Claim đã được đối chiếu nguồn và phê duyệt nội bộ.
- Analytics tối thiểu đo được đường đi từ định vị đến cơ chế/bằng chứng mà không thu dữ liệu nhạy cảm hoặc phục vụ retargeting quá mức.

---

## 18. Nội dung/asset còn thiếu trước khi build final

Đã ghi nhận số tiếp nhận phiếu công bố: Shampoo `28338/26/CBMP-HN`; Spray `28222/26/CBMP-HN`. Trước khi công bố website, cần đối chiếu bản phiếu gốc tương ứng; mã/tệp TCCS chưa được cung cấp riêng.

1. Tên pháp nhân, địa chỉ và danh sách kênh thông tin/kênh bán chính thức để người dùng xác minh.
2. Packshot/artwork bao bì phiên bản cuối.
3. Ảnh hero và ảnh thao tác sử dụng có quyền khai thác.
4. Tài liệu thành phần, hồ sơ sản xuất và kiểm nghiệm được phép công bố.
5. Claim matrix được người phụ trách pháp lý/nội dung duyệt.
6. Email, social, giờ hỗ trợ và chính sách liên quan.
7. Founder story nếu muốn đưa vào trang Thương hiệu.

Các mục trên không chặn việc dựng wireframe/design system, nhưng chặn việc công bố bản production hoàn chỉnh.
