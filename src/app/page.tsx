"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { getMode, setMode } from "@/lib/logging";
import type { OrientationMode } from "@/lib/types";
import { MODE_LABELS } from "@/lib/types";

export default function HomePage() {
  const [mode, setModeState] = useState<OrientationMode>("cbt");

  useEffect(() => {
    setModeState(getMode());
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <div className="text-center">
        <div className="mb-4 text-5xl">💬</div>
        <h1 className="text-2xl font-bold text-ink">社交焦慮對話練習</h1>
        <p className="mt-2 text-sm text-accent">在情境裡做選擇，看見每個選擇的優點與代價</p>
      </div>

      <section className="surface-card mt-10 space-y-3 p-6 text-sm leading-relaxed text-ink">
        <p>
          你將扮演一位有社交焦慮的主角，在茶水間閒聊、會議發言、拒絕請求等日常情境中，面對 NPC 的對話並從三個選項裡做選擇。
        </p>
        <p>
          每次選擇後，你會立即看見這個選項的<strong className="text-accent">真實優點</strong>與<strong className="text-accent">真實代價</strong>——
          包含迴避也會寫出「焦慮立即下降」的好處，趨近也會寫出「焦慮先升高」的代價。沒有對錯，只有「短期舒緩 vs. 長期維持」的交換。
        </p>
        <p>
          回饋提供兩種治療取向的鏡頭：<strong>CBT（認知行為）</strong>與<strong>心理動力</strong>，可隨時用「雙鏡頭開關」並列比較。
        </p>
      </section>

      <section className="surface-card mt-6 p-6">
        <h2 className="mb-3 text-base font-semibold text-ink">研究設定</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted">預設治療取向鏡頭</label>
            <div className="grid grid-cols-2 gap-2">
              {(["cbt", "psychodynamic"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setMode(m);
                    setModeState(m);
                  }}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                    mode === m
                      ? "border-accent bg-accent text-white shadow-card"
                      : "border-line bg-surface text-ink hover:border-accent hover:bg-accent-soft/30"
                  }`}
                >
                  {MODE_LABELS[m]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 text-center">
        <Link href="/practice/" className="btn-primary text-base">
          開始練習 →
        </Link>
      </div>

      <div className="mt-6 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs leading-relaxed text-amber-800">
        <strong>研究聲明：</strong>本工具為研究原型與教育用途，<u>非心理治療、非臨床評估工具</u>。
        初期不作為人類受試者介入使用。有困擾請尋求專業協助（頁尾列有臺灣求助資源）。
      </div>

      <Footer />
    </main>
  );
}
