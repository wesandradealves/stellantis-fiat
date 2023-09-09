import React from 'react';
import { DataLayer } from '@dcode/react/components/DataLayer';
import css from './Banner.scss';

export const classes = {
	root: css.banner,
	link: css.bannerLink,
};

export function Banner(props) {
	return (
		<div className={classes.root}>
			<DataLayer onEvent={'Banner_ClicouLink'} args={[]}>
				<a className={classes.link} href="https://live.fiat.com.br" target="_blank"></a>
			</DataLayer>
		</div>
	);
}

Banner.displayName = 'Banner';
export default Banner;
