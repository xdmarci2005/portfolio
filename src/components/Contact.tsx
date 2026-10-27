"use client";
// avoid-ai-design-ignore-file: I3

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
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
    <section id="kapcsolat" className="border-t border-[#26313d] bg-[#0b1117] py-24">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="mb-3 text-sm text-[#b99462]">Kapcsolat</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#f4f1ea] sm:text-4xl">
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#b8c0c8]">
            Nyitott vagyok junior fejlesztői és szakmai gyakornoki lehetőségekre. Az alábbi űrlapon vagy közvetlen elérhetőségeimen keresztül tudsz elérni.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct contact info card */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-[#52606c] bg-[#111820] p-6 sm:p-8 space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#26313d] pb-3">
                <h3 className="text-lg font-semibold text-[#f4f1ea]">Közvetlen elérhetőség</h3>
                <span className="flex items-center gap-1.5 text-xs text-[#9caf9b]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9caf9b]" />
                  Elérhető
                </span>
              </div>

              {/* Email */}
              <div className="border border-[#52606c] bg-[#0b1117] p-4 transition-colors hover:border-[#b99462]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-[#b99462]" />
                    <div>
                      <p className="text-xs text-[#8f9aa4]">Email cím</p>
                      <a
                        href="mailto:figuramarton2005@gmail.com"
                        className="text-xs font-medium text-[#f4f1ea] transition-colors hover:text-[#d8bd91] sm:text-sm"
                      >
                        figuramarton2005@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("figuramarton2005@gmail.com", "email")}
                    aria-label="Email cím másolása"
                    className="flex h-8 w-8 items-center justify-center border border-[#52606c] text-[#8f9aa4] transition-colors hover:border-[#b99462] hover:text-[#f4f1ea]"
                  >
                    {copiedField === "email" ? (
                      <Check className="h-3.5 w-3.5 text-[#9caf9b]" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="border border-[#52606c] bg-[#0b1117] p-4 transition-colors hover:border-[#b99462]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-[#b99462]" />
                    <div>
                      <p className="text-xs text-[#8f9aa4]">Telefonszám</p>
                      <a
                        href="tel:+36707034644"
                        className="text-xs font-medium text-[#f4f1ea] transition-colors hover:text-[#d8bd91] sm:text-sm"
                      >
                        +36 70 703 4644
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("+36707034644", "phone")}
                    aria-label="Telefonszám másolása"
                    className="flex h-8 w-8 items-center justify-center border border-[#52606c] text-[#8f9aa4] transition-colors hover:border-[#b99462] hover:text-[#f4f1ea]"
                  >
                    {copiedField === "phone" ? (
                      <Check className="h-3.5 w-3.5 text-[#9caf9b]" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="border border-[#52606c] bg-[#0b1117] p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#b99462]" />
                  <div>
                    <p className="text-xs text-[#8f9aa4]">Tartózkodási hely</p>
                    <p className="text-xs font-medium text-[#f4f1ea] sm:text-sm">
                      Budapest (XI. kerület)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Developer Action */}
            <div className="space-y-2 border-t border-[#26313d] pt-4">
              <p className="text-xs text-[#8f9aa4]">
                GitHub profil és forráskódok:
              </p>
              <a
                href="https://github.com/xdmarci2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 border border-[#52606c] bg-[#0b1117] py-2.5 text-xs font-semibold text-[#f4f1ea] transition hover:border-[#b99462] hover:text-[#d8bd91]"
              >
                <GithubIcon className="h-4 w-4" />
                github.com/xdmarci2005
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 border border-[#52606c] bg-[#111820] p-6 sm:p-8">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-[#718a78] bg-[#718a78]/10 text-[#9caf9b]">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#f4f1ea]">Köszönöm az üzenetedet!</h3>
                <p className="mt-2 max-w-md text-xs leading-relaxed text-[#b8c0c8] sm:text-sm">
                  Megkaptam az üzenetedet, és amint lehetséges, felveszem veled a kapcsolatot a megadott e-mail címen.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 border border-[#52606c] px-4 py-2 text-xs font-semibold text-[#f4f1ea] transition hover:border-[#b99462]"
                >
                  Új üzenet küldése
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#f4f1ea]">Üzenetküldés</h3>
                  <p className="mt-1 text-xs text-[#8f9aa4]">
                    Kérdés, projekt vagy pozíció kapcsán töltsd ki az alábbi mezőket.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                      Teljes név <span className="text-[#b99462]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Pl. Kovács Péter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-[#52606c] bg-[#0b1117] px-3.5 py-2 text-xs text-[#f4f1ea] placeholder-[#8f9aa4] transition focus:border-[#b99462] focus:outline-none focus:ring-1 focus:ring-[#b99462] sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                      Email cím <span className="text-[#b99462]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="nev@ceg.hu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[#52606c] bg-[#0b1117] px-3.5 py-2 text-xs text-[#f4f1ea] placeholder-[#8f9aa4] transition focus:border-[#b99462] focus:outline-none focus:ring-1 focus:ring-[#b99462] sm:text-sm"
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
                    className="w-full border border-[#52606c] bg-[#0b1117] px-3.5 py-2 text-xs text-[#f4f1ea] placeholder-[#8f9aa4] transition focus:border-[#b99462] focus:outline-none focus:ring-1 focus:ring-[#b99462] sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                    Üzenet szövege <span className="text-[#b99462]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Írd le a projektet, a nyitott pozíciót vagy a kérdésedet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none border border-[#52606c] bg-[#0b1117] px-3.5 py-2 text-xs text-[#f4f1ea] placeholder-[#8f9aa4] transition focus:border-[#b99462] focus:outline-none focus:ring-1 focus:ring-[#b99462] sm:text-sm"
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
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#b99462] py-2.5 text-xs font-semibold text-[#171b20] shadow-sm transition hover:bg-[#d8bd91] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm"
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
