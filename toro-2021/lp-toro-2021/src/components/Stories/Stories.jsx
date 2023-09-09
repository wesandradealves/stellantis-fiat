import React, {
  useCallback,
  useEffect,
  useState,
  createRef,
  Fragment,
} from 'react';
import Stories from 'react-insta-stories';
import {
  Container,
  Content,
  Description,
  FiatTitle,
  FiatTitleStories,
  FiatToro,
  LogoConnect,
  ScrollToMore,
  SetaToMore,
  Next,
  Flag,
  Video,
  HeroDescription,
} from './styles';
import { Colors } from '../../styles';
import * as images from '../../assets';

const StoriesComponent = ({ stories }) => {
  const containerRef = createRef();

  useEffect(() => {
    const { current: container } = containerRef;
    const { children: containerChildren } = container || {};
    const [storiesContainer] = containerChildren || [];
    const { children: storiesChildren } = storiesContainer || {};
    const [storiesHeader] = storiesChildren || [];
    const { children: storiesHeaderChildren } =
      storiesHeader || {};

    // Condicional para trocar a cor do header dos stories
    if (storiesHeaderChildren && storiesHeaderChildren.length) {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of storiesHeaderChildren) {
        const { children: itemChildren } = item || {};
        item.style.height = '5px';
        item.style.marginRight = '4px';
        item.style.marginTop = '7px';
        item.style.borderRadius = 0;

        const [itemComponent] = itemChildren || [];
        itemComponent.style.background = Colors.primary;
        itemComponent.style.borderRadius = 0;
      }
    }
  }, [containerRef]);

  const [screens, setScreens] = useState([]);
  const [current, setCurrent] = useState(0);
  const [firstTime, isFirstTime] = useState(false);

  const renderScreen = useCallback(() => {
    stories.map((item, index) => {
      const screen = {
        content: () => (
          <Fragment key={`stories-${item.id}`}>
            {!item?.video ? null : (
              <Video autoPlay muted loop>
                <source src={item.video} />
              </Video>
            )}
            <Container
              id="toro-2022"
              background={!item?.video ? item?.image : null}
            >
              <FiatTitle
                highlighted={item?.highlighted}
                width={item?.head?.width}
              >
                <ScrollToMore>
                  <div>
                    <span>Scroll para ver mais</span>
                  </div>
                  <SetaToMore src={images.Seta} alt="icon" />
                </ScrollToMore>
                <HeroDescription>
                  {item.headerDescription}
                </HeroDescription>

                <FiatTitleStories>
                  <h2>{item?.head?.titlemain}</h2>
                  <h3>{item?.head?.titlenew} </h3>
                  <LogoConnect>
                    {item.id === 6 ? (
                      <img
                        src={images.LogoConnect}
                        alt="logo-connect"
                      />
                    ) : null}
                  </LogoConnect>
                  <h3>{item?.head?.brand}</h3>
                </FiatTitleStories>
                <h1>{item?.head?.title}</h1>
                <Description
                  highlighted={item?.highlighted}
                  width={item?.description?.width}
                  last={index === stories.length - 1}
                >
                  {item.head?.next !== 'Design Externo' ? (
                    <>
                      <img src={images.Flag} alt="Fiat Green" />
                      <p>{item?.description?.text}</p>
                    </>
                  ) : null}
                </Description>
              </FiatTitle>
              <Content highlighted={item?.highlighted}>
                <Next highlighted={item?.highlighted}>
                  {item?.id !== 0 && (
                    <Flag>
                      <p>{item.head.description}</p>
                    </Flag>
                  )}
                  <span>{item?.action?.text}</span>
                  {item?.id === 0 ? (
                    <img src={images.HandIcon} alt="handle" />
                  ) : (
                    <>
                      {item?.id !== 6 && (
                        <img
                          src={images.setaright1}
                          alt="handle"
                        />
                      )}
                    </>
                  )}
                </Next>
              </Content>
            </Container>
          </Fragment>
        ),
      };

      return setScreens(rest => [...rest, screen]);
    });
  }, [stories]);

  useEffect(() => {
    renderScreen();
  }, [renderScreen]);

  if (screens.length < 1) {
    return <h1>Carregando...</h1>;
  }

   const setCurrentState = n => {
    setCurrent(n);
  };;

  return (
    <FiatToro id="toro-2022" ref={containerRef}>
      <Stories
        stories={screens}
        defaultInterval={-100}
        width="100vw"
        height="630px"
        onStoryStart={(s, st) => {
          const direction = () => {
            setCurrentState(s);
            if (s > current) {
              return 'proximo';
            }

            return 'anterior';
          };
          if (firstTime) {
            switch (s) {
              case 0:
                return window.dataLayer.push({
                  event: 'interaction',
                  segment: 'landing-page',
                  product: 'toro-2022',
                  interactionType: 'clique',
                  pageSection: 'conteudo',
                  pageSubsection: 'stories',
                  elementCategory: 'nova-fiat-toro-2022',
                  element: direction(),
                });

              case 1:
                return window.dataLayer.push({
                  event: 'interaction',
                  segment: 'landing-page',
                  product: 'toro-2022',
                  interactionType: 'clique',
                  pageSection: 'conteudo',
                  pageSubsection: 'stories',
                  elementCategory:
                    `${stories[s].head.titlenew}-${stories[s].head.brand}-${stories[s].head.subtitle}`
                      .replace(/\s/g, '-')
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .toLocaleLowerCase(),
                  element: direction(),
                });

              case 2:
                return window.dataLayer.push({
                  event: 'interaction',
                  segment: 'landing-page',
                  product: 'toro-2022',
                  interactionType: 'clique',
                  pageSection: 'conteudo',
                  pageSubsection: 'stories',
                  elementCategory:
                    `${stories[s].head.titlenew}-${stories[s].head.brand}-${stories[s].head.subtitle}`
                      .replace(/\s/g, '-')
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .toLocaleLowerCase(),
                  element: direction(),
                });

              case 3:
                return window.dataLayer.push({
                  event: 'interaction',
                  segment: 'landing-page',
                  product: 'toro-2022',
                  interactionType: 'clique',
                  pageSection: 'conteudo',
                  pageSubsection: 'stories',
                  elementCategory:
                    `${stories[s].head.titlenew}-${stories[s].head.brand}-${stories[s].head.subtitle}`
                      .replace(/\s/g, '-')
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .toLocaleLowerCase(),
                  element: direction(),
                });

              case 4:
                return window.dataLayer.push({
                  event: 'interaction',
                  segment: 'landing-page',
                  product: 'toro-2022',
                  interactionType: 'clique',
                  pageSection: 'conteudo',
                  pageSubsection: 'stories',
                  elementCategory:
                    `${stories[s].head.titlenew}-${stories[s].head.brand}-${stories[s].head.subtitle}`
                      .replace(/\s/g, '-')
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .toLocaleLowerCase(),
                  element: direction(),
                });
              case 5:
                return window.dataLayer.push({
                  event: 'interaction',
                  segment: 'landing-page',
                  product: 'toro-2022',
                  interactionType: 'clique',
                  pageSection: 'conteudo',
                  pageSubsection: 'stories',
                  elementCategory: 'connect-me',
                  element: direction(),
                });

              default:
                break;
            }
          }
          isFirstTime(true);

          return null;
        }}
        loop
      />
    </FiatToro>
  );
};

export default StoriesComponent;
