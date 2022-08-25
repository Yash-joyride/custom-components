import styled from "styled-components";

const VehicleGroupNumberWrapper = styled.div`
  position: absolute;

  color: ${({ theme }) => theme.colourTextPrimary};
  font-size: ${({ theme }) => theme.fontSize_14};
  font-weight: ${({ theme }) => theme.fontWeight_400};
`;

export default VehicleGroupNumberWrapper;
