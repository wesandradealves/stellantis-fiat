import React from 'react';
import 'flickity-as-nav-for';
import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';
import { Button, Container, TitleBox } from './styles';
import Details from '../Details';
import DataLayer from '../Track/DataLayer/DataLayer';

const testimonialFlickityOptions = {
  asNavFor: '.carousel.carousel-main',
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
  pageDots: false,
};

const TabsMobile = ({ data }) => {
  const flickityOptions = {
    pageDots: false,
    prevNextButtons: false,
    draggable: false,
    arrowShape:
      'M100,47.564v4.632c0,3.014-2.532,5.609-5.546,5.609H27.382l21.273,21.2   c1.03,1.028,1.595,2.33,1.595,3.791c0,1.464-0.564,2.836-1.595,3.863l-3.273,3.275c-1.029,1.027-2.4,1.594-3.863,1.594   c-1.464,0-2.836-0.565-3.865-1.594L1.595,53.877C0.561,52.845-0.004,51.467,0,49.995c-0.004-1.464,0.561-2.84,1.595-3.874   l36.059-36.056c1.029-1.029,2.402-1.594,3.865-1.594s2.834,0.569,3.863,1.598l3.273,3.275c1.03,1.032,1.595,2.416,1.595,3.88   c0,1.463-0.564,2.858-1.595,3.887L27.619,42.192h66.916l-0.156-0.034C97.393,42.159,100,44.553,100,47.564',
  };

  return (
    <>
      <TitleBox>
        {/* <h1>A NOVA TORO 2021</h1> */}
        <span>TEM TUDO QUE VOCÊ PRECISA PARA UMA NOVA AVENTURA</span>
      </TitleBox>
      <Container id="tudo-sobre-a-toro">
        <Flickity
          className="carousel carousel-nav"
          elementType={'div'}
          options={testimonialFlickityOptions}
          asNavFor=".carousel-main"
        >
          {data?.map(sheet => (
            <Button
              key={`sheet-${sheet.brand}`}
              onClick={() =>
                DataLayer.push(
                  'TudoSobre_ClicouFeature',
                  sheet.brand
                    .replace(/\s/g, '-')
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLocaleLowerCase(),
                )
              }
            >
              {sheet.brand}
            </Button>
          ))}
        </Flickity>

        <Flickity
          id="main-flickity"
          className="carousel carousel-main"
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          freeScroll={true}
          asNavFor=".carousel-nav"
          draggable={false}
        >
          {data?.map((sheet, index) => (
            <Details
              key={`details-${index}-${sheet.id}`}
              data={sheet.data}
            />
          ))}
        </Flickity>
      </Container>
    </>
  );
};

export default TabsMobile;
