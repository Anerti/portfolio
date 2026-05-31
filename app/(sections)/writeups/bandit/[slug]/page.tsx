import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, TriangleAlert } from "lucide-react"
import { levels, getLevelBySlug, topNotices } from "@/lib/bandit"
import ScriptBlock from "@/components/script-block"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return levels.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const level = getLevelBySlug(slug)
  if (!level) return {}
  return {
    title: `Bandit ${level.title} — Articles`,
    description: level.excerpt,
  }
}

export default async function BanditLevelPage({ params }: Props) {
  const { slug } = await params
  const level = getLevelBySlug(slug)
  if (!level) notFound()

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/writeups"
        className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft size={16} />
        Retour aux articles
      </Link>

      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        OverTheWire — Bandit
      </span>
      <h1 className="section-title mt-3">{level.title}</h1>
      <div className="mt-2 mb-8 h-0.5 w-16 bg-accent" />

      <div className="mb-8 rounded-sm border border-border bg-muted p-4 text-xs leading-relaxed text-muted-foreground">
        <div className="mb-2 flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-wider text-accent">
          <TriangleAlert size={12} />
          Remarques
        </div>
        <div className="whitespace-pre-line">{topNotices}</div>
      </div>

      <div className="mb-8">
        <h2 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
          Description
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {level.description}
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
            Solution
          </h2>
          <ScriptBlock code={level.script} />
        </div>

        <div>
          <h2 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
            Explication
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            {level.explanation.split("\n").filter(Boolean).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {level.notes && (
          <div>
            <h2 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Notes
            </h2>
            <div className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {level.notes}
            </div>
          </div>
        )}

        <div>
          <h2 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
            Résultat
          </h2>
          <pre className="code-scrollbar overflow-x-auto rounded-sm border border-border bg-muted p-4 text-sm leading-none font-mono">
            <code>{level.output}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
