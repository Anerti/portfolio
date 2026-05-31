import Image from "next/image"
import { GraduationCap, ScrollText, Atom } from "lucide-react"

const iconMap = {
  education: GraduationCap,
  work: ScrollText,
  internship: Atom,
}

type RoleType = keyof typeof iconMap

interface Role {
  period: string
  title: string
  org: string
  description: string | string[]
  type: RoleType
  status: "current" | "finished"
}

const roles: Role[] = [
  {
    period: "Janvier 2025",
    title: "Etudiant en informatique",
    org: "HEI Madagascar",
    description:
      "Acquisition des fondamentaux couvrant le développement frontend et backend, le DevOps, les réseaux, les systèmes, le data engineering et le cloud computing.",
    type: "education",
    status: "current",
  },
  {
    period: "Novembre 2023",
    title: "Technicien en Radioprotection",
    org: "INSTN Madagascar",
    description: "Titulaire d'une Licence en Radioprotection.",
    type: "work",
    status: "finished",
  },
  {
    period: "Mars 2023 — Juin 2023",
    title: "Stagiaire en Radioprotection",
    org: "CHU Joseph Raseta Befelatanana",
    description: [
      "Évaluer les pratiques en matière de radioprotection et proposer des améliorations continues.",
      "Analyser le niveau d'exposition aux radiations du personnel médical.",
      "Former et informer le personnel sur les bonnes pratiques en matière de radioprotection.",
    ],
    type: "internship",
    status: "finished",
  },
  {
    period: "Janvier 2020 — Septembre 2023",
    title: "Etudiant en Radioprotection",
    org: "INSTN Madagascar",
    description:
      "Études fondamentaux des sciences physiques et de la radioprotection pour la prévention des risques des rayonnements ionisants.",
    type: "education",
    status: "finished",
  },
]

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

      <div className="relative">
        <div className="absolute left-5 top-0 h-full w-0.5 bg-border" aria-hidden />

        <div className="space-y-0">
          {roles.map((role) => {
            const Icon = iconMap[role.type]
            const isCurrent = role.status === "current"
            return (
              <div key={role.period} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div
                    className={`z-10 flex size-10 items-center justify-center rounded-full border-2 ring-4 ring-background transition-colors ${
                      isCurrent
                        ? "border-accent bg-accent"
                        : "border-accent/30 bg-card"
                    }`}
                  >
                    <Icon
                      className={`size-4 ${
                        isCurrent ? "text-background" : "text-accent"
                      }`}
                    />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="rounded-lg border border-border bg-card/50 p-5 transition-colors hover:border-accent/30">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-heading text-base font-semibold tracking-wide text-foreground">
                          {role.title}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-accent">
                          {role.org}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 bg-orange-400/10 px-2.5 py-0.5 font-heading text-[10px] uppercase tracking-wider text-orange-400">
                            <span className="inline-block size-1.5 animate-blink rounded-full bg-orange-400" />
                            En cours
                          </span>
                        )}
                        <span className="whitespace-nowrap text-xs text-muted-foreground">
                          {role.period}
                        </span>
                      </div>
                    </div>

                    {Array.isArray(role.description) ? (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                        {role.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {role.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
