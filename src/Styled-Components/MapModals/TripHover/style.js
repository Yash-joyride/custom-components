import styled from "styled-components";

export const TripHoverContainer = styled.div`
  width: 273px;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};

  > div:last-child {
    border: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const TripHoverHeaderContainer = styled.div`
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

export const TripHoverHeaderWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialReversePrimary};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 24px 20px 16px 24px;
`;

export const TripHoverSectionWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 14px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  > button {
    width: 100%;
    height: auto;
    padding: 9px 0px 9px;
  }
`;
