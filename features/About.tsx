import { Briefcase, GraduationCap, MapPin, Sparkles } from "lucide-react";
import Highlights, { HighlightItem } from "@/components/common/Highlights";

// mock data
const highlights: HighlightItem[] = [
    {
        Icon: Briefcase,
        label: "Experience",
        value: "5+ Years",
    },
    {
        Icon: Sparkles,
        label: "Projects",
        value: "50+ Delivered",
    },
    {
        Icon: GraduationCap,
        label: "Education",
        value: "CS Degree",
    },
    {
        Icon: MapPin,
        label: "Location",
        value: "Netherlands",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section header */}
                <div className="flex flex-col items-center mb-16 space-y-4 text-center">
                    <h2 className="text-sm font-mono tracking-widest text-primary uppercase">
                        About Me
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Who I Am
                    </h3>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text content */}
                    <div className="space-y-6">
                        <p className="text-muted-foreground md:text-lg leading-relaxed">
                            I&apos;m a passionate full-stack developer with over five years of
                            experience crafting digital products that merge beautiful design
                            with robust engineering. I thrive at the intersection of
                            creativity and technology.
                        </p>
                        <p className="text-muted-foreground md:text-lg leading-relaxed">
                            My approach centers on building performant, accessible, and
                            scalable applications. From pixel-perfect frontends to resilient
                            backend architectures, I bring ideas to life using modern tools
                            like React, Next.js, Node.js, and TypeScript.
                        </p>
                        <p className="text-muted-foreground md:text-lg leading-relaxed">
                            When I&apos;m not writing code, you&apos;ll find me exploring new
                            technologies, contributing to open-source projects, or sharing
                            knowledge with the developer community.
                        </p>
                    </div>

                    {/* Highlights grid */}
                    <Highlights items={highlights} />
                </div>
            </div>
        </section>
    );
}
