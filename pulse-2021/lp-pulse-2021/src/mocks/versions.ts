import { IVersion, IVersionFragment } from '@/models';

const versions: IVersionFragment[] = [
  {
    id: 'version-impetus',
    name: 'Impetus',
    nameParts: {
      first: 'Impetus',
      second: 'Turbo 200',
    },
    short: 'Impetus',
    hex: '#3A369E',
    details: [
      'Central multimídia de 10,1”',
      'Cluster 7” Full Digital',
      'Bancos revestidos em couro',
    ],
    text: 'light',
  },
  {
    id: 'version-audace',
    name: 'Audace',
    nameParts: {
      first: 'Audace',
      second: 'Turbo 200',
    },
    short: 'Audace',
    hex: '#92D0DB',
    details: [
      'Pacote de Segurança Autônoma (ADAS)',
      'Keyless Entry’n Go',
      'Carregador wireless',
    ],
    text: 'dark',
  },
  {
    id: 'version-drive-turbo',
    name: 'Drive Turbo',
    nameParts: {
      first: 'Drive',
      second: 'Turbo 200',
    },
    short: 'Drive Turbo',
    hex: '#FF1431',
    details: [
      'Novo motor Turbo 200 Flex',
      'Modo Sport',
      'Câmbio automático CVT',
    ],
    text: 'light',
  },
  {
    id: 'version-drive-13',
    name: 'Drive Automático',
    nameParts: {
      first: 'Drive',
      second: 'Automático',
    },
    short: 'Drive Automático',
    hex: '#FFBA0D',
    details: [
      'Ar-condicionado automático e digital',
      'Câmbio automático CVT',
      'Central multimídia 8,4”',
    ],
    text: 'dark',
  },
  {
    id: 'version-13mt',
    name: 'Drive Manual',
    nameParts: {
      first: 'Drive',
      second: 'Manual',
    },
    short: 'Drive Manual',
    hex: '#A31345',
    details: [
      'Faróis e Lanternas em LED',
      'Ar-condicionado automático e digital',
      'Central multimídia 8,4”',
    ],
    text: 'light',
  },
];

export const dataVersions: IVersion[] = [
  ...versions.map((v) => ({
    ...v,
    fullName: `${v.nameParts.first} ${v.nameParts.second}`,
  })),
];
