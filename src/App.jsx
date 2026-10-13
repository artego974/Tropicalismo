import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Arts from "./sections/Arts.jsx";
import Fashion from "./sections/Fashion.jsx";
import Hero from "./sections/Hero.jsx";
import Legacy from "./sections/Legacy.jsx";
import Movement from "./sections/Movement.jsx";
import Museum from "./sections/Museum.jsx";
import Music from "./sections/Music.jsx";
import People from "./sections/People.jsx";
import Timeline from "./sections/Timeline.jsx";

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] border-2 border-tinta bg-sol px-4 py-2 font-bold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Movement />
        <Timeline />
        <People />
        <Music />
        <Arts />
        <Fashion />
        <Museum />
        <Legacy />
      </main>
      <Footer />
    </>
  );
}
