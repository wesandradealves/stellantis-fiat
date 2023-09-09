import styled from 'styled-components';
import { Carousel as CarouselReact} from 'react-responsive-carousel';
import { Colors } from '../../../styles';


export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 505px;
  margin: 0 auto;
  align-content: space-between;
  width: 300px;
`;

export const Image = styled.img`
  border-radius: 8px;
  height: ${props => (props.mini ? 118 : 157)}px;
  margin-bottom: 12px;
  width: 142px;
  object-fit: cover;
`;


export const Carousel = styled(CarouselReact)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
                                 

  .control-dots {
    bottom: 10px;
    background:#18131F;
    display: flex;
    justify-content: center;
    align-itemns: center;
    margin-top: -10px;
    padding: 1rem;

    .dot {
      border-radius: 0;
      height: 4px;
      width: 28px;
      background: ${Colors.white};
      opacity: 2;
    }

    .dot.selected {
      background: ${Colors.primary}
    }
  }

  .slide {
    img {
      z-index: 99999999999;
    }
  }

`;


export const ImageModal = styled.img`
  margin-bottom: 40px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  z-index: 99999;
  right: 0;
`;