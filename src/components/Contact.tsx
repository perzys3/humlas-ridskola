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

          <form className="rounded-2xl bg-white p-8 shadow-lg shadow-forest/5">
            <h3 className="font-serif text-2xl font-semibold text-forest">
              Skicka ett meddelande
            </h3>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest">
                  Namn
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-cream-dark bg-cream/50 px-4 py-2.5 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Ditt namn"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest">
                  E-post
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-cream-dark bg-cream/50 px-4 py-2.5 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="din@epost.se"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full resize-none rounded-lg border border-cream-dark bg-cream/50 px-4 py-2.5 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Berätta vad du är intresserad av..."
                />
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-forest py-3 font-semibold text-white transition-colors hover:bg-forest-light"
              >
                Skicka meddelande
              </button>
              <p className="text-center text-xs text-mountain">
                Formuläret är en platshållare — vi kopplar ihop det med e-post
                eller bokningssystem senare.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
