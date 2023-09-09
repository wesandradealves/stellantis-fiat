/* eslint-disable eqeqeq */
import { useContext, useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
// import ProgressBar from 'react-progress-bar';
import { CalculatorContext } from '../../../components/Context/Calculator/CalculatorContext';
import { useMaps } from '../../../hooks/useMaps';
import styles from './Calculator.module.scss';
//import { MapsIcon } from '../../../assets';
import { DataLayer } from '../../../../prox/utils/DataLayer';

const CalculatorDesktop = () => {
  const {
    origin,
    setOrigin,
    destiny,
    setDestiny,
    distance,
    setDistance,
  } = useContext(CalculatorContext);

  const api = useMaps();

  const optionsGoogleInput = {
    types: ['address'],
    componentRestrictions: { country: 'br' },
  };

  // __________________________ NOVO USO DA API
  // eslint-disable-next-line prefer-destructuring
  const google = window.google;

  function callback(response, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK)
      console.log(status);
    else {
      const initialRes =
        response.rows[0].elements[0].distance.value;
      setDistance(initialRes);
    }
  }

  function CalculaDistancia() {
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destiny],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
      },
      callback,
    );
  }

  // __________________________ NOVO USO DA API

  useEffect(() => {
    if (origin && destiny) {
      CalculaDistancia();
    }
  }, [origin, destiny]);

  return (
    <section id="autonomia" className={styles.container}>
      <div className={styles.maxWidth}>
        <header>
          <div className={styles.resources}>
            <div className={styles.mapsSection}>
              <div className={styles.InlineWrapper}>
                <h1 className={styles.mapTlt}>
                  Calcule a autonomia do Compass 4xe no seu
                  trajeto, usando o modo elétrico ou híbrido
                </h1>
                <div className={styles.Inline}>
                  {/* <img
                    alt="Seleciona o destino"
                    src={MapsIcon}
                  /> */}
                  <Autocomplete
                    id="origin-input"
                    apiKey="AIzaSyCiX2N8EtI4fhDdWWjktKrjE2iiYH4X0_8"
                    options={optionsGoogleInput}
                    onChange={(e) =>
                      e.target.value === '' && setDistance(0)
                    }
                    placeholder="Endereço de origem"
                    onPlaceSelected={(place) => {
                      DataLayer.push(
                        'CustomTrack',
                        'preencheu',
                        'conteudo',
                        'autonomia',
                        'campo',
                        'endereco-de-origem',
                      );
                      setOrigin(place.formatted_address);
                    }}
                  />
                </div>
                <div className={styles.separator} />
                <div className={styles.Inline}>
                  {/* <img
                    alt="Seleciona o destino"
                    src={MapsIcon}
                  /> */}
                  <Autocomplete
                    id="destiny-input"
                    apiKey={
                      'AIzaSyCiX2N8EtI4fhDdWWjktKrjE2iiYH4X0_8'
                    }
                    options={optionsGoogleInput}
                    onChange={(e) =>
                      e.target.value === '' && setDistance(0)
                    }
                    placeholder="Endereço de destino"
                    onPlaceSelected={(place) => {
                      DataLayer.push(
                        'CustomTrack',
                        'preencheu',
                        'conteudo',
                        'autonomia',
                        'campo',
                        'endereco-de-destino',
                      );
                      setDestiny(place.formatted_address);
                    }}
                  />
                </div>
                <h2 className={styles.infoDistance}>
                  Seu Trajeto é de{' '}
                  <strong>
                    {distance ? Math.ceil(distance / 1000) : 0}
                    km
                  </strong>
                </h2>
              </div>
              {/* <iframe
                id="map"
                src={`https://maps.google.com/maps?key=AIzaSyCiX2N8EtI4fhDdWWjktKrjE2iiYH4X0_8&saddr=${
                  origin || ''
                }&daddr=${
                  destiny || ''
                }&output=embed&avoid=highways`}
              ></iframe> */}
            </div>

            {/* FIM SEÇÃO DO MAPS */}

            <div className={styles.autonomySection}>
              <div className={styles.eletricAutonomy}>
                <h2>AUTONOMIA ELÉTRICA</h2>
                <h3 className={styles.descriptionAutonomy}>
                  Direção silenciosa e zero emissão de CO2
                </h3>

                <div
                  className={
                    distance > 44000
                      ? styles.CalculationFull
                      : styles.Calculation
                  }
                >
                  <h3>
                    {Math.ceil(distance / 1000)}km
                    <strong> /44km</strong>
                  </h3>
                </div>
                {/* <ProgressBar
                  completed={
                    (Math.ceil(distance / 1000) * 100) / 44
                  }
                  maxCompleted={100}
                  bgColor={`linear-gradient(to right, #00ABE5, ${
                    distance < 44000 ? '#5072cd' : '#9143ba'
                  })`}
                  height="38px"
                  borderRadius="0"
                  baseBgColor="#001e2a"
                  isLabelVisible={false}
                /> */}
              </div>

              <div className={styles.hibrydAutonomy}>
                <h2>AUTONOMIA HÍBRIDA</h2>
                <h3 className={styles.descriptionAutonomy}>
                  Vá mais longe com a combinação dos dois motores
                </h3>
                <div
                  className={
                    distance > 927000
                      ? styles.CalculationFull
                      : styles.Calculation
                  }
                >
                  <h3>
                    {Math.ceil(distance / 1000)}km
                    <strong> /927km</strong>
                  </h3>
                </div>
                {/* <ProgressBar
                  completed={
                    (Math.ceil(distance / 1000) * 100) / 927
                  }
                  maxCompleted={100}
                  bgColor={`linear-gradient(to right, #00ABE5, ${
                    distance < 927000 ? '#5072cd' : '#9143ba'
                  })`}
                  height="38px"
                  borderRadius="0"
                  baseBgColor="#001e2a"
                  isLabelVisible={false}
                /> */}
              </div>

              {/* ADVISOR */}
              <div className={styles.Advisor}>
                {!distance ||
                  (distance == 0 && (
                    <p>
                      Informe os campos de origem de destino e
                      confira a autonomia do Compass 4xe.
                    </p>
                  ))}
                {distance > 1 && distance < 44000 && (
                  <p>
                    Para esse trajeto, você tem autonomia
                    suficiente para usar apenas o modo elétrico,
                    sem precisar de combustível.
                  </p>
                )}
                {distance > 44000 && distance < 927000 && (
                  <p>
                    Para esse trajeto, você pode usar o modo
                    híbrido. Se preferir o modo elétrico, você
                    vai precisar recarregar a bateria.
                  </p>
                )}
                {distance > 927000 && (
                  <p>
                    Para esse trajeto, você vai precisar
                    reabastecer caso escolha o modo híbrido ou
                    recarregar a bateria caso escolha o modo
                    elétrico.
                  </p>
                )}
              </div>
            </div>
          </div>
        </header>
        <div className={styles.footer}>
          <h3>
            A autonomia máxima informada foi alcançada em
            condições específicas de condução do veículo,
            utilizando-se diferentes métodos de testes, em
            dinamômetro e na rua. Diversos fatores podem
            influenciar nos valores alcançados, tais como (modo
            de condução, quantidade de passageiros, relevo, peso
            embarcado, umidade, condições atmosféricas e das
            vias, pressão dos pneus, etc).
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CalculatorDesktop;
