import Image from "next/image";

const techIcons: Record<string, string> = {
  TypeScript: "/icons/logo/typescript-logo.svg",
  "Next.js": "/icons/logo/nextjs-logo.svg",
  Java: "/icons/logo/java-logo.svg",
  "Spring Boot": "/icons/logo/spring-logo.svg",
  PostgreSQL: "/icons/logo/postgresql-logo.svg",
  React: "/icons/logo/react-logo.svg",
  ExpressJS: "/icons/logo/expressjs-logo.svg",
};

const projects = [
  {
    title: "EventSync",
    year: "2026",
    description:
      "système de gestion d'événements permettant d'organiser et de suivre les événements, sessions, salles, intervenants et questions-réponses.",
    stack: ["TypeScript", "Next.js", "Java", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Tetibola",
    year: "2025",
    description:
      "Application de gestion de dépenses personnelles — ajout, consultation, suppression, classement par catégorie et date, le tout sécurisé par authentification.",
    stack: ["React", "TypeScript", "ExpressJS", "PostgreSQL"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="flex min-h-screen flex-col justify-center scroll-mt-24">
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 3
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
            {project.stack && (
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2 py-1"
                  >
                    <Image
                      src={techIcons[tech]}
                      alt={tech}
                      width={16}
                      height={16}
                      className="size-4 shrink-0"
                      unoptimized
                    />
                    <span className="font-heading text-[11px] tracking-wide text-muted-foreground">
                      {tech}
                    </span>
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
