"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-16 py-6 transition-all duration-400",
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-green/10"
          : "bg-transparent"
      )}
    >
      {/* logo */}
      <Link
        href="#hero"
        className="font-cormorant text-3xl font-semibold text-green tracking-wide no-underline"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Maroua.
      </Link>
      {/* author links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href} >
            <Link
              href={link.href}
              className="text-[0.82rem] tracking-[0.12em] uppercase text-green/70 no-underline hover:text-green transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="text-[0.82rem] tracking-[0.1em] uppercase text-cream bg-green px-5 py-2.5 no-underline hover:bg-green-light transition-colors duration-200"
      >
        Hire Me
      </Link>
    </nav>
  );
}
