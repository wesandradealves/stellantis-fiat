(function(window, fbAppId) {

	/**
	|* @see https://stackoverflow.com/a/4536922/1345327
	|* @see https://developers.facebook.com/docs/sharing/best-practices
	|* @see https://developers.facebook.com/tools/debug/sharing/
	|*/

	var $ogFbAppId = document.querySelector('meta[property="fb:app_id"]');
	var ogFbAppId = $ogFbAppId.getAttribute('content') || fbAppId;

	var $ogSiteName = document.querySelector('meta[property="og:site_name"]');
	var ogSiteName = $ogSiteName.getAttribute('content');

	var $ogType = document.querySelector('meta[property="og:type"]');
	var ogType = $ogType.getAttribute('content');

	var $ogTitle = document.querySelector('meta[property="og:title"]');
	var ogTitle = $ogTitle.getAttribute('content');

	var $ogDescription = document.querySelector('meta[property="og:description"]');
	var ogDescription = $ogDescription.getAttribute('content');

	var $ogUrl = document.querySelector('meta[property="og:url"]');
	var ogUrl = $ogUrl.getAttribute('content');

	var $ogImage = document.querySelector('meta[property="og:image"]');
	var ogImage = $ogImage.getAttribute('content');

	var $ogImageWidth = document.querySelector('meta[property="og:image:width"]');
	var ogImageWidth = $ogImageWidth.getAttribute('content');

	var $ogImageHeight = document.querySelector('meta[property="og:image:height"]');
	var ogImageHeight = $ogImageHeight.getAttribute('content');

	var $ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
	var ogImageAlt = $ogImageAlt.getAttribute('content');

	window.popup = function(url, width, height) {
		var left = (window.screen.width * 0.5) - (width * 0.5);
		var top = (window.screen.height * 0.5) - (height * 0.5);
		return window.open(url, '', [
			'menubar=no,toolbar=no,resizable=yes,scrollbars=yes',
			'width='+ width,
			'height='+ height,
			'top='+ top,
			'left='+ left,
		].join(','));
	};

	window.fbAsyncInit = function() {
		FB.init({
			appId: fbAppId,
			version: 'v4.0',
			autoLogAppEvents: true,
			xfbml: true,
			status: true,
			cookie: true,
		});
	};

	window.facebookShare = window.facebookShare || function(options) {
		var opts = options || {};
		var params = {
			method: 'share',
			app_id: appId,
			hashtag: opts.hashtag || null,
			quote: opts.quote || null,
			href: opts.href || window.location.href,
			link: opts.link || '',
			picture: opts.picture || '',
			name: opts.name || '',
			caption: opts.caption || '',
			description: opts.description || '',
		};
		FB.ui(params, function (response) {
			if (response && response.post_id) {
				opts.resolve && opts.resolve(response);
			} else {
				opts.reject && opts.reject(response);
			}
		});
	};

	window.facebookShareOpenGraph = window.facebook || function(options) {
		var opts = options || {};
		var params = {
			method: 'share_open_graph',
			action_type: 'og.likes',
			action_properties: JSON.stringify({
				object: opts,
			}),
		};
		FB.ui(params, function(response) {
			if (response && response.post_id) {
				opts.resolve && opts.resolve(response);
			} else {
				opts.reject && opts.reject(response);
			}
		});
	}

	window.facebookSharer = window.facebookSharer || function(options) {
		var opts = options || {};
		var u = encodeURIComponent(opts.url || window.location.href);
		var t = encodeURIComponent(opts.text || '');
		window.popup('http://www.facebook.com/sharer.php?u='+ u +'&t='+ t, 626, 436);
		return false;
	};

	window.twitterSharer = window.twitterSharer || function(options) {
		var opts = options || {};
		var u = encodeURIComponent(opts.url || window.location.href);
		var t = encodeURIComponent(opts.text || '');
		var v = encodeURIComponent(opts.via || '');
		window.popup('https://twitter.com/intent/tweet?url='+ u +'&via='+ v +'&text='+ t, 600, 300);
		return false;
	};

	window.linkedinSharer = window.linkedinSharer || function(options) {
		var opts = options || {};
		var u = encodeURIComponent(opts.url || window.location.href);
		var t = encodeURIComponent(opts.text || '');
		window.popup('https://www.linkedin.com/shareArticle?mini=true&url='+ u, 600, 300);
		return false;
	};

}).call(this, window, '494378911142584');
