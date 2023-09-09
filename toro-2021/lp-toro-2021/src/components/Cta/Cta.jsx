/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { Button } from '..';
import { Colors } from '../../styles';
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

    const heightFooter = document.querySelector('footer')
      .offsetHeight;

    const scrollBottom =
      heightDocument -
      window.screen.height -
      scrollTop -
      heightFooter;

    setIsActive(scrollBottom > 0);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <Container isVisible={isVisible} isActive={isActive}>
      <div>
        <Button
          datalayer={'MenuFlutuante_ClicouCTA'}
          datalayername={'compre-a-sua'}
          br={4}
          fs={18}
          bg={Colors.primary}
          color={Colors.white}
          jc={'center'}
          to="https://www.fiat.com.br/compre/fiat-toro.html"
          >
          Compre a sua
        </Button>

        <Button
          datalayer={'MenuFlutuante_ClicouCTA'}
          datalayername={'monte-a-sua'}
          br={4}
          bg={Colors.green}
          color={Colors.white}
          fs={18}
          jc={'center'}
          to="https://toro.fiat.com.br/monte.html"
        >
          Monte a sua
        </Button>
      </div>
    </Container>
  );
};

export default CallToAction;
