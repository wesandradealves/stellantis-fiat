import {FC} from "react";
import Modal from "@/prox/components/Modal";
import {useMobxStores} from "@/project/store";
import Store from "@/project/store/Store";
import {observer} from "mobx-react-lite";
import DataLayer from "@/prox/utils/DataLayer";
import {heroAllSlides} from "../data/heroDetails";

const ModalHero: FC = observer(() => {
  const store: Store = useMobxStores();
  return (
      <Modal
          id="modalHeromodal"
          visible={store.modalHero}
          onClose={() => {
            DataLayer.clickEvent({
              elementCategory: 'icone',
              element: 'fechar',
              pageSection: 'fiat-scudo',
              pageSubsection: heroAllSlides[store.pageX >= 1200
                  ? (store.featuresSwiperController?.activeIndex ?? 0)
                  : store.featuresMobileSwiperController?.activeIndex ?? 0
                  ]?.title ?? '',
            });
            store.setModalHero(false);
          }}
      >
      </Modal>
  );
});

export default ModalHero;