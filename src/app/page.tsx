import Link from "next/link";

const TALLY = "https://tally.so/r/mKdr2V"; // Coaches starten hier met intake

export default function Home() {
  return (
    <main className="min-h-dvh bg-white hover-cards">
      {/* NAVBAR staat nu globaal in src/app/layout.tsx */}

      {/* HERO (zachte gradient + badges) */}
      <header className="py-12 md:py-20 bg-gradient-to-b from-emerald-200 to-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#737373]">
                Wij boeken 10–15 gekwalificeerde show‑up calls in 2–3 weken
                <span className="block text-emerald-500">voor fitness coaches (zonder ads)</span>
              </h1>
              <p className="mt-3 max-w-2xl text-[#737373]">
                Pay‑per‑Meeting + intake‑scoring. NL/BE. Lage spam, hoge relevantie. Jij focust op sales; wij op kwalitatieve afspraken.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href={TALLY} data-clarity="cta-intake-hero" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-5 py-3 font-medium text-white bg-emerald-500 hover:opacity-90">
                  Start intake (30–45s)
                </Link>
              </div>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Pay‑per‑Meeting",
                  "Intake score ≥ 6",
                  "NL/BE focus",
                  "Geen ads, wel 1‑op‑1",
                ].map((b) => (
                  <span key={b} className="text-xs md:text-sm text-[#737373] border border-slate-200 rounded-full px-3 py-1 bg-white">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Korte bullets rechts */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="space-y-3 text-sm text-[#737373]">
                <li>- Hyper‑persoonlijke e‑mail + IG‑DM (1‑op‑1, geen bulkspam)</li>
                <li>- Intake‑gating: alleen serieuze leads (op basis van score)</li>
                <li>- Afspraken rechtstreeks in jouw agenda (Calendly)</li>
                <li>- Heldere KPI’s en wekelijkse rapportage</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* WAAROM WIJ */}
      <section id="waarom" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-500">Waarom Coach ShowUps?</h2>
          <p className="mt-3 max-w-2xl text-[#737373]">
            Wij leveren meetbare en voorspelbare call‑volumes voor fitness coaches door persoonlijke outreach + intake‑scoring. Geen vage beloftes, maar duidelijke afspraken.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["Gekwalificeerd", "Alleen leads met score ≥ 6 gaan door. Tijdvreters blijven buiten."],
              ["Snel live", "Binnen 72 uur operationeel: inbox, copy, intake, routing."],
              ["Transparant", "Wekelijkse rapportage met replies, boekingen, show‑ups en learnings."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-[#737373]">{t}</h3>
                <p className="mt-2 text-sm text-[#737373]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AANBOD & PRIJZEN */}
      <section id="aanbod" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-500">Aanbod & prijzen (PPM)</h2>
          <p className="mt-3 max-w-2xl text-[#737373]">Betaal voor resultaat. Geen advertenties, geen lange contracten.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#737373]">Setup</h3>
              <p className="mt-2 text-[#737373]">Eenmalig: €300</p>
              <ul className="mt-4 space-y-2 text-sm text-[#737373]">
                <li>- ICP & messaging</li>
                <li>- Inbox & tracking + deliverability basics</li>
                <li>- Intake‑scoring + routing (Tally → CRM/Sheet)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#737373]">Bundel</h3>
              <p className="mt-2 text-[#737373]">10 Qualified Show‑Ups — €1.500 (geldigheid 21 dagen)</p>
              <ul className="mt-4 space-y-2 text-sm text-[#737373]">
                <li>- QSU = juiste doelgroep + intake score ≥ 6 + verschijnt op call</li>
                <li>- No‑show: 1x gratis herplanning, daarna 0.5 credit</li>
                <li>- Rapportage + optimalisatie per week</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link href={TALLY} data-clarity="cta-intake-mid" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium text-white bg-emerald-500 hover:opacity-90">
              Start intake
            </Link>
          </div>
        </div>
      </section>

      {/* WERKWIJZE (stappen) */}
      <section id="werkwijze" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-500">Werkwijze in 4 stappen</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              ["1. Intake & ICP", "Korte intake, doelgroep scherp, messaging vastgesteld."],
              ["2. Copy & campagnes", "E‑mail + DM, 1‑op‑1 hyper‑persoonlijk."],
              ["3. Intake‑scoring", "Alleen score ≥ 6 boekt direct een call."],
              ["4. Bookings & rapportage", "In jouw agenda + wekelijkse optimalisatie."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-emerald-600 font-semibold">{t}</div>
                <p className="mt-2 text-sm text-[#737373]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTATEN / KPI'S */}
      <section id="kpi" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-500">Resultaten & KPI’s</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Reply rate", "3–6%"],
              ["Bookings (7–10d)", "5–10 calls"],
              ["Live binnen", "72 uur"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-[#737373]">{k}</div>
                <div className="mt-1 text-2xl font-semibold text-emerald-600">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / REFERENTIES */}
      <section id="referenties" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-500">Wat coaches zeggen</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              [
                "“Binnen 10 dagen 8 calls, 5 deals. Zero ads.”",
                "— Jeroen, Online Coach",
              ],
              [
                "“Kwaliteit is hoog, nieuwe klanten zonder cold outreach en ads”",
                "— Sanne, Sportschool‑Eigenaar",
              ],
              [
                "“Transparant en voorspelbaar. Elke week duidelijke KPI’s.”",
                "— Mehmet, PT",
              ],
            ].map(([quote, name]) => (
              <div key={quote as string} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-[#737373]">{quote}</p>
                <div className="mt-3 text-sm text-[#737373]">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE / PROOF EXTENDED */}
      <section id="case" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:3xl font-semibold text-emerald-500">Case: 2 weken pilot</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Outreach", "1.200 contacten"],
              ["Replies", "4.9%"],
              ["Bookings", "12 calls (QSU)"],
            ].map(([k, v]) => (
              <div key={k as string} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-[#737373]">{k}</div>
                <div className="mt-1 text-2xl font-semibold text-emerald-600">{v}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#737373]">
            Context: NL/BE fitness coaches, mix van e‑mail en IG‑DM, intake‑score gating (≥ 6) en directe boeking in agenda.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-500">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Hoe kwalificeren jullie leads?", "Via intake‑score op budget, urgentie en fit. Alleen score ≥ 6 boekt een call."],
              ["Wat bij no‑shows?", "1x gratis herplanning; daarna 0.5 credit van je bundel."],
              ["Hoe snel live?", "Binnen 72 uur. Domein en e‑mail zijn al klaar."],
              ["Afspraak of online?", "Beide. Focus op NL/BE; online mogelijk."],
              ["Hoe betaal ik?", "Setup + bundel (PPM). Betalingen activeren we na 25e."],
            ].map(([q, a]) => (
              <div key={q} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-[#737373]">{q}</h3>
                <p className="mt-2 text-sm text-[#737373]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-500">Contact</h2>
          <p className="mt-3 max-w-2xl text-[#737373]">
            Vragen of wil je checken of je in aanmerking komt? Start de intake of mail ons.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center gap-3">
            <Link href={TALLY} data-clarity="cta-intake-contact" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-5 py-3 font-medium text-white bg-emerald-500 hover:opacity-90">
              Start intake
            </Link>
            <a href="mailto:joey@coachshowups.com" data-clarity="cta-mail" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-5 py-3 font-medium border border-slate-300 text-[#737373] hover:bg-slate-100">
              joey@coachshowups.com
            </a>
          </div>
        </div>
      </section>

      {/* EIND-CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-t from-emerald-200 to-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-600">Klaar om 10–15 show‑ups te boeken?</h2>
          <p className="mt-3 max-w-2xl mx-auto text-[#737373]">
            Coaches starten altijd met de intake. We plannen daarna alleen qualified calls in.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href={TALLY} data-clarity="cta-intake-footer" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium text-white bg-emerald-500 hover:opacity-90">
              Start intake
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 text-sm text-[#737373]">
          <div>© {new Date().getFullYear()} Coach ShowUps</div>
          <div className="mt-2">
            PPM voorwaarden: Setup €300, bundel 10 QSU €1.500, geldigheid 21 dagen,
            no‑show beleid: 1x gratis herplanning, daarna 0.5 credit.
            Contact: <a className="underline" href="mailto:joey@coachshowups.com">joey@coachshowups.com</a>
          </div>
          <div className="mt-2 flex gap-4">
            <Link href="/privacy" className="underline hover:text-emerald-600">Privacy</Link>
            <Link href="/voorwaarden" className="underline hover:text-emerald-600">Voorwaarden</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
