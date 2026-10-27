const groups = [
  {
    title: "Frontend",
    description: "Reszponzív, komponens-alapú felületek",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    title: "Backend & Adatbázisok",
    description: "API-k és konzisztens adatrétegek",
    items: ["Node.js", "Express", "REST API", "MySQL", "SQL / normalizálás"],
  },
  {
    title: "Eszközök & QA",
    description: "Követhető fejlesztési és tesztelési folyamat",
    items: ["Git / GitHub", "Unit testing", "Hibakeresés", "Pull requestek", "Fetch API"],
  },
];

export default function Skills() {
  return (
    <section id="keszsegek" className="border-t border-[#26313d] bg-[#111820] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm text-[#b99462]">Amit használok</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#f4f1ea] sm:text-4xl">Technológiai készségek</h2>
          <p className="mt-4 text-base leading-7 text-[#b8c0c8]">A tanulmányaim és projektjeim során ezekkel az eszközökkel dolgozom a legtöbbet.</p>
        </div>
        <div className="grid gap-px border border-[#52606c] bg-[#52606c] md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="bg-[#111820] p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-[#f4f1ea]">{group.title}</h3>
              <p className="mt-2 text-sm text-[#8f9aa4]">{group.description}</p>
              <ul className="mt-7 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-t border-[#26313d] pt-3 text-sm text-[#dce1e4]">
                    <span className="h-1.5 w-1.5 bg-[#b99462]" />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
