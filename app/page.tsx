
const programs = [
  {
    number: "01",
    title: "Cinéma et réalisation",
    description:
      "Apprenez à raconter des histoires, filmer des scènes et réaliser vos propres films.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85",
    alt: "Équipement de cinéma et réalisation",
  },
  {
    number: "02",
    title: "Production musicale",
    description:
      "Découvrez le beatmaking, l'enregistrement et les bases du mixage audio.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=85",
    alt: "Studio de production musicale",
  },
  {
    number: "03",
    title: "Design graphique",
    description:
      "Développez votre créativité et apprenez à concevoir des visuels professionnels.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=85",
    alt: "Espace de création graphique",
  },
  {
    number: "04",
    title: "Création de contenu",
    description:
      "Apprenez à produire des vidéos et des contenus adaptés aux réseaux sociaux.",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=85",
    alt: "Création de contenu vidéo",
  },
];

const projects = [
  {
    number: "01",
    category: "CINÉMA",
    title: "Histoires en images",
    description:
      "Des histoires originales racontées à travers la caméra.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
    alt: "Équipement de tournage cinématographique",
  },
  {
    number: "02",
    category: "MUSIQUE",
    title: "Créer le son de demain",
    description:
      "La créativité musicale, de la première idée au morceau final.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
    alt: "Artiste dans un environnement musical",
  },
  {
    number: "03",
    category: "CRÉATION VISUELLE",
    title: "Une vision créative",
    description:
      "Des idées transformées en créations visuelles originales.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    alt: "Espace de création et de conception",
  },
];

