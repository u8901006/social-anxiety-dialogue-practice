import type { DialogueChoice } from "@/lib/types";
import { CHOICE_TYPE_LABELS } from "@/lib/types";

const EFFECTIVENESS_DOTS = { 1: "●○○", 2: "●●○", 3: "●●●" } as const;

export default function ChoiceButton({
  choice,
  index,
  onChoose,
  disabled,
}: {
  choice: DialogueChoice;
  index: number;
  onChoose: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onChoose}
      disabled={disabled}
      className="group w-full rounded-2xl border border-line bg-surface p-4 text-left transition enabled:hover:border-accent enabled:hover:bg-accent-soft/30 enabled:hover:shadow-card disabled:opacity-60"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-soft/60 text-sm font-bold text-accent transition group-hover:bg-accent group-hover:text-white">
          {String.fromCharCode(65 + index)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="leading-relaxed text-ink">{choice.text}</p>
          <div className="mt-1.5 flex items-center gap-3 text-[11px] text-muted">
            <span>{CHOICE_TYPE_LABELS[choice.choiceType]}</span>
            <span className="text-accent/70" title="成效評分">
              {EFFECTIVENESS_DOTS[choice.effectiveness]}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
