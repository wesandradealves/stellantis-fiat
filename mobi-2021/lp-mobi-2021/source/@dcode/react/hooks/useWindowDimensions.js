import React, { useContext } from 'react';
import { WindowDimensionsContext } from '../components/GridSystem/WindowDimensionsProvider';

export const useWindowDimensions = () => useContext(WindowDimensionsContext);

export default useWindowDimensions;
