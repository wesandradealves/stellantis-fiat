import styled from 'styled-components';
import { Colors } from '../../../styles';
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';

export const Container = styled.div`
  padding-top: 64px;
  background-color: #18131f;

  .privacy-text-div {
    width: 90%;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;

    p {
      font-family: 'FuturaPT Light', sans-serif;
      font-size: 0.9rem;
      line-height: 16px;
      color: #edede3;

      a {
        text-decoration: none;
        color: ${Colors.blue100};
      }
    }
  }
`;

export const SocialMedias = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  a {
    color: ${Colors.white};
    display: inline-block;
    font-size: 32px;

    & + a {
      margin-left: 30px;
    }
  }
`;

export const Youtube = styled(AiFillYoutube)`
  width: 40px;
  height: 30px;
  color: ${Colors.white};
`;

export const Twitter = styled(AiOutlineTwitter)`
  width: 40px;
  height: 30px;
  color: ${Colors.white};
`;

export const Instagram = styled(AiFillInstagram)`
  width: 40px;
  height: 30px;
  color: ${Colors.white};
`;

export const Facebook = styled(CgFacebook)`
  width: 40px;
  height: 30px;
  color: ${Colors.white};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    margin-top: 20px;
  }
`;
