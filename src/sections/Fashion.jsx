import { Shirt } from "lucide-react";
import { images } from "../content/images.js";
import { project } from "../content/project.js";
import { fashionEras } from "../content/site.js";
import { FlaredPants } from "../components/decor.jsx";
import { Accent, Kicker, Photo, Section, SectionHeader, cx } from "../components/ui.jsx";

export default function Fashion() {
  // Sem nenhuma foto ainda, os espaços ficam baixos para não parecer área vazia.
  const lookRatio = project.looks.some((look) => look.image) ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <Section id="moda" className="bg-sol" wave>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
        <div>
          <SectionHeader
            id="moda"
            number="06"
            kicker="Moda & comportamento"
            title={
              <>
                Vestir também é <Accent className="text-mata">dizer.</Accent>
              </>
            }
          >
            <p>
              Dos cortes geométricos dos anos 60 às calças boca de sino dos anos 70, a roupa virou manifesto de juventude, liberdade e
              mudança de costumes. No palco tropicalista, o figurino era parte da mensagem.
            </p>
            <p>
              Sob a ditadura (1964–1985), cabelo comprido, roupa colorida e visual andrógino podiam soar como afronta à moral
              conservadora. Nem toda escolha de estilo era protesto — mas, num país sob censura, aparência também era posição.
            </p>
          </SectionHeader>
        </div>

        <Photo
          image={images.gal1969}
          tone="bg-rosa"
          ratio="aspect-[3/4]"
          position="50% 12%"
          caption="Gal Costa no palco, em maio de 1969: boá de plumas, colete de pied-de-poule e medalhões"
          className="mx-auto w-full max-w-sm lg:rotate-1"
          frameClassName="shadow-pop"
        />
      </div>

      <ul className="mt-14 grid gap-5 md:grid-cols-3">
        {fashionEras.map((era) => (
          <li key={era.title} className={cx("flex flex-col border-2 border-tinta p-6", era.tone)}>
            <Kicker>{era.era}</Kicker>
            <div aria-hidden="true" className="my-4 grid h-28 place-items-center sm:my-6">
              <EraMotif motif={era.motif} />
            </div>
            <h3 className="font-display text-2xl leading-tight">{era.title}</h3>
            <p className="mt-2 leading-relaxed">{era.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16 border-2 border-tinta bg-papel p-5 sm:p-8">
        <Kicker className="text-tinta/70">Produção da turma</Kicker>
        <h3 className="mt-2 font-display text-3xl leading-tight">Looks do desfile</h3>
        <p className="mt-2 max-w-xl leading-relaxed text-tinta/80">Figurinos criados pela equipe a partir das referências desta seção.</p>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {project.looks.map((look) => (
            <li key={look.label}>
              <figure>
                {look.image ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${look.image}`}
                    alt={look.alt || `${look.label} do desfile`}
                    loading="lazy"
                    className={cx(lookRatio, "w-full border-2 border-tinta object-cover")}
                  />
                ) : (
                  <div className={cx(lookRatio, "grid place-items-center border-2 border-dashed border-tinta/45 bg-papel-escuro p-3 text-center")}>
                    <p className="flex flex-col items-center gap-1.5 text-sm font-semibold text-tinta/70">
                      <Shirt aria-hidden="true" className="size-6" />
                      Foto em breve
                    </p>
                  </div>
                )}
                <figcaption className="mt-2 text-sm font-bold">
                  {look.label}
                  {look.title && <span className="font-normal"> — {look.title}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function EraMotif({ motif }) {
  if (motif === "geo") {
    return (
      <div className="relative size-24 rotate-12 border-[3px] border-tinta bg-papel">
        <div className="absolute inset-3 rotate-45 border-[3px] border-tinta bg-sol" />
        <div className="absolute inset-[34%] bg-tinta" />
      </div>
    );
  }
  if (motif === "psico") {
    return (
      <div className="size-28 rounded-full border-[3px] border-tinta bg-[repeating-radial-gradient(circle,var(--color-sol)_0_7px,var(--color-rosa)_7px_14px,var(--color-urucum)_14px_21px,var(--color-papel)_21px_28px)]" />
    );
  }
  return <FlaredPants className="h-28" />;
}
