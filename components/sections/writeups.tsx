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

export function Writeups() {
  const [banditOpen, setBanditOpen] = useState(false)

  return (
    <>
      <section
        id="writeups"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden scroll-mt-24"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <img src="/article-bg.svg" alt="" className="size-full object-contain" />
        </div>
        <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
          <span className="inline-block size-1.5 rounded-full bg-accent/60" />
          INPUT 4
        </span>
        <h2 className="section-title mt-3">Articles</h2>
        <div className="mt-2 mb-8 h-0.5 w-16 bg-accent" />

        <button
          type="button"
          onClick={() => setBanditOpen(true)}
          className="card-tv group w-full text-left"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading text-base font-semibold tracking-wide text-foreground">
              OverTheWire — Bandit
            </h3>
            <span className="shrink-0 whitespace-nowrap text-xs text-muted-foreground">
              25 niveaux
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Walkthrough complet du wargame Bandit d&rsquo;OverTheWire. De la connexion
            SSH au bruteforce de PIN, en passant par cron, setuid et le
            chiffrement.
          </p>
        </button>
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
