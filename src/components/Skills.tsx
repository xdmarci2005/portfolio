import { Code, Database, Bug, GitBranch, Cpu, HeartHandshake, CheckCircle } from "lucide-react";

export default function Skills() {
  const technicalCategories = [
    {
      category: "Programozás & Backend",
      icon: Code,
      items: [
        { name: "Node.js & Express", note: "Szerveroldali logika és REST API végpontok építése" },
        { name: "JavaScript & TypeScript", note: "Modern aszinkron webes és szerveroldali programozás" },
        { name: "Python / C++ / C# alapok", note: "BME VIK algoritmusok, technikum és rendszerszemlélet" },
      ],
    },
    {
      category: "Frontend & Webfejlesztés",
      icon: Cpu,
      items: [
        { name: "React.js & Next.js", note: "Komponens architektúra, reszponzív UI és App Router" },
        { name: "Tailwind CSS & Modern CSS", note: "Strukturált formázás, akadálymentesség" },
        { name: "HTML5 & Web API-k", note: "Szemantikus web, aszinkron kliens-szerver kommunikáció" },
      ],
    },
    {
      category: "Adatbázisok & Rendszerek",
      icon: Database,
      items: [
        { name: "MySQL & Relációs Adatbázisok", note: "Sématervezés, normalizálás, relációk és lekérdezések" },
        { name: "Adatperzisztencia & Biztonság", note: "Megbízható adattárolás és lekérdezés-optimalizálás" },
      ],
    },
    {
      category: "Minőségbiztosítás & Eszközök",
      icon: Bug,
      items: [
        { name: "Szoftvertesztelés", note: "Teszteléselmélet, egységtesztek, hibakeresés" },
        { name: "Git & GitHub", note: "Verziókezelés, csapatmunka, ágkezelési stratégiák" },
      ],
    },
  ];

  const softSkills = [
    {
      name: "Precizitás & pontosság",
      desc: "Kritikus figyelem a részletekre a kódminőségben, dokumentációban és tesztelésben.",
    },
    {
      name: "Kiváló problémamegoldó képesség",
      desc: "Összetett problémák felbontása átlátható, kezelhető logikai lépésekre.",
    },
    {
      name: "Pozitív, proaktív hozzáállás",
      desc: "Nyitottság a szakmai visszajelzésekre és folyamatos önképzés az új technológiákban.",
    },
    {
      name: "Hatékony csoportmunka",
      desc: "Tiszta kommunikáció fejlesztői csapattagokkal és nem-technikai partnerekkel egyaránt.",
    },
    {
      name: "Nagyfokú terhelhetőség",
      desc: "Határidők pontos betartása, kiegyensúlyozott munka tanulmányok mellett is.",
    },
  ];

  return (
    <section id="keszsegek" className="py-20 border-t border-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Készségek &amp; szakmai kompetenciák
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Technikai szaktudás és személyes erősségek, amelyek megalapozzák a megbízható fejlesztői munkát.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {technicalCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cat.category}</h3>
                </div>

                <ul className="space-y-3.5">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex flex-col">
                      <span className="text-sm font-medium text-slate-200">
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-400 mt-0.5">
                        {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <HeartHandshake className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Személyes kompetenciák</h3>
              <p className="text-xs text-slate-400">
                Az önéletrajzban igazolt emberi és munkamorális erősségek
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {softSkills.map((skill, sIdx) => (
              <div key={sIdx} className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
