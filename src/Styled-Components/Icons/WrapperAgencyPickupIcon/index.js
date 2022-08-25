import styled from "styled-components";

const AgencyPickupIconWrapper = styled.div`
  width: 20px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-radius: 4px;
  position: absolute;
  top: -3px;
  left: 33px;
  z-index: 99;
`;

export default AgencyPickupIconWrapper;
