interface TwitterMetatagInterface {
	card: 'summary';
	title?: string;
	description?: string;
	site?: string;
	imageAlt?: string;
	image: string;
}

interface FacebookMetatagInterface {
	type: 'website';
	title?: string;
	description?: string;
	app_id?: string;
	imageAlt?: string;
	image: string;
	imageWidth: '1200';
	imageHeight: '630';
}

export interface MetatagsInterface {
	title: string;
	description: string;
	keywords: string;
	url: string;
	image: string;
	themeColor?: string;
	imageAlt?: string;
	twitter: TwitterMetatagInterface;
	facebook: FacebookMetatagInterface;
}
