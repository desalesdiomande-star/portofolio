"use client";
export default function Tabs({ items, current, onChange }: { items: string[]; current: string; onChange: (v: string) => void }) {
  return (
    <div className="tabs">
      {items.map((n) => (
        <button key={n} className="tab" aria-pressed={n === current} onClick={() => onChange(n)}>{n}</button>
      ))}
    </div>
  );
}
