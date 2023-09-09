import { productDetails as productDetailsAssets } from '@/assets';
import { CTAButton } from '@/components';
import { MenuLabel } from '@/models';
import { IncludePrefixResponsiveSizes } from '@/utils/imagePrefixes';

export interface ProductTabSlide {
  id: string;
  index?: number;
  title: string;
  tlt: string;
  slug: string;
  alt: string;
  info?: string;
  descriptionDesktop: JSX.Element;
  descriptionMobile: JSX.Element;
  btnCta?: JSX.Element;
  parentSlug?: string;
  image: IncludePrefixResponsiveSizes;
  vimeoId?: {
    mobile: string;
    desktop: string;
  };
  tabId: string;
}

export interface ProductTab {
  id: string;
  title: string;
  slug: string;
  parentSlug?: string;
  children: Omit<ProductTabSlide, 'tabId'>[];
}

const btnDownload = (
  <CTAButton
    className=""
    text="Baixe o catálogo"
    title="Baixe o catálogo"
    href=""
    width="40%"
    // handleClick={() => {
    //   DataLayer.clickEvent({
    //     element: `simular-parcelas:${version.name}`,
    //     elementCategory: 'cta',
    //     pageSection: 'conteudo',
    //     pageSubsection,
    //   });
    // }}
    // handleAuxClick={() => {
    //   DataLayer.clickEvent({
    //     element: `simular-parcelas:${version.name}`,
    //     elementCategory: 'cta',
    //     pageSection: 'conteudo',
    //     pageSubsection,
    //   });
    // }}
  />
);

const btnCompre = (
  <CTAButton
    className=""
    text="Compre agora"
    title="Compre agora"
    href=""
    width="40%"
    // handleClick={() => {
    //   DataLayer.clickEvent({
    //     element: `simular-parcelas:${version.name}`,
    //     elementCategory: 'cta',
    //     pageSection: 'conteudo',
    //     pageSubsection,
    //   });
    // }}
    // handleAuxClick={() => {
    //   DataLayer.clickEvent({
    //     element: `simular-parcelas:${version.name}`,
    //     elementCategory: 'cta',
    //     pageSection: 'conteudo',
    //     pageSubsection,
    //   });
    // }}
  />
);

const btnSaiba = (
  <CTAButton
    className=""
    text="Saiba mais"
    title="Saiba mais"
    href=""
    width="40%"
    // handleClick={() => {
    //   DataLayer.clickEvent({
    //     element: `simular-parcelas:${version.name}`,
    //     elementCategory: 'cta',
    //     pageSection: 'conteudo',
    //     pageSubsection,
    //   });
    // }}
    // handleAuxClick={() => {
    //   DataLayer.clickEvent({
    //     element: `simular-parcelas:${version.name}`,
    //     elementCategory: 'cta',
    //     pageSection: 'conteudo',
    //     pageSubsection,
    //   });
    // }}
  />
);

