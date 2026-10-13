import { collaborators, people } from "../content/site.js";
import { Accent, Kicker, Photo, Section, SectionHeader, cx } from "../components/ui.jsx";

export default function People() {
  return (
    <Section id="quem-fez" className="bg-tinta text-papel" wave>
      <SectionHeader
        id="quem-fez"
        number="03"
        kicker="Quem fez"
        light
        title={
          <>
            A turma <Accent className="text-rosa">tropicalista.</Accent>
          </>
        }
      >
        <p>
          No centro, o “grupo baiano” — Caetano, Gil, Gal e Tom Zé —, que se juntou aos paulistas d’Os Mutantes e ao maestro Rogério
          Duprat. Em volta, poetas, artistas e cineastas que pensavam o Brasil do mesmo jeito: misturando.
        </p>
      </SectionHeader>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <li key={person.name}>
            {/* No celular, foto ao lado do texto; a partir de 640px, foto em cima. */}
            <article className="grid h-full grid-cols-[6.5rem_minmax(0,1fr)] border-2 border-papel/20 bg-papel text-tinta sm:flex sm:flex-col">
              {person.image ? (
                <Photo
                  image={person.image}
                  tone={person.tone}
                  ratio="h-full min-h-32 sm:h-auto sm:min-h-0 sm:aspect-[4/3]"
                  position={person.position}
                  label={person.year}
                  caption={false}
                  className="h-full sm:h-auto"
                  frameClassName="border-0 border-r-2 sm:border-r-0 sm:border-b-2"
                />
              ) : (
                <TypePortrait name={person.name} tone={person.tone} />
              )}
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="font-display text-xl leading-tight sm:text-2xl">{person.name}</h3>
                <Kicker className="mt-1.5 text-tinta/65">
                  {person.role} · {person.origin}
                </Kicker>
                <p className="mt-3 leading-relaxed">{person.text}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-16 border-t-2 border-papel/20 pt-10">
        <h3 className="text-sm font-bold tracking-[0.18em] text-sol uppercase">Nos bastidores e nas outras artes</h3>
        <ul className="mt-6 grid gap-x-5 gap-y-7 min-[360px]:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
          {collaborators.map((person) => (
            <li key={person.name}>
              <p className="text-lg font-bold">{person.name}</p>
              <Kicker className="mt-0.5 text-papel/60">{person.role}</Kicker>
              <p className="mt-2 text-sm leading-relaxed text-papel/80">{person.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

// Retrato tipográfico para quem não tem foto de época em domínio público.
function TypePortrait({ name, tone }) {
  return (
    <div
      aria-hidden="true"
      className={cx(
        "relative grid min-h-32 place-items-center overflow-hidden border-r-2 border-tinta p-2 text-center sm:aspect-[4/3] sm:border-r-0 sm:border-b-2",
        tone,
      )}
    >
      <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_50%_50%,transparent_0_18px,rgb(255_255_255/0.12)_18px_36px)]" />
      <span className="title-psico relative font-display text-3xl leading-none sm:text-7xl">{name}</span>
    </div>
  );
}
