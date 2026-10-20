import { Mail, Phone, ArrowUp } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-[#060a12] py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand & Credentials */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/40 font-mono text-xs font-bold text-blue-400">
              MF
            </span>
            <div>
              <p className="text-sm font-bold text-white">Figura Márton Ferenc</p>
              <p className="font-mono text-xs text-slate-400">
                Full-Stack Szoftverfejlesztő &bull; BME VIK Üzemmérnök-informatikus
              </p>
            </div>
          </div>

          {/* Direct channels */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-slate-400">
            <a
              href="mailto:figuramarton2005@gmail.com"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="h-3.5 w-3.5" />
              figuramarton2005@gmail.com
            </a>
            <a
              href="tel:+36707034644"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5 tabular-nums"
            >
              <Phone className="h-3.5 w-3.5" />
              +36 70 703 4644
            </a>
            <a
              href="https://github.com/xdmarci2005"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </div>

        {/* Telemetry bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; 2025–2026 Figura Márton. Minden jog fenntartva.
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              STACK: NEXT.JS 16 &bull; TS &bull; TAILWIND
            </span>
            <span className="text-slate-700">|</span>
            <a
              href="#"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
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
