# Cavisi Content Wireframe Homepage and Evidence

## 1. Mục tiêu và nguyên tắc

Tài liệu này chuyển UX/UI Masterplan và Trust Content Matrix thành wireframe nội dung cho hai trang ưu tiên:

1. Homepage `/`
2. Bằng chứng và Minh bạch `/bang-chung/`

Đây là wireframe nội dung, chưa phải thiết kế giao diện cuối và chưa phải nội dung production đã được phê duyệt.

### Mục tiêu chung

- Giúp người dùng hiểu Cavisi là thương hiệu gì.
- Giải thích vai trò khác nhau của Shampoo và Spray bằng thông tin hiện có.
- Cho phép người dùng nhận biết nguồn, trạng thái và giới hạn của từng thông tin.
- Tạo cảm giác đáng tin bằng tính nhất quán và minh bạch, không bằng ngôn ngữ phóng đại.

### Quy tắc nguồn

- `READY`: có thể triển khai từ dữ liệu GREEN trong Trust Content Matrix.
- `CONDITIONAL`: chỉ xuất bản sau khi có xác nhận/tài liệu bổ sung.
- `INTERNAL`: chỉ là ghi chú cho đội triển khai, không xuất hiện trên production.
- Không dùng nội dung RED.
- Không dùng ảnh AI Before/After trong hai trang này.

---

## 2. Global navigation wireframe

### Desktop header

```text
+----------------------------------------------------------------------------------+
| [CAVISI LOGO]       Cơ chế     Sản phẩm     Bằng chứng     Thương hiệu           |
+----------------------------------------------------------------------------------+
```

| Thành phần | Yêu cầu |
|---|---|
| Logo | Link về `/`, dùng đúng logo chính và vùng an toàn |
| Cơ chế | Link `/co-che/` |
| Sản phẩm | Dropdown: Bộ đôi, Shampoo, Spray |
| Bằng chứng | Link `/bang-chung/`, có active state rõ; không cần kiểu nút bán hàng |
| Thương hiệu | Link `/thuong-hieu/` |
| Liên hệ | Đặt trong footer hoặc utility link nhỏ nếu cần |

### Mobile header and drawer

```text
+--------------------------------------+
| [CAVISI LOGO]              [MENU]    |
+--------------------------------------+

MENU OPEN
+--------------------------------------+
| Cơ chế                              |
| Sản phẩm                            |
| Bằng chứng và Minh bạch             |
| Thương hiệu                         |
| Liên hệ                             |
|--------------------------------------|
| Hotline / Zalo / Email chính thức   |
+--------------------------------------+
```

- Menu button tối thiểu 44x44px, có `aria-expanded` và accessible name.
- Không có sticky sales bar.
- Active page thể hiện bằng text + underline/border, không chỉ bằng màu.
- Header cố định phải chừa đúng khoảng trống, không che heading khi đi tới anchor.

---

## 3. Homepage content wireframe

### Nhiệm vụ của trang

Sau khi xem homepage, người dùng phải trả lời được bốn câu:

1. Cavisi là thương hiệu chăm sóc gì?
2. Shampoo và Spray có vai trò khác nhau như thế nào?
3. Cavisi đang dựa trên những thông tin nào?
4. Tôi có thể kiểm tra chi tiết ở đâu?

### Thứ tự nội dung

```text
Header
  |
Hero định vị thương hiệu
  |
Góc nhìn Scalp-first
  |
Hai sản phẩm hai vai trò
  |
Thông tin sản phẩm có thể kiểm tra
  |
Cách sử dụng cơ bản
  |
Minh bạch và trạng thái nguồn
  |
Nguyên tắc giao tiếp Cavisi
  |
FAQ trọng yếu
  |
Brand close + Footer
```

---

### H01 Hero định vị

**Mục tiêu:** xác lập thương hiệu và sản phẩm trong first viewport.

