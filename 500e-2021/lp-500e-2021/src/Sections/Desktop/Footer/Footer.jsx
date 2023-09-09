import React from 'react';
import {
  Container,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  Logo,
  SocialMedias,
} from './styles';
import * as images from '../../../assets';
import { cliqueIconeRedeSocial_DataLayer } from '../../../tracks';

const Medias = ({ socialMedias }) => {
  return (
    <Container id="cta-container">
      <SocialMedias>
        {socialMedias?.map(item => {
          let icon;
          switch (item.name) {
            case 'facebook':
              icon = <Facebook />;
              break;

            case 'Instagram':
              icon = <Instagram />;
              break;

            case 'Twitter':
              icon = <Twitter />;
              break;

            case 'Youtube':
              icon = <Youtube />;
              break;

            default:
              break;
          }

          return (
            <a
              onClick={() =>
                cliqueIconeRedeSocial_DataLayer(item.name)
              }
              key={item.id}
              href={item.link}
              target="blank"
            >
              {icon}
            </a>
          );
        })}
      </SocialMedias>
      <Logo>
        {' '}
        <img src={images.Flag} alt="Logo" />
      </Logo>

      <div className="privacy-text-div">
        <p>
          Seus dados pessoais poderão ser utilizados pela Fiat e
          pela Concessionária para fins de envio de comunicações
          de marketing de produtos e serviços relacionados à
          Fiat. A Fiat compartilhará seus dados pessoais com a
          instituição financeira parceira e com demais empresas
          do grupo (Jeep, Chrysler, Dogde e Ram) para viabilizar
          o envio de uma proposta de financiamento do veículo de
          seu interesse.
        </p>
        <p>
          {' '}
          Para mais detalhes sobre como desativar o recebimento
          de comunicações de marketing e outras informações sobre
          como a Fiat trata seus dados pessoais, acesse a
          Política de Privacidade <a href="https://www.fiat.com.br/politica-de-privacidade.html" className='privacy-link'>disponível aqui.</a>
        </p>
      </div>
    </Container>
  );
};

export default Medias;
