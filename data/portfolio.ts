export const roles = [
  "élève ingénieur data & IA",
  "développeur back-end Node.js",
  "créateur de chatbots RAG",
  "vainqueur de hackathon",
];

export const skills: Record<string, string[]> = {
  IA: ["RAG", "LangChain", "Chroma", "API Groq", "Embeddings HuggingFace", "Grok Vision"],
  Données: ["SQL", "MySQL", "UML", "MERISE", "Snowflake"],
  Dev: ["Python", "C", "JavaScript (Node.js)", "Next.js", "TypeScript", "Streamlit"],
  Déploiement: ["Render", "Vercel", "Git / GitHub"],
  Télécoms: ["2G/3G/4G/5G", "TCP/IP", "Fibre optique"],
};

export type Project = {
  name: string; cat: string; badge: string; summary: string;
  details: string[]; tags: string[]; links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "EcoAbidjan", cat: "IA", badge: "Vainqueur Hack for Humanity 2026",
    summary: "Signalement des dépôts sauvages et valorisation des déchets à Abidjan.",
    details: [
      "Analyse IA des photos : Grok Vision + contexte RAG par commune",
      "Recyclage par QR code et points relais",
      "Tableau de bord admin en Next.js, TypeScript et Snowflake",
    ],
    tags: ["Next.js", "TypeScript", "Snowflake", "RAG"],
    links: [{ label: "Voir le site", href: "https://eco-abidjans.vercel.app" }],
  },
  {
    name: "desalesAI", cat: "IA", badge: "Clone IA personnel",
    summary: "Un chatbot qui répond à ma place à partir de mes propres documents.",
    details: [
      "Découpage des fichiers et embeddings multilingues HuggingFace",
      "Base vectorielle Chroma",
      "LLM Groq via LangChain, interface Streamlit",
    ],
    tags: ["Python", "LangChain", "Chroma", "Groq"],
    links: [{ label: "Discuter avec lui", href: "https://desales-ai.streamlit.app/" }],
  },
  {
    name: "PASS-OPTIQUE", cat: "Back-end", badge: "Stage professionnel",
    summary: "Plateforme de gestion multi-cabinets pour opticiens.",
    details: [
      "Contrôle d’accès par rôles et permissions",
      "Facturation, ventes et paiements en SQL",
      "Déployé sur Render",
    ],
    tags: ["Node.js", "MySQL", "Render"],
    links: [{ label: "Code source", href: "https://github.com/desalesdiomande-star/passoptique" }],
  },
  {
    name: "Mini Shell", cat: "Système", badge: "Projet académique",
    summary: "Interpréteur de commandes Unix minimaliste écrit en Python.",
    details: ["Exécute ls, pwd, cd…", "Création de processus avec fork(), execv() et wait()"],
    tags: ["Python", "Unix", "Processus"],
    links: [],
  },
];

export const commands: Record<string, string> = {
  help: "Commandes : about, skills, projets, exp, formation, contact, clear\nEssaie aussi : whoami, ls, pwd",
  about: "Diomande Gnan Desales Yeneka, élève ingénieur à l’ESATIC.\nOrienté data & IA, solide en SQL, modélisation et back-end.\nObjectif : un stage en data / IA.",
  skills: "IA ........ RAG, LangChain, Chroma, Groq\nDonnées ... SQL, MySQL, UML, MERISE\nDev ....... Python, C, Node.js, Next.js\nDéploiement Render, Vercel",
  projets: "1. EcoAbidjan   (vainqueur Hack for Humanity 2026)\n2. desalesAI    (chatbot RAG)\n3. PASS-OPTIQUE (back-end multi-cabinets)\n4. Mini Shell   (fork / execv / wait)",
  exp: "Stagiaire développeur web, Maurice Communication Marketing\njuin – septembre 2026 · Node.js, MySQL, Render",
  formation: "ESATIC cycle ingénieur (2025-2027)\nClasse préparatoire (2023-2025)\nBac C, Lycée Moderne de Bongouanou (2023)",
  contact: "diomandegnan88@gmail.com\n+225 05 84 42 66 16\nAbidjan, Côte d’Ivoire",
  whoami: "desales : futur ingénieur, amateur de données.",
  pwd: "/home/desales/portfolio",
  ls: "competences/  projets/  experience/  formation/  contact/",
};

export const aliases: Record<string, string> = { projects: "projets", experience: "exp", education: "formation" };
export const scrollTo: Record<string, string> = {
  skills: "competences", projets: "projets", exp: "experience", formation: "formation", contact: "contact",
};
