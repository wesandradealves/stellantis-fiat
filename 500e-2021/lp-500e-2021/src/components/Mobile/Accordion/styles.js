import styled from 'styled-components';
import { Carousel as CarouselContent } from 'react-responsive-carousel';
import { Colors } from '../../../styles';
import { FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
  background-color: ${Colors.black200};
 
`;

export const Carousel = styled(CarouselContent)`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  width: 90vw;

  ul.control-dots {
    bottom: 37.5%;
    left: 0%;
  }

  .dot {
    background-color: ${Colors.gray100} !important;
    box-shadow: none !important;
    opacity: 1 !important;
    position: relative;
  }
  .dot.selected {
    background-color: ${Colors.blue100} !important;
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

export const Item = styled.div`
  background-color: ${Colors.black200};
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  header {
    align-items: center;
    background-color: transparent;
    display: flex;
    margin-left: 10px;

    span {
      color: ${Colors.white};
      font-size: 20px;
      line-height: 67px;
      margin-left: 20px;
      font-family: 'FuturaPT Bold', sans-serif;
    }

    svg {
      transform: rotate(${props => (props.isOpen ? 180 : 0)}deg);
      transition: 0.2s ease-in-out;
      margin-left: 25px;
    }
  }

  main {
    max-height: ${props => (props.isOpen ? 1000 : 0)}px;
    overflow: hidden;
    transition: 1s ease-in-out;
  }
`;
export const DividerItem = styled.div`
  height: 2px;
  width: 80%;
  background: ${Colors.blue200};
 
  margin-left: auto;
  margin-right: auto;
`;

export const BoxSection = styled.div`
  background: ${Colors.beige100};
  color: ${Colors.white};
  position: relative;
  margin-top: -70px;
`;

export const Infos = styled.section`
  width: 285px;
  height: 200px;
  position: relative;
  margin-top: -40px;
  margin-left: 25px;

  h1 {
    width: 350px;
    color: ${Colors.black100};
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 22px;
    line-height: 24px;
    margin-bottom: 10px;
    padding-top: 20px;
    margin-top: 60px;
    text-align: left;
  }

  p {
    color: ${Colors.black200};
    font-size: 16px;
    text-align: left;
    letter-spacing: 0;
    font-family: 'FuturaPT Light', sans-serif;
    margin-bottom: 10px;
    width: 325px;
  }
`;

export const Design = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
  overflow: hidden;

  img {
    height: 265px;
    width: 100vw;
    z-index: 1;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 150px;
  background-color: ${Colors.black200};

  img {
    object-fit: cover;
    width: 55px;
    height: 40px;
    margin-top: -30px;
    margin-bottom: 30px;
    z-index: 100;
  }

  h1 {
    font-size: 20px;
    font-family: 'FuturaPT Light', sans-serif;
    font-weight: 600;
    text-align: center;
    color: ${Colors.beige100};
    span {
      font-family: 'FuturaPT Bold', sans-serif;
    }
  }
`;

export const ArrowDown = styled(FiChevronDown)`
  color: ${Colors.blue100};
  font-size: 20px;
  margin-top: 10px;
`;
