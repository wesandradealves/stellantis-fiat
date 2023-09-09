import styled, { css } from 'styled-components';
import { Colors } from '../../../styles';
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';

export const Container = styled.div`
  /* position: relative; */
`;

export const Hamburger = styled.div`
  align-items: center;
  background-color: ${Colors.blue};
  cursor: pointer;
  display: flex;
  height: 35px;
  left: ${props => (props.isOpen ? '195px' : 0)};
  padding: 4px;
  position: fixed;
  top: 12px;
  transition: 0.2s ease-in-out;
  width: 40px;
  z-index: 99999;

  span {
    background: ${Colors.primary};
    display: block;
    height: 2px;
    left: 10px;
    position: relative;
    top: 0;
    transition: 0.5s ease-in-out;
    width: 18px;

    &::before,
    &::after {
      background: ${Colors.primary};
      border-radius: 3px;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: 0.2s ease-in-out;
      width: 100%;
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

  img {
    margin-left: 6px;
    z-index: 9997;
  }
`;

export const Nav = styled.div`
  font-family: 'FuturaPT Bold', sans-serif;
  align-items: center;
  background-color: ${Colors.blue};
  box-shadow: 3px 0px 10px #00000033;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: ${props => (props.isOpen ? 0 : '-220px')};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 15px 28px 34px 20px;
  position: fixed;
  transition: 0.2s ease-in-out;
  width: 220px;
  z-index: 9999;

  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    list-style: none;
    padding-left: 40px;
    li {
      list-style: disc;
      color: ${Colors.white};
      padding-top: 10px;
      button {
        border-bottom: 0;
        font-family: 'FuturaPT Medium', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        padding: 0;
      }
    }
  }
`;

export const Logo = styled.img`
  height: 34px;
  margin-right: 130px;
`;

export const LogoText = styled.div`
  position: absolute;
  top: 2%;
  right: 105px;
  span,h3 {
    font-family: 'FuturaPT Bold',sans-serif;
    color: ${Colors.white};
    text-transform: uppercase;
  }
   
   span {
     font-size: 13px;
   }

   h3 {
     font-size: 20px;
     margin-top: -5px;
   }
`;


export const Link = styled.button`
  background-color: transparent;
  color: ${Colors.white};
  font-size: 15px;
  letter-spacing: 0.14px;
  font-family: 'FuturaPT Bold', sans-serif;
  line-height: 25px;
  padding: 5px 0;
  text-align: left;
  transition: 0.16s ease-in-out;
  width: 160px;

  &:focus {
    color: ${Colors.primary};
  }

  &:hover {
    color: ${Colors.primary};
  }
`;

export const Actions = styled.div`
  a + a {
    margin-top: 8px;
  }

  span {
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 15px;
    white-space: nowrap;
  }

  img {
    transform: rotate(180deg);
    display: inline-block;
    font-size: 12px;
  }

  a {
    color: ${Colors.white};
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 11px;
    line-height: 15px;
    padding: 14px 11px;
    font-family: 'FuturaPT', sans-serif;
  }
`;

export const Overlay = styled.div`
  transition: 0.2s ease-in-out;
  ${props =>
    props.isOpen &&
    css`
      height: 100vh;
      left: 0;
      position: absolute;
      width: 96vw;
      z-index: 9998;
    `}
`;

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
  font-family: 'FuturaPT Bold', sans-serif;

  a {
    color: ${Colors.white};
    display: inline-block;
    font-size: 32px;
    margin: 25px 10px;
  }
`;

export const Youtube = styled(AiFillYoutube)`
  width: 25px;
  height: 25px;
  color: ${Colors.white};
  
`;

export const Twitter = styled(AiOutlineTwitter)`
  width: 25px;
  height: 25px;
  color: ${Colors.white};
`;

export const Instagram = styled(AiFillInstagram)`
  width: 25px;
  height: 25px;
  color: ${Colors.white};
`;

export const Facebook = styled(CgFacebook)`
  width: 25px;
  height: 25px;
  margin-left: -5.5px;
  color: ${Colors.white};
`;
