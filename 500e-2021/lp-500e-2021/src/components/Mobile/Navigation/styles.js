import { Link as LinkRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ReactAnchorLink from 'react-anchor-link-smooth-scroll';
import { Colors } from '../../../styles';

export const ReactAnchor = styled(ReactAnchorLink)`
  display: flex;
`

export const MdArrowRight = styled(MdKeyboardArrowRight)`
  width: 20px;
  height: 50px;
  color: black;
`;

export const Container = styled.div`
  align-items: center;
  background-color: ${Colors.black200};
  display: flex;
  width: 100%;
  height: 44px;
  left: 0;
  position: fixed;
  top: 0;
  /* transition: all 0.5s ease; */
  z-index: 9990;

  ${props =>
    props.isOpen &&
    css`
      &::before {
        background-color: rgba(0, 0, 0, 0.5);
        content: '';
        width: 100vw;
        height: 5000px;
        position: absolute;
      }
    `}
`;

export const Brand = styled.div`
  opacity: 1;
  display: flex;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  z-index: 999;
  img {
    height: 20px;
    width: 60px;
  }
  span {
    color: ${Colors.white};
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 14px;
    line-height: 38px;
  }
  /* transition: all 0.2s ease;*/
`;

export const Hamburger = styled.div`
  align-items: center;
  background-color: ${Colors.black200};
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 4px;
  width: 13%;
  @media (min-width: 992px) {
    width: 4%;
  }

  span {
    background-color: ${Colors.beige100};
    border-radius: 3px;
    display: block;
    height: 2px;
    left: 12px;
    position: relative;
    top: 0;
    /*transition: 0.5s ease;*/
    width: 24px;

    &::before,
    &::after {
      background-color: ${({ isOpen }) =>
        isOpen ? Colors.beige100 : Colors.beige100};
      border-radius: 3px;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      /*transition: 0.2s ease;*/
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
  background-color: ${Colors.black200};
  color: ${Colors.black};
  display: flex;
  flex-direction: column;
  left: ${props => (props.isOpen ? 0 : '-100%')};
  padding: 20px 20px 45px;
  position: fixed;
  top: 43px;
  /*transition: left 0.2s ease;*/
  width: 305px;
  height: 100vh;
  overflow: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    list-style: none;
    padding-left: 50px;
    margin-bottom: 20px;
    li {
      list-style: disc;
      color: ${Colors.blue100};
      padding-top: 15px;
    }
  }
`;

export const Link = styled(LinkRouter)`
  color: ${Colors.beige100};
  font-size: 18px;
  font-family: 'FuturaPT Bold', sans-serif;
  font-weight: 600;
  margin-bottom: 14px;
  display: flex;
  align-items: center;


  
`;
export const LinkSubmenu = styled(LinkRouter)`
  color: ${Colors.beige100};
  font-size: 19px;
  font-family: 'FuturaPT Thim', sans-serif;
  font-weight: 600;
  margin-bottom: 14px;
  display: flex;
  align-items: center;

  &.submenu {
    font-size: 16px;
    font-family: 'FuturaPT Book', sans-serif;
    line-height: 19px;
  }
`;

export const Arrow = styled.a`
  background: none;
  border: none;
  height: 10px;
  width: 10px;
  border-style: solid;
  border-color: ${Colors.blue100};
  border-width: 0px 3px 3px 0px;
  transform: rotate(315deg);
  margin-right: 10px;
`;

export const Actions = styled.div`
  margin-bottom: 20px;
  display: grid;
  margin-top: 100px;
  a + a {
    margin-top: 10px;
  }
  a {
    justify-content: center;
    max-width: 300px;
    height: 48px;
    display: flex;
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 16px;
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
