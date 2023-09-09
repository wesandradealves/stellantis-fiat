const PREFIX = `${process.env.BASE_PREFIX}images/`;

export interface IncludePrefix {
  fullPath: string;
  path: string;
  extension: string;
}

export const includePrefix = (path: string, extension: string): IncludePrefix => ({
  fullPath: `${PREFIX}${path}.${extension}`,
  path: `${PREFIX}${path}`,
  extension,
});
