import type { ChoiceType } from "@/lib/types";

export const CHOICE_TYPES: { id: ChoiceType; label: string; desc: string }[] = [
  {
    id: "approach-express",
    label: "趨近＋表達",
    desc: "直接趨近情境，並表達真實感受或需求",
  },
  {
    id: "approach-partial",
    label: "漸進趨近",
    desc: "試著靠近，但程度有限",
  },
  {
    id: "safety-behavior",
    label: "安全行為",
    desc: "有趨近，但依賴道具或小動作來降低焦慮",
  },
  {
    id: "avoid-escape",
    label: "迴避／逃離",
    desc: "離開情境以快速降低焦慮",
  },
  {
    id: "overcompensate",
    label: "過度補償",
    desc: "討好、過度用力或防衛性攻擊來掩蓋不安",
  },
];
