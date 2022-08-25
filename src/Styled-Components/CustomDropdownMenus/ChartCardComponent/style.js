import styled from "styled-components";

export const ChartCardWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
`;

export const ChartCardIconWrapper = styled.div`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
`;

export const ChartCardContentWrapper = styled.div`
  display: inline-grid;
  gap: 5px;
`;

export const ChartCardContentHeaderWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const ChartCardContentSubHeaderWrapper = styled(
  ChartCardContentHeaderWrapper
)`
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
`;
