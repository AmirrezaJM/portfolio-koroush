import Link from "next/link";
import { ArrowDown } from "lucide-react";
import SocialLinks from "@/components/common/SocialLinks";
import FloatingLines from "@/components/common/FloatingLines";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 opacity-60 dark:opacity-40">
                <FloatingLines
                    animationSpeed={0.8}
                    parallaxStrength={0.1}
                />
            </div>

            <div className="container mx-auto px-6 max-w-7xl">
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
