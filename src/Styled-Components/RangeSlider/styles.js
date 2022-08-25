import styled from "styled-components";

export const RangeSliderWrapper = styled.div`
  display: inline-grid;
  > span {
    width: 225px;
    padding: 0px;

    > span:first-child {
      background: ${({ theme }) => theme.colourMaterialBorder};
      opacity: 1;
    }
    > span:nth-child(2) {
      background: ${({ theme }) => theme.colourMaterialBorder};
    }

    > span:last-child {
      color: ${({ theme }) => theme.colourMaterialPrimary};
      border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
      box-shadow: none;

      :hover {
        box-shadow: none;
      }
      > span {
        display: none;
      }
    }
  }
`;

export const RangeSliderMarkerWrapper = styled.div`
  margin-top: 10px;
  display: inline-flex;
  justify-content: space-between;
`;

export const LabeledRangeSliderWrapper = styled(RangeSliderWrapper)`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

export const HeatmapRangeSliderWrapper = styled(RangeSliderWrapper)`
  padding: 10px 14px;
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
  span {
    > span:first-child {
      height: 2px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colourData3},
        ${({ theme }) => theme.colourData3} 33.33%,
        ${({ theme }) => theme.colourData2} 33.33%,
        ${({ theme }) => theme.colourData2} 66.66%,
        ${({ theme }) => theme.colourData1} 66.66%
      );
    }

    > span:nth-child(2) {
      background: transparent;
      border: none;
    }

    > span:nth-child(3) {
      width: 12px;
      height: 12px;
      color: ${({ theme }) => theme.colourMaterialPrimary};
      border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
      box-shadow: none;

      :hover {
        box-shadow: none;
      }
      > span {
        display: none;
      }
    }

    > span:last-child {
      width: 12px;
      height: 12px;
    }
  }
`;

export const HeatmapRangeSliderMarkerWrapper = styled(
  RangeSliderMarkerWrapper
)``;
