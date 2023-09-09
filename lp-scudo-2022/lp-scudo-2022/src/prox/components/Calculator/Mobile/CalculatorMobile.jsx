/* eslint-disable eqeqeq */
import { useContext, useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
import ProgressBar from '@ramonak/react-progress-bar';
import { CalculatorContext } from '../../../context/Calculator/CalculatorContext';
import { useMaps } from '../../../hooks/useMaps';
import styles from './CalculatorMobile.module.scss';
import { DataLayer } from '../../../components/Track/DataLayer/DataLayer';

const CalculatorMobile = () => {
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
      <div className={styles.Header}>
        <h2>
          Calcule a autonomia do Compass 4xe no seu trajeto,
          usando o modo elétrico ou híbrido
        </h2>

        <Autocomplete
          id="origin-input"
          apiKey={'AIzaSyCiX2N8EtI4fhDdWWjktKrjE2iiYH4X0_8'}
          options={optionsGoogleInput}
          placeholder="Endereço de origem"
          onPlaceSelected={place => {
            DataLayer.push(
              'CustomTrack',
              'preencheu',
              'conteudo',
              'autonomia',
              'campo',
              'endereco-de-origem',
            );
            setOrigin(
              `${place.geometry.location.lat()}, ${place.geometry.location.lng()}`,
            );
          }}
        />

        <Autocomplete
          id="destiny-input"
          apiKey={'AIzaSyCiX2N8EtI4fhDdWWjktKrjE2iiYH4X0_8'}
          options={optionsGoogleInput}
          placeholder="Endereço de destino"
          onPlaceSelected={place => {
            DataLayer.push(
              'CustomTrack',
              'preencheu',
              'conteudo',
              'autonomia',
              'campo',
              'endereco-de-destino',
            );
            setDestiny(
              `${place.geometry.location.lat()}, ${place.geometry.location.lng()}`,
            );
          }}
        />

        <h2 className={styles.infoDistance}>
          Seu Trajeto é de{' '}
          <strong>
            {distance ? Math.ceil(distance / 1000) : 0}
            km
          </strong>
        </h2>
        <iframe
          id="map"
          src={`https://maps.google.com/maps?key=AIzaSyCiX2N8EtI4fhDdWWjktKrjE2iiYH4X0_8&saddr=${
            origin || ''
          }&daddr=${destiny || ''}&output=embed&avoid=highways`}
        ></iframe>
      </div>

      <div className={styles.SplitScreen}>
        <div className={styles.Eletric}>
          <h2>AUTONOMIA ELÉTRICA</h2>
          <h3 className={styles.Description}>
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
          <ProgressBar
            completed={(Math.ceil(distance / 1000) * 100) / 44}
            maxCompleted={100}
            bgColor={`linear-gradient(to right, #00ABE5, ${
              distance < 44000 ? '#5072cd' : '#9143ba'
            })`}
            height="45px"
            borderRadius="0"
            baseBgColor="#001e2a"
            isLabelVisible={false}
          />
        </div>
        <div className={styles.Hibryd}>
          <h2>AUTONOMIA HÍBRIDA</h2>
          <h3 className={styles.Description}>
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
          <ProgressBar
            completed={(Math.ceil(distance / 1000) * 100) / 927}
            maxCompleted={100}
            bgColor={`linear-gradient(to right, #00ABE5, ${
              distance < 927000 ? '#5072cd' : '#9143ba'
            })`}
            height="45px"
            borderRadius="0"
            baseBgColor="#001e2a"
            isLabelVisible={false}
          />
        </div>
      </div>

      {/* ADVISOR */}
      <div className={styles.Advisor}>
        {!distance ||
          (distance == 0 && (
            <h4>
              Informe os campos de origem de destino e confira a
              autonomia do Compass 4xe.
            </h4>
          ))}
        {distance > 1 && distance < 44000 && (
          <h4>
            Para esse trajeto, você tem autonomia suficiente para
            usar apenas o modo elétrico, sem precisar de
            combustível.
          </h4>
        )}
        {distance > 44000 && distance < 927000 && (
          <h4>
            Para esse trajeto, você pode usar o modo híbrido. Se
            preferir o modo elétrico, você vai precisar
            recarregar a bateria.
          </h4>
        )}
        {distance > 927000 && (
          <h4>
            Para esse trajeto, você vai precisar reabastecer caso
            escolha o modo híbrido ou recarregar a bateria caso
            escolha o modo elétrico.
          </h4>
        )}
      </div>
    </section>
  );
};

export default CalculatorMobile;
