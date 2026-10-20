"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Terminal,
  FileCode2,
  User,
  CheckCircle2,
  GitCommit,
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

type HeroTab = "profile" | "terminal" | "portrait";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<HeroTab>("profile");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "marton@bme-workstation:~$ ./evaluate-engineer.sh",
    "✔ Status: 5 years software dev & testing diploma (Bolyai)",
    "✔ Active: BME VIK Computer Engineering (BProf)",
    "✔ Core Stack: TypeScript, React/Next.js, Node.js, MySQL",
    "✔ Ready for technical interview & engineering challenges.",
  ]);

  const runCommand = (cmd: string) => {
    let response: string[] = [];
    switch (cmd) {
      case "test:run":
        response = [
          "marton@bme:~$ npm test -- --coverage",
          " PASS  src/architecture.test.ts",
          " PASS  src/database/mysql-schema.test.ts",
          " PASS  src/api/noted-endpoints.test.ts",
          "Test Suites: 3 passed, 3 total | Coverage: 98.4%",
        ];
        break;
      case "git:log":
        response = [
          "marton@bme:~$ git log --oneline -n 3",
          "3f9b2a1 (HEAD -> main) feat(noted): optimize mysql relational indexing",
          "e84c10d refactor(api): express middleware auth & input validation",
          "a017f8b init: bolyai software dev technician thesis complete",
        ];
        break;
      case "stack:list":
        response = [
          "marton@bme:~$ cat engineering_stack.json",
          "Frontend: React.js, Next.js, Tailwind CSS, TypeScript",
          "Backend:  Node.js, Express, REST APIs, System Design",
          "Database: MySQL, Relational Schema Design, Normalization",
          "Testing:  Unit testing, Bug Tracking, Git Branching",
        ];
        break;
      case "contact:ping":
        response = [
          "marton@bme:~$ ping figuramarton2005@gmail.com",
          "64 bytes from mail.server: icmp_seq=1 ttl=58 time=12.4 ms",
          "Direct Phone: +36 70 703 4644",
          "Location: Budapest, XI. kerület (Etele út)",
        ];
        break;
    }
    setTerminalOutput(response);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 bg-dev-grid">
      {/* Top ambient lighting tailored for blue engineering world */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-[60rem] rounded-full bg-blue-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Main Info Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 text-xs font-mono text-blue-300 mb-6 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>sys.status = &quot;OPEN_FOR_ROLES&quot;</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Junior &amp; Gyakornok</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
              Figura Márton
            </h1>

            <p className="mt-3 text-lg font-medium text-blue-400 sm:text-xl">
              Full-Stack Szoftverfejlesztő &amp; BME VIK Hallgató
            </p>

            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
              5 év technikumi szoftverfejlesztői és tesztelői képzésre építve jelenleg a{" "}
              <strong className="text-white font-semibold">BME VIK üzemmérnök-informatikus</strong> szakán
              mélyítem rendszerszemléletű tudásomat. Célom megbízható, tiszta architektúrájú
              webes és backend megoldások építése valós ipari projekteken.
            </p>

            {/* Structured Telemetry Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0c1322] px-3 py-1.5 font-mono">
                <MapPin className="h-3.5 w-3.5 text-blue-400" />
                Budapest (XI. kerület)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0c1322] px-3 py-1.5 font-mono">
                <GitCommit className="h-3.5 w-3.5 text-emerald-400" />
                Bolyai Technikus Bizonyítvány
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0c1322] px-3 py-1.5 font-mono">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                Noted. Full-Stack Referencia
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#kapcsolat"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Kapcsolatfelvétel
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#projektek"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600 active:scale-[0.98]"
              >
                Referencia: Noted App
              </Link>

              <a
                href="https://github.com/xdmarci2005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[#0a0f1d] px-3.5 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Profil megtekintése"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>

          {/* Developer Workstation Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-xl border border-blue-500/20 bg-[#0c1322]/90 shadow-2xl shadow-black/80 backdrop-blur-md overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-[#080d1a] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    marton-workstation: ~
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("profile")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === "profile"
                        ? "bg-blue-600/30 text-blue-300 border border-blue-500/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <FileCode2 className="h-3 w-3" />
                    profile.ts
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("terminal")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === "terminal"
                        ? "bg-blue-600/30 text-blue-300 border border-blue-500/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Terminal className="h-3 w-3" />
                    shell.sh
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("portrait")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === "portrait"
                        ? "bg-blue-600/30 text-blue-300 border border-blue-500/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <User className="h-3 w-3" />
                    portre.jpg
                  </button>
                </div>
              </div>

              {/* Tab Contents */}
              <div className="p-5 min-h-[360px] flex flex-col justify-between">
                
                {activeTab === "profile" && (
                  <div className="space-y-2 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                    <p className="text-slate-500">{"// TypeScript Developer Profile Definition"}</p>
                    <p>
                      <span className="text-blue-400">const</span>{" "}
                      <span className="text-emerald-400">softwareEngineer</span> = &#123;
                    </p>
                    <div className="pl-4 space-y-1">
                      <p>
                        <span className="text-slate-400">name:</span>{" "}
                        <span className="text-cyan-300">&quot;Figura Márton Ferenc&quot;</span>,
                      </p>
                      <p>
                        <span className="text-slate-400">primaryFocus:</span>{" "}
                        <span className="text-cyan-300">&quot;Full-Stack &amp; Rendszerarchitektúra&quot;</span>,
                      </p>
                      <p>
                        <span className="text-slate-400">education:</span> &#123;
                      </p>
                      <p className="pl-4 text-slate-300">
                        university: <span className="text-cyan-300">&quot;BME VIK (BProf / 2025–Jelenleg)&quot;</span>,
                      </p>
                      <p className="pl-4 text-slate-300">
                        technician: <span className="text-cyan-300">&quot;Bolyai (Szoftverfejlesztő &amp; Tesztelő)&quot;</span>
                      </p>
                      <p>&#125;,</p>
                      <p>
                        <span className="text-slate-400">techStack:</span> [
                      </p>
                      <p className="pl-4 text-blue-300">
                        &quot;TypeScript&quot;, &quot;React.js&quot;, &quot;Next.js&quot;, &quot;Node.js&quot;, &quot;MySQL&quot;, &quot;REST APIs&quot;
                      </p>
                      <p>],</p>
                      <p>
                        <span className="text-slate-400">qualityMindset:</span>{" "}
                        <span className="text-emerald-400">&quot;Tesztvezérelt szemlélet &amp; tiszta kód&quot;</span>
                      </p>
                    </div>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === "terminal" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5 pb-2 border-b border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 self-center mr-1">
                        Kattints a futtatáshoz:
                      </span>
                      <button
                        type="button"
                        onClick={() => runCommand("test:run")}
                        className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[11px] text-blue-300 hover:bg-blue-600 hover:text-white transition"
                      >
                        $ test:run
                      </button>
                      <button
                        type="button"
                        onClick={() => runCommand("stack:list")}
                        className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[11px] text-emerald-300 hover:bg-emerald-600 hover:text-white transition"
                      >
                        $ stack:list
                      </button>
                      <button
                        type="button"
                        onClick={() => runCommand("git:log")}
                        className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[11px] text-amber-300 hover:bg-amber-600 hover:text-white transition"
                      >
                        $ git:log
                      </button>
                      <button
                        type="button"
                        onClick={() => runCommand("contact:ping")}
                        className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[11px] text-cyan-300 hover:bg-cyan-600 hover:text-white transition"
                      >
                        $ ping
                      </button>
                    </div>

                    <div className="rounded-lg bg-[#070b14] border border-slate-850 p-3 font-mono text-xs text-slate-300 space-y-1.5 min-h-[200px]">
                      {terminalOutput.map((line, i) => (
                        <p
                          key={i}
                          className={`${
                            line.startsWith("marton@")
                              ? "text-blue-400 font-bold"
                              : line.includes("PASS") || line.includes("✔")
                              ? "text-emerald-400"
                              : "text-slate-300"
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "portrait" && (
                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-950 shrink-0">
                      <Image
                        src="/images/marton-portrait.jpg"
                        alt="Figura Márton fejlesztő portréfotó"
                        width={180}
                        height={230}
                        priority
                        className="h-[210px] w-[170px] object-cover object-top"
                      />
                      <div className="absolute top-2 left-2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400 border border-emerald-500/30">
                        REC // LIVE
                      </div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <p className="font-bold text-white text-sm">Figura Márton Ferenc</p>
                      <p className="font-mono text-blue-400">Szoftverfejlesztő &amp; BME VIK</p>
                      <div className="space-y-1 pt-1 font-mono text-[11px] text-slate-400">
                        <p>&bull; Képzés: BME VIK Üzemmérnök-infó</p>
                        <p>&bull; Szakma: Szoftverfejlesztő &amp; Tesztelő</p>
                        <p>&bull; Budapest, XI. kerület (Etele út)</p>
                      </div>
                      <div className="pt-2">
                        <Link
                          href="#kapcsolat"
                          className="inline-flex items-center gap-1 rounded bg-blue-600 px-3 py-1.5 font-semibold text-white text-xs hover:bg-blue-500 transition"
                        >
                          Elérhetőség megtekintése
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Telemetry Strip */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    NODE v22 // READY
                  </span>
                  <span>Budapest, HU &bull; UTC+1</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
