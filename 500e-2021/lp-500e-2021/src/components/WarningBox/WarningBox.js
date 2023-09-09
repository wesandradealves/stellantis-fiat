/* eslint-disable */
import React, { useState } from 'react';
import DisclaimerLgpd from './DisclaimerLgpd/DisclaimerLgpd.js';
import { ContainerBox } from './style.js';

export const WarningBox = () => {
  const [visible, setInvisible] = useState(true);

  return (
    <div>
      <DisclaimerLgpd />

      {/* <ContainerBox>
        <div style={{ display: visible ? null : 'none' }}>
          <div className="container">
            <h3 className="text">
              Muita, mas muita gente mesmo quer uma{' '}
              <p>Nova Fiat Toro Ranch.</p> Por conta disso,
              infelizmente essa versão do carro pode demorar de
              90 a 150 dias para chegar na sua garagem. Mas fique
              tranquilo, aproveite para conhecer tudo sobre a
              nova picape do Brasil.
            </h3>
            <button
              className="button"
              onClick={() => setInvisible(false)}
            >
              FECHAR
            </button>
          </div>
        </div>
      </ContainerBox> */}
    </div>
  );
};

export default WarningBox;
