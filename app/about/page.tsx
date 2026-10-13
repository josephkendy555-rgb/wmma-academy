
const values = [
  {
    number: "01",
    title: "La créativité",
    description:
      "Encourager chaque jeune à explorer ses idées, développer son imagination et trouver sa propre voix.",
  },
  {
    number: "02",
    title: "La pratique",
    description:
      "Apprendre en expérimentant, en collaborant et en réalisant des projets concrets.",
  },
  {
    number: "03",
    title: "L’opportunité",
    description:
      "Donner aux jeunes les outils et les connaissances nécessaires pour développer leur potentiel créatif.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-image" />

        <div className="about-hero-content">
          <p className="section-label">
            WMMA HAITI / À PROPOS
          </p>

          <h1>
            Donner vie
            <br />
            <span>aux idées.</span>
          </h1>

          <p>
            Une académie créative qui accompagne les jeunes
            Haïtiens dans l’exploration du cinéma, de la musique
            et des arts numériques.
          </p>

          <a href="#notre-histoire" className="about-hero-link">
            Découvrir notre histoire <span>↓</span>
          </a>
        </div>

        <div className="about-hero-footer">
          <span>CAMP-PERRIN, HAÏTI</span>
          <span>APPRENDRE · CRÉER · INSPIRER</span>
        </div>
      </section>

      <section className="about-story" id="notre-histoire">
        <div className="about-story-heading">
          <p className="section-label">01 / NOTRE HISTOIRE</p>

          <h2>
            L’avenir créatif
            <br />
            <span>commence ici.</span>
          </h2>
        </div>

        <div className="about-story-copy">
          <p>
            WMMA — We Make Movies Academy Haiti — est une
            initiative créative dédiée à l’apprentissage et au
            développement des talents des jeunes Haïtiens.
          </p>

          <p>
            Nous voulons créer un environnement où les jeunes
            peuvent apprendre, expérimenter et transformer leurs
            idées en réalisations concrètes dans les industries
            créatives.
          </p>

          <p>
            À travers la pratique, la collaboration et le partage
            des connaissances, nous encourageons une nouvelle
            génération de créateurs à raconter leurs histoires
            et à exprimer leur vision.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission-image" />

        <div className="about-mission-content">
          <p className="section-label">02 / NOTRE MISSION</p>

          <h2>
            Former.
            <br />
            Inspirer.
            <br />
            <span>Créer.</span>
          </h2>

          <p>
            Offrir aux jeunes un espace d’apprentissage pratique
            dans le cinéma, la production musicale, le design
            graphique et la création de contenu, afin de les aider
            à développer leurs compétences et à concrétiser leurs
            idées.
          </p>
        </div>
      </section>

      <section className="about-vision">
        <p className="section-label">03 / NOTRE VISION</p>

        <h2>
          Faire émerger une nouvelle génération
          <span> de créateurs haïtiens.</span>
        </h2>

        <p>
          Nous aspirons à contribuer au développement d’un
          environnement créatif en Haïti où les jeunes peuvent
          apprendre, innover et partager leurs œuvres avec le monde.
        </p>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <p className="section-label">04 / NOS VALEURS</p>

          <h2>
            Ce qui nous
            <br />
            <span>fait avancer.</span>
          </h2>
        </div>

        <div className="about-values-list">
          {values.map((value) => (
            <article
              className="about-value"
              key={value.number}
            >
              <span>{value.number}</span>

              <div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>

              <span className="about-value-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <p className="section-label">VOTRE PARCOURS COMMENCE ICI</p>

        <h2>
          Et si votre prochaine
          <br />
          histoire commençait <span>avec nous ?</span>
        </h2>

        <p>
          Contactez WMMA pour découvrir nos formations et en
          savoir plus sur notre démarche créative.
        </p>

        <a
          href="https://wa.me/50948156507?text=Bonjour%20WMMA%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20votre%20acad%C3%A9mie."
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacter WMMA <span>↗</span>
        </a>
      </section>
    </main>
  );
}
