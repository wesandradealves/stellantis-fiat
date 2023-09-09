import React from 'react';
import {
  Container,
  Knowmore,
  Arrow,
  AboutCar,
  Content,
  LogoBox,
  Discovery,
  ReactAnchorLink,
} from './styles';
import Button from '../../../components/Button';
import * as images from '../../../assets';
import { Colors } from '../../../styles';
import { cliqueCTA_DataLayer } from '../../../tracks';

const About = () => {
  return (
    <Container id="compre-o-seu">
      <Knowmore id="aboutCarArrowAnchor">
        <span>
          Saiba tudo sobre o novo <strong>Fiat 500e</strong>
        </span>
        <ReactAnchorLink href="#aboutCarArrowAnchor">
          <Arrow href="#" color={Colors.blue100} />
        </ReactAnchorLink>
      </Knowmore>
      <Content>
        <AboutCar
          alt="sobre"
          src={images.AboutFold.AboutCarMobile}
        />
        <p>O seu novo carro elétrico já está te esperando.</p>
        <Button
          onClick={() =>
            cliqueCTA_DataLayer('eu-quero', 'compre-o-seu')
          }
          width={324}
          height={48}
          to={
            'https://www.fiat.com.br/compre/fiat-500e.html?utm_source=receptiva_500e&utm_medium=segunda_dobra_section&utm_campaign=garantir_o_meu_fiat_500e'
          }
          bg={Colors.blue200}
          color={Colors.beige100}
          jc="center"
          target="_blank"
        >
          Garantir o meu Fiat 500e
        </Button>
      </Content>
      <LogoBox>
        <img src={images.FiatWhite} alt="Brand white color" />
      </LogoBox>

      <Discovery>
        <span>
          Descubra como é dirigir um carro{' '}
          <strong>100% elétrico</strong>
        </span>
        <ReactAnchorLink
          id="RecursosEletricosAnchorLink"
          href="#RecursosEletricosAnchorLink"
        >
          <Arrow href="#" color={Colors.black200} />
        </ReactAnchorLink>
      </Discovery>
    </Container>
  );
};

export default About;
