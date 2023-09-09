export const linkHref = (href: string, absolutePath = false): string => {
  if (!href) return '';
  const windowOrigin = typeof window !== 'undefined' ? `${window.location.origin}/` : null;
  const origin: string | boolean = windowOrigin ?? process.env?.BASEPATH ?? false;
  const prefix = absolutePath && origin ? origin : process.env?.BASE_URL ?? '';
  return `${prefix}${href.replace(/^\//, '')}`;
};
