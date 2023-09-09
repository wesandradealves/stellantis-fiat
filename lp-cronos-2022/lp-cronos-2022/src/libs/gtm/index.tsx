import TagManager from "react-gtm-module";

export const dataLayer = ({ ...args }) => {
  return TagManager.dataLayer({
    dataLayer: { ...args },
  });
};
