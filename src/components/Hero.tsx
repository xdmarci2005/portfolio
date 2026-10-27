"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, X } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPreviewOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewOpen]);

  return (
    <section className="relative overflow-hidden border-b border-[#26313d] bg-dev-grid pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="mb-7 inline-flex items-center gap-2 border-b border-[#b99462]/50 pb-2 text-xs font-medium text-[#d8bd91]">
            <span className="h-2 w-2 rounded-full bg-[#b99462]" />
            Nyitott junior és gyakornoki pozíciókra
          </div>

          <h1 className="max-w-xl text-5xl font-semibold tracking-[-0.04em] text-[#f4f1ea] sm:text-6xl">
            Figura Márton
          </h1>
          <p className="mt-4 text-lg text-[#d8bd91] sm:text-xl">
            Full-stack fejlesztő és BME VIK hallgató
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#b8c0c8]">
            Szoftverfejlesztő és tesztelő technikusként végeztem, jelenleg a BME
            üzemmérnök-informatikus képzésén tanulok. Webes felületeket és
            backend rendszereket építek TypeScript, React, Node.js és MySQL
            használatával.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <Link
              href="#kapcsolat"
              className="inline-flex items-center gap-2 bg-[#b99462] px-5 py-3 font-semibold text-[#171b20] transition-colors hover:bg-[#d8bd91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8bd91]"
            >
              Beszéljünk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="#projektek"
              className="inline-flex items-center gap-2 border border-[#52606c] px-5 py-3 font-medium text-[#e2e6e9] transition-colors hover:border-[#b99462] hover:text-[#d8bd91]"
            >
              Kiemelt projekt
            </Link>
            <a
              href="https://github.com/xdmarci2005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profil megtekintése"
              className="inline-flex items-center gap-2 px-2 py-3 text-[#b8c0c8] transition-colors hover:text-[#d8bd91]"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-4">
          <div className="overflow-hidden border border-[#52606c] bg-[#111820] shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-[#26313d] px-5 py-3 text-xs">
              <span className="text-[#e2e6e9]">Kiemelt munka / 2025</span>
              <span className="text-[#8f9aa4]">Noted.</span>
            </div>
            <div className="p-3 sm:p-5">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className="block w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8bd91]"
                aria-label="Noted. áttekintő kép megnyitása nagy nézetben"
              >
                <Image
                  src="/images/noted-overview.png"
                  alt="A Noted. jegyzetkezelő alkalmazás áttekintő felülete"
                  width={1364}
                  height={768}
                  className="h-auto w-full border border-[#26313d] object-cover transition-opacity hover:opacity-85"
                  priority
                />
              </button>
            </div>
            <div className="flex items-center justify-between border-t border-[#26313d] px-5 py-3 text-[11px] text-[#8f9aa4]">
              <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Budapest</span>
              <span>React · Node · MySQL</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3 text-xs text-[#8f9aa4]">
            <Image src="/images/marton.jpg" alt="" width={28} height={28} className="h-7 w-7 rounded-full object-cover grayscale" />
            <span>Jegyzet- és feladatkezelő alkalmazás, kétfős záróprojekt.</span>
          </div>
        </div>
      </div>
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05080c]/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Noted. alkalmazás előnézete"
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
              src="/images/noted-overview.png"
              alt="A Noted. jegyzetkezelő alkalmazás nagyított áttekintő felülete"
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
