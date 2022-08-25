import styled from "styled-components";

export const HeatmapCellHoverContainer = styled.div`
  width: 178px;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};
  > div:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
export const HeatmapCellHoverHeaderContainer = styled.div`
  position: relative;

  > div {
    svg {
      position: absolute;
      top: 15px;
      right: 20px;
      cursor: pointer;
    }
  }
`;

export const HeatmapCellHoverHeaderWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialReversePrimary};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 20px;
`;

export const HeatmapCellHoverSectionContainer = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 15px 20px;

  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
    cursor: pointer;
  }
`;

export const HeatmapCellHoverSectionWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;
