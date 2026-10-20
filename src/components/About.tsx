import { CheckCircle2, Terminal, Code2, Users2, ShieldCheck } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Mérnöki precizitás és logikai gondolkodás",
      description:
        "Nem csupán a működő kódot keresem, hanem az átgondolt architektúrát, a tiszta kódszervezést és a hosszú távon fenntartható megoldásokat.",
      icon: Terminal,
    },
    {
      title: "Szoftvertesztelői szemlélet",
      description:
        "A technikumi szoftverfejlesztő és tesztelő képzés során elsajátított alapok révén a hibamegelőzés és az automatizált tesztelés a munkafolyamatom szerves része.",
      icon: ShieldCheck,
    },
    {
      title: "Nyitottság és gyors tanulás",
      description:
        "Az egyetemi elméleti alapok mellett folyamatosan követem az új keretrendszereket, eszközöket és iparági bevált gyakorlatokat.",
      icon: Code2,
    },
    {
      title: "Megbízható csapatmunka és kommunikáció",
      description:
        "Több fős fejlesztői projektekben (pl. Noted app) és korábbi munkakörnyezetben is bizonyítottam az együttműködési és stressztűrő képességemet.",
      icon: Users2,
    },
  ];

  return (
    <section id="rolam" className="py-20 border-t border-slate-900 bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Szakmai profil &amp; elhivatottság
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
                <p>
                  Általános iskolás korom óta határozott és tudatos céllal építem az
                  informatikai pályámat. A programozás világa és a logikai kihívások
                  már korán magukkal ragadtak.
                </p>
                <p>
                  A Bolyai János Műszaki Technikumban szerzett 5 éves szoftverfejlesztő
                  és tesztelő képzésem adta meg a szilárd szakmai alapokat: az
                  objektumorientált gondolkodást, az adatbázis-tervezést és a tesztelési
                  metodikákat.
                </p>
                <p>
                  Jelenleg a BME Villamosmérnöki és Informatikai Karán
                  (VIK) folytatom tanulmányaimat üzemmérnök-informatikus szakon. Célom,
                  hogy az egyetemi elméleti tudást valós ipari környezetben, éles
                  projekteken kamatoztassam gyakornoki vagy junior fejlesztői pozícióban.
                </p>
              </div>
            </div>

            {/* Quick quote / manifesto box */}
            <div className="mt-8 rounded-xl border border-blue-900/40 bg-blue-950/20 p-5">
              <p className="text-sm font-medium italic text-blue-200">
                &ldquo;A szoftverfejlesztés számomra nemcsak szakma, hanem kreatív
                problémamegoldás, ahol a precíz tervezés és az átlátható kód találkozik.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                Figura Márton
              </p>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
              {values.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 ${
                      index === 0 ? "pb-6" : index === values.length - 1 ? "pt-6" : "py-6"
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
