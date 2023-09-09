import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  Container,
  TitleBox,
  Logo,
  TextTitle,
  CarContainer,
  SeeAllContainer,
  ThumbsContainer,
  Thumbs,
  ThumbImage,
  ThumbContent,
  ThumbTitle,
  ThumbButton,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalContentImage,
  ModalContentTextContainer,
  NextModalSlide,
  Carousel,
} from './style';
import { Colors } from '../../../styles';
import {
  AiOutlineArrowRight,
  AiOutlinePlus,
  AiOutlineClose,
} from 'react-icons/ai';
import * as images from '../../../assets';
import {
  // cliqueArrowTrocaDeSlide_DataLayer,
  cliqueBulletTrocaDeSlide_DataLayer,
  cliqueCardThumb_DataLayer,
  cliqueFecharModal_DataLayer,
  swipeSlideAccordionMobile_DataLayer,
  cliqueArrowTrocaDeSlideSemNome_DataLayer,
} from '../../../tracks';

const FirsFoldMobile = ({ data }) => {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState();
  const [heightSize, setHeightSize] = useState();


  // Indexação do modal quando aberto
  const [indexTag, setIndexTag] = useState(0);
  function nextIndex(elementCategory) {
    if (elementCategory === 'swipe') {
      indexTag >= data.length - 1
        ? console.log('limite de slide')
        : setIndexTag(indexTag + 1) ||
          swipeSlideAccordionMobile_DataLayer(
            data[indexTag].title,
            'proximo',
            'novo-fiat-500e',
          );
    } else if (elementCategory === 'icone') {
      indexTag >= data.length - 1
        ? console.log('limite de slide')
        : setIndexTag(indexTag + 1) ||
          cliqueArrowTrocaDeSlideSemNome_DataLayer(
            data[indexTag].title,
            'proximo',
            'novo-fiat-500e',
          );
    } else {
    }
  }
  function prevIndex(elementCategory) {
    if (elementCategory === 'swipe') {
      indexTag <= 0
        ? console.log('limite de slide')
        : setIndexTag(indexTag - 1) ||
          swipeSlideAccordionMobile_DataLayer(
            data[indexTag].title,
            'anterior',
            'novo-fiat-500e',
          );
    } else if (elementCategory === 'icone') {
      indexTag <= 0
        ? console.log('limite de slide')
        : setIndexTag(indexTag - 1) ||
          cliqueArrowTrocaDeSlideSemNome_DataLayer(
            data[indexTag].title,
            'anterior',
            'novo-fiat-500e',
          );
    } else {
    }
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [swipeStartPosition, setSwipeStartPosition] =
    useState(0);
  const [swipeEndPosition, setSwipeEndPosition] = useState(0);
  const [activeIndexModal , setActiveIndexModal] = useState(0);

  function handleOpened(index) {
    setActiveIndex(index);
    // setIsModalVisible(activeIndex === index);
  }

  useEffect(() => {
    let cta = document.getElementById('cta-container');
    if (activeIndex <= 5) {
      cta.className += ' disable';
    } else {
      return null;
    }
  }, [activeIndex]);

  useEffect(() => {
    // Function que vai ser chamada quando tela sofrer resize:
    function handleResize() {
      // Gravar altura da tela:
      setHeightSize(window.innerHeight * 0.01);
      document.documentElement.style.setProperty(
        '--vh',
        `${heightSize}px`,
      );
    }
    // Criando EventListener do resize da tela:
    window.addEventListener('resize', handleResize);
    // Chamando função para gravar valor inicial da tela:
    handleResize();
  });

  const renderArrow =
    direction => (onClickHandler, shouldBeEnabled) => {
      const styles = {
        position: 'absolute',
        bottom: '45px',
        background: 'none',
        zIndex: 2,
        width: '44px',
        height: '44px',
      };

      const stylesImage = {
        width: '18px',
        height: '18px',
      };

      if (!shouldBeEnabled) {
        styles.opacity = 0.3;
      }

      if (direction === 'prev') {
        styles.left = '2%';
      } else {
        styles.right = '2%';
      }
      if (!shouldBeEnabled) {
        <button
          type="button"
          onClick={onClickHandler}
          style={styles}
          id={
            direction === 'prev' ? 'button-prev' : 'button-next'
          }
        >
          <img
            src={
              direction === 'prev'
                ? `${images.ArrowPrev}`
                : `${images.ArrowNext}`
            }
            alt="arrows"
            style={stylesImage}
          />
        </button>;
      }
      return (
        <button
          type="button"
          onClick={() => {
            onClickHandler();
            direction === 'next'
              ? nextIndex('icone')
              : prevIndex('icone');
          }}
          style={styles}
          id={
            direction === 'prev' ? 'button-prev' : 'button-next'
          }
        >
          <img
            src={
              direction === 'prev'
                ? `${images.ArrowPrev}`
                : `${images.ArrowNext}`
            }
            alt="arrows"
            style={stylesImage}
          />
        </button>
      );
    };

  const renderBullets = (
    onClickHandler,
    isSelected,
    index,
    label,
  ) => {
    return (
      <li
        className={`dot ${isSelected ? 'selected' : ''}`}
        onClick={() => {
          onClickHandler();
          setIndexTag(index);
          cliqueBulletTrocaDeSlide_DataLayer(
            'novo-fiat-500e',
            index + 1,
          );
        }}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={
          isSelected
            ? `Selected: ${label} ${index + 1}`
            : `${label} ${index + 1}`
        }
      />
    );
  };
  return (
    <Container id="novo-fiat-500e">
      <TitleBox>
        <Logo alt="logo mobile" src={images.FirstFoldDesktop.LogoHero}></Logo>
        <br />
        <TextTitle>NOVO FIAT 500 ELÉTRICO.</TextTitle>
        {/* <TextTitle1>IL FUTURO È BELLISSIMO.</TextTitle1> */}
      </TitleBox>
      <CarContainer>
        {/* <Car src={images.FirstFoldMobile.CarFirstFoldMobile} /> */}
      </CarContainer>
      <SeeAllContainer>
        <span>Arraste e veja as novidades</span>
        <AiOutlineArrowRight style={{ color: Colors.blue100 }} />
      </SeeAllContainer>
      <ThumbsContainer
        onTouchStart={e =>
          setSwipeStartPosition(e.changedTouches[0].clientX)
        }
        onTouchMove={e =>
          setSwipeEndPosition(e.changedTouches[0].clientX)
        }
        onTouchEnd={e => {
          const dif = Math.abs(
            swipeStartPosition - e.changedTouches[0].clientX,
          );
          if (dif > 10) {
            if (modalIsOpen === false) {
              swipeSlideAccordionMobile_DataLayer(
                'novo-fiat-500e',
                swipeStartPosition > swipeEndPosition
                  ? 'proximo'
                  : 'anterior',
                'novo-fiat-500e',
              );
            } else {
              swipeStartPosition > swipeEndPosition
                ? nextIndex('swipe')
                : prevIndex('swipe');
            }
          }
        }}
      >
        {data.map((item, index) => {
          return (
            <Thumbs
              key={item.thumbId}
              id={`thumb-mobile-${[index]}`}
            >
              <ThumbImage bg={item.image} />
              <ThumbContent>
                <ThumbTitle>
                  {' '}
                  {item.thumbId === 6 ? (
                    <span>
                      Novo Fiat 500 elétrico: o futuro é agora
                    </span>
                  ) : (
                    item.title
                  )}
                </ThumbTitle>
                <ThumbButton
                  onClick={() => {
                    setModalIsOpen(true);
                    handleOpened(index);
                    setIndexTag(index);
                    cliqueCardThumb_DataLayer(
                      'novo-fiat-500e',
                      item.title,
                    );
                  }}
                >
                  <AiOutlinePlus
                    style={{ color: Colors.beige100 }}
                  />
                </ThumbButton>
              </ThumbContent>
              <Modal
                opened={activeIndex === index}
                id={`modal-thumb`}
              >
                <ModalCloseButton
                  id="modal-close-button"
                  onClick={() => {
                    setModalIsOpen(false);
                    setActiveIndexModal(null)
                    // setPauseVideo(false);
                    cliqueFecharModal_DataLayer(
                      'novo-fiat-500e',
                      item.title,
                    );
                    handleOpened(false);
                    setActiveIndex(null);
                  }}
                >
                  <AiOutlineClose
                    style={{ color: Colors.beige100 }}
                  />
                </ModalCloseButton>
                <Carousel
                  options={{ headerShown: false }}
                  showStatus={false}
                  renderArrowPrev={renderArrow('prev')}
                  renderArrowNext={renderArrow('next')}
                  renderIndicator={renderBullets}
                  showThumbs={false}
                  onChange={setActiveIndexModal}
                  selectedItem={index}
                  interval={700000}
                >
                  {data.map(modal => {
                    return (
                      <>
                        <ModalContent key={modal.thumbId}>
                          <ModalContentTextContainer className="teste">
                            {modal.thumbId < 6 ? (
                              <ModalContentImage
                                src={modal.image}
                              />
                            ) : (
                                <ReactPlayer
                                muted= {activeIndexModal === 0 ? false : true}
                                width = "125%"
                                height ="257px"
                                style={{
                                  marginLeft:"-11%"
                                }}
                                url="https://youtu.be/BwV2I1ltBvs"
                              />
                             
                            )}
                            <h1 id="modal-title-first-fold">
                              {modal.thumbId === 6 ? (
                                <h1 style={{marginLeft: '0px'}}>
                                  Novo Fiat 500 elétrico: 
                                  <br /> o futuro é agora
                                </h1>
                              ) : (
                                modal.title
                              )}
                            </h1>
                            <p>{modal.description}</p>
                          </ModalContentTextContainer>
                          <NextModalSlide>
                            {modal.next ? (
                              <span>{modal.next}</span>
                            ) : null}
                          </NextModalSlide>
                        </ModalContent>
                      </>
                    );
                  })}
                </Carousel>
              </Modal>
            </Thumbs>
          );
        })}
        {/* </ThumbsContainer> */}
        {/* </CarouselHero> */}
      </ThumbsContainer>
    </Container>
  );
};
export default FirsFoldMobile;
