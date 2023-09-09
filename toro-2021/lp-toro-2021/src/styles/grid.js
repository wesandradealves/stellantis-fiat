import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import { device } from './device';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1024px) {
    width: 83.33333%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const cols = {
  auto: css`
    flex: 0 0 auto;
    max-width: none;
    width: auto;
  `,
  1: css`
    max-width: 8.33%;
    flex: 0 0 8.33%;
  `,
  2: css`
    max-width: 16.66%;
    flex: 0 0 16.66%;
  `,
  3: css`
    max-width: 25%;
    flex: 0 0 25%;
  `,
  4: css`
    max-width: 33.33%;
    flex: 0 0 33.33%;
  `,
  5: css`
    max-width: 41.66%;
    flex: 0 0 41.66%;
  `,
  6: css`
    max-width: 50%;
    flex: 0 0 50%;
  `,
  7: css`
    max-width: 58.33%;
    flex: 0 0 58.33%;
  `,
  8: css`
    max-width: 66.66%;
    flex: 0 0 66.66%;
  `,
  9: css`
    max-width: 75%;
    flex: 0 0 75%;
  `,
  10: css`
    max-width: 83.33%;
    flex: 0 0 83.33%;
  `,
  11: css`
    max-width: 91.66%;
    flex: 0 0 50%;
  `,
  12: css`
    max-width: 100%;
    flex: 0 0 100%;
  `,
};

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  min-height: 1px;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  width: 100%;

  ${switchProp('xs', {
    auto: cols.auto,
    1: cols[1],
    2: cols[2],
    3: cols[3],
    4: cols[4],
    5: cols[5],
    6: cols[6],
    7: cols[7],
    8: cols[8],
    9: cols[9],
    10: cols[10],
    11: cols[11],
    12: cols[12],
  })}

  @media ${device.sm} {
    ${switchProp('sm', {
      auto: cols.auto,
      1: cols[1],
      2: cols[2],
      3: cols[3],
      4: cols[4],
      5: cols[5],
      6: cols[6],
      7: cols[7],
      8: cols[8],
      9: cols[9],
      10: cols[10],
      11: cols[11],
      12: cols[12],
    })}
  }

  @media ${device.md} {
    ${switchProp('md', {
      auto: cols.auto,
      1: cols[1],
      2: cols[2],
      3: cols[3],
      4: cols[4],
      5: cols[5],
      6: cols[6],
      7: cols[7],
      8: cols[8],
      9: cols[9],
      10: cols[10],
      11: cols[11],
      12: cols[12],
    })}
  }

  @media ${device.lg} {
    ${switchProp('lg', {
      auto: cols.auto,
      1: cols[1],
      2: cols[2],
      3: cols[3],
      4: cols[4],
      5: cols[5],
      6: cols[6],
      7: cols[7],
      8: cols[8],
      9: cols[9],
      10: cols[10],
      11: cols[11],
      12: cols[12],
    })}
  }

  @media ${device.xl} {
    ${switchProp('xl', {
      auto: cols.auto,
      1: cols[1],
      2: cols[2],
      3: cols[3],
      4: cols[4],
      5: cols[5],
      6: cols[6],
      7: cols[7],
      8: cols[8],
      9: cols[9],
      10: cols[10],
      11: cols[11],
      12: cols[12],
    })}
  }
`;
