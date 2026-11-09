"use client";
import { useState } from "react";

export default function CopyEmail() {
  const [ok, setOk] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText("diomandegnan88@gmail.com");
      setOk(true);
      setTimeout(() => setOk(false), 1800);
    } catch {}
  };
  return (
    <button className="btn" onClick={copy}>
      <small>{ok ? "E-mail copié ✓" : "E-mail (clic pour copier)"}</small>
      diomandegnan88@gmail.com
    </button>
  );
}
