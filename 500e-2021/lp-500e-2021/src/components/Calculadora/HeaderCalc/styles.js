import styled from 'styled-components';
import { Colors } from '../../../styles';
import ReactAnchorLink from 'react-anchor-link-smooth-scroll';

export const Arrow = styled.a`
  background: none;
  border: none;
  height: 10px;
  width: 10px;
  border-style: solid;
  border-width: 0px 2px 2px 0px;
  transform: rotate(45deg);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const ReactAnchor = styled(ReactAnchorLink)`
  display: flex;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  div.header-title {
    background: ${Colors.beige100};
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;

    span {
      width: 80%;
      text-align: center;
      font-family: 'FuturaPT Thin', sans-serif;
      font-size: 1.2rem;
      line-height: 24px;
      color: ${Colors.black100};
      margin-bottom: 10px;
    }
  }

  @media (min-width: 769px) {
    width: 45%;
    background: ${Colors.beige100};
    border-bottom-right-radius: 45px;
    border-top-right-radius: -45px;

    &::before {
      content: '';
      position: absolute;
      background-color: transparent;
      height: 80px;
      width: 50px;
      margin-left: 100%;
      border-top-left-radius: 45px;
      box-shadow: 0 -40px 0 0 ${Colors.beige100}; /* This is where the magic happens! */
    }

    div.header-title {
      background: none;
      margin-top: 40px;
      span {
        width: 100%;
        text-align: center;
        font-family: 'FuturaPT Thin', sans-serif;
        font-size: 1rem;
        color: ${Colors.black100};
      }
    }
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  .auto-complete-inputs-container {
    display: flex;
    width: 100%;
    .position-icon {
      width: 15%;
      display: flex;
      align-items: center;
      height: 45px;
      padding-left: 3%;
      border-radius: 5px 0px 0px 5px;
      border-left: 2px solid ${Colors.black300};
      border-top: 2px solid ${Colors.black300};
      border-bottom: 2px solid ${Colors.black300};
      justify-content: center;
      background-color: ${Colors.beige100};
      @media(max-width: 769px) {
        background: #1D263A;
       
      }
    }

    input {
      width: 85%;
      height: 45px;
      display: inline-block;
      background-color: ${Colors.beige100};
      outline: none;
      border-right: 2px solid ${Colors.black300};
      border-top: 2px solid ${Colors.black300};
      border-bottom: 2px solid ${Colors.black300};
      margin-left: -1%;
      border-radius: 0px 5px 5px 0px;
      padding-left: 20px;
      color: ${Colors.black200};
      font-family: 'FuturaPT Medium', sans-serif;
      font-size: 16px;
      line-height: 21px;
      margin-bottom: 20px;

      &::placeholder {
        margin-left: 40px;
        color: #00000060;
      }



      @media (max-width: 768px) {
        background-color: #1D263A;

        &::placeholder {
          margin-left: 40px;
          color: #E9E9DF;
          opacity: 0.3;
          font-family: 'FuturaPT Demi' , sans-serif;
        }
      }
    }

    img.origin-placeholder-icon {
      /* position: absolute; */
      /* z-index: 2; */

      /* margin-right: 70%;
      margin-bottom: 25%; */

      /* @media (max-width: 769px) {
        margin-bottom: 17%;
      } */
    }

    img.destiny-placeholder-icon {
      /* position: absolute; */
      /* z-index: 2; */

      /* @media (max-width: 769px) {
        margin-bottom: -17%;
      } */
    }
  }

  .toggles-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 5px;

    @media (max-width: 768px) {
      margin-top: 20px;
    }

    .spans-div {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 15px;
      padding: 0 10px;

      span {
        font-size: 0.7rem;
        color: #a7a7a7;
        font-family: 'FuturaPT Bold', sans-serif;
        line-height: 10px;

        &:nth-child(1) {
          margin-left: -2%;
        }

        &:nth-child(2) {
          margin-left: 15%;
        }

        &:nth-child(3) {
          margin-left: 28%;
        }
      }

      @media (min-width: 769px) {
        margin-bottom: 10px;
        width: 95%;
        span {
          width: 70px;
          text-align: center;
          font-size: 0.95rem;
          color: #060f27;
          font-family: 'FuturaPT Bold', sans-serif;
          line-height: 12px;
        }
      }
    }

    .switchs-div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const RadioButtons = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: center;

  span {
    font-family: 'FuturaPT Bold', sans-serif;
  }

  @media (max-width: 769px) {
    margin-top: 0px;
    text-align: left;
    span {
      margin-bottom: -10px;
      margin-top: 10px;
      display: block;
      color: #a7a7a7;
      font-size: 11px;
    }
  }
  ul.velocitys-container {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    padding-top: 30px;

    li.velocity {
      border-radius: 30px;
      box-sizing: border-box;

      float: left;
      height: 45px;
      position: relative;
      width: 95px;

      input {
        opacity: 0;
      }

      label {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -8px;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        background: #3D4353;
        border-radius: 30px;
        cursor: pointer;
        font-family: 'FuturaPT Bold', sans-serif;
        color: ${Colors.beige100};
        font-size: 1rem;
        
        @media(max-width: 769px) {
          background: #1D263A;
          border: 1px solid ${Colors.blue100}
        }

      }
      input:checked + label {
        background: ${Colors.blue100};
        color: ${Colors.beige100};
        border: 2px solid ${Colors.blue100};



        @media (max-width: 769px) {
          background: #1EBBCB;
          color: white;

        }
      }
    }
  }
`;
