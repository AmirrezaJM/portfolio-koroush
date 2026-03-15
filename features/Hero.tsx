import Link from "next/link";
import { ArrowDown } from "lucide-react";
import SocialLinks from "@/components/common/SocialLinks";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background decorative elements */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/2 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1440px]">
                <div className="flex flex-col items-center text-center space-y-8">
                    {/* Status badge */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                            Available for work
                        </span>
                    </div>

                    {/* Main heading */}
                    <div className="space-y-4 max-w-4xl">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                            Creative
                            <span className="block text-muted-foreground/60">Developer</span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p className="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
                        I design and build high-performance digital experiences with
                        meticulous attention to detail, clean code, and modern technologies.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <Link
                            href="#projects"
                            className="bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-foreground/90 transition-colors duration-300"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3.5 text-xs uppercase tracking-widest font-medium rounded-sm border border-border hover:border-foreground/30 hover:bg-card transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Social links */}
                    <SocialLinks className="pt-8" />

                    {/* Scroll indicator */}
                    <div className="pt-12 animate-bounce">
                        <Link
                            href="#about"
                            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="Scroll to about section"
                        >
                            <ArrowDown className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
