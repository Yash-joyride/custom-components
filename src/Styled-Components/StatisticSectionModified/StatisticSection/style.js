import styled from "styled-components";

export const StatisticSectionContainer = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 55px 40px 40px 40px;
`;

export const StatisticSectionWrapper = styled.div`
  position: relative;

  .css-10mg1vw-MuiStepper-root {
    width: 100%;
    gap: 20px;
  }

  .css-n7tliy-MuiStep-root {
    padding: 0px;
    border-right: 1px solid ${({ theme }) => theme.colourMaterialBorder};

    :last-child {
      border: none;
    }
  }

  .css-zpcwqm-MuiStepConnector-root {
    display: none;
  }

  .css-4zu71m-MuiPaper-root-MuiMobileStepper-root {
    width: fit-content;
    padding: 0px;
    top: 0px;
    bottom: 0px;
    left: auto;
    right: 0px;
    display: inline-grid;
    gap: 10px;
    position: absolute;
  }

  .css-1mivp8c-MuiButtonBase-root-MuiButton-root {
    padding: 0px;
    min-width: 0px;
    width: 37px;
    height: 37px;
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    background: ${({ theme }) => theme.colourMaterialPrimary};

    > div {
      > svg {
        > path {
          fill: ${({ theme }) => theme.colourTextPrimary};
        }
      }
    }

    :hover {
      background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
    }
  }

  .css-1mivp8c-MuiButtonBase-root-MuiButton-root.Mui-disabled {
    cursor: not-allowed !important;
    background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
    > div {
      > svg {
        > path {
          fill: ${({ theme }) => theme.colourTextDisabled};
        }
      }
    }
  }

  .css-1384nzf-MuiMobileStepper-dots {
    display: none;
  }

  .css-8je8zh-MuiTouchRipple-root {
    display: none;
  }
`;
