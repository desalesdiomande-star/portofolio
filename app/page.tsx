import Header from "@/components/Header";
import Typed from "@/components/Typed";
import Terminal from "@/components/Terminal";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CopyEmail from "@/components/CopyEmail";
import Image from "next/image";


const stats: [string, string][] = [
  ["1er", "Hack for Humanity 2026"], ["3", "projets IA & système"],
  ["4 ans", "de formation post-bac"], ["2", "mois de stage back-end"],
];
const studies: [string, string][] = [
  ["ESATIC – Cycle ingénieur, 2e année", "2026 – 2027"],
  ["ESATIC – Cycle ingénieur, 1re année", "2025 – 2026"],
  ["Classe préparatoire, 2e année", "2024 – 2025"],
  ["Classe préparatoire, 1re année", "2023 – 2024"],
  ["Baccalauréat scientifique (série C), Lycée Moderne de Bongouanou", "2023"],
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="wrap" id="top">
        <div className="hero">
          <div>
          <Image
            src="/photo.png"
            alt="Portrait de Diomande Gnan Desales Yeneka"
            width={112}
            height={112}
            className="avatar"
            priority
          />
            <span className="status"><i />Disponible pour un stage data / IA</span>
            <h1>Diomande Gnan Desales Yeneka</h1>
            <Typed />
            <p className="lead">
              Élève ingénieur en sciences du numérique à l’ESATIC, à Abidjan. Je transforme des données
              en solutions utiles : IA, back-end et bases de données.
            </p>
            <div className="btns">
              <a className="btn p" href="#projets">Voir mes projets</a>
              <a className="btn" href="#contact">Me contacter</a>
            </div>
          </div>
          <Terminal />
        </div>

        <div className="stats">
          {stats.map(([b, s]) => <div className="stat" key={s}><b>{b}</b><span>{s}</span></div>)}
        </div>

        <section id="competences">
          <h2>Compétences</h2>
          <Skills />
          <p className="soft">
            Clique sur une catégorie pour filtrer. Qualités : fiabilité, polyvalence, adaptabilité,
            organisation. Langues : français courant, anglais intermédiaire.
          </p>
        </section>

        <section id="projets">
          <h2>Projets</h2>
          <Projects />
        </section>

        <section id="experience">
          <h2>Expérience</h2>
          <div className="tl">
            <h3>Stagiaire développeur web</h3>
            <div className="m">Maurice Communication Marketing, Abidjan · juin – septembre 2026</div>
            <ul>
              <li>Back-end de <b>PASS-OPTIQUE</b>, plateforme de gestion pour opticiens (Node.js, MySQL).</li>
              <li>Requêtes SQL pour les ventes, la facturation et les paiements.</li>
              <li>Architecture multi-cabinets : données et utilisateurs séparés, accès par rôles et permissions détaillées.</li>
              <li>Authentification sécurisée et déploiement sur Render.</li>
            </ul>
            <div className="row">
              <a className="btn" href="https://github.com/desalesdiomande-star/passoptique" target="_blank" rel="noopener noreferrer">
                Code source sur GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="formation">
          <h2>Formation</h2>
          <div className="edu">
            {studies.map(([t, y]) => <div key={t}><b>{t}</b><span>{y}</span></div>)}
          </div>
          <p className="soft">
            Activités : vainqueur du hackathon Hack for Humanity (2026), participant au hackathon JETIC (2024),
            vidéographie d’événements (S2C).
          </p>
        </section>

        <section id="contact">
          <h2>Travaillons ensemble</h2>
          <div className="contact">
            <CopyEmail />
            <a className="btn" href="tel:+2250584426616"><small>Téléphone</small>+225 05 84 42 66 16</a>
            <a className="btn" href="https://github.com/desalesdiomande-star" target="_blank" rel="noopener noreferrer">
              <small>GitHub</small>desalesdiomande-star
            </a>
          </div>
        </section>
      </main>
      <footer><div className="wrap">© 2026 Diomande Gnan Desales Yeneka · Abidjan, Côte d’Ivoire</div></footer>
    </>
  );
}