// BELLO DESIGN
const design: ProductTab = {
  id: 'tab-design-01',
  title: 'Bello Design',
  slug: 'design',
  children: [
    {
      id: 'tab-design-c-1',
      tlt: 'FARÓIS EM LED',
      title: 'Farol Fiat Strada',
      alt: 'Zoom do farol em LED do Fiat Strada',
      slug: 'farois-em-led',
      // info: '*Disponível na versão Volcano',
      descriptionDesktop: (
        <p>
          Redesenhado com o melhor estilo italiano, os faróis em
          LED têm tudo o que você precisa para dirigir a noite.
        </p>
      ),
      descriptionMobile: (
        <p>
          Redesenhado com o melhor estilo italiano, os faróis em
          LED têm tudo o que você precisa para dirigir a noite.
        </p>
      ),
      image: productDetailsAssets.design.farolLed,
    },
    {
      id: 'tab-design-c-2',
      tlt: 'CABINE COM 5 LUGARES E 4 PORTAS',
      title: 'Lateral Fiat Strada ',
      alt: 'Lateral do Fiat Strada na cor vermelha',
      slug: 'cabine-com-5-lugares-e-4-portas',
      // info: '*Disponível em todas as versões cabine dupla.',
      descriptionDesktop: (
        <p>
          Todo mundo pode viajar confortável na Fiat Strada, que
          conta com cabine dupla de 5 lugares e 4 portas.
        </p>
      ),
      descriptionMobile: (
        <p>
          Todo mundo pode viajar confortável na Fiat Strada, que
          conta com cabine dupla de 5 lugares e 4 portas.
        </p>
      ),
      image: productDetailsAssets.design.lugares5Portas4,
    },
    {
      id: 'tab-design-c-3',
      tlt: 'ESPAÇO E CONFORTO',
      title: 'Bancos dianteiros do Fiat Strada',
      alt: 'Bancos dianteiros do Fiat Strada',
      slug: 'espaco-e-conforto',
      info: '*Disponível nas versões Volcano e Ranch.',
      descriptionDesktop: (
        <p>
          Aqui, tudo é um pouco italiano: além da cabine com
          espaço para toda famiglia, o interior do carro tem um
          toque de elegância nos bancos de couro/tecido e volante
          em couro.
        </p>
      ),
      descriptionMobile: (
        <p>
          Aqui, tudo é um pouco italiano: além da cabine com
          espaço para toda famiglia, o interior do carro tem um
          toque de elegância nos bancos de couro/tecido e volante
          em couro.
        </p>
      ),
      image: productDetailsAssets.design.espacoConforto,
    },
    {
      id: 'tab-design-c-4',
      tlt: 'RODA DO FIAT STRADA',
      title: 'Roda do Fiat Strada',
      alt: 'Zoom da Roda do Fiat Strada na cor vermelha',
      slug: 'rodas-aro-16',
      descriptionDesktop: (
        <p>
          Robustez é a palavra-chave da Fiat Strada Volcano, que
          agora tem rodas de liga leve 16’
        </p>
      ),
      descriptionMobile: (
        <p>
          Robustez é a palavra-chave da Fiat Strada Volcano, que
          agora tem rodas de liga leve 16’
        </p>
      ),
      image: productDetailsAssets.design.roda16,
    },
    {
      id: 'tab-design-c-5',
      tlt: 'DESIGN EXTERNO',
      title: 'Lateral do Fiat Strada',
      alt: 'Caçamba aberta do Fiat Strada com três galões, um feno e uma sela para montar em cavalos dentro',
      slug: 'design-externo',
      descriptionDesktop: (
        <p>
          Com barras longitudinais cinza, retrovisor preto
          brilhante, para barro e muito mais, a nova Fiat Strada
          Ranch está bellíssima também por fora.
        </p>
      ),
      descriptionMobile: (
        <p>
          Com barras longitudinais cinza, retrovisor preto
          brilhante, para barro e muito mais, a nova Fiat Strada
          Ranch está bellíssima também por fora.
        </p>
      ),
      image: productDetailsAssets.design.designExterno,
    },
  ],
};

