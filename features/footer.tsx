"use client"

import Link from "next/link"

const footerLinks = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Stack", href: "#stack" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Twitter / X", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Dribbble", href: "#" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Resume / CV", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Uses", href: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-mono text-sm font-bold">
                  {"P"}
                </span>
              </div>
              <span className="font-mono text-foreground text-sm tracking-widest uppercase">
                Portfolio
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Creative developer building high-performance digital experiences with modern web technologies and a relentless eye for detail.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs uppercase tracking-[0.3em] text-accent font-mono mb-6">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            {"© 2025 Portfolio. All rights reserved."}
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built with Next.js, TailwindCSS & GSAP.
          </p>
        </div>
      </div>
    </footer>
  )
}
