import { FC, useEffect } from 'react';
import { useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';
import { Button } from "../";
import styles from './styles.module.scss';

const Lgpd: FC = () => {
  const [showLgdp, setShowLgpd] = useState(true);
  
  useEffect(() => {
    const cookie = Boolean(getCookie('lgpd-cronos'))
    setShowLgpd(cookie)
}, [showLgdp])
  
  return (
    <>
      {!showLgdp && (
        <div className={styles.containerLgpd}>
          <div className={styles.wrapperLgpd}>
              <h2>RESPEITAMOS A SUA PRIVACIDADE</h2>
              <p>Informamos que utilizamos cookies que nos permitem fornecer funcionalidades como segurança, acessibilidade e gerenciamento de rede. Nosso site também pode usar cookies de terceiros para enviar publicidade mais relevante para você. Se quiser saber mais sobre os cookies que usamos para garantir uma melhor experiência em nosso site, acesse nossa <a href="https://www.fiat.com.br/politica-de-privacidade.html" target="_blank" rel="noreferrer">Política de Privacidade.</a></p>
          </div>
          <Button onClick={() => {
            setCookie('lgpd-cronos', true)
            setShowLgpd(true);
          }}>
            Fechar
          </Button>
        </div>
      )}
    </>
  )
};

export default Lgpd;