// FORÇA E POTÊNCIA
const forca: ProductTab = {
  id: 'tab-interior-01',
  title: 'Força e potência',
  slug: 'forca-e-potencia',
  children: [
    {
      id: 'tab-interior-c-1',
      tlt: 'CAÇAMBA',
      title: 'Caçamba Fiat Strada',
      alt: 'Caçamba aberta do Fiat Strada com três galões, um feno e uma sela para montar em cavalos dentro',
      slug: 'cacamba',
      descriptionDesktop: (
        <p>
          O maior volume de carga da categoria, com 1.354 l e
          capacidade de até 650 kg na versão cabine plus, além de
          volume de 844l e capacidade de até 600 kg na versão
          cabine dupla automática.
        </p>
      ),
      descriptionMobile: (
        <p>
          O maior volume de carga da categoria, com 1.354 l e
          capacidade de até 650 kg na versão cabine plus, além de
          volume de 844l e capacidade de até 600 kg na versão
          cabine dupla automática.a.
        </p>
      ),
      image: productDetailsAssets.forca.cacamba,
    },
    {
      id: 'tab-interior-c-2',
      tlt: 'MAIOR ALTURA DO SOLO DA CATEGORIA',
      title: 'Lateral do Fiat Strada na cor vermelha',
      alt: 'Lateral do Fiat Strada na cor vermelha, com um descritivo de 214 mm com setas para cima e para baixo, fazendo menção à maior altura do solo na categoria',
      slug: 'maior-altura-do-solo',
      descriptionMobile: (
        <p>
          O maior volume de carga da categoria, com 1.354 l e
          capacidade de até 650 kg na versão cabine plus, além de
          volume de 844l e capacidade de até 600 kg na versão
          cabine dupla automática.
        </p>
      ),
      descriptionDesktop: (
        <p>
          O maior volume de carga da categoria, com 1.354 l e
          capacidade de até 650 kg na versão cabine plus, além de
          volume de 844l e capacidade de até 600 kg na versão
          cabine dupla automática.
        </p>
      ),
      image: productDetailsAssets.forca.alturaSolo,
    },

    {
      id: 'tab-interior-c-3',
      tlt: 'SUSPENSÃO DO FEIXE DE MOLAS',
      title: 'Roda Fiat Strada',
      alt: 'Zoom na roda do Fiat Strada ',
      slug: 'suspensao-de-feixe-de-molas',
      descriptionMobile: (
        <p>
          Mantivemos o sistema de suspensão, mas ele está ainda
          melhor e mais resistente. A suspensão absorve os
          impactos e suporta o peso do carro e de suas cargas
          mais pesadas
        </p>
      ),
      descriptionDesktop: (
        <p>
          Mantivemos o sistema de suspensão, mas ele está ainda
          melhor e mais resistente. A suspensão absorve os
          impactos e suporta o peso do carro e de suas cargas
          mais pesadas
        </p>
      ),
      image: productDetailsAssets.forca.suspencaoFeixeMolas,
    },

    {
      id: 'tab-interior-c-5',
      tlt: 'VÃO MODULAR',
      title: 'Caçamba do Fiat Strada ',
      alt: 'Traseira do Fiat Strada, mostrando a caçamba totalmente aberta',
      slug: 'vao-modular',
      descriptionMobile: (
        <p>
          Com 4 ganchos inferiores e até 6 ganchos superiores,
          além de um sistema exclusivo de iluminação, a Fiat
          Strada tem um vão personalizável e otimizado para
          diferentes funções, cargas e desafios.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Com 4 ganchos inferiores e até 6 ganchos superiores,
          além de um sistema exclusivo de iluminação, a Fiat
          Strada tem um vão personalizável e otimizado para
          diferentes funções, cargas e desafios.
        </p>
      ),
      image: productDetailsAssets.forca.vaoModular,
    },

    {
      id: 'tab-interior-c-6',
      tlt: 'MELHOR CONSUMO DE COMBUSTÍVEL',
      title: 'Motor Firefly ',
      alt: 'Foto do motor do Fiat Strada, com o logo Firefly ao meio',
      slug: 'melhor-consumo-de-combustivel',
      info: '*Câmbio CVT automático disponível na versão Ranch e Volcano.',
      descriptionMobile: (
        <p>
          Economia não é mais um problema: os Motores Firefly e
          Fire garantem menor consumo de combustível sem perda de
          economia, além das trocas de marchas, que ficam ainda
          mais suaves e significativas.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Economia não é mais um problema: os Motores Firefly e
          Fire garantem menor consumo de combustível sem perda de
          economia, além das trocas de marchas, que ficam ainda
          mais suaves e significativas.
        </p>
      ),
      image: productDetailsAssets.forca.melhorConsumo,
    },

    {
      id: 'tab-interior-c-7',
      tlt: 'TC + CONTROLE DE TRAÇÃO',
      title: 'Botão TC+ ',
      alt: 'Zoom no Botão TC+ do Fiat Strada',
      slug: 'e-locker',
      // info: '*Item de série na Volcano e Ranch é opcional nas demais versões.',
      descriptionMobile: (
        <p>
          O TC+ ou controle de tração avançado é o que vai te
          ajudar a sair dos obstáculos. Ele identifica a roda que
          gira em falso e distribui a força do motor para a outra
          roda.
        </p>
      ),
      descriptionDesktop: (
        <p>
          O TC+ ou controle de tração avançado é o que vai te
          ajudar a sair dos obstáculos. Ele identifica a roda que
          gira em falso e distribui a força do motor para a outra
          roda.
        </p>
      ),
      image: productDetailsAssets.forca.eLocker,
    },
  ],
};

