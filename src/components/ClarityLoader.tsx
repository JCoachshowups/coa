'use client';

import { useEffect, useRef } from 'react';

export default function ClarityLoader() {
  const loadedRef = useRef(false);

  useEffect(() => {
    function loadClarity() {
      if (loadedRef.current) return;
      const id = process.env.NEXT_PUBLIC_CLARITY_ID;
      if (!id) return;
      // inject script
      const s = document.createElement('script');
      s.async = true;
      s.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, 'clarity', 'script', '${id}');
      `;
      document.body.appendChild(s);
      loadedRef.current = true;
    }

    // If already accepted previously, load immediately
    try {
      const v = localStorage.getItem('cookie-consent');
      if (v === 'accepted') {
        loadClarity();
      }
    } catch {}

    // Listen for consent changes
    function onConsent(e: Event) {
      // @ts-ignore
      const status = e?.detail as string | undefined;
      if (status === 'accepted') {
        loadClarity();
      }
    }
    window.addEventListener('cookie-consent-changed', onConsent as EventListener);
    return () => window.removeEventListener('cookie-consent-changed', onConsent as EventListener);
  }, []);

  return null;
}
