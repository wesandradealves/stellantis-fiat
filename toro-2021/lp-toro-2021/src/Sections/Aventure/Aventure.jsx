/* eslint-disable no-undef */
import React from 'react';
import { Carousel, ButtonAventure } from './styles';
import formatTrack from '../../utils/formatTrack';
import * as images from '../../assets';

const Aventure = ({
  data,
  show,
  open,
  handleNextPrevious,
  handleNextId,
  isOpen,
  handlePreviousId,
}) => {
  try {
    const timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      const t = $('#tudo-sobre-a-toro > .carousel-root');

      t.find('.control-dots > .dot.selected').attr('value');
      t.find('.control-dots > .dot').click(e => {
        DataLayer.push(
          'Servicos_ClicouStories',
          formatTrack(data[e.currentTarget.value].index),
          e.currentTarget.value,
        );
      });
    }, 500);
  } catch (error) {
    console.log(error);
  }

  // $('#gallery-zoom > .swiper-button-next').css("background-color", "red");

  const renderArrow = direction => onClickHandler => {
    const styles = {
      position: 'absolute',
      top: '75%',
      backgroundColor: '#209051',
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
      styles.left = '67%';
    } else {
      styles.right = '21%';
    }

    return (
      <button
        type="button"
        onClick={e => {
          direction === 'prev'
            ? 
            DataLayer.push(
                'Conteudo_ClicouPrevTudoSobre',
                formatTrack(
                  document.querySelector(
                    '#tudo-sobre-a-toro .Description span',
                  ).innerHTML,
                ),
                formatTrack(
                  document.querySelector(
                    '#tudo-sobre-a-toro .Description h2',
                  ).innerHTML,
                ),
              )
            : 
            DataLayer.push(
                'Conteudo_ClicouNextTudoSobre',
                formatTrack(
                  document.querySelector(
                    '#tudo-sobre-a-toro .Description span',
                  ).innerHTML,
                ),
                formatTrack(
                  document.querySelector(
                    '#tudo-sobre-a-toro .Description h2',
                  ).innerHTML,
                ),
              );

              if(direction === 'prev'){
                if(document.querySelector('#tudo-sobre-a-toro .control-dots .selected').value === 0 && handlePreviousId){
                  handleNextPrevious({item:handlePreviousId, direction:'last'});
                  return false;
                }
              }else{
                if(document.querySelector('#tudo-sobre-a-toro .control-dots .selected').value === data.length - 1 && handleNextId){
                  handleNextPrevious({item:handleNextId, direction:'first'})
                  return false;
                };
              }
          onClickHandler();
        }}
        style={styles}
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
    );
  };
  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        selectedItem={isOpen.direction === 'first' ? 0 : data.length - 1}
        renderArrowPrev={renderArrow('prev')}
        renderArrowNext={renderArrow('next')}
        id="tab-id"
      >
        {data.map(item => (
          <React.Fragment key={`aventure-carousel-${item.id}`}>
            <div className="Box" id={item.anchor} key={item.id}>
              <div className="MainImageContainer">
                <img
                  src={item.image}
                  alt={`aventure-${item.id}`}
                />
              </div>
              <div className="Description">
                <span className="item-index-title">
                  {item.index}
                </span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {item.index === 'Acessórios' ? (
                  <ButtonAventure
                    onClick={() => {
                      DataLayer.push(
                        'Servicos_ClicouAcessorios',
                        formatTrack(item.index),
                      );
                    }}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.btn}
                    </a>
                  </ButtonAventure>
                ) : (
                  <>
                    {item.index === 'Pacotes de Serviços' && (
                      <ButtonAventure
                        onClick={() => {
                          DataLayer.push(
                            'Servicos_ClicouPacotes',
                            formatTrack(item.index),
                          );
                        }}
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.btn}
                        </a>
                      </ButtonAventure>
                    )}
                  </>
                )}
                <div className="nextSlide">
                  <h3>Próximo:</h3>
                  <span>{item.next}</span>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </Carousel>
    </>
  );
};
export default Aventure;
