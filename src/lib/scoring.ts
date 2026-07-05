import type { EngineState } from "./types";

// 計分：各回合 effectiveness 加總，對應 3 層結局
export function computeScore(state: EngineState): number {
  return state.history.reduce((s, h) => s + h.effectiveness, 0);
}

export function maxPossibleScore(state: EngineState): number {
  return state.history.length * 3;
}

export function scoreTier(score: number, max: number): "approach" | "partial" | "resistant" {
  if (max === 0) return "resistant";
  const ratio = score / max;
  if (ratio >= 0.7) return "approach";
  if (ratio >= 0.4) return "partial";
  return "resistant";
}
