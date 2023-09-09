import React, { useEffect, useContext } from 'react';
import Autocomplete from 'react-google-autocomplete';
import Toggle from '../../Toggle';
import * as images from '../../../assets';
import { CalculadoraContext } from '../../../context/CalculadoraContext';

// Tagueado por João
import {
  preencheuCampo_DataLayer,
  toggleCampo_DataLayer,
  cliqueBotao_DataLayer,
} from '../../../tracks';

import {
  HeaderContainer,
  RadioButtons,
  SearchContainer,
  ReactAnchor,
  Arrow,
} from './styles';

export default function HeaderCalc() {
  const {
    setOrigin,
    setDestiny,
    velocity,
    setVelocity,
    economic,
    setIsEconomic,
    intenseTraffic,
    setIsIntenseTraffic,
    doubleDestiny,
    setDoubleDestiny,
  } = useContext(CalculadoraContext);

  // TAGUEAMENTO FUNCTIONS:
  function toogleOn(placeholder) {
    toggleCampo_DataLayer(
      'autonomia-e-carregamento',
      `liga-${placeholder}`,
    );
  }
  function toogleOff(placeholder) {
    toggleCampo_DataLayer(
      'autonomia-e-carregamento',
      `desliga-${placeholder}`,
    );
  }
  // FIM FUNÇÕES DE TAGUEAMENTO

  // FUNÇÕES TOGGLES CLICK:
  function toggleEconomic() {
    setIsEconomic(!economic);
  }

  function toggleTraffic() {
    setIsIntenseTraffic(!intenseTraffic);
  }

  function toggleDoubleDestiny() {
    setDoubleDestiny(!doubleDestiny);
  }
  // FIM FUNÇÕES TOGGLES CLICKS

  useEffect(() => {
    let radioInput50 = document.getElementById('50-km-button');

    if (velocity <= 30) {
      setIsIntenseTraffic(true);
    } else if (velocity >= 80) {
      setIsIntenseTraffic(false);
    } else if (velocity >= 90 && economic) {
      radioInput50.checked = true;
      setVelocity(50);
    } else {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [velocity, economic, intenseTraffic]);

  // FUNÇÃO PARA SETAR ESTADO VELOCITY:
  function handleVelocity(elem, velocity) {
    // eslint-disable-next-line
    let radioInput = document.getElementById(elem);
    setVelocity(velocity);
  }

  // SETANDO ESTADO INICIAL DOS INPUTS
  useEffect(() => {
    let radioInput = document.getElementById('50-km-button');

    function handleInitialRadioChecked(input) {
      input.checked = true;
    }
    handleInitialRadioChecked(radioInput);
    setIsEconomic(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderContainer id="calculadora-header">
        <div className="header-title">
          {window.innerWidth > 769 ? (
            <span>
              Calcule quanto de bateria
              <br /> você{' '}
              <strong> consome nos seus trajetos</strong>
            </span>
          ) : (
            <span>
              Calcule a autonomia <br />
              <strong>do Fiat 500e nos seus trajetos</strong>
            </span>
          )}
          <ReactAnchor href="#headerCalc">
            <Arrow href="headerCalc" />
          </ReactAnchor>
        </div>

        <SearchContainer id="calc-form">
          <div className="auto-complete-inputs-container">
            <div className="position-icon">
              {window.innerWidth > 736 ? (
                <img
                  src={
                    images.CalculadoraImages.ElipsePlaceHolder
                  }
                  alt="elipse"
                  className="origin-placeholder-icon"
                />
              ) : (
                <img
                  src={images.CalculadoraImages.EllipseMobile}
                  alt="elipse mobile"
                  className="origin-placeholder-icon"
                />
              )}
            </div>

            <Autocomplete
              id="origin-input"
              apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
              onPlaceSelected={place => {
                setOrigin(place.formatted_address);
              }}
              options={{
                types: ['address'],
                componentRestrictions: { country: 'br' },
              }}
              placeholder="Endereço de origem"
              // ini - Tagueado por João
              onBlur={() =>
                preencheuCampo_DataLayer(
                  'autonomia-e-carregamento',
                  'endereco-origem',
                )
              }
              // fim
            />
          </div>
          <div className="auto-complete-inputs-container">
            <div className="position-icon">
              {window.innerWidth > 736 ? (
                <img
                  src={images.CalculadoraImages.DestinyIcon}
                  alt="destino"
                  className="destiny-placeholder-icon"
                />
              ) : (
                <img
                  src={
                    images.CalculadoraImages.DestinyIconMobile
                  }
                  alt="destino mobile"
                  className="destiny-placeholder-icon"
                />
              )}
            </div>
            <Autocomplete
              id="destiny-input"
              apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
              onPlaceSelected={place => {
                setDestiny(place.formatted_address);
              }}
              options={{
                types: ['address'],
                componentRestrictions: { country: 'br' },
              }}
              placeholder="Endereço de destino"
              // ini - Tagueado por João
              onBlur={() =>
                preencheuCampo_DataLayer(
                  'autonomia-e-carregamento',
                  'endereco-destino',
                )
              }
              // fim
            />
          </div>

          <div className="toggles-container">
            <div className="spans-div">
              <span>Modo Econômico</span>
              <span>Trânsito</span>
              <span>Ida e volta</span>
            </div>
            <div className="switchs-div">
              <div
                onChange={() =>
                  !economic
                    ? toogleOn('modo-economico')
                    : toogleOff('modo-economico')
                }
              >
                <Toggle
                  id="switch-modo-economico"
                  setActive={toggleEconomic}
                  active={economic}
                  onClick={() => {
                    economic
                      ? toggleCampo_DataLayer(
                          'autonomia-e-carregamento',
                          'desliga-modo-economico',
                        )
                      : toggleCampo_DataLayer(
                          'autonomia-e-carregamento',
                          'liga-modo-economico',
                        );
                  }}
                  inputId="input-input-modo-economico"
                />
              </div>
              <div
                onChange={() =>
                  !intenseTraffic
                    ? toogleOn('transito-intenso')
                    : toogleOff('transito-intenso')
                }
              >
                <Toggle
                  id="transito-modo-economico"
                  setActive={toggleTraffic}
                  active={intenseTraffic}
                  onClick={() => {
                    intenseTraffic
                      ? toggleCampo_DataLayer(
                          'autonomia-e-carregamento',
                          'desliga-transito-intenso',
                        )
                      : toggleCampo_DataLayer(
                          'autonomia-e-carregamento',
                          'liga-transito-intenso',
                        );
                  }}
                  inputId="transito-input-modo-economico"
                />
              </div>
              <div
                onChange={() =>
                  !doubleDestiny
                    ? toogleOn('ida-e-volta')
                    : toogleOff('ida-e-volta')
                }
              >
                <Toggle
                  id="ida-e-volta-modo-economico"
                  active={doubleDestiny}
                  value={doubleDestiny}
                  setActive={toggleDoubleDestiny}
                  inputId="ida-e-volta-input-modo-economico"
                />
              </div>
            </div>
            <RadioButtons className="radio-buttons">
              <span>Velocidade Média</span>
              <ul className="velocitys-container">
                <li className="velocity">
                  <input
                    name="velocity"
                    type="radio"
                    id="30-km-button"
                    onClick={() =>
                      // subsection , nome do botao, section
                      cliqueBotao_DataLayer(
                        'autonomia-e-carregamento',
                        '30-km-h',
                      )
                    }
                    onChange={() =>
                      handleVelocity('30-km-button', 30)
                    }
                  />
                  <label htmlFor="30-km-button">30 km/h</label>
                </li>
                <li className="velocity">
                  <input
                    name="velocity"
                    type="radio"
                    id="50-km-button"
                    onClick={() =>
                      // subsection , nome do botao, section
                      cliqueBotao_DataLayer(
                        'autonomia-e-carregamento',
                        '50-km-h',
                      )
                    }
                    onChange={() =>
                      handleVelocity('50-km-button', 50)
                    }
                  />
                  <label htmlFor="50-km-button">50 km/h</label>
                </li>
                <li className="velocity">
                  <input
                    name="velocity"
                    type="radio"
                    id="90-km-button"
                    onClick={() =>
                      // subsection , nome do botao, section
                      cliqueBotao_DataLayer(
                        'autonomia-e-carregamento',
                        '90-km-h',
                      )
                    }
                    onChange={() =>
                      handleVelocity(
                        '90-km-button',
                        economic ? 80 : 90,
                      )
                    }
                  />
                  <label htmlFor="90-km-button">
                    {economic ? '80 km/h' : '90 km/h'}
                  </label>
                </li>
              </ul>
            </RadioButtons>
          </div>
        </SearchContainer>
      </HeaderContainer>
    </>
  );
}
