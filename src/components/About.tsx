import Image from "next/image";
import { MapPin } from "lucide-react";

const principles = [
  ["Egyszerű szerkezet", "A kódot úgy bontom fel, hogy később is gyorsan átlátható és módosítható legyen."],
  ["Tesztelhető működés", "A fontosabb folyamatokat hibás és határértékes esetekkel együtt ellenőrzöm."],
  ["Rendezett adatok", "Az adatmodellt és a lekérdezéseket az integritás és a hosszú távú használhatóság alapján tervezem."],
];

export default function About() {
  return (
    <section id="rolam" className="border-t border-[#26313d] bg-[#0b1117] py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="border border-[#52606c] bg-[#111820] p-5">
            <div className="relative overflow-hidden border border-[#52606c] bg-[#0b1117]">
              <Image src="/images/marton-portrait.jpg" alt="Figura Márton fejlesztő portré" width={420} height={540} className="h-[400px] w-full object-cover object-top grayscale-[20%]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1117] via-[#0b1117]/80 to-transparent p-4 pt-12">
                <h3 className="font-semibold text-[#f4f1ea]">Figura Márton Ferenc</h3>
                <p className="mt-1 text-xs text-[#d8bd91]">BME VIK · üzemmérnök-informatikus</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#26313d] pt-4 text-xs text-[#8f9aa4]">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-[#b99462]" /> Budapest (XI. kerület)</span>
              <span>Bolyai technikus</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="mb-3 text-sm text-[#b99462]">Rólam</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#f4f1ea] sm:text-4xl">Szakmai háttér & szemlélet</h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-[#b8c0c8]">
            <p>A Bolyai János Műszaki Technikumban szereztem szoftverfejlesztő és tesztelő technikus képesítést. Itt tanultam meg az objektumorientált programozás, az adatbázis-kezelés és a tesztelés alapjait.</p>
            <p>Jelenleg a BME Villamosmérnöki és Informatikai Karán tanulok üzemmérnök-informatikus szakon. A projektjeimben a használható felület és a megbízható háttér együtt fontos.</p>
            <p>Szeretem, ha egy rendszerben könnyű megtalálni, mi hol történik. Ezért a feladatokat kisebb, jól követhető részekre bontom, és már fejlesztés közben tesztelem a fontosabb eseteket.</p>
          </div>
          <div className="mt-10 border-t border-[#52606c]">
            {principles.map(([title, summary]) => (
              <div key={title} className="grid gap-2 border-b border-[#26313d] py-5 sm:grid-cols-[190px_1fr] sm:gap-8">
                <h3 className="font-semibold text-[#f4f1ea]">{title}</h3>
                <p className="text-sm leading-6 text-[#8f9aa4]">{summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
