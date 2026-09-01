(function () {
  const measurementId = 'G-77QM94C66P';
  const quizId = document.documentElement.dataset.quizId || 'site';
  const params = new URLSearchParams(location.search);

  function trafficSource() {
    const campaignSource = params.get('utm_source');
    if (campaignSource) return campaignSource.toLowerCase();
    if (params.has('fbclid')) return 'facebook';
    if (!document.referrer) return 'direct';
    try {
      const host = new URL(document.referrer).hostname.replace(/^www\./, '');
      if (host.includes('facebook.com') || host.includes('fb.com')) return 'facebook';
      return host;
    } catch {
      return 'unknown';
    }
  }

  const source = trafficSource();
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.hcTrack = function (eventName, eventParams) {
    if (!/^G-[A-Z0-9]+$/.test(measurementId)) return;
    window.gtag('event', eventName, {
      quiz_id: quizId,
      traffic_source: source,
      ...eventParams
    });
  };

  if (!/^G-[A-Z0-9]+$/.test(measurementId)) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(script);
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: false });
  window.hcTrack('page_view', {
    page_title: document.title,
    page_location: location.href.split('#')[0]
  });
})();
