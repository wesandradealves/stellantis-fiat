import styled from 'styled-components';
import { Colors } from '../../../styles';
import { Carousel as CarouselContent } from 'react-responsive-carousel';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  margin-top: 5px;
`;

export const Carousel = styled(CarouselContent)`
  height:100%;
  width:100%;

  .slider-wrapper{
    height:100%;
  }
  .slider-wrapper.axis-horizontal .slider{
    height:100%;
  }
  .carousel-slider{
    height:100%;
  }

  button{
    border:1px solid ${Colors.primary};
    background-color: ${Colors.primary + 24} !important;
    left:15%;
  }
  button:hover{
    background-color:${Colors.primary + '60'}!important;
  }

  ul.control-dots {
    bottom: 17%;
    padding-left: 40px;
    display:flex
  }

  .dot {
    opacity: 1 !important;
    position: relative;
    left: 5%;
  }

  .dot.selected, .dot:hover {
    background-color: ${Colors.primary} !important;
  }

  .Box {
    height:100%;
    display: flex;
    
    .imgBackGround{
      position:absolute;
      z-index:-1;
      height:100%;
    }

    .lineWrap{
      display:flex;
      width:100%;
      margin-top:5%;
    }
  }

  .MainImageContainer {
    width: 100%;
    iframe{
      width: 90%!important;
      max-height:85%;
    }
  }

  .BoxDescription {
    margin-left: 90px;
    width: 100%;

    .bar{
      height:3px;
      width:7%;
      background-color:${Colors.primary};
      margin-top:10px;
      margin-bottom:10px;
    }

    p {
      font-size: 1rem;
      text-align: left;
      margin-top: 20px;
      width: 320px;
      line-height: 1;
      color: ${Colors.white};
    }
  }

  @media (min-width: 1639px) {
    width:100%;
    .BoxDescription {
      margin-left: 115px;
    }
`;

export const HeaderText = styled.h1`
  max-width: 319px;
  font-family: 'FuturaPT Bold', sans-serif;
  color: ${Colors.white};
  font-size: 1rem;
  text-align: left;
`;
export const HeaderSubText = styled.h2`
  font-family: 'FuturaPT Bold',sans-serif;
  color: ${Colors.primary};
  font-size: 1.5rem;
  line-height: 1;
  text-align:left;

  span{
    margin-top: -15px;
    color: ${Colors.white};
    font-family: 'FuturaPT Bold',sans-serif;
  }
}
`;
