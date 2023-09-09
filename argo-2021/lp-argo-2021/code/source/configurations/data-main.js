import clamp from '@dcode/utils/xtras/clamp';
import * as is from '@dcode/utils/is';

export const data = {
	title: 'Conquiste as ruas com o Argo Trekking. <mark>#Grandioso</mark>',
	argomentos: [
		// design
		{
			id: '#index',
			path: '/design',
			title: 'BEM-VINDO A FABULOSA ROBUSTEZ',
			modal: [
				{
					title: 'BEM-VINDO AO FABULOSO DESIGN DO FIAT ARGO.',
					shortTitle: '',
					description: 'Longe do solo e perto da sua próxima aventura, o Fiat Argo está com um design ainda mais robusto e aventureiro. Sua grade frontal também ficou mais invocada e ganhou novidades como o detalhe da flag italiana e o novo logo Fiat.',
					thumbnail: '/assets/argomentos/modais/design/smartphone/thumbs/smartphone-thumb-design1@3x.jpg',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1080px) and (orientation: portrait)',
								type: 'image/webp',
								srcSet: '/assets/argomentos/modais/mobile/modal-02.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: '/assets/argomentos/modais/mobile/modal-02.jpg, /assets/argomentos/modais/mobile/modal-01@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-02.jpg, /assets/argomentos/modais/desk/modal-01@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-02.jpg, /assets/argomentos/modais/desk/modal-01@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sprite: [
					{
						alt: '',
						// src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6wAAAJHAQMAAACuAUnyAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAFlJREFUeNrtwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcGA8QAAEzMRzrAAAAAElFTkSuQmCC',
						// src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6wAAAJCAQMAAAD+zNhBAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAFpJREFUeNrtwTEBAAAAwqD1T20ND6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg1QAMvQABFkdqRAAAAABJRU5ErkJggg==',
						src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6wAAAJEAQMAAAAolTtcAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAFpJREFUeNrtwTEBAAAAwqD1T20ND6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACABwMNqwABJbBZ8gAAAABJRU5ErkJggg==',
					},
				],
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						type: 'image/webp',
						srcSet: '/assets/argomentos/pictures/smartphone/poster@2x.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/argomentos/pictures/smartphone/poster.jpg, /assets/argomentos/pictures/smartphone/poster@2x.jpg 2x',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/pictures/desktop/poster@2x.webp',
							},
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/pictures/desktop/poster.webp',
							},
						],
						fallback: {
							srcSet: '/assets/argomentos/pictures/desktop/poster.jpg',
							type: 'image/jpg',
						},
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						srcSet: '/assets/argomentos/thumbs/mobile/poster.jpg',
					},
					{
						media: '(orientation: landscape)',
						type: 'image/webp',
						srcSet: '/assets/argomentos/thumbs/desk/poster.webp',
						fallback: {
							srcSet: '/assets/argomentos/thumbs/desk/poster.jpg',
							type: 'image/jpg',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						type: 'image/webp',
						srcSet: '/assets/argomentos/thumbs/desk/poster.webp',
						fallback: {
							srcSet: '/assets/argomentos/thumbs/desk/poster.jpg',
							type: 'image/jpg',
						},
					},
				],
			},
		},

		// central multimidia
		{
			id: '#index',
			path: '/central-multimidia',
			title: 'CENTRAL MULTIMÍDIA',
			modal: [
				{
					title: 'BEM-VINDO À FABULOSA CONECTIVIDADE DO FIAT ARGO.',
					shortTitle: 'CENTRAL MULTIMÍDIA',
					description: 'Com a Central Multimídia Uconnect de 7" você conecta seu smartphone via Android Auto ou Apple CarPlay e dirige na companhia dos seus apps favoritos. E você ainda pode controlar tudo pelo volante.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1080px) and (orientation: portrait)',
								type: 'image/webp',
								srcSet: '/assets/argomentos/modais/mobile/modal-02.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: '/assets/argomentos/modais/mobile/modal-02.jpg, /assets/argomentos/modais/mobile/modal-02@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-02.jpg, /assets/argomentos/modais/desk/modal-02@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-02.jpg, /assets/argomentos/modais/desk/modal-02@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						srcSet:
							'/assets/argomentos/pictures/smartphone/destaque-01.jpg, /assets/argomentos/pictures/smartphone/destaque-01@2x.jpg 2x, /assets/argomentos/pictures/smartphone/destaque-01@3x.jpg 3x',
					},
					{
						media: '(orientation: landscape)',
						srcSet:
							'/assets/argomentos/pictures/desktop/destaque-01.jpg, /assets/argomentos/pictures/desktop/destaque-01@2x.jpg 2x, /assets/argomentos/pictures/desktop/destaque-01@3x.jpg 3x',
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						srcSet:
							'/assets/argomentos/pictures/desktop/destaque-01.jpg, /assets/argomentos/pictures/desktop/destaque-01@2x.jpg 2x, /assets/argomentos/pictures/desktop/destaque-01@3x.jpg 3x',
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						type: 'image/webp',
						srcSet: '/assets/argomentos/thumbs/mobile/destaque-01@2x.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/argomentos/thumbs/mobile/destaque-01@2x.jpg',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/thumbs/desk/destaque-01@2x.webp',
							},
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/thumbs/desk/destaque-01@2x.webp',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/argomentos/thumbs/desk/destaque-01@2x.jpg',
						},
					},
				],
			},
		},

		// keyless
		{
			id: '#index',
			path: '/keyless',
			title: "KEYLESS ENTRY N'GO",
			modal: [
				{
					title: 'BEM-VINDO À FABULOSA PRATICIDADE DO FIAT ARGO.',
					shortTitle: '',
					description: 'Seu Argo está sempre de portas abertas para uma nova aventura. Com o sistema Keyless Entry N\' Go, você destrava as portas e dá a partida no carro sem tirar as chaves do bolso. É só chegar e dirigir.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1080px) and (orientation: portrait)',
								type: 'image/webp',
								srcSet: '/assets/argomentos/modais/mobile/modal-03.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: '/assets/argomentos/modais/mobile/modal-03.jpg, /assets/argomentos/modais/mobile/modal-03@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-03.jpg, /assets/argomentos/modais/desk/modal-03@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-03.jpg, /assets/argomentos/modais/desk/modal-03@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						srcSet: '',
					},
					{
						media: '(orientation: landscape)',
						srcSet: '',
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						srcSet: '',
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						type: 'image/webp',
						srcSet: '/assets/argomentos/thumbs/mobile/destaque-02@2x.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/argomentos/thumbs/mobile/destaque-02@2x.jpg',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/thumbs/desk/destaque-02@2x.webp',
							},
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/thumbs/desk/destaque-02@2x.webp',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/argomentos/thumbs/desk/destaque-02@2x.jpg',
						},
					},
				],
			},
		},

		// pneus
		{
			id: '#index',
			path: '/pneus',
			title: 'PNEUS DE USO MISTO',
			modal: [
				{
					title: 'BEM-VINDO À FABULOSA VERSATILIDADE DO FIAT ARGO.',
					shortTitle: 'PNEUS',
					description: 'Fabuloso dentro e fora da cidade. Com os pneus de uso misto, somados ao design robusto e os 21cm de altura em relação ao solo na versão Trekking, você tem a versatilidade e confiança para desbravar novos terrenos e criar novas histórias.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1080px) and (orientation: portrait)',
								type: 'image/webp',
								srcSet: '/assets/argomentos/modais/mobile/modal-04.webp',
								fallback: {
									type: 'image/jpg',
									srcSet:	'/assets/argomentos/modais/mobile/modal-04.jpg, /assets/argomentos/modais/mobile/modal-04@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-04.jpg, /assets/argomentos/modais/desk/modal-04@2x.jpg 2x',
							},
							{
								media: '(min-width: 025px) and (orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-04.jpg, /assets/argomentos/modais/desk/modal-04@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						srcSet: '/assets/argomentos/pictures/smartphone/destaque-03@3x.jpg 3x',
					},
					{
						media: '(orientation: landscape)',
						srcSet: '/assets/argomentos/pictures/desktop/destaque-03@3x.jpg 3x',
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						srcSet: '/assets/argomentos/pictures/desktop/destaque-03@3x.jpg 3x',
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						srcSet: '/assets/argomentos/thumbs/mobile/destaque-03@2x.jpg',
						type: 'image/webp',
						srcSet: '/assets/argomentos/thumbs/mobile/destaque-03@2x.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/argomentos/thumbs/mobile/destaque-03@2x.jpg',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/thumbs/desk/destaque-03@2x.webp',
							},
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/thumbs/desk/destaque-03@2x.webp',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/argomentos/thumbs/desk/destaque-03@2x.jpg',
						},
					},
				],
			},
		},

		// ar digital
		{
			id: '#index',
			path: '/ar-digital',
			title: 'AR DIGITAL',
			modal: [
				{
					title: 'BEM-VINDO AO FABULOSO CLIMA DO FIAT ARGO.',
					shortTitle: 'AR DIGITAL',
					description: 'Entrar num Fiat Argo é entrar no clima. Seu ar-condicionado digital tem sempre a ambientação certa, de acordo com a temperatura e/ou velocidades favoritos para o motorista. É tanta coisa que até arrepia, né?',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1080px) and (orientation: portrait)',
								type: 'image/webp',
								srcSet: '/assets/argomentos/modais/mobile/modal-05.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: '/assets/argomentos/modais/mobile/modal-05.jpg, /assets/argomentos/modais/mobile/modal-05@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-05.jpg, /assets/argomentos/modais/desk/modal-05@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-05.jpg, /assets/argomentos/modais/desk/modal-05@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						srcSet: '/assets/argomentos/pictures/smartphone/destaque-04@3x.jpg 3x',
					},
					{
						media: '(orientation: landscape)',
						srcSet: '/assets/argomentos/pictures/desktop/destaque-04@3x.jpg 3x',
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						srcSet: '/assets/argomentos/pictures/desktop/destaque-04@3x.jpg 3x',
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						type: 'image/webp',
						srcSet: '/assets/argomentos/thumbs/mobile/destaque-04@2x.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/argomentos/thumbs/mobile/destaque-04@2x.jpg',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/thumbs/desk/destaque-04@2x.webp',
							},
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/thumbs/desk/destaque-04@2x.webp',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/argomentos/thumbs/desk/destaque-04@2x.jpg',
						},
					},
				],
			},
		},

		// contole de tração
		{
			id: '#index',
			path: '/controle-de-tracao',
			title: 'CONTROLE DE TRAÇÃO',
			modal: [
				{
					title: 'BEM-VINDO À FABULOSA TECNOLOGIA DO FIAT ARGO.',
					shortTitle: 'CONTROLE DE TRAÇÃO',
					description: 'O Controle de tração e estabilidade do Fiat Argo corrige a rotação das rodas e estabiliza o veículo automaticamente em curvas mais acentuadas. E na hora de sair de ladeiras, você ainda conta com o assistente de partidas Hill Holder. É muita tecnologia.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1080px) and (orientation: portrait)',
								type: 'image/webp',
								srcSet: '/assets/argomentos/modais/mobile/modal-06.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: '/assets/argomentos/modais/mobile/modal-06.jpg, /assets/argomentos/modais/mobile/modal-06@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-06.jpg, /assets/argomentos/modais/desk/modal-06@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet: '/assets/argomentos/modais/desk/modal-06.jpg, /assets/argomentos/modais/desk/modal-06@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						srcSet: '/assets/argomentos/pictures/smartphone/destaque-05.jpg, /assets/argomentos/pictures/smartphone/destaque-05@2x.jpg 2x, /assets/argomentos/pictures/smartphone/destaque-05@3x.jpg 3x',
					},
					{
						media: '(orientation: landscape)',
						srcSet: '/assets/argomentos/pictures/tablet/destaque-05.jpg, /assets/argomentos/pictures/tablet/destaque-05@2x.jpg 2x, /assets/argomentos/pictures/tablet/destaque-05@3x.jpg 3x',
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						srcSet: '/assets/argomentos/pictures/desktop/destaque-05.jpg, /assets/argomentos/pictures/desktop/destaque-05@2x.jpg 2x, /assets/argomentos/pictures/desktop/destaque-05@3x.jpg 3x',
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1080px) and (orientation: portrait)',
						type: 'image/webp',
						srcSet: '/assets/argomentos/thumbs/mobile/destaque-05@2x.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/argomentos/thumbs/mobile/destaque-05@2x.jpg',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/thumbs/desk/destaque-05@2x.webp',
							},
							{
								type: 'image/webp',
								srcSet: '/assets/argomentos/thumbs/desk/destaque-05@2x.webp',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/argomentos/thumbs/desk/destaque-05@2x.jpg',
						},
					},
				],
			},
		},
	],
};

