import { latinise } from './latinise';

export function normatize(value, rplc = '-') {
	return latinise(
		`${value}`
			.toLowerCase()
			.replace(/\s/g, rplc)
			.replace(/-$/g, '')
			.replace(/\//g, '')
			.replace(/["']/gi, '')
      .replace('•-', '')
			.replace(/-(<([^>]+)>)/gi, '')
			.replace(/(<([^>]+)>)/gi, '-')
	);
}

export default normatize;
