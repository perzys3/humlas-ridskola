import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Arena from "@/components/Arena";
import About from "@/components/About";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Arena />
        <About />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
