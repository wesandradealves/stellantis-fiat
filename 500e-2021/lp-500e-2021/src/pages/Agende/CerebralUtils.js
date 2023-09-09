/* eslint-disable */
export function isCpfCnpj(value, form, arg) {
	const validCnpj = isCnpj(value, form, arg);
	const validCpf = isCpf(value, form, arg);
	return validCnpj || validCpf;
}

export function isCnpj(cnpj, form, arg) {
	cnpj = cnpj.replace(/[^\d]+/g, '');


	if (cnpj == '') {
		return false;
	}

	if (cnpj.length != 14) {
		return false;
	}

	if (
		cnpj == '00000000000000' ||
		cnpj == '11111111111111' ||
		cnpj == '22222222222222' ||
		cnpj == '33333333333333' ||
		cnpj == '44444444444444' ||
		cnpj == '55555555555555' ||
		cnpj == '66666666666666' ||
		cnpj == '77777777777777' ||
		cnpj == '88888888888888' ||
		cnpj == '99999999999999'
	) {
		return false;
	}

	let tamanho = cnpj.length - 2;
	let numeros = cnpj.substring(0, tamanho);
	let digitos = cnpj.substring(tamanho);
	let soma = 0;
	let i;
	let pos = tamanho - 7;
	for (let i = tamanho; i >= 1; i--) {
		soma += numeros.charAt(tamanho - i) * pos--;
		if (pos < 2) {
			pos = 9;
		}
	}

	let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
	if (resultado != digitos.charAt(0)) {
		return false;
	}

	tamanho = tamanho + 1;
	numeros = cnpj.substring(0, tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (let i = tamanho; i >= 1; i -= 1) {
		soma += numeros.charAt(tamanho - i) * pos--;
		if (pos < 2) {
			pos = 9;
		}
	}
	resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
	if (resultado != digitos.charAt(1)) {
		return false;
	}
	return true;
}

export function isCpf(value, form, arg) {
	value = value
		.split('.')
		.join('')
		.replace('-', '');

	if (value.length > 11) {
		return false;
	}

	let Soma;
	let Resto;
	Soma = 0;
	if (
		value == '00000000000' ||
		value == '11111111111' ||
		value == '22222222222' ||
		value == '33333333333' ||
		value == '44444444444' ||
		value == '55555555555' ||
		value == '66666666666' ||
		value == '77777777777' ||
		value == '88888888888' ||
		value == '99999999999'
	) {
		return false;
	}

	for (let i = 1; i <= 9; i += 1) Soma = Soma + parseInt(value.substring(i - 1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;

	if (Resto == 10 || Resto == 11) Resto = 0;
	if (Resto != parseInt(value.substring(9, 10))) return false;

	Soma = 0;
	for (let i = 1; i <= 10; i += 1) Soma = Soma + parseInt(value.substring(i - 1, i)) * (12 - i);
	Resto = (Soma * 10) % 11;

	if (Resto == 10 || Resto == 11) Resto = 0;
	if (Resto != parseInt(value.substring(10, 11))) return false;
	return true;
}

export function isRequired(value, arg, get) {
	return !!value;
}
