"use client";
import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import Tabs from "./Tabs";

function Card({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={"card" + (open ? " open" : "")}>
      <span className="badge">{p.badge}</span>
      <h3>{p.name}</h3>
      <p>{p.summary}</p>
      <ul className="more">{p.details.map((d) => <li key={d}>{d}</li>)}</ul>
      <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className="row">
        <button className="btn" onClick={() => setOpen(!open)}>{open ? "Réduire" : "Détails"}</button>
        {p.links.map((l) => (
          <a key={l.href} className="btn p" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const [cat, setCat] = useState("Tous");
  return (
    <>
      <Tabs items={["Tous", "IA", "Back-end", "Système"]} current={cat} onChange={setCat} />
      <div className="grid">
        {projects.filter((p) => cat === "Tous" || p.cat === cat).map((p) => <Card key={p.name} p={p} />)}
      </div>
    </>
  );
}
