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
  width: 320px;
  height: 370px;
  margin: 0 auto;
  margin-top: 50px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    border-radius: 0.25rem;
  }

  .text-privacy-div {
    font-family: 'FuturaPT Light', sans-serif;
    font-size: 0.8rem;
    line-height: 16px;
    color: #EDEDE3;

    width: 325px;
    padding-bottom: 30px;
  }

  .privacy-link {
    display: inline;
    justify-content: left;
    align-items: center;
    margin-top: 0;
    border-radius: 0;

    color: ${Colors.blue100};
  }

  span {
    margin-right: 15px;
  }

  p {
    font-family: 'FuturaPT Bold', sans-serif;
    color: ${Colors.white};
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
  }
`;

export const Medias = styled.div`
  margin-top: 20px;
  margin: 20px 20px 0px auto;
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
