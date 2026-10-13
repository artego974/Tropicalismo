import { ArrowDown, ArrowRight } from "lucide-react";
import { images } from "../content/images.js";
import { slogans } from "../content/site.js";
import { Asterisk, BananaLeaf } from "../components/decor.jsx";
import { ButtonLink, Container } from "../components/ui.jsx";

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="relative overflow-hidden bg-papel">
      <div aria-hidden="true" className="halftone pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <Container className="relative grid items-center gap-14 pt-10 pb-16 sm:pt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:pt-16 lg:pb-24">
        <div>
          <p className="inline-flex -rotate-2 items-center gap-2 border-2 border-tinta bg-sol px-3 py-1.5 text-xs font-bold tracking-[0.16em] uppercase shadow-pop-sm">
            <Asterisk className="size-3.5" />
            Brasil · 1967–1968
          </p>

          <h1 id="inicio-titulo" className="title-psico mt-7 pb-[0.1em] font-display text-[clamp(3rem,15vw,6.5rem)] leading-[1.05] lg:text-[clamp(4.5rem,8vw,7.25rem)]">
            Tropicália
          </h1>
          <p className="mt-3 text-[clamp(1.4rem,5vw,2.25rem)] leading-[1.05] font-extrabold uppercase font-stretch-condensed">
            ou Tropicalismo: o movimento que <span className="text-urucum">misturou</span> o Brasil
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-tinta/85">
            Berimbau e guitarra elétrica, Pop Art e cultura popular, Carmen Miranda e Beatles. No fim dos anos 1960, um grupo de
            músicos e artistas devorou tudo isso de uma vez — e virou de ponta-cabeça a cultura brasileira, em plena ditadura.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#movimento">
              Comece a viagem <ArrowDown aria-hidden="true" className="size-5" />
            </ButtonLink>
            <ButtonLink href="#linha-do-tempo" variant="light">
              Linha do tempo <ArrowRight aria-hidden="true" className="size-5" />
            </ButtonLink>
          </div>
        </div>

        <HeroArt />
      </Container>

      <Marquee />
    </section>
  );
}

// Capa de disco com raios de sol e o vinil saindo de dentro.
function HeroArt() {
  const photo = images.caetanoFestival;

  return (
    <figure className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      <div className="relative aspect-[5/4]">
        <div aria-hidden="true" className="vinyl absolute top-1/2 right-0 aspect-square h-[88%] -translate-y-1/2 rounded-full border-2 border-tinta" />

        <div className="absolute inset-y-0 left-0 aspect-square -rotate-2 overflow-hidden border-2 border-tinta bg-sol shadow-pop">
          <div aria-hidden="true" className="sunburst absolute -inset-1/4 motion-safe:animate-spin-slow" />
          <div aria-hidden="true" className="absolute inset-[8%] rounded-full border-2 border-tinta bg-rosa" />
          <div aria-hidden="true" className="absolute inset-[13%] rounded-full border-2 border-tinta bg-mata" />
          <div className="duotone absolute inset-[18%] overflow-hidden rounded-full border-2 border-tinta bg-sol">
            <img
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
              style={{ objectPosition: "45% 30%" }}
            />
          </div>
          <span className="absolute top-3 left-3 border-2 border-tinta bg-papel px-2 py-0.5 text-[0.65rem] font-bold tracking-[0.14em] uppercase">
            Lado A
          </span>
          <span className="absolute right-3 bottom-2 font-display text-2xl leading-none text-papel [text-shadow:2px_2px_0_var(--color-tinta)] sm:text-3xl">
            1967
          </span>
        </div>

        <BananaLeaf className="absolute -bottom-5 -left-2 w-[18%] -rotate-[28deg] text-folha" />
        <BananaLeaf className="absolute -top-7 right-[15%] w-[12%] rotate-[24deg] text-mata" />
      </div>

      <figcaption className="mt-9 text-sm leading-snug text-tinta/75">
        Caetano Veloso no III Festival da Música Popular Brasileira, da TV Record, em outubro de 1967. Foto: Arquivo Nacional.
      </figcaption>
    </figure>
  );
}

function Marquee() {
  return (
    <div className="relative border-y-2 border-tinta bg-rosa py-3.5">
      <p className="sr-only">Lemas e títulos tropicalistas: {slogans.join(", ")}.</p>
      <div aria-hidden="true" className="overflow-hidden">
        <div className="flex w-max motion-safe:animate-marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {slogans.map((slogan) => (
                <li key={slogan} className="flex items-center gap-6 pr-6 font-display text-xl leading-none whitespace-nowrap sm:text-2xl md:text-3xl">
                  {slogan}
                  <Asterisk className="size-5 shrink-0 text-sol [&_rect]:stroke-tinta [&_rect]:stroke-1" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
