import styles from './Awards.module.scss';
import * as images from '../../assets';

const Awards = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.text}>
        <h2>Esse troféu você não vai ter medo de sujar.</h2>
        <h4>Fiat Toro, a picape mais premiada de 2021.</h4>
      </div>
      <div className={styles.stamps}>
        <img
          alt="Prêmio 2020 - Maior Valor de Revenda Autos - SUV Destaque"
          src={images.AwardResale}
        />
        <img
          alt="Prêmio 2020 - Maior Valor de Revenda Autos - SUV Compacto"
          src={images.AwardPicape}
        />
        <img
          alt="Prêmio 2020 - Maior Valor de Revenda Autos - SUV Compacto"
          src={images.AwardAssembly}
        />
      </div>
    </div>
  );
};

export default Awards;
