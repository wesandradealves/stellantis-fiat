import React, { useContext, useState, useEffect } from 'react';
import ProgressBar from '../../ProgressBar';
import { CalculadoraContext } from '../../../context/CalculadoraContext';

import { Container } from './styles';

export default function ProgressBarCalc() {
  const {
    chargerPortraitTime,
    chargerFastTime,
    chargerUltraFastTime,
  } = useContext(CalculadoraContext);

  const [portraitTimeDisplay, setPortraitTimeDisplay] =
    useState('0h00');
  const [fastTimeDisplay, setFastTimeDisplay] = useState('0h00');
  const [ultraFastTimeDisplay, setUltraFastTimeDisplay] =
    useState('0min');

  const converter = minutos => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = `00${horas}`.slice(-2);
    const textoMinutos = `00${min}`.slice(-2);

    if (minutos < 60) {
      return `${Math.round(minutos)}min`;
    } else {
      return `${textoHoras}h${textoMinutos}`;
    }
  };

  useEffect(() => {
    setPortraitTimeDisplay(converter(chargerPortraitTime));
    setFastTimeDisplay(converter(chargerFastTime));
    setUltraFastTimeDisplay(converter(chargerUltraFastTime));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    chargerPortraitTime,
    chargerFastTime,
    chargerUltraFastTime,
  ]);

  return (
    <>
      <Container>
        <div className="chargers-responses">
          <div className="response">
            <ProgressBar
              id="progress-portatil"
              width="20%"
              height="100%"
              porcentage={chargerPortraitTime}
              maxValue={1500}
            />
            <div className="response-content">
              <h3>
                Carregador <br /> Portátil
              </h3>
              <p>
                Carregador <br />
                de série 220v
              </p>
              <span>{portraitTimeDisplay}</span>
            </div>
          </div>
          <div className="response">
            <ProgressBar
              id="progress-rapido"
              width="20%"
              height="100%"
              porcentage={chargerFastTime}
              maxValue={375}
            />
            <div className="response-content">
              <h3>
                Carregador <br /> Rápido
              </h3>
              <p>
                Carregador <br />
                11kW
              </p>
              <span>{fastTimeDisplay}</span>
            </div>
          </div>
          <div className="response">
            <ProgressBar
              id="progress-ultra-rapido"
              width="20%"
              height="100%"
              porcentage={chargerUltraFastTime}
              maxValue={48}
            />
            <div className="response-content">
              <h3>
                Carregador <br /> Ultra Rápido
              </h3>
              <p>
                Carregador <br />
                de 85kW
              </p>
              <span>{ultraFastTimeDisplay}</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
