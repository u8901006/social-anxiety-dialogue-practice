"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { exportLogsJson, getLogs, getPid } from "@/lib/logging";
import type { SessionLog } from "@/lib/types";

export default function ExportPage() {
  const [logs, setLogs] = useState<SessionLog[]>([]);
  const [pid, setPid] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setPid(getPid());
    setLogs(getLogs());
    setHydrated(true);
  }, []);

  function refresh() {
    setPid(getPid());
    setLogs(getLogs());
  }

  function download() {
    const json = exportLogsJson();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `avatar-social_${pid || "anonymous"}_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(exportLogsJson());
  }

  if (!hydrated) return null;

  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <Link href="/practice/" className="text-xs text-muted hover:text-accent">← 情境清單</Link>
      <h1 className="mt-1 text-2xl font-bold text-ink">研究資料匯出</h1>
      <p className="mt-1 text-sm text-muted">僅含 SUDS 前後測紀錄，不含任何選擇內容或其他行為資料</p>

      <div className="surface-card mt-6 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted">受試者編號</p>
            <p className="text-lg font-bold text-accent">{pid || "anonymous"}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted">紀錄筆數</p>
            <p className="text-lg font-bold text-ink">{logs.length}</p>
          </div>
        </div>
      </div>

      {logs.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold text-ink">紀錄清單</h2>
          <div className="overflow-hidden rounded-xl border border-line">
            <table className="w-full text-sm">
              <thead className="bg-surface/70 text-xs text-muted">
                <tr>
                  <th className="px-3 py-2 text-left">情境</th>
                  <th className="px-3 py-2 text-left">取向</th>
                  <th className="px-3 py-2 text-right">前測</th>
                  <th className="px-3 py-2 text-right">後測</th>
                  <th className="px-3 py-2 text-right">差值</th>
                  <th className="px-3 py-2 text-left">時間</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((l, i) => (
                  <tr key={i} className="border-t border-line/50">
                    <td className="px-3 py-2 text-ink">{l.scenarioId}</td>
                    <td className="px-3 py-2 text-muted">{l.mode === "cbt" ? "CBT" : "動力"}</td>
                    <td className="px-3 py-2 text-right tabular-nums text-ink">{l.sudsPre}</td>
                    <td className="px-3 py-2 text-right tabular-nums text-ink">{l.sudsPost}</td>
                    <td className={`px-3 py-2 text-right tabular-nums font-medium ${l.sudsPost <= l.sudsPre ? "text-emerald-700" : "text-amber-700"}`}>
                      {l.sudsPost - l.sudsPre >= 0 ? "+" : ""}{l.sudsPost - l.sudsPre}
                    </td>
                    <td className="px-3 py-2 text-xs text-muted">{new Date(l.timestamp).toLocaleString("zh-TW")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button onClick={download} className="btn-primary text-sm">⬇ 下載 JSON</button>
        <button onClick={copyToClipboard} className="btn-ghost text-sm">複製到剪貼簿</button>
        <button onClick={refresh} className="btn-ghost text-sm">重新整理</button>
      </div>

      <div className="mt-6 rounded-xl bg-surface/70 border border-line/60 px-4 py-3 text-xs leading-relaxed text-muted">
        <p className="mb-1"><strong className="text-ink/70">隱私說明：</strong>所有資料僅儲存於本機瀏覽器（localStorage），不傳送至任何伺服器。清除瀏覽器資料即會刪除全部紀錄。</p>
        <p>匯出檔案內容僅含 pid、mode、scenarioId、sudsPre、sudsPost、timestamp，不含 PII。</p>
      </div>

      <Footer />
    </main>
  );
}
