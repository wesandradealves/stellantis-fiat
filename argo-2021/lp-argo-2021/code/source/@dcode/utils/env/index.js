import iif from './iif';
import isLocalhost from './isLocalhost';

export const ENV_DEFAULT = isLocalhost ? 'localhost' : 'prod';

export const ENV = process.env.REACT_APP_ENV || ENV_DEFAULT;

export const ifNotProduction = iif(!/^(?:production)$/i.test(ENV));
export const ifProduction = iif(/^(?:production)$/i.test(ENV));

export const ifNotStaging = iif(!/^(?:staging)$/i.test(ENV));
export const ifStaging = iif(/^(?:staging)$/i.test(ENV));

export const ifNotDevelopment = iif(!/^(?:development)$/i.test(ENV));
export const ifDevelopment = iif(/^(?:development)$/i.test(ENV));

export const ifNotLocalhost = iif(!/^(?:localhost)$/i.test(ENV));
export const ifLocalhost = iif(/^(?:localhost)$/i.test(ENV));

export const inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
export const inNode = new Function('try{return this===global;}catch(err){return false;}')();
export const env = inNode ? global : window;

export { isLocalhost };
