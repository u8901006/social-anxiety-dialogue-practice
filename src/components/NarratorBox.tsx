export default function NarratorBox({ text }: { text: string }) {
  return (
    <div className="animate-fade-in rounded-xl border border-dashed border-line bg-surface/60 px-5 py-3 text-center">
      <p className="text-sm italic leading-relaxed text-muted">{text}</p>
    </div>
  );
}
