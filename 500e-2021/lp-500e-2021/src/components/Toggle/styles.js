import styled from 'styled-components';
import { Colors } from '../../styles';

export const ToggleDiv = styled.div`
  isolation: isolate;
  position: relative;
  height: 45px;
  width: 95px;
  border-radius: 30px;
  background: #060F27;
  overflow: hidden;

  @media (max-width: 768px) {
  background: ${({ bg }) => (bg ? bg : Colors.beige100)};
    
  }

`;

export const Container = styled.div`
  .label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  .toggle-inner {
    z-index: 2;
    top: 2px;
    padding-left: 28%;
    padding-right: 28%;
    height: 39px;
    position: absolute;

    width: 97px;
    border-radius: 55px;
    overflow: hidden;
  }

  .toggle-state {
    display: none;
  }

  .indicator {
    height: 100%;
    width: 90%;
    background: #3D4353;
    border-radius: 30px;
    transform: translate3d(-60%, 0, 0);
    transition: transform 0.35s
      cubic-bezier(0.85, 0.05, 0.18, 1.35);

    @media(max-width: 769px) {
      background: #a7a7a7 ;

    }  
  }

  .toggle-state:checked ~ .active-bg {
    transform: translate3d(25%, 0, 0);
  }

  .toggle-state:checked ~ .toggle-inner .indicator {
    transform: translate3d(63%, 0, 0);
    background: ${Colors.blue100};
    box-shadow: 0px 2px 15px #1FC1D590;

  }
`;
