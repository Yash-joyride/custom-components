import styled from "styled-components";

const MaintananceIconWrapper = styled.div`
  width: 20px;
  height: 14px;
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

export default MaintananceIconWrapper;
