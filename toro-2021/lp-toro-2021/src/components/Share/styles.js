import styled, { css } from 'styled-components';
import { Colors } from '../../styles';


export const Content = styled.div`
    background-color: ${Colors.greyMedium};
    display: flex;
    flex-direction: column;
    height: 220px;
    padding: 10px;
    width: 100%;
    z-index: 200;
    position: fixed;
    bottom: -100px;
    transition: all 1s ease-in-out;
    visibility: hidden;
    box-shadow: 30px 0px 20px ${Colors.shadown};
`;

export const Container = styled.div`
  div {
    ${props =>
      props.isActive &&
      css`
        visibility: visible;
      `}

    ${props =>
      props.isVisible ? 
      css`
        bottom: 43%;
      ` : 
      css`
      bottom: -100%;
      `  
    }
  }
`;


export const CloseContainer = styled.div`
  display: flex;
  z-index: 99999;
  align-items: center;
  button {
      position: absolute;
      top: 13px;
  }

  img {
      margin-right: 0px;
      width: 16px;
      height: 16px;
  }

  span {
      margin-left: 30px;
      color: ${Colors.black};
      font-size: 16px;
      font-family: 'FuturaPT Bold', sans-serif;
  }

`;


export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  div {
      margin: 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 95px;

      span {
        height: 11px;
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
      }
      img {
          width: 45px;
          height: 45px;
          cursor: pointer;
      }

      img::first-child {
        margin-top: 18px;
      }
  }
`;