import React, { useState, createContext } from 'react';

export const CalculadoraContext = createContext('');

export default function CalculadoraProvider({ children }) {
  const [origin, setOrigin] = useState(0);
  const [destiny, setDestiny] = useState(0);
  const [distance, setDistance] = useState();
  const [consumo, setConsumo] = useState();
  const [constante, setConstante] = useState();
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
    <CalculadoraContext.Provider
      value={{
        distance,
        setDistance,
        consumo,
        setConsumo,
        constante,
        setConstante,
        origin,
        setOrigin,
        destiny,
        setDestiny,
        velocity,
        setVelocity,
        economic,
        setIsEconomic,
        intenseTraffic,
        setIsIntenseTraffic,
        doubleDestiny,
        setDoubleDestiny,
        chargerPortraitTime,
        setChargerPortaitTime,
        chargerFastTime,
        setChargerFastTime,
        chargerUltraFastTime,
        setChargerUltraFastTime,
        modalIsOpen,
        setModalIsOpen,
        userConsumoDisplay,
        setUserConsumoDisplay,
        autonomyFullDisplay,
        setAutonomyFullDisplay,
        userDistanceDisplay,
        setUserDistanceDisplay,
        relativeConsume,
        setRelativeConsume,
      }}
    >
      {children}
    </CalculadoraContext.Provider>
  );
}
