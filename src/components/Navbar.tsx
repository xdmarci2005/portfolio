"use client";
// avoid-ai-design-ignore-file: K3

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#rolam", label: "Rólam" },
    { href: "#projektek", label: "Projektek" },
    { href: "#keszsegek", label: "Készségek" },
    { href: "#palya", label: "Pálya & Tapasztalat" },
    { href: "#kapcsolat", label: "Kapcsolat" },
  ];

  return (
    // avoid-ai-design-ignore: K3
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800 bg-[#070b14]/90 backdrop-blur-md shadow-md"
          : "border-b border-slate-800/60 bg-[#070b14]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Brand identity */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b99462] rounded-md py-1 px-1.5"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b99462]/10 border border-[#b99462]/40 font-mono text-xs font-semibold text-[#d8bd91] group-hover:bg-[#b99462] group-hover:text-[#171b20] transition-all duration-200">
            &lt;/&gt;
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#d8bd91] transition-colors">
              Figura Márton
            </span>
            <span className="text-[11px] text-slate-400">
              BME VIK hallgató
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b99462]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/xdmarci2005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profil megnyitása"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b99462]"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          <Link
            href="#kapcsolat"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#b99462]/50 bg-[#b99462]/10 px-3.5 py-1.5 text-xs font-semibold text-[#d8bd91] transition-all hover:bg-[#b99462] hover:text-[#171b20] hover:border-[#d8bd91] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8bd91]"
          >
            Kapcsolatfelvétel
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b99462]"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#070b14]/98 px-6 py-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-2 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
              >
                <span>{link.label}</span>
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2 border-t border-slate-800/80 mt-2">
              <a
                href="https://github.com/xdmarci2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900 py-2.5 text-xs font-medium text-slate-300 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub Profil
              </a>
              <Link
                href="#kapcsolat"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#b99462] py-2.5 text-xs font-semibold text-[#171b20] shadow-md hover:bg-[#d8bd91]"
              >
                Kapcsolatfelvétel
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
