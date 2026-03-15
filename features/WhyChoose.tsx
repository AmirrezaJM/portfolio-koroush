import { Zap, Shield, Palette, HeartHandshake, Clock, RefreshCw } from "lucide-react";

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

            <div className="container mx-auto px-6 max-w-7xl">
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
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] overflow-hidden"
                        >
                            {/* Numbered badge */}
                            <div className="absolute top-8 right-8 text-6xl font-black text-muted/10 group-hover:text-primary/5 transition-colors duration-500 ease-out select-none">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Hover accent border */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full space-y-6">
                                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ease-out">
                                    <reason.Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {reason.title}
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
