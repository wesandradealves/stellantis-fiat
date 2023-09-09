import styled from 'styled-components';
import { Carousel as CarouselContent } from 'react-responsive-carousel';
import AmchorLink from 'react-anchor-link-smooth-scroll';
import Colors from '../../../styles/colors';
import * as images from '../../../assets';

export const Container = styled.div`
  background-color: ${Colors.beige100};

`;

export const Carousel = styled(CarouselContent)`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  height: 490px;
  ul.control-dots {
    bottom: 15px;
  }

  .dot {
    background-color: ${Colors.gray100} !important;
    box-shadow: none !important;
    position: relative;
  }
  .dot.selected {
    background-color: ${Colors.blue100} !important;
  }
`;

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  img {
    margin-top: -18px;
    width: 46px;
    height: 36px;
    z-index: 1;
  }
`;

export const BoxSection = styled.div`
  background-color: ${Colors.beige100};
  background-image: url(${images.ServicesMobile.BgServices1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -430px;
  padding-bottom: 44px;
  padding-top: 63px;
  position: relative;
  margin-top: -30px;
  & > div {
    margin: 0 auto;
    position: relative;
    width: max-content;
    div {
      bottom: ${props => (props.highlighted ? 55 : 78)}px;
      color: ${Colors.ice};
      left: 30px;
      position: absolute;
      h1 {
        width: 290px;
        color: ${Colors.beige100};
        font-size: 30px;
        font-weight: ${props => (props.highlighted ? 400 : 700)};
        font-family: 'FuturaPT Bold';
        line-height: 30px;
        text-transform: uppercase;
        text-align: left;
        strong {
          display: block;
          font-family: 'FuturaPT Bold';
        }
      }
      p {
        width: 280px;
        color: ${Colors.ice};
        font-family: 'FuturaPT Light';
        font-size: 12px;
        letter-spacing: 0.14px;
        line-height: 18px;
        text-align: left;
        margin-top: 6px;
      }
    }
  }
`;

export const ReactAnchorLink = styled(AmchorLink)`
  display: flex;
`;

export const Arrow = styled.a`
  background: none;
  border: none;
  height: 10px;
  width: 10px;
  border-style: solid;
  border-color: ${props => (props.color ? props.color : null)};
  border-width: 0px 2px 2px 0px;
  transform: rotate(45deg);
  margin-top: 10px;
  margin-bottom: 30px;
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