export const safeId = (id, min = 0, max = data.argomentos.length - 1) => {
	const current = parseInt(id, 10) || min;
	return clamp(current, min, max);
};

export const getAllPictures = () => {
	let pictures = [];
	data.argomentos.forEach((item) => {
		pictures = [...pictures, ...item.picture];
	});
	return pictures;
};

export const getAllThumbs = () => {
	let thumbs = [];
	data.argomentos.forEach((item) => {
		thumbs = [...thumbs, ...item.thumb];
	});
	return thumbs;
};

export const getAllInfo = () => {
	let info = [];
	data.argomentos.forEach((item) => {
		info = [...info, ...item.info];
	});
	return info;
};

export const getAllTitle = () => {
	let title = [];
	data.argomentos.forEach((item) => {
		title = [...title, ...item.title];
	});
	return title;
};

export const getAllPath = () => {
	let path = [];
	data.argomentos.forEach((item) => {
		path = [...path, ...item.path];
	});
	return path;
};

export const getAllId = () => {
	let id = [];
	data.argomentos.forEach((item) => {
		id = [...id, ...item.id];
	});
	return id;
};

export const getArgByInfoTitle = (infoId4search) => {
	for (let idx = 0; idx < data.argomentos.length; idx += 1) {
		const info = data.argomentos[idx].info.find((item) => item.title === infoId4search);
		if (info) return data.argomentos[idx];
	}
	return null;
};

export const getArgById = (id2find) => {
	id2find = safeId(id2find);
	return data.argomentos.find((arg, index) => {
		const argId = /\#index/.test(arg.id) ? index : arg.id;
		return argId === id2find;
	});
};

export const getArgByPath = (path2find) => {
	return data.argomentos.find((item) => {
		return item.path.indexOf(path2find) === 0;
	});
};

export const getArgByTitle = (title2find) => {
	return data.argomentos.find((item) => {
		return item.title === title2find;
	});
};

export const orderByClusterOrder = (order) => {
	return order.reduce((args, item) => {
		let argomento = data.argomentos[item];
		if (argomento) {
			args.push(argomento);
			return args;
		}
		if (is.string(item)) {
			argomento = item.charAt(0) === '/' ? getArgByPath(item) : getArgByTitle(item);
			if (argomento) {
				args.push(argomento);
				return args;
			}
		}
		throw new Error(`data-main-error: O índice "${item}" não existe em data.argomentos!`);
	}, []);
};

export default data;
