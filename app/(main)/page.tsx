import SectionDivider from "@/features/SectionDivider";
import Hero from "@/features/Hero";
import About from "@/features/About";
import Services from "@/features/Services";
import WhyChoose from "@/features/WhyChoose";
import Contact from "@/features/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">

      {/* Sections */}
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <WhyChoose />
      <SectionDivider />
      {/* <Projects />
      <Testimonials /> */}
      <Contact />
    </main>
  );
}

// UI
// common
// Features