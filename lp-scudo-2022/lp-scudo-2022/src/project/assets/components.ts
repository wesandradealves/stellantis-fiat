import {
  includeResponsive,
  PREFIX,
} from '@/prox/utils/imagePrefixes';

const STORIES_PREFIX = 'Stories/';

const content = {
  main: `${PREFIX}${STORIES_PREFIX}firstContent.svg`,
  second: `${PREFIX}${STORIES_PREFIX}secondContent.svg`,
  third: `${PREFIX}${STORIES_PREFIX}thirdContent.svg`,
};

const backgrounds = {
  mainStorie: includeResponsive(
    `${STORIES_PREFIX}photostories001`,
    'jpg',
  ),
  secondStorie: includeResponsive(
    `${STORIES_PREFIX}scudo-versatilidade-feature`,
    'jpg',
  ),
  thirdStorie: includeResponsive(
    `${STORIES_PREFIX}scudo-conforto-abordo-feature`,
    'jpg',
  ),
  fourthStorie: includeResponsive(
    `${STORIES_PREFIX}scudo-vantagens-negocios-feature`,
    'jpg',
  ),
  fifthStorie: includeResponsive(
    `${STORIES_PREFIX}scudo-escudo-feature`,
    'jpg',
  ),
};

export const Stories = {
  content,
  backgrounds,
};
