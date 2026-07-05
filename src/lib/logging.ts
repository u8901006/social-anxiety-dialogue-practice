import type { OrientationMode, ScenarioId, SessionLog, UiSettings } from "./types";

const PID_KEY = "avatar-social:pid";
const MODE_KEY = "avatar-social:mode";
const LOGS_PREFIX = "avatar-social:logs:";
const UI_KEY = "avatar-social:ui";

export function getPid(): string {
  if (typeof window === "undefined") return "";
  const url = new URL(window.location.href);
  const urlPid = url.searchParams.get("pid");
  if (urlPid) {
    localStorage.setItem(PID_KEY, urlPid);
    return urlPid;
  }
  return localStorage.getItem(PID_KEY) ?? "";
}

export function getMode(): OrientationMode {
  if (typeof window === "undefined") return "cbt";
  const url = new URL(window.location.href);
  const urlMode = url.searchParams.get("mode");
  if (urlMode === "cbt" || urlMode === "psychodynamic") {
    localStorage.setItem(MODE_KEY, urlMode);
    return urlMode;
  }
  const stored = localStorage.getItem(MODE_KEY);
  return stored === "psychodynamic" ? "psychodynamic" : "cbt";
}

export function setMode(mode: OrientationMode): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(MODE_KEY, mode);
}

export function setPid(pid: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(PID_KEY, pid);
}

export function getUiSettings(): UiSettings {
  if (typeof window === "undefined") return { dualLens: false };
  try {
    const raw = localStorage.getItem(UI_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* noop */
  }
  return { dualLens: false };
}

export function setUiSettings(s: UiSettings): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(UI_KEY, JSON.stringify(s));
}

export function logSession(
  scenarioId: ScenarioId,
  mode: OrientationMode,
  pid: string,
  sudsPre: number,
  sudsPost: number
): SessionLog {
  const log: SessionLog = {
    pid: pid || "anonymous",
    mode,
    scenarioId,
    sudsPre,
    sudsPost,
    timestamp: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    const key = LOGS_PREFIX + (pid || "anonymous");
    const existing: SessionLog[] = JSON.parse(localStorage.getItem(key) ?? "[]");
    existing.push(log);
    localStorage.setItem(key, JSON.stringify(existing));
  }
  return log;
}

export function getLogs(pid?: string): SessionLog[] {
  if (typeof window === "undefined") return [];
  const targetPid = pid ?? getPid() ?? "anonymous";
  const key = LOGS_PREFIX + (targetPid || "anonymous");
  return JSON.parse(localStorage.getItem(key) ?? "[]");
}

export function exportLogsJson(pid?: string): string {
  const logs = getLogs(pid);
  return JSON.stringify(
    {
      pid: pid ?? getPid() ?? "anonymous",
      exportedAt: new Date().toISOString(),
      recordCount: logs.length,
      records: logs,
    },
    null,
    2
  );
}

// 回顧脈絡：瞬時（sessionStorage），不列入研究紀錄，僅供當次回顧學習
export interface ReviewContext {
  scenarioId: string;
  history: {
    nodeText: string;
    choiceText: string;
    choiceType: string;
    effectiveness: number;
    innerVoice?: string;
    automaticThought?: string;
    bias?: string;
    disputing?: string;
    rationalResponse?: string;
    trianglePole?: string;
    hiddenFeeling?: string;
    note?: string;
  }[];
  sudsPre: number;
  sudsPost: number;
  score: number;
  maxScore: number;
  tier: "approach" | "partial" | "resistant";
}

const REVIEW_PREFIX = "avatar-social:review:";

export function saveReviewContext(ctx: ReviewContext): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(REVIEW_PREFIX + ctx.scenarioId, JSON.stringify(ctx));
}

export function getReviewContext(scenarioId: string): ReviewContext | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(REVIEW_PREFIX + scenarioId);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
