import styled, { css } from 'styled-components';
import ReactAnchorLink from 'react-anchor-link-smooth-scroll';
import { Carousel as CarouselContent } from 'react-responsive-carousel';
import * as images from '../../../assets';
import { Colors } from '../../../styles' ;

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-image: url(${images.FirstFoldDesktop.bgHero});
  background-size: cover;
  background-position: center 5px;
  align-items: center;

  justify-content: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  width: auto;
  height: auto;
  top: 25%;
  left: 25%;
  position: absolute;
  
  
`;
export const SubTitleBox = styled.div`
  width: auto;
  height: 150px;
  margin: 0px auto;
  
`;
export const SubText = styled.div`
  font-size: 19px;
  font-family: "Helvetica Neue Thin", sans-serif;
  color: ${Colors.beige100};
  line-height: 28px;
  letter-spacing: 9.5px;
  text-transform: uppercase;
`;

export const Logo = styled.img`
  width: 295px;
  height: 81px;
  margin-left: -20px;
`;

export const Line = styled.div`
  width: 250px;
  height: 4px;
  margin-left: -80px;
  background-color: ${Colors.blue100};
  margin-bottom: 10px;
`;

export const TextTitle = styled.span`
  

    font-size: 16px;
 
  
  font-family: "Hero Light", sans-serif;
  color: ${Colors.beige100};
  line-height: 28px;
  letter-spacing: 3.2px;
  display: flex;
  text-transform: uppercase;

  strong {
    font-family: 'FuturaPT Demi', sans-serif;
    line-height: 24px;
    font-size: 24px;
  }
`;

export const CarContainer = styled.div`
  margin: 0 auto;
  padding-left: 80px;
`;

export const Car = styled.img`
`;

export const ThumbsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 620px;
  height: 160px;
  margin: 45% auto 0 auto;
  padding-bottom: 10px;
`;

export const Thumbs = styled.div`
  width: 150px;
  display: flex;
  
  flex-direction: column;
  border: 1px solid ${Colors.blue100};
  cursor: pointer;
  margin: 0 4px;
`;

export const ThumbImage = styled.img`
  ${props =>
    props.bg &&
    css`
      background-image: url(${props.bg});
      background-repeat: no-repeat;
      background-size: contain;
    `}
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ThumbContent = styled.div`
  background-color: ${Colors.beige100};

  width: 100%;
  height: 55px;
  padding: 6px;
  display: flex;
  align-items: center;
`;

export const ThumbTitle = styled.span`
  font-family: 'FuturaPT Book', sans-serif;
  font-size: 12px;
  line-height: 12px;
  width: 120px;
  margin-right: 2px;
`;

export const ThumbButton = styled.button`
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
          top: 0;
          left: 0;
          position: fixed;
          width: 100vw;
          height: 100vh;
          background-color: #565656ab;
          z-index: 9999;
          /* transition: all 0.5s ease; */
        `
      : css`
          display: none;
        `}
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${Colors.beige100};
  display: block;
`;

export const ModalCloseButton = styled.button`
  padding: 10px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  font-size: 24px;
  margin-left: 1050px;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  height: 520px;
  background-color: ${Colors.black200};
  margin: 50px auto;
`;

export const ModalContent = styled.div`
  display: flex;
  width: 90%;
  
`;

export const ModalContentImage = styled.img`
  max-height: 400px !important;
  margin-left: 35px;
  object-fit: cover;
  z-index: 999;
`;

export const ModalContentVideo = styled.div`
  height: 400px;
  z-index: 999;
`;

export const ModalContentTextContainer = styled.div`
  padding-top: 20px;
  padding-left: 15px;
  margin-top: 70px;
  width: 70%;
  flex-direction: column;
  h1 {
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 30px;
    line-height: 26px;
    width: 420px;
    color: ${Colors.blue100};
    text-align: left;
    margin-bottom: 10px;
  }

  p {
    font-family: 'FuturaPT Light', sans-serif;
    font-size: 20px;
    width: 370px;
    line-height: 24px;
    color: ${Colors.beige100};
    text-align: left;
  }
`;

export const NextModalSlide = styled.div`
  margin-top: -32px;
  margin-left: 780px;
  width: 260px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: start;

  h3 {
    color: ${Colors.blue200};
    font-family: 'FuturaPT Medium', sans-serif;
    font-size: 18px;
    line-height: 18px;
    text-transform: capitalize;
  }
  span {
    color: ${Colors.beige100};
    font-family: 'FuturaPT Light', sans-serif;
    font-size: 18px;
    line-height: 18px;
  }
`;

export const Carousel = styled(CarouselContent)`
  display: flex;
  flex-direction: column;

  ul.control-dots {
    height: 65px;
    display: flex;
    padding-top: 150px;
    padding-left: 550px;
    position: absolute;
  }
  
  .carousel-slider {
    margin-top: -70px;
    height: 430px;
  }

  .dot {
    background-color: ${Colors.gray100} !important;
    box-shadow: none !important;
    opacity: 1 !important;
  }
  .dot.selected {
    background-color: ${Colors.blue100} !important;
  }
`;

export const NextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 120px;
  margin-top: 30px;
  
`;
export const NextText = styled.span`
  font-family: 'FuturaPT Light', sans-serif;
  font-size: 24px;
  line-height: 24px;
  color: ${Colors.beige100};

  strong {
    font-family: 'FuturaPT Bold', sans-serif;
    font-weight: 600;
    font-size: 24px;
  }
`;

export const ReactAnchor = styled(ReactAnchorLink)`
  display: flex;
`;

export const Arrow = styled.a`
  background: none;
  border: none;
  height: 10px;
  width: 10px;
  border-style: solid;
  border-color: ${Colors.blue100};
  border-width: 0px 2px 2px 0px;
  transform: ${props =>
    props.rot ? `rotate(${props.rot}deg)` : 'rotate(45deg)'};
  margin-top: 10px;
`;
