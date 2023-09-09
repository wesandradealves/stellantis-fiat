import PropTypes from 'prop-types';
import DataLayer from './DataLayer';
import './DataLayer.global.scss';

DataLayer.displayName = 'DataLayer';
DataLayer.propTypes = {
  log: PropTypes.node,
  onLoad: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onEvent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  args: PropTypes.arrayOf(PropTypes.node),
};

// export { DataLayer };
export default DataLayer;
