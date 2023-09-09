import styled from 'styled-components';

export const ContainerBox = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  width: 100%;

  @media screen and (max-width: 900px) {
    padding-left: 0px;
    padding-right: 0px;
  }
  /* width: 100vw; */
  z-index: 19000;
  position: fixed;
  bottom: 10px;
  display: flex;
  & .container {
    @media screen and (max-width: 900px) {
      max-height: none;
      padding-right: 18px;
    }
    max-height: 78px;
    padding-left: 18px;
    background-color: #edede3;
    display: flex;
    flex-direction: column;
    align-content: center;
    border-radius: 4px;
    border-top: 0.3px solid #18131f;
    box-shadow: 0px -2px 40px #18131f;
  }

  & .text {
    font-family: 'FuturaPT Light', sans-serif;
    font-weight: 400;
    text-align: justify;
    color: #18131f;
    font-size: 16px;
    width: 100%;
    margin-bottom: 50px;
    font-size: 16px !important;
    line-height: 20px;
  }

  & .button {
    background-color: rgb(31, 137, 79);
    color: #ffffff;
    border: 0;
    height: 50px;
    font-size: 16px;
    border-radius: 4px;
    font-family: 'FuturaPT Bold', Arial, sans-serif;
  }
  // Texto Especial
  p {
    font-family: 'FuturaPT Heavy', Arial, sans-serif;
    display: inline;
    color: #18131f;
  }

  @media (min-width: 900px) {
    & .text {
      font-size: medium;
      padding-right: 30px;
      /* margin-right: 30px; */
    }
    & .container {
      /* width: 100vw; */
      margin: 0;
      padding-bottom: 0%;
      flex-direction: row;
      padding-top: 15px;
      padding-left: 23px;
    }
    & .button {
      width: 235px;
      height: 48px;
      margin-right: 13px;
    }
  }

  //mobile
  @media (max-width: 900px) {
    .Container {
    }

    & .title {
    }

    & .contentRow {
      display: flex;
      flex-direction: column;
    }
    & .text {
      padding-top: 20px;
      margin-bottom: 14px;
      font-size: 16px !important;
    }
    & .button {
      margin-bottom: 20px;
    }
  }
`;
