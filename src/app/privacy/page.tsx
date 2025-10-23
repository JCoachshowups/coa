export default function Privacy() {
  return (
    <main className="min-h-dvh bg-white">
      {/* TOP GRADIENT HEADER */}
      <header className="py-12 md:py-20 bg-gradient-to-b from-emerald-200 to-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-semibold text-[#737373]">Privacyverklaring</h1>
        </div>
      </header>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-semibold text-[#737373]">Inleiding</h2>
          <p className="mt-4 text-[#737373]">
            Wij respecteren jouw privacy. Deze pagina legt uit welke gegevens wij verwerken, waarom, en hoe lang.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[#737373]">Welke gegevens</h2>
          <ul className="mt-2 list-disc pl-5 text-[#737373] space-y-1 text-sm">
            <li>Contactgegevens die je invult in de intake (naam, e‑mail, socials)</li>
            <li>Campagneresultaten (replies, afspraken, show‑ups)</li>
            <li>Technische gegevens (logs, analytics)</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-[#737373]">Doeleinden</h2>
          <ul className="mt-2 list-disc pl-5 text-[#737373] space-y-1 text-sm">
            <li>Het uitvoeren van onze dienstverlening (PPM, intake‑scoring, afspraken)</li>
            <li>Verbetering van campagnes en rapportage</li>
            <li>Wettelijke bewaarplichten (facturatie)</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-[#737373]">Bewaartermijn</h2>
          <p className="mt-2 text-[#737373] text-sm">Wij bewaren gegevens niet langer dan noodzakelijk en hanteren redelijke termijnen.</p>

          <h2 className="mt-8 text-xl font-semibold text-[#737373]">Verwerkers</h2>
          <p className="mt-2 text-[#737373] text-sm">
            Wij kunnen gebruikmaken van verwerkers voor hosting, analytics en communicatie. Met hen sluiten we verwerkersovereenkomsten.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[#737373]">Rechten</h2>
          <p className="mt-2 text-[#737373] text-sm">Je hebt recht op inzage, correctie en verwijdering. Mail ons op <a className="underline" href="mailto:joey@coachshowups.com">joey@coachshowups.com</a>.</p>
        </div>
      </section>
    </main>
  );
}
