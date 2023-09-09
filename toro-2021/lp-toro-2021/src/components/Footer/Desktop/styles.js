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
  background-color: #18131F;
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