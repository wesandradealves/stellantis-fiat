export const $tag = document.querySelector('base');

export const basename = $tag ? $tag.getAttribute('href') : '';
