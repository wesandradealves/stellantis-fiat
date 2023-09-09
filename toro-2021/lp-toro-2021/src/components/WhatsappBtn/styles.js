import styled from 'styled-components';

const Btn = styled.a`
  position: fixed;
  width: 48px;
  height: 48px;
  padding: 11px 16px 9px 12px;
  bottom: 60px;
  right: 15px;
  background-color: #26d366;
  color: #fff;
  border-radius: 129px;
  text-align: center;
  font-size: 30px;
  z-index: 99999;
  overflow: hidden;
  border: 2px solid transparent;
  padding-bottom: 15px;
  display: flex;
  padding-left: 5px;
  padding-top: 15px;
  align-items: center;

  img {
    height: 34px;
  }

  span {
    margin-left: 0px;
    font-size: 0rem;
    //display: none;
    opacity: 0;
  }

  &:hover {
    animation: mymove;
    animation-duration: 0.7s;
    width: 240px;

    span {
      font-size: 1.3rem;
      font-family: 'FuturaPT Light', sans-serif;
      margin-left: 10px;
      animation: opacityOn 1.2s;
      opacity: 1;
    }
  }

  @keyframes mymove {
    from {
      width: 60px;
    }
    to {
      width: 240px;
    }
  }

  @keyframes leftmove {
    from {
      margin-left: 3px;
    }
    to {
      margin-left: -125px;
    }
  }

  @keyframes fontUp {
    from {
      font-size: 0rem;
      margin-left: 0px;
    }
    to {
      font-size: 1rem;
      margin-left: 10px;
    }
  }

  @keyframes opacityOn {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes textOn {
    from {
      display: none;
    }
    to {
      display: inline;
    }
  }

  @media screen and (max-width: 767px) {
    .whatsapp-icon {
      margin-top: 10px;
      width: 54px;
      height: 54px;
    }

    width: 48px;
    height: 48px;
    bottom: 88px;
    right: 8px;
    font-size: 22px;
    padding-left: 6px;
    padding-top: 13px;

    &:hover {
      animation: unset;
      animation-duration: 0.7s;
      width: 48px;

      span {
        font-size: 1rem;
        margin-left: 10px;
        animation: unset;
        opacity: 1;
        display: none;
      }
    }
  }
`;

export default Btn;
