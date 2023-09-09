import $ from 'jquery';
import {
  Carousel,
  Container,
  HeaderText,
  HeaderSubText,
} from './styles';
import * as images from '../../../assets';
import { YoutubeEmbed } from '../../../components';
// import {
//   cliqueArrowTrocaDeSlide_DataLayer,
//   cliqueBulletTrocaDeSlide_DataLayer,
// } from '../../../tracks';

const SoundDesignMobile = ({ data, open }) => {
  const renderArrow = direction => onClickHandler => {
    const stylesButton = {
      position: 'absolute',
      top: '24%',
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
      stylesButton.left = '11.5%';
    } else {
      stylesButton.right = '60%';
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

  return (
    <>
      <Container open={open} id="sound-design">
        <Carousel
          id="carouselSoudDesign"
          showStatus={false}
          renderArrowPrev={renderArrow('prev')}
          renderArrowNext={renderArrow('next')}
          renderIndicator={renderBullets}
          showThumbs={false}
        >
          {data.map(item => {
            return (
              <div
                className="Box"
                id="contentSoudDesign"
                key={item.id}
              >
                <img
                  className="imgBackGround"
                  src={item.backgroundMobile}
                  alt={item.backgroundAltMobile}
                  title={item.backgroundTitleMobile}
                />

                <div className="lineWrap">
                  <div className="BoxDescription">
                    <HeaderText>FIAT TORO</HeaderText>
                    <HeaderSubText>
                      SOUND
                      <span> DESIGN</span>
                    </HeaderSubText>
                    <p>{item.description}</p>
                  </div>
                  <div className="MainImageContainer">
                    <YoutubeEmbed embedId={item.idVideo} />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Container>
    </>
  );
};
export default SoundDesignMobile;
