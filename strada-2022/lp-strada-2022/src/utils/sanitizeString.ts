const sanitizeString = (s: string): string =>
  s
    ? s
        .toLowerCase()
        .replace(/\//g, ' ')
        // replace retirado pelo erro de formato
        // para tag de CTA na section Versions
        //.replace(/:/g, ':')
        .replace(/-/g, ' ')
        .replace(/\?/g, '')
        .replace(/\!/g, '')
        .replace(/\./g, '')
        .replace(/\s\s+/g, ' ')
        .replace(/^\s/gu, '')
        .replace(/\s/gu, '-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim() ?? ''
    : '';

export default sanitizeString;