// TECNOLOGIA
const tecnologia: ProductTab = {
  id: 'tab-tecnologia-01',
  title: 'Tecnologia',
  slug: 'tecnologia',
  children: [
    {
      id: 'tab-tecnologia-c-1',
      tlt: 'CENTRAL MULTIMÍDIA',
      title: 'Central multimídia ',
      alt: 'Painel da central multimídia mostrando diversos ícones de aplicativos',
      slug: 'central-multimidia',
      info: '*Item de série na Volcano e Ranch é opcional nas demais versões.',
      descriptionMobile: (
        <p>
          Mais tecnológica, a nova Central Multimídia de 7’’
          conecta ao seu smartphone sem usar cabos, via Android
          Auto e Apple Car Play para você usar apps como Spotify
          e Waze.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Mais tecnológica, a nova Central Multimídia de 7’’
          conecta ao seu smartphone sem usar cabos, via Android
          Auto e Apple Car Play para você usar apps como Spotify
          e Waze.
        </p>
      ),
      image: productDetailsAssets.tecnologia.centralMultimidia,
    },

    {
      id: 'tab-tecnologia-c-2',
      tlt: 'WIRELESS CHARGER',
      title: 'Wireless Charger',
      alt: 'Celular carregando por indução no interior do Fiat Strada',
      slug: 'wireless-charger',
      info: '*Item de série na Volcano e Ranch é opcional nas demais versões.',
      descriptionMobile: (
        <p>
          A nova Fiat Strada Ranch é equipada com a tecnologia de
          Wireless Charger, ou seja, você pode carregar o seu
          smartphone por indução, sem nenhum fio para atrapalhar
          a sua viagem.
        </p>
      ),
      descriptionDesktop: (
        <p>
          A nova Fiat Strada Ranch é equipada com a tecnologia de
          Wireless Charger, ou seja, você pode carregar o seu
          smartphone por indução, sem nenhum fio para atrapalhar
          a sua viagem.
        </p>
      ),
      image: productDetailsAssets.tecnologia.wirelessCharger,
    },

    {
      id: 'tab-tecnologia-c-3',
      tlt: 'COMANDOS NO VOLANTE',
      title: 'Botões Volante ',
      alt: 'Detalhe dos botões no volante do Fiat Strada',
      slug: 'comandos-no-volante',
      info: '*Item de série na Volcano e Ranch é opcional nas demais versões.',
      descriptionMobile: (
        <p>
          Além dos comandos de rádio e telefone ao alcance das
          suas mãos, você ainda conta com um acabamento em couro
          extremamente elegante.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Além dos comandos de rádio e telefone ao alcance das
          suas mãos, você ainda conta com um acabamento em couro
          extremamente elegante.
        </p>
      ),
      image: productDetailsAssets.tecnologia.comandosVolante,
    },

    {
      id: 'tab-tecnologia-c-4',
      tlt: 'AR-CONDICIONADO DE SÉRIE ',
      title: 'Ar-condicionado ',
      alt: 'Zoom dos botões do ar-condicionado',
      slug: 'ar-condicionado',
      descriptionMobile: (
        <p>
          Além de espaçosa, a cabine da nova Fiat Strada também é
          ambientada por uma maravilhoso ar-condicionado, que vem
          de série em todas as versões.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Além de espaçosa, a cabine da nova Fiat Strada também é
          ambientada por uma maravilhoso ar-condicionado, que vem
          de série em todas as versões.
        </p>
      ),
      image: productDetailsAssets.tecnologia.arCondicionado,
    },

    {
      id: 'tab-tecnologia-c-5',
      tlt: 'PAINEL 3.5’’ TFT',
      title: 'Painel velocidade',
      alt: 'Painel de velocidade marcando 0km',
      slug: 'painel-tft',
      descriptionMobile: (
        <p>
          Personalize as principais informações da sua Strada em
          um painel de instrumentos de 3.5 polegadas.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Personalize as principais informações da sua Strada em
          um painel de instrumentos de 3.5 polegadas.
        </p>
      ),
      image: productDetailsAssets.tecnologia.painelTft,
    },

    {
      id: 'tab-tecnologia-tampa-traseira',
      tlt: 'NOVA TECNOLOGIA NA TAMPA TRASEIRA',
      title: 'Traseira Fiat Strada Cinza',
      alt: 'Traseira do Strada na cor cinza, com a placa e logo com o nome Strada',
      slug: 'nova-tecologia-tampa-traseira',
      // info: '*Disponível em todas as versões.',
      descriptionMobile: (
        <p>
          A nova Fiat Strada tem a tampa traseira tão leve que
          você pode abrir e fechar com apenas uma mão. Além de
          leve, ela é super resistente – aguenta até 400 kg em
          cima da tampa aberta.
        </p>
      ),
      descriptionDesktop: (
        <p>
          A nova Fiat Strada tem a tampa traseira tão leve que
          você pode abrir e fechar com apenas uma mão. Além de
          leve, ela é super resistente – aguenta até 400 kg em
          cima da tampa aberta.
        </p>
      ),
      image: productDetailsAssets.tecnologia.tampaTraseira,
    },
  ],
};

