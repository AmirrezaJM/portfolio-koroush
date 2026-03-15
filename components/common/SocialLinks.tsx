import Link from "next/link";
import { Github, Linkedin, Twitter, LucideIcon } from "lucide-react";

interface SocialLink {
    label: string;
    href: string;
    Icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
    { label: "GitHub", href: "#", Icon: Github },
    { label: "LinkedIn", href: "#", Icon: Linkedin },
    { label: "Twitter", href: "#", Icon: Twitter },
];

interface SocialLinksProps {
    variant?: "inline" | "boxed";
    className?: string;
}

export default function SocialLinks({ variant = "inline", className = "" }: SocialLinksProps) {
    if (variant === "boxed") {
        return (
            <div className={`flex items-center gap-4 ${className}`}>
                {socialLinks.map((social) => (
                    <Link
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                        aria-label={social.label}
                    >
                        <social.Icon className="w-5 h-5" />
                    </Link>
                ))}
            </div>
        );
    }

    return (
        <div className={`flex items-center gap-6 ${className}`}>
            {socialLinks.map((social) => (
                <Link
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label={social.label}
                >
                    <social.Icon className="w-5 h-5" />
                </Link>
            ))}
        </div>
    );
}
