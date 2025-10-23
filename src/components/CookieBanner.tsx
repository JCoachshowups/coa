'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem('cookie-consent');
      if (!v) setVisible(true);
    } catch {
      // localStorage not available
    }
  }, []);

  function accept() {
    try { localStorage.setItem('cookie-consent', 'accepted'); } catch {}
    try { window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: 'accepted' })); } catch {}
    setVisible(false);
  }

  function reject() {
    try { localStorage.setItem('cookie-consent', 'rejected'); } catch {}
    try { window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: 'rejected' })); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-lg border border-slate-200 bg-white/95 backdrop-blur shadow-md p-4 md:p-5">
          <div className="md:flex md:items-center md:justify-between md:gap-6">
            <div className="text-sm text-[#737373]">
              Wij gebruiken cookies en vergelijkbare technieken voor analytics (Microsoft Clarity) en om onze site te verbeteren. Lees onze{' '}
              <Link href="/privacy" className="underline hover:text-emerald-600">privacyverklaring</Link>.
            </div>
            <div className="mt-3 md:mt-0 flex gap-2 justify-end">
              <button onClick={reject} className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm border border-slate-300 text-[#737373] hover:bg-slate-100">Weigeren</button>
              <button onClick={accept} className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm text-white bg-emerald-500 hover:opacity-90">Accepteren</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
