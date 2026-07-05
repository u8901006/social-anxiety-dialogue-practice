import { notFound } from "next/navigation";
import { SCENARIOS } from "@/data/scenarios";
import { SCRIPTS } from "@/data/scripts-index";
import DialogueClient from "./DialogueClient";

export function generateStaticParams() {
  return SCENARIOS.map((s) => ({ scenario: s.id }));
}

export function generateMetadata({ params }: { params: Promise<{ scenario: string }> }) {
  return params.then((p) => {
    const info = SCENARIOS.find((s) => s.id === p.scenario);
    return { title: info ? `${info.emoji} ${info.name} · 社交焦慮對話練習` : "社交焦慮對話練習" };
  });
}

export default async function ScenarioPage({ params }: { params: Promise<{ scenario: string }> }) {
  const { scenario } = await params;
  const info = SCENARIOS.find((s) => s.id === scenario);
  if (!info) notFound();
  const script = SCRIPTS[info.id];
  return <DialogueClient info={info} script={script} />;
}
