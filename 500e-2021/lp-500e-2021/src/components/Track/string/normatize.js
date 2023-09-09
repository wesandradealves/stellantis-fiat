import { latinise } from './latinise/latinise';

export function normatize(value, rplc = '-') {
  if (value === undefined) return '';
  return latinise(
    `${value}`
      .toLowerCase()
      .replace(/\s/g, rplc)
      .replace(/-$/g, '')
      .replace(/\//g, '')
      .replace(/["']/gi, '')
      .replace(/-(<([^>]+)>)/gi, '')
      .replace(/(<([^>]+)>)/gi, '-'),
  );
}

export default normatize;
