"use client";

import { useState, useEffect } from "react";
import { TEMPLATE_NOTES, buildCommand, ytEmbed, videoSrc } from "@/lib/data";

export default function TemplateModal({ template, category, onClose }) {
  const [copied, setCopied] = useState(false);
  const [mp4Ok, setMp4Ok] = useState(true);

  // Đóng bằng phím Esc + khoá scroll nền khi modal mở
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!template) return null;

  const isFree = template.price === "Miễn Phí";
  const path = template.cmd || `${category.ns}/${template.slug}`;
  const command = buildCommand(path);
  const mp4 = template.video || videoSrc(category.ns, template.slug);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
      /* fallback: chọn text thủ công */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  // Ưu tiên: YouTube (yt) → MP4 nội bộ (video) → khung placeholder
  const renderPreview = () => {
    if (template.yt) {
      return (
        <iframe
          className="preview-video"
          src={ytEmbed(template.yt)}
          title={template.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    if (template.video && mp4Ok) {
      return (
        <video
          className="preview-video"
          src={mp4}
          controls
          autoPlay
          loop
          muted
          playsInline
          onError={() => setMp4Ok(false)}
        />
      );
    }
    return (
      <>
        <div className="preview-grid" />
        <div className="preview-brand">
          <span className="dot">▶</span> quanxuanle ai
        </div>
        <div className="preview-center">
          <div className="preview-frame">
            <div className="pf-title">{template.title}</div>
            <div className="pf-sub">Video xem trước đang được cập nhật</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={template.title}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Preview bên trái */}
        <div className="modal-preview">{renderPreview()}</div>

        {/* Chi tiết bên phải */}
        <div className="modal-body">
          <button className="modal-close" onClick={onClose} aria-label="Đóng">
            ✕
          </button>

          <div className="modal-tags">
            {isFree ? (
              <span className="tag tag-free">Free</span>
            ) : (
              <span className="tag tag-price">{template.price}</span>
            )}
            <span className="tag tag-cat">{category.name}</span>
            {template.tag && <span className="tag tag-new">{template.tag}</span>}
          </div>

          <h2 className="modal-title">{template.title}</h2>

          <p className="note note-strong">
            {"Chú ý: Để dùng template bạn phải có bản "}
            <a href="/#pricing" className="note-link">
              Premium Video
            </a>
            .
          </p>
          <p className="note note-strong">{TEMPLATE_NOTES.drive}</p>
          <p className="modal-desc">{template.desc}</p>

          <div className="cmd-block">
            <div className="cmd-label">Câu lệnh tạo video</div>
            <div className="cmd-row">
              <input className="cmd-input" value={command} readOnly />
              <button className="btn-copy" onClick={copy}>
                {copied ? "✓ Đã copy" : "⧉ Copy lệnh"}
              </button>
            </div>
          </div>

          <div className="fit-block">
            <div className="fit-label">Phù hợp cho</div>
            <p className="fit-text">{template.fit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
