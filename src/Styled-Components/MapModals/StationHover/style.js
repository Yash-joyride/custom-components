import styled from "styled-components";

export const StationHoverMainContainer = styled.div`
  position: relative;

  > div {
    svg {
      position: absolute;
      top: -36px;
      left: -36px;
    }
  }
`;

export const StationHoverContainer = styled.div`
  width: 178px;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};

  > div:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const StationHoverHeaderWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialReversePrimary};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 20px 20px 16px 20px;
`;

export const StationHoverSectionWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 14px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  > button {
    width: 100%;
    height: auto;
    padding: 9px 0px 9px;
  }
`;
