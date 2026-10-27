import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Hero() {
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
            <div className="grid grid-cols-[76px_1fr] gap-4 p-5 sm:grid-cols-[92px_1fr] sm:p-7">
              <div className="space-y-2 border-r border-[#26313d] pr-4 text-[11px] text-[#8f9aa4]">
                <div className="mb-5 text-[#d8bd91]">NOTED.</div>
                <div className="bg-[#26313d] px-2 py-1.5 text-[#f4f1ea]">Összes jegyzet</div>
                <div className="px-2 py-1.5">Feladatok</div>
                <div className="px-2 py-1.5">Kategóriák</div>
                <div className="px-2 py-1.5">Beállítások</div>
              </div>
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#f4f1ea]">Jó reggelt, Márton</p>
                    <p className="mt-1 text-[11px] text-[#8f9aa4]">A jegyzeteid egy helyen.</p>
                  </div>
                  <span className="border border-[#b99462]/50 px-2 py-1 text-[10px] text-[#d8bd91]">+ Új jegyzet</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="border border-[#52606c] bg-[#18212a] p-3">
                    <div className="mb-4 h-1 w-8 bg-[#b99462]" />
                    <p className="text-xs font-medium text-[#f4f1ea]">API tervezési jegyzetek</p>
                    <p className="mt-2 text-[10px] leading-5 text-[#8f9aa4]">Végpontok, validáció, hibakezelés...</p>
                  </div>
                  <div className="border border-[#52606c] bg-[#18212a] p-3">
                    <div className="mb-4 h-1 w-8 bg-[#718a78]" />
                    <p className="text-xs font-medium text-[#f4f1ea]">BME vizsgaterv</p>
                    <p className="mt-2 text-[10px] leading-5 text-[#8f9aa4]">Adatbázisok és algoritmusok...</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 border-t border-[#26313d] pt-3 text-[10px] text-[#8f9aa4]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9caf9b]" />
                  Reszponzív React felület, Express API és MySQL adatbázis
                </div>
              </div>
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
    </section>
  );
}