```text
DESKTOP
+--------------------------------+-----------------------------------------+
| SCALP MICROBIOME CARE          |                                         |
|                                |  [ẢNH NGƯỜI MẪU + BỘ ĐÔI SẢN PHẨM]     |
| Cân bằng hệ vi sinh.           |                                         |
| Khỏe mạnh từ gốc rễ.           |                                         |
|                                |                                         |
| Cavisi tiếp cận chăm sóc tóc   |                                         |
| từ nền tảng da đầu, với hai    |                                         |
| sản phẩm đảm nhiệm hai vai trò.|                                         |
|                                |                                         |
| [Hiểu cách tiếp cận của Cavisi]|                                         |
| Xem bộ đôi sản phẩm ->         |                                         |
+--------------------------------+-----------------------------------------+
```

**Copy đề xuất**

- Eyebrow: `SCALP MICROBIOME CARE`
- H1: `Cân bằng hệ vi sinh. Khỏe mạnh từ gốc rễ.`
- Lead: `Cavisi tiếp cận chăm sóc tóc từ nền tảng da đầu, với Shampoo và Spray đảm nhiệm hai vai trò khác nhau trong cùng một chu trình.`
- Link chính: `Hiểu cách tiếp cận của Cavisi`
- Link phụ: `Xem bộ đôi sản phẩm`

**Trạng thái:** `READY` cho định vị thương hiệu; cụm “cùng một chu trình” dùng ở cấp độ mô hình thương hiệu, không ngụ ý hiệu quả đã kiểm nghiệm.

**Không dùng**

- Badge `EU Standard` hoặc `European-grade`.
- Số liệu hiệu quả.
- Claim `điều trị`, `trị dứt điểm`, `khôi phục hệ vi sinh`.
- Nút `Mua ngay` trong hero.

**Responsive**

- Mobile: copy trước, ảnh sau; ảnh sản phẩm bắt đầu xuất hiện ngay sau nhóm link.
- H1 mobile 44-52px và phải đọc trọn vẹn ở 375px.
- Không dùng `<br>` bắt buộc khiến câu bị crop; dùng wrapping tự nhiên hoặc `text-wrap: balance` như progressive enhancement.

---

### H02 Góc nhìn Scalp-first

**Mục tiêu:** giải thích tư duy thương hiệu, không tạo cảm giác đối đầu với sản phẩm khác.

```text
+----------------------------------------------------------------------------------+
| 01 / GÓC NHÌN CAVISI                                                            |
|                                                                                  |
| Chăm sóc tóc bắt đầu từ việc hiểu da đầu.                                        |
|                                                                                  |
| [Scalp-first]              [Balance]                 [Science x Nature]          |
| Da đầu là điểm bắt đầu.    Chăm sóc đúng mức.        Khoa học và tự nhiên.       |
+----------------------------------------------------------------------------------+
```

**Copy đề xuất**

- H2: `Chăm sóc tóc bắt đầu từ việc hiểu da đầu.`
- Intro: `Cavisi xây dựng định hướng Scalp-first: xem da đầu là nền tảng của trải nghiệm mái tóc khỏe và tổ chức sản phẩm theo từng vai trò rõ ràng.`
- Principle 1: `Scalp-first - Da đầu là điểm bắt đầu.`
- Principle 2: `Balance - Hướng đến chăm sóc đúng mức.`
- Principle 3: `Science x Nature - Khoa học hiện đại kết hợp cảm hứng tự nhiên.`

**Trạng thái:** `READY`, nguồn Brand Guideline.

---

### H03 Hai sản phẩm hai vai trò

**Mục tiêu:** cho thấy Shampoo và Spray liên kết nhưng không gán claim chưa được xác nhận.

```text
+-----------------------------------+      +-----------------------------------+
| BƯỚC 01                           |      | BƯỚC 02                           |
| [PACKSHOT SHAMPOO]                |  +   | [PACKSHOT SPRAY]                  |
| Cavisi Shampoo                    |      | Cavisi Spray                      |
| Giúp làm sạch tóc và da đầu,      |      | Xịt dưỡng dùng trực tiếp trên     |
| gàu và dầu nhờn trên da đầu.      |      | tóc và da đầu sau khi tóc gần khô.|
| Xem thông tin Shampoo ->          |      | Xem thông tin Spray ->            |
+-----------------------------------+      +-----------------------------------+
```

**Copy đề xuất**

