import styled from "styled-components";

export const BatteryPercent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  > span {
    position: relative;
    width: 32px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    border-radius: 3px;
    background: none;
    span {
      background: ${({ theme }) => theme.colourStategreyLight};
    }
  }
`;
