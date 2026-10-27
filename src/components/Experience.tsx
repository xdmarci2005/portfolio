import { Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Szoftverfejlesztő & Projektmunkatárs",
      company: "Technikumi Projektmunka (Noted App)",
      period: "2024 – 2025",
      type: "Szakmai fejlesztés",
      description:
        "Kétfős csapatban fejlesztett komplex jegyzetkezelő alkalmazás. Rendszertervezés, moduláris felépítés, Git verziókövetés és szoftvertesztelés a technikumi záróvizsgához.",
      takeaway: "Tapasztalat: Csapatmunka, kódátnézés, agilis fejlesztési folyamatok.",
    },
    {
      role: "Gumiszerelő / Vendéglátás / Raktározás",
      company: "FT Gumiszerviz &bull; Vendéglátás &bull; iLogistic",
      period: "2022 – 2026",
      type: "Tanulmányok melletti munkavégzés",
      description:
        "Tanulmányaim mellett folyamatosan dolgoztam: gumiszerelőként (FT Gumiszerviz), a vendéglátásban és raktári logisztikában.",
      takeaway: "Tapasztalat: Munkafegyelem, jó terhelhetőség, önállóság és megbízhatóság.",
    },
  ];

  return (
    <section id="tapasztalat" className="py-20 border-t border-slate-900 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Munkatapasztalat
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Tanulmányok melletti munkavégzés és gyakorlati tapasztalatok.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 transition-colors hover:border-slate-700"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 rounded-md bg-blue-950/70 border border-blue-800/40 px-2.5 py-0.5 text-xs font-semibold text-blue-300 tabular-nums">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </span>
                  <span className="text-xs text-slate-400">{exp.type}</span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-blue-400 mt-0.5">
                  {exp.company}
                </p>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                  {exp.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Tanulság: </span>
                {exp.takeaway}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
