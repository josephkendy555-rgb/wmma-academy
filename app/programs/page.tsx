
const programs = [
  {
    number: "01",
    category: "CINÉMA",
    title: "Cinéma et réalisation",
    description:
      "Apprenez à raconter des histoires, à filmer des scènes et à donner vie à vos idées à travers le langage du cinéma.",
    skills: [
      "Les bases du langage cinématographique",
      "Cadrage et composition d’image",
      "Réalisation et narration visuelle",
      "Préparation d’un projet de film",
    ],
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    category: "MUSIQUE",
    title: "Production musicale",
    description:
      "Découvrez les étapes de création musicale, de la première idée à l’enregistrement et aux bases du mixage.",
    skills: [
      "Initiation au beatmaking",
      "Découverte de l’enregistrement audio",
      "Bases du mixage",
      "Création d’un projet musical",
    ],
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    category: "DESIGN",
    title: "Design graphique",
    description:
      "Développez votre sens visuel et apprenez à transformer vos idées en créations graphiques claires et professionnelles.",
    skills: [
      "Principes du design graphique",
      "Couleurs et typographie",
      "Création d’affiches",
      "Composition et identité visuelle",
    ],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    category: "CONTENU NUMÉRIQUE",
    title: "Création de contenu",
    description:
      "Apprenez à concevoir et produire des contenus visuels adaptés aux réseaux sociaux et à différents publics.",
    skills: [
      "Recherche d’idées et préparation",
      "Prise de vue avec smartphone",
      "Montage vidéo",
      "Formats et narration pour les réseaux sociaux",
    ],
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function ProgramsPage() {
  return (
    <main className="programs-page">
      <section className="programs-hero">
        <div className="programs-hero-image" />

        <div className="programs-hero-content">
          <p className="section-label">
            WMMA HAITI / NOS PROGRAMMES
          </p>

          <h1>
            Apprenez.
            <br />
            <span>Expérimentez.</span>
            <br />
            Créez.
          </h1>

          <p>
            Explorez les disciplines créatives, développez vos
            compétences et transformez vos idées en projets concrets.
          </p>

          <a href="#formations" className="programs-hero-link">
            Explorer les formations <span>↓</span>
          </a>
        </div>

        <div className="programs-hero-footer">
          <span>CAMP-PERRIN, HAÏTI</span>
          <span>APPRENDRE · CRÉER · INSPIRER</span>
        </div>
      </section>

      <section className="programs-introduction" id="formations">
        <div>
          <p className="section-label">01 / NOS DOMAINES</p>

          <h2>
            Quel sera votre
            <br />
            <span>prochain projet ?</span>
          </h2>
        </div>

        <p>
          Nos domaines de formation sont conçus pour encourager
          l’apprentissage pratique, l’expérimentation et le
          développement de votre créativité.
        </p>
      </section>

      <section className="programs-detail-list">
        {programs.map((program) => (
          <article
            className="program-detail-card"
            key={program.number}
          >
            <div className="program-detail-image">
              <img
                src={program.image}
                alt={program.title}
                loading="lazy"
              />

              <span>{program.number}</span>
            </div>

            <div className="program-detail-content">
              <p className="program-detail-category">
                {program.category}
              </p>

              <h2>{program.title}</h2>

              <p className="program-detail-description">
                {program.description}
              </p>

              <h3>Au programme</h3>

              <ul>
                {program.skills.map((skill) => (
                  <li key={skill}>
                    <span>↗</span>
                    {skill}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/50948156507?text=${encodeURIComponent(
                  `Bonjour WMMA, je souhaite obtenir des informations sur la formation ${program.title}.`
                )}`}
                className="program-detail-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                En savoir plus <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="programs-cta">
        <p className="section-label">VOTRE AVENIR CRÉATIF</p>

        <h2>
          Une idée en tête ?
          <br />
          <span>Commençons ensemble.</span>
        </h2>

        <p>
          Contactez notre équipe pour en savoir plus sur les
          programmes et les prochaines possibilités de formation.
        </p>

        <a
          href="https://wa.me/50948156507?text=Bonjour%20WMMA%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20formations."
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacter WMMA <span>↗</span>
        </a>
      </section>
    </main>
  );
}
