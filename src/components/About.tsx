import Image from "next/image";
import { Terminal, MapPin, CheckCircle2, GraduationCap } from "lucide-react";

export default function About() {
  const principles = [
    {
      index: "01",
      title: "Tiszta kód & Strukturált architektúra",
      summary:
        "Nem érem be pusztán annyival, hogy a kód lefordul: a rétegzett felépítés, a modularitás és a könnyű karbantarthatóság a mérnöki munkám alapja.",
      tag: "SOLID & Design Patterns",
    },
    {
      index: "02",
      title: "Szoftvertesztelői alapreflexek",
      summary:
        "A Bolyai Technikumban szerzett 5 éves szoftverfejlesztő és tesztelő képzés során beépült a határérték-elemzés, a hibaágak megelőzése és a stabilitás fókuszba helyezése.",
      tag: "QA & Edge-case Prevention",
    },
    {
      index: "03",
      title: "Relációs adatbázisok & Adatintegritás",
      summary:
        "A MySQL és SQL rendszerekben a 3NF normalizálás, a referenciális épség és az átlátható táblakapcsolatok elengedhetetlenek a megbízható üzleti működéshez.",
      tag: "MySQL & Relational Design",
    },
    {
      index: "04",
      title: "Bizonyított munkabírás & Felelősségvállalás",
      summary:
        "A tanulmányok melletti vendéglátóipari és logisztikai munkák során acélosodott meg a teherbírásom, a stressztűrésem és a határidők pontos betartása.",
      tag: "Teamwork & Real Grit",
    },
  ];

  return (
    <section id="rolam" className="py-24 border-t border-slate-900 bg-[#070b14] relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Portrait & Profile Card Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl border border-blue-500/20 bg-[#0c1322] p-5 shadow-xl shadow-black/60 overflow-hidden">
              <div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950">
                <Image
                  src="/images/marton-portrait.jpg"
                  alt="Figura Márton fejlesztő portré"
                  width={420}
                  height={540}
                  className="w-full h-[400px] object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                />
                
                {/* Tech overlay tags */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-slate-950/80 border border-slate-700/80 px-2.5 py-1 text-[11px] font-mono text-emerald-400 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED // BME VIK
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 pt-10">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Figura Márton Ferenc
                  </h3>
                  <p className="font-mono text-xs text-blue-400 flex items-center gap-1.5 mt-0.5">
                    <GraduationCap className="h-3.5 w-3.5" />
                    BME VIK Üzemmérnök-informatikus
                  </p>
                </div>
              </div>

              {/* Status & location footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-blue-400" />
                  Budapest, XI. kerület
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Bolyai Alumnus
                </span>
              </div>
            </div>

            {/* Developer Quote Banner */}
            <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-5 backdrop-blur-sm">
              <p className="text-xs sm:text-sm font-medium italic text-blue-200 leading-relaxed">
                &ldquo;A szoftverfejlesztés számomra a precíz tervezés művészete: a rendszerszintű
                gondolkodás, a tiszta architektúra és az átlátható forráskód találkozása.&rdquo;
              </p>
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-blue-400">
                <span>Figura Márton</span>
                <span className="text-slate-500">BME VIK // Dev</span>
              </div>
            </div>
          </div>

          {/* Narrative & Engineering Principles Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight">
                Mérnöki szemlélet &amp; szakmai háttér
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-300">
                <p>
                  Általános iskolás korom óta határozott, céltudatos lépésekkel építem az
                  informatikai pályámat. A problémák logikai lebontása és a szoftveres
                  alkotás iránti érdeklődésem korán elköteleződéssé vált.
                </p>
                <p>
                  A <strong className="text-white">Bolyai János Műszaki Technikumban</strong> végzett
                  5 éves szoftverfejlesztő és tesztelő képzés adta meg a szilárd szakmai alapokat:
                  az objektumorientált programozást, az adatbázis-architektúrát és a szisztematikus
                  tesztelési megközelítést.
                </p>
                <p>
                  Jelenleg a <strong className="text-white">BME Villamosmérnöki és Informatikai Karán (VIK)</strong> folytatom
                  tanulmányaimat üzemmérnök-informatikus szakon, ahol az egyetemi elméleti bázist
                  valós fejlesztői projektekkel párosítom.
                </p>
              </div>
            </div>

            {/* Engineering Principles Blueprint Box */}
            <div className="rounded-2xl border border-slate-800 bg-[#0c1322]/80 p-6 sm:p-7 backdrop-blur-sm">
              <div className="flex items-center justify-between pb-5 border-b border-slate-800/80 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs text-blue-400">
                  <Terminal className="h-4 w-4" />
                  <span>ENGINEERING_PILLARS.spec</span>
                </div>
                <span className="font-mono text-[11px] text-slate-500">
                  rev: 2026.1 &bull; 4 pillars
                </span>
              </div>

              {/* Asymmetrical stacked list with technical tags */}
              <div className="space-y-4">
                {principles.map((pillar) => (
                  <div
                    key={pillar.index}
                    className="group relative flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-xl border border-slate-800/60 bg-[#090e1a]/80 transition-all hover:border-blue-500/30 hover:bg-[#0b1324]"
                  >
                    <div className="flex items-center justify-center font-mono text-xs font-bold text-blue-400/90 h-7 w-7 rounded bg-blue-950/80 border border-blue-800/60 shrink-0">
                      {pillar.index}
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {pillar.title}
                        </h3>
                        <span className="font-mono text-[10px] text-slate-400 rounded bg-slate-800/80 px-2 py-0.5 border border-slate-700/50">
                          {pillar.tag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
