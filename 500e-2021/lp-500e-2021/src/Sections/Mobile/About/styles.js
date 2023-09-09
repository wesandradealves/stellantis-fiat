import styled from 'styled-components';
import AmchorLink from 'react-anchor-link-smooth-scroll';
import { Colors } from '../../../styles';
import * as images from '../../../assets';

export const Container = styled.div`
  background-color: ${Colors.black200};
  background-image: url(${images.ServicesMobile.Bgtechnology});
  background-repeat: repeat;
  
  background-size:  cover;
  background-position-y: -140px;
  display: flex;
  flex-direction: column;
`;

export const Knowmore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  z-index: 999;

  span {
    font-family: 'FuturaPT Book', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${Colors.white};
    letter-spacing: 0.4px;
  }

  span strong {
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 20px;
  }
`;

export const ReactAnchorLink = styled(AmchorLink)`
  display: flex;
`

export const Arrow = styled.a`
  background: none;
  border: none;
  height: 10px;
  width: 10px;
  border-style: solid;
  border-color: ${props => props.color ? props.color : null};
  border-width: 0px 2px 2px 0px;
  transform: rotate(45deg);
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 50px;
  margin-top: 10px; */
  
  p {
    width: 250px;
    font-family: 'FuturaPT Bold';
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    color: ${Colors.white};
    margin-bottom: 40px;
    margin-top: 20px;
  }
`;

export const AboutCar = styled.img`
  /* margin: 0 auto;
  margin-bottom: 8px; */
  max-width: 600px;
  
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 30px;
  padding-top: 10px;
  z-index: 1;

  img {
    width: 40px;
    height: 40px;
  }

  &::before {
    content: '';
    display: block;
    width: 125px;
    border-bottom: solid 2px ${Colors.blue200};
    opacity: 0.3;
    z-index: 1;
    margin-right: 15px;
  }

  &::after {
    content: '';
    display: block;
    width: 125px;
    border-bottom: solid 2px ${Colors.blue200};
    opacity: 0.3;
    z-index: 1;
    margin-left: 15px;
  }
`;

export const Discovery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  
  margin: 20px auto;
  z-index: 999;

  span {
    margin-top:20px;
    font-family: 'FuturaPT Book', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: ${Colors.white};
    text-align: center;
  }

  span strong {
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 22px;
  }
`;



export const InfoBox = styled.div`
  display: flex;
  background:${props => (props.active ? '#424949': 'transparent')};
  border-radius: 4px;
  width: 324px;
  margin-top: ${props => (props.active ? '20px' : '5px')};
  padding: ${props => (props.active ? '10px' : '0')};

  p {
    display: ${props => (props.active ? '' : 'none')};                    
    font-size: 12px;
    text-align: left;
    font-family: 'FuturaPT light', sans-serif;
    margin: 0;
    margin-left: 18px;
    color: #FBFBFB;
    transition: all 1s;
    a{
      color: #FBFBFB;
      text-decoration: underline;
    }
  }
`;