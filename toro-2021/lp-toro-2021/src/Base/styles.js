import styled from 'styled-components';
import Colors from '../styles/colors';

export const Container = styled.div`
  padding-top: 44px;
`;

export const ContainerDesktop = styled.div`
  background-color: ${Colors.blue};
  margin-left: ${props => (props.open ? 220 : 0)}px;
  transition: 0.2s ease-in-out;
`;
