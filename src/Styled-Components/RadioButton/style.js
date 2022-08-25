import styled from "styled-components";

const RadioboxWrapper = styled.div`
  display: inline-block;
  border-radius: 8px;

  .Mui-checked {
    color: ${({ theme }) => theme.colourBrandPrimary} !important;
  }

  .css-8je8zh-MuiTouchRipple-root {
    display: none;
  }

  .css-1jg3gx8-MuiButtonBase-root-MuiCheckbox-root {
    padding: 0px;
    margin-right: 5px;
  }

  label {
    margin-right: 0 !important;
    margin-left: 0 !important;

    span {
      color: ${({ theme }) => theme.colourTextPrimary};
      font-family: ${({ theme }) => theme.fontWorkSansRegular};
      font-size: ${({ theme }) => theme.fontSize_14};
      padding: 0px;

      :hover {
        background: none;
      }

      svg {
        width: 13px;
        height: 13px;
      }
    }
  }
`;

export { RadioboxWrapper };
