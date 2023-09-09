import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {
  Container,
  Divider,
  MainImage,
  ContainerGrid,
  Image,
  Title,
  Arrow,
  ContainerGallery,
  Button,
  MainImageModal,
  NextText,
} from './styles';
import * as images from '../../../assets';
import { ReactAnchorLink } from '../../Mobile/Services/styles';
import { Carousel } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  cliqueArrowTrocaDeSlide_DataLayer,
  cliqueBulletTrocaDeSlideSemNome_DataLayer,
  cliqueFotoThumb_DataLayer,
  cliqueAbrirModalZoom_DataLayer,
} from '../../../tracks';

const Gallery = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [thumbActive, setThumbActive] = useState(0);
  const [srcMainImage, setSrcMainImage] = useState(
    images.aventures.design.design1,
  );

  function handleThumbClick(index) {
    setThumbActive(index);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setSrcMainImage(data[thumbActive].images);
  }, [thumbActive, data]);

  // função para renderizar um botão de passar o carrousel
  const renderArrow = direction => onClickHandler => {
    const styles = {
      position: 'absolute',
      top: '50%',
      backgroundColor: '#1FC1D5',
      zIndex: 2,
      width: '50px',
      height: '50px',
    };
    const stylesImage = {
      width: '20px',
      height: '20px',
    };
    if (direction === 'prev') {
      styles.left = '5%';
    } else {
      styles.right = '5%';
    }

    return (
      <button
        type="button"
        onClick={() => {
          onClickHandler();
          cliqueArrowTrocaDeSlide_DataLayer(
            'fotos',
            direction !== 'prev' ? 'proximo' : 'anterior',
            'ampliada',
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
  // Fim da função
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

  // Estilização do Modal
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
      border: '0',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      zIndex: '100000',
    },
  };
  //Fim da Estilização
  return (
    <>
      <Container id="fotos">
        <Title>
          <NextText>
            <strong>Apaixone-se</strong> por todos os ângulos
          </NextText>
          <ReactAnchorLink
            id="containerIDAnchorLink"
            href="#containerIDAnchorLink"
          >
            <Arrow />
          </ReactAnchorLink>
        </Title>
        <ContainerGallery id="containerID">
          <MainImage>
            <img src={srcMainImage} alt="imagem"></img>
            <button
              onClick={() => {
                openModal();
                cliqueAbrirModalZoom_DataLayer(
                  'fotos',
                  thumbActive + 1,
                );
              }}
            />
          </MainImage>
          <ContainerGrid>
            {data.map((item, index) => (
              <Button key={item.id}>
                <Image
                  id={'foto-' + index}
                  src={item.images}
                  alt={
                    item.galleryName
                      ? item.galleryName
                      : 'Galeria'
                  }
                  active={thumbActive}
                  onClick={() => {
                    cliqueFotoThumb_DataLayer(
                      'fotos',
                      index + 1,
                    );
                    handleThumbClick(index);
                  }}
                />
              </Button>
            ))}
          </ContainerGrid>
        </ContainerGallery>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Carousel
            showStatus={false}
            renderArrowPrev={renderArrow('prev')}
            renderArrowNext={renderArrow('next')}
            renderIndicator={renderBullets}
            selectedItem={thumbActive}
            showThumbs={false}
          >
            {data.map(item => (
              <MainImageModal>
                <img src={item.images} alt="imagem"></img>
                <button onClick={() => closeModal()} />
              </MainImageModal>
            ))}
          </Carousel>
        </Modal>
      </Container>
      <Divider>
        <img src={images.FiatWhite} alt="flag"></img>
      </Divider>
    </>
  );
};

export default Gallery;
