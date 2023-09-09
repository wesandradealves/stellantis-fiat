import styled from 'styled-components';
import { Colors } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  .chargers-responses {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .response {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 22%;
      height: 100px;

      .response-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          width: 100%;
          font-family: 'FuturaPT Bold', sans-serif;
          font-size: 0.6rem;
          line-height: 13px;
          color: ${Colors.beige100};
        }

        p {
          font-family: 'FuturaPT Light', sans-serif;
          font-size: 0.7rem;
          line-height: 16px;
          color: ${Colors.beige100};
        }

        span {
          font-family: 'FuturaPT Bold', sans-serif;
          font-size: 1.2rem;
          line-height: 10px;
          color: ${Colors.blue100};
        }
      }
    }
  }

  @media (min-width: 769px) {
    .chargers-responses {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      .response {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 20%;
        height: 200px !important;

        .response-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 10px;

          h3 {
            font-family: 'FuturaPT Bold', sans-serif;
            font-size: 1rem;
            line-height: 16px;
            color: ${Colors.beige100};
          }

          p {
            font-family: 'FuturaPT Light', sans-serif;
            font-size: 1rem;
            line-height: 16px;
            color: ${Colors.beige100};
          }

          span {
            font-family: 'FuturaPT Bold', sans-serif;
            font-size: 1.3rem;
            line-height: 16px;
            color: ${Colors.blue100};
          }
        }
      }
    }
  }
`;
