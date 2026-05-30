"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6">
      <h1 className="font-heading text-4xl font-semibold uppercase tracking-[0.15em] text-foreground">
        Erreur
      </h1>
      <p className="max-w-md text-center text-sm text-muted-foreground">
        Une erreur inattendue s&apos;est produite.
      </p>
      <button
        onClick={() => reset()}
        className="border-2 border-accent bg-accent px-6 py-3 font-heading text-xs uppercase tracking-[0.15em] text-accent-foreground transition-colors duration-200 hover:bg-accent/80"
      >
        Réessayer
      </button>
    </div>
  );
}
