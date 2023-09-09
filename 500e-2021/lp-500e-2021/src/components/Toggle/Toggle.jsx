import React from 'react';
import { Container, ToggleDiv } from './styles';
import { Colors } from '../../styles';


const Toggle = ({ id, inputId, setActive, active }) => {
  


  let windowSize = window.innerWidth;

  return (
    <>
      <Container id={id}>
        <label class="label" >
          <ToggleDiv bg={windowSize > 769 ? '#060F27' : Colors.beige100} >
            <input
              checked={active}
              id={inputId}
              class="toggle-state"
              type="checkbox"
              value='check'
              onClick={setActive}
            />
            <div class="toggle-inner" >
              <div class="indicator"></div>
            </div>
            <div class="active-bg"></div>
          </ToggleDiv>
        </label>
      </Container>
    </>
  );
};

export default Toggle;
