const skillGroups = [
  {
    title: "Langages",
    skills: ["Java", "Kotlin", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Spring Cloud", "Hibernate", "JUnit"],
  },
  {
    title: "Infrastructure",
    skills: ["PostgreSQL", "Kafka", "Docker", "AWS"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="flex min-h-screen flex-col justify-center scroll-mt-24">
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 3
      </span>
      <h2 className="section-title mt-3">Compétences</h2>
      <div className="mt-2 mb-8 h-0.5 w-16 bg-accent" />

      <div className="grid gap-5 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="card-tv">
            <h3 className="font-heading text-sm font-semibold tracking-wide text-foreground">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-accent">&gt;</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
