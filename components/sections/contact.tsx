import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="flex min-h-screen flex-col justify-center scroll-mt-24">
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 6
      </span>
      <h2 className="section-title mt-3">Contact</h2>
      <div className="mt-2 mb-8 h-0.5 w-16 bg-accent" />

      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
        Vous pouvez me joindre via les canaux ci-dessous. Je m&apos;efforce de
        répondre sous quinzaine.
      </p>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-4">
          <span className="flex size-10 items-center justify-center border-2 border-accent/30 bg-accent/10 text-accent">
            <Mail size={16} />
          </span>
          <div>
            <p className="font-heading text-sm font-semibold tracking-wide text-foreground">
              Email
            </p>
            <a
              href="mailto:anerti@example.com"
              className="text-sm text-muted-foreground underline-offset-2 hover:text-accent hover:underline"
            >
              anerti@example.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex size-10 items-center justify-center border-2 border-accent/30 bg-accent/10 text-accent">
            <MapPin size={16} />
          </span>
          <div>
            <p className="font-heading text-sm font-semibold tracking-wide text-foreground">
              Adresse
            </p>
            <p className="text-sm text-muted-foreground">
              742 Evergreen Terrace, Chicago, IL
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex size-10 items-center justify-center border-2 border-accent/30 bg-accent/10 text-accent">
            <Phone size={16} />
          </span>
          <div>
            <p className="font-heading text-sm font-semibold tracking-wide text-foreground">
              Téléphone
            </p>
            <a
              href="tel:+13125551234"
              className="text-sm text-muted-foreground underline-offset-2 hover:text-accent hover:underline"
            >
              (312) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
