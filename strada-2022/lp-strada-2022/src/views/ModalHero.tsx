import { FC } from 'react';
import Features from '@/components/Features';
import Modal from '@/components/Modal';
import { useMobxStores } from '@/store';
import StradaStore from '@/store/StradaStore';
import { observer } from 'mobx-react-lite';
import DataLayer from '@/utils/DataLayer';
import { heroAllSlides } from '@/mocks/heroDetails';

const ModalHero: FC = observer(() => {
  const store: StradaStore = useMobxStores();

  return (
    <Modal
      id="modalHeromodal"
      visible={store.modalHero}
      onClose={() => {
        DataLayer.clickEvent({
          elementCategory: 'icone',
          element: 'fechar',
          pageSection: 'fiat-strada',
          pageSubsection: heroAllSlides[store.pageX >= 1200
            ? (store.featuresSwiperController?.activeIndex ?? 0)
            : store.featuresMobileSwiperController?.activeIndex ?? 0
          ]?.title ?? '',
        });
        store.setModalHero(false);
      }}
    >
      <Features />
    </Modal>
  );
});

export default ModalHero;