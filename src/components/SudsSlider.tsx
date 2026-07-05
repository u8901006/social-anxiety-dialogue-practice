"use client";

import { useState } from "react";

export default function SudsSlider({
  label,
  onSubmit,
  submitLabel = "繼續",
}: {
  label: string;
  onSubmit: (value: number) => void;
  submitLabel?: string;
}) {
  const [value, setValue] = useState(50);

  const tone =
    value < 25 ? "放鬆" : value < 50 ? "微緊張" : value < 75 ? "明顯焦慮" : "強烈焦慮";
  const barColor =
    value < 25
      ? "bg-emerald-500"
      : value < 50
        ? "bg-lime-500"
        : value < 75
          ? "bg-amber-500"
          : "bg-rose-500";

  return (
    <div className="surface-card animate-slide-up p-6">
      <h3 className="mb-1 text-base font-semibold text-ink">{label}</h3>
      <p className="mb-5 text-sm text-muted">請依此刻的真實感受滑動，0＝完全放鬆，100＝極度焦慮</p>

      <div className="mb-2 flex items-end justify-between">
        <span className="text-sm text-muted">0</span>
        <span className="text-3xl font-bold text-accent tabular-nums">{value}</span>
        <span className="text-sm text-muted">100</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-accent"
      />
      <div className="mt-1 flex justify-center">
        <span className={`rounded-full px-3 py-0.5 text-xs font-medium text-white ${barColor}`}>{tone}</span>
      </div>

      <div className="mt-6 flex justify-center">
        <button onClick={() => onSubmit(value)} className="btn-primary w-full sm:w-auto">
          {submitLabel}
        </button>
      </div>
    </div>
  );
}
