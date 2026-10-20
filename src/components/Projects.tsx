import { ExternalLink, FolderGit2, CheckCircle, Users } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Projects() {
  return (
    <section id="projektek" className="py-20 border-t border-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Kiemelt projektek &amp; referenciák
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              Gyakorlati szoftverfejlesztési tapasztalat, valós csapatmunka és átlátható kódstruktúra.
            </p>
          </div>

          <a
            href="https://github.com/xdmarci2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            Összes GitHub projekt megtekintése &rarr;
          </a>
        </div>

        {/* Featured Project Showcase: Noted */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10 transition-all hover:border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-950/80 border border-blue-800/60 px-3 py-1 text-xs font-semibold text-blue-300">
                  <FolderGit2 className="h-3.5 w-3.5" />
                  Technikumi Projektmunka
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300 tabular-nums">
                  2024 – 2025
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300">
                  <Users className="h-3.5 w-3.5 text-slate-400" />
                  Csapatmunka
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Noted. Jegyzetkezelő App
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-400">
                  Fejlesztők: Figura Márton, Gerencséri Huba
                </p>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                Egy átfogó, full-stack jegyzet- és feladatkezelő webalkalmazás, amelyet
                a Bolyai János Műszaki Technikumban végzett tanulmányaink záró
                projektmunkájaként készítettünk el kétfős csapatban.
                A projekt React.js frontendet, Node.js háttérlogikát és MySQL relációs
                adatbázist kombinál a reszponzív felület, gyorsszűrés és megbízható
                adatkezelés érdekében.
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Főbb funkciók &amp; mérnöki megoldások:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    React.js komponens alapú dinamikus felület
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    Node.js &amp; Express REST API háttér
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    MySQL relációs adatbázis normalizált sémával
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    Git ágkezelés és verziókövetett csapatmunka
                  </li>
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/xdmarci2005/Noted_Projekt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <GithubIcon className="h-4 w-4" />
                  Forráskód a GitHubon
                </a>
              </div>
            </div>

            {/* Architecture / Highlights Side Card */}
            <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-xl p-6 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-white">Alkalmazott technológiák</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Node.js",
                    "MySQL",
                    "Express / REST API",
                    "Git & GitHub",
                    "Szoftvertesztelés",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-800/90 px-2.5 py-1 text-xs font-mono font-medium text-slate-200 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-800 pt-5">
                <h4 className="text-sm font-semibold text-white">Szakmai tapasztalat a projektből</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  A projektmunka során a gyakorlatban alkalmaztuk a szoftvertervezési
                  mintákat, az agilis mérföldköveket, a hibabejelentések kezelését,
                  valamint a technikai dokumentáció összeállítását.
                </p>
              </div>

              <div className="border-t border-slate-800 pt-5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Projekt státusza:</span>
                  <span className="font-semibold text-emerald-400">Sikeresen bemutatva</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
