import { Button } from "@/components/ui/button";
import SectionDivider from "@/features/SectionDivider";
import Services from "@/features/Services";
// "use client";
// "use sever";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">

      {/* Sections */}
      {/* <Hero /> */}
      <SectionDivider />
      {/* <About /> */}
      <SectionDivider />
      <Services />
      <SectionDivider />
      {/* <WhyChoose />
      <SectionDivider />
      <Projects />
      <Testimonials />
      <Contact /> */}
    </main>
  );
}

// UI
// common
// Features