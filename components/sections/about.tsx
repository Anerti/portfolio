import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative flex min-h-screen flex-col justify-center overflow-hidden scroll-mt-24">
      <Image
        src="/fingerprint-bg.svg"
        alt=""
        width={447}
        height={881}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] w-auto max-w-none opacity-[0.05]"
        aria-hidden
      />
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 1
      </span>
      <h2 className="section-title mt-3">À propos</h2>
      <div className="mt-2 mb-8 h-0.5 w-16 bg-accent" />

      <div className="relative flex flex-col items-center gap-6">
        <Image
          src="/avatar.png"
          alt="Profile picture"
          width={160}
          height={160}
          className="size-40 shrink-0 rounded-full object-cover grayscale"
        />
        <p className="max-w-2xl text-center text-base leading-[1.75] text-muted-foreground">
            Développeur backend spécialisé Java / Spring Boot / PostgreSQL, je conçois des architectures sécurisées et mets à profit TryHackMe, pwn.college et HackTheBox pour renforcer mes compétences en cybersécurité.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-1">
        <Image
          src="/signature.svg"
          alt="Signature"
          width={200}
          height={50}
          className="h-20 w-auto opacity-80"
        />
        <span className="font-heading text-sm tracking-wider text-foreground text-center">
          Ervin ANDRIANOMBANA
        </span>
      </div>
    </section>
  );
}
