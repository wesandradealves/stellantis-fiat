// import { normatize } from './string/normatize';

function createTrack(options) {
  const opts = Object(options);
  return {
    event: opts.event || 'interaction',
    segment: 'landing-page',
    product: 'toro-2022',
    interactionType: opts.type || '-',
    elementCategory: opts.part || 'conteudo',
    pageSection: opts.section || '-',
    pageSubsection: opts.subsection || '-',
    element: opts.elementText || '-',
  };
}

function track(
  type,
  section,
  subsection,
  part,
  elementText,
  theme,
  device,
) {
  const isViewpage = /^(?:view|vpv)$/i.test(type);
  const event = isViewpage ? type : 'interaction';
  /* eslint-disable no-param-reassign */
  type = isViewpage ? 'abertura' : type;
  /* eslint-enable no-param-reassign */

  if (
    !/^(?:clique|abertura|fechamento|remocao|selecao|preencheu)$/.test(
      type,
    )
  ) {
    // console.error('track.interactionType is wrong at:', { event, type, section, subsection, part, elementText, theme,   device });
  }
  if (!/^(?:header|footer|conteudo)$/.test(part)) {
    // console.error('track.part is wrong at:', { event, type, section, subsection, part, elementText, theme,   device });
  }
  return createTrack({
    event,
    type,
    section,
    subsection,
    part,
    elementText,
    theme,
    device,
  });
}

