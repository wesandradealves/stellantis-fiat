import { includeResponsive, PREFIX } from "@/utils/imagePrefixes";

const STORIES_PREFIX = "Stories/backgrounds/";

const content = {
  main: `${PREFIX}${STORIES_PREFIX}firstContent.svg`,
  second: `${PREFIX}${STORIES_PREFIX}secondContent.svg`,
  third: `${PREFIX}${STORIES_PREFIX}thirdContent.svg`,
};

const backgrounds = {
  mainBg: includeResponsive(`${STORIES_PREFIX}fiat-fastback`, "jpg"),
  mainStorie: includeResponsive(`${STORIES_PREFIX}design-coupe`, "jpg"),
  firstStorie: includeResponsive(`${STORIES_PREFIX}performance`, "jpg"),
  secondStorie: includeResponsive(`${STORIES_PREFIX}espaco`, "jpg"),
  thirdStorie: includeResponsive(`${STORIES_PREFIX}powered-by-abarth`, "jpg"),
};

export const Stories = {
  content,
  backgrounds,
};
