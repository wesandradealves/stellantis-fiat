import React, { useEffect, useState } from 'react';
import Desktop from '../Devices/Desktop';
import Mobile from '../Devices/Mobile';

const Home = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', onResize);
  }, []);

  if (size < 768) {
    return <Mobile />;
  }

  return <Desktop />;
};

export default Home;
