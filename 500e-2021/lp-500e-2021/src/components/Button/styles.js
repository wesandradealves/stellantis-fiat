import styled, { css } from 'styled-components';
import { Colors } from '../../styles';

const Btn = styled.a`
  background-color: ${props =>
    props.bg ? props.bg : Colors.blue100};
  border-radius: ${props => (props.br ? props.br : 4)}px;
  border: ${props => props.border && props.border};
  height: ${props => (props.height ? props.height : 48)}px;
  width: ${props => props.width && props.width}px;
  padding: ${props => (props.pd ? props.pd : 20)}px;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
  margin-top: ${props => (props.mt ? props.mt : 0)}px;
  color: ${props => (props.color ? props.color : Colors.black)};
  justify-content: ${props => props.jc};
  line-height: 24px;
  font-size: ${props => (props.fs ? props.fs : 18)}px;
  font-weight: ${props => (props.fw ? props.fw : 400)};
  font-family: 'FuturaPT Bold', sans-serif;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in;

  img {
    width: 12%;
    padding-right: 3px;
  }

  ${props =>
    props.hover &&
    css`
      &:hover {
        background-color: ${Colors.white};
        color: ${Colors.primary};
      }
    `}
`;

export default Btn;
