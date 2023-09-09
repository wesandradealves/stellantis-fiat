import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import cls from 'classnames';
import ReactIdSwiper from 'react-id-swiper';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import normatize from "@dcode/utils/xtras/normatize";
import { Quote } from '~/components/Quote';
import { OffersCard } from './OffersCard';
import configData from '~/configurations/data';
import css from './OffersPage.scss';

export const classes = {
	root: css.offersPage,
	content: css.offersPageContent,
	background: css.offersPageBackground,
	quote: css.offersPageQuote,
	card: css.offersPageCard,
	cardList: css.offersPageCardList,
	cardItem: css.offersPageCardItem,
	cardOffer: css.offersPageCardOffer,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
};

export const defaultProps = {
	className: '',
	classes,
	data: configData.offers,
};

export function OffersPage({ className, classes, location, data: info, ...props }) {
	const $el = useRef();
	const swiperThumbsRef = useRef();
	const [data, setData] = useState(info.data);
	const [userLocation, setUserLocation] = useState({});
	const [userOffers, setUserOffers] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const swiperThumbsConfigDesktop = {
		direction: 'horizontal',
		loopFillGroupWithBlank: true,
		loop: false,
		freeMode: false,
		grabCursor: true,
		centeredSlides: false,
		initialSlide: currentIndex,
		slidesPerGroup: 3,
		slidesPerView: 3,
		slidesPerColumn: 1,
		spaceBetween: 18,
	};

	const swiperThumbsConfigTablet = {
		...swiperThumbsConfigDesktop,
		slidesPerView: 3,
		slidesPerGroup: 3,
	};

	const swiperThumbsConfigSmartphone = {
		...swiperThumbsConfigDesktop,
		centeredSlides: true,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 26,
		cssMode: true,
	};

	const onThumbsSliderMove = () => {
		// DataLayer.push('OffersPage_ScrollOfertas', );
	};

	useEffect(() => {
		if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
			swiperThumbsRef.current.swiper.on('slideChange', onThumbsSliderMove);
		}
		return () => {
			if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
				swiperThumbsRef.current.swiper.off('slideChange', onThumbsSliderMove);
			}
		};
	}, [swiperThumbsRef]);

	const sort = (property) => {
		let sortOrder = 1;
		if (property[0] === '-') {
			sortOrder = -1;
			property = property.substr(1);
		}
		return (valueA, valueB) => {
			let result = 0;
			if (valueA[property] < valueB[property]) {
				result = -1;
			} else if (valueA[property] > valueB[property]) {
				result = 1;
			}
			return result * sortOrder;
		}
	};

	const sortMultiple = (...props) => (valueA, valueB) => {
		let id = 0;
		let result = 0;
		const numberOfProperties = props.length;
		while(result === 0 && id < numberOfProperties) {
			result = sort(props[id])(valueA, valueB);
			id++;
		}
		return result;
	};

	// const filterBlacklist = (userCityName) => (data) => {
	// 	return data.filter((item) => {
	// 		return !item.blacklist.filter((bitem) => {
	// 			return userCityName.toLowerCase() === bitem.state.toLowerCase();
	// 		}).length;
	// 	});
	// };

	// const filterWhitelist = (userCityName) => (data) => {
	// 	return data.filter((item) => {
	// 		console.log(userCityName)
	// 		return !!item.whitelist.filter((bitem) => {
	// 			const regional = (bitem.regional || bitem.state || '');
	// 			return (userCityName.toLowerCase() === regional.toLowerCase()) || bitem.coverage === 'NATIONAL';
	// 		}).length;
	// 	});
	// };

	const filterByExpirationDate = (data) => {
		return data.filter((item) => {
			return moment(item.expirationDate, 'L').isSameOrAfter(moment());
		});
	};

	const filterOfferByModel = (rule) => (data) => {
		return data.filter((item) => {
			return item.model && ~item.model.name.indexOf(rule);
		});
	};

	const filterOfferByCategory = (rule) => (data) => {
		return data.filter((item) => {
			return item.category && ~item.category.name.indexOf(rule);
		});
	};

	const filterLimit = (limit) => (data) => {
		return data.filter((item, index) => {
			return index <= limit - 1;
		});
	};

	// const orderByCoverage = (data) => {
	// 	return data.sort((valueA, valueB) => {
	// 		if (valueA.whitelist[0].coverage < valueB.whitelist[0].coverage) {
	// 			return -1;
	// 		} else if (valueA.whitelist[0].coverage > valueB.whitelist[0].coverage) {
	// 			return 1;
	// 		}
	// 		return 0;
	// 	});
	// };

	const getInfluenceArea = (ID_INFLUENCE_AREA) => (data) => {
		return axios.get(`https://dealer-service.k8s.fcalatam.com.br/dealerws/influencearea/${ID_INFLUENCE_AREA}/city`)
	};

	const getCityInfluenceArea = (city, uf) => (data) => {// serviço de location
		return axios.get(`https://location-service.k8s.fcalatam.com.br/country/BR?cityContaining=${
			city
		}&limit=20&includeInfluenceArea=true`)
		.then((info) => {
			const filteredObject = info.data.filter((item) => {
				return item.cityName === city;
			});
			const brandInfoList = filteredObject.influenceAreas.filter((item) => {
				return item.brand.name === 'FIAT';
			});
			const cities = brandInfoList.filter(async () => {
				return await getInfluenceArea(brandInfo.id)(data);
			});
			return cities;
		});
	};

	// coverage: NATIONAL | REGIONAL | STATE
	// blacklist: não aparece nunca (verificar propriedade cities) e em casos de lista vazia é ignorada a validação
	// whitelist: cities citiesCode

	// - .then(filterByExpirationDate)
	// - .then(filterOfferByModel('MOBI'))
	// - .then(filterOfferByCategory('PESSOA FÍSICA'))
  // - .then(filterLimit(3))
  // - .then(orderByCoverage)

	const onResolveLocation = (userLocation) => {
		const cityName = userLocation.city.names.en;
		const uf = userLocation.subdivisions[0].iso_code;
		setUserLocation({ cityName, uf });
		axios
		.get('https://offer-service.k8s.fcalatam.com.br/public/offer')
		.then((response) => response.data)
		.then(filterByExpirationDate)
		.then(filterOfferByModel('MOBI'))
		.then(filterOfferByCategory('PESSOA FÍSICA'))
		.then(getCityInfluenceArea(cityName, uf))
		// .then(filterLimit(3))

		// .then(orderByCoverage) // TODO: Nacionais por último
		// .then(getCityInfluenceArea(normatize(userLocation.city.names.en, ' ')))
		// .then(filterBlacklist(normatize(userLocation.city.names.en, ' ')))
		// .then(filterWhitelist(normatize(userLocation.city.names.en, ' ')))
		.then(setUserOffers);
	};

	const onRejectLocation = (error) => {
		console.error(JSON.stringify(error, undefined, 2));
	};

	useEffect(() => {
		window.geoip2.city(onResolveLocation, onRejectLocation);
	}, []);

	const renderCard = (item, index) => {
		return (
			<div key={index} className={cls(classes.cardItem)}>
				<OffersCard
					className={cls(classes.cardOffer)}
					data={item}
				/>
			</div>
		);
	};

	const renderCards = (list) => {
		return list.map(renderCard);
	};

	return !!userOffers.length && (
		<section ref={$el} id={'ofertas'} data-ui-anchor={'ofertas'} className={cls(classes.root, className)}>
			{/* Background ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
			<div className={cls(classes.background)} />

			<div className={cls(classes.content)}>
				{/* Fortune Cookie ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
				<Quote className={classes.quote} title={data.title} text={data.description} />
			</div>

			<div className={cls(classes.content)}>
				<div className={cls(classes.card)}>
					<ReactIdSwiper
						ref={swiperThumbsRef}
						containerClass={cls(classes.cardList)}
						{...swiperThumbsConfigDesktop}
						breakpoints={{
							568: {
								...swiperThumbsConfigSmartphone,
							},
							768: {
								...swiperThumbsConfigSmartphone,
							},
							1024: {
								...swiperThumbsConfigTablet,
							},
						}}>
						{renderCards(userOffers)}
					</ReactIdSwiper>
				</div>
			</div>
		</section>
	);
};

OffersPage.propTypes = propTypes;
OffersPage.defaultProps = defaultProps;
export default OffersPage;


// http://offer-service.k8s.fcalatam.com.br/public/offer
// -----------------------------------------------------
// - [x] Obter localização do usuário
// - [x] Filtrar expirationDate
// - [x] Filtrar category.name = PESSOA FÍSICA
// - [x] Filtrar com limite de 3 ofertas
// - [ ] Filtrar nacionais
// - [ ] Filtrar e adicionar regionais sem cidades de blacklist
// - [ ] Filtrar por proximidade de versão
// - [ ] Exibe conteúdo com base no PDF do Sérgio
// -----------------------------------------------------
