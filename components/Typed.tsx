"use client";
import { useEffect, useState } from "react";
import { roles } from "@/data/portfolio";

export default function Typed() {
  const [text, setText] = useState("");
  useEffect(() => {
    let ri = 0, ci = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const w = roles[ri];
      ci += del ? -1 : 1;
      setText(w.slice(0, ci));
      let d = del ? 30 : 60;
      if (!del && ci === w.length) { del = true; d = 1400; }
      else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; d = 300; }
      t = setTimeout(tick, d);
    };
    tick();
    return () => clearTimeout(t);
  }, []);
  return <div className="role" aria-live="polite"><span>{text}</span><b /></div>;
}
