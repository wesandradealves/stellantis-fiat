import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DataLayer } from '@dcode/react/components/DataLayer';
import configData from './configurations/data';
import MainPage from './routes/MainPage/MainPage';
import TipPage from './routes/TipPage/TipPage';
import VersionsPage from './routes/VersionsPage/VersionsPage';
import AboutPage from './routes/AboutPage/AboutPage';
import GalleryPage from './routes/GalleryPage/GalleryPage';
import ActionPage from './routes/ActionPage/ActionPage';
import WhatsappBtn from "./components/WhatsappBtn/WhatsappBtn";

export { MainPage, TipPage, VersionsPage, AboutPage, GalleryPage, ActionPage };

export const propTypes = {
  name: PropTypes.string,
  mobile: PropTypes.bool,
  data: PropTypes.object,
};


export const defaultProps = {
  name: '',
  mobile: false,
  data: configData,
};

export const App = ({ data, ...props }) => {
  useEffect(() => {
    DataLayer.push('App_Iniciou', props.name);
  }, []);

  return (
    <div data-ui-section={true}>
      <MainPage {...props} />
      <VersionsPage {...props} />
      {/* <TipPage {...props} /> */}
      {!props.mobile && <GalleryPage {...props} />}
      <AboutPage {...props} />
      <ActionPage {...props} />
      <WhatsappBtn />
    </div>
  );
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
