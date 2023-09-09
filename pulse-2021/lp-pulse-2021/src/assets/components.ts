import { includeResponsive, PREFIX } from "@/utils/imagePrefixes";

const STORIES_PREFIX = 'Stories/';

const content = {
    main: `${PREFIX}${STORIES_PREFIX}firstContent.svg`,
}

const backgrounds = {
    main: includeResponsive(`${STORIES_PREFIX}fiat-pulse-suv`, 'jpg'),
}

export const Stories = {
    content,
    backgrounds,
}
