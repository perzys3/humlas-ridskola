import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Ryttare på islandshästar vid Järvsö-hjärtat med utsikt över bergen"
        fill
        priority
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent-light">
          Järvsö · Hälsingland
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
          Humlas Ridskola AB
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
          Upplev islandshästar i en otrolig bergsmiljö. Ridutbildning, lektioner
          och äventyrsturer bland Järvsös vackra berg — med fantastisk utsikt
          från vår ridbana högt upp på berget.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#tjanster"
            className="rounded-full bg-accent px-8 py-3.5 font-semibold text-white transition-colors hover:bg-accent-light"
          >
            Upptäck våra tjänster
          </a>
          <a
            href="#kontakt"
            className="rounded-full border-2 border-white/40 px-8 py-3.5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Kontakta oss
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