// SEGURANÇA
const seguranca: ProductTab = {
  id: 'tab-performance-01',
  title: 'Segurança',
  slug: 'seguranca',
  children: [
    {
      id: 'tab-performance-c-1',
      tlt: 'AIRBAGS LATERAIS',
      title: 'Airbags',
      alt: 'Fiat Strada visto de cima com os airbags acionados para fins de demonstração',
      slug: 'airbags-laterais',
      info: '*Disponível apenas nas versões de cabine dupla.',
      descriptionMobile: (
        <p>
          Agora, além dos airbags laterais, suas viagens estão
          protegidas por todos os lados, graças aos novos airbags
          laterais.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Agora, além dos airbags laterais, suas viagens estão
          protegidas por todos os lados, graças aos novos airbags
          laterais.
        </p>
      ),
      image: productDetailsAssets.seguranca.airBagLateral,
    },
    {
      id: 'tab-performance-c-2',
      tlt: 'CÂMERA DE RÉ E SENSOR DE ESTACIONAMENTO',
      title: 'Câmera de ré ',
      alt: 'Imagem de uma câmera de ré com sinalizações de distância',
      slug: 'camera-de-re-e-sensor',
      // info: '*Item de série na Volcano é opcional nas demais versões.',
      descriptionMobile: (
        <p>
          Sensor de estacionamento sonoro e câmera de ré com
          linhas dinâmicas, para ajudar a desviar dos obstáculos.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Sensor de estacionamento sonoro e câmera de ré com
          linhas dinâmicas, para ajudar a desviar dos obstáculos.
        </p>
      ),
      image: productDetailsAssets.seguranca.cameraSensor,
    },
    {
      id: 'tab-performance-c-3',
      tlt: 'CONTROLE DE ESTABILIDADE',
      title: 'Controle de estabilidade',
      alt: 'Imagem demonstrativa de como o controle de estabilidade acontece. Há uma estrada e um veículo que possivelmente poderia ter derrapado nela. ',
      slug: 'controle',
      // info: '*Disponível em todas as versões.',
      descriptionMobile: (
        <p>
          O controle de estabilidade ajuda você a manter a
          direção em curvas mais acentuadas ou em derrapagens.
        </p>
      ),
      descriptionDesktop: (
        <p>
          O controle de estabilidade ajuda você a manter a
          direção em curvas mais acentuadas ou em derrapagens.
        </p>
      ),
      image: productDetailsAssets.seguranca.controleEstabilidade,
    },
    {
      id: 'tab-performance-c-4',
      tlt: 'ISOFIX',
      title: 'Isofix',
      alt: 'Banco traseiro com uma cadeira de bebê',
      slug: 'isofix',
      // info: '*Disponível apenas nas versões de cabine dupla.',
      descriptionMobile: (
        <p>
          Trava de uso prático para fixar a cadeirinha ou o bebê
          conforto ao banco traseiro da sua Fiat Strada.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Trava de uso prático para fixar a cadeirinha ou o bebê
          conforto ao banco traseiro da sua Fiat Strada.
        </p>
      ),
      image: productDetailsAssets.seguranca.isofix,
    },
  ],
};

