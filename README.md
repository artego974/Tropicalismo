# Tropicália — landing page responsiva

Landing page em React + Vite + Tailwind CSS, em português, sobre o Tropicalismo (1967–1968). A identidade visual parte das capas de disco e dos cartazes da época: cores tropicais chapadas, tipografia psicodélica, raios de sol, retícula da Pop Art e ondas do calçadão de Copacabana.

## Requisitos
- Node.js 20.19+ ou 22.12+
- npm

## Como executar

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite no terminal.

## Gerar build de produção

```bash
npm run build
npm run preview
```

O build usa caminhos relativos (`base: "./"`), então a pasta `dist/` funciona em qualquer subpasta, inclusive no GitHub Pages.

## Seções
1. **Início**: o que foi o movimento, em uma frase, com foto de Caetano Veloso no festival de 1967.
2. **Movimento**: definição, ideias-chave e a Antropofagia de Oswald de Andrade (1928).
3. **Linha do tempo**: do Manifesto Antropófago ao exílio de Caetano e Gil (1969–1972).
4. **Quem fez**: artistas principais e colaboradores (música, poesia, artes, teatro e cinema).
5. **Música**: “Domingo no Parque”, ficha técnica, clipe da turma, letra, o disco-manifesto e dez canções para ouvir.
6. **Artes**: Hélio Oiticica, Parangolé, Lygia Clark e Lygia Pape, Pop Art, teatro, cinema e o cartaz da turma.
7. **Moda**: anos 60, Tropicália e anos 70, com os looks do desfile da turma.
8. **Museu**: Museu Nacional da República e a relação de Brasília com o Tropicalismo.
9. **Legado**: a influência do movimento até hoje.

## Estrutura
- `src/App.jsx`: monta a página na ordem das seções.
- `src/sections/`: uma seção por arquivo.
- `src/components/`: cabeçalho, rodapé, peças reutilizáveis (`ui.jsx`) e grafismos em SVG (`decor.jsx`).
- `src/content/site.js`: textos em lista (linha do tempo, artistas, canções, referências etc.).
- `src/content/images.js`: imagens com autoria e licença.
- `src/content/project.js`: **conteúdo produzido pela turma** (veja abaixo).
- `src/content/lyrics.js`: letra de “Domingo no Parque”.
- `src/index.css`: cores, fontes e grafismos da identidade visual.
- `public/images/`: fotos otimizadas em WebP.

## Conteúdo da turma
Tudo fica em `src/content/project.js`. Enquanto um campo estiver vazio, a página mostra um aviso discreto de “em breve”.
- **Clipe**: cole o link do YouTube, Vimeo ou Google Drive em `videoUrl`. O vídeo é incorporado automaticamente.
- **Looks do desfile**: coloque as fotos em `public/images/looks/` e preencha `image` (ex.: `"images/looks/look-01.jpg"`), `title` e `alt`.
- **Cartaz**: coloque a foto do cartaz final em `public/images/` e preencha `poster.image`. Ajuste `posterSteps` com o processo real.
- **Equipe**: preencha `team` (nomes) e `school` (escola, turma e ano) para aparecer no rodapé.

## Créditos
- Fotos de época: Arquivo Nacional, Fundo Correio da Manhã (domínio público), via Wikimedia Commons.
- Fotos do museu: Florian Knorn (CC BY 3.0), Pilar Saramago (CC BY-SA 4.0) e Túllio F (CC BY-SA 4.0), via Wikimedia Commons.
- Os créditos completos, com links, ficam no rodapé da página.
- Letra de “Domingo no Parque”: Gilberto Gil. Incluída para fins educativos.

## Responsividade
Layout pensado primeiro para celular e testado em 320, 360, 390, 768, 1024, 1280 e 1920 px, sem rolagem horizontal. O menu completo aparece a partir de 1024 px; abaixo disso, há um menu recolhível (fecha com Esc ou ao escolher uma seção). Animações respeitam a preferência de “reduzir movimento” do sistema.
