export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <span className="inline-flex items-center gap-3 font-heading text-sm uppercase tracking-[0.25em] text-muted-foreground">
        <span className="inline-block size-2 animate-pulse rounded-full bg-accent/60 shadow-[0_0_6px] shadow-accent/40" />
        Chargement…
      </span>
    </div>
  );
}
