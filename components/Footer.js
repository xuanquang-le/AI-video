import { BRAND } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="brand">
          <span className="logo">▶</span>
          <span>
            <span className="grad">quanxuanle</span>-AI
          </span>
        </div>
        <div>{BRAND.tagline}</div>
        <div className="copy">
          © {BRAND.year} {BRAND.name}. Mọi quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
