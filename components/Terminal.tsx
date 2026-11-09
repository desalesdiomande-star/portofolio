"use client";
import { useEffect, useRef, useState } from "react";
import { aliases, commands, scrollTo } from "@/data/portfolio";

type Line = { t: string; c?: string };

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([{ t: "Bienvenue. Tape une commande ou clique ci-dessous.", c: "d" }]);
  const [val, setVal] = useState("");
  const out = useRef<HTMLDivElement>(null);

  useEffect(() => { out.current?.scrollTo({ top: out.current.scrollHeight }); }, [lines]);

  function run(raw: string) {
    const c = raw.trim().toLowerCase();
    if (!c) return;
    if (c === "clear") { setLines([]); return; }
    const k = aliases[c] ?? c;
    const add: Line[] = [{ t: "$ " + raw, c: "c" }];
    if (commands[k]) {
      add.push({ t: commands[k] });
      const id = scrollTo[k];
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else if (c === "sudo hire desales") {
      add.push({ t: "Permission accordée. Bienvenue dans l’équipe !", c: "c" });
    } else {
      add.push({ t: `commande introuvable : ${c} (tape help)`, c: "d" });
    }
    setLines((l) => [...l, ...add]);
  }

  return (
    <div className="term" role="region" aria-label="Terminal interactif">
      <div className="top"><i /><i /><i /><span style={{ marginLeft: 8 }}>desales@esatic: ~</span></div>
      <div id="out" ref={out}>
        {lines.map((l, i) => <div key={i} className={l.c}>{l.t}</div>)}
      </div>
      <div className="in">
        <span>$</span>
        <input
          id="cmd" value={val} autoComplete="off" autoCapitalize="off" spellCheck={false}
          aria-label="Commande" placeholder="tape « help »"
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { run(val); setVal(""); } }}
        />
      </div>
      <div className="sug">
        {["help", "about", "skills", "projets", "contact"].map((n) => (
          <button key={n} onClick={() => run(n)}>{n}</button>
        ))}
      </div>
    </div>
  );
}