- H2: `Hai sản phẩm. Hai vai trò được trình bày rõ.`
- Shampoo: `Giúp làm sạch tóc và da đầu, làm sạch gàu và dầu nhờn trên da đầu.`
- Spray: `Xịt dưỡng dùng trực tiếp trên tóc và da đầu; nên dùng sau khi tóc gần khô.`

**Trạng thái:** `READY`, bám S1/S2.

**Conditional copy**

- `Rinse-off` cho Shampoo: có thể dùng sau khi đối chiếu hướng dẫn cuối.
- `Leave-on` và `không cần xả lại` cho Spray: `CONDITIONAL`, chờ Cavisi xác nhận chính thức.
- `Hỗ trợ cân bằng hệ vi sinh`: `CONDITIONAL`, không đặt trong product card hiện tại.

---

### H04 Thông tin sản phẩm có thể kiểm tra

**Mục tiêu:** tạo trust cue cụ thể ngay trên homepage mà không giả lập báo cáo kiểm nghiệm.

```text
+----------------------------------------------------------------------------------+
| 03 / THÔNG TIN SẢN PHẨM                                                         |
|                                                                                  |
| Thông tin rõ ràng, theo từng lớp.                                                |
|                                                                                  |
| [Thành phần]        [Cách sử dụng]        [Thông tin công bố]                    |
| INCI theo sản phẩm  Hướng dẫn theo TTSP   Shampoo: 28338/26/CBMP-HN              |
|                                           Spray: 28222/26/CBMP-HN                |
|                                                                                  |
| Xem Bằng chứng và Minh bạch ->                                                  |
+----------------------------------------------------------------------------------+
```

**Trạng thái**

- INCI/cách dùng: `READY` cho wireframe; production phải đối chiếu hồ sơ cuối.
- Hai số tiếp nhận: `CONDITIONAL` cho production cho đến khi có bản phiếu gốc tương ứng.
- Không gắn badge `Đã xác minh` nếu đội triển khai chưa xem bản phiếu.

**UX note:** trạng thái phải có chữ, không dùng chấm xanh/vàng đơn lẻ.

---

### H05 Cách sử dụng cơ bản

**Mục tiêu:** cho thấy sản phẩm được thiết kế theo routine rõ, không biến section thành quảng cáo.

```text
+-----------------------------------+----------------------------------------------+
| SHAMPOO                           | SPRAY                                        |
| 1. Làm ướt tóc                    | 1. Lắc đều                                   |
| 2. Lấy lượng vừa đủ               | 2. Cách tóc khoảng 10-15 cm                  |
| 3. Tạo bọt, massage nhẹ           | 3. Xịt trực tiếp lên da đầu                  |
| 4. Xả kỹ với nước sạch            | 4. Massage nhẹ để phân bố đều                |
|                                   | 5. Dùng khi tóc gần khô                      |
+-----------------------------------+----------------------------------------------+
```

**Trạng thái:** `READY`, bám S1/S2.

**Không tự thêm:** thời gian massage, số lần gội, liều lượng cụ thể hoặc `không cần xả lại` khi chưa xác nhận.

---

### H06 Minh bạch và trạng thái nguồn

**Mục tiêu:** dẫn vào trang Bằng chứng bằng tình trạng thực tế, không dùng trust badge chung chung.

```text
+----------------------------------------------------------------------------------+
| 05 / MINH BẠCH                                                                  |
|                                                                                  |
| Cavisi trình bày điều đã có, điều đang đối chiếu và điều chưa công bố.           |
|                                                                                  |
| [THÀNH PHẦN]       [CÔNG BỐ SẢN PHẨM]        [KIỂM NGHIỆM]                      |
| Có INCI nội bộ     Đã có số tiếp nhận         Chưa có tài liệu trong bộ nguồn    |
| Chờ hồ sơ cuối     Chờ đối chiếu bản phiếu    hiện tại                           |
|                                                                                  |
| Xem trạng thái tài liệu ->                                                       |
+----------------------------------------------------------------------------------+
```

**Production rule**

