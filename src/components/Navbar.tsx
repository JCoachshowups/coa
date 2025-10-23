'use client';

import { useEffect, useLayoutEffect, useRef, useState, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const TALLY = 'https://tally.so/r/mKdr2V';

function NavbarContent() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const search = useSearchParams();
  const navRef = useRef<HTMLDivElement | null>(null);

  // Sluit menu bij route/param wijziging of hash navigatie
  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, search?.toString()]);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener('hashchange', onHash);
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onEsc);
    // no resize listener needed with fixed offsets
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('keydown', onEsc);
    };
  }, []);

  // Bepaal nav-hoogte synchroon voor eerste paint, zodat panel exact eronder opent (voorkomt 'trippen')
  const [navTop, setNavTop] = useState<number>(96);
  useLayoutEffect(() => {
    const h = navRef.current?.getBoundingClientRect().height;
    if (h) setNavTop(h);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div ref={navRef} className="mx-auto max-w-6xl px-4 h-24 md:h-32 overflow-hidden flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center h-full">
            {/* Behoud h-48 zoals gevraagd; optimaliseer LCP met eager + fetchPriority */}
            <img src="/logo.png" alt="Coach ShowUps" className="h-48 w-auto object-contain opacity-80" loading="eager" fetchPriority="high" />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-4">
          <Link href="/#waarom" className="text-sm text-[#737373] hover:text-emerald-600">Waarom wij</Link>
          <Link href="/#aanbod" className="text-sm text-[#737373] hover:text-emerald-600">Aanbod</Link>
          <Link href="/#werkwijze" className="text-sm text-[#737373] hover:text-emerald-600">Werkwijze</Link>
          <Link href="/#faq" className="text-sm text-[#737373] hover:text-emerald-600">FAQ</Link>
          <Link
            href={TALLY}
            data-clarity="cta-intake-nav"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-emerald-500 hover:opacity-90">
            Start intake
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-[#737373] hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Simple burger icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      {/* Mobile menu panel (animated fade/slide, route-aware close) */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`sm:hidden fixed inset-x-0 z-[70] border-t border-slate-200 bg-white/95 backdrop-blur shadow-md transition-all duration-200 ease-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        style={{ top: navTop }}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 space-y-2">
          <Link href="/#waarom" className="block text-[#737373] hover:text-emerald-600" onClick={() => setOpen(false)}>Waarom wij</Link>
          <Link href="/#aanbod" className="block text-[#737373] hover:text-emerald-600" onClick={() => setOpen(false)}>Aanbod</Link>
          <Link href="/#werkwijze" className="block text-[#737373] hover:text-emerald-600" onClick={() => setOpen(false)}>Werkwijze</Link>
          <Link href="/#faq" className="block text-[#737373] hover:text-emerald-600" onClick={() => setOpen(false)}>FAQ</Link>
          <Link
            href={TALLY}
            data-clarity="cta-intake-menu"
            className="block w-full text-center rounded-md px-4 py-2 text-sm font-medium text-white bg-emerald-500 hover:opacity-90"
            onClick={() => setOpen(false)}
          >
            Start intake
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur h-24 md:h-32" />}>
      <NavbarContent />
    </Suspense>
  );
}
