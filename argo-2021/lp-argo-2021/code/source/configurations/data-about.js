export const data = {
	title: 'Conheça tudo, mas tudo mesmo do seu próximo carro.',
	list: [
		{
			title: 'DESIGN',
			slug: 'design',
			list: [
				{
					title: 'PERSONALIDADE ARGO',
					description:
						'Design esportivo e exclusivo até nos pequenos detalhes. O Fiat Argo tem a essência italiana, a robustez brasileira e um estilo único no segmento.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/design/1-personalidade/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/1-personalidade/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								oneOf: [
									{
										type: 'image/jpg',
										srcSet: 'assets/imagens-accordion/design/1-personalidade/2x.jpg',
									},
									{
										type: 'image/webp',
										srcSet: 'assets/imagens-accordion/design/1-personalidade/2x.webp',
									},
								],
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/1-personalidade/2x.jpg',
								},
							},
							{
								media: '(min-width: 1025px)', // Desk
								oneOf: [
									{
										type: 'image/jpg',
										srcSet: 'assets/imagens-accordion/design/1-personalidade/2x.jpg',
									},
									{
										type: 'image/webp',
										srcSet: 'assets/imagens-accordion/design/1-personalidade/2x.webp',
									},
								],
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/1-personalidade/2x.jpg',
								},
							},
						],
					},
				},
				{
					title: 'ACABAMENTO E DESIGN INTERNO',
					description:
						'A flag italiana e o novo logo Fiat também aparecem no interior do carro, que possui acabamento impecável e detalhes escurecidos.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/design/2-acabamento/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/2-acabamento/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								type: 'image/jpg',
								srcSet: 'assets/imagens-accordion/design/2-acabamento/2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/2-acabamento/2x.jpg',
								},
							},
							{
								media: '(min-width: 1025px)', // Desk
								type: 'image/jpg',
								srcSet: 'assets/imagens-accordion/design/2-acabamento/2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/2-acabamento/2x.jpg',
								},
							},
						],
					},
				},
				{
					title: 'CONJUNTO DE LUZES',
					description:
						'Desenvolvido com parábolas duplas e assinatura de LED, os faróis emitem um facho de luz amplo, o que torna sua viagem muito mais segura.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/design/3-conjunto-de-luzes/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/3-conjunto-de-luzes/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								type: 'image/jpg',
								srcSet: 'assets/imagens-accordion/design/3-conjunto-de-luzes/2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/3-conjunto-de-luzes/2x.jpg',
								},
							},
							{
								media: '(min-width: 1025px)', // Desk
								type: 'image/jpg',
								srcSet: 'assets/imagens-accordion/design/3-conjunto-de-luzes/2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/3-conjunto-de-luzes/2x.jpg',
								},
							},
						],
					},
				},
				{
					title: 'KIT PINTURA BICOLOR',
					description:
						'O único da categoria com personalização esportiva nos tetos, retrovisores e aerofólio. É exclusividade que não acaba.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/design/4-teto/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/4-teto/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								type: 'image/jpg',
								srcSet: 'assets/imagens-accordion/design/4-teto/2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/4-teto/2x.jpg',
								},
							},
							{
								media: '(min-width: 1025px)', // Desk
								type: 'image/jpg',
								srcSet: 'assets/imagens-accordion/design/4-teto/2x.jpg',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/design/4-teto/2x.jpg',
								},
							},
						],
					},
				},
			],
		},
		{
			title: 'TECNOLOGIA',
			slug: 'tecnologia',
			list: [
				{
					title: 'CENTRAL MULTIMÍDIA <br /> UCONNECT 7”',
					description:
						'Conexão via Android Auto e Apple CarPlay para você dirigir sempre acompanhado dos seus apps favoritos, como o Waze, Spotify e WhatsApp.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/tecnologia/1-central-multimidia/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/tecnologia/1-central-multimidia/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/tecnologia/1-central-multimidia/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/tecnologia/1-central-multimidia/2x.jpg',
							},
						],
					},
				},
				{
					title: 'VOLANTE MULTIFUNCIONAL',
					description:
						'No Fiat Argo, você controla as funções de rádio e atende chamadas de telefone através dos comandos do volante. É o controle total na palma das suas mãos.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/tecnologia/2-volante/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/tecnologia/2-volante/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/tecnologia/2-volante/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/tecnologia/2-volante/2x.jpg',
							},
						],
					},
				},
				{
					title: 'AR CONDICIONADO DIGITAL',
					description:
						'Dentro do Fiat Argo, a previsão é sempre de tempo bom. Com o ar condicionado digital, você tem mais praticidade para ajustar a temperatura e a potência ideais.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/tecnologia/3-ar-condicionado/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/tecnologia/3-ar-condicionado/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/tecnologia/3-ar-condicionado/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/tecnologia/3-ar-condicionado/2x.jpg',
							},
						],
					},
				},
				{
					title: 'PAINEL DE INSTRUMENTOS 7”',
					description:
						'Tecnológico e personalizável, o painel traz modernidade ao interior do Fiat Argo. E você ainda pode configurar as informações do jeito que preferir.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/tecnologia/4-painel/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/tecnologia/4-painel/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/tecnologia/4-painel/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/tecnologia/4-painel/2x.jpg',
							},
						],
					},
				},
				{
					title: 'KEYLESS ENTRY AND GO',
					description:
						'A tecnologia Keyless abre as portas e liga o motor do Argo sem você precisar tirar as chaves do bolso. Viu como sua ligação com o carro é forte?',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/tecnologia/5-keyless/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/tecnologia/5-keyless/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/tecnologia/5-keyless/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/tecnologia/5-keyless/2x.jpg',
							},
						],
					},
				},
				{
					title: 'REBATIMENTO ELÉTRICO <br /> DOS RETROVISORES',
					description:
						'Pensados para facilitar o seu dia, os retrovisores contam com rebatimento elétrico, tecnologia Tilt Down para auxiliar as manobras e Puddle Lamps que acendem ao abrir a porta.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/tecnologia/6-retrovisores/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/tecnologia/6-retrovisores/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/tecnologia/6-retrovisores/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/tecnologia/6-retrovisores/2x.jpg',
							},
						],
					},
				},
			],
		},
		{
			title: 'PERFORMANCE',
			slug: 'performance',
			list: [
				{
					title: 'MOTOR FIREFLY 1.0',
					description:
						'O motor firefly é extremamente econômico e ainda possui respostas rápidas para uma direção na cidade.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/performance/3-moto10/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/performance/3-moto10/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/performance/3-moto10/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/performance/3-moto10/2x.jpg',
							},
						],
					},
				},
				{
					title: 'MOTOR FIREFLY 1.3',
					description:
						'O sonho de todo motorista que busca desempenho com o melhor consumo de combustível. O motor firefly 1.3 possui arquitetura moderna e robusta, construída em bloco de alumínio.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/performance/2-motor-13/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/performance/2-motor-13/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/performance/2-motor-13/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/performance/2-motor-13/2x.jpg',
							},
						],
					},
				},
				// {
				// 	title: 'MOTOR 1.8',
				// 	description:
				// 		'O motor E.torQ 1.8 se destaca quando o assunto é esportividade. Isso porque ele oferece respostas mais rápidas que a concorrência e uma força de dar inveja.',
				// 	poster: {
				// 		alt: '',
				// 		sources: [
				// 			{
				// 				media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
				// 				type: 'image/webp',
				// 				srcSet: 'assets/imagens-accordion/performance/1-motor-18/1x.webp',
				// 				fallback: {
				// 					type: 'image/jpg',
				// 					srcSet: 'assets/imagens-accordion/performance/1-motor-18/1x.jpg',
				// 				},
				// 			},
				// 			{
				// 				media: '(orientation: landscape)', // Mobile -> Imagem desk
				// 				srcSet: 'assets/imagens-accordion/performance/1-motor-18/2x.jpg',
				// 			},
				// 			{
				// 				media: '(min-width: 1025px)', // Desk
				// 				srcSet: 'assets/imagens-accordion/performance/1-motor-18/2x.jpg',
				// 			},
				// 		],
				// 	},
				// },
				{
					title: 'DIREÇÃO ELÉTRICA PROGRESSIVA',
					description:
						'O conforto e a economia das direções elétricas com mais segurança ao ajustar o nível de esforço do volante em altas velocidades.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/performance/4-direcao-eletrica/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/performance/4-direcao-eletrica/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/performance/4-direcao-eletrica/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/performance/4-direcao-eletrica/2x.jpg',
							},
						],
					},
				},
				// {
				// 	title: 'CÂMBIO BORBOLETA',
				// 	description:
				// 		'O volante do Fiat Argo também possui câmbio borboleta, para quem busca trocas de marchas mais precisas, práticas e com uma pegada esportiva.',
				// 	poster: {
				// 		alt: '',
				// 		sources: [
				// 			{
				// 				media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
				// 				type: 'image/webp',
				// 				srcSet: 'assets/imagens-accordion/performance/5-cambio-borboleta/1x.webp',
				// 				fallback: {
				// 					type: 'image/jpg',
				// 					srcSet: 'assets/imagens-accordion/performance/5-cambio-borboleta/1x.jpg',
				// 				},
				// 			},
				// 			{
				// 				media: '(orientation: landscape)', // Mobile -> Imagem desk
				// 				srcSet: 'assets/imagens-accordion/performance/5-cambio-borboleta/2x.jpg',
				// 			},
				// 			{
				// 				media: '(min-width: 1025px)', // Desk
				// 				srcSet: 'assets/imagens-accordion/performance/5-cambio-borboleta/2x.jpg',
				// 			},
				// 		],
				// 	},
				// },
				// {
				// 	title: 'SENSORES CREPUSCULAR, CHUVA E <br /> ELETROCRÔMICO',
				// 	description:
				// 		'Com tanta tecnologia, só resta curtir a condução do ARGO e deixar os sensores trabalharem para sua segurança.',
				// 	poster: {
				// 		alt: '',
				// 		sources: [
				// 			{
				// 				media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
				// 				type: 'image/webp',
				// 				srcSet: 'assets/imagens-accordion/performance/6-sensor/1x.webp',
				// 				fallback: {
				// 					type: 'image/jpg',
				// 					srcSet: 'assets/imagens-accordion/performance/6-sensor/1x.jpg',
				// 				},
				// 			},
				// 			{
				// 				media: '(orientation: landscape)', // Mobile -> Imagem desk
				// 				srcSet: 'assets/imagens-accordion/performance/6-sensor/2x.jpg',
				// 			},
				// 			{
				// 				media: '(min-width: 1025px)', // Desk
				// 				srcSet: 'assets/imagens-accordion/performance/6-sensor/2x.jpg',
				// 			},
				// 		],
				// 	},
				// },
			],
		},
		{
			title: 'SEGURANÇA',
			slug: 'seguranca',
			list: [
				{
					title: 'CONTROLE DE TRAÇÃO E ESTABILIDADE',
					description:
						'Para ajudar a manter o controle da direção em condições extremas, a tração e a estabilidade do Fiat Argo são controladas automaticamente.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/seguranca/1-controle-de-tracao/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/seguranca/1-controle-de-tracao/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/seguranca/1-controle-de-tracao/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/seguranca/1-controle-de-tracao/2x.jpg',
							},
						],
					},
				},
				{
					title: 'HILL HOLDER',
					description:
						'Para facilitar saídas em ladeiras, o sistema Hill Holder do Fiat Argo mantém seus freios acionados por um tempo, até que o motor alcance a força necessária para o arranque.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/seguranca/2-hillholder/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/seguranca/2-hillholder/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/seguranca/2-hillholder/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/seguranca/2-hillholder/2x.jpg',
							},
						],
					},
				},
				{
					title: 'CÂMERA DE RÉ',
					description:
						'Ao engatar a marcha ré, a câmera na parte traseira é acionada, mostrando os obstáculos pelo caminho, direto na Central Multimídia.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/seguranca/3-camera/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/seguranca/3-camera/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/seguranca/3-camera/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/seguranca/3-camera/2x.jpg',
							},
						],
					},
				},
				{
					title: 'SENSOR DE PRESSÃO DOS PNEUS',
					description:
						'Para a sua segurança, o painel do Fiat Argo alerta quando está na hora de calibrar os pneus. É pressão para os pneus, sem pressão para o motorista.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/seguranca/4-sensor-de-pneu/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/seguranca/4-sensor-de-pneu/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/seguranca/4-sensor-de-pneu/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/seguranca/4-sensor-de-pneu/2x.jpg',
							},
						],
					},
				},
			],
		},
		{
			title: 'ACESSÓRIOS',
			slug: 'acessorios',
			list: [
				{
					title: 'FRISO LATERAL PINTADO',
					description:
						"Cuidado redobrado com a lateral do seu Fiat Argo. Os frisos laterais protegem as portas de pequenos danos e ainda dão um visual invocado ao carro. <a data-ui-custom href=\"/assets/catalogo-acessorios-argo.pdf\"  onclick=\"javascript:DataLayer.push('AboutPage_ContentButton', 'acessorios', 'friso-lateral-pintado', 'baixe-o-catalogo');\" target=\"_blank\">BAIXE O CATÁLOGO</a>",
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/acessorios/1-friso-lateral/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/acessorios/1-friso-lateral/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/acessorios/1-friso-lateral/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/acessorios/1-friso-lateral/2x.jpg',
							},
						],
					},
				},
				{
					title: 'TAPETE DO PORTA-MALAS',
					description:
						"Protege o forro do porta malas e ainda garante mais estabilidade e aderência aos itens colocados no bagageiro. <a data-ui-custom href=\"/assets/catalogo-acessorios-argo.pdf\"  onclick=\"javascript:DataLayer.push('AboutPage_ContentButton', 'acessorios', 'friso-lateral-pintado', 'baixe-o-catalogo');\" target=\"_blank\">BAIXE O CATÁLOGO</a>",
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/acessorios/2-tapete/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/acessorios/2-tapete/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/acessorios/2-tapete/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/acessorios/2-tapete/2x.jpg',
							},
						],
					},
				},
				{
					title: 'FAROL DE NEBLINA',
					description:
						"Melhore sua visibilidade em casos de neblina e dê mais destaque para o seu Fiat Argo por onde você passar. <a data-ui-custom href=\"/assets/catalogo-acessorios-argo.pdf\"  onclick=\"javascript:DataLayer.push('AboutPage_ContentButton', 'acessorios', 'friso-lateral-pintado', 'baixe-o-catalogo');\" target=\"_blank\">BAIXE O CATÁLOGO</a>",
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/acessorios/3-farol-neblina/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/acessorios/3-farol-neblina/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/acessorios/3-farol-neblina/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/acessorios/3-farol-neblina/2x.jpg',
							},
						],
					},
				},
				{
					title: 'ENGATE REBOQUE',
					description:
						"Desenvolvido exclusivamente para o fiat argo, o engate reboque tem acoplamento prático e forte. além do acabamento resistente contra a corrosão e ferrugem. <a data-ui-custom href=\"/assets/catalogo-acessorios-argo.pdf\"  onclick=\"javascript:DataLayer.push('AboutPage_ContentButton', 'acessorios', 'friso-lateral-pintado', 'baixe-o-catalogo');\" target=\"_blank\">BAIXE O CATÁLOGO</a>",
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/acessorios/4-engate-reboque/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/acessorios/4-engate-reboque/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/acessorios/4-engate-reboque/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/acessorios/4-engate-reboque/2x.jpg',
							},
						],
					},
				},
				{
					title: 'ADESIVO PLOTADO DE TETO',
					description:
						"Que tal um design ainda mais esportivo? O envelopamento do teto é o acessório ideal para se destacar dos demais. <a data-ui-custom href=\"/assets/catalogo-acessorios-argo.pdf\"  onclick=\"javascript:DataLayer.push('AboutPage_ContentButton', 'acessorios', 'friso-lateral-pintado', 'baixe-o-catalogo');\" target=\"_blank\">BAIXE O CATÁLOGO</a>",
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/acessorios/5-adesivo-plotado/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/acessorios/5-adesivo-plotado/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/acessorios/5-adesivo-plotado/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/acessorios/5-adesivo-plotado/2x.jpg',
							},
						],
					},
				},
				{
					title: 'ILUMINAÇÃO INTERNA',
					description:
						"Utilidade e brilho em um só acessório. A iluminação interna serve para clarear o ambiente e proporcionar estilo ao veículo. <a data-ui-custom href=\"/assets/catalogo-acessorios-argo.pdf\"  onclick=\"javascript:DataLayer.push('AboutPage_ContentButton', 'acessorios', 'friso-lateral-pintado', 'baixe-o-catalogo');\" target=\"_blank\">BAIXE O CATÁLOGO</a>",
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/acessorios/6-iluminacao/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/acessorios/6-iluminacao/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/acessorios/6-iluminacao/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/acessorios/6-iluminacao/2x.jpg',
							},
						],
					},
				},
			],
		},
		{
			title: 'PACOTE DE SERVIÇOS',
			slug: 'pacote-de-servicos',
			list: [
				{
					title: 'O CUIDADO QUE O SEU FIAT ARGO MERECE',
					description:
						'Conheça os pacotes de Serviços FIAT Mopar. O seu Fiat Argo pode ter até 5 anos de garantia além das Revisões sob medida com descontos e preços fixos.',
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/servicos/1-capa/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/servicos/1-capa/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/servicos/1-capa/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/servicos/1-capa/2x.jpg',
							},
						],
					},
				},
				{
					title: 'GARANTIA ADICIONAL FIAT',
					description:
						"O NOVO FIAT ARGO pode ter até 6 anos de garantia. São planos de 12, 24 e 36 meses adicionais aos 3 anos de garantia de fábrica. Mais economia para você e seu NOVO FIAT ARGO ainda mais protegido.<a data-ui-custom href=\"https://servicos.fiat.com.br/servicos.html\"  onclick=\"javascript:DataLayer.push('AboutPage_ContentButton', 'pacote-de-servicos', 'garantia-adicional-fiat', 'compre-agora');\" target=\"_blank\">COMPRE AGORA</a>",
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/servicos/2-garantia/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/servicos/2-garantia/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/servicos/2-garantia/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/servicos/2-garantia/2x.jpg',
							},
						],
					},
				},
				{
					title: 'REVISÕES SOB MEDIDA FIAT',
					description:
						"Mais economia para você e a FIAT Argo sempre bem cuidada. Monte um plano de revisões com descontos e preços fixos.<a data-ui-custom href=\"https://servicos.fiat.com.br/servicos/revisao_sob_medida.html\"  onclick=\"javascript:DataLayer.push('AboutPage_ContentButton', 'pacote-de-servicos', 'revisoes-sob-medida-fiat', 'saiba-mais');\" target=\"_blank\">SAIBA MAIS</a>",
					poster: {
						alt: '',
						sources: [
							{
								media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
								type: 'image/webp',
								srcSet: 'assets/imagens-accordion/servicos/3-revisoes/1x.webp',
								fallback: {
									type: 'image/jpg',
									srcSet: 'assets/imagens-accordion/servicos/3-revisoes/1x.jpg',
								},
							},
							{
								media: '(orientation: landscape)', // Mobile -> Imagem desk
								srcSet: 'assets/imagens-accordion/servicos/3-revisoes/2x.jpg',
							},
							{
								media: '(min-width: 1025px)', // Desk
								srcSet: 'assets/imagens-accordion/servicos/3-revisoes/2x.jpg',
							},
						],
					},
				},
				// {
				// 	title: 'PROTEÇÃO DE PNEUS FIAT',
				// 	description: "Novo e exclusivo serviço da Fiat para a proteção de pneus contra avarias e acidentes, com reposição garantida e cobertura de 12 meses.<a data-ui-custom href=\"https://servicos.fiat.com.br/servicos/protecao_de_pneus.html\"  onclick=\"javascript:DataLayer.push('AboutPage_ContentButton', 'pacote-de-servicos', 'protecao-de-pneus-fiat', 'saiba-mais');\" target=\"_blank\">SAIBA MAIS</a>",
				// 	poster:{
				// 		alt: '',
				// 		sources: [
				// 			{
				// 				media: '(max-width: 1024px) and (orientation: portrait)', // Mobile
				// 				type: 'image/jpg',
				// 				srcSet: '/assets/imagens-accordion/servicos/pneusargo.jpg',
				// 				fallback: {
				// 					type: 'image/jpg',
				// 					srcSet: '/assets/imagens-accordion/servicos/pneusargo.jpg',
				// 				},
				// 			},
				// 			{
				// 				media: '(orientation: portrait)', // Mobile -> Imagem desk
				// 				srcSet: '/assets/imagens-accordion/servicos/pneusargo.jpg',
				// 			},
				// 			{
				// 				media: '(min-width: 1025px)', // Desk
				// 				srcSet: '/assets/imagens-accordion/servicos/pneusargo.jpg',
				// 			},
				// 		],
				// 	},
				// }

			],
		},
	],
};

export default data;
