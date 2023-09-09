import normatize from '@dcode/utils/xtras/normatize';

function createTrack(options) {
	const opts = Object(options);
	return {
		event: opts.event || 'interaction', // interaction | view | vpv
		eventActor: 'user', // OK
		segment: 'landing-page', // OK
		product: 'mobi-2021', // OK
		interactionType: opts.type || '-', // clique | abertura | fechamento | remocao | selecao | preencheu
		component: {
			part: opts.part || 'conteudo', // em algum momento retornou algo diferente de header, footer ou conteudo
			props: {
				section: opts.section || '-',
				subsection: opts.subsection || '-',
				cluster: opts.cluster || '-',
				'element-text': opts.elementText || '-', // se view ou vpv, passar device
			},
		},
	};
}

function track(type, section, subsection, part, elementText, cluster, device) {
	const isViewpage  = /^(?:view|vpv)$/i.test(type);
	const event = isViewpage ? type : 'interaction';
	type = isViewpage ? 'abertura' : type;
	// elementText = isViewpage ? device : elementText;
	if (!/^(?:clique|abertura|fechamento|remocao|selecao|preencheu)$/.test(type)) {
		console.error('track.interactionType is wrong at:', { event, type, section, subsection, part, elementText, cluster, device });
	}
	if (!/^(?:header|footer|conteudo)$/.test(part)) {
		console.error('track.part is wrong at:', { event, type, section, subsection, part, elementText, cluster, device });
	}
	return createTrack({ event, type, section, subsection, part, elementText, cluster, device });
}

