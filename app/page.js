import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pricing, faqs, categories } from "@/lib/data";

const previewCats = [
  "Nhà đất - Kiến trúc",
  "AI sáng tạo",
  "Tiềm thức người que",
  "Giải trí - Sao",
  "Du Lịch",
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Xây Kênh Thần Tốc - Tạo Mốc Thương Hiệu</span>
          <h1>Biến ý tưởng thành video chỉ với một câu lệnh</h1>
          <div className="hero-actions">
            <Link href="#pricing" className="btn btn-primary">
              Chọn Công Cụ
            </Link>
            <Link href="https://www.youtube.com/watch?v=X_OL65Wk2vo" className="btn btn-ghost">
              Video Thực Tế
            </Link>
          </div>
          <div className="video-frame" src="https://www.youtube.com/embed/X_OL65Wk2vo" id="demo">
            <div className="play">▶</div>
            <span className="cap">Video demo</span>
          </div>
          <p className="sub">
            AI tự lên kịch bản, tạo chuyển động, hoạt ảnh, giọng đọc, nhạc nền, phụ đề và
            xuất video MP4 từ nội dung bạn nhập trong 5-10 phút.
          </p>
        </div>
      </section>

      {/* Templates preview */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Template video thực tế</h2>
            <p>
              Chọn các phong cách có sẵn, phục vụ tất cả các lĩnh vực, hỗ trợ cập nhật
              template lâu dài, bạn cũng có thể tạo hoặc nhờ quanxuanle làm template theo
              phong cách của bạn.
            </p>
          </div>
          <div className="chips" style={{ marginBottom: 30 }}>
            {previewCats.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/templates" className="btn btn-ghost">
              Tất cả templates
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="section-head">
            <h2>Chọn đúng mức bạn cần</h2>
            <p>
              Mua một lần, hỗ trợ dùng trọn đời. Giúp cài đặt, hướng dẫn sử dụng công cụ miễn
              phí. Bạn nên đọc những điều này trước khi chọn gói.
            </p>
          </div>
          <div className="pricing-grid">
            {pricing.map((p) => (
              <div className={`price-card${p.featured ? " featured" : ""}`} key={p.name}>
                <h3>{p.name}</h3>
                <div className="blurb">{p.blurb}</div>
                <div className="amount">
                  {p.price}
                  <span> {p.unit}</span>
                </div>
                <div className="who">{p.who}</div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <button className={`btn ${p.featured ? "btn-primary" : "btn-ghost"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Cần hỗ trợ trước hoặc sau khi mua?</h2>
            <p>Liên hệ trực tiếp qua các kênh của quanxuanle-AI. Nếu gặp bất kì sự cố gì.</p>
          </div>
          <div className="contact-links">
            <a className="btn btn-ghost" href="https://www.facebook.com/lexuanquang.lexus/">
              Facebook
            </a>
            <a className="btn btn-ghost" href="https://www.tiktok.com/@xuanquangle148">
              TikTok
            </a>
            <a className="btn btn-ghost" href="#">
              Zalo
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="section-head">
            <h2>Câu hỏi thường gặp</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
