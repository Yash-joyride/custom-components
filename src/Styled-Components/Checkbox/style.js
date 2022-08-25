import styled from "styled-components";

const CheckboxWrapper = styled.div`
  width: 12px;
  height: 12px;
  display: inline-flex;
  label {
    span {
      padding: 0px;
      > div {
        display: flex;
      }
    }
  }

  .css-1m9pwf3 {
    width: 12px;
    height: 12px;
    position: unset;
  }
  .Mui-checked {
    color: ${({ theme }) => theme.colourBrandPrimary} !important;
  }
  .css-i4bv87-MuiSvgIcon-root {
    width: 12px;
    height: 12px;
  }
  .css-8je8zh-MuiTouchRipple-root {
    display: none;
  }
  .css-1jg3gx8-MuiButtonBase-root-MuiCheckbox-root:hover {
    background: none;
  }
`;

const ActiveCheckboxWrapper = styled.div`
display: inline-flex;
  .Mui-checked {
    color: ${({ theme }) => theme.colourBrandPrimary} !important;
  }

  .css-8je8zh-MuiTouchRipple-root{
    display: none;
  }

  .css-1jg3gx8-MuiButtonBase-root-MuiCheckbox-root {
    padding: 0px;
    margin-right: 5px;
  }
  }

  label {
    margin-right: 0 !important;
    margin-left: 0 !important;

    span {
      color: ${({ theme }) => theme.colourTextPrimary};
      font-family: ${({ theme }) => theme.fontWorkSansRegular};
      font-size: ${({ theme }) => theme.fontSize_14};

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

const DisabledCheckboxWrapper = styled(ActiveCheckboxWrapper)``;

export { CheckboxWrapper, ActiveCheckboxWrapper, DisabledCheckboxWrapper };
