import { images } from "../content/images.js";
import { project } from "../content/project.js";
import { artWorks, stageAndScreen } from "../content/site.js";
import { BananaLeaf } from "../components/decor.jsx";
import { Accent, Kicker, Photo, Section, SectionHeader, cx } from "../components/ui.jsx";

export default function Arts() {
  return (
    <Section id="artes" className="halftone bg-papel">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
        <Photo
          image={images.oiticica1966}
          tone="bg-rosa"
          ratio="aspect-[4/5]"
          position="50% 22%"
          className="order-last mx-auto w-full max-w-sm lg:order-first lg:max-w-none"
          frameClassName="shadow-pop"
        />

        <div>
          <SectionHeader
            id="artes"
            number="05"
            kicker="Artes visuais, palco e tela"
            title={
              <>
                <Accent className="text-urucum">Tropicália</Accent> nasceu num museu.
              </>
            }
          >
            <p>
              Antes de virar canção, Tropicália foi uma obra de Hélio Oiticica: um ambiente para percorrer, com areia, brita, plantas
              tropicais, araras vivas e, no fim do labirinto, uma televisão ligada. O choque entre o Brasil “exótico” dos cartões-postais
              e o país moderno da TV estava ali, para ser sentido na pele.
            </p>
          </SectionHeader>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {artWorks.map((work) => (
              <li key={work.title} className="flex flex-col border-2 border-tinta bg-papel">
                <div aria-hidden="true" className={cx("h-2.5 border-b-2 border-tinta", work.tone)} />
                <div className="flex flex-1 flex-col p-5">
                  <Kicker className="text-tinta/65">{work.who}</Kicker>
                  <h3 className="mt-2 text-xl leading-snug font-bold">{work.title}</h3>
                  <p className="mt-2 leading-relaxed text-tinta/85">{work.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="mt-16 grid gap-4 md:grid-cols-2">
        {stageAndScreen.map((item) => (
          <li key={item.title} className="grid gap-4 border-2 border-tinta bg-anil p-6 text-papel sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-6 sm:p-8">
            <span className="font-display text-5xl leading-none text-sol">{item.year}</span>
            <div>
              <Kicker className="text-papel/90">
                {item.kind} · {item.who}
              </Kicker>
              <h3 className="mt-2 text-2xl leading-tight font-extrabold uppercase font-stretch-condensed">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-papel/90">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {project.poster.image ? (
          <figure className="mx-auto w-full max-w-md">
            <img
              src={`${import.meta.env.BASE_URL}${project.poster.image}`}
              alt={project.poster.alt || "Cartaz em estilo Pop Art criado pela turma"}
              loading="lazy"
              className="w-full border-2 border-tinta shadow-pop"
            />
            <figcaption className="mt-3 text-center text-xs font-bold tracking-[0.16em] uppercase">Cartaz da turma</figcaption>
          </figure>
        ) : (
          <PosterStudy />
        )}

        <div>
          <Kicker className="text-tinta/75">Pop Art & processo criativo</Kicker>
          <h3 className="mt-3 text-[clamp(2.1rem,6vw,3.6rem)] leading-none font-extrabold uppercase font-stretch-condensed">
            Cor, repetição e <Accent className="text-urucum">impacto.</Accent>
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-tinta/85">
            A Pop Art levou para a arte a linguagem dos cartazes, da publicidade e dos quadrinhos: cores chapadas, contornos fortes,
            retícula e repetição. No Brasil, ganhou tom crítico e se misturou à irreverência tropicalista — é dessa fonte que bebe o
            cartaz do projeto.
          </p>
          <ol className="mt-8 grid gap-x-5 gap-y-4 min-[360px]:grid-cols-2 sm:gap-x-4">
            {project.posterSteps.map((step, index) => (
              <li key={step.title} className="border-t-2 border-tinta pt-3">
                <p className="flex items-baseline gap-2 font-bold">
                  <span className="font-display text-2xl leading-none text-urucum">{index + 1}</span>
                  {step.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-tinta/85">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

// Estudo visual do cartaz, feito só com CSS e SVG.
function PosterStudy() {
  return (
    <figure className="mx-auto w-full max-w-md px-3 sm:px-0">
      <div className="-rotate-2 border-2 border-tinta bg-urucum p-3 shadow-pop sm:p-4">
        <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden border-2 border-tinta bg-sol p-5 text-center">
          <div aria-hidden="true" className="sunburst absolute -inset-1/4 opacity-50" />
          <div aria-hidden="true" className="absolute -top-10 -left-10 size-40 rounded-full border-[14px] border-mata" />
          <div aria-hidden="true" className="absolute -right-12 -bottom-12 size-48 rounded-full border-[16px] border-rosa" />
          <BananaLeaf className="absolute bottom-4 left-3 w-[16%] -rotate-[24deg] text-folha" />
          <span className="relative bg-tinta px-3 py-1 text-xs font-bold tracking-[0.16em] text-papel uppercase">Brasil · 1968</span>
          <p className="title-psico relative mt-4 font-display text-[clamp(2.1rem,12vw,4.5rem)] leading-none" style={{ color: "var(--color-papel)" }}>
            Viva
            <br />a
            <br />
            mistura!
          </p>
          <p className="relative mt-5 -rotate-3 border-2 border-tinta bg-papel px-3 py-1.5 text-lg font-extrabold tracking-wide uppercase font-stretch-condensed">
            Tropicália
          </p>
        </div>
      </div>
      <figcaption className="mt-5 text-center text-xs font-bold tracking-[0.16em] uppercase">Estudo visual · cartaz pop</figcaption>
    </figure>
  );
}
