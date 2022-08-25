import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { TableCellContainer, TableCellVehicleNameWrapper, SmallTableCellTextWrapper, TableCellButtonWrapper, TableCellActiveButtonWrapper, TableCellBatteryWrapper, TableCellColourWrapper, TableCellTextWrapper, TableCellGeozoneWrapper, SmallTableCellVehicleNameWrapper } from "../style";
import CheckboxComponent from "../../Checkbox";
import { SmallPrimaryButton } from "../../Button/style";
import { AddActiveTag } from "../../Tags/style";
import { ParkingIcon } from "../../Icons/ParkingIcon";
import AddIcon from "../../Icons/AddIcon";

const TableCellVehicleName = ({ text }) => {
  return (
    <TableCellContainer>
      <CheckboxComponent />
      <TableCellTextWrapper>{text}</TableCellTextWrapper>
    </TableCellContainer>
  );
};

const SmallTableCellVehicleName = ({ text }) => {
  return (
    <SmallTableCellVehicleNameWrapper>
      <SmallTableCellTextWrapper>{text}</SmallTableCellTextWrapper>
    </SmallTableCellVehicleNameWrapper>
  );
};

const TableCellButton = ({ component }) => {
  return (
    <TableCellButtonWrapper>
      <CheckboxComponent />
      {component}
    </TableCellButtonWrapper>
  );
};

const SmallTableCellButton = ({ component }) => {
  return <TableCellButtonWrapper>{component}</TableCellButtonWrapper>;
};

const TableCellActiveTag = ({ component }) => {
  return (
    <TableCellActiveButtonWrapper>
      <CheckboxComponent />
      {component}
    </TableCellActiveButtonWrapper>
  );
};

const SmallTableCellActiveTag = ({ component }) => {
  return <TableCellActiveButtonWrapper>{component}</TableCellActiveButtonWrapper>;
};

const TableCellGeoZone = ({ icon, text }) => {
  return (
    <TableCellActiveButtonWrapper>
      <CheckboxComponent />
      <TableCellGeozoneWrapper>
        {icon}
        {text}
      </TableCellGeozoneWrapper>
    </TableCellActiveButtonWrapper>
  );
};

const SmallTableCellGeoZone = ({ icon, text }) => {
  return (
    <TableCellActiveButtonWrapper>
      <TableCellGeozoneWrapper>
        {icon}
        {text}
      </TableCellGeozoneWrapper>{" "}
    </TableCellActiveButtonWrapper>
  );
};

const TableCellRadioColour = ({ text }) => {
  return (
    <TableCellActiveButtonWrapper>
      <CheckboxComponent />
      <TableCellColourWrapper>
        <FormControlLabel value={text} control={<Radio />} label={text} />
      </TableCellColourWrapper>
    </TableCellActiveButtonWrapper>
  );
};

const SmallTableCellRadioColour = ({ text }) => {
  return (
    <TableCellActiveButtonWrapper>
      <TableCellColourWrapper>
        <FormControlLabel value={text} control={<Radio />} label={text} />
      </TableCellColourWrapper>
    </TableCellActiveButtonWrapper>
  );
};

const TableCellBattery = ({ component }) => {
  return (
    <TableCellBatteryWrapper>
      <CheckboxComponent />
      {component}
    </TableCellBatteryWrapper>
  );
};

const SmallTableCellBattery = ({ component }) => {
  return <TableCellBatteryWrapper>{component}</TableCellBatteryWrapper>;
};

//BEFORE

const TableCellLockedVehicleName = ({ text }) => {
  return (
    <TableCellVehicleNameWrapper>
      <TableCellTextWrapper>{text}</TableCellTextWrapper>
    </TableCellVehicleNameWrapper>
  );
};

const TableCellLockedActiveTag = ({ colour, children }) => {
  return (
    <TableCellVehicleNameWrapper>
      <TableCellTextWrapper>
        <AddActiveTag colour={colour}>
          <AddIcon />
          {children}
        </AddActiveTag>
      </TableCellTextWrapper>
    </TableCellVehicleNameWrapper>
  );
};

const TableCellColour = ({ text }) => {
  return (
    <TableCellVehicleNameWrapper>
      <TableCellTextWrapper>
        <TableCellColourWrapper>
          <FormControlLabel value={text} control={<Radio />} label={text} />
        </TableCellColourWrapper>
      </TableCellTextWrapper>
    </TableCellVehicleNameWrapper>
  );
};

const TableCellLockedGeoZone = ({ text }) => {
  return (
    <TableCellVehicleNameWrapper>
      <TableCellTextWrapper>
        <TableCellGeozoneWrapper>
          <ParkingIcon />
          {text}
        </TableCellGeozoneWrapper>
      </TableCellTextWrapper>
    </TableCellVehicleNameWrapper>
  );
};

const TableCellLockedAction = ({ text }) => {
  return (
    <TableCellVehicleNameWrapper>
      <TableCellTextWrapper>
        <SmallPrimaryButton> {text} </SmallPrimaryButton>
      </TableCellTextWrapper>
    </TableCellVehicleNameWrapper>
  );
};

export { TableCellLockedAction, TableCellLockedGeoZone, TableCellVehicleName, TableCellButton, TableCellLockedVehicleName, TableCellLockedActiveTag, TableCellColour, SmallTableCellVehicleName, SmallTableCellButton, SmallTableCellActiveTag, TableCellActiveTag, SmallTableCellGeoZone, TableCellGeoZone, SmallTableCellRadioColour, TableCellRadioColour, SmallTableCellBattery, TableCellBattery };
