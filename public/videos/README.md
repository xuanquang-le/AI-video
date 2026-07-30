# Video xem trước cho template

Modal của mỗi template phát video theo thứ tự ưu tiên:

1. **YouTube** — trường `yt` (video ID) trong `lib/data.js`. Đây là cách đang dùng chính,
   nhúng bằng trình phát YouTube (không cần lưu file). 24/30 template đã có sẵn.
2. **MP4 nội bộ** — trường `video` (đường dẫn/URL) hoặc file đặt trong thư mục này theo tên
   `<ns>-<slug>.mp4`. Dùng khi bạn muốn tự host thay vì YouTube.
3. Nếu không có cả hai → modal hiện khung "Video xem trước đang được cập nhật".

## 6 template chưa có video (thêm khi có)

Mở `lib/data.js`, thêm `yt: "<youtube_id>"` (hoặc `video: "..."`) vào các template sau:

```
[AI tự sáng tạo]      Không gian spatial flow       (creative/spatial-flow)
[Bất động sản]        Kiến trúc, nhà ở              (news/real-estate-architecture)
[Nhân sinh - Cuộc đời] Cinematic Light              (life/cinematic-light)
[Nhân sinh - Cuộc đời] Cinematic Dark               (life/cinematic-dark)
[Nhân sinh - Cuộc đời] Cinematic dark background    (life/cinematic-dark-bg)
[Nhân sinh - Cuộc đời] Podcast youtube 16:9         (life/podcast-16-9)
```

## Ví dụ thêm video

Trong `lib/data.js`, ngay object template:

```js
// Dùng YouTube (lấy ID sau youtu.be/ hoặc watch?v=)
{ title: "Không gian spatial flow", yt: "XXXXXXXXXXX", ... }

// Hoặc dùng file MP4 riêng
{ title: "Kiến trúc, nhà ở", video: "/videos/realestate-architecture.mp4", ... }
```

Lưu ý bản quyền: chỉ nhúng/host video mà bạn có quyền sử dụng. Video nhúng YouTube vẫn
thuộc chủ kênh gốc — nếu là preview của bên khác, nên thay bằng video do bạn tự sản xuất.
