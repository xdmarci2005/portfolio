import { ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Projects() {
  const technologies = ["React.js", "Node.js", "Express", "MySQL", "Git"];

  return (
    <section id="projektek" className="border-t border-[#26313d] bg-[#0b1117] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm text-[#b99462]">Kiválasztott munka</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#f4f1ea] sm:text-4xl">Kiemelt projekt</h2>
          <p className="mt-4 text-base leading-7 text-[#b8c0c8]">
            Egy olyan projektet mutatok, amelyben a teljes fejlesztési folyamatban részt vettem az interfésztől az adatmodellig.
          </p>
        </div>

        <article className="border border-[#52606c] bg-[#111820]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border-b border-[#26313d] p-5 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="border border-[#52606c] bg-[#0b1117] p-3 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#26313d] pb-3 text-[11px] text-[#8f9aa4]">
                  <span>noted.local / dashboard</span><span>2025</span>
                </div>
                <div className="grid grid-cols-[90px_1fr] gap-4 pt-4 sm:grid-cols-[120px_1fr]">
                  <aside className="space-y-2 border-r border-[#26313d] pr-3 text-[10px] text-[#8f9aa4]">
                    <div className="mb-5 font-semibold text-[#d8bd91]">NOTED.</div>
                    <div className="bg-[#26313d] px-2 py-1.5 text-[#f4f1ea]">Jegyzeteim</div>
                    <div className="px-2 py-1.5">Feladatok</div>
                    <div className="px-2 py-1.5">Kategóriák</div>
                  </aside>
                  <div>
                    <div className="flex items-start justify-between">
                      <div><p className="text-sm font-semibold text-[#f4f1ea]">Összes jegyzet</p><p className="mt-1 text-[10px] text-[#8f9aa4]">6 aktív jegyzet</p></div>
                      <span className="bg-[#b99462] px-2 py-1 text-[10px] font-medium text-[#171b20]">+ Új</span>
                    </div>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {["API tervezési jegyzetek", "BME vizsgaterv", "Heti feladatlista", "Ötletek"].map((item, index) => (
                        <div key={item} className="border border-[#52606c] bg-[#18212a] p-3">
                          <span className={`mb-3 block h-1 w-6 ${index % 2 ? "bg-[#718a78]" : "bg-[#b99462]"}`} />
                          <p className="text-[11px] font-medium text-[#f4f1ea]">{item}</p>
                          <p className="mt-2 text-[9px] text-[#8f9aa4]">Frissítve ma</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-[#8f9aa4]">A Noted. alkalmazás felülete: jegyzetek, feladatok és kategóriák egyetlen áttekinthető nézetben.</p>
            </div>
            <div className="flex flex-col justify-between p-5 sm:p-8">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-[#f4f1ea]">Noted.</h3>
                  <span className="text-xs text-[#8f9aa4]">Záróprojekt</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#b8c0c8]">
                  Kétfős csapatban készített jegyzet- és feladatkezelő webalkalmazás. A felületet Reactben, a szerveroldali logikát Expressben, az adatokat pedig normalizált MySQL sémában építettük fel.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {technologies.map((technology) => <span key={technology} className="border border-[#52606c] px-2.5 py-1 text-xs text-[#d8bd91]">{technology}</span>)}
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="https://github.com/xdmarci2005/Noted_Projekt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#b99462] px-4 py-2.5 text-sm font-semibold text-[#171b20] hover:bg-[#d8bd91]">
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
                <a href="#kapcsolat" className="inline-flex items-center gap-2 border border-[#52606c] px-4 py-2.5 text-sm text-[#e2e6e9] hover:border-[#b99462] hover:text-[#d8bd91]">
                  Élő demo <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
