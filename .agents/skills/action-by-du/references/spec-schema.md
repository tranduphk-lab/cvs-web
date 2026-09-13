# Normalized specification

Action By Du dùng schema này như một hợp đồng nội bộ. Có thể biểu diễn bằng YAML hoặc JSON; không bắt buộc hiển thị toàn bộ cho người dùng.

```yaml
mode: REVISE | CORRECT | CONTINUE | TRANSFORM | EXECUTE | VERIFY | CLARIFY
objective: "Kết quả cuối cùng cần đạt"
target:
  kind: text | prompt | code | file | ui | data | research | other
  description: "Đối tượng cần tác động"
  source: "Kết quả trước, file, đường dẫn hoặc trạng thái liên quan"
problem:
  - "Điểm hiện tại chưa đạt"
requested_changes:
  - action: change | add | remove | preserve | investigate
    description: "Thay đổi cụ thể"
    priority: must | should | could
preserve:
  - "Điều kiện hoặc phần không được làm hỏng"
constraints:
  - "Ràng buộc kỹ thuật, nghiệp vụ, phong cách, quyền hạn hoặc chi phí"
facts:
  - "Dữ kiện do người dùng hoặc nguồn đáng tin cung cấp"
assumptions:
  - "Giả định cần dùng để tiến hành"
unknowns:
  - "Điểm chưa rõ nhưng chưa chắc là blocker"
acceptance_criteria:
  - "Điều kiện quan sát được để kết luận đạt"
action_plan:
  - "Hành động theo thứ tự cần thực hiện"
tools:
  - "Công cụ hoặc năng lực chuyên môn cần dùng"
risk:
  level: low | medium | high
  confirmation_required: true | false
verification:
  checks:
    - "Cách kiểm tra"
  evidence_required: true | false
```

## Cách điền schema

- `requested_changes` là phần điều khiển hành động; không để các mong muốn quan trọng chỉ nằm trong `problem`.
- `preserve` phải bao gồm cả các điều kiện phủ định như “không đổi”, “đừng xóa”, “giữ nguyên”.
- `facts` không được chứa suy luận của model.
- `acceptance_criteria` phải quan sát được. Thay “đẹp hơn” bằng các tiêu chí như phân cấp rõ hơn, ít thao tác hơn, không tràn màn hình, hoặc khớp mẫu tham chiếu.
- Nếu không có blocker, `unknowns` có thể giữ lại để báo cáo sau khi thực thi.
