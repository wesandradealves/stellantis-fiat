import React from 'react';
import VideResponsive from './styles';
//import PropTypes from 'prop-types';

const YoutubeEmbed = ({ embedId }) => (
  <VideResponsive>
    <iframe
      className="iframe"
      width=""
      height=""
      src={`https://www.youtube.com/embed/${embedId}?controls=0&color=white&disablekb=1&modestbranding=1&rel=0&showinfo=2&iv_load_policy=0`}
      frameBorder="0"
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideResponsive>
);

// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired
// };

export default YoutubeEmbed;
