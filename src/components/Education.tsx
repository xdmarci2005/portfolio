import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      period: "2025 – Jelenleg",
      institution: "Budapesti Műszaki és Gazdaságtudományi Egyetem (BME)",
      faculty: "Villamosmérnöki és Informatikai Kar (VIK)",
      degree: "Üzemmérnök-informatikus (BProf)",
      location: "Budapest",
      description:
        "Gyakorlatorientált felsőfokú mérnökképzés. Az egyetemi félévek során megszerzett korszerű elméleti és rendszerszintű tudást valós szakmai környezetben, éles fejlesztői feladatokban kamatoztatom.",
      skills: ["Szoftverarchitektúra", "Algoritmusok", "Mérnöki tervezés", "Rendszerüzemeltetési alapok"],
      status: "Aktív hallgatói jogviszony",
      highlight: true,
    },
    {
      period: "2020 – 2025",
      institution: "Bolyai János Műszaki Technikum és Kollégium",
      faculty: "Informatika ágazat",
      degree: "Szoftverfejlesztő és Tesztelő Technikus",
      location: "Budapest",
      description:
        "5 éves szakmai képzés, amely során elsajátítottam a programozási alapokat, az objektumorientált gondolkodást, az adatbázis-kezelést, valamint a tesztelési metodológiákat. Itt vált bizonyossá az elkötelezettségem a szoftverfejlesztés iránt.",
      skills: ["Objektumorientált programozás", "Relációs adatbázisok & SQL", "Szoftvertesztelés", "Agilis csapatmunka"],
      status: "Sikeres szakmai záróvizsga és technikus bizonyítvány",
      highlight: false,
    },
  ];

  return (
    <section id="tanulmanyok" className="py-20 border-t border-slate-900 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tanulmányok &amp; szakmai háttér
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            A szilárd elméleti bázis és az 5 éves gyakorlati szoftverfejlesztő képzés szimbiózisa.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 ${
                  edu.highlight
                    ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "border-slate-700 bg-slate-900 text-slate-400"
                }`}
              >
                <GraduationCap className="h-3.5 w-3.5" />
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 transition-colors hover:border-slate-700">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-blue-950/70 border border-blue-800/50 px-2.5 py-0.5 text-xs font-semibold text-blue-300 tabular-nums">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      edu.highlight
                        ? "bg-emerald-950/60 text-emerald-300 border border-emerald-800/40"
                        : "bg-slate-800/60 text-slate-300"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {edu.institution}
                </h3>
                <p className="text-base font-semibold text-blue-400 mt-0.5">
                  {edu.degree} &bull; <span className="text-slate-400 font-normal">{edu.faculty}</span>
                </p>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                  {edu.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {edu.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-800/70 px-2.5 py-1 text-xs font-medium text-slate-300 border border-slate-700/50"
                    >
                      {skill}
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
