import Link from "next/link";
import type { ScenarioInfo } from "@/lib/types";

const DIFFICULTY_LABEL = { 1: "入門 ★", 2: "中階 ★★", 3: "挑戰 ★★★" } as const;

export default function ScenarioCard({ scenario }: { scenario: ScenarioInfo }) {
  return (
    <Link
      href={`/practice/${scenario.id}/`}
      className="surface-card group flex flex-col gap-3 p-5 transition hover:-translate-y-0.5 hover:shadow-lift hover:border-accent"
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl">{scenario.emoji}</span>
        <span className="rounded-full bg-accent-soft/50 px-2.5 py-0.5 text-xs font-medium text-accent">
          {DIFFICULTY_LABEL[scenario.difficulty]}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-ink">{scenario.name}</h3>
      <p className="text-sm text-muted line-clamp-2">{scenario.setting}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        <span className="rounded-md bg-surface px-2 py-0.5 text-[11px] text-accent border border-line/60">CBT：{scenario.cbtFocus}</span>
        <span className="rounded-md bg-surface px-2 py-0.5 text-[11px] text-accent border border-line/60">動力：{scenario.pdFocus}</span>
      </div>
    </Link>
  );
}
