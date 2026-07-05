import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line/60 pt-8 pb-12 text-center">
      <div className="mx-auto max-w-2xl space-y-4">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-accent">
          <Link href="https://www.leepsyclinic.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            李政洋身心診所
          </Link>
          <span className="text-line">·</span>
          <Link href="https://blog.leepsyclinic.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            訂閱電子報
          </Link>
          <span className="text-line">·</span>
          <Link href="https://www.buymeacoffee.com/CYlee" target="_blank" rel="noopener noreferrer" className="hover:underline">
            ☕ Buy me a coffee
          </Link>
        </nav>

        <div className="rounded-xl bg-surface/70 px-4 py-3 text-xs text-muted">
          <p className="mb-1 font-medium text-ink/80">臺灣求助資源（24 小時）</p>
          <p>安心專線 <strong className="text-accent">1925</strong> ／ 張老師 <strong className="text-accent">1980</strong> ／ 生命線 <strong className="text-accent">1995</strong></p>
        </div>

        <p className="text-xs leading-relaxed text-muted">
          本工具為<strong className="text-ink/70">研究原型與教育用途，非心理治療、非臨床評估工具</strong>。
          若您正經歷顯著困擾，請尋求精神醫療或心理專業協助。
        </p>
        <p className="text-xs text-muted/70">© {new Date().getFullYear()} 社交焦慮對話練習 · 研究原型</p>
      </div>
    </footer>
  );
}
