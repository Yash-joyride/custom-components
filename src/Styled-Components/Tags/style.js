import styled from "styled-components";

const ActiveTag = styled.div`
  background: ${({ colour }) => colour};
  color: ${({ theme }) => theme.colourTextPrimary};
  width: 71px;
  height: 27px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};
`;

const AddActiveTag = styled(ActiveTag)`
  background: ${({ colour }) => colour} !important;

  width: 95px;
  justify-content: space-evenly;

  svg {
    path {
      color: ${({ theme }) => theme.colourTextPrimary};
    }
  }
`;

const PickupTag = styled.div`
  background: ${({ theme }) => theme.colourMaterialReversePrimary};
  width: 36px;
  height: 36px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colourMaterialReversePrimaryHover};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
  }
`;

const IncrementalAnalyticStatusTag = styled.div`
  width: 55px;
  height: 22px;
  background: ${({ theme }) => theme.colourStategreyLight};
  border-radius: 4px;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_12};
  letter-spacing: 0.75px;

  > div {
    display: inline-flex;
    align-items: center;
    svg {
      height: 12px;
      font-family: ${({ theme }) => theme.fontWorkSansMedium};
      font-size: ${({ theme }) => theme.fontSize_12};
    }
  }
`;

const DecrementalAnalyticStatusTag = styled.div`
  width: 55px;
  height: 22px;
  background: ${({ theme }) => theme.colourStateErrorTintLight};
  border-radius: 4px;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_12};
  letter-spacing: 0.75px;

  svg {
    height: 12px;
    font-family: ${({ theme }) => theme.fontWorkSansMedium};
    font-size: ${({ theme }) => theme.fontSize_12};
  }
`;

const DropoffTag = styled.div``;

export {
  ActiveTag,
  AddActiveTag,
  PickupTag,
  DropoffTag,
  IncrementalAnalyticStatusTag,
  DecrementalAnalyticStatusTag,
};
