const articles = [
  {
    title: "Why I Still Reach for Spring Boot in 2025",
    date: "February 2025",
    excerpt:
      "Convention over configuration, mature ecosystem, and why productivity matters more than novelty.",
  },
  {
    title: "Lessons from Building a Payment Gateway",
    date: "November 2024",
    excerpt:
      "Idempotency, exactly-once semantics, and the edge cases that keep you up at night.",
  },
  {
    title: "Observability Beyond Dashboards",
    date: "July 2024",
    excerpt:
      "Why structured logging, distributed tracing, and good alerting matter more than pretty charts.",
  },
];

export function Writeups() {
  return (
    <section id="writeups" className="flex min-h-screen flex-col justify-center scroll-mt-24">
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 6
      </span>
      <h2 className="section-title mt-3">Write-ups</h2>
      <div className="mt-2 mb-8 h-0.5 w-16 bg-accent" />

      <div className="space-y-4">
        {articles.map((article) => (
          <article key={article.title} className="card-tv group">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-heading text-base font-semibold tracking-wide text-foreground">
                {article.title}
              </h3>
              <span className="shrink-0 whitespace-nowrap text-xs text-muted-foreground">
                {article.date}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
