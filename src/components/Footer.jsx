import { images } from "../content/images.js";
import { project } from "../content/project.js";
import { references } from "../content/site.js";
import { SunMark } from "./decor.jsx";
import { Container, Kicker } from "./ui.jsx";

const archivePhotos = Object.values(images).filter((image) => image.credit.license === "Domínio público");
const otherPhotos = Object.values(images).filter((image) => image.credit.license !== "Domínio público");

function CreditLinks({ list, withAuthor = false }) {
  return list.map((image, index) => (
    <span key={image.src}>
      {index > 0 && "; "}
      <a href={image.credit.url} target="_blank" rel="noopener noreferrer" className="underline decoration-papel/40 underline-offset-2 hover:decoration-papel">
        {image.label}
      </a>
      {withAuthor && (
        <>
          {" "}
          ({image.credit.author},{" "}
          <a href={image.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-papel/40 underline-offset-2 hover:decoration-papel">
            {image.credit.license}
          </a>
          )
        </>
      )}
    </span>
  ));
}

export default function Footer() {
  const hasTeam = project.team.length > 0 || project.school;

  return (
    <footer className="bg-tinta text-papel">
      <div className="stripe-tropical h-2" aria-hidden="true" />
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
        <div>
          <p className="flex items-center gap-2 font-display text-3xl leading-none">
            <SunMark className="size-10" />
            Tropicália
          </p>
          <p className="mt-5 max-w-sm leading-relaxed text-papel/80">
            Projeto escolar sobre o Tropicalismo: música, artes visuais, moda e arquitetura no Brasil dos anos 1960 e 1970.
          </p>
          {hasTeam && (
            <div className="mt-6">
              <Kicker className="text-sol">Equipe</Kicker>
              {project.team.length > 0 && <p className="mt-2 leading-relaxed">{project.team.join(" · ")}</p>}
              {project.school && <p className="mt-1 text-sm text-papel/70">{project.school}</p>}
            </div>
          )}
        </div>

        <div>
          <Kicker className="text-sol">Fontes e leituras</Kicker>
          <ul className="mt-4 space-y-3 text-sm leading-snug text-papel/85">
            {references.map((ref) => (
              <li key={ref.title}>
                {ref.author}. <cite className="font-semibold text-papel">{ref.title}</cite>. {ref.detail}.
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <Kicker className="text-sol">Créditos das imagens</Kicker>
          <p className="mt-4 text-sm leading-relaxed text-papel/85">
            <span className="font-semibold text-papel">Fotos de época:</span> Arquivo Nacional, Fundo Correio da Manhã (domínio público) —{" "}
            <CreditLinks list={archivePhotos} />.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-papel/85">
            <span className="font-semibold text-papel">Museu Nacional:</span> <CreditLinks list={otherPhotos} withAuthor />.
          </p>
          <p className="mt-3 text-xs text-papel/60">Todas as imagens vêm do Wikimedia Commons; os links levam à página de cada arquivo.</p>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-3 border-t border-papel/15 py-6 text-xs leading-relaxed text-papel/65 sm:flex-row sm:items-center sm:justify-between">
          <p>Conteúdo educativo, sem fins comerciais. Letra de “Domingo no Parque” © Gilberto Gil.</p>
          <p className="font-bold uppercase tracking-[0.16em]">Brasil · 1967 — ∞</p>
        </div>
      </Container>
    </footer>
  );
}
