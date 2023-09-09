import styled, {css} from 'styled-components';
import {Colors} from '../../styles';

export const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  object-fit: cover;
  object-position: bottom;
  z-index: 0;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 28px;
  z-index: 1;

  ${props =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-size: cover;
      background-repeat: no-repeat;
      object-fit: cover;
      height: 100%;
    `};
`;

export const LogoConnect = styled.div`
  position: absolute;
  bottom: 80%;
`;

export const FiatTitle = styled.div`
  color: ${Colors.light};
  width: ${props => props.width && props.width}px;
  margin-top: ${props => (props.highlighted ? '0' : '20')}px;
  max-width: calc(100vw - 40px);
  h1 {
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: ${props => (props.highlighted ? '39' : '26')}px;
    font-weight: 600;
    letter-spacing: 0.29px;
    line-height: 33px;
    position: relative;
    line-height: 2rem;

    h3 {
      position: relative;
      z-index: 1;
      font-family: 'FuturaPT Bold', sans-serif;
    }
  }
`;

export const FiatTitleStories = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: ${props => (props.highlighted ? '20' : '26')}px;
    margin-right: 5px;
    font-family: 'FuturaPT Bold', sans-serif;
  }
  h3:last-child {
    color: ${Colors.primary};
  }

  h2 {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: ${({last}) => (last ? '52px' : '28px')};

  img {
     height: 60px;
    margin-right: 14px;
    position: relative;
    top: -5px;
    width: 60px;
  }

  p {
    color: ${Colors.light};
    display: flex;
    font-size: 17px;
    justify-content: flex-start;
    letter-spacing: 0.11px;
    line-height: 21px;
     font-family: 'FuturaPT Medium',sans-serif;
    padding-right: 15px;
    max-width: calc(74vw - 30px);
  }
`;

export const Seal = styled.img`
  position: absolute;
  top: 80px;
  right: 20px;
  width: 120px;
  height: 120px;
`;

export const Next = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  top: ${props => (props.highlighted ? '30px' : '90%')};

  span {
    font-family: 'FuturaPt Bold', sans-serif;
    color: ${Colors.white};
    white-space: nowrap;
  }

  img {
    margin-left: 10px;
  }
`;

export const ScrollToMore = styled.div`
  div {
    white-space: nowrap;
    transform: rotate(270deg);
    position: absolute;
        top: 70%;
    left: -45px;

    span {
      font-family: 'FuturaPT Bold';
    }
  }
`;

export const FiatToro = styled.div`
  height: 630px;
`;

export const SetaToMore = styled.img`
  position: absolute;
  bottom: 5%;
  margin-left: -5px;
`;

export const Flag = styled.div`
  position: absolute;
  top: 20px;
  right: -75px;
  
  img {
    max-width: calc(100% - 80px);

  }
`;

export const HeroDescription = styled.p`
   font-size: 15px;
    left: -2% !important;
    top: 12rem !important;
    color: #FFF !important;
    width: 150px !important;
    position: relative;
    font-family: 'FuturaPT Bold',sans-serif;
`;