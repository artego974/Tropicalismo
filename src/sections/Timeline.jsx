import { timeline } from "../content/site.js";
import { Accent, Section, SectionHeader, cx } from "../components/ui.jsx";

const tagTones = {
  Raízes: "bg-mata text-papel",
  Política: "bg-tinta text-papel",
  Artes: "bg-rosa",
  Teatro: "bg-anil text-papel",
  Música: "bg-urucum",
  Imprensa: "bg-sol",
  TV: "bg-sol",
};

export default function Timeline() {
  return (
    <Section id="linha-do-tempo" className="bg-papel">
      <SectionHeader
        id="linha-do-tempo"
        number="02"
        kicker="Linha do tempo"
        title={
          <>
            Do manifesto <Accent className="text-urucum">ao exílio.</Accent>
          </>
        }
      >
        <p>Em pouco mais de dois anos, o Tropicalismo foi dos museus e festivais de TV às prisões da ditadura. Os momentos-chave:</p>
      </SectionHeader>

      <ol className="mt-12 lg:columns-2 lg:gap-16">
        {timeline.map((item) => (
          <li key={item.title} className="relative break-inside-avoid border-l-2 border-tinta pb-9 pl-7 last:pb-0 sm:pl-9">
            <span aria-hidden="true" className={cx("absolute top-1 -left-[9px] size-4 rounded-full border-2 border-tinta", tagTones[item.tag])} />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <time dateTime={item.dateTime} className="text-2xl leading-none font-extrabold uppercase font-stretch-condensed">
                {item.date}
              </time>
              <span className={cx("border border-tinta px-2 py-0.5 text-[0.68rem] font-bold tracking-[0.14em] uppercase", tagTones[item.tag])}>
                {item.tag}
              </span>
            </div>
            <h3 className="mt-2 text-xl leading-snug font-bold">{item.title}</h3>
            <p className="mt-1.5 leading-relaxed text-tinta/80">{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
