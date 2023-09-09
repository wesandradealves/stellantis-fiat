import whatsIcon from '../../public/assets/icons/whatsapp.svg';

export const data = {
	pin: {
		visible: false,
		href: 'https://www.fiat.com.br/concessionarias.html/?',
		target: '_blank',
	},
	list: [
		{
			label: 'ARGO',
			anchor: 'argomentos',
		},
		{
			label: 'VERSÕES ESPECIAIS',
			anchor: 's-design',
		},
		{
			label: 'TODAS AS VERSÕES',
			anchor: 'todas-versoes',
		},
		{
			label: 'FOTOS',
			anchor: 'galeria',
		},
		{
			label: 'TUDO DO ARGO',
			anchor: 'about',
		},
		{
			openTab: true,
			label: '• Design',
			anchor: 'design',
		},
		{
			openTab: true,
			label: '• Tecnologia',
			anchor: 'tecnologia',
		},
		{
			openTab: true,
			label: '• Performance',
			anchor: 'performance',
		},
		{
			openTab: true,
			label: '• Segurança',
			anchor: 'seguranca',
		},
		{
			openTab: true,
			label: '• Acessórios',
			anchor: 'acessorios',
		},
		{
			openTab: true,
			label: '• Pacote de Serviços',
			anchor: 'pacote-de-servicos',
		},
		// {
		// 	hideOnMobile: false,
		// 	label: 'CONVERSE COM A FIAT',
		// 	href: 'https://wa.me/message/SLO3XBN7D3YBD1',
		// 	icon: whatsIcon,
		// 	target: '_blank',
		// 	dataLayerId: 'Menu_ClicouMonteOSeu',
		// },
		{
			hideOnMobile: true,
			label: 'MONTE O SEU',
			href: 'https://argo.fiat.com.br/monte.html',
			target: '_blank',
			dataLayerId: 'Menu_ClicouMonteOSeu',
		},
		{
			hideOnMobile: false,
			label: 'SIMULE UM FINANCIAMENTO',
			href: 'https://argo.fiat.com.br/monte.html',
			target: '_blank',
			dataLayerId: 'Menu_ClicouSimularFinanciamento',
		},
		{
			hideOnMobile: false,
			router: true,
			labelMobile: 'COMPRE O SEU',
			label: 'COMPRE O SEU',
			href: '/agende',
			target: '_blank',
			dataLayerId: 'Menu_ClicouAgendeSeuTesteDrive',
		},
		{
			hideOnMobile: false,
			labelMobile: 'CONCESSIONÁRIAS',
			label: 'CONCESSIONÁRIA',
			href: 'https://www.fiat.com.br/concessionarias.html/?',
			target: '_blank',
			dataLayerId: 'Menu_ClicouConcessionarias',
		},
		{
			hideOnMobile: true,
			label: 'OFERTAS FIAT',
			href: 'https://ofertas.fiat.com.br/?q=argo',
			target: '_blank',
			dataLayerId: 'Menu_ClicouOfertasFiat',
		},
	],
};

export default data;
