import styled, { css } from 'styled-components';
import { Colors } from '../../styles';
import { FiChevronDown } from 'react-icons/fi';

export const ArrowDown = styled(FiChevronDown)`
  color: ${Colors.blue100};
  font-size: 25px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0px;
  background-color: ${Colors.black300};

  h1 {
    color: '#707070';
    font-size: 24px;
    font-family: 'FuturaPT Book', sans-serif;
  }
  span {
    font-size: 24px;
    font-family: 'FuturaPT Bold', sans-serif;
  }
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Tab = styled.button`
  border: 0;
  background: transparent;
  z-index: 9999;

  span {
    font-size: 16px;
    font-family: 'FuturaPT Bold', sans-serif;
    color: ${Colors.gray50};
    margin: 0 0px;
    padding: 0px 18px;
  }

  ${props =>
    props.isActive &&
    css`
      span {
        color: ${Colors.white};
        border-bottom: 5px solid ${Colors.blue100};
        margin: 0px;
      }
    `}
  & + button {
    &:before {
      content: '|';
      color: ${Colors.gray50};
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 10px auto;
  z-index: 999;

  span {
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
`;