//  ACESSORIOS
const acessorios: ProductTab = {
  id: 'tab-seguranca-01',
  title: 'Acessórios',
  slug: 'acessorios',
  children: [
    {
      id: 'tab-seguranca-c-1',
      tlt: 'MAIS DE 50 ACESSÓRIOS ORIGINAIS PARA SUA PICAPE',
      title: 'Acessórios ',
      alt: 'Fiat Strada vermelho num fundo escuro e fosco, com o símbolo Mopar e o escrito “50+ acessórios originais” um do lado do outro',
      slug: 'mais-de-50-acessorios',
      descriptionMobile: (
        <p>
          Da diversão ao trabalho duro, conheça o portfólio dos
          Acessórios Originais Fiat Mopar e deixe sua Fiat Strada
          ainda mais versátil e do seu jeito.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Da diversão ao trabalho duro, conheça o portfólio dos
          Acessórios Originais Fiat Mopar e deixe sua Fiat Strada
          ainda mais versátil e do seu jeito.
        </p>
      ),
      image: productDetailsAssets.acessorios.acessorios50,
      //  btnCta: btnDownload,
    },
    {
      id: 'tab-seguranca-c-2',
      tlt: 'EXTENSOR DE CAÇAMBA',
      title: 'Extensor de caçamba',
      alt: 'Traseira do Fiat Strada com um extensor de caçamba montado',
      slug: 'extensor-de-cacamba',
      descriptionMobile: (
        <p>
          A maior caçamba da categoria pode ficar ainda maior com
          o Extensor de Caçamba de engate rápido.
        </p>
      ),
      descriptionDesktop: (
        <p>
          A maior caçamba da categoria pode ficar ainda maior com
          o Extensor de Caçamba de engate rápido.
        </p>
      ),
      //  btnCta: btnDownload,
      image: productDetailsAssets.acessorios.extensorCacamba,
    },
    {
      id: 'tab-seguranca-c-3',
      tlt: 'ENGATE REBOQUE',
      title: 'Engate Reboque',
      alt: 'Traseira do Fiat Strada, mostrando o Engate Reboque',
      slug: 'engate-reboque',
      descriptionMobile: (
        <p>
          O engate reboque Mopar possibilita a remoção da lança
          quando não está em uso e não requer nenhuma função
          adicional, mantendo a garantia do veículo.
        </p>
      ),
      descriptionDesktop: (
        <p>
          O engate reboque Mopar possibilita a remoção da lança
          quando não está em uso e não requer nenhuma função
          adicional, mantendo a garantia do veículo.
        </p>
      ),
      image: productDetailsAssets.acessorios.engateReboque,
      //  btnCta: btnDownload,
    },
    {
      id: 'tab-seguranca-c-4',
      tlt: 'ESTRIBO LATERAL',
      title: 'Estribo Lateral',
      alt: 'Lateral do Fiat Strada, destacando o stribo lateral',
      slug: 'estribo-lateral',
      descriptionMobile: (
        <p>
          A união da funcionalidade com a proteção na sua Fiat
          Strada. O estribo lateral dá ao seu carro mais estilo.
        </p>
      ),
      descriptionDesktop: (
        <p>
          A união da funcionalidade com a proteção na sua Fiat
          Strada. O estribo lateral dá ao seu carro mais estilo.
        </p>
      ),
      image: productDetailsAssets.acessorios.estriboLateral,
      //  btnCta: btnDownload,
    },
    {
      id: 'tab-seguranca-c-5',
      tlt: 'SANTANTONIO',
      title: 'Santantonio',
      alt: 'Traseira do Fiat Strada, mostrando o santantonio',
      slug: 'santantonio',
      descriptionMobile: (
        <p>
          Mais que um acessório, um item indispensável na hora de
          amarrar cargar e proteger a carroceria da sua picape.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Mais que um acessório, um item indispensável na hora de
          amarrar cargar e proteger a carroceria da sua picape.
        </p>
      ),
      image: productDetailsAssets.acessorios.santantonio,
      //  btnCta: btnDownload,
    },
    {
      id: 'tab-seguranca-c-6',
      tlt: 'SUPORTE DE BICICLETA',
      title: 'Suporte para bicicleta',
      alt: 'Traseira do Fiat Strada, mostrando o suporte com uma bicicleta encaixada',
      slug: 'suporte-de-bicicleta',
      descriptionMobile: (
        <p>
          Com um suporte prático para bicicletas da nova Fiat
          Strada, o ciclista tem sempre preferência na caçamba.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Com um suporte prático para bicicletas da nova Fiat
          Strada, o ciclista tem sempre preferência na caçamba.
        </p>
      ),
      //  btnCta: btnDownload,
      image: productDetailsAssets.acessorios.suporteBicicleta,
    },
    {
      id: 'tab-seguranca-c-7',
      tlt: 'CAPOTA MARÍTIMA',
      title: 'Capota Maritima',
      alt: 'Traseira do Fiat Strada mostrando a caçamba fechada com a capota marítima',
      slug: 'capota-maritima',
      descriptionMobile: (
        <p>
          Proteção para a caçamba e suas cargas, a capota
          marítima é um item indispensável quando se pensa em
          transporte com segurança.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Proteção para a caçamba e suas cargas, a capota
          marítima é um item indispensável quando se pensa em
          transporte com segurança.
        </p>
      ),
      //  btnCta: btnDownload,
      image: productDetailsAssets.acessorios.capotaMaritima,
    },
  ],
};

