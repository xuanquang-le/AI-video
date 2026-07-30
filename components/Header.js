import Link from "next/link";
import { BRAND } from "@/lib/data";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container inner">
        <Link href="/" className="brand">
          <span className="logo">▶</span>
          <span>
            <span className="grad">quanxuanle</span>-AI
          </span>
        </Link>
        <nav className="nav">
          <Link href="/#pricing">Công Cụ</Link>
          <Link href="/templates">Mẫu Video</Link>
        </nav>
      </div>
    </header>
  );
}
