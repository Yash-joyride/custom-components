import styled from "styled-components";

export const StatisticComponentWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  display: inline-grid;
  gap: 10px;
`;

export const StatisticComponentHeadingWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;
export const StatisticComponentDetailsWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  gap: 5px;
`;

export const StatisticComponentCaptionWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  gap: 5px;

  > div {
    font-size: ${({ theme }) => theme.fontSize_10};
    font-family: ${({ theme }) => theme.fontWorkSansRegular};
    color: ${({ theme }) => theme.colourTextSecondary};

    > div {
      > div {
        > svg {
          > path {
            fill: ${({ theme }) => theme.colourTextSecondary};
          }
        }
      }
    }
  }
`;
