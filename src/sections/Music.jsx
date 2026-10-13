import { ArrowUpRight, Play, Plus } from "lucide-react";
import { images } from "../content/images.js";
import { domingoNoParqueLyrics } from "../content/lyrics.js";
import { project } from "../content/project.js";
import { manifestoTracks, songFacts, songs } from "../content/site.js";
import { Accent, Kicker, Photo, Section, SectionHeader } from "../components/ui.jsx";
import { toEmbedUrl } from "../lib/video.js";

const youtubeSearch = (song) => `https://www.youtube.com/results?search_query=${encodeURIComponent(`${song.title} ${song.artist}`)}`;

export default function Music() {
  return (
    <Section id="musica" className="bg-urucum" wave>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
        <div>
          <SectionHeader
            id="musica"
            number="04"
            kicker="Som & narrativa · Gilberto Gil, 1967"
            title={
              <>
                Domingo <Accent className="text-papel [text-shadow:3px_3px_0_var(--color-tinta)]">no Parque</Accent>
              </>
            }
          >
            <p>
              Apresentada por Gilberto Gil com Os Mutantes no III Festival da Música Popular Brasileira da TV Record, em outubro de
              1967, a canção ficou em 2º lugar — e virou um dos marcos de nascimento do Tropicalismo.
            </p>
            <p>
              A letra conta, em cortes rápidos como os de um filme, a história de José, o feirante, e João, o operário da construção,
              amigos que se reencontram num domingo no parque — e de Juliana, num triângulo que termina em tragédia. O arranjo de
              Rogério Duprat junta o berimbau da capoeira, uma orquestra e as guitarras elétricas d’Os Mutantes.
            </p>
          </SectionHeader>
        </div>

        <Photo image={images.gilPalco} tone="bg-sol" ratio="aspect-[4/3]" position="35% 45%" className="lg:-rotate-1" frameClassName="shadow-pop" />
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
        <ClipCard />

        <div className="flex flex-col">
          <h3 className="text-xs font-bold tracking-[0.16em] uppercase">Ficha técnica</h3>
          <dl className="mt-3 grid gap-0.5 border-2 border-tinta bg-tinta min-[360px]:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {songFacts.map(([term, value]) => (
              <div key={term} className="bg-papel px-4 py-3">
                <dt className="text-[0.68rem] font-bold tracking-[0.16em] text-tinta/65 uppercase">{term}</dt>
                <dd className="mt-0.5 font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
          <a
            href={youtubeSearch({ title: "Domingo no Parque", artist: "Gilberto Gil" })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-fit items-center gap-2.5 border-2 border-tinta bg-sol px-5 py-3 font-bold shadow-pop-sm transition-[translate,box-shadow] hover:-translate-y-0.5 hover:shadow-pop"
          >
            Ouvir a gravação original <ArrowUpRight aria-hidden="true" className="size-5" />
            <span className="sr-only">(abre uma busca no YouTube em nova aba)</span>
          </a>
        </div>
      </div>

      <div className="mt-8">
        <Lyrics />
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
        <article className="border-2 border-tinta bg-tinta p-6 text-papel sm:p-8">
          <Kicker className="text-sol">O disco-manifesto · julho de 1968</Kicker>
          <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">Tropicália ou Panis et Circencis</h3>
          <p className="mt-4 leading-relaxed text-papel/85">
            Álbum coletivo que funcionou como manifesto do movimento: Caetano, Gil, Gal Costa, Os Mutantes, Tom Zé e Nara Leão, com
            arranjos de Rogério Duprat e letras de Torquato Neto e Capinan. Na capa, um retrato de família debochado: Gil segura a foto
            de formatura de Capinan, e o maestro Duprat, um penico.
          </p>
          <ol className="mt-6 grid gap-x-6 gap-y-1.5 border-t border-papel/20 pt-5 text-sm sm:grid-cols-2">
            {manifestoTracks.map((track, index) => (
              <li key={track} className="flex gap-3">
                <span className="w-5 shrink-0 text-right tabular-nums text-sol">{index + 1}</span>
                {track}
              </li>
            ))}
          </ol>
        </article>

        <div>
          <h3 className="font-display text-3xl leading-tight sm:text-4xl">Para ouvir</h3>
          <p className="mt-2 leading-relaxed">Dez canções para entender o Tropicalismo. Os links abrem uma busca no YouTube.</p>
          <ol className="mt-6 divide-y-2 divide-tinta border-y-2 border-tinta">
            {songs.map((song, index) => (
              <li key={song.title}>
                <a
                  href={youtubeSearch(song)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-3 transition-colors hover:bg-papel/25"
                >
                  <span className="w-7 shrink-0 text-sm font-bold tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold">{song.title}</span>
                    <span className="block text-sm">
                      {song.artist} · {song.year}
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
                  <span className="sr-only">(abre uma busca no YouTube em nova aba)</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

function ClipCard() {
  const embedUrl = project.videoUrl ? toEmbedUrl(project.videoUrl) : null;

  return (
    <article className="border-2 border-tinta bg-papel p-5 shadow-pop sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Kicker className="text-tinta/70">Produção da turma</Kicker>
          <h3 className="mt-2 font-display text-3xl leading-tight">Nosso clipe</h3>
        </div>
        <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-tinta bg-sol">
          <Play className="size-5 fill-current" />
        </span>
      </div>

      <div className="mt-5 aspect-video overflow-hidden border-2 border-tinta bg-tinta">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title="Clipe de “Domingo no Parque” produzido pela turma"
            className="h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="relative grid h-full place-items-center overflow-hidden p-6 text-center text-papel">
            <div aria-hidden="true" className="sunburst absolute -inset-1/2 opacity-25" />
            <div className="relative">
              <p className="font-display text-2xl sm:text-3xl">Em produção</p>
              <p className="mt-2 text-sm text-papel/85">
                {project.videoUrl ? "Use o botão abaixo para assistir." : "O clipe estreia aqui assim que ficar pronto."}
              </p>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-tinta/75">Releitura de “Domingo no Parque” criada pela equipe do projeto.</p>
      {project.videoUrl && !embedUrl && (
        <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 font-bold underline underline-offset-2">
          Assistir ao clipe <ArrowUpRight aria-hidden="true" className="size-4" />
          <span className="sr-only">(abre em nova aba)</span>
        </a>
      )}
    </article>
  );
}

function Lyrics() {
  return (
    <details className="group border-2 border-tinta bg-papel">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-7 [&::-webkit-details-marker]:hidden">
        <span>
          <Kicker className="text-tinta/70">Letra completa</Kicker>
          <span className="mt-2 block font-display text-2xl leading-tight sm:text-3xl">“Domingo no Parque”</span>
        </span>
        <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center border-2 border-tinta bg-sol transition-transform group-open:rotate-45">
          <Plus />
        </span>
      </summary>
      <div className="border-t-2 border-tinta px-5 pt-5 pb-6 sm:px-7">
        <p className="leading-relaxed whitespace-pre-line sm:columns-2 sm:gap-10 lg:columns-3">{domingoNoParqueLyrics}</p>
        <p className="mt-6 text-xs leading-relaxed text-tinta/70">
          Gilberto Gil, 1967. Letra incluída para fins educativos; os direitos pertencem aos respectivos titulares.
        </p>
      </div>
    </details>
  );
}
