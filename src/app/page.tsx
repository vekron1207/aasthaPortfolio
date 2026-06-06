import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Publications />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
