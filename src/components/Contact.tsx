import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="kontakt" className="mountain-pattern bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Kontakt
            </p>
            <h2 className="font-serif text-4xl font-bold text-forest md:text-5xl">
              Boka din upplevelse
            </h2>
            <p className="mt-4 leading-relaxed text-mountain">
              Vill du boka lektion, utbildning eller en äventyrstur? Hör av dig
              så hjälper vi dig hitta rätt upplevelse.
            </p>

            <dl className="mt-8 space-y-4">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-forest">
                  Företag
                </dt>
                <dd className="mt-1 text-mountain">Humlas Ridskola AB</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-forest">
                  Plats
                </dt>
                <dd className="mt-1 text-mountain">
                  <a
                    href="https://maps.google.com/?q=Lustevägen+29+Järvsö"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
                  >
                    Lustevägen 29, Järvsö, Hälsingland
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-forest">
                  E-post
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:per@jarvsomontage.se"
                    className="text-forest underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
                  >
                    per@jarvsomontage.se
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-forest">
                  Telefon
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+46703611050"
                    className="text-forest underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
                  >
                    +46 70-361 10 50
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
