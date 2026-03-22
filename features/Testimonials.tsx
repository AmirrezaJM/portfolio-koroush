import { Quote } from "lucide-react";

const testimonialsData = [
    {
        name: "Sarah Jenkins",
        role: "CTO at StartupX",
        content: "Working with them was a game-changer for our platform. The code quality, communication, and speed of delivery exceeded all our expectations.",
        initials: "SJ",
    },
    {
        name: "Michael Chen",
        role: "Founder of DesignStudio",
        content: "Rarely do you find a developer who understands both complex backend architecture and nuanced frontend design. A truly exceptional talent.",
        initials: "MC",
    },
    {
        name: "Elena Rodriguez",
        role: "Product Manager at TechGroup",
        content: "Their ability to translate vague requirements into robust, scalable features is unparalleled. Delivered our MVP two weeks ahead of schedule.",
        initials: "ER",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section header */}
                <div className="flex flex-col items-center mb-16 space-y-4 text-center">
                    <h2 className="text-sm font-mono tracking-widest text-primary uppercase">
                        Client Feedback
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Testimonials
                    </h3>
                    <p className="max-w-2xl text-muted-foreground md:text-lg">
                        Hear from the people I&apos;ve collaborated with to build impactful digital products.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] overflow-hidden flex flex-col h-full"
                        >
                            {/* Hover accent */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6">
                                    <Quote className="w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
                                </div>
                                
                                <blockquote className="text-muted-foreground leading-relaxed mb-auto pb-8">
                                    &quot;{testimonial.content}&quot;
                                </blockquote>
                                
                                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-mono group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground tracking-tight">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
