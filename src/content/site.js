// Textos em lista da página. Edite aqui para atualizar o conteúdo.
import { images } from "./images.js";

export const navItems = [
  { id: "movimento", label: "Movimento", number: "01" },
  { id: "linha-do-tempo", label: "Linha do tempo", number: "02" },
  { id: "quem-fez", label: "Quem fez", number: "03" },
  { id: "musica", label: "Música", number: "04" },
  { id: "artes", label: "Artes", number: "05" },
  { id: "moda", label: "Moda", number: "06" },
  { id: "museu", label: "Museu", number: "07" },
  { id: "legado", label: "Legado", number: "08" },
];

export const slogans = [
  "Alegria, alegria",
  "É proibido proibir",
  "Seja marginal, seja herói",
  "Tupi or not tupi",
  "Geléia geral",
  "Divino, maravilhoso",
  "Panis et circenses",
  "Superbacana",
];

export const keyIdeas = [
  {
    title: "Antropofagia",
    text: "Devorar o que vinha de fora — rock, Pop Art, psicodelia — e digerir tudo junto com samba, baião, bolero e bossa nova.",
  },
  {
    title: "Mistura",
    text: "Berimbau e guitarra elétrica, Carmen Miranda e Beatles, a Brasília modernista e a palhoça: o arcaico e o moderno lado a lado.",
  },
  {
    title: "Deboche",
    text: "Ironia, kitsch e alegoria para expor as contradições de um país que se dizia moderno, mas convivia com atrasos profundos.",
  },
  {
    title: "Resistência",
    text: "Criado sob a ditadura militar, o movimento enfrentou a censura — e também a desconfiança de parte da esquerda, que via na guitarra elétrica um símbolo do imperialismo.",
  },
];

export const timeline = [
  {
    date: "1928",
    dateTime: "1928",
    tag: "Raízes",
    title: "Manifesto Antropófago",
    text: "Oswald de Andrade propõe “devorar” a cultura estrangeira para transformá-la em algo brasileiro. Quarenta anos depois, a ideia vira a base do Tropicalismo.",
  },
  {
    date: "1964",
    dateTime: "1964",
    tag: "Política",
    title: "Golpe militar",
    text: "Começa a ditadura que duraria até 1985, com censura, perseguição política e violência de Estado.",
  },
  {
    date: "abr. 1967",
    dateTime: "1967-04",
    tag: "Artes",
    title: "Tropicália, de Hélio Oiticica",
    text: "Na mostra Nova Objetividade Brasileira, no MAM do Rio, o artista monta um labirinto com areia, plantas, araras e uma TV ligada. A obra dá nome ao movimento.",
  },
  {
    date: "set. 1967",
    dateTime: "1967-09",
    tag: "Teatro",
    title: "O Rei da Vela",
    text: "O Teatro Oficina, de Zé Celso, encena a peça de Oswald de Andrade como uma alegoria escrachada do Brasil.",
  },
  {
    date: "out. 1967",
    dateTime: "1967-10",
    tag: "Música",
    title: "Festival da Record",
    text: "Caetano canta “Alegria, Alegria” com a banda argentina Beat Boys, e Gil apresenta “Domingo no Parque” com Os Mutantes. As guitarras elétricas entram na MPB — meses depois de uma passeata contra elas.",
  },
  {
    date: "fev. 1968",
    dateTime: "1968-02",
    tag: "Imprensa",
    title: "O nome pega",
    text: "O jornalista Nelson Motta publica “A cruzada tropicalista” no jornal Última Hora, e o rótulo se espalha.",
  },
  {
    date: "jul. 1968",
    dateTime: "1968-07",
    tag: "Música",
    title: "O disco-manifesto",
    text: "Sai Tropicália ou Panis et Circencis, com Caetano, Gil, Gal Costa, Os Mutantes, Tom Zé e Nara Leão, arranjos de Rogério Duprat e letras de Torquato Neto e Capinan.",
  },
  {
    date: "set. 1968",
    dateTime: "1968-09",
    tag: "Música",
    title: "É proibido proibir",
    text: "Vaiado no Festival Internacional da Canção, em São Paulo, Caetano responde com um discurso histórico contra a intolerância da plateia.",
  },
  {
    date: "out. 1968",
    dateTime: "1968-10",
    tag: "TV",
    title: "Divino, Maravilhoso",
    text: "Caetano e Gil comandam na TV Tupi um programa semanal anárquico, com os tropicalistas no palco.",
  },
  {
    date: "dez. 1968",
    dateTime: "1968-12",
    tag: "Política",
    title: "AI-5 e prisão",
    text: "Em 13 de dezembro, o Ato Institucional nº 5 endurece a ditadura. Duas semanas depois, Caetano e Gil são presos, sem acusação formal.",
  },
  {
    date: "1969–1972",
    dateTime: "1969",
    tag: "Política",
    title: "Exílio em Londres",
    text: "Após meses de confinamento em Salvador, os dois partem para o exílio em julho de 1969. Só voltam ao Brasil em 1972.",
  },
];

