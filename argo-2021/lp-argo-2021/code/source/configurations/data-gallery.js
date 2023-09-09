export const data = {
	title: '#chuvadelikes',
	description: 'Tudo o que você já gostou por outros ângulos!',
	list: [
		{
			poster: {
				alt: 'imagem-01',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)', //smartphone/mobile
						type: 'image/webp',
						srcSet: '/assets/galeria/mobile/galeria-mobile-01.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/galeria/mobile/galeria-mobile-01.jpg',
						},
					},
					{
						media: '(orientation: landscape)', //smartphone->imagem desk
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/galeria/desk/galeria-desk-01.jpg',
							},
							{
								type: 'image/webp',
								srcSet: '/assets/galeria/desk/galeria-desk-01.webp',
							},
						],
						fallback: {
							srcSet: 'assets/galeria/desk/galeria-desk-01.jpg',
							type: 'image/jpg',
						},
					},
					{
						media: '(min-width: 1025px)', //desk
						oneOf: [
							{
								type: 'image/jpg',
								srcSet: '/assets/galeria/desk/galeria-desk-01.jpg',
							},
							{
								type: 'image/webp',
								srcSet: '/assets/galeria/desk/galeria-desk-01.webp',
							},
						],
						fallback: {
							srcSet: 'assets/galeria/desk/galeria-desk-01.jpg',
							type: 'image/jpg',
						},
					},
				],
			},
			thumbnail: {
				type: 'image/webp',
				srcSet: '/assets/galeria/thumbs/thumb-galeria-01.webp',
				fallback: {
					type: 'image/jpg',
					srcSet: '/assets/galeria/thumbs/thumb-galeria-01.jpg',
				},
			},
		},
		{
			poster: {
				alt: 'imagem-02',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)', //smartphone/mobile
						type: 'image/webp',
						srcSet: '/assets/galeria/mobile/galeria-mobile-02.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/galeria/mobile/galeria-mobile-02.jpg',
						},
					},
					{
						media: '(orientation: landscape)', //smartphone->imagem desk
						srcSet: '/assets/galeria/desk/galeria-desk-02.jpg',
					},
					{
						media: '(min-width: 1025px)', //desk
						srcSet: '/assets/galeria/desk/galeria-desk-02.jpg',
					},
				],
			},
			thumbnail: {
				type: 'image/webp',
				srcSet: '/assets/galeria/thumbs/thumb-galeria-02.webp',
				fallback: {
					type: 'image/jpg',
					srcSet: '/assets/galeria/thumbs/thumb-galeria-02.jpg',
				},
			},
		},
		{
			poster: {
				alt: 'imagem-03',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)', //smartphone/mobile
						type: 'image/webp',
						srcSet: '/assets/galeria/mobile/galeria-mobile-03.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/galeria/mobile/galeria-mobile-03.jpg',
						},
					},
					{
						media: '(orientation: landscape)', //smartphone->imagem desk
						srcSet: '/assets/galeria/desk/galeria-desk-03.jpg',
					},
					{
						media: '(min-width: 1025px)', //desk
						srcSet: '/assets/galeria/desk/galeria-desk-03.jpg',
					},
				],
			},
			thumbnail: {
				type: 'image/webp',
				srcSet: '/assets/galeria/thumbs/thumb-galeria-03.webp',
				fallback: {
					type: 'image/jpg',
					srcSet: '/assets/galeria/thumbs/thumb-galeria-03.jpg',
				},
			},
		},
		{
			poster: {
				alt: 'imagem-04',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)', //smartphone/mobile
						type: 'image/webp',
						srcSet: '/assets/galeria/mobile/galeria-mobile-04.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/galeria/mobile/galeria-mobile-04.jpg',
						},
					},
					{
						media: '(orientation: landscape)', //smartphone->imagem desk
						srcSet: '/assets/galeria/desk/galeria-desk-04.jpg',
					},
					{
						media: '(min-width: 1025px)', //desk
						srcSet: '/assets/galeria/desk/galeria-desk-04.jpg',
					},
				],
			},
			thumbnail: {
				type: 'image/webp',
				srcSet: '/assets/galeria/thumbs/thumb-galeria-04.webp',
				fallback: {
					type: 'image/jpg',
					srcSet: '/assets/galeria/thumbs/thumb-galeria-04.jpg',
				},
			},
		},
		{
			poster: {
				alt: 'imagem-05',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)', //smartphone/mobile
						type: 'image/webp',
						srcSet: '/assets/galeria/mobile/galeria-mobile-05.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/galeria/mobile/galeria-mobile-05.jpg',
						},
					},
					{
						media: '(orientation: landscape)', //smartphone->imagem desk
						srcSet: '/assets/galeria/desk/galeria-desk-05.jpg',
					},
					{
						media: '(min-width: 1025px)', //desk
						srcSet: '/assets/galeria/desk/galeria-desk-05.jpg',
					},
				],
			},
			thumbnail: {
				type: 'image/webp',
				srcSet: '/assets/galeria/thumbs/thumb-galeria-05.webp',
				fallback: {
					type: 'image/jpg',
					srcSet: '/assets/galeria/thumbs/thumb-galeria-05.jpg',
				},
			},
		},
		{
			poster: {
				alt: 'imagem-06',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)', //smartphone/mobile
						type: 'image/webp',
						srcSet: '/assets/galeria/mobile/galeria-mobile-06.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/galeria/mobile/galeria-mobile-06.jpg',
						},
					},
					{
						media: '(orientation: landscape)', //smartphone->imagem desk
						srcSet: '/assets/galeria/desk/galeria-desk-06.jpg',
					},
					{
						media: '(min-width: 1025px)', //desk
						srcSet: '/assets/galeria/desk/galeria-desk-06.jpg',
					},
				],
			},
			thumbnail: {
				type: 'image/webp',
				srcSet: '/assets/galeria/thumbs/thumb-galeria-06.webp',
				fallback: {
					type: 'image/jpg',
					srcSet: '/assets/galeria/thumbs/thumb-galeria-06.jpg',
				},
			},
		},
		{
			poster: {
				alt: 'imagem-07',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)', //smartphone/mobile
						type: 'image/webp',
						srcSet: '/assets/galeria/mobile/galeria-mobile-07.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/galeria/mobile/galeria-mobile-07.jpg',
						},
					},
					{
						media: '(orientation: landscape)', //smartphone->imagem desk
						srcSet: '/assets/galeria/desk/galeria-desk-07.jpg',
					},
					{
						media: '(min-width: 1025px)', //desk
						srcSet: '/assets/galeria/desk/galeria-desk-07.jpg',
					},
				],
			},
			thumbnail: {
				type: 'image/webp',
				srcSet: '/assets/galeria/thumbs/thumb-galeria-07.webp',
				fallback: {
					type: 'image/jpg',
					srcSet: '/assets/galeria/thumbs/thumb-galeria-07.jpg',
				},
			},
		},
		{
			poster: {
				alt: 'imagem-08',
				sources: [
					{
						media: '(max-width: 1024px) and (orientation: portrait)', //smartphone/mobile
						type: 'image/webp',
						srcSet: '/assets/galeria/mobile/galeria-mobile-08.webp',
						fallback: {
							type: 'image/jpg',
							srcSet: '/assets/galeria/mobile/galeria-mobile-08.jpg',
						},
					},
					{
						media: '(orientation: landscape)', //smartphone->imagem desk
						srcSet: '/assets/galeria/desk/galeria-desk-08.jpg',
					},
					{
						media: '(min-width: 1025px)', //desk
						srcSet: '/assets/galeria/desk/galeria-desk-08.jpg',
					},
				],
			},
			thumbnail: {
				type: 'image/webp',
				srcSet: '/assets/galeria/thumbs/thumb-galeria-08.webp',
				fallback: {
					type: 'image/jpg',
					srcSet: '/assets/galeria/thumbs/thumb-galeria-08.jpg',
				},
			},
		},
	],
};

export default data;
