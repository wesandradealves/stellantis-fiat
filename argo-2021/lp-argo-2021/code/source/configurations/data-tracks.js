import normatize from '@dcode/utils/xtras/normatize';

function createTrack(options) {
	const opts = Object(options);
	return {
		event: opts.event || 'interaction', // interaction | view | vpv
		eventActor: 'user', // OK
		segment: 'landing-page', // OK
		product: 'argo-my21', // OK
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
		if (/^(fotos)$/.test(section) && device === 'm') return null;
		if (/^(about)$/.test(section)) {
			section = 'sobre';
		}
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
		return track('clique', 'menu-lateral', 'menu-lateral', 'conteudo', 'logo-argo', cluster, device);
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
	MenuFixed_ClicouMonteOSeuArgo: (title, cluster, device) => {
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
		return track('fechamento', 'destaque', 'argo-trekking', 'conteudo', normatize(title), cluster, device);
	},

	// Modal Tabs ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	ModalTabs_Abriu: (title, cluster, device) => {
		return track('vpv', 'destaque', 'argo-trekking', 'conteudo', normatize(title), cluster, device);
	},
	ModalTabs_ClicouPoster: (posterTitle, sessionTitle, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(posterTitle);
		return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}`, cluster, device);
	},
	ModalTabs_ClicouTab: (tabTitle, sessionTitle, index, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(tabTitle);
		return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}:${index}`, cluster, device);
	},
	ModalTabs_ClicouProximo: (nomeDoCard, cluster, device) => {
		return track('clique', 'destaque', normatize(nomeDoCard), 'conteudo', 'proximo', cluster, device);
	},
	ModalTabs_ClicouAnterior: (nomeDoCard, cluster, device) => {
		return track('clique', 'destaque', normatize(nomeDoCard), 'conteudo', 'anterior', cluster, device);
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
		return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}:${index}${complemento}`, cluster, device);
	},
	ModalTabs_videoPlay: (tabTitle, sessionTitle, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(tabTitle);
		// return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}:play`, cluster, device);
		return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${subsection}:play`, cluster, device);
	},
	ModalTabs_videoPause: (tabTitle, sessionTitle, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(tabTitle);
		// return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}:pause`, cluster, device);
		return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${subsection}:pause`, cluster, device);
	},

	// Modal Gallery ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	ModalGallery_Abriu: (title, cluster, device) => {
		return track('vpv', 'destaque', 'argo-trekking', 'conteudo', normatize(title), cluster, device);
	},
	ModalGallery_ThumbsScroll: (tabTitle, sessionTitle, index, cluster, device) => {
		const complemento = ':scroll-lateral';
		const section = normatize(sessionTitle);
		const subsection = normatize(tabTitle);
		return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}${complemento}`, cluster, device);
	},
	ModalGallery_ClicouPoster: (posterTitle, sessionTitle, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(posterTitle);
		return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}`, cluster, device);
	},
	ModalGallery_ClicouThumb: (thumbTitle, sessionTitle, index, cluster, device) => {
		const section = normatize(sessionTitle);
		const subsection = normatize(thumbTitle);
		return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}:${index}`, cluster, device);
	},
	ModalGallery_MudouPoster: (thumbTitle, sessionTitle, index, cluster, device) => {
		// Não é mais utilizado esse evento porque precisamos ter o evento de 'Clique'
		// e o evento de 'Drag' separados. O 'ModalGallery_MudouPoster' dispara sempre.
		// const complemento = ':scroll-lateral';
		// const section = normatize(sessionTitle);
		// const subsection = normatize(thumbTitle);
		// return track('view', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}:${index}${complemento}`, cluster, device);
	},
	ModalGallery_Scroll: (thumbTitle, sessionTitle, index, cluster, device) => {
		const complemento = ':scroll-lateral';
		const section = normatize(sessionTitle);
		const subsection = normatize(thumbTitle);
		return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}:${index}${complemento}`, cluster, device);
	},
	ModalGallery_videoPlay: (tabTitle, sessionTitle, cluster, device) => {
		const section = normatize(tabTitle);
		const subsection = normatize(sessionTitle);
		return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}:play`, cluster, device);
	},
	ModalGallery_videoPause: (tabTitle, sessionTitle, cluster, device) => {
		const section = normatize(tabTitle);
		const subsection = normatize(sessionTitle);
		return track('clique', 'destaque', 'argo-trekking', 'conteudo', `${section}:${subsection}:pause`, cluster, device);
	},

	// MainPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	MainPage_ClicouThumbnail: (title, cluster, device) => {
		return track('abertura', 'destaque', 'argo-trekking', 'conteudo', normatize(title), cluster, device);
	},
	MainPage_ClicouProximo: (index, cluster, device) => {
    return track('clique', 'destaque', 'argo-trekking', 'conteudo', 'avancar', cluster, device);
	},
	MainPage_ClicouAnterior: (index, cluster, device) => {
    return track('clique', 'destaque', 'argo-trekking', 'conteudo', 'voltar', cluster, device);
	},
	MainPage_PaginouFeaturesNoMobile: (index, cluster, device) => {//ok
		return track('interacao', 'argo-my21', 'argo-my21', 'conteudo', 'swipe', cluster, device);
	},
	MainPage_ClicouConheca: (cluster, device) => {
		return track('clique', 'argo-my21', 'argo-my21', 'conteudo', 'conheca', cluster, device);
	},

	// TipPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	TipPage_ClicouShare: (title, cluster, device) => {
		return track('clique', 's-design', 'cta', 'conteudo', 'compartilhar-facebook', cluster, device);
	},
	TipPage_ClicouCustomize: (section, cluster, device) => {
		return track('clique', normatize(section), 'cta', 'conteudo', 'monte-o-seu', cluster, device);
	},
	TipPage_ClicouAgende: (section, cluster, device) => {
		return track('clique', normatize(section), 'cta', 'conteudo', 'compre-o-seu', cluster, device);
	},
	TipPage_ClicouBullet: (section, title, cluster, device) => {
		// return track('clique', 's-design', 'galeria', 'conteudo', null, cluster, device);
	},
	TipPage_ClicouPoster: (section, title, cluster, device) => {
		return track('clique', normatize(section), 'galeria', 'conteudo', normatize(title), cluster, device);
	},
	TipPage_ClicouThumb: (section, title, cluster, device) => {
		return track('clique', normatize(section), 'galeria', 'conteudo', normatize(title), cluster, device);
	},
	TipPage_ClicouNext: (index, cluster, device) => {
		return track('clique', 's-design', 'galeria', 'conteudo', 'mais-imagens-avancar', cluster, device);
	},
	TipPage_ClicouPrev: (index, cluster, device) => {
		return track('clique', 's-design', 'galeria', 'conteudo', 'mais-imagens-voltar', cluster, device);
	},
	TipPage_ClicouDica: (title, caption, cluster, device) => {
		return track('clique', 's-design', 'galeria', 'conteudo', normatize(title), cluster, device);
	},
	TipPage_MudouDica: (title, caption, cluster, device) => {
		return track('view', 's-design', 'galeria', 'conteudo', normatize(title), cluster, device);
	},
	TipPage_ClicouTab: (title, cluster, device) => {
		return track('clique', 's-design', 's-design', 'conteudo', normatize(title), cluster, device);
	},
	TipPage_OpenZoom: (section, nomeImagem, cluster, device) => {
		return track('abertura', normatize(section), normatize(nomeImagem), 'conteudo', 'zoom', cluster, device);
	},
	TipPage_CloseZoom: (section, nomeImagem, cluster, device) => {
		return track('fechamento', normatize(section), normatize(nomeImagem), 'conteudo', 'zoom', cluster, device);
		// return track('clique', 's-design', 'modal', 'conteudo', 'fechar', cluster, device);
	},
	TipPage_ZoomChanged: (section, nomeImagem, cluster, device) => {
		return track('interacao', normatize(section), normatize(nomeImagem), 'conteudo', 'mudar', cluster, device);
	},
	TipPage_MudouThumbs: (cluster, device) => {
	},

	// VersionsPage ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	VersionsPage_ClicouOfertas: (version, cluster, device) => {
		// alert(JSON.stringify(track('clique', 'todas-as-versoes', normatize(version), 'conteudo', 'cta:ofertas-fiat', cluster, device), null, 2));
		// return track('clique', 'todas-as-versoes', 'cta', 'conteudo', 'ofertas', cluster, device); // ok 32
		return track('clique', 'todas-as-versoes', normatize(version), 'conteudo', 'cta-ofertas', cluster, device); // ok 32
	},
	VersionsPage_GirouCarro: (version, color, label, cluster, device) => {
		return track('interacao', 'todas-as-versoes', normatize(version), 'conteudo', '360', cluster, device);
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
	GalleryPage_ClicouThumb: (thumbTitle, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return track('clique', 'galeria', 'galeria', 'conteudo', normatize(thumbTitle), cluster, device);
	},
	GalleryPage_ClicouBullet: (title, cluster, device) => {
		// Não tinha esse evento p/ ser trackeado no PDF enviado
		// return track('clique', 'galeria', 'galeria', 'conteudo', normatize(title), cluster, device);
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
