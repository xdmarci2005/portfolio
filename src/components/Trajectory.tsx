import {
  GraduationCap,
  Briefcase,
  Calendar,
  GitCommit,
} from "lucide-react";

export default function Trajectory() {
  const timeline = [
    {
      period: "2025 – Jelenleg",
      title: "Budapesti Műszaki és Gazdaságtudományi Egyetem (BME)",
      subtitle: "Üzemmérnök-informatikus (BProf) &bull; Villamosmérnöki és Informatikai Kar (VIK)",
      category: "Felsőfokú mérnökképzés",
      type: "education",
      highlight: true,
      status: "Aktív egyetemi hallgató",
      description:
        "Gyakorlatorientált egyetemi mérnökképzés. A félévek során elsajátított korszerű algoritmuselméleti, szoftverarchitekturális és rendszerszintű tudást valós fejlesztői feladatokban alkalmazom.",
      tags: ["Szoftverarchitektúra", "Algoritmusok", "Mérnöki tervezés", "Rendszerszemlélet"],
    },
    {
      period: "2024 – 2025",
      title: "Noted. Full-Stack Projektfejlesztés",
      subtitle: "Komplex Jegyzetkezelő Rendszer &bull; Csapatmunka",
      category: "Gyakorlati projektmunka",
      type: "project",
      highlight: false,
      status: "Sikeresen bemutatva",
      description:
        "Kétfős csapatban megtervezett és megvalósított full-stack webalkalmazás (React.js, Node.js/Express REST API, MySQL adatbázis). Verziókövetés, agilis mérföldkövek és szoftvertesztelés a technikumi záróvizsgához.",
      tags: ["React.js", "Node.js", "MySQL", "REST API", "Git", "Csapatmunka"],
    },
    {
      period: "2020 – 2025",
      title: "Bolyai János Műszaki Technikum és Kollégium",
      subtitle: "Szoftverfejlesztő és Tesztelő Technikus &bull; 5 éves szakmai képzés",
      category: "Szakmai képesítés",
      type: "education",
      highlight: false,
      status: "Sikeres technikus bizonyítvány",
      description:
        "5 éves intenzív szakmai képzés: objektumorientált programozási paradigmák, relációs adatbázis-kezelés és SQL, valamint szoftvertesztelési metodológiák és hibakeresési eljárások mélyreható elsajátítása.",
      tags: ["OOP", "Relációs Adatbázisok & SQL", "Szoftvertesztelés", "Agilis módszertanok"],
    },
    {
      period: "2022 – 2024",
      title: "Runner / Pincér munkakör",
      subtitle: "T62 Hotel / Lion's Locker / Yamato &bull; Tanulmányok mellett",
      category: "Személyes munkamorál",
      type: "work",
      highlight: false,
      status: "Felsőfokú terhelhetőség",
      description:
        "Pörgős és fegyelmezett vendéglátóipari munkavégzés párhuzamosan az iskolai tanulmányokkal. Kiemelkedő fegyelem, gyors helyzetfelismerés, hatékony problémamegoldás és tiszta kommunikáció váratlan szituációkban.",
      tags: ["Stressztűrés", "Felelősségvállalás", "Ügyfélorientáció", "Csapatmunka"],
    },
    {
      period: "2024",
      title: "Raktározási & Logisztikai feladatok",
      subtitle: "iLogistic Kft. &bull; Rendszerszintű precizitás",
      category: "Folyamatfegyelem",
      type: "work",
      highlight: false,
      status: "Önálló munkavégzés",
      description:
        "Készletkezelési és logisztikai feladatok precíz lebonyolítása, ahol a hiba nélküli pontosság, a pontos adminisztráció és a felelősségteljes önállóság volt a legfontosabb mérce.",
      tags: ["Precizitás", "Rendszerfegyelem", "Önállóság"],
    },
  ];

  return (
    <section id="palya" className="py-24 border-t border-slate-900 bg-[#070b14] relative">
      {/* Anchors for backwards compatibility */}
      <div id="tanulmanyok" className="absolute top-0" />
      <div id="tapasztalat" className="absolute top-1/2" />

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Szakmai pálya &amp; tapasztalat
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Az 5 éves technikumi szoftverfejlesztő alapok, az egyetemi BME VIK mérnöki elmélet
            és a tanulmányok melletti munkavégzés során megszerzett teherbírás szimbiózisa.
          </p>
        </div>

        {/* Chronological Developer Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-transform duration-200 group-hover:scale-110 ${
                  item.highlight
                    ? "border-blue-400 bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "border-slate-700 bg-[#0c1322] text-slate-400"
                }`}
              >
                {item.type === "education" ? (
                  <GraduationCap className="h-3.5 w-3.5" />
                ) : item.type === "project" ? (
                  <GitCommit className="h-3.5 w-3.5 text-blue-400" />
                ) : (
                  <Briefcase className="h-3.5 w-3.5" />
                )}
              </div>

              {/* Timeline Card */}
              <div
                className={`rounded-xl border p-6 sm:p-7 transition-all ${
                  item.highlight
                    ? "border-blue-500/30 bg-[#0c1527] shadow-xl shadow-blue-900/10"
                    : "border-slate-800/80 bg-[#0c1322]/80 hover:border-slate-700 hover:bg-[#0e172a]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono inline-flex items-center gap-1 rounded bg-blue-950/80 border border-blue-800/50 px-2.5 py-0.5 text-xs font-semibold text-blue-300">
                      <Calendar className="h-3 w-3" />
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-mono px-2.5 py-0.5 rounded-full ${
                      item.highlight
                        ? "bg-emerald-950/70 text-emerald-300 border border-emerald-800/50 font-semibold"
                        : "bg-slate-800/60 text-slate-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-blue-400 mt-0.5">
                  <span dangerouslySetInnerHTML={{ __html: item.subtitle }} />
                </p>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] sm:text-xs rounded bg-slate-850 px-2 py-0.5 text-slate-300 border border-slate-750"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
