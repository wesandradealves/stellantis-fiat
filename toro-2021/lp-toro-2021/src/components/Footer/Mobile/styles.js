import styled from 'styled-components';
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import { Colors } from '../../../styles';

export const Youtube = styled(AiFillYoutube)`
  width: 45px;
  height: 45px;
  color: ${Colors.white};
`;

export const Twitter = styled(AiOutlineTwitter)`
  width: 45px;
  height: 45px;
  color: ${Colors.white};
`;

export const Instagram = styled(AiFillInstagram)`
  width: 45px;
  height: 45px;
  color: ${Colors.white};
`;

export const Facebook = styled(CgFacebook)`
  width: 45px;
  height: 45px;
  color: ${Colors.white};
`;

export const Container = styled.footer`
  background-color: ${Colors.blue};
  padding: 35px 32px 18px 42px;


  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    border-radius: 0.25rem;
  }

  span {
    margin-right: 15px;
  }

  p {
    font-family: 'FuturaPT Bold', sans-serif;
    color: ${Colors.white};
    margin-left: 10px;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
  }
`;

export const Medias = styled.div`
  margin-top: 20px;
  margin: 20px 10px 0px auto;
  padding: 15px 32px 18px 42px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    height: 24px;
    margin: 0px;
    padding: 1.2rem;

    img {
      height: 100%;
    }
  }
`;
