import styled from "styled-components";

const FilterCard = styled.div`
  padding: 14px 10px;
  width: 100%;
  border-radius: 4px;
  color: ${({ theme }) => theme.colourMaterialPrimary};
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;
const MainCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  position: relative;
`;

const VehicleBox = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colourMaterialSecondary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.27px;
`;

const BatteryPercent = styled.div`
  display: flex;
  justify-content: center;
  .css-eglki6-MuiLinearProgress-root {
    margin-top: 5px;
    width: 24px;
    height: 12px;
    border: 0.75px solid ${({ theme }) => theme.colourMaterialBorder};
    border-radius: 3px;
    background: none;
    span {
      background: ${({ theme }) => theme.colourStategreyLight};
    }
  }
`;

const VehicleLiveTicket = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Divider = styled.div`
  height: 9px;
  border-right: 0.5px solid ${({ theme }) => theme.colourMaterialBorder};
`;
export { FilterCard, Divider, VehicleLiveTicket, VehicleBox, BatteryPercent, MainCard };
