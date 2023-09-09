import { Fragment, useState } from 'react';
import 'flickity-as-nav-for';
import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import {
  Container,
  Nav,
  ContainerImages,
  Swiper,
  ButtonCloseModal,
  ModalImage,
  Image,
} from './styles';
import { DataLayer } from '../../Track/DataLayer/DataLayer';
import Modal from 'react-modal';
import $ from 'jquery';

SwiperCore.use([Navigation, Pagination, A11y]);

const Tabs = ({ data, id, versionName }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      width: '100%',
      top: '56%',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
      border: 'none',
      objectFit: 'cover',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: '100000',
    },
  };

  const flickityOptions = {
    pageDots: false,
    prevNextButtons: false,
    freeScroll: false,
    // draggable: '>2',
    groupCells: false,
    imagesLoaded: false,
    lazyLoad: 0,
    arrowShape:
      'M100,47.564v4.632c0,3.014-2.532,5.609-5.546,5.609H27.382l21.273,21.2   c1.03,1.028,1.595,2.33,1.595,3.791c0,1.464-0.564,2.836-1.595,3.863l-3.273,3.275c-1.029,1.027-2.4,1.594-3.863,1.594   c-1.464,0-2.836-0.565-3.865-1.594L1.595,53.877C0.561,52.845-0.004,51.467,0,49.995c-0.004-1.464,0.561-2.84,1.595-3.874   l36.059-36.056c1.029-1.029,2.402-1.594,3.865-1.594s2.834,0.569,3.863,1.598l3.273,3.275c1.03,1.032,1.595,2.416,1.595,3.88   c0,1.463-0.564,2.858-1.595,3.887L27.619,42.192h66.916l-0.156-0.034C97.393,42.159,100,44.553,100,47.564',
  };
  let timerout = 0;
  function openModal() {
    setIsOpen(true);
    timerout = setTimeout(() => {
      // $('#gallery-zoom > .swiper-button-prev').css("background-color", "yellow");
      // $('#gallery-zoom > .swiper-button-next').css("background-color", "red");

      $('#gallery-zoom > .swiper-button-prev').click(e => {
        // console.log(e);

        DataLayer.push(
          'Gallery_ClicouNextOuPrev',
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
      $('#gallery-zoom > .swiper-button-next').click(e => {
        // console.log(e);

        DataLayer.push(
          'Gallery_ClicouNextOuPrev',
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
    }, 300);
  }

  function closeModal() {
    setIsOpen(false);
    clearTimeout(timerout);
  }

  return (
    <>
      <Container>
        <Nav>
          <Flickity
            className="carousel"
            elementType={'div'}
            alt="img"
            options={{
              asNavFor: `.carousel.carousel-main.flic-${id}`,
              contain: true,
              buttongroup: true,
              prevNextButtons: false,
              pageDots: false,
            }}
          >
            {data.map((item, index) => (
              <button
                key={`gallery-button-${index}`}
                className="thumbButton"
                onClick={() => {
                  console.log('Inforamçles do item', item);
                  DataLayer.push(
                    'MainPage_ClicouThumbVersions',
                    item.photoId,
                  );
                }}
              >
                <Image
                  height={item.heightImage}
                  src={item.photos}
                  alt={`galeria-${item.id}`}
                />
              </button>
            ))}
          </Flickity>
        </Nav>

        <ContainerImages style={{ flex: 1 }}>
          <Flickity
            id={id}
            className={`carousel carousel-main flic-${id}`}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            freeScroll={true}
          >
            {data.map((item, index) => (
              <Fragment
                key={`gallery-desktop-caroulsel-${index}`}
              >
                <button
                  onClick={() => {
                    openModal();
                    DataLayer.push(
                      'Fotos_ExpandiuFotos',
                      versionName,
                      item.photoId,
                    );
                  }}
                >
                  <div>
                    <img
                      className="carouselImg"
                      src={item.photos}
                      alt=""
                    />
                  </div>
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel={'Modal'}
                  ariaHideApp={false}
                >
                  <Swiper
                    id={`gallery-zoom`}
                    allowTouchMove={false}
                    navigation={{ clickable: true }}
                  >
                    <ButtonCloseModal
                      onClick={(() => {
                         DataLayer.push(
                          'Fotos_FechouFotos',
                          versionName,
                          item.photoId,
                        );
                        closeModal();
                      })}
                    >
                      X
                    </ButtonCloseModal>
                    {data.map((item, index) => (
                      <SwiperSlide
                        key={`gallery-swiper-slide-${item.title}-${index}`}
                      >
                        <ModalImage
                          src={item.photos}
                          alt="imagem"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Modal>
              </Fragment>
            ))}
          </Flickity>
        </ContainerImages>
      </Container>
    </>
  );
};
//Hello There
export default Tabs;
