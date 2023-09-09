import React, {useEffect, useState} from 'react';
import { PorcentageText, ProgressContainer, ProgressDiv, Thunder } from './styles';
import PropTypes from 'prop-types';
import thunder from '../../assets/images/Icons/thunder.svg'

const ProgressBar = ({
  id, 
  width,
  height,
  porcentage,
  maxValue,
}) => {
  const [porcentageDisplay, setPorcentageDisplay] = useState(0);

  function handleCalculatePorcentage() {
    let divMenorPorMaior = porcentage / maxValue;
    let res = divMenorPorMaior * 100;

    if (res > 100) {
      return setPorcentageDisplay(100);
    } else {
      return setPorcentageDisplay(res);
    }
  }
  function roundValue(porcentageDisplay){
    if (porcentageDisplay < 1 && porcentageDisplay !== 0){
      return porcentageDisplay.toFixed(1);
    }
    else {
      return Math.trunc(porcentageDisplay);
    }
    
  }

  useEffect(() => {
    handleCalculatePorcentage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [porcentage, maxValue]);

  return (
    <>
      <ProgressContainer id={id} width={width} height={height}>
        <ProgressDiv porcentage={porcentageDisplay}/>
        <PorcentageText>{roundValue(porcentageDisplay)}%</PorcentageText>
        <Thunder src={thunder} alt='thunder' />
      </ProgressContainer>

    </>
  );
};

ProgressBar.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  chargerTime: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default ProgressBar;
