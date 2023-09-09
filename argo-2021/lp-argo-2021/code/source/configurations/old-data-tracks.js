import normatize from "@dcode/utils/xtras/normatize";

const Latinise={};
Latinise.latin_map={'Á':'A','Ă':'A','Ắ':'A','Ặ':'A','Ằ':'A','Ẳ':'A','Ẵ':'A','Ǎ':'A','Â':'A','Ấ':'A','Ậ':'A','Ầ':'A','Ẩ':'A','Ẫ':'A','Ä':'A','Ǟ':'A','Ȧ':'A','Ǡ':'A','Ạ':'A','Ȁ':'A','À':'A','Ả':'A','Ȃ':'A','Ā':'A','Ą':'A','Å':'A','Ǻ':'A','Ḁ':'A','Ⱥ':'A','Ã':'A','Ꜳ':'AA','Æ':'AE','Ǽ':'AE','Ǣ':'AE','Ꜵ':'AO','Ꜷ':'AU','Ꜹ':'AV','Ꜻ':'AV','Ꜽ':'AY','Ḃ':'B','Ḅ':'B','Ɓ':'B','Ḇ':'B','Ƀ':'B','Ƃ':'B','Ć':'C','Č':'C','Ç':'C','Ḉ':'C','Ĉ':'C','Ċ':'C','Ƈ':'C','Ȼ':'C','Ď':'D','Ḑ':'D','Ḓ':'D','Ḋ':'D','Ḍ':'D','Ɗ':'D','Ḏ':'D','ǲ':'D','ǅ':'D','Đ':'D','Ƌ':'D','Ǳ':'DZ','Ǆ':'DZ','É':'E','Ĕ':'E','Ě':'E','Ȩ':'E','Ḝ':'E','Ê':'E','Ế':'E','Ệ':'E','Ề':'E','Ể':'E','Ễ':'E','Ḙ':'E','Ë':'E','Ė':'E','Ẹ':'E','Ȅ':'E','È':'E','Ẻ':'E','Ȇ':'E','Ē':'E','Ḗ':'E','Ḕ':'E','Ę':'E','Ɇ':'E','Ẽ':'E','Ḛ':'E','Ꝫ':'ET','Ḟ':'F','Ƒ':'F','Ǵ':'G','Ğ':'G','Ǧ':'G','Ģ':'G','Ĝ':'G','Ġ':'G','Ɠ':'G','Ḡ':'G','Ǥ':'G','Ḫ':'H','Ȟ':'H','Ḩ':'H','Ĥ':'H','Ⱨ':'H','Ḧ':'H','Ḣ':'H','Ḥ':'H','Ħ':'H','Í':'I','Ĭ':'I','Ǐ':'I','Î':'I','Ï':'I','Ḯ':'I','İ':'I','Ị':'I','Ȉ':'I','Ì':'I','Ỉ':'I','Ȋ':'I','Ī':'I','Į':'I','Ɨ':'I','Ĩ':'I','Ḭ':'I','Ꝺ':'D','Ꝼ':'F','Ᵹ':'G','Ꞃ':'R','Ꞅ':'S','Ꞇ':'T','Ꝭ':'IS','Ĵ':'J','Ɉ':'J','Ḱ':'K','Ǩ':'K','Ķ':'K','Ⱪ':'K','Ꝃ':'K','Ḳ':'K','Ƙ':'K','Ḵ':'K','Ꝁ':'K','Ꝅ':'K','Ĺ':'L','Ƚ':'L','Ľ':'L','Ļ':'L','Ḽ':'L','Ḷ':'L','Ḹ':'L','Ⱡ':'L','Ꝉ':'L','Ḻ':'L','Ŀ':'L','Ɫ':'L','ǈ':'L','Ł':'L','Ǉ':'LJ','Ḿ':'M','Ṁ':'M','Ṃ':'M','Ɱ':'M','Ń':'N','Ň':'N','Ņ':'N','Ṋ':'N','Ṅ':'N','Ṇ':'N','Ǹ':'N','Ɲ':'N','Ṉ':'N','Ƞ':'N','ǋ':'N','Ñ':'N','Ǌ':'NJ','Ó':'O','Ŏ':'O','Ǒ':'O','Ô':'O','Ố':'O','Ộ':'O','Ồ':'O','Ổ':'O','Ỗ':'O','Ö':'O','Ȫ':'O','Ȯ':'O','Ȱ':'O','Ọ':'O','Ő':'O','Ȍ':'O','Ò':'O','Ỏ':'O','Ơ':'O','Ớ':'O','Ợ':'O','Ờ':'O','Ở':'O','Ỡ':'O','Ȏ':'O','Ꝋ':'O','Ꝍ':'O','Ō':'O','Ṓ':'O','Ṑ':'O','Ɵ':'O','Ǫ':'O','Ǭ':'O','Ø':'O','Ǿ':'O','Õ':'O','Ṍ':'O','Ṏ':'O','Ȭ':'O','Ƣ':'OI','Ꝏ':'OO','Ɛ':'E','Ɔ':'O','Ȣ':'OU','Ṕ':'P','Ṗ':'P','Ꝓ':'P','Ƥ':'P','Ꝕ':'P','Ᵽ':'P','Ꝑ':'P','Ꝙ':'Q','Ꝗ':'Q','Ŕ':'R','Ř':'R','Ŗ':'R','Ṙ':'R','Ṛ':'R','Ṝ':'R','Ȑ':'R','Ȓ':'R','Ṟ':'R','Ɍ':'R','Ɽ':'R','Ꜿ':'C','Ǝ':'E','Ś':'S','Ṥ':'S','Š':'S','Ṧ':'S','Ş':'S','Ŝ':'S','Ș':'S','Ṡ':'S','Ṣ':'S','Ṩ':'S','Ť':'T','Ţ':'T','Ṱ':'T','Ț':'T','Ⱦ':'T','Ṫ':'T','Ṭ':'T','Ƭ':'T','Ṯ':'T','Ʈ':'T','Ŧ':'T','Ɐ':'A','Ꞁ':'L','Ɯ':'M','Ʌ':'V','Ꜩ':'TZ','Ú':'U','Ŭ':'U','Ǔ':'U','Û':'U','Ṷ':'U','Ü':'U','Ǘ':'U','Ǚ':'U','Ǜ':'U','Ǖ':'U','Ṳ':'U','Ụ':'U','Ű':'U','Ȕ':'U','Ù':'U','Ủ':'U','Ư':'U','Ứ':'U','Ự':'U','Ừ':'U','Ử':'U','Ữ':'U','Ȗ':'U','Ū':'U','Ṻ':'U','Ų':'U','Ů':'U','Ũ':'U','Ṹ':'U','Ṵ':'U','Ꝟ':'V','Ṿ':'V','Ʋ':'V','Ṽ':'V','Ꝡ':'VY','Ẃ':'W','Ŵ':'W','Ẅ':'W','Ẇ':'W','Ẉ':'W','Ẁ':'W','Ⱳ':'W','Ẍ':'X','Ẋ':'X','Ý':'Y','Ŷ':'Y','Ÿ':'Y','Ẏ':'Y','Ỵ':'Y','Ỳ':'Y','Ƴ':'Y','Ỷ':'Y','Ỿ':'Y','Ȳ':'Y','Ɏ':'Y','Ỹ':'Y','Ź':'Z','Ž':'Z','Ẑ':'Z','Ⱬ':'Z','Ż':'Z','Ẓ':'Z','Ȥ':'Z','Ẕ':'Z','Ƶ':'Z','Ĳ':'IJ','Œ':'OE','ᴀ':'A','ᴁ':'AE','ʙ':'B','ᴃ':'B','ᴄ':'C','ᴅ':'D','ᴇ':'E','ꜰ':'F','ɢ':'G','ʛ':'G','ʜ':'H','ɪ':'I','ʁ':'R','ᴊ':'J','ᴋ':'K','ʟ':'L','ᴌ':'L','ᴍ':'M','ɴ':'N','ᴏ':'O','ɶ':'OE','ᴐ':'O','ᴕ':'OU','ᴘ':'P','ʀ':'R','ᴎ':'N','ᴙ':'R','ꜱ':'S','ᴛ':'T','ⱻ':'E','ᴚ':'R','ᴜ':'U','ᴠ':'V','ᴡ':'W','ʏ':'Y','ᴢ':'Z','á':'a','ă':'a','ắ':'a','ặ':'a','ằ':'a','ẳ':'a','ẵ':'a','ǎ':'a','â':'a','ấ':'a','ậ':'a','ầ':'a','ẩ':'a','ẫ':'a','ä':'a','ǟ':'a','ȧ':'a','ǡ':'a','ạ':'a','ȁ':'a','à':'a','ả':'a','ȃ':'a','ā':'a','ą':'a','ᶏ':'a','ẚ':'a','å':'a','ǻ':'a','ḁ':'a','ⱥ':'a','ã':'a','ꜳ':'aa','æ':'ae','ǽ':'ae','ǣ':'ae','ꜵ':'ao','ꜷ':'au','ꜹ':'av','ꜻ':'av','ꜽ':'ay','ḃ':'b','ḅ':'b','ɓ':'b','ḇ':'b','ᵬ':'b','ᶀ':'b','ƀ':'b','ƃ':'b','ɵ':'o','ć':'c','č':'c','ç':'c','ḉ':'c','ĉ':'c','ɕ':'c','ċ':'c','ƈ':'c','ȼ':'c','ď':'d','ḑ':'d','ḓ':'d','ȡ':'d','ḋ':'d','ḍ':'d','ɗ':'d','ᶑ':'d','ḏ':'d','ᵭ':'d','ᶁ':'d','đ':'d','ɖ':'d','ƌ':'d','ı':'i','ȷ':'j','ɟ':'j','ʄ':'j','ǳ':'dz','ǆ':'dz','é':'e','ĕ':'e','ě':'e','ȩ':'e','ḝ':'e','ê':'e','ế':'e','ệ':'e','ề':'e','ể':'e','ễ':'e','ḙ':'e','ë':'e','ė':'e','ẹ':'e','ȅ':'e','è':'e','ẻ':'e','ȇ':'e','ē':'e','ḗ':'e','ḕ':'e','ⱸ':'e','ę':'e','ᶒ':'e','ɇ':'e','ẽ':'e','ḛ':'e','ꝫ':'et','ḟ':'f','ƒ':'f','ᵮ':'f','ᶂ':'f','ǵ':'g','ğ':'g','ǧ':'g','ģ':'g','ĝ':'g','ġ':'g','ɠ':'g','ḡ':'g','ᶃ':'g','ǥ':'g','ḫ':'h','ȟ':'h','ḩ':'h','ĥ':'h','ⱨ':'h','ḧ':'h','ḣ':'h','ḥ':'h','ɦ':'h','ẖ':'h','ħ':'h','ƕ':'hv','í':'i','ĭ':'i','ǐ':'i','î':'i','ï':'i','ḯ':'i','ị':'i','ȉ':'i','ì':'i','ỉ':'i','ȋ':'i','ī':'i','į':'i','ᶖ':'i','ɨ':'i','ĩ':'i','ḭ':'i','ꝺ':'d','ꝼ':'f','ᵹ':'g','ꞃ':'r','ꞅ':'s','ꞇ':'t','ꝭ':'is','ǰ':'j','ĵ':'j','ʝ':'j','ɉ':'j','ḱ':'k','ǩ':'k','ķ':'k','ⱪ':'k','ꝃ':'k','ḳ':'k','ƙ':'k','ḵ':'k','ᶄ':'k','ꝁ':'k','ꝅ':'k','ĺ':'l','ƚ':'l','ɬ':'l','ľ':'l','ļ':'l','ḽ':'l','ȴ':'l','ḷ':'l','ḹ':'l','ⱡ':'l','ꝉ':'l','ḻ':'l','ŀ':'l','ɫ':'l','ᶅ':'l','ɭ':'l','ł':'l','ǉ':'lj','ſ':'s','ẜ':'s','ẛ':'s','ẝ':'s','ḿ':'m','ṁ':'m','ṃ':'m','ɱ':'m','ᵯ':'m','ᶆ':'m','ń':'n','ň':'n','ņ':'n','ṋ':'n','ȵ':'n','ṅ':'n','ṇ':'n','ǹ':'n','ɲ':'n','ṉ':'n','ƞ':'n','ᵰ':'n','ᶇ':'n','ɳ':'n','ñ':'n','ǌ':'nj','ó':'o','ŏ':'o','ǒ':'o','ô':'o','ố':'o','ộ':'o','ồ':'o','ổ':'o','ỗ':'o','ö':'o','ȫ':'o','ȯ':'o','ȱ':'o','ọ':'o','ő':'o','ȍ':'o','ò':'o','ỏ':'o','ơ':'o','ớ':'o','ợ':'o','ờ':'o','ở':'o','ỡ':'o','ȏ':'o','ꝋ':'o','ꝍ':'o','ⱺ':'o','ō':'o','ṓ':'o','ṑ':'o','ǫ':'o','ǭ':'o','ø':'o','ǿ':'o','õ':'o','ṍ':'o','ṏ':'o','ȭ':'o','ƣ':'oi','ꝏ':'oo','ɛ':'e','ᶓ':'e','ɔ':'o','ᶗ':'o','ȣ':'ou','ṕ':'p','ṗ':'p','ꝓ':'p','ƥ':'p','ᵱ':'p','ᶈ':'p','ꝕ':'p','ᵽ':'p','ꝑ':'p','ꝙ':'q','ʠ':'q','ɋ':'q','ꝗ':'q','ŕ':'r','ř':'r','ŗ':'r','ṙ':'r','ṛ':'r','ṝ':'r','ȑ':'r','ɾ':'r','ᵳ':'r','ȓ':'r','ṟ':'r','ɼ':'r','ᵲ':'r','ᶉ':'r','ɍ':'r','ɽ':'r','ↄ':'c','ꜿ':'c','ɘ':'e','ɿ':'r','ś':'s','ṥ':'s','š':'s','ṧ':'s','ş':'s','ŝ':'s','ș':'s','ṡ':'s','ṣ':'s','ṩ':'s','ʂ':'s','ᵴ':'s','ᶊ':'s','ȿ':'s','ɡ':'g','ᴑ':'o','ᴓ':'o','ᴝ':'u','ť':'t','ţ':'t','ṱ':'t','ț':'t','ȶ':'t','ẗ':'t','ⱦ':'t','ṫ':'t','ṭ':'t','ƭ':'t','ṯ':'t','ᵵ':'t','ƫ':'t','ʈ':'t','ŧ':'t','ᵺ':'th','ɐ':'a','ᴂ':'ae','ǝ':'e','ᵷ':'g','ɥ':'h','ʮ':'h','ʯ':'h','ᴉ':'i','ʞ':'k','ꞁ':'l','ɯ':'m','ɰ':'m','ᴔ':'oe','ɹ':'r','ɻ':'r','ɺ':'r','ⱹ':'r','ʇ':'t','ʌ':'v','ʍ':'w','ʎ':'y','ꜩ':'tz','ú':'u','ŭ':'u','ǔ':'u','û':'u','ṷ':'u','ü':'u','ǘ':'u','ǚ':'u','ǜ':'u','ǖ':'u','ṳ':'u','ụ':'u','ű':'u','ȕ':'u','ù':'u','ủ':'u','ư':'u','ứ':'u','ự':'u','ừ':'u','ử':'u','ữ':'u','ȗ':'u','ū':'u','ṻ':'u','ų':'u','ᶙ':'u','ů':'u','ũ':'u','ṹ':'u','ṵ':'u','ᵫ':'ue','ꝸ':'um','ⱴ':'v','ꝟ':'v','ṿ':'v','ʋ':'v','ᶌ':'v','ⱱ':'v','ṽ':'v','ꝡ':'vy','ẃ':'w','ŵ':'w','ẅ':'w','ẇ':'w','ẉ':'w','ẁ':'w','ⱳ':'w','ẘ':'w','ẍ':'x','ẋ':'x','ᶍ':'x','ý':'y','ŷ':'y','ÿ':'y','ẏ':'y','ỵ':'y','ỳ':'y','ƴ':'y','ỷ':'y','ỿ':'y','ȳ':'y','ẙ':'y','ɏ':'y','ỹ':'y','ź':'z','ž':'z','ẑ':'z','ʑ':'z','ⱬ':'z','ż':'z','ẓ':'z','ȥ':'z','ẕ':'z','ᵶ':'z','ᶎ':'z','ʐ':'z','ƶ':'z','ɀ':'z','ﬀ':'ff','ﬃ':'ffi','ﬄ':'ffl','ﬁ':'fi','ﬂ':'fl','ĳ':'ij','œ':'oe','ﬆ':'st','ₐ':'a','ₑ':'e','ᵢ':'i','ⱼ':'j','ₒ':'o','ᵣ':'r','ᵤ':'u','ᵥ':'v','ₓ':'x'};
String.prototype.latinise=function(){return this.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Latinise.latin_map[a]||a})};
String.prototype.latinize=String.prototype.latinise;
String.prototype.isLatin=function(){return this==this.latinise()}

