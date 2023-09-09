import React, { useState, useContext, useEffect } from 'react';
import { CalculadoraContext } from '../../../context/CalculadoraContext';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosWarning } from 'react-icons/io';
import Modal from 'react-modal';

import {
  HeaderModalCalc,
  ModalContent,
  ButtonClose,
  Container,
} from './styles';

export default function ModalCalc() {
  const {
    modalIsOpen,
    setModalIsOpen,
    economic,
    distance,
    consumo,
    autonomyFullDisplay,
    setUserConsumoDisplay,
    setUserDistanceDisplay,
    setDistance,
    setOrigin,
    setDestiny,
  } = useContext(CalculadoraContext);

  const [cargasDisplay, setCargasDisplay] = useState();
  const [directionDisplay, setDirectionDisplay] = useState(0);
  const [roundDistace, setRoundDistance] = useState(0);

  function closeModal() {
    setModalIsOpen(false);
  }

  const topDistance = window.innerWidth < 768 ? '50%' : '50%';
  const leftDistance = window.innerWidth < 768 ? '50%' : '75%';

  const modalWidth = window.innerWidth < 768 ? '80%' : '40%';

  const customStyles = {
    content: {
      width: modalWidth,
      height: window.innerWidth < 768 ? '21%' : '40%',
      padding: '0',
      top: topDistance,
      left: leftDistance,
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#E9E9DF',
      border: '0',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      zIndex: '100000',
    },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleSetDirectionDislplay() {
    switch (economic) {
      case true:
        return setDirectionDisplay('sherpa');
      default:
        return setDirectionDisplay('normal');
    }
  }

  useEffect(() => {
    handleSetDirectionDislplay();
    let round = Math.round(distance);
    setRoundDistance(round);

    if (consumo > 100 && consumo < 200) {
      return setCargasDisplay(2);
    } else if (consumo > 200 && consumo < 300) {
      return setCargasDisplay(3);
    } else if (consumo > 300 && consumo < 400) {
      return setCargasDisplay(4);
    } else {
      return setCargasDisplay('4+');
    }
  }, [distance, consumo, handleSetDirectionDislplay]);

  useEffect(() => {
    if (modalIsOpen === false) {
      let desInput = document.getElementById('destiny-input');
      desInput.value = '';
      let oriInput = document.getElementById('origin-input');
      oriInput.value = '';
      
      setUserConsumoDisplay(100);
      setUserDistanceDisplay(autonomyFullDisplay);
      setDistance(0);
      setOrigin('');
      setDestiny('');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpen]);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Container>
          <HeaderModalCalc>
            <IoIosWarning className="warning-icon" />
            <ButtonClose onClick={closeModal}>
              <AiOutlineClose />
            </ButtonClose>
          </HeaderModalCalc>

          <ModalContent>
            <p>
              Seu trajeto de <strong>{roundDistace}km</strong>{' '}
              superou a autonomia de <br />{' '}
              <strong>{autonomyFullDisplay}km</strong> da bateria
              no modo de direção{' '}
              <strong>{directionDisplay}.</strong>
            </p>
            <p>
              Você precisa carregar{' '}
              <strong>
                {cargasDisplay} cargas sua bateria.
              </strong>
            </p>
          </ModalContent>
        </Container>
      </Modal>
    </>
  );
}
