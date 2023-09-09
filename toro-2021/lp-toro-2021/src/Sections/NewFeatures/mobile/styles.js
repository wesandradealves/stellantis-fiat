import styled from 'styled-components';
import {Colors} from '../../../styles';
import {Carousel as CarouselContent} from 'react-responsive-carousel';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
  position: relative;
  
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
    height: 100%;
    text-align: center;
    top: -6rem;
    width: 78%;
    left: 11%;
    align-self: flex-start;
    position: absolute;
    justify-content: flex-end;
    .bar{
      height: 3px;
      width: 25%;
      background-color: #209051;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .testeImgText{
        color: #fff;
        text-align: justify;
    }
  }
  
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
    background-color: ${Colors.primary} !important;
    //left:15%;
    width: 35px!important;
    height: 35px!important;
  }
  button:hover{
    background-color:${Colors.primary}!important;
  }

  ul.control-dots {
    bottom: 7%;
    display:flex;
    margin-left: -20px;
    justify-content: center;
  }

  .dot {
    opacity: 1 !important;
    position: relative;
    left: 5%;
    border-radius: 0%!important;
    width: 25px!important;
    height: 5px!important;
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
    width: 90%;
    overflow: hidden;
    margin: 0 auto;
    
    img{
      border: 2px solid white;
    }
    iframe{
      width: 100%!important;
      max-height:100%;
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

  /* @media (min-width: 1639px) {
    width:100%;
    .BoxDescription {
      margin-left: 115px;
      margin-top: 5%;
    }
  } */
`

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
   /*    
   padding-bottom: 6rem;
   width: 66%;
  
    */
   .featuresImg {
    //width: auto !important;
    object-fit: contain;
        margin-right: 10px;
    border-radius: 15px;
    
    &.selected {
    border: 1px solid #FFF;
   
    }
   
   }
   


`;

