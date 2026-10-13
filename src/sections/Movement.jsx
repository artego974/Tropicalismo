import { keyIdeas } from "../content/site.js";
import { Accent, Kicker, Section, SectionHeader } from "../components/ui.jsx";

export default function Movement() {
  return (
    <Section id="movimento" className="bg-mata text-papel" wave>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          id="movimento"
          number="01"
          kicker="O que foi"
          light
          title={
            <>
              Um país em <Accent className="text-sol">colagem.</Accent>
            </>
          }
        />
        <div className="space-y-5 text-lg leading-relaxed text-papel/90 lg:pt-16">
          <p>
            O <strong className="text-papel">Tropicalismo</strong> — ou <strong className="text-papel">Tropicália</strong> — foi um movimento
            cultural que explodiu entre 1967 e 1968. Liderado pelos baianos Caetano Veloso e Gilberto Gil, reuniu músicos, poetas,
            artistas visuais, gente de teatro e de cinema em torno de uma ideia: misturar tudo o que o Brasil era — o arcaico e o
            moderno, o popular e o erudito, o nacional e o estrangeiro — para criar algo novo.
          </p>
          <p>
            O nome veio de uma obra do artista Hélio Oiticica, a instalação <cite>Tropicália</cite> (1967), e foi parar no título de
            uma canção de Caetano. Logo virou rótulo para toda uma atitude: irreverente, crítica e profundamente brasileira.
          </p>
        </div>
      </div>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {keyIdeas.map((idea, index) => (
          <li key={idea.title} className="flex flex-col border-2 border-papel/35 p-6 transition-colors hover:border-sol">
            <Kicker className="text-sol">Ideia-chave {String(index + 1).padStart(2, "0")}</Kicker>
            <h3 className="mt-6 font-display text-3xl leading-tight">{idea.title}</h3>
            <p className="mt-3 leading-relaxed text-papel/85">{idea.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-8 border-2 border-tinta bg-sol p-6 text-tinta shadow-pop sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12 lg:p-12">
        <div>
          <Kicker>As raízes · 1928</Kicker>
          <blockquote className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] leading-[1.1]">
            <p>“Tupi, or not tupi that is the question.”</p>
          </blockquote>
          <p className="mt-4 text-sm font-semibold">
            Oswald de Andrade, <cite>Manifesto Antropófago</cite> (1928)
          </p>
        </div>
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            Com esse trocadilho com Shakespeare, o modernista Oswald de Andrade propôs que o Brasil “devorasse” a cultura estrangeira —
            como os tupinambás devoravam o inimigo para absorver sua força — e a transformasse em algo próprio.
          </p>
          <p>
            Quarenta anos depois, os tropicalistas retomaram a ideia. Até um verso do manifesto, “a alegria é a prova dos nove”,
            reaparece em “Geléia Geral” (1968), de Gil e Torquato Neto.
          </p>
        </div>
      </div>
    </Section>
  );
}
