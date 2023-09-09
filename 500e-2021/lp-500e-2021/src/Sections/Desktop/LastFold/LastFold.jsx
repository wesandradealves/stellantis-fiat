import React, { useState } from 'react';
import { Carousel } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as images from '../../../assets';
import {
  cliqueArrowTrocaDeSlideCarousel_DataLayer,
  cliqueBulletTrocaDeSlideCarousel_DataLayer,
} from '../../../tracks';

const Aventure = ({ data, activeTab, changeTab }) => {
  const [activeIndex, setActiveIndex] = useState();

  function handleChangeTab(direction) {
    if (activeIndex + 1 === data.length) {
      changeTab(data[data.length - 1].idNext);
    }
    if (direction === 'prev' && activeIndex === 0) {
      changeTab(data[0].idPrev);
    }
  }

  const renderArrow = direction => onClickHandler => {
    const styles = {
      position: 'absolute',
      top: '75%',
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
      styles.left = '57.5%';
    } else {
      styles.right = '32%';
    }

    return (
      <button
        type="button"
        onClick={() => {
          cliqueArrowTrocaDeSlideCarousel_DataLayer(
            activeTab,
            direction === 'next' ? 'proximo' : 'anterior',
            'desktop',
          );
          handleChangeTab(direction);
          onClickHandler();
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
          onClickHandler();
          cliqueBulletTrocaDeSlideCarousel_DataLayer(
            activeTab,
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
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={false}
      onChange={setActiveIndex}
      renderArrowPrev={renderArrow('prev')}
      renderArrowNext={renderArrow('next')}
      renderIndicator={renderBullets}
    >
      {data.map((item, index) => (
        <>
          <div className="Box" id={item.anchor} key={item.id}>
            <div className="MainImageContainer">
              <img
                src={item.image}
                alt={item.brand ? item.brand : 'imagem'}
              />
            </div>
            <div className="Description">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <div className="nextSlide">
                {item.next !== 'Fim' ? (
                  <>
                    {' '}
                    <h3>Próximo:</h3>
                    <span>{item.next}</span>
                  </>
                ) : null}
              </div>
              {item.nextImage ? (
                <img
                  className="NextImageSlide"
                  src={item.nextImage}
                  alt="next-slide"
                />
              ) : null}
            </div>
          </div>
        </>
      ))}
    </Carousel>
  );
};
export default Aventure;
