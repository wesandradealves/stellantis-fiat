(function(window, document, USER_ANALYTICS, GTM, GTM2){
	// <script src="/vendors/analytics.js"></script>
	// <script async="" src="https://www.google-analytics.com/analytics.js"></script>
	// <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-PMM8JJH"></script>
	// <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-TKPLHVF"></script>
	
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// Google Tag Manager
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window, document, 'script', 'dataLayer', GTM);


	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// Google Tag Manager
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window, document, 'script', 'dataLayer', GTM2);

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// Modified Analytics tracking code with Optimize plugin
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	var GTM_ASYNC_HIDE_OPTIMIZE = {};
	//GTM_ASYNC_HIDE_OPTIMIZE[GTM_OPTMIZE] = true;
	// window.dataLayer=window.dataLayer||[];
	// window.dataLayer.push({
	// 	'gtm.start':new Date().getTime(),
	// 	event:'gtm.js'
	// });

	(function(a,s,y,n,c,h,i,d,e){
		s.className+=' '+y;h.start=1*new Date;
		h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
		(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
	})(window, document.documentElement, 'async-hide', 'dataLayer', 4000, GTM_ASYNC_HIDE_OPTIMIZE);

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');


	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// Settings
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	ga('create', USER_ANALYTICS, 'auto');

	//ga('require', GTM_OPTMIZE);

})(window, document, 'UA-5547232-16', 'GTM-PMM8JJH', '');