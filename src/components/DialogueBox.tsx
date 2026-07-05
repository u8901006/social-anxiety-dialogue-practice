export default function DialogueBox({ text, npcName = "對方" }: { text: string; npcName?: string }) {
  return (
    <div className="surface-card animate-slide-up flex gap-3 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-lg">
        🗣️
      </div>
      <div className="min-w-0">
        <p className="mb-0.5 text-xs font-semibold text-accent">{npcName}</p>
        <p className="leading-relaxed text-ink">{text}</p>
      </div>
    </div>
  );
}
