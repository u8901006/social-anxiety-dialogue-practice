import Link from "next/link";
import Footer from "@/components/Footer";
import ScenarioCard from "@/components/ScenarioCard";
import { SCENARIOS } from "@/data/scenarios";

export default function PracticeListPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Link href="/" className="text-xs text-muted hover:text-accent">← 返回首頁</Link>
          <h1 className="mt-1 text-2xl font-bold text-ink">選擇練習情境</h1>
          <p className="mt-1 text-sm text-muted">依難度由低到高排列，建議循序挑戰</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {SCENARIOS.map((s) => (
          <ScenarioCard key={s.id} scenario={s} />
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-surface/70 border border-line/60 px-4 py-3 text-xs leading-relaxed text-muted">
        <p className="mb-1"><strong className="text-ink/70">難度說明：</strong>★ 入門（低暴露） → ★★★ 挑戰（高暴露）。難度對應暴露治療中的「焦慮階層」概念。</p>
        <p>每個情境結束後會記錄 SUDS 主觀焦慮前後測（匿名），可匯出 JSON 供研究使用。</p>
      </div>

      <Footer />
    </main>
  );
}
