import styled from 'styled-components';

const VideResponsive = styled.div`
  overflow: hidden;
  padding-bottom: 70%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100% !important;
    margin: 0% !important;
    position: absolute;
  }

  .iframe {
    border: 2px solid #6cb551 !important;
    border-radius: 20px;
  }
`;

export default VideResponsive;
