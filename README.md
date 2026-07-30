# quanxuanle-AI

Landing page + kho templates cho công cụ tạo video AI **quanxuanle-AI** (dựng lại giao diện theo phong cách tramai.net, đã đổi thương hiệu).

Xây bằng **Next.js 14 (App Router)** + React 18, CSS thuần (không cần Tailwind).

## Chạy local

```bash
cd quanxuanle-ai
npm install
npm run dev
```

Mở http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## Cấu trúc

```
app/
  layout.js          # metadata SEO, khung html
  globals.css        # toàn bộ style (dark theme)
  page.js            # trang chủ: hero, templates preview, pricing, liên hệ, FAQ
  templates/page.js  # kho templates, lọc theo lĩnh vực (client component)
components/
  Header.js          # thanh điều hướng + logo
  Footer.js
lib/
  data.js            # dữ liệu: categories, pricing, faqs, BRAND
```

## Tuỳ chỉnh

- Đổi tên/tagline/năm: sửa object `BRAND` trong `lib/data.js`.
- Thêm/sửa template: sửa mảng `categories` trong `lib/data.js`.
- Đổi gói giá: sửa mảng `pricing`.
- Màu sắc/thương hiệu: sửa biến `:root` đầu `app/globals.css`.
- Thay ảnh preview: hiện dùng khối gradient placeholder trong `.tpl-thumb` / `.video-frame`;
  thêm ảnh vào `public/` rồi dùng `next/image` khi có asset thật.

## Ghi chú

Đây là bản dựng lại giao diện (front-end). Chức năng tạo video / thanh toán thực tế
chưa được tích hợp — nút bấm hiện là placeholder, cần nối backend riêng của bạn.
