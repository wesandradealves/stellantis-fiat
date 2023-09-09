import React from 'react';
//import { Button } from '../../../components';
import {
  Container,
  ContentContainer,
  //Car,
  TextContainer,
  Title,
  NextText,
  TitleSecond,
} from './styles';
//import { Colors } from '../../../styles';
//import * as images from '../../../assets';
// import { cliqueCTA_DataLayer } from '../../../tracks';

const SecondFold = () => {
  return (
    <Container id={'compre-o-seu'}>
      <ContentContainer>
        {/* <Car alt="car" src={images.AboutFold.AboutCarDesktop} /> */}
        <TextContainer>
          <Title>
            O seu novo carro elétrico <br /> já está te
            esperando.
          </Title>
          {/* <Button
            onClick={() =>
              cliqueCTA_DataLayer('eu-quero', 'compre-o-seu')
            }
            bg="red"
            color="red"
            jc="center"
            width={400}
            to={'https://www.fiat.com.br/compre/fiat-500e.html'}
            target="_blank"
          >
            Garantir o meu Fiat 500e
          </Button> */}
        </TextContainer>
      </ContentContainer>
      {/* <Footer>
        <img src={images.FiatWhite} alt="Fiat White" />
      </Footer> */}
      <TitleSecond>
        {/* <img src={images.FiatWhite} alt="Fiat White" /> */}
        <NextText>
          Descubra como é dirigir um carro{' '}
          <strong>100% elétrico</strong>
        </NextText>

        {/* <ReactAnchorLink
            id="carouselServiceAnchorLink"
            href="#carouselServiceAnchorLink"
          >
            <Arrow href="#" />
          </ReactAnchorLink> */}
      </TitleSecond>
    </Container>
  );
};

export default SecondFold;
