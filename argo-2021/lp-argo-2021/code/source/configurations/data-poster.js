/* eslint-disable */
import clamp from '@dcode/utils/xtras/clamp';

export const data = {
	title: 'Bem-vindo ao fabuloso design do Fiat Argo.',
	list: [
		// design
		{
			id: '#index',
			path: '/design',
			title: {
				mobile: 'BEM-VINDO A FABULOSA ROBUSTEZ',
				desk: 'BEM-VINDO A FABULOSA ROBUSTEZ',
			},
			modal: {
				tabName: 'aba 3',
				caption: 'BEM-VINDO A FABULOSA ROBUSTEZ',
				title: 'BEM-VINDO AO FABULOSO DESIGN DO FIAT ARGO.',
				description: 'Longe do solo e perto da sua próxima aventura, o Fiat Argo está com um design ainda mais robusto e aventureiro. Sua grade frontal também ficou mais invocada e ganhou novidades como o detalhe da flag italiana e o novo logo Fiat.',
				descriptionMobile: 'Longe do solo e perto da sua próxima aventura, o Fiat Argo está com um design ainda mais robusto e aventureiro. Sua grade frontal também ficou mais invocada e ganhou novidades como o detalhe da flag italiana e o novo logo Fiat.',
				poster: '/assets/argomentos/modais/mobile/modal-01@2x.jpg',
			},
			thumb:
			{
				alt: 'BEM-VINDO A FABULOSA ROBUSTEZ',
				src: '/assets/argomentos/thumbs/mobile/poster.jpg',
				fallback: '/assets/argomentos/thumbs/mobile/poster@2x.jpg',
				srcSet: [
					'/assets/argomentos/thumbs/mobile/poster.jpg'
				],
			},
		},

		// central multimidia
		{
			id: '#index',
			path: '/central-multimidia',
			title: {
				mobile: 'CENTRAL MULTIMÍDIA',
				desk: 'CENTRAL MULTIMÍDIA',
			},
			modal: {
				tabName: 'aba 2',
				caption: 'CENTRAL MULTIMÍDIA',
				title: 'BEM-VINDO À FABULOSA CONECTIVIDADE DO FIAT ARGO.',
				description: 'Com a Central Multimídia Uconnect de 7" você conecta seu smartphone via Android Auto ou Apple CarPlay e dirige na companhia dos seus apps favoritos. E você ainda pode controlar tudo pelo volante.',
				descriptionMobile: 'Com a Central Multimídia Uconnect de 7" você conecta seu smartphone via Android Auto ou Apple CarPlay e dirige na companhia dos seus apps favoritos. E você ainda pode controlar tudo pelo volante.',
				poster: '/assets/argomentos/modais/mobile/modal-02@2x.jpg'
			},
			thumb:
			{
				alt: 'CENTRAL MULTIMÍDIA',
				src: '/assets/argomentos/thumbs/mobile/destaque-01@2x.jpg',
				fallback: '/assets/argomentos/thumbs/mobile/destaque-01@2x.jpg',
				srcSet: [
					'/assets/argomentos/thumbs/mobile/destaque-01.jpg',
				],
			},
		},

		// keyless
		{
			id: '#index',
			path: '/keyless',
			title: {
				mobile: 'KEYLESS ENTRY N\'GO',
				desk: 'KEYLESS ENTRY N\'GO',
			},
			modal: {
				tabName: 'aba 1',
				caption: 'KEYLESS ENTRY N\'GO',
				title: 'BEM-VINDO À FABULOSA PRATICIDADE DO FIAT ARGO.',
				description: 'Seu Argo está sempre de portas abertas para uma nova aventura. Com o sistema Keyless Entry N\' Go, você destrava as portas e dá a partida no carro sem tirar as chaves do bolso. É só chegar e dirigir.',
				descriptionMobile: 'Seu Argo está sempre de portas abertas para uma nova aventura. Com o sistema Keyless Entry N\' Go, você destrava as portas e dá a partida no carro sem tirar as chaves do bolso. É só chegar e dirigir.',
				poster: '/assets/argomentos/modais/mobile/modal-03@2x.jpg',
			},
			thumb:
			{
				alt: 'KEYLESS ENTRY N\'GO',
				src: '/assets/argomentos/thumbs/mobile/destaque-02@2x.jpg',
				fallback: '/assets/argomentos/thumbs/mobile/destaque-02@2x.jpg',
				srcSet: [
					'/assets/argomentos/thumbs/mobile/destaque-02.jpg'
				],
			},
		},

		// pneus
		{
			id: '#index',
			path: '/pneus',
			title: {
				mobile: 'PNEUS DE USO MISTO',
				desk: 'PNEUS DE USO MISTO',
			},
			modal: {
				tabName: 'aba 4',
				caption: 'PNEUS DE USO MISTO',
				title: 'BEM-VINDO À FABULOSA VERSATILIDADE DO FIAT ARGO.',
				description: 'Fabuloso dentro e fora da cidade. Com os pneus de uso misto, somados ao design robusto e os 21cm de altura em relação ao solo na versão Trekking, você tem a versatilidade e confiança para desbravar novos terrenos e criar novas histórias.',
				descriptionMobile: 'Fabuloso dentro e fora da cidade. Com os pneus de uso misto, somados ao design robusto e os 21cm de altura em relação ao solo na versão Trekking, você tem a versatilidade e confiança para desbravar novos terrenos e criar novas histórias.',
				poster: '/assets/argomentos/modais/mobile/modal-04@2x.jpg'
			},
			thumb:
			{
				alt: 'PNEUS DE USO MISTO',
				src: '/assets/argomentos/thumbs/mobile/destaque-03@2x.jpg',
				fallback: '/assets/argomentos/thumbs/mobile/destaque-03@2x.jpg',
				srcSet: [
					'/assets/argomentos/thumbs/mobile/destaque-03.jpg'
				],
			},
		},

		// ar digital
		{
			id: '#index',
			path: '/ar-digital',
			title: {
				mobile: 'AR DIGITAL',
				desk: 'AR DIGITAL',
			},
			modal: {
				tabName: 'aba 5',
				caption: 'AR DIGITAL',
				title: 'BEM-VINDO AO FABULOSO CLIMA DO FIAT ARGO.',
				description: 'Entrar num Fiat Argo é entrar no clima. Seu ar-condicionado digital tem sempre a ambientação certa, de acordo com a temperatura e/ou velocidades favoritos para o motorista. É tanta coisa que até arrepia, né?',
				descriptionMobile: 'Entrar num Fiat Argo é entrar no clima. Seu ar-condicionado digital tem sempre a ambientação certa, de acordo com a temperatura e/ou velocidades favoritos para o motorista. É tanta coisa que até arrepia, né?',
				poster: '/assets/argomentos/modais/mobile/modal-05@2x.jpg'
			},
			thumb:
			{
				alt: 'AR DIGITAL',
				src: '/assets/argomentos/thumbs/mobile/destaque-04@2x.jpg',
				fallback: '/assets/argomentos/thumbs/mobile/destaque-04@2x.jpg',
				srcSet: [
					'/assets/argomentos/thumbs/mobile/destaque-04.jpg'
				],
			},
		},

		// contole de tração
		{
			id: '#index',
			path: '/controle-de-tracao',
			title: {
				mobile: 'CONTROLE DE TRAÇÃO',
				desk: 'CONTROLE DE TRAÇÃO',
			},
			modal: {
				tabName: 'aba 5',
				caption: 'CONTROLE DE TRAÇÃO',
				title: 'BEM-VINDO À FABULOSA TECNOLOGIA DO FIAT ARGO.',
				description: 'O Controle de tração e estabilidade do Fiat Argo corrige a rotação das rodas e estabiliza o veículo automaticamente em curvas mais acentuadas. E na hora de sair de ladeiras, você ainda conta com o assistente de partidas Hill Holder. É muita tecnologia.',
				descriptionMobile: 'O Controle de tração e estabilidade do Fiat Argo corrige a rotação das rodas e estabiliza o veículo automaticamente em curvas mais acentuadas. E na hora de sair de ladeiras, você ainda conta com o assistente de partidas Hill Holder. É muita tecnologia.',
				poster: '/assets/argomentos/modais/mobile/modal-06@2x.jpg'
			},
			thumb:
			{
				alt: 'CONTROLE DE TRAÇÃO',
				src: '/assets/argomentos/thumbs/mobile/destaque-05@2x.jpg',
				fallback: '/assets/argomentos/thumbs/mobile/destaque-05@2x.jpg',
				srcSet: [
					'/assets/argomentos/thumbs/mobile/destaque-05.jpg'
				],
			},
		},
	],
};

export const safeId = (id, min = 0, max = data.list.length - 1) => {
	const current = parseInt(id, 10) || min;
	return clamp(current, min, max);
};

export const getArgByPath = (path2find) => {
	return data.list.find((item) => {
		return item.path.indexOf(path2find) === 0;
	});
};

export default data;
