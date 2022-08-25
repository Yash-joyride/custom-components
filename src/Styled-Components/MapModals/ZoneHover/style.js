import styled from "styled-components";

// unlocked zone modal

export const ZoneHoverMainContainer = styled.div`
  position: relative;

  > :last-child {
    position: absolute;
    top: -19px;
    left: -19px;
  }
`;

export const ZoneHoverContainer = styled.div`
  width: 178px;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};

  > div:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const ZoneHoverHeaderWrapper = styled.div`
  background: ${({ zone }) => zone};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 24px 24px 16px 24px;
`;

export const ZoneHoverSectionWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 14px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  > button {
    width: 100%;
    height: auto;
    padding: 9px 0px 9px;
  }
`;
