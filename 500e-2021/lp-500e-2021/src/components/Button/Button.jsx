import React from 'react';
import Btn from './styles';

const Button = ({
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
  mb,
  mt,
  ...rest
}) => (
  <Btn
    href={to}
    bg={bg}
    width={width}
    height={height}
    br={br}
    fs={fs}
    fw={fw}
    jc={jc}
    mb={mb}
    mt={mt}
    color={color}
    hover={hover}
    {...rest}
  >
    {children}
  </Btn>
);
export default Button;
