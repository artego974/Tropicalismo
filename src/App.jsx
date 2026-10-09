import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X, Play, Plus, Minus, Sparkles } from "lucide-react";

const museumImages = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Museu%20Nacional%20da%20Rep%C3%BAblica.jpg",
    alt: "Vista externa do Museu Nacional da República, em Brasília",
    caption: "A cúpula branca — arquitetura de Oscar Niemeyer"
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/MUSEU%20NACIONAL%20DA%20REPUBLICA%20BRASILIA%20BRASIL%202.jpg",
    alt: "Rampa externa do Museu Nacional da República",
    caption: "Rampas e curvas em diálogo com a cidade"
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Museu%20Nacional%20da%20Rep%C3%BAblica%20-%20Bras%C3%ADlia%20-%2020250924204534.jpg",
    alt: "Museu Nacional da República em Brasília",
    caption: "Um marco cultural no Eixo Monumental"
  }
];

const lyrics = `Um, dois, um, dois, três
O rei da brincadeira (eh, José)
O rei da confusão (eh, João)
Um trabalhava na feira (eh, José)
Outro na construção (eh, João)
A semana passada, no fim da semana
João resolveu não brigar
No domingo de tarde saiu apressado
E não foi pra Ribeira jogar capoeira
Não foi pra lá, pra Ribeira, foi namorar
O José como sempre no fim da semana
Guardou a barraca e sumiu
Foi fazer no domingo um passeio no parque
Lá perto da Boca do Rio
Foi no parque que ele avistou Juliana
Foi que ele viu
Foi que ele viu Juliana na roda com João
Uma rosa e um sorvete na mão
Juliana seu sonho, uma ilusão
Juliana e o amigo João
O espinho da rosa feriu Zé (feriu Zé, feriu Zé)
E o sorvete gelou seu coração
O sorvete e a rosa (oh, José)
A rosa e o sorvete (oh, José)
Foi dançando no peito (oh, José)
Do José brincalhão (oh, José)
O sorvete e a rosa (oh, José)
A rosa e o sorvete (oh, José)
Oi, girando na mente (oh, José)
Do José brincalhão (oh, José)
Juliana girando (oi, girando)
Oi, na roda gigante (oi, girando)
Oi, na roda gigante (oi, girando)
O amigo João (João)
O sorvete é morango (é vermelho)
Oi girando e a rosa (é vermelha)
Oi, girando, girando (é vermelha)
Oi, girando, girando, olha a faca! (Olha a faca!)
Olha o sangue na mão (eh, José)
Juliana no chão (eh, José)
Outro corpo caído (eh, José)
Seu amigo João (eh, José)
Amanhã não tem feira (eh, José)
Não tem mais construção (eh, João)
Não tem mais brincadeira (eh, José)
Não tem mais confusão (eh, João)`;

const looks = [
  { title: "Geometria pop", decade: "ANOS 60", color: "bg-[#ff4f2e]", description: "Linhas gráficas, formas geométricas e silhuetas que traduzem modernidade." },
  { title: "Liberdade em movimento", decade: "ANOS 70", color: "bg-[#f4c542]", description: "Boca de sino, estampas marcantes e referências à contracultura." },
  { title: "Brasil psicodélico", decade: "TROPICALISMO", color: "bg-[#126b4f]", description: "Mistura de texturas, cores e referências brasileiras sem pedir licença." }
];

