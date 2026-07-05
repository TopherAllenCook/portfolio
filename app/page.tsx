import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Works from "@/components/Works";
import Services from "@/components/Services";
import AiBliss from "@/components/AiBliss";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Story />
        <Works />
        <Services />
        <AiBliss />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
