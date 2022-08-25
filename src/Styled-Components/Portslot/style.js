import styled from "styled-components";

const PortSlot = styled.div`
  display: inline-flex;
  width: 100%;
  border-radius: 4px;
  color: ${({ theme }) => theme.colourMaterialPrimary};
  background: ${({ theme }) => theme.colourMaterialPrimary};
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;
const MainPort = styled.div`
  padding: 24px;
  width: 70%;
  border-radius: 5px 0px 0px 5px;
`;
const Portbox = styled.div`
  display: inline-flex;
  padding-top: 12px;
  width: 30%;
  padding-right: 24px;
  border-radius: 0px 5px 5px 0px;
  justify-content: flex-end;
`;

const LayoutName = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align_items: center;
`;

const BatteryPer = styled.div`
  > span {
    position: relative;
    margin-left: 10px;
    margin-top: 8px;
    width: 24px;
    height: 13px;
    border: 0.75px solid ${({ theme }) => theme.colourMaterialBorder};
    border-radius: 3px;
    background: none;
    span {
      background: ${({ theme }) => theme.colourStategreyLight};
    }
  }
`;

const VehicleBoxport = styled.div`
  width: 53px;
  height: 53px;
  display: flex;
  border-radius: 4px;
  flex-direction: row;
  background: ${({ theme }) => theme.colourMaterialSecondary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 37px;
    height: 24px;
  }
`;
const Dockedmain = styled.div`
  display: inline-flex;
  border-radius: 4px;
  color: ${({ theme }) => theme.colourMaterialPrimary};
  gap: 48px;
  justify-content: space-between;
`;
const Dockedbox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Borderpartial = styled.div`
  height: 31px;
  border: 0.5px solid ${({ theme }) => theme.colourMaterialBorder};
`;

export {
  PortSlot,
  Dockedmain,
  Portbox,
  MainPort,
  Dockedbox,
  VehicleBoxport,
  LayoutName,
  BatteryPer,
  Borderpartial,
};
