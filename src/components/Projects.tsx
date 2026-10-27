 "use client";

import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const technologies = ["React.js", "Node.js", "Express", "MySQL", "Git"];

  useEffect(() => {
    if (!isPreviewOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPreviewOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewOpen]);

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
              <div className="overflow-hidden border border-[#52606c] bg-[#0b1117] shadow-xl">
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className="block w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8bd91]"
                  aria-label="Noted. szerkesztő kép megnyitása nagy nézetben"
                >
                  <Image
                    src="/images/noted-editor.png"
                    alt="A Noted. alkalmazás jegyzet szerkesztő felülete"
                    width={1364}
                    height={768}
                    className="h-auto w-full object-cover transition-opacity hover:opacity-85"
                  />
                </button>
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
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05080c]/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Noted. szerkesztő előnézete"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div className="relative max-h-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute -right-2 -top-2 z-10 flex h-9 w-9 items-center justify-center border border-[#52606c] bg-[#111820] text-[#f4f1ea] transition-colors hover:border-[#d8bd91] hover:text-[#d8bd91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8bd91]"
              aria-label="Előnézet bezárása"
            >
              <X className="h-5 w-5" />
            </button>
            <Image
              src="/images/noted-editor.png"
              alt="A Noted. alkalmazás nagyított jegyzet szerkesztő felülete"
              width={1364}
              height={768}
              className="max-h-[calc(100vh-4rem)] w-auto max-w-full border border-[#52606c] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
