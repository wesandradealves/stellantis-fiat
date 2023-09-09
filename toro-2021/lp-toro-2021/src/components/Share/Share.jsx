/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Container, CloseContainer, IconsContainer, Content } from './styles';
import * as images from '../../assets';
import DataShare from '../../mocks/DataShare';

const Share = ({isVisible, closeBox, href, download}) => {
  const [scrollTop, setScrollTop] = useState();
  const [isActive, setIsActive] = useState(true);
  const [copied, setCopied] = useState(false);

  function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true)
  }

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
        <Content>
            <CloseContainer>
                <div>
                <button onClick={closeBox}>
                    <img src={images.close2} alt="Close" ></img>
                </button>
                <span>Salvar ou enviar essa versão</span>
                </div>
            </CloseContainer>
            <IconsContainer>
            {DataShare.map(item => (
                <div key={`datashare-${item.id}`}>
                {item.download ? (
                 <>   
                 <a rel="noreferrer" href={href} download={download}><img src={item.icon} alt={`share-${item.title}`}/> </a>
                 <span>{item.title}</span>
                 </>
                ) : (
                 <>   
                 <a href={item.url} rel="noreferrer"><img src={item.icon} alt={`linkshare-${item.title}`}/></a>
                 <span>{item.title}</span>
                 </>
                )}
                </div>
               )
            )}
            <div>
              <button onClick={() => copy()}><img src={images.copiarlink} alt="copiarlink"/></button>
              <span>{!copied ? "Link" : "Copiado"}</span>    
            </div>
            </IconsContainer>
        </Content>
    </Container>
  );
};

export default Share;
