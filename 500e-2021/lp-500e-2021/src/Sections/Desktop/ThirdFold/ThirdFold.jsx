import React from 'react';
import {
  Carousel,
  // ReactAnchorLink,
  // Title,
  // Arrow,
  Container,
  Divider,
  // NextText,
} from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as images from '../../../assets';
import {
  cliqueArrowTrocaDeSlide_DataLayer,
  cliqueBulletTrocaDeSlide_DataLayer,
} from '../../../tracks';

const Services = ({ data, open }) => {
  const renderArrow = direction => onClickHandler => {
    const stylesButton = {
      position: 'absolute',
      top: '72%',
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
      stylesButton.left = '6.5%';
    } else {
      stylesButton.right = '83.5%';
    }

    return (
      <>
        <button
          type="button"
          onClick={() => {
            onClickHandler();
            cliqueArrowTrocaDeSlide_DataLayer(
              'recursos-eletricos',
              direction === 'next' ? 'proximo' : 'anterior',
            );
          }}
          style={stylesButton}
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
          cliqueBulletTrocaDeSlide_DataLayer(
            'recursos-eletricos',
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
      <Container open={open} id="recursos-eletricos">
        {/* <Title>
          <NextText>
            Descubra como é dirigir um carro{' '}
            <strong>100% elétrico</strong>
          </NextText>

          <ReactAnchorLink
            id="carouselServiceAnchorLink"
            href="#carouselServiceAnchorLink"
          >
            <Arrow href="#" />
          </ReactAnchorLink>
        </Title> */}
        <Carousel
          id="carouselServices"
          showStatus={false}
          renderArrowPrev={renderArrow('prev')}
          renderArrowNext={renderArrow('next')}
          renderIndicator={renderBullets}
          showThumbs={false}
        >
          {data.map(item => {
            return (
              <>
                <div
                  className="Box"
                  id="contentSecondFold"
                  key={item.id}
                >
                  <div className="Description">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    {item.next ? (
                      <div className="Next">
                        <h3>Próximo:</h3>
                        <span>{item.next} </span>
                      </div>
                    ) : null}
                  </div>
                  <div className="MainImageContainer">
                    <img
                      src={item.image}
                      alt={item ? item.id : 'imagem'}
                    />
                  </div>
                </div>
                <div className="Background" />
              </>
            );
          })}
        </Carousel>
      </Container>
      <Divider>
        <img src={images.FiatBlue} alt="Logo" />
      </Divider>
    </>
  );
};
export default Services;
