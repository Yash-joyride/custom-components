import styled from "styled-components";

const BooleanFilterWrapper = styled.div`
  display: inline-block;

  .Mui-checked {
    color: ${({ theme }) => theme.colourBrandPrimary} !important;
  }

  .css-1jg3gx8-MuiButtonBase-root-MuiCheckbox-root {
    padding: 0px;
    padding-right: 10px;
    :hover {
      background: none;
    }
  }
  .css-8je8zh-MuiTouchRipple-root {
    display: none;
  }

  label {
    background: ${({ theme }) => theme.colourMaterialPrimary};
    width: 108px;
    height: 47px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    border-radius: 4px;
    margin-right: 0 !important;
    margin-left: 0 !important;

    :hover {
      background: ${({ theme }) => theme.colourMaterialPrimaryHover};
    }

    input {
      width: 13px;
      height: 13px;
    }

    span {
      color: ${({ theme }) => theme.colourTextPrimary};
      font-family: ${({ theme }) => theme.fontWorkSansRegular};
      font-size: ${({ theme }) => theme.fontSize_14};

      svg {
        width: 13px;
        height: 13px;
      }
    }
  }
`;

export { BooleanFilterWrapper };
