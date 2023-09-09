import clamp from '@dcode/utils/xtras/clamp';

export const data = {
	list:
	[
		{
			id: '#index',
			slug: 'argomentos',
			name: 'Argomentos',
			argomentos:
			{
				order:
				[
					'/design',
					'/central-multimidia',
					'/keyless',
					'/pneus',
					'/ar-digital',
					'/controle-de-tracao',
				],
				colors:
				{
					background: ['blue', 'green'],
					button: 'blue',
					title: 'blue',
				},
			},
			tip:
			{
				order:
				[
					0,
				],
				colors:
				{
					background: ['blue', 'green'],
					button: 'blue',
					title: 'blue',
				},
			},
		},
	],
};

export const safeId = (id, min = 0, max = data.list.length - 1) => {
	const current = parseInt(id, 10) || min;
	return clamp(current, min, max);
};

export const getAllSlugs = () => {
	let slugs = [];
	data.list.forEach(item => {
		slugs = [...slugs, ...item.slug];
	});
	return slugs;
};

export const getClusterById = id2find => {
	id2find = safeId(id2find);
	return data.list.find((arg, index) => {
		const argId = /\#index/.test(arg.id) ? index : arg.id;
		return argId === id2find;
	});
};

export const getClusterBySlug = slug2find => {
	return data.list.find(item => {
		return item.slug === slug2find;
	});
};

export const findCluster = (idOrSlug) => {
	return getClusterBySlug(idOrSlug) || getClusterById(idOrSlug);
};

export default data;
