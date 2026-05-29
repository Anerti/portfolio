const articles = [
  {
    title: "Pourquoi j'utilise encore Spring Boot en 2025",
    date: "Février 2025",
    excerpt:
      "La convention plutôt que la configuration, un écosystème mature, et pourquoi la productivité prime sur la nouveauté.",
  },
  {
    title: "Leçons de la construction d'une passerelle de paiement",
    date: "Novembre 2024",
    excerpt:
      "Idempotence, sémantique « exactly-once », et les cas limites qui vous tiennent éveillé la nuit.",
  },
  {
    title: "L'observabilité au-delà des tableaux de bord",
    date: "Juillet 2024",
    excerpt:
      "Pourquoi la journalisation structurée, le tracing distribué et de bonnes alertes comptent plus que de beaux graphiques.",
  },
];

export function Writeups() {
  return (
    <section id="writeups" className="flex min-h-screen flex-col justify-center scroll-mt-24">
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 5
      </span>
      <h2 className="section-title mt-3">Articles</h2>
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
