import React, { useState } from 'react';
import { CalculatorContext } from './CalculatorContext';

const CalculatorProvider = ({ children }) => {
  const [origin, setOrigin] = useState(0);
  const [destiny, setDestiny] = useState('');
  const [distance, setDistance] = useState('0');
  const [consumo, setConsumo] = useState(0);
  const [constante, setConstante] = useState(0);
  const [velocity, setVelocity] = useState(50);
  const [economic, setIsEconomic] = useState(true);
  const [intenseTraffic, setIsIntenseTraffic] = useState(false);
  const [doubleDestiny, setDoubleDestiny] = useState(false);
  const [chargerPortraitTime, setChargerPortaitTime] =
    useState(0);
  const [chargerFastTime, setChargerFastTime] = useState(0);
  const [chargerUltraFastTime, setChargerUltraFastTime] =
    useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // ESTADOS USADOS APENAS PARA RETORNO VISUAL AO USUARIO:
  const [userConsumoDisplay, setUserConsumoDisplay] =
    useState(100);
  const [autonomyFullDisplay, setAutonomyFullDisplay] =
    useState();
  const [userDistanceDisplay, setUserDistanceDisplay] =
    useState(0);
  const [relativeConsume, setRelativeConsume] = useState();

  return (
    <CalculatorContext.Provider
      value={{
        origin,
        setOrigin,
        destiny,
        setDestiny,
        distance,
        setDistance,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
