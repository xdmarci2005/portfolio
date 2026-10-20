import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowDown, FileText } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-medium text-emerald-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Nyitott szakmai lehetőségekre &amp; gyakornoki pozíciókra
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Figura Márton
            </h1>

            <p className="mt-4 text-xl font-medium text-blue-400 sm:text-2xl">
              Szoftverfejlesztő Technikus &amp; BME VIK Hallgató
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Általános iskolás korom óta tudatosan építem az informatikai pályámat.
              Szoftverfejlesztői és tesztelői képesítésemre alapozva jelenleg a
              BME VIK üzemmérnök-informatikus képzésén mélyítem elméleti és gyakorlati
              tudásomat, valós projektekre és mérnöki minőségre fókuszálva.
            </p>

            {/* Quick meta tags */}
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-5 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>Budapest, XI. kerület (Etele út)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="h-4 w-4 text-slate-500" />
                <a
                  href="mailto:figuramarton2005@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  figuramarton2005@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-slate-500" />
                <a
                  href="tel:+36707034644"
                  className="hover:text-blue-400 transition-colors tabular-nums"
                >
                  +36 70 703 4644
                </a>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#kapcsolat"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-500 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Kapcsolatfelvétel
                <ArrowDown className="h-4 w-4" />
              </Link>

              <a
                href="https://github.com/xdmarci2005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-medium text-slate-200 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub Profil
              </a>

              <Link
                href="#projektek"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <FileText className="h-4 w-4 text-slate-500" />
                Referenciák megtekintése
              </Link>
            </div>
          </div>

          {/* Profile Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-blue-500/20 to-slate-800/40 blur-sm transition duration-500 group-hover:from-blue-500/30"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl">
                <Image
                  src="/images/marton.jpg"
                  alt="Figura Márton portréfotó"
                  width={380}
                  height={475}
                  priority
                  className="h-[420px] w-[330px] object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4 pt-12">
                  <p className="text-sm font-semibold text-white">
                    Figura Márton Ferenc
                  </p>
                  <p className="text-xs text-slate-400">
                    BME VIK Üzemmérnök-informatikus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
