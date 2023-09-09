import React, { useState } from 'react';
import { Colors } from '../../../styles';
import * as images from '../../../assets';
import {
  Container,
  ReactAnchorLink,
  TitleBox,
  Arrow,
  MainImageContainer,
  MainImage,
  ThumbsContainer,
  Thumbs,
  ThumbsFooterContainer,
  BulletsContainer,
  Bullets,
  Modal,
  Carousel,
  MainImageModal,
  Divider,
} from './styles';
import { useEffect } from 'react';
import {
  cliqueAbrirModalZoom_DataLayer,
  cliqueArrowTrocaDeSlideSemNome_DataLayer,
  cliqueArrowTrocaDeSlide_DataLayer,
  cliqueBulletTrocaDeSlideSemNome_DataLayer,
  cliqueFotoThumb_DataLayer,
  swipeSlide_DataLayer,
} from '../../../tracks';

export const Gallery = ({ data }) => {
  const [thumbActive, setThumbActive] = useState(0);
  const [srcMainImage, setSrcMainImage] = useState(
    images.TabsMobile.Tab01,
  );
  const [modalOpen, setModalOpen] = useState(false);

  function handleThumbClick(index) {
    setThumbActive(index);
    cliqueFotoThumb_DataLayer('fotos', index + 1);
  }

  function handlePrev() {
    if (thumbActive >= 1) {
      cliqueArrowTrocaDeSlideSemNome_DataLayer(
        'fotos',
        'anterior',
      );
      setThumbActive(thumbActive - 1);
    }
  }

  function handleNext() {
    if (thumbActive < data.length - 1) {
      cliqueArrowTrocaDeSlideSemNome_DataLayer(
        'fotos',
        'proximo',
      );
      setThumbActive(thumbActive + 1);
    }
  }

  useEffect(() => {
    setSrcMainImage(data[thumbActive].images);
  }, [thumbActive, data]);

  const renderArrow = direction => onClickHandler => {
    const stylesButton = {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '5px',
      position: 'absolute',
      top: '65.3%',
      width: '40px',
      height: '40px',
      backgroundColor: Colors.blue100,
      zIndex: 999999,
    };

    if (direction === 'prev') {
      stylesButton.left = '0';
    } else {
      stylesButton.right = '0';
    }

    return (
      <>
        <button
          type="button"
          onClick={() => {
            onClickHandler();
            cliqueArrowTrocaDeSlide_DataLayer(
              'fotos',
              direction === 'next' ? 'proximo' : 'anterior',
            );
          }}
          style={stylesButton}
        >
          {direction === 'prev' ? (
            <Arrow
              href="#"
              rot={130}
              color={Colors.beige100}
            />
          ) : (
            <Arrow
              href="#"
              rot={318}
              color={Colors.beige100}
            />
          )}
        </button>
      </>
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
          cliqueBulletTrocaDeSlideSemNome_DataLayer(
            'fotos',
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
    <>
      <Container id="fotos">
        .
        <Divider>
          <img src={images.FiatBlue} alt="Fiat Blue" />
        </Divider>
        <TitleBox>
          <span>
            {' '}
            <strong>Apaixone-se </strong> por todos os ângulos{' '}
          </span>

          <ReactAnchorLink href="#fotos">
            <Arrow href="#" color={Colors.blue100} />
          </ReactAnchorLink>
        </TitleBox>
        <MainImageContainer
          onClick={() => {
            setModalOpen(true);
            cliqueAbrirModalZoom_DataLayer(
              'fotos',
              thumbActive + 1,
            );
          }}
        >
          <MainImage alt="imagem principal" src={srcMainImage} />
          <button />
        </MainImageContainer>
        <Modal opened={modalOpen} id={`modal-thumb`}>
          <Carousel
            showStatus={false}
            renderArrowPrev={renderArrow('prev')}
            renderArrowNext={renderArrow('next')}
            renderIndicator={renderBullets}
            selectedItem={thumbActive}
            showThumbs={false}
            autoPlay={false}
          >
            {data.map((item, index) => {
              return (
                <MainImageModal>
                  <img src={item.images} alt="galeria" />
                  <button onClick={() => setModalOpen(false)} />
                </MainImageModal>
              );
            })}
          </Carousel>
        </Modal>
        <ThumbsContainer
          onTouchEnd={() =>
            swipeSlide_DataLayer(
              'conteudo',
              'thumb',
              'thumbs-fotos',
            )
          }
        >
          {data.map((item, index) => (
            <Thumbs
              key={item.id}
              id={'thumb-' + index}
              src={item.images}
              alt={item.thumbName ? item.thumbName : 'imagem'}
              active={thumbActive}
              onClick={() => handleThumbClick(index)}
            />
          ))}
        </ThumbsContainer>
        <ThumbsFooterContainer>
          <Arrow
            href="#"
            color={Colors.blue100}
            rot={130}
            onClick={() => handlePrev()}
          />
          <BulletsContainer>
            {data.map((item, index) => (
              <Bullets
                onClick={() => {
                  setThumbActive(index);
                  cliqueBulletTrocaDeSlideSemNome_DataLayer(
                    'fotos',
                    index + 1,
                  );
                }}
                key={item.id}
                active={thumbActive}
              />
            ))}
          </BulletsContainer>
          <Arrow
            color={Colors.blue100}
            rot={310}
            onClick={() => handleNext()}
          />
        </ThumbsFooterContainer>
      </Container>
    </>
  );
};

export default Gallery;
