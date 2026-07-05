"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { DialogueChoice, OrientationMode, ScenarioInfo, ScenarioScript, UiSettings } from "@/lib/types";
import { CHOICE_TYPE_LABELS, MODE_LABELS } from "@/lib/types";
import { applyChoice, createEngineState, getCurrentNode, shuffle } from "@/lib/dialogue-engine";
import { computeScore, maxPossibleScore, scoreTier } from "@/lib/scoring";
import { getMode, getPid, getUiSettings, logSession, setUiSettings, saveReviewContext } from "@/lib/logging";
import DialogueBox from "@/components/DialogueBox";
import NarratorBox from "@/components/NarratorBox";
import ChoiceButton from "@/components/ChoiceButton";
import FeedbackPanel from "@/components/FeedbackPanel";
import SudsSlider from "@/components/SudsSlider";
import LensToggle from "@/components/LensToggle";

type Phase = "intro" | "sudsPre" | "node" | "feedback" | "ending" | "sudsPost";

export default function DialogueClient({
  info,
  script,
}: {
  info: ScenarioInfo;
  script: ScenarioScript;
}) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [mode] = useState<OrientationMode>(getMode());
  const [pid] = useState(getPid());
  const [ui, setUi] = useState<UiSettings>({ dualLens: false });
  const [engine, setEngine] = useState(() => createEngineState(script));
  const [lastChoice, setLastChoice] = useState<DialogueChoice | null>(null);
  const [sudsPre, setSudsPre] = useState<number | null>(null);
  const [sudsPost, setSudsPost] = useState<number | null>(null);

  // initialize UI settings after mount
  useState(() => {
    setUi(getUiSettings());
  });

  const node = getCurrentNode(engine, script);
  const shuffled = useMemo(
    () => (node?.choices ? shuffle(node.choices) : []),
    [node?.choices]
  );

  const roundLabel = `第 ${Math.min(engine.round + 1, script.totalRounds)} / ${script.totalRounds} 回合`;

  function handleChoose(choice: DialogueChoice) {
    setLastChoice(choice);
    setEngine((prev) => applyChoice(prev, script, choice));
    setPhase("feedback");
  }

  function handleContinueFromFeedback() {
    const cur = getCurrentNode(engine, script);
    if (engine.ended || cur?.id === "end") {
      setPhase("ending");
    } else {
      setPhase("node");
    }
  }

  function handleEndingContinue() {
    setPhase("sudsPost");
  }

  function handleSudsPost(value: number) {
    setSudsPost(value);
    logSession(info.id, mode, pid, sudsPre ?? 0, value);
    const score = computeScore(engine);
    const max = maxPossibleScore(engine);
    const tier = scoreTier(score, max);
    saveReviewContext({
      scenarioId: info.id,
      history: engine.history.map((h) => {
        const node = script.nodes[h.nodeId];
        const chosen = node.choices?.find((c) => c.text === h.choiceText);
        return {
          nodeText: h.nodeText,
          choiceText: h.choiceText,
          choiceType: h.choiceType,
          effectiveness: h.effectiveness,
          innerVoice: h.innerVoice,
          automaticThought: chosen?.feedback.cbt.automaticThought,
          bias: chosen?.feedback.cbt.bias,
          disputing: chosen?.feedback.cbt.disputing,
          rationalResponse: chosen?.feedback.cbt.rationalResponse,
          trianglePole: chosen?.feedback.psychodynamic.trianglePole,
          hiddenFeeling: chosen?.feedback.psychodynamic.hiddenFeeling,
          note: chosen?.feedback.psychodynamic.note,
        };
      }),
      sudsPre: sudsPre ?? 0,
      sudsPost: value,
      score,
      maxScore: max,
      tier,
    });
  }

  function toggleDual(v: boolean) {
    const next = { ...ui, dualLens: v };
    setUi(next);
    setUiSettings(next);
  }

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/practice/" className="text-xs text-muted hover:text-accent">← 情境清單</Link>
        <span className="rounded-full bg-accent-soft/50 px-3 py-1 text-xs font-medium text-accent">
          {info.emoji} {MODE_LABELS[mode]}
        </span>
      </div>

      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-xl font-bold text-ink">{info.name}</h1>
        {phase !== "intro" && phase !== "sudsPost" && (
          <span className="text-xs text-muted">{roundLabel}</span>
        )}
      </div>

      {/* INTRO */}
      {phase === "intro" && (
        <div className="animate-slide-up space-y-5">
          <div className="surface-card p-5">
            <h2 className="mb-2 text-sm font-semibold text-accent">情境</h2>
            <p className="text-sm leading-relaxed text-ink">{info.setting}</p>
            <div className="mt-4 grid gap-2 rounded-xl bg-surface/70 p-3 text-xs">
              <p><span className="text-muted">常見恐懼：</span><span className="text-ink">{info.commonFears}</span></p>
              <p><span className="text-muted">CBT 重點：</span><span className="text-ink">{info.cbtFocus}</span></p>
              <p><span className="text-muted">心理動力重點：</span><span className="text-ink">{info.pdFocus}</span></p>
            </div>
          </div>
          <NarratorBox text={script.openingNarration} />
          <div className="text-center">
            <button onClick={() => setPhase("sudsPre")} className="btn-primary">進入情境</button>
          </div>
        </div>
      )}

      {/* SUDS PRE */}
      {phase === "sudsPre" && (
        <SudsSlider
          label="前測：想像自己此刻正身處這個情境"
          submitLabel="開始對話"
          onSubmit={(v) => {
            setSudsPre(v);
            setPhase("node");
          }}
        />
      )}

      {/* DIALOGUE NODE */}
      {phase === "node" && node && (
        <div className="space-y-4">
          {node.speaker === "narrator" ? (
            <NarratorBox text={node.text} />
          ) : (
            <>
              <DialogueBox text={node.text} />
              {node.innerVoice && (
                <div className="ml-4 rounded-lg bg-surface/50 px-4 py-2 text-sm italic text-muted/90 border-l-2 border-accent-soft">
                  <span className="not-italic text-xs text-accent">腦中聲音　</span>
                  {node.innerVoice}
                </div>
              )}
            </>
          )}

          {node.choices && node.choices.length > 0 && (
            <div className="space-y-2.5">
              <p className="pt-2 text-xs font-medium text-muted">你會怎麼回應？</p>
              {shuffled.map((c, i) => (
                <ChoiceButton key={i} choice={c} index={i} onChoose={() => handleChoose(c)} />
              ))}
            </div>
          )}

          {(!node.choices || node.choices.length === 0) && node.next && (
            <div className="text-center">
              <button
                onClick={() => {
                  const next = script.nodes[node.next!];
                  setEngine((prev) => ({ ...prev, currentNodeId: node.next!, ended: Boolean(next?.end), ending: next?.end }));
                  if (node.next === "end") setPhase("ending");
                }}
                className="btn-primary"
              >
                繼續
              </button>
            </div>
          )}
        </div>
      )}

      {/* FEEDBACK */}
      {phase === "feedback" && lastChoice && (
        <div className="space-y-4">
          <div className="rounded-xl bg-accent-soft/40 border border-accent-soft px-4 py-3">
            <p className="text-xs text-accent">你的選擇</p>
            <p className="text-sm text-ink">{lastChoice.text}</p>
            <p className="mt-0.5 text-xs text-muted">
              {CHOICE_TYPE_LABELS[lastChoice.choiceType]} · 成效 {lastChoice.effectiveness}/3
            </p>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-ink">選擇分析</h3>
            <LensToggle dualLens={ui.dualLens} onChange={toggleDual} />
          </div>

          <FeedbackPanel feedback={lastChoice.feedback} mode={mode} dualLens={ui.dualLens} />

          <div className="text-center">
            <button onClick={handleContinueFromFeedback} className="btn-primary">繼續 →</button>
          </div>
        </div>
      )}

      {/* ENDING */}
      {phase === "ending" && (() => {
        const score = computeScore(engine);
        const max = maxPossibleScore(engine);
        const tier = scoreTier(score, max);
        const ending = script.endings[tier === "resistant" ? "avoid" : tier];
        const tierLabel = { approach: "趨近", partial: "部分趨近", resistant: "仍在迴避" }[tier];
        const tierColor = { approach: "text-emerald-700", partial: "text-amber-700", resistant: "text-rose-700" }[tier];
        return (
          <div className="animate-slide-up space-y-5">
            <div className="surface-card p-6 text-center">
              <p className="text-xs text-muted">本次表現</p>
              <p className={`text-2xl font-bold ${tierColor}`}>{tierLabel}</p>
              <p className="mt-1 text-xs text-muted">累計成效 {score} / {max}</p>
            </div>
            <NarratorBox text={ending.summary} />
            <div className="surface-card p-5">
              <p className="text-sm leading-relaxed text-ink">{ending.suggestion}</p>
            </div>
            <div className="text-center">
              <button onClick={handleEndingContinue} className="btn-primary">進入後測 →</button>
            </div>
          </div>
        );
      })()}

      {/* SUDS POST */}
      {phase === "sudsPost" && (
        <div className="space-y-5">
          <SudsSlider
            label="後測：完成這個情境後，此刻的焦慮程度"
            submitLabel={sudsPost !== null ? "已完成" : "送出並記錄"}
            onSubmit={handleSudsPost}
          />
          {sudsPre !== null && sudsPost !== null && (
            <div className="animate-fade-in surface-card p-5 text-center">
              <p className="text-xs text-muted">SUDS 變化</p>
              <p className="mt-1 text-3xl font-bold text-accent tabular-nums">
                {sudsPre} → {sudsPost}
              </p>
              <p className={`text-sm font-medium ${sudsPost <= sudsPre ? "text-emerald-700" : "text-amber-700"}`}>
                {sudsPost < sudsPre ? `下降 ${sudsPre - sudsPost} 分` : sudsPost > sudsPre ? `上升 ${sudsPost - sudsPre} 分` : "持平"}
              </p>
              <Link href={`/review/${info.id}/`} className="btn-primary mt-5 inline-flex">查看回顧 →</Link>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
