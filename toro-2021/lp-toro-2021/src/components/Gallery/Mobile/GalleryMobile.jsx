import React, { Fragment, useState } from 'react';
import {
  Container,
  Image,
  ImageModal,
  Carousel,
  CloseIcon,
} from './styles';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as images from '../../../assets';

const GalleryMobile = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeIndex, setIndexActive] = useState(0);
  function openModal(index) {
    setIndexActive(index);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const renderArrow = direction => onClickHandler => {
    const styles = {
      position: 'absolute',
      top: '80%',
      zIndex: 2,
      background: '#209051',
      width: '36px',
      height: '36px',
    };
    const stylesImage = {
      width: '20px',
      height: '20px',
    };
    if (direction === 'prev') {
      styles.left = '0%';
    } else {
      styles.right = '0%';
    }

    return (
      <button
        type="button"
        onClick={onClickHandler}
        style={styles}
      >
        <img
          src={
            direction === 'prev'
              ? `${images.prev1}`
              : `${images.next1}`
          }
          alt="arrows"
          style={stylesImage}
        />
      </button>
    );
  };

  const modalStyles = {
    content: {
      width: '100%',
      top: '50%',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
      border: 'none',
      objectFit: 'cover',
      padding: '0',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: '100000',
    },
  };
  return (
    <Container>
      {data.map((item, index) => (
        <Fragment key={`gallery-mobile-swiper-${item.title}-${index}`}>
          <Image
            src={item.photos}
            mini={item.mini}
            onClick={() => openModal(index)}
          ></Image>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
          >
            <CloseIcon
              className="closeIcon"
              src={images.close1}
              alt="close"
              onClick={closeModal}
            />

            <Carousel
              selectedItem={activeIndex}
              showStatus={false}
              renderArrowPrev={renderArrow('prev')}
              renderArrowNext={renderArrow('next')}
            >
              {data.map((item,index) => (
                <Fragment key={`gallery-mobile-caroulsel-${index}`}>
                  <ImageModal src={item.photos} alt="Imagens" />
                </Fragment>
              ))}
            </Carousel>
          </Modal>
        </Fragment>
      ))}
    </Container>
  );
};

export default GalleryMobile;
