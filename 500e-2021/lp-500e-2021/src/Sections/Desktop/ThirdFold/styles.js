import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Colors } from '../../../styles';
import { Carousel as CarouselContent } from 'react-responsive-carousel';
import { FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  &:after {
    content: '';
    height: 250px;
    width: 100vw;
    background-color: ${Colors.beige100};
    margin-top: -200px;
    
  }
`;

export const ReactAnchorLink = styled(AnchorLink)`
  display: flex;
`

export const Carousel = styled(CarouselContent)`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  padding: 0rem 2rem;
  background-color: ${Colors.black200};
  width: 1150px;

  ul.control-dots {
    padding-left: 40px;
  }

  .dot {
    background-color: ${Colors.gray100} !important;
    box-shadow: none !important;
    opacity: 1 !important;
    position: relative;
    top: -110px;
    left: -448px;
  }
  .dot.selected {
    background-color: ${Colors.blue100} !important;
  }

  .Box {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    background-color: ${Colors.black200};
  }

  .MainImageContainer {
      margin-right: 50px;
      
    img {
      object-fit: cover;
      width: 600px;
      height: 390px;
    }   
  }

  .Description {
    margin-left: 150px;
    background-color: ${Colors.black200};
    width: 100%;
    height: 50px;
    h1 {
      font-family: 'FuturaPT Bold', sans-serif;
      color: ${Colors.blue100};
      font-size: 26px;
      text-align: left;
      text-transform: uppercase;
      width: 250px;
      line-height: 30px;
      margin-top: 5px;
    }

    p {
      font-size: 16px;
      text-align: left;
      margin-top: 20px;
      width: 320px;
      line-height: 18px;
      color: ${Colors.white};
      font-family: 'FuturaPT Light', sans-serif;
    }
  }
  .Next {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;

    h3 {
      font-size: 18px;
      font-family: 'FuturaPT Light' , sans-serif;
      text-align: left;
    }

    span {
      font-size: 18px;
      font-family: 'FuturaPT Bold', sans-serif;
      text-align: left;


    }
  }

  .Background {
    width: 100vw;
    height:120px;
    background-color: ${Colors.beige100};
    margin-top: -170px;
    padding: 5rem;
     }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.black300};
  flex-direction: column;
  width: 100vw;
  padding: 3rem 0;

  span {
    /* margin-top: 0px; */
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

export const Arrow = styled(FiChevronDown)`
  color: ${Colors.blue100};
  font-size: 25px;
  margin: 5px 0px;
`;

export const Divider = styled.div`
  background-color: ${Colors.beige100};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  img {
    width: 50px;
  }
  &:after {
    content: '';
    width: 450px;
    height: 2px;
    background: ${Colors.gray100};
    margin-left: 30px;
    z-index: 2;
  }
  &:before {
    content: '';
    width: 450px;
    height: 2px;
    background: ${Colors.gray100};
    margin-right: 30px;
  }
`;
export const NextText = styled.span`
  font-family: 'FuturaPT Book', sans-serif;
  font-size: 24px;
  line-height: 24px;
  color: ${Colors.beige100};

  strong {
    font-family: 'FuturaPT Bold', sans-serif;
    font-weight: 600;
    font-size: 24px;
  }
`;
