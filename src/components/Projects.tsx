"use client";

import { useState } from "react";
import {
  CheckCircle,
  Layers,
  Database,
  Server,
  Cpu,
  ExternalLink,
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

type ProjectTab = "architecture" | "schema" | "api" | "overview";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("overview");

  return (
    <section id="projektek" className="py-24 border-t border-slate-900 bg-[#070b14] relative">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Kiemelt projektek &amp; referenciák
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Gyakorlati szoftverfejlesztési tapasztalat, valós csapatmunka, és átlátható mérnöki architektúra.
            </p>
          </div>

          <a
            href="https://github.com/xdmarci2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            <span>xdmarci2005 / repositories &rarr;</span>
          </a>
        </div>

        {/* Featured Project Showcase: Noted */}
        <div className="rounded-2xl border border-blue-500/20 bg-[#0c1322] shadow-xl overflow-hidden">
          
          {/* Project Window Header */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-[#080d19] px-6 py-4 gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  Noted. Jegyzetkezelő Rendszer
                  <span className="font-mono text-xs font-normal text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/50">
                    v1.0-release
                  </span>
                </h3>
                <p className="font-mono text-[11px] text-slate-400">
                  Csapat: Figura Márton &amp; Gerencséri Huba &bull; Bolyai Technikum Záróprojekt
                </p>
              </div>
            </div>

            {/* Interactive Inspector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                Áttekintés
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("architecture")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "architecture"
                    ? "bg-blue-600 text-white font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                Architektúra
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("schema")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "schema"
                    ? "bg-blue-600 text-white font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Database className="h-3.5 w-3.5" />
                MySQL Séma
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("api")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "api"
                    ? "bg-blue-600 text-white font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Server className="h-3.5 w-3.5" />
                REST API
              </button>
            </div>
          </div>

          {/* Interactive Tab Body */}
          <div className="p-6 sm:p-8">
            
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    A <strong className="text-white">Noted.</strong> egy teljes körű, modern full-stack jegyzet- és
                    feladatkezelő webalkalmazás, amelyet a Bolyai János Műszaki Technikumban záró szakmai
                    projektmunkaként készítettünk el kétfős csapatban.
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    A rendszer tervezésekor kiemelt szempont volt a reszponzív, azonnali visszajelzést adó
                    React frontend, a RESTful elveket követő Node.js/Express kiszolgáló réteg, valamint
                    a normalizált relációs MySQL adatbázis hatékony összekapcsolása.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400">
                      Mérnöki fókuszpontok a megvalósítás során:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                        React komponens-architektúra és gyors állapotkezelés
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                        Node.js &amp; Express RESTful API architektúra
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                        Relációs adatmodell MySQL-ben, integritási szabályokkal
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                        Verziókövetett agilis csapatmunka GitHubon
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href="https://github.com/xdmarci2005/Noted_Projekt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-blue-500 shadow-md shadow-blue-600/30"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Forráskód a GitHubon
                      <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveTab("architecture")}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/90 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-slate-600 transition"
                    >
                      <Layers className="h-4 w-4 text-blue-400" />
                      Architektúra megtekintése
                    </button>
                  </div>
                </div>

                {/* Right Specs Card */}
                <div className="lg:col-span-5 rounded-xl border border-slate-800 bg-[#090e1a] p-6 space-y-5">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                      Technológiai stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["React.js", "Node.js", "Express", "MySQL", "REST API", "Git", "Szoftvertesztelés"].map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs rounded bg-slate-800/80 px-2.5 py-1 text-slate-200 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-4 space-y-2 text-xs text-slate-300">
                    <p className="font-semibold text-white">Szakmai tapasztalat a projektből:</p>
                    <p className="leading-relaxed text-slate-400">
                      A projektfejlesztés során a gyakorlatban alkalmaztuk a szoftvertervezési mintákat,
                      az agilis mérföldköveket, a hibabejelentések szisztematikus kezelését és a
                      műszaki dokumentációt.
                    </p>
                  </div>

                  <div className="border-t border-slate-800 pt-4 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Vizsgaeredmény:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Sikeres záróvizsga-védés
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-mono text-blue-400">
                    {"// 3-Tier Full-Stack Rendszerarchitektúra"}
                  </h4>
                  <span className="text-xs font-mono text-slate-400">React &bull; Node &bull; MySQL</span>
                </div>

                {/* Architecture Visual Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Tier 1: Client */}
                  <div className="rounded-xl border border-blue-500/30 bg-[#090f1e] p-5 space-y-3">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-blue-400 font-bold">1. Prezentációs Réteg</span>
                      <Cpu className="h-4 w-4 text-blue-400" />
                    </div>
                    <p className="text-sm font-semibold text-white">React.js Single Page App</p>
                    <ul className="text-xs text-slate-400 space-y-1.5 font-mono">
                      <li>&bull; Moduláris komponensek</li>
                      <li>&bull; Kliensoldali szűrés &amp; state</li>
                      <li>&bull; Reszponzív felülettervezés</li>
                      <li>&bull; Aszinkron REST hívások</li>
                    </ul>
                  </div>

                  {/* Tier 2: API */}
                  <div className="rounded-xl border border-blue-500/30 bg-[#090f1e] p-5 space-y-3">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-cyan-400 font-bold">2. Alkalmazás Logika</span>
                      <Server className="h-4 w-4 text-cyan-400" />
                    </div>
                    <p className="text-sm font-semibold text-white">Node.js + Express API</p>
                    <ul className="text-xs text-slate-400 space-y-1.5 font-mono">
                      <li>&bull; RESTful route controllerek</li>
                      <li>&bull; Input validáció &amp; tisztítás</li>
                      <li>&bull; Hibakezelő middleware-ek</li>
                      <li>&bull; SQL kapcsolatkezelés</li>
                    </ul>
                  </div>

                  {/* Tier 3: Database */}
                  <div className="rounded-xl border border-blue-500/30 bg-[#090f1e] p-5 space-y-3">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-emerald-400 font-bold">3. Adatperzisztencia</span>
                      <Database className="h-4 w-4 text-emerald-400" />
                    </div>
                    <p className="text-sm font-semibold text-white">MySQL Relációs Adatbázis</p>
                    <ul className="text-xs text-slate-400 space-y-1.5 font-mono">
                      <li>&bull; 3NF Normalizált séma</li>
                      <li>&bull; Idegen kulcsok (FK constraints)</li>
                      <li>&bull; Lekérdezés-optimalizálás</li>
                      <li>&bull; Adatintegritás megőrzése</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-[#080d19] border border-slate-800 p-4 text-xs text-slate-300 font-mono flex items-center justify-between">
                  <span>Adatáramlás: Kliens (JSON) &harr; REST API Endpoints &harr; MySQL Driver &amp; Connection Pool</span>
                  <a
                    href="https://github.com/xdmarci2005/Noted_Projekt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2 flex items-center gap-1"
                  >
                    Repo megnyitása &rarr;
                  </a>
                </div>
              </div>
            )}

            {activeTab === "schema" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-blue-400">{"// MySQL Relational Schema Definition"}</span>
                  <span>schema.sql</span>
                </div>

                <div className="rounded-xl bg-[#070b14] border border-slate-800 p-4 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
                  <p className="text-slate-500">{"-- Noted alkalmazás relációs adatbázis sémájának részlete"}</p>
                  <p className="text-blue-400">CREATE TABLE <span className="text-emerald-400">users</span> (</p>
                  <p className="pl-4">id INT AUTO_INCREMENT PRIMARY KEY,</p>
                  <p className="pl-4">username VARCHAR(50) NOT NULL UNIQUE,</p>
                  <p className="pl-4">email VARCHAR(100) NOT NULL UNIQUE,</p>
                  <p className="pl-4">password_hash VARCHAR(255) NOT NULL,</p>
                  <p className="pl-4">created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP</p>
                  <p>);</p>
                  <br />
                  <p className="text-blue-400">CREATE TABLE <span className="text-emerald-400">notes</span> (</p>
                  <p className="pl-4">id INT AUTO_INCREMENT PRIMARY KEY,</p>
                  <p className="pl-4">user_id INT NOT NULL,</p>
                  <p className="pl-4">title VARCHAR(255) NOT NULL,</p>
                  <p className="pl-4">content TEXT,</p>
                  <p className="pl-4">category_id INT,</p>
                  <p className="pl-4">is_pinned BOOLEAN DEFAULT FALSE,</p>
                  <p className="pl-4">updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,</p>
                  <p className="pl-4 text-cyan-300">FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE</p>
                  <p>);</p>
                </div>
              </div>
            )}

            {activeTab === "api" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-blue-400">{"// REST API Végpont specifikáció"}</span>
                  <span>Express.js Controller Routes</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-lg border border-slate-800 bg-[#090f1e] space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                        GET
                      </span>
                      <span className="text-white">/api/notes</span>
                    </div>
                    <p className="text-slate-400 text-[11px] pt-1">
                      Az autentikált felhasználó jegyzeteinek lekérdezése rendezéssel és szűréssel.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border border-slate-800 bg-[#090f1e] space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800 font-bold">
                        POST
                      </span>
                      <span className="text-white">/api/notes</span>
                    </div>
                    <p className="text-slate-400 text-[11px] pt-1">
                      Új jegyzet rögzítése, bemeneti mezők validálása és mentése MySQL-be.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border border-slate-800 bg-[#090f1e] space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold">
                        PUT
                      </span>
                      <span className="text-white">/api/notes/:id</span>
                    </div>
                    <p className="text-slate-400 text-[11px] pt-1">
                      Meglévő jegyzet címének és törzsének aszinkron módosítása.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border border-slate-800 bg-[#090f1e] space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-red-950 text-red-400 border border-red-800 font-bold">
                        DELETE
                      </span>
                      <span className="text-white">/api/notes/:id</span>
                    </div>
                    <p className="text-slate-400 text-[11px] pt-1">
                      Jegyzet biztonságos törlése jogosultság-ellenőrzéssel.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
