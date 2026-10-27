import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const timeline = [
  {
    period: "2025 – jelenleg",
    title: "Budapesti Műszaki és Gazdaságtudományi Egyetem",
    subtitle: "Üzemmérnök-informatikus (BProf), VIK",
    category: "Felsőfokú tanulmányok",
    type: "education",
    description: "Gyakorlatorientált képzés szoftvertervezés, algoritmusok, relációs adatbázisok és rendszerarchitektúrák fókuszával.",
  },
  {
    period: "2020 – 2025",
    title: "Bolyai János Műszaki Technikum",
    subtitle: "Szoftverfejlesztő és tesztelő technikus",
    category: "Szakképzés",
    type: "education",
    description: "Objektumorientált programozás, SQL és adatbázis-kezelés, szoftvertesztelés és hibakeresés egy ötéves képzésben.",
  },
  {
    period: "2022 – 2026",
    title: "Munkatapasztalat tanulmányok mellett",
    subtitle: "FT Gumiszerviz, vendéglátás, iLogistic",
    category: "Munkatapasztalat",
    type: "work",
    description: "Többféle munkakörben dolgoztam az egyetem mellett. Megtanultam önállóan dolgozni, tartani a tempót és megbízhatóan teljesíteni.",
  },
];

export default function Trajectory() {
  return (
    <section id="palya" className="border-t border-[#26313d] bg-[#0b1117] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm text-[#b99462]">Honnan jövök</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#f4f1ea] sm:text-4xl">Szakmai pálya & tapasztalat</h2>
          <p className="mt-4 text-base leading-7 text-[#b8c0c8]">Tanulmányok és munkák, amelyek a fejlesztői szemléletemet formálták.</p>
        </div>
        <div className="relative ml-3 border-l border-[#52606c] pl-8 sm:ml-8 sm:pl-10">
          <div className="space-y-10">
            {timeline.map((item, index) => (
              <article key={item.title} className="relative border border-[#52606c] bg-[#111820] p-6 sm:p-7">
                <span className="absolute -left-[43px] top-7 flex h-6 w-6 items-center justify-center border border-[#b99462] bg-[#0b1117] text-[#d8bd91] sm:-left-[53px]">
                  {item.type === "education" ? <GraduationCap className="h-3.5 w-3.5" /> : <Briefcase className="h-3.5 w-3.5" />}
                </span>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#8f9aa4]">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-[#b99462]" />{item.period}</span>
                  <span className="text-[#52606c]">/</span><span>{item.category}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#f4f1ea] sm:text-xl">{item.title}</h3>
                <p className="mt-1 text-sm text-[#d8bd91]">{item.subtitle}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#b8c0c8]">{item.description}</p>
                {index === 0 && <span className="mt-5 inline-block border border-[#718a78] px-2.5 py-1 text-xs text-[#9caf9b]">Aktív</span>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
