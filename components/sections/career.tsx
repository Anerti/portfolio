import Image from "next/image";

const roles = [
  {
    period: "Janvier 2025 \u2014 Actuellement",
    title: "Etudiant en informatique",
    org: "HEI Madagascar",
    description:
      "Acquisition des fondamentaux couvrant le développement frontend et backend, le DevOps, les réseaux, les systèmes, le data engineering et le cloud computing.",
  },
  {
    period: "Novembre 2023",
    title: "Technicien en Radioprotection",
    org: "INSTN Madagascar",
    description:
        "Titulaire d'une Licence en Radioprotection.",
  },
  {
    period: "Mars 2023 \u2014 Juin 2023",
    title: "Stagiaire en Radioprotection",
    org: "CHU Joseph Raseta Befelatanana",
    description: [
      "Évaluer les pratiques en matière de radioprotection et proposer des améliorations continues.",
      "Analyser le niveau d'exposition aux radiations du personnel médical.",
      "Former et informer le personnel sur les bonnes pratiques en matière de radioprotection.",
    ],
  },
  {
    period: "Javnvier 2020 \u2014 Septembre 2023",
    title: "Etudiant en Radioprotection",
    org: "INSTN Madagascar",
    description:
        "Études fondamentaux des sciences physiques et de la radioprotection pour la prévention des risques des rayonnements ionisants.",
  },
];

export function Career() {
  return (
    <section id="career" className="relative flex min-h-screen flex-col justify-center overflow-hidden scroll-mt-24">
      <Image
        src="/road-bg.svg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-contain opacity-[0.08]"
        aria-hidden
      />
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 5
      </span>
      <h2 className="section-title mt-3">Carrière</h2>
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
            {Array.isArray(role.description) ? (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                {role.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {role.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
