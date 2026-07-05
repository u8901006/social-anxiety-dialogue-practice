import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "社交焦慮對話練習 · 研究原型",
  description:
    "在常見社交情境中練習回應選擇，即時看見每個選項的優點與代價。支援 CBT 與心理動力雙鏡頭回饋。研究用原型，非臨床工具。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
