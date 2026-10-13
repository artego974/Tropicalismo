import { images } from "../content/images.js";
import { museumFacts } from "../content/site.js";
import { Accent, Photo, Section, SectionHeader } from "../components/ui.jsx";

export default function Museum() {
  return (
    <Section id="museu" className="bg-anil text-papel" wave>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <SectionHeader
          id="museu"
          number="07"
          kicker="Arquitetura & memória"
          light
          title={
            <>
              Museu Nacional <Accent className="text-sol">da República.</Accent>
            </>
          }
        >
          <p>
            Na Esplanada dos Ministérios, em Brasília, a cúpula branca de Oscar Niemeyer parece pousada no chão. O museu foi inaugurado em
            15 de dezembro de 2006 — dia em que o arquiteto completou 99 anos — e forma, com a Biblioteca Nacional, o Conjunto Cultural
            da República.
          </p>
        </SectionHeader>

        <div className="space-y-6 text-lg leading-relaxed text-papel/90 lg:pt-16">
          <p>
            Brasília, inaugurada em 1960, era o grande símbolo do Brasil moderno que os tropicalistas punham em cena. Em “Tropicália”
            (1968), Caetano canta:
          </p>
          <blockquote className="border-l-4 border-sol pl-5 font-display text-2xl leading-snug text-papel sm:text-3xl">
            <p>“Eu inauguro o monumento no planalto central do país”</p>
          </blockquote>
          <p>
            O museu também homenageia Honestino Guimarães, líder estudantil da Universidade de Brasília desaparecido em 1973, durante a
            ditadura.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Photo
          image={images.museuCupula}
          duotone={false}
          tone="bg-papel"
          ratio="aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]"
          className="md:col-span-2 lg:col-span-1"
        />
        <Photo image={images.museuRampa} duotone={false} tone="bg-papel" ratio="aspect-[4/3]" />
        <Photo image={images.museuNoite} duotone={false} tone="bg-papel" ratio="aspect-[4/3]" />
      </div>

      <dl className="mt-12 grid gap-0.5 border-2 border-tinta bg-tinta text-tinta sm:grid-cols-3">
        {museumFacts.map(([term, value]) => (
          <div key={term} className="bg-papel px-4 py-3">
            <dt className="text-[0.68rem] font-bold tracking-[0.16em] text-tinta/65 uppercase">{term}</dt>
            <dd className="mt-0.5 font-semibold">{value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
