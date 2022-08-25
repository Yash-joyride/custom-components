import styled from "styled-components";

const LockWrapperIcon = styled.div`
  width: 19px;
  height: 19px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  left: -5px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-radius: 4px;
`;

export default LockWrapperIcon;
