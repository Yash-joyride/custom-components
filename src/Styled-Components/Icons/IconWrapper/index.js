import styled from "styled-components";

const IconWrapper = styled.div`
  .AddWrapper {
    display: inline-flex;
    align-items: center;
  }
  .AgencyPickupIconWrapper {
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
  }
  .FlagIconWrapper {
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
  }
  .LockWrapperIcon {
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
  }
  .MaintananceIconWrapper {
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
  }
  .RebalanceIconWrapper {
    width: 21px;
    height: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colourMaterialPrimary};
    border-radius: 4px;
    position: absolute;
    top: -3px;
    left: 33px;
    z-index: 99;
  }
  .TicketIconWrapper {
    width: 22px;
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
  }
`;
export default IconWrapper;