- Không hiển thị nội dung `Chờ hồ sơ cuối` theo ngôn ngữ nội bộ.
- Nếu launch trước khi đủ hồ sơ, dùng wording công khai trung tính như `Tài liệu chưa được công bố trên website`.
- Không hứa ngày cập nhật nếu chưa có lịch được xác nhận.

---

### H07 Nguyên tắc giao tiếp Cavisi

**Mục tiêu:** biến sự thận trọng thành một phần nhận diện thương hiệu.

```text
+----------------------------------------------------------------------------------+
| GIAO TIẾP CÓ TRÁCH NHIỆM                                                        |
|                                                                                  |
| Rõ vai trò                 Rõ nguồn                    Rõ giới hạn                |
| Mỗi sản phẩm có nhiệm vụ.  Nêu nguồn khi có thể.       Không hứa hẹn điều trị.    |
+----------------------------------------------------------------------------------+
```

**Copy đề xuất**

- H2: `Thông tin rõ ràng là một phần của cách Cavisi chăm sóc.`
- `Rõ vai trò - Mỗi sản phẩm đảm nhiệm một phần cụ thể trong routine.`
- `Rõ nguồn - Thông tin sản phẩm và tài liệu được phân loại theo nguồn.`
- `Rõ giới hạn - Cavisi không dùng hình minh họa hoặc ngôn ngữ khiến người dùng hiểu thành kết quả đã được chứng minh.`

**Trạng thái:** `READY` như nguyên tắc thương hiệu/nội dung.

---

### H08 FAQ trọng yếu

Chỉ dùng các câu trả lời đã có đủ dữ liệu:

1. `Cavisi Shampoo và Cavisi Spray có cùng vai trò không?`
2. `Cavisi Shampoo được sử dụng như thế nào?`
3. `Cavisi Spray được sử dụng vào thời điểm nào?`
4. `Tôi có thể xem danh sách thành phần ở đâu?`
5. `Hai số tiếp nhận công bố của sản phẩm là gì?`
6. `Khi có dấu hiệu kích ứng nên làm gì?`

**Conditional FAQ**

- `Postbiotic là gì?` chỉ xuất bản sau khi chọn nguồn khoa học.
- `Spray có cần xả lại không?` chỉ xuất bản sau xác nhận chính thức.
- Không trả lời câu hỏi về thời gian hiệu quả nếu chưa có dữ liệu.

---

### H09 Brand close and footer

```text
+----------------------------------------------------------------------------------+
| CAVISI                                                                           |
| Scalp-first. Balance. Science x Nature.                                          |
|                                                                                  |
| [Về Cavisi]                     [Bằng chứng và Minh bạch]                         |
+----------------------------------------------------------------------------------+
| Sitemap | Hotline | Zalo | Email | Pháp nhân | Chính sách | Disclaimer          |
+----------------------------------------------------------------------------------+
```

- Không cần ảnh CTA bán hàng toàn màn hình.
- Footer phải có danh tính pháp nhân khi được cung cấp.
- Hotline `0764 358 668`, Zalo và email hiện có cần được Cavisi xác nhận là kênh chính thức trước production.

---

## 4. Evidence page content wireframe

### Nhiệm vụ của trang

Trang `/bang-chung/` không có nhiệm vụ thuyết phục bằng thật nhiều badge. Trang phải giúp người dùng hiểu:

1. Website đang công bố loại tài liệu nào.
2. Tài liệu đó nói về thành phẩm, nguyên liệu hay kiến thức nền.
3. Thông tin nào đã được đối chiếu với tài liệu gốc.
4. Thông tin nào chưa được công bố và không nên suy diễn.

### Thứ tự nội dung

```text
Header + Breadcrumb
  |
Hero Minh bạch
  |
Hướng dẫn đọc trạng thái
  |
Danh tính sản phẩm và thông tin công bố
  |
Thành phần và hướng dẫn sử dụng
  |
Thông tin sản xuất
  |
Kiểm nghiệm thành phẩm
  |
Thư viện nguồn khoa học
  |
Giới hạn và phương pháp
  |
Lịch sử cập nhật + Kênh yêu cầu thông tin
```

---

### E01 Breadcrumb and hero

