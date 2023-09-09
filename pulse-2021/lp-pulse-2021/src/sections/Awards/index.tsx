import { FC } from 'react';
import styles from './Awards.module.scss';
import { stamps } from '@/assets';
import { Conditional } from '@/components';

const Awards: FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Text}>
        <h2>
          Um troféu feito para você
          <Conditional notOn="mobile">
            <br />
          </Conditional>
          você pisar fundo.
        </h2>
        <h4>Fiat Pulse, o lançamento mais premiado de 2021.</h4>
      </div>
      <div className={styles.Stamps}>
        <img
          alt="Prêmio 2021 - Destaque do ano 2021 - SUV Compacto"
          src={stamps.stampDestaqueAno}
        />
        {/*selo a ser trocado*/}
        <img
          alt="Prêmio 2021 - Montadora do Ano - FIAT"
          src={stamps.stampMaiorMontadora}
        />
        <img
          alt="Prêmio 2020 - Maior Valor de Revenda Autos - SUV Destaque"
          src={stamps.stampSuvCompacto}
        />
      </div>
    </div>
  );
};

export default Awards;