export const data = {
  // General ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  App_Iniciou: (theme, device) => {
    //  ok
    return null;
  },
  App_Pageview: (section, theme, device) => {
    //  ok
    if (
      /^(interior|design|performance|tecnologia|seguranca|for[cç]a[-\s]e[-\s]pot[eê]ncia|s-design|servi[çc]os?)$/i.test(
        section,
      )
    )
      return null;
    if (/^(fotos)$/.test(section) && device === 'm') return null;
    /* eslint-disable no-param-reassign */
    if (/^(about)$/.test(section)) section = 'sobre';
    /* eslint-enable no-param-reassign */
    /* eslint-disable no-param-reassign */
    if (/^(live)$/.test(section))
      section = 'realidade-aumentada';
    /* eslint-enable no-param-reassign */
    return track(
      'vpv',
      section,
      '',
      null,
      null,
      theme,

      device,
    );
  },

  // Menu ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Menu_ClicouAbrir: (theme, device) => {
    //  ok
    return track(
      'abertura',
      'header',
      'menu-hamburguer',
      'icone',
      'menu',
      theme,

      device,
    );
  },
  Stories_ClicouPassar: (storie, direcao, theme, device) => {
    //  ok
    return track(
      'clique',
      'conteudo',
      'stories',
      `${storie}`,
      `${direcao}`,
      theme,
      device,
    );
  },
  Menu_ClicouFechar: (theme, device) => {
    //  ok
    return track(
      'fechamento',
      'header',
      'menu-hamburguer',
      'icone',
      'menu',
      theme,

      device,
    );
  },
  MenuDesktop_ClicouAbrir: (theme, device) => {
    //  ok
    return track(
      'abertura',
      'conteudo',
      'menu',
      'icone',
      'menu-lateral',
      theme,

      device,
    );
  },
  MenuDesktop_ClicouFechar: (theme, device) => {
    //  ok
    return track(
      'fechamento',
      'conteudo',
      'menu',
      'icone',
      'menu-lateral',
      theme,

      device,
    );
  },
  Menu_ClicouSubmenu: (submenuName, theme, device) => {
    //  ok
    return track(
      'clique',
      'conteudo',
      'menu-lateral',
      'submenu',
      `${submenuName}`,
      theme,

      device,
    );
  },
  Menu_ClicouCTA: (ctaName, theme, device) => {
    return track(
      'clique',
      'conteudo',
      'menu-lateral',
      'cta',
      `${ctaName}`,
      theme,

      device,
    );
  },
  MenuFlutuante_ClicouCTA: (
    versionName,
  ) => {
    return track(
      'clique',
      'conteudo',
      'menu-flutuante',
      'cta',
      `${versionName}`,
    );
  },
  Footer_ClicouCTA: (ctaName, theme, device) => {
    return track(
      'clique',
      'footer',
      'cta-mobile',
      'cta',
      `${ctaName}`,
      theme,

      device,
    );
  },
  MenuDesktop_ClicouCTA: (ctaName, theme, device) => {
    return track(
      'clique',
      'conteudo',
      'menu-lateral',
      'cta',
      `${ctaName}`,
      theme,

      device,
    );
  },
  TodasAsVersoes_ClicouCTA: (
    ctaName,
    versionName,
    theme,

    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'fotos',
      'cta',
      `${versionName}-${ctaName}`
    );
  },
  TodasAsVersoes_ClicouCTAMobile: (
    versionName,
    ctaName,
  ) => {
    return track(
      'clique',
      'conteudo',
      'fotos',
      'cta',
      `${versionName}-${ctaName}`,
    );
  },
  TudoSobre_ClicouFeature: (
    featureName,
    theme,

    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'tudo-sobre-a-toro',
      'menu',
      `${featureName}`,
      theme,

      device,
    );
  },
  Footer_ClicouSocial: (redeSocial, theme, device) => {
    return track(
      'clique',
      'footer',
      'social',
      'icone',
      `${redeSocial}`,
      theme,

      device,
    );
  },
  ServicosConectados_ClicouNext: (
    direction,
    card,
    theme,

    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'servicos-conectados',
      `icone-${direction}`,
      `${card}`,
      theme,

      device,
    );
  },
  ServicosConectados_ClicouPrev: (
    direction,
    card,
    theme,

    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'servicos-conectados',
      `icone-${direction}`,
      `${card}`,
      theme,

      device,
    );
  },
  Versions_ClicouNextOuPrev: (
    direction,
    card,
    theme,

    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'versoes',
      `icone-${direction}`,
      `${card}`,
      theme,

      device,
    );
  },
  Conteudo_ClicouNextStories: (
    direction,
    story,
    theme,

    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'stories',
      `icone-${direction}`,
      `${story}`,
      theme,

      device,
    );
  },
  Conteudo_ClicouPrevStories: (
    direction,
    story,
    theme,

    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'stories',
      `icone-${direction}`,
      `${story}`,
      theme,

      device,
    );
  },
  Conteudo_ClicouPrevGaleria: (
    direction,
    version,
    theme,
    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'versoes',
      `icone-${direction}`,
      `${version}`,
      theme,

      device,
    );
  },
  Conteudo_ClicouNextGaleria: (
    direction,
    version,
    theme,
    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'versoes',
      `icone-${direction}`,
      `${version}`,
      theme,

      device,
    );
  },
  Conteudo_ClicouNextTudoSobre: (
    version,
    direction,
    theme,
    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'todas-as-versoes',
      `${version}`,
      `${direction}-proxima`,
      theme,

      device,
    );
  },
  Conteudo_ClicouPrevTudoSobre: (
    version,
    direction,
    theme,
    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'todas-as-versoes',
      `${version}`,
      `${direction}-anterior`,
      theme,

      device,
    );
  },
  Menu_ClicouLogoJeep: (theme, device) => {
    //  *
    return track(
      'clique',
      'menu-lateral',
      'menu-lateral',
      'conteudo',
      'logo-jeep',
      theme,

      device,
    );
  },
  Fotos_ClicouFotos: (category, imageName, theme, device) => {
    return track(
      'clique',
      'conteudo',
      'fotos',
      `${category}-galeria`,
      `${imageName}`,
      theme,
      device,
    );
  },
  MainPage_ClicouCard: (cardTitle) => {
    return track(
      'clique',
      'conteudo',
      'stories',
      'card',
      `${cardTitle}`,

    )
  },
  MainPage_ClicouCardVersions: (cardTitle) => {
    return track(
      'clique',
      'conteudo',
      'versoes',
      'card',
      `${cardTitle}`,

    )
  },
  FormSchedule_Abriu: (vpv) => {
    return track(
      'vpv'
    )
  },
  FormSchedule_Enviou: () => {
    return track(
      'clique',
      'conteudo',
      'formulario',
      'botao',
      'enviar',
    )
  },
  FormSchedule_SelecionouConcessionaria: () => {
    return track(
      'selecao',
      'conteudo',
      'formulario',
      'campo',
      'concessionaria',
    )
  },
  FormSchedule_PreencheuCampo: (campName) => {
    return track(
      'preencheu',
      'conteudo',
      'formulario',
      'campo',
      `${campName}`,
    )
  },
  FormSchedule_ClicouFechar: (campName) => {
    return track(
      'fechamento',
      'conteudo',
      'modal',
      'icone',
      'fechar',
    )
  },
};

export default data;

// ------------------------------------------------------------------------------------------------
// @see https://docs.google.com/spreadsheets/d/18kur6ERYv-13nom1Tp1oY2whrwVxZ9Nu/edit#gid=360237036
// ------------------------------------------------------------------------------------------------
