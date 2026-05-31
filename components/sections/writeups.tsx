"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { levels } from "@/lib/bandit"

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
    title: "OverTheWire — Bandit",
    date: "25 niveaux",
    excerpt:
      "Walkthrough complet du wargame Bandit d'OverTheWire. De la connexion SSH au bruteforce de PIN, en passant par cron, setuid et le chiffrement.",
  },
]

export function Writeups() {
  const [banditOpen, setBanditOpen] = useState(false)

  return (
    <>
      <section
        id="writeups"
        className="flex min-h-screen flex-col justify-center scroll-mt-24"
      >
        <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
          <span className="inline-block size-1.5 rounded-full bg-accent/60" />
          INPUT 4
        </span>
        <h2 className="section-title mt-3">Articles</h2>
        <div className="mt-2 mb-8 h-0.5 w-16 bg-accent" />

        <div className="space-y-4">
          {articles.map((article) => (
            <button
              key={article.title}
              type="button"
              onClick={() => {
                if (article.title === "OverTheWire — Bandit") {
                  setBanditOpen(true)
                }
              }}
              className="card-tv group w-full text-left"
            >
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
            </button>
          ))}
        </div>
      </section>

      <Dialog
        open={banditOpen}
        onOpenChange={(open) => {
          if (!open) setBanditOpen(false)
        }}
      >
        <DialogContent className="max-w-[90vw] max-h-[85vh] overflow-y-auto thin-scrollbar">
          <DialogHeader>
            <DialogTitle>OverTheWire — Bandit</DialogTitle>
            <DialogDescription>
              Walkthrough complet du wargame Bandit. Cliquez sur un niveau pour
              voir le détail de la résolution.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2">
            {levels.map((level) => (
              <Link
                key={level.slug}
                href={`/writeups/bandit/${level.slug}`}
                onClick={() => setBanditOpen(false)}
                className="card-tv group block w-full text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-sm font-semibold tracking-wide text-foreground">
                    {level.title}
                  </h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {level.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
