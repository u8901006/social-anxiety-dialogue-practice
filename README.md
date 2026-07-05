# 社交焦慮對話練習（avatar-social）

> 研究用原型｜非心理治療、非臨床評估工具

在常見社交情境（茶水間閒聊、會議發言、拒絕請求等）中練習回應選擇。每次選擇後立即顯示該選項的**誠實優點與代價**，並依 CBT 或心理動力取向提供雙鏡頭回饋。

## 特色

- **6 個社交情境**，依暴露階層由低到高排列（★ → ★★★）
- **誠實對稱的優缺點回饋**：迴避選項也寫出「焦慮立即下降」的真實優點，趨近選項也寫出「焦慮先升高」的真實代價——教學效果來自讓使用者看見「短期舒緩 vs. 長期維持」的交換，不說教
- **雙鏡頭回饋**：CBT（自動化想法 → 認知偏誤 → 辯駁問題 → 理性回應）與心理動力（Malan 衝突三角形 D-A-F → 涵容式覺察引導），可隨時並列比較
- **SUDS 前後測**：僅記錄主觀焦慮評分，匿名匯出 JSON，不收集任何 PII 或其他行為資料
- **純靜態匯出**，部署於 Cloudflare Pages / GitHub Pages

## 技術棧

- Next.js 15（App Router）+ TypeScript，`output: 'export'` 靜態匯出
- Tailwind CSS（暖奶油／銅色配色，沿用 Psychiatry-brain 視覺）
- pnpm

## 本地開發

```bash
pnpm install
pnpm dev        # 開發伺服器
pnpm build      # 靜態匯出至 out/
```

## 部署

靜態匯出目錄為 `out/`。可部署至 Cloudflare Pages 或 GitHub Pages。

## 素材來源

腳本內容引用以下著作相關章節（出處標註於每則回饋）：

- Hope, Heimberg & Turk (2019). *Managing Social Anxiety, Therapist Guide* (3rd ed.)
- Beck, J. S. *Cognitive Behavior Therapy: Basics and Beyond* (3rd ed.)
- McCullough et al. (2003). *Treating Affect Phobia*
- Frederick, R. J. (2009). *Living Like You Mean It*
- Malan, D. *Individual Psychotherapy and the Science of Psychodynamics*

## 安全與倫理

- 本工具為**研究原型與教育用途**，非心理治療、非臨床評估工具
- 情境限於日常社交焦慮，不含自傷／自殺／暴力素材
- 臺灣求助資源（24hr）：安心專線 **1925** ／ 張老師 **1980** ／ 生命線 **1995**

## 授權

研究原型，僅供教育用途。
