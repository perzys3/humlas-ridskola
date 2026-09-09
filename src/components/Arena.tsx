export default function Arena() {
  return (
    <section id="ridbana" className="bg-forest py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
          Vår ridbana
        </p>
        <h2 className="font-serif text-4xl font-bold md:text-5xl">
          Högt upp på berget
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/85">
          Vår ridbana ligger högt upp på berget med en fantastisk utsikt över
          Järvsös omgivningar. Med söderläge får du vackert ljus och perfekta
          förutsättningar för minnesvärda ridstunder — och för vackra bilder i
          en miljö som tar anden ur dig.
        </p>
        <ul className="mt-8 space-y-4 text-left md:mx-auto md:max-w-md">
          {[
            "Spektakulär utsikt över bergen",
            "Söderläge med vackert ljus",
            "Trygg och välskött ridbana",
            "Unik miljö i hjärtat av Järvsö",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/30 text-accent-light">
                ✓
              </span>
              <span className="text-white/90">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 font-serif text-xl italic text-white/90">
          &ldquo;En otrolig miljö för ridning och äventyr&rdquo;
        </p>
      </div>
    </section>
  );
}
