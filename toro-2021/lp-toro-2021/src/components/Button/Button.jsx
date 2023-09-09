import React from 'react';
import { DataLayer } from '../Track/DataLayer/DataLayer';
import Btn from './styles';

const Button = ({
  datalayer,
  datalayername,
  datalayerversionname,
  children,
  to,
  bg,
  width,
  height,
  br,
  color,
  fs,
  fw,
  jc,
  hover,
  ...rest
}) => (
  <Btn
    onClick={() => {
      DataLayer.push(
        `${datalayer}`,
        datalayername,
        datalayerversionname,
      );
    }}
    target="_blank"
    href={to}
    bg={bg}
    width={width}
    height={height}
    br={br}
    fs={fs}
    fw={fw}
    jc={jc}
    color={color}
    hover={hover}
    {...rest}
  >
    {children}
  </Btn>
);
export default Button;
