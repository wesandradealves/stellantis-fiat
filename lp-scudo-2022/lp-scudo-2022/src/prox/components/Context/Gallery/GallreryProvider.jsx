import React, { useState } from 'react';
import { GalleryContext } from './GalleryContext';

const GalleryProvider = ({ children }) => {
  const [mainImage, setMainImage] = useState(0);
  const [isExpand, setExpand] = useState(false);
  const [isExpandMobile, setExpandMobile] = useState(false);
  const [versionSelected, setVersion] = useState();
  const [indexPhoto, setIndexPhoto] = useState(0);

  return (
    <GalleryContext.Provider
      value={{
        mainImage,
        setMainImage,
        isExpand,
        setExpand,
        isExpandMobile,
        setExpandMobile,
        versionSelected,
        setVersion,
        indexPhoto,
        setIndexPhoto,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
