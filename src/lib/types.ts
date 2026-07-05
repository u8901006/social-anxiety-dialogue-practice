// 核心資料模型 — 依規格 §4

export type ScenarioId =
  | "coffee-chat"
  | "join-group"
  | "receive-compliment"
  | "speak-up-meeting"
  | "decline-request"
  | "express-disagreement";

export type OrientationMode = "cbt" | "psychodynamic";

export type ChoiceType =
  | "approach-express"
  | "approach-partial"
  | "safety-behavior"
  | "avoid-escape"
  | "overcompensate";

export interface ChoiceFeedback {
  pros: string[];
  cons: string[];
  cbt: {
    automaticThought?: string;
    bias?: string;
    disputing: string;
    rationalResponse: string;
    source: string;
  };
  psychodynamic: {
    trianglePole: "defense" | "anxiety" | "feeling";
    hiddenFeeling?: string;
    note: string;
    source: string;
  };
}

export interface DialogueChoice {
  text: string;
  choiceType: ChoiceType;
  nextNode: string;
  effectiveness: 1 | 2 | 3;
  feedback: ChoiceFeedback;
}

export interface DialogueNode {
  id: string;
  speaker: "npc" | "narrator";
  text: string;
  innerVoice?: string;
  choices?: DialogueChoice[];
  next?: string;
  end?: DialogueEnding;
}

export interface DialogueEnding {
  summary: string;
  choiceTypesUsed: ChoiceType[];
  suggestion: string;
  score: number;
}

export interface TierEnding {
  summary: string;
  suggestion: string;
}

export interface ScenarioScript {
  scenarioId: ScenarioId;
  openingNarration: string;
  nodes: Record<string, DialogueNode>;
  totalRounds: number;
  endings: {
    approach: TierEnding;
    partial: TierEnding;
    avoid: TierEnding;
  };
}

export interface ScenarioInfo {
  id: ScenarioId;
  name: string;
  emoji: string;
  difficulty: 1 | 2 | 3;
  setting: string;
  commonFears: string;
  cbtFocus: string;
  pdFocus: string;
  color: string;
}

export interface SessionLog {
  pid: string;
  mode: OrientationMode;
  scenarioId: ScenarioId;
  sudsPre: number;
  sudsPost: number;
  timestamp: string;
}

export interface UiSettings {
  dualLens: boolean;
}

// 引擎執行期狀態
export interface EngineState {
  scenarioId: ScenarioId;
  currentNodeId: string;
  history: {
    nodeId: string;
    nodeText: string;
    choiceText: string;
    choiceType: ChoiceType;
    effectiveness: number;
    innerVoice?: string;
  }[];
  round: number;
  ended: boolean;
  ending?: DialogueEnding;
}

export const CHOICE_TYPE_LABELS: Record<ChoiceType, string> = {
  "approach-express": "趨近＋表達",
  "approach-partial": "漸進趨近",
  "safety-behavior": "安全行為",
  "avoid-escape": "迴避／逃離",
  overcompensate: "過度補償",
};

export const CHOICE_TYPE_COLORS: Record<ChoiceType, string> = {
  "approach-express": "text-emerald-700",
  "approach-partial": "text-emerald-700",
  "safety-behavior": "text-amber-700",
  "avoid-escape": "text-rose-700",
  overcompensate: "text-rose-700",
};

export const MODE_LABELS: Record<OrientationMode, string> = {
  cbt: "認知行為（CBT）",
  psychodynamic: "心理動力",
};
