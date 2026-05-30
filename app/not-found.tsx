import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6">
      <h1 className="font-heading text-4xl font-semibold uppercase tracking-[0.15em] text-foreground">
        404
      </h1>
      <p className="max-w-md text-center text-sm text-muted-foreground">
        Page introuvable.
      </p>
      <Link
        href="/about"
        className="border-2 border-accent bg-accent px-6 py-3 font-heading text-xs uppercase tracking-[0.15em] text-accent-foreground transition-colors duration-200 hover:bg-accent/80"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
