import styled from 'styled-components';
import { Colors } from '../../../styles';
import { Carousel as CarouselContent } from 'react-responsive-carousel';
import { FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.beige100};

  &:after {
    content: '';
    height: 175px;
    width: 100vw;
    background-color: ${Colors.black200};
    margin-top: -150px;

  }

`;
export const Carousel = styled(CarouselContent)`
   display: flex;
   justify-content: center;
   justify-items: center;
   align-items: center;
   flex-direction: column;
   padding: 2rem 2rem 0rem 2rem;
   background-color: ${Colors.beige100};
   width: 1000px;

    .dot{
        background-color: ${Colors.gray100} !important; 
        box-shadow: none !important;
        position: relative;
        top: -50px;
        left: 170px;
    }
    .dot.selected {
        background-color: ${Colors.blue100} !important;
    }

   .Box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    background-color: ${Colors.black200};

   }

   .MainImageContainer {
    img { 
        width: 620px;
        height: 390px;
    }
   }

   .Description {
    background-color: ${Colors.beige100};
    height: 280px;
    width: 100%;
    padding: 0 1.5rem;

        h2 {
            font-family: 'FuturaPT Bold' , sans-serif;
            color: ${Colors.black100};
            font-size: 24px;
            text-align: left;
            width: 330px;
            line-height: 25px;

        }

        p {
            font-size: 20px;
            text-align: left;
            margin-top: 20px;
            width: 300px;
            color: ${Colors.black100};
            line-height: 22px;
            font-family: 'FuturaPT Book', sans-serif;
            span {
            color: ${Colors.blue100};
            font-family: 'FuturaPT Bold', sans-serif;
            margin-right: 5px;
            }
        }
   }
`;

export const Title = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: ${Colors.beige100};
    flex-direction: column;
    width: 100vw;
    padding: 3rem 0;

    h1 {
        font-size: 24px;
        color: ${Colors.black100};
        font-family: 'FuturaPT Book', sans-serif;

        span {
            font-family: 'FuturaPT Bold' , sans-serif;
            font-size: 24px;
        }
    }
`;


export const Arrow = styled(FiChevronDown)`
  color: ${Colors.blue100};
  font-size: 25px;
  margin: 5px 0px;
`;




export const Divider = styled.div`
    background-color: ${Colors.black200};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 50px;
    }
    &:after {
         content: '';
         width: 460px;
         height: 2px;
         background: ${Colors.black100};
         margin-left: 30px;
     }
     &:before {
         content: '';
         width: 460px;
         height: 2px;
         background: ${Colors.black100};
         margin-right: 30px;
     }
`;