```text
Trang chủ / Bằng chứng và Minh bạch

MINH BẠCH TRƯỚC
Thông tin có nguồn. Trạng thái được nói rõ.

Cavisi phân biệt thông tin sản phẩm, tài liệu nguyên liệu và kiến thức khoa học nền
để người đọc không phải tự đoán một claim dựa trên loại nguồn không phù hợp.

[Đi đến thông tin công bố]   [Xem phương pháp trình bày nguồn]
```

**Trạng thái:** `READY`.

---

### E02 Status legend

```text
+--------------------------+--------------------------+--------------------------+
| ĐÃ ĐỐI CHIẾU             | DO CAVISI CUNG CẤP       | CHƯA CÔNG BỐ              |
| Đã xem tài liệu gốc.     | Có dữ liệu/mã nội bộ,    | Website chưa có tài liệu  |
| Nêu rõ tên và ngày.      | chờ đối chiếu nguồn gốc. | để người đọc kiểm tra.    |
+--------------------------+--------------------------+--------------------------+
```

**Quy tắc**

- Mỗi badge có text label, mô tả và icon SVG nhất quán.
- Không dùng màu xanh để ngụ ý đạt/hiệu quả nếu trạng thái chỉ nói về sự tồn tại của tài liệu.
- `Đã đối chiếu` chỉ được kích hoạt sau khi đội nội dung kiểm tra tệp gốc.
- Trên production có thể đổi `Do Cavisi cung cấp` thành `Thông tin thương hiệu cung cấp`, kèm ngày cập nhật.

---

### E03 Product identity and notification numbers

```text
+-------------------------------------+-------------------------------------+
| CAVISI SHAMPOO                      | CAVISI SPRAY                        |
| Loại thông tin: Công bố sản phẩm    | Loại thông tin: Công bố sản phẩm    |
| Số tiếp nhận: 28338/26/CBMP-HN      | Số tiếp nhận: 28222/26/CBMP-HN      |
| Trạng thái: Do Cavisi cung cấp      | Trạng thái: Do Cavisi cung cấp      |
| Bản phiếu: Chưa công bố trên web    | Bản phiếu: Chưa công bố trên web    |
+-------------------------------------+-------------------------------------+
```

**Gate trước production:** đối chiếu bản phiếu gốc. Sau khi đối chiếu, card phải bổ sung:

- Tên chính thức trên phiếu.
- Số tiếp nhận.
- Ngày tiếp nhận/phát hành nếu có.
- Thương nhân chịu trách nhiệm.
- Link xem/tải bản được phép công bố hoặc ghi rõ tài liệu chỉ được tóm tắt.

---

### E04 Ingredients and usage documents

```text
[TAB/FILTER] Shampoo | Spray

SHAMPOO
- Danh sách INCI đầy đủ
- Công dụng theo hồ sơ cuối
- Cách sử dụng
- Lưu ý
- Ngày rà soát

SPRAY
- Danh sách INCI đầy đủ
- Công dụng theo hồ sơ cuối
- Cách sử dụng
- Lưu ý
- Ngày rà soát
```

**UX behavior**

- Nếu dùng tabs, chúng phải có role/keyboard behavior đúng và URL/deep link lưu được trạng thái.
- Phương án đơn giản hơn cho static site: hai section có anchor `#shampoo` và `#spray`.
- INCI dài được wrap tự nhiên; có nút copy nếu thực sự hữu ích, không bắt buộc.
- Không biến ingredient chip thành nguồn chứng minh hiệu quả.

---

### E05 Manufacturing information

```text
SẢN XUẤT TẠI
Công ty Cổ phần Dược Mỹ phẩm Butter - C
Cụm công nghiệp Thanh Oai, X. Bình Minh, TP. Hà Nội, Việt Nam

THƯƠNG NHÂN CHỊU TRÁCH NHIỆM
[Chưa có dữ liệu được xác nhận]

TÀI LIỆU NHÀ MÁY / TIÊU CHUẨN
[Chưa công bố trên website]
```

**Trạng thái:** nơi sản xuất có trong S1/S2 nhưng vẫn phải đối chiếu hồ sơ cuối; pháp nhân chịu trách nhiệm và chứng nhận nhà máy còn thiếu.

---

### E06 Product testing

