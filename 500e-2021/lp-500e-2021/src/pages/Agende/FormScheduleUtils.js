/* eslint-disable */
import priority from './priority';
import { getCities, getIbgeMap } from './FormScheduleModule';

export function getCookieDirect(name) {
	const $cookie = getCookie(name);
	return $cookie.match(/\(?direct|direto\)?/gi) ? 'DIRECT' : $cookie;
}

export function getCookie(name) {
	const $cookie = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
	return $cookie ? decodeURIComponent($cookie[2]) : '';
}

export function findCityByName(x) {
	console.log('findCityByName:', x.cityName);
	return fetch(
		`https://location-service.k8s.fcalatam.com.br/country/BR?cityContaining=${x.cityName}&includeInfluenceArea=true`)
		.then((response) => response.json())
		.then((res) => {
			let cities = res.filter(x => x.cityName === x.cityName);
			console.log('CityName:', x);
			return cities[0];
		})
	;
}
