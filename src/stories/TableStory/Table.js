import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { BorderTableHeader, SmallBorderTableHeader, TableHeader, SmallTableHeader, BorderLockedTableHeader, SmallLockedBorderTableHeader, LockedTableHeader, SmallLockedTableHeader, } from "../../Styled-Components/Table/TableHeaders";
import { TableCellVehicleName,SmallTableCellVehicleName,TableCellButton, SmallTableCellButton,  SmallTableCellActiveTag, TableCellActiveTag, SmallTableCellGeoZone, TableCellGeoZone, TableCellRadioColour, SmallTableCellRadioColour, SmallTableCellBattery, TableCellBattery } from "../../Styled-Components/Table/TableCell";
import { LoadingTableContainer, EmptyTableContainer, TableContainer } from "../../Styled-Components/Table";

const TableHeaderBordered = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <BorderTableHeader text={text} />
    </ThemeProvider>
  );
};

const SmallTableHeaderBordered = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallBorderTableHeader text={text} />
    </ThemeProvider>
  );
};

const NormalTableHeader = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <TableHeader text={text} />
    </ThemeProvider>
  );
};

const SmallNormalTableHeader = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallTableHeader text={text} />
    </ThemeProvider>
  );
};

const LockedTableHeaderBordered = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <BorderLockedTableHeader text={text} />
    </ThemeProvider>
  );
};

const SmallLockedTableHeaderBordered = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallLockedBorderTableHeader text={text} />
    </ThemeProvider>
  );
};

const LockedNormalTableHeader = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <LockedTableHeader text={text} />
    </ThemeProvider>
  );
};

const SmallLockedNormalTableHeader = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallLockedTableHeader text={text} />
    </ThemeProvider>
  );
};

const VehicleNameTableCell = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <TableCellVehicleName text={text} />
    </ThemeProvider>
  );
};

const VehicleNameSmallTableCell = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallTableCellVehicleName text={text} />
    </ThemeProvider>
  );
};

const ButtonTableCell = ({ component }) => {
  return (
    <ThemeProvider theme={theme}>
      <TableCellButton component={component} />
    </ThemeProvider>
  );
};

const ButtonSmallTableCell = ({ component }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallTableCellButton component={component} />
    </ThemeProvider>
  );
};


const ActiveTagTableCell = ({ component }) => {
  return (
    <ThemeProvider theme={theme}>
      <TableCellActiveTag component={component} />
    </ThemeProvider>
  );
};

const ActiveTagSmallTableCell = ({ component }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallTableCellActiveTag component={component} />
    </ThemeProvider>
  );
};

const GeoZoneTableCell = ({ text,icon }) => {
  return (
    <ThemeProvider theme={theme}>
      <TableCellGeoZone text={text} icon={icon}/>
    </ThemeProvider>
  );
};

const GeoZoneSmallTableCell = ({ text,icon }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallTableCellGeoZone text={text} icon={icon}/>
    </ThemeProvider>
  );
};

const RadioColourTableCell = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <TableCellRadioColour text={text} />
    </ThemeProvider>
  );
};

const RadioColourSmallTableCell = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallTableCellRadioColour text={text} />
    </ThemeProvider>
  );
};

const BatteryTableCell = ({ component }) => {
  return (
    <ThemeProvider theme={theme}>
      <TableCellBattery component={component} />
    </ThemeProvider>
  );
};

const BatterySmallTableCell = ({ component }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallTableCellBattery component={component} />
    </ThemeProvider>
  );
};

const Table_Container = () => {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer />
    </ThemeProvider>
  );
};

const Loading_Table_Container = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoadingTableContainer />
    </ThemeProvider>
  );
};

const Empty_Table_Container = () => {
  return (
    <ThemeProvider theme={theme}>
      <EmptyTableContainer />
    </ThemeProvider>
  );
};

export { TableHeaderBordered, SmallTableHeaderBordered, NormalTableHeader, SmallNormalTableHeader, LockedTableHeaderBordered, SmallLockedTableHeaderBordered, LockedNormalTableHeader, SmallLockedNormalTableHeader, VehicleNameTableCell, Table_Container, Loading_Table_Container, Empty_Table_Container, VehicleNameSmallTableCell, ButtonTableCell, ButtonSmallTableCell, ActiveTagSmallTableCell, ActiveTagTableCell, GeoZoneSmallTableCell, GeoZoneTableCell, RadioColourSmallTableCell, RadioColourTableCell, BatterySmallTableCell, BatteryTableCell };
