// const fbPixel = () => {
// !function(f,b,e,v,n,t,s)
//   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//   n.queue=[];t=b.createElement(e);t.async=!0;
//   t.src=v;s=b.getElementsByTagName(e)[0];
//   s.parentNode.insertBefore(t,s)}(window, document,'script',
//   '//connect.facebook.net/en_US/fbevents.js');
//   fbq('init', '1468886583144099');
//   fbq('track', 'PageView');
// };

const gtm = () => {
  dataLayer = [];
  // <!-- Google Tag Manager -->
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-PMM8JJH');
  // <!-- End Google Tag Manager -->
};

const hotjar = () => {
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 2661601, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(
    window,
    document,
    'https://static.hotjar.com/c/hotjar-',
    '.js?sv=',
  );
};

const handTalk = () => {
  window.ht = new HT({
    /* TOKEN USADA EM OUTROS SITES FIAT */
    token: '5e678207a1f3d846ea77640b9216dd4f',
    avatar: 'MAYA',
  });
};

window.addEventListener('load', () => {
  handTalk();
  gtm();
  //hotjar();
  // fbPixel();
});
