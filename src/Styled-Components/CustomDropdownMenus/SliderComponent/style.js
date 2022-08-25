import styled from "styled-components";

export const SliderWrapper = styled.div`
  .css-14pt78w-MuiSlider-rail {
    background: ${({ theme }) => theme.colourMaterialBorder};
    height: 2px;
    opacity: 1;
  }
  .css-1tfve6q-MuiSlider-mark {
    background: ${({ theme }) => theme.colourMaterialBorder};
  }
  .css-6cwnna-MuiSlider-mark {
    background: ${({ theme }) => theme.colourMaterialReversePrimary};
  }
  .css-1gv0vcd-MuiSlider-track {
    background: ${({ theme }) => theme.colourMaterialReversePrimary};
    height: 0px;
  }
  .css-eg0mwd-MuiSlider-thumb {
    background: ${({ theme }) => theme.colourMaterialReversePrimary};
    border: 1px solid ${({ theme }) => theme.colourMaterialReversePrimaryHover};
    width: 14px;
    height: 14px;
    box-shadow: none !important;

    :before {
      box-shadow: none;
    }

    :hover {
      box-shadow: none;
    }
  }
  .css-187mznn-MuiSlider-root {
    color: ${({ theme }) => theme.colourMaterialReversePrimary};
  }
  .css-1kz0hui-MuiSlider-valueLabel {
    transform: translateY(-100%) scale(1);
    color: ${({ theme }) => theme.colourTextSecondary};
    font-family: ${({ theme }) => theme.fontWorkSansRegular};
    font-size: ${({ theme }) => theme.fontSize_10};
    background: none;
    top: 35px;

    ::before {
      display: none;
    }
  }
`;
