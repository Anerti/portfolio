export function About() {
  return (
    <section id="about" className="flex min-h-screen flex-col justify-center scroll-mt-24">
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 2
      </span>
      <h2 className="section-title mt-3">About</h2>
      <div className="mt-2 mb-8 h-0.5 w-16 bg-accent" />

      <p className="max-w-2xl text-base leading-[1.75] text-muted-foreground">
        Backend developer with six years of experience designing, building, and
        maintaining distributed systems. I work primarily with Java, Spring
        Boot, and PostgreSQL, and I care deeply about clean architecture,
        observability, and code that is a pleasure to maintain.
      </p>
    </section>
  );
}
