import { Mail, Phone, ArrowUp } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[#26313d] bg-[#0b1117] py-12 text-[#8f9aa4]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-[#26313d] pb-8 md:flex-row">
          
          {/* Brand & Credentials */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border border-[#b99462]/50 bg-[#b99462]/10 text-xs font-semibold text-[#d8bd91]">
              MF
            </span>
            <div>
              <p className="text-sm font-bold text-white">Figura Márton Ferenc</p>
              <p className="text-xs text-[#8f9aa4]">
                Full-Stack Szoftverfejlesztő &bull; BME VIK Üzemmérnök-informatikus
              </p>
            </div>
          </div>

          {/* Direct channels */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-[#8f9aa4]">
            <a
              href="mailto:figuramarton2005@gmail.com"
              className="flex items-center gap-1.5 transition-colors hover:text-[#d8bd91]"
            >
              <Mail className="h-3.5 w-3.5 text-[#52606c]" />
              figuramarton2005@gmail.com
            </a>
            <a
              href="tel:+36707034644"
              className="flex items-center gap-1.5 tabular-nums transition-colors hover:text-[#d8bd91]"
            >
              <Phone className="h-3.5 w-3.5 text-[#52606c]" />
              +36 70 703 4644
            </a>
            <a
              href="https://github.com/xdmarci2005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-[#d8bd91]"
            >
              <GithubIcon className="h-3.5 w-3.5 text-[#52606c]" />
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-[#8f9aa4] sm:flex-row">
          <p>
            &copy; 2025–2026 Figura Márton. Minden jog fenntartva.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[#8f9aa4]">Köszönöm, hogy benéztél.</span>
            <span className="text-[#52606c]">|</span>
            <a
              href="#"
              className="flex items-center gap-1 transition-colors hover:text-[#f4f1ea]"
            >
              Tetejére
              <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