export default function Home() {
  return (
    <main>
     

      {/* HERO */}
      <section className="hero">
        <div className="hero-image" />

        <div className="hero-content">
          <p className="hero-label">
            <span /> ACADÉMIE CRÉATIVE · HAÏTI
          </p>

          <h1>
            Votre histoire.
            <br />
            <span>Votre vision.</span>
            <br />
            Votre avenir.
          </h1>

          <p className="hero-description">
            Nous aidons les jeunes Haïtiens à développer leur
            talent dans le cinéma, la musique et les arts
            numériques pour transformer leurs idées en projets
            concrets.
          </p>

          <div className="hero-buttons">
            <a href="#programs" className="primary-button">
              Découvrir nos programmes <span>↗</span>
            </a>

            <a href="#about" className="secondary-button">
              Découvrir l’Académie ↓
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <span>CAMP-PERRIN, HAÏTI</span>
          <span>APPRENDRE. CRÉER. INSPIRER.</span>
          <a href="#about">DÉFILER ↓</a>
        </div>
      </section>

      {/* VISION ET MISSION */}
      <section className="about-preview" id="about">
        <div className="about-heading">
          <p className="section-label">01 / NOTRE VISION</p>

          <h2>
            Les idées méritent
            <br />
            <span>de devenir des histoires.</span>
          </h2>
        </div>

        <div className="about-bottom">
          <div className="about-symbol" aria-hidden="true">
            <span>W</span>
            <small>
              MAKE IT
              <br />
              REAL.
            </small>
          </div>

          <div className="about-copy">
            <p>
              WMMA — We Make Movies Academy Haiti — est un espace
              de création et d’apprentissage qui accompagne les
              jeunes Haïtiens dans le développement de leurs
              talents artistiques et numériques.
            </p>

            <p>
              Du cinéma à la production musicale, nous encourageons
              l’expérimentation, la pratique et la confiance en soi
              pour transformer les idées en projets concrets.
            </p>

            <a href="#programs" className="about-link">
              Explorer nos formations <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="programs-preview" id="programs">
        <p className="section-label">02 / NOS PROGRAMMES</p>

        <h2>Qu’aimeriez-vous créer ?</h2>

        <p className="programs-intro">
          Découvrez nos domaines de formation et donnez vie à
          vos idées grâce à la pratique et à la créativité.
        </p>

        <div className="program-cards">
          {programs.map((program) => (
            <article
              className="program-card"
              key={program.number}
            >
              <div className="program-card-image">
                <img
                  src={program.image}
                  alt={program.alt}
                  loading="lazy"
                />

                <span className="program-number">
                  {program.number}
                </span>
              </div>

              <div className="program-card-content">
                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <a href="#contact" className="program-link">
                  En savoir plus <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* POURQUOI CHOISIR WMMA */}
      <section className="why-wmma">
        <div className="why-heading">
          <p className="section-label">03 / POURQUOI WMMA</p>

          <h2>
            Apprendre aujourd’hui.
            <br />
            <span>Créer demain.</span>
          </h2>

          <p className="why-intro">
            Nous croyons que chaque jeune possède un potentiel
            créatif. Notre mission est de lui donner les outils
            pour le développer et le transformer en projets concrets.
          </p>
        </div>

        <div className="why-grid">
          <article className="why-card">
            <span className="why-number">01</span>

            <h3>Apprentissage pratique</h3>

            <p>
              Apprenez en pratiquant, expérimentez de nouvelles
              techniques et développez vos compétences créatives.
            </p>
          </article>

          <article className="why-card">
            <span className="why-number">02</span>

            <h3>Encadrement créatif</h3>

            <p>
              Évoluez dans un environnement qui encourage les idées,
              la collaboration et la confiance en soi.
            </p>
          </article>

          <article className="why-card">
            <span className="why-number">03</span>

            <h3>Projets concrets</h3>

            <p>
              Mettez vos connaissances en pratique pour réaliser
              des créations qui reflètent votre vision.
            </p>
          </article>
        </div>
      </section>

      {/* NOS RÉALISATIONS */}
      <section className="projects-section" id="projects">
        <div className="projects-heading">
          <div>
            <p className="section-label">04 / NOS RÉALISATIONS</p>

            <h2>
              La créativité
              <br />
              <span>prend vie.</span>
            </h2>
          </div>

          <p className="projects-intro">
            Chaque idée est une occasion de raconter une histoire,
            d’explorer un univers et de créer quelque chose d’unique.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />

                <span className="project-index">
                  {project.number}
                </span>

                <span className="project-arrow">↗</span>
              </div>

              <div className="project-content">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="projects-note">
          Images d’illustration — les réalisations de WMMA seront
          ajoutées au fur et à mesure.
        </p>
      </section>

      {/* REJOIGNEZ WMMA */}
      <section className="join-wmma">
        <p className="section-label">05 / PASSEZ À L’ACTION</p>

        <h2>
          Votre talent mérite
          <br />
          <span>d’aller plus loin.</span>
        </h2>

        <p className="join-description">
          Vous souhaitez apprendre, créer et développer vos
          compétences dans les industries créatives ?
          Contactez WMMA pour en savoir plus sur nos formations.
        </p>

        <p className="join-contact-label">
          CHOISISSEZ VOTRE CONTACT WHATSAPP
        </p>

        <div className="join-buttons">
          <a
            href="https://wa.me/50948156507?text=Bonjour%20WMMA%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20formations."
            className="join-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacter WMMA <span>↗</span>
          </a>

          <a
            href="https://wa.me/50934501549?text=Bonjour%20WMMA%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20formations."
            className="join-button join-button-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacter WMMA <span>↗</span>
          </a>
        </div>

        <p className="join-note">
          CINÉMA · MUSIQUE · DESIGN · CRÉATION DE CONTENU
        </p>
      </section>

      {/* CONTACT ET PIED DE PAGE */}
      <footer className="simple-footer" id="contact">
        <strong>WMMA — WE MAKE MOVIES ACADEMY HAITI</strong>

        <p>Apprendre. Créer. Inspirer.</p>

        <span>© {new Date().getFullYear()} WMMA Haiti</span>
      </footer>
    </main>
  );
}

