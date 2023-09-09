import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useGlobal } from 'reactn';
import { Guidelines } from '@dcode/react/components/GridSystem';
import { DataLayer } from '@dcode/react/components/DataLayer';
import { ScrollProgress } from './components/ScrollProgress';
import { MenuFixed } from './components/MenuFixed';
import { Menu } from './components/Menu';
import configData from './configurations/data';
import Routes from './routes';
import WarningBox from './components/WarningBox/WarningBox'

export const propTypes = {
	name: PropTypes.string,
	mobile: PropTypes.bool,
	data: PropTypes.object,
};

export const defaultProps = {
	name: '',
	mobile: false,
	data: configData,
};

export const Base = ({ name, mobile, data: info, ...props }) => {
	const [cluster] = useGlobal('cluster');
	const [isLoading, setIsLoading] = React.useState(false);

	useLayoutEffect(() => {
		console.log(`v${props.version}`);
		// Esses nomes precisam seguir os dados da planilha inicial, e somente
		// serem exibidos no cliente com os nomes "vendáveis" e.g: argo-tecnologico.
		const translations = {
			'argomentos': '',
			'argo-tecnologico': 'pai-nerd',
			'argo-arrojado': 'bon-vivant',
			'argo-moderno': 'mulher-design',
			'argo-esportivo': 'amante-de-carro',
		};
		const translation = translations[cluster.slug];
		DataLayer.init(info.tracks.data, translation, props.mobile ? 'm' : 'd');
	}, []);

	return (
		<React.Fragment>
			<div data-ui-app={true}>
				<ScrollProgress color={'#e50353'} height={2} />
				<Routes name={name} mobile={mobile} data={info} />
				<Menu name={name} mobile={mobile} />
				<WarningBox />
        { mobile && <MenuFixed /> }
			</div>
			<Guidelines columns={12} />
		</React.Fragment>
	);
};

Base.propTypes = propTypes;
Base.defaultProps = defaultProps;
export default Base;
