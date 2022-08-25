import styled from "styled-components";

const ToggleButtonWrapper = styled.div`
  display: inline-block;

  label {
    margin-left: 0px;
    margin-right: 0px;

    .css-julti5-MuiSwitch-root {
      width: 52px;
      height: 26px;
      padding: 0px;
      border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
      border-radius: 30px;
    }

    .css-1j7cuh1-MuiButtonBase-root-MuiSwitch-switchBase {
      padding: 1.5px;
      :hover {
        background: none;
      }
    }

    .css-1j7cuh1-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked {
      color: ${({ theme }) => theme.colourMaterialPrimary};
      transform: translateX(26px);
    }

    .css-jsexje-MuiSwitch-thumb {
      width: 21px;
      height: 21px;
      box-shadow: none;
    }

    .css-1j7cuh1-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
      + .MuiSwitch-track {
      border-radius: 50px;
      background: ${({ theme }) => theme.colourBrandPrimary};
      opacity: 1;
    }

    .css-1yjjitx-MuiSwitch-track {
      border-radius: 50px;
      background: ${({ theme }) => theme.colourMaterialReversePrimary};
      opacity: 1;
    }

    .css-ahj2mt-MuiTypography-root {
      font-family: ${({ theme }) => theme.fontWorkSansRegular};
      font-size: ${({ theme }) => theme.fontSize_14};
      margin-left: 10px;
    }
  }
`;

export { ToggleButtonWrapper };
