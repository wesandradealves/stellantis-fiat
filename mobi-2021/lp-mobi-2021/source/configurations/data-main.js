import clamp from '@dcode/utils/xtras/clamp';
import * as is from '@dcode/utils/is';

export const data = {
	title: 'Conquiste as ruas com o Mobi Landing. <mark>#Grandioso</mark>',
	argomentos: [
		// motor
		{
			id: '#index',
			path: '/tudo-dominado',
			title: 'CONTROLE DE ESTABILIDADE',
			modal: [
				{
					title: 'CONTROLE DE ESTABILIDADE',
					shortTitle: 'ESTABILIDADE',
					description: 'O Fiat Mobi possui o recurso de controle de estabilidade, um sistema que, em caso de perda de aderência em terrenos de baixo atrito ou curvas, atua freando individualmente cada uma das rodas conforme a necessidade. Assim fica bem mais fácil manter o controle do carro e a sua tranquilidade.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)',
								type: 'image/jpg',
								srcSet: '/assets/features/modais/mobile/player@2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet:
										'/assets/features/modais/mobile/player@2x.jpg, /assets/features/modais/mobile/player@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet: '/assets/features/modais/desktop/player.jpg, /assets/features/modais/desktop/player@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet: '/assets/features/modais/desktop/player.jpg, /assets/features/modais/desktop/player@2x.jpg 2x',
							},
						],
					},
				},
			],
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						oneOf: [
							{
								type: 'image/png',
								srcSet: '/assets/features/thumbs/mobile/player.png, /assets/features/thumbs/mobile/player.png, /assets/features/thumbs/mobile/player.png',
							},
							{
								type: 'image/png',
								srcSet: '/assets/features/thumbs/mobile/player.png, /assets/features/thumbs/mobile/player.png, /assets/features/thumbs/mobile/player.png',
							},
						],
						fallback: {
							type: 'image/png',
							srcSet: '/assets/features/thumbs/mobile/player.png, /assets/features/thumbs/mobile/player.png, /assets/features/thumbs/mobile/player.png',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/player.png, /assets/features/thumbs/desktop/player.png, /assets/features/thumbs/desktop/player.png',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/player.png, /assets/features/thumbs/desktop/player.png, /assets/features/thumbs/desktop/player.png',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/desktop/player.png, /assets/features/thumbs/desktop/player.png, /assets/features/thumbs/desktop/player.png',
						},
					},
				],
			},
		},
		{
			id: '#index',
			path: '/motor',
			title: 'ECONOMIA DE COMBUSTÍVEL',
			modal: [
				{
					title: 'ECONÔMICO NA CIDADE E FORA DELA.',
					shortTitle: 'MOTOR',
					description: 'Com uma excelente relação peso-potência, o motor Fire 1.0 do Fiat Mobi é o sonho de qualquer motorista que deseja dirigir com muita economia e eficiência.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)',
								type: 'image/jpg',
								srcSet: '/assets/features/modais/mobile/motor@2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet:
										'/assets/features/modais/mobile/motor@2x.jpg, /assets/features/modais/mobile/motor@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet: '/assets/features/modais/desktop/motor.jpg, /assets/features/modais/desktop/motor@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet: '/assets/features/modais/desktop/motor.jpg, /assets/features/modais/desktop/motor@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						srcSet: '/assets/features/pictures/smartphone/motor@2x.jpg 3x',
					},
					{
						media: '(orientation: landscape)',
						srcSet: '/assets/features/pictures/desktop/desktop-motor.jpg 3x',
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						srcSet: '/assets/features/pictures/desktop/desktop-motor.jpg 3x',
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/motor@2x.jpg, /assets/features/thumbs/mobile/motor@2x.jpg 2x, /assets/features/thumbs/mobile/motor@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/motor@2x.jpg, /assets/features/thumbs/mobile/motor@2x.jpg 2x, /assets/features/thumbs/mobile/motor@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/mobile/motor@2x.jpg, /assets/features/thumbs/mobile/motor@2x.jpg 2x, /assets/features/thumbs/mobile/motor@2x.jpg 3x',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/motor@2x.jpg, /assets/features/thumbs/desktop/motor@2x.jpg 2x, /assets/features/thumbs/desktop/motor@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/motor@2x.jpg, /assets/features/thumbs/desktop/motor@2x.jpg 2x, /assets/features/thumbs/desktop/motor@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/desktop/motor@2x.jpg, /assets/features/thumbs/desktop/motor@2x.jpg 2x, /assets/features/thumbs/desktop/motor@2x.jpg 3x',
						},
					},
				],
			},
		},
		{
			id: '#index',
			path: '/altura',
			title: 'MAIOR ALTURA DO SOLO',
			modal: [
				{
					title: 'A AVENTURA COMEÇA LONGE DO SOLO.',
					shortTitle: 'MAIOR ALTURA',
					description: 'O Fiat Mobi também cresceu e agora possui 17,1 cm de altura do solo. Toda essa robustez te deixa pronto para encarar os desafios do dia a dia.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)',
								type: 'image/jpg',
								srcSet: '/assets/features/modais/mobile/altura@2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet:
										'/assets/features/modais/mobile/altura@2x.jpg, /assets/features/modais/mobile/altura@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet: '/assets/features/modais/desktop/altura@2x.jpg, /assets/features/modais/desktop/altura@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet: '/assets/features/modais/desktop/altura@2x.jpg, /assets/features/modais/desktop/altura@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						srcSet: '/assets/features/pictures/smartphone/smartphone-altura@2x.jpg 3x',
					},
					{
						media: '(orientation: landscape)',
						srcSet: '/assets/features/pictures/desktop/desktop-altura@2x.jpg 3x',
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						srcSet: '/assets/features/pictures/desktop/desktop-altura@2x.jpg 3x',
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/altura@2x.jpg, /assets/features/thumbs/mobile/altura@2x.jpg 2x, /assets/features/thumbs/mobile/altura@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/altura@2x.jpg, /assets/features/thumbs/mobile/altura@2x.jpg 2x, /assets/features/thumbs/mobile/altura@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/mobile/altura@2x.jpg, /assets/features/thumbs/mobile/altura@2x.jpg 2x, /assets/features/thumbs/mobile/altura@2x.jpg 3x',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/altura@2x.jpg, /assets/features/thumbs/desktop/altura@2x.jpg 2x, /assets/features/thumbs/desktop/altura@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/altura@2x.jpg, /assets/features/thumbs/desktop/altura@2x.jpg 2x, /assets/features/thumbs/desktop/altura@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/desktop/altura@2x.jpg, /assets/features/thumbs/desktop/altura@2x.jpg 2x, /assets/features/thumbs/desktop/altura@2x.jpg 3x',
						},
					},
				],
			},
		},
		{
			id: '#index',
			path: '/altura',
			title: 'MAIOR ALTURA DO SOLO',
			modal: [
				{
					title: 'A AVENTURA COMEÇA LONGE DO SOLO.',
					shortTitle: 'MAIOR ALTURA',
					description: 'O Fiat Mobi também cresceu e agora possui 17,1 cm de altura do solo. Toda essa robustez te deixa pronto para encarar os desafios do dia a dia.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)',
								type: 'image/jpg',
								srcSet: '/assets/features/modais/mobile/motor.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet:
										'/assets/features/modais/mobile/motor.jpg, /assets/features/modais/mobile/motor@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet: '/assets/features/modais/desktop/motor.jpg, /assets/features/modais/desktop/motor@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet: '/assets/features/modais/desktop/motor.jpg, /assets/features/modais/desktop/motor@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						srcSet: '/assets/features/pictures/smartphone/smartphone-motor@2x.jpg 3x',
					},
					{
						media: '(orientation: landscape)',
						srcSet: '/assets/features/pictures/desktop/desktop-motor@2x.jpg 3x',
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						srcSet: '/assets/features/pictures/desktop/desktop-motor@2x.jpg 3x',
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/altura.jpg, /assets/features/thumbs/mobile/altura@2x.jpg 2x, /assets/features/thumbs/mobile/altura@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/altura.jpg, /assets/features/thumbs/mobile/altura@2x.jpg 2x, /assets/features/thumbs/mobile/altura@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/mobile/altura.jpg, /assets/features/thumbs/mobile/altura@2x.jpg 2x, /assets/features/thumbs/mobile/altura@2x.jpg 3x',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/altura.jpg, /assets/features/thumbs/desktop/altura@2x.jpg 2x, /assets/features/thumbs/desktop/altura@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/altura.jpg, /assets/features/thumbs/desktop/altura@2x.jpg 2x, /assets/features/thumbs/desktop/altura@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/desktop/altura.jpg, /assets/features/thumbs/desktop/altura@2x.jpg 2x, /assets/features/thumbs/desktop/altura@2x.jpg 3x',
						},
					},
				],
			},
		},

		// design
		{
			id: '#index',
			path: '/design',
			title: 'DESIGN ROBUSTO',
			modal: [
				{
					title: 'O MOBI NÃO ANDA. O MOBI DESFILA.',
					shortTitle: 'DESIGN',
					description: 'O design da versão Trekking ficou mais moderno e robusto. Além da nova grade com logo Fiat e flag italiana, ele tem o exclusivo design bicolor e adesivos exclusivos',
					// thumbnail: '/assets/features/modais/design/smartphone/thumbs/smartphone-thumb-design1@2x.jpg',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)',
								type: 'image/jpg',
								srcSet: '/assets/features/modais/mobile/design@2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet:
										'/assets/features/modais/mobile/design.jpg, /assets/features/modais/mobile/design@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet:
									'/assets/features/modais/desktop/design.jpg, /assets/features/modais/desktop/design@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet:
									'/assets/features/modais/desktop/design.jpg, /assets/features/modais/desktop/design@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						srcSet: '/assets/features/pictures/smartphone/robustez@2x.jpg 3x',
					},
					{
						media: '(orientation: landscape)',
						srcSet: '/assets/features/pictures/desktop/desktop-robustez@2x.jpg 3x',
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						srcSet: '/assets/features/pictures/desktop/desktop-robustez@2x.jpg 3x',
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/design@2x.jpg, /assets/features/thumbs/mobile/design@2x.jpg 2x, /assets/features/thumbs/mobile/design@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/design.jpg, /assets/features/thumbs/mobile/design@2x.jpg 2x, /assets/features/thumbs/mobile/design@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/mobile/design.jpg, /assets/features/thumbs/mobile/design@2x.jpg 2x, /assets/features/thumbs/mobile/design@2x.jpg 3x',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/design@2x.jpg, /assets/features/thumbs/desktop/design@2x.jpg 2x, /assets/features/thumbs/desktop/design@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/design.jpg, /assets/features/thumbs/desktop/design@2x.jpg 2x, /assets/features/thumbs/desktop/design@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/desktop/design.jpg, /assets/features/thumbs/desktop/design@2x.jpg 2x, /assets/features/thumbs/desktop/design@2x.jpg 3x',
						},
					},
				],
			},
		},

		// central-multimidia
		{
			id: '#index',
			path: '/central-multimidia',
			title: 'CENTRAL MULTIMÍDIA',
			modal: [
				{
					title: 'MAIS CONECTADA. MAIS INTERATIVA. MENOS FIOS.',
					shortTitle: 'CENTRAL MULTIMÍDIA',
					description: 'A nova Central Multimídia Uconnect de 7” tem conexão wireless, ou seja, via Apple CarPlay e Android Auto. E você pode parear dois smartphones simultaneamente pelo bluetooth. <br /> * Opcional nas versões Like e Trekking',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)',
								type: 'image/jpg',
								srcSet: '/assets/features/modais/mobile/central-multimidia@2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet:
										'/assets/features/modais/mobile/central-multimidia@2x.jpg, /assets/features/modais/mobile/central-multimidia@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet:
									'/assets/features/modais/desktop/central-multimidia.jpg, /assets/features/modais/desktop/central-multimidia@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet:
									'/assets/features/modais/desktop/central-multimidia@2x.jpg, /assets/features/modais/desktop/central-multimidia@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/pictures/smartphone/central-multimidia@2x.jpg, /assets/features/pictures/smartphone/central-multimidia@2x.jpg 2x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/pictures/smartphone/central-multimidia@2x.jpg, /assets/features/pictures/smartphone/central-multimidia@2x.jpg 2x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/pictures/smartphone/central-multimidia@2x.jpg, /assets/features/pictures/smartphone/central-multimidia@2x.jpg 2x',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/pictures/desktop/central-multimidia.jpg, /assets/features/pictures/desktop/central-multimidia@2x.jpg 2x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/pictures/desktop/central-multimidia.jpg, /assets/features/pictures/desktop/central-multimidia@2x.jpg 2x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/pictures/desktop/central-multimidia.jpg, /assets/features/pictures/desktop/central-multimidia@2x.jpg 2x',
						},
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/central-multimidia@2x.jpg, /assets/features/thumbs/mobile/central-multimidia@2x.jpg 2x, /assets/features/thumbs/mobile/central-multimidia@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/central-multimidia@2x.jpg, /assets/features/thumbs/mobile/central-multimidia@2x.jpg 2x, /assets/features/thumbs/mobile/central-multimidia@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/mobile/central-multimidia@2x.jpg, /assets/features/thumbs/mobile/central-multimidia@2x.jpg 2x, /assets/features/thumbs/mobile/central-multimidia@2x.jpg 3x',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/central-multimidia@2x.jpg, /assets/features/thumbs/desktop/central-multimidia@2x.jpg 2x, /assets/features/thumbs/desktop/central-multimidia@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/central-multimidia@2x.jpg, /assets/features/thumbs/desktop/central-multimidia@2x.jpg 2x, /assets/features/thumbs/desktop/central-multimidia@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/desktop/central-multimidia@2x.jpg, /assets/features/thumbs/desktop/central-multimidia@2x.jpg 2x, /assets/features/thumbs/desktop/central-multimidia@2x.jpg 3x',
						},
					},
				],
			},
		},

		// agilidade
		{
			id: '#index',
			path: '/agilidade',
			title: 'MELHOR DIRIGIBILIDADE',
			modal: [
				{
					title: 'A AGILIDADE QUE VOCÊ PRECISA TODOS OS DIAS.',
					shortTitle: 'AGILIDADE',
					description: 'Dirigir na cidade pede agilidade e conforto. E nada melhor do que um carro com dimensões ideais para estacionar em vagas pequenas, sem perder a robustez.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)',
								type: 'image/jpg',
								srcSet: '/assets/features/modais/mobile/dirigibilidade.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet:
										'/assets/features/modais/mobile/dirigibilidade.jpg, /assets/features/modais/mobile/dirigibilidade@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet:
									'/assets/features/modais/desktop/dirigibilidade.jpg, /assets/features/modais/desktop/dirigibilidade@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet:
									'/assets/features/modais/desktop/dirigibilidade.jpg, /assets/features/modais/desktop/dirigibilidade@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						srcSet:
							'/assets/features/pictures/smartphone/design-interno1@2x.jpg, /assets/features/pictures/smartphone/design-interno1@2x.jpg 2x, /assets/features/pictures/smartphone/design-interno1@2x.jpg 3x',
					},
					{
						media: '(orientation: landscape)',
						srcSet:
							'/assets/features/pictures/tablet/tablet-design-interno1@2x.jpg, /assets/features/pictures/tablet/tablet-design-interno1@2x.jpg 2x, /assets/features/pictures/tablet/tablet-design-interno1@2x.jpg 3x',
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						srcSet:
							'/assets/features/pictures/desktop/desktop-design-interno1.jpg, /assets/features/pictures/desktop/desktop-design-interno1@2x.jpg 2x, /assets/features/pictures/desktop/desktop-design-interno1@2x.jpg 3x',
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/dirigibilidade@2x.jpg, /assets/features/thumbs/mobile/dirigibilidade@2x.jpg 2x, /assets/features/thumbs/mobile/dirigibilidade@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/dirigibilidade.jpg, /assets/features/thumbs/mobile/dirigibilidade@2x.jpg 2x, /assets/features/thumbs/mobile/dirigibilidade@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/mobile/dirigibilidade.jpg, /assets/features/thumbs/mobile/dirigibilidade@2x.jpg 2x, /assets/features/thumbs/mobile/dirigibilidade@2x.jpg 3x',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/dirigibilidade.jpg, /assets/features/thumbs/desktop/dirigibilidade@2x.jpg 2x, /assets/features/thumbs/desktop/dirigibilidade@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/desktop/dirigibilidade.jpg, /assets/features/thumbs/desktop/dirigibilidade@2x.jpg 2x, /assets/features/thumbs/desktop/dirigibilidade@2x.jpg 3x',
						},
					},
				],
			},
		},

		// interior
		{
			id: '#index',
			path: '/interior',
			title: 'INTERIOR IMPECÁVEL',
			modal: [
				{
					title: 'MODERNO, EXCLUSIVO E MUITO CONFORTÁVEL.',
					shortTitle: 'INTERIOR',
					description: 'A qualidade do acabamento interno do Fiat Mobi é impecável. O volante ganhou o novo logo Fiat e os bancos receberam a estilização Trekking.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)',
								type: 'image/jpg',
								srcSet: '/assets/features/modais/mobile/interior@2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet:
										'/assets/features/modais/mobile/interior@2x.jpg, /assets/features/modais/mobile/interior@2x.jpg 2x',
								},
							},
							{
								media: '(orientation: landscape)',
								srcSet:
									'/assets/features/modais/desktop/interior.jpg, /assets/features/modais/desktop/interior@2x.jpg 2x',
							},
							{
								media: '(min-width: 1025px) and (orientation: landscape)',
								srcSet:
									'/assets/features/modais/desktop/interior.jpg, /assets/features/modais/desktop/interior@2x.jpg 2x',
							},
						],
					},
				},
			],
			picture: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						srcSet: '/assets/features/pictures/smartphone/interior@2x.jpg 3x',
					},
					{
						media: '(orientation: landscape)',
						srcSet: '/assets/features/pictures/desktop/desktop-interior@2x.jpg 3x',
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						srcSet: '/assets/features/pictures/desktop/desktop-interior@2x.jpg 3x',
					},
				],
			},
			thumb: {
				alt: '',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/interior@2x.jpg, /assets/features/thumbs/mobile/interior@2x.jpg 2x, /assets/features/thumbs/mobile/interior@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/mobile/interior@2x.jpg, /assets/features/thumbs/mobile/interior@2x.jpg 2x, /assets/features/thumbs/mobile/interior@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/mobile/interior@2x.jpg, /assets/features/thumbs/mobile/interior@2x.jpg 2x, /assets/features/thumbs/mobile/interior@2x.jpg 3x',
						},
					},
					{
						media: '(min-width: 1025px) and (orientation: landscape)',
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/interior@2x.jpg, /assets/features/thumbs/desktop/interior@2x.jpg 2x, /assets/features/thumbs/desktop/interior@2x.jpg 3x',
							},
							{
								type: 'image/jpg',
								srcSet: '/assets/features/thumbs/desktop/interior@2x.jpg, /assets/features/thumbs/desktop/interior@2x.jpg 2x, /assets/features/thumbs/desktop/interior@2x.jpg 3x',
							},
						],
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/features/thumbs/desktop/interior@2x.jpg, /assets/features/thumbs/desktop/interior@2x.jpg 2x, /assets/features/thumbs/desktop/interior@2x.jpg 3x',
						},
					},
				],
			},
		},

		// robustez
		// {
		// 	id: '#index',
		// 	path: '/robustez',
		// 	title: 'ROBUSTEZ',
		// 	modal: [
		// 		{
		// 			title: 'A AVENTURA COMEÇA LONGE DO SOLO.',
		// 			shortTitle: 'ROBUSTEZ',
		// 			description: 'O Fiat Mobi surpreende e está pronto para grandes desafios. Toda essa robustez oferece mais versatilidade e segurança.',
		// 			poster: {
		// 				alt: '',
		// 				sources: [
		// 					{
		// 						media: '(max-width: 1024px) and (orientation: portrait)',
		// 						type: 'image/jpg',
		// 						srcSet: '/assets/features/modais/mobile/robustez.jpg',
		// 						fallback: {
		// 							type: 'image/jpg',
		// 							srcSet:
		// 								'/assets/features/modais/mobile/robustez.jpg, /assets/features/modais/mobile/robustez@2x.jpg 2x',
		// 						},
		// 					},
		// 					{
		// 						media: '(orientation: landscape)',
		// 						srcSet:
		// 							'/assets/features/modais/desktop/robustez.jpg, /assets/features/modais/desktop/robustez@2x.jpg 2x',
		// 					},
		// 					{
		// 						media: '(min-width: 025px) and (orientation: landscape)',
		// 						srcSet:
		// 							'/assets/features/modais/desktop/robustez.jpg, /assets/features/modais/desktop/robustez@2x.jpg 2x',
		// 					},
		// 				],
		// 			},
		// 		},
		// 	],
		// 	picture: {
		// 		alt: '',
		// 		sources: [
		// 			{
		// 				media: '(max-width: 1024px) and (orientation: portrait)',
		// 				srcSet: '/assets/features/pictures/smartphone/smartphone-pneus@2x.jpg 3x',
		// 			},
		// 			{
		// 				media: '(orientation: landscape)',
		// 				srcSet: '/assets/features/pictures/desktop/desktop-pneus@2x.jpg 3x',
		// 			},
		// 			{
		// 				media: '(min-width: 1025px) and (orientation: landscape)',
		// 				srcSet: '/assets/features/pictures/desktop/desktop-pneus@2x.jpg 3x',
		// 			},
		// 		],
		// 	},
		// 	thumb: {
		// 		alt: '',
		// 		sources: [
		// 			{
		// 				media: '(max-width: 1024px) and (orientation: portrait)',
		// 				oneOf: [
		// 					{
		// 						type: 'image/jpg',
		// 						srcSet: '/assets/features/thumbs/mobile/robustez.jpg, /assets/features/thumbs/mobile/robustez@2x.jpg 2x, /assets/features/thumbs/mobile/robustez@2x.jpg 3x',
		// 					},
		// 					{
		// 						type: 'image/jpg',
		// 						srcSet: '/assets/features/thumbs/mobile/robustez.jpg, /assets/features/thumbs/mobile/robustez@2x.jpg 2x, /assets/features/thumbs/mobile/robustez@2x.jpg 3x',
		// 					},
		// 				],
		// 				fallback: {
		// 					type: 'image/jpg',
		// 					srcSet: '/assets/features/thumbs/mobile/robustez.jpg, /assets/features/thumbs/mobile/robustez@2x.jpg 2x, /assets/features/thumbs/mobile/robustez@2x.jpg 3x',
		// 				},
		// 			},
		// 			{
		// 				media: '(min-width: 1025px) and (orientation: landscape)',
		// 				oneOf: [
		// 					{
		// 						type: 'image/jpg',
		// 						srcSet: '/assets/features/thumbs/desktop/robustez.jpg, /assets/features/thumbs/desktop/robustez@2x.jpg 2x, /assets/features/thumbs/desktop/robustez@2x.jpg 3x',
		// 					},
		// 					{
		// 						type: 'image/jpg',
		// 						srcSet: '/assets/features/thumbs/desktop/robustez.jpg, /assets/features/thumbs/desktop/robustez@2x.jpg 2x, /assets/features/thumbs/desktop/robustez@2x.jpg 3x',
		// 					},
		// 				],
		// 				fallback: {
		// 					type: 'image/jpg',
		// 					srcSet: '/assets/features/thumbs/desktop/robustez.jpg, /assets/features/thumbs/desktop/robustez@2x.jpg 2x, /assets/features/thumbs/desktop/robustez@2x.jpg 3x',
		// 				},
		// 			},
		// 		],
		// 	},
		// },
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
		return path2find.indexOf(item.path) === 0;
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
