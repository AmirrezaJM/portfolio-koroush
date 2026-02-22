"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-4 lg:px-12 max-w-[1440px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-accent-foreground font-mono text-sm font-bold">{"P"}</span>
          </div>
          <span className="font-mono text-foreground text-sm tracking-widest uppercase">
            Portfolio
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground text-xs uppercase tracking-widest hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-accent text-accent-foreground px-5 py-2.5 text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-accent/90 transition-colors"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile toggle */}
        <Button
        //   onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {/* {mobileOpen ? <X size={24} /> : <Menu size={24} />} */}
        </Button>
      </div>
    </nav>
  )
}
