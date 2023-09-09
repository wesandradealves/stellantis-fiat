import styled from 'styled-components';
import Colors from '../styles/colors';
import * as images from '../assets';

export const Container = styled.div`
  padding-top: 44px;
  background-color: ${Colors.black200};
`;

export const ContainerDesktop = styled.div`
  background-color: ${Colors.black200};
  /* background-image: url(${images.BodyBg}); */
  background-repeat: no-repeat;
  background-position-y: 12%;
  background-position-x: 60%;
  margin-left: 285px;
  transition: 0.2s ease-in-out;
  overflow-x: hidden;
`;
