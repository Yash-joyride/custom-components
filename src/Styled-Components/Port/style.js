import styled from "styled-components";

const Port = styled.div`
  padding: 24px;
  width: 100%;
  border-radius: 4px;
  color: ${({ theme }) => theme.colourMaterialPrimary};
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  border: 1px dashed ${({ theme }) => theme.colourMaterialBorder};
`;

export { Port };