export const people = [
  {
    name: "Caetano Veloso",
    role: "Cantor e compositor",
    origin: "Santo Amaro (BA)",
    text: "Autor de “Alegria, Alegria” e “Tropicália”, foi a voz e o principal pensador do movimento, que mais tarde narrou no livro Verdade Tropical (1997).",
    image: images.caetano1972,
    year: "1972",
    position: "50% 16%",
    tone: "bg-sol",
  },
  {
    name: "Gilberto Gil",
    role: "Cantor, compositor e violonista",
    origin: "Salvador (BA)",
    text: "Levou o berimbau e a guitarra elétrica para o mesmo palco em “Domingo no Parque”. Décadas depois, foi ministro da Cultura (2003–2008).",
    image: images.gilRetrato,
    year: "anos 60",
    position: "50% 24%",
    tone: "bg-urucum",
  },
  {
    name: "Gal Costa",
    role: "Cantora",
    origin: "Salvador (BA)",
    text: "A grande voz tropicalista: de “Baby” a “Divino, Maravilhoso”, trocou a delicadeza da bossa nova por gritos, guitarras e psicodelia.",
    image: images.gal1971,
    year: "1971",
    position: "50% 30%",
    tone: "bg-rosa",
  },
  {
    name: "Os Mutantes",
    role: "Banda de rock",
    origin: "São Paulo (SP)",
    text: "Rita Lee, Arnaldo Baptista e Sérgio Dias: o trio psicodélico que tocou com Gil e Caetano nos festivais e gravou “Panis et Circenses”.",
    image: images.mutantes1969,
    year: "1969",
    position: "50% 35%",
    tone: "bg-folha",
  },
  {
    name: "Tom Zé",
    role: "Cantor e compositor",
    origin: "Irará (BA)",
    text: "O mais experimental do grupo: ironizou a modernização e o consumo em “Parque Industrial” e venceu o Festival da Record de 1968 com “São São Paulo”.",
    tone: "bg-anil",
  },
  {
    name: "Nara Leão",
    role: "Cantora",
    origin: "Vitória (ES)",
    text: "Musa da bossa nova e da canção de protesto, emprestou sua voz a “Lindonéia” no disco-manifesto.",
    image: images.nara1965,
    year: "1965",
    position: "50% 30%",
    tone: "bg-sol",
  },
];

export const collaborators = [
  { name: "Rogério Duprat", role: "Maestro e arranjador", text: "Trouxe a vanguarda erudita para a canção popular e assinou os arranjos do disco-manifesto." },
  { name: "Torquato Neto", role: "Poeta e letrista", text: "Escreveu “Geléia Geral” com Gil e “Mamãe, Coragem” com Caetano." },
  { name: "Capinan", role: "Poeta e letrista", text: "Parceiro de Gil em “Miserere Nóbis” e “Soy Loco por Ti, América”." },
  { name: "Hélio Oiticica", role: "Artista visual", text: "Criou a obra Tropicália, que deu nome ao movimento, e os Parangolés." },
  { name: "Rogério Duarte", role: "Designer gráfico", text: "Fez as capas psicodélicas dos discos de Caetano e de Gil lançados em 1968." },
  { name: "Zé Celso", role: "Diretor de teatro", text: "Com o Teatro Oficina, montou O Rei da Vela (1967), peça-chave do período." },
  { name: "Glauber Rocha", role: "Cineasta", text: "Seu filme Terra em Transe (1967) foi um choque decisivo para Caetano." },
];

export const songFacts = [
  ["Composição", "Gilberto Gil"],
  ["Arranjo", "Rogério Duprat"],
  ["Com", "Os Mutantes"],
  ["Sons", "Berimbau, orquestra e guitarras"],
  ["Estreia", "III Festival da Record, out. 1967 — 2º lugar"],
  ["Disco", "Gilberto Gil (1968)"],
];

export const manifestoTracks = [
  "Miserere Nóbis",
  "Coração Materno",
  "Panis et Circenses",
  "Lindonéia",
  "Parque Industrial",
  "Geléia Geral",
  "Baby",
  "Três Caravelas",
  "Enquanto Seu Lobo Não Vem",
  "Mamãe, Coragem",
  "Bat Macumba",
  "Hino do Senhor do Bonfim",
];

export const songs = [
  { title: "Alegria, Alegria", artist: "Caetano Veloso", year: 1967 },
  { title: "Domingo no Parque", artist: "Gilberto Gil e Os Mutantes", year: 1967 },
  { title: "Tropicália", artist: "Caetano Veloso", year: 1968 },
  { title: "Geléia Geral", artist: "Gilberto Gil", year: 1968 },
  { title: "Panis et Circenses", artist: "Os Mutantes", year: 1968 },
  { title: "Baby", artist: "Gal Costa e Caetano Veloso", year: 1968 },
  { title: "Parque Industrial", artist: "Tom Zé", year: 1968 },
  { title: "Lindonéia", artist: "Nara Leão", year: 1968 },
  { title: "É Proibido Proibir", artist: "Caetano Veloso e Os Mutantes", year: 1968 },
  { title: "Divino, Maravilhoso", artist: "Gal Costa", year: 1968 },
];

