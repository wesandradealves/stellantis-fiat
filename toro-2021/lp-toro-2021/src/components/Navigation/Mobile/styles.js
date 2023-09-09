import { Link as LinkRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Colors } from '../../../styles';

export const MdArrowRight = styled(MdKeyboardArrowRight)`
  width: 20px;
  height: 50px;
  color: black;
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Placeholder = styled.div`
  width: 13%;
  @media (min-width: 992px) {
    width: 4%;
  }
`;

export const Container = styled.div`
  align-items: center;
  background-color: ${Colors.black};
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 44px;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 9999;

  img {
    height: 24px;
    width: 60px;
    margin: 0;
  }
  span {
    color: ${Colors.white};
    font-family: 'FuturaPT Bold', sans-serif;
  }
`;

export const Hamburger = styled.div`
  align-items: center;
  background-color: ${({ isOpen }) =>
    isOpen ? Colors.light : Colors.black};
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 4px;
  width: 13%;
  @media (min-width: 992px) {
    width: 4%;
  }

  span {
    background-color: ${({ isOpen }) =>
      isOpen ? Colors.primary : Colors.light};
    border-radius: 3px;
    display: block;
    height: 2px;
    left: 12px;
    position: relative;
    top: 0;
    transition: 0.5s ease-in-out;
    width: 24px;

    &::before,
    &::after {
      background-color: ${({ isOpen }) =>
        isOpen ? Colors.primary : Colors.light};
      border-radius: 3px;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: 0.2s ease-in-out;
      width: 24px;
    }

    &::before {
      top: -8px;
    }

    &::after {
      bottom: -8px;
    }

    ${props =>
      props.isOpen &&
      css`
        transform: rotate(45deg);

        &::before {
          transform: rotate(90deg);
          top: 0;
        }

        &::after {
          bottom: 0;
          transform: rotate(90deg);
        }
      `}
  }
`;
export const Nav = styled.div`
  background-color: ${Colors.light};
  color: ${Colors.black};
  display: flex;
  flex-direction: column;
  left: ${props => (props.isOpen ? 0 : '-100%')};
  overflow: scroll;
  padding: 20px 20px 45px;
  position: fixed;
  top: 43px;
  transition: 0.2s ease-in-out;
  width: 92%;
  height: 100vh;
  z-index: 9999;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Link = styled(LinkRouter)`
  border-bottom: 1px solid rgba(35, 30, 28, 0.2);
  color: ${Colors.black};
  font-size: 22px;
  font-family: 'FuturaPT Bold', sans-serif;
  font-weight: 600;
  padding: 12px 0;
`;

export const SubMenuLink = styled(LinkRouter)`
  border-bottom: 1px solid rgba(35, 30, 28, 0.2);
  color: ${Colors.black};
  font-size: 22px;
  font-family: 'FuturaPT Medium', sans-serif;
  text-transform: capitalize;
  padding: 12px 0;
`;

export const Actions = styled.div`
  margin-top: 30px;
  margin-bottom: 100px;
  display: grid;
  a + a {
    margin-top: 10px;
  }
  a {
    justify-content: center;
    max-width: 300px;
    height: 48px;
    display: flex;
    font-family: 'FuturaPT Medium', sans-serif;
    font-size: 18px;
  }
`;

export const Medias = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  a {
    height: 24px;

    img {
      height: 100%;
    }
  }
`;
