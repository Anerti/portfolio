const roles = [
  {
    period: "2025 \u2014 Present",
    title: "Senior Backend Engineer",
    org: "TechCorp",
    description:
      "Leading architecture decisions, mentoring junior engineers, and driving reliability improvements across the platform.",
  },
  {
    period: "2021 \u2014 2024",
    title: "Backend Engineer",
    org: "Finova",
    description:
      "Designed and built a real-time payment orchestration service and led the migration from a monolith to microservices.",
  },
  {
    period: "2019 \u2014 2021",
    title: "Junior Backend Developer",
    org: "Startify",
    description:
      "Built REST APIs, wrote integration tests, and contributed to the transition from legacy SOAP services to modern RESTful architecture.",
  },
];

export function Career() {
  return (
    <section id="career" className="flex min-h-screen flex-col justify-center scroll-mt-24">
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 3
      </span>
      <h2 className="section-title mt-3">Career</h2>
      <div className="mt-2 mb-8 h-0.5 w-16 bg-accent" />

      <div className="space-y-6">
        {roles.map((role) => (
          <div key={role.period} className="card-tv group">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-heading text-base font-semibold tracking-wide text-foreground">
                {role.title}
              </h3>
              <span className="text-xs text-muted-foreground">
                {role.period}
              </span>
            </div>
            <p className="mt-0.5 text-sm font-semibold text-accent">
              {role.org}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