export const data = {
	// General ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	App_Iniciou: (cluster, device) => {},
	App_Pageview: (section, cluster, device) => {
		if (/^(interior|design|performance|tecnologia|seguranca|for[cç]a[-\s]e[-\s]pot[eê]ncia|acess[oó]rios|servi[çc]os?)$/i.test(section)) return null;
		// if (/^(fotos)$/.test(section) && device === 'm') return null;
		if (/^(about)$/.test(section)) section = 'sobre';
		return track('vpv', section, '', 'conteudo', null, cluster, device);
	},

	// Menu ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Menu_ClicouAbrir: (cluster, device) => {
		return track('abertura', 'menu-lateral', 'menu-lateral', 'conteudo', 'menu', cluster, device);
	},
	Menu_ClicouFechar: (cluster, device) => {
		return track('fechamento', 'menu-lateral', 'menu-lateral', 'conteudo', 'menu', cluster, device);
	},
	Menu_ClicouLogoCarro: (cluster, device) => {
		return track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'logo-mobi', cluster, device);
	},
	Menu_ClicouLogoFiat: (cluster, device) => {
		return track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'logo-fiat', cluster, device);
	},
	Menu_ClicouPin: (cluster, device) => {
		return track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'concessionarias', cluster, device);
	},
	Menu_ClicouItem: (section, cluster, device) => {
		return track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', normatize(section), cluster, device);
	},
	Menu_ClicouMonteOSeu: (title, cluster, device) => {
		return track('clique', 'menu-lateral', 'cta', 'conteudo', 'monte-o-seu', cluster, device);
	},
	Menu_ClicouSimularFinanciamento: (title, cluster, device) => {
		return track('clique', 'menu-lateral', 'cta', 'conteudo', 'simule-um-financiamento', cluster, device);
	},
	Menu_ClicouAgendeSeuTesteDrive: (title, cluster, device) => {
		return track('clique', 'menu-lateral', 'cta', 'conteudo', 'compre-o-seu', cluster, device);
	},
	Menu_ClicouConcessionarias: (title, cluster, device) => {
		return track('clique', 'menu-lateral', 'cta', 'conteudo', 'concessionarias', cluster, device);
	},
	Menu_ClicouOfertasFiat: (title, cluster, device) => {
		return track('clique', 'menu-lateral', 'cta', 'conteudo', 'ofertas', cluster, device);
	},

	// Menu Fixed ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	MenuFixed_abrir: (cluster, device) => {
		return track('abertura', 'menu-flutuante', 'menu-flutuante', 'conteudo', 'menu', cluster, device);
	},
	MenuFixed_fechar: (cluster, device) => {
		return track('fechamento', 'menu-flutuante', 'menu-flutuante', 'conteudo', 'menu', cluster, device);
	},
	MenuFixed_ClicouItem: (title, cluster, device) => {},
	MenuFixed_ClicouMonteOSeuMobi: (title, cluster, device) => {
		return track('clique', 'menu-flutuante', 'cta', 'conteudo', 'monte-o-seu', cluster, device);
	},
	MenuFixed_ClicouSimularFinanciamento: (title, cluster, device) => {
		return track('clique', 'menu-flutuante', 'cta', 'conteudo', 'simule-um-financiamento', cluster, device);
	},
	MenuFixed_ClicouAgendeSeuTesteDrive: (title, cluster, device) => {
		return track('clique', 'menu-flutuante', 'cta', 'conteudo', 'compre-o-seu', cluster, device);
	},
	MenuFixed_ClicouConcessionarias: (title, cluster, device) => {
		return track('clique', 'menu-flutuante', 'cta', 'conteudo', 'concessionarias', cluster, device);
	},
	MenuFixed_ClicouOfertasFiat: (title, cluster, device) => {
		return track('clique', 'menu-flutuante', 'cta', 'conteudo', 'ofertas-fiat', cluster, device);
	},

	// Formulario ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	FormSchedule_Abriu: (cluster, device) => {
		// return track('view', 'compre-o-seu', 'compre-o-seu', 'formulario', 'abrir', cluster, device);
	},
	FormSchedule_ClicouWhatsApp: (cluster, device) => {
		return track('clique', 'compre-o-seu', 'cta', 'conteudo', 'lead-whatsapp', cluster, device);
	},
	FormSchedule_PreencheuNome: (cluster, device) => {
		return track('preencheu', 'compre-o-seu', 'compre-o-seu', 'formulario', 'nome', cluster, device);
	},
	FormSchedule_PreencheuEmail: (cluster, device) => {
		return track('preencheu', 'compre-o-seu', 'compre-o-seu', 'formulario', 'email', cluster, device);
	},
	FormSchedule_PreencheuTelefone: (cluster, device) => {
		return track('preencheu', 'compre-o-seu', 'compre-o-seu', 'formulario', 'telefone', cluster, device);
	},
	FormSchedule_PreencheuPerfil: (value, cluster, device) => {
		return track('preencheu', 'compre-o-seu', 'compre-o-seu', 'formulario', 'perfil', cluster, device);
	},
	FormSchedule_PreencheuCPF_CNPJ: (value, cluster, device) => {
		return track('preencheu', 'compre-o-seu', 'compre-o-seu', 'formulario', 'cpf', cluster, device);
	},
	FormSchedule_PreencheuVersao: (value, cluster, device) => {
		return track('preencheu', 'compre-o-seu', 'compre-o-seu', 'formulario', 'versao', cluster, device);
	},
	FormSchedule_PreencheuMensagem: (value, cluster, device) => {
		return track('preencheu', 'compre-o-seu', 'compre-o-seu', 'formulario', 'mensagem', cluster, device);
	},
	FormSchedule_PreencheuCep: (value, cluster, device) => {
		return track('preencheu', 'compre-o-seu', 'compre-o-seu', 'formulario', 'cep', cluster, device);
	},
	FormSchedule_AddTelefone: (cluster, device) => {
		return track('clique', 'compre-o-seu', 'compre-o-seu', 'formulario', 'add-telefone', cluster, device);
	},
	FormSchedule_ClicouFechar: (cluster, device) => {
		return track('clique', 'compre-o-seu', 'compre-o-seu', 'formulario', 'fechar', cluster, device);
	},
	FormSchedule_ClicouEnviar: (cluster, device) => {
		return track('clique', 'compre-o-seu', 'compre-o-seu', 'formulario', 'lead-enviar', cluster, device);
	},
	FormSchedule_Enviou: (status, cluster, device) => {
		return track('clique', 'compre-o-seu', 'compre-o-seu', 'formulario', 'lead-sucesso', cluster, device);
	},
	FormSchedule_FecharEnviado: (status, cluster, device) => {
		// return track('clique', 'compre-o-seu', 'compre-o-seu', 'formulario', 'fechar-x-enviado', cluster, device);
	},
	FormSchedule_CEPCidade: (status, cluster, device) => {
		return track('preencheu', 'compre-o-seu', 'compre-o-seu', 'formulario', 'cep-cidade', cluster, device);
	},
	FormSchedule_FecharSucesso: (status, cluster, device) => {
		return track('fechamento', 'compre-o-seu', 'compre-o-seu', 'formulario', 'botao-fechar', cluster, device);
	},
	FormSchedule_ClicouReceberComunicacaoTelefone: (value, cluster, device) => {
		return track('selecao', 'compre-o-seu', 'compre-o-seu', 'formulario', 'aceito-comunicacao-telefone', cluster, device);
	},
	FormSchedule_ClicouNaoReceberComunicacaoTelefone: (value, cluster, device) => {
		return track('remocao', 'compre-o-seu', 'compre-o-seu', 'formulario', 'nao-aceito-comunicacao-telefone', cluster, device);
	},
	FormSchedule_ClicouReceberComunicacaoEmail: (value, cluster, device) => {
		return track('selecao', 'compre-o-seu', 'compre-o-seu', 'formulario', 'aceito-comunicacao-email', cluster, device);
	},
	FormSchedule_ClicouNaoReceberComunicacaoEmail: (value, cluster, device) => {
		return track('remocao', 'compre-o-seu', 'compre-o-seu', 'formulario', 'nao-aceito-comunicacao-email', cluster, device);
	},
	FormSchedule_SelecionouConcessionaria: (value, cluster, device) => {
		return track('selecao', 'compre-o-seu', 'compre-o-seu', 'formulario', 'concessionaria', cluster, device);
	},

	// Modal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Modal_Fechou: (pathname, cluster, device) => {
		// Não utilizado porque o parametro não é o mesmo da abertura
		// return track('fechamento', 'destaque', 'home', 'conteudo', 'fechou', cluster, device);
	},
	Modal_Fechou_WithTitle: (title, cluster, device) => {
		return track('fechamento', 'destaque', 'mobi-trekking', 'conteudo', normatize(title), cluster, device);
	},

	// Modal Tabs ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	ModalTabs_Abriu: (title, cluster, device) => {
		return track('vpv', 'destaque', 'mobi-trekking', 'conteudo', normatize(title), cluster, device);
	},
	ModalTabs_ClicouPoster: (posterTitle, sessionTitle, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(posterTitle);
		return track('clique', 'destaque', 'mobi-trekking', 'conteudo', `${section}:${subsection}`, cluster, device);
	},
	ModalTabs_ClicouTab: (tabTitle, sessionTitle, index, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(tabTitle);
		return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${section}:${subsection}:${index}`, cluster, device);
	},
	ModalTabs_MudouTab: (tabTitle, sessionTitle, index, cluster, device) => {
		// Não é mais utilizado esse evento porque precisamos ter o evento de 'Clique'
		// e o evento de 'Drag' separados. O 'ModalGallery_MudouPoster' dispara sempre.
		// return track('view', tabTitle, sessionTitle, 'conteudo', null, cluster, device);
	},
	ModalTabs_Scroll: (tabTitle, sessionTitle, index, cluster, device) => {
		const complemento = ':scroll-lateral';
		const section = normatize(sessionTitle);
		const subsection = normatize(tabTitle);
		return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${section}:${subsection}:${index}${complemento}`, cluster, device);
	},
	ModalTabs_videoPlay: (tabTitle, sessionTitle, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(tabTitle);
		// return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${section}:${subsection}:play`, cluster, device);
		return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${subsection}:play`, cluster, device);
	},
	ModalTabs_videoPause: (tabTitle, sessionTitle, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(tabTitle);
		// return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${section}:${subsection}:pause`, cluster, device);
		return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${subsection}:pause`, cluster, device);
	},

	// Modal Gallery ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	ModalGallery_Abriu: (title, cluster, device) => {
		return track('vpv', 'destaque', 'mobi-2021', 'conteudo', normatize(title), cluster, device);
	},
	ModalGallery_ThumbsScroll: (tabTitle, sessionTitle, index, cluster, device) => {
		const complemento = ':scroll-lateral';
		const section = normatize(sessionTitle);
		const subsection = normatize(tabTitle);
		return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${section}:${subsection}${complemento}`, cluster, device);
	},
	ModalGallery_ClicouPoster: (posterTitle, sessionTitle, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(posterTitle);
		return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${section}:${subsection}`, cluster, device);
	},
	ModalGallery_ClicouThumb: (thumbTitle, sessionTitle, index, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(thumbTitle);
		return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${section}:${subsection}:${index}`, cluster, device);
	},
	ModalGallery_MudouPoster: (thumbTitle, sessionTitle, index, cluster, device) => {
		// Não é mais utilizado esse evento porque precisamos ter o evento de 'Clique'
		// e o evento de 'Drag' separados. O 'ModalGallery_MudouPoster' dispara sempre.
		// const complemento = ':scroll-lateral';
		// const section = normatize(sessionTitle);
		// const subsection = normatize(thumbTitle);
		// return track('view', 'destaque', 'mobi-2021', 'conteudo', `${section}:${subsection}:${index}${complemento}`, cluster, device);
	},
	ModalGallery_Scroll: (thumbTitle, sessionTitle, index, cluster, device) => {
		const complemento = ':scroll-lateral';
		const section = normatize(sessionTitle);
		const subsection = normatize(thumbTitle);
		return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${section}:${subsection}:${index}${complemento}`, cluster, device);
	},
	ModalGallery_videoPlay: (tabTitle, sessionTitle, cluster, device) => {
		const section = normatize(tabTitle);
		const subsection = normatize(sessionTitle);
		return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${section}:${subsection}:play`, cluster, device);
	},
	ModalGallery_videoPause: (tabTitle, sessionTitle, cluster, device) => {
		const section = normatize(tabTitle);
		const subsection = normatize(sessionTitle);
		return track('clique', 'destaque', 'mobi-2021', 'conteudo', `${section}:${subsection}:pause`, cluster, device);
	},

	// MainPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	MainPage_ClicouThumbnail: (title, cluster, device) => {
		return track('abertura', 'destaque', 'mobi-trekking', 'conteudo', normatize(title), cluster, device);
	},
	MainPage_ClicouProximo: (index, cluster, device) => {
    return track('clique', 'destaque', 'mobi-trekking', 'conteudo', 'avancar', cluster, device);
	},
	MainPage_ClicouAnterior: (index, cluster, device) => {
    return track('clique', 'destaque', 'mobi-trekking', 'conteudo', 'voltar', cluster, device);
	},
	MainPage_PaginouFeaturesNoMobile: (index, cluster, device) => {//ok
		return track('interacao', 'mobi-2021', 'mobi-trekking', 'conteudo', 'swipe', cluster, device);
	},

	// TipPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	TipPage_ClicouShare: (title, cluster, device) => {
		return track('clique', 'mobi-trekking', 'cta', 'conteudo', 'compartilhar-facebook', cluster, device);
	},
	TipPage_ClicouCustomize: (cluster, device) => {
		return track('clique', 'mobi-trekking', 'cta', 'conteudo', 'monte-o-seu', cluster, device);
	},
	TipPage_ClicouAgende: (cluster, device) => {
		return track('clique', 'mobi-trekking', 'cta', 'conteudo', 'ofertas-fiat', cluster, device);
	},
	TipPage_ClicouBullet: (title, cluster, device) => {
		return track('clique', 'mobi-trekking', 'galeria', 'conteudo', null, cluster, device);
	},
	TipPage_ClicouPoster: (title, cluster, device) => {
		return track('clique', 'mobi-trekking', 'galeria', 'conteudo', normatize(title), cluster, device);
	},
	TipPage_ClicouThumb: (title, cluster, device) => {
		return track('clique', 'mobi-trekking', 'galeria', 'conteudo', normatize(title), cluster, device);
	},
	TipPage_ClicouNext: (index, cluster, device) => {
		return track('clique', 'mobi-trekking', 'galeria', 'conteudo', 'mais-imagens-avancar', cluster, device);
	},
	TipPage_ClicouPrev: (index, cluster, device) => {
		return track('clique', 'mobi-trekking', 'galeria', 'conteudo', 'mais-imagens-voltar', cluster, device);
	},
	TipPage_ClicouDica: (title, caption, cluster, device) => {
		return track('clique', 'mobi-trekking', 'galeria', 'conteudo', normatize(title), cluster, device);
	},
	TipPage_MudouDica: (title, caption, cluster, device) => {
		// return track('view', 'mobi-trekking', 'galeria', 'conteudo', normatize(title), cluster, device);
	},
	TipPage_MudouZoomItem: (direction, cluster, device) => {
		return null;
	},
	TipPage_ClicouZoom: (index, cluster, device) => {
		return null;
	},
	TipPage_ClicouCloseZoom: (index, cluster, device) => {
		return null;
	},

	// VersionsPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	VersionsPage_ClicouOfertas: (version, cluster, device) => {
		// alert(JSON.stringify(track('clique', 'todas-as-versoes', normatize(version), 'conteudo', 'cta:ofertas-fiat', cluster, device), null, 2));
		// return track('clique', 'todas-as-versoes', 'cta', 'conteudo', 'ofertas', cluster, device); // ok 32
		return track('clique', 'todas-as-versoes', normatize(version), 'conteudo', 'monte-o-seu', cluster, device); // ok 32
	},
	VersionsPage_ClicouAgende: (version, cluster, device) => {
		return track('clique', 'todas-as-versoes', normatize(version), 'conteudo', 'compre-o-seu', cluster, device); // ok 32
	},
	VersionsPage_GirouCarro: (version, color, label, cluster, device) => {
		return track('interacao', 'todas-as-versoes', normatize(version), 'conteudo', '360', cluster, device);
	},
	VersionsPage_CarregouVersaoCarro: (version, cluster, device) => {
		return track('clique', 'todas-as-versoes', normatize(version), 'conteudo', '360-load' , cluster, device);
	},
	VersionsPage_GirouCarroPrimeiraVez: (version, color, label, cluster, device) => {
		// Não precisa mais disparar esse evento, o 'VersionsPage_GirouCarro' é disparado junto
		// return track('interacao', 'todas-as-versoes', normatize(version), 'conteudo', '360', cluster, device);
	},
	VersionsPage_SelecionouVersaoCarro: (version, color, label, cluster, device) => {//*
		return track('clique', 'todas-as-versoes', 'versao', 'conteudo', normatize(version), cluster, device);
	},

	// AboutPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	AboutPage_ClicouTabMobile: (title, open, cluster, device) => {
		const action = `${open ? 'abertura' : 'fechamento'}`;
		return track(action, 'sobre', 'sobre', 'conteudo', normatize(title), cluster, device);
	},
	AboutPage_ClicouTab: (title, cluster, device) => {
		return track('abertura', 'sobre', 'sobre', 'conteudo', normatize(title), cluster, device);
	},
	AboutPage_ClicouTab_Close: (title, cluster, device) => {
		// Pediram para remover esse disparo no desktop
		// return track('clique', 'sobre', normatize(title), 'conteudo', 'fechar', cluster, device);
	},
	AboutPage_ClicouPoster: (title, cluster, device) => {
		// Não tem ação no site atual, não precisa disparar evento.
		// return track('clique', 'sobre', normatize(title), 'conteudo', null, cluster, device);
	},
	AboutPage_ClicouBullet: (title, session, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return track('clique', 'sobre', normatize(title), 'conteudo', null, cluster, device);
	},
	AboutPage_MudouPoster: (title, subsectionName, cluster, device) => {
		const complemento = device === 'm' ? ':scroll-lateral' : '';
		const subsection = normatize(subsectionName);
		const name = normatize(title);
		return track('clique', 'sobre', subsection, 'conteudo', `${name}${complemento}`, cluster, device);
	},
	AboutPage_ArrowPrevPoster: (title, cluster, device) => {
		return track('clique', 'sobre', 'sobre', 'conteudo', 'anterior', cluster, device);
	},
	AboutPage_ArrowNextPoster: (title, cluster, device) => {
		return track('clique', 'sobre', 'sobre', 'conteudo', 'proxima', cluster, device);
	},
	AboutPage_ContentButton: (section, contentTitle, buttonLabel, cluster, device) => {//*
		return track('clique', normatize(section), normatize(contentTitle), 'conteudo', normatize(buttonLabel), cluster, device);
		// return track('clique', 'sobre', normatize(contentTitle), 'conteudo', normatize(buttonLabel), cluster, device);
		// return track('clique', 'acessorios', 'cta', 'conteudo', 'baixar-catalogo', cluster, device);
	},

	// GalleryPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	GalleryPage_ClicouPoster: (posterTitle, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return track('clique', 'galeria', 'galeria', 'conteudo', normatize(posterTitle), cluster, device);
	},
	GalleryPage_ClicouThumb: (thumbTitle, thumbIndex, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return track('clique', 'galeria', 'galeria', 'conteudo', normatize(thumbTitle), cluster, device);
		return track('clique', 'galeria', 'galeria', 'conteudo', normatize(thumbTitle) || thumbIndex, cluster, device);
	},
	GalleryPage_ClicouBullet: (title, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
	},
	GalleryPage_MudouPoster: (index, cluster, device) => {
		return track('clique', 'galeria', 'galeria', 'conteudo', index, cluster, device);
	},
	Galeria_C2A_LinkAgende: (title, cluster, device) => {
		return track('clique', 'galeria', 'cta', 'conteudo', 'compre-o-seu', cluster, device);
	},
	Galeria_C2A_Fechou: (title, cluster, device) => {
		return track('clique', 'galeria', 'cta', 'conteudo', 'fechar', cluster, device);
	},
	GalleryPage_OpenZoom: () => {
		return null;
	},

	// ActionPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	ActionPage_ClicouNavItem: (name, cluster, device) => {
		return track('clique', 'cta-mobile', 'cta', 'conteudo', normatize(name), cluster, device);
	},
	ActionPage_ClicouSocialItem: (name, cluster, device) => {
		return track('clique', 'home', 'cta', 'footer', normatize(name), cluster, device);
	},
	ActionPage_ClicouAgendeSeuTesteDrive: (name, cluster, device) => {
		return track('clique', 'cta-mobile', 'cta', 'conteudo', normatize(name), cluster, device);
	},

	// OffersPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	OffersCard_ClicouEuQuero: (id, mvsCode, cluster, device) => {
		return null;
	},
	OffersCard_ClicouShare: (title, cluster, device) => {
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


// track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'mobi-2021', cluster, device);
// track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'todas-as-versoes', cluster, device);
// track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'mobi-trekking', cluster, device);
// track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'fotos', cluster, device);
// track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'tudo-do-mobi', cluster, device);
// track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'design', cluster, device);
// track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'interior', cluster, device);
// track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'tecnologia', cluster, device);
// track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'performance', cluster, device);
// track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'acessorios', cluster, device);
// track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'servicos', cluster, device);
// track('clique', 'menu-lateral', 'cta', 'conteudo', 'monte-o-seu', cluster, device);
// track('clique', 'menu-lateral', 'cta', 'conteudo', 'simule-um-financiamento', cluster, device);
// track('clique', 'menu-lateral', 'cta', 'conteudo', 'compre-o-seu', cluster, device);
// track('clique', 'menu-lateral', 'cta', 'conteudo', 'concessionarias', cluster, device);
// track('clique', 'menu-lateral', 'cta', 'conteudo', 'ofertas', cluster, device);
// track('abertura', 'menu-lateral', 'menu-lateral', 'conteudo', 'menu', cluster, device);
// track('fechamento', 'menu-lateral', 'menu-lateral', 'conteudo', 'menu', cluster, device);
// track('vpv', 'destaque', 'mobi-2021', 'conteudo', '', cluster, device);
// track('abertura', 'destaque', 'mobi-2021', 'conteudo', '<nome-do-card>', cluster, device);
// track('vpv', 'destaque', 'mobi-2021', 'conteudo', '<nome-do-card>', cluster, device);
// track('clique', 'todas-as-versoes', 'mobi-2021', 'conteudo', 'swipe', cluster, device);
// track('clique', 'todas-as-versoes', '<nome-da-versao>', 'conteudo', '360-load' , cluster, device);
// track('interacao', 'todas-as-versoes', '<nome-da-versao>', 'conteudo', '360', cluster, device);
// track('clique', 'todas-as-versoes', 'versao', 'conteudo', '<nome-do-veiculo>', cluster, device);
// track('clique', 'todas-as-versoes', 'cta', 'conteudo', 'compre-o-seu', cluster, device);
// track('clique', 'todas-as-versoes', 'cta', 'conteudo', 'monte-o-seu', cluster, device);
// track('vpv', 'todas-as-versoes', 'versao', 'conteudo', '<nome-do-carro>', cluster, device);
// track('vpv', 'galeria', 'galeria', 'conteudo', '', cluster, device);
// track('clique', 'mobi-trekking', 'galeria', 'conteudo', '<nome-da-feature>', cluster, device);
// track('clique', 'mobi-trekking', 'cta', 'conteudo', 'ofertas-fiat' , cluster, device);
// track('vpv', 'sobre', '<cards>', 'conteudo', '', cluster, device);
// track('abertura', 'sobre', 'sobre', 'conteudo', 'design', cluster, device);
// track('clique', 'sobre', 'design', 'conteudo', '<nome-da-feature>', cluster, device);
// track('abertura', 'sobre', 'sobre', 'conteudo', 'tecnologia', cluster, device);
// track('clique', 'sobre', 'tecnologia', 'conteudo', '<nome-da-feature>', cluster, device);
// track('abertura', 'sobre', 'sobre', 'conteudo', 'performance', cluster, device);
// track('abertura', 'sobre', 'sobre', 'conteudo', 'interior', cluster, device);
// track('clique', 'sobre', 'interior', 'conteudo', 'nome-da-feature', cluster, device);
// track('clique', 'sobre', 'performance', 'conteudo', '<nome-da-feature>', cluster, device);
// track('abertura', 'sobre', 'sobre', 'conteudo', 'acessorios', cluster, device);
// track('clique', 'sobre', 'acessorios', 'conteudo', '<nome-da-feature>', cluster, device);
// track('clique', 'acessorios', '<nome-da-feature>', 'conteudo', 'baixar-catalogo' , cluster, device);
// track('abertura', 'sobre', 'sobre', 'conteudo', 'servicos', cluster, device);
// track('clique', 'sobre', 'servicos', 'conteudo', '<nome-da-feature>', cluster, device);
// track('clique', 'servicos', '<nome-da-feature>', 'conteudo', 'saiba-mais' , cluster, device);
// track('clique', 'home', 'cta', 'footer', 'facebook', cluster, device);
// track('clique', 'home', 'cta', 'footer', 'youtube', cluster, device);
// track('clique', 'home', 'cta', 'footer', 'twitter', cluster, device);
// track('clique', 'home', 'cta', 'footer', 'instagram', cluster, device);
// track('clique', 'cta-mobile', 'cta', 'conteudo', 'monte-o-seu', cluster, device);
// track('clique', 'cta-mobile', 'cta', 'conteudo', 'simule-um-financiamento', cluster, device);
// track('clique', 'cta-mobile', 'cta', 'conteudo', 'compre-o-seu', cluster, device);
// track('clique', 'cta-mobile', 'cta', 'conteudo', 'concessionarias', cluster, device);
// track('clique', 'cta-mobile', 'cta', 'conteudo', 'ofertas-fiat' , cluster, device);
// track('vpv', 'ctas', 'cta', 'conteudo', '', cluster, device);
// track('clique', 'mobi-2021', 'features', 'conteudo', 'anterior-<nome-da-feature>', cluster, device);
// track('clique', 'mobi-2021', 'features', 'conteudo', 'proximo-<nome-da-feature>', cluster, device);
// track('clique', 'galeria', 'cta', 'conteudo', 'compre-o-seu', cluster, device);
// track('clique', 'galeria', 'cta', 'conteudo', 'fechar', cluster, device);
// track('clique', 'menu-flutuante', 'cta', 'conteudo', 'monte-o-seu', cluster, device);
// track('clique', 'menu-flutuante', 'cta', 'conteudo', 'compre-o-seu', cluster, device);
