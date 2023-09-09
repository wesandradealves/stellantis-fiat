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

	console.log('findCityByName: ' + x.cityName);

    return fetch(`https://location-service.k8s.fcalatam.com.br/country/BR?cityContaining=${x.cityName}&includeInfluenceArea=true`)
        .then(response => response.json())
        .then(res => {
			let cities = res.filter(x => x.cityName === x.cityName);
			console.log('CityName : ', x)
			
            //if (cities.length >= 2 && x.uf) {
              //  cities = cities.filter(y => y.stateCode === x.uf);
                return cities[0];
            //} else {
              //  return cities;
            //}
        });
}

/*export function findCityByName(x) {
	console.log ('findCityByName:', x.cityName)
	let cityName = "Betim";

	// return fetch(`https://location-service.k8s.fcalatam.com.br/country/BR?cityContaining=betim&includeInfluenceArea=true`)
	// .then(response => response.json())
	// .then((jsonData) => {
	//   // jsonData is parsed json object received from url
	//   console.log('JSon Data ' , jsonData)
	  

	// })
	// .catch((error) => {
	//   // handle your errors here
	//   console.error(error)
	// })
	console.log(`https://location-service.k8s.fcalatam.com.br/country/BR?cityContaining=betim&includeInfluenceArea=true`);
	return fetch(`https://location-service.k8s.fcalatam.com.br/country/BR?cityContaining=betim&includeInfluenceArea=true`)
        .then(response => response.json())
        .then(res => {
			console.log('Res: ', res)
			
			let cities = res.filter(x => x.cityName === x.cityName);
			console.log('CityName : ', x)

			if (cities.length >= 2 && x.uf) {
                cities = cities.filter(y => y.stateCode === x.uf);
                return cities[0];
            } else {
                return cities;
            }
		});
		
}*/

// export function findCityByName(x) {
// 	console.log ('findCityByName:', x.cityName)
// 	//let cityName = "Betim";
// 	return fetch(`https://location-service.k8s.fcalatam.com.br/country/BR?cityContaining=betim&includeInfluenceArea=true`)
//         .then(response => response.json())
//         .then(res => {
//             let cities = res.filter(x => x.cityName === x.cityName);
//             if (cities.length >= 2 && x.uf) {
//                 cities = cities.filter(y => y.stateCode === x.uf);
//                 return cities[0];
//             } else {
//                 return cities;
//             }
// 		});
		
// }

/*
export function getCookieDirect(name) {
	const $cookie = getCookie(name);
	return $cookie.match(/\(?direct|direto\)?/gi) ? 'DIRECT' : $cookie;
}

export function getCookie(name) {
	const $cookie = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
	return $cookie ? decodeURIComponent($cookie[2]) : '';
}

export function findCityByName(name, uf = null) {
	return getCities().find((city) => {
		if (uf) {
			return city.city == name && city.uf == uf;
		}
		return city.city == name;
	});
}

export function filterCitiesByCep(cities, ceps, value: number) {
	const ibgeMap = getIbgeMap();
	let valueStr = `${value}`;
	for (let id = valueStr.length; id < 8; id += 1) {
		valueStr += '0';
	}
	value = +valueStr * 1;
	const arr = [];
	for (let id = 0; id < ceps.length; id += 1) {
		let cep = ceps[id];
		if (cep.min <= value && value <= cep.max) {
			arr.push(ibgeMap[cep.ibge].city);
			if (arr.length > 6) {
				break;
			}
		}
	}
	return arr;
}

export function filterCities(cities, value) {
	let arr = [];
	// for feio, mas mais performatico do que usar .filter e etc...
	// A lista é grande.
	for (var i = 0; i < cities.length; i++) {
		let city = cities[i];
		if (city.city.toLowerCase().indexOf(value.toLowerCase()) != -1) {
			arr.push(city);
			if (arr.length > 6) {
				break;
			}
		}
	}
	return arr.sort((a, b) => {
		if (priority[a.ibge] && priority[b.ibge]) {
			return 0;
		} else if (priority[a.ibge]) {
			return -1;
		} else {
			return 1;
		}
	});
}
*/