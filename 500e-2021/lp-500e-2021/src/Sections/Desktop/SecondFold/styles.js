import styled from 'styled-components';
import { Colors } from '../../../styles';
import * as images from '../../../assets'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  width: 100%;
  background-image: url(${images.BodyBg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: fit-content;
  min-height: 500px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: -30px;
  z-index: 999;
`;

export const Car = styled.img`
  object-fit: cover;
  margin-top: 3%;
  width: 607px;
  height: 300px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -65px;
  margin-top: 60px;
  nav{
    position:absolute;
    width: 60%;
    padding-left: 25%;
  }
  .div-hover{
    position: relative;
    
    .icon{
      width: 30px;
      height: 20px;
      margin-top: 2%;
      padding-left: 1%;
      padding-top: 1%;
    }
    .hover-exib{
      padding-left: 1%;
      padding-top: 1%;
      margin-top: -5%;
      background-color: #424949;
      height: auto;
      color: #FBFBFB;
      font-size: 12px;
      text-align: left;
      float: left;
      position: absolute;
      font-family: 'FuturaPT light', sans-serif;
     
      border-radius: 5px;
      p{
        padding:0% 1% 2% 1%;
        a{
          color: #FBFBFB ;  
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-family: 'FuturaPT Bold', sans-serif;
  font-size: 24px;
  line-height: 26px;
  color: ${Colors.white};
  text-align: center;
  width: 325px;
  margin-bottom: 16px;
  
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  img {
    width: 40px;
    height: 26px;
  }

  &::before {
    content: '';
    display: block;
    width: 440px;
    border-bottom: solid 2px ${Colors.blue300};
    opacity: 0.6;
    z-index: 1;
    margin-right: 15px;
  }

  &::after {
    content: '';
    display: block;
    width: 440px;
    border-bottom: solid 2px ${Colors.blue300};
    opacity: 0.6;
    z-index: 1;
    margin-left: 15px;
  }
`;

export const InfoBox = styled.div`
  display: block;
  background:${props => (props.active ? '#424949': 'transparent')};
  border-radius: 4px;
  width: 400px;
  margin-top: ${props => (props.active ? '20px' : '5px')};
  padding: ${props => (props.active ? '10px' : '0')};

  p {
    display: ${props => (props.active ? '' : 'none')};
    font-size: 12px;
    text-align: left;
    float: left;
    font-family: 'FuturaPT light', sans-serif;
    margin: 0;
    margin-right: 18px;
    color: #FBFBFB;
  }


`;
export const NextText = styled.span`
  font-family: 'FuturaPT Book', sans-serif;
  font-size: 24px;
  line-height: 24px;
  padding-left: 10px;
  color: ${Colors.beige100};

  strong {
    font-family: 'FuturaPT Bold', sans-serif;
    font-weight: 600;
    font-size: 24px;
  }
`;
export const TitleSecond = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.black300};
  /* flex-direction: ; */
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
  img {
    width: 40px;
    height: 26px;
  }
`;
