import { Zap, Shield, Palette, HeartHandshake, Clock, RefreshCw } from "lucide-react";
import FeatureCard from "@/components/common/FeatureCard";

const reasons = [
    {
        Icon: Zap,
        title: "Performance First",
        description:
            "Every project is optimised for speed. Fast load times, smooth interactions, and efficient code are non-negotiable.",
    },
    {
        Icon: Palette,
        title: "Pixel-Perfect Design",
        description:
            "Meticulous attention to every visual detail ensures interfaces that look stunning across all devices and screen sizes.",
    },
    {
        Icon: Shield,
        title: "Reliable & Secure",
        description:
            "Best practices in security, testing, and error handling so your application stays robust in production.",
    },
    {
        Icon: HeartHandshake,
        title: "Clear Communication",
        description:
            "Transparent workflows, regular progress updates, and a collaborative mindset keep every project on track.",
    },
    {
        Icon: Clock,
        title: "On-Time Delivery",
        description:
            "Structured planning and disciplined execution mean deadlines are met — without compromising on quality.",
    },
    {
        Icon: RefreshCw,
        title: "Future-Proof Code",
        description:
            "Clean architecture and modern tooling make your codebase easy to maintain, extend, and scale for years to come.",
    },
];

export default function WhyChoose() {
    return (
        <section id="why-choose" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1440px]">
                {/* Section header */}
                <div className="flex flex-col items-center mb-16 space-y-4 text-center">
                    <h2 className="text-sm font-mono tracking-widest text-primary uppercase">
                        Why Work With Me
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Built Different
                    </h3>
                    <p className="max-w-2xl text-muted-foreground md:text-lg">
                        More than just code — a commitment to quality, communication, and
                        craft at every stage.
                    </p>
                </div>

                {/* Reasons grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <FeatureCard
                            key={index}
                            title={reason.title}
                            description={reason.description}
                            Icon={reason.Icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