// SERVIÇOS
const servicos: ProductTab = {
  id: 'tab-servicos-01',
  title: 'Serviços',
  slug: 'servicos',
  children: [
    {
      id: 'tab-seguranca-c-1',
      tlt: 'PLANO DE REVISÕES MAIS COMPLETO DA CATEGORIA',
      title: 'Mulher Mecânica',
      alt: 'Mulher mecânica analisando a parte de baixo do Fiat Strada',
      slug: 'plano-de-revisoes-mais-barato',
      descriptionMobile: (
        <p>
          Sua nova Fiat Strada bem cuidada e sempre em dia.
          Agende regularmente as revisões programadas em nossas
          concessionárias e mantenha a garantia de{' '}
          <strong> 3 anos de fábrica.</strong>
        </p>
      ),
      descriptionDesktop: (
        <p>
          Sua nova Fiat Strada bem cuidada e sempre em dia.
          Agende regularmente as revisões programadas em nossas
          concessionárias e mantenha a garantia de{' '}
          <strong> 3 anos de fábrica.</strong>
        </p>
      ),
      image: productDetailsAssets.servicos.revisao,
      //btnCta: btnSaiba,
    },
    {
      id: 'tab-seguranca-c-2',
      tlt: 'O CUIDADO QUE SUA NOVA FIAT STRADA MERECE',
      title: 'Mulheres na loja Fiat',
      alt: 'Duas mulheres na loja Fiat. Uma está olhando para o computador e a outra está sorrindo e olhando para a atendente da Fiat',
      slug: 'o-cuidado-que-sua-nova-fiat-strada-merece',
      descriptionMobile: (
        <p>
          Conheça os pacotes de serviços Fiat Mopar para a sua
          picape. A sua nova Fiat Strada pode ter até 5 anos de
          garantia, além das revisões sob medida com descontos e
          preços fixados.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Conheça os pacotes de serviços Fiat Mopar para a sua
          picape. A sua nova Fiat Strada pode ter até 5 anos de
          garantia, além das revisões sob medida com descontos e
          preços fixados.
        </p>
      ),
      image: productDetailsAssets.servicos.fiatMopar,
      //btnCta: btnSaiba,
    },
    {
      id: 'tab-seguranca-c-3',
      tlt: 'GARANTIA ADICIONAL FIAT',
      title: 'Duas pessoas loja fiat',
      alt: 'Atendente da loja Fiat olhando para o tablet em sua mão e um cliente homem olhando para o tablet',
      slug: 'garantia-adicional-fiat',
      info: '*O valor de R$1,80/dia corresponde ao valor total de R$1.480 para pagamentos à vista no plano amplo. Deverão ser respeitados os prazos previstos no Manual de Uso e Manutenção do veículo no livreto de garantia do veículo. Condição válida para todas as versões da Fiat Strada zero km.',
      descriptionMobile: (
        <p>
          A sua nova Fiat Strada pode ter até 5 anos de garantia,
          além dos 3 anos de fábrica. Você pode comprar mais 1 ou
          2 anos de garantia, com planos a partir de R$1,80 por
          dia*.
        </p>
      ),
      descriptionDesktop: (
        <p>
          A sua nova Fiat Strada pode ter até 5 anos de garantia,
          além dos 3 anos de fábrica. Você pode comprar mais 1 ou
          2 anos de garantia, com planos a partir de R$1,80 por
          dia*.
        </p>
      ),
      image: productDetailsAssets.servicos.garantiaAdicional,
      //btnCta: btnCompre,
    },
    {
      id: 'tab-seguranca-c-4',
      title: 'Mecânico na loja Fiat',
      tlt: 'REVISÃO SOB MEDIDA FIAT',
      alt: 'Mecânico na loja Fiat',
      slug: 'revisao-sob-medida-fiat',
      descriptionMobile: (
        <p>
          Mais economia para você e seu carro. Deixe sua Fiat
          Strada bem cuidada em monte um plano de revisão com
          descontos e preço fixo.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Mais economia para você e seu carro. Deixe sua Fiat
          Strada bem cuidada em monte um plano de revisão com
          descontos e preço fixo.
        </p>
      ),

      image: productDetailsAssets.servicos.revisaoSobMedida,
      //btnCta: btnSaiba,
    },
  ],
};

const productDetails: ProductTab[] = [
  design,
  forca,
  tecnologia,
  seguranca,
  acessorios,
  servicos,
].map((d) => ({ ...d, parentSlug: 'tudo-do-strada' }));

export const getProductDetails = (): MenuLabel[] => {
  if (!productDetails) {
    return [];
  }
  return productDetails.reduce((prev, item) => {
    return [
      ...prev,
      {
        id: `data-menu-details-${item.id}`,
        label: item.title,
        slug: item.slug,
        url: `/${item.slug}`,
      },
    ];
  }, [] as MenuLabel[]);
};
let index = -1;
export const allSlides: ProductTabSlide[] =
  productDetails.reduce((prev, curr) => {
    return [
      ...prev,
      ...curr.children.map((c) => {
        index++;
        return {
          ...c,
          index,
          parentSlug: curr.slug,
          tabId: curr.id,
        };
      }),
    ];
  }, [] as ProductTabSlide[]);

export default productDetails;
