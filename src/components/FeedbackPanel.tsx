"use client";

import { useState } from "react";
import type { ChoiceFeedback, OrientationMode } from "@/lib/types";

const POLE_LABEL = {
  defense: "防衛（D）",
  anxiety: "焦慮（A）",
  feeling: "真實情感（F）",
} as const;

function LensBlock({ fb, mode }: { fb: ChoiceFeedback; mode: OrientationMode }) {
  if (mode === "cbt") {
    return (
      <div className="space-y-2.5">
        {fb.cbt.automaticThought && (
          <div>
            <span className="text-xs font-semibold text-accent">自動化想法　</span>
            <span className="text-sm text-ink">{fb.cbt.automaticThought}</span>
          </div>
        )}
        {fb.cbt.bias && (
          <div>
            <span className="text-xs font-semibold text-accent">認知偏誤　</span>
            <span className="rounded bg-accent-soft/50 px-1.5 py-0.5 text-xs text-accent-deep">{fb.cbt.bias}</span>
          </div>
        )}
        <div>
          <span className="text-xs font-semibold text-accent">辯駁問題　</span>
          <span className="text-sm text-ink">{fb.cbt.disputing}</span>
        </div>
        <div>
          <span className="text-xs font-semibold text-accent">理性回應　</span>
          <span className="text-sm italic text-muted">「{fb.cbt.rationalResponse}」</span>
        </div>
        <p className="text-[11px] text-muted/70">出處：{fb.cbt.source}</p>
      </div>
    );
  }
  return (
    <div className="space-y-2.5">
      <div>
        <span className="text-xs font-semibold text-accent">衝突三角形　</span>
        <span className="rounded bg-accent-soft/50 px-1.5 py-0.5 text-xs text-accent-deep">
          {POLE_LABEL[fb.psychodynamic.trianglePole]}
        </span>
      </div>
      {fb.psychodynamic.hiddenFeeling && (
        <div>
          <span className="text-xs font-semibold text-accent">被擋住的感受　</span>
          <span className="text-sm text-ink">{fb.psychodynamic.hiddenFeeling}</span>
        </div>
      )}
      <div>
        <span className="text-xs font-semibold text-accent">覺察引導　</span>
        <span className="text-sm italic leading-relaxed text-muted">{fb.psychodynamic.note}</span>
      </div>
      <p className="text-[11px] text-muted/70">出處：{fb.psychodynamic.source}</p>
    </div>
  );
}

export default function FeedbackPanel({
  feedback,
  mode,
  dualLens,
}: {
  feedback: ChoiceFeedback;
  mode: OrientationMode;
  dualLens: boolean;
}) {
  const [tab, setTab] = useState<OrientationMode>(mode);
  const showDual = dualLens;

  const body = showDual ? (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl bg-surface/70 p-4 ring-1 ring-line/50">
        <p className="mb-2 text-xs font-bold text-accent">CBT 鏡頭</p>
        <LensBlock fb={feedback} mode="cbt" />
      </div>
      <div className="rounded-xl bg-surface/70 p-4 ring-1 ring-line/50">
        <p className="mb-2 text-xs font-bold text-accent">心理動力鏡頭</p>
        <LensBlock fb={feedback} mode="psychodynamic" />
      </div>
    </div>
  ) : (
    <div className="rounded-xl bg-surface/70 p-4 ring-1 ring-line/50">
      <div className="mb-3 flex gap-1.5">
        <button
          onClick={() => setTab("cbt")}
          className={`rounded-lg px-3 py-1 text-xs font-medium transition ${
            tab === "cbt" ? "bg-accent text-white" : "bg-surface text-muted hover:text-accent"
          }`}
        >
          CBT
        </button>
        <button
          onClick={() => setTab("psychodynamic")}
          className={`rounded-lg px-3 py-1 text-xs font-medium transition ${
            tab === "psychodynamic" ? "bg-accent text-white" : "bg-surface text-muted hover:text-accent"
          }`}
        >
          心理動力
        </button>
      </div>
      <LensBlock fb={feedback} mode={tab} />
    </div>
  );

  return (
    <div className="surface-card animate-fade-in border-accent-soft p-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-bold text-emerald-700">✓ 這個選擇的優點</p>
          <ul className="space-y-1.5">
            {feedback.pros.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink">
                <span className="text-emerald-600">·</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-sm font-bold text-rose-700">⇅ 這個選擇的代價</p>
          <ul className="space-y-1.5">
            {feedback.cons.map((c, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink">
                <span className="text-rose-500">·</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-4 border-t border-line/50" />
      {body}
    </div>
  );
}
