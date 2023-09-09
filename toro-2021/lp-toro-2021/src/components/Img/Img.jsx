import React from 'react';
import { device } from '../../styles/device';

const Img = ({ xs, sm, md, lg, xl, imgDefault }) => {
  return (
    <picture>
      {xl && <source media={device.xl} srcset={xl} />}
      {lg && <source media={device.lg} srcset={lg} />}
      {md && <source media={device.md} srcset={md} />}
      {sm && <source media={device.sm} srcset={sm} />}
      {xs && <source media={device.xs} srcset={xs} />}
      <img src={imgDefault} alt="prop" />
    </picture>
  );
};

export default Img;
