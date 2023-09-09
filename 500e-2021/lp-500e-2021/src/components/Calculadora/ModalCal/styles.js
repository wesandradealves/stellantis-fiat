import styled from 'styled-components';
import { Colors } from '../../../styles';

export const Container = styled.div`
  background-color: ${Colors.beige100};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const HeaderModalCalc = styled.div`
  width: 100%;
  height: 30%;
  background-color: ${Colors.blue100};
  display: flex;

  @media(max-width: 769px) {
    height: 50%;
  }

  .warning-icon {
    width: 3.7rem;
    height: 3.7rem;
    margin: auto;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 8%;

  @media (max-width: 769px) {
    padding: 2%;  
  }

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    width: 90%;
    font-family: 'FuturaPT Regular', sans-serif;
    font-weight: 400;
    color: ${Colors.black50};
    text-align: center;

    @media (max-width: 769px) {
      width: auto;
      line-height: 20px;
      font-size: 0.8rem;
      text-align: start;
    }
  }
`;

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1.5px solid ${Colors.beige100};
  border-radius: 50%;
  padding: 0.3rem;
  cursor: pointer;
  color: ${Colors.beige100};
  right: 5px;
  top: 5px;
  position: absolute;
`;
