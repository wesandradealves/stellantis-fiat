import { brand, ui } from '@/project/assets';
import Store from '@/project/store/Store';
import {useMobxStores} from '@/project/store';
import { Conditional, CTAButton } from '@/prox/components';
import { PAGE_TITLE } from '@/project/constants';
import { dataSocial } from '@/project/data/footer';
import { dataMenuButtons } from '@/project/data/menu';
import DataLayer from '@/prox/utils/DataLayer';
import { FC } from 'react';
import styles from './index.module.scss';

const Footer: FC = () => {
  const store: Store = useMobxStores();

  return (
    <footer className={styles.container}>
      {!!dataMenuButtons.length && (
        <Conditional notOn="desktop">
          <div className={styles.graphismBlue}>
            <img src={brand.graphismBlue} alt="" />
          </div>
          <div className={styles.conditional}>
            <div className={styles.buttonsHolder}>
              {dataMenuButtons.map((item) => {
                const click = (p_form:boolean|undefined) => {
                  if(p_form){
                    store.setModalHero(p_form)
                  }

                  DataLayer.clickEvent({
                    element: item.label,
                    elementCategory: 'cta',
                    pageSection: 'footer',
                    pageSubsection: 'ctas',
                  });
                };
                return item.form ? (
                  <CTAButton
                    key={`footer-${item.id}`}
                    className={styles.menuButton}
                    text={item.label}
                    title={item.label}
                    iconCode={item.iconCode}
                    handleAuxClick={() => click(item.form)}
                    handleClick={() =>click(item.form)}
                  />
                  ) :
                  (
                  <CTAButton
                    key={`footer-${item.id}`}
                    href={item.url}
                    className={styles.menuButton}
                    text={item.label}
                    title={item.label}
                    iconCode={item.iconCode}
                    handleAuxClick={() => click(item.form)}
                    handleClick={() =>click(item.form)}
                  />
                  );
              })}
            </div>
          </div>
        </Conditional>
      )}
      <Conditional notOn={'mobile'}>
      <div className={styles.social}>
        {dataSocial.map((social) => {
          const tracking = () => {
            DataLayer.clickEvent({
              element: social.title,
              elementCategory: 'icone',
              pageSection: 'footer',
              pageSubsection: 'social',
            });
          };
          return (
            <a
              key={social.id}
              target="_blank"
              href={social.url}
              title={social.title}
              data-before={social.icon}
              onClick={() => {
                tracking();
              }}
              onAuxClick={() => {
                tracking();
              }}
            >
              {social.title}
            </a>
          );
        })}
      </div>
      </Conditional>
      <Conditional notOn={'desktop'}>
      <div className={styles.socialMobile}>
        {dataSocial.map((social) => {
          const tracking = () => {
            DataLayer.clickEvent({
              element: social.title,
              elementCategory: 'icone',
              pageSection: 'footer',
              pageSubsection: 'social',
            });
          };
          return (
            <a
              key={social.id}
              target="_blank"
              href={social.url}
              title={social.title}
              data-before={social.icon}
              onClick={() => {
                tracking();
              }}
              onAuxClick={() => {
                tracking();
              }}
            >
              {social.title}
            </a>
          );
        })}
      </div>
      </Conditional>
      
      <Conditional notOn="mobile">
        <div className={styles.footerIbamaDesktop}>
          <p>
            A disponibilidade de itens de série, opcionais e
            acessórios pode variar de acordo com a versão
            escolhida. Verifique o Monte seu Carro.
            
            Imagens meramente ilustrativas.
          </p>
        
        </div>
      </Conditional>
      <Conditional notOn="desktop">
        <div className={styles.footerIbamaMobile}>
        <p>
            A disponibilidade de itens de série, opcionais e
            acessórios pode variar de acordo com a versão
            escolhida. Verifique o Monte seu Carro.
            
            Imagens meramente ilustrativas.
          </p>
        </div>
      </Conditional>
        <Conditional notOn={'mobile'}>
      <div className={styles.brandFooter}>
        <div className={styles.gapFooter}>
          <img src={brand.logoFooter} alt={PAGE_TITLE} />
        </div>
      </div>
        </Conditional>
        <Conditional notOn={'desktop'}>
      <div className={styles.brandFooterMobile}>
        <div className={styles.gapFooter}>
          <img src={brand.brandFooterMobile} alt={PAGE_TITLE} />
        </div>
      </div>
        </Conditional>
    </footer>
  );
};

export default Footer;
