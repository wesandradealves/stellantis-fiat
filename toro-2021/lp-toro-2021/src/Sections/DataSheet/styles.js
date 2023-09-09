import styled from 'styled-components';
import { Colors } from '../../styles';

export const Brand = styled.div`
  align-items: flex-end;
  color: ${Colors.white};
  display: flex;
  padding: 18px 28px;

  h1 {
    font-size: 25px;
    line-height: 33px;
    margin-left: -10px;
  }

  img {
    height: 42px;
    width: 44px;
  }
`;
