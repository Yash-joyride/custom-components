import styled from "styled-components";

const SettingPanelContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: inline-flex;
`;

const SettingPanelWrapper = styled.div`
padding: 20px 10px;
width: fit-content;
background: ${({ theme }) => theme.colourMaterialPrimary}!important
.css-10d9dml-MuiTabs-indicator{
    display: none;
}

.css-rzetok-MuiButtonBase-root-MuiTab-root.Mui-selected{
    background: ${({ theme }) => theme.colourMaterialSecondary};
    color: ${({ theme }) => theme.colourBrandPrimaryDark};
    svg{
        path{
            fill: ${({ theme }) => theme.colourBrandPrimaryDark};
            fill-opacity: 1 !important;

        }
    }
}
  div {
    div {
      div {
          gap: 10px;
          display: flex;
        button {
            padding: 9px 10px;
          display: inline-flex;
          flex-direction: row;
          justify-content: start;
          max-width: 0;
          min-width: 210px;
          min-height: 37px;
          align-items: center;
          background: ${({ theme }) => theme.colourMaterialPrimary};
          border-radius: 4px;
          font-family : ${({ theme }) => theme.fontWorkSansRegular}
          font-size : ${({ theme }) => theme.fontSize14}
          text-transform: none;
          
          svg{
              margin-right: 10px;
          }

          :hover{
            background: ${({ theme }) => theme.colourMaterialPrimaryHover};
          }

          .css-8je8zh-MuiTouchRipple-root{
              display: none;
          }

        }

    }
  }
`;

const SettingPanelScreen = styled.div``;

const TabBarContainer = styled(SettingPanelContainer)`
  display: inline-block;
`;

const TabBarWrapper = styled(SettingPanelWrapper)`
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
  padding: 10px 10px;

  .css-1ujnqem-MuiTabs-root {
    min-height: 0px;
  }
  .css-1aquho2-MuiTabs-indicator {
    display: none;
  }

  div {
    div {
      div {
        button {
          min-width: 127px;
        }
      }
    }
  }
`;
export {
  SettingPanelWrapper,
  SettingPanelContainer,
  SettingPanelScreen,
  TabBarContainer,
  TabBarWrapper,
};
