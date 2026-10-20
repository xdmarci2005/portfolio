"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  CheckCircle2,
  Loader2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "ddf82d00-6b19-4d34-aab6-fad759059aed";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Új üzenet a portfólió oldalról",
          message: formData.message,
          from_name: "Figura Márton Portfólió",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(
          data.message || "Hiba történt az üzenet küldésekor. Kérlek próbáld újra!"
        );
      }
    } catch {
      setErrorMessage(
        "Hálózati hiba történt. Kérlek ellenőrizd az internetkapcsolatot vagy írj közvetlenül e-mailt!"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kapcsolat" className="py-24 border-t border-slate-900 bg-[#070b14] relative">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Lépjünk kapcsolatba
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Nyitott vagyok fejlesztői és gyakornoki megkeresésekre, szakmai együttműködésekre.
            Írj bátran az alábbi űrlapon vagy keress közvetlenül elérhetőségeimen!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct contact info card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-[#0c1322] p-6 sm:p-8 shadow-xl space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white">Közvetlen csatornák</h3>
                <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Elérhető
                </span>
              </div>

              {/* Email */}
              <div className="rounded-xl border border-slate-800 bg-[#080d19] p-4 transition-all hover:border-blue-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-slate-400">Email cím</p>
                      <a
                        href="mailto:figuramarton2005@gmail.com"
                        className="text-xs sm:text-sm font-medium text-white hover:text-blue-400 transition-colors"
                      >
                        figuramarton2005@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("figuramarton2005@gmail.com", "email")}
                    aria-label="Email cím másolása"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {copiedField === "email" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-xl border border-slate-800 bg-[#080d19] p-4 transition-all hover:border-blue-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-slate-400">Telefonszám</p>
                      <a
                        href="tel:+36707034644"
                        className="text-xs sm:text-sm font-medium text-white hover:text-blue-400 transition-colors tabular-nums"
                      >
                        +36 70 703 4644
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("+36707034644", "phone")}
                    aria-label="Telefonszám másolása"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {copiedField === "phone" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="rounded-xl border border-slate-800 bg-[#080d19] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/60 text-slate-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-slate-400">Tartózkodási hely</p>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Budapest, 1119, Etele út 30 (XI. kerület)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Developer Action */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <p className="font-mono text-[11px] text-slate-400">
                GitHub Repositoryk &amp; Forráskód:
              </p>
              <a
                href="https://github.com/xdmarci2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 hover:border-slate-600"
              >
                <GithubIcon className="h-4 w-4" />
                github.com/xdmarci2005
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-[#0c1322]/80 p-6 sm:p-8 backdrop-blur-sm">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Köszönöm az üzenetedet!</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                  Megkaptam az üzenetedet, és amint lehetséges, felveszem veled a kapcsolatot a megadott e-mail címen.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 rounded-lg bg-slate-800 px-4 py-2 font-mono text-xs font-semibold text-white hover:bg-slate-700 transition"
                >
                  Új üzenet küldése &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Közvetlen üzenetküldés</h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Töltsd ki az alábbi űrlapot projektajánlattal, szakmai kérdéssel vagy interjú felkéréssel.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                      Teljes név <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Pl. Kovács Péter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-slate-800 bg-[#070b14] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                      Email cím <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="nev@ceg.hu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-slate-800 bg-[#070b14] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1">
                    Tárgy
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Pl. Junior szoftverfejlesztő pozíció / projektlehetőség"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-slate-800 bg-[#070b14] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                    Üzenet szövege <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Írd le a projektet, a nyitott pozíciót vagy a kérdésedet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-slate-800 bg-[#070b14] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-900/50 bg-red-950/40 p-3 text-xs text-red-300">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-blue-600/30 transition hover:bg-blue-500 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Küldés folyamatban...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Üzenet elküldése
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
