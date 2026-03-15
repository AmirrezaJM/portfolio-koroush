import { Code, PenTool, Layout, Smartphone, Globe, Database } from "lucide-react";
import FeatureCard from "@/components/common/FeatureCard";

interface ServiceProps {
    title: string;
    description: string;
    Icon: typeof Code;
}

const servicesData: ServiceProps[] = [
    {
        title: "Web Development",
        description: "Building responsive, performant, and scalable web applications using modern frameworks like React and Next.js.",
        Icon: Globe,
    },
    {
        title: "UI/UX Design",
        description: "Crafting intuitive and aesthetically pleasing user interfaces that provide exceptional user experiences.",
        Icon: Layout,
    },
    {
        title: "Backend Architecture",
        description: "Designing robust server-side applications, APIs, and database structures to support complex frontend features.",
        Icon: Database,
    },
    {
        title: "Mobile App Development",
        description: "Creating cross-platform mobile experiences that look and feel native on both iOS and Android devices.",
        Icon: Smartphone,
    },
    {
        title: "Clean Code & Refactoring",
        description: "Improving existing codebases for better maintainability, performance, and developer experience.",
        Icon: Code,
    },
    {
        title: "Creative Coding",
        description: "Adding that extra spark to websites with interactive animations and engaging micro-interactions.",
        Icon: PenTool,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 text-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 text-transparent pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1440px]">
                <div className="flex flex-col items-center mb-16 space-y-4 text-center">
                    <h2 className="text-sm font-mono tracking-widest text-primary uppercase">What I Do</h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Services & Expertise</h3>
                    <p className="max-w-2xl text-muted-foreground md:text-lg">
                        Delivering end-to-end digital solutions, from conceptual design to robust backend implementation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <FeatureCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            Icon={service.Icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
