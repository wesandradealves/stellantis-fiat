import styled from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  padding-top: 20px;
  width: 100%;
  background-color: ${Colors.blue};
  .flickity-enabled.is-draggable {
    // width: 400px;
  }
  div {
    width: 100%;
  }

  img {
    width: 90%;
    border-radius: 15px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${Colors.primary};
  border-radius: 50px;
  color: ${Colors.white};
  height: 49px;
  font-size: 14px;
  margin: 0 2px;
  padding: 4px 30px;
  display: inline-block;
  font-family: 'FuturaPT Bold', sans-serif;

  &.is-selected {
    background-color: ${Colors.primary};
  }

  &:last-child {
    width: 220px;
  }
`;

export const TitleBox = styled.div`
  background-color: ${Colors.blue};
  text-align: center;
  color: ${Colors.white};
  padding-top: 30px;
  display: block;
  width: 100%;

  h1 {
    font-size: 18px;
    font-weight: 400;
    font-family: 'FuturaPT Light', sans-serif;
  }
  span {
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 18px;
    text-align: center;
  }
`;
