"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { OrientationMode, ScenarioInfo, ScenarioScript } from "@/lib/types";
import { CHOICE_TYPE_LABELS, CHOICE_TYPE_COLORS } from "@/lib/types";
import { getMode, getReviewContext, type ReviewContext } from "@/lib/logging";
import Footer from "@/components/Footer";

const TYPE_ORDER = [
  "approach-express",
  "approach-partial",
  "safety-behavior",
  "avoid-escape",
  "overcompensate",
] as const;

export default function ReviewClient({
  info,
  script,
}: {
  info: ScenarioInfo;
  script: ScenarioScript;
}) {
  const [ctx, setCtx] = useState<ReviewContext | null>(null);
  const [mode] = useState<OrientationMode>(getMode());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCtx(getReviewContext(info.id));
    setHydrated(true);
  }, [info.id]);

  if (!hydrated) return null;

  if (!ctx) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-16 text-center">
        <p className="text-sm text-muted">尚未有本次情境的回顧資料。</p>
        <p className="mt-1 text-xs text-muted">（回顧資料僅存在當前瀏覽器分頁，重新整理後會清除）</p>
        <Link href={`/practice/${info.id}/`} className="btn-primary mt-6 inline-flex">重新練習</Link>
        <Footer />
      </main>
    );
  }

  const distribution: Record<string, number> = {};
  for (const t of TYPE_ORDER) distribution[t] = 0;
  for (const h of ctx.history) distribution[h.choiceType] = (distribution[h.choiceType] ?? 0) + 1;

  const poleCount = { defense: 0, anxiety: 0, feeling: 0 };
  for (const h of ctx.history) {
    if (h.trianglePole === "defense") poleCount.defense += 1;
    else if (h.trianglePole === "anxiety") poleCount.anxiety += 1;
    else if (h.trianglePole === "feeling") poleCount.feeling += 1;
  }

  const tierLabel = { approach: "趨近", partial: "部分趨近", resistant: "仍在迴避" }[ctx.tier];
  const tierColor = {
    approach: "text-emerald-700",
    partial: "text-amber-700",
    resistant: "text-rose-700",
  }[ctx.tier];

  const autoThoughts = ctx.history.filter((h) => h.automaticThought);
  const hiddenFeelings = ctx.history.filter((h) => h.hiddenFeeling);

  function downloadJson() {
    const blob = new Blob(
      [JSON.stringify({ scenario: info.id, review: ctx }, null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `avatar-social_review_${info.id}_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/practice/" className="text-xs text-muted hover:text-accent">← 情境清單</Link>
        <Link href={`/practice/${info.id}/`} className="text-xs text-accent hover:underline">重新練習 →</Link>
      </div>

      <h1 className="text-xl font-bold text-ink">回顧：{info.name}</h1>
      <p className="mt-1 text-sm text-muted">本次選擇的軌跡與取向分析</p>

      {/* 總覽 + SUDS */}
      <section className="surface-card mt-5 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted">表現層級</p>
            <p className={`text-xl font-bold ${tierColor}`}>{tierLabel}</p>
            <p className="text-xs text-muted">成效 {ctx.score}/{ctx.maxScore}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted">SUDS 前後測</p>
            <p className="text-2xl font-bold text-accent tabular-nums">
              {ctx.sudsPre} → {ctx.sudsPost}
            </p>
            <p className={`text-xs font-medium ${ctx.sudsPost <= ctx.sudsPre ? "text-emerald-700" : "text-amber-700"}`}>
              {ctx.sudsPost < ctx.sudsPre ? `下降 ${ctx.sudsPre - ctx.sudsPost}` : ctx.sudsPost > ctx.sudsPre ? `上升 ${ctx.sudsPost - ctx.sudsPre}` : "持平"} 分
            </p>
          </div>
        </div>
      </section>

      {/* 選擇軌跡時間軸 */}
      <section className="mt-6">
        <h2 className="mb-3 text-base font-semibold text-ink">選擇軌跡</h2>
        <ol className="space-y-2.5">
          {ctx.history.map((h, i) => (
            <li key={i} className="surface-card p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">回合 {i + 1}</span>
                <span className={`text-xs font-medium ${CHOICE_TYPE_COLORS[h.choiceType as keyof typeof CHOICE_TYPE_COLORS] ?? ""}`}>
                  {CHOICE_TYPE_LABELS[h.choiceType as keyof typeof CHOICE_TYPE_LABELS] ?? h.choiceType} · {h.effectiveness}/3
                </span>
              </div>
              <p className="mt-1.5 text-xs text-muted">「{h.nodeText}」</p>
              <p className="mt-1 text-sm text-ink">→ {h.choiceText}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 回應類型分布 */}
      <section className="surface-card mt-6 p-5">
        <h2 className="mb-3 text-base font-semibold text-ink">回應類型分布</h2>
        <div className="space-y-2">
          {TYPE_ORDER.map((t) => {
            const count = distribution[t] ?? 0;
            const pct = ctx.history.length ? (count / ctx.history.length) * 100 : 0;
            return (
              <div key={t} className="flex items-center gap-3">
                <span className="w-24 shrink-0 text-xs text-muted">{CHOICE_TYPE_LABELS[t]}</span>
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-line/40">
                  <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${pct}%` }} />
                </div>
                <span className="w-6 text-right text-xs font-medium text-ink tabular-nums">{count}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 取向分析（依模式） */}
      {mode === "cbt" ? (
        <section className="surface-card mt-6 p-5">
          <h2 className="mb-1 text-base font-semibold text-ink">CBT 分析：出現過的自動化想法</h2>
          {autoThoughts.length === 0 ? (
            <p className="text-sm text-muted">本回合沒有自動化想法記錄。</p>
          ) : (
            <div className="mt-3 space-y-3">
              {autoThoughts.map((h, i) => (
                <div key={i} className="rounded-xl bg-surface/70 p-3 ring-1 ring-line/40">
                  <p className="text-xs text-accent">自動化想法：{h.automaticThought}</p>
                  {h.bias && <p className="mt-1 text-xs"><span className="text-muted">偏誤：</span><span className="rounded bg-accent-soft/50 px-1.5 text-accent-deep">{h.bias}</span></p>}
                  {h.disputing && <p className="mt-1 text-xs"><span className="text-muted">辯駁：</span><span className="text-ink">{h.disputing}</span></p>}
                </div>
              ))}
              <div className="rounded-xl bg-accent-soft/30 p-4">
                <p className="text-xs font-semibold text-accent">帶得走的理性回應</p>
                <ul className="mt-1.5 space-y-1">
                  {autoThoughts.filter((h) => h.rationalResponse).map((h, i) => (
                    <li key={i} className="text-sm italic text-ink">「{h.rationalResponse}」</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      ) : (
        <section className="surface-card mt-6 p-5">
          <h2 className="mb-1 text-base font-semibold text-ink">心理動力分析：衝突三角形分布</h2>
          <div className="mt-3 grid grid-cols-3 gap-3 text-center">
            {([
              { key: "defense", label: "防衛（D）", color: "text-rose-700", bar: "bg-rose-400" },
              { key: "anxiety", label: "焦慮（A）", color: "text-amber-700", bar: "bg-amber-400" },
              { key: "feeling", label: "真實情感（F）", color: "text-emerald-700", bar: "bg-emerald-400" },
            ] as const).map((p) => (
              <div key={p.key} className="rounded-xl bg-surface/70 p-3 ring-1 ring-line/40">
                <p className={`text-2xl font-bold ${p.color}`}>{poleCount[p.key]}</p>
                <p className="text-xs text-muted">{p.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            {poleCount.defense >= poleCount.feeling
              ? "本次最常使用防衛機制。被擋住的真實情感是："
              : "本次有多次直接表達真實情感，防衛正在鬆動。"}
          </p>
          {hiddenFeelings.length > 0 && (
            <ul className="mt-1.5 space-y-1">
              {hiddenFeelings.map((h, i) => (
                <li key={i} className="text-sm text-ink">· {h.hiddenFeeling}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* 結語建議 */}
      <section className="surface-card mt-6 p-5">
        <p className="text-sm leading-relaxed text-ink">{script.endings[ctx.tier === "resistant" ? "avoid" : ctx.tier].suggestion}</p>
      </section>

      {/* 匯出 */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button onClick={downloadJson} className="btn-ghost text-sm">⬇ 匯出本次回顧（JSON）</button>
        <Link href="/export/" className="btn-ghost text-sm">匯出 SUDS 紀錄</Link>
      </div>

      <Footer />
    </main>
  );
}
