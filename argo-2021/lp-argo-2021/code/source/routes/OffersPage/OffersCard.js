import React, { useState } from 'react';
import TextLoop from 'react-text-loop';
import PropTypes from 'prop-types';
import cls from 'classnames';
import css from './OffersCard.scss';

export const classes = {
	root: css.offersCard,
	header: css.offersCardHeader,
	headerModel: css.offersCardHeaderModel,
	headerVersion: css.offersCardHeaderVersion,
	headerCar: css.offersCardHeaderCar,
	headerCarImage: css.offersCardHeaderCarImage,
	headerCondition: css.offersCardHeaderCondition,
	headerPrice: css.offersCardHeaderPrice,
	feature: css.offersCardFeature,
	featureList: css.offersCardFeatureList,
	featureItem: css.offersCardFeatureItem,
	featureItemText: css.offersCardFeatureItemText,
	part: css.offersCardPart,
	partList: css.offersCardPartList,
	partItem: css.offersCardPartItem,
	partButton: css.offersCardPartButton,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
};

export const defaultProps = {
	className: '',
	classes,
};

export function OffersCard({ className, classes, data: info, ...props }) {
	const [data, setData] = useState(info);

	const getPrice = (value) => {
		return parseInt(String(value).replace(/[\D]+/g, ''));
	};

	const formatPrice = (value) => {
		return value
			.toFixed(2)
			.replace('.', ',')
			.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
	};

	const parseCondition = (value) => {
		return String(value).replace('R$ 000', '');
	};

	const mountImageSrc = (info) => {
		const baseUrl = `${window.location.protocol}//ofertas.fiat.com.br/content/dam/fiat/products`;
		const model = info.mvsCode.substring(0, 3);
		const version = info.mvsCode.substring(3, 6).toLowerCase();
		const serie = info.mvsCode.substring(6, 7);
		const modelYear = info.modelYear;
		const colorCode = info.color.code;
		return `${baseUrl}/${model}/${version}/${serie}/${modelYear}/page/profile-png/profile-${colorCode}.png`;
	};

	const extractModel = (value) => {
		return value.replace(/([^\d]+)(.*)/g, '$1').replace(/fiat\s+/gi, '');
	};

	const extractVersion = (value) => {
		return value.replace(/([^\d]*)\s+([0-9.]*)\s+([^\w]*)/, (match, p1, p2, p3) => {
			return [p2, p3].join(' ');
		});
	};

	const renderFeature = (item, index) => {
		return (
			<div
				key={index}
				className={cls(classes.featureItem)}
				dangerouslySetInnerHTML={{
					__html: item.feature.name,
				}}
			/>
		);
	};

	const renderFeatures = (list) => {
		if (!list || !list.length) return null;
		return (
			<div className={cls(classes.featureList)}>
				<TextLoop interval={2500} adjustingSpeed={200} mask={true} noWrap={false}>
					{list.map(renderFeature)}
				</TextLoop>
			</div>
		);
	};

	const renderPart = (item, index) => {
		return (
			<li key={index} className={cls(classes.partItem)}>
				{`● ${item.part.name}`}
			</li>
		);
	};

	const renderParts = (list) => {
		///if (!list || !list.length) return null;
		return <ul className={cls(classes.partList)}>{list.map(renderPart)}</ul>;
	};

	return (
		<div className={cls(classes.root, className)}>
			<header className={cls(classes.header)}>
				<h3
					className={cls(classes.headerModel)}
					dangerouslySetInnerHTML={{
						__html: extractModel(data.model.mvsDescription),
					}}
				/>
				<h4
					className={cls(classes.headerVersion)}
					dangerouslySetInnerHTML={{
						__html: extractVersion(data.model.mvsDescription),
					}}
				/>
				<div className={cls(classes.headerCar)}>
					<img alt={'ofertas'} className={cls(classes.headerCarImage)} src={mountImageSrc(data.model)} />
				</div>
				<p
					className={cls(classes.headerCondition)}
					dangerouslySetInnerHTML={{
						__html: 'À VISTA A PARTIR DE', // parseCondition(data.payment.condition),
					}}
				/>
				<p
					className={cls(classes.headerPrice)}
					data-symbol={'R$'}
					dangerouslySetInnerHTML={{
						__html: formatPrice(data.payment.price),
					}}
				/>
			</header>

			<article className={cls(classes.feature)}>{renderFeatures(data.features)}</article>

			<footer className={cls(classes.part)}>
				{renderParts(data.parts)}
				<DataLayer onEvent={'OffersCard_ClicouEuQuero'} args={[data.id, info.model.mvsCode]}>
					<a
						className={cls(classes.partButton)}
						href={`https://ofertas.fiat.com.br/?offerId=${data.id}`}
						target={'_blank'}>
						EU QUERO
					</a>
				</DataLayer>
			</footer>
		</div>
	);
}

OffersCard.propTypes = propTypes;
OffersCard.defaultProps = defaultProps;
export default OffersCard;
