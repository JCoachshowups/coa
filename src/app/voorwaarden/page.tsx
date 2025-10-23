export default function Voorwaarden() {
  return (
    <main className="min-h-dvh bg-white">
      {/* TOP GRADIENT HEADER */}
      <header className="py-12 md:py-20 bg-gradient-to-b from-emerald-200 to-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-semibold text-[#737373]">Algemene voorwaarden</h1>
        </div>
      </header>
      
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-semibold text-[#737373]">Inleiding</h2>
          <p className="mt-4 text-[#737373]">
            Deze voorwaarden zijn van toepassing op de dienstverlening van Coach ShowUps.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[#737373]">Definities</h2>
          <ul className="mt-2 list-disc pl-5 text-[#737373] space-y-1 text-sm">
            <li>QSU: Qualified Show‑Up (juiste doelgroep, intake‑score ≥ 6, verschijnt op call)</li>
            <li>PPM: Pay‑per‑Meeting (betaling per QSU)</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-[#737373]">Diensten</h2>
          <ul className="mt-2 list-disc pl-5 text-[#737373] space-y-1 text-sm">
            <li>Setup (eenmalig): ICP & messaging, inbox & tracking, intake‑scoring & routing</li>
            <li>Campagnes: persoonlijke outreach (e‑mail/DM) + intake filtering</li>
            <li>Rapportage: wekelijkse KPI’s en optimalisatie</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-[#737373]">Vergoeding</h2>
          <ul className="mt-2 list-disc pl-5 text-[#737373] space-y-1 text-sm">
            <li>Setup: €300 (eenmalig)</li>
            <li>Bundel: 10 QSU — €1.500, geldig 21 dagen</li>
            <li>No‑show: 1x gratis herplanning, daarna 0.5 credit</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-[#737373]">Verantwoordelijkheden</h2>
          <ul className="mt-2 list-disc pl-5 text-[#737373] space-y-1 text-sm">
            <li>Klant levert tijdige feedback, toegang en agenda‑beschikbaarheid</li>
            <li>Coach ShowUps voert uit op best effort met transparante rapportage</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-[#737373]">Beëindiging</h2>
          <p className="mt-2 text-[#737373] text-sm">Beide partijen kunnen samenwerking schriftelijk beëindigen. Reeds geleverde diensten worden afgerekend.</p>

          <h2 className="mt-8 text-xl font-semibold text-[#737373]">Contact</h2>
          <p className="mt-2 text-[#737373] text-sm">Vragen? Mail <a className="underline" href="mailto:joey@coachshowups.com">joey@coachshowups.com</a>.</p>
        </div>
      </section>
    </main>
  );
}
