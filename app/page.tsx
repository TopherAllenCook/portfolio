import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Works />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
