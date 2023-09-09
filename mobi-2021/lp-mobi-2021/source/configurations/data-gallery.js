import clamp from '@dcode/utils/xtras/clamp';
import * as is from '@dcode/utils/is';

export const data = {
	title: '#Lindo&Esportivo',
	description: '',
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
					title: '',
          titleMobile: 'O ESPÍRITO TREKKING CHEGOU <br /> PARA O MOBI',
					description: 'Esportivo, valente e muito mais robusto.',
					thumbnail: {
						desk: 'assets/galeria/thumbs/galeria-mobi-01.jpg',
						mobile: 'assets/galeria/mobile/galeria-mobi-01.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria/desktop/galeria-mobi-01@2x.jpg',
							mobile: 'assets/galeria/mobile/galeria-mobi-01@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-01.jpg, /assets/galeria/mobile/galeria-mobi-01@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-01.jpg, /assets/galeria/mobile/galeria-mobi-01@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/mobile/galeria-mobi-01.jpg, /assets/galeria/mobile/galeria-mobi-01@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{							
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-01.jpg, /assets/galeria/desktop/galeria-mobi-01@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-01.jpg, /assets/galeria/desktop/galeria-mobi-01@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/desktop/galeria-mobi-01.jpg, /assets/galeria/desktop/galeria-mobi-01@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: '',
					description: 'No teto, retrovisores e maçanetas.',
					thumbnail: {
						desk: 'assets/galeria/thumbs/galeria-mobi-02.jpg',
						mobile: 'assets/galeria/mobile/galeria-mobi-02.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria/desktop/galeria-mobi-02@2x.jpg',
							mobile: 'assets/galeria/mobile/galeria-mobi-02@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-02.jpg, /assets/galeria/mobile/galeria-mobi-02@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-02.jpg, /assets/galeria/mobile/galeria-mobi-02@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/mobile/galeria-mobi-02.jpg, /assets/galeria/mobile/galeria-mobi-02@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{							
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-02.jpg, /assets/galeria/desktop/galeria-mobi-02@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-02.jpg, /assets/galeria/desktop/galeria-mobi-02@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/desktop/galeria-mobi-02.jpg, /assets/galeria/desktop/galeria-mobi-02@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: '',
					description: 'E exclusivo adesivo Trekking no capô.',
					thumbnail: {
						desk: 'assets/galeria/thumbs/galeria-mobi-03.jpg',
						mobile: 'assets/galeria/mobile/galeria-mobi-03.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria/desktop/galeria-mobi-03@2x.jpg',
							mobile: 'assets/galeria/mobile/galeria-mobi-03@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-03.jpg, /assets/galeria/mobile/galeria-mobi-03@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-03.jpg, /assets/galeria/mobile/galeria-mobi-03@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/mobile/galeria-mobi-03.jpg, /assets/galeria/mobile/galeria-mobi-03@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{							
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-03.jpg, /assets/galeria/desktop/galeria-mobi-03@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-03.jpg, /assets/galeria/desktop/galeria-mobi-03@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/desktop/galeria-mobi-03.jpg, /assets/galeria/desktop/galeria-mobi-03@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: '',
					description: '17,1cm de altura para encarar qualquer terreno.',
					thumbnail: {
						desk: 'assets/galeria/thumbs/galeria-mobi-04.jpg',
						mobile: 'assets/galeria/mobile/galeria-mobi-04.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria/desktop/galeria-mobi-04@2x.jpg',
							mobile: 'assets/galeria/mobile/galeria-mobi-04@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-04.jpg, /assets/galeria/mobile/galeria-mobi-04@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-04.jpg, /assets/galeria/mobile/galeria-mobi-04@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/mobile/galeria-mobi-04.jpg, /assets/galeria/mobile/galeria-mobi-04@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{							
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-04.jpg, /assets/galeria/desktop/galeria-mobi-04@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-04.jpg, /assets/galeria/desktop/galeria-mobi-04@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/desktop/galeria-mobi-04.jpg, /assets/galeria/desktop/galeria-mobi-04@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: '',
					description: 'Nova Central Multimídia Uconnect de 7”',
					thumbnail: {
						desk: 'assets/galeria/thumbs/galeria-mobi-05.jpg',
						mobile: 'assets/galeria/mobile/galeria-mobi-05.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria/desktop/galeria-mobi-05@2x.jpg',
							mobile: 'assets/galeria/mobile/galeria-mobi-05@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-05.jpg, /assets/galeria/mobile/galeria-mobi-05@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-05.jpg, /assets/galeria/mobile/galeria-mobi-05@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/mobile/galeria-mobi-05.jpg, /assets/galeria/mobile/galeria-mobi-05@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{							
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-05.jpg, /assets/galeria/desktop/galeria-mobi-05@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-05.jpg, /assets/galeria/desktop/galeria-mobi-05@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/desktop/galeria-mobi-05.jpg, /assets/galeria/desktop/galeria-mobi-05@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: '',
					description: 'E bancos com estilização Trekking.',
					thumbnail: {
						desk: 'assets/galeria/thumbs/galeria-mobi-06.jpg',
						mobile: 'assets/galeria/mobile/galeria-mobi-06.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria/desktop/galeria-mobi-06@2x.jpg',
							mobile: 'assets/galeria/mobile/galeria-mobi-06@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-06.jpg, /assets/galeria/mobile/galeria-mobi-06@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-06.jpg, /assets/galeria/mobile/galeria-mobi-06@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/mobile/galeria-mobi-06.jpg, /assets/galeria/mobile/galeria-mobi-06@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{							
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-06.jpg, /assets/galeria/desktop/galeria-mobi-06@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-06.jpg, /assets/galeria/desktop/galeria-mobi-06@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/desktop/galeria-mobi-06.jpg, /assets/galeria/desktop/galeria-mobi-06@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: '',
					description: 'E bancos com estilização Trekking.',
					thumbnail: {
						desk: 'assets/galeria/thumbs/galeria-mobi-07.jpg',
						mobile: 'assets/galeria/mobile/galeria-mobi-07.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria/desktop/galeria-mobi-07@2x.jpg',
							mobile: 'assets/galeria/mobile/galeria-mobi-07@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-07.jpg, /assets/galeria/mobile/galeria-mobi-07@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-07.jpg, /assets/galeria/mobile/galeria-mobi-07@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/mobile/galeria-mobi-07.jpg, /assets/galeria/mobile/galeria-mobi-07@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{							
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-07.jpg, /assets/galeria/desktop/galeria-mobi-07@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-07.jpg, /assets/galeria/desktop/galeria-mobi-07@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/desktop/galeria-mobi-07.jpg, /assets/galeria/desktop/galeria-mobi-07@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				// 8
				{
					title: '',
					description: 'E bancos com estilização Trekking.',
					thumbnail: {
						desk: 'assets/galeria/thumbs/galeria-mobi-08.jpg',
						mobile: 'assets/galeria/mobile/galeria-mobi-08.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria/desktop/galeria-mobi-08@2x.jpg',
							mobile: 'assets/galeria/mobile/galeria-mobi-08@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-08.jpg, /assets/galeria/mobile/galeria-mobi-08@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-08.jpg, /assets/galeria/mobile/galeria-mobi-08@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/mobile/galeria-mobi-08.jpg, /assets/galeria/mobile/galeria-mobi-08@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{							
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-08.jpg, /assets/galeria/desktop/galeria-mobi-08@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-08.jpg, /assets/galeria/desktop/galeria-mobi-08@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/desktop/galeria-mobi-08.jpg, /assets/galeria/desktop/galeria-mobi-08@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				// 9
				{
					title: '',
					description: 'E bancos com estilização Trekking.',
					thumbnail: {
						desk: 'assets/galeria/thumbs/galeria-mobi-09.jpg',
						mobile: 'assets/galeria/mobile/galeria-mobi-09.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/galeria/desktop/galeria-mobi-09@2x.jpg',
							mobile: 'assets/galeria/mobile/galeria-mobi-09@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1045px)', //smartphone/mobile
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-09.jpg, /assets/galeria/mobile/galeria-mobi-09@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/mobile/galeria-mobi-09.jpg, /assets/galeria/mobile/galeria-mobi-09@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/mobile/galeria-mobi-09.jpg, /assets/galeria/mobile/galeria-mobi-09@2x.jpg 2x',
									type: 'image/jpg',
								},
							},
							{							
								media: '(min-width: 1025px) and (orientation: landscape)', //desk
                oneOf: [
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-09.jpg, /assets/galeria/desktop/galeria-mobi-09@2x.jpg 2x',
									},
									{
										type: 'image/jpg',
										srcSet: '/assets/galeria/desktop/galeria-mobi-09.jpg, /assets/galeria/desktop/galeria-mobi-09@2x.jpg 2x',
									},
								],
								fallback: {
									srcSet: '/assets/galeria/desktop/galeria-mobi-09.jpg, /assets/galeria/desktop/galeria-mobi-09@2x.jpg 2x',
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
