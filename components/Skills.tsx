"use client";
import { useState } from "react";
import { skills } from "@/data/portfolio";
import Tabs from "./Tabs";

export default function Skills() {
  const [sel, setSel] = useState("Tout");
  return (
    <>
      <Tabs items={["Tout", ...Object.keys(skills)]} current={sel} onChange={setSel} />
      <div className="chips">
        {Object.entries(skills).flatMap(([cat, list]) =>
          list.map((s) => (
            <span key={cat + s} className={"chip" + (sel !== "Tout" && sel !== cat ? " off" : "")}>{s}</span>
          ))
        )}
      </div>
    </>
  );
}