Khi chưa có tài liệu:

```text
KIỂM NGHIỆM THÀNH PHẨM

Website hiện chưa công bố tài liệu kiểm nghiệm thành phẩm.
Cavisi sẽ chỉ bổ sung tên phép thử, đơn vị thực hiện, ngày và phạm vi kết quả khi
tài liệu tương ứng có thể được kiểm tra.
```

Khi có tài liệu, dùng evidence card:

```text
+----------------------------------------------------------------------------------+
| [Tên báo cáo/phiếu kiểm nghiệm]                                                  |
| Loại nguồn: Thành phẩm                                                           |
| Đơn vị phát hành: ...            Ngày: ...                                       |
| Phạm vi: ...                                                                     |
| Kết luận tóm tắt: ...                                                            |
| Giới hạn: ...                                                                    |
| [Xem nguồn]                                                                      |
+----------------------------------------------------------------------------------+
```

- Không rút một chỉ tiêu kỹ thuật thành claim người dùng nếu báo cáo không hỗ trợ cách diễn giải đó.
- Không dùng từ `clinical` nếu tài liệu không phải nghiên cứu lâm sàng.

---

### E07 Scientific source library

Chia nguồn thành hai nhóm:

1. `Kiến thức nền về da đầu và microbiome`.
2. `Tài liệu về nguyên liệu trong công thức`.

Mỗi nguồn cần có:

- Tên tài liệu.
- Tác giả/tổ chức.
- Năm/ngày.
- Loại nguồn.
- Nội dung mà Cavisi đang dùng nguồn đó để giải thích.
- Giới hạn: nguồn không chứng minh điều gì về thành phẩm Cavisi.

Khi chưa chọn nguồn, không viết sẵn bài giải thích Postbiotic dưới dạng sự thật đã được Cavisi chứng minh.

---

### E08 Methodology and limitations

**Heading:** `Cách Cavisi trình bày bằng chứng`

```text
1. Phân biệt thành phẩm, nguyên liệu và kiến thức nền.
2. Nêu tên, ngày và phạm vi của tài liệu.
3. Không dùng nguồn nguyên liệu để thay thế kiểm nghiệm thành phẩm.
4. Không dùng ảnh AI hoặc hình minh họa như kết quả người dùng.
5. Cập nhật trạng thái khi tài liệu thay đổi.
```

**Disclaimer đề xuất**

`Nội dung trên website nhằm cung cấp thông tin về sản phẩm mỹ phẩm và cách Cavisi xây dựng định hướng chăm sóc da đầu. Nội dung không thay thế chẩn đoán hoặc tư vấn y khoa.`

**Trạng thái:** `READY` như nguyên tắc biên tập; disclaimer pháp lý cuối cần được duyệt.

---

### E09 Update log and contact

```text
LỊCH SỬ CẬP NHẬT
- [Ngày] Bổ sung số tiếp nhận công bố của Shampoo và Spray.
- [Ngày] Đối chiếu bản phiếu công bố.
- [Ngày] Bổ sung tài liệu kiểm nghiệm.

YÊU CẦU THÔNG TIN
Nếu cần xác minh thông tin sản phẩm, liên hệ qua email/hotline chính thức.
```

- Không tạo lịch sử giả; chỉ thêm entry khi hành động thật sự diễn ra.
- Email, hotline và pháp nhân phải được xác nhận trước production.

---

## 5. Responsive wireframe rules

### Homepage mobile order

1. Hero copy.
2. Hero product image.
3. Ba nguyên tắc thương hiệu.
4. Shampoo card.
5. Spray card.
6. Thông tin sản phẩm có thể kiểm tra.
7. Cách dùng.
8. Minh bạch.
9. FAQ.
10. Brand close/footer.

### Evidence mobile order

1. Breadcrumb + hero.
2. Status legend dạng stack.
3. Shampoo notification card.
4. Spray notification card.
5. Ingredient/usage sections.
6. Manufacturing.
7. Testing status.
8. Source library.
9. Methodology.
10. Update log/contact.

### Rules

