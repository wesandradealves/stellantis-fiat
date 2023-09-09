import clamp from '@dcode/utils/xtras/clamp';
import * as is from '@dcode/utils/is';

export const data = {
	title: '#Lindo&Esportivo',
	description: 'Mobi Trekking: a novidade que merece um test-drive.',
	switchTitle: 'Gostou desta versão?',
	list: [
		{
			id: '#index',
			slug: 'mobi',
			model: 'MOBI TREEKING',
			version: '1.3 FLEX MANUAL',
			currencySymbol: 'R$',
			price: '',
			features: [
				{
					title: 'O ESPÍRITO TREKKING CHEGOU PARA O MOBI',
          titleMobile: 'O ESPÍRITO TREKKING CHEGOU <br /> PARA O MOBI',
					description: 'EXCLUSIVO, valente e muito mais robusto.',
					thumbnail: {
						desk: 'assets/galeria-trekking/thumbs/mobi-trekking-01.jpg',
						mobile: 'assets/galeria-trekking/mobile/mobi-trekking-01.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria-trekking/desktop/mobi-trekking-01@2x.jpg',
							mobile: 'assets/galeria-trekking/mobile/mobi-trekking-01@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-01.jpg, /assets/galeria-trekking/mobile/mobi-trekking-01@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-01.jpg, /assets/galeria-trekking/mobile/mobi-trekking-01@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-01.jpg, /assets/galeria-trekking/mobile/mobi-trekking-01@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
								oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-01.jpg, /assets/galeria-trekking/desktop/mobi-trekking-01@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-01.jpg, /assets/galeria-trekking/desktop/mobi-trekking-01@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-01.jpg, /assets/galeria-trekking/desktop/mobi-trekking-01@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: 'EXCLUSIVO DESIGN BICOLOR',
					titleMobile: 'EXCLUSIVO DESIGN BICOLOR',
					description: 'No teto e retrovisores.',
					thumbnail: {
						desk: 'assets/galeria-trekking/thumbs/mobi-trekking-02.jpg',
						mobile: 'assets/galeria-trekking/mobile/mobi-trekking-02.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria-trekking/desktop/mobi-trekking-02@2x.jpg',
							mobile: 'assets/galeria-trekking/mobile/mobi-trekking-02@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-02.jpg, /assets/galeria-trekking/mobile/mobi-trekking-02@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-02.jpg, /assets/galeria-trekking/mobile/mobi-trekking-02@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-02.jpg, /assets/galeria-trekking/mobile/mobi-trekking-02@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-02.jpg, /assets/galeria-trekking/desktop/mobi-trekking-02@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-02.jpg, /assets/galeria-trekking/desktop/mobi-trekking-02@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-02.jpg, /assets/galeria-trekking/desktop/mobi-trekking-02@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: 'GRADE FRONTAL COM A FLAG ITALIANA',
					titleMobile: 'GRADE FRONTAL COM A FLAG ITALIANA',
					description: 'E exclusivo adesivo Trekking no capô.',
					thumbnail: {
						desk: 'assets/galeria-trekking/thumbs/mobi-trekking-03.jpg',
						mobile: 'assets/galeria-trekking/mobile/mobi-trekking-03.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria-trekking/desktop/mobi-trekking-03@2x.jpg',
							mobile: 'assets/galeria-trekking/mobile/mobi-trekking-03@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-03.jpg, /assets/galeria-trekking/mobile/mobi-trekking-03@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-03.jpg, /assets/galeria-trekking/mobile/mobi-trekking-03@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-03.jpg, /assets/galeria-trekking/mobile/mobi-trekking-03@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-03.jpg, /assets/galeria-trekking/desktop/mobi-trekking-03@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-03.jpg, /assets/galeria-trekking/desktop/mobi-trekking-03@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-03.jpg, /assets/galeria-trekking/desktop/mobi-trekking-03@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: 'MAIS QUE ROBUSTO, GRANDIOSO',
					titleMobile: 'MAIS QUE ROBUSTO, GRANDIOSO',
					description: '17,1cm de altura para encarar qualquer terreno.',
					thumbnail: {
						desk: 'assets/galeria-trekking/thumbs/mobi-trekking-04.jpg',
						mobile: 'assets/galeria-trekking/mobile/mobi-trekking-04.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria-trekking/desktop/mobi-trekking-04@2x.jpg',
							mobile: 'assets/galeria-trekking/mobile/mobi-trekking-04@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-04.jpg, /assets/galeria-trekking/mobile/mobi-trekking-04@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-04.jpg, /assets/galeria-trekking/mobile/mobi-trekking-04@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-04.jpg, /assets/galeria-trekking/mobile/mobi-trekking-04@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-04.jpg, /assets/galeria-trekking/desktop/mobi-trekking-04@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-04.jpg, /assets/galeria-trekking/desktop/mobi-trekking-04@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-04.jpg, /assets/galeria-trekking/desktop/mobi-trekking-04@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: 'TECNOLÓGICO, CONECTADO E INTERATIVO',
					titleMobile: 'TECNOLÓGICO, CONECTADO E INTERATIVO',
					description: 'Nova Central Multimídia Uconnect de 7”',
					thumbnail: {
						desk: 'assets/galeria-trekking/thumbs/mobi-trekking-05.jpg',
						mobile: 'assets/galeria-trekking/mobile/mobi-trekking-05.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria-trekking/desktop/mobi-trekking-05@2x.jpg',
							mobile: 'assets/galeria-trekking/mobile/mobi-trekking-05@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-05.jpg, /assets/galeria-trekking/mobile/mobi-trekking-05@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-05.jpg, /assets/galeria-trekking/mobile/mobi-trekking-05@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-05.jpg, /assets/galeria-trekking/mobile/mobi-trekking-05@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-05.jpg, /assets/galeria-trekking/desktop/mobi-trekking-05@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-05.jpg, /assets/galeria-trekking/desktop/mobi-trekking-05@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-05.jpg, /assets/galeria-trekking/desktop/mobi-trekking-05@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: 'EXCELENTE ACABAMENTO INTERNO',
					titleMobile: 'EXCELENTE ACABAMENTO INTERNO',
					description: 'E bancos com estilização Trekking.',
					thumbnail: {
						desk: 'assets/galeria-trekking/thumbs/mobi-trekking-06.jpg',
						mobile: 'assets/galeria-trekking/mobile/mobi-trekking-06.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria-trekking/desktop/mobi-trekking-06@2x.jpg',
							mobile: 'assets/galeria-trekking/mobile/mobi-trekking-06@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-06.jpg, /assets/galeria-trekking/mobile/mobi-trekking-06@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-06.jpg, /assets/galeria-trekking/mobile/mobi-trekking-06@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/mobile/mobi-trekking-06.jpg, /assets/galeria-trekking/mobile/mobi-trekking-06@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-06.jpg, /assets/galeria-trekking/desktop/mobi-trekking-06@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-06.jpg, /assets/galeria-trekking/desktop/mobi-trekking-06@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria-trekking/desktop/mobi-trekking-06.jpg, /assets/galeria-trekking/desktop/mobi-trekking-06@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
			],
		},
	],
};

export const safeId = (id, min = 0, max = data.list.length - 1) => {
	const current = parseInt(id, 10) || min;
	return clamp(current, min, max);
};

export const getTipById = (id2find) => {
	id2find = safeId(id2find);
	return data.list.find((arg, index) => {
		const argId = /\#index/.test(arg.id) ? index : arg.id;
		return argId === id2find;
	});
};

export const getTipBySlug = (slug2find) => {
	return data.list.find((item) => {
		return item.slug === slug2find;
	});
};

export const findTip = (idOrSlug) => {
	return getTipBySlug(idOrSlug) || getTipById(idOrSlug);
};

export const orderByClusterOrder = (order) => {
	return order.reduce((args, item) => {
		let tip = data.list[item];
		if (tip) {
			args.push(tip);
			return args;
		}
		if (is.string(item)) {
			tip = findTip(item);
			if (tip) {
				args.push(tip);
				return args;
			}
		}
		throw new Error(`data-tip-error: O índice "${item}" não existe em data.list!`);
	}, []);
};

export default data;
