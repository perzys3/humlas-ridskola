import Image from "next/image";

const services = [
  {
    title: "Utbildning på islandshästar",
    description:
      "Lär dig rida och förstå islandshästens unika gångarter och temperament. Vi erbjuder strukturerad utbildning för både nybörjare och erfarna ryttare.",
    image: "/tjanst-utbildning.jpg",
    alt: "Utbildning på islandshäst vid ridbanan med utsikt över bergen",
  },
  {
    title: "Ridlektioner",
    description:
      "Individuella och grupplektioner anpassade efter din nivå. Våra erfarna instruktörer guidar dig i en trygg och inspirerande miljö.",
    image: "/tjanst-lektioner.jpg",
    alt: "Barn på ridlektion med islandshästar vid ridbanan",
  },
  {
    title: "Äventyrsturer i bergen",
    description:
      "Upplev Järvsös fantastiska bergslandskap till häst. Guidade turer genom otrolig natur — ett äventyr du aldrig glömmer.",
    image: "/tjanst-aventyr.jpg",
    alt: "Ryttare på skogstur till häst i bergen",
    highlights: [
      "1 timme mindfulness — 550 kr",
      "2 timmar ridäventyr — 750 kr",
      "3 timmar ridäventyr med fika — 1 300 kr",
    ],
  },
  {
    title: "Weekendpaket med boende",
    description:
      "Samla kompisgänget (max 4 personer) för en oförglömlig helg i Järvsö. Paketet inkluderar fullpension, två nätter i stuga fredag–söndag, två riddagar à 3 timmar vardera samt en middag på en av Järvsös finare restauranger.",
    image: "/hero.jpg",
    alt: "Ryttare vid Järvsö-hjärtat — perfekt för en helg med vänner",
    price: "4 900 kr/person",
    highlights: [
      "Max 4 personer",
      "Fullpension",
      "Två nätter i stuga (fre–sön)",
      "Två riddagar à 3 timmar",
      "Middag på fin restaurang i Järvsö",
    ],
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="mountain-pattern bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Vårt erbjudande
          </p>
          <h2 className="font-serif text-4xl font-bold text-forest md:text-5xl">
            Ridupplevelser i världsklass
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-mountain">
            Oavsett om du vill lära dig grunderna, utveckla din ridning,
            ge dig ut på ett bergäventyr eller unna dig en helg med vänner —
            hos Humlas Ridskola hittar du rätt upplevelse.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-forest/5 transition-transform hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-forest">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-mountain">
                  {service.description}
                </p>
                {"highlights" in service && service.highlights && (
                  <ul className="mt-4 space-y-2">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-mountain"
                      >
                        <span className="text-accent">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {"price" in service && service.price && (
                  <p className="mt-5 font-serif text-2xl font-semibold text-forest">
                    {service.price}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
