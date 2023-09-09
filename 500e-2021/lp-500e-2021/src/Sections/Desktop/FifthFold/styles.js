import styled from 'styled-components';
import Colors from '../../../styles/colors';
import { FiChevronDown } from 'react-icons/fi';
import { Carousel as CarouselContent } from 'react-responsive-carousel';
import * as images from '../../../assets';


export const Carousel = styled(CarouselContent)`
    width: 100vw;
    height: 100vh;

    
  ul.control-dots {
    bottom: 20px;
  }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    height: 100%;
    background-color: ${Colors.black300};
    
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 60px;

    
`;

export const Arrow = styled(FiChevronDown) `
    color: ${Colors.blue100};
    font-size: 30px;
`;

export const ContainerGallery = styled.div`
    display: flex;
    justify-content: center;
`;

export const MainImage = styled.div`
    margin-right: 10px;

    img {   
    width: 665px;
    height: 450px;
    }

    button {
        background: url(${images.Lupa});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 20px;
        border-radius: 4px;
        width: 36px;
        height: 31px;
        position: absolute;
        padding: 0rem 0 1rem 0;
        margin-left: -35px;
        background-color: ${Colors.black100};
    }
`;

export const MainImageModal = styled.div `
    margin: 15px auto;
    padding-top:1rem;
    img {   
    width: 80vw !important;
    height: 90vh;
    object-fit: cover;
    }

    button {
        background: url(${images.Close});
        background-size: 15px;
        background-repeat: no-repeat;
        background-position: center;
        background-color: ${Colors.black100};
        width: 36px;
        height: 31px;
        position: absolute;
        padding: 0rem 0 1rem 0;
        margin-left: -35px;
    }

`;


export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    gap: 10px;
    height: 445px;
    `;

export const Button = styled.button`
    width: 157px;
    height: 100px;
`;

export const Image = styled.img`
    width: 157px;
    height: 108px;

`;


export const Divider = styled.div` 
    margin-top: -90px;
    background-color: ${Colors.black300};
    display: flex;
    justify-content:center;
    align-items: center;
    padding-top: 7rem;

    img {
        width: 50px;
        height: 50px;
    }
     &:after {
         content: '';
         width: 440px;
         height: 2px;
         background: ${Colors.blue200};
         margin-left: 30px;
     }
     &:before {
         content: '';
         width: 440px;
         height: 2px;
         background: ${Colors.blue200};
         margin-right: 30px;
     }
`;
export const NextText = styled.span`
  font-family: 'FuturaPT Book', sans-serif;
  font-size: 24px;
  line-height: 24px;
  color: ${Colors.beige100};

  strong {
    font-family: 'FuturaPT Bold', sans-serif;
    font-weight: 600;
    font-size: 24px;
  }
`;