- Không có horizontal scroll ở 375px.
- Body text tối thiểu 16px; metadata tối thiểu 12px và không chứa thông tin cốt lõi chỉ ở cỡ nhỏ.
- Bảng desktop chuyển thành stacked definition list/card trên mobile.
- Evidence metadata dùng label-value, không ép nhiều cột hẹp.
- Mọi anchor target có `scroll-margin-top` theo chiều cao header.
- Không có carousel tự chạy.
- Link nguồn mở tab mới chỉ khi cần; phải báo bằng accessible text/icon.

---

## 6. Component requirements

| Component | Dùng ở đâu | Trạng thái cần có |
|---|---|---|
| Header/navigation | Cả hai trang | Default, scrolled, menu open, active page, focus |
| Hero | Cả hai trang | Desktop split, mobile stack |
| Principle card | Homepage | Default, link optional |
| Product role card | Homepage | Shampoo/Spray variant |
| Trust information card | Homepage | Source available, conditional, unavailable |
| Status badge | Evidence | Đã đối chiếu, thương hiệu cung cấp, chưa công bố |
| Evidence card | Evidence | Source link available/unavailable |
| Ingredient disclosure | Evidence | Shampoo/Spray, expanded/collapsed nếu cần |
| Empty state | Evidence | Không có tài liệu, có giải thích và không hứa thời gian |
| FAQ accordion | Homepage | Closed/open/focus |
| Update log | Evidence | Entry list, empty state |
| Footer | Cả hai trang | Full legal/contact data khi được xác nhận |

---

## 7. Content gates before implementation

### Có thể code ngay

- Navigation, layout, typography, responsive grid.
- Homepage hero và nguyên tắc thương hiệu.
- Product role cards với wording bám S1/S2.
- Cách dùng cơ bản.
- Khung Evidence page, status system, methodology và empty states.
- Loại bỏ Before/After AI khỏi homepage trust flow.

### Có thể code nhưng chưa xuất bản production

- Hai số tiếp nhận `28338/26/CBMP-HN` và `28222/26/CBMP-HN` trước khi đối chiếu bản phiếu.
- INCI/công dụng bản nháp trước khi đối chiếu artwork/hồ sơ cuối.
- Thông tin nơi sản xuất trước khi xác nhận hồ sơ hiện hành.

### Chưa viết như nội dung chắc chắn

- Spray là leave-on/không cần xả lại.
- Postbiotic và tác động lên microbiome.
- Hiệu quả cân bằng hệ vi sinh của thành phẩm.
- EU Standard/European-grade.
- Kết quả kiểm nghiệm, thời gian cải thiện hoặc review hiệu quả.

---

## 8. Acceptance criteria

Wireframe được coi là sẵn sàng để chuyển sang HTML/CSS khi:

- Homepage trả lời được bốn câu hỏi niềm tin ở đầu tài liệu.
- Không có CTA mua hàng nổi bật hoặc sticky sales bar.
- Mọi claim đều có trạng thái READY/CONDITIONAL/INTERNAL trong tài liệu làm việc.
- Hai vai trò Shampoo/Spray được mô tả đúng S1/S2, không tự thêm lợi ích.
- Hai số tiếp nhận được gắn trạng thái chờ đối chiếu tài liệu gốc.
- Trang Bằng chứng phân biệt rõ thành phẩm, nguyên liệu và kiến thức nền.
- Empty state không tạo cảm giác tài liệu đã tồn tại hoặc sắp có chắc chắn.
- Mobile order rõ và không phụ thuộc layout desktop để hiểu nội dung.
- Before/After AI không xuất hiện trong luồng tạo niềm tin.
- Navigation và interactive component có yêu cầu keyboard/accessibility cụ thể.

---

## 9. Bước sau wireframe

Sau khi duyệt wireframe này, triển khai theo thứ tự:

1. Refactor `_web/index.html` thành homepage trust-first.
2. Sửa mobile hero và loại sticky contact bar.
3. Loại section Before/After AI khỏi homepage.
4. Tạo `/bang-chung/index.html` từ Evidence wireframe.
5. Render desktop/mobile và kiểm tra keyboard, contrast, reduced motion.
6. Chỉ sau đó mới triển khai các trang Cơ chế, Sản phẩm và Thương hiệu.
