/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import { cliqueCTA_DataLayer } from '../../../tracks';
import { Container } from './styles';

const CallToAction = () => {
  const [scrollTop, setScrollTop] = useState();
  const [isActive, setIsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const userScroll = () => {
      let timer = null;

      window.addEventListener(
        'scroll',
        () => {
          if (timer !== null) {
            clearTimeout(timer);
            setIsVisible(false);
          }
          timer = setTimeout(() => {
            setIsVisible(true);
          }, 500);
        },
        false,
      );
    };
    userScroll();
  }, []);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    const heightDocument = document.body.clientHeight;

    const heightFooter =
      document.querySelector('footer').offsetHeight;

    const scrollBottom =
      heightDocument -
      window.screen.height -
      scrollTop -
      heightFooter;

    setIsActive(scrollBottom > 0);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <Container id='cta-container' isVisible={isVisible} isActive={isActive}>
      <div>
        <Button
          style={{ width: '100%' }}
          onClick={() => cliqueCTA_DataLayer('monte-o-seu', 'float')}
          br={4}
          fs={16}
          bg="#1C8C9D"
          color="#FFFFFF"
          jc={'center'}
          to="https://500e.fiat.com.br/monte.html"
        >
          Monte o seu
        </Button>

        <Button
          style={{ margin: '0px 0px 0px 8px' }}
          onClick={() => cliqueCTA_DataLayer('pre-venda-500e', 'float')}
          br={4}
          bg="#1FC1D5"
          color="#FFFFFF"
          fs={16}
          jc={'center'}
          to="https://500e.fiat.com.br/monte.html"
        >
          Compre o seu
        </Button>
      </div>
    </Container>
  );
};

export default CallToAction;