function getTrack(options) {
	const opts = Object(options);
	return {
		event: 'content-section.view',
		eventActor: 'user',
		interactionType: opts.pageview ? 'vpv' : 'view',
		segment: 'landing-page',
		product: 'argo-mentos',
		component: {
			part: 'conteudo',
			props: {
				'section': opts.section || '',
				'subsection': opts.subsection || '',
				'cluster': opts.cluster || '',
				'element-text': opts.device || '',
			},
		},
	};
}

function trackView(section, subsection, cluster, device) {
	return getTrack({ pageview: true, section, subsection, cluster, device });
}

function trackEvent(section, subsection, cluster, device) {
	return getTrack({ section, subsection, cluster, device });
}

export const data = {
	// General ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	App_Iniciou: (cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		return null;
	},
	App_Pageview: (sectionName, cluster, device) => {
		if (
			(sectionName === 'design') ||
			(sectionName === 'performance') ||
			(sectionName === 'tecnologia') ||
			(sectionName === 'seguranca')
		) { return null; }
		if (sectionName === 'about') sectionName = 'sobre';
		ga('send', 'pageview', `${sectionName}?seu=${cluster}`);
		return trackView(sectionName, '', cluster, device);
	},

	// Menu ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Menu_ClicouAbrir: (cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-lateral:menu',
			eventLabel: 'menu:abrir',
		});
		return trackEvent('menu-lateral', 'abrir', cluster, device);
	},
	Menu_ClicouFechar: (cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-lateral:menu',
			eventLabel: 'menu:fechar',
		});
		return trackEvent('menu-lateral', 'fechar', cluster, device);
	},
	Menu_ClicouLogoArgo: (cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:header:logo-argo',
			eventLabel: 'header:logo-argo',
		});
		return trackEvent('header', 'logo-argo', cluster, device);
	},
	Menu_ClicouLogoFiat: (cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:header:logo-fiat',
			eventLabel: 'header:logo-fiat',
		});
		return trackEvent('header', 'logo-fiat', cluster, device);
	},
	Menu_ClicouPin: (cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:header:pin',
			eventLabel: 'header:concessionarias',
		});
		return trackEvent('menu-header', 'concessionarias', cluster, device);
	},
	Menu_ClicouItem: (sectionName, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-lateral:menu',
			eventLabel: `menu:${normatize(sectionName)}`,
		});
		return trackEvent('menu-lateral', normatize(sectionName), cluster, device);
	},
	Menu_ClicouMonteOSeu: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-lateral:cta',
			eventLabel: 'menu:monte-o-seu-argo',
		});
		return trackEvent('menu-lateral', 'monte-o-seu-argo', cluster, device);
	},
	Menu_SimularFinanciamento: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-lateral:cta',
			eventLabel: 'menu:cta:simule-um-financiamento',
		});
		return trackEvent('menu-lateral', 'simule-um-financiamento', cluster, device);
	},
	Menu_AgendeSeuTesteDrive: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-lateral:cta',
			eventLabel: 'menu:compre-o-seu',
		});
		return trackEvent('menu-lateral', 'compre-o-seu', cluster, device);
	},
	Menu_Concessionarias: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-lateral:cta',
			eventLabel: 'menu:concessionarias',
		});
		return trackEvent('menu-lateral', 'concessionarias', cluster, device);
	},
	Menu_OfertasFiat: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-lateral:cta',
			eventLabel: 'menu:ofertas-fiat',
		});
		return trackEvent('menu-lateral', 'ofertas-fiat', cluster, device);
	},

	// Menu Fixed ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	MenuFixed_abrir: (cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-flutuante:cta',
			eventLabel: 'menu-flutuante:abrir',
		});
		return trackEvent('menu-flutuante', 'abrir', cluster, device);
	},
	MenuFixed_fechar: (cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-flutuante:cta',
			eventLabel: 'menu-flutuante:fechar',
		});
		return trackEvent('menu-flutuante', 'fechar', cluster, device);
	},
	MenuFixed_Link_MonteOSeuArgo: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-flutuante:cta',
			eventLabel: 'menu-flutuante:monte-o-seu-argo',
		});
		return trackEvent('menu-flutuante', 'monte-o-seu-argo', cluster, device);
	},
	MenuFixed_Link_SimularFinanciamento: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-flutuante:cta',
			eventLabel: 'menu-flutuante:simule-um-financiamento',
		});
		return trackEvent('menu-flutuante', 'simule-um-financiamento', cluster, device);
	},
	MenuFixed_Link_AgendeSeuTesteDrive: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-flutuante:cta',
			eventLabel: 'menu-flutuante:compre-o-seu',
		});
		return trackEvent('menu-flutuante', 'compre-o-seu', cluster, device);
	},
	MenuFixed_Link_Concessionarias: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-flutuante:cta',
			eventLabel: 'menu-flutuante:cta:concessionarias',
		});
		return trackEvent('menu-flutuante', 'concessionarias', cluster, device);
	},
	MenuFixed_Link_OfertasFiat: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:menu-flutuante:cta',
			eventLabel: 'menu-flutuante:ofertas-fiat',
		});
		return trackEvent('menu-flutuante', 'ofertas-fiat', cluster, device);
	},

	// Formulario ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// FormSchedule_Preencheu_*: (cluster, device) => ({}),
	FormSchedule_Abriu: (cluster, device) => {
		// return trackEvent('formulario', 'abrir', cluster, device);
	},

	FormSchedule_PreencheuNome: (cluster, device) => {
	 //   ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'preencheu:formulario:agendamento',
		// 	eventLabel: 'dados-pessoais:nome-completo',
		// });
	  // return trackEvent('formulario', 'preencheu-nome', cluster, device);
	 },

	 FormSchedule_PreencheuEmail: (cluster, device) => {
		// ga('send', 'event', {
		// 	 eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	 eventAction: 'preencheu:formulario:agendamento',
		// 	 eventLabel: 'dados-pessoais:e-mail',
		//  });
	   // return trackEvent('formulario', 'preencheu-email', cluster, device);
	 },

	 FormSchedule_PreencheuTelefone: (cluster, device) => {
		// ga('send', 'event', {
		// 	 eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	 eventAction: 'preencheu:formulario:agendamento',
		// 	 eventLabel: 'dados-pessoais:telefone',
		//  });
	   // return trackEvent('formulario', 'preencheu-telefone', cluster, device);
	 },
	 FormSchedule_AddTelefone: (cluster, device) => {
		// ga('send', 'event', {
		// 	 eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	 eventAction: 'clique:formulario:agendamento',
		// 	 eventLabel: 'dados-pessoais:adicionar-telefone',
		//  });
	   // return trackEvent('formulario', 'add-telefone', cluster, device);
	 },

	 FormSchedule_PreencheuPerfil: (value, cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'selecao:formulario:agendamento',
		// 	eventLabel: 'dados-pessoais:perfil:<perfil>',
		// });
		 // return trackEvent('formulario', 'preencheu-perfil', cluster, device);
	 },

	 FormSchedule_PreencheuCNPFJ: (value, cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'preencheu:formulario:agendamento',
		// 	eventLabel: 'dados-pessoais:perfil:<cpf|cnpj>',
		// });
		 // return trackEvent('formulario', 'preencheu-cnpfj', cluster, device);
	 },

	 FormSchedule_PreencheuVersao: (value, cluster, device) => {
	 	//  ga('send', 'event', {
			// eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			// eventAction: 'selecao:formulario:agendamento',
	 	// 	eventLabel: 'versao:<versao>',
		 // });
		 // return trackEvent('formulario', 'preencheu-versao', cluster, device);
	 },

	 FormSchedule_PreencheuMensagem: (value, cluster, device) => {
		// ga('send', 'event', {
		//   eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		//   eventAction: 'preencheu:formulario:agendamento',
		//    eventLabel: 'dados-pessoais:mensagem',
	 //   });
	   // return trackEvent('formulario', 'preencheu-mensagem', cluster, device);
     },


	 FormSchedule_ClicouReceberComunicacaoTelefone: (value, cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'opt-in:formulario:agendamento',
		// 	 eventLabel: 'checkbox:aceito-receber-comunicações-via-telefone',
		//  });
		// return trackEvent('formulario', 'clicou-receber-comunicacao-telefone', cluster, device);
	 },


	 FormSchedule_ClicouNaoReceberComunicacaoTelefone: (value, cluster, device) => {
	 	//  ga('send', 'event', {
			//  eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			//  eventAction: 'opt-out:formulario:agendamento',
			//  eventLabel: 'checkbox:aceito-receber-comunicações-via-telefone',
		 // });
		 // return trackEvent('formulario', 'clicou-nao-receber-comunicacao-telefone', cluster, device);
	 },

	 FormSchedule_ClicouReceberComunicacaoEmail: (value, cluster, device) => {
		 // ga('send', 'event', {
			// eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			// eventAction: 'opt-in:formulario:agendamento',
			//  eventLabel: 'checkbox:aceito-receber-comunicações-via-email',
		 // });
		// return trackEvent('formulario', 'clicou-receber-comunicacao-email', cluster, device);
	},

	FormSchedule_ClicouNaoReceberComunicacaoEmail: (value, cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'opt-out:formulario:agendamento',
		// 	 eventLabel: 'checkbox:aceito-receber-comunicações-via-email',
		//  });
		// return trackEvent('formulario', 'clicou-nao-receber-comunicacao-email', cluster, device);
	},


	FormSchedule_PreencheuCep: (value, cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'preencheu:formulario:agendamento',
		// 	 eventLabel: 'dados-pessoais:localizacao',
		//  });
		// return trackEvent('formulario', 'preencheu-cep', cluster, device);
	},


	FormSchedule_SelecionouConcessionaria: (value, cluster, device) => {

		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'clique:formulario:agendamento',
		// 	 eventLabel: 'concessionaria:<concessionaria>',
		//  });
		 // return trackEvent('formulario', 'selecionou-concessionaria', cluster, device);
	},


	//FormSchedule_ClicouReceberComunicacaoEmail: (value, cluster, device) => {
		// return trackEvent('formulario', 'clicou-receber-comunicacao-email', cluster, device);
	//},


	FormSchedule_ClicouFechar: (cluster, device) => {
		 // ga('send', 'event', {
			// eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			// eventAction: 'clique:formulario:agendamento',
			//  eventLabel: 'dados-pessoais:enviar',
		 // });
		 // return trackEvent('formulario', 'fechar', cluster, device);
	},

	FormSchedule_ClicouEnviar: (cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'clique:formulario:agendamento',
		// 	 eventLabel: 'dados-pessoais:enviar',
		//  });
		// return trackEvent('formulario', 'enviar', cluster, device);
	},

	FormSchedule_Enviou: (status, cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'clique:formulario:agendamento',
		// 	 eventLabel: 'sucesso:lead-gerado',
		//  });
		// return trackEvent('formulario', 'lead-gerado', cluster, device);
	},


	FormSchedule_FecharEnviado: (status, cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'clique:formulario:agendamento',
		// 	 eventLabel: 'sucesso:icone-fechar',
		//  });
		// return trackEvent('formulario', 'fechar-x-enviado', cluster, device);
	},

	FormSchedule_CEPCidade: (status, cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'preencheu:formulario:agendamento',
		// 	 eventLabel: 'dados-pessoais:localizacao',
		//  });
		// return trackEvent('formulario', 'preencheu-cep-cidade', cluster, device);
	},

	FormSchedule_FecharSucesso: (status, cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'clique:formulario:agendamento',
		// 	 eventLabel: 'sucesso:fechar',
		//  });
		// return trackEvent('formulario', 'fechar-enviado', cluster, device);
	},

	FormSchedule_FecharSucesso: (status, cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: 'clique:formulario:agendamento',
		// 	 eventLabel: 'dados-pessoais:fechar',
		//  });
		// return trackEvent('formulario', 'fechar', cluster, device);
	},


	// Modal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Modal_Fechou: (pathname, cluster, device) => {
		// Não utilizado porque o parametro não é o mesmo da abertura
		// return trackEvent('modal-argomentos', 'fechou', cluster, device);
	},
	Modal_Fechou_WithTitle: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:argomentos',
			eventLabel: `argomentos:${normatize(title)}:fechar`,
		});
		 return trackEvent('modal-argomentos', `fechar-${normatize(title)}`, cluster, device);
	},

	// Modal Tabs ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	ModalTabs_Abriu: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:argomentos',
			eventLabel: `argomentos:${normatize(title)}:abrir`,
		});
		 return trackEvent('modal-argomentos', `abrir-${normatize(title)}`, cluster, device);
	},
	ModalTabs_ClicouPoster: (posterTitle, sessionTitle, cluster, device) => {
		// Não disparar esse evento, porque não existe ação atual no site (no clique)
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		 return trackEvent('tabs', '', cluster, device);
	},
	ModalTabs_ClicouTab: (tabTitle, sessionTitle, index, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:argomentos',
			eventLabel: `${normatize(sessionTitle)}:${normatize(tabTitle)}:${index}`,
		});
		 return trackEvent('modal-argomentos', `clique-${normatize(sessionTitle)}-${normatize(tabTitle)}-${index}`, cluster, device);
	},
	ModalTabs_MudouTab: (tabTitle, sessionTitle, index, cluster, device) => {
		// Não é mais utilizado esse evento porque precisamos ter o evento de 'Clique'
		// e o evento de 'Drag' separados. O 'ModalGallery_MudouPoster' dispara sempre.
		 return trackEvent(tabTitle, sessionTitle, cluster, device);
	},
	ModalTabs_Scroll: (tabTitle, sessionTitle, index, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:argomentos',
			eventLabel: `${normatize(sessionTitle)}:${normatize(tabTitle)}:scroll-lateral:${index}`,
		});
		 return trackEvent('modal-argomentos', `clique-${normatize(sessionTitle)}-${normatize(tabTitle)}-scroll-lateral-${index}`, cluster, device);
	},
	ModalTabs_videoPlay: (tabTitle, sessionTitle, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'play:conteudo:argomentos',
			eventLabel: `${normatize(cluster)}:${normatize(tabTitle)}`,
		});
		 return trackEvent('modal-argomentos', `play-${normatize(cluster)}-${normatize(tabTitle)}`, cluster, device);
	},
	ModalTabs_videoPause: (tabTitle, sessionTitle, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'pause:conteudo:argomentos',
			eventLabel: `${normatize(cluster)}:${normatize(tabTitle)}`,
		});
		 return trackEvent('modal-argomentos', `pause-${normatize(cluster)}-${normatize(tabTitle)}`, cluster, device);
	},

	// Modal Gallery ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	ModalGallery_Abriu: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:argomentos',
			eventLabel: `argomentos:${normatize(title)}:abrir`,
		});
		 return trackEvent('modal-argomentos', `clique-${normatize(title)}-abrir`, cluster, device);
	},
	ModalGallery_ThumbsScroll: (tabTitle, sessionTitle, index, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:argomentos',
			eventLabel: `${normatize(sessionTitle)}:${normatize(tabTitle)}:scroll-lateral`,
		});
		 return trackEvent('modal-argomentos', `clique-${normatize(sessionTitle)}-${normatize(tabTitle)}-scroll-lateral`, cluster, device);
	},
	ModalGallery_ClicouPoster: (posterTitle, sessionTitle, cluster, device) => {
		// Não disparar o evento tradicional, porque não tem ação no site atual
		 return trackEvent('modal-argomentos', `${posterTitle}-${sessionTitle}`, cluster, device);
	},
	ModalGallery_ClicouThumb: (thumbTitle, sessionTitle, index, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:argomentos',
			eventLabel: `${normatize(sessionTitle)}:${normatize(thumbTitle)}:${index}`,
		});
		 return trackEvent('modal-argomentos', `clique-${normatize(sessionTitle)}-${normatize(thumbTitle)}-${index}`, cluster, device);
	},
	ModalGallery_MudouPoster: (thumbTitle, sessionTitle, index, cluster, device) => {
		// Não é mais utilizado esse evento porque precisamos ter o evento de 'Clique'
		// e o evento de 'Drag' separados. O 'ModalGallery_MudouPoster' dispara sempre.
		// return trackEvent('', '', cluster, device);
	},
	ModalGallery_Scroll: (thumbTitle, sessionTitle, index, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:argomentos',
			eventLabel: `${normatize(sessionTitle)}:${normatize(thumbTitle)}:scroll-lateral:${index}`,
		});
		return trackEvent('modal-argomentos', `clique-${normatize(sessionTitle)}-${normatize(thumbTitle)}-scroll-lateral-${index}`, cluster, device);
	},
	ModalGallery_videoPlay: (tabTitle, sessionTitle, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'play:conteudo:argomentos',
			eventLabel: `${normatize(tabTitle)}:${normatize(sessionTitle)}`,
		});
		return trackEvent(normatize(tabTitle), `play-${normatize(tabTitle)}-${normatize(sessionTitle)}`, cluster, device);
	},
	ModalGallery_videoPause: (tabTitle, sessionTitle, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'pause:conteudo:argomentos',
			eventLabel: `${normatize(tabTitle)}:${normatize(sessionTitle)}`,
		});
		return trackEvent('modal-argomentos', `pause-${normatize(tabTitle)}-${normatize(sessionTitle)}`, cluster, device);
	},

	// MainPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	MainPage_ClicouArgomento: (title, cluster, device) => {
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos:${normatize(cluster)}`,
		// 	eventAction: 'clique:conteudo:argomentos',
		// 	eventLabel: `argomentos:${normatize(title)}:abrir`,
		// });
		// return trackEvent('argomentos', `abrir-${normatize(title)}`, cluster, device);
	},
	MainPage_ClicouProximo: (index, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return trackEvent('argomentos', '', cluster, device);
	},
	MainPage_ClicouAnterior: (index, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return trackEvent('argomentos', '', cluster, device);
	},

	// TipPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	TipPage_ClicouShare: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:versao-sugerida',
			eventLabel: 'versao:compartilhar:facebook',
		});
		return trackEvent('versao-sugerida', 'clique-compartilhar-facebook', cluster, device);
	},
	TipPage_ClicouBullet: (title, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		return trackEvent('versao-sugerida', '', cluster, device);
	},
	TipPage_ClicouCustomize: (cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:versao-sugerida',
			eventLabel: 'versao:cta:monte-o-seu-argo',
		});
		return trackEvent('versao-sugerida', 'clique-cta-monte-o-seu-argo', cluster, device);
	},
	TipPage_ClicouAgende: (cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:versao-sugerida',
			eventLabel: 'versao:cta:compre-o-seu',
		});
		return trackEvent('versao-sugerida', 'clique-cta-compre-o-seu', cluster, device);
	},
	TipPage_ClicouPoster: (title, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return trackEvent('versao-sugerida', '', cluster, device);
	},
	TipPage_ClicouThumb: (title, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return trackEvent('versao-sugerida', '', cluster, device);
	},
	TipPage_ClicouNext: (index, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:versao-sugerida',
			eventLabel: 'versao:galeria:mais-imagens',
		});
		return trackEvent('versao-sugerida', 'clique-galeria-mais-imagens-avancar', cluster, device);
	},
	TipPage_ClicouPrev: (index, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:versao-sugerida',
			eventLabel: 'versao:galeria:mais-imagens',
		});
		return trackEvent('versao-sugerida', 'clique-galeria-mais-imagens-voltar', cluster, device);
	},
	TipPage_MudouDica: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:versao-sugerida',
			eventLabel: `versao:galeria:${normatize(title)}`,
		});
		return trackEvent('versao-sugerida', `galeria-${normatize(title)}`, cluster, device);
	},

	// VersionsPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	VersionsPage_ClicouOfertas: (version, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'interacao:conteudo:todas-as-versoes',
			eventLabel: `${normatize(version)}:ofertas-fiat`,
		});
		return trackEvent('todas-as-versoes', `${normatize(version)}-ofertas-fiat`, cluster, device);
	},
	VersionsPage_GirouCarro: (version, color, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'interacao:conteudo:todas-as-versoes',
			eventLabel: `${normatize(version)}:360`,
		});
		return trackEvent('todas-as-versoes', `${normatize(version)}-360`, cluster, device);
	},
	VersionsPage_GirouCarroPrimeiraVez: (version, color, cluster, device) => {
		// Não precisa mais disparar esse evento, o 'VersionsPage_GirouCarro' é disparado junto
		// return trackEvent('todas-as-versoes', '', cluster, device);
	},
	VersionsPage_ClicouVersaoCarro: (version, color, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'interacao:conteudo:todas-as-versoes',
			eventLabel: `${normatize(version)}:click`,
		});
		return trackEvent('todas-as-versoes', `clique-${normatize(version)}`, cluster, device);
	},

	// AboutPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	AboutPage_ClicouTabMobile: (title, open, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: `clique:conteudo:${normatize(title)}`,
			eventLabel: `${normatize(title)}:conheca-tudo:${open ? 'abrir' : 'fechar'}`,
		});
		return trackEvent('conheca-tudo', `${open ? 'abrir' : 'fechar'}-${normatize(title)}`, cluster, device);
	},
	AboutPage_ClicouTab: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: `clique:conteudo:${normatize(title)}`,
			eventLabel: `${normatize(title)}:conheca-tudo:abrir`,
		});
		return trackEvent('conheca-tudo', `abrir-${normatize(title)}`, cluster, device);
	},
	AboutPage_ClicouTab_Close: (title, cluster, device) => {
		// Pediram para remover esse disparo no desktop
		// ga('send', 'event', {
		// 	eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
		// 	eventAction: `clique:conteudo:${normatize(title)}`,
		// 	eventLabel: `${normatize(title)}:conheca-tudo:fechar`,
		// });
		// return trackEvent('conheca-tudo', '', cluster, device);
	},
	AboutPage_ClicouPoster: (title, cluster, device) => {
		// Não tem ação no site atual, não precisa disparar evento.
		// return trackEvent('conheca-tudo', '', cluster, device);
	},
	AboutPage_ClicouBullet: (title, session, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return trackEvent('conheca-tudo', '', cluster, device);
	},
	AboutPage_MudouPoster: (title, session, cluster, device) => {
		const complemento = device === 'm' ? ':scroll-lateral' : '';
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:' + `${normatize(session)}`,
			eventLabel: `${normatize(session)}:${normatize(title)}${complemento}`,
		});
		return trackEvent('conheca-tudo', `${normatize(session)}-${normatize(title)}${complemento}`, cluster, device);
	},
	AboutPage_ArrowPrevPoster: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: `clique:conteudo:${normatize(title)}`,
			eventLabel: `${normatize(title)}:conheca-tudo:anterior`,
		});
		return trackEvent('conheca-tudo', 'clique-anterior', cluster, device);
	},
	AboutPage_ArrowNextPoster: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: `clique:conteudo:${normatize(title)}`,
			eventLabel: `${normatize(title)}:conheca-tudo:proxima`,
		});
		return trackEvent('conheca-tudo', 'clique-proxima', cluster, device);
	},
	AboutPage_ContentButton: (sectionName, contentTitle, buttonLabel, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: `clique:conteudo:${normatize(sectionName)}`,
			eventLabel: `${normatize(contentTitle)}:${normatize(buttonLabel)}`,
		});
		return trackEvent('conheca-tudo', `clique-${normatize(contentTitle)}-${normatize(buttonLabel)}`, cluster, device);
	},


    //Live Experience ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	AboutPage_ContentButton: (cluster) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: `clique:conteudo:live-experience `,
			eventLabel: `clique:conteudo:live-experience `,
		});
		// return trackEvent('conheca-tudo', `clique-${normatize(contentTitle)}-${normatize(buttonLabel)}`, cluster, device);
	},

	// GalleryPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	GalleryPage_ClicouPoster: (posterTitle, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return trackEvent('galeria', '', cluster, device);
	},
	GalleryPage_ClicouThumb: (thumbTitle, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return trackEvent('galeria', '', cluster, device);
	},
	GalleryPage_ClicouBullet: (title, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return trackEvent('galeria', '', cluster, device);
	},
	GalleryPage_MudouPoster: (thumbTitle, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:galeria',
			eventLabel: `galeria:${normatize(thumbTitle)}`,
		});
		return trackEvent('galeria', normatize(thumbTitle), cluster, device);
	},
	Galeria_C2A_LinkAgende: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:galeria',
			eventLabel: 'modal-cta:compre-o-seu',
		});
		return trackEvent('modal-galeria', 'clique-cta-compre-o-seu', cluster, device);
	},

	// ActionPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	ActionPage_ClicouNavItem: (label, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:cta:footer',
			eventLabel: `cta:${normatize(label)}`,
		});
		return trackEvent('footer', `clique-cta-footer-${normatize(label)}`, cluster, device);
	},
	ActionPage_ClicouSocialItem: (name, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:cta:footer',
			eventLabel: `footer:compartilhar:${normatize(name)}`,
		});
		return trackEvent('footer', `clique-cta-footer-compartilhar-${normatize(name)}`, cluster, device);
	},
	ActionPage_AgendeSeuTesteDrive: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:cta:footer',
			eventLabel: 'cta:compre-o-seu',
		});
		return trackEvent('footer', 'clique-cta-footer-compre-o-seu', cluster, device);
	},

	// OffersPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	OffersCard_ClicouEuQuero: (id, mvsCode, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:ofertas',
			eventLabel: `${id}-${mvsCode}:eu-quero`,
		});
		return null;
	},
	OffersCard_ClicouShare: (title, cluster, device) => {
		ga('send', 'event', {
			eventCategory: `landing-page:argomentos${cluster ? `:${cluster}` : ''}`,
			eventAction: 'clique:conteudo:ofertas',
			eventLabel: `${normatize(title)}:compartilhar`,
		});
		return null;
	},
	OffersPage_ScrollOfertas: (title, cluster, device) => {
		return null;
	},

	// Banner ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Banner_ClicouLink: (cluster, device) => {
		return null;
	},
};

export default data;
