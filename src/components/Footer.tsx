import Link from "next/link";
import { Mail, Phone, Heart } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-blue-600 font-mono text-xs font-bold text-white">
              MF
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Figura Márton Ferenc</p>
              <p className="text-xs text-slate-400">
                Szoftverfejlesztő &bull; BME VIK Üzemmérnök-informatikus hallgató
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
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

        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2025–2026 Figura Márton. Minden jog fenntartva.
          </p>
          <p className="flex items-center gap-1">
            Készült Next.js, React és Tailwind CSS segítségével.
          </p>
        </div>
      </div>
    </footer>
  );
}
