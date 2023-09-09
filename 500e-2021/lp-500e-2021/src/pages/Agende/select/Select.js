/* eslint-disable */
import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import Img from '../components/Img';
import selectArrowPNG from '../assets/select-arrow.png';
import css from './Select.scss';

const classes = {
  root: css.select,
  arrow: css.arrow,
  first: css.first,
  label: css.label,
  size24: 'size-24',
  size22: 'size-22',
  size26Mobile: 'size-26-mobile',
};

const defaultProps = {
  placeholder: 'Selecione',
};

const propTypes = {
  data: PropTypes.array,
  placeholder: PropTypes.string,
};

export class Select extends React.Component {
  constructor(props) {
    super(props);
    this.renderOptions = this.renderOptions.bind(this);
    this.getLabel = this.getLabel.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  renderOptions() {
    const { data, placeholder } = this.props;
    return [{ value: null, name: placeholder }, ...data].map(
      (item, id) => (
        <option
          key={id}
          value={item.value}
          className={id === 0 ? classes.first : ''}
          style={{ fontSize: 18 }}
        >
          {item.name}
        </option>
      ),
    );
  }

  getLabel() {
    const { data, placeholder } = this.props;
    const value = data.filter(v => v.value === this.props.value);
    if (value.length > 0) {
      return value[0].name;
    }
    return placeholder;
  }

  onChange(event) {
    this.props.onChange && this.props.onChange(event);
  }

  render() {
    return (
      <div style={{ position: 'relative', paddingTop: 2 }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
          }}
        >
          <Img alt="seta" src={selectArrowPNG} />
        </div>
        <div
          style={{
            fontStyle: 'italic',
            width: '100%',
            padding: '10px 5px',
            borderBottom: '1px solid #4a4a4a',
            color: '#fff',
            fontSize: '18px',
          }}
        >
          {this.getLabel()}
        </div>
        <select
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
          }}
          onChange={this.onChange}
        >
          {this.renderOptions()}
        </select>
      </div>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
export default Select;
