"use client";
import { useEffect, useRef, useState } from "react";

const links: [string, string][] = [
  ["competences", "Compétences"], ["projets", "Projets"], ["experience", "Expérience"],
  ["formation", "Formation"], ["contact", "Contact"],
];

export default function Header() {
  const [active, setActive] = useState("");
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      if (bar.current) bar.current.style.width = (scrollY / (h.scrollHeight - innerHeight)) * 100 + "%";
    };
    addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section").forEach((s) => io.observe(s));
    return () => { removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  const toggleTheme = () => {
    const r = document.documentElement;
    const dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
    const next = dark ? "light" : "dark";
    r.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  };

  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top">Desales</a>
        <nav>
          {links.map(([id, label]) => (
            <a key={id} href={"#" + id} className={active === id ? "on" : ""}>{label}</a>
          ))}
        </nav>
        <button id="theme" onClick={toggleTheme} aria-label="Changer de thème">◐</button>
      </div>
      <div id="bar" ref={bar} />
    </header>
  );
}
