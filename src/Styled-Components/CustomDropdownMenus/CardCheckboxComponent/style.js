import styled from "styled-components";

export const CardCheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 14px;

  .Mui-checked {
    color: ${({ theme }) => theme.colourTextPrimary} !important;
  }
  .css-j204z7-MuiFormControlLabel-root {
    path {
      fill: ${({ theme }) => theme.colourTextPrimary};
    }
  }
`;
