"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplateModal from "@/components/TemplateModal";
import { categories, ytEmbedGif } from "@/lib/data";

function TemplateCard({ t, onOpen }) {
  const isFree = t.price === "Miễn Phí";
  const thumbRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Chỉ tải video khi card cuộn tới gần viewport (tránh tải 24 video cùng lúc)
  useEffect(() => {
    const el = thumbRef.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "250px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  let media;
  if (inView && t.yt) {
    media = (
      <iframe
        className="thumb-media"
        src={ytEmbedGif(t.yt)}
        title={t.title}
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        aria-hidden="true"
      />
    );
  } else if (inView && t.video) {
    media = (
      <video
        className="thumb-media"
        src={t.video}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  } else {
    media = (
      <div className="thumb-fallback">
        <span>{inView ? "Video đang cập nhật" : ""}</span>
      </div>
    );
  }

  return (
    <div
      className="tpl-card"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
    >
      <div className="tpl-thumb" ref={thumbRef}>
        {media}
        <div className="badges">
          {isFree ? (
            <span className="badge free">Miễn Phí</span>
          ) : (
            <span className="badge price">{t.price}</span>
          )}
          {t.tag && <span className="badge new">{t.tag}</span>}
        </div>
      </div>
      <div className="tpl-body">
        <h4>{t.title}</h4>
        <p>{t.desc}</p>
      </div>
    </div>
  );
}

export default function TemplatesPage() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null); // { template, category }

  const shown =
    active === "all" ? categories : categories.filter((c) => c.slug === active);

  return (
    <>
      <Header />

      <section className="tpl-intro">
        <div className="container">
          <h1>Kho template video dựng sẵn.</h1>
          <ul>
            <li>Kho template bao gồm mọi lĩnh vực, mọi ngành nghề.</li>
            <li>Để sử dụng được template bạn cần phải có bản Premium Video.</li>
            <li>quanxuanle sẽ giúp bạn setup cài đặt, hướng dẫn sử dụng nếu bạn chưa biết.</li>
            <li>
              Không mất phí hàng tháng, các template free mà bạn thấy thiếu, liên hệ
              quanxuanle để lấy.
            </li>
            <li>
              Các template liên tục cập nhật, bạn nhớ theo dõi để thêm mẫu video mới vào
              công cụ.
            </li>
            <li>Cần template theo phong cách cá nhân hãy liên hệ với quanxuanle.</li>
          </ul>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 24 }}>Lọc theo lĩnh vực</h2>
            <p>Chọn một nhóm template để xem nhanh hơn.</p>
          </div>
          <div className="chips" style={{ marginBottom: 50 }}>
            <span
              className={`chip${active === "all" ? " active" : ""}`}
              onClick={() => setActive("all")}
            >
              Tất cả lĩnh vực
            </span>
            {categories.map((c) => (
              <span
                key={c.slug}
                className={`chip${active === c.slug ? " active" : ""}`}
                onClick={() => setActive(c.slug)}
              >
                {c.name}
              </span>
            ))}
          </div>

          {shown.map((c) => (
            <div className="cat-block" key={c.slug}>
              <div className="cat-head">
                <div>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
                <span className="see">Xem tất cả →</span>
              </div>
              <div className="tpl-grid">
                {c.templates.map((t) => (
                  <TemplateCard
                    t={t}
                    key={t.title}
                    onOpen={() => setSelected({ template: t, category: c })}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {selected && (
        <TemplateModal
          template={selected.template}
          category={selected.category}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
