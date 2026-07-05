"use client";

export default function LensToggle({
  dualLens,
  onChange,
}: {
  dualLens: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-line bg-surface/70 px-3 py-1.5 text-xs">
      <span className="text-muted">雙鏡頭並列</span>
      <span
        className={`relative inline-block h-5 w-9 rounded-full transition ${
          dualLens ? "bg-accent" : "bg-line"
        }`}
        onClick={() => onChange(!dualLens)}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
            dualLens ? "left-[18px]" : "left-0.5"
          }`}
        />
      </span>
      <input type="checkbox" checked={dualLens} onChange={(e) => onChange(e.target.checked)} className="sr-only" />
    </label>
  );
}
