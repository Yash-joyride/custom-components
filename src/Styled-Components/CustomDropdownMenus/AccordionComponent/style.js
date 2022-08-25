import styled from "styled-components";

export const AccordionWrapper = styled.div`
  .css-1ebavjp-MuiPaper-root-MuiAccordion-root {
    box-shadow: none;
  }
  .css-1sxnyuq-MuiButtonBase-root-MuiAccordionSummary-root {
    min-height: auto !important;
    padding: 14px 24px;
  }
  .css-o4b71y-MuiAccordionSummary-content.Mui-expanded {
    margin: 0px;
  }
  .css-o4b71y-MuiAccordionSummary-content {
    margin: 0px;
    p {
      font-family: ${({ theme }) => theme.fontWorkSansMedium};
      font-size: ${({ theme }) => theme.fontSize_14};
      color: ${({ theme }) => theme.colourTextPrimary};
    }
  }
  .css-15v22id-MuiAccordionDetails-root {
    padding: 0px;

    > div {
      padding: 14px 24px;
    }
  }
`;

export const AccordionPanelWrapper = styled.div`
  padding: 14px 0px;
  display: block;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  }
`;
