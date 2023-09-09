import React from 'react';
import {
  BoxSection,
  Carousel,
  Container,
  Divider,
} from './styles';
import * as images from '../../../assets';
import { cliqueArrowTrocaDeSlide_DataLayer, cliqueBulletTrocaDeSlide_DataLayer, swipeSlide_DataLayer } from '../../../tracks';
import { useState } from 'react';


const Services = ({ data }) => {
  const [swipeStartPosition, setSwipeStartPosition] = useState(0)
  const [swipeEndPosition, setSwipeEndPosition] = useState(0)
  const renderArrow = direction => onClickHandler => {
    const stylesButton = {
      position: 'absolute',
      top: '46%',
      backgroundColor: '#1FC1D5',
      zIndex: 2,
      width: '36px',
      height: '36px',
      borderRadius: '2px',
    };
    const stylesImage = {
      display: 'flex',
      margin: 'auto',
      width: '15px',
      height: '15px',
    };
    if (direction === 'prev') {
      stylesButton.left = '2%';
    } else {
      stylesButton.right = '2%';
    }

    return (
      <>
        <button
          type="button"
          onClick={() => {
            onClickHandler();
            cliqueArrowTrocaDeSlide_DataLayer('recursos-eletricos', direction === 'next' ? 'proximo' : 'anterior')
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

  const renderBullets = (onClickHandler, isSelected, index, label) => {
    return (
      <li
        className={`dot ${isSelected ? 'selected' : ''}`}
        onClick={() => {
          onClickHandler();
          cliqueBulletTrocaDeSlide_DataLayer('recursos-eletricos', index + 1)
        }}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={isSelected ? `Selected: ${label} ${index + 1}` : `${label} ${index + 1}`}
      />
    );
  }
  return (
    <Container id='recursos-eletricos'>
      <Carousel
        showStatus={false}
        renderArrowPrev={renderArrow('prev')}
        renderArrowNext={renderArrow('next')}
        renderIndicator={renderBullets}
        onSwipeStart={e => setSwipeStartPosition(e.changedTouches[0].clientX)}
        onSwipeMove={e => setSwipeEndPosition(e.changedTouches[0].clientX)}
        onSwipeEnd={e => {
          swipeStartPosition < swipeEndPosition 
          ? swipeSlide_DataLayer('recursos-eletricos', 'anterior') 
          : swipeSlide_DataLayer('recursos-eletricos', 'proximo')}}
        showThumbs={false}
        autoPlay={false}
        interval={100000}
        transitionTime={500}
      >
        {data.map((item, index) => (
          <BoxSection key={item.id}>
            <div>
              <img src={item.image} alt="imageService" />
              <div>
                <h1>{item.title}</h1>
                <p>{item?.description}</p>
              </div>
            </div>
          </BoxSection>
        ))}
      </Carousel>
      <Divider>
        <img src={images.FiatBlue} alt="Fiat Blue" />
      </Divider>
    </Container>
  );
};
export default Services;
