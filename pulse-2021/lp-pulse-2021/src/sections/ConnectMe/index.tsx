import { FC } from 'react';
import { Conditional, HighlightedText, ScrollToAnchor, SectionElement } from '@/components';
import { Chevron } from '@/components/SvgComponents';
import ConnectMeSvg from '@/components/SvgComponents/ConnectMe';
import { dataMenuLabels } from '@/mocks/menu';
import { observer } from 'mobx-react-lite';
import styles from './ConnectMe.module.scss';
import SwipersDesktop from './SwipersDesktop';
import SwipersMobile from './SwipersMobile';

const reference = dataMenuLabels().find((c) => c.slug === 'connect-me');

const ConnectMe: FC = observer(() => {
  return (
    <SectionElement
      id="ConnectMe"
      navReference={reference}
      heightBehaviour="soft"
      noPadding
      className={styles.container}
    >
      <ScrollToAnchor
        reference={reference}
        className={styles.scrollCta}
        pageSubsection="fiat-connect-me"
        title="Conheça os Serviços do Fiat Connect //// Me"
      >
        <div>
          <HighlightedText padding="2px 20px">
            Conheça os serviços do
          </HighlightedText>
          <ConnectMeSvg />
        </div>
        <Conditional notOn="mobile">
          <Chevron color="#EDEDE3" />
        </Conditional>
      </ScrollToAnchor>
      <Conditional
        desktop={(
          <SwipersDesktop />
        )}
        mobile={(
          <SwipersMobile />
        )}
      />
    </SectionElement>
  );
});

export default ConnectMe;
