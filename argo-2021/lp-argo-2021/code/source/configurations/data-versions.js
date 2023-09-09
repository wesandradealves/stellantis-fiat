export const data = {
	title: '#FiquePorDentro',
	description: 'Conheça todas as versões do Fiat Argo em 360º.',
	help: 'Arraste e conheça',
	helpLoad: 'Clique para ativar 360',
	switchTitle: 'Gostou desta versão?',
	versions: [
		{
			id: 'FLEX10',
			label: 'ARGO 1.0',
			colorIndex: 0,
      icon: {
        type: 'image/webp',
        srcSet: '/assets/360/nav/flex10.webp',
        fallback: {
          type: 'image/jpg',
          srcSet: '/assets/360/nav/flex10.jpg'
        }
      },
			ext: '.jpg',
			info: {
				name: 'Argo 1.0',
				label: 'ARGO 1.0',
        details: [
          'Ar condicionado de série',
          'Direção elétrica progressiva',
          'Alarme com chave canivete'
        ],
			},
		},
		{
			id: 'DRIVE10',
			label: 'DRIVE 1.0 FLEX',
			colorIndex: 0,
      icon: {
        type: 'image/webp',
        srcSet: '/assets/360/nav/drive10.webp',
        fallback: {
          type: 'image/jpg',
          srcSet: '/assets/360/nav/drive10.jpg'
        }
      },
			ext: '.jpg',
			info: {
				name: 'Argo Drive 1.0 Flex',
				label: 'ARGO DRIVE 1.0 FLEX',
        details: [
          'Central Multimídia Uconnect 7"',
          // 'Retrovisores e vidros elétricos traseiros',
					'Volante com comandos de rádio e telefone',
          'Direção elétrica progressiva'
        ],
			},
		},
		// {
		// 	id: 'DRIVE13',
		// 	label: 'ARGO FLEX',
		// 	colorIndex: 0,
    //   icon: {
    //     type: 'image/webp',
    //     srcSet: '/assets/360/nav/drive13.webp',
    //     fallback: {
    //       type: 'image/jpg',
    //       srcSet: '/assets/360/nav/drive13.jpg'
    //     }
    //   },
		// 	ext: '.jpg',
		// 	info: {
		// 		name: 'Argo Flex',
		// 		label: 'ARGO FLEX',
    //     details: [
    //       'Central Multimídia de 7"',
    //       'Retrovisores e vidros elétricos traseiros',
    //       'Sensor de estacionamento traseiro'
    //     ],
		// 	},
		// },  PO Rodrigo solicitou a exclusao deste card 10/06/2021
		{
			id: 'SDESIGN10',
			label: 'S-DESIGN 1.0',
			colorIndex: 0,
      icon: {
        type: 'image/webp',
        srcSet: '/assets/360/nav/sdesign10.webp',
        fallback: {
          type: 'image/jpg',
          srcSet: '/assets/360/nav/sdesign10.jpg'
        }
      },
			ext: '.jpg',
			info: {
				name: 'Argo S-Design 1.0',
				label: 'ARGO S-DESIGN 1.0',
				details: [
					'Ar condicionado digital automático',
					'Keyless Entry and Go',
					'Controle de tração e estabilidade',
				],
			},
		},
		{
			id: 'SDESIGN13',
			label: 'S-DESIGN 1.3',
			colorIndex: 0,
			css: 'sdesign',
      icon: {
        type: 'image/webp',
        srcSet: '/assets/360/nav/sdesign13.webp',
        fallback: {
          type: 'image/jpg',
          srcSet: '/assets/360/nav/sdesign13.jpg'
        }
      },
			ext: '.jpg',
			info: {
				name: 'Argo S-Design 1.3',
				label: 'ARGO S-DESIGN 1.3',
        details: [
          'Ar condicionado digital automático',
          'Keyless Entry and Go',
          'Rodas de liga leve de 15"'
        ],
			},
		},
		{
			id: 'TREKKING13',
			label: 'TREKKING 1.3 FLEX',
			colorIndex: 0,
      icon: {
        type: 'image/webp',
        srcSet: '/assets/360/nav/trekking13.webp',
        fallback: {
          type: 'image/jpg',
          srcSet: '/assets/360/nav/trekking13.jpg'
        }
      },
			ext: '.jpg',
			info: {
				name: 'Argo Trekking 1.3 Flex',
				label: 'ARGO TREKKING 1.3 FLEX',
        details: [
          'Central Multimídia de 7"',
          'Retrovisores e vidros elétricos traseiros',
          'Controle de tração, estabilidade e hill holder'
        ],
			},
		},
	// 	{
	// 		id: 'TREKKING18',
	// 		label: 'TREKKING 1.8 FLEX',
	// 		colorIndex: 0,
    //   icon: {
    //     type: 'image/webp',
    //     srcSet: '/assets/360/nav/trekking18.webp',
    //     fallback: {
    //       type: 'image/jpg',
    //       srcSet: '/assets/360/nav/trekking18.jpg'
    //     }
    //   },
	// 		ext: '.jpg',
	// 		info: {
	// 			name: 'Argo Trekking 1.8 Automático Flex',
	// 			label: 'ARGO TREKKING 1.8 FLEX',
	// 			details: [
	// 				'Câmbio automático de 6 marchas',
	// 				'Ar digital automático',
	// 				'Keyless entry n\'go',
	// 			],
	// 		},
	// 	},
	// 	{
	// 		id: 'HGT',
	// 		label: 'HGT 1.8 FLEX',
	// 		colorIndex: 0,
    //   icon: {
    //     type: 'image/webp',
    //     srcSet: '/assets/360/nav/hgt.webp',
    //     fallback: {
    //       type: 'image/jpg',
    //       srcSet: '/assets/360/nav/hgt.jpg'
    //     }
    //   },
	// 		ext: '.jpg',
	// 		info: {
	// 			name: 'Argo HGT 1.8 Automático Flex',
	// 			label: 'ARGO HGT 1.8 FLEX',
    //     details: [
    //       'Rodas de liga leve de 17"',
    //       'Quadro instrumento em TFT colorida de 7" personalizável',
    //       'Controles de tração e estabilidade'
    //     ],
	// 		},
	// 	},
	],
	colors: [
		{
			id: 'padrao',
			label: 'padrao',
			type: 'padrao',
			hex: 'padrao',
		},
	],
};

export default data;
