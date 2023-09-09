import $ from 'jquery';
import {
  Carousel,
  Container,
  HeaderText,
  HeaderSubText, ImageContainer, CarouselContainer,
} from './styles';
import * as images from '../../../assets';
import {useState} from "react";

const NewFeaturesDesktop = ({data, open}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderArrow = direction => onClickHandler => {
    const stylesButton = {
      position: 'absolute',
      top: '82%',
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
      stylesButton.left = '8%';
    } else {
      stylesButton.left = '30%';
    }

    return (
        <>
          <button
              type="button"
              onClick={() => {
                onClickHandler();

                $('.iframe').each(function () {
                  this.contentWindow.postMessage(
                      //  ESCOLHER A OPÇÃO PAUSE / STOP
                      // '{"event":"command","func":"pauseVideo","args":""}',
                      '{"event":"command","func":"stopVideo","args":""}',
                      '*',
                  );
                });
                // cliqueArrowTrocaDeSlide_DataLayer(
                //   'sound-design',
                //   direction === 'next' ? 'proximo' : 'anterior',
                // );
              }}
              style={stylesButton}
          >
            <img
                src={
                  direction === 'prev'
                      ? `${images.arrowPrev}`
                      : `${images.arrowNext}`
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

              $('.iframe').each(function () {
                this.contentWindow.postMessage(
                    //  ESCOLHER A OPÇÃO PAUSE / STOP
                    // '{"event":"command","func":"pauseVideo","args":""}',
                    '{"event":"command","func":"stopVideo","args":""}',
                    '*',
                );
              });
              // cliqueBulletTrocaDeSlide_DataLayer(
              //   'sound-design',
              //   index + 1,
              // );
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

  const handleChange = (i) => {
    setActiveIndex(i);

  }

  return (
      <>
        <Container open={open} id="new-features">
          {/* <img
              className="imgBackground"
              src={data[0].backgroundSection}
              alt={data[0].backgroundAlt}
              title={data[0].backgroundTitle}
          /> */}
          <div className={"textHeaderArea"}>
            <HeaderText>S DESIGN</HeaderText>
            <div className="bar"></div>
            <HeaderSubText>
              DETALHES PARA <br/>
              AINDA MAIS <br/>
              EXCLUSIVIDADE
            </HeaderSubText>
          </div>
          <CarouselContainer>
            <Carousel
                id="carouselNewFeatures"
                showStatus={false}
                renderArrowPrev={renderArrow('prev')}
                renderArrowNext={renderArrow('next')}
                renderIndicator={renderBullets}
                showThumbs={false}
                onChange={handleChange}
            >
              {data.map(item => {
                return (
                    <div
                        className="Box "
                        id="contentSecondFold"
                        key={item.id}
                    >

                      <div className="lineWrap">
                        <div className="BoxDescription ">
                          <p>{item.description}</p>
                        </div>

                      </div>
                    </div>
                );
              })}
            </Carousel>
            <div className="MainImageContainer">
              <ImageContainer>
                {data.map((image, index) => {
                  return (
                      <img className={`featuresImg 
                      
                      ${index === activeIndex ? 'atual' : ''} 
                      ${index < activeIndex ? 'anterior' : 'proximo'}
                      
                      `}   src={image.background}
                           alt={image.alt} onClick={(() => {

                      })}/>

                  )
                })}

              </ImageContainer>
            </div>
          </CarouselContainer>
        </Container>
      </>
  );
};
export default NewFeaturesDesktop;
