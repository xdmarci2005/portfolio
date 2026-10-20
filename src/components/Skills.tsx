"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Search,
  Filter,
} from "lucide-react";

type CategoryFilter = "all" | "backend" | "frontend" | "database" | "qa" | "soft";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allSkills = [
    // Backend
    {
      category: "backend",
      categoryName: "Backend & Programozás",
      name: "Node.js & Express",
      application: "Szerveroldali logika, Express routing, REST API végpontok és middleware-ek.",
      tags: ["REST", "Async/Await", "JSON API"],
    },
    {
      category: "backend",
      categoryName: "Backend & Programozás",
      name: "JavaScript & TypeScript",
      application: "Típusbiztos aszinkron logika, ES6+ szintaxis, hibakezelés és funkcionális programozás.",
      tags: ["ES6+", "Types", "Promise / Async"],
    },
    {
      category: "backend",
      categoryName: "Backend & Programozás",
      name: "Python, C++, C# alapok",
      application: "BME VIK algoritmusok és adatszerkezetek, objektumorientált rendszerszemlélet.",
      tags: ["OOP", "Algoritmusok", "BME VIK"],
    },
    // Frontend
    {
      category: "frontend",
      categoryName: "Frontend & Webfejlesztés",
      name: "React.js & Next.js",
      application: "Komponens-architektúra, kliens- és szerveroldali állapotkezelés, App Router.",
      tags: ["SPA", "Hooks", "App Router"],
    },
    {
      category: "frontend",
      categoryName: "Frontend & Webfejlesztés",
      name: "Tailwind CSS & Reszponzív UI",
      application: "Modern utility-first stílus, mobil-első reszponzivitás, tiszta elrendezések.",
      tags: ["Mobile-first", "Flexbox/Grid", "Tailwind"],
    },
    {
      category: "frontend",
      categoryName: "Frontend & Webfejlesztés",
      name: "HTML5, CSS3 & Web API-k",
      application: "Szemantikus felépítés, akadálymentességi irányelvek (a11y), DOM manipuláció.",
      tags: ["Semantics", "Fetch API", "Accessibility"],
    },
    // Database
    {
      category: "database",
      categoryName: "Adatbázisok & Adatkezelés",
      name: "MySQL & Relációs Adatbázisok",
      application: "Sématervezés, 3NF normalizálás, táblakapcsolatok, idegen kulcsok és tranzakciók.",
      tags: ["3NF Normalizálás", "Foreign Keys", "SQL Queries"],
    },
    {
      category: "database",
      categoryName: "Adatbázisok & Adatkezelés",
      name: "Adatintegritás & Biztonság",
      application: "Adatkonzisztencia megőrzése, SQL injekció elleni védelem paraméterezett lekérdezésekkel.",
      tags: ["Integritás", "Prepared Statements"],
    },
    // QA & Tools
    {
      category: "qa",
      categoryName: "Minőségbiztosítás & Eszközök",
      name: "Szoftvertesztelés (QA)",
      application: "Technikumi 5 éves képzés során elsajátított egységtesztelés, határérték-analízis, hibakeresés.",
      tags: ["Egységtesztek", "Határérték-elemzés", "Debug"],
    },
    {
      category: "qa",
      categoryName: "Minőségbiztosítás & Eszközök",
      name: "Git & GitHub",
      application: "Verziókezelés, ágkezelési stratégiák (GitFlow), commit fegyelem és csapatmunka.",
      tags: ["Git Flow", "Pull Request", "Verziókövetés"],
    },
    // Soft Skills
    {
      category: "soft",
      categoryName: "Munkamorál & Emberi készségek",
      name: "Precizitás és figyelem a részletekre",
      application: "Kritikus igényesség a forráskódban, tesztesetekben és a műszaki dokumentációban.",
      tags: ["Minőségigény", "Tiszta kód"],
    },
    {
      category: "soft",
      categoryName: "Munkamorál & Emberi készségek",
      name: "Nagyfokú stressztűrés és terhelhetőség",
      application: "Tanulmányok melletti folyamatos fizikai és vendéglátóipari munkavégzés által bizonyított stamina.",
      tags: ["Terhelhetőség", "Kitartás"],
    },
    {
      category: "soft",
      categoryName: "Munkamorál & Emberi készségek",
      name: "Proaktív hozzáállás & Csapatmunka",
      application: "Nyílt, tiszta kommunikáció fejlesztőtársakkal és határidők pontos betartása.",
      tags: ["Csapatmunka", "Megbízhatóság"],
    },
  ];

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory =
      activeCategory === "all" || skill.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.application.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="keszsegek" className="py-24 border-t border-slate-900 bg-[#070b14] relative">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technológiai eszköztár &amp; kompetenciák
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Mérnöki szaktudás és bizonyított készségek, gyakorlati kontextussal és technológiai mélységgel.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Keresés technológiára (pl. React, MySQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-800 bg-[#0c1322] pl-9 pr-3.5 py-2 text-xs font-mono text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-2 border-b border-slate-800/80">
          <span className="font-mono text-xs text-slate-500 flex items-center gap-1 mr-2">
            <Filter className="h-3.5 w-3.5" />
            Szűrés:
          </span>
          {[
            { id: "all", label: "Összes kompetencia" },
            { id: "backend", label: "Backend & Rendszerek" },
            { id: "frontend", label: "Frontend & UI" },
            { id: "database", label: "Adatbázisok & SQL" },
            { id: "qa", label: "QA, Tesztelés & Git" },
            { id: "soft", label: "Munkamorál & Emberi tényezők" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as CategoryFilter)}
              className={`rounded-lg px-3 py-1.5 text-xs font-mono transition-colors ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white font-semibold shadow-sm"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-xl border border-slate-800/80 bg-[#0c1322]/80 p-5 transition-all hover:border-blue-500/30 hover:bg-[#0e1628]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400">
                    {skill.categoryName}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400/80 shrink-0" />
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {skill.application}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] rounded bg-slate-850 px-2 py-0.5 text-slate-300 border border-slate-750"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="py-12 text-center text-slate-400 font-mono text-sm">
            Nincs találat a megadott keresési feltételre (&quot;{searchQuery}&quot;).
          </div>
        )}

      </div>
    </section>
  );
}
