import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const ProgressContainer = styled.div`
  width: 10%;
  
  height: ${({ height }) => height};
  background: linear-gradient(0, #00ebff26, #7c09de26);
  transform: rotate(180deg);
  margin-bottom: -10px;
  margin-right: 5px;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    width: ${({ width }) => width};
  }
`;

export const ProgressDiv = styled.div`
  width: 100%;
  height: ${({ porcentage }) => porcentage}%;
  background: linear-gradient(-45deg, #00ebff, #7c09de);
  box-shadow: 0px 3px 9px rgb(0 232 255 / 0.25);
  background-size: 100% 100%;
  transition: all 0.5s ease-in-out;
  animation: ${gradient} 5s ease infinite;
`;
export const Thunder = styled.img`
  width: 10px;
  align-self: flex-end;
  position: absolute;
  margin-left: 2px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    width: 6px;
    margin-left: 4px;
    margin-bottom: 5px;
  }
`;

export const PorcentageText = styled.div`
  width: 10px;
  align-self: flex-end;
  position: absolute;
  margin-left: 2px;
  margin-bottom: 42px;
  font-family: 'FuturaPT Bold', sans-serif;
  font-size: 10px;
  color: #2CFFFE;
  transform: rotate(90deg);

  @media (max-width: 768px) {
    width: 4px;
    margin-left: 4.5px;
    margin-right: 4px;  
    margin-bottom: 42px;
  }
`;
