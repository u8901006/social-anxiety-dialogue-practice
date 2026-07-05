import type { ScenarioInfo, ScenarioId } from "@/lib/types";

export const SCENARIOS: ScenarioInfo[] = [
  {
    id: "coffee-chat",
    name: "茶水間的閒聊",
    emoji: "☕",
    difficulty: 1,
    setting: "辦公室茶水間，遇到新來的同事",
    commonFears: "「不知道要說什麼」「對方覺得我很無聊」",
    cbtFocus: "讀心術、沉默高估、逃離行為",
    pdFocus: "與人連結的渴望被焦慮擋住",
    color: "#c97a4a",
  },
  {
    id: "join-group",
    name: "加入進行中的對話",
    emoji: "👥",
    difficulty: 2,
    setting: "同事聚餐，一群人聊得正熱烈",
    commonFears: "「插話很突兀」「沒人想理我」",
    cbtFocus: "算命、聚光燈效應",
    pdFocus: "歸屬需求 vs. 被拒預期的防衛性退縮",
    color: "#b56a3f",
  },
  {
    id: "receive-compliment",
    name: "被當眾稱讚",
    emoji: "🌟",
    difficulty: 2,
    setting: "主管在會議上稱讚你的專案成果",
    commonFears: "「他們只是客套」「等下會發現我不行」",
    cbtFocus: "否定正向訊息、冒牌者想法",
    pdFocus: "對正向自我感受的情感畏懼",
    color: "#a86139",
  },
  {
    id: "speak-up-meeting",
    name: "會議中被點名發言",
    emoji: "🎤",
    difficulty: 2,
    setting: "部門週會，主管突然點你發表意見",
    commonFears: "「說錯話全場都會記得」",
    cbtFocus: "災難化、後果類辯駁問題",
    pdFocus: "自我主張與羞愧的連結",
    color: "#9a5836",
  },
  {
    id: "decline-request",
    name: "拒絕額外的工作",
    emoji: "🚫",
    difficulty: 3,
    setting: "同事想請你接下額外專案，但你已經超載",
    commonFears: "「拒絕等於關係破裂」",
    cbtFocus: "高估社交代價、雙重標準問題",
    pdFocus: "設限型自我主張的畏懼；討好作為防衛",
    color: "#8c4f2b",
  },
  {
    id: "express-disagreement",
    name: "表達不同意見",
    emoji: "💬",
    difficulty: 3,
    setting: "好友分享旅遊計畫，你其實不太認同",
    commonFears: "「衝突會毀掉友誼」",
    cbtFocus: "災難化、證據類辯駁問題",
    pdFocus: "健康憤怒被罪惡感抑制",
    color: "#7a4425",
  },
];

export const SCENARIO_MAP: Record<ScenarioId, ScenarioInfo> = Object.fromEntries(
  SCENARIOS.map((s) => [s.id, s])
) as Record<ScenarioId, ScenarioInfo>;