export const artWorks = [
  {
    title: "Parangolé",
    who: "Hélio Oiticica · a partir de 1964",
    text: "Capas, bandeiras e estandartes de tecido para vestir e dançar, criados com passistas da Mangueira.",
    tone: "bg-urucum",
  },
  {
    title: "Bichos e Divisor",
    who: "Lygia Clark · Lygia Pape",
    text: "Obras que só existem com o público: as esculturas articuladas de Clark e o Divisor (1968) de Pape, um enorme pano branco com fendas para as cabeças.",
    tone: "bg-folha",
  },
  {
    title: "Lindonéia, a Gioconda do subúrbio",
    who: "Rubens Gerchman · 1966",
    text: "Pop Art à brasileira: o retrato de uma moça das páginas policiais virou canção na voz de Nara Leão.",
    tone: "bg-rosa",
  },
  {
    title: "Capas e cartazes",
    who: "Rogério Duarte",
    text: "O designer criou as capas psicodélicas de Caetano e Gil em 1968 e o cartaz de Deus e o Diabo na Terra do Sol (1964).",
    tone: "bg-sol",
  },
];

export const stageAndScreen = [
  {
    kind: "Teatro",
    title: "O Rei da Vela",
    year: "1967",
    who: "Teatro Oficina, direção de Zé Celso",
    text: "A peça de Oswald de Andrade virou uma alegoria grotesca, colorida e debochada do Brasil — um espelho do que o Tropicalismo fazia na música.",
  },
  {
    kind: "Cinema",
    title: "Terra em Transe",
    year: "1967",
    who: "Glauber Rocha",
    text: "O filme sobre a crise política de um país imaginário abalou Caetano e ajudou a acender o movimento. Em 1969, Macunaíma, de Joaquim Pedro de Andrade, levou a antropofagia às telas.",
  },
];

export const fashionEras = [
  {
    era: "Anos 60",
    title: "Geometria pop",
    text: "Minissaia, cortes retos, estampas op art e cores chapadas. A Jovem Guarda levou a moda jovem à TV, e a Rhodia convidou artistas plásticos para criar estampas.",
    tone: "bg-urucum",
    motif: "geo",
  },
  {
    era: "Tropicália",
    title: "Brasil psicodélico",
    text: "Cabelos longos e cacheados assumidos, batas, colares, roupas de plástico e fantasias de palco. O Parangolé de Oiticica levou a ideia ao extremo: arte para vestir.",
    tone: "bg-mata text-papel",
    motif: "psico",
  },
  {
    era: "Anos 70",
    title: "Liberdade em movimento",
    text: "Boca de sino, plataformas, tie-dye e androginia, dos Dzi Croquettes a Ney Matogrosso. Em 1971, Zuzu Angel transformou um desfile em denúncia contra a ditadura, que matara seu filho.",
    tone: "bg-rosa",
    motif: "sino",
  },
];

export const museumFacts = [
  ["Projeto", "Oscar Niemeyer"],
  ["Inauguração", "15 de dezembro de 2006"],
  ["Onde", "Setor Cultural Sul, Esplanada dos Ministérios — Brasília (DF)"],
];

export const legacy = [
  {
    label: "Anos 70",
    title: "A mistura continua",
    text: "Novos Baianos, Secos & Molhados e a geração do desbunde seguiram juntando rock, samba, choro e teatro.",
  },
  {
    label: "Anos 90",
    title: "Manguebeat",
    text: "Em Recife, Chico Science & Nação Zumbi uniram maracatu, rock e hip-hop com o mesmo espírito antropofágico.",
  },
  {
    label: "Mundo afora",
    title: "Redescoberta",
    text: "David Byrne relançou Tom Zé em 1990, Beck gravou “Tropicalia” em 1998 e Os Mutantes voltaram aos palcos em Londres, em 2006.",
  },
  {
    label: "Ironia da história",
    title: "Do fardão à Academia",
    text: "Gil, que posou com um fardão de brincadeira na capa do disco de 1968, foi ministro da Cultura e, em 2021, eleito para a Academia Brasileira de Letras.",
  },
];

export const references = [
  { author: "Caetano Veloso", title: "Verdade tropical", detail: "Companhia das Letras, 1997" },
  { author: "Celso Favaretto", title: "Tropicália: alegoria, alegria", detail: "1979" },
  { author: "Carlos Calado", title: "Tropicália: a história de uma revolução musical", detail: "Editora 34, 1997" },
  { author: "Christopher Dunn", title: "Brutalidade jardim: a Tropicália e o surgimento da contracultura brasileira", detail: "Editora Unesp, 2009" },
  { author: "Oswald de Andrade", title: "Manifesto Antropófago", detail: "Revista de Antropofagia, 1928" },
];
