import styled from 'styled-components';
import { Colors } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .circular-progress-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    h1 {
      font-family: 'FuturaPT Bold', sans-serif;
      font-size: 1rem;
      color: ${Colors.beige100};
      line-height: 16px;
      margin-bottom: 15px;
    }

    @media (max-width: 769px) {
      h1 {
        position: relative;
        bottom: -15px;
        font-size: 15px;
        line-height: 0px;
      }
    }

    .progress-circle {
      width: 50%;
      height: 100%;

      svg {
        filter: drop-shadow(0px 3px 9px rgb(0 232 255 / 0.25));
      }

      .response-calc {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 10px;

        @media (max-width: 769px) {
          margin-top: 0;
        }

        h1 {
          font-family: 'FuturaPT Bold', sans-serif;
          font-size: 2rem;
          color: ${Colors.blue100};
        }

        .full-autonomy {
          font-family: 'FuturaPT Bold', sans-serif;
          font-size: 0.8rem;
          color: ${Colors.blue100};
          margin-top: -13px;
          margin-left: 60%;

          @media (max-width: 769px) {
            margin-top: 10px;
          }
        }

        span {
          font-family: 'FuturaPT Bold', sans-serif;
          font-size: 1rem;
          color: ${Colors.beige100};
        }

        .carga-response {
          width: 100px;
          font-family: 'FuturaPT Bold', sans-serif;
          text-align: center;
          font-size: 1.2rem;
          color: ${Colors.beige100};

          @media (max-width: 769px) {
            font-size: 0.8rem;
            margin-top: 15px;
          }
        }
      }
    }

    @media (min-width: 769px) {
      .titleMobile {
        display: none;
      }
    }
    @media (max-width: 769px) {
      .titleDesk {
        display: none;
      }

      .progress-circle {
        width: 65%;
        height: 60%;
        text-align: center;
      }
    }
  }
`;
