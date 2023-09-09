import styled, { css } from 'styled-components';
import AmchorLink from 'react-anchor-link-smooth-scroll';
import { Carousel as CarouselContent } from 'react-responsive-carousel';
import * as images from '../../../assets';
import { Colors } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${Colors.black200};
`;

export const ReactAnchorLink = styled(AmchorLink)`
  display: flex;
  margin-bottom: 15px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 10px auto;
  z-index: 999;

  span {
    margin-top: 20px;
    font-family: 'FuturaPT Medium', sans-serif;
    font-size: 20px;
    color: ${Colors.beige100};
    letter-spacing: 0.4px;
    white-space: nowrap;
  }

  strong {
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 20px;
  }
  
`;

export const Arrow = styled.a`
  background: none;
  border: none;
  height: 10px;
  width: 10px;
  border-style: solid;
  border-color: ${props => (props.color ? props.color : null)};
  border-width: 0px 2px 2px 0px;
  transform: ${props =>
    props.rot ? `rotate(${props.rot}deg)` : 'rotate(45deg)'};
  margin-top: 10px;
`;

export const MainImageContainer = styled.div`
  display: flex;
  height: 270px;
  background-color: ${Colors.black200};
  overflow-x: auto;
  transition: all 500ms ease-in-out;

  button {
    background: url(${images.Lupa});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    width: 36px;
    height: 31px;
    position: absolute;
    right: 0;
    background-color: ${Colors.blue100};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ThumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  overflow-x: scroll;
  margin: 10px 0;
  padding: 0 25px;
  position: relative;
  z-index: 999;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Thumbs = styled.img`
  width: 125px;
  height: 85px;
  margin-right: 10px;
  &:nth-child(${props => props.active + 1}) {
    border: 4px solid ${Colors.blue100};
  }
`;

export const ThumbsFooterContainer = styled.div`
  background-color: ${Colors.beige100};
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 120px;
  margin-top: -60px;
  padding: 55px 30px 0 30px;
`;

export const BulletsContainer = styled.div`
  background-color: ${Colors.beige100};
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 220px;
  margin-top: -60px;
  padding: 60px 30px 0 30px;
`;

export const Bullets = styled.button`
  background-color: ${Colors.black100};
  opacity: 0.3;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 10px;
  &:nth-child(${props => props.active + 1}) {
    background-color: ${Colors.blue100};
    opacity: 1;
  }
`;

export const Modal = styled.div`
  ${props =>
    props.opened === true
      ? css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          top: 0;
          left: 0;
          position: fixed;
          width: 100vw;
          height:100vh;
          background-color: ${Colors.black100};
          z-index: 9999;
          transition: all 0.5s ease;
        `
      : css`
          display: none;
          transition: all 0.5s ease;
        `}
`;

export const Carousel = styled(CarouselContent)`
  .carousel-slider {
    height: 100vh;
    display: flex;
    align-items: center;
  }

  ul.control-dots {
    height: 40px;
    display: flex;
    justify-content: center;
    z-index: 99999;
    top: 64%;
    padding-top: 15px;
    background-color: ${Colors.black200};
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

export const MainImageModal = styled.div`
  display: flex;

  width: 100vw;
  margin: 0 auto;
  img {
    object-fit: cover;
  }

  button {
    background: url(${images.Close});
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${Colors.black50};
    width: 36px;
    height: 31px;
    position: absolute;
    padding: 0rem 0 1rem 0;
    z-index: 999;
    right: 0;
  }
`;
export const Divider = styled.div`
  display: flex;
  justify-content: center;
  img {
    margin-top: 30px;
    width: 46px;
    height: 36px;
    z-index: 1;
  }
`;
