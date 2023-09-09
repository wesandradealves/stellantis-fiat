import styled, { css } from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  height: 62px;
  background-color: ${Colors.blue};
  div {
    background-color: ${Colors.greyMedium};
    display: flex;
    padding: 12px;
    width: 100%;
    z-index: 200;
    box-shadow: 0px 0px 20px ${Colors.shadown};
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
