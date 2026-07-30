import "./globals.css";
import { BRAND } from "@/lib/data";

export const metadata = {
  metadataBase: new URL("https://quanxuanle.ai"),
  title: `${BRAND.name} - Tạo Video Thần Tốc`,
  description:
    "Biến ý tưởng thành video hoàn chỉnh, giúp bạn xây kênh, bán hàng, làm nội dung chia sẻ, tạo thương hiệu.",
  applicationName: BRAND.name,
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  keywords: [
    BRAND.name,
    "tạo video AI",
    "AI video generator",
    "tạo video bằng AI",
    "công cụ tạo video",
    "template video AI",
    "video TikTok",
    "video Reels",
    "video Shorts",
    "render MP4",
    "giọng nói AI",
    "phụ đề tự động",
    "AI agent",
    "Claude",
    "ChatGPT",
    "Gemini",
    "Cursor",
  ],
  openGraph: {
    title: `${BRAND.name} - Tạo Video Thần Tốc`,
    description:
      "Biến ý tưởng thành video hoàn chỉnh, giúp bạn xây kênh, bán hàng, làm nội dung chia sẻ, tạo thương hiệu.",
    siteName: BRAND.name,
    locale: "vi_VN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
