/* eslint-disable */
import React from 'react';
import cls from 'classnames';
import Img from '../components/Img';
import checkPNG from '../assets/check.png';
import './Check.scss';

const classes = {
  root: 'Check',
  isSelected: 'selected',
  check: 'check',
  label: 'label',
  uLight: 'u-light',
  size22: 'size-22',
  size26Mobile: 'size-26-mobile',
};

const defaultProps = {
  className: '',
  classes,
};

export const Check = ({ className, label, ...props }) => {
  const onClick = () => {
    props.onChange({
      target: {
        value: !props.value,
      },
    });
  };

  return (
    <div
      className={cls(classes.root, className, {
        [classes.isSelected]: props.value,
      })}
      onClick={onClick}
    >
      <div className={cls(classes.check)}>
        <Img alt="check" src={checkPNG} />
      </div>
      <div
        className={cls(
          classes.label,
          classes.uLight,
          classes.size22,
          classes.size26Mobile,
        )}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
};

Check.defaultProps = defaultProps;
export default Check;
