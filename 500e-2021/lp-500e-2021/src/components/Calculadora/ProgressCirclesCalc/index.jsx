import React, { useContext } from 'react';
import { CalculadoraContext } from '../../../context/CalculadoraContext';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Container } from './styles';

export default function ProgressBarCalc() {
  const {
    autonomyFullDisplay,
    userDistanceDisplay,
    userConsumoDisplay,
  } = useContext(CalculadoraContext);

  return (
    <>
      <Container>
        <div className="circular-progress-container">
          <h1 className="titleDesk">AUTONOMIA</h1>
          <div className="progress-circle">
            <CircularProgressbarWithChildren
              minValue={0}
              maxValue={autonomyFullDisplay}
              value={userDistanceDisplay}
              strokeWidth={6}
              styles={buildStyles({
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
                strokeLinecap: 'butt',
                // Colors
                pathColor: `url(#linear)`,
                trailColor: '#1D263A93',
                backgroundColor: '#3e98c7',
              })}
            >
              <div className="response-calc">
                <h1>{userDistanceDisplay}</h1>
                <span className="full-autonomy">
                  /{autonomyFullDisplay}
                </span>
                <span>Km</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <h1 className="titleMobile">AUTONOMIA</h1>
        </div>

        <div className="circular-progress-container">
          <h1 className="titleDesk">BATERIA</h1>
          <div className="progress-circle">
            <CircularProgressbarWithChildren
              minValue={0}
              maxValue={100}
              value={userConsumoDisplay}
              strokeWidth={6}
              styles={buildStyles({
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
                strokeLinecap: 'butt',
                // Colors
                pathColor: `url(#linear)`,
                trailColor: '#1D263A93',
                backgroundColor: '#3e98c7',
              })}
            >
              <div className="response-calc">
                <h1 className='porcentagem-carga'>{userConsumoDisplay}%</h1>
                <span className="carga-response">
                  de carga disponível
                </span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <h1 className="titleMobile">BATERIA</h1>
        </div>
      </Container>
    </>
  );
}
