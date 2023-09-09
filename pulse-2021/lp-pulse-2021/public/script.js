const genLayers = () => {
  dataLayer = [];

  //!-- Google Tag Manager -->
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

const handTalk = () => {
  window.ht = new HT({
    token: '5e678207a1f3d846ea77640b9216dd4f',
    avatar: 'MAYA',
    opacity: 0,
    highContrast: true,
    mobileConfig: {
      align: 'top',
    },
  });
};

handTalk();
genLayers();
