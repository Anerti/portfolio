"use client";

import { useActionState } from "react";
import Image from "next/image";
import { submitContact, type FormState } from "@/lib/actions";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.6 18.6 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.07.07 0 0 0-.032.028C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13 13 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.01c.12.099.246.198.373.291a.077.077 0 0 1-.007.128 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029c1.961-.607 3.95-1.522 6.002-3.03a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.548-13.66a.06.06 0 0 0-.031-.029zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function Contact() {
  const [state, formAction, pending] = useActionState(submitContact, {} as FormState)

  return (
    <section id="contact" className="relative flex min-h-screen flex-col justify-center overflow-hidden scroll-mt-24">
      <Image
        src="/world-bg.svg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-contain"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-3xl px-6">
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 6
      </span>
      <h2 className="section-title mt-3">Contact</h2>
      <div className="mt-2 mb-8 h-0.5 w-16 bg-accent" />

      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
        Vous cherchez un ingénieur backend&nbsp;? Parlons de votre prochain
        projet.
      </p>

      <form
        action={formAction}
        className="mt-8 space-y-5"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="font-heading text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Prénom
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Prénom"
              required
              className="w-full border-2 border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors duration-200 focus:border-accent"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="font-heading text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Nom
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Nom"
              required
              className="w-full border-2 border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors duration-200 focus:border-accent"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="font-heading text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
              placeholder="email@exemple.com"
            required
            className="w-full border-2 border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors duration-200 focus:border-accent"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="subject" className="font-heading text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Objet
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Objet"
            required
            className="w-full border-2 border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors duration-200 focus:border-accent"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="font-heading text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Message"
            required
            className="w-full resize-none border-2 border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors duration-200 focus:border-accent"
          />
        </div>

        <div className="flex items-center gap-6">
          <button
            type="submit"
            disabled={pending}
            className="cursor-pointer border-2 border-accent bg-accent px-6 py-3 font-heading text-xs uppercase tracking-[0.15em] text-accent-foreground transition-colors duration-200 hover:bg-accent/80 disabled:opacity-50"
          >
            {pending ? "Envoi..." : "Envoyer"}
          </button>
          {state?.success && (
            <span className="text-sm text-emerald-500">Message envoyé !</span>
          )}
          {state?.error && (
            <span className="text-sm text-red-400">{state.error}</span>
          )}

          <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
            — OU —
          </span>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/anerti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center border-2 border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href="https://linkedin.com/in/anerti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center border-2 border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-5" />
            </a>
            <a
              href="https://discord.com/users/anerti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center border-2 border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              aria-label="Discord"
            >
              <DiscordIcon className="size-5" />
            </a>
          </div>
        </div>
      </form>

      <footer suppressHydrationWarning className="mt-16 flex items-center justify-center gap-2 text-[10px] font-heading uppercase tracking-[0.2em] text-muted-foreground/70">
        <span className="inline-block size-1.5 rounded-full bg-accent/40" />
        &copy; {new Date().getFullYear()} Ervin ANDRIANOMBANA
      </footer>
      </div>
    </section>
  );
}
