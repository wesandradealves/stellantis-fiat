import styled from 'styled-components';
import { Colors } from '../../styles';

export const CalculadoraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index:998;
  margin-bottom: 150px;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const DisclaimerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  background: ${Colors.black200};
  bottom: -120px;
  padding: 0 20px;
  p {
    opacity: 0.5;
    color: ${Colors.beige100};
    line-height: 14px;
    font-size: 12px;
    font-family: 'Helvetica Neue Medium', sans-serif;
  }

`;

export const ResponseContainer = styled.div`
  width: 100%;
  background-color: ${Colors.black200};
  border-top-left-radius: 45px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index:999;


  .progress-circles-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    margin-top: 30px;
  }

  .chargers-reponse-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0 auto;

    h1 {
      font-family: 'FuturaPT Bold', sans-serif;
      font-size: 0.8rem;
      line-height: 10px;
      color: ${Colors.beige100};
      justify-content: center;
      margin: 0 auto;
    }

    .title-ops {
      margin-top: 25px;
    }

    @media (max-width: 769px) {
      h1 {
        font-family: 'FuturaPT Bold', sans-serif;
        font-size: 0.9rem;
        color: ${Colors.beige100};
        display: flex;
        justify-content: center;

      }
    }
  }
`;

export const ShowConsume = styled.div`
    position: absolute;
    left: 43%;
    top: 23%; 

    h1 {
      color: ${Colors.beige100};
      text-transform: uppercase;
      text-align: center;
      line-height: 16px !important;
      margin-bottom: 10px !important;
    }
`;


export const ConsumeBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1D263A;
    border: 2px solid #25D9ED;
    border-radius: 40px;
    height: 44px;
    width: 102px;

    span {
      color: #25D9ED;
      font-family: 'FuturaPT Bold', sans-serif;
      font-size: 20px;
      margin-right: 8px;
    }

    p {
      font-family: 'FuturaPT Bold', sans-serif;
      color: ${Colors.beige100};
      font-size: 12px;
      margin-top: 5px;
    }

  `;

export const ShowConsumeMobile = styled.div`
   display: flex;
   justify-content: center;
   align-items: center; 
   background: #151925;
   margin: 0 auto;
   width: 80%;
   margin-top: 30px;
   font-family: 'FuturaPT Bold', sans-serif;
   font-size: 16px;
   padding: 0.4rem;
   box-shadow: 0px 3px 2px #151925;
   border-radius: 40px;

   h2 {
     font-size: 12px;
     margin-right: 5px;
     color: ${Colors.beige100};

   }

   span {
     color: #00FFFF;
     font-size: 16px;
     margin-right: 5px;
   }

   p {
     color: ${Colors.beige100};

   }


`;


 