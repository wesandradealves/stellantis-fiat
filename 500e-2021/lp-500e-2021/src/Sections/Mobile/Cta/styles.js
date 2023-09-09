import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 62px;
  background-color: "#FFFFFF";
  overflow-y: hidden; 
  div {
    background-color: #FFFAEB;
    display: flex;
    padding: 10px;
    width: 100%;
    z-index: 999;
    box-shadow: 0px 0px 20px #213A6B;
    position: fixed;
    bottom: -100px;
    transition: all 1s ease-in-out;
    visibility: hidden;
    

    ${props =>
      props.isActive &&
      css`
        visibility: visible;
        position: fixed;
      `}

    ${props =>
      props.isVisible === true &&
      css`
        bottom: 0;
      `}
    a {
      display: flex;
      flex: 1;
      font-family: "FuturaPT Bold",sans-serif;
      & + a {
        margin-left: 16px;
      }
    
    }
    
  }
`;
