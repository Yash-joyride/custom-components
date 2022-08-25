// Table Cell

const TableCellVehicleNameWrapper = styled(BorderTableHeaderWrapper)`
  width: auto;
  height: auto;
  background: transparent;
  border-right: none;
  gap: 20px;
  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }
  .bUBVTv table tr td > div {
    :hover {
      background: ${({ theme }) => theme.colourMaterialPrimaryHover};
    }
  }
`;

const TableCellContainer = styled(TableCellVehicleNameWrapper)`
  padding: 18px 40px;
`;

const SmallTableCellVehicleNameWrapper = styled(TableCellVehicleNameWrapper)`
  padding: 18px 40px;
`;

const TableCellButtonWrapper = styled(TableCellVehicleNameWrapper)`
  padding: 9px 40px;
`;
const TableCellActiveButtonWrapper = styled(TableCellVehicleNameWrapper)`
  padding: 14px 40px;
`;

const TableCellBatteryWrapper = styled(TableCellVehicleNameWrapper)`
  padding: 20px 40px;
`;

const TableCellColourWrapper = styled.div`
  background: ${({ theme }) => theme.colourStateInfoTintLight};
  color: ${({ theme }) => theme.colourTextPrimary};
  width: 112px;
  height: 27px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};

  input {
    width: 14px;
    height: 19px;
  }
  svg {
    width: 14px;
    height: 19px;
  }
  .css-j204z7-MuiFormControlLabel-root {
    margin-left: 0px;
    margin-right: 0px;
    gap: 10px;
  }
  .css-8je8zh-MuiTouchRipple-root {
    display: none;
  }

  .css-146k4iu-MuiButtonBase-root-MuiRadio-root {
    padding: 0px;
    :hover {
      background: none;
    }
  }
`;

const TableCellGeozoneWrapper = styled.div`
  background: ${({ theme }) => theme.colourStateInfoTintLight};
  color: ${({ theme }) => theme.colourTextPrimary};
  width: 112px;
  height: 27px;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};

  svg {
    width: 12px;
    height: 12px;
  }
`;

const TableCellTextWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};

  font-size: ${({ theme }) => theme.fontSize14};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

const SmallTableCellTextWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};

  font-size: ${({ theme }) => theme.fontSize14};
  color: ${({ theme }) => theme.colourTextPrimary};
`;
