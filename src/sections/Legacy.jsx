import { ArrowUp } from "lucide-react";
import { legacy } from "../content/site.js";
import { Accent, ButtonLink, Kicker, Section, SectionHeader } from "../components/ui.jsx";

export default function Legacy() {
  return (
    <Section id="legado" className="bg-rosa" wave>
      <SectionHeader
        id="legado"
        number="08"
        kicker="Legado"
        title={
          <>
            A cultura não fica <Accent>parada.</Accent>
          </>
        }
      >
        <p>
          O movimento durou pouco — o AI-5 e o exílio interromperam tudo em menos de dois anos. Mas a ideia de que tudo pode ser
          misturado mudou para sempre o jeito de fazer e de ouvir música no Brasil.
        </p>
      </SectionHeader>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {legacy.map((item) => (
          <li key={item.title} className="flex flex-col border-2 border-tinta bg-papel p-6 shadow-pop-sm">
            <Kicker className="w-fit border border-tinta bg-urucum px-2 py-0.5">{item.label}</Kicker>
            <h3 className="mt-3 font-display text-2xl leading-tight">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-tinta/85">{item.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t-2 border-tinta pt-8 sm:flex-row sm:items-center">
        <p className="max-w-xl text-[clamp(1.5rem,4vw,2.25rem)] leading-tight font-extrabold uppercase font-stretch-condensed">
          Nada se perde: tudo se mistura.
        </p>
        <ButtonLink href="#inicio" variant="light">
          Voltar ao início <ArrowUp aria-hidden="true" className="size-5" />
        </ButtonLink>
      </div>
    </Section>
  );
}
