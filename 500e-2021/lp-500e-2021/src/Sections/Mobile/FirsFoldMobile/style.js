import styled, { css } from 'styled-components';
import { Carousel as CarouselContent } from 'react-responsive-carousel';
import * as images from '../../../assets';
import { Colors } from '../../../styles';

export const Container = styled.div`
  background-image: url(${images.FirstFoldMobile.bgFirstFoldMobile});
  background-size: cover;
  width: 100%;
  padding-top: 3%;
  margin-bottom: 50px;
  overflow: hidden;
`;
export const TitleBox = styled.div`
  width: 360px;
  text-align: center;
  height: 150px;
  
  margin: 10px auto;
 
`;
export const Logo = styled.img`
  width: 284px;
  height: 78px;
`;
export const Line = styled.div`
  width: 100px;
  height: 4px;
  margin: 10px 0 10px -30px;
  background-color: ${Colors.blue100};
`;
export const TextTitle = styled.span`
  font-family: "Hero Light", sans-serif;
  font-size: 14px;
  
  margin: 0px auto;
  width:100%;
  color: ${Colors.beige100};
  line-height: 15px;
  text-transform: uppercase;
  letter-spacing: 2.8px;
`;

export const CarContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Car = styled.img`
  margin: 0 auto;
  object-fit: cover;
`;

export const SeeAllContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 56%;
  padding-right: 30px;

  span {
    color: ${Colors.beige100};
    font-family: 'FuturaPT Book', sans-serif;
    font-size: 14px;
    margin-right: 10px;
  }
`;

export const ThumbsContainer = styled.div`
  width: 100%;
  padding-left: 26px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  height: 140px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display:  none;
  }
`;



export const ThumbImage = styled.div`
  ${props =>
    props.bg &&
    css`
      background-image: url(${props.bg});
      background-repeat: no-repeat;
      background-size: cover;
    `}
  width: 100%;
  height: 100%;
`;

export const ThumbContent = styled.div`
  background-color: ${Colors.beige100};
  width: 100%;
  height: 56px;
  padding: 6px;
  display: flex;
  align-items: center;
`;

export const ThumbTitle = styled.span`
  font-family: 'FuturaPT Book', sans-serif;
  font-size: 13px;
  line-height: 12px;
  width: 105px;
`;

export const ThumbButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background-color: ${Colors.blue100};
  font-size: 22px;
  color: ${Colors.beige100};
`;

export const Modal = styled.div`
  ${props =>
    props.opened === true
      ? css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          top: 0;
          left: 0;
          position: fixed;
          width: 100vw;
          height: calc(var(--vh, 1vh) * 100); // Aqui esta calculando a altura de acordo com o viewport do dispositivo fornecido pelo EventListener resize!
          background-color: ${Colors.black200};
          z-index: 9999;
          /*transition: all 0.3s ease;*/
        `
      : css`
          display: none;
          /*transition: all 0.3s ease;*/
        `}
`;

export const ModalCloseButton = styled.button`
  padding: 10px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  font-size: 24px;
`;
export const ModalContent = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalContentImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`;

export const ModalContentVideo = styled.div`
  width: 100%;
  height: auto;
 `;

export const ModalContentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  
  h1 {
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 24px;
    line-height: 28px;
    color: ${Colors.blue100};
    margin-bottom: 20px;
    text-align: left;
    margin: 24px 24px 10px 24px;
  }

  p {
    font-family: 'FuturaPT Light', sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: ${Colors.beige100};
    text-align: left;
    margin: 0 24px;
  }
  
`;

<div onTouchStart/>
export const NextModalSlide = styled.div`
  background-color: ${Colors.black50};
  display: flex;
  align-items: center;
  padding-right: 50px;
  height: 56px;
  position: relative;
  margin-left: 0;
  bottom: 40px;

  span {
    font-family: 'FuturaPT Medium', sans-serif;
    color: ${Colors.beige100};
    font-size: 14px;
    line-height: 21px;
    margin-left: auto;
  }
`;

export const CarouselHero = styled(CarouselContent)`
 width: auto;
 background-color:red;


.carousel-slider{
  width: 200%;
  margin: 0px;
}
`

export const Thumbs = styled.div`
  width: 150px;
  /* height: 150px; */
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`;
export const Carousel = styled(CarouselContent)`
  ul.control-dots {
    height: 65px;
    display: flex;
    align-items: center;
    padding-left: 45px;
    bottom: 25px;
  }

  .dot {
    background-color: ${Colors.beige100} !important;
    box-shadow: none !important;
    opacity: 1 !important;
  }
  .dot.selected {
    background-color: ${Colors.blue100} !important;
  }
`;
