import Link from "next/link";
import { Mail, MapPin, Send } from "lucide-react";
import SocialLinks from "@/components/common/SocialLinks";

const contactInfo = [
    {
        Icon: Mail,
        label: "Email",
        value: "hello@example.com",
        href: "mailto:hello@example.com",
    },
    {
        Icon: MapPin,
        label: "Location",
        value: "Netherlands",
        href: null,
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section header */}
                <div className="flex flex-col items-center mb-16 space-y-4 text-center">
                    <h2 className="text-sm font-mono tracking-widest text-primary uppercase">
                        Get in Touch
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Let&apos;s Work Together
                    </h3>
                    <p className="max-w-2xl text-muted-foreground md:text-lg">
                        Have a project in mind or just want to say hello? I&apos;d love to
                        hear from you.
                    </p>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact form */}
                    <div className="space-y-6">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-xs font-mono tracking-widest text-muted-foreground uppercase"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-xs font-mono tracking-widest text-muted-foreground uppercase"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="text-xs font-mono tracking-widest text-muted-foreground uppercase"
                                >
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="Project inquiry"
                                    className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-xs font-mono tracking-widest text-muted-foreground uppercase"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group flex items-center gap-3 bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-foreground/90 transition-colors duration-300"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                            </button>
                        </form>
                    </div>

                    {/* Contact info & socials */}
                    <div className="flex flex-col justify-between space-y-10 lg:pl-8">
                        {/* Info cards */}
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-5 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                                        <item.Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                                            >
                                                {item.value}
                                            </Link>
                                        ) : (
                                            <p className="text-foreground font-medium">
                                                {item.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                                Connect with me
                            </h4>
                            <SocialLinks variant="boxed" />
                        </div>

                        {/* Quick note */}
                        <div className="p-6 rounded-2xl bg-card border border-border/50">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                I typically respond within <span className="text-foreground font-medium">24 hours</span>.
                                For urgent inquiries, feel free to reach out directly via email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
