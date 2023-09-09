import React, { useEffect, useContext } from 'react';
import HeaderCalc from './HeaderCalc';
import ModalCalc from './ModalCal';
import ProgressBarCalc from './ProgressBarCalc';
import ProgressCirclesCalc from './ProgressCirclesCalc';
import {
  CalculadoraContainer,
  ResponseContainer,
  DisclaimerContainer,
  ShowConsume,
  ConsumeBox,
  ShowConsumeMobile,

} from './styles';
import { CalculadoraContext } from '../../context/CalculadoraContext';

const Calculadora = () => {
  const {
    distance,
    setDistance,
    constante,
    setConstante,
    setConsumo,
    origin,
    destiny,
    velocity,
    economic,
    doubleDestiny,
    setChargerPortaitTime,
    setChargerFastTime,
    setChargerUltraFastTime,
    setModalIsOpen,
    setUserConsumoDisplay,
    autonomyFullDisplay,
    setAutonomyFullDisplay,
    setUserDistanceDisplay,
    intenseTraffic,
    setRelativeConsume,
    setVelocity,
    relativeConsume,
  } = useContext(CalculadoraContext);

  useEffect(() => {
    setUserDistanceDisplay(autonomyFullDisplay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autonomyFullDisplay]);

  let google = window.google;

  function CalculaDistancia() {
    //Instanciar o DistanceMatrixService
    const service = new google.maps.DistanceMatrixService();
    //executar o DistanceMatrixService
    service.getDistanceMatrix(
      {
        //Origem
        origins: [origin],
        //Destino
        destinations: [destiny],
        //Modo (DRIVING | WALKING | BICYCLING)
        travelMode: google.maps.TravelMode.DRIVING,
        //Sistema de medida (METRIC | IMPERIAL)
        unitSystem: google.maps.UnitSystem.METRIC,
        //Vai chamar o callback
      },
      callback,
    );
  }
  //Tratar o retorno do DistanceMatrixService
  function callback(response, status) {
    //Verificar o Status
    if (status !== google.maps.DistanceMatrixStatus.OK)
      //Se o status não for "OK"
      console.log(status);
    else {
      //Se o status for OK
      let initialRes =
        response.rows[0].elements[0].distance.value / 1000;
      handleCalculateResponses(initialRes);
    }
  }

  function handleCalculateResponses(initialRes) {
    // SET CONSTS USED TO CALCULATE CHARGER TIME:
    let portraitChargerConst = 15.0;
    let fastChargerConst = 3.75;
    let ultraFastChargerConst = 0.4375;
    // END CONST USED TO CALCULATE CHARGER TIME!

    // CALCULATE consumoRes:
    let consumoRes = distance * constante;
    // END CALCULATE CONSUMORES!

    // INIT USER DISPLAY CONDITION:
    if (distance > autonomyFullDisplay) {
      setUserDistanceDisplay(distance.toFixed(2));
    } else {
      let userAutonomyDisplay = autonomyFullDisplay - distance;
      setUserDistanceDisplay(Math.trunc(userAutonomyDisplay));
    }

    let userConsumoDisplay = 100 - consumoRes;
    setUserConsumoDisplay(Math.trunc(userConsumoDisplay));
    // END USER DISPLAY!

    // SWITCH CASE TO SET A DISTANCE:
    switch (doubleDestiny) {
      case true:
        setDistance(initialRes * 2);
        break;
      default:
        setDistance(initialRes);
    }
    // END SWITCH CASE SETDISNTACE!

    // SET CONSUMO WITH consumoRes RETURN:
    setConsumo(consumoRes);
    // END SET CONSUMO!

    // CALCULATE CHARGERS TIMES:
    let portraitChargerTime = consumoRes * portraitChargerConst;
    setChargerPortaitTime(portraitChargerTime.toFixed(2));

    let fastChargerTime = consumoRes * fastChargerConst;
    setChargerFastTime(fastChargerTime.toFixed(2));

    let ultraFastChargerTime =
      consumoRes * ultraFastChargerConst;
    setChargerUltraFastTime(ultraFastChargerTime.toFixed(2));
    // END CALCULATE CHARGERS TIMES!
  }

  useEffect(() => {
    if (distance > autonomyFullDisplay) {
      setModalIsOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [distance, autonomyFullDisplay]);

  useEffect(() => {
    if (economic === true && velocity === 30) {
      setConstante(0.336700336700337);
    } else if (economic === true && velocity === 50) {
      setConstante(0.217391304347826);
    } else if (economic === true && velocity === 80) {
      setConstante(0.3125);
    } else if (economic === false && velocity === 30) {
      setConstante(0.444444444444444);
    } else if (economic === false && velocity === 50) {
      setConstante(0.238095238095238);
    } else if (economic === false && velocity === 90) {
      setConstante(0.383141762452107);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [economic, velocity]);


  useEffect(() => {
    if(economic === true) {
      setVelocity(80)
    }

    if(economic === false && velocity === 80) {
      setAutonomyFullDisplay(261)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[economic]);

  useEffect(() => {
    function handleAutonomyDisplay() {
      if (economic === false && velocity === 30) {
        setAutonomyFullDisplay(225);
        setRelativeConsume(30);
      } else if (
        economic === false &&
        velocity === 50 &&
        intenseTraffic === false
      ) {
        setAutonomyFullDisplay(420);
        setRelativeConsume(57);
      } else if (
        economic === false &&
        velocity === 50 &&
        intenseTraffic === true
      ) {
        setAutonomyFullDisplay(289);
        setRelativeConsume(39);
      } 
      else if (economic === false && velocity === 90) {
        setAutonomyFullDisplay(261);
        setRelativeConsume(35);
      } else if (economic === true && velocity === 30) {
        setAutonomyFullDisplay(297);
        setRelativeConsume(40);
      } else if (
        economic === true &&
        velocity === 50 &&
        intenseTraffic === false
      ) {
        setAutonomyFullDisplay(460);
        setRelativeConsume(62);
      } else if (
        economic === true &&
        velocity === 50 &&
        intenseTraffic === true
      ) {
        setAutonomyFullDisplay(335);
        setRelativeConsume(46);
      } else if (economic === true && velocity === 80) {
        setAutonomyFullDisplay(320);
        setRelativeConsume(43);
      } 
    }
    handleAutonomyDisplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [economic, velocity, intenseTraffic]);

  return (
    <>
      {origin && destiny !== null && CalculaDistancia()}
      <CalculadoraContainer>
        <HeaderCalc />
        <ResponseContainer>                                   
          <div className="progress-circles-container">
            <ProgressCirclesCalc />
          </div>
          <div className="chargers-reponse-container">
            {window.innerWidth > 768 ? (
                <ShowConsume>
                <h1>
                  Consumo <br/> equivalente 
                </h1>
                <ConsumeBox>
                  <span> {relativeConsume} </span> 
                  <p>Km/l</p>
                </ConsumeBox>
              </ShowConsume>
            ): (
              <ShowConsumeMobile> 
                <h2>Consumo Equivalente a</h2>
                <span> {relativeConsume} </span> 
                <p>Km/l</p>
              </ShowConsumeMobile>
            )}
            
            <h1 className="title-ops">OPÇÕES DE CARREGAMENTO</h1>
            <ProgressBarCalc />
          </div>
        </ResponseContainer>
        <DisclaimerContainer>
          <p>
          A autonomia máxima informada foi alcançada em condições específicas de
          condução do veículo, utilizando-se diferentes métodos de testes, em
          dinamômetro e na rua. Diversos fatores podem influenciar nos valores
          alcançados, tais como (modo de condução, quantidade de passageiros,
          relevo, peso embarcado, umidade, condições atmosféricas e das vias,
          pressão dos pneus, etc.
          </p>
        </DisclaimerContainer>  
      </CalculadoraContainer>
      <ModalCalc />
    </>
  );
};

export default Calculadora;
