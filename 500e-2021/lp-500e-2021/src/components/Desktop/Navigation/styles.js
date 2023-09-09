import styled from 'styled-components';
import ReactAnchorLink from 'react-anchor-link-smooth-scroll';
import { Colors } from '../../../styles';

export const Container = styled.div``;

export const ReactAnchor = styled(ReactAnchorLink)`
  display: flex;
`

export const Nav = styled.div`
  background-color: ${Colors.black200};
  width: 285px;
  display: flex;
  flex-direction: column;
  position: fixed;
  overflow-y: auto;
  font-family: 'FuturaPT Bold', sans-serif;
  box-shadow: 3px 0px 10px #00000033;
  height: 100vh;
  left: 0;
  padding: 15px 28px 34px 20px;
  transition: 0.2s ease-in-out;
  z-index: 909;

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

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  top: 2.8%;
  margin-bottom: 35px;
  span {
    font-family: 'FuturaPT Bold', sans-serif;
    color: ${Colors.white};
    margin-left: 10px;
  }

  span {
    font-size: 20px;
    font-family: 'FuturaPT Bold', sans-serif;
    color: ${Colors.white};
  }
`;

export const Logo = styled.img`
  height: 24px;
`;

export const Arrow = styled.div`
  height: 10px;
  width: 10px;
  margin-right: 10px;
  border-style: solid;
  border-color: ${props =>
    props.color ? props.color : Colors.blue100};
  border-width: 0px 2px 2px 0px;
  transform: rotate(315deg);
`;

export const Link = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${Colors.white};
  font-size: 16px;
  letter-spacing: 0.14px;
  font-family: 'FuturaPT Bold', sans-serif;
  line-height: 25px;
  padding: 5px 0;
  text-align: left;
  transition: 0.16s ease-in-out;

  &.submenu {
    font-size: 16px;
    font-family: 'FuturaPT Book', sans-serif;
    line-height: 19px;
  }

  &:focus {
    color: ${Colors.blue100};
  }

  &:hover {
    color: ${Colors.blue100};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
`;