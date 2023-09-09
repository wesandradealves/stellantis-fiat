const taggingFormat = t => 
    t
    .toLowerCase() // letra minuscula
    .replace(/\s/gu, '-') // replace em todos os espaços por traço
    .normalize('NFD') // normalizar letra e acentos
    .replace(/[\u0300-\u036f]/g, ''); // remover somente acentos soltos

export default taggingFormat;