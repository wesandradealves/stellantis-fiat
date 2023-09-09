import React from 'react';
import {
  Carousel,
  Title,
  Arrow,
  Container,
  Divider,
} from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as images from '../../../assets';
import { ReactAnchorLink } from '../../Mobile/Services/styles';

const Mitos = ({ data, open }) => {
  const renderArrow = direction => onClickHandler => {
    const styles = {
      position: 'absolute',
      top: '87%',
      backgroundColor: '#1FC1D5',
      zIndex: 2,
      width: '50px',
      height: '50px',
      borderRadius: '4px',
    };
    const stylesImage = {
      width: '20px',
      height: '20px',
    };
    if (direction === 'prev') {
      styles.left = '62.3%';
    } else {
      styles.right = '26.2%';
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
              ? `${images.ArrowPrev}`
              : `${images.ArrowNext}`
          }
          alt="arrows"
          style={stylesImage}
        />
      </button>
    );
  };

  return (
    <>
      <Container open={open} id="mitosContainerDesktop">
        <Title>
          <h1>
            Conheça alguns mitos e verdades sobre o{' '}
            <span>Fiat 500e</span>
          </h1>

          <ReactAnchorLink
            id="mitosCarouselAnchorLink"
            href="#mitosCarouselAnchorLink"
          >
            <Arrow />
          </ReactAnchorLink>
        </Title>
        <Carousel
          id="mitosCarousel"
          showStatus={false}
          renderArrowPrev={renderArrow('prev')}
          renderArrowNext={renderArrow('next')}
          showThumbs={false}
        >
          {data.map(item => (
            <>
              <div className="Box" key={item.id}>
                <div className="MainImageContainer">
                  <img
                    src={item.image}
                    alt={item.brand ? item.brand : 'imagem'}
                  />
                </div>
                <div className="Description">
                  <h2>{item.title}</h2>
                  <p>
                    <span>{item.brand}</span>
                    {item.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </Container>
      <Divider>
        <img src={images.FiatWhite} alt="fiat white" />
      </Divider>
    </>
  );
};
export default Mitos;
