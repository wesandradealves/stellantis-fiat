/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import * as images from '../../../assets';
import {
  Button,
  Gallery as GalleryComponent,
} from '../../../components';
import { Colors } from '../../../styles';
import {
  BoxSection,
  Car,
  Content,
  Cta,
  Details,
  Infos,
  Model,
  Swiper,
  Text,
} from './styles';

SwiperCore.use([Navigation, A11y]);

const VersionsDesktop = ({ data, open }) => {
  const [scrollTop, setScrollTop] = useState();
  // const [onBlock, setOnBlock] = useState(false);
  const [afterBlock, setAfterBlock] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    const boxVersions =
      document.querySelector('#versions').offsetTop;

    const heightVersions =
      document.querySelector('#versions').offsetHeight;

    const checkAfterBlock =
      scrollTop > boxVersions + heightVersions - 1000;

    // const checkOnBlock =
    //   scrollTop >= boxVersions + 100 && !checkAfterBlock;

    // setOnBlock(checkOnBlock);
    setAfterBlock(checkAfterBlock);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  // Galera, haja visto a não possibilidade de manipulação de componentes internos nos bullets de paginação, precisei criar essafunção para incluir um elemento p dentro do bullet. Abaixo seguem instruções do que está acontecendo.
  useEffect(() => {
    // Para abstração e dinamicidade da função, estou pegando alguns parâmetros importantes: spanText - você manda o SPAN que será selecionado para incluir um P dentro; bulletNumber - qual é o número do bullet que está sendo selecionado; textSubstitute - por agora não é importante.
    function criarElementoP(
      spanText,
      bulletNumber,
      textToSubstitute,
    ) {
      let node = document.createElement('p');
      let textBullet = document.createTextNode(`${spanText}`);
      node.appendChild(textBullet);
      document
        .querySelector(
          `#versions span[aria-label="Go to slide ${bulletNumber}"]`,
        )
        .appendChild(node);
      // até aqui a função cria o p e coloca dentro do span referente ao bullet específico

      // essa função serve para substituir a nossa primeira linha dentro do p para essa mesma linha envolvida com uma tag strong para conseguirmos estilizá-la conforme o layout. Ela será chamada mais para frente:
      function boldWord(spanText, toChange) {
        return spanText.replace(
          new RegExp('(^|)(' + toChange + ')(|$)', 'ig'),
          '$1<strong>$2</strong>$3',
        );
      }

      // aqui eu pego o HTML inteiro  desse p para ser substituído:
      let worldToBold = document.querySelector(
        `#versions span[aria-label="Go to slide ${bulletNumber}"] p`,
      ).outerHTML;

      // aqui eu chamo a função de substituir. E substituo a primeira linha que é igual ao parâmetro textToSubstitue: (olha ele aí)
      let output = boldWord(worldToBold, textToSubstitute);

      // aqui eu pego o output dessa função (que está com a tag strong na primeira linha) e atribuo ele à tag p específica:
      document.querySelector(
        `#versions span[aria-label="Go to slide ${bulletNumber}"] p`,
      ).outerHTML = output;
    }
    criarElementoP(
      'VEJA A NOVA TORO ULTRA\nEM TODOS OS ÂNGULOS',
      1,
      'VEJA A NOVA TORO ULTRA',
    );
    criarElementoP(
      'VEJA A NOVA TORO RANCH\nEM TODOS OS ÂNGULOS',
      2,
      'VEJA A NOVA TORO RANCH',
    );
    criarElementoP(
      'VEJA A NOVA TORO VOLCANO\nEM TODOS OS ÂNGULOS',
      3,
      'VEJA A NOVA TORO VOLCANO',
    );

    criarElementoP(
      'VEJA A NOVA TORO FREEDOM\nEM TODOS OS ÂNGULOS',
      4,
      'VEJA A NOVA TORO FREEDOM',
    );
    criarElementoP(
      'VEJA A NOVA TORO ENDURANCE\nEM TODOS OS ÂNGULOS',
      5,
      'VEJA A NOVA TORO ENDURANCE',
    );
  }, []);

  // let swipeIndex = 1;

  useEffect(() => {
    //fix last item on flicky gallery
    document.querySelector(
      `#versions span[aria-label="Go to slide 5"]`,
    ).style.display = '';

    const cardClick = slideNumber => {
      $(
        `#versions span[aria-label="Go to slide ${slideNumber}"]`,
      ).click(e => {

        if (slideNumber === 5) {
      
          // rodaTimeout();

          return;
        }
    
        let elementoSel = window
          .getComputedStyle(
            document.querySelector(
              `#versions span[aria-label="Go to slide ${slideNumber}"]`,
            ),
            '::after',
          )
          .content.replace(/[^\w\s!?]/g, '')
          .replace(/\s/g, '-')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();
        DataLayer.push(
          'MainPage_ClicouCardVersions',
          `${elementoSel}`,
        );
        // swipeIndex = slideNumber;
      });
    };
    cardClick(1);
    cardClick(2);
    cardClick(3);
    cardClick(4);
    cardClick(5);

    $(`#versions`).on('click', '.swiper-button-prev', e => {

      if( $('#versions .swiper-slide-active').attr('aria-label').split(' / ')[0] === (data.length).toString()) {
         $('#versions span[aria-label="Go to slide 5').click();
      }


      DataLayer.push(
        'Versions_ClicouNextOuPrev',
        'anterior',
        document
          .querySelector(
            `#versions .swiper-slide-active .titleSubtitle`,
          )
          .innerText.replace(/\s/g, '-')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase(),
      );
    });
    $(`#versions`).on('click', '.swiper-button-next', e => {
   

      if( $('#versions .swiper-slide-active').attr('aria-label').split(' / ')[0] === (data.length).toString()) {
         
         $('#versions span[aria-label="Go to slide 1').click();
      }

      DataLayer.push(
        'Versions_ClicouNextOuPrev',
        'proximo',
        document
          .querySelector(
            `#versions .swiper-slide-active .titleSubtitle`,
          )
          .innerText.replace(/\s/g, '-')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase(),
      );
    });

     $('#versions span[aria-label="Go to slide 6').css({
      display: 'none'
     });

    // rodaTimeout();
  }, [data.length]);



  return (
    <>
      <Swiper
        id="versions"
        pagination={{ clickable: true }}
        navigation={{ clickable: false, draggable: false }}
        simulateTouch={false}
        allowTouchMove={false}
        afterblock={afterBlock ? 'true' : 'false'}
        // prettier-ignore
        onSlideChange={(parameter) => {
           // prettier-ignore
          // eslint-disable-next-line func-names
          $($(".swiper-container")[2]).find($('.swiper-wrapper')).find(".swiper-slide").each(function(index ) { 

          if ($(this).hasClass("swiper-slide-active")){
            const elementSwipper = $($(".swiper-container")[2]).find($('.swiper-wrapper'))
            let dest =  - (- parseInt($($(".swiper-slide-active")[2]).css("width"))) * (parameter.activeIndex) 
            // prettier-ignore
            /* eslint-disable */
            elementSwipper.css('transform', 'translateX(' + - dest + 'px)'); // eslint-disable-line;
          }
         
          });
        }}
        loop
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide
              key={`versions-desktop-swiper-${item.id}-${index}`}
              id="conteudo-galeria"
            >
              
              <Content
                width={item.presentation.width}
                bg={item.presentation.bg}
                key={item.id}
                open={open}
              >
                <h5>
                  TODAS AS VERSÕES <span>DA FIAT TORO</span>
                </h5>
                <BoxSection>
                  <div>
                    <Text>
                      <span
                        style={{ display: 'none' }}
                        className="titleSubtitle"
                      >
                        {`${item.version}`
                          .replace(/\s/g, '-')
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f]/g, '')
                          .toLocaleLowerCase()}
                      </span>
                      <img src={images.Flag} alt="flag"></img>
                      <h3>FIAT TORO</h3>

                      <h1>{item.presentation.title}</h1>
                      <h1>{item.presentation.subtitle}</h1>
                    </Text>

                    <Details>
                      {item.details.map(detail => (
                        <Infos key={`version-${detail.text}`}>
                          <img
                            src={detail.bg}
                            alt={`version-${detail.text}`}
                          />

                          <span>{detail.text}</span>
                        </Infos>
                      ))}
                    </Details>
                  </div>

                  <Car
                    src={item.presentation.image}
                    alt="image"
                  />
                </BoxSection>
              </Content>
              <Model></Model>

              <GalleryComponent
                data={item.gallery}
                id={item.id}
                versionName={`${item.presentation.title}-${item.presentation.subtitle}`
                  .normalize('NFD')
                  .replace(/\s/g, '-')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLocaleLowerCase()}
              />

              <Cta>
                <Button
                  datalayer={'TodasAsVersoes_ClicouCTA'}
                  datalayername={'compre-a-sua'}
                  datalayerversionname={item.version
                    .replace(/\s/g, '-')
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLocaleLowerCase()}
                  height={50}
                  width={220}
                  bg={Colors.primary}
                  to="https://www.fiat.com.br/compre/fiat-toro.html"
                >
                  Compre a sua
                </Button>
                <Button
                  height={50}
                  width={220}
                  // to="/#/agende"
                  datalayer={'TodasAsVersoes_ClicouCTA'}
                  datalayername={'monte-a-sua'}
                  datalayerversionname={item.version
                    .replace(/\s/g, '-')
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLocaleLowerCase()}
                  to={'https://toro.fiat.com.br/monte.html'}
                >
                  Monte a sua
                </Button>
              </Cta>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default VersionsDesktop;
