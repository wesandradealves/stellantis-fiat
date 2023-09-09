import React, { useEffect, useState } from 'react';
import { FooterMobile } from '../Sections'
import { Container } from './styles';

const Base = ({ children }) => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', onResize);
  }, []);


  return (
    <>
      {size < 768 && (
        <>

          <Container>{children}</Container>

          <FooterMobile />
        </>
      )}
    </>
  );
};

export default Base;
