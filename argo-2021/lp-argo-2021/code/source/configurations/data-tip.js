import clamp from '@dcode/utils/xtras/clamp';
import * as is from '@dcode/utils/is';

export const data = {
	// title: '#Lindo&Esportivo',
	description: '<span>Conheça as versões</span> mais esportivas <span>do Fiat Argo.</span>',
	switchTitle: 'Gostou desta versão?',
	list: [
		{
			id: '#index',
			slug: 'argomentos',
			model: 'TREKKING',
			version: '',
			currencySymbol: 'R$',
			price: '',
			features: [
				{
					title: 'DESIGN INVOCADO',
					description: 'Característica principal de todo Argo.',
					thumbnail: {
						desk: 'assets/dicas-trekking/desk/thumbs/trekking-1.jpg',
						mobile: 'assets/dicas-trekking/mobile/trekking-1.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas-trekking/desk/trekking-1@2x.jpg',
							mobile: 'assets/dicas-trekking/mobile/card-mobile-01@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/webp',
								srcSet: 'assets/dicas-trekking/mobile/card-mobile-01.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas-trekking/mobile/card-mobile-01.jpg',
								},
							},
							{
								media: '(orientation: landscape)', //smartphone->imagem desk
								oneOf: [
									{
										type: 'image/webp',
										srcSet: '/assets/dicas-trekking/desk/trekking-1.webp',
									},
									{
										type: 'image/webp',
										srcSet: '/assets/dicas-trekking/desk/trekking-1.webp',
									},
								],
								fallback: {
									srcSet: 'assets/dicas-trekking/desk/trekking-1.jpg',
									type: 'image/jpg',
								},
							},
							{
								media: '(min-width: 1025px)', //desk
								oneOf: [
									{
										type: 'image/webp',
										srcSet: '/assets/dicas-trekking/desk/card-mobile-01.webp',
									},
									{
										type: 'image/webp',
										srcSet: '/assets/dicas-trekking/desk/card-mobile-01.webp',
									},
								],
								fallback: {
									srcSet: 'assets/dicas-trekking/desk/card-mobile-01.jpg',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: 'CENTRAL MULTIMÌDIA DE 7"',
					description: 'Com Android Auto e Apple CarPlay.',
					thumbnail: {
						desk: 'assets/dicas-trekking/desk/thumbs/trekking-2.jpg',
						mobile: 'assets/dicas-trekking/mobile/card-mobile-02.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas-trekking/desk/trekking-2@2x.jpg',
							mobile: 'assets/dicas-trekking/mobile/card-mobile-02@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/jpg',
								srcSet: 'assets/dicas-trekking/mobile/card-mobile-02.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas-trekking/mobile/card-mobile-02.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	srcSet: 'assets/dicas-trekking/mobile/card-mobile-02@2x.jpg',
							// },
							{
								media: '(min-width: 1025px)', //desk
								srcSet: 'assets/dicas-trekking/desk/trekking-2.jpg',
							},
						],
					},
				},
				{
					title: 'VOLANTE MULTIFUNCIONAL',
					description: 'Com comandos de voz.',
					thumbnail: {
						desk: 'assets/dicas-trekking/desk/thumbs/trekking-3.jpg',
						mobile: 'assets/dicas-trekking/mobile/card-mobile-03.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas-trekking/desk/trekking-3@2x.jpg',
							mobile: 'assets/dicas-trekking/mobile/card-mobile-03@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/jpg',
								srcSet: 'assets/dicas-trekking/mobile/card-mobile-03.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas-trekking/mobile/card-mobile-03.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	srcSet: 'assets/dicas-trekking/mobile/card-mobile-03@2x.jpg',
							// },
							{
								media: '(min-width: 1025px)', //desk
								srcSet: 'assets/dicas-trekking/desk/trekking-3.jpg',
							},
						],
					},
				},
				{
					title: 'INTERIOR E PAINEL ESCURECIDOS',
					description: 'E bancos com a costura laranja.',
					thumbnail: {
						desk: 'assets/dicas-trekking/desk/thumbs/trekking-4.jpg',
						mobile: 'assets/dicas-trekking/mobile/card-mobile-04.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas-trekking/desk/trekking-4@2x.jpg',
							mobile: 'assets/dicas-trekking/mobile/card-mobile-04@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/jpg',
								srcSet: 'assets/dicas-trekking/mobile/card-mobile-04.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas-trekking/mobile/card-mobile-04.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	srcSet: 'assets/dicas-trekking/mobile/card-mobile-04@2x.jpg',
							// },
							{
								media: '(min-width: 1025px)', //desk
								srcSet: 'assets/dicas-trekking/desk/trekking-4.jpg',
							},
						],
					},
				},
				// {
				// 	title: 'MOTOR FIREFLY 1.3 OU E.TORQ 1.8',
				// 	description: 'Esse aqui é bravo. Bravíssimo!',
				// 	thumbnail: {
				// 		desk: 'assets/dicas-trekking/desk/thumbs/trekking-5.jpg',
				// 		mobile: 'assets/dicas-trekking/mobile/card-mobile-05.jpg',
				// 	},
				// 	poster: {
				// 		alt: '',
				// 		zoom: {
				// 			desk: 'assets/dicas-trekking/desk/trekking-5@2x.jpg',
				// 			mobile: 'assets/dicas-trekking/mobile/card-mobile-05@2x.jpg',
				// 		},
				// 		sources: [
				// 			{
				// 				media: '(max-width: 1024px)', //smartphone/mobile
				// 				type: 'image/jpg',
				// 				srcSet: 'assets/dicas-trekking/mobile/card-mobile-05.jpg',
				// 				fallback: {
				// 					type: 'image/jpg',
				// 					srcSet: 'assets/dicas-trekking/mobile/card-mobile-05.jpg',
				// 				},
				// 			},
				// 			// {
				// 			// 	media: '(orientation: landscape)', //smartphone->imagem desk
				// 			// 	srcSet: 'assets/dicas-trekking/mobile/card-mobile-05@2x.jpg',
				// 			// },
				// 			{
				// 				media: '(min-width: 1025px)', //desk
				// 				srcSet: 'assets/dicas-trekking/desk/trekking-5.jpg',
				// 			},
				// 		],
				// 	},
				// },
				{
					title: 'PNEUS DE USO MISTO',
					description: 'Robustez, versatilidade e segurança.',
					thumbnail: {
						desk: 'assets/dicas-trekking/desk/thumbs/trekking-6.jpg',
						mobile: 'assets/dicas-trekking/mobile/card-mobile-06.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas-trekking/desk/trekking-6@2x.jpg',
							mobile: 'assets/dicas-trekking/mobile/card-mobile-06@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/jpg',
								srcSet: 'assets/dicas-trekking/mobile/card-mobile-06.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas-trekking/mobile/card-mobile-06.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	srcSet: 'assets/dicas-trekking/mobile/card-mobile-06@2x.jpg',
							// },
							{
								media: '(min-width: 1025px)', //desk
								srcSet: 'assets/dicas-trekking/desk/trekking-6.jpg',
							},
						],
					},
				},
				{
					title: 'A MAIOR ALTURA DO SOLO',
					description: 'São 210mm de pura aventura.',
					thumbnail: {
						desk: 'assets/dicas-trekking/desk/thumbs/trekking-7.jpg',
						mobile: 'assets/dicas-trekking/mobile/card-mobile-07.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas-trekking/desk/trekking-7@2x.jpg',
							mobile: 'assets/dicas-trekking/mobile/card-mobile-07@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/jpg',
								srcSet: 'assets/dicas-trekking/mobile/card-mobile-07.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas-trekking/mobile/card-mobile-07.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	srcSet: 'assets/dicas-trekking/mobile/card-mobile-07@2x.jpg',
							// },
							{
								media: '(min-width: 1025px)', //desk
								srcSet: 'assets/dicas-trekking/desk/trekking-7.jpg',
							},
						],
					},
				},
				// {
				// 	title: 'SENSORES DE PRESSÃO DOS PNEUS',
				// 	description: 'Segurança a todo momento',
				// 	thumbnail: {
				// 		desk: 'assets/dicas-trekking/desk/thumbs/trekking-8.jpg',
				// 		mobile: 'assets/dicas-trekking/mobile/card-mobile-08.jpg',
				// 	},
				// 	poster: {
				// 		alt: '',
				// 		zoom: {
				// 			desk: 'assets/dicas-trekking/desk/trekking-8@2x.jpg',
				// 			mobile: 'assets/dicas-trekking/mobile/card-mobile-08@2x.jpg',
				// 		},
				// 		sources: [
				// 			{
				// 				media: '(max-width: 1024px)', //smartphone/mobile
				// 				type: 'image/webp',
				// 				srcSet: 'assets/dicas-trekking/mobile/card-mobile-08.webp',
				// 				fallback: {
				// 					type: 'image/jpg',
				// 					srcSet: 'assets/dicas-trekking/mobile/card-mobile-08.jpg',
				// 				},
				// 			},
				// 			// {
				// 			// 	media: '(orientation: landscape)', //smartphone->imagem desk
				// 			// 	srcSet: 'assets/dicas-trekking/mobile/card-mobile-08@2x.jpg',
				// 			// },
				// 			{
				// 				media: '(min-width: 1025px)', //desk
				// 				srcSet: 'assets/dicas-trekking/desk/trekking-8.jpg',
				// 			},
				// 		],
				// 	},
				// },
			],
		},
		{
			id: '#index',
			slug: 'argomentos',
			model: 'S-DESIGN',
			version: '',
			currencySymbol: 'R$',
			price: '',
			features: [
				{
					title: 'BELLISSIMO DESIGN',
					description: 'Com pintura e detalhes escurecidos.',
					thumbnail: {
						desk: 'assets/dicas/desk/thumbs/s-design-1.jpg',
						mobile: 'assets/dicas/mobile/s-design-1.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas/desk/s-design-1@2x.jpg',
							mobile: 'assets/dicas/mobile/s-design-1@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/webp',
								srcSet: 'assets/dicas/mobile/s-design-1.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas/mobile/s-design-1.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	oneOf: [
							// 		{
							// 			type: 'image/webp',
							// 			srcSet: '/assets/dicas/desk/s-design-1.webp',
							// 		},
							// 		{
							// 			type: 'image/webp',
							// 			srcSet: '/assets/dicas/desk/s-design-1.webp',
							// 		},
							// 	],
							// 	fallback: {
							// 		srcSet: 'assets/dicas/desk/s-design-1.jpg',
							// 		type: 'image/jpg',
							// 	},
							// },
							{
								media: '(min-width: 1025px)', //desk
								oneOf: [
									{
										type: 'image/webp',
										srcSet: '/assets/dicas/desk/s-design-1.webp',
									},
									{
										type: 'image/webp',
										srcSet: '/assets/dicas/desk/s-design-1.webp',
									},
								],
								fallback: {
									srcSet: 'assets/dicas/desk/s-design-1.jpg',
									type: 'image/jpg',
								},
							},
						],
					},
				},
				{
					title: 'RODA DE LIGA LEVE 15”',
					description: 'Com a exclusiva pintura na Bronze.',
					thumbnail: {
						desk: 'assets/dicas/desk/thumbs/s-design-2.jpg',
						mobile: 'assets/dicas/mobile/s-design-mobile-2.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas/desk/s-design-2@2x.jpg',
							mobile: 'assets/dicas/mobile/s-design-mobile-2@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/jpg',
								srcSet: 'assets/dicas/mobile/s-design-mobile-2.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas/mobile/s-design-mobile-2.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	srcSet: 'assets/dicas/mobile/s-design-mobile-2@2x.jpg',
							// },
							{
								media: '(min-width: 1025px)', //desk
								srcSet: 'assets/dicas/desk/s-design-2.jpg',
							},
						],
					},
				},
				// {
				// 	title: 'INTERIOR E PAINEL ESCURECIDOS',
				// 	description: 'Além de um acabamento totalmente demais.',
				// 	thumbnail: {
				// 		desk: 'assets/dicas/desk/thumbs/s-design-3.jpg',
				// 		mobile: 'assets/dicas/mobile/s-design-mobile-3.jpg',
				// 	},
				// 	poster: {
				// 		alt: '',
				// 		zoom: {
				// 			desk: 'assets/dicas/desk/s-design-3@2x.jpg',
				// 			mobile: 'assets/dicas/mobile/s-design-mobile-3@2x.jpg',
				// 		},
				// 		sources: [
				// 			{
				// 				media: '(max-width: 1024px)', //smartphone/mobile
				// 				type: 'image/jpg',
				// 				srcSet: 'assets/dicas/mobile/s-design-mobile-3.jpg',
				// 				fallback: {
				// 					type: 'image/jpg',
				// 					srcSet: 'assets/dicas/mobile/s-design-mobile-3.jpg',
				// 				},
				// 			},
				// 			// {
				// 			// 	media: '(orientation: landscape)', //smartphone->imagem desk
				// 			// 	srcSet: 'assets/dicas/mobile/s-design-mobile-3@2x.jpg',
				// 			// },
				// 			{
				// 				media: '(min-width: 1025px)', //desk
				// 				srcSet: 'assets/dicas/desk/s-design-3.jpg',
				// 			},
				// 		],
				// 	},
				// },
				{
					title: 'KEYLESS ENTRY AND GO',
					description: 'Abra portas e ligue o motor sem tirar as chaves do bolso.',
					thumbnail: {
						desk: 'assets/dicas/desk/thumbs/s-design-4.jpg',
						mobile: 'assets/dicas/mobile/s-design-mobile-4.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas/desk/s-design-4@2x.jpg',
							mobile: 'assets/dicas/mobile/s-design-mobile-4@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/jpg',
								srcSet: 'assets/dicas/mobile/s-design-mobile-4.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas/mobile/s-design-mobile-4.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	srcSet: 'assets/dicas/mobile/s-design-mobile-4@2x.jpg',
							// },
							{
								media: '(min-width: 1025px)', //desk
								srcSet: 'assets/dicas/desk/s-design-4.jpg',
							},
						],
					},
				},
				{
					title: 'CENTRAL MULTIMÍDIA  UCONNECT 7”',
					description: 'Com Apple Car Play e Android auto.',
					thumbnail: {
						desk: 'assets/dicas/desk/thumbs/s-design-5.jpg',
						mobile: 'assets/dicas/mobile/s-design-mobile-5.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas/desk/s-design-5@2x.jpg',
							mobile: 'assets/dicas/mobile/s-design-mobile-5@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/jpg',
								srcSet: 'assets/dicas/mobile/s-design-mobile-5.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas/mobile/s-design-mobile-5.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	srcSet: 'assets/dicas/mobile/s-design-mobile-5@2x.jpg',
							// },
							{
								media: '(min-width: 1025px)', //desk
								srcSet: 'assets/dicas/desk/s-design-5.jpg',
							},
						],
					},
				},
				{
					title: 'AR CONDICIONADO DIGITAL',
					description: 'Sinta-se abraçado pelo clima ideal.',
					thumbnail: {
						desk: 'assets/dicas/desk/thumbs/s-design-6.jpg',
						mobile: 'assets/dicas/mobile/s-design-mobile-6.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas/desk/s-design-6@2x.jpg',
							mobile: 'assets/dicas/mobile/s-design-mobile-6@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/jpg',
								srcSet: 'assets/dicas/mobile/s-design-mobile-6.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas/mobile/s-design-mobile-6.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	srcSet: 'assets/dicas/mobile/s-design-mobile-6@2x.jpg',
							// },
							{
								media: '(min-width: 1025px)', //desk
								srcSet: 'assets/dicas/desk/s-design-6.jpg',
							},
						],
					},
				},
				{
					title: 'CONTROLE DE TRAÇÃO E ESTABILIDADE',
					description: 'E assistente de partidas em rampas (Hill Holder).',
					thumbnail: {
						desk: 'assets/dicas/desk/thumbs/s-design-7.jpg',
						mobile: 'assets/dicas/mobile/s-design-mobile-7.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas/desk/s-design-7@2x.jpg',
							mobile: 'assets/dicas/mobile/s-design-mobile-7@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/jpg',
								srcSet: 'assets/dicas/mobile/s-design-mobile-7.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas/mobile/s-design-mobile-7.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	srcSet: 'assets/dicas/mobile/s-design-mobile-7@2x.jpg',
							// },
							{
								media: '(min-width: 1025px)', //desk
								srcSet: 'assets/dicas/desk/s-design-7.jpg',
							},
						],
					},
				},
				{
					title: 'SENSORES DE PRESSÃO DOS PNEUS',
					description: 'Segurança a todo momento',
					thumbnail: {
						desk: 'assets/dicas/desk/thumbs/s-design-8.jpg',
						mobile: 'assets/dicas/mobile/s-design-mobile-8.jpg',
					},
					poster: {
						alt: '',
						zoom: {
							desk: 'assets/dicas/desk/s-design-8@2x.jpg',
							mobile: 'assets/dicas/mobile/s-design-mobile-8@2x.jpg',
						},
						sources: [
							{
								media: '(max-width: 1024px)', //smartphone/mobile
								type: 'image/jpg',
								srcSet: 'assets/dicas/mobile/s-design-mobile-8.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/dicas/mobile/s-design-mobile-8.jpg',
								},
							},
							// {
							// 	media: '(orientation: landscape)', //smartphone->imagem desk
							// 	srcSet: 'assets/dicas/mobile/s-design-mobile-8@2x.jpg',
							// },
							{
								media: '(min-width: 1025px)', //desk
								srcSet: 'assets/dicas/desk/s-design-8.jpg',
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
