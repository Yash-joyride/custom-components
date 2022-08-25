import React from "react";
import { VehicleNameTableCell, VehicleNameSmallTableCell, ButtonTableCell, ButtonSmallTableCell, ActiveTagSmallTableCell, ActiveTagTableCell, GeoZoneSmallTableCell, GeoZoneTableCell, RadioColourSmallTableCell, RadioColourTableCell, BatterySmallTableCell, BatteryTableCell } from "../Table";
import { TagActive } from "../../TagStory/tag";
import { TableCellLockedActiveTag } from "../../../Styled-Components/Table/TableCell";
import { BatteryComponent } from "../../../Styled-Components/Table/BatteryComponent";
import { ParkingIcon } from "../../../Styled-Components/Icons/ParkingIcon";
import { SmallPrimaryButton } from "../../../Styled-Components/Button/style";

export default {
  title: "Joyride/Table/Table Cell ",
  component: VehicleNameTableCell,
};

export const TableCellVehicleName = () => <VehicleNameTableCell text="Vehicle Name" />;
export const SmallTableCellVehicleName = () => <VehicleNameSmallTableCell text="Vehicle Name" />;
export const TableCellDateNTime = () => <VehicleNameTableCell text="00/00/0000 00:00AM" />;
export const SmallTableCellDateNTime = () => <VehicleNameSmallTableCell text="00/00/0000 00:00AM" />;
export const TableCellButton = () => <ButtonTableCell component={<SmallPrimaryButton>Button</SmallPrimaryButton>}></ButtonTableCell>;
export const SmallTableCellButton = () => <ButtonSmallTableCell component={<SmallPrimaryButton>Button</SmallPrimaryButton>}></ButtonSmallTableCell>;
export const TableCellActiveButton = () => <ActiveTagTableCell component={<TagActive colour="rgba(149, 149, 149, 0.12)">Active</TagActive>}></ActiveTagTableCell>;
export const SmallTableCellActiveButton = () => <ActiveTagSmallTableCell component={<TagActive colour="rgba(149, 149, 149, 0.12)">Active</TagActive>}></ActiveTagSmallTableCell>;
export const TableCellGeoZone = () => <GeoZoneTableCell text="Geo Zone" icon={<ParkingIcon />}></GeoZoneTableCell>;
export const SmallTableCellGeoZone = () => <GeoZoneSmallTableCell text="Geo Zone" icon={<ParkingIcon />}></GeoZoneSmallTableCell>;
export const TableCellRadioColour = () => <RadioColourTableCell text="#000000" />;
export const SmallTableCellRadioColour = () => <RadioColourSmallTableCell text="#000000" />;
export const TableCellBattery = () => <BatteryTableCell component={<BatteryComponent battery={80} />}></BatteryTableCell>;
export const SmallTableCellBattery = () => <BatterySmallTableCell component={<BatteryComponent battery={80} />}></BatterySmallTableCell>;
