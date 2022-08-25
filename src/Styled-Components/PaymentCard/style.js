import styled from "styled-components";

export const AddPaymentMethodWrapper = styled.div`
  width: fit-content;
  padding: 20px;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  border-radius: 8px;
  cursor: pointer;
  border: 1px dashed ${({ theme }) => theme.colourMaterialBorder};
`;

export const VisaCardWrapper = styled.div`
  width: 296px;
  height: 172px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-radius: 8px;
  filter: drop-shadow(0px -3px 20px rgba(0, 0, 0, 0.1));
  padding: 20px 20px 16px;
`;
