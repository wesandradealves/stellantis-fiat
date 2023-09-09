/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AccordionItem from './AccordionItem';
import {
  BoxSection,
  Container,
  Design,
  Infos,
  TitleBox,
  ArrowDown,
  Carousel,
  Arrow,
} from './styles';
import * as images from '../../../assets';
import { Colors } from '../../../styles';
import {
  cliqueArrowTrocaDeSlideCarousel_DataLayer,
  cliqueBotao_DataLayer,
  cliqueBulletTrocaDeSlideCarousel_DataLayer,
  swipeSlideAccordionMobile_DataLayer,
} from '../../../tracks';

const Accordion = ({
  data,
  isOpen,
  toggle,
  activeIndex,
  changeIsOpen,
  recentActive,
}) => {
  const [swipeStartPosition, setSwipeStartPosition] =
    useState(0);
  const [swipeEndPosition, setSwipeEndPosition] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [nextFeature, setNextFeature] = useState(false);

  async function handleChangeFeatureData(recentActive) {
    if (nextFeature === true) {
      await changeIsOpen(recentActive + 1);
    }
    return;
  }

  useEffect(() => {
    if (activeIndex) {
      if (activeSlide + 1 === activeIndex.length) {
        setNextFeature(true);
      } else {
        setNextFeature(false);
      }
    }
  }, [activeSlide, activeIndex]);

  const [activeTab, setActiveTab] = useState();
  const renderArrow = direction => onClickHandler => {
    const stylesButton = {
      display: 'flex',
      position: 'absolute',
      top: '56%',
      backgroundColor: 'transparent',
      zIndex: 2,
    };

    if (direction === 'prev') {
      stylesButton.left = '9%';
    } else {
      stylesButton.right = '10%';
    }

    return (
      <>
        <button
          type="button"
          onClick={() => {
            handleChangeFeatureData(recentActive);
            onClickHandler();
            cliqueArrowTrocaDeSlideCarousel_DataLayer(
              activeTab,
              direction === 'next' ? 'proximo' : 'anterior',
            );
          }}
          style={stylesButton}
        >
          {direction === 'prev' ? (
            <Arrow href="#" rot={130} color={Colors.blue100} />
          ) : (
            <Arrow href="#" rot={318} color={Colors.blue100} />
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
    <Container id="tudo-sobre-o-fiat-500e">
      <TitleBox>
        <img src={images.FiatBlue} alt="fiat blue" srcset="" />
        <h1>
          Tudo o que você precisa saber
          <br /> do <span>seu próximo carro elétrico</span>
        </h1>
        <AnchorLink href="#tudo-sobre-o-fiat-500e">
          <ArrowDown />
        </AnchorLink>
      </TitleBox>

      {data.map((item, index) => (
        <AccordionItem
          title={item.brand}
          key={item.id}
          id={item.href}
          isActive={isOpen === item.id}
          handleOnClick={() => {
            setActiveTab(item.brand);
            toggle(item.id, index);
            cliqueBotao_DataLayer(
              'tudo-sobre-o-fiat-500e',
              item.brand,
            );
          }}
        >
          <Carousel
            infiniteLoop={false}
            showStatus={false}
            renderArrowPrev={renderArrow('prev')}
            renderArrowNext={renderArrow('next')}
            renderIndicator={renderBullets}
            onChange={setActiveSlide}
            showThumbs={false}
            autoPlay={false}
            onSwipeStart={e =>
              setSwipeStartPosition(e.changedTouches[0].clientX)
            }
            onSwipeMove={e =>
              setSwipeEndPosition(e.changedTouches[0].clientX)
            }
            onSwipeEnd={e => {
              swipeStartPosition < swipeEndPosition
                ? swipeSlideAccordionMobile_DataLayer(
                    activeTab,
                    'anterior',
                    'tudo-sobre-o-fiat-500e',
                  )
                : swipeSlideAccordionMobile_DataLayer(
                    activeTab,
                    'proximo',
                    'tudo-sobre-o-fiat-500e',
                  );
            }}
            interval={100000}
            transitionTime={800}
          >
            {item.data.map(content => (
              <BoxSection>
                <Design>
                  <img src={content.image} alt="Design" />
                </Design>
                <Infos>
                  <h1>{content.title}</h1>
                  <p>{content.description}</p>
                  <p>{content.description2}</p>
                </Infos>
              </BoxSection>
            ))}
          </Carousel>
        </AccordionItem>
      ))}
    </Container>
  );
};

export default Accordion;
