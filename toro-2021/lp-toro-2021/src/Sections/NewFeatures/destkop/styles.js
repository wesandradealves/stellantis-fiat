import styled from 'styled-components';
import {Colors} from '../../../styles';
import {Carousel as CarouselContent} from 'react-responsive-carousel';
//import BackgroundSection from '../../../assets/images/NewFeatures/desktop/sound-design-painel@3x.png'
import * as images from '../../../assets/images/NewFeatures/index';


export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  //height: 80vh;
  margin-top: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${images.BackgroundSection});
  position: relative;

  @media (min-width: 1358px) {
    
  }

  .imgBackground {
    position: absolute;
    /* z-index: -1; */
    height: 100%;
    width: 100%;
    display: inline-block;
    pointer-events: none;
    object-fit: contain;
  }
  
  .textHeaderArea {
    display:flex;
    flex-direction: column;
    text-align: center;
    align-self: flex-start;
    position: relative;
    top: 1rem;
    left: 4.5rem;
    @media (min-width: 1439px) {
      left: 3rem;
    }
 

    .bar{
      height: 3px;
      width: 25%;
      background-color: #209051;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    h2{
      font-size: 2rem;
      line-height: 0.85;
    }

  }
`;

export const Carousel = styled(CarouselContent)`
  height:100%;
    width: 30%;

  .slider-wrapper{
    min-height: 60vh;
    height:100%;
  }
  .slider-wrapper.axis-horizontal .slider{
    height:100%;
  }
  .carousel-slider{
    height:100%;
    //padding-bottom:15rem;
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
    bottom: 20%;
    padding-left: 10px;
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
      
    }
  }

  .MainImageContainer {
    width: 100%;
    padding-left: 8rem;
    iframe{
      width: 90%!important;
      max-height:85%;
    }
  }

  .BoxDescription {
    margin-left: 20px;
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
      margin-top: 35px;
    //  width: 320px;
      line-height: 1;
      color: ${Colors.white};
    }
  }

  @media (min-width: 1639px) {
    // width:100%;
    .BoxDescription {
      margin-top: 5%;
    }
  }
`

export const HeaderText = styled.h1`
  max-width: 319px;
  font-family: 'FuturaPT Bold', sans-serif;
  color: ${Colors.white};
  font-size: 1rem;
  text-align: left;
`

export const HeaderSubText = styled.h2`
  font-family: 'FuturaPT Bold',sans-serif;
  color: ${Colors.primary};
  font-size: 2.5rem;
  line-height: 1;
  text-align:left;

  span{
    margin-top: -15px;
    color: ${Colors.white};
    font-family: 'FuturaPT Bold',sans-serif;
  }
`;

export const ImageContainer = styled.div`
   display: flex;
   padding-bottom: 6rem;
   width: 100%;
   .featuresImg {
    width: 33.3% !important;
    object-fit: contain;
    margin-right: 10px;
    border-radius: 15px;
    position:relative ;
   
    @media (min-width: 1660px) {
      max-width: 270px;
    }

    &.anterior{
      display: none;
    }
    &.atual{
      border: 1px solid #fff;
    }
   }
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  
    justify-content: space-around;
  
  .MainImageContainer {
    width: 50%;

    @media (min-width: 1439px) {
      width: 60%;
    }
  }
`;