function SectionLabel({ number, children, light = false }) {
  return <div className={`mono flex items-center gap-3 text-xs uppercase tracking-[.2em] ${light ? "text-[#f7edcf]/70" : "text-black/60"}`}><span className="font-bold">{number}</span><span className="h-px w-8 bg-current" />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lyricsOpen, setLyricsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const closeMenu = () => setMenuOpen(false);
  const nav = [
    ["O movimento", "#movimento"],
    ["Museu", "#museu"],
    ["A música", "#musica"],
    ["Moda", "#moda"],
    ["Pop arte", "#poparte"]
  ];

  return (
    <main className="overflow-hidden">
      <header className="relative z-30 border-b-2 border-[#171711] bg-[#f7edcf]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#inicio" className="display-font text-xl font-extrabold tracking-tight">TROPICÁLIA<span className="text-[#ff4f2e]">✳</span></a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map(([label, href]) => <a key={href} href={href} className="mono text-[11px] uppercase tracking-wider transition-colors hover:text-[#ff4f2e]">{label}</a>)}
          </nav>
          <a href="#explorar" className="hidden items-center gap-2 border-2 border-[#171711] bg-[#f4c542] px-4 py-2 text-sm font-bold transition-transform hover:-translate-y-1 md:flex">Explorar projeto <ArrowUpRight size={16} /></a>
          <button className="md:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="absolute left-0 right-0 top-full border-b-2 border-black bg-[#f7edcf] p-5 shadow-lg md:hidden">{nav.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="block border-b border-black/15 py-3 text-lg font-bold">{label}</a>)}</nav>}
      </header>

      <section id="inicio" className="paper-texture relative bg-[#f7edcf]">
        <div className="mx-auto grid min-w-0 max-w-7xl items-center gap-8 px-4 pb-14 pt-10 sm:px-5 lg:grid-cols-[1.05fr_.95fr] md:px-8 md:pb-24 md:pt-20">
          <div className="relative z-10">
            <div className="mb-6 inline-flex rotate-[-2deg] items-center gap-2 border-2 border-black bg-[#f4c542] px-3 py-2 mono text-[10px] font-bold uppercase tracking-widest"><Sparkles size={14} /> Brasil, arte e contracultura</div>
            <h1 className="display-font max-w-full break-words text-[clamp(3rem,13vw,7.6rem)] font-extrabold leading-[.86] tracking-[-.075em]">A ARTE<br />DE <span className="text-[#ff4f2e]">MISTURAR.</span></h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed md:text-xl">Uma viagem pelo Tropicalismo: música, moda e artes visuais em um Brasil que transformou mistura em linguagem.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#movimento" className="tropical-shadow-sm inline-flex items-center gap-3 border-2 border-black bg-[#126b4f] px-5 py-3 font-bold text-[#fff8e4] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none">Comece a viagem <ArrowDown size={18} /></a>
              <span className="mono text-xs uppercase tracking-widest">1967 — presente</span>
            </div>
          </div>
          <div className="relative mx-auto w-full min-w-0 max-w-xl">
            <div className="absolute -right-1 top-2 h-full w-full rotate-3 border-2 border-black bg-[#ff4f2e] md:-right-3 md:top-3" />
            <div className="relative aspect-[4/4.4] overflow-hidden border-2 border-black bg-[#126b4f]">
              <img className="h-full w-full object-cover mix-blend-screen opacity-90" src={museumImages[0].src} alt={museumImages[0].alt} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171711]/75 via-transparent to-[#f4c542]/10" />
              <div className="absolute left-4 top-4 rotate-[-7deg] border-2 border-black bg-[#f4c542] px-3 py-2 display-font text-2xl font-extrabold">BRASIL!</div>
              <div className="absolute bottom-5 left-5 right-5 text-[#fff8e4]">
                <p className="mono text-xs uppercase tracking-[.2em]">Tradição + ruptura</p>
                <p className="display-font mt-1 text-4xl font-extrabold leading-none md:text-5xl">NADA<br />SE PERDE.</p>
                <p className="mt-2 text-lg font-bold text-[#f4c542]">Tudo se transforma.</p>
              </div>
              <div className="pointer-events-none absolute right-3 bottom-24 h-16 w-16 rounded-full border-[8px] border-[#ff4f2e] sm:right-5 sm:h-20 sm:w-20 md:bottom-28 md:h-28 md:w-28 md:border-[10px]" />
            </div>
            <span className="mono absolute -bottom-8 right-2 text-[10px] uppercase tracking-widest">Brasília • cultura brasileira</span>
          </div>
        </div>
        <div className="overflow-hidden border-y-2 border-black bg-[#ff4f2e] py-3 text-[#171711]">
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap display-font text-lg font-extrabold uppercase sm:text-xl md:text-2xl">{Array.from({length: 8}, (_, i) => <span key={i}>Mistura é movimento ✳ Cor é atitude ✳ Viva a invenção ✳</span>)}</div>
        </div>
      </section>

      <section id="movimento" className="min-w-0 bg-[#126b4f] px-4 py-16 text-[#f7edcf] sm:px-5 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="01" light>O movimento</SectionLabel>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            <h2 className="display-font text-4xl font-extrabold leading-[.95] tracking-tight sm:text-5xl md:text-7xl">UM PAÍS<br />EM <span className="text-[#f4c542]">COLAGEM.</span></h2>
            <div className="space-y-5 text-base leading-relaxed md:text-lg">
              <p>O Tropicalismo ganhou força no final dos anos 1960 e propôs renovar a cultura brasileira misturando referências nacionais e estrangeiras, da música popular ao rock, da tradição à experimentação.</p>
              <p>Em vez de escolher entre o “autêntico” e o “moderno”, artistas tropicalistas combinaram linguagens, cores e sons para criar algo novo — provocador, contraditório e profundamente brasileiro.</p>
              <div className="border-l-4 border-[#f4c542] py-1 pl-5 display-font text-2xl font-bold">“A mistura também é uma forma de pensar.”</div>
            </div>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[["01", "Mistura", "Sons locais encontram guitarras elétricas e referências globais."], ["02", "Experimentação", "A arte rompe formatos e desafia expectativas."], ["03", "Contexto", "Criar também era responder à censura e à repressão da ditadura."]].map(([n,t,d]) => <article key={n} className="border-2 border-[#f7edcf]/50 p-5 transition-colors hover:bg-[#f7edcf] hover:text-[#171711]"><span className="mono text-xs">{n} / IDEIA-CHAVE</span><h3 className="display-font mt-7 text-3xl font-extrabold">{t}</h3><p className="mt-3 leading-relaxed opacity-80">{d}</p></article>)}
          </div>
        </div>
      </section>

      <section id="museu" className="paper-texture min-w-0 bg-[#f7edcf] px-4 py-16 sm:px-5 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="02">Arquitetura & memória</SectionLabel>
          <div className="mt-8 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><h2 className="display-font text-4xl font-extrabold leading-[.92] tracking-tight sm:text-5xl md:text-7xl">MUSEU<br />NACIONAL<br /><span className="text-[#ff4f2e]">DA REPÚBLICA.</span></h2><p className="mono mt-5 text-xs uppercase tracking-widest">Brasília, Distrito Federal</p></div>
            <p className="max-w-2xl text-lg leading-relaxed">No Eixo Monumental, a cúpula branca de Oscar Niemeyer transforma concreto em escultura. Inaugurado em 15 de dezembro de 2006, o museu integra o Complexo Cultural da República e recebe exposições, encontros e atividades educativas.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {museumImages.map((img, i) => <figure key={img.src} className={`group relative overflow-hidden border-2 border-black bg-[#e4d8b6] ${i === 1 ? "md:translate-y-7" : ""}`}><img src={img.src} alt={img.alt} loading="lazy" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-72" /><figcaption className="flex min-h-16 items-center justify-between gap-3 bg-[#fff8e4] p-4 text-sm font-bold"><span>{img.caption}</span><span className="mono text-xs">0{i+1}</span></figcaption></figure>)}
          </div>
          <p className="mt-12 max-w-3xl text-sm leading-relaxed text-black/65">A arquitetura modernista do museu — com formas geométricas, rampas curvas e espaços amplos — dialoga com a ideia de experimentação que atravessa a arte brasileira. Imagens via Wikimedia Commons; consulte a página de cada arquivo para autoria e licença.</p>
        </div>
      </section>

      <section id="musica" className="min-w-0 bg-[#ff4f2e] px-4 py-16 sm:px-5 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="03">Som & narrativa</SectionLabel>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_.8fr]">
            <div><p className="mono text-xs uppercase tracking-[.2em]">Gilberto Gil • 1967</p><h2 className="display-font mt-3 text-5xl font-extrabold leading-[.88] tracking-tight sm:text-6xl md:text-8xl">DOMINGO<br /><span className="outline-text">NO PARQUE.</span></h2><p className="mt-7 max-w-xl text-lg leading-relaxed">Apresentada no III Festival de Música Popular Brasileira da TV Record, a canção tornou-se uma das obras marcantes do Tropicalismo. A narrativa cotidiana encontra arranjos inovadores, guitarras elétricas e referências como a capoeira.</p><div className="mt-7 flex flex-wrap gap-3"><span className="border-2 border-black bg-[#f4c542] px-3 py-2 mono text-xs">MPB + ROCK</span><span className="border-2 border-black bg-[#f7edcf] px-3 py-2 mono text-xs">FESTIVAL • 1967</span><span className="border-2 border-black bg-[#126b4f] px-3 py-2 mono text-xs text-white">TRADIÇÃO + RUPTURA</span></div></div>
            <div className="flex flex-col justify-center">
              <div className="tropical-shadow border-2 border-black bg-[#f7edcf] p-5 md:p-7">
                <div className="flex items-start justify-between"><div><p className="mono text-xs uppercase tracking-widest">Espaço audiovisual</p><h3 className="display-font mt-2 text-3xl font-extrabold">O clipe vem aí.</h3></div><div className="grid h-12 w-12 place-items-center rounded-full border-2 border-black bg-[#f4c542]"><Play fill="currentColor" size={20} /></div></div>
                <div className="mt-5 grid aspect-video place-items-center border-2 border-dashed border-black/50 bg-[#e9ddbd] p-4 text-center"><div><Play className="mx-auto mb-3" size={34} /><p className="font-bold">Clipe em produção</p><p className="mt-1 text-sm text-black/60">O vídeo será inserido aqui quando estiver finalizado.</p></div></div>
                <label className="mt-5 block text-sm font-bold" htmlFor="video-url">URL do vídeo (opcional)</label><input id="video-url" value={videoUrl} onChange={e => setVideoUrl(e.target.value)} placeholder="Cole aqui o link do YouTube ou Vimeo" className="mt-2 block min-w-0 w-full max-w-full border-2 border-black bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#126b4f]" />
                {videoUrl && <a href={videoUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 font-bold underline">Abrir vídeo <ArrowUpRight size={16}/></a>}
              </div>
            </div>
          </div>
          <div className="mt-12 border-t-2 border-black pt-6">
            <button onClick={() => setLyricsOpen(!lyricsOpen)} className="flex w-full items-center justify-between gap-4 text-left"><span className="display-font text-2xl font-extrabold md:text-3xl">Letra de “Domingo no Parque”</span><span className="grid h-10 w-10 shrink-0 place-items-center border-2 border-black bg-[#f4c542]">{lyricsOpen ? <Minus /> : <Plus />}</span></button>
            {lyricsOpen && <pre className="mt-6 max-h-[32rem] max-w-full overflow-x-auto whitespace-pre-wrap break-words border-2 border-black bg-[#fff8e4] p-3 font-sans text-sm leading-relaxed sm:p-5">{lyrics}</pre>}
            <p className="mt-4 text-xs leading-relaxed text-black/70">A letra foi incluída conforme o material fornecido para o projeto escolar. Música de Gilberto Gil; direitos autorais pertencem aos respectivos titulares.</p>
          </div>
        </div>
      </section>

      <section id="moda" className="min-w-0 bg-[#f4c542] px-4 py-16 sm:px-5 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="04">Moda & expressão</SectionLabel>
          <div className="mt-8 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div><h2 className="display-font text-4xl font-extrabold leading-[.9] tracking-tight sm:text-5xl md:text-7xl">VESTIR<br />TAMBÉM É<br /><span className="text-[#ff4f2e]">DIZER.</span></h2><p className="mt-6 max-w-md text-lg leading-relaxed">Dos cortes geométricos dos anos 60 às estampas e calças boca de sino dos anos 70, a moda refletiu juventude, liberdade e transformação dos costumes.</p><p className="mt-4 max-w-md leading-relaxed">Durante a ditadura militar (1964–1985), roupas coloridas, cabelos compridos e referências hippies podiam expressar individualidade e contestação — embora nem toda escolha de estilo fosse necessariamente um ato de protesto.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {looks.map((look, i) => <article key={look.title} className={`border-2 border-black p-5 ${look.color} ${i === 2 ? "sm:col-span-2" : ""} ${i === 1 ? "sm:translate-y-8" : ""}`}>
                <p className="mono text-xs uppercase tracking-widest">{look.decade}</p>
                <div className="my-5 flex h-28 items-center justify-center" aria-hidden="true">
                  {i === 0 ? <div className="relative h-24 w-24 rotate-12 border-4 border-black bg-[#f7edcf]"><div className="absolute inset-4 rotate-45 bg-[#ff4f2e]" /></div> : i === 1 ? <div className="flex items-center gap-2"><div className="h-20 w-8 -rotate-6 border-2 border-black bg-[#126b4f]" /><div className="h-24 w-10 border-2 border-black bg-[#ff4f2e]" /><div className="h-20 w-8 rotate-6 border-2 border-black bg-[#f7edcf]" /></div> : <div className="flex gap-2">{["#ff4f2e","#f4c542","#f7edcf","#171711"].map(c => <span key={c} className="h-14 w-8 rotate-12 border-2 border-black" style={{backgroundColor:c}} />)}</div>}
                </div>
                <h3 className="display-font text-2xl font-extrabold">{look.title}</h3><p className="mt-2 leading-relaxed">{look.description}</p>
              </article>)}
            </div>
          </div>
          <div className="mt-16 border-2 border-black bg-[#f7edcf] p-5 md:mt-20 md:p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center"><div><p className="mono text-xs uppercase tracking-widest">Galeria em construção</p><h3 className="display-font mt-2 text-3xl font-extrabold">Looks do desfile</h3><p className="mt-2 max-w-xl">Área reservada para fotografias dos figurinos produzidos pela equipe.</p></div><span className="mono text-xs">IMAGENS A INSERIR ↓</span></div>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">{[1,2,3,4].map(n => <div key={n} className="grid aspect-[3/4] place-items-center border-2 border-dashed border-black/40 bg-[#e9ddbd] p-3 text-center"><div><Plus className="mx-auto mb-2" /><span className="mono text-xs">LOOK 0{n}</span><p className="mt-1 text-xs text-black/60">Adicionar foto</p></div></div>)}</div>
          </div>
        </div>
      </section>

      <section id="poparte" className="paper-texture min-w-0 bg-[#f7edcf] px-4 py-16 sm:px-5 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="05">Pop arte & processo criativo</SectionLabel>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative mx-auto w-full max-w-lg rotate-[-2deg] border-2 border-black bg-[#ff4f2e] p-4 tropical-shadow md:p-6">
              <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden border-2 border-black bg-[#f4c542] p-5 text-center">
                <div className="absolute -left-8 top-8 h-36 w-36 rounded-full border-[16px] border-[#126b4f]" /><div className="absolute -right-8 bottom-5 h-40 w-40 rounded-full border-[18px] border-[#ff4f2e]" />
                <span className="mono relative z-10 bg-[#171711] px-3 py-1 text-xs text-[#f7edcf]">BRASIL • 1967</span>
                <h3 className="display-font relative z-10 mt-4 text-6xl font-extrabold leading-[.8] tracking-[-.08em] md:text-8xl">VIVA<br /><span className="text-[#ff4f2e]">A</span><br />MISTURA!</h3>
                <p className="relative z-10 mt-5 rotate-[-4deg] border-2 border-black bg-[#f7edcf] px-3 py-2 display-font text-xl font-extrabold">TROPICÁLIA</p>
                <div className="absolute left-4 top-1/2 h-3 w-3 bg-black" /><div className="absolute right-6 top-1/4 h-4 w-4 rotate-45 bg-[#126b4f]" />
              </div>
              <p className="mono mt-3 text-center text-xs uppercase tracking-widest">Estudo visual • cartaz pop</p>
            </div>
            <div><h2 className="display-font text-4xl font-extrabold leading-[.9] sm:text-5xl md:text-6xl">COR, REPETIÇÃO<br />E <span className="text-[#ff4f2e]">IMPACTO.</span></h2><p className="mt-6 text-lg leading-relaxed">A Pop Art aproximou a arte da comunicação de massa: cartazes, publicidade, cores intensas, contornos marcados e repetição de imagens. No projeto, esses recursos visuais dialogam com a irreverência tropicalista e com a estética gráfica dos anos 60 e 70.</p><div className="mt-6 space-y-4">{[["Paleta", "Amarelo, verde, vermelho e tons de papel envelhecido."], ["Composição", "Formas geométricas, contraste e tipografia de impacto."], ["Referências", "Cultura popular, cartazes, música e identidade brasileira."]].map(([t,d]) => <div key={t} className="border-t border-black/25 pt-4"><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-relaxed">{d}</p></div>)}</div></div>
          </div>
          <div className="mt-14 border-2 border-black bg-[#126b4f] p-6 text-[#f7edcf] md:p-8">
            <p className="mono text-xs uppercase tracking-widest">Espaço reservado para a equipe</p><h3 className="display-font mt-3 text-3xl font-extrabold">Como produzimos o cartaz</h3><p className="mt-3 max-w-3xl leading-relaxed text-[#f7edcf]/85">Substitua este texto pela explicação do processo: pesquisa de referências, escolha da paleta, criação dos elementos gráficos, técnicas utilizadas, materiais e divisão das tarefas.</p>
          </div>
        </div>
      </section>

      <section id="explorar" className="border-y-2 border-black bg-[#171711] px-5 py-16 text-[#f7edcf] md:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><p className="mono text-xs uppercase tracking-[.2em] text-[#f4c542]">O passado ainda pulsa</p><h2 className="display-font mt-4 text-4xl font-extrabold leading-[.9] sm:text-5xl md:text-7xl">A CULTURA<br />NÃO FICA <span className="text-[#ff4f2e]">PARADA.</span></h2></div>
          <a href="#inicio" className="inline-flex w-fit items-center gap-3 border-2 border-[#f7edcf] px-5 py-3 font-bold transition-colors hover:bg-[#f7edcf] hover:text-[#171711]">Voltar ao início <ArrowUpRight size={18}/></a>
        </div>
      </section>
      <footer className="bg-[#171711] px-5 pb-8 text-[#f7edcf] md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-white/20 pt-5 text-xs md:flex-row"><span className="mono uppercase tracking-widest">Tropicália ✳ projeto cultural</span><span>Conteúdo educativo sobre Tropicalismo, arquitetura, música, moda e Pop Art.</span><span className="mono">BR • 1967—∞</span></div>
      </footer>
    </main>
  );
}

export default App;