const projects = [
  {
    title: "Payment Gateway Service",
    year: "2024",
    description:
      "A high-throughput, low-latency payment orchestration service handling 10K+ transactions per second with idempotency guarantees.",
  },
  {
    title: "Real-Time Analytics Pipeline",
    year: "2023",
    description:
      "Kafka-streams-based pipeline processing 2M+ daily events with sub-second latency for operational dashboards.",
  },
  {
    title: "Microservice Migration Kit",
    year: "2022",
    description:
      "Internal tooling and migration framework that reduced monolith-to-microservice cutover time from weeks to days.",
  },
  {
    title: "Open Source: Retry4j",
    year: "2021",
    description:
      "A Java library for declarative retry policies with exponential backoff, circuit breakers, and metrics integration.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="flex min-h-screen flex-col justify-center scroll-mt-24">
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 5
      </span>
      <h2 className="section-title mt-3">Projects</h2>
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
