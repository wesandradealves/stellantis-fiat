import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player';
import { AiOutlineClose } from 'react-icons/ai';
import {
  Container,
  TitleBox,
  Logo,
  TextTitle,
  ThumbsContainer,
  Thumbs,
  ThumbImage,
  ThumbContent,
  ThumbTitle,
  ThumbButton,
  Modal,
  ModalContentContainer,
  ModalHeader,
  ModalCloseButton,
  Carousel,
  ModalContent,
  ModalContentImage,
  ModalContentVideo,
  ModalContentTextContainer,
  NextModalSlide,
} from './styles';
import { Colors } from '../../../styles';
import * as images from '../../../assets';
import {
  cliqueArrowTrocaDeSlide_DataLayer,
  cliqueBulletTrocaDeSlide_DataLayer,
  cliqueCardThumb_DataLayer,
  cliqueFecharModal_DataLayer,
} from '../../../tracks';

const Hero = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState();
  const [activeIndexModal, setActiveIndexModal] = useState(0);

  function handleOpened(index) {
    setActiveIndex(index);
  }

  function handleResetModalIndex() {
    setActiveIndexModal(null);
  }

  const renderArrow = direction => onClickHandler => {
    const styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',

      top: '83%',

      backgroundColor: '#1FC1D5',
      zIndex: 2,
      width: '44px',
      height: '44px',
      borderRadius: '2px',
    };

    const stylesImage = {
      width: '20px',
      height: '20px',
    };
    if (direction === 'prev') {
      styles.left = '61.3%';
    } else {
      styles.right = '30%';
    }

    return (
      <button
        type="button"
        onClick={() => {
          onClickHandler();
          cliqueArrowTrocaDeSlide_DataLayer(
            'novo-fiat-500e',
            direction === 'next' ? 'proximo' : 'anterior',
          );
        }}
        style={styles}
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
          setActiveIndex(index);
          onClickHandler();

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
        <Logo
          alt="Logo Fiat"
          src={images.FirstFoldDesktop.LogoHero}
        ></Logo>
        <TextTitle>NOVO FIAT 500 ELÉTRICO.</TextTitle>
      </TitleBox>
      <ThumbsContainer>
        {data.map((item, index) => {
          return (
            <>
              <Thumbs
                key={item.thumbId}
                id={`thumbId-${[index]}`}
              >
                <ThumbImage
                  alt="thumb"
                  src={item.image}
                  onClick={() => {
                    handleOpened(index);
                    cliqueCardThumb_DataLayer(
                      'novo-fiat-500e',
                      item.title,
                    );
                  }}
                />
                <ThumbContent
                  onClick={() => {
                    handleOpened(index);
                    cliqueCardThumb_DataLayer(
                      'novo-fiat-500e',
                      item.title,
                    );
                  }}
                >
                  <ThumbTitle>
                    {item.thumbId === 6 ? (
                      <span>
                        Novo Fiat 500 elétrico: <br />o futuro é
                        agora
                      </span>
                    ) : (
                      item.title
                    )}
                  </ThumbTitle>
                  <ThumbButton>+</ThumbButton>
                </ThumbContent>
                <Modal
                  opened={activeIndex === index}
                  id={`modal-thumb`}
                >
                  <ModalContentContainer>
                    <ModalHeader>
                      <ModalCloseButton
                        id="modal-close-button"
                        onClick={() => {
                          cliqueFecharModal_DataLayer(
                            'novo-fiat-500e',
                            item.title,
                          );
                          handleOpened(false);
                          handleResetModalIndex();
                        }}
                      >
                        <AiOutlineClose
                          style={{
                            color: Colors.blue100,
                          }}
                        />
                      </ModalCloseButton>
                    </ModalHeader>
                    <Carousel
                      showStatus={false}
                      renderArrowPrev={renderArrow('prev')}
                      renderArrowNext={renderArrow('next')}
                      renderIndicator={renderBullets}
                      selectedItem={activeIndex}
                      onChange={setActiveIndexModal}
                      showThumbs={false}
                    >
                      {data.map(modal => {
                        if (modal.thumbId < 6) {
                          return (
                            <>
                              <ModalContent key={modal.thumbId}>
                                <ModalContentImage
                                  alt="modal"
                                  src={modal.image}
                                />
                                <ModalContentTextContainer>
                                  <h1>{modal.title}</h1>
                                  <p>{modal.description}</p>
                                </ModalContentTextContainer>
                              </ModalContent>
                              {modal.next ? (
                                <NextModalSlide>
                                  <h3>Próximo:</h3>
                                  <span>{modal.next}</span>
                                </NextModalSlide>
                              ) : null}
                            </>
                          );
                        } else {
                          return (
                            <>
                              <ModalContent key={modal.thumbId}>
                                <ModalContentVideo>
                                  <ReactPlayer
                                    muted={
                                      activeIndexModal === 0
                                        ? false
                                        : true
                                    }
                                    style={{
                                      marginRight: '-40px',
                                    }}
                                    width={700}
                                    height={400}
                                    url="https://youtu.be/BwV2I1ltBvs"
                                  />
                                </ModalContentVideo>
                                <ModalContentTextContainer>
                                  {modal.thumbId === 6 ? (
                                    <h1>
                                      Novo Fiat 500 elétrico:{' '}
                                      <br /> o futuro é agora
                                    </h1>
                                  ) : (
                                    <h1>{modal.title}</h1>
                                  )}
                                  <p>{modal.description}</p>
                                </ModalContentTextContainer>
                              </ModalContent>
                              {modal.next ? (
                                <NextModalSlide>
                                  <h3>Próximo:</h3>
                                  <span>{modal.next}</span>
                                </NextModalSlide>
                              ) : null}
                            </>
                          );
                        }
                      })}
                    </Carousel>
                  </ModalContentContainer>
                </Modal>
              </Thumbs>
            </>
          );
        })}
      </ThumbsContainer>
    </Container>
  );
};

export default Hero;
