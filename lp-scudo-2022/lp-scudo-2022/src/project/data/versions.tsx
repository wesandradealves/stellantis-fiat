import { IVersion, IVersionFragment } from '@/prox/models';

const versions: IVersionFragment[] = [
  {
    id: 'cargo',
    name: 'Cargo 1.5',
    slug: 'cargo',
    versionText: 'LIBERDADE PARA VER O MUNDO DO TOPO',
    logo: 'scudo-cargo.svg',
    nameParts: {
      first: 'Cargo 1.5',
      second: '',
    },
    short: 'Cargo 1.5',
    hex: '#3A369E',
    details: [
      {
        title: (
          <>
            {'1.935 mm'}
            <br />
            {'de altura'}
          </>
        ),
        titleDescription: '',
        photo: 'scudo-altura@3x',
      },
      {
        title: (
          <>
            {'6,1M³ de'}
            <br />
            {'capacidade volumétrica'}
          </>
        ),
        titleDescription: 'Faróis Full LED',
        photo: 'peso-bruto@3x',
      },
      {
        title: (
          <>
            {'1500 kg de'}
            <br />
            {'carga útil'}
          </>
        ),
        titleDescription: 'Tecnologias autônomas',
        photo: 'carga-util@3x',
      },
    ],
    text: 'light',
  },
  {
    id: 'multi',
    slug: 'multi',
    name: 'Multi 1.5',
    logo: 'scudo-multi.svg',
    versionText: 'LIBERDADE PARA VER O MUNDO DO TOPO2',
    nameParts: {
      first: 'Multi 1.5',
      second: '',
    },
    short: 'Multi 1.5',
    hex: '#92D0DB',
    details: [
      {
        title: (
          <>
            {'1,935 mm'}
            <br />
            {'de altura'}
          </>
        ),
        titleDescription: '1935 mm de altura',
        photo: 'scudo-altura@3x',
      },
      {
        title: (
          <>
            {'Transformação'}
            <br />
            {'de Van'}
          </>
        ),
        titleDescription: 'Transformação de van',
        photo: 'transformacao-van@3x',
      },
      {
        title: (
          <>
            {'5,309 mm de'}
            <br />
            {'comprimento'}
          </>
        ),
        titleDescription: '5,309 mm de comprimento',
        photo: 'carro-comprimento@3x',
      },
    ],
    text: 'dark',
  },
  {
    id: 'escudo',
    name: 'e-Scudo',
    logo: 'scudo-escudo.svg',
    slug: 'escudo',
    versionText: 'LIBERDADE PARA VER O MUNDO DO TOPO4',
    nameParts: {
      first: 'e-',
      second: 'Scudo',
    },
    short: 'e-Scudo',
    hex: '#FFBA0D',
    details: [
      {
        title: (
          <>
            {'Até 330km'}
            <br />
            {'de autonomia'}
          </>
        ),
        titleDescription: 'Até 330km de autonomia',
        photo: 'km-economia@3x',
      },
      {
        title: (
          <>
            {'Veículo 100%'}
            <br />
            {'elétrico'}
          </>
        ),
        titleDescription: 'Zero emissão de CO²',
        photo: 'zero-emissao-co@3x',
      },
      {
        title: (
          <>
            {'3 modos de'}
            <br />
            {'condução'}
          </>
        ),
        titleDescription: '3 modos de condução',
        photo: 'tres-modos-conducao@3x',
      },
    ],
    text: 'dark',
  },
];

export const dataVersions = (): IVersion[] => [
  ...versions.map((v) => ({
    ...v,
    fullName: `${v.nameParts.first} ${v.nameParts.second}`,
  })),
];
