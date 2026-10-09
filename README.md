# Tropicalismo — landing page responsiva

Landing page em React + Vite + Tailwind CSS, em português, com identidade visual inspirada no Tropicalismo, na Pop Art e na estética gráfica brasileira dos anos 1960/70.

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

## Estrutura
- `src/App.jsx`: página e componentes.
- `src/index.css`: Tailwind, fontes e estilos de identidade visual.
- `src/main.jsx`: ponto de entrada React.
- `index.html`: documento HTML.
- `vite.config.js`: configuração Vite + Tailwind.

## Conteúdo pronto
- Hero de abertura com cores tropicais e tipografia expressiva.
- Contexto histórico do Tropicalismo.
- Galeria do Museu Nacional da República com imagens do Wikimedia Commons.
- Área reservada para o clipe.
- Seção sobre “Domingo no Parque”, com letra recolhível inserida a partir do material fornecido.
- Moda dos anos 60 e 70 e espaços reservados para fotos dos looks.
- Cartaz ilustrativo em estilo Pop Art e espaço para explicar a produção.

## Personalização
- Para trocar as imagens do museu, edite o array `museumImages` em `src/App.jsx`.
- Para adicionar o clipe, cole a URL no campo da seção audiovisual. Para incorporar o vídeo diretamente na página, substitua o placeholder por um `<iframe>` de YouTube/Vimeo.
- Substitua os quatro espaços “LOOK 01–04” pelas fotos finais.
- Atualize a área “Como produzimos o cartaz” com a descrição real do processo.
- As imagens são carregadas de Wikimedia Commons. Confira autoria e licença na página de cada arquivo antes de publicar.

## Observação
A página foi montada como base de projeto. O layout é responsivo e pode ser ajustado conforme as imagens finais, o clipe e os textos da equipe.


## Responsividade
O layout usa breakpoints móveis/tablet/desktop, menu mobile expansível, grades que empilham em telas estreitas, imagens fluidas e proteções contra overflow horizontal. Teste com a ferramenta de dispositivos do navegador em 360 px, 390 px, 768 px, 1024 px e desktop.
