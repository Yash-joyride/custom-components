import styled from "styled-components";

export const HelpCenterMenuItemWrapper = styled.div`
  width: 100%;
  padding: 15px 10px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }
`;

export const HelpCenterMenuItemIconWrapper = styled.div`
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colourMaterialSecondary};
  border-radius: 4px;
`;

export const HelpCenterMenuItemContentWrapper = styled.div`
  display: inline-grid;
  gap: 5px;
`;

export const HelpCenterMenuItemContentHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const HelpCenterMenuItemContentSubHeadingWrapper = styled(
  HelpCenterMenuItemContentHeadingWrapper
)`
  color: ${({ theme }) => theme.colourTextSecondary};
  font-size: ${({ theme }) => theme.fontSize_10};
`;
