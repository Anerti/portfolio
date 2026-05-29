const projects = [
  {
    title: "Service de Passerelle de Paiement",
    year: "2024",
    description:
      "Un service d'orchestration de paiement à haut débit et faible latence gérant 10 000+ transactions par seconde avec garanties d'idempotence.",
  },
  {
    title: "Pipeline d'Analyse en Temps Réel",
    year: "2023",
    description:
      "Pipeline basé sur Kafka Streams traitant 2 millions+ d'événements par jour avec une latence inférieure à la seconde.",
  },
  {
    title: "Kit de Migration vers les Microservices",
    year: "2022",
    description:
      "Un outil interne et framework de migration qui a réduit le temps de basculement du monolithe aux microservices de semaines à jours.",
  },
  {
    title: "Open Source : Retry4j",
    year: "2021",
    description:
      "Une bibliothèque Java pour les politiques de réessai déclaratives avec backoff exponentiel, circuit breakers et intégration de métriques.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="flex min-h-screen flex-col justify-center scroll-mt-24">
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 4
      </span>
      <h2 className="section-title mt-3">Projets</h2>
      <div className="mt-2 mb-8 h-0.5 w-16 bg-accent" />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="card-tv group">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-heading text-base font-semibold tracking-wide text-foreground">
                {project.title}
              </h3>
              <span className="shrink-0 whitespace-nowrap border border-accent/30 bg-accent/10 px-2 py-0.5 font-heading text-[10px] tracking-wider text-accent">
                {project.year}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
