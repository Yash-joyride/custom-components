import styled from "styled-components";

export const HelpCenterMenuWrapper = styled.div`
  width: 371px;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
`;

export const HelpCenterMenuItemWrapper = styled.div`
  display: grid;
  gap: 15px;
  padding: 30px 20px;
`;

// Global Secondary Navigation

export const GlobalSecondaryNavigationWrapper = styled.div`
  width: 100%;
  padding: 20px 40px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};
`;

export const GlobalSecondaryNavigationHeadContainer = styled.div`
  display: inline-grid;
  padding-right: 40px;
  gap: 2px;
  border-right: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;

export const GlobalSecondaryNavigationHeadHeadingContainer = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_18};
  color: ${({ theme }) => theme.colourTextPrimary};
`;
export const GlobalSecondaryNavigationHeadSubHeadingContainer = styled(GlobalSecondaryNavigationHeadHeadingContainer)`
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

// Side Menu Wrapper

const SideMenuWrapper = styled.div`
width: 80px;
height: 100vh;
position: fixed;
top: 0px;
left: 0px;
display: flex
flex-direction: column;
`;

const SideMenuHeaderWrapper = styled.div`
  min-height: 80px;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;

const SideMenuBodyWrapper = styled.div`
  // height: 65vh
  overflow: auto;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SideMenuFooterWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding: 15px;
  border-top: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  svg {
    :hover {
      cursor: pointer;
    }
  }

  div {
    :hover {
      cursor: pointer;
    }
  }
`;

const SideMenuIconsConatiner = styled.div`
  width: 38px;
  height: 37px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colourMaterialSecondary};
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${({ theme }) => theme.colourMaterialSecondaryHover};
    cursor: pointer;
  }

  :active {
    background: ${({ theme }) => theme.colourBrandPrimary};
    svg {
      path {
        fill: ${({ theme }) => theme.colourTextReversePrimary};
      }
    }
  }
`;

const SideMenuIconsWrapper = styled.div`
  position: relative;
`;

const UsernameContainerWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colourTextPrimary};
  border-radius: 50px;

  :active {
    border: 2px solid;
    ${({ theme }) => theme.colourBrandPrimary};
  }
`;

const UsernameWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialReversePrimary};
  border-radius: 50px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colourMaterialPrimary};
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};
  color: ${({ theme }) => theme.colourTextReversePrimary};

  :hover {
    background: ${({ theme }) => theme.colourMaterialReversePrimaryHover};
  }
`;

const NotificationIconConatiner = styled.div`
  top: -8px;
  left: 22px;
  position: absolute;
  width: 19px;
  height: 19px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colourStateErrorDark};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextReversePrimary};
  box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.08);

  div {
    width: 19px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { SideMenuWrapper, SideMenuHeaderWrapper, SideMenuBodyWrapper, SideMenuFooterWrapper, SideMenuIconsConatiner, UsernameWrapper, UsernameContainerWrapper, NotificationIconConatiner, SideMenuIconsWrapper };
