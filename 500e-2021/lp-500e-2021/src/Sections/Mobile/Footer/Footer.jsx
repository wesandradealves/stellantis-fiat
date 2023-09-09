import React from 'react';
import DataFooter from '../../../mocks/DataFooter';
import DataSocialMedias from '../../../mocks/DataSocialMedias';
import { Colors } from '../../../styles';
import {
  Container,
  Medias,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
} from './styles';
import Button from '../../../components/Button';
import {
  cliqueCTA_DataLayer,
  cliqueIconeRedeSocial_DataLayer,
} from '../../../tracks';

const Footer = () => {
  return (
    <>
      <Container>
        {DataFooter.map(item => (
          <Button
            onClick={() =>
              cliqueCTA_DataLayer(item.name, 'ctas', 'footer')
            }
            key={item.id}
            to={item.link}
            bg={Colors.blue100}
            height={50}
            target={item.link !== '/#/agende' && '_blank'}
          >
            <p>{item.name} </p>
          </Button>
        ))}

        <Medias>
          {DataSocialMedias.map(item => {
            let icon;
            switch (item.name) {
              case 'facebook':
                icon = <Facebook />;
                break;
              case 'Twitter':
                icon = <Twitter />;
                break;

              case 'Instagram':
                icon = <Instagram />;
                break;

              case 'Youtube':
                icon = <Youtube />;
                break;

              default:
            }

            return (
              <a
                key={item.id}
                onClick={() =>
                  cliqueIconeRedeSocial_DataLayer(item.name)
                }
                href={item.link}
                target="blank"
              >
                {icon}
              </a>
            );
          })}
        </Medias>

        <div className="text-privacy-div">
          Seus dados pessoais poderão ser utilizados pela Fiat e
          pela Concessionária para fins de envio de comunicações
          de marketing de produtos e serviços relacionados à
          Fiat. A Fiat compartilhará seus dados pessoais com a
          instituição financeira parceira e com demais empresas
          do grupo (Jeep, Chrysler, Dogde e Ram) para viabilizar
          o envio de uma proposta de financiamento do veículo de
          seu interesse. Para mais detalhes sobre como desativar
          o recebimento de comunicações de marketing e outras
          informações sobre como a Fiat trata seus dados
          pessoais, acesse a Política de Privacidade <a href="https://www.fiat.com.br/politica-de-privacidade.html" className='privacy-link'>disponível aqui.</a>
        </div>
      </Container>
    </>
  );
};

export default Footer;
