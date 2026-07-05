# 社交焦慮對話練習（avatar-social）— 程式規格計畫書

- **日期：** 2026-07-05
- **專案代號：** avatar-social（沿用 avatar 系列，參考 [avatar-easy](https://github.com/u8901006/avatar-easy) 架構）
- **狀態：** Draft — 規格計畫書，尚未實作
- **性質：** 研究用原型（research prototype）。初期不直接用於人類受試者，作為內容與機制驗證工具；腳本為預先撰寫的固定內容，不含 LLM 即時生成，無不可控輸出的安全疑慮。
- **部署目標：** Cloudflare Pages（靜態匯出）

---

## 1. 背景與目標

`avatar-easy` 已驗證「文字冒險式分支對話＋選項成效＋雙層提示」這套練習引擎可行。本專案把同一套引擎轉向新題目：**社交焦慮（social anxiety）的情境對話練習**。

角色設定與 avatar-easy 相反：avatar-easy 中使用者扮演「回應內在聲音的助人者」；本專案中使用者扮演**社交焦慮者本人**，在常見社交情境（閒聊、會議發言、拒絕請求等）面對 NPC 對話，從 3 個回應選項中做選擇。**每次選擇後立即顯示該選項的優點與缺點**，並依使用者選定的治療取向（CBT 或心理動力）給出對應解說。

### 目標

1. 建立 6 個常見社交情境的完整分支對話腳本。
2. 實作「選擇後優缺點回饋面板」——每個選項都誠實呈現短期優點與長期代價，不做單純的對錯判定。
3. 支援兩種取向鏡頭（orientation lens）：**CBT** 與 **心理動力（psychodynamic）**，同一套情境腳本、兩套回饋註解，可作為研究中的條件分派變項；另提供「雙鏡頭開關」，受試者可自行開啟兩套註解並列顯示。
4. 內建研究記錄機制：**僅記錄情境前後 SUDS 主觀焦慮評分**，可匿名匯出；不記錄任何其他行為資料。
5. 可在 Cloudflare Pages 一鍵部署的純靜態網站。

### 非目標（本次不做）

- 不接 LLM／API（腳本全為預寫固定內容，維持決定性 deterministic，利於研究重現）。
- 不做帳號系統、不收集任何 PII（受試者編號由 URL 參數帶入）。
- 不做後端資料庫（MVP 以 localStorage＋JSON 匯出；集中收案為 Phase 2 選配）。
- 不涉及高風險臨床素材（無自傷／自殺情節；情境限於日常社交焦慮）。
- 不做行動原生 App（響應式網頁即可）。

---

## 2. 理論框架與素材來源

### 2.1 兩種取向鏡頭

| 鏡頭 | 核心機制 | 回饋內容 |
|------|---------|---------|
| **CBT** | 自動化想法 → 認知偏誤 → 辯駁問題 → 理性回應；暴露原理（逃避維持焦慮、留在情境收集反證） | 標註該選項背後可能的自動化想法與偏誤類型（讀心術、災難化、算命），給 1–2 個辯駁問題與一句理性回應範例 |
| **心理動力** | Malan 衝突三角形（D 防衛 – A 焦慮 – F 真實情感）；情感畏懼＝對健康情緒（自我主張、親近、正向自我感）的恐懼症；防衛覺察與自我慈悲 | 標註該選項落在三角形哪一極（防衛／焦慮驅動／真實情感表達），指出被擋住的隱藏感受，給一句涵容式的覺察引導 |

兩套註解掛在**同一個選項**上，由執行模式決定預設顯示哪一套；受試者可用雙鏡頭開關切換為兩套並列（見 §5.2）。

### 2.2 素材來源對照（`content/sources/` 收錄）

| 來源資料夾 | 書目 | 供給本專案的內容 |
|-----------|------|----------------|
| `D:\心理學\AI\reference\managing social anxierty` | Hope, Heimberg & Turk (2019). *Managing Social Anxiety, Therapist Guide* (3rd ed.) | 情境設計與暴露階層（ch04 恐懼迴避階層、ch10 對話恐懼、ch11 公開演說）；認知重整回饋文案（ch05 認知偏誤、ch06 辯駁問題與理性回應、ch12 進階認知重整）；沉默高估、逃離行為、安全行為概念 |
| `D:\心理學\AI\reference\Cognitive Behavior Therapy basic and beyond` | Beck, J. S. *Cognitive Behavior Therapy: Basics and Beyond* (3rd ed.) | 自動化想法辨識與評估的通用寫法（ch12、14、15）；信念層次（ch17–18）供 review 頁的深層信念提示 |
| `D:\心理學\AI\reference\treating affect phonia` | McCullough et al. (2003). *Treating Affect Phobia* | 心理動力鏡頭主幹：雙三角模式（第2章）、辨識與放下防衛（第5–6章）、情感表達與人際溝通（第8章）、自我慈悲（第9章） |
| `D:\心理學\AI\reference\Living like you meaen it` | Frederick, R. J. (2009). *Living Like You Mean It* | 自助語氣的防衛覺察與恐懼調節文案（ch3 覺察感受、ch4 覺察防衛、ch5 馴服恐懼、ch7 開放表達）——心理動力回饋的「白話版」語感來源 |
| `D:\心理學\AI\reference\individual psychothrerapy psychodynamic` | Malan, D. *Individual Psychotherapy and the Science of Psychodynamics* | 兩三角形理論出處（ch10 對話與兩個三角形）；隱藏感受（hidden feeling）概念 |

> 各資料夾內已有 book-worm pipeline 產出的章節文章（`article/*.md`），撰寫腳本時直接引用這些 markdown，出處標註沿用其 frontmatter 的 `source_chapter` / `source_book`。

---

## 3. 系統架構（沿用 avatar-easy 模式）

### 3.1 技術棧

- **框架：** Next.js（App Router）＋ TypeScript，`next.config.ts` 設 `output: 'export'` 靜態匯出
- **樣式：** Tailwind CSS（PostCSS），沿用 avatar-easy 設定
- **套件管理：** pnpm
- **部署：** Cloudflare Pages
  - Build command：`pnpm build`；輸出目錄：`out/`
  - 部署方式：Pages Git 整合，或 `npx wrangler pages deploy out`
  - MVP 無伺服器端邏輯；Phase 2 若需集中收案，加 Pages Functions（`/functions/api/log.ts`）＋ D1

### 3.2 路由

| 路由 | 內容 |
|------|------|
| `/` | 首頁：專案說明、研究聲明（非臨床工具）、取向模式選擇、受試者參數讀取 |
| `/practice` | 情境選擇清單（ScenarioCard 網格，含難度與主題標籤） |
| `/practice/[scenario]` | 對話練習主頁（`generateStaticParams()` 由 scenarios 陣列派生） |
| `/review/[scenario]` | 單情境回顧：選擇軌跡、取向分析、學習重點、資料匯出 |
| `/export` | SUDS 前後測紀錄的 JSON 匯出頁（研究用） |

### 3.3 目錄結構

```
avatar-social/
├─ src/
│  ├─ app/
│  │  ├─ page.tsx                      # 首頁＋模式選擇
│  │  ├─ practice/page.tsx             # 情境清單
│  │  ├─ practice/[scenario]/page.tsx
│  │  ├─ practice/[scenario]/DialogueClient.tsx
│  │  ├─ review/[scenario]/page.tsx
│  │  ├─ review/[scenario]/ReviewClient.tsx
│  │  └─ export/page.tsx               # 研究資料匯出
│  ├─ components/
│  │  ├─ ScenarioCard.tsx              # ≒ ArchetypeCard
│  │  ├─ DialogueBox.tsx               # NPC 對話框（沿用）
│  │  ├─ NarratorBox.tsx               # 旁白框（沿用）
│  │  ├─ ChoiceButton.tsx              # 選項按鈕（沿用）
│  │  ├─ FeedbackPanel.tsx             # ★ 新：選後優缺點面板（取代 TipBanner 角色）
│  │  ├─ SudsSlider.tsx                # ★ 新：0–100 主觀焦慮評分
│  │  ├─ LensToggle.tsx                # ★ 新：雙鏡頭並列顯示開關
│  │  └─ ReviewSummary.tsx             # 回顧摘要（改寫）
│  ├─ data/
│  │  ├─ scenarios.ts                  # ≒ archetypes.ts（情境後設資料）
│  │  ├─ scripts/                      # 每情境一檔
│  │  │  ├─ coffee-chat.ts
│  │  │  ├─ join-group.ts
│  │  │  ├─ speak-up-meeting.ts
│  │  │  ├─ decline-request.ts
│  │  │  ├─ receive-compliment.ts
│  │  │  └─ express-disagreement.ts
│  │  └─ choice-types.ts               # ≒ strategies.ts（回應類型定義）
│  └─ lib/
│     ├─ dialogue-engine.ts            # 擴充自 avatar-easy（加 feedback 流程）
│     ├─ scoring.ts                    # 沿用
│     ├─ logging.ts                    # ★ 新：SUDS 紀錄（localStorage＋匯出）
│     └─ types.ts
├─ content/sources/                    # 依 §2.2 收錄五本書的相關章節 markdown
├─ docs/specs/                         # 本文件入 repo
├─ next.config.ts / wrangler.toml / package.json ...
```

---

## 4. 資料模型（`src/lib/types.ts`）

以 avatar-easy 的型別為基底，關鍵差異以 ★ 標示：

```ts
export type ScenarioId =
  | "coffee-chat"            // 茶水間閒聊
  | "join-group"             // 聚會中加入話題
  | "speak-up-meeting"       // 會議發言
  | "decline-request"        // 拒絕請求
  | "receive-compliment"     // 接受讚美
  | "express-disagreement";  // 表達不同意見

// ★ 取向模式：研究條件分派變項（雙鏡頭並列改由 UI 開關控制，見 UiSettings.dualLens）
export type OrientationMode = "cbt" | "psychodynamic";

// ★ 回應類型（取代 avatar-easy 的 5 個 strategy id）
export type ChoiceType =
  | "approach-express"    // 趨近＋表達真實感受／需求（成效 3）
  | "approach-partial"    // 漸進嘗試、部分趨近（成效 2）
  | "safety-behavior"     // 帶著安全行為的趨近（成效 2）
  | "avoid-escape"        // 迴避／逃離（成效 1）
  | "overcompensate";     // 過度補償／討好／防衛性攻擊（成效 1）

// ★ 核心新增：選後回饋（優缺點＋雙鏡頭註解）
export interface ChoiceFeedback {
  pros: string[];            // 誠實的優點（含短期效果，如「焦慮立即下降」）
  cons: string[];            // 誠實的代價（長期維持機制）
  cbt: {
    automaticThought?: string;   // 這個選項背後可能的自動化想法
    bias?: string;               // 認知偏誤類型（讀心術／災難化／算命…）
    disputing: string;           // 1–2 個辯駁問題
    rationalResponse: string;    // 一句理性回應範例
    source: string;              // 章節出處
  };
  psychodynamic: {
    trianglePole: "defense" | "anxiety" | "feeling";  // 落在衝突三角形哪一極
    hiddenFeeling?: string;      // 被擋住的真實情感（F 極）
    note: string;                // 涵容式覺察引導（Frederick 語感）
    source: string;              // 章節出處
  };
}

export interface DialogueChoice {
  text: string;
  choiceType: ChoiceType;
  nextNode: string;
  effectiveness: 1 | 2 | 3;
  feedback: ChoiceFeedback;    // ★ 每個選項必填
}

export interface DialogueNode {
  id: string;
  speaker: "npc" | "narrator";  // NPC＝情境中的對話對象
  text: string;
  innerVoice?: string;          // ★ 主角腦中的自動化想法旁白（斜體顯示，CBT 教學素材）
  choices?: DialogueChoice[];
  next?: string;
  end?: DialogueEnding;
}

export interface DialogueEnding {
  summary: string;
  choiceTypesUsed: ChoiceType[];
  suggestion: string;           // 依取向模式顯示對應版本
  score: number;
}

export interface ScenarioScript {
  scenarioId: ScenarioId;
  openingNarration: string;
  nodes: Record<string, DialogueNode>;
  totalRounds: number;
}

export interface ScenarioInfo {
  id: ScenarioId;
  name: string;
  emoji: string;
  difficulty: 1 | 2 | 3;        // 對應暴露階層概念（低→高）
  setting: string;              // 場景描述
  commonFears: string;          // 此情境典型的恐懼內容
  cbtFocus: string;             // CBT 鏡頭重點（如「讀心術、沉默高估」）
  pdFocus: string;              // 心理動力鏡頭重點（如「自我主張的情感畏懼」）
  color: string;
}

// ★ 研究紀錄：僅保留 SUDS 前後測（不記錄選擇內容、反應時間或其他行為資料）
export interface SessionLog {
  pid: string;                  // 受試者編號（URL 參數，無 PII）
  mode: OrientationMode;        // 條件
  scenarioId: ScenarioId;
  sudsPre: number;              // 0–100
  sudsPost: number;             // 0–100
  timestamp: string;            // ISO 8601
}

// ★ 介面設定（不屬於研究紀錄，不匯出）
export interface UiSettings {
  dualLens: boolean;            // 雙鏡頭並列開關（受試者可自行切換，預設關閉）
}
```

---

## 5. 互動流程

### 5.1 單一情境流程

```
情境卡選擇
  → 開場旁白（openingNarration，設定場景）
  → SUDS 前測（SudsSlider：「想像自己身處這個情境，此刻焦慮 0–100？」）
  → 對話回合 ×4–6：
      NPC 台詞（DialogueBox）
      ＋ innerVoice 自動化想法旁白（斜體，可依模式開關）
      → 3 個選項（ChoiceButton，順序隨機打亂，避免位置學習效應）
      → ★ FeedbackPanel 展開：
           「這個選擇的優點」（pros 條列）
           「這個選擇的代價」（cons 條列）
           ＋ 取向註解（依 mode 顯示 cbt 或 psychodynamic；雙鏡頭開關開啟時兩者並列）
      → 「繼續」按鈕 → 下一節點（分支依選項走向）
  → 結局（3 層：transformed / partial / resistant，依 avatar-easy 計分邏輯）
  → SUDS 後測
  → 進入 /review/[scenario]
```

### 5.2 取向模式（研究條件）與雙鏡頭開關

- 首頁選擇或由 URL 參數指定：`/?pid=S001&mode=cbt`
  - `mode=cbt`：FeedbackPanel 預設顯示優缺點＋CBT 註解
  - `mode=psychodynamic`：預設顯示優缺點＋心理動力註解
- **雙鏡頭開關（LensToggle）**：對所有受試者開放，位於練習頁 FeedbackPanel 上方，可隨時開啟／關閉。開啟時兩套註解並列（tab 切換），關閉時回到所屬 mode 的單鏡頭顯示。預設關閉；開關狀態僅存於 UiSettings，不列入研究紀錄。
- 模式與 pid 存入 localStorage，整個 session 固定，寫入所有 SessionLog。

### 5.3 回顧頁（/review/[scenario]）

- 選擇軌跡時間軸（每回合選了哪型、成效幾分）
- 回應類型分布（幾次趨近、幾次安全行為、幾次迴避）
- **CBT 模式**：出現過的自動化想法清單 → 對應辯駁問題 → 給使用者一句可帶走的理性回應
- **心理動力模式**：本次選擇在衝突三角形上的分布圖（D / A / F 三極計數）→ 指出最常用的防衛型態與被擋住的感受
- SUDS 前後對照
- 「匯出 SUDS 紀錄（JSON）」按鈕

> 註：選擇軌跡與類型分布由當次 EngineState 即時計算，僅供受試者回顧學習用，不寫入 localStorage、不匯出（研究紀錄僅含 SUDS，見 §8）。

---

## 6. 情境規劃（MVP 6 個）

依 Hope/Heimberg 暴露階層概念由低到高排列：

| # | id | 情境 | 難度 | 典型恐懼 | CBT 重點 | 心理動力重點 |
|---|----|------|-----|---------|---------|-------------|
| 1 | `coffee-chat` | 茶水間遇到新同事的閒聊 | ★ | 「不知道說什麼」「對方覺得我無聊」 | 讀心術、沉默高估、逃離行為（ch10） | 與人連結的渴望（F）被焦慮擋住 |
| 2 | `join-group` | 聚會中加入進行中的對話 | ★★ | 「插話很突兀」「沒人想理我」 | 算命、聚光燈效應（ch05） | 歸屬需求 vs. 被拒預期的防衛性退縮 |
| 3 | `receive-compliment` | 主管當眾稱讚你的成果 | ★★ | 「他們只是客套」「等下就會發現我不行」 | 否定正向訊息、冒牌者想法（ch12） | 對正向自我感受的情感畏懼（McCullough 第7章：喜悅／自豪最常被防衛） |
| 4 | `speak-up-meeting` | 會議中被點名發表意見 | ★★ | 「說錯話全場都會記得」 | 災難化、後果類辯駁問題（ch06） | 自我主張（F）與羞愧（A）的連結 |
| 5 | `decline-request` | 同事請你接下額外工作，你已超載 | ★★★ | 「拒絕＝關係破裂」 | 高估社交代價、雙重標準問題（ch06） | 設限型憤怒／自我主張的畏懼；討好作為防衛（第5章） |
| 6 | `express-disagreement` | 對朋友的計畫表達不同意見 | ★★★ | 「衝突會毀掉友誼」 | 災難化、證據類辯駁問題 | 健康憤怒被罪惡感抑制；表達後的關係修復經驗（第8章） |

Backlog（Phase 2 候選）：電話／視訊發言、公開簡報（ch11）、提出邀約（ch10 約會段落）、面對批評。

---

## 7. 腳本標準範本

每個情境腳本統一結構（仿 avatar-easy §5 範本）：

```
openingNarration          1 段沉浸式旁白（場景＋身體感受描寫）
totalRounds: 5
nodes:
  start (narrator) → r1
  r1   (npc + innerVoice) → 3 選項（每選項附完整 feedback）
  r2_{engaged, tentative, withdrawn}     ← 依趨近程度分支
  r3_{deepen, waver, stuck}              ← 中段：沉默／突發小尷尬事件
  r4_{express, partial, retreat}         ← 關鍵回合：真實感受表達機會
  r5_transition
  end_approach (score 3) / end_partial (score 2) / end_avoid (score 1)
```

**選項設計規則**

- 每個 NPC 節點 3 個選項，成效 3 / 2 / 1 各一：
  - 成效 3：`approach-express`（趨近並表達真實感受／需求）
  - 成效 2：`approach-partial` 或 `safety-behavior`（有趨近但帶防衛）
  - 成效 1：`avoid-escape` 或 `overcompensate`
- **優缺點必須誠實對稱**：迴避選項也要寫出真實優點（「焦慮立即下降」「最省力」），趨近選項也要寫出真實代價（「當下焦慮會先升高，這是正常且預期的」）。教學效果來自讓使用者看見「短期舒緩 vs. 長期維持」的交換，而非說教。
- 迴避不觸發「壞結局懲罰」語氣；結局文案一律以理解與下一步建議收尾。

**範例節點（coffee-chat r1，示意）**

> NPC（新同事）：「嗨，你也來倒咖啡啊？這台機器我還不太會用……」
> *innerVoice：「完了，要聊什麼？我一定會讓場面變尷尬。」*
>
> - **A.**「對啊，這台有點難搞，我教你。我是○○，你是新來的吧？」（approach-express，成效 3）
>   - 優點：開啟真實接觸；給大腦收集反證的機會；對方正需要幫忙，成功率其實很高
>   - 代價：焦慮會先升高；可能出現短暫冷場
>   - CBT：自動化想法「我會讓場面尷尬」＝算命；辯駁：「過去十次幫別人小忙，幾次真的變尷尬？」；理性回應：「尷尬感通常比實際狀況放大很多」（ch06）
>   - 動力：F 極——連結與助人的意願直接表達；焦慮存在但沒有接管行為（McCullough 第2章）
> - **B.** 微笑點頭：「嗯，按這裡就好。」然後立刻低頭看手機（safety-behavior，成效 2）
>   - 優點：有回應、沒有完全逃避；焦慮可控
>   - 代價：手機是安全行為，切斷了對話延續；強化「靠道具才安全」的信念（ch07 安全行為概念）
>   - CBT／動力註解……
> - **C.** 假裝趕時間，快速倒完咖啡離開（avoid-escape，成效 1）
>   - 優點：焦慮立即解除；最省力
>   - 代價：大腦記住「逃＝安全」，下次更難；永遠不會發現對方其實友善（ch10 逃離行為）
>   - 動力：D 極——迴避防衛；被擋住的是「想認識新同事」的真實渴望

**出處規則**

- 每個 `feedback.cbt.source`／`feedback.psychodynamic.source` 必須對應 `content/sources/` 內實際存在的章節 markdown（沿用其 frontmatter 的 source_chapter），不杜撰文獻。

---

## 8. 研究記錄設計

### 8.1 MVP（純前端）

- 研究紀錄僅一種：`SessionLog`（SUDS 前後測），於情境結束（SUDS 後測送出）時寫入 localStorage（key：`avatar-social:logs:{pid}`）
- **不記錄**選擇內容、反應時間、選項呈現順序、雙鏡頭開關使用情形或任何其他行為資料
- `/export` 頁與 review 頁提供 JSON 下載（檔名 `avatar-social_{pid}_{date}.json`）
- 不收集姓名、email、IP 等任何 PII；pid 由研究者事先編派

### 8.2 Phase 2（選配，集中收案）

- Cloudflare Pages Functions：`POST /api/log` → 寫入 D1（免費額度足夠小型研究）
- 前端在每情境結束時上傳 SessionLog；離線時 fallback localStorage、重試
- 需加最簡 CORS 與速率限制；仍不收 PII

### 8.3 研究設計掛點（供未來 IRB 申請時使用）

- 條件分派：`mode` 參數（cbt vs. psychodynamic）即實驗操弄，pid 對應分派表由研究者管理
- 結果變項：SUDS 前後差（本原型唯一收集的量化變項）
- 本原型階段僅供內容驗證與展示，**不招募受試者**；若進入人體研究，先送倫理審查

---

## 9. 安全與倫理設計

- 首頁與 footer 固定聲明：本工具為研究原型與教育用途，**非心理治療、非臨床評估工具**；有困擾請尋求專業協助。
- Footer 常駐台灣求助資源：安心專線 **1925**、張老師 **1980**、生命線 **1995**。
- 情境內容全數為日常社交場景，不含自傷／自殺／暴力素材，無需 contentWarning 分級（與 avatar-easy 的高敏感原型不同）。
- 回饋文案語氣規範：不評價使用者（「你選錯了」禁用），一律描述選項的機制與代價；迴避選項的回饋以正常化開頭（「想離開是焦慮下最自然的反應」）。

---

## 10. 執行節奏（實作時依此推進）

採 avatar-easy 驗證過的「先做 1 個試風格再續做」節奏：

- **第 0 步（腳手架）**：以 avatar-easy 為模板建 repo；改 types／engine 支援 FeedbackPanel 與 logging；`content/sources/` 收錄五本書相關章節 markdown；`pnpm build` 靜態匯出通過＋Cloudflare Pages 部署冒煙測試。
- **第 1 步（pilot）**：完整做出 **`coffee-chat`** 一個情境（含雙鏡頭 feedback 全量撰寫）。
  > 選擇理由：難度最低、素材最完整（ch10 對話恐懼整章）、優缺點對稱寫法最容易在此校準。
  > 完成後檢查點：選項語感、feedback 篇幅（建議 pros/cons 各 2–3 條、註解各 ≤80 字）、innerVoice 是否過度說教。**確認風格 OK 後再續做其餘。**
- **第 2 步（續做）**：依難度序 `join-group` → `receive-compliment` → `speak-up-meeting` → `decline-request` → `express-disagreement`。
- **第 3 步（回顧頁與匯出）**：ReviewSummary 三角形分布圖／自動化想法清單、/export 頁。
- **每步驗證**：`pnpm lint`＋`pnpm build`；部署預覽走完完整分支。

---

## 11. 待定／風險

- **雙鏡頭開關與條件比較**（已定案，記錄為接受的取捨）：開關對所有受試者開放且不記錄使用情形，若日後進入正式的 cbt vs. psychodynamic 條件比較實驗，兩條件間可能互相滲透，屆時需重新評估此設計或於研究限制中說明。
- **innerVoice 旁白與心理動力條件的干擾**：自動化想法旁白本身是 CBT 教學元素，psychodynamic 條件下是否顯示（或改為身體感受描寫）→ 撰寫 pilot 時決定。
- **feedback 篇幅膨脹**：每選項雙鏡頭全量撰寫，6 情境 × 5 回合 × 3 選項 = 90 組 feedback，是主要工作量；pilot 校準字數上限後嚴格執行。
- **文化脈絡**：Hope/Heimberg 提醒對話規範深受文化影響；腳本以台灣職場／社交慣例撰寫，NPC 台詞避免直譯英文語感。

---

## 12. 驗收準則

- [ ] 6 個情境皆可在 `/practice/<id>` 走完全部分支並進入 `/review/<id>`。
- [ ] 每個選項的 FeedbackPanel 含：pros ≥2、cons ≥2、CBT 註解（含辯駁問題＋理性回應＋出處）、心理動力註解（含三角形極位＋出處）。
- [ ] `mode=cbt` / `mode=psychodynamic` 正確切換回饋內容；mode 與 pid 寫入所有紀錄。
- [ ] 雙鏡頭開關對受試者可見、可隨時切換：開啟時兩套註解並列、關閉時回到所屬 mode 單鏡頭；預設關閉，開關狀態不寫入研究紀錄。
- [ ] 每個 NPC 節點的 3 個選項呈現順序隨機打亂。
- [ ] SUDS 前後測寫入 localStorage 並可匯出 JSON；除 SessionLog（SUDS）外，確認無任何其他行為資料被記錄或匯出。
- [ ] 所有 feedback 出處對應 `content/sources/` 實際章節，抽查 10 條無杜撰。
- [ ] `pnpm lint`、`pnpm build` 通過；`out/` 部署至 Cloudflare Pages 後所有路由可用（含直接深連結）。
- [ ] 首頁研究聲明與 footer 求助資源（1925／1980／1995）常駐顯示